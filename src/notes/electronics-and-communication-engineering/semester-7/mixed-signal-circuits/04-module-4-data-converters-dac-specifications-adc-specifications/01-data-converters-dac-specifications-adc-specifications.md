---
title: "Data Converters: DAC specifications, ADC specifications"
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 4: Data Converters: DAC specifications, ADC specifications"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff42c"
status: "completed"
scrapedAt: "2026-05-23T18:08:14.720Z"
---
# Mixed Signal Circuits: Module 4 - Data Converters: DAC & ADC Specifications

This module delves into the crucial specifications that define the performance of Digital-to-Analog Converters (DACs) and Analog-to-Digital Converters (ADCs), essential components in mixed-signal integrated circuits.

---

## Module Objective

To understand and describe the key performance parameters and specifications that govern the behavior and suitability of DAC and ADC circuits for various applications.

---

## Course Outcomes Addressed

*   **CO5: Describe the specifications and architectures of data converter circuits (Knowledge Level: K2)** - This module directly addresses the specifications of data converters. While architectures are not the primary focus, understanding specifications often implies knowledge of basic architectural building blocks.

---

## 1. Digital-to-Analog Converters (DACs)

DACs convert a digital input code into an analog output voltage or current. Their performance is characterized by a set of critical specifications.

### 1.1 DAC Specifications

#### 1.1.1 Resolution

*   **Definition:** The smallest change in the digital input code that can be resolved by the DAC, resulting in a corresponding change in the analog output. It is typically expressed in bits ($n$).
*   **Impact:** Higher resolution leads to finer analog output steps, meaning more accurate representation of analog signals.
*   **Formula:** An $n$-bit DAC has $2^n$ possible output levels. The resolution in terms of the analog output step size ($\Delta V_{out}$) is:
    $\Delta V_{out} = \frac{V_{ref}}{2^n - 1}$ (for voltage output) or $\Delta I_{out} = \frac{I_{ref}}{2^n - 1}$ (for current output).
    Where $V_{ref}$ (or $I_{ref}$) is the reference voltage (or current).
*   **Example:** An 8-bit DAC with a reference voltage of 5V has a resolution of $\frac{5V}{2^8 - 1} = \frac{5V}{255} \approx 19.6 \text{ mV}$. This means the smallest change in the digital input will cause an analog output change of approximately 19.6 mV.
*   **Textbook Reference:** Razavi (2/e), Chapter 13, "Digital-to-Analog Converters".

#### 1.1.2 Quantization Error

*   **Definition:** The inherent error introduced by representing a continuous analog signal with discrete digital levels. For a DAC, it's the difference between the ideal analog output and the actual output due to the discrete nature of digital inputs.
*   **Impact:** Limits the accuracy of the conversion process.
*   **Range:** The quantization error is ideally within $\pm \frac{1}{2}$ LSB (Least Significant Bit).
*   **Important Point:** While not a DAC *specification* in the sense of a measured parameter, it's a fundamental concept that underlies DAC performance and the need for high resolution.

#### 1.1.3 Linearity

*   **Definition:** The degree to which the analog output follows a straight line relationship with the digital input code.
*   **Types:**
    *   **Differential Linearity (DNL):** The deviation of the actual step size between adjacent digital codes from the ideal step size (1 LSB).
        *   **Formula:** $DNL_i = (V_{out,i} - V_{out,i-1}) - \Delta V_{ideal}$
        *   **Requirement for Monotonicity:** For the DAC to be monotonic (output always increases with increasing digital input), DNL must be $\ge -1$ LSB.
        *   **Example:** If the step from code 011 to 100 is 1.1 LSB instead of 1 LSB, the DNL for that step is +0.1 LSB. If it's 0.9 LSB, the DNL is -0.1 LSB.
    *   **Integral Linearity (INL):** The deviation of the actual analog output from the ideal straight line passing through the endpoints (zero scale and full scale). It represents the cumulative error of DNL.
        *   **Formula:** $INL_i = (V_{out,i} - V_{out,0}) - i \times \Delta V_{ideal}$
        *   **Impact:** INL is a more general measure of linearity.
*   **Textbook Reference:** Razavi (2/e), Section 13.1.2, "Linearity Errors".

#### 1.1.4 Monotonicity

*   **Definition:** A DAC is monotonic if its analog output voltage (or current) either increases or stays the same as the digital input code increases.
*   **Condition:** Achieved when DNL $\ge -1$ LSB for all codes.
*   **Impact:** Non-monotonicity means that for some input code increases, the output might decrease, which is highly undesirable in most applications.
*   **Important Point:** A linear DAC is always monotonic, but a monotonic DAC is not necessarily linear.

#### 1.1.5 Settling Time

