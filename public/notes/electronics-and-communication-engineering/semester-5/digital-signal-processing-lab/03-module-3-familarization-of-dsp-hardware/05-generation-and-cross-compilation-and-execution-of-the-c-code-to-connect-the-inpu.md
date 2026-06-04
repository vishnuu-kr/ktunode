---
title: "Generation and cross compilation and execution of the C code to connect the input analog 
port to the output. Connect a microphone, speak into it and observe the output electrical 
signal on a DSO and store it."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 3: Familarization of DSP Hardware"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec3e"
status: "completed"
scrapedAt: "2026-05-23T17:56:02.010Z"
---
# DIGITAL SIGNAL PROCESSING LAB - Module 3: Familiarization of DSP Hardware

## Topic: Generation, Cross-Compilation, and Execution of C Code for Analog Input/Output Connection

This module focuses on bridging the gap between software and hardware in Digital Signal Processing (DSP). We will learn how to write, compile, and run C code on a DSP processor to directly interact with analog signals from a microphone, observe the processed output on a Digital Storage Oscilloscope (DSO), and even store this data for further analysis. This practical exercise is crucial for understanding how DSP algorithms are implemented in real-world applications.

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental process of developing C code for DSP hardware.
*   Perform cross-compilation of C code targeted for a specific DSP processor.
*   Load and execute compiled C code on the DSP hardware.
*   Configure and utilize analog input and output ports on the DSP board.
*   Connect an analog input device (microphone) to the DSP board.
*   Observe the processed electrical signal on a Digital Storage Oscilloscope (DSO).
*   Store the observed electrical signal from the DSO for analysis.

### 2. Key Concepts and Definitions

#### 2.1. Digital Signal Processor (DSP) Hardware

*   **Definition:** A specialized microprocessor designed for high-speed, real-time processing of digital signals. DSPs are optimized for mathematical operations like multiplication and accumulation (MAC), which are fundamental to signal processing algorithms.
*   **Architecture:** Typically includes a high-speed multiplier, an accumulator, a barrel shifter, dedicated memory for instructions and data, and various peripherals for input/output.
*   **Real-time Processing:** The ability to process signals as they are acquired, without significant delay, which is essential for applications like audio processing, telecommunications, and control systems.

#### 2.2. Analog-to-Digital Converter (ADC)

*   **Definition:** A hardware component that converts a continuous-time, continuous-amplitude analog signal into a discrete-time, discrete-amplitude digital signal.
*   **Key Parameters:**
    *   **Sampling Rate ($f_s$):** The number of samples taken per second. Determines the maximum frequency that can be accurately represented (Nyquist-Shannon sampling theorem).
    *   **Resolution (Number of Bits):** The number of bits used to represent each sample. Higher resolution leads to greater accuracy and dynamic range.
    *   **Quantization Error:** The error introduced due to approximating the continuous analog amplitude to a discrete digital value.

#### 2.3. Digital-to-Analog Converter (DAC)

*   **Definition:** A hardware component that converts a discrete-time, discrete-amplitude digital signal back into a continuous-time, continuous-amplitude analog signal.
*   **Key Parameters:**
    *   **Output Voltage Range:** The range of analog voltages the DAC can produce.
    *   **Settling Time:** The time it takes for the DAC output to reach its final settled value after a digital input change.

#### 2.4. C Programming for DSP

*   **Standard C:** The foundational language for programming DSPs. However, specific DSP architectures often require extensions or specialized libraries for efficient hardware interaction.
*   **Embedded C:** A subset of C used for programming microcontrollers and embedded systems, including DSPs.
*   **DSP Libraries:** Manufacturers provide optimized libraries of functions for common DSP tasks (e.g., filtering, FFT, basic arithmetic) that can be called from your C code.

#### 2.5. Cross-Compilation

*   **Definition:** The process of compiling source code on one system (the host system, typically a PC) to produce executable code for a different system (the target system, the DSP board).
*   **Cross-Compiler Toolchain:** A suite of tools including a cross-compiler, linker, and debugger, specifically designed for the target architecture. Examples include GCC for ARM, TI Code Composer Studio for TMS320 series.
*   **Why Cross-Compilation?** DSP processors often have limited resources (memory, processing power) and may not be suitable for running development tools directly. Cross-compilation allows for efficient development on a powerful host machine.

