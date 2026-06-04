---
title: "Digital data to analog signal - Amplitude Shift Keying (ASK), Frequency Shift Keying (FSK), Phase Shift Keying (PSK)."
subject: "DATA COMMUNICATION"
module: "Module 2: Digital data to digital signal – Non"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bee5"
status: "completed"
scrapedAt: "2026-05-20T16:51:41.731Z"
---
# Module 2: Digital Data to Analog Signal - ASK, FSK, PSK

## 1. Introduction to Digital Data to Analog Signal Conversion

### 1.1 Why Convert Digital Data to Analog Signals?

*   **Transmission over Analog Channels:** Many existing communication channels (like telephone lines, radio waves) are designed to carry analog signals. Converting digital data into an analog form allows it to be transmitted over these channels.
*   **Modulation:** The process of converting digital data to an analog signal is called **modulation**. This involves modifying a characteristic of an analog carrier wave (like amplitude, frequency, or phase) to represent the digital data.

### 1.2 Key Concepts

*   **Carrier Wave:** A high-frequency analog signal that serves as the "vehicle" for transmitting information. It has a constant frequency, amplitude, and phase when no data is being transmitted.
*   **Modulating Signal (Message Signal):** The digital data that needs to be transmitted.
*   **Modulated Signal:** The analog signal that results from modifying the carrier wave according to the digital data.

## 2. Amplitude Shift Keying (ASK)

### 2.1 Definition

Amplitude Shift Keying (ASK) is a digital modulation technique where the **amplitude** of the carrier signal is varied to represent different digital data values.

### 2.2 How it Works

