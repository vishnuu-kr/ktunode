---
title: "Interfacing ADC and DAC"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 2: Stack and Subroutines"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3621d"
status: "completed"
scrapedAt: "2026-05-23T16:22:47.644Z"
---
## Microprocessors and Embedded Systems: Module 2 - Stack and Subroutines

### Topic: Interfacing ADC and DAC

---

### 1. Introduction to Analog-to-Digital Converters (ADC) and Digital-to-Analog Converters (DAC)

**1.1 What are ADC and DAC?**

*   **Analog Signal:** A continuous signal that varies over time, representing physical quantities like temperature, pressure, sound, or light intensity.
*   **Digital Signal:** A discrete signal represented by binary values (0s and 1s). Microprocessors and microcontrollers work with digital signals.
*   **ADC (Analog-to-Digital Converter):** A device that converts an analog input signal into a digital output signal. This is crucial for microprocessors to interpret real-world analog data.
*   **DAC (Digital-to-Analog Converter):** A device that converts a digital input signal into an analog output signal. This allows microprocessors to generate analog outputs, such as controlling motor speed or audio playback.

**1.2 Why Interfacing is Necessary?**

Microprocessors and microcontrollers, by nature, are digital devices. To interact with the analog world, they require specialized hardware interfaces that translate between analog and digital domains. This topic focuses on how to connect and control these interfaces.

**1.3 Course Outcome Alignment:**

*   **CO2:** Understand the need for interrupts, Subroutines, timing diagram of 8085 microprocessor and **interfacing**. (Knowledge Level: K2) - This section directly addresses the "interfacing" aspect.
*   **CO4:** Able to gain working level knowledge about a Arduino Uno based system architecture and Arduino IDE. (Knowledge Level: K2) - Arduinos often utilize built-in ADCs, and external DACs can be interfaced, making this relevant.
*   **CO5:** Write Programs using Embedded C and implement an application using Arduino UNO board. (Knowledge Level: K3) - Interfacing ADC/DAC is a common task when implementing applications on Arduino.

---

### 2. Interfacing Analog-to-Digital Converters (ADC)

**2.1 Working Principle of ADC**

ADCs sample an analog signal at discrete time intervals and then convert the sampled value into a digital code. The key processes involved are:

*   **Sampling:** Taking a snapshot of the analog signal at specific points in time.
*   **Quantization:** Approximating the sampled analog value to the nearest discrete digital level.
*   **Encoding:** Representing the quantized value as a binary number.

**2.2 Key ADC Parameters**

*   **Resolution:** The number of bits the ADC uses to represent the analog input. Higher resolution means finer steps between digital values, leading to more accurate conversion. For example, an 8-bit ADC can represent 2^8 = 256 levels.
*   **Conversion Time:** The time it takes for the ADC to complete one analog-to-digital conversion.
*   **Accuracy:** How closely the digital output matches the actual analog input. This is influenced by factors like linearity and offset error.
*   **Input Voltage Range:** The range of analog voltages the ADC can accept.

**2.3 Common ADC Architectures (Brief Overview - Reference Gaonkar, Ram)**

*   **Successive Approximation ADC:** A widely used type. It uses a comparator and a DAC to perform a "trial-and-error" process to determine the digital output. It's generally faster than integration ADCs.
*   **Flash ADC:** The fastest type, but also the most complex and expensive. It uses a bank of comparators to compare the input voltage against multiple reference voltages simultaneously.
*   **Sigma-Delta ADC:** Known for high resolution and noise immunity, often used in audio applications.

**2.4 Interfacing ADCs with Microprocessors (e.g., 8085)**

Many microprocessors, like the 8085, do not have built-in ADCs. Therefore, external ADC chips are required. Common ADC chips used for interfacing include:

*   **ADC0804:** An 8-bit ADC with a common digital interface.
*   **ICL7107:** A 3.5-digit ADC often used for digital panel meters.

**2.4.1 Interfacing with ADC0804 (Example)**

