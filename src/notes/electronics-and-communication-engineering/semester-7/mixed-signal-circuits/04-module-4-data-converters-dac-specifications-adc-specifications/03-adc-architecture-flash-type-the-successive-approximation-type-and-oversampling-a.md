---
title: "ADC Architecture- Flash type, The Successive approximation type and oversampling ADCs."
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 4: Data Converters: DAC specifications, ADC specifications"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff42e"
status: "completed"
scrapedAt: "2026-05-23T18:08:16.351Z"
---
# MIXED SIGNAL CIRCUITS - Module 4: Data Converters: ADC Specifications and Architectures

This module focuses on understanding the fundamental principles and architectures of Analog-to-Digital Converters (ADCs), which are crucial components in mixed-signal systems for bridging the analog and digital worlds. We will delve into key ADC specifications and explore the operation of three prominent ADC architectures: Flash, Successive Approximation, and Oversampling ADCs. This aligns with Course Outcome CO5: "Describe the specifications and architectures of data converter circuits" (Knowledge Level: K2).

## 1. ADC Specifications

ADCs are characterized by a set of parameters that define their performance. Understanding these specifications is essential for selecting the appropriate ADC for a given application.

### 1.1 Key Specifications

*   **Resolution:**
    *   **Definition:** The smallest analog voltage change that the ADC can detect and represent as a digital code. It is typically expressed in bits (N).
    *   **Impact:** Higher resolution means finer quantization steps, leading to a more accurate digital representation of the analog signal.
    *   **Formula:** Resolution (LSB) = Full-scale Range (FSR) / 2^N
    *   **Example:** An 8-bit ADC with an FSR of 5V can distinguish voltage changes of 5V / 2^8 = 19.5mV.
    *   **Reference:** Razavi, *Design of Analog CMOS Integrated Circuits*, Chapter 10, discusses quantization and its relation to resolution.

*   **Quantization Error (Quantization Noise):**
    *   **Definition:** The error introduced when an analog voltage is converted into a discrete digital code. It is the difference between the actual analog value and the quantized digital value.
    *   **Range:** For a bipolar quantizer, the error is typically between -LSB/2 and +LSB/2. For a unipolar quantizer, it's between 0 and LSB.
    *   **Impact:** Affects the signal-to-noise ratio (SNR) of the converted signal.
    *   **Reference:** Baker et al., *CMOS: Circuits Design, Layout and Simulation*, Chapter 17, details quantization error in ADC design.

*   **Integral Non-Linearity (INL):**
    *   **Definition:** The maximum deviation of the ADC's actual transfer function from its ideal straight-line transfer function. It's measured in LSBs.
    *   **Impact:** Represents non-linearities in the conversion process, affecting accuracy across the entire input range.
    *   **Measurement:** Calculated by finding the best-fit straight line through the transfer function points and measuring the maximum deviation.
    *   **Reference:** Sedra & Smith, *Microelectronic Circuits*, Chapter 13, provides a good overview of ADC non-idealities including INL.

*   **Differential Non-Linearity (DNL):**
    *   **Definition:** The maximum deviation of the width of a particular digital code's analog input range from its ideal width (1 LSB). It's measured in LSBs.
    *   **Impact:** If DNL is greater than 1 LSB, the ADC can be non-monotonic (missed codes). If DNL is less than -1 LSB, it can exhibit redundant codes.
    *   **Measurement:** DNL is the difference between the actual step size and 1 LSB for each transition.
    *   **Reference:** Allen & Holbery, *CMOS Analog Circuit Design*, Chapter 14, discusses DNL and its implications for monotonicity.

*   **Signal-to-Noise Ratio (SNR):**
    *   **Definition:** The ratio of the power of the desired signal to the power of the noise in the output.
    *   **Impact:** A higher SNR indicates a cleaner digital representation of the analog signal. Quantization error is a primary contributor to noise.
    *   **Formula (Ideal):** SNR (dB) = 6.02N + 1.76 dB (where N is the resolution in bits)
    *   **Example:** A perfect 10-bit ADC would have an SNR of approximately 60.2 + 1.76 = 61.96 dB.
    *   **Reference:** Razavi, *Fundamentals of Microelectronics*, Chapter 8, explains the concept of SNR in the context of signal processing.

