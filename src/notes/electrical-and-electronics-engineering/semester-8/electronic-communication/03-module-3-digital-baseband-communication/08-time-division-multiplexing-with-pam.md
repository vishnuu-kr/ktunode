---
title: "Time division multiplexing with PAM"
subject: "ELECTRONIC COMMUNICATION"
module: "Module 3: Digital baseband communication:"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36bff"
status: "completed"
scrapedAt: "2026-05-23T16:40:29.574Z"
---
# Electronic Communication: Module 3 - Digital Baseband Communication

## Topic: Time Division Multiplexing (TDM) with Pulse Amplitude Modulation (PAM)

This topic explores how multiple digital signals can be transmitted over a single channel simultaneously using Time Division Multiplexing (TDM) techniques, with Pulse Amplitude Modulation (PAM) as the underlying signal representation.

---

### 1. Introduction to Digital Baseband Communication

Digital baseband communication involves transmitting digital data directly over a communication channel without modulation onto a carrier frequency. This is typically done for short-distance communication or when the channel bandwidth is suitable for the baseband signal.

**Key Concepts:**

*   **Digital Data:** Information represented as discrete binary values (0s and 1s).
*   **Baseband Signal:** The original signal containing the information, with its spectrum centered around zero frequency.
*   **Sampling:** Converting a continuous-time signal into a sequence of discrete-time samples.
*   **Quantization:** Assigning a discrete amplitude level to each sampled value.
*   **Encoding:** Representing the quantized samples using a specific digital format.

**Alignment with Course Outcomes:**
*   **CO3 (Understand the various processing blocks of a digital communication system):** This section lays the foundation by introducing the fundamental concepts of digital data and baseband transmission, which are crucial processing blocks. (Knowledge Level: K2)

---

### 2. Pulse Amplitude Modulation (PAM)

Pulse Amplitude Modulation (PAM) is a method of transmitting information by modulating the amplitude of a series of light pulses. In digital PAM, the amplitude of the pulse is directly proportional to the digital data value. For baseband digital communication, PAM is often used to represent the binary data itself.

**Key Concepts:**

*   **Pulse Train:** A sequence of pulses, typically rectangular, with a fixed pulse width and repetition period.
*   **Amplitude Levels:** The distinct amplitude values assigned to the pulses, representing different digital symbols.
*   **Sampling Rate:** The rate at which the analog signal is sampled, which determines the bandwidth required for transmission.
*   **Pulse Width ($T_s$):** The duration of each pulse.
*   **Pulse Period ($T$):** The time interval between the start of consecutive pulses.
*   **Duty Cycle:** The ratio of pulse width to pulse period ($T_s/T$).

**Types of Digital PAM:**

*   **Unipolar PAM:** Pulse amplitudes are either 0 or a positive value, representing binary 0 and 1 respectively.
    *   Example: Binary 0 -> 0V pulse, Binary 1 -> $A$V pulse.
*   **Bipolar PAM:** Pulse amplitudes can be positive, negative, or zero, representing different digital symbols. This often provides better performance by reducing DC component and increasing noise immunity.
    *   Example: Binary 0 -> $-A$V pulse, Binary 1 -> $+A$V pulse (for 2-level PAM).
    *   **M-ary PAM:** Uses $M$ different amplitude levels to represent $\log_2(M)$ bits per symbol.
        *   Example: 4-ary PAM can represent two bits per symbol using four distinct amplitude levels.

**Mathematical Representation of PAM:**

A PAM signal can be represented as:

$s(t) = \sum_{n=-\infty}^{\infty} a_n p(t - nT)$

Where:
*   $a_n$ is the amplitude of the $n^{th}$ pulse, representing the digital data.
*   $p(t)$ is the basic pulse shape (e.g., rectangular).
*   $T$ is the pulse period (or symbol period).

**Spectrum of PAM:**

The spectrum of a PAM signal depends on the pulse shape and the sequence of amplitudes. For a rectangular pulse and a random sequence of amplitudes, the spectrum is generally spread across a wide range of frequencies. The bandwidth required is approximately inversely proportional to the pulse width $T_s$.

