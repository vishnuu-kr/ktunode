---
title: "1D Signals  - A general introduction to real time signals - CT and DT signals"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b12a"
status: "completed"
scrapedAt: "2026-05-20T16:15:16.092Z"
---
# Signals and Systems - Module 1: 1D Signals - Introduction to Real-Time Signals, CT, and DT Signals

These notes cover the introduction to 1D signals, focusing on real-time signals and the distinction between continuous-time (CT) and discrete-time (DT) signals.

**Learning Outcomes:**

*   Define signals and systems.
*   Understand the concept of real-time signals.
*   Differentiate between continuous-time (CT) and discrete-time (DT) signals.
*   Represent CT and DT signals mathematically and graphically.
*   Understand and apply sampling for analog to digital conversions.
*   Recognize common elementary signals.

## 1. What are Signals and Systems?

*   **Signal:** A function that conveys information, typically about a phenomenon. A signal is a function of one or more independent variables.  The independent variable is commonly time, but can also be spatial dimensions (e.g., an image).
    *   **Examples:** Audio, video, temperature measurements, stock prices, sensor data.
*   **System:**  An entity that processes signals to produce other signals.  It is a mapping or transformation that operates on input signals to produce output signals.
    *   **Examples:** An audio amplifier, a digital filter, a control system, an image processing algorithm.

## 2. Real-Time Signals

*   **Definition:** A real-time signal is a signal that represents events as they occur in the physical world, and are processed in the same timescale as they happen.  This implies that the signals are observed or captured as events happen in real life.
*   **Characteristics:**
    *   Represent physical phenomena directly.
    *   Often obtained from sensors (e.g., microphone, temperature sensor, accelerometer).
    *   Vary with time.
*   **Importance:**  Essential for applications requiring immediate response to changes in the environment (e.g., robotics, control systems, real-time audio processing).

## 3. Continuous-Time (CT) Signals

*   **Definition:** A signal defined for every instant of time.  Its independent variable (usually time, denoted by `t`) is continuous.
*   **Mathematical Representation:** `x(t)`, where `t` belongs to the set of real numbers (`t ∈ ℝ`).
*   **Graphical Representation:** A continuous curve.
*   **Examples:**
    *   Voltage signal from an analog circuit.
    *   Temperature recorded continuously over time.
    *   Speech signal.
*   **Important Note:** Real-world signals are inherently continuous in time, although our ability to measure them continuously is limited.

## 4. Discrete-Time (DT) Signals

*   **Definition:** A signal defined only at discrete points in time.  Its independent variable (usually time, denoted by `n`) is discrete.
*   **Mathematical Representation:** `x[n]`, where `n` belongs to the set of integers (`n ∈ ℤ`).
*   **Graphical Representation:**  A sequence of values, often represented as "stem plots."
*   **Examples:**
    *   Digital audio (sampled from a continuous audio signal).
    *   Daily stock market closing price.
    *   Sensor readings taken at regular intervals.
*   **Obtaining DT Signals:**  Often obtained by sampling a CT signal.

## 5. Sampling: Converting CT to DT

*   **Definition:** The process of converting a CT signal `x(t)` into a DT signal `x[n]` by taking samples of `x(t)` at regular intervals.
*   **Sampling Period (T):** The time interval between successive samples.
*   **Sampling Frequency (fs):** The number of samples taken per second (fs = 1/T).
*   **Relationship:**  `x[n] = x(nT)`
*   **Nyquist-Shannon Sampling Theorem:** A fundamental theorem stating that a CT signal with a maximum frequency component `fmax` must be sampled at a rate `fs > 2fmax` (Nyquist rate) to perfectly reconstruct the original signal from its samples.  If the sampling rate is below the Nyquist rate, *aliasing* occurs, leading to distortion and loss of information.
*   **Aliasing:** Occurs when high-frequency components in the CT signal are misinterpreted as lower-frequency components in the DT signal due to undersampling.

## 6. Common Elementary Signals

*   **Continuous-Time Signals:**
    *   **Unit Step Function (u(t)):**
        ```
        u(t) = 0,  for t < 0
        u(t) = 1,  for t >= 0
        ```
        Represents a signal that switches on at t=0.
    *   **Unit Ramp Function (r(t)):**
        ```
        r(t) = 0,  for t < 0
        r(t) = t,  for t >= 0
        ```
        Represents a signal that increases linearly with time.
    *   **Exponential Signal (x(t) = Ae^(at)):**  Where `A` is the amplitude and `a` is a constant.  If `a` is negative, it's a decaying exponential; if `a` is positive, it's a growing exponential.
    *   **Sinusoidal Signal (x(t) = A cos(ωt + φ)):**  Where `A` is the amplitude, `ω` is the angular frequency (ω = 2πf), and `φ` is the phase.
    *   **Impulse Function (δ(t)):**  A signal that is infinitely large at t=0 and zero everywhere else, with an area of 1.  It's a mathematical idealization.  `∫δ(t)dt = 1` from -∞ to ∞.

