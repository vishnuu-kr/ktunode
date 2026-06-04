---
title: "C program for ADC interfacing."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 8: C program for ADC interfacing."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364fb"
status: "completed"
scrapedAt: "2026-05-23T16:23:11.970Z"
---
# Module 8: C Program for ADC Interfacing

## 1. Introduction to Analog-to-Digital Conversion (ADC)

### 1.1 What is ADC?

*   **Definition:** An Analog-to-Digital Converter (ADC) is an electronic device that converts a continuous analog signal (like voltage or current) into a discrete digital signal.
*   **Necessity:** Microcontrollers, like the 8051, work with digital data. However, many real-world sensors produce analog outputs. ADCs are essential for bridging this gap, allowing microcontrollers to interpret and process information from the physical world.
*   **Example:** Temperature sensors, light sensors, potentiometers, microphones all output analog signals that need to be converted into a digital format for the microcontroller.

### 1.2 How ADCs Work (General Principles)

While specific ADC architectures vary, common principles include:

*   **Sampling:** The analog signal is measured at discrete points in time.
*   **Quantization:** The sampled analog value is rounded to the nearest discrete digital value within a defined range.
*   **Encoding:** The quantized value is represented by a binary code.

**Key Parameters of an ADC:**

*   **Resolution:** The number of bits used to represent the digital output. Higher resolution means finer quantization and a more accurate representation of the analog signal. For an N-bit ADC, there are $2^N$ possible output levels.
*   **Conversion Time:** The time taken by the ADC to convert an analog input to a digital output.
*   **Accuracy:** The degree to which the digital output corresponds to the true analog input.

## 2. Interfacing ADCs with the 8051 Microcontroller

### 2.1 Common ADC ICs Used with 8051

Several popular ADC ICs are commonly interfaced with the 8051, each with its own characteristics:

*   **ADC0804:** An 8-bit successive approximation ADC.
    *   **Features:** Simple to interface, low power consumption, wide operating voltage range.
    *   **Reference Book Mention:** *The 8051 Microcontroller* by Kenneth Ayala might discuss interfacing common peripherals like ADCs. While not explicitly detailing ADC0804 in the chapter titles, the principles of interfacing external devices to the 8051's ports will be covered, which is fundamental.
*   **ADC0808/ADC0809:** 8-bit ADCs with multiplexers.
    *   **Features:** Built-in multiplexer allows selection of multiple analog input channels.
    *   **Textbook Mention:** *Microprocessors and Microcontrollers* by R. Lyla B. Das likely covers interfacing various peripherals, including ADCs, and may discuss the architectural advantages of multiplexed ADCs.
*   **PCF8591:** An 8-bit ADC/DAC chip that communicates via the I2C serial interface.
    *   **Features:** Requires fewer I/O pins due to serial communication, also includes a DAC for analog output.
    *   **Reference Book Mention:** *The 8051 microcontroller and embedded systems* by Muhammad Ali Mazidi would be a strong resource for I2C interfacing, as it delves into serial communication protocols.

### 2.2 Interfacing Principles (General)

Interfacing an external ADC with the 8051 typically involves:

*   **Data Lines:** Connecting the digital output of the ADC to the data bus of the 8051 (usually using PORT0 or PORT2, with appropriate control signals).
*   **Control Lines:**
    *   **Chip Select (CS) / Enable (CE):** To activate the ADC.
    *   **Start Conversion (START) / Convert (CONV):** To initiate the conversion process.
    *   **Output Enable (OE):** To enable the output of the digital data.
    *   **End of Conversion (EOC) / Interrupt (INT):** A signal from the ADC indicating that the conversion is complete. This can be used for polling or interrupt-driven operation.

## 3. C Programming for ADC Interfacing

This section focuses on developing C programs to read data from an ADC. We'll use the ADC0804 as a primary example due to its simplicity.

### 3.1 ADC0804 Interfacing and C Program Structure

**Hardware Setup (Typical for ADC0804):**