*   **Definition:** The time required for the DAC's output to settle to within a specified tolerance (usually a fraction of an LSB) of its final analog value after a change in the digital input code.
*   **Factors:** Determined by the output amplifier's bandwidth, slew rate, and the settling characteristics of the switching elements.
*   **Example:** For a full-scale change (e.g., from 00...0 to 11...1), the output needs to settle to within $\pm 0.5$ LSB of the final value.
*   **Textbook Reference:** Razavi (2/e), Section 13.1.3, "Dynamic Specifications". Baker et al. (2000), Chapter 16, "Digital-to-Analog Converters".

#### 1.1.6 Glitch Energy

*   **Definition:** Transient voltage spikes that occur at the output of a DAC when multiple bits change simultaneously. This is due to unequal switching times of the internal logic and switches.
*   **Impact:** Can cause erroneous readings or errors in the analog signal if not properly handled.
*   **Measurement:** Often specified as the area under the glitch waveform (area = voltage * time).
*   **Mitigation:** Techniques like "glitchless DACs" or output smoothing capacitors are used.
*   **Textbook Reference:** Razavi (2/e), Section 13.1.3, "Dynamic Specifications".

#### 1.1.7 Offset Error

*   **Definition:** The analog output voltage (or current) when the digital input code is all zeros. Ideally, it should be zero.
*   **Formula:** $V_{out,0} = \text{Ideal } V_{out}(\text{digital 0}) + V_{offset}$
*   **Impact:** A DC offset in the analog output.
*   **Textbook Reference:** Sedra & Smith (6/e), Section 12.3, "Digital-to-Analog Converters".

#### 1.1.8 Gain Error

*   **Definition:** The deviation of the actual full-scale output voltage (or current) from its ideal value.
*   **Formula:** $V_{out,FS} = \text{Ideal } V_{out,FS} + \text{Gain Error}$
*   **Impact:** Affects the slope of the transfer function. Can be thought of as an error in the reference voltage or the scaling factor.
*   **Textbook Reference:** Sedra & Smith (6/e), Section 12.3, "Digital-to-Analog Converters".

---

## 2. Analog-to-Digital Converters (ADCs)

ADCs convert an analog input voltage or current into a digital output code. Their specifications are crucial for understanding how well they perform this conversion.

### 2.1 ADC Specifications

#### 2.1.1 Resolution

*   **Definition:** The number of bits ($n$) in the digital output code. It determines the number of discrete levels that the ADC can represent from the analog input range.
*   **Impact:** Higher resolution allows for finer quantization of the analog input, leading to more accurate digital representation.
*   **Formula:** An $n$-bit ADC has $2^n$ possible output codes. The resolution in terms of the analog input step size (quantization step or LSB voltage) is:
    $V_{LSB} = \frac{V_{FS}}{2^n - 1}$ or $\frac{V_{FS}}{2^n}$ (depending on definition, often $V_{FS}/2^n$ is used for simplicity).
    Where $V_{FS}$ is the full-scale analog input voltage range.
*   **Example:** An 8-bit ADC with a full-scale input range of 0-5V has a resolution of $\frac{5V}{2^8} = \frac{5V}{256} \approx 19.5 \text{ mV}$. This means the analog input must change by about 19.5 mV to trigger a change in the digital output.
*   **Textbook Reference:** Razavi (2/e), Chapter 14, "Analog-to-Digital Converters". Sedra & Smith (6/e), Section 12.4, "Analog-to-Digital Converters".

#### 2.1.2 Quantization Error

*   **Definition:** The inherent error introduced by approximating a continuous analog input with a discrete digital output. For an ADC, it's the difference between the actual analog input and the digital output representation.
*   **Range:** Ideally, the quantization error is within $\pm \frac{1}{2}$ LSB.
*   **Impact:** Sets the fundamental limit on ADC accuracy.

#### 2.1.3 Non-linearity

*   **Definition:** The deviation of the ADC's transfer function from its ideal linear characteristic.
*   **Types:**
    *   **Differential Non-linearity (DNL):** The deviation of the step size between adjacent digital output codes from the ideal 1 LSB step.
        *   **Requirement for Monotonicity:** Similar to DACs, for an ADC to be monotonic (output code always increases with increasing analog input), DNL must be $\ge -1$ LSB.
        *   **Example:** If the analog input range required to change from code 011 to 100 is 1.2 LSBs, the DNL for that transition is +0.2 LSBs.
    *   **Integral Non-linearity (INL):** The deviation of the actual analog input voltage corresponding to a digital output code from the ideal straight-line relationship. It represents the cumulative effect of DNL errors.
*   **Impact:** Both DNL and INL contribute to the overall inaccuracy of the ADC.
*   **Textbook Reference:** Razavi (2/e), Section 14.1.2, "Linearity Errors". Baker et al. (2000), Chapter 17, "Analog-to-Digital Converters".

