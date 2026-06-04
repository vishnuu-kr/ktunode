---
title: "Periodic analog signals - Sine wave, Amplitude, Phase, Wavelength, Time and frequency domain, Bandwidth."
subject: "DATA COMMUNICATION"
module: "Module 1: Communication model "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bedb"
status: "completed"
scrapedAt: "2026-05-20T16:51:35.283Z"
---
# DATA COMMUNICATION - Module 1: Communication Model

## Topic: Periodic Analog Signals

This module introduces the fundamental building blocks of data communication: **analog signals**. We will explore the characteristics of periodic analog signals, focusing on the most common representation: the **sine wave**. Understanding these concepts is crucial for comprehending how information is transmitted and processed in communication systems.

### Learning Outcomes:

*   Understand the concept of periodic analog signals.
*   Define and explain the characteristics of a sine wave: amplitude, phase, and frequency.
*   Relate time and frequency domains for representing signals.
*   Define and calculate bandwidth.
*   Understand the significance of these concepts in data communication.

---

### 1. What are Periodic Analog Signals?

**Periodic analog signals** are signals that repeat themselves at regular intervals. They are characterized by their continuous variation in amplitude over time, unlike digital signals which have discrete values.

**Key Concepts:**

*   **Analog Signal:** A signal whose amplitude can take on any value within a continuous range. Think of a dimmer switch for a light, where you can set the brightness to any level, not just "on" or "off."
*   **Periodic Signal:** A signal that repeats its pattern over a fixed interval of time. This interval is called the **period**.
*   **Non-periodic (Aperiodic) Signal:** A signal that does not repeat its pattern over a fixed interval of time.

**Example:**

*   **Periodic Analog Signal:** The smooth, undulating wave produced by a musical instrument.
*   **Non-periodic Analog Signal:** A human voice speaking, which varies in pitch and volume unpredictably.
*   **Digital Signal:** A square wave representing binary data (0s and 1s).

---

### 2. The Sine Wave: The Foundation of Analog Signals

