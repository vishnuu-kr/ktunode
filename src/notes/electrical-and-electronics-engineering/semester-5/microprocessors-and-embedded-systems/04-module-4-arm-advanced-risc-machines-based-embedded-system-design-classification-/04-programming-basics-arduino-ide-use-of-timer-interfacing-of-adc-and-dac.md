---
title: "Programming Basics- Arduino IDE-Use of Timer, Interfacing of ADC and DAC"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 4: ARM (Advanced RISC Machines) based Embedded System Design : Classification of Microprocessors based on the word length, architecture and  Instruction Set"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3622a"
status: "completed"
scrapedAt: "2026-05-23T16:22:55.883Z"
---
# Microprocessors and Embedded Systems - Module 4: ARM Based Embedded System Design

## Topic: Programming Basics - Arduino IDE, Timer Usage, Interfacing of ADC and DAC

This module delves into the practical aspects of embedded system design using the popular Arduino platform, specifically focusing on programming fundamentals, efficient timing mechanisms, and the conversion of analog signals to digital and vice-versa. While the broader context of Module 4 discusses ARM architecture, this specific topic leverages the Arduino IDE, which provides a user-friendly environment for interacting with microcontrollers, often based on AVR architecture (like the ATmega328P on Arduino Uno), but the principles are transferable and relevant to understanding embedded programming paradigms.

---

### 1. Programming Basics - Arduino IDE

The Arduino IDE (Integrated Development Environment) is a cross-platform application that simplifies the process of writing and uploading code to Arduino boards. It's designed to be beginner-friendly while offering enough power for more advanced projects.

#### 1.1. What is Arduino?

*   **Definition:** Arduino is an open-source electronics platform based on easy-to-use hardware and software. It consists of a microcontroller board (the Arduino board itself) and a piece of software, the Arduino IDE, which runs on your computer, used to write and upload computer code to the physical board.
*   **Key Components:**
    *   **Arduino Board:** Contains a microcontroller (e.g., ATmega328P), power supply, USB interface, and input/output (I/O) pins.
    *   **Arduino IDE:** A software application for writing, compiling, and uploading code (called "sketches") to the Arduino board.

#### 1.2. The Arduino IDE Interface

*   **Editor Window:** Where you write your code (sketches).
*   **Console Window:** Displays output from your sketch during execution and compiler messages.
*   **Buttons:**
    *   **Verify:** Compiles the code to check for syntax errors.
    *   **Upload:** Compiles and uploads the code to the Arduino board.
    *   **New, Open, Save:** Standard file management operations.
    *   **Serial Monitor:** Opens a window to communicate with the Arduino board via the serial port (for debugging or data display).

#### 1.3. Structure of an Arduino Sketch

An Arduino sketch is a C++ program with two main functions:

*   **`setup()` function:**
    *   Runs once when the Arduino board powers up or resets.
    *   Used for initialization tasks like setting pin modes, starting serial communication, and initializing libraries.
    *   **Example:** `pinMode(13, OUTPUT);` configures digital pin 13 as an output.

*   **`loop()` function:**
    *   Runs repeatedly after `setup()` has finished.
    *   This is where the main logic of your program resides.
    *   **Example:** Reading sensor values, controlling actuators, sending data.

#### 1.4. Basic Arduino Programming Concepts

*   **Variables:** Used to store data (e.g., `int ledPin = 13;`, `float temperature;`).
*   **Data Types:** `int`, `float`, `char`, `boolean`, `String`.
*   **Control Structures:**
    *   **`if-else` statements:** For conditional execution.
    *   **`for` loops:** For repeating a block of code a specific number of times.
    *   **`while` loops:** For repeating a block of code as long as a condition is true.
*   **Functions:** Reusable blocks of code (e.g., `digitalWrite()`, `analogRead()`, `delay()`).
*   **Comments:** Used to explain code (`// single line comment`, `/* multi-line comment */`).

#### 1.5. **Important Libraries**

Arduino provides a rich set of built-in libraries that simplify common tasks. Some key ones include:

*   `Arduino.h`: The core library for Arduino functionality.
*   `Wire.h`: For I2C communication.
*   `SPI.h`: For SPI communication.
*   `Serial.h`: For serial communication.

---

### 2. Use of Timer

Microcontrollers have built-in timers that are essential for precise timing, generating delays, measuring time intervals, and controlling periodic events.