#### 2.1.4 Monotonicity

*   **Definition:** An ADC is monotonic if its digital output code either increases or stays the same as the analog input voltage increases.
*   **Condition:** Achieved when DNL $\ge -1$ LSB for all codes.
*   **Impact:** Non-monotonicity means that for some increase in analog input, the digital output might decrease or skip codes, leading to lost information.

#### 2.1.5 Conversion Time (or Speed)

*   **Definition:** The time required for the ADC to convert an analog input to a digital output code. This is a critical parameter for real-time applications.
*   **Types of ADCs and their conversion times:**
    *   **Flash ADCs:** Very fast, typically nanoseconds, but complex and power-hungry for high resolutions.
    *   **Successive Approximation Register (SAR) ADCs:** Moderate speed, typically microseconds.
    *   **Delta-Sigma ADCs:** Slower conversion rates (kHz to MHz), but achieve very high resolutions and linearity.
*   **Textbook Reference:** Razavi (2/e), Section 14.1.3, "Dynamic Specifications". Sedra & Smith (6/e), Section 12.4.4, "ADC Conversion Time".

#### 2.1.6 Signal-to-Noise Ratio (SNR)

*   **Definition:** The ratio of the power of the desired signal to the power of the noise in the converted digital output.
*   **Impact:** Higher SNR means a cleaner digital representation of the analog signal.
*   **Factors:** Primarily limited by quantization noise, but also influenced by thermal noise, flicker noise, and other circuit imperfections.
*   **Formula:** For an ideal $n$-bit ADC, the theoretical maximum SNR (SINAD - Signal to Noise and Distortion Ratio) is approximately $6.02n + 1.76$ dB.
*   **Textbook Reference:** Razavi (2/e), Section 14.1.3, "Dynamic Specifications".

#### 2.1.7 Effective Number of Bits (ENOB)

*   **Definition:** A measure of the ADC's performance that accounts for non-idealities like noise and distortion. It's the resolution that an ideal ADC would have to achieve the same SNR or SINAD as the actual ADC.
*   **Formula:** $ENOB = \frac{\text{SINAD} - 1.76}{6.02}$
*   **Impact:** A more realistic measure of ADC performance than just the nominal resolution. If ENOB is significantly less than the nominal resolution, it indicates performance issues.

#### 2.1.8 Offset Error

*   **Definition:** The analog input voltage that produces a digital output code of all zeros. Ideally, this should be zero or $-\frac{1}{2}$ LSB, depending on the ADC's input range definition.
*   **Impact:** A DC offset in the analog signal representation.

#### 2.1.9 Gain Error

*   **Definition:** The deviation of the ADC's full-scale analog input range from its ideal value.
*   **Impact:** Affects the slope of the input-output transfer function.

#### 2.1.10 Aperture Uncertainty (or Jitter)

*   **Definition:** The uncertainty in the timing of the sampling clock edge, which dictates when the analog input is sampled.
*   **Impact:** For fast-changing analog signals, clock jitter can lead to significant errors in the sampled value, degrading SNR.
*   **Textbook Reference:** Razavi (2/e), Section 14.1.3, "Dynamic Specifications".

---

## 3. Key Concepts and Definitions Recap

*   **LSB (Least Significant Bit):** The smallest possible change in the digital output, corresponding to the smallest step in the analog domain.
*   **MSB (Most Significant Bit):** The bit with the highest place value in the digital code.
*   **Full-Scale Range ($V_{FS}$):** The total analog voltage span that the converter can handle.
*   **Monotonicity:** The property that the output consistently moves in one direction (up or down) as the digital input increases. Crucial for preserving signal order.
*   **Linearity (DNL & INL):** Measures how closely the actual transfer characteristic matches an ideal straight line.
*   **Settling Time (DAC):** Time for the DAC output to reach its final value within a tolerance.
*   **Conversion Time (ADC):** Time for the ADC to produce a digital output after receiving an analog input.
*   **SNR/SINAD/ENOB:** Metrics for signal quality in the digitized output, considering noise and distortion.

---

## 4. Practice Questions and Answers

**Question 1 (DAC):**
An 8-bit DAC has a reference voltage ($V_{ref}$) of 4.096 V.
a) What is the ideal step size (LSB voltage) of this DAC?
b) What is the ideal output voltage for the digital code 1000 0000 (binary)?
c) If the DNL for the transition from code 0111 1111 to 1000 0000 is +0.2 LSB, what is the actual output voltage for the code 1000 0000, assuming no offset or gain errors?