The **sine wave** is the simplest and most fundamental periodic analog signal. Any complex periodic analog signal can be represented as a sum of sine waves (as per Fourier analysis, which we'll touch upon briefly).

**Equation of a Sine Wave:**

A general equation for a sine wave is:

`s(t) = A * sin(2 * π * f * t + φ)`

Where:

*   `s(t)`: The amplitude of the signal at time `t`.
*   `A`: **Amplitude** (explained below).
*   `sin`: The sine trigonometric function.
*   `2 * π`: Constant, representing a full cycle in radians.
*   `f`: **Frequency** (explained below).
*   `t`: Time.
*   `φ`: **Phase** (explained below).

---

#### 2.1 Amplitude (A)

**Definition:** Amplitude is the maximum displacement or strength of the signal from its resting position (zero level). It represents the "height" of the wave.

**Key Concepts:**

*   **Peak Amplitude:** The maximum value of the signal.
*   **Peak-to-Peak Amplitude:** The difference between the maximum and minimum values of the signal.
*   **Root Mean Square (RMS) Amplitude:** Used for AC signals, it's a measure of the effective power of the signal. For a pure sine wave, RMS amplitude is approximately 0.707 times the peak amplitude.

**Units:** Typically measured in volts (V) for electrical signals or Pascals (Pa) for sound waves.

**Example:**

Imagine a sound wave. A louder sound would have a higher amplitude than a quieter sound.

**Illustration:**

```
      ^ Amplitude
      |      .-----.
      |     /       \
   A -----/---------\-----   <-- Peak Amplitude
      |   /           \
      |  /             \
------|---------------------> Time
      | /               \
      |/                 \
  -A ---'------------------'---   <-- Minimum Amplitude
      |
```

---

#### 2.2 Frequency (f)

**Definition:** Frequency is the number of complete cycles or oscillations a signal makes in one second. It determines how "fast" the wave oscillates.

**Key Concepts:**

*   **Hertz (Hz):** The unit of frequency, where 1 Hz = 1 cycle per second.
*   **Kilohertz (kHz):** 1,000 Hz
*   **Megahertz (MHz):** 1,000,000 Hz
*   **Gigahertz (GHz):** 1,000,000,000 Hz

**Relationship with Period (T):** Frequency and period are inversely related:

`f = 1 / T`

Where `T` is the period in seconds.

**Example:**

*   A radio station broadcasting at 98.7 MHz has a signal that oscillates 98,700,000 times per second.
*   The alternating current (AC) in your home typically has a frequency of 50 Hz or 60 Hz.

---

#### 2.3 Phase (φ)

**Definition:** Phase describes the position of a point within a cycle of a periodic waveform. It essentially indicates a time shift of the waveform relative to a reference point. Phase is often measured in degrees or radians.

**Key Concepts:**

*   **Phase Shift:** A change in the starting point of the waveform.
*   **In Phase:** Two signals are in phase if their peaks and troughs align.
*   **Out of Phase:** Two signals are out of phase if their peaks and troughs do not align. A common example is a 180-degree phase shift, where one signal's peak coincides with the other's trough.

**Example:**

Imagine two sine waves of the same frequency.

*   If they start their cycle at the exact same time, they are **in phase**.
*   If one wave starts a quarter cycle later than the other, it has a **90-degree phase shift**.

**Illustration:**

```
      ^ Amplitude
      |      .-----.
      |     /       \
   A -----/---------\-----
      |   /           \
      |  /             \
------|---------------------> Time
      | /               \
      |/                 \
  -A ---'------------------'---

        Signal 1 (φ = 0)

      ^ Amplitude
      |           .-----.
      |          /       \
   A ----- ----/---------\-----  <-- Phase Shifted
      |       /           \
      |      /             \
------|-----/-----------------> Time
      |    /               \
      |   /                 \
  -A ---'------------------'---

        Signal 2 (φ = 90 degrees or π/2 radians)
```

---

#### 2.4 Wavelength (λ)

**Definition:** Wavelength is the spatial distance over which a wave's shape repeats. For electromagnetic waves (like radio waves), it's the distance between two consecutive corresponding points of the same phase (e.g., two peaks or two troughs).

**Key Concepts:**

*   **Relationship with Frequency and Speed:** Wavelength is related to frequency and the speed of propagation (`v`) by the following equation:

    `λ = v / f`

    Where `v` is the speed of the wave. For electromagnetic waves in a vacuum, `v = c` (the speed of light, approximately 3 x 10^8 meters per second).

**Units:** Typically measured in meters (m), centimeters (cm), or millimeters (mm).

**Example:**

*   A low-frequency radio wave will have a longer wavelength than a high-frequency radio wave.

---

### 3. Time Domain vs. Frequency Domain

These are two different ways to represent a signal.

#### 3.1 Time Domain Representation

**Definition:** The time domain shows how the signal's amplitude changes over time. This is the most intuitive way to visualize a signal, as seen in the sine wave illustrations above.

**What it shows:**

*   Amplitude variations.
*   Periodicity.
*   The overall shape of the signal as it evolves.

**Example:** A graph of `s(t) = 5 * sin(2 * π * 100 * t)` plotted with time on the x-axis and amplitude on the y-axis.

#### 3.2 Frequency Domain Representation

**Definition:** The frequency domain shows the signal's constituent frequencies and their respective amplitudes. It reveals the "frequency content" of the signal.

**Key Concepts:**

*   **Spectrum:** The representation of a signal in the frequency domain.
*   **Fourier Analysis:** A mathematical technique used to decompose a complex signal into a sum of simple sine waves (its frequency components).

**What it shows:**

*   Which frequencies are present in the signal.
*   The amplitude of each frequency component.

**Example:** For a pure sine wave with frequency `f` and amplitude `A`, its frequency domain representation would be a single vertical line at frequency `f` with height `A`. A complex signal would have multiple lines at different frequencies.

**Illustration:**

```
      ^ Amplitude
      |
      |       .--------.
      |       |        |
      |       |        |
      |       |        |
------|-------|--------|-------> Frequency
      |       |        |
      |       |        |
      |       |        |
      |       .--------.

      (Time Domain Representation of a Sine Wave)

      ^ Amplitude
      |
      |       |
      |       |
      |       |
------|-------o--------|-------> Frequency
      |       |        |
      |       |        |
      |       |        |
      |       |        |

      (Frequency Domain Representation of the same Sine Wave)
      (A single spike at its specific frequency)
```

---

### 4. Bandwidth (BW)

**Definition:** Bandwidth refers to the range of frequencies that a communication channel or a signal occupies. It's the difference between the highest and lowest frequencies in a signal or channel.

**Key Concepts:**

*   **Signal Bandwidth:** The range of frequencies that contain the significant energy of a signal.
*   **Channel Bandwidth:** The range of frequencies that a communication channel can pass or transmit.
*   **Relationship with Data Rate:** Generally, a wider bandwidth allows for a higher data transmission rate. This is a fundamental concept in communication system design.

**Units:** Measured in Hertz (Hz).

**Example:**

*   A telephone line has a bandwidth of approximately 300 Hz to 3,400 Hz. This means it can carry signals with frequencies within this range. The bandwidth of the telephone line is 3,400 Hz - 300 Hz = 3,100 Hz (or 3.1 kHz).
*   Broadband internet connections have much larger bandwidths, enabling faster data transfer.

**How Bandwidth Affects Signals:**

*   **Low Bandwidth:** Can distort or attenuate high-frequency components of a signal, leading to muffled sound or loss of detail.
*   **High Bandwidth:** Can carry a wider range of frequencies, preserving signal integrity and allowing for more information to be transmitted.

---

### 5. Practice Questions and Exercises

1.  **Identify the following signal characteristics from the equation:**
    `s(t) = 10 * sin(2 * π * 50 * t + π/4)`
    *   Amplitude:
    *   Frequency:
    *   Phase:

2.  **A periodic signal completes 100 cycles in 2 seconds. What is its frequency? What is its period?**

3.  **If a communication channel has a bandwidth of 10 kHz and a base frequency of 1 MHz, what is the range of frequencies that the channel can carry?**

4.  **Explain the difference between the time domain and frequency domain representation of a signal.**

5.  **Why is bandwidth important in data communication?**

---

### 6. Answers to Practice Questions

1.  **From the equation `s(t) = 10 * sin(2 * π * 50 * t + π/4)`:**
    *   **Amplitude:** 10 (units depend on the context, e.g., Volts)
    *   **Frequency:** 50 Hz (since 2πf = 2π*50)
    *   **Phase:** π/4 radians (or 45 degrees)

2.  **Calculation:**
    *   **Frequency:** 100 cycles / 2 seconds = 50 Hz
    *   **Period:** T = 1 / f = 1 / 50 Hz = 0.02 seconds

3.  **Range of Frequencies:**
    *   Assuming the base frequency is the center frequency, the range would be from (1 MHz - 10 kHz/2) to (1 MHz + 10 kHz/2).
    *   10 kHz = 0.01 MHz
    *   Range: (1 MHz - 0.005 MHz) to (1 MHz + 0.005 MHz)
    *   **Range:** 0.995 MHz to 1.005 MHz

4.  **Difference between Time and Frequency Domain:**
    *   **Time Domain:** Shows how a signal's **amplitude varies with time**. It's like watching a waveform move up and down on an oscilloscope. It's intuitive for understanding signal shape and timing.
    *   **Frequency Domain:** Shows the **strength (amplitude) of each frequency component present in the signal**. It's like looking at a spectrum analyzer. It's useful for understanding the "ingredients" of a signal and how it will interact with filters or channels.

5.  **Importance of Bandwidth in Data Communication:**
    *   **Capacity:** Bandwidth directly determines the **maximum amount of data** that can be transmitted over a communication channel in a given time. A wider bandwidth means more data can be sent simultaneously.
    *   **Speed:** Higher bandwidth generally translates to **higher data transmission speeds** (e.g., faster internet downloads).
    *   **Quality:** For analog signals, bandwidth affects the **fidelity and clarity** of the transmitted information. A channel with insufficient bandwidth can distort or lose parts of the signal.
    *   **Channel Allocation:** In systems with multiple users or signals, bandwidth is allocated to each to avoid interference.

---

### 7. Important Points to Remember

*   **Sine wave** is the fundamental building block of analog signals.
*   **Amplitude** represents the signal's strength.
*   **Frequency** determines how fast the signal oscillates.
*   **Phase** indicates the signal's starting position within a cycle.
*   **Wavelength** is the spatial extent of a wave's cycle.
*   **Time domain** shows amplitude vs. time; **Frequency domain** shows amplitude vs. frequency.
*   **Bandwidth** is the range of frequencies a signal or channel occupies and is crucial for data transmission capacity and speed.
*   A higher **bandwidth** generally means a higher **data rate**.