#### 2.1. What are Timers in Microcontrollers?

*   **Definition:** Timers are hardware modules within a microcontroller that count up or down at a specific rate, controlled by a clock source. They can be used to generate time-based events or measure durations without heavily relying on software delays, which can block program execution.
*   **Key Components of a Timer:**
    *   **Counter Register:** Stores the current count value.
    *   **Prescaler:** Divides the system clock frequency to slow down the timer's counting rate, allowing for longer time intervals.
    *   **Compare Register:** Stores a target value. When the counter reaches this value, an event can be triggered (e.g., an interrupt, toggling an output pin).
    *   **Overflow Flag:** Indicates when the counter has reached its maximum value and wrapped around.

#### 2.2. Arduino Timer Functions (Abstracted View)

While the Arduino IDE abstracts the low-level timer registers, it provides functions that leverage these timers:

*   **`delay(milliseconds)`:**
    *   **Functionality:** Pauses the program execution for a specified number of milliseconds.
    *   **Underlying Mechanism:** Internally uses a timer to manage the delay.
    *   **Limitation:** This is a "blocking" function, meaning the Arduino cannot perform any other tasks while `delay()` is active. This is where more advanced timer usage becomes crucial.
    *   **Example:**
        ```cpp
        void setup() {
          pinMode(13, OUTPUT);
        }
        void loop() {
          digitalWrite(13, HIGH); // Turn LED on
          delay(1000);             // Wait for 1 second
          digitalWrite(13, LOW);  // Turn LED off
          delay(1000);             // Wait for 1 second
        }
        ```

*   **`millis()`:**
    *   **Functionality:** Returns the number of milliseconds since the Arduino board began running the current program.
    *   **Underlying Mechanism:** Reads the value of a timer that has been running since the board started.
    *   **Non-Blocking Timing:** This is a crucial function for creating non-blocking timing. By comparing the current `millis()` value with a previously recorded time, you can determine if a certain interval has passed without halting the program.
    *   **Example (Blink without delay):**
        ```cpp
        const int ledPin = 13;
        unsigned long previousMillis = 0; // Stores the last time the LED was updated
        const long interval = 1000;       // Interval at which to blink (milliseconds)

        void setup() {
          pinMode(ledPin, OUTPUT);
        }

        void loop() {
          unsigned long currentMillis = millis(); // Get the current time

          if (currentMillis - previousMillis >= interval) {
            // Save the last time the LED was updated
            previousMillis = currentMillis;

            // Toggle the LED state
            int ledState = digitalRead(ledPin);
            digitalWrite(ledPin, !ledState);
          }
          // Other code can run here while waiting for the interval to pass
        }
        ```

#### 2.3. Direct Timer Register Manipulation (Advanced - Referencing Gaonkar/Rafiquzzaman for Microcontroller Internals)

For more precise control and advanced applications (like PWM generation, precise event triggering), direct manipulation of timer registers is required. This often involves understanding the specific microcontroller's datasheet.

*   **Key Registers (AVR examples):**
    *   `TCCRnx`: Timer/Counter Control Registers (configure mode, prescaler, etc.).
    *   `TCNTn`: Timer/Counter Register (the actual counter value).
    *   `OCRnx`: Output Compare Registers (used for comparing with the counter for events or PWM).
    *   `TIMSKn`: Timer Interrupt Mask Register (enables timer interrupts).
    *   `TIFRn`: Timer Interrupt Flag Register (flags indicate timer events).

*   **Applications:**
    *   **Pulse Width Modulation (PWM):** Generating variable duty cycle square waves to control motor speed or LED brightness.
    *   **Interrupt Generation:** Triggering specific code sections (Interrupt Service Routines - ISRs) at precise time intervals.
    *   **Event Counting:** Counting external pulses.

---

### 3. Interfacing of Analog-to-Digital Converter (ADC)

Many real-world phenomena are analog (continuous signals like temperature, light, sound). To be processed by a digital microcontroller, these analog signals must be converted into digital values. This is the role of the ADC.

#### 3.1. What is an ADC?

