---
title: "Concept of system: Continuous time and discrete time systems"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to Signals and Systems: Elementary Signals"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361cd"
status: "completed"
scrapedAt: "2026-05-23T16:23:40.699Z"
---
# Signals and Systems: Module 1 - Introduction to Signals and Systems: Elementary Signals

## Topic: Concept of System: Continuous Time and Discrete Time Systems

This module introduces the fundamental concepts of signals and systems, laying the groundwork for understanding how these elements interact and are analyzed. We will focus on the definition of a system and differentiate between continuous-time and discrete-time systems.

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the fundamental concept of a system in the context of signals and systems.
*   Differentiate between continuous-time and discrete-time systems.
*   Provide examples of both continuous-time and discrete-time systems.
*   Relate the concept of systems to the course outcomes.

### Course Outcomes Alignment

This topic directly contributes to the following course outcomes:

*   **CO1: To represent continuous and discrete time signals in time domain and perform various mathematical operations (Knowledge Level: K2)**
    *   Understanding systems is crucial for performing operations on signals. We will see how systems transform input signals into output signals.
*   **CO2: To represent continuous time signals and systems in frequency domain (Knowledge Level: K3)**
    *   While this topic focuses on the time-domain definition of systems, it sets the stage for frequency-domain analysis, where systems are characterized by their frequency response.
*   **CO3: To represent discrete time signals and systems in Z-domain. (Knowledge Level: K3)**
    *   Similar to CO2, this topic introduces discrete-time systems, which will later be analyzed in the Z-domain.

---

### 1. What is a System?

A **system** is a process or a set of rules that transforms an input signal into an output signal. In simpler terms, it's anything that takes one or more signals as input and produces one or more signals as output.

**Key Concepts:**

*   **Input Signal ($x(t)$ or $x[n]$):** The signal that is fed into the system.
*   **Output Signal ($y(t)$ or $y[n]$):** The signal produced by the system in response to the input signal.
*   **Transformation/Process:** The internal workings or rules that define how the input signal is converted into the output signal.

**Analogy:**

Think of a stereo system.
*   **Input Signal:** The audio signal from a CD player or streaming device.
*   **System:** The amplifier and speakers.
*   **Output Signal:** The sound waves that you hear.

**Formal Representation:**

We can represent a system by an operator $T\{\cdot\}$ such that:

$y(t) = T\{x(t)\}$ (for continuous-time)
$y[n] = T\{x[n]\}$ (for discrete-time)

**According to Haykin & Van Veen (2nd Ed., Chapter 1.3):**
"A system is a process that relates a cause (the input signal) to an effect (the output signal)."

---

### 2. Classification of Systems: Continuous-Time vs. Discrete-Time

The primary distinction between systems lies in the nature of the signals they process and the time instances at which they operate.

#### 2.1 Continuous-Time Systems

**Definition:** A continuous-time system is a system that processes **continuous-time signals**. These systems operate on signals that are defined for all values of time, typically over an interval. The input and output signals are continuous functions of time.

**Key Characteristics:**

*   **Continuous Time Variable:** The independent variable is time ($t$), which can take any real value.
*   **Continuous Signal Values (often):** While the time variable is continuous, the signal amplitude can also be continuous or quantized, but the *processing happens continuously*.
*   **Examples:** Physical systems, analog circuits, natural phenomena.

**Mathematical Representation:**

*   Input: $x(t)$
*   Output: $y(t)$
*   System: $y(t) = T\{x(t)\}$

**Examples of Continuous-Time Systems:**

*   **RC Circuit:** An electrical circuit with a resistor (R) and capacitor (C) connected. The voltage across the capacitor is an output that depends on the input voltage applied. The voltage and current change smoothly over time.
    *   *Referencing Haykin & Van Veen:* Chapter 1.3 discusses electrical circuits as classic examples of continuous-time systems.
*   **Mass-Spring-Damper System:** A mechanical system with a mass, spring, and damper. The displacement of the mass is an output dependent on applied forces.
*   **Amplifier:** An electronic device that increases the amplitude of an input signal.
*   **Audio Filters (Analog):** Circuits that selectively pass or reject certain frequencies in an analog audio signal.
*   **Human Voice Production:** The vocal cords and vocal tract transform air pressure into audible sound.

#### 2.2 Discrete-Time Systems

**Definition:** A discrete-time system is a system that processes **discrete-time signals**. These systems operate on signals that are defined only at specific, discrete points in time. The input and output signals are sequences of values.

**Key Characteristics:**

*   **Discrete Time Variable:** The independent variable is an integer index ($n$), representing discrete time instants.
*   **Sampled Signals:** Discrete-time signals are often obtained by sampling continuous-time signals.
*   **Processing at Discrete Instances:** The system's transformation occurs at these specific time instants.
*   **Examples:** Digital signal processing algorithms, computer programs, sampled data from sensors.

