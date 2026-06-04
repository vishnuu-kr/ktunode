---
title: "Amplitude modulator circuits -balanced modulator"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 1: Analog Communication:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36beb"
status: "completed"
scrapedAt: "2026-05-23T16:40:04.023Z"
---
# Electronic Communication: Module 1 - Analog Communication

## Topic: Amplitude Modulator Circuits - Balanced Modulator

---

### 1. Introduction to Amplitude Modulation (AM)

**Definition:** Amplitude Modulation (AM) is a process where the amplitude of a high-frequency carrier signal is varied in accordance with the instantaneous amplitude of a message signal.

**Purpose of Modulation:**
*   **Efficient Radiation:** To make low-frequency message signals (like audio) suitable for radiation by antennas. Antennas are typically resonant at wavelengths comparable to their physical size.
*   **Multiplexing:** To allow multiple signals to be transmitted simultaneously over the same medium without interference. This is achieved by assigning different carrier frequencies to different message signals.
*   **Reduction in Noise:** To improve the signal-to-noise ratio (SNR) of the transmitted signal.
*   **Overcoming Channel Limitations:** To adapt the signal to the bandwidth limitations of the transmission channel.

**Basic AM Waveform:**
The general form of an AM signal is given by:
$s(t) = A_c [1 + k_a m(t)] \cos(2\pi f_c t)$

Where:
*   $A_c$ is the amplitude of the carrier signal.
*   $m(t)$ is the message signal (baseband signal).
*   $k_a$ is the amplitude sensitivity of the modulator.
*   $f_c$ is the carrier frequency.

**Spectrum of AM:**
The spectrum of an AM signal consists of the carrier frequency and two sidebands:
*   **Upper Sideband (USB):** Contains frequencies $f_c + f_m$, where $f_m$ are the frequencies present in the message signal.
*   **Lower Sideband (LSB):** Contains frequencies $f_c - f_m$.