*   **Definition:** An Analog-to-Digital Converter (ADC) is an electronic circuit that converts a continuous analog voltage into a discrete digital number.
*   **Key Parameters:**
    *   **Resolution:** The number of bits the ADC uses to represent the analog signal. Higher resolution means more discrete levels, leading to finer measurements. Arduino Uno (ATmega328P) has a 10-bit ADC (0-1023).
    *   **Sampling Rate:** How often the ADC takes a measurement.
    *   **Input Voltage Range:** The minimum and maximum analog voltages the ADC can accept. On Arduino Uno, this is typically 0V to 5V (or 0V to 3.3V on some boards).

#### 3.2. Arduino ADC Functions

The Arduino IDE provides simple functions to interact with the built-in ADC.

*   **`analogRead(pin)`:**
    *   **Functionality:** Reads the value from a specified analog input pin.
    *   **Input Pins:** On Arduino Uno, these are pins A0 through A5.
    *   **Return Value:** Returns an integer value between 0 and 1023 (for a 10-bit ADC). 0 typically corresponds to the minimum analog voltage (0V), and 1023 corresponds to the maximum analog voltage (AREF or 5V/3.3V).
    *   **Example (Reading a potentiometer):**
        ```cpp
        const int analogPin = A0; // Connect potentiometer wiper to A0
        int sensorValue = 0;

        void setup() {
          Serial.begin(9600); // Initialize serial communication for output
        }

        void loop() {
          sensorValue = analogRead(analogPin); // Read the analog value
          Serial.print("Sensor Value: ");
          Serial.println(sensorValue);       // Print the value to the serial monitor

          // You can map this value to a different range if needed
          // For example, map to 0-255 for PWM output
          // int pwmValue = map(sensorValue, 0, 1023, 0, 255);
          // analogWrite(9, pwmValue); // Control an LED on pin 9 with PWM
        }
        ```

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


#### 3.3. Analog Reference (AREF)

*   **Concept:** The AREF pin allows you to specify the reference voltage for analog readings. By default, the Arduino uses the board's regulated voltage (5V or 3.3V) as the reference.
*   **`analogReference(type)` function:**
    *   `DEFAULT`: The default analog reference of the microcontroller.
    *   `INTERNAL`: Use the built-in voltage reference (usually 1.1V on ATmega328P). Useful for measuring signals that are consistently below the default reference voltage.
    *   `EXTERNAL`: Use an external voltage applied to the AREF pin as the reference. **Caution:** Only apply voltages within the microcontroller's operating range to AREF when using this option.

---

### 4. Interfacing of Digital-to-Analog Converter (DAC)

While many microcontrollers have built-in ADCs, fewer have built-in DACs. DACs are used to convert digital values back into analog voltage or current signals. This is useful for generating audio, control signals, or creating arbitrary waveforms.

#### 4.1. What is a DAC?

*   **Definition:** A Digital-to-Analog Converter (DAC) is an electronic circuit that converts a discrete digital number into a continuous analog voltage or current.
*   **Key Parameters:**
    *   **Resolution:** Similar to ADC, determines the number of discrete analog output levels.
    *   **Output Range:** The range of analog voltages or currents the DAC can produce.

#### 4.2. Arduino DAC Capabilities

*   **Arduino Uno (ATmega328P):** Does **not** have a built-in DAC.
*   **Simulating DAC with PWM:** The closest Arduino Uno gets to DAC functionality is through **Pulse Width Modulation (PWM)**.
    *   **`analogWrite(pin, value)`:**
        *   **Functionality:** Writes an analog value to a PWM-enabled digital pin.
        *   **PWM Pins:** On Arduino Uno, these are typically pins 3, 5, 6, 9, 10, 11.
        *   **`value` Range:** 0 to 255.
        *   **Mechanism:** The function rapidly switches the digital pin ON and OFF. The ratio of ON time to the total period (duty cycle) determines the "average" voltage. A value of 0 means always OFF, 255 means always ON, and 127 is roughly 50% ON.
        *   **Application:** Controlling LED brightness, motor speed.
        *   **Limitation:** PWM is not a true analog output; it's a rapidly switching digital signal. For true analog output, an external DAC chip is required.

    *   **Example (Controlling LED brightness):**
        ```cpp
        const int ledPin = 9; // Connect an LED (with a resistor) to pin 9

        void setup() {
          pinMode(ledPin, OUTPUT);
        }

        void loop() {
          for (int brightness = 0; brightness <= 255; brightness += 5) {
            analogWrite(ledPin, brightness); // Gradually increase brightness
            delay(30);
          }
          for (int brightness = 255; brightness >= 0; brightness -= 5) {
            analogWrite(ledPin, brightness); // Gradually decrease brightness
            delay(30);
          }
        }
        ```