*   **ADC0804 Pin Description (Key Pins):**
    *   **Vcc, GND:** Power supply.
    *   **VIN(+), VIN(-):** Analog input pins.
    *   **CLK:** Clock input for timing.
    *   **CS (Chip Select):** Active low to enable the ADC.
    *   **RD (Read):** Active low to read the conversion result.
    *   **WR (Write):** Active low to start a conversion.
    *   **INTR (Interrupt):** Output pin that goes low when conversion is complete.
    *   **DB0 - DB7:** 8-bit digital output data bus.

*   **Interfacing Steps:**
    1.  **Clock Generation:** Provide a clock signal to the CLK pin. This can be done using an external clock source or by using an RC network.
    2.  **Chip Selection:** Connect the CS pin to the microprocessor's address bus through a decoder logic to select the ADC when its address is on the bus.
    3.  **Control Signals:** Connect WR and RD pins to appropriate control signals from the microprocessor (e.g., `IO/M`, `RD`, `WR` signals for I/O mapped devices).
    4.  **Data Bus:** Connect the DB0-DB7 pins to the microprocessor's data bus (e.g., D0-D7 of 8085).
    5.  **Interrupt Handling (Optional but Recommended):** Connect the INTR pin to an interrupt request line of the microprocessor. This allows the microprocessor to continue other tasks while the ADC converts, being notified only when the conversion is done.

*   **Interfacing Diagram (Conceptual):**
    (Imagine a diagram showing the 8085 data bus, address bus, and control signals connected to the ADC0804 pins as described above.)

*   **8085 Program Flow for ADC Conversion:**

    1.  **Select ADC:** Assert the chip select signal.
    2.  **Start Conversion:** Assert the WR signal for a specified duration (as per ADC datasheet).
    3.  **Wait for Conversion:**
        *   **Polling:** Continuously check the INTR pin (or a status bit if available) until conversion is complete.
        *   **Interrupt:** Enable interrupts and use an Interrupt Service Routine (ISR) to read data when INTR goes low.
    4.  **Read Data:** Assert the RD signal and read the 8-bit data from the data bus.
    5.  **De-select ADC:** De-assert chip select.

*   **Assembly Language Example (Conceptual - 8085):**

    ```assembly
    ; Assume ADC is I/O mapped at address 40H
    ADC_ADDR .equ 40H

    START_CONVERSION:
        MVI A, 00H      ; Load any value into accumulator
        OUT ADC_ADDR    ; Send a dummy byte to start conversion (specific to some ADCs or control logic)
                        ; Often, you'd send a command byte if the ADC has multiple functions.
                        ; For ADC0804, a single WR pulse is usually enough.

    WAIT_FOR_CONVERSION:
        ; Polling method: Check INTR (assuming INTR is connected to RST 7.5, but in reality, you'd check a specific I/O port bit)
        ; Let's assume INTR is mapped to an I/O port bit that can be read.
        ; A more realistic approach: Check the INTR pin directly via a dedicated input pin or monitor it.
        ; For simplicity in this conceptual example, we'll assume a loop if no interrupt.

        ; A proper implementation would use INTR or poll a status port.
        ; For ADC0804, WR is pulsed, and then one waits.
        ; Let's assume a busy wait loop for simplicity, though not ideal.
        MVI C, FFH      ; Load counter for delay
    DELAY_LOOP:
        DCR C
        JNZ DELAY_LOOP

    READ_DATA:
        IN ADC_ADDR     ; Read the converted data from the ADC
        MOV B, A        ; Store the data in register B

    ; Now, register B holds the 8-bit digital value. Process as needed.
    ; ... rest of the program ...
    ```

*   **Important Note on ADC0804:** The `WR` pulse starts the conversion. You need to ensure the pulse width is sufficient. After `WR`, you wait for conversion to complete. The `INTR` pin becoming low is the signal. If not using interrupts, you'd poll a status bit or the `INTR` pin.

