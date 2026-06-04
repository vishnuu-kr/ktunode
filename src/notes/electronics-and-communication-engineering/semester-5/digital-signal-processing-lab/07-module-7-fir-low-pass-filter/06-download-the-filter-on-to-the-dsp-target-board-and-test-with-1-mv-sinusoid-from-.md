---
title: "Download the filter on to the DSP target board and test with 1 mV sinusoid from a signal 
generator connected to the analog port."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 7: FIR low pass filter"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec55"
status: "completed"
scrapedAt: "2026-05-23T17:56:15.571Z"
---
# Digital Signal Processing Lab - Module 7: FIR Low-Pass Filter

## Topic: Download the filter onto the DSP target board and test with a 1 mV sinusoid from a signal generator connected to the analog port.

---

### **Module Objective:**
To gain practical experience in designing, implementing, and testing Finite Impulse Response (FIR) low-pass filters on a Digital Signal Processing (DSP) target board.

### **Topic Learning Outcomes:**
By the end of this topic, you will be able to:
*   Understand the process of downloading a compiled DSP program onto the target board.
*   Configure and use the DSP board's analog input and output ports.
*   Connect an external signal generator to the DSP board's analog input.
*   Apply a low-amplitude sinusoidal input signal to the DSP board.
*   Observe and analyze the output of the FIR low-pass filter on the DSP board for the applied sinusoidal input.
*   Verify the filtering effect of the low-pass filter on the sinusoidal signal.

---

### **1. Introduction to DSP Target Boards and Embedded Implementation**

*   **DSP Target Board:** A specialized hardware platform designed for executing digital signal processing algorithms. These boards typically include:
    *   A Digital Signal Processor (DSP) chip (e.g., TMS320C6x series, ARM-based processors).
    *   Memory (RAM, ROM, Flash).
    *   Analog-to-Digital Converters (ADCs) for analog input.
    *   Digital-to-Analog Converters (DACs) for analog output.
    *   Peripherals for communication and control (e.g., JTAG interface, USB).
    *   (Ref: Chassaing, Rulph. *DSP applications using C and the TMS320C6x DSK*, Chapter 2)

*   **Embedded Implementation:** The process of translating a DSP algorithm (designed in software like MATLAB/Python or C) into executable code that runs directly on the DSP hardware.

*   **Key Steps in Embedded Implementation:**
    1.  **Algorithm Design:** Designing the FIR filter coefficients and the processing loop.
    2.  **Code Development:** Writing the C/C++ code for the DSP, including the filter implementation and I/O handling.
    3.  **Compilation:** Using a DSP-specific compiler to convert the C/C++ code into machine code executable by the DSP processor.
    4.  **Linking:** Combining compiled object files and libraries to create a final executable program.
    5.  **Loading/Downloading:** Transferring the executable program from a host computer to the DSP target board's memory.
    6.  **Execution:** Running the program on the DSP board.
    7.  **Debugging:** Identifying and fixing errors in the code or hardware configuration.

---

### **2. Downloading the Filter to the DSP Target Board**

*   **Development Environment:** You'll typically use an Integrated Development Environment (IDE) provided by the DSP manufacturer (e.g., Code Composer Studio (CCS) for Texas Instruments DSPs).
    *   (Ref: Chassaing, Rulph. *DSP applications using C and the TMS320C6x DSK*, Chapter 3: CCS Environment)

*   **Connection:** The DSP target board is usually connected to a host computer via a JTAG (Joint Test Action Group) interface or a USB port for debugging and program loading.

*   **Download Process (General Steps):**
    1.  **Launch the IDE:** Open the DSP development software on your host computer.
    2.  **Create/Open Project:** Create a new project or open an existing one containing your FIR filter implementation code.
    3.  **Configure Project:** Ensure the project settings (compiler, linker, target hardware) are correctly configured for your specific DSP board.
    4.  **Build/Compile:** Compile the source code to generate the executable file.
    5.  **Connect to Target:** Establish a connection between the host computer and the DSP target board using the IDE. This typically involves selecting the correct debug probe/interface.
    6.  **Load Program:** Load the compiled executable file onto the DSP's memory (e.g., RAM or Flash).
    7.  **Run Program:** Start the execution of the program on the DSP board.

*   **Important Considerations:**
    *   **Boot Mode:** Ensure the DSP board is in the correct boot mode to allow program loading.
    *   **Debug Probe Drivers:** Make sure the necessary drivers for your debug probe (e.g., XDS560, USB200) are installed on your host computer.
    *   **Memory Map:** Understand the DSP's memory map to ensure your program is loaded into the correct location.

---

### **3. Interfacing with Analog Ports**

