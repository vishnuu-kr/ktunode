---
title: "RC coupled amplifier using BJT in CE configuration-Measurement of gain, BW and plotting of frequency response."
subject: "ANALOG ELECTRONICS LAB"
module: "Module 3: RC coupled amplifier using BJT in CE configuration"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d4b"
status: "completed"
scrapedAt: "2026-05-23T16:11:03.509Z"
---
# ANALOG ELECTRONICS LAB - Module 3: RC Coupled Amplifier using BJT in CE Configuration

## Topic: RC Coupled Amplifier using BJT in CE Configuration - Measurement of Gain, BW and Plotting of Frequency Response

This module focuses on understanding and characterizing the performance of a common-emitter (CE) RC-coupled amplifier using a Bipolar Junction Transistor (BJT). We will learn to measure its key performance parameters: voltage gain, bandwidth (BW), and plot its frequency response.

---

### 1. Introduction to RC Coupled Amplifiers (CE Configuration)

#### 1.1 What is an Amplifier?
An amplifier is an electronic circuit that increases the amplitude (voltage, current, or power) of an input signal without significantly distorting its waveform.

#### 1.2 Why BJT in CE Configuration?
*   **High Voltage Gain:** The CE configuration typically provides high voltage gain, making it suitable for amplifying weak signals.
*   **Phase Inversion:** The output signal is 180 degrees out of phase with the input signal.
*   **Moderate Current Gain:** Offers good current gain.
*   **High Power Gain:** Generally provides high power gain.

#### 1.3 RC Coupling
RC coupling is a method used to connect the output of one amplifier stage to the input of the next stage, or to connect the input signal source to the amplifier and the amplifier output to the load. It uses a resistor-capacitor (RC) network.

*   **Purpose of Coupling Capacitors (C1, C2):**
    *   **DC Blocking:** They block the DC bias voltages from the previous stage (or input) from reaching the current stage, preventing interference with the biasing of the next stage.
    *   **AC Coupling:** They allow the AC signal to pass from one stage to the next, effectively coupling the AC signal.
*   **Purpose of Bypass Capacitor (CE):**
    *   **Increases AC Voltage Gain:** By bypassing the emitter resistor ($R_E$) at AC frequencies, it effectively makes the AC emitter resistance very low, leading to a significant increase in AC voltage gain. Without $C_E$, the gain would be limited by the ratio of load resistance to emitter resistance ($R_L/R_E$).

#### 1.4 Basic Circuit Diagram of a Single-Stage RC Coupled CE Amplifier

```
      Vcc
       |
       Rc
       |
     ------ Collector
    /      \
   /        \ C2 (Coupling Capacitor) ----> Output
  BJT(Q1)   Load Resistance (RL)
 /     \
E------ R1 --- Vcc
|       |
|       RE
|       | CE (Bypass Capacitor)
|       |
Ground ---
```

**Components:**
*   **BJT (Q1):** The active amplifying device.
*   **Vcc:** DC power supply.
*   **Rc:** Collector resistor. Sets the DC operating point and the AC load line.
*   **R1, R2 (Voltage Divider Bias):** Typically used for stable biasing of the BJT. (Note: For simplicity, the diagram above shows a voltage divider using R1 connected to Vcc, implying a simplified bias circuit. A proper voltage divider would have R1 and R2 connected to Vcc and Ground respectively, with the base connected to the junction).
*   **RE:** Emitter resistor. Provides DC biasing stability.
*   **C1:** Input coupling capacitor.
*   **C2:** Output coupling capacitor.
*   **CE:** Emitter bypass capacitor.

**Biasing:** The BJT needs to be properly biased in the active region to function as an amplifier. Voltage divider biasing is a common and stable method.

---

### 2. Measurement of Voltage Gain ($A_v$)

#### 2.1 Definition of Voltage Gain
Voltage gain ($A_v$) is defined as the ratio of the output AC voltage to the input AC voltage.

$A_v = \frac{V_{out}}{V_{in}} = \frac{V_{c(ac)}}{V_{b(ac)}}$

#### 2.2 Practical Measurement Procedure
1.  **Construct the RC-coupled CE amplifier circuit** on a breadboard or PCB. Ensure proper biasing of the BJT.
2.  **Connect the input signal source** (function generator) through the input coupling capacitor (C1) to the base of the BJT. Use an appropriate input resistor ($R_{in}$) if needed for impedance matching or biasing.
3.  **Connect the output measuring instrument** (oscilloscope) through the output coupling capacitor (C2) to the collector of the BJT.
4.  **Set the function generator** to provide a sinusoidal input signal with a **low amplitude** (e.g., a few mV to tens of mV) to avoid distortion. The amplitude should be small enough to stay within the linear region of operation.
5.  **Set the frequency of the input signal** to a mid-band frequency (e.g., 1 kHz).
6.  **Observe the input and output waveforms** on the oscilloscope.
7.  **Measure the peak-to-peak amplitude** of the input voltage ($V_{in(p-p)}$) and the output voltage ($V_{out(p-p)}$).
8.  **Calculate the voltage gain:**
    $A_v = \frac{V_{out(p-p)}}{V_{in(p-p)}}$

#### 2.3 Important Considerations for Gain Measurement
*   **Input Signal Amplitude:** Keep the input signal amplitude small to ensure operation in the linear region. A large signal can cause clipping or distortion, leading to inaccurate gain measurements.
*   **Frequency:** Measure gain at a mid-band frequency where the coupling and bypass capacitors have negligible impedance and the transistor's internal capacitances have high impedance.
*   **Loading Effects:** The impedance of the measuring instrument (oscilloscope) can affect the output voltage. Ideally, the input impedance of the oscilloscope should be much higher than the output impedance of the amplifier stage.
*   **DC Bias:** Ensure the circuit is properly biased in the active region. The operating point (Q-point) should be set in the middle of the load line.