*   **Signal-to-Noise and Distortion Ratio (SINAD):**
    *   **Definition:** The ratio of the power of the fundamental signal to the sum of the powers of noise and harmonic distortion.
    *   **Impact:** Provides a more comprehensive measure of signal quality than SNR alone, as it accounts for non-linearities.
    *   **Formula:** SINAD (dB) = 20 * log10 (Signal Power / (Noise Power + Distortion Power))
    *   **Reference:** Gray, Hurst, Lewis, *Analysis and Design of Analog Integrated Circuits*, Chapter 10, discusses dynamic performance metrics like SINAD.

*   **Effective Number of Bits (ENOB):**
    *   **Definition:** A measure of the ADC's actual performance in terms of resolution, taking into account noise and distortion.
    *   **Impact:** Indicates how many bits of the ADC's advertised resolution are actually usable for representing the signal cleanly.
    *   **Formula:** ENOB = (SINAD - 1.76) / 6.02
    *   **Example:** If an ADC has a SINAD of 45 dB, its ENOB is (45 - 1.76) / 6.02 = 7.19 bits. This means its performance is equivalent to an ideal 7.19-bit ADC.

*   **Conversion Speed (Throughput Rate):**
    *   **Definition:** The maximum rate at which the ADC can perform conversions.
    *   **Units:** Samples per second (SPS) or Hertz (Hz).
    *   **Impact:** Crucial for real-time applications.
    *   **Reference:** All textbooks will discuss conversion speed in the context of each architecture.

*   **Power Consumption:**
    *   **Definition:** The amount of power the ADC consumes during operation.
    *   **Impact:** Important for battery-powered or low-power applications.

### 1.2 Important Points to Remember (ADC Specifications)

*   **Trade-offs:** There are often trade-offs between resolution, speed, and power consumption.
*   **Application Driven:** The choice of ADC and its required specifications depend heavily on the application's requirements.
*   **Testing:** Specifications are often determined through rigorous testing using calibrated input signals.

---

## 2. ADC Architectures

We will now explore the internal workings of three major ADC architectures.

### 2.1 Flash Analog-to-Digital Converter (FADC)

The Flash ADC is the fastest type of ADC but also the most complex in terms of hardware for a given resolution.

#### 2.1.1 Architecture and Operation

*   **Components:**
    *   **Resistor Ladder:** A string of resistors that creates a series of equally spaced reference voltages (threshold voltages).
    *   **Comparators:** A bank of (2^N - 1) comparators, where N is the resolution in bits. Each comparator compares the input analog voltage to one of the reference voltages from the resistor ladder.
    *   **Encoder Logic:** Logic gates (e.g., priority encoder) that take the outputs of the comparators and generate the N-bit digital output code.

*   **Operation:**
    1.  The input analog voltage ($V_{in}$) is simultaneously applied to all comparators.
    2.  Each comparator outputs a '1' if $V_{in}$ is greater than its reference voltage, and a '0' otherwise.
    3.  This creates a "thermometer code" (a unique binary pattern) at the output of the comparators.
    4.  The encoder logic decodes this thermometer code into the final binary digital output.

*   **Example (3-bit Flash ADC):**
    *   Requires 2^3 - 1 = 7 comparators.
    *   A resistor ladder generates 7 reference voltages: $V_{ref}/8, 2V_{ref}/8, ..., 7V_{ref}/8$.
    *   If $V_{in} = 0.6V_{ref}$:
        *   Comparators 1-5 will output '0' (assuming $V_{ref} = 1V$).
        *   Comparators 6-7 will output '1'.
        *   The thermometer code might be 0000011.
        *   The encoder translates this to a digital code like 011 (binary for 3).

#### 2.1.2 Key Characteristics

*   **Speed:** Very fast, as the conversion is determined by the propagation delay of the comparators and encoder. Conversion time is essentially constant.
*   **Complexity/Area:** High hardware complexity. The number of comparators and encoder logic grows exponentially with resolution (2^N - 1 comparators).
*   **Power Consumption:** High due to the large number of active comparators and the resistor ladder.
*   **Resolution Limit:** Practical resolutions are typically limited to around 8-10 bits due to the exponential increase in complexity and power.

#### 2.1.3 Advantages

*   Highest conversion speed.
*   Simple operation.

#### 2.1.4 Disadvantages

*   Very high hardware complexity and area.
*   High power consumption.
*   Limited resolution practical implementation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