*   **Discrete-Time Signals:**
    *   **Unit Sample/Impulse Sequence (δ[n]):**
        ```
        δ[n] = 1,  for n = 0
        δ[n] = 0,  for n ≠ 0
        ```
        Represents a signal that is 1 at n=0 and 0 everywhere else.
    *   **Unit Step Sequence (u[n]):**
        ```
        u[n] = 0,  for n < 0
        u[n] = 1,  for n >= 0
        ```
        Represents a signal that switches on at n=0.
    *   **Exponential Sequence (x[n] = A*a^n):**  Where `A` is the amplitude and `a` is a constant. If |a| < 1, it's a decaying exponential; if |a| > 1, it's a growing exponential.
    *   **Sinusoidal Sequence (x[n] = A cos(Ωn + φ)):**  Where `A` is the amplitude, `Ω` is the digital frequency (Ω = ωT = 2πfT), and `φ` is the phase.

## 7. Important Points to Remember

*   **CT Signals:** Defined for all values of time. Real-world signals are inherently CT.
*   **DT Signals:** Defined only at discrete points in time. Often obtained by sampling CT signals.
*   **Sampling Theorem:**  `fs > 2fmax` is crucial for avoiding aliasing.  Choose a sampling frequency high enough to accurately represent the signal.
*   **Aliasing:**  A significant problem in signal processing.  Use anti-aliasing filters *before* sampling to remove high-frequency components that cannot be accurately represented at the chosen sampling rate.
*   **Signal Representation:**  Understanding how to represent signals mathematically and graphically is essential for analysis and manipulation.

## 8. Practice Questions/Exercises

**1.  Classify the following signals as CT or DT:**

    *   A. Room temperature recorded every hour.
    *   B. Voltage across a capacitor in an RC circuit.
    *   C. Number of cars passing a point on a highway each minute.
    *   D. The position of a robotic arm as a function of time.

**Answer:**

*   A. DT
*   B. CT
*   C. DT
*   D. Since time can vary continuously, it is CT. Even if position is tracked with sensors, it would still be a very fine representation, more like CT.

**2. A continuous-time signal x(t) = cos(2π*100t) is sampled at a rate of 150 Hz.  What is the digital frequency (Ω) of the resulting discrete-time signal?**

**Answer:**

*   `f = 100 Hz`
*   `fs = 150 Hz`
*   `T = 1/fs = 1/150 seconds`
*   `Ω = 2πfT = 2π * 100 * (1/150) = (4π)/3 radians`

**3.  A signal has a maximum frequency component of 5 kHz.  What is the minimum sampling rate required to avoid aliasing?**

**Answer:**

*   `fmax = 5 kHz`
*   `fs > 2fmax = 2 * 5 kHz = 10 kHz`
*   Therefore, the minimum sampling rate is 10 kHz.

**4. Sketch the following signals:**

    * A. x(t) = 2u(t-1)
    * B. x[n] = δ[n-2] + δ[n+1]
    * C. x(t) = e^(-t)u(t) for t >= 0

**Answer:** (A proper drawing would be ideal, but a description can suffice)

*   A. x(t) is 0 for t < 1 and 2 for t >= 1 (a step function of amplitude 2, shifted to the right by 1).
*   B. x[n] is 1 at n=2 and n=-1, and 0 everywhere else.  (Two impulses, one shifted to the right by 2 and another shifted to the left by 1).
*   C.  x(t) is 0 for t < 0 and e^(-t) for t >= 0 (a decaying exponential multiplied by the unit step).

**5.  Why is an anti-aliasing filter used before sampling a CT signal?**

**Answer:**

An anti-aliasing filter is used to remove or attenuate high-frequency components in the CT signal that are above half the sampling frequency (Nyquist frequency). This prevents these high-frequency components from being misinterpreted as lower-frequency components in the DT signal during the sampling process (aliasing). By filtering out these unwanted frequencies before sampling, we can ensure that the sampled signal accurately represents the original signal within the limits imposed by the sampling rate.

This concludes the study notes for the introduction to 1D signals, covering real-time signals, CT, and DT signals. Remember to practice applying these concepts and definitions to various problems to solidify your understanding. Good luck!