*   **Binary ASK:** The simplest form, representing binary 0 and 1.
    *   **'1'**: Represented by the presence of a carrier signal (i.e., the carrier wave is transmitted with a specific amplitude).
    *   **'0'**: Represented by the absence of a carrier signal (i.e., the carrier wave's amplitude is zero or significantly reduced).
*   **M-ary ASK:** For higher data rates, multiple amplitudes can be used to represent more than two states (e.g., 4-ASK uses four different amplitudes to represent two bits at a time).

### 2.3 Representation

Let:
*   $A_c$ be the amplitude of the carrier wave.
*   $f_c$ be the frequency of the carrier wave.
*   $c(t) = A_c \cos(2\pi f_c t)$ be the carrier signal.

In binary ASK:
*   **Binary '1'**: $s_1(t) = A_1 \cos(2\pi f_c t)$ (where $A_1 > 0$)
*   **Binary '0'**: $s_0(t) = A_0 \cos(2\pi f_c t)$ (where $A_0$ is typically 0 or very small)

### 2.4 Advantages

*   **Simple to implement:** Relatively easy to design and build ASK modulators and demodulators.
*   **Lower bandwidth requirement (compared to FSK for same data rate):** Generally requires less bandwidth than FSK for the same data rate.

### 2.5 Disadvantages

*   **Susceptible to noise and interference:** Variations in amplitude due to noise can be misinterpreted as data changes, leading to errors.
*   **Power inefficiency:** Transmitting a carrier signal for every '1' bit can be power-inefficient, especially if the carrier amplitude is high.
*   **Difficulty in distinguishing states:** If noise causes the amplitude to fluctuate significantly, it can be hard for the receiver to determine the correct state.

### 2.6 Applications

*   **Fiber optic communication:** Often used in very short-range optical links.
*   **Low-speed data transmission:** Historically used in older modems and remote control systems.
*   **Radio Frequency Identification (RFID):** Commonly used in passive RFID tags.

### 2.7 Example

Imagine transmitting the binary sequence `1010`:

| Digital Data | Amplitude of Carrier | Analog Signal Representation |
| :----------- | :------------------- | :--------------------------- |
| 1            | High                 | Carrier wave present         |
| 0            | Zero (or very low)   | Carrier wave absent          |
| 1            | High                 | Carrier wave present         |
| 0            | Zero (or very low)   | Carrier wave absent          |

## 3. Frequency Shift Keying (FSK)

### 3.1 Definition

Frequency Shift Keying (FSK) is a digital modulation technique where the **frequency** of the carrier signal is varied to represent different digital data values.

### 3.2 How it Works

*   **Binary FSK:** The most common type, using two different frequencies to represent binary 0 and 1.
    *   **'1'**: Represented by a carrier wave of frequency $f_1$.
    *   **'0'**: Represented by a carrier wave of frequency $f_0$.
*   **M-ary FSK:** Uses multiple frequencies to represent more than two states.

### 3.3 Representation

Let:
*   $A_c$ be the amplitude of the carrier wave (kept constant).
*   $f_0$ and $f_1$ be two distinct frequencies.
*   $c_0(t) = A_c \cos(2\pi f_0 t)$ be the carrier for '0'.
*   $c_1(t) = A_c \cos(2\pi f_1 t)$ be the carrier for '1'.

In binary FSK:
*   **Binary '1'**: $s_1(t) = A_c \cos(2\pi f_1 t)$
*   **Binary '0'**: $s_0(t) = A_c \cos(2\pi f_0 t)$

**Important Note:** The frequencies $f_0$ and $f_1$ should be sufficiently different to allow for easy discrimination at the receiver. A common rule of thumb is that the minimum separation between frequencies is the bit rate ($R$) or half the bit rate ($R/2$).

### 3.4 Advantages

*   **More robust to noise than ASK:** Less susceptible to amplitude variations caused by noise, as the information is encoded in frequency.
*   **Simpler receiver design than PSK:** Demodulation can be achieved using filters, which are generally simpler than phase detectors.

### 3.5 Disadvantages

*   **Requires more bandwidth than ASK for the same data rate:** The bandwidth required is proportional to the difference between the two frequencies ($f_1 - f_0$), plus the bandwidth of each carrier.
*   **Can suffer from frequency drift:** If the transmitter or receiver frequency drifts, it can lead to errors.

### 3.6 Applications

*   **Modems:** Used in some older modems.
*   **Caller ID:** Used in some telephone systems.
*   **Early cordless phones:** Used for transmission.
*   **Two-tone pagers:** Simple FSK was used.
*   **Vehicle immobilizers:** Often use FSK.

### 3.7 Example

Imagine transmitting the binary sequence `10110`:

| Digital Data | Frequency of Carrier | Analog Signal Representation |
| :----------- | :------------------- | :--------------------------- |
| 1            | $f_1$                | Carrier wave at $f_1$        |
| 0            | $f_0$                | Carrier wave at $f_0$        |
| 1            | $f_1$                | Carrier wave at $f_1$        |
| 1            | $f_1$                | Carrier wave at $f_1$        |
| 0            | $f_0$                | Carrier wave at $f_0$        |

## 4. Phase Shift Keying (PSK)

### 4.1 Definition

Phase Shift Keying (PSK) is a digital modulation technique where the **phase** of the carrier signal is varied to represent different digital data values.

### 4.2 How it Works

*   **Binary PSK (BPSK):** The simplest form, using two different phases to represent binary 0 and 1.
    *   **'1'**: Represented by a carrier wave with a specific phase (e.g., 0 degrees).
    *   **'0'**: Represented by a carrier wave with a different phase (e.g., 180 degrees).
*   **Quadrature PSK (QPSK):** A more advanced form that transmits two bits simultaneously by using four different phases.
*   **M-ary PSK:** Uses multiple phases to represent more than two states (e.g., 8-PSK uses eight phases to transmit 3 bits per symbol).

### 4.3 Representation

Let:
*   $A_c$ be the amplitude of the carrier wave (kept constant).
*   $f_c$ be the frequency of the carrier wave.
*   $c(t) = A_c \cos(2\pi f_c t)$ be the carrier signal.

In binary PSK (BPSK):
*   **Binary '1'**: $s_1(t) = A_c \cos(2\pi f_c t)$ (phase 0)
*   **Binary '0'**: $s_0(t) = A_c \cos(2\pi f_c t + \pi) = -A_c \cos(2\pi f_c t)$ (phase $\pi$ or 180 degrees)

**Important Note:** The phase transitions in PSK are typically continuous. When a bit changes, the phase shifts instantaneously.

### 4.4 Advantages

*   **More robust to noise than ASK:** Less susceptible to amplitude variations.
*   **More power-efficient than ASK:** Generally more efficient in power usage compared to ASK for the same data rate.
*   **Higher data rates possible with M-ary PSK:** QPSK and higher-order PSK schemes allow for significantly higher data transmission rates.

### 4.5 Disadvantages

*   **More complex receiver than ASK or FSK:** Requires phase detectors, which are more complex than amplitude or frequency detectors.
*   **Susceptible to phase jitter:** Small variations in the phase of the received signal can lead to errors.
*   **Requires carrier recovery:** The receiver needs to accurately recover the carrier frequency and phase, which can be challenging.

### 4.6 Applications

*   **Wi-Fi:** Widely used in wireless local area networks.
*   **Bluetooth:** Another common wireless technology.
*   **Satellite communication:** Used for reliable data transmission.
*   **Mobile communication:** Many cellular standards utilize PSK variants.
*   **Digital broadcasting:** Used in some digital TV standards.

### 4.7 Example

Imagine transmitting the binary sequence `1010` using BPSK:

| Digital Data | Phase of Carrier | Analog Signal Representation |
| :----------- | :--------------- | :--------------------------- |
| 1            | 0 degrees        | $A_c \cos(2\pi f_c t)$       |
| 0            | 180 degrees      | $-A_c \cos(2\pi f_c t)$      |
| 1            | 0 degrees        | $A_c \cos(2\pi f_c t)$       |
| 0            | 180 degrees      | $-A_c \cos(2\pi f_c t)$      |

## 5. Comparison of ASK, FSK, and PSK

| Feature        | Amplitude Shift Keying (ASK)                                  | Frequency Shift Keying (FSK)                                    | Phase Shift Keying (PSK)                                        |
| :------------- | :------------------------------------------------------------ | :-------------------------------------------------------------- | :-------------------------------------------------------------- |
| **Parameter Varied** | Amplitude                                                     | Frequency                                                       | Phase                                                           |
| **Robustness to Noise** | Poor (highly susceptible to amplitude noise)                  | Good (less susceptible than ASK)                                | Very Good (less susceptible than ASK, good against amplitude noise) |
| **Bandwidth Requirement** | Low (for binary ASK)                                          | Moderate (depends on frequency separation)                      | Moderate to High (depends on order of PSK)                      |
| **Complexity** | Simple modulator/demodulator                                  | Simple modulator/demodulator (compared to PSK)                  | Complex modulator/demodulator (requires phase detection)        |
| **Power Efficiency** | Poor (carrier transmitted for data)                           | Moderate                                                        | Good                                                            |
| **Data Rate**  | Low (binary ASK)                                              | Moderate                                                        | Moderate to Very High (M-ary PSK)                               |
| **Typical Use Cases** | RFID, short-range optical, low-speed modems                   | Older modems, caller ID, pagers, RFID                           | Wi-Fi, Bluetooth, satellite, mobile communication             |

## 6. Practice Questions and Exercises

### Question 1

Which digital modulation technique varies the **amplitude** of the carrier signal to represent digital data?
a) FSK
b) PSK
c) ASK
d) QAM