#### 2.1.5 Reference

*   Razavi, *Design of Analog CMOS Integrated Circuits*, Chapter 10, provides a detailed analysis of Flash ADC architecture and its design considerations.
*   Sedra & Smith, *Microelectronic Circuits*, Chapter 13, illustrates the block diagram and operation of a Flash ADC.

#### 2.1.6 Practice Question (Flash ADC)

**Q:** What is the number of comparators required for a 6-bit Flash ADC? If the input voltage is above the reference voltage of 5 comparators, what is the resulting thermometer code?

**A:**
*   Number of comparators = $2^6 - 1 = 64 - 1 = 63$.
*   If the input voltage is above the reference voltage of 5 comparators, and assuming the comparators are ordered from lowest to highest reference voltage, the first 5 comparators will output '1', and the remaining comparators (up to the total number) will output '0'. The thermometer code would be a series of '1's followed by '0's, e.g., `1111100...0`. (The exact output depends on the specific reference voltages and comparator ordering).

### 2.2 Successive Approximation Analog-to-Digital Converter (SAR ADC)

The SAR ADC is a widely used architecture that offers a good balance between speed, resolution, and complexity.

#### 2.2.1 Architecture and Operation

*   **Components:**
    *   **Sample-and-Hold (S/H) Circuit:** Acquires the analog input voltage and holds it constant during the conversion process.
    *   **Digital-to-Analog Converter (DAC):** Converts the digital code being tested into an analog voltage.
    *   **Successive Approximation Register (SAR) / Control Logic:** A digital block that controls the SAR and the DAC. It works like a binary search algorithm.
    *   **Comparator:** Compares the output of the S/H circuit with the output of the DAC.

*   **Operation:**
    1.  **Sample Phase:** The S/H circuit acquires the input analog voltage ($V_{in}$).
    2.  **Track Phase (Conversion Starts):** The SAR logic starts with the most significant bit (MSB). It sets the MSB of the digital code to '1' and all other bits to '0'.
    3.  The DAC converts this digital code into an analog voltage ($V_{DAC}$).
    4.  The comparator compares $V_{in}$ with $V_{DAC}$.
        *   If $V_{in} > V_{DAC}$, the MSB is kept as '1'.
        *   If $V_{in} < V_{DAC}$, the MSB is reset to '0'.
    5.  The SAR logic then moves to the next most significant bit, setting it to '1' while keeping the previous bit's decision.
    6.  This process is repeated for all bits, from MSB to LSB. Each bit is tested and retained or discarded based on the comparator's output.
    7.  After N clock cycles (where N is the resolution), the SAR contains the final digital code.

*   **Example (3-bit SAR ADC):**
    *   Let $V_{in} = 0.6V_{ref}$ (assuming $V_{ref}$ is the full-scale range).
    *   **Start:** SAR = `100`. $V_{DAC}$ = $100_2 \times V_{ref}/8 = 4/8 V_{ref} = 0.5V_{ref}$.
    *   **Compare:** $V_{in} (0.6V_{ref}) > V_{DAC} (0.5V_{ref})$. MSB (bit 2) is '1'. SAR = `1XX`.
    *   **Next Bit (bit 1):** SAR = `110`. $V_{DAC}$ = $110_2 \times V_{ref}/8 = 6/8 V_{ref} = 0.75V_{ref}$.
    *   **Compare:** $V_{in} (0.6V_{ref}) < V_{DAC} (0.75V_{ref})$. Bit 1 is reset to '0'. SAR = `10X`.
    *   **Next Bit (bit 0):** SAR = `101`. $V_{DAC}$ = $101_2 \times V_{ref}/8 = 5/8 V_{ref} = 0.625V_{ref}$.
    *   **Compare:** $V_{in} (0.6V_{ref}) < V_{DAC} (0.625V_{ref})$. Bit 0 is reset to '0'. SAR = `100`.
    *   **Final Code:** `100` (binary for 4). The actual value is between 3 and 4 LSBs, so 4 is a reasonable approximation.

#### 2.2.2 Key Characteristics

*   **Speed:** Moderate. Requires N clock cycles for an N-bit conversion. Typically faster than integrating ADCs but slower than Flash ADCs.
*   **Complexity/Area:** Moderate. Requires an S/H circuit, a DAC, a comparator, and a SAR. The DAC complexity increases with resolution.
*   **Power Consumption:** Moderate. Generally lower than Flash ADCs for higher resolutions.
*   **Resolution:** Can achieve higher resolutions (e.g., 12-18 bits) more practically than Flash ADCs.