*   **Vcc & GND:** Connect to power supply.
*   **Analog Input (VIN):** Connect to the analog signal source (e.g., potentiometer).
*   **Digital Outputs (D0-D7):** Connect to 8051 data pins, e.g., PORT0 (P0.0 - P0.7).
*   **START Conversion (START):** Connect to an 8051 output pin, e.g., P2.0.
*   **End of Conversion (EOC):** Connect to an 8051 input pin, e.g., P2.1.
*   **Chip Select (CS):** Connect to GND (for continuous selection) or an 8051 output pin.
*   **Clock Input (CLK):** Connect to a clock source (often derived from the 8051's clock or a separate oscillator). For ADC0804, the clock frequency needs to be 10 times the desired conversion rate. A common practice is to use the 8051's crystal frequency divided by 2 or some other suitable division.

**C Program Logic:**

1.  **Initialization:** Configure 8051 ports (e.g., set PORT0 as input for reading ADC data, and PORT2 pins for control signals).
2.  **Start Conversion:** Send a pulse to the ADC's START pin.
3.  **Wait for Conversion Completion:** Monitor the EOC pin. The program can either:
    *   **Poll:** Continuously check the EOC pin until it signals conversion completion.
    *   **Interrupt:** Configure the 8051 to generate an interrupt when the EOC signal changes state.
4.  **Read Digital Data:** Once conversion is complete, read the digital data from the ADC's output pins (e.g., PORT0).
5.  **Process Data:** Use the read digital value for display, control, or further calculations.

### 3.2 Example C Program for ADC0804 (Polling Method)

```c
#include <reg51.h> // Include header file for 8051 registers

// Define port pins for ADC0804 control and data
sbit START_PIN = P2^0;  // Start Conversion pin
sbit EOC_PIN   = P2^1;  // End of Conversion pin
// Assume ADC data pins are connected to P0 (P0.0 to P0.7)

// Function to initialize ADC and start conversion
unsigned char read_adc(void) {
    unsigned char adc_value;

    // 1. Ensure ADC is ready (EOC is low) - Optional but good practice
    //    While EOC_PIN == 0; // Wait until EOC goes low if it's high initially

    // 2. Start the conversion by pulsing START_PIN
    START_PIN = 1;
    // A short delay is usually needed for the START pulse.
    // This delay depends on the ADC's requirements and clock.
    // For ADC0804, a pulse width of at least 1 CLK_2 (Clock/2) is needed.
    // We'll use a simple delay loop, assuming a reasonable clock frequency.
    // For more precise timing, use timer-based delays.
    for (int i = 0; i < 10; i++); // Small delay for pulse width
    START_PIN = 0;

    // 3. Wait for the conversion to complete (EOC goes HIGH)
    while (EOC_PIN == 0) {
        // Wait here until EOC becomes 1
    }

    // 4. Read the digital data from PORT0
    adc_value = P0;

    // 5. Reset EOC for the next conversion (Optional, depends on ADC behavior)
    // For some ADCs, EOC needs to be reset by deselecting/pulsing START again.
    // For ADC0804, after reading, EOC will go low after a certain time.
    // The next START pulse will initiate a new conversion.

    return adc_value;
}

void main(void) {
    unsigned char digital_data;

    // Configure P2.0 and P2.1 as outputs for control signals
    // P2.0 (START_PIN) is output.
    // P2.1 (EOC_PIN) is input.
    // PORT0 is configured as input for reading ADC data.

    // In 8051 C, ports are generally output by default.
    // To make a port an input, write '1' to it.
    P2 = 0x00; // Initialize P2 to ensure P2.0 is available as output and P2.1 as input

    while (1) {
        digital_data = read_adc();

        // Now 'digital_data' holds the 8-bit ADC reading.
        // You can display it on an LCD, send it via serial port,
        // or use it for control logic.

        // Example: For demonstration, let's assume we have a way
        // to display the data (e.g., send to UART or LCD).
        // For simplicity, we won't implement display here.
        // You would typically add LCD/UART display code here.

        // Add a delay before the next reading to avoid overwhelming
        // the ADC or to control the sampling rate.
        for (int j = 0; j < 50000; j++); // Simple delay loop
    }
}
```

**Explanation of the Program:**

*   `#include <reg51.h>`: Includes the standard header file for the 8051, providing definitions for SFRs (Special Function Registers) like `P0`, `P2`, `sbit`.
*   `sbit START_PIN = P2^0;`: Defines `START_PIN` as a symbolic name for the bit `P2.0`. This makes the code more readable.
*   `sbit EOC_PIN = P2^1;`: Defines `EOC_PIN` as `P2.1`.
*   `read_adc(void)` function:
    *   `START_PIN = 1;`: Sets the START pin HIGH to initiate conversion.
    *   `for (int i = 0; i < 10; i++);`: A small loop to create a pulse for the START signal. *Crucially, for real applications, this needs to be a precisely timed pulse based on the ADC datasheet and the microcontroller's clock.*
    *   `START_PIN = 0;`: Sets the START pin LOW.
    *   `while (EOC_PIN == 0)`: This is the polling loop. The program stays in this loop until `EOC_PIN` becomes HIGH, indicating the conversion is complete.
    *   `adc_value = P0;`: Reads the 8 bits of data from PORT0, which are connected to the ADC's data output pins.
    *   `return adc_value;`: Returns the obtained 8-bit digital value.
*   `main(void)` function:
    *   `P2 = 0x00;`: This line is important. In 8051, writing a '1' to a port bit configured as input makes it an input pin. By writing `0x00`, we are essentially preparing `P2` for output control. However, for `EOC_PIN` (P2.1) to be an input, it should ideally be set to '1' or left in its default state if the hardware allows. For simplicity, and assuming the hardware setup allows `P2.1` to be read as input even if `P2` is generally an output port, this is often done. *A more robust approach for input pins is to explicitly set them to '1'. For example, `P2 = 0x02;` would make P2.1 an input if P2.0 is an output.*
    *   `digital_data = read_adc();`: Calls the `read_adc` function to get the digital reading.
    *   `for (int j = 0; j < 50000; j++);`: A delay loop to control the sampling rate.

### 3.3 Interrupt-Driven ADC Reading

Using interrupts is generally more efficient than polling, as the microcontroller is free to perform other tasks while the ADC conversion is in progress.

**Hardware Setup for Interrupt:**

*   The EOC pin of the ADC is connected to an interrupt-capable pin of the 8051 (e.g., INT0 or INT1).
*   The 8051's interrupt system needs to be configured.

**C Program Logic (Interrupt-Driven):**

1.  **Initialization:**
    *   Configure 8051 ports as before.
    *   Configure the appropriate interrupt source (e.g., INT0).
    *   Enable global interrupts (`EA = 1`).
    *   Enable the specific interrupt source (e.g., `EX0 = 1` for INT0).
2.  **Start Conversion:** Send the START pulse.
3.  **Interrupt Service Routine (ISR):** When the ADC signals EOC, the ISR will be executed.
    *   Inside the ISR:
        *   Read the digital data from PORT0.
        *   Store the data in a global variable.
        *   (Optional) Reset the ADC or prepare for the next conversion.
        *   Clear the interrupt flag (usually handled automatically by the hardware or by re-enabling the interrupt).
4.  **Main Loop:** In the main loop, after initiating a conversion, the microcontroller can perform other tasks. It can then read the stored data from the global variable whenever needed.

**Example C Program (Interrupt-Driven - Conceptual):**

```c
#include <reg51.h>

// Define port pins
sbit START_PIN = P2^0;  // Start Conversion pin
sbit EOC_PIN   = P2^1;  // End of Conversion pin (connected to INT0)

// Global variable to store ADC data
unsigned char adc_result = 0;
volatile bit adc_conversion_done = 0; // Flag to signal completion

// Interrupt Service Routine for INT0
void ext_int0_isr (void) interrupt 0 {
    // ADC conversion is complete (EOC is HIGH and triggered INT0)

    // Read the digital data from PORT0
    adc_result = P0;

    // Signal that conversion is done
    adc_conversion_done = 1;

    // Clear the START pin to prepare for the next conversion
    START_PIN = 0;

    // The EOC signal will go low after a certain time,
    // or the next START pulse will handle the state.
    // For ADC0804, after reading, EOC will eventually go low.
    // We don't explicitly need to clear EOC here as it's an input.
}

void main(void) {
    // Configuration:
    // P2.0 (START_PIN) as output.
    // P2.1 (EOC_PIN) connected to INT0, configured as input implicitly by interrupt vector.
    // PORT0 as input for ADC data.

    P2 = 0x00; // Initialize P2 for control signals. P2.1 will be handled by INT0.

    // Configure External Interrupt 0 (INT0)
    IT0 = 1;     // Configure INT0 for falling edge trigger (or rising edge, check ADC behavior for EOC)
                 // For ADC0804, EOC goes HIGH when conversion is done. So rising edge trigger (IT0=0) is more appropriate.
                 // Let's assume rising edge trigger (IT0 = 0) for EOC signal.
    IT0 = 0;     // Set for rising edge trigger

    EX0 = 1;     // Enable INT0 interrupt
    EA  = 1;     // Enable Global interrupts

    // Start the first conversion
    START_PIN = 1;
    for (int i = 0; i < 10; i++); // Delay for START pulse
    START_PIN = 0;

    while (1) {
        // Main loop can do other tasks while ADC is converting
        // For example, blink an LED, send data over UART, etc.

        if (adc_conversion_done == 1) {
            // ADC conversion is complete, data is in 'adc_result'
            // Process the 'adc_result' here

            // Example: Display adc_result on an LCD or send to UART

            // Prepare for the next conversion
            adc_conversion_done = 0; // Reset the flag
            START_PIN = 1;
            for (int i = 0; i < 10; i++); // Delay for START pulse
            START_PIN = 0;
        }
    }
}
```

**Important Considerations for Interrupt-Driven:**

*   **`volatile` keyword:** The `adc_result` and `adc_conversion_done` variables should be declared `volatile`. This tells the compiler that these variables can be changed by an interrupt service routine, preventing the compiler from optimizing away reads or writes to them.
*   **Interrupt Triggering:** Correctly setting the interrupt trigger edge (`IT0` or `IT1`) is crucial. For an EOC signal that goes high upon completion, a rising edge trigger is appropriate.
*   **ISR Efficiency:** Keep ISRs short and fast. Avoid long delays or complex operations within an ISR.

## 4. Other ADC ICs and Interfacing Methods

### 4.1 ADC0808/ADC0809 (Multiplexed ADCs)

*   **Key Feature:** Integrated analog multiplexer allows selection of multiple input channels using address lines.
*   **Interfacing:**
    *   **Address Lines (A, B, C):** Connected to 8051 I/O pins to select the analog input channel.
    *   **Start Conversion (SC):** Connected to an 8051 output pin.
    *   **Output Enable (OE):** Connected to an 8051 output pin.
    *   **End of Conversion (EOC):** Connected to an 8051 input pin (for polling or interrupt).
    *   **Data Lines (D0-D7):** Connected to 8051 data bus (PORT0 or PORT2).

**C Program Logic for ADC0808:**

1.  **Select Channel:** Output the desired channel address to the ADC's address pins.
2.  **Start Conversion:** Pulse the SC pin.
3.  **Wait for EOC:** Poll the EOC pin or use an interrupt.
4.  **Enable Output:** Pulse the OE pin.
5.  **Read Data:** Read data from the data bus.

**Textbook Mention:** *Microprocessors and Microcontrollers* by R. Lyla B. Das may dedicate sections to multiplexing techniques and how they apply to peripherals like ADCs, explaining the logic for channel selection.

### 4.2 PCF8591 (I2C Interface ADC)

*   **Key Feature:** Uses the I2C serial communication protocol, significantly reducing the number of I/O pins required.
*   **Interfacing:**
    *   **SDA (Serial Data):** Connected to an 8051 I/O pin configured for I2C communication.
    *   **SCL (Serial Clock):** Connected to another 8051 I/O pin for the I2C clock.
*   **I2C Protocol:** Requires specific start, stop, acknowledge (ACK), and data transmission sequences.

**C Program Logic for PCF8591:**

1.  **I2C Initialization:** Configure the 8051's serial port (if used for I2C) or bit-bang the I2C protocol.
2.  **Start Transmission:** Send an I2C START condition.
3.  **Send Device Address:** Transmit the PCF8591's 7-bit address followed by a read/write bit.
4.  **Send Control Byte:** For PCF8591, a control byte specifies the channel and mode (e.g., read ADC, DAC output).
5.  **Read Data:** Receive the ADC data from the PCF8591.
6.  **Stop Transmission:** Send an I2C STOP condition.

**Reference Book Mention:** *The 8051 microcontroller and embedded systems* by Muhammad Ali Mazidi is a strong candidate for detailed explanations on implementing I2C communication in C for the 8051, including bit-banging techniques if hardware I2C is not available.

## 5. Practical Considerations and Best Practices

*   **Clock Frequency:** The clock provided to the ADC significantly impacts its conversion speed. Ensure it meets the ADC's specifications. For ADC0804, the clock input (CLK) must be at least 10 times the desired conversion rate. A common approach is to use the 8051's system clock divided by a factor.
*   **Voltage References:** ADCs require a reference voltage ($V_{REF}$) to define the full-scale analog input range. Ensure $V_{REF}$ is stable and accurately set. For ADC0804, this is connected to the VREF(+) pin.
*   **Noise Reduction:** Analog signals can be susceptible to noise. Proper decoupling capacitors, shielding, and grounding techniques are essential for accurate readings.
*   **Debouncing (for buttons/switches as analog input):** If a potentiometer or switch is used as an analog input, consider debouncing if rapid changes are undesirable or if the input is being used for triggering events.
*   **Data Interpretation:** Remember that the ADC provides a digital value. To convert this back to an analog voltage, use the formula:
    $V_{analog} = (ADC\_Value / (2^N)) * V_{REF}$
    Where $N$ is the resolution of the ADC (e.g., 8 bits for ADC0804).

## 6. Learning Outcomes Alignment

This module directly addresses several course outcomes:

*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3):** The C programs for ADC interfacing demonstrate the practical application of 8051 instructions and SFRs to control hardware peripherals.
*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4):** Understanding the pinouts and control signals of ADCs like ADC0804, ADC0808, and PCF8591, and how they connect to the 8051, is key to this outcome.
*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6):** Building a system that reads analog sensors requires knowledge of ADCs and how to integrate them with the 8051 for data acquisition, a core aspect of system design.