**(Refer to Kennedy's Electronic Communication Systems, Chapter 3 for detailed AM spectrum analysis.)**

---

### 2. Need for Balanced Modulators

Standard AM transmitters generate a carrier component along with the sidebands. This carrier component consumes a significant portion of the transmitted power, which is wasted as it carries no information. **Double Sideband-Suppressed Carrier (DSB-SC)** modulation aims to transmit only the sidebands, thereby eliminating the carrier and improving power efficiency.

Balanced modulators are specifically designed to produce DSB-SC signals. They are characterized by their ability to suppress the carrier signal while allowing the modulated sidebands to pass through.

---

### 3. Balanced Modulator Circuits

A balanced modulator essentially uses a pair of modulators in a configuration that cancels out the carrier signal. The most common types of balanced modulators are:

#### 3.1. Ring Modulator (or Lattice Modulator)

The ring modulator is a classic and widely used balanced modulator circuit. It utilizes diodes or transistors arranged in a ring or bridge configuration.

**Circuit Diagram (using diodes):**

```
        +-----------------+
        |                 |
      R_L --+-----------+-- Output
            |           |
    Carrier --+---|>|---+--+
        Signal      |   |  |
                    --- ---
                     -   -
                    / \ / \
        +----------| D1| D2|----------+
        |          --- ---          |
        |           |   |           |
        | Carrier --+---|---|-------+
        | Signal      |   |           |
        |            --- ---          |
        |           / \ / \          |
        +----------| D3| D4|----------+
                   --- ---
                    |   |
                    |   +-----------+
                    |               |
      Message ------+--------------- Output
        Signal
```

**Working Principle:**

1.  **Carrier Signal Input:** The carrier signal is applied to the diodes in a way that it alternately switches them ON and OFF. When the carrier voltage is positive, it might forward-bias one pair of diodes (e.g., D1 and D4), while reverse-biasing the other pair (D2 and D3). When the carrier voltage is negative, the bias is reversed.
2.  **Message Signal Input:** The message signal is applied to the bridge.
3.  **Switching Action:** The carrier signal acts as a switch. It effectively connects the message signal to the output in an alternating manner, controlled by the polarity of the carrier.
4.  **Output Spectrum:**
    *   When the carrier is ON (positive), the message signal is passed.
    *   When the carrier is OFF (negative), the message signal is inverted and passed.
    *   This effectively multiplies the message signal by a square wave carrier signal.
5.  **Mathematical Representation:**
    Let the carrier signal be $v_c(t) = A_c \cos(\omega_c t)$ and the message signal be $v_m(t)$.
    The square wave carrier can be represented by its Fourier series:
    $c(t) = \frac{4}{\pi} [\cos(\omega_c t) - \frac{1}{3}\cos(3\omega_c t) + \frac{1}{5}\cos(5\omega_c t) - \dots]$
    The output of the modulator before filtering is approximately $v_{out\_unfiltered}(t) = v_m(t) \times c(t)$.
    This results in terms like:
    *   $\frac{4}{\pi} v_m(t) \cos(\omega_c t)$ (DSB-SC term)
    *   $\frac{4}{3\pi} v_m(t) \cos(3\omega_c t)$ (DSB-SC term at 3rd harmonic)
    *   And so on for higher harmonics.
6.  **Filtering:** A bandpass filter centered at the carrier frequency $f_c$ is used to select only the desired DSB-SC component, $v_m(t) \cos(\omega_c t)$, and reject all other terms, including the original carrier.

**Advantages:**
*   Good carrier suppression.
*   Relatively simple circuit.
*   Can be implemented with diodes or transistors.

**Disadvantages:**
*   Requires a strong carrier signal to act as an effective switch.
*   Diode switching is not perfectly instantaneous, leading to some distortion.
*   Harmonic terms need to be filtered out.

**(Refer to Taub & Schilling, Chapter 4 for a detailed analysis of the ring modulator.)**

#### 3.2. Transistor Balanced Modulators (e.g., Differential Amplifier Configuration)

Transistors can also be used to build balanced modulators. A common configuration is the differential amplifier.

**Circuit Diagram (simplified differential amplifier):**

```
        +-----------+
        |           |
  Cc ---+---- C1 ---+---- Cc
        |     |     |
      Rc1--+--+--Rb1--+-- Collector 1
        |  / \    / \  |
     Vc --+--| B1|---| Q1|--- Output 1
        |  \ /    \ /  |
        +--| E1|---| E2|---+
           \ /     \ /
            +-------+-------+
            |       |       |
  Carrier---+---Rb2--+--Rb3--+---Cc
            |       |       |
            +--| B2|---| Q2|--- Output 2
               \ /     \ /
                | E     | E
                |       |
                +-------+
```
*Note: This is a simplified representation. A practical differential amplifier balanced modulator would involve more components for proper biasing and signal injection.*

**Working Principle:**

1.  **Differential Amplification:** The circuit utilizes a differential amplifier stage with two transistors (Q1 and Q2).
2.  **Carrier Injection:** The carrier signal is typically applied to the bases of the transistors in a way that it drives them into switching or alternately amplifies their signals. In some configurations, the carrier is applied to the emitters to achieve switching.
3.  **Message Signal Injection:** The message signal is injected into the circuit, often at the bases or collectors.
4.  **Balanced Output:** The key is that the circuit is designed such that any signal that appears identically at both inputs (like the carrier signal if injected at the bases) will be differentially amplified and canceled out at the output. The message signal, however, is modulated and results in different outputs at the collectors.
5.  **DSB-SC Generation:** By appropriately feeding the carrier and message signals, the output will contain the product of the message and carrier signals, with the carrier suppressed. The two outputs (Collector 1 and Collector 2) are often combined or subtracted to produce the DSB-SC signal.

**Mathematical Basis (simplified):**
If the carrier signal controls the gain of each transistor, and the message signal is applied as input, the output can be approximated as:
$v_{out1}(t) \approx K \cdot v_m(t) \cdot \text{gain\_control}(t)$
where $\text{gain\_control}(t)$ is related to the carrier signal. If the carrier signal is used to switch the transistors, the output will contain the product of $v_m(t)$ and the carrier. The differential nature of the amplifier ensures that the carrier itself (which is common to both transistors' effective paths) is canceled.

**Advantages:**
*   Can achieve good carrier suppression.
*   Can be implemented with active components (transistors).

**Disadvantages:**
*   More complex biasing and design considerations compared to the diode ring modulator.
*   Performance depends heavily on the matching of the transistors.

**(Refer to Kennedy's Electronic Communication Systems, Chapter 3 for transistor-based modulators.)**

#### 3.3. Other Balanced Modulator Circuits

*   **FET Balanced Modulators:** Field-Effect Transistors (FETs) can also be used in similar bridge or differential configurations to achieve balanced modulation. FETs offer higher input impedance.
*   **Integrated Circuit (IC) Modulators:** Many specialized ICs are available that perform balanced modulation, often incorporating complex transistor arrangements internally for high performance and carrier suppression. Examples include the MC1496 (balanced modulator/demodulator IC).

---

### 4. Properties of DSB-SC Signals

*   **Bandwidth:** The bandwidth of a DSB-SC signal is twice the bandwidth of the message signal. If $W$ is the bandwidth of the message signal, the bandwidth of the DSB-SC signal is $2W$.
*   **Power Efficiency:** DSB-SC is more power-efficient than standard AM because the carrier power is eliminated. All the transmitted power is contained in the sidebands, which carry the information.
*   **Demodulation:** DSB-SC signals require synchronous demodulation, meaning the locally generated carrier at the receiver must be perfectly in phase and frequency with the original carrier signal used at the transmitter. Any phase or frequency error leads to demodulation distortion.

**(Refer to Simon Haykin, Chapter 2 for detailed DSB-SC properties and demodulation.)**

---

### 5. Relation to Course Outcomes

*   **CO1: Explain the working of Amplitude modulator and demodulator circuits using mathematical relations.**
    *   This section directly addresses the working of balanced modulators (a type of AM modulator) with explanations of how they generate DSB-SC signals. Mathematical representations of the signals and the circuit operation are provided.
*   **CO2: Explain the characteristics of various analog modulation schemes in terms of spectra, power and efficiency.**
    *   The spectrum of DSB-SC is discussed (carrier suppressed, sidebands present).
    *   Power efficiency is highlighted as a key advantage of DSB-SC over standard AM.
*   **CO3: Understand the various processing blocks of a digital communication system.**
    *   While this topic is about analog communication, understanding modulation techniques like DSB-SC is foundational. Analog modulation concepts often influence digital modulation schemes (e.g., using carriers in QAM).
*   **CO4: Apply the knowledge of digital modulation in digital transmission.**
    *   This section provides the fundamental understanding of modulation principles that are extended and adapted in digital modulation techniques.

---

### 6. Key Concepts and Definitions to Remember

*   **Amplitude Modulation (AM):** Varying the amplitude of a carrier signal by the message signal.
*   **Double Sideband-Suppressed Carrier (DSB-SC):** An AM variant where the carrier component is suppressed, transmitting only the upper and lower sidebands.
*   **Balanced Modulator:** A circuit designed to generate DSB-SC signals, characterized by its ability to cancel out the carrier.
*   **Ring Modulator:** A common diode-based balanced modulator using a ring or bridge of diodes.
*   **Differential Amplifier Modulator:** A transistor-based balanced modulator utilizing the cancellation property of differential amplifiers.
*   **Synchronous Demodulation:** The required demodulation technique for DSB-SC signals, needing a locally generated carrier synchronized in phase and frequency with the original carrier.
*   **Bandwidth of DSB-SC:** Twice the bandwidth of the message signal ($2W$).
*   **Power Efficiency of DSB-SC:** Higher than standard AM due to the absence of carrier power.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary advantage of using a balanced modulator over a standard AM modulator?
**(Answer:** Power efficiency, due to the suppression of the carrier signal.)

**Question 2:**
Draw a circuit diagram of a basic diode ring modulator and briefly explain its operation. What is the spectrum of the output before filtering?
**(Answer:** See Section 3.1. The output before filtering contains the DSB-SC component $v_m(t) \cos(\omega_c t)$ and terms involving products of $v_m(t)$ with harmonics of the carrier, like $v_m(t) \cos(3\omega_c t)$, $v_m(t) \cos(5\omega_c t)$, etc.)

**Question 3:**
If a message signal $m(t) = \cos(2000\pi t)$ is used to modulate a carrier $c(t) = 5 \cos(2\pi \times 10^5 t)$ in a DSB-SC system, what are the frequencies present in the transmitted signal?
**(Answer:** The message signal has a frequency of $f_m = 1000$ Hz. The carrier frequency is $f_c = 100$ kHz. The DSB-SC signal will have components at $f_c + f_m$ and $f_c - f_m$.
So, frequencies are:
$100 \text{ kHz} + 1 \text{ kHz} = 101 \text{ kHz}$ (Upper Sideband)
$100 \text{ kHz} - 1 \text{ kHz} = 99 \text{ kHz}$ (Lower Sideband)
The carrier frequency at 100 kHz is suppressed.)

**Question 4:**
Why is synchronous demodulation necessary for DSB-SC signals? What happens if the locally generated carrier at the receiver has a phase error with respect to the transmitted carrier?
**(Answer:** Synchronous demodulation is necessary because the sidebands are directly multiplied by the carrier to recover the message. If the locally generated carrier $\cos(\omega_c t + \phi)$ has a phase error $\phi$, the demodulated output will be $v_m(t) \cos(\phi)$. This means the recovered message amplitude will be reduced by a factor of $\cos(\phi)$. If $\phi = 90^\circ$, the output will be zero, leading to a "quadrature null" effect. If the frequency is also incorrect, further distortion occurs.)

**Question 5:**
Explain the concept of "carrier suppression" in the context of balanced modulators.
**(Answer:** Carrier suppression is the process by which the carrier frequency component present in the modulated signal is significantly reduced or eliminated. Balanced modulators achieve this by employing circuit configurations where the carrier signal, acting as a multiplier or switch, is applied in such a way that its direct contribution to the output cancels out due to symmetry or differential action.)

---

### 8. Important Points to Remember

*   Balanced modulators are key to generating DSB-SC signals, offering improved power efficiency by eliminating the carrier.
*   The ring modulator and transistor differential amplifier are common implementations.
*   The output of a balanced modulator, before filtering, is the product of the message signal and a square-wave (or equivalent switching function) derived from the carrier.
*   Bandpass filtering is crucial after balanced modulation to isolate the desired DSB-SC component.
*   DSB-SC signals *require* synchronous demodulation for successful recovery of the message.
*   The bandwidth of DSB-SC is twice that of the original message signal.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