#### 2.2.3 Advantages

*   Good balance of speed, resolution, and power.
*   Modular design, making it easier to scale resolution.
*   Lower hardware complexity compared to Flash ADCs for the same resolution.

#### 2.2.4 Disadvantages

*   Conversion speed is limited by the clock frequency and number of bits.
*   Requires a high-performance DAC, which can be complex and consume power.
*   Input signal must remain constant during the entire conversion process (requiring a good S/H circuit).

#### 2.2.5 Reference

*   Baker et al., *CMOS: Circuits Design, Layout and Simulation*, Chapter 17, provides an in-depth look at SAR ADC architectures and design techniques.
*   Razavi, *Design of Analog CMOS Integrated Circuits*, Chapter 10, covers SAR ADCs as a fundamental architecture.

#### 2.2.6 Practice Question (SAR ADC)

**Q:** In a 4-bit SAR ADC, after the MSB (bit 3) is determined to be '1', and the next bit (bit 2) is determined to be '0', what will be the next digital word tested by the SAR, and what analog voltage will the DAC output if the reference voltage is 8V and the resistor ladder has fixed steps of 1V?

**A:**
*   The initial state for bit 3 being '1' would be `1000`.
*   After bit 2 is determined to be '0', the current state of the SAR is `10XX`.
*   The next bit to be tested is bit 1. The SAR logic will set bit 1 to '1' and keep bit 0 as '0'.
*   The next digital word tested will be `1010`.
*   The analog voltage output by the DAC will be $1010_2 \times (8V / 2^4) = 10 \times (8V / 16) = 10 \times 0.5V = 5V$.

### 2.3 Oversampling ADCs (Sigma-Delta ADCs)

Oversampling ADCs, particularly Sigma-Delta (Σ-Δ) ADCs, achieve high resolution by oversampling the input signal and using noise shaping techniques.

#### 2.3.1 Architecture and Operation

*   **Core Components:**
    *   **Delta-Sigma Modulator:**
        *   **Integrator(s):** Sums the difference between the analog input and the quantized feedback signal.
        *   **Quantizer:** A low-resolution ADC (often 1-bit) that quantizes the integrator output.
        *   **Feedback DAC:** A low-resolution DAC that converts the quantizer's output back into an analog signal to be subtracted from the input.
    *   **Digital Filter:**
        *   **Decimation Filter:** Filters out the high-frequency noise shaped by the modulator and reduces the sampling rate to the desired output rate.