*   **Arduino Boards with Built-in DAC:** Some Arduino boards, like the **Arduino Due** (which uses an ARM Cortex-M3 microcontroller), **do** have built-in DACs, offering true analog output.
    *   **Functions (on boards with DAC):** Typically involve functions like `dacWrite(pin, value)` where `value` is often in a 0-255 or 0-4095 range depending on the DAC resolution.

#### 4.3. Interfacing External DACs

*   **Need:** When a true analog output is required and the microcontroller lacks a built-in DAC, an external DAC chip is used.
*   **Communication Protocols:** External DACs are typically interfaced using serial communication protocols like:
    *   **SPI (Serial Peripheral Interface):** High-speed, full-duplex communication.
    *   **I2C (Inter-Integrated Circuit):** Two-wire serial communication, suitable for connecting multiple devices.
*   **Process:**
    1.  Connect the DAC chip's data input and control pins to the microcontroller's corresponding SPI or I2C pins.
    2.  Use the appropriate library (e.g., `SPI.h`, `Wire.h`) to send digital values to the DAC.
    3.  The DAC chip converts these digital values into an analog voltage or current output.

---

### Learning Outcome Alignment

*   **CO1 (8085 Arch & Assembly):** While this topic focuses on Arduino, understanding the fundamental building blocks like registers, memory, and instruction sets (covered in earlier modules) is crucial for appreciating microcontroller operations, including how timers and ADCs/DACs are controlled at a lower level.
*   **CO2 (Interrupts, Subroutines, Timing, Interfacing):**
    *   **Interrupts:** Timer overflows can generate interrupts, requiring the understanding of ISRs.
    *   **Subroutines:** Libraries often abstract complex hardware operations into functions (subroutines).
    *   **Timing:** This topic heavily emphasizes `delay()`, `millis()`, and timers for precise timing.
    *   **Interfacing:** ADC and DAC interfacing are central themes.
*   **CO3 (Embedded Systems & Processor Selection):** Understanding peripherals like timers, ADCs, and DACs is critical when selecting a microcontroller for an embedded system, as these peripherals determine the system's ability to interact with the real world and perform timing-critical operations.
*   **CO4 (Arduino Uno System Arch & IDE):** This entire topic is built around the Arduino Uno and its IDE, covering basic programming, using the IDE, and interacting with common peripherals.
*   **CO5 (Embedded C & Arduino UNO Applications):** The examples provided are written in "Arduino C/C++" (a dialect of C++ used with Arduino), and they demonstrate implementing applications using the Arduino UNO board.
*   **CO6 (RISC Arch & ARM-Arduino DUE):** While the examples primarily use Arduino Uno (AVR-based), the concept of timers, ADCs, and DACs is fundamental to all microcontrollers, including ARM-based ones like the Arduino DUE. The understanding of how these peripherals function at a conceptual level directly applies to designing embedded systems with ARM processors. The DUE's built-in DAC is a prime example of ARM's enhanced peripheral capabilities.

---

### Key Points to Remember

*   **Arduino IDE:** Your primary tool for writing, compiling, and uploading code.
*   **`setup()` vs. `loop()`:** Initialize once in `setup()`, run main logic in `loop()`.
*   **`delay()` is blocking:** Use `millis()` for non-blocking timing to keep your Arduino responsive.
*   **`analogRead()`:** Converts analog voltage (0-5V typically) to a digital value (0-1023 for 10-bit).
*   **`analogWrite()` (PWM):** Simulates analog output by rapidly switching digital pins ON/OFF. Not a true DAC.
*   **External DACs:** Necessary for true analog output on microcontrollers without built-in DACs, often interfaced via SPI or I2C.
*   **Timers:** Hardware modules for precise timing, interrupt generation, and PWM.

---

### Practice Questions and Exercises

**Multiple Choice Questions:**

1.  Which function in the Arduino IDE pauses program execution for a specified duration?
    a) `millis()`
    b) `loop()`
    c) `delay()`
    d) `setup()`

2.  What is the typical range of values returned by `analogRead()` on an Arduino Uno?
    a) 0 to 255
    b) 0 to 5
    c) 0 to 1023
    d) -1 to 1

