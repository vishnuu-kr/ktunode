---
title: "Double-side band suppressed carrier (DSB-SC) modulation"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 1: Analog Communication:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36be8"
status: "completed"
scrapedAt: "2026-05-23T16:39:58.875Z"
---
# Electronic Communication: Module 1 - Analog Communication
## Topic: Double-Sideband Suppressed Carrier (DSB-SC) Modulation

---

### **Introduction**

Double-Sideband Suppressed Carrier (DSB-SC) modulation is a form of Amplitude Modulation (AM) where the carrier signal is suppressed at the transmitter. This means that only the information-carrying sidebands are transmitted. This leads to significant power savings compared to conventional AM, where a large portion of the transmitted power is consumed by the carrier.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** This topic directly relates to explaining the working of amplitude modulators, as DSB-SC is a type of AM. We will delve into the mathematical relations governing its generation.
*   **CO2 (K3):** We will analyze the characteristics of DSB-SC in terms of its spectrum (which consists only of sidebands), power efficiency (improved due to carrier suppression), and overall efficiency.

---

### **1. Key Concepts and Definitions**

*   **Message Signal (m(t)):** The original information signal that needs to be transmitted. It is typically a baseband signal.
    *   *Example:* Audio signal, speech signal.
*   **Carrier Signal (c(t)):** A high-frequency sinusoidal signal used to carry the message signal over the communication channel.
    *   Mathematically: $c(t) = A_c \cos(\omega_c t)$, where $A_c$ is the carrier amplitude and $\omega_c$ is the carrier angular frequency.
*   **Modulation:** The process of varying one or more properties of a periodic waveform, called the carrier signal, with a modulating signal that typically contains information to be transmitted.
*   **Amplitude Modulation (AM):** A modulation technique where the amplitude of the carrier signal is varied in proportion to the message signal.
*   **Double-Sideband (DSB):** A type of AM where both the upper and lower sidebands are transmitted.
*   **Suppressed Carrier (SC):** The carrier component is removed from the transmitted signal.
*   **DSB-SC Signal:** A modulated signal where the carrier component is suppressed, and only the upper and lower sidebands are transmitted.

---

### **2. Mathematical Representation of DSB-SC Modulation**

Let the message signal be $m(t)$.
Let the carrier signal be $c(t) = A_c \cos(\omega_c t)$.

The DSB-SC modulated signal, denoted as $s_{DSB-SC}(t)$, is obtained by multiplying the message signal with the carrier signal:

$s_{DSB-SC}(t) = m(t) \cdot c(t)$
$s_{DSB-SC}(t) = m(t) \cdot A_c \cos(\omega_c t)$

This equation shows that the amplitude of the carrier signal is directly varied by the message signal $m(t)$, but without the addition of a DC term (carrier amplitude) as in conventional AM.

**Example:**
If $m(t) = \cos(\omega_m t)$, then
$s_{DSB-SC}(t) = \cos(\omega_m t) \cdot A_c \cos(\omega_c t)$
Using the trigonometric identity: $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$
$s_{DSB-SC}(t) = \frac{A_c}{2}[\cos((\omega_c - \omega_m)t) + \cos((\omega_c + \omega_m)t)]$

This results in two side frequencies:
*   **Lower Sideband (LSB) frequency:** $\omega_c - \omega_m$
*   **Upper Sideband (USB) frequency:** $\omega_c + \omega_m$

**Important Point:** Notice that the carrier frequency $\omega_c$ itself is *not* present in the DSB-SC signal's spectrum, unlike conventional AM.

---

### **3. Spectrum of DSB-SC Signal**

The spectrum of a DSB-SC signal is obtained by taking the Fourier Transform of $s_{DSB-SC}(t)$.

If the Fourier Transform of the message signal $m(t)$ is $M(\omega)$, then the Fourier Transform of the DSB-SC signal is:

$S_{DSB-SC}(\omega) = \mathcal{F}\{m(t) \cdot A_c \cos(\omega_c t)\}$
$S_{DSB-SC}(\omega) = \frac{A_c}{2} [M(\omega - \omega_c) + M(\omega + \omega_c)]$

This means that the spectrum of the DSB-SC signal consists of two copies of the message signal's spectrum, one shifted to $\omega_c$ and the other shifted to $-\omega_c$.

**Example:**
For $m(t) = \cos(\omega_m t)$, its Fourier Transform is $M(\omega) = \pi[\delta(\omega - \omega_m) + \delta(\omega + \omega_m)]$.
Then,
$S_{DSB-SC}(\omega) = \frac{A_c}{2} [\pi[\delta(\omega - \omega_c - \omega_m) + \delta(\omega - \omega_c + \omega_m)] + \pi[\delta(\omega + \omega_c - \omega_m) + \delta(\omega + \omega_c + \omega_m)]]$