#### 2.6. Digital Storage Oscilloscope (DSO)

*   **Definition:** An electronic test instrument that samples an analog signal and converts it into digital form, then stores and analyzes it.
*   **Functions:** Display waveforms, measure voltage, time, frequency, and capture transient signals.
*   **Usage in this Lab:** To visualize the analog input signal (from the microphone) and the processed analog output signal from the DSP board.

#### 2.7. Microphone

*   **Definition:** A transducer that converts sound waves into electrical signals.
*   **Types:** Electret condenser microphones are commonly used in embedded systems due to their small size and low power consumption.

### 3. Connecting Input Analog Port to Output

The core idea is to read an analog value from an input port, process it (in this simplest case, just pass it through), and write it to an output port.

**3.1. DSP Board Architecture (General)**

Most DSP development boards will have:

*   **Analog Input (ADC):** Connected to specific pins/channels on the DSP chip.
*   **Analog Output (DAC):** Connected to specific pins/channels on the DSP chip.
*   **DSP Core:** The main processing unit.
*   **Memory:** RAM for code and data, Flash for program storage.
*   **Peripherals:** Timers, communication interfaces (e.g., UART, SPI), and often an audio codec chip which interfaces with microphones and speakers.

**3.2. Hardware Connections**

1.  **Microphone to DSP Input:**
    *   The microphone's output will be an analog voltage signal that varies with sound pressure.
    *   This signal needs to be connected to the **analog input port** of your DSP board. This might involve a specific connector or header on the board, often designated as "AIN" or similar.
    *   Many DSP audio boards will have a dedicated microphone input jack. If not, you might need to connect to an ADC input pin through a simple pre-amplifier circuit if the microphone output signal is too weak.

2.  **DSP Output to DSO:**
    *   The analog output of the DSP board (from the DAC) needs to be connected to an **input channel of the DSO**.
    *   This connection is typically made using an oscilloscope probe or a BNC cable.

**3.3. Software Implementation Strategy**

1.  **Initialization:**
    *   Initialize the DSP's clock system.
    *   Configure the ADC: Select the input channel, set the sampling rate, and configure other relevant parameters.
    *   Configure the DAC: Set the output voltage range and other parameters.
    *   Potentially configure timers for precise sampling intervals.

2.  **Main Loop (Real-time Operation):**
    *   **Acquisition:** Read a sample from the ADC (this is the analog input signal).
    *   **Processing (Pass-through):** In this basic scenario, the read ADC value is directly assigned to the DAC output.
    *   **Output:** Write the processed value to the DAC.
    *   **Repetition:** This loop repeats continuously, effectively creating an analog pass-through.

### 4. Generation, Cross-Compilation, and Execution of C Code

This section outlines the practical steps involved in getting your C code running on the DSP.

**4.1. Writing the C Code**

Let's consider a simplified example (assuming hypothetical register addresses and functions for ADC/DAC access). **Note:** The actual code will be highly dependent on the specific DSP hardware and its associated Software Development Kit (SDK) or driver library.

