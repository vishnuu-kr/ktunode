---
title: "Microwave Semiconductor Devices : Principle of operation of Tunnel diode, Gunn diode- Different modes."
subject: "MICROWAVES & ANTENNAS"
module: "Module 1: Microwaves: Electromagnetic spectrum, Frequency Bands, Features of microwaves, advantages & disadvantages, Applications, Atmospheric propagation effects."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feda5"
status: "completed"
scrapedAt: "2026-05-23T18:01:37.149Z"
---
# MICROWAVES & ANTENNAS: Module 1 - Microwave Semiconductor Devices

## Topic: Microwave Semiconductor Devices: Principle of Operation of Tunnel Diode, Gunn Diode - Different Modes

### Learning Outcomes Covered:
*   Explain the basic mechanism of operation of microwave sources (CO1). (Focus on Tunnel Diode and Gunn Diode as microwave sources)

---

### Introduction to Microwave Semiconductor Devices

Microwave semiconductor devices are crucial for generating, amplifying, and processing microwave signals. Unlike traditional semiconductor devices that rely on diffusion and drift currents, microwave devices often utilize quantum mechanical effects and specialized material properties to achieve high-frequency operation. This section focuses on two fundamental microwave semiconductor devices: the Tunnel Diode and the Gunn Diode.

---

### 1. Tunnel Diode (Esaki Diode)

**Key Concepts:**

*   **Negative Differential Resistance (NDR):** A region in the current-voltage (I-V) characteristic where an increase in voltage leads to a decrease in current. This is the fundamental principle behind NDR devices, enabling them to oscillate and amplify at microwave frequencies.
*   **Quantum Mechanical Tunneling:** A phenomenon where an electron can pass through a potential barrier even if its energy is less than the barrier height. This occurs due to the wave-like nature of electrons.
*   **Doping Concentration:** Tunnel diodes are heavily doped compared to standard diodes. This results in a very narrow depletion region and a thin potential barrier.

**Princ of Operation:**

The Tunnel Diode is a PN junction diode fabricated from heavily doped semiconductor materials (typically Gallium Arsenide - GaAs or Germanium - Ge). The heavy doping leads to a very thin depletion region and a narrow potential barrier.

The operation is explained by the quantum mechanical tunneling of electrons across this barrier. Let's analyze the I-V characteristics:

1.  **Forward Bias (0 < V < Vp):**
    *   As the forward voltage ($V$) increases from zero, electrons from the conduction band of the N-side can tunnel into the empty valence band states of the P-side.
    *   At low forward bias, there's a significant overlap between the conduction band of the N-side and the valence band of the P-side, leading to a rapid increase in tunneling current.
    *   **Peak Current ($I_p$):** Occurs at a small forward voltage ($V_p$) where the overlap of energy bands is maximum, allowing the most tunneling.

2.  **Negative Differential Resistance (NDR) Region (Vp < V < Vv):**
    *   As the forward voltage is increased beyond $V_p$, the conduction band of the N-side moves to higher energy levels, and the valence band of the P-side moves to lower energy levels.
    *   This causes the overlap between available electron states on the N-side and empty states on the P-side to decrease.
    *   Consequently, the tunneling current ($I$) starts to decrease even though the voltage ($V$) is increasing. This is the **Negative Differential Resistance (NDR)** region.
    *   **Valley Current ($I_v$):** The minimum current in the NDR region occurs at the valley voltage ($V_v$).

3.  **Forward Bias (V > Vv):**
    *   Beyond the valley voltage ($V_v$), the diode starts to behave like a conventional PN junction diode.
    *   Electrons from the conduction band of the N-side now tunnel into the forward-biased depletion region, and eventually, diffusion current (carrier injection) becomes dominant.
    *   The current increases again with voltage.

**I-V Characteristics of a Tunnel Diode:**

(Imagine a graph with Voltage on the x-axis and Current on the y-axis)

*   **Origin (0,0)**
*   **Rising portion:** Current increases sharply from 0 to $I_p$ at $V_p$.
*   **NDR Region:** Current decreases from $I_p$ at $V_p$ to $I_v$ at $V_v$. This is the crucial region for microwave applications.
*   **Second rising portion:** Current increases again for $V > V_v$, resembling a normal diode.

**Key Parameters:**

*   **Peak Voltage ($V_p$):** Voltage at which peak current occurs.
*   **Peak Current ($I_p$):** Maximum current in the NDR region.
*   **Valley Voltage ($V_v$):** Voltage at which valley current occurs.
*   **Valley Current ($I_v$):** Minimum current in the NDR region.
*   **NDR Resistance ($R_{NDR}$):** The negative slope in the NDR region ($R_{NDR} = \Delta V / \Delta I < 0$).
*   **Peak-to-Valley Current Ratio (PVCR):** $I_p / I_v$. A higher PVCR generally indicates better performance.

**Applications:**

*   **Oscillators:** Due to the NDR region, tunnel diodes can be used as active elements in resonant circuits to produce microwave oscillations. The frequency of oscillation is determined by the external resonant circuit.
*   **Amplifiers:** By terminating a transmission line with a tunnel diode biased in its NDR region, amplification can be achieved.
*   **High-speed Switching Circuits:** Their fast switching speed makes them suitable for certain digital applications.

