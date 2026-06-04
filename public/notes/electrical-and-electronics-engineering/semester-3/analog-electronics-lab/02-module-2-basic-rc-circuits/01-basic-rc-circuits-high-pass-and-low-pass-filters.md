---
title: "Basic RC circuits- High pass and Low pass filters"
subject: "ANALOG ELECTRONICS LAB"
module: "Module 2: Basic RC circuits"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d49"
status: "completed"
scrapedAt: "2026-05-23T16:11:02.758Z"
---
# ANALOG ELECTRONICS LAB - Module 2: Basic RC Circuits

## Topic: Basic RC Circuits - High Pass and Low Pass Filters

This module focuses on understanding and practically implementing basic RC circuits, specifically exploring their behavior as filters. We will delve into the fundamental concepts of capacitors and resistors in circuit analysis and their application in frequency-selective circuits.

---

### **1. Introduction to RC Circuits**

**1.1 What is an RC Circuit?**

An RC circuit is an electrical circuit consisting of a resistor (R) and a capacitor (C) connected in series or parallel. These circuits exhibit frequency-dependent behavior, making them useful for filtering signals.

**1.2 Key Components:**

*   **Resistor (R):** A passive electrical component that implements electrical resistance as a circuit element. It opposes the flow of electric current.
    *   **Unit:** Ohms ($\Omega$)
    *   **Textbook Reference:**
        *   Paynter, R. T. (Pearson Education). *Introductory Electronic Devices and Circuits*: Discusses the fundamental behavior and Ohm's Law.
        *   Boylestad, R. L., & Nashelsky, L. (Pearson Education). *Electronic devices and Circuit Theory*: Provides detailed analysis of resistive networks and their properties.
        *   Neaman, D. A. (McGraw Hill Companies). *Electronic Circuits: Analysis and Design*: Covers resistor characteristics and their role in circuit design.

*   **Capacitor (C):** A passive electrical component that stores electrical energy in an electric field. It consists of two conductive plates separated by a dielectric material.
    *   **Unit:** Farads (F)
    *   **Behavior in DC Circuits:** Acts as an open circuit once fully charged.
    *   **Behavior in AC Circuits:** Offers opposition to AC current flow, known as capacitive reactance ($X_C$), which is inversely proportional to frequency.
        *   $X_C = \frac{1}{2\pi fC}$
    *   **Textbook Reference:**
        *   Paynter, R. T. (Pearson Education). *Introductory Electronic Devices and Circuits*: Explains the charging and discharging behavior of capacitors and their capacitance.
        *   Boylestad, R. L., & Nashelsky, L. (Pearson Education). *Electronic devices and Circuit Theory*: Details capacitor construction, dielectric properties, and AC response.
        *   Neaman, D. A. (McGraw Hill Companies). *Electronic Circuits: Analysis and Design*: Focuses on the impedance of capacitors and their role in AC circuits.

---

### **2. Understanding Filters**

**2.1 What is a Filter?**

A filter is an electronic circuit that passes signals within a certain frequency range while blocking or attenuating signals outside that range.

**2.2 Types of Filters:**

*   **Low-Pass Filter (LPF):** Passes low frequencies and attenuates high frequencies.
*   **High-Pass Filter (HPF):** Passes high frequencies and attenuates low frequencies.
*   **Band-Pass Filter:** Passes frequencies within a specific band.
*   **Band-Stop Filter:** Blocks frequencies within a specific band.

**2.3 Key Concepts in Filtering:**

*   **Passband:** The range of frequencies that are allowed to pass through the filter with minimal attenuation.
*   **Stopband:** The range of frequencies that are attenuated or blocked by the filter.
*   **Cutoff Frequency ($f_c$):** The frequency at which the output signal power is half the input signal power, or the output voltage is approximately 0.707 times the input voltage (approximately -3 dB point).
*   **Roll-off:** The rate at which the filter attenuates frequencies outside the passband.

---

### **3. Low-Pass Filter (LPF)**

**3.1 Circuit Configuration:**

A basic passive RC low-pass filter is typically configured with the resistor in series with the input signal and the capacitor in parallel with the output, across the resistor.