```c
// Example C Code for Analog Pass-through

#include <stdio.h>
// Include DSP-specific headers for ADC/DAC, clock, etc.
// For example:
// #include "dsp_hal.h"
// #include "adc_driver.h"
// #include "dac_driver.h"

// Hypothetical definitions for ADC/DAC registers and functions
#define ADC_BASE_ADDRESS 0x01000000
#define DAC_BASE_ADDRESS 0x01000010

// Hypothetical functions to interact with hardware
void initialize_adc(int channel, int sampling_rate);
void initialize_dac(void);
unsigned int read_adc(int channel);
void write_dac(unsigned int value);

int main() {
    // --- Initialization ---
    // Initialize the DSP clock and peripherals
    // dsp_init_clocks();

    // Initialize the ADC with a specific channel and sampling rate
    // (e.g., channel 0, sampling rate of 8kHz)
    initialize_adc(0, 8000);

    // Initialize the DAC
    initialize_dac();

    printf("DSP Initialization complete. Starting analog loop.\n");

    // --- Main Processing Loop ---
    while (1) {
        // Read an analog sample from the ADC input channel
        unsigned int adc_sample = read_adc(0);

        // Process the sample (in this case, just a direct pass-through)
        unsigned int processed_sample = adc_sample;

        // Write the processed sample to the DAC output
        write_dac(processed_sample);
    }

    return 0; // This return will likely never be reached in embedded systems
}

// --- Hypothetical Hardware Interaction Functions ---
// These functions would be implemented using specific DSP registers and instructions
// based on the DSP's datasheet and the provided SDK.

void initialize_adc(int channel, int sampling_rate) {
    // Logic to configure ADC module:
    // - Set input channel
    // - Set sampling rate (often by configuring a timer and DMA)
    // - Enable ADC module
    printf("Initializing ADC on channel %d with sampling rate %d Hz...\n", channel, sampling_rate);
    // Example:
    // *((volatile unsigned int*)(ADC_BASE_ADDRESS + 0x04)) = (1 << 8) | channel; // Select channel
    // *((volatile unsigned int*)(ADC_BASE_ADDRESS + 0x08)) = Fs_to_timer_config(sampling_rate); // Set sampling timer
    // *((volatile unsigned int*)(ADC_BASE_ADDRESS + 0x00)) |= 1; // Enable ADC
}

void initialize_dac(void) {
    // Logic to configure DAC module:
    // - Set output voltage range
    // - Enable DAC module
    printf("Initializing DAC...\n");
    // Example:
    // *((volatile unsigned int*)(DAC_BASE_ADDRESS + 0x00)) |= 1; // Enable DAC
}

unsigned int read_adc(int channel) {
    // Logic to read a sample from the configured ADC channel
    // This might involve waiting for a conversion to complete and reading from a data register.
    // printf("Reading ADC channel %d...\n", channel);
    // Example:
    // while (!(*((volatile unsigned int*)(ADC_BASE_ADDRESS + 0x0C)) & (1 << 0))); // Wait for conversion complete flag
    // return (*((volatile unsigned int*)(ADC_BASE_ADDRESS + 0x10))); // Read ADC data
    return 512; // Placeholder for simulation/testing without hardware
}

void write_dac(unsigned int value) {
    // Logic to write a sample to the DAC output
    // printf("Writing DAC: %u\n", value);
    // Example:
    // *((volatile unsigned int*)(DAC_BASE_ADDRESS + 0x10)) = value; // Write to DAC data register
}
```

**Important Note:** The `printf` statements are for demonstration during development on a host environment that might support them (e.g., simulation). In a real embedded system, you would typically use a debugger or a serial port (UART) for output messages.

**4.2. Setting Up the Development Environment**

1.  **Install DSP IDE/Toolchain:** Install the Integrated Development Environment (IDE) and cross-compiler toolchain provided by the DSP hardware manufacturer (e.g., Texas Instruments Code Composer Studio, Analog Devices CrossCore Embedded Studio, NXP MCUXpresso).
2.  **DSP Board Drivers and Libraries:** Install any necessary drivers, board support packages (BSPs), and hardware abstraction layers (HAL) for your specific DSP board. These provide the low-level functions to interact with the hardware.
3.  **Linker Script:** A linker script is crucial for embedded development. It dictates how the compiled code (from your C files) and data are organized in the DSP's memory. This ensures that the code is placed in program memory and data in data memory, and that startup routines are correctly placed.

**4.3. Cross-Compilation Process**

1.  **Create a Project:** Create a new project in your DSP IDE, specifying the target DSP processor and the project type (e.g., executable).
2.  **Add Source Files:** Add your C source file(s) to the project.
3.  **Configure Project Settings:**
    *   **Target Processor:** Ensure the correct DSP processor is selected.
    *   **Compiler Flags:** Set appropriate optimization flags (e.g., `-O2`, `-O3`) for performance.
    *   **Include Paths:** Add paths to necessary header files (DSP HAL, driver libraries).
    *   **Linker Script:** Select the appropriate linker script for your DSP board.
    *   **Memory Configuration:** Ensure the linker script correctly defines memory regions.
4.  **Build Project:** Use the "Build" or "Compile" option in the IDE. This will invoke the cross-compiler to translate your C code into assembly language, then assemble it into object code, and finally link all object files and libraries into an executable image (e.g., `.out`, `.hex`, `.elf` file) suitable for the target DSP.

**4.4. Loading and Executing Code on the DSP**

