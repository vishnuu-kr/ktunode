---
title: "Source terminators"
subject: "HIGH SPEED DIGITAL DESIGN"
module: "Module 3: Transmission Lines: Problems of point to point wiring"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb77"
status: "completed"
scrapedAt: "2026-05-23T17:57:24.425Z"
---
# HIGH SPEED DIGITAL DESIGN - Module 3: Transmission Lines: Problems of Point-to-Point Wiring

## Topic: Source Terminators

---

### 1. Introduction: The Problem of Reflections

In high-speed digital design, signals travel as waves on transmission lines (e.g., PCB traces, cables). When there's an impedance mismatch along the transmission line, a portion of the signal energy is reflected back towards the source. These reflections can cause several issues:

*   **Overshoot/Undershoot:** The reflected signal adds to or subtracts from the incident signal, causing voltage levels to exceed or dip below acceptable logic thresholds.
*   **Ringing:** Multiple reflections can cause the signal to oscillate around its intended voltage level, potentially leading to false triggering of receiving logic gates.
*   **Reduced Noise Margins:** Reflections can narrow the window during which the signal is stable and within valid logic levels, making the circuit more susceptible to noise.
*   **Increased EMI:** The oscillations caused by ringing can radiate electromagnetic interference (EMI).

**Key Concept:** **Impedance Mismatch** is the root cause of reflections.

**Source:** Johnson & Graham, Chapter 3 discusses the fundamental principles of transmission lines and signal integrity.

---

### 2. Understanding Source Termination

**Source termination** is a technique used to minimize or eliminate signal reflections by ensuring that the impedance seen by the signal leaving the source is matched to the characteristic impedance of the transmission line.

**Goal:** To absorb the incident signal at the source when it reaches the end of its journey (or when reflections return), preventing them from bouncing back and interfering with the ongoing signal.

**How it works:** A termination resistor is placed in series with the signal source, at the output of the driver. This resistor, when properly chosen, matches the source impedance to the transmission line's characteristic impedance.

---

### 3. Types of Source Terminators

The primary goal of source termination is to match the **effective source impedance** to the **characteristic impedance ($Z_0$)** of the transmission line.

#### 3.1. Series Termination

*   **Description:** A resistor ($R_{term}$) is placed in series with the output driver of the transmitting device.

    ```
    [Driver Output] --- R_term --- [Transmission Line] ---> [Load]
    ```

*   **How it Works:**
    1.  When the driver switches, it presents an initial impedance, let's call it $Z_{driver}$.
    2.  The transmission line has a characteristic impedance $Z_0$.
    3.  The total impedance seen by the signal leaving the driver is $Z_{driver} + R_{term}$.
    4.  To prevent reflections at the source when the signal reaches the end of the line and reflects back, the sum of the driver's impedance and the series resistor should ideally match the transmission line impedance: $Z_{driver} + R_{term} \approx Z_0$.
    5.  However, a more common and effective approach is to match the **effective source impedance** seen at the *beginning* of the transmission line to $Z_0$. This is achieved when $R_{term} = Z_0$.
    6.  When the signal reaches the load, if the load impedance ($Z_L$) is not matched to $Z_0$, a reflection will occur. This reflection travels back towards the source.
    7.  When this reflected wave arrives back at the source, the series resistor $R_{term}$ absorbs it because $R_{term}$ is matched to $Z_0$.

*   **Advantages:**
    *   **Effective in reducing overshoot/ringing:** Excellent at damping initial wavefronts and subsequent reflections.
    *   **Low power consumption:** The resistor only dissipates power when the driver is switching.
    *   **Suitable for point-to-point connections:** Works well when the load is at the far end.

*   **Disadvantages:**
    *   **Reduces signal amplitude at the receiver:** The voltage division between $R_{term}$ and the driver's output impedance means the signal amplitude at the input to the transmission line is reduced by approximately half, assuming $R_{term} \approx Z_0$ and $Z_{driver}$ is low. This requires a driver with sufficient drive strength and a receiver tolerant of lower signal levels.
    *   **Driver impedance dependency:** Its effectiveness is highly dependent on the driver's output impedance. If the driver's impedance changes significantly with temperature or manufacturing variations, the termination might become less effective.
    *   **Not ideal for multi-drop buses:** Reflections can occur at each stub on a multi-drop bus, and series termination alone doesn't handle these well.

*   **Choosing $R_{term}$:**
    *   Ideally, $R_{term} = Z_0$.
    *   In practice, $R_{term}$ is often chosen to be slightly less than $Z_0$ (e.g., $Z_0 - 10\Omega$) to account for the driver's inherent output impedance and parasitic inductance. This helps to minimize overshoot.
    *   **Example:** For a 50$\Omega$ transmission line, a 39$\Omega$ or 47$\Omega$ resistor is commonly used.

*   **Textbook Reference:** Johnson & Graham, Chapter 3, Section 3.2.3 "Series Termination" and Chapter 7, Section 7.3 "Series Termination". Ott, Chapter 6 discusses termination techniques.

---

#### 3.2. Using the Driver's Output Impedance

Some modern high-speed drivers have built-in, programmable output impedance. In such cases, the driver can be configured to present an impedance that matches the transmission line.

*   **Description:** The driver's output stage is designed to present a specific impedance when switched. This impedance is often controlled by internal circuitry or external feedback.

    ```
    [Configurable Driver Output Impedance (Z_driver_out)] --- [Transmission Line] ---> [Load]
    ```

*   **How it Works:** The driver's internal circuitry is adjusted so that its output impedance ($Z_{driver\_out}$) is equal to the transmission line impedance ($Z_0$). This effectively terminates the line at the source.

*   **Advantages:**
    *   **No external components needed:** Simplifies board layout.
    *   **Optimized performance:** Often designed for specific transmission line impedances.
    *   **Reduced reflections:** Excellent at preventing reflections at the source.

*   **Disadvantages:**
    *   **Requires sophisticated drivers:** Not all drivers offer this capability.
    *   **Less flexible:** Limited to the pre-defined impedance settings.

*   **Textbook Reference:** Johnson & Graham, Chapter 7, Section 7.4 "Driver Output Impedance Control".

---

### 4. When to Use Source Termination

Source termination is generally preferred when:

*   **The load is at the far end of a point-to-point connection.**
*   **The driver has sufficient drive strength to overcome the voltage drop across the termination resistor.**
*   **Overshoot and ringing are critical issues.**
*   **The transmission line impedance is well-defined and known.**

**Example Scenario:** A high-speed serial data link between two FPGAs on a PCB.

---

### 5. Key Considerations for Source Termination

*   **Driver Strength:** The driver must be able to provide enough current to charge the capacitance of the transmission line through the termination resistor and still meet the required voltage swing at the receiver. A stronger driver with a lower output impedance (before adding the series resistor) is generally better for series termination.
*   **Signal Amplitude Reduction:** As mentioned, series termination halves the initial signal amplitude. Ensure the receiver can reliably detect this reduced amplitude.
*   **Rise/Fall Times:** The series termination resistor, along with the driver's output impedance and the transmission line's characteristic impedance, influences the signal's rise and fall times. The combination of $Z_{driver} + R_{term}$ and $Z_0$ should be carefully analyzed.
*   **Stub Lengths:** If there are stubs (short branches off the main transmission line), the series termination at the source alone may not be sufficient to prevent reflections from the stub. In such cases, termination at the load or at the stub itself might be necessary.
*   **Frequency of Operation:** The effectiveness of termination depends on the signal's rise time. A faster rise time (higher frequency content) requires better impedance matching.

**Important Point:** The termination resistor value is chosen to match the transmission line's characteristic impedance ($Z_0$), not the driver's output impedance.

---

### 6. Relation to Course Outcomes

*   **CO1: Illustrate the fundamentals of the effects of passive circuit elements on signal propagation... (K2)**
    *   Source termination directly involves resistors, which are passive circuit elements. The choice of resistor value and its placement directly impacts signal propagation by mitigating reflections caused by impedance mismatches inherent in PCB traces (transmission lines).
*   **CO3: Analyze the effects of wiring, source, and load on the signal propagation... (K3)**
    *   This topic specifically addresses the "source" aspect. Understanding source termination requires analyzing how the source's impedance, in conjunction with a termination resistor, affects signal propagation on the "wiring" (transmission line) and how it interacts with reflections from the "load."
*   **CO4: Design the power supply and clock distribution circuits for high speed devices (K3)**
    *   While not directly about power or clock distribution, the principles of impedance matching and reflection control learned here are fundamental to high-speed signal integrity, which is crucial for reliable operation of all high-speed circuits, including clock and power delivery networks (PDNs) which are also subject to transmission line effects.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of source termination in high-speed digital design?
a) To increase signal amplitude
b) To reduce power consumption
c) To minimize signal reflections at the source
d) To improve the driver's switching speed

**Question 2:**
If a transmission line has a characteristic impedance of 75$\Omega$, what is the typical value of a series termination resistor used to match the source impedance?
a) 75$\Omega$
b) A value less than 75$\Omega$
c) A value greater than 75$\Omega$
d) The value is irrelevant for source termination.

**Question 3:**
What is a potential drawback of using series termination?
a) It requires complex external circuitry.
b) It can significantly reduce the signal amplitude at the receiver.
c) It is only effective for very low-speed signals.
d) It increases the likelihood of EMI.

**Question 4:**
Consider a scenario where a signal with a fast rise time travels on a PCB trace. If the trace is not properly terminated at the source, what problem is most likely to occur at the receiving end?
a) Signal attenuation due to resistance
b) Signal inversion due to capacitive loading
c) Ringing and overshoot due to reflections
d) Reduced bandwidth due to filtering

---

### 8. Answers to Practice Questions

**Answer 1:**
**c) To minimize signal reflections at the source.**
*Explanation: Source termination aims to match the impedance at the driver's output to the transmission line's characteristic impedance, preventing reflections from propagating back into the line.*

**Answer 2:**
**a) 75$\Omega$**
*Explanation: The ideal value for a series termination resistor to match the source impedance to the transmission line impedance is equal to the characteristic impedance of the transmission line ($Z_0$). In practice, a slightly lower value might be used to compensate for driver output impedance.*

**Answer 3:**
**b) It can significantly reduce the signal amplitude at the receiver.**
*Explanation: The series termination resistor creates a voltage divider with the driver's output impedance, resulting in a reduced signal amplitude at the beginning of the transmission line. This means the driver needs to have sufficient drive strength.*

**Answer 4:**
**c) Ringing and overshoot due to reflections**
*Explanation: Without proper termination, impedance mismatches cause signal energy to reflect back and forth along the transmission line, leading to unwanted oscillations (ringing) and voltage spikes (overshoot) at the receiver.*

---

### 9. Important Points to Remember

*   **Reflections are bad:** They disrupt signal integrity.
*   **Impedance Mismatch is the cause:** Every change in impedance along a signal path can cause reflections.
*   **Source Termination:** Places a resistor in series with the driver to match the transmission line's characteristic impedance ($Z_0$).
*   **$R_{term} \approx Z_0$:** The general rule of thumb for series termination.
*   **Trade-off:** Series termination reduces signal amplitude at the receiver.
*   **Driver Strength Matters:** The driver must overcome the reduced signal amplitude.
*   **Point-to-Point:** Series termination is most effective for simple point-to-point connections.
*   **Fast Rise Times:** Require good impedance control and termination.

---

This concludes the study notes on Source Terminators for Module 3. Remember to consult the recommended textbooks for deeper understanding and practical examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