*   **Analog-to-Digital Converter (ADC):** Converts the continuous-time analog input signal into a discrete-time digital signal that the DSP can process.
    *   **Key Parameters:**
        *   **Sampling Rate ($F_s$):** The rate at which the ADC samples the analog signal. This determines the maximum frequency that can be represented in the digital domain (Nyquist frequency, $F_s/2$).
        *   **Resolution (Bits):** The number of bits used to represent each digital sample. Higher resolution leads to a more accurate representation of the analog signal's amplitude.
        *   **Input Voltage Range:** The range of analog voltages the ADC can accept.

*   **Digital-to-Analog Converter (DAC):** Converts the DSP's processed digital signal back into a continuous-time analog signal for output.
    *   **Key Parameters:**
        *   **Sampling Rate ($F_s$):** Usually the same as the ADC sampling rate for direct signal processing.
        *   **Resolution (Bits):** Affects the accuracy of the reconstructed analog signal.
        *   **Output Voltage Range:** The range of analog voltages the DAC can produce.

*   **Connecting a Signal Generator:**
    1.  **Signal Generator Setup:**
        *   Set the output to a **sine wave**.
        *   Set the **amplitude to 1 mV**. This is a very low amplitude, so careful adjustment will be needed.
        *   Set the **frequency**. Choose a frequency that is well within the passband of your designed FIR low-pass filter. For example, if your sampling rate is 8 kHz, and your cutoff frequency is 1 kHz, a test frequency of 200 Hz or 500 Hz would be appropriate.
        *   Set the **output impedance** of the signal generator to match the input impedance of the DSP board's analog input (often 50 Ohms).
    2.  **DSP Board Connection:**
        *   Locate the **analog input port** on your DSP target board. This is usually a BNC connector labeled "Audio In," "Analog In," or similar.
        *   Use a suitable **BNC cable** to connect the output of the signal generator to the analog input port of the DSP board.
        *   **Important:** Ensure proper grounding to avoid noise and signal integrity issues.

*   **Code Configuration:**
    *   Your C code running on the DSP needs to be configured to:
        *   Initialize the ADC and DAC at the correct sampling rate ($F_s$).
        *   Set the ADC input channel.
        *   Potentially set the DAC output channel.
        *   The sampling rate $F_s$ is crucial and must be consistent with the FIR filter design.

---

### **4. Testing the FIR Low-Pass Filter**

*   **Filter Characteristics:**
    *   **FIR Filter:** A digital filter whose impulse response is of finite duration. Its output is a finite sum of past input samples, each multiplied by a corresponding filter coefficient.
    *   **Low-Pass Filter:** A filter that allows frequencies below a certain cutoff frequency to pass through with minimal attenuation, while attenuating frequencies above the cutoff frequency.

*   **Expected Behavior:**
    *   When a sinusoidal signal with a frequency **below** the filter's cutoff frequency is applied, it should pass through the filter with its amplitude largely preserved (though potentially attenuated by the filter's gain in the passband) and its phase shifted.
    *   When a sinusoidal signal with a frequency **above** the filter's cutoff frequency is applied, it should be significantly attenuated (its amplitude reduced).

*   **Procedure:**
    1.  **Design and Compile FIR Filter:** Ensure you have designed and compiled an FIR low-pass filter with specific coefficients and a defined sampling rate ($F_s$) and cutoff frequency ($F_c$).
    2.  **Load onto DSP:** Download the compiled filter code onto the DSP target board.
    3.  **Connect Signal Generator:**
        *   Set the signal generator to output a **1 mV sine wave** at a frequency $f_1$ **below** the cutoff frequency ($f_1 < F_c$).
        *   Connect the signal generator to the DSP's analog input.
    4.  **Run DSP Program:** Start the program execution on the DSP.
    5.  **Observe Output:**
        *   Connect an **oscilloscope** to the analog output of the DSP board.
        *   Observe the output waveform. You should see a sinusoidal waveform at frequency $f_1$.
        *   **Measure the output amplitude.** Due to the low input amplitude (1 mV), the output amplitude might be very small and potentially difficult to measure accurately without amplification or careful scope settings. Look for a discernible sine wave.
    6.  **Change Input Frequency (Below $F_c$):** If possible, test with another frequency $f_2$ such that $f_1 < f_2 < F_c$. The output should still be a sine wave with potentially a slightly different amplitude and phase.
    7.  **Change Input Frequency (Above $F_c$):**
        *   Set the signal generator to output a **1 mV sine wave** at a frequency $f_3$ **above** the cutoff frequency ($f_3 > F_c$).
        *   Observe the output waveform on the oscilloscope.
        *   **Measure the output amplitude.** You should observe a significant reduction in the output amplitude compared to the input, or it might be very difficult to distinguish from noise.
    8.  **Troubleshooting (Low Amplitude):**
        *   **Gain Setting:** Your FIR filter design might have a gain less than 1 in the passband. The multiplication of this gain with the tiny 1 mV input might result in an output that is difficult to see.
        *   **Oscilloscope Settings:** Use the oscilloscope's highest sensitivity settings (mV/div). Average the signal if possible to reduce noise.
        *   **Amplification:** Consider if your DSP board or external circuitry allows for some gain in the signal path.
        *   **Higher Input Amplitude:** For initial testing and easier observation, you might temporarily increase the signal generator amplitude to, for example, 10 mV or 100 mV to confirm the filter is working correctly before reducing it to 1 mV. However, **ensure the input voltage does not exceed the ADC's input range.**