3.  `analogWrite()` on an Arduino Uno primarily utilizes which technique to produce an analog-like output?
    a) Digital-to-Analog Conversion
    b) Pulse Width Modulation (PWM)
    c) Analog-to-Digital Conversion
    d) Serial Communication

4.  Which of the following is a key advantage of using `millis()` over `delay()` for timing?
    a) `millis()` makes the code run faster.
    b) `millis()` allows other code to execute while waiting.
    c) `millis()` uses less memory.
    d) `millis()` requires no arguments.

**Short Answer Questions:**

5.  Explain the difference between the `setup()` and `loop()` functions in an Arduino sketch.
6.  What is the purpose of a timer in a microcontroller?
7.  Describe how to read an analog sensor value using the Arduino IDE.
8.  Why is `analogWrite()` not considered a true DAC output?
9.  On which Arduino boards might you find a built-in DAC?

**Practical Exercises:**

10. **Blink without Delay:** Write an Arduino sketch that blinks an LED connected to digital pin 13 every 500 milliseconds, but do so without using the `delay()` function. Use the `millis()` function.
11. **Potentiometer to LED Brightness:** Connect a potentiometer to analog pin A0. Connect an LED (with a current-limiting resistor) to digital pin 9. Write a sketch that reads the potentiometer's value and uses `analogWrite()` to control the brightness of the LED according to the potentiometer's position.

---

### Answers to Practice Questions

1.  **c) `delay()`**
2.  **c) 0 to 1023** (for a 10-bit ADC)
3.  **b) Pulse Width Modulation (PWM)**
4.  **b) `millis()` allows other code to execute while waiting.**
5.  **Answer:** The `setup()` function runs once when the Arduino board starts or resets, used for initial configurations (like setting pin modes). The `loop()` function runs repeatedly after `setup()` completes, containing the main program logic.
6.  **Answer:** A timer is a hardware module that counts clock cycles. It's used for precise timing, creating delays, measuring time intervals, generating interrupts at specific times, and controlling periodic events like PWM.
7.  **Answer:** Use the `analogRead(pin)` function, where `pin` is the analog input pin number (e.g., `A0`). The function returns an integer value between 0 and 1023.
8.  **Answer:** `analogWrite()` generates a rapidly pulsing digital signal (PWM). The *average* voltage perceived by a device (like an LED) changes with the duty cycle, but it's not a steady analog voltage. A true DAC produces a constant, non-pulsing analog voltage.
9.  **Answer:** Arduino boards with more advanced microcontrollers, such as the **Arduino Due** (ARM Cortex-M3) or some variants of the Arduino Nano 33 IoT, often have built-in DACs.

10. **Answer (Blink without Delay Sketch):**
    ```cpp
    const int ledPin = 13;
    unsigned long previousMillis = 0;
    const long interval = 500; // Blink every 500ms

    void setup() {
      pinMode(ledPin, OUTPUT);
    }

    void loop() {
      unsigned long currentMillis = millis();

      if (currentMillis - previousMillis >= interval) {
        previousMillis = currentMillis; // Save the last time

        // Toggle the LED state
        int ledState = digitalRead(ledPin);
        digitalWrite(ledPin, !ledState);
      }
      // Other tasks can go here
    }
    ```

11. **Answer (Potentiometer to LED Brightness Sketch):**
    ```cpp
    const int analogPin = A0; // Potentiometer on A0
    const int pwmPin = 9;     // LED on PWM pin 9

    void setup() {
      pinMode(pwmPin, OUTPUT); // Set LED pin as output
      Serial.begin(9600);     // Start serial for debugging (optional)
    }

    void loop() {
      int sensorValue = analogRead(analogPin); // Read potentiometer (0-1023)

      // Map the potentiometer value to the PWM range (0-255)
      int brightness = map(sensorValue, 0, 1023, 0, 255);

      analogWrite(pwmPin, brightness); // Set LED brightness

      // Optional: Print values for debugging
      // Serial.print("Sensor Value: ");
      // Serial.print(sensorValue);
      // Serial.print("  Brightness: ");
      // Serial.println(brightness);
      // delay(10); // Small delay to stabilize readings if needed
    }
    ```

---
This comprehensive set of notes covers the requested topic, aligning with the learning outcomes and incorporating concepts from the specified textbooks. Remember to consult the textbooks for deeper dives into microcontroller architecture and register-level operations for a more thorough understanding.