**2.5 Interfacing ADCs with Arduino Uno (CO4, CO5)**

*   **Arduino Uno's Built-in ADC:** The ATmega328P microcontroller on the Arduino Uno has a built-in 6-channel, 10-bit ADC.
*   **Analog Pins:** Arduino Uno has analog input pins labeled A0 to A5.
*   **`analogRead()` Function:** The Arduino IDE provides a simple function `analogRead(pin)` to read the digital value from a specified analog pin.
    *   It returns an integer value between 0 and 1023 (for 10-bit resolution).
    *   0 corresponds to 0V, and 1023 corresponds to the reference voltage (typically 5V for Arduino Uno).

*   **Arduino C/C++ Example:**

    ```c++
    const int analogPin = A0; // Select the analog input pin

    void setup() {
      Serial.begin(9600); // Initialize serial communication for displaying results
    }

    void loop() {
      int adcValue = analogRead(analogPin); // Read the analog value

      // The value is between 0 and 1023.
      // To convert to voltage (assuming 5V reference):
      float voltage = adcValue * (5.0 / 1023.0);

      Serial.print("Analog Value: ");
      Serial.print(adcValue);
      Serial.print(", Voltage: ");
      Serial.print(voltage);
      Serial.println("V");

      delay(1000); // Wait for 1 second
    }
    ```

*   **Key Concepts from Textbooks:**
    *   **Gaonkar:** Discusses the fundamental principles of ADC conversion and interfacing techniques for microprocessors, often using example chips like the 8255 for control.
    *   **Ram:** Provides detailed explanations of various ADC architectures and their interfacing logic, including timing diagrams.
    *   **Margolis (Arduino Cookbook):** Focuses on practical Arduino implementations, abstracting much of the low-level hardware details with user-friendly functions like `analogRead()`.

---

### 3. Interfacing Digital-to-Analog Converters (DAC)

**3.1 Working Principle of DAC**

DACs take a digital code as input and produce a corresponding analog output voltage or current. The digital code determines the "level" of the analog output.

**3.2 Key DAC Parameters**

*   **Resolution:** The number of bits the DAC uses to represent the digital input. Higher resolution means finer steps between analog output levels. An N-bit DAC can produce 2^N distinct analog levels.
*   **Conversion Time/Settling Time:** The time it takes for the DAC to produce a stable analog output after receiving a new digital input.
*   **Accuracy:** How closely the analog output matches the ideal value for a given digital input.
*   **Output Voltage/Current Range:** The range of analog outputs the DAC can produce.

**3.3 Common DAC Architectures (Brief Overview)**

*   **R-2R Ladder DAC:** A common and relatively simple implementation that uses resistors with values R and 2R to create voltage division, generating the analog output.
*   **Weighted-Resistor DAC:** Uses resistors with values weighted according to powers of 2. Can be less practical for higher resolutions due to resistor value spread.

**3.4 Interfacing DACs with Microprocessors (e.g., 8085)**

Again, the 8085 typically requires an external DAC. Popular choices include:

*   **DAC0808:** An 8-bit DAC with a standard digital interface.
*   **MCP4725:** A popular I2C DAC, often used with microcontrollers.

**3.4.1 Interfacing with DAC0808 (Example)**

*   **DAC0808 Pin Description (Key Pins):**
    *   **Vcc, GND:** Power supply.
    *   **Vref(+), Vref(-):** Reference voltage inputs that set the full-scale output.
    *   **D0 - D7:** 8-bit digital input data bus.
    *   **IOUT1, IOUT2:** Current outputs (can be converted to voltage using an op-amp).
    *   **VOUT:** Voltage output (often requires a feedback resistor).