**Important Points to Remember (Tunnel Diode):**

*   The NDR is a quantum mechanical effect (tunneling).
*   Heavy doping is essential for a narrow depletion region and NDR.
*   The NDR region is the key for oscillator and amplifier applications.
*   The external circuit determines the oscillation frequency.

---

### 2. Gunn Diode

**Key Concepts:**

*   **Bulk Negative Differential Resistance (NDR):** Unlike the tunnel diode, the NDR in a Gunn diode arises from properties of the bulk semiconductor material itself, specifically due to the transfer of electrons between different energy valleys in the conduction band.
*   **Gunn Effect:** The phenomenon responsible for the NDR in certain semiconductors.
*   **Electron Transfer:** In semiconductors like GaAs, the conduction band has multiple valleys. At high electric fields, electrons can gain enough energy to transfer from the central (low-mobility) valley to the upper (high-mobility) valleys. This transfer reduces the average electron velocity, leading to NDR.
*   **Doping Profile:** The doping concentration is typically uniform or gradually varied, and the device length is critical.

**Princ of Operation:**

The Gunn Diode is a two-terminal semiconductor device made from materials exhibiting the Gunn effect, most commonly Gallium Arsenide (GaAs), Indium Phosphide (InP), and Cadmium Telluride (CdTe). It does *not* have a PN junction.

The operation is based on the **electron transfer mechanism** in the conduction band of these materials:

1.  **Low Electric Field:**
    *   At low electric fields, electrons primarily reside in the central valley of the conduction band, which has a low effective mass and high mobility.
    *   The current increases linearly with the electric field, obeying Ohm's law.

2.  **High Electric Field and Electron Transfer:**
    *   As the electric field increases, electrons gain kinetic energy.
    *   In materials like GaAs, the conduction band has a central valley (Γ valley) and higher energy satellite valleys (L valleys) with higher effective mass and lower mobility.
    *   When the electric field becomes sufficiently high (e.g., around 3.2 kV/cm for GaAs), electrons can gain enough energy to transfer from the low-mass, high-mobility Γ valley to the high-mass, low-mobility L valleys.
    *   This transfer of a significant number of carriers to lower mobility states causes the average drift velocity of electrons to decrease with increasing electric field.

3.  **Negative Differential Resistance (NDR):**
    *   This decrease in electron velocity with increasing electric field results in a decrease in current, creating the **Negative Differential Resistance (NDR)** region in the diode's I-V characteristic.

**I-V Characteristics of a Gunn Diode:**

(Imagine a graph with Electric Field or Voltage on the x-axis and Current on the y-axis)

*   **Initial Rise:** Current increases with increasing electric field/voltage.
*   **NDR Region:** Current decreases as the electric field/voltage further increases, exhibiting NDR.
*   **Saturation Current:** The current saturates at a certain level.

**Modes of Operation of a Gunn Diode:**

The Gunn diode can operate in different modes depending on the external circuit and the device parameters. The primary modes are characterized by the formation and propagation of **domains** of high electric field.

1.  **Low-Field Mode (Ohmic Mode):**
    *   Occurs when the applied voltage is low enough that the electric field in the device remains below the threshold field required for electron transfer.
    *   The diode behaves like a resistor.

2.  **Transit-Time Mode (D.O.S.T. - Drift of Space Charge):**
    *   This is the most common mode for microwave oscillation.
    *   When the applied voltage is increased to the point where the electric field exceeds the threshold field, a region of high electric field, called a **domain**, forms near the cathode.
    *   This domain is typically a dipole layer: a region of depleted electrons and a region of accumulated electrons in the anode side.
    *   The domain propagates through the device towards the anode at the electron drift velocity.
    *   As the domain reaches the anode, it dissipates, and the electric field across the device momentarily drops.
    *   This cycle of domain formation, propagation, and dissipation causes a periodic variation in current, leading to oscillations.
    *   The frequency of oscillation is approximately determined by the transit time of the domain across the device: $f \approx v_d / L$, where $v_d$ is the electron drift velocity and $L$ is the device length.

3.  **Limited Space-Charge Accumulation (LSA) Mode:**
    *   In this mode, the applied voltage is such that the space charge formed by the domain does not grow to a large extent before the field reverses due to oscillations.
    *   The electric field across the device remains relatively uniform, and the NDR region is effectively utilized over the entire device length.
    *   This mode allows for higher power output and potentially higher efficiency compared to the transit-time mode.
    *   It requires a carefully designed external resonant circuit and specific operating conditions.

4.  **High-Field Domain Mode:**
    *   In this mode, the electric field is high enough that the domain is fully formed and persists for a significant portion of the cycle.
    *   This can lead to lower operating frequencies and can be undesirable if the goal is efficient oscillation at microwave frequencies.

**External Circuit Considerations for Gunn Diodes:**