*   **Operation:**
    1.  **Oversampling:** The input analog signal is sampled at a much higher rate ($f_s'$) than the desired output rate ($f_s$).
    2.  **Delta-Sigma Modulation:** The modulator continuously compares the input signal with a quantized version of itself (generated by the feedback loop). This process effectively averages the signal over many samples and pushes the quantization noise to higher frequencies.
    3.  **Noise Shaping:** The integrator and feedback loop work together to "shape" the quantization noise. The noise is attenuated at low frequencies (where the signal is) and amplified at high frequencies.
    4.  **Filtering and Decimation:** The digital filter receives the high-rate, modulated digital data. The decimation filter removes the high-frequency noise and reduces the sampling rate by a factor (M, the oversampling ratio) to the desired output rate. The result is a high-resolution digital output.

*   **Example (1-bit Sigma-Delta Modulator):**
    *   The modulator has one integrator, a 1-bit quantizer, and a 1-bit feedback DAC.
    *   The output of the quantizer is either +1 or -1 (representing two levels).
    *   If the input is consistently higher than the feedback signal, the integrator output will ramp up, causing the quantizer to output '+1'. This '+1' is fed back, increasing the subtraction at the integrator input, which tends to bring the integrator output back down.
    *   Conversely, if the input is lower, the output will ramp down, causing the quantizer to output '-1'. This '-1' is fed back, decreasing the subtraction and bringing the integrator output back up.
    *   The output of the 1-bit quantizer is a stream of pulses, whose average value over time represents the analog input. The density of '+1' pulses indicates a higher input voltage.

#### 2.3.2 Key Characteristics

*   **Speed:** Slow effective sampling rate, but the internal oversampling rate is very high. The overall throughput is limited by the digital filter and decimation.
*   **Complexity/Area:** Low analog complexity (often uses simple integrators and a 1-bit quantizer). High digital complexity due to the digital filter.
*   **Power Consumption:** Can be optimized for low power, especially in the analog domain.
*   **Resolution:** Can achieve very high resolutions (e.g., 16-24 bits and beyond) by increasing the oversampling ratio and the order of the modulator.

#### 2.3.3 Advantages

*   Very high resolution achievable.
*   Excellent linearity.
*   Lower analog circuit complexity compared to other high-resolution ADCs.
*   Good rejection of out-of-band noise.

#### 2.3.4 Disadvantages

*   Slow conversion speed (low effective sampling rate).
*   Sensitive to clock jitter.
*   Requires significant digital signal processing.
*   The wide bandwidth of the noise can saturate subsequent circuits if not properly filtered.

#### 2.3.5 Reference

*   Sedra & Smith, *Microelectronic Circuits*, Chapter 13, introduces oversampling techniques and their advantages.
*   Razavi, *Fundamentals of Microelectronics*, Chapter 8, provides a good conceptual understanding of noise shaping in Σ-Δ converters.
*   Allen & Holbery, *CMOS Analog Circuit Design*, Chapter 14, delves into the design of Σ-Δ modulators.

#### 2.3.6 Practice Question (Oversampling ADC)

**Q:** Explain how noise shaping helps in achieving high resolution in a Sigma-Delta ADC. What is the role of the decimation filter?

**A:**
*   **Noise Shaping:** In a Sigma-Delta ADC, the quantization noise, which is inherently broadband, is pushed towards higher frequencies by the delta-sigma modulator's internal feedback loop and integrators. This effectively concentrates the noise in the out-of-band region, leaving the signal frequencies in the baseband with a significantly lower noise floor. This concentration of noise is called noise shaping. By oversampling and then filtering, the high-frequency noise is removed, resulting in a cleaner, higher-resolution representation of the original signal.
*   **Decimation Filter:** The decimation filter operates on the high-rate, modulated digital data from the sigma-delta modulator. Its primary roles are:
    1.  **Filtering:** It removes the high-frequency quantization noise that has been shaped to the out-of-band region.
    2.  **Decimation:** It reduces the sampling rate by a factor (the oversampling ratio, M) to the desired output data rate. This process is called decimation.

---

## 3. Linking ADC Architectures to Course Outcomes

This module directly addresses **CO5: Describe the specifications and architectures of data converter circuits (Knowledge Level: K2)**. By studying the different ADC specifications and the operational principles of Flash, SAR, and Oversampling ADCs, we gain a fundamental understanding of how analog signals are converted into digital representations.

While not the primary focus, understanding the underlying circuit blocks used in these ADCs, such as comparators and DACs, implicitly relates to earlier modules covering amplifiers (CO1, CO2, CO3) and operational amplifiers (CO4). For instance, comparators are essentially high-gain differential amplifiers with hysteresis, and DACs are built using resistor networks and switches, often controlled by digital logic that might be influenced by amplifier characteristics.

---

## 4. Summary and Key Takeaways

*   **ADC Specifications** define performance parameters like resolution, linearity, speed, and power. Key specs include resolution, INL, DNL, SNR, SINAD, and ENOB.
*   **Flash ADCs** are the fastest but most hardware-intensive, suitable for high-speed, low-resolution applications.
*   **SAR ADCs** offer a good balance of speed, resolution, and complexity, making them versatile for many applications.
*   **Oversampling ADCs (Sigma-Delta)** achieve very high resolutions by oversampling and using noise shaping and digital filtering, suitable for applications requiring high accuracy but lower sampling rates.
*   The choice of ADC architecture is driven by application requirements, often involving trade-offs between speed, resolution, and power.

---

## 5. Further Study and Practice

*   Explore the design of the specific circuit blocks within each ADC (e.g., the resistor ladder, comparators, S/H circuits, op-amps for integrators). This links back to Modules 1-3.
*   Investigate the effect of process variations and noise on ADC performance.
*   Look into hybrid ADC architectures that combine features of different types.
*   Try to simulate the operation of a simple 2-bit or 3-bit SAR ADC or Flash ADC in a circuit simulator.

---