*   **Interfacing Steps:**
    1.  **Reference Voltage:** Connect appropriate reference voltages to Vref(+) and Vref(-). The full-scale output range is determined by `Vref(+) - Vref(-)`.
    2.  **Digital Input:** Connect the D0-D7 pins to the microprocessor's data bus.
    3.  **Control:** The DAC0808 is generally "transparent" – it directly converts the data present on its data bus. There are no specific `WR` or `RD` signals for basic operation. You simply need to place the desired digital value on the data bus when you want to update the analog output.
    4.  **Output Handling:** The DAC0808 provides current outputs (IOUT1, IOUT2). To get a voltage output, an op-amp circuit is typically used to convert this current into a voltage.

*   **Interfacing Diagram (Conceptual):**
    (Imagine a diagram showing the 8085 data bus connected to the DAC0808 D0-D7 pins. Vref connections are shown. An op-amp circuit connected to the current outputs to produce a voltage output.)

*   **8085 Program Flow for DAC Output:**

    1.  **Set Reference Voltage:** Ensure the reference voltage is correctly applied to the DAC.
    2.  **Place Digital Value:** Load the desired 8-bit digital value into the accumulator.
    3.  **Output to DAC:** Use the `OUT` instruction to send the data to an I/O port that is connected to the DAC's data pins.
    4.  **Conversion:** The DAC immediately converts the digital value to an analog output.

*   **Assembly Language Example (Conceptual - 8085):**

    ```assembly
    ; Assume DAC data inputs are connected to I/O port 50H
    DAC_PORT .equ 50H

    SET_DAC_OUTPUT:
        MVI A, 80H      ; Load the digital value (e.g., 128 for half scale if reference is Vref)
        OUT DAC_PORT    ; Send the data to the DAC port

    ; The analog output is now updated based on the value 80H.
    ; ... rest of the program ...
    ```

**3.5 Interfacing DACs with Arduino Uno (CO4, CO5)**

*   **Built-in DAC:** The Arduino Uno (ATmega328P) **does not have a built-in DAC**. To generate analog output voltages, you need to use external DAC modules.
*   **Methods for External DACs:**
    *   **SPI Communication:** Many DAC modules (like the MCP4921, AD5318) use the SPI protocol. This involves connecting the DAC to the Arduino's MOSI, SCK, and SS pins.
    *   **I2C Communication:** Modules like the MCP4725 use the I2C protocol, connecting to Arduino's SDA and SCL pins.
    *   **Direct Digital Output:** For simple DACs (like the R-2R ladder or resistor arrays), you can directly connect digital output pins from the Arduino to the DAC's input. This requires more pins and careful bit manipulation.

*   **Arduino C/C++ Example (using MCP4725 via I2C):**

    ```c++
    #include <Wire.h>
    #include <Adafruit_MCP4725.h>

    Adafruit_MCP4725 dac;

    void setup() {
      Serial.begin(9600);
      Serial.println("Adafruit MCP4725 I2C DAC test");

      // Initialize the MCP4725
      if (!dac.begin(0x62)) { // 0x62 is the default I2C address for MCP4725
        Serial.println("Could not find MCP4725 chip");
        while (1);
      }
      Serial.println("MCP4725 found!");
    }

    void loop() {
      // Set analog output to 0V (0 on a 12-bit DAC)
      dac.setVoltage(0, false); // false means no EEPROM write
      Serial.println("Set to 0V");
      delay(1000);

      // Set analog output to mid-scale (2048 on a 12-bit DAC)
      dac.setVoltage(2048, false);
      Serial.println("Set to mid-scale (approx 2.5V)");
      delay(1000);

      // Set analog output to full scale (4095 on a 12-bit DAC)
      dac.setVoltage(4095, false);
      Serial.println("Set to full scale (approx 5V)");
      delay(1000);
    }
    ```

*   **Key Concepts from Textbooks:**
    *   **Ram:** Details the architecture and interfacing of DAC chips like the DAC0808, emphasizing the role of reference voltage and the op-amp for voltage output.
    *   **Gaonkar:** Explains DAC principles and provides examples of interfacing, often with control logic.
    *   **Margolis (Arduino Cookbook):** Shows practical examples of using external DAC modules with Arduino via SPI and I2C, highlighting the use of libraries.