**Answer 1:**
a) $V_{LSB} = \frac{V_{ref}}{2^n - 1} = \frac{4.096 \text{ V}}{2^8 - 1} = \frac{4.096 \text{ V}}{255} \approx 0.016 \text{ V} = 16 \text{ mV}$.
b) The code 1000 0000 (binary) represents $2^7 = 128$ LSBs.
   Ideal $V_{out} = 128 \times V_{LSB} = 128 \times 0.016 \text{ V} = 2.048 \text{ V}$.
c) The DNL of +0.2 LSB means the step size for this particular transition is $1 + 0.2 = 1.2$ LSBs.
   The ideal voltage for code 0111 1111 is $127 \times 0.016 \text{ V} = 2.032 \text{ V}$.
   The actual voltage for code 1000 0000 is $V_{out}(\text{code 0111 1111}) + \text{Actual Step Size}$
   $V_{out}(1000 0000) = 2.032 \text{ V} + (1.2 \times 0.016 \text{ V})$
   $V_{out}(1000 0000) = 2.032 \text{ V} + 0.0192 \text{ V} = 2.0512 \text{ V}$.
   Alternatively, considering the cumulative error: The ideal output for 1000 0000 is 2.048V. The DNL of +0.2 LSB at this transition means the cumulative INL at this point is approximately +0.2 LSB (assuming previous DNLs were zero).
   Actual $V_{out}(1000 0000) = \text{Ideal } V_{out}(1000 0000) + \text{INL} \times V_{LSB}$
   Actual $V_{out}(1000 0000) = 2.048 \text{ V} + (0.2 \times 0.016 \text{ V}) = 2.048 \text{ V} + 0.0032 \text{ V} = 2.0512 \text{ V}$.

**Question 2 (ADC):**
An ADC has a full-scale input range ($V_{FS}$) of 5 V and a nominal resolution of 10 bits.
a) What is the ideal voltage represented by 1 LSB for this ADC?
b) If the SINAD is measured to be 58 dB, calculate the ENOB.
c) If an ADC has a DNL of -1.5 LSB, is it monotonic? Explain why or why not.

**Answer 2:**
a) $V_{LSB} = \frac{V_{FS}}{2^n} = \frac{5 \text{ V}}{2^{10}} = \frac{5 \text{ V}}{1024} \approx 4.88 \text{ mV}$. (Note: Using $2^n$ for ADC LSB is common for simplicity, though $2^n-1$ defines the number of intervals).
b) $ENOB = \frac{\text{SINAD} - 1.76}{6.02} = \frac{58 \text{ dB} - 1.76}{6.02} \approx \frac{56.24}{6.02} \approx 9.34$ bits.
c) No, the ADC is not monotonic. For an ADC to be monotonic, its DNL must be greater than or equal to -1 LSB. A DNL of -1.5 LSB means that at least one step size is smaller than ideal by more than 1 LSB, causing the output code to potentially decrease as the input analog voltage increases, thus violating monotonicity.

---

## 5. Important Points to Remember

*   **Resolution vs. Accuracy:** Resolution defines the smallest step, while linearity (INL/DNL) and other error sources determine the actual accuracy.
*   **Monotonicity is Key:** A non-monotonic converter is generally unusable as it introduces ambiguities in signal interpretation.
*   **Trade-offs:** There are often trade-offs between speed, resolution, power consumption, and accuracy in both DACs and ADCs.
*   **Dynamic Specs Matter:** For time-varying signals, settling time (DAC) and conversion time/ENOB/jitter (ADC) are as important as static DC specifications.
*   **Context is Crucial:** The "best" specifications depend entirely on the application requirements.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 6. Textbooks and Reference Books Incorporated

*   **Behzad Razavi's "Design of Analog CMOS Integrated Circuits" (2/e):** Chapters 13 (DACs) and 14 (ADCs) are primary resources for detailed explanations of specifications, error sources, and basic architectures.
*   **Sedra & Smith's "Microelectronic Circuits" (6/e):** Chapters 12 (Section 12.3 for DACs, 12.4 for ADCs) provide foundational understanding of converter principles and their key parameters.
*   **Baker, Li, Boyce's "CMOS: Circuits Design, Layout and Simulation":** Relevant chapters on data converters further support the understanding of their specifications and circuit implementations.
*   **Allen & Holbery's "CMOS Analog Circuit Design" & Razavi's "Fundamentals of Microelectronics":** These provide broader context and alternative perspectives on analog circuit design principles that underpin data converter performance.
*   **Gray, Hurst, Lewis's "Analysis and Design of Analog Integrated Circuits":** Offers advanced analysis techniques that can be applied to understand the physical origins of converter specifications and errors.

---

This concludes the study notes for Module 4, focusing on the critical specifications of DACs and ADCs. A thorough understanding of these parameters is essential for selecting, designing, and evaluating data converter circuits in mixed-signal systems.