**Mathematical Representation:**

*   Input: $x[n]$
*   Sequence of input values: $\{..., x[-1], x[0], x[1], x[2], ...\}$
*   Output: $y[n]$
*   Sequence of output values: $\{..., y[-1], y[0], y[1], y[2], ...\}$
*   System: $y[n] = T\{x[n]\}$

**Examples of Discrete-Time Systems:**

*   **Digital Filter:** An algorithm implemented in software or hardware that modifies a digital signal (e.g., smoothing, noise reduction).
    *   *Referencing Proakis & Manolakis (4th Ed., Chapter 1.2):* This book extensively covers digital filters as core discrete-time systems.
*   **Digital Audio Equalizer:** Adjusts the frequency content of a digital audio signal.
*   **Computer Simulation of a Physical System:** A model of a continuous-time system implemented in a computer, which operates on sampled data.
*   **Stock Market Analysis Program:** Takes historical stock prices (sampled data) and predicts future trends.
*   **Image Processing Algorithms:** Operations performed on pixels of a digital image, which can be viewed as a 2D discrete-time signal.
*   **Control Systems with Digital Controllers:** A system where a computer makes decisions based on sampled sensor data and sends commands to actuators.
    *   *Referencing Ogata (2nd Ed.) and Nise (5th Ed.):* These books detail discrete-time control systems, where digital computers sample system outputs and compute control signals.

---

### 3. Relationship to Course Outcomes

*   **CO1 (K2): Representing Signals:** Understanding systems is directly linked to representing how signals are transformed. We will learn to express these transformations mathematically, both for continuous and discrete signals.
*   **CO2 & CO3 (K3): Frequency/Z-domain:** The time-domain characterization of systems (as continuous or discrete) is the first step before moving to more advanced domain analyses like frequency response (for continuous-time) and Z-transform (for discrete-time). The nature of the system (CT vs. DT) dictates which domain is appropriate for analysis.

---

### 4. Key Points to Remember

*   **System:** A process that maps an input signal to an output signal.
*   **Continuous-Time System:** Processes signals defined for all time points ($t$). Input/output are functions of continuous time.
*   **Discrete-Time System:** Processes signals defined only at specific time points ($n$). Input/output are sequences of values.
*   The distinction between CT and DT systems is fundamental and dictates the mathematical tools used for their analysis.

---

### 5. Practice Questions and Exercises

**Question 1:**

Identify whether the following are continuous-time or discrete-time systems and briefly justify your answer.

a) A thermostat controlling the temperature of a room, which takes temperature readings at regular intervals and adjusts the heating/cooling system.
b) The human body's response to a medication, where the concentration of the drug in the bloodstream changes continuously over time.
c) A digital camera that captures an image as a grid of pixels, each with a specific color value.
d) A radio receiver that demodulates an analog radio wave.

**Answer 1:**

a) **Discrete-time system.** The thermostat takes temperature readings at "regular intervals," implying discrete points in time. The control action is also likely based on these sampled readings.
b) **Continuous-time system.** The medication concentration in the bloodstream changes "continuously over time." The body's response is a process that evolves smoothly in time.
c) **Discrete-time system (or potentially 2D discrete-time).** The image is represented as a grid of pixels, each at a specific spatial location (analogous to discrete time in 1D). The color value is assigned to each pixel at its discrete location.
d) **Continuous-time system.** Radio waves are continuous-time signals, and the demodulation process operates on these continuous waveforms.

**Question 2:**

Provide one real-world example of a continuous-time system and one real-world example of a discrete-time system, other than those mentioned in the notes.

**Answer 2:**

*   **Continuous-time system:** A hydraulic system controlling the movement of a robotic arm. The fluid pressure and arm position change continuously.
*   **Discrete-time system:** A software program that calculates the average of a list of numbers entered by the user. The input numbers are entered at discrete times, and the calculation is performed on this discrete set of data.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 6. Further Reading and References

*   **Signals and Systems by Simon Haykin, Barry Van Veen (Wiley, 2nd Edition, 2007):** Chapter 1 provides an excellent introduction to signals and systems, including the basic definitions and classifications.
*   **Discrete Time Control Systems by Katsuhiko Ogata (Pearson, 2nd Edition, 2006):** While focused on control, this book thoroughly covers discrete-time signals and systems in its early chapters.
*   **Signals and Systems by Oppenheim A.V., Willsky A.S. & Nawab S.H. (Prentice Hall, 2nd Edition, 2015):** Chapter 1 of this widely respected text offers a comprehensive overview of signals and systems.

This concludes the introduction to the concept of systems and the distinction between continuous-time and discrete-time systems. The subsequent modules will delve deeper into the properties and analysis of these systems.