---

### 4. Subroutines and their role in Interfacing (CO2)

**4.1 What are Subroutines?**

*   A subroutine is a block of code designed to perform a specific task.
*   It can be called from multiple places within a program.
*   This promotes modularity, reusability, and makes programs easier to manage.

**4.2 How Subroutines Aid Interfacing:**

When interfacing with ADC or DAC chips, specific sequences of operations are required (e.g., starting a conversion, waiting for completion, reading data). These sequences can be encapsulated into subroutines.

*   **Example Subroutine: `READ_ADC`**
    *   This subroutine would contain the sequence of instructions to initiate an ADC conversion and return the digital value.
    *   When the main program needs an ADC reading, it simply calls `READ_ADC`.

*   **Example Subroutine: `SET_DAC_VALUE`**
    *   This subroutine would take a digital value as input (e.g., in the accumulator) and output it to the DAC port.

**4.3 Stack Usage in Subroutines**

*   When a subroutine is called, the microprocessor uses the **stack** to save the return address (the address of the instruction immediately after the call).
*   Upon subroutine completion, the stored return address is retrieved from the stack to resume execution of the main program.
*   This is managed by the `CALL` (or `LCALL`) and `RET` (or `LRET`) instructions.
*   **Stack Pointer (SP):** A special register that points to the top of the stack. It decrements when data is pushed onto the stack and increments when data is popped.

**4.4 Advantages of Using Subroutines for Interfacing:**

*   **Modularity:** Code for ADC read or DAC write is isolated.
*   **Reusability:** The same subroutine can be called multiple times for different readings or outputs.
*   **Readability:** The main program becomes cleaner and easier to understand by calling descriptive subroutines.
*   **Maintainability:** If the ADC/DAC interfacing logic needs to change, you only need to modify the subroutine.

**4.5 Assembly Language Example (8085 with Subroutines):**

```assembly
; --- Subroutine to read ADC0804 ---
; Assumes ADC is I/O mapped at 40H
; Returns 8-bit ADC data in accumulator

READ_ADC:
    PUSH PSW        ; Save accumulator and flags onto the stack
    PUSH B          ; Save B register onto the stack

    MVI A, 00H      ; (Conceptual) Start conversion signal
    OUT 40H         ; Output to ADC port to start conversion

WAIT_ADC:
    ; Implement polling or wait for INTR interrupt here
    ; For simplicity, using a delay loop
    MVI C, FFH
WAIT_LOOP:
    DCR C
    JNZ WAIT_LOOP

    IN 40H          ; Read data from ADC port

    POP B           ; Restore B register
    POP PSW         ; Restore accumulator and flags
    RET             ; Return to caller

; --- Subroutine to output to DAC0808 ---
; Assumes DAC is I/O mapped at 50H
; Takes 8-bit data to be output in accumulator

SET_DAC_VALUE:
    MOV B, A        ; Save A temporarily in B
    OUT 50H         ; Output the data to the DAC port
    MOV A, B        ; Restore A (optional, depending on need)
    RET             ; Return to caller

; --- Main Program ---
MAIN_PROGRAM:
    CALL READ_ADC   ; Call subroutine to read ADC, result in A
    MOV B, A        ; Store ADC result in B

    ; Now, let's send a DAC value, perhaps related to the ADC value
    ; Example: Scale the ADC value for the DAC (e.g., send half the ADC value to DAC)
    MOV A, B        ; Get ADC value back into A
    RRC             ; Rotate right to divide by 2 (simple scaling)
    CALL SET_DAC_VALUE ; Call subroutine to set DAC output

    ; ... continue with other program logic ...

    HLT             ; Halt processor
```

*   **Key Concepts from Textbooks:**
    *   **Ram & Gaonkar:** Both extensively cover subroutines, the stack mechanism, `CALL`, `RET` instructions, and the role of the Stack Pointer (SP) in the 8085 architecture. They provide numerous examples of using subroutines for various tasks, including I/O operations.