*   **Verification:** Compare the output amplitude and presence of the sinusoid at different input frequencies relative to the designed cutoff frequency. This confirms the low-pass filtering action.

---

### **5. Key Concepts and Definitions Recap**

*   **FIR Filter:** A system with a finite impulse response, defined by $y[n] = \sum_{k=0}^{M-1} b_k x[n-k]$, where $b_k$ are the filter coefficients and $M$ is the filter order.
*   **Low-Pass Filter:** Passes low frequencies and attenuates high frequencies.
*   **Cutoff Frequency ($F_c$):** The frequency at which the filter's response begins to significantly attenuate the signal.
*   **Sampling Rate ($F_s$):** The rate at which analog signals are converted to digital signals (and vice-versa). Crucial for determining the digital frequency response.
*   **Nyquist Frequency:** $F_s/2$. The maximum frequency that can be represented without aliasing.
*   **ADC/DAC:** Devices for converting between analog and digital signal representations.
*   **JTAG:** A standard interface for debugging and programming embedded systems.
*   **Passband:** The range of frequencies that are allowed to pass through the filter with minimal attenuation.
*   **Stopband:** The range of frequencies that are significantly attenuated by the filter.
*   **Attenuation:** The reduction in signal amplitude.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **6. Textbooks and Reference Material Integration**

*   **Ingle & Proakis:** Their book likely covers the theoretical design of FIR filters, including coefficient calculation methods (e.g., windowing, frequency sampling) and their frequency response characteristics. Understanding these designs is crucial before implementation. (e.g., Chapters on FIR filter design and implementation).
*   **Downey:** While using Python, Downey's book emphasizes practical DSP concepts and the use of tools like NumPy and SciPy for filter design and analysis. The principles of filter design and testing with sine waves are transferable. (e.g., Chapters on filtering and spectral analysis).
*   **Chassaing:** This book is directly relevant to the practical aspects of this topic, covering DSP hardware (TMS320C6x), development tools (CCS), and C implementation of DSP algorithms, including filter loading and I/O handling. (e.g., Chapters on CCS, hardware interfacing, and filter implementation).
*   **Oppenheim & Schafer:** This is a foundational text for DSP theory. It provides deep insights into the mathematical underpinnings of FIR filters, their properties (e.g., linear phase), and analysis techniques.

---

### **7. Alignment with Course Outcomes**

*   **CO1: Generate basic signal waveforms (K2):** While not directly generating the test signal, understanding the sine wave from the signal generator is fundamental.
*   **CO2: Verify the properties of DFT (K2):** Observing the output of the filter with a known input frequency (a pure sinusoid) allows for qualitative verification of its behavior, which is related to its frequency domain properties.
*   **CO3: Familiarize with DSP hardware and interface with Computer (K2):** This topic directly addresses this outcome by requiring the use of the DSP target board, its analog ports, and the process of downloading code from a computer.
*   **CO4: Implement LTI systems (K3):** An FIR filter is a Linear Time-Invariant (LTI) system. Implementing and testing it on hardware demonstrates practical implementation of LTI systems.
*   **CO5: Design and Implement FIR low-pass filters (K3):** This topic is the practical culmination of designing and implementing an FIR low-pass filter. Testing with a real signal validates the design and implementation.

---

### **8. Practice Questions and Exercises**

**Question 1:**
You have designed an FIR low-pass filter with coefficients `b = [0.1, 0.2, 0.3, 0.2, 0.1]` and a sampling rate $F_s = 10$ kHz. You are testing it on a DSP board.
a) What is the order of this filter?
b) If you connect a signal generator producing a 1 mV sine wave at 100 Hz, what do you expect to observe at the DSP's analog output? Justify your answer based on typical low-pass filter behavior.
c) If you then change the input to a 1 mV sine wave at 4 kHz, what do you expect to observe? Justify your answer.
d) What is the Nyquist frequency for this system?