## 7. Practice Questions and Answers

**Question 1:** What is the primary function of an ADC in an embedded system?
**Answer:** The primary function of an ADC is to convert continuous analog signals from the real world (e.g., from sensors) into discrete digital values that microcontrollers can process.

**Question 2:** If an 8-bit ADC has a reference voltage of 5V, what is the analog voltage corresponding to a digital output of 100h (hexadecimal)?
**Answer:**
*   Digital output in binary: 100h = 0100 0000b
*   Decimal value: 0 * 128 + 1 * 64 + 0 * 32 + ... = 64
*   ADC Resolution: 8 bits, so $2^8 = 256$ levels (0 to 255).
*   Analog Voltage: $(64 / 256) * 5V = (1/4) * 5V = 1.25V$.

**Question 3:** Describe the difference between polling and interrupt-driven methods for monitoring the End of Conversion (EOC) signal of an ADC.
**Answer:**
*   **Polling:** The microcontroller continuously checks the EOC signal in a loop. The processor's time is occupied by this checking.
*   **Interrupt-driven:** The microcontroller initiates the conversion and then continues with other tasks. When the ADC completes the conversion and signals EOC, it triggers an interrupt. The microcontroller's Interrupt Service Routine (ISR) then reads the data. This method is more efficient as the processor is not solely dedicated to waiting.