**Alignment with Course Outcomes:**
*   **CO1 (Explain the working of Amplitude modulator and demodulator circuits using mathematical relations):** PAM is a form of amplitude modulation where the modulating signal is digital. The mathematical representation and the concept of amplitude levels directly relate to amplitude modulation principles. (Knowledge Level: K2)
*   **CO4 (Apply the knowledge of digital modulation in digital transmission):** PAM is a fundamental digital modulation technique used for transmitting digital data. (Knowledge Level: K3)

**Textbook References:**
*   **Kennedy's Electronic Communication Systems:** Discusses pulse modulation techniques, including PAM, and their characteristics. (Chapter on Pulse Communication)
*   **Wayne Tomasi's Electronic Communication Systems:** Covers digital modulation techniques, including PAM, with detailed explanations of signal representation and spectral properties. (Chapter on Digital Modulation)
*   **Haykin and Mohre's Communication Systems:** Provides a theoretical treatment of various modulation schemes, including PAM, with mathematical derivations. (Chapter on Digital Modulation)

---

### 3. Time Division Multiplexing (TDM)

Time Division Multiplexing (TDM) is a technique used to transmit multiple digital signals over a single communication channel by dividing the channel's time into discrete slots. Each signal is allocated a specific time slot during which it can transmit its data.

**Key Concepts:**

*   **Multiplexing:** Combining multiple signals into a single composite signal for transmission over a shared medium.
*   **Demultiplexing:** Separating the composite signal back into its individual original signals at the receiver.
*   **Time Slot:** A short interval of time allocated to a specific data stream.
*   **Frame:** A collection of time slots, where each slot carries data from a different input signal.
*   **Synchronization:** Essential for the demultiplexer to know when each time slot begins and ends.

**Types of TDM:**

*   **Synchronous TDM (STDM):** Each input signal is assigned a fixed time slot in every frame, regardless of whether it has data to transmit. This requires synchronization between the multiplexer and demultiplexer.
*   **Asynchronous TDM (ATDM) / Statistical TDM (Stat TDM):** Time slots are allocated dynamically to input signals that have data to transmit. This is more efficient as unused time slots are not wasted. It requires addressing information to identify the source of data within each slot.

**How TDM works with PAM:**

In the context of digital baseband communication with PAM, TDM works as follows:

1.  **Sampling and PAM Encoding:** Each of the $N$ input digital signals is sampled and converted into a PAM pulse train. For simplicity, consider binary PAM where each pulse amplitude represents a bit.
2.  **Time Slot Allocation:** The multiplexer allocates a specific time slot within a frame to each of the $N$ PAM signals.
3.  **Interleaving:** The PAM pulses from each input signal are interleaved in time to form a composite TDM signal.
4.  **Transmission:** The composite TDM signal is transmitted over the common channel.
5.  **Demultiplexing:** At the receiver, the demultiplexer, synchronized with the multiplexer, separates the composite signal into its original $N$ PAM signals based on the allocated time slots.
6.  **Demodulation/Decoding:** Each recovered PAM signal is then demodulated (amplitude detected) and decoded back into the original digital data.

**Example of TDM with Binary PAM:**

Let's consider 3 input digital signals (S1, S2, S3) using binary PAM, where a high pulse represents '1' and a low pulse represents '0'.

| Time Slot | S1 Data | S2 Data | S3 Data | Composite TDM Signal (PAM Pulse) |
| :-------- | :------ | :------ | :------ | :------------------------------- |
| Slot 1    | 1       | -       | -       | Pulse from S1 (representing 1)   |
| Slot 2    | -       | 0       | -       | Pulse from S2 (representing 0)   |
| Slot 3    | -       | -       | 1       | Pulse from S3 (representing 1)   |
| Slot 4    | 0       | -       | -       | Pulse from S1 (representing 0)   |
| Slot 5    | -       | 1       | -       | Pulse from S2 (representing 1)   |
| Slot 6    | -       | -       | 0       | Pulse from S3 (representing 0)   |
| ...       | ...     | ...     | ...     | ...                              |

The composite TDM signal is a sequence of PAM pulses, where the amplitude in each time slot corresponds to the data from the allocated input signal.