```
      Vin ---- R ----+---- Vout
                   |
                   C
                   |
                  GND
```

**3.2 How it Works:**

*   **At Low Frequencies:** The capacitive reactance ($X_C$) is very high. The capacitor acts almost like an open circuit. Most of the input voltage appears across the capacitor (Vout).
*   **At High Frequencies:** The capacitive reactance ($X_C$) is very low. The capacitor acts almost like a short circuit. Most of the input voltage drops across the resistor, and the output voltage (across the capacitor) is significantly reduced.

**3.3 Cutoff Frequency ($f_c$) Calculation:**

The cutoff frequency of a basic RC low-pass filter is given by:

$f_c = \frac{1}{2\pi RC}$

**3.4 Transfer Function ($H(j\omega)$):**

The transfer function of an LPF is the ratio of the output voltage to the input voltage in the frequency domain:

$H(j\omega) = \frac{V_{out}(j\omega)}{V_{in}(j\omega)} = \frac{1}{1 + j\omega RC}$

where:
*   $\omega = 2\pi f$ (angular frequency)
*   $j = \sqrt{-1}$

**3.5 Magnitude Response:**

The magnitude of the transfer function indicates the gain of the filter at different frequencies.

*   **At DC (f=0):** $|H(j0)| = \frac{1}{\sqrt{1 + 0}} = 1$ (Gain = 1, or 0 dB)
*   **At Cutoff Frequency ($f=f_c$, $\omega = \frac{1}{RC}$):**
    $|H(j\omega_c)| = \frac{1}{\sqrt{1 + (1)^2}} = \frac{1}{\sqrt{2}} \approx 0.707$ (Gain $\approx$ -3 dB)
*   **At High Frequencies ($f \gg f_c$, $\omega \gg \frac{1}{RC}$):** $|H(j\omega)| \approx \frac{1}{j\omega RC} \approx 0$ (Gain approaches 0)

**3.6 Phase Response:**

The phase shift between the output and input voltage depends on the frequency.

*   **At DC (f=0):** Phase shift = 0 degrees.
*   **At Cutoff Frequency ($f=f_c$):** Phase shift = -45 degrees.
*   **At High Frequencies ($f \gg f_c$):** Phase shift approaches -90 degrees.

**3.7 Textbook Integration (LPF):**

*   **Paynter:** Introduces the concept of frequency response and how capacitors impede AC signals, leading to filtering.
*   **Boylestad & Nashelsky:** Provides detailed mathematical analysis of AC circuits with capacitors, deriving the transfer function and explaining the concept of reactance.
*   **Neaman:** Discusses filter design principles and the characteristics of first-order filters like the RC LPF, including Bode plots.

**3.8 Practical Application (LPF):**

*   Audio systems: To remove high-frequency noise.
*   Power supplies: To smooth out ripple voltage.
*   Signal processing: To isolate lower frequency components of a signal.

---

### **4. High-Pass Filter (HPF)**

**4.1 Circuit Configuration:**

A basic passive RC high-pass filter is typically configured with the capacitor in series with the input signal and the resistor in parallel with the output, across the capacitor.

```
      Vin ---- C ----+---- Vout
                   |
                   R
                   |
                  GND
```

**4.2 How it Works:**

*   **At Low Frequencies:** The capacitive reactance ($X_C$) is very high. The capacitor acts almost like an open circuit, blocking the signal from reaching the resistor (Vout). Most of the input voltage drops across the capacitor.
*   **At High Frequencies:** The capacitive reactance ($X_C$) is very low. The capacitor acts almost like a short circuit, allowing the signal to pass through to the resistor (Vout). Most of the input voltage appears across the resistor.

**4.3 Cutoff Frequency ($f_c$) Calculation:**

The cutoff frequency of a basic RC high-pass filter is given by:

$f_c = \frac{1}{2\pi RC}$

(Note: The formula for $f_c$ is the same as for LPF, but the component placement determines the filter type.)

**4.4 Transfer Function ($H(j\omega)$):**

The transfer function of an HPF is:

$H(j\omega) = \frac{V_{out}(j\omega)}{V_{in}(j\omega)} = \frac{j\omega RC}{1 + j\omega RC}$

**4.5 Magnitude Response:**

*   **At DC (f=0):** $|H(j0)| = \frac{0}{1} = 0$ (Gain = 0, or -infinity dB)
*   **At Cutoff Frequency ($f=f_c$, $\omega = \frac{1}{RC}$):**
    $|H(j\omega_c)| = \frac{j1}{1 + j1}$
    $|H(j\omega_c)| = \frac{1}{\sqrt{1^2 + 1^2}} = \frac{1}{\sqrt{2}} \approx 0.707$ (Gain $\approx$ -3 dB)
*   **At High Frequencies ($f \gg f_c$, $\omega \gg \frac{1}{RC}$):** $|H(j\omega)| \approx \frac{j\omega RC}{j\omega RC} = 1$ (Gain = 1, or 0 dB)

**4.6 Phase Response:**

*   **At DC (f=0):** Phase shift = +90 degrees.
*   **At Cutoff Frequency ($f=f_c$):** Phase shift = +45 degrees.
*   **At High Frequencies ($f \gg f_c$):** Phase shift approaches 0 degrees.

**4.7 Textbook Integration (HPF):**

*   **Paynter:** Explains how AC signals are affected by series capacitors and how this can be used to block DC components.
*   **Boylestad & Nashelsky:** Provides the mathematical framework for analyzing circuits with series capacitors and derives the HPF transfer function.
*   **Neaman:** Discusses the frequency response characteristics of HPF and their behavior in blocking low frequencies.

**4.8 Practical Application (HPF):**

*   Audio systems: To block DC offsets or remove low-frequency hum.
*   Signal coupling: To pass AC signals between amplifier stages while blocking DC bias.
*   Speech processing: To emphasize higher frequency components.

---

### **5. Practical Considerations and Laboratory Experiments**

**5.1 Measuring Frequency Response:**

*   **Instruments:** Oscilloscope, Function Generator, Multimeter (optional, for voltage measurements).
    *   **Learning Outcome CO1:** Using these instruments effectively is crucial for conducting the experiments.
*   **Procedure:**
    1.  Set up the RC circuit (LPF or HPF) on a breadboard.
    2.  Connect the function generator to the input (Vin) and the oscilloscope probes to measure Vin and Vout.
    3.  Start with a low frequency (e.g., 10 Hz) and measure the amplitude of Vin and Vout. Calculate the gain (Vout/Vin).
    4.  Gradually increase the frequency, noting the amplitude of Vin and Vout at each step.
    5.  Continue until you reach frequencies well above the expected cutoff frequency.
    6.  Plot the gain (in dB) versus frequency on a semi-logarithmic graph to observe the frequency response.
    7.  Identify the cutoff frequency from the plot.

**5.2 Design and Implementation:**

*   **Learning Outcome CO2:** Designing an RC circuit to meet specific filtering requirements (e.g., a specific cutoff frequency) is a key practical skill.
*   **Example:** Design an RC low-pass filter with a cutoff frequency of 1 kHz using readily available resistor values (e.g., 1 k$\Omega$, 10 k$\Omega$).
    *   **Calculation:**
        *   If R = 1 k$\Omega$, then $C = \frac{1}{2\pi f_c R} = \frac{1}{2\pi (1000 \text{ Hz})(1000 \Omega)} \approx 0.159 \mu F$. A standard capacitor value close to this is 0.15 $\mu F$ or 0.1 $\mu F$.
        *   If R = 10 k$\Omega$, then $C = \frac{1}{2\pi f_c R} = \frac{1}{2\pi (1000 \text{ Hz})(10000 \Omega)} \approx 0.0159 \mu F$. A standard capacitor value close to this is 0.015 $\mu F$ or 0.01 $\mu F$.
    *   **Implementation:** Select appropriate resistor and capacitor values and build the circuit on a breadboard.

**5.3 Simulation:**