**Question 4:** For the ADC0804, if the START pin is connected to P2.0 and the EOC pin to P2.1, and we want to read the ADC data using PORT0, write the C code snippet to start a conversion and wait for it to complete.
**Answer:**
```c
sbit START_PIN = P2^0;
sbit EOC_PIN   = P2^1;

START_PIN = 1; // Start conversion
// Add delay for START pulse width (e.g., for (int i=0; i<10; i++));
START_PIN = 0;

while (EOC_PIN == 0) { // Wait for EOC to go high
    // Do nothing, just wait
}
// Conversion complete, now read P0
// unsigned char adc_data = P0;
```

**Question 5:** What is the advantage of using an ADC with a built-in multiplexer, such as the ADC0808?
**Answer:** An ADC with a built-in multiplexer allows the microcontroller to select and convert analog signals from multiple input channels using a single ADC chip. This is achieved by sending address lines to the ADC to select the desired channel, saving the need for multiple ADC chips or external multiplexers.

## 8. Important Points to Remember

*   **Datasheets are Crucial:** Always refer to the datasheet of the specific ADC you are using for detailed information on pin configurations, timing diagrams, voltage requirements, and programming sequences.
*   **Timing is Everything:** Precise timing for control signals (START pulse, OE) is critical for reliable ADC operation. Use timer-based delays for accurate timing in production code.
*   **Port Configuration:** Understand how to configure 8051 ports as inputs or outputs in C. For inputs, writing a '1' to the port pin is typically required.
*   **Interrupts for Efficiency:** For tasks that require the microcontroller to do more than just read an ADC, interrupt-driven reading is preferred.
*   **`volatile` Keyword:** Always use `volatile` for variables shared between the main code and ISRs.

This comprehensive study guide covers the fundamentals of ADC interfacing with the 8051 microcontroller using C programming, aligning with the provided learning and course outcomes. Remember to consult specific datasheets for practical implementation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