This shows impulse functions at frequencies:
*   $\omega_c - \omega_m$ (LSB)
*   $\omega_c + \omega_m$ (USB)
*   $-\omega_c + \omega_m$ (which is the negative of LSB)
*   $-\omega_c - \omega_m$ (which is the negative of USB)

The bandwidth of the DSB-SC signal is $2W$, where $W$ is the bandwidth of the message signal $m(t)$. This is because it transmits both the upper and lower sidebands, each extending up to the maximum frequency component of $m(t)$.

**Important Point:** The bandwidth is the same as conventional AM, but the power distribution is different.

---

### **4. Generation of DSB-SC Signals (Modulators)**

DSB-SC signals are typically generated using a **balanced modulator**. A balanced modulator is designed to suppress the carrier signal.

**Common Methods:**

*   **Using Two Standard AM Modulators:**
    *   This involves using two identical AM modulators. One modulator is fed with $m(t)$ and $c(t)$, producing a DSB-LC (Double-Sideband Large Carrier) signal. The other modulator is fed with $m(t)$ and $-c(t)$ (or $m(t)$ and $c(t)$ with phase inversion), producing a DSB-LC signal with an inverted carrier.
    *   The outputs of these two modulators are then added. The carrier components, being equal in amplitude but opposite in phase, cancel each other out, while the sidebands add up.
    *   This method is more theoretical and less practical due to the difficulty of achieving perfect balance.