**Answer:** c) ASK

### Question 2

In Binary Frequency Shift Keying (BFSK), what characteristic of the carrier signal is changed to represent a '0' and a '1'?
a) Amplitude
b) Phase
c) Frequency
d) Polarity

**Answer:** c) Frequency

### Question 3

What is a significant disadvantage of Amplitude Shift Keying (ASK) compared to Frequency Shift Keying (FSK)?
a) Requires more bandwidth
b) More complex receiver
c) Highly susceptible to noise
d) Lower data rates

**Answer:** c) Highly susceptible to noise

### Question 4

Describe the difference in how binary '1' and binary '0' are represented in BPSK.

**Answer:** In BPSK, a binary '1' is represented by a carrier signal with a specific phase (e.g., 0 degrees), while a binary '0' is represented by a carrier signal with a different phase (e.g., 180 degrees).

### Question 5

Imagine you need to transmit data over a noisy channel where amplitude variations are common. Which modulation technique would you generally prefer among ASK, FSK, and PSK, and why?

**Answer:** You would generally prefer FSK or PSK. FSK is more robust to amplitude noise than ASK because the information is encoded in frequency, which is less affected by amplitude variations. PSK is even more robust to amplitude noise as the information is encoded in the phase, and it's typically more power-efficient as well.

### Question 6

Explain the concept of M-ary modulation in the context of digital-to-analog conversion. Give an example for ASK.

**Answer:** M-ary modulation is a technique where a single symbol represents more than one bit of digital data. This allows for higher data transmission rates. For example, in 4-ASK, four different amplitude levels are used. Each amplitude level can represent 2 bits of data (since $2^2 = 4$). So, instead of sending one bit per symbol, you send two bits per symbol.

## 7. Important Points to Remember

*   **Modulation is key:** Digital data needs to be converted into analog signals for transmission over analog channels.
*   **ASK** manipulates **amplitude**. It's simple but prone to noise.
*   **FSK** manipulates **frequency**. It's more robust than ASK and requires more bandwidth.
*   **PSK** manipulates **phase**. It's robust to amplitude noise, power-efficient, but more complex to implement.
*   **M-ary schemes (like QPSK)** increase data rates by encoding multiple bits per symbol, but they increase complexity and can be more sensitive to noise.
*   The choice of modulation technique depends on factors like channel characteristics, desired data rate, power constraints, and acceptable error rates.
