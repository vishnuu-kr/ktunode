---
title: "Diode clipping circuits"
subject: "SOLID STATE DEVICES"
module: "Module 1: Wave shaping circuits : First order RC low pass and high pass filters"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f75"
status: "completed"
scrapedAt: "2026-05-23T16:18:31.055Z"
---
# SOLID STATE DEVICES: Module 1 - Wave Shaping Circuits

## Topic: Diode Clipping Circuits

---

### **1. Introduction to Diode Clipping Circuits**

*   **Purpose:** Diode clipping circuits (also known as limiters or amplitude slicers) are used to limit the amplitude of a voltage signal to a desired level. They achieve this by utilizing the non-linear characteristic of a diode.
*   **Wave Shaping:** Clipping is a fundamental technique in wave shaping, where a portion of an input signal waveform is removed or "clipped off" to produce a modified output waveform.
*   **Applications:** Clipping circuits find applications in:
    *   Protecting sensitive electronic components from overvoltage.
    *   Generating specific voltage levels.
    *   Signal processing and communication systems.
    *   Creating square waves or pulse signals from sinusoidal inputs.

---

### **2. Ideal Diode Model**

Before analyzing practical clipping circuits, it's crucial to understand the behavior of an ideal diode.

*   **Forward Bias:** An ideal diode in forward bias acts like a closed switch, allowing current to flow with zero voltage drop.
*   **Reverse Bias:** An ideal diode in reverse bias acts like an open switch, blocking current flow with infinite resistance.

**Reference:** Boylested and Nashelsky, Chapter 2: "Diodes and Rectifiers." (While focused on rectification, the fundamental diode behavior is key.)

---

### **3. Basic Diode Clipping Circuits**

#### **3.1. Series Clipping Circuits**

In a series clipping circuit, the diode is placed in series with the load resistor, and the input signal is applied across this series combination.

**3.1.1. Negative Clipping (Lower Clipping)**

*   **Circuit Configuration:** The diode is connected in series with the load resistor ($R_L$). The anode is connected to the input signal ($V_{in}$), and the cathode is connected to the output ($V_{out}$).
*   **Operation:**
    *   **When $V_{in}$ is sufficiently positive:** The diode is forward-biased. It acts like a closed switch. The output voltage $V_{out}$ will be approximately equal to $V_{in}$ (assuming ideal diode with 0V drop).
    *   **When $V_{in}$ is negative or below a certain threshold:** The diode is reverse-biased. It acts like an open switch, blocking current. The output voltage $V_{out}$ will be clamped to a specific level.

*   **Analysis (Ideal Diode):**
    *   If $V_{in} \geq 0V$ (forward bias), $V_{out} \approx V_{in}$.
    *   If $V_{in} < 0V$ (reverse bias), $V_{out} = 0V$ (as no current flows through $R_L$).

*   **Output Waveform:** The negative portion of the input signal is clipped at 0V.

**Example:** If $V_{in}$ is a sinusoidal wave from -5V to +5V, the output will be from 0V to +5V.

#### **3.1.2. Positive Clipping (Upper Clipping)**

*   **Circuit Configuration:** The diode is connected in series with the load resistor ($R_L$). The cathode is connected to the input signal ($V_{in}$), and the anode is connected to the output ($V_{out}$).
*   **Operation:**
    *   **When $V_{in}$ is sufficiently negative:** The diode is forward-biased. It acts like a closed switch. The output voltage $V_{out}$ will be approximately equal to $V_{in}$.
    *   **When $V_{in}$ is positive or above a certain threshold:** The diode is reverse-biased. It acts like an open switch, blocking current. The output voltage $V_{out}$ will be clamped to a specific level.

*   **Analysis (Ideal Diode):**
    *   If $V_{in} \leq 0V$ (forward bias), $V_{out} \approx V_{in}$.
    *   If $V_{in} > 0V$ (reverse bias), $V_{out} = 0V$ (as no current flows through $R_L$).

*   **Output Waveform:** The positive portion of the input signal is clipped at 0V.

**Example:** If $V_{in}$ is a sinusoidal wave from -5V to +5V, the output will be from -5V to 0V.

---

#### **3.2. Shunt Clipping Circuits**

In a shunt clipping circuit, the diode is placed in parallel with the load resistor, and the input signal is applied across this parallel combination.

**3.2.1. Negative Clipping (Lower Clipping)**

*   **Circuit Configuration:** The diode is connected in parallel with the load resistor ($R_L$). The cathode is connected to the positive side of the input, and the anode is connected to ground (or a reference voltage). The input signal ($V_{in}$) is applied in series with a resistor ($R_S$) to the parallel combination of the diode and $R_L$.
*   **Operation:**
    *   **When $V_{in}$ is sufficiently positive:** The diode is reverse-biased. It acts like an open switch. The current flows through $R_S$ and $R_L$, and $V_{out} \approx V_{in}$ (assuming $R_S << R_L$).
    *   **When $V_{in}$ is negative or below a certain threshold:** The diode becomes forward-biased. It acts like a closed switch, diverting current away from $R_L$ and clamping the output voltage.

*   **Analysis (Ideal Diode):**
    *   If $V_{in} \geq 0V$ (reverse bias), $V_{out} \approx V_{in}$ (ideally).
    *   If $V_{in} < 0V$ (forward bias), the diode conducts, and $V_{out}$ is clamped to the forward voltage drop of the diode (approximately 0V for an ideal diode).

*   **Output Waveform:** The negative portion of the input signal is clipped at 0V.

**Important Note:** Shunt clipping circuits require a series resistor ($R_S$) to limit the current through the diode when it is forward-biased. Without $R_S$, excessive current could damage the diode.

#### **3.2.2. Positive Clipping (Upper Clipping)**

*   **Circuit Configuration:** The diode is connected in parallel with the load resistor ($R_L$). The anode is connected to the positive side of the input, and the cathode is connected to ground (or a reference voltage). The input signal ($V_{in}$) is applied in series with a resistor ($R_S$) to the parallel combination of the diode and $R_L$.
*   **Operation:**
    *   **When $V_{in}$ is sufficiently negative:** The diode is reverse-biased. It acts like an open switch. The current flows through $R_S$ and $R_L$, and $V_{out} \approx V_{in}$.
    *   **When $V_{in}$ is positive or above a certain threshold:** The diode becomes forward-biased. It acts like a closed switch, diverting current away from $R_L$ and clamping the output voltage.

*   **Analysis (Ideal Diode):**
    *   If $V_{in} \leq 0V$ (reverse bias), $V_{out} \approx V_{in}$.
    *   If $V_{in} > 0V$ (forward bias), the diode conducts, and $V_{out}$ is clamped to the forward voltage drop of the diode (approximately 0V for an ideal diode).

*   **Output Waveform:** The positive portion of the input signal is clipped at 0V.

---