---

### 5. Practice Questions and Exercises

**Question 1:**
Explain the fundamental difference between an ADC and a DAC. Why are they essential for embedded systems that interact with the physical world? (CO2)

**Answer:**
An ADC converts analog signals (continuous, like voltage from a sensor) into digital signals (discrete values, like binary numbers) that a microprocessor can understand. A DAC does the opposite: it converts digital signals back into analog signals, allowing microprocessors to control analog systems (like motors or speakers). They are essential because most real-world phenomena are analog, while microprocessors are digital. ADCs allow the system to "read" the analog world, and DACs allow it to "act" upon the analog world.

**Question 2:**
Describe the key pins and the general interfacing procedure for an ADC0804 with an 8085 microprocessor. What is the role of the `WR` and `INTR` pins? (CO2)

**Answer:**
Key pins include VIN(+), VIN(-), CLK, CS, WR, RD, INTR, and DB0-DB7.
Interfacing involves:
1.  Connecting analog inputs.
2.  Providing a clock signal.
3.  Using chip select (CS) for addressing.
4.  Connecting data bus (DB0-DB7) to the microprocessor's data bus.
5.  Connecting control signals (WR, RD) to microprocessor control lines.
6.  Connecting INTR to an interrupt line (optional but recommended).

The `WR` pin is pulsed to initiate a conversion. The `INTR` (Interrupt) pin signals when the conversion is complete.

**Question 3:**
How would you read an analog sensor connected to pin A0 on an Arduino Uno? Write a simple Arduino sketch for this. (CO4, CO5)

**Answer:**
You would use the `analogRead(A0)` function. The function returns a 10-bit value (0-1023).

```c++
const int sensorPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(sensorPin);
  Serial.print("Sensor Value: ");
  Serial.println(sensorValue);
  delay(500);
}
```

**Question 4:**
Explain the purpose of a subroutine in the context of microprocessor programming. How does the stack facilitate subroutine execution? (CO2)

**Answer:**
A subroutine is a reusable block of code that performs a specific task. The stack is used to store the return address when a subroutine is called. This allows the microprocessor to know where to resume execution after the subroutine has finished. The Stack Pointer (SP) manages this process by pointing to the current top of the stack.

**Question 5:**
If you need to generate a variable analog voltage output using an 8085, what external component would you likely interface, and how would you control its output? (CO2)

**Answer:**
You would interface a Digital-to-Analog Converter (DAC), such as a DAC0808. You would control its output by placing the desired digital code onto its data input pins, typically by sending the code to an I/O port connected to the DAC.

---

### 6. Important Points to Remember

*   **Analog vs. Digital:** Understand the fundamental difference and the need for conversion.
*   **ADC Resolution:** Higher resolution means more accurate analog representation.
*   **DAC Resolution:** Higher resolution means finer control over analog output.
*   **ADC Interfacing:** Requires control signals (WR, RD, CS) and a clock. INTR pin is crucial for efficient operation. Polling vs. Interrupts for completion detection.
*   **DAC Interfacing:** Primarily involves providing the digital input data. Reference voltage is critical for setting the output range. Current-to-voltage conversion often needed.
*   **Arduino Simplification:** `analogRead()` abstracts ADC complexities. External DACs are usually controlled via SPI or I2C.
*   **Subroutines & Stack:** Essential for modularity in interfacing code. Stack manages return addresses. `CALL`, `RET`, `PUSH`, `POP`, and SP are key elements.
*   **Datasheets are Crucial:** Always refer to the datasheet of the specific ADC/DAC chip for detailed pin configurations, timing requirements, and operating procedures.

---

This detailed note covers the core concepts of interfacing ADCs and DACs with microprocessors and microcontrollers, aligning with the provided course outcomes and referencing the suggested textbooks. The examples illustrate practical application, and the practice questions help reinforce understanding.