**Frame Structure:**

A TDM frame typically includes:

*   **Data Slots:** For carrying information from each input channel.
*   **Guard Bands (Optional but Recommended):** Small gaps between time slots to prevent inter-symbol interference (ISI) or inter-channel interference (ICI) due to timing inaccuracies or pulse spreading.
*   **Synchronization Bits/Pattern:** A unique pattern to help the demultiplexer identify the start of each frame and synchronize with the incoming signal.

**Advantages of TDM:**

*   **Efficient Channel Utilization:** Multiple signals share the same channel, increasing overall data throughput.
*   **No Carrier Modulation Required:** Suitable for baseband transmission.
*   **Simple Implementation:** Especially synchronous TDM.

**Disadvantages of TDM:**

*   **Synchronization Overhead:** Requires precise timing synchronization between multiplexer and demultiplexer.
*   **Guard Band Wasted Bandwidth:** Guard bands consume bandwidth and reduce overall efficiency if not managed properly.
*   **Inefficiency with Asynchronous Data:** In STDM, time slots can be wasted if an input signal has no data.

**Alignment with Course Outcomes:**
*   **CO3 (Understand the various processing blocks of a digital communication system):** TDM is a fundamental multiplexing technique crucial for efficient digital communication system design. (Knowledge Level: K2)
*   **CO4 (Apply the knowledge of digital modulation in digital transmission):** TDM is an application of digital modulation principles to transmit multiple digital signals. (Knowledge Level: K3)

**Textbook References:**
*   **Kennedy's Electronic Communication Systems:** Provides a thorough explanation of TDM, including synchronous and asynchronous TDM, frame structures, and synchronization. (Chapter on Digital Multiplexing)
*   **Wayne Tomasi's Electronic Communication Systems:** Covers multiplexing techniques, detailing TDM's principles, implementation, and advantages/disadvantages. (Chapter on Multiplexing and Demultiplexing)
*   **Taub & Schilling's Principles of Communication Systems:** Discusses time-division multiplexing in the context of digital communications and its relationship with pulse modulation. (Chapter on Digital Communication Systems)

---

### 4. TDM with PAM System Design Considerations

Designing a TDM system with PAM involves several crucial aspects to ensure reliable and efficient communication.

**Key Considerations:**

*   **Sampling Rate:** The Nyquist-Shannon sampling theorem dictates the minimum sampling rate required to perfectly reconstruct a signal. For digital signals represented by PAM, the sampling rate must be at least twice the highest frequency component of the baseband digital signal.
*   **Pulse Width ($T_s$) and Pulse Period ($T$):** The choice of pulse width and period influences the bandwidth requirements and the risk of Inter-Symbol Interference (ISI). A narrower pulse requires more bandwidth but reduces ISI within a symbol period.
*   **Guard Bands:** To combat ISI caused by pulse spreading and timing jitter, small guard bands are often inserted between time slots. The duration of these guard bands is critical; too short increases ISI, too long wastes bandwidth.
*   **Synchronization:**
    *   **Frame Synchronization:** The demultiplexer needs to identify the start of each frame. This is achieved using a unique synchronization word or pattern at the beginning of each frame.
    *   **Bit Synchronization (Pulse Timing):** The demultiplexer needs to sample the incoming PAM pulse at its peak amplitude. This is achieved by a clock recovery circuit.
*   **Number of Input Channels ($N$):** The total number of channels to be multiplexed.
*   **Data Rate of Each Channel:** The rate at which each individual digital signal generates bits.
*   **Bandwidth of the Communication Channel:** The TDM signal, being a sequence of PAM pulses, will occupy a certain bandwidth. This bandwidth must be available on the transmission channel.

**Calculating Bandwidth:**

The bandwidth required for a TDM-PAM system depends on the overall bit rate of the multiplexed signal. If the total bit rate of the $N$ input signals is $R_{total}$, and each bit is represented by a pulse of width $T_b$, then the symbol rate is $R_{total}$. The bandwidth required is roughly proportional to $1/T_b$.