*   **Using a Ring Modulator (or Balanced Modulator):**
    *   This is a more practical and widely used method. It employs a ring of diodes that switch based on the carrier signal.
    *   The message signal $m(t)$ is applied to the center of the ring, and the carrier signal $c(t)$ is applied to drive the diodes.
    *   The output is proportional to $m(t) \cdot c(t)$ and ideally has no carrier component.
    *   *(Refer to Kennedy's Electronic Communication Systems, Chapter 4, for detailed circuit diagrams and operation of balanced modulators.)*
    *   *(Tomasi's Electronic Communication Systems, Chapter 3, also provides good explanations of modulator circuits.)*

*   **Using a Heterodyne Modulator:**
    *   This involves mixing the message signal with the carrier signal and then filtering out the carrier.

---

### **5. Demodulation of DSB-SC Signals (Demodulators)**

DSB-SC signals **cannot** be demodulated using a simple envelope detector, unlike conventional AM. This is because the envelope detector relies on the presence of a large carrier component to extract the message signal. Without the carrier, the envelope of the DSB-SC signal follows the variations of $m(t) \cos(\omega_c t)$, which is not directly proportional to $m(t)$.

DSB-SC signals require **coherent demodulation** (also known as synchronous detection). This involves multiplying the received DSB-SC signal with a locally generated carrier signal that is synchronized in both frequency and phase with the original carrier at the transmitter.

**Coherent Demodulation Process:**

1.  **Reception:** The DSB-SC signal $s_{DSB-SC}(t)$ is received.
2.  **Local Carrier Generation:** A local oscillator generates a carrier signal $c_{local}(t) = A_{local} \cos(\omega_c t + \phi)$, where $\phi$ is the phase difference between the received carrier and the local carrier. Ideally, $\phi = 0$.
3.  **Mixing:** The received signal is multiplied with the local carrier.
    $v(t) = s_{DSB-SC}(t) \cdot c_{local}(t)$
    $v(t) = [m(t) \cdot A_c \cos(\omega_c t)] \cdot [A_{local} \cos(\omega_c t + \phi)]$
    $v(t) = A_c A_{local} m(t) \cos(\omega_c t) \cos(\omega_c t + \phi)$
    Using $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$
    $v(t) = \frac{A_c A_{local}}{2} m(t) [\cos(\phi) + \cos(2\omega_c t + \phi)]$
    $v(t) = \frac{A_c A_{local}}{2} m(t) \cos(\phi) + \frac{A_c A_{local}}{2} m(t) \cos(2\omega_c t + \phi)$
4.  **Low-Pass Filtering (LPF):** The term $m(t) \cos(2\omega_c t + \phi)$ is a high-frequency component (around $2\omega_c$) and is removed by a low-pass filter.
5.  **Output:** The output of the LPF is:
    $v_{out}(t) = \frac{A_c A_{local}}{2} m(t) \cos(\phi)$

**Ideal Demodulation ($\phi = 0$):**
If the phase synchronization is perfect ($\phi = 0$), then $\cos(\phi) = 1$.
$v_{out}(t) = \frac{A_c A_{local}}{2} m(t)$
This output is a scaled version of the original message signal $m(t)$.

**Non-Ideal Demodulation ($\phi \neq 0$):**
If there is a phase difference $\phi$, the output signal is scaled by $\cos(\phi)$, which reduces the amplitude of the recovered message signal.
*   If $\phi = \pi/2$ (quadrature phase error), $\cos(\pi/2) = 0$, and the output is zero. The message signal is lost.
*   *(Refer to Kennedy's Electronic Communication Systems, Chapter 4, for detailed explanations of coherent demodulators and their block diagrams.)*
*   *(Haykin and Mohre's Communication Systems, Chapter 3, provides a comprehensive treatment of coherent detection.)*

**Carrier Synchronization:**
Achieving and maintaining carrier synchronization at the receiver is crucial for coherent detection. This is often done using a **Phase-Locked Loop (PLL)** circuit. The PLL locks onto the incoming carrier frequency and phase, providing a stable local carrier for demodulation.

---

### **6. Power and Efficiency of DSB-SC Modulation**

*   **Power:** The transmitted power of a DSB-SC signal is concentrated entirely in the sidebands.
    For a message signal $m(t)$ with average power $P_m$, and carrier amplitude $A_c$:
    $s_{DSB-SC}(t) = A_c m(t) \cos(\omega_c t)$
    The average power in the DSB-SC signal is given by:
    $P_{DSB-SC} = \frac{A_c^2}{2} P_m$
    *(Where $P_m$ is the average power of $m(t)$. If $m(t)$ is normalized such that its average power is 1, then $P_{DSB-SC} = \frac{A_c^2}{2}$.)*

*   **Efficiency:**
    In **conventional AM**, the transmitted signal is $s_{AM}(t) = A_c(1 + k_a m(t)) \cos(\omega_c t)$, where $k_a$ is the amplitude sensitivity. The average transmitted power is $P_{AM} = \frac{A_c^2}{2}(1 + \frac{k_a^2 P_m}{2})$. A significant portion of this power is in the carrier component, especially at low modulation indices.
    In **DSB-SC**, the entire power is in the sidebands, carrying the information. This makes DSB-SC significantly more power-efficient than conventional AM, especially when the message signal has a low average power or requires a low modulation index.

**Important Point:** DSB-SC is more power-efficient than conventional AM because it eliminates the power wasted on the carrier transmission. However, it requires more complex circuitry at the receiver for coherent demodulation.

---

### **7. Advantages and Disadvantages of DSB-SC Modulation**

**Advantages:**

*   **Power Efficiency:** Significantly more power-efficient than conventional AM because no power is wasted on transmitting the carrier. This is crucial for long-distance transmissions or when power is limited.
*   **Simpler Spectrum:** The spectrum is simpler, containing only the sidebands, which can be beneficial for certain channel characteristics.

**Disadvantages:**

*   **Requires Coherent Demodulation:** The need for carrier synchronization at the receiver makes the receiver more complex and expensive to implement compared to the envelope detector used in conventional AM.
*   **Sensitivity to Frequency and Phase Errors:** Any frequency or phase mismatch between the transmitted carrier and the local carrier at the receiver can lead to a reduction in the demodulated signal amplitude or complete loss of the message signal.

---

### **8. Comparison with Other Analog Modulation Schemes**

*   **vs. Conventional AM:**
    *   **Power:** DSB-SC is more power-efficient (no carrier).
    *   **Receiver Complexity:** DSB-SC requires coherent detection (complex), AM uses envelope detection (simple).
    *   **Bandwidth:** Same ($2W$).

*   **vs. SSB-SC (Single-Sideband Suppressed Carrier):**
    *   **Power:** SSB-SC is more power-efficient as it transmits only one sideband, further reducing power requirements.
    *   **Bandwidth:** SSB-SC uses half the bandwidth ($W$) of DSB-SC ($2W$).
    *   **Receiver Complexity:** Both require coherent detection and are sensitive to phase/frequency errors.
    *   **Generation:** SSB-SC generation is more complex than DSB-SC generation.

*   *(Refer to Kennedy's Electronic Communication Systems, Chapter 4, for comparative tables and discussions on different AM variants.)*
*   *(Tomasi's Electronic Communication Systems, Chapter 3, also provides comparative analyses.)*

---

### **9. Practice Questions and Exercises**

**Q1:** What is the primary advantage of DSB-SC modulation over conventional AM?
    **(Answer: Power efficiency due to carrier suppression.)**

**Q2:** Can DSB-SC signals be demodulated using an envelope detector? Justify your answer.
    **(Answer: No. Envelope detectors require a strong carrier component to function correctly. DSB-SC signals have their carrier suppressed.)**

**Q3:** If the message signal is $m(t) = 5 \cos(2\pi \cdot 1000t)$ and the carrier frequency is $100 \text{ kHz}$, write the mathematical expression for the DSB-SC modulated signal. Assume carrier amplitude $A_c = 1$.
    **(Answer: $s_{DSB-SC}(t) = 1 \cdot 5 \cos(2\pi \cdot 1000t) \cos(2\pi \cdot 100000t)$)**
    **$= 5 \cos(2\pi \cdot 1000t) \cos(2\pi \cdot 100000t)$**

**Q4:** For the DSB-SC signal in Q3, what are the frequencies present in its spectrum?
    **(Answer: Carrier frequency is $100 \text{ kHz}$. Message frequency is $1 \text{ kHz}$.**
    **Upper Sideband frequency = $100 \text{ kHz} + 1 \text{ kHz} = 101 \text{ kHz}$**
    **Lower Sideband frequency = $100 \text{ kHz} - 1 \text{ kHz} = 99 \text{ kHz}$**
    **The spectrum contains frequencies at 99 kHz and 101 kHz.)**

**Q5:** What is the key requirement for successful demodulation of a DSB-SC signal?
    **(Answer: Coherent detection, requiring a local carrier synchronized in frequency and phase with the original carrier.)**

**Q6:** A DSB-SC transmitter generates a signal $s(t) = m(t) \cos(\omega_c t)$. The receiver uses a local oscillator to generate $2 \cos(\omega_c t + \pi/4)$. What is the output of the coherent detector (before the LPF)? Show the relationship to $m(t)$.
    **(Answer: Let $m(t)$ have average power $P_m$. The received signal power is related to $P_m$.**
    **Let the received signal be $s_{DSB-SC}(t) = A_c m(t) \cos(\omega_c t)$.**
    **The output of the mixer is $v(t) = s_{DSB-SC}(t) \cdot 2 \cos(\omega_c t + \pi/4)$**
    $v(t) = A_c m(t) \cos(\omega_c t) \cdot 2 \cos(\omega_c t + \pi/4)$
    $v(t) = 2 A_c m(t) [\frac{1}{2} (\cos(\pi/4) + \cos(2\omega_c t + \pi/4))]$
    $v(t) = A_c m(t) \cos(\pi/4) + A_c m(t) \cos(2\omega_c t + \pi/4)$
    **After the LPF, the output is $v_{out}(t) = A_c m(t) \cos(\pi/4) = \frac{\sqrt{2}}{2} A_c m(t)$.**
    **The recovered message signal is proportional to $m(t)$, but its amplitude is reduced by a factor of $\cos(\pi/4)$ due to the phase error.)**

---

### **10. Important Points to Remember**

*   DSB-SC stands for Double-Sideband Suppressed Carrier.
*   The transmitted signal is formed by multiplying the message signal with the carrier signal: $s_{DSB-SC}(t) = m(t) \cos(\omega_c t)$.
*   The spectrum consists of only the upper and lower sidebands, with no carrier component.
*   Bandwidth is $2W$, where $W$ is the message bandwidth.
*   DSB-SC is more power-efficient than conventional AM.
*   Demodulation requires coherent detection, which necessitates carrier synchronization at the receiver.
*   Coherent demodulation involves multiplying the received signal with a synchronized local carrier and then filtering.
*   Phase errors in the local carrier during demodulation lead to a reduction in the recovered message signal amplitude.
*   A Phase-Locked Loop (PLL) is commonly used for carrier synchronization.
*   Balanced modulators (like ring modulators) are used to generate DSB-SC signals.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **11. References and Further Reading**

*   **Kennedy's Electronic Communication Systems (6th Ed.)**: Chapter 4 provides a good foundation on AM techniques, including DSB-SC.
*   **Electronic Communication Systems – Fundamentals through Advanced by Wayne Tomasi (5th Ed.)**: Chapter 3 covers amplitude modulation and its variants comprehensively.
*   **Communication Systems by Simon Haykin and Michael Mohre (5th Ed.)**: Chapter 3 offers detailed mathematical treatments of modulation and demodulation, including coherent detection.
*   **Principles of Communication Systems by Taub & Schilling (4th Ed.)**: Chapter 4 discusses AM systems and their spectral properties.
*   **Principles of Communications by Rodger E. Ziemer & William H. Tranter (7th Ed.)**: Chapter 3 discusses amplitude modulation and provides insights into carrier synchronization.

---