1.  **Connect DSP Board to Host PC:** Use a debugging interface like JTAG or SWD (via a debugger probe) or a serial connection (UART).
2.  **Launch Debugger:** Open the debugger in your DSP IDE.
3.  **Connect to Target:** Establish a connection between the debugger and the DSP hardware.
4.  **Load Program:** Load the generated executable file onto the DSP's memory.
5.  **Run Program:** Start the execution of the program on the DSP.
6.  **Observe:** The DSP will now be running your C code, reading from the ADC and writing to the DAC.

### 5. Connecting a Microphone, Speaking, and Observing Output

**5.1. Connecting the Microphone**

*   Connect the microphone to the designated audio input port on your DSP development board. This might be a 3.5mm jack, a dedicated connector for electret microphones, or even bare pins if you're connecting a pre-amplified signal.
*   Ensure the microphone is properly powered if it requires external power.

**5.2. Speaking into the Microphone**

*   Speak clearly and at a reasonable volume into the microphone.

**5.3. Observing the Output Electrical Signal on a DSO**

1.  **Configure DSO:**
    *   **Channels:** Connect one channel of the DSO to the analog output port of your DSP board. You might use another channel to view the input signal if your board provides access to it.
    *   **Timebase:** Adjust the horizontal scale (time per division) to see the waveform clearly. Start with a setting like 1 ms/div or 5 ms/div.
    *   **Vertical Scale:** Adjust the vertical scale (volts per division) to fit the signal amplitude within the screen. You might need to experiment based on the microphone sensitivity and DSP output voltage range.
    *   **Trigger:** Set the trigger level and source (usually the input channel you're observing) to stabilize the waveform display. An edge trigger (rising or falling) is common.

2.  **Observe:** You should see an electrical representation of the sound waves you are producing.
    *   **Input Signal:** If you can monitor the ADC input signal on the DSO, you'll see the raw analog signal from the microphone.
    *   **Output Signal:** The DAC output signal should ideally be a close replica of the input signal, as our simple C code performs a direct pass-through. Any differences will be due to the characteristics of the ADC, DAC, and any inherent noise in the system.

**5.4. Storing the Output Signal**

*   **DSO Storage:** Most DSOs have a "save" or "store" function. You can typically save the currently displayed waveform to internal memory, a USB drive, or transfer it directly to a PC via USB or network connection.
*   **File Formats:** DSOs often save data in formats like `.csv`, `.txt`, or proprietary oscilloscope formats. These files contain the sampled voltage values and their corresponding time points.
*   **Analysis:** Once stored, you can load these files into software like MATLAB, Python (with libraries like NumPy and SciPy), or even spreadsheet programs to perform further analysis, such as:
    *   Calculating signal amplitude and frequency.
    *   Performing Fourier analysis (though for simple pass-through, this might not reveal much).
    *   Comparing input and output signals.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 6. Textbooks and Reference Books (Content Incorporation)

*   **Digital Signal Processing using Matlab by Vinay K. Ingle, John G. Proakis:** While this book focuses on MATLAB, it provides excellent theoretical foundations for sampling, quantization, ADCs, and DACs, which are essential to understand the behavior of the hardware components we are interfacing with. Concepts like aliasing and reconstruction are critical here.
*   **Think DSP: Digital Signal Processing using Python by Allen B. Downey:** This book offers a practical approach to DSP concepts, often using Python for examples. The emphasis on signals as sequences of numbers and the mathematical operations performed on them directly translates to how you'll think about data acquired from the ADC and sent to the DAC.
*   **DSP applications using C and the TMS320C6x DSK by Chassaing, Rulph:** **This is the most relevant textbook for this topic.** It specifically covers DSP hardware (TMS320C6x), how to program it using C, cross-compilation, and interfacing with peripherals like ADCs and DACs. The examples in this book will be invaluable for understanding the specific syntax and functions required for your DSP board.
*   **Discrete-Time Signal Processing by Alan V Oppenheim, Ronald W. Schafer:** This is a foundational text in DSP theory. Understanding concepts like the Nyquist rate, signal reconstruction, and the properties of digital filters (even though we're not implementing one here) provides the theoretical bedrock for why we sample and convert signals the way we do.

### 7. Course Outcomes Alignment

*   **CO1: Generate basic signal waveforms (Knowledge Level: K2):** While we are not explicitly generating waveforms in the code (we're capturing and passing through), understanding how to control the DAC is the first step towards generating arbitrary waveforms. The observed output on the DSO is a representation of the input signal's waveform.
*   **CO2: Verify the properties of DFT (Knowledge Level: K2):** This topic doesn't directly involve DFT. However, the ability to capture and store signals is a prerequisite for performing DFT analysis in later modules.
*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2):** **This is the primary CO addressed by this topic.** We are directly interacting with DSP hardware (ADC, DAC), learning about cross-compilation, loading code, and using a DSO to observe results, all of which are core aspects of hardware familiarization and computer interfacing.
*   **CO4: Implement LTI systems (Knowledge Level: K3):** This topic sets the stage. The pass-through code is the simplest LTI system (a system with a system function H(z) = 1). Learning to implement this basic "connection" is the foundation for implementing more complex LTI systems like filters.
*   **CO5: Design and Implement FIR low-pass filters (Knowledge Level: K3):** Similar to CO4, this topic provides the essential hardware interface skills needed to implement filters. Once you can read an ADC and write to a DAC, you can modify the C code to perform filtering operations before sending data to the DAC.

### 8. Practice Questions and Exercises

**Question 1:** What is the fundamental difference between cross-compilation and native compilation?

**Answer:** Native compilation occurs on the same architecture as the target for which the code is compiled. Cross-compilation involves compiling code on one architecture (host) for execution on a different architecture (target). DSP development almost always uses cross-compilation because DSP development tools are typically run on powerful PCs, while the DSP itself may have limited resources.

**Question 2:** Briefly explain the role of an ADC and a DAC in this experiment.

**Answer:** The ADC converts the analog electrical signal from the microphone into a digital format that the DSP can process. The DAC converts the processed digital signal back into an analog electrical signal that can be observed on the DSO.

**Question 3:** If you observe a perfectly flat line on the DSO when speaking into the microphone, what are three potential reasons for this issue?

**Answer:**
1.  **No Input Signal:** The microphone might not be connected correctly, or it might be faulty.
2.  **Incorrect ADC Configuration:** The ADC might not be initialized or configured to read from the correct input channel.
3.  **No Output Signal:** The DAC might not be initialized or configured to output a signal, or the code might not be correctly writing to the DAC register.
4.  **Incorrect DSO Settings:** The DSO's vertical scale might be too high, or its trigger might be set incorrectly, making the signal appear flat.

**Question 4:** Why is a linker script important in embedded C programming for DSPs?

**Answer:** A linker script is crucial because it defines how the program's code and data segments are allocated into the target DSP's memory. It specifies memory addresses for different sections (e.g., code, global variables, stack) and ensures that the program is loaded correctly into the DSP's memory map for execution.

**Question 5 (Conceptual):** Imagine you want to amplify the microphone signal by a factor of 2 before sending it to the DSO. How would you modify the C code (conceptually, without specific register details)?

**Answer:** You would modify the line `unsigned int processed_sample = adc_sample;` to `unsigned int processed_sample = adc_sample * 2;`. However, you would also need to ensure that the scaled value does not exceed the maximum representable value by the DAC, potentially requiring clipping or scaling down the input if it's too high.

### 9. Important Points to Remember

*   **Hardware Abstraction:** Always rely on the provided Hardware Abstraction Layer (HAL) or driver libraries for your specific DSP board. Directly manipulating registers is error-prone and platform-dependent.
*   **Data Types:** Be mindful of data types when reading from ADC and writing to DAC. ADCs often output unsigned integers, and DACs expect values within a specific range.
*   **Sampling Rate:** The sampling rate is critical. Ensure it's set correctly for the input signal bandwidth and to avoid aliasing.
*   **Debugging:** Embedded debugging is different from desktop debugging. Use the debugger's features (breakpoints, single-stepping, watch variables) to understand program flow and diagnose issues.
*   **Power Consumption:** Be aware of power requirements, especially for microphones, and ensure the DSP board's power supply is adequate.
*   **Refer to Datasheets:** Always consult the datasheets for your DSP processor and any associated audio codec or peripheral chips for detailed information on registers and operation.

This comprehensive set of notes should provide a solid foundation for understanding and executing the practical aspects of interfacing analog signals with DSP hardware in your lab. Remember to adapt the C code examples to the specific tools and libraries provided for your DSP development board.