For a rectangular pulse of width $T_s$, the main lobe of its spectrum extends to approximately $1/T_s$. If the bit duration is $T_b$, then $T_s = T_b$, and the bandwidth is approximately $1/T_b$. The total bit rate of the TDM signal is $N \times R_{individual\_bit\_rate}$, assuming each input is a single bit stream.

**System Components:**

*   **Multiplexer (MUX):**
    *   Samples and converts incoming digital signals to PAM.
    *   Allocates time slots.
    *   Interleaves the PAM pulses.
    *   Adds synchronization bits.
*   **Transmitter:**
    *   Transmits the composite TDM-PAM signal.
*   **Receiver:**
    *   **Demultiplexer (DEMUX):**
        *   Detects frame synchronization.
        *   Extracts individual PAM pulse trains from their respective time slots.
        *   Recovers bit timing.
    *   **PAM Demodulator/Decoder:**
        *   Detects the amplitude of each PAM pulse.
        *   Converts the amplitude back to digital bits.

**Example Problem and Solution:**

**Problem:** Four digital signals, each operating at a bit rate of 10 kbps, are to be multiplexed using synchronous TDM with binary PAM. Each PAM pulse has a duration of 100 ns. A guard time of 10 ns is inserted between consecutive pulses in the composite TDM signal.

**(a) What is the bit rate of the composite TDM signal?**
**(b) What is the duration of a time slot in the TDM frame?**
**(c) What is the minimum bandwidth required for the composite TDM signal?**

**Solution:**

**(a) Bit rate of the composite TDM signal:**
Since there are 4 input signals, and each operates at 10 kbps, the total bit rate is:
$R_{total} = N \times R_{individual\_bit\_rate}$
$R_{total} = 4 \times 10 \text{ kbps} = 40 \text{ kbps}$

**(b) Duration of a time slot:**
In synchronous TDM, each input signal gets a time slot in every frame. The duration of a time slot is determined by the bit duration of the individual signal.
Bit duration of individual signal ($T_b$) = 100 ns = $0.1 \mu s$.
The duration of a time slot is equal to the bit duration of the individual signal.
Duration of time slot = $T_b = 100 \text{ ns}$.

**(c) Minimum bandwidth required for the composite TDM signal:**
The composite TDM signal has a bit rate of 40 kbps. The pulse width in the composite signal is effectively the duration of a time slot plus the guard time.
Effective pulse period in composite signal ($T_{composite}$) = Duration of time slot + Guard time
$T_{composite} = 100 \text{ ns} + 10 \text{ ns} = 110 \text{ ns}$

The bandwidth required is approximately the reciprocal of the effective pulse period:
$B \approx \frac{1}{T_{composite}}$
$B \approx \frac{1}{110 \times 10^{-9} \text{ s}} = \frac{1}{0.11 \times 10^{-6} \text{ s}} \approx 9.09 \times 10^6 \text{ Hz} = 9.09 \text{ MHz}$

*(Note: This is an approximation. The actual bandwidth depends on the pulse shape and the allowed side lobe levels. For rectangular pulses, the first null is at $1/T_s$, meaning the main lobe width is $2/T_s$. So, a more conservative bandwidth estimate would be closer to $2/T_{composite}$ or consider the effects of the guard time on the overall symbol rate.)*

A more practical bandwidth calculation considers the overall symbol rate of the multiplexed signal. The symbol rate of the composite TDM signal is equal to its bit rate (since it's binary PAM).
Symbol Rate = $R_{total} = 40 \text{ kbps}$.
For a baseband signal, the minimum bandwidth is generally considered to be half the symbol rate (Nyquist bandwidth), which is $R_{total}/2$. However, the pulse width and guard times influence the spectral content. If we consider the effective pulse duration of 110 ns, the bandwidth to accommodate this pulse is approximately $1/110 \text{ ns} \approx 9.09 \text{ MHz}$. For practical purposes, a bandwidth of at least twice the symbol rate of the individual channels might be considered to accommodate the sampling and TDM process.

Let's re-evaluate based on the composite bit rate:
Total bit rate = 40 kbps.
For baseband transmission, a bandwidth of $R_{total}/2$ is theoretically sufficient for perfect reconstruction if the pulses were ideal sinc pulses. However, with practical rectangular pulses and guard times, a wider bandwidth is needed. The main lobe of the spectrum for a pulse of duration $T_p$ extends to $1/T_p$.

If we consider the total rate including guard time, the effective "symbol period" for the multiplexed stream is the sum of the slot duration and guard time for one channel, which is $100 \text{ ns} + 10 \text{ ns} = 110 \text{ ns}$. This implies a symbol rate for the composite signal related to this period.

Let's consider the total number of bits per frame. If each of the 4 channels sends one bit in its slot, and there's a synchronization pattern of, say, 1 bit, and guard times.
Total bits per frame = 4 (data) + 1 (sync) = 5 bits.
Let the duration of the frame be $T_f$.
$T_f = 4 \times (T_b + T_{guard\_time})$ for 4 channels with guard time after each, plus sync.
If guard time is per slot:
Duration of one slot including guard time = $100 \text{ ns} + 10 \text{ ns} = 110 \text{ ns}$.
Total frame duration $T_f = 4 \times 110 \text{ ns} + T_{sync\_pattern}$. Let's assume sync pattern is also a pulse, so 100 ns for sync pattern.
$T_f = 4 \times 110 \text{ ns} + 100 \text{ ns} = 440 \text{ ns} + 100 \text{ ns} = 540 \text{ ns}$.
Frame rate = $1/T_f = 1/(540 \times 10^{-9} \text{ s}) \approx 1.85 \text{ Mbps}$. This doesn't seem right as we are only transmitting 40kbps of data.

Let's re-interpret the problem: "Each PAM pulse has a duration of 100 ns." This means the signal from each channel is a sequence of 100 ns pulses. "A guard time of 10 ns is inserted between consecutive pulses in the composite TDM signal." This implies guard time between the multiplexed pulses.

The composite TDM signal is formed by interleaving pulses from 4 sources. Each pulse lasts 100 ns.
The structure of the TDM signal is:
[Pulse from S1 (100ns)] [Guard (10ns)] [Pulse from S2 (100ns)] [Guard (10ns)] [Pulse from S3 (100ns)] [Guard (10ns)] [Pulse from S4 (100ns)] [Guard (10ns)] ... and then a synchronization pattern.

The total time for one "unit" of transmission from each channel, including its guard band, within the composite signal is $100 \text{ ns} + 10 \text{ ns} = 110 \text{ ns}$.
This 110 ns is the effective symbol period for each of the 4 sources within the TDM frame.
The total bit rate is 40 kbps. This means the rate of bits arriving at the multiplexer is 40 kbps.
The composite signal rate is also 40 kbps, but it's spread over time slots with guard bands.

Let's think about the overall data rate of the multiplexed stream. It's 40 kbps.
For a baseband signal with a bit rate $R$, the minimum bandwidth is $R/2$.
So, minimum bandwidth required for the composite TDM signal is $40 \text{ kbps} / 2 = 20 \text{ kHz}$.

However, the pulse duration and guard times affect the spectral characteristics. The bandwidth is also influenced by the pulse shaping. If we consider the "symbol duration" of the composite signal to be the time it takes for one bit from one of the sources to be transmitted in its slot and its associated guard time: $100 \text{ ns} + 10 \text{ ns} = 110 \text{ ns}$.
The rate associated with this is $1/110 \text{ ns} \approx 9.09 \text{ Msymbols/s}$.
If we assume this effective symbol rate, then the bandwidth would be approximately $9.09 \text{ MHz}$ (considering the main lobe of the spectrum).

**Let's assume the question implies the bandwidth needed to accommodate the 100ns pulses with the guard times.** The 40 kbps is the information rate. The TDM process effectively creates a sequence of pulses, each of duration 100ns, separated by 10ns. The overall rate of these combined pulses (bit + guard) is what dictates the bandwidth.
The total duration for one bit from one channel in the multiplexed stream, including the guard time, is $100 \text{ ns} + 10 \text{ ns} = 110 \text{ ns}$. This can be considered the symbol period of the composite signal.
The symbol rate of the composite signal is $1 / (110 \text{ ns}) \approx 9.09 \text{ Mbaud}$.
The bandwidth required for a baseband signal with a symbol rate $R_s$ is typically at least $R_s/2$.
So, the bandwidth would be $\approx 9.09 \text{ MHz} / 2 \approx 4.54 \text{ MHz}$.

**Let's reconsider the prompt and standard conventions.** Often, when asking for bandwidth, it refers to the minimum bandwidth needed for transmission without excessive distortion.
The individual bit rate is 10 kbps, so the bit period is $1/10 \text{ kbps} = 100 \mu s$.
The problem states "Each PAM pulse has a duration of 100 ns". This is very short compared to the bit period. This might imply that multiple bits are being grouped and then transmitted as a PAM pulse of 100ns, or it refers to the sampling instant.

Let's assume that the 100 ns is the *duration of the pulse representing a bit*, and the 10 kbps is the rate at which these bits are generated by each source.
So, for each source, the rate is 10 kbps, meaning a bit period of 100 $\mu s$. If a pulse of 100 ns is used to represent this bit, there's a lot of "empty" time within the bit period. This is unusual for simple PAM.

**Revised Interpretation based on common TDM-PAM:**
Assume each source produces a stream of bits at 10 kbps.
These bits are then represented by PAM pulses. A typical PAM system would use a pulse duration roughly equal to the bit period or use pulse shaping techniques.
If a bit period is $100 \mu s$, and the pulse duration is $100 \text{ ns}$, it suggests that perhaps the data is sampled at 100 ns intervals within the $100 \mu s$ bit period, or the $100 \text{ ns}$ refers to the pulse width *used in the TDM structure*.

Let's assume:
*   Each input signal is 10 kbps.
*   Each bit is transmitted as a PAM pulse.
*   The effective duration for each bit in the TDM stream, including guard time, determines the bandwidth.
*   The problem implies that the *sampling rate* within each channel is high enough to create these short pulses, and the 10kbps is the *overall bit rate* after some processing, or the rate of the original digital stream.

Let's go with the interpretation that the TDM process takes bits at 10kbps from each source and creates a composite stream where each bit is represented by a pulse of 100ns duration, and guard times of 10ns are added between multiplexed pulses.

**(a) Total Bit Rate:** $4 \times 10 \text{ kbps} = 40 \text{ kbps}$.
**(b) Duration of a time slot:** This refers to the duration allocated to each source's data within the frame. Since the pulse duration is 100ns, the time slot must accommodate at least this. The guard time is *between* pulses. So, the time slot for the pulse itself is 100 ns.
**(c) Minimum Bandwidth:** The effective symbol period of the composite stream is the pulse duration plus the guard time: $100 \text{ ns} + 10 \text{ ns} = 110 \text{ ns}$.
The symbol rate is $1/110 \text{ ns} \approx 9.09 \text{ Mbaud}$.
The minimum bandwidth for a baseband system is half the symbol rate.
$B_{min} \approx \frac{1}{2 \times 110 \text{ ns}} = \frac{1}{220 \text{ ns}} \approx 4.54 \text{ MHz}$.

This calculation makes more sense in terms of bandwidth requirements.

---

### 5. Important Points to Remember

*   **TDM:** Combines multiple signals by allocating distinct time slots to each on a single channel.
*   **PAM:** A digital modulation scheme where the amplitude of pulses represents digital data.
*   **Baseband Communication:** Digital data transmitted directly without carrier modulation.
*   **Synchronization is Key:** For TDM, frame and bit synchronization are critical for proper demultiplexing.
*   **Guard Bands:** Used to mitigate ISI and ICI in TDM systems.
*   **Bandwidth:** Determined by the overall bit rate of the multiplexed signal and the pulse characteristics (duration, shaping).
*   **M-ary PAM:** Increases data rate by transmitting multiple bits per pulse, but requires more complex circuitry and is more susceptible to noise.
*   **Trade-offs:** TDM offers efficiency but requires precise synchronization. PAM's bandwidth efficiency depends on the number of levels ($M$) and pulse shaping.

---

### 6. Practice Questions

1.  Explain the fundamental principle of Time Division Multiplexing (TDM).
2.  Describe how Pulse Amplitude Modulation (PAM) is used to represent digital data in baseband communication.
3.  What is the role of synchronization in a TDM system? Discuss both frame synchronization and bit synchronization.
4.  Consider a TDM system multiplexing 8 digital signals, each transmitting at 5 kbps. If each bit is represented by a unipolar PAM pulse of 50 ns duration, and a guard time of 5 ns is added after each pulse in the composite signal, calculate:
    (a) The total bit rate of the multiplexed signal.
    (b) The duration of each time slot in the TDM frame.
    (c) The minimum bandwidth required for the composite signal.
5.  What are the advantages and disadvantages of TDM compared to Frequency Division Multiplexing (FDM)? (Relates to broader context of multiplexing).
6.  Explain the concept of M-ary PAM and how it can increase the data transmission rate. What are the implications for the signal-to-noise ratio (SNR)?

---

### 7. Answers to Practice Questions

1.  **TDM Principle:** TDM divides the available transmission time of a single communication channel into several recurring time slots. Each time slot is assigned to a different input signal, allowing multiple signals to share the channel by transmitting in their allocated time segments sequentially.
2.  **PAM for Digital Data:** In digital PAM, the amplitude of a carrier pulse is varied in discrete steps to represent binary data. For example, in binary PAM, a higher pulse amplitude might represent a '1', and a lower or zero amplitude might represent a '0'. In M-ary PAM, $M$ different amplitude levels are used to represent $\log_2(M)$ bits per symbol.
3.  **Synchronization in TDM:**
    *   **Frame Synchronization:** The receiver's demultiplexer needs to identify the beginning of each TDM frame to know where each input signal's time slot starts. This is achieved by sending a unique synchronization pattern (sync word) at the beginning of every frame.
    *   **Bit Synchronization (Pulse Timing):** The receiver needs to sample each PAM pulse at its peak amplitude to accurately detect its level. This is accomplished by a clock recovery circuit that extracts timing information from the incoming signal.
4.  **Calculations for Practice Question 4:**
    *   **Total Bit Rate:** $8 \text{ signals} \times 5 \text{ kbps/signal} = 40 \text{ kbps}$.
    *   **Duration of each time slot:** The time slot needs to accommodate the PAM pulse. So, the duration of each time slot is equal to the pulse duration: 50 ns.
    *   **Minimum Bandwidth:**
        The effective symbol period for each bit in the composite stream, including the pulse and guard time, is: $50 \text{ ns} + 5 \text{ ns} = 55 \text{ ns}$.
        The symbol rate of the composite signal is $1 / (55 \text{ ns}) \approx 18.18 \text{ Mbaud}$.
        The minimum bandwidth required for a baseband signal is half the symbol rate:
        $B_{min} \approx \frac{18.18 \text{ Mbaud}}{2} \approx 9.09 \text{ MHz}$.
5.  **TDM vs. FDM:**
    *   **Advantages of TDM over FDM:**
        *   No need for carrier modulation/demodulation.
        *   Simpler circuitry for baseband transmission.
        *   Efficient use of bandwidth when data is bursty (in asynchronous TDM).
    *   **Disadvantages of TDM compared to FDM:**
        *   Requires strict synchronization.
        *   Guard times can waste bandwidth.
        *   Susceptible to timing jitter.
        *   FDM can be more suitable for analog signals or when channel bandwidth is very wide and can be easily divided into narrow frequency bands.
6.  **M-ary PAM:** M-ary PAM represents $\log_2(M)$ bits by using $M$ distinct amplitude levels for the pulses. For instance, 4-ary PAM (M=4) can transmit 2 bits per pulse. This increases the data rate compared to binary PAM by a factor of $\log_2(M)$. However, the separation between adjacent amplitude levels decreases as $M$ increases, making the system more susceptible to noise and requiring a higher signal-to-noise ratio (SNR) for reliable detection. The required bandwidth is also reduced for the same data rate if $M>2$, as more bits are packed into each symbol.

---

This comprehensive set of notes covers the core concepts of Time Division Multiplexing with Pulse Amplitude Modulation in digital baseband communication, aligning with the provided course outcomes and referencing the specified textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