*   **Learning Outcome CO5:** Simulate the designed RC circuits using a circuit simulation software (e.g., LTspice, Proteus, Multisim).
*   **Procedure:**
    1.  Draw the schematic of the RC filter in the simulation software.
    2.  Set up a transient analysis or AC analysis to observe the frequency response.
    3.  Compare the simulated results (frequency response plot, cutoff frequency) with theoretical calculations and experimental measurements.

---

### **6. Important Points to Remember**

*   **Capacitive Reactance ($X_C$):** Inversely proportional to frequency ($X_C = \frac{1}{2\pi fC}$). This is the fundamental principle behind RC filters.
*   **Cutoff Frequency ($f_c$):** The frequency where the output voltage is 0.707 times the input voltage (-3 dB point).
*   **LPF:** Capacitor is in parallel with the output; attenuates high frequencies.
*   **HPF:** Capacitor is in series with the input; attenuates low frequencies.
*   **Bode Plots:** Useful for visualizing the frequency response of filters, showing gain (dB) versus frequency (logarithmic scale) and phase shift versus frequency.
*   **Component Tolerance:** Real-world resistors and capacitors have tolerances, which will affect the actual cutoff frequency of the circuit.
*   **Loading Effects:** Connecting a load to the output of a passive filter can alter its frequency response. Active filters (using op-amps) are less susceptible to loading.
*   **First-Order Filters:** The RC filters discussed are first-order filters, meaning they have a roll-off of -20 dB per decade (-6 dB per octave) beyond the cutoff frequency.

---

### **7. Practice Questions and Answers**

**Q1. What is the cutoff frequency of a low-pass RC filter if R = 10 k$\Omega$ and C = 0.01 $\mu F$?**

**Answer:**
$f_c = \frac{1}{2\pi RC} = \frac{1}{2\pi (10 \times 10^3 \Omega)(0.01 \times 10^{-6} F)} = \frac{1}{2\pi (10^{-4})} \approx \frac{10000}{6.28} \approx 1591.5 \text{ Hz}$

**Q2. If you want to build a high-pass filter with a cutoff frequency of 500 Hz using a 1 $\mu F$ capacitor, what value of resistor would you need?**

**Answer:**
$R = \frac{1}{2\pi f_c C} = \frac{1}{2\pi (500 \text{ Hz})(1 \times 10^{-6} F)} = \frac{1}{2\pi (5 \times 10^{-4})} \approx \frac{10000}{3.14} \approx 3183 \Omega$
A standard resistor value close to this would be 3.3 k$\Omega$.

**Q3. In a low-pass RC filter, as the input frequency increases beyond the cutoff frequency, what happens to the output voltage?**

**Answer:**
The output voltage decreases (is attenuated).

**Q4. In a high-pass RC filter, as the input frequency decreases below the cutoff frequency, what happens to the output voltage?**

**Answer:**
The output voltage decreases (is attenuated).

**Q5. What is the primary function of a capacitor in an RC filter circuit?**

**Answer:**
The primary function of a capacitor in an RC filter is to provide a frequency-dependent impedance (capacitive reactance, $X_C$), which allows the circuit to selectively pass or attenuate signals based on their frequency.

---

### **8. Alignment with Course Outcomes**

*   **CO1: Use the various electronic instruments and for conducting experiments. (Knowledge Level: K1)**
    *   This module directly addresses CO1 by requiring the use of oscilloscopes and function generators to measure voltage amplitudes, observe waveforms, and determine the frequency response of RC circuits.

*   **CO2: Design and develop various electronic circuits using diodes and Zener diodes. (Knowledge Level: K3)**
    *   While this module doesn't focus on diodes, the principle of designing a circuit (RC filter) with specific characteristics (cutoff frequency) and implementing it on a breadboard aligns with the design and development aspect of CO2. The practical implementation and component selection mirror the skills needed for CO2.

*   **CO5: Simulate electronic circuits using any circuit simulation software. (Knowledge Level: K3)**
    *   This module explicitly includes the step of simulating RC filters using software, making it directly relevant to CO5. Students are expected to understand how to model these circuits and analyze their frequency response digitally.

---

This concludes Module 2 on Basic RC Circuits, covering Low Pass and High Pass Filters. Understanding these fundamental building blocks is essential for further study in Analog Electronics.