**Answer 1:**
a) The order of the filter is $M-1 = 5-1 = 4$.
b) A 100 Hz sine wave is likely well within the passband of a typical low-pass filter designed with these coefficients (assuming a reasonable cutoff frequency). You would expect to see a sine wave at the output with a frequency of 100 Hz. The amplitude might be attenuated by the filter's gain at 100 Hz, and there will be a phase shift.
c) A 4 kHz sine wave is likely in the stopband. You would expect to see a significantly attenuated sine wave, possibly very small in amplitude, or indistinguishable from noise.
d) The Nyquist frequency is $F_s/2 = 10 \text{ kHz} / 2 = 5$ kHz.

**Question 2:**
You are experiencing extremely low output amplitude when testing your FIR low-pass filter with a 1 mV sine wave input, even for frequencies within the passband. List at least three possible reasons for this observation.

**Answer 2:**
1.  **Low Passband Gain:** The designed FIR filter might have a passband gain significantly less than 1. Multiplying this gain with the already small 1 mV input results in an even smaller output signal.
2.  **Oscilloscope Sensitivity:** The oscilloscope's vertical sensitivity (e.g., mV/division) might be set too high, making a small signal appear as a flat line or difficult to discern.
3.  **ADC/DAC Resolution or Range:** While less common for basic filtering, issues with ADC/DAC configuration or limitations could affect the signal's fidelity and measured amplitude.
4.  **Signal Generator Output Impedance Mismatch:** An impedance mismatch could lead to signal loss.
5.  **Connection Issues:** Poor BNC cable connections or grounding issues can introduce noise and signal degradation.
6.  **Filter Implementation Error:** There might be an error in the C code implementation of the filter, leading to incorrect calculations.

**Question 3 (Practical Task):**
Given a DSP target board with a sampling rate capability of 44.1 kHz and an analog input/output, design a simple FIR low-pass filter using the window method (e.g., Hamming window) with a cutoff frequency of approximately 2 kHz.
a) Choose a filter order (e.g., 10-20) and calculate the filter coefficients.
b) Write a basic C code structure to initialize the audio codec (if applicable), load the coefficients, and implement the FIR filtering loop.
c) Describe the steps to download this code onto your DSP target board and connect a signal generator.
d) What is the expected behavior when testing with a 1 mV sine wave at 500 Hz and then at 10 kHz?

**Answer 3:**
a)  *This requires actual calculation using tools or formulas. For example, using a Hamming window and a cutoff of 2 kHz at 44.1 kHz sampling rate would involve designing a filter with specific normalized cutoff frequency ($\omega_c = 2\pi \times 2000 / 44100 \approx 0.285$ radians/sample).*
b)  *This would involve specific DSP libraries and hardware register manipulation for the chosen DSP board (e.g., TMS320C6x DSK). The core would be:*
    ```c
    // Assume coeffs and input/output buffers are defined
    float coeffs[FILTER_ORDER]; // Your calculated coefficients
    float input_buffer[FILTER_ORDER];
    float output_buffer[BUFFER_SIZE];
    int input_index = 0;

    // Initialize audio codec at 44.1 kHz

    // Main processing loop
    for (i = 0; i < BUFFER_SIZE; i++) {
        // Read sample from ADC
        current_input = read_adc();

        // Update input buffer (e.g., circular buffer)
        input_buffer[input_index] = current_input;

        // Perform FIR convolution
        float y = 0;
        for (j = 0; j < FILTER_ORDER; j++) {
            y += coeffs[j] * input_buffer[(input_index - j + FILTER_ORDER) % FILTER_ORDER];
        }

        // Write output to DAC
        write_dac(y);

        // Update input buffer index
        input_index = (input_index + 1) % FILTER_ORDER;
    }
    ```
c)  *Steps would involve launching Code Composer Studio (or similar IDE), creating a new project, adding the C source file, configuring the project for the target hardware, building the project, connecting the debugger, loading the .out file, and running.*
    *   *Connect signal generator (set to 1 mV sine, appropriate frequency) to the DSP's analog input BNC.*
d)  *At 500 Hz (below 2 kHz cutoff): You expect a 1 mV sine wave at the output, possibly with some attenuation and phase shift.*
    *   *At 10 kHz (well above 2 kHz cutoff): You expect the output to be significantly attenuated, likely very small or unobservable.*

---

### **9. Important Points to Remember**

*   **Amplitude Sensitivity:** Testing with 1 mV is challenging. Be prepared to use sensitive oscilloscope settings or temporarily increase the amplitude for verification.
*   **Sampling Rate Consistency:** Ensure the sampling rate used in your C code matches the rate assumed during FIR filter coefficient design.
*   **Hardware Initialization:** Proper initialization of the DSP's peripherals (ADC, DAC, clock) is critical for correct operation.
*   **Debugging Tools:** Utilize the debugging features of your IDE (breakpoints, watch windows) to inspect variables and program flow.
*   **Grounding:** Always ensure proper grounding for signal integrity.
*   **Documentation:** Refer to your specific DSP board's user manual and the IDE's documentation for hardware-specific details.

---