*   **Resonant Cavity:** Gunn diodes are typically placed in a resonant cavity. The cavity determines the operating frequency by providing a positive feedback mechanism.
*   **Bias Circuit:** A proper DC bias is required to operate the diode in its NDR region.
*   **Tuning:** The frequency of oscillation can be tuned by adjusting the resonant frequency of the cavity.

**Applications:**

*   **Microwave Oscillators:** The primary application of Gunn diodes is in generating microwave signals for radar, communication systems, and electronic countermeasures.
*   **Amplifiers:** Gunn diodes can also be used as amplifiers in microwave circuits, though their use as oscillators is more common.
*   **Transferred Electron Logic Devices (TELDs):** Used in high-speed digital logic circuits.

**Important Points to Remember (Gunn Diode):**

*   Operates based on the **Gunn effect** (electron transfer between valleys).
*   **No PN junction** is involved; it's a bulk effect.
*   Requires materials like GaAs or InP.
*   Key feature is the **Negative Differential Resistance (NDR)**.
*   **Transit-Time Mode** and **LSA Mode** are crucial for oscillations.
*   Frequency is determined by device length (transit-time) or external circuit (LSA).

---

### Practice Questions and Answers

**Question 1 (Tunnel Diode):**
Which of the following phenomena is primarily responsible for the negative differential resistance in a tunnel diode?
(a) Carrier recombination
(b) Avalanche breakdown
(c) Quantum mechanical tunneling
(d) Minority carrier injection

**Answer:** (c) Quantum mechanical tunneling

**Question 2 (Tunnel Diode):**
In the I-V characteristic of a tunnel diode, the region where an increase in voltage leads to a decrease in current is called:
(a) Forward bias region
(b) Reverse bias region
(c) Negative differential resistance (NDR) region
(d) Saturation region

**Answer:** (c) Negative differential resistance (NDR) region

**Question 3 (Gunn Diode):**
The negative differential resistance in a Gunn diode is due to:
(a) Tunneling effect
(b) Electron transfer between conduction band valleys
(c) High doping concentration
(d) Avalanche breakdown

**Answer:** (b) Electron transfer between conduction band valleys

**Question 4 (Gunn Diode):**
In which mode of operation does a domain of high electric field propagate across the Gunn diode?
(a) Low-field mode
(b) Transit-time mode
(c) LSA mode
(d) Ohmic mode

**Answer:** (b) Transit-time mode

**Question 5 (Tunnel Diode & Gunn Diode):**
Briefly explain why both the Tunnel Diode and the Gunn Diode can be used as microwave oscillators.
**(Hint:** Relate to their negative differential resistance property.)

**Answer:** Both the Tunnel Diode and the Gunn Diode exhibit negative differential resistance (NDR) in a specific operating region. This NDR characteristic allows them to act as active components in a resonant circuit. When connected to a suitable external resonant circuit (like a cavity), they can overcome the losses in the circuit and sustain oscillations at microwave frequencies. The NDR region essentially provides the necessary gain to compensate for the circuit's dissipation, leading to continuous oscillation.

**Question 6 (Gunn Diode):**
What is the primary material used for fabricating Gunn diodes for microwave applications?
(a) Silicon (Si)
(b) Gallium Arsenide (GaAs)
(c) Germanium (Ge)
(d) Copper Oxide (CuO)

**Answer:** (b) Gallium Arsenide (GaAs)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References and Further Reading:

*   **Microwave Engineering, by Annapurna Das and Sisir K Das (McGraw Hill, 4th edition):** Chapter 3 (Microwave Tubes) and Chapter 4 (Microwave Semiconductor Devices) would cover these topics extensively.
*   **Microwave Devices & Circuits, by Samuel Y Liao, (Pearson Education, 3rd edition):** Chapters on Transferred Electron Devices (Gunn Diode) and Tunnel Diodes provide detailed theoretical and practical aspects.
*   **Concepts & Applications of Microwave Engineering by Sanjay Kumar Saurabh Shukla (PHI, 2014):** Look for chapters dedicated to semiconductor devices for microwave frequencies.

---

### Alignment with Course Outcomes:

*   **CO1: Explain the basic mechanism of operation of cavity resonator and microwave sources (Knowledge Level: K2)**
    *   This topic directly addresses the "microwave sources" part of CO1. The detailed explanation of the operating principles of the Tunnel Diode and Gunn Diode, highlighting how their unique characteristics (NDR) enable them to function as sources of microwave energy, fulfills this outcome at a Knowledge Level (K2).

---

### Important Points to Remember:

*   **NDR is key:** Both devices rely on Negative Differential Resistance (NDR) for their microwave operation.
*   **Tunnel Diode:** Relies on quantum mechanical tunneling due to heavy doping and a narrow depletion region.
*   **Gunn Diode:** Relies on the bulk effect of electron transfer between energy valleys in specific semiconductors (like GaAs) at high electric fields.
*   **Applications:** Both are used as active components (oscillators, amplifiers) in microwave circuits.
*   **Frequency determination:** For tunnel diodes, the external resonant circuit determines the frequency. For Gunn diodes, the device length (transit-time mode) or the external circuit (LSA mode) plays a role.