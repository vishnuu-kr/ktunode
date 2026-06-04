---
title: "Set up an FM transmitter using GNU Radio."
subject: "COMMUNICATION LAB I"
module: "Module 7: FM transmission using SDR"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecc4"
status: "completed"
scrapedAt: "2026-05-23T17:54:31.870Z"
---
# COMMUNICATION LAB I: Module 7 - FM Transmission using SDR

## Topic: Set up an FM Transmitter using GNU Radio

This module focuses on implementing an FM transmitter using Software Defined Radio (SDR) technology with the GNU Radio framework. This hands-on experience will deepen your understanding of FM modulation, SDR principles, and practical communication system development.

---

### Learning Outcomes Addressed:

*   **Understand the principles of FM modulation and its implementation in SDR.** (Relates to CO1, CO3)
*   **Configure and utilize GNU Radio Companion to build an FM transmitter flowgraph.** (Relates to CO3)
*   **Select and configure appropriate GNU Radio blocks for FM transmission.** (Relates to CO3)
*   **Set up an SDR hardware (e.g., RTL-SDR, USRP) as an FM transmitter.** (Relates to CO3)
*   **Generate and transmit an FM signal containing an audio input.** (Relates to CO1, CO3)
*   **Verify the transmitted FM signal using a receiver (e.g., another SDR, a commercial FM radio).** (Relates to CO1, CO3)

---

### 1. Introduction to FM Transmission

**Frequency Modulation (FM)** is a modulation technique where the instantaneous frequency of a carrier wave is varied in accordance with the instantaneous amplitude of the modulating signal.

*   **Key Concept:** In FM, the amplitude of the carrier wave remains constant, while its frequency deviates.
*   **Advantages of FM:**
    *   Higher immunity to noise and interference compared to AM.
    *   Better audio quality.
    *   Reduced power consumption (carrier amplitude is constant).
*   **Disadvantages of FM:**
    *   Wider bandwidth requirement.
    *   More complex transmitter and receiver circuitry (though SDR simplifies this).

**Textbook Reference:**
*   **Principles of Communication Systems Simulation with Wireless Applications (Tranter, Shanmugan, Rappaport, Kosbar):** Chapter on Angle Modulation provides a theoretical foundation for FM.
*   **Modern Digital and Analog Communication Systems (Lathi, Ding):** Chapters on FM theory and applications.
*   **Electronic communication systems (Kennedy):** Covers the fundamentals of FM modulation and transmission.

---

### 2. Software Defined Radio (SDR) for FM Transmission

**Software Defined Radio (SDR)** is a radio communication system where components that have been traditionally implemented in hardware (like mixers, filters, modulators, demodulators, detectors, etc.) are instead implemented using software on a personal computer or embedded system.

*   **Key Concept:** Flexibility and reconfigurability are the hallmarks of SDR. The signal processing is done in software, allowing for rapid prototyping and experimentation.
*   **How SDR works for Transmission:**
    1.  **Digital Data Generation:** The signal to be transmitted (e.g., audio) is digitized.
    2.  **Modulation in Software:** The digital data is used to perform the modulation (in this case, FM) using software algorithms.
    3.  **Digital-to-Analog Conversion (DAC):** The modulated digital signal is converted into an analog signal.
    4.  **Upconversion and Filtering:** The analog signal is then upconverted to the desired transmission frequency and filtered.
    5.  **Transmission:** The signal is sent to the antenna for broadcast.

**Textbook Reference:**
*   **The Hobbyist's Guide to the RTL-SDR (Laufer):** Provides an excellent introduction to SDR hardware and its capabilities, including using it as a transmitter.
*   **Digital Modulations using Python (Viswanathan):** Demonstrates software-based modulation techniques, which are fundamental to SDR.

---

### 3. GNU Radio and GNU Radio Companion (GRC)

**GNU Radio** is a free and open-source software development toolkit that provides signal processing blocks and a framework for building radio receivers and transmitters.

**GNU Radio Companion (GRC)** is a graphical user interface (GUI) for GNU Radio, allowing users to create flowgraphs by connecting pre-built blocks. This significantly simplifies the process of designing and implementing communication systems.

*   **Key Concept:** GRC enables visual programming for radio signal processing.
*   **Components of a GRC Flowgraph:**
    *   **Source Blocks:** Generate signals (e.g., audio input, sine wave).
    *   **Processing Blocks:** Perform signal manipulation (e.g., modulation, filtering, arithmetic operations).
    *   **Sink Blocks:** Output signals (e.g., to an SDR device, a file, a waterfall display).

---

### 4. Setting Up the FM Transmitter Flowgraph in GRC

To set up an FM transmitter, we need to create a flowgraph in GRC that takes an audio input, modulates it using FM, and then transmits it via an SDR device.

**Core Blocks Required:**

1.  **Audio Source Block:** To provide the modulating audio signal.
    *   **Options:** `Audio Source` (for system microphone/line-in) or `Wav File Source` (to play a pre-recorded audio file).
    *   **Parameters:** `Device Name` (for audio source), `File` (for wav file source), `Repeat` (optional).

2.  **FM Modulator Block:** To perform the frequency modulation.
    *   **Block:** `FM Mod` (or `Freq Mod` depending on version/context).
    *   **Key Concept:** This block takes an input signal (audio) and a carrier frequency (implicitly handled by the USRP/SDR sink) to produce a frequency-modulated signal.
    *   **Parameter:** `Sensitivity` (determines how much the carrier frequency deviates for a given input amplitude. A common value is related to the desired frequency deviation, e.g., 0.35 for typical FM broadcasting where max deviation is 75 kHz).

3.  **SDR Sink Block:** To transmit the modulated signal using an SDR hardware.
    *   **Options:**
        *   `USRP Sink`: For Ettus Research USRP devices.
        *   `RTL-SDR Sink`: For RTL-SDR dongles (often requires a special setup or configuration for transmission, as not all RTL-SDRs are designed for reliable transmission).
        *   `SoapySDR Sink`: A more general sink that can interface with various SDR hardware via the SoapySDR library.
    *   **Key Parameters:**
        *   `Center Frequency`: The carrier frequency on which you want to transmit (e.g., 100.1 MHz).
        *   `Sample Rate`: The sample rate of the SDR hardware. This is crucial for correct signal processing.
        *   `Gain`: Transmit gain (if supported by the hardware).
        *   `Frequency Correction`: For USRPs, essential for compensating for local oscillator drift.
        *   `Antenna`: The antenna port to use on the SDR.

**Example Flowgraph Structure (Conceptual):**

```
+-----------------+      +------------+      +------------+
|                 |      |            |      |            |
|  Audio Source   |----->|  FM Mod    |----->|  SDR Sink  |
| (e.g., Wav File)|      |            |      | (e.g., USRP)|
|                 |      |            |      |            |
+-----------------+      +------------+      +------------+
```

**Step-by-Step GRC Setup:**

1.  **Create a New Flowgraph:** Open GNU Radio Companion and create a new empty flowgraph.
2.  **Add Audio Source:** Drag and drop an `Audio Source` or `Wav File Source` from the "Sources" block category. Configure its parameters (file path, device, etc.).
3.  **Add FM Modulator:** Drag and drop the `FM Mod` block from the "Modulation" or "Digital" block category. Connect the output of the Audio Source to the input of the FM Mod block. Set the `Sensitivity` parameter (experiment with values).
4.  **Add SDR Sink:** Drag and drop the appropriate SDR Sink block (e.g., `USRP Sink`, `SoapySDR Sink`) from the "Sinks" block category.
    *   **Crucially, set the `Center Frequency` to your desired transmission frequency (e.g., 100,100,000 Hz for 100.1 MHz).**
    *   **Set the `Sample Rate` to match your SDR's capabilities (e.g., 2 Msps, 4 Msps).** The sample rate here dictates the bandwidth of your transmitted signal.
    *   Connect the output of the `FM Mod` block to the input of the SDR Sink block.
5.  **Configure SDR Sink Parameters:** Ensure the `Device Address` (if applicable) and `Antenna` are correctly set for your SDR hardware.
6.  **Add Optional Blocks:**
    *   **`Float to Complex`:** If the `FM Mod` block outputs floats and the SDR sink expects complex numbers, you might need this block.
    *   **`Low Pass Filter`:** You might want to filter the audio signal before modulation to limit bandwidth and prevent aliasing.
    *   **`Throttle`:** To control the rate at which data is processed, especially if not directly tied to hardware timing.
7.  **Run the Flowgraph:** Click the "Run" button in GRC.

**Important Note on RTL-SDR Transmission:**
*   RTL-SDR dongles are primarily designed for reception. Their transmission capabilities can be limited, unreliable, and may not be legal in all jurisdictions for general broadcasting due to power output and lack of proper filtering.
*   If using an RTL-SDR for transmission, ensure you are using a compatible sink (`RTL-SDR Sink` or `SoapySDR Sink` with appropriate configuration) and are aware of any hardware limitations or legal restrictions. For this lab, if a USRP or similar is available, it's preferable for transmission.

**Textbook Reference:**
*   **The Hobbyist's Guide to the RTL-SDR (Laufer):** Discusses the limitations and possibilities of using RTL-SDRs for transmission.

---

### 5. Transmitting and Verifying the FM Signal

Once the flowgraph is running:

1.  **Transmitter Output:** The SDR hardware will now be broadcasting an FM signal centered at your specified `Center Frequency`.
2.  **Receiver Setup:** You will need a receiver to verify the transmission. This can be:
    *   **Another SDR:** Configure a second SDR with GRC (or another SDR software like SDR# or GQRX) to tune to your transmission frequency and demodulate the FM signal. You should hear the audio that was fed into the transmitter.
    *   **A Commercial FM Radio:** Tune a standard FM radio to the frequency you are transmitting on. If your transmission power and antenna are sufficient, you should be able to pick up the audio.

**Key Considerations for Verification:**

*   **Frequency Accuracy:** Ensure your transmission frequency and receiver tuning are precise.
*   **Signal Strength:** The strength of the received signal will depend on your transmitter's power output, antenna efficiency, and the distance between the transmitter and receiver.
*   **Bandwidth:** The `Sample Rate` in your GRC flowgraph and the `Sensitivity` in the `FM Mod` block will affect the bandwidth of your FM signal. A wider bandwidth allows for higher fidelity audio but occupies more spectrum.

**Course Outcome Alignment:**
*   **CO1 (Setup prototype circuits):** Building the GRC flowgraph and connecting it to hardware is akin to setting up a signal processing "circuit" in software.
*   **CO3 (Emulate a communication system with SDR):** This entire topic is a direct application of this outcome, as you are building a functional FM transmitter using SDR and software.

---

### 6. Practice Questions and Exercises

**Exercise 7.1: Basic FM Transmitter**

1.  **Objective:** Create a simple FM transmitter in GRC that transmits a sine wave.
2.  **Steps:**
    *   Open GRC.
    *   Add a `Signal Source` block. Configure it to output a sine wave.
        *   `Waveform`: Sine
        *   `Frequency`: e.g., 440 Hz (a musical note)
        *   `Sample Rate`: Match your SDR's sample rate (e.g., 2e6 for 2 Msps)
        *   `Amplitude`: e.g., 0.5
    *   Add an `FM Mod` block. Connect the `Signal Source` output to the `FM Mod` input. Set `Sensitivity` to `0.35`.
    *   Add an `USRP Sink` block (or `SoapySDR Sink`).
        *   Set `Center Frequency` to a legal, unused frequency in your lab (e.g., 433.92 MHz if permitted, or a specific lab frequency).
        *   Set `Sample Rate` to match the `Signal Source`.
        *   Configure any other necessary parameters for your SDR (device address, gain).
    *   Connect the `FM Mod` output to the `USRP Sink` input.
    *   Run the flowgraph.
    *   **Verification:** Use a spectrum analyzer (like GQRX or a second SDR setup) or a commercial FM radio tuned to your transmission frequency. You should observe a carrier wave with sidebands. You might not hear anything if the input is just a sine wave without a demodulator on the receiver side, but the spectral characteristics will indicate successful FM modulation.

3.  **Question:** What happens to the spectral width of the transmitted signal if you increase the `Amplitude` of the `Signal Source`? What about if you increase the `Sensitivity` of the `FM Mod` block?
    *   **Answer:** Increasing the `Amplitude` of the input signal or the `Sensitivity` of the `FM Mod` block will increase the frequency deviation, leading to a wider bandwidth for the FM signal.

**Exercise 7.2: Transmitting an Audio File**

1.  **Objective:** Create an FM transmitter that transmits an audio file.
2.  **Steps:**
    *   Find a short `.wav` audio file.
    *   Open GRC.
    *   Add a `Wav File Source` block. Configure it with the path to your `.wav` file.
        *   Ensure `Repeat` is checked if you want the audio to loop.
        *   Set its `Sample Rate` to match your SDR.
    *   Add an `FM Mod` block. Connect the `Wav File Source` to the `FM Mod` input. Set `Sensitivity` to `0.35`.
    *   Add your SDR Sink block (e.g., `USRP Sink`).
        *   Set `Center Frequency` to a new legal, unused frequency.
        *   Set `Sample Rate` to match the `Wav File Source`.
    *   Connect the `FM Mod` output to the SDR Sink input.
    *   Run the flowgraph.
    *   **Verification:** Tune a commercial FM radio or a receiving SDR to your transmission frequency. You should hear the audio from the `.wav` file.

3.  **Question:** If you tune your receiver slightly off the intended `Center Frequency` of your transmitter, what do you expect to hear, and why?
    *   **Answer:** You will likely hear distorted audio or nothing at all. This is because FM demodulation is sensitive to being precisely on the carrier frequency. Slight detuning will shift the base frequency of the demodulated signal, and significant detuning will cause the receiver to effectively miss the transmitted information.

**Exercise 7.3: Exploring Bandwidth**

1.  **Objective:** Observe how the transmitted bandwidth changes with modulation parameters.
2.  **Steps:**
    *   Use the flowgraph from Exercise 7.2.
    *   **Scenario A:** Transmit the audio file. Observe the occupied bandwidth on a spectrum analyzer.
    *   **Scenario B:** Increase the `Sensitivity` of the `FM Mod` block (e.g., to `0.7`). Rerun and observe the bandwidth.
    *   **Scenario C:** Change the `Sample Rate` of the `Wav File Source` and the `SDR Sink` to a higher value (e.g., 4 Msps) and adjust the `Sensitivity` to achieve a similar perceived audio volume/quality. Observe the bandwidth. (Note: This might require adjusting the `FM Mod` sensitivity significantly).

3.  **Question:** How does increasing the `Sensitivity` of the `FM Mod` block affect the occupied bandwidth of the FM signal? How does the `Sample Rate` of the system relate to the achievable bandwidth?
    *   **Answer:** Increasing `Sensitivity` increases the frequency deviation, thus widening the occupied bandwidth. The `Sample Rate` of the system defines the maximum rate at which the digital signal can be processed and transmitted, effectively setting the upper limit for the bandwidth that can be accurately represented and transmitted. A higher sample rate allows for a wider potential bandwidth.

---

### 7. Important Points to Remember

*   **Frequency Allocation:** Always transmit on designated legal frequencies and ensure you do not interfere with existing licensed services. For lab purposes, use frequencies explicitly provided or permitted by your instructor.
*   **SDR Hardware:** Understand the capabilities and limitations of your specific SDR hardware (e.g., transmit power, frequency range, sample rate).
*   **Sample Rate and Bandwidth:** The sample rate of your GNU Radio flowgraph directly influences the bandwidth of the signals you can generate and transmit. For FM, the occupied bandwidth is roughly proportional to the frequency deviation (determined by audio amplitude and modulation sensitivity) plus the baseband audio bandwidth.
*   **Modulation Index:** The modulation index ($\beta = \Delta f / f_m$, where $\Delta f$ is frequency deviation and $f_m$ is the maximum modulating frequency) is a key parameter for FM. In GRC, `Sensitivity` and the input signal's amplitude influence $\Delta f$.
*   **Antenna:** A proper antenna is crucial for effective transmission. The type and tuning of the antenna will significantly impact range and signal strength.
*   **Gain:** Transmit gain (if available on your SDR) controls the power output. Be cautious not to over-drive the transmitter or exceed legal power limits.
*   **Testing and Debugging:** Use spectrum analyzers and receivers to verify your transmission. If it's not working, systematically check each block's configuration and connections.

---

### 8. Alignment with Course Outcomes

*   **CO1: Setup simple prototype circuits for waveform coding and digital modulation techniques working in a team.**
    *   **Relevance:** Building the GRC flowgraph is analogous to setting up a signal processing circuit. You are implementing FM modulation (a digital modulation technique in its software implementation). Working in a team to share flowgraphs and troubleshoot reinforces this outcome.
*   **CO2: Simulate the error performance of a digital communication system using standard binary and M-ary modulation schemes.**
    *   **Relevance:** While this topic focuses on FM (an analog modulation technique), the underlying principles of signal generation, modulation, and transmission in a simulated/SDR environment are foundational. Understanding how different modulation parameters affect the transmitted signal's characteristics is a stepping stone to analyzing error performance.
*   **CO3: Develop hands-on skills to emulate a communication system with software-design-radio working in a team.**
    *   **Relevance:** This topic is a direct and primary application of CO3. You are actively using GNU Radio and SDR hardware to create a functional FM transmitter, gaining practical, hands-on experience in emulating a real-world communication system.

---

This module provides a practical bridge between theoretical communication concepts and their implementation using powerful SDR tools. By successfully setting up and testing an FM transmitter, you will gain invaluable insights into the workings of modern wireless communication systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
