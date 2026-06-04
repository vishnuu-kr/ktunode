---
title: "PWM implementation"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 4: ARM (Advanced RISC Machines) based Embedded System Design : Classification of Microprocessors based on the word length, architecture and  Instruction Set"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3622b"
status: "completed"
scrapedAt: "2026-05-23T16:22:56.643Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS

## Module 4: ARM (Advanced RISC Machines) based Embedded System Design

### Topic: PWM Implementation

---

### 1. Introduction to PWM

**1.1 What is PWM?**

*   **Pulse Width Modulation (PWM)** is a technique for encoding a message signal into a pulsed signal. The width of the pulses is varied to achieve the desired modulation.
*   It is a highly efficient way to control analog systems with digital means.
*   Instead of varying the voltage or current directly, PWM works by switching a digital signal ON and OFF at a high frequency. The *duty cycle* (the ratio of ON time to the total period) determines the effective analog output.

**1.2 Why use PWM in Embedded Systems?**

*   **Control of Actuators:** Motors, LEDs, servos, etc., can be controlled precisely by varying the power delivered through PWM.
    *   **LED Brightness:** A higher duty cycle results in a brighter LED.
    *   **Motor Speed:** A higher duty cycle results in a faster motor.
    *   **Servo Position:** PWM is the standard method for controlling servo motors.
*   **Power Efficiency:** By switching devices ON and OFF rapidly, PWM minimizes power dissipation compared to analog voltage regulation methods. This is crucial for battery-powered embedded systems.
*   **Digital Control:** PWM allows microcontrollers (which are inherently digital) to interface with and control analog components.
*   **Simplicity:** Implementing PWM in hardware or software is relatively straightforward.

**1.3 Key Concepts in PWM:**

*   **Period (T):** The total time for one complete PWM cycle (ON time + OFF time).
*   **Frequency (f):** The number of cycles per second, calculated as f = 1/T.
*   **Pulse Width / ON Time (t_on):** The duration for which the output signal is HIGH.
*   **OFF Time (t_off):** The duration for which the output signal is LOW.
    *   `T = t_on + t_off`
*   **Duty Cycle (%):** The ratio of the ON time to the total period, expressed as a percentage.
    *   `Duty Cycle = (t_on / T) * 100%`
    *   A 0% duty cycle means the output is always LOW.
    *   A 100% duty cycle means the output is always HIGH.
    *   A 50% duty cycle means the output is HIGH for half the period and LOW for the other half.

---

### 2. PWM Implementation on ARM-based Systems (Arduino DUE)

*   **Relevance to Learning Outcomes:** This section directly addresses LOs related to ARM-based systems and applying knowledge to real-life problems (CO6). It also builds on understanding embedded systems and selection of processors (CO3) and writing programs using Embedded C (CO5).
*   **Reference:** *Arduino Cookbook* by Michael Margolis, *Programming Arduino Next Steps* by Simon Monk, *Arduino: A Technical Reference* by J.M. Hughes, *Exploring Arduino* by Jeremy Blum, and *Arduino-Based Embedded Systems* by Singh, Gehlot, Choudhury.

**2.1 Arduino DUE and PWM Capabilities:**

*   The Arduino Due, based on the Atmel SAM3X8E ARM Cortex-M3 microcontroller, offers enhanced PWM capabilities compared to simpler 8-bit Arduinos.
*   It has **12 dedicated PWM channels**, each with its own timer and associated output pins. This allows for simultaneous generation of multiple independent PWM signals.
*   These PWM channels are typically associated with timers (Timer 0, Timer 1, Timer 2). Each timer can drive multiple PWM outputs.

**2.2 Software PWM vs. Hardware PWM:**

*   **Software PWM:**
    *   Implemented entirely in software using delays and `digitalWrite()`.
    *   **Pros:** Easy to implement, can be used on any digital pin.
    *   **Cons:** Highly CPU-intensive, can be inaccurate due to other program tasks, limited frequency resolution, susceptible to jitter.
    *   **Example (Conceptual - Not Recommended for performance-critical tasks):**
        ```c++
        void softwarePWM(int pin, int dutyCycle, int period) {
          int onTime = map(dutyCycle, 0, 100, 0, period);
          int offTime = period - onTime;

          digitalWrite(pin, HIGH);
          delayMicroseconds(onTime);
          digitalWrite(pin, LOW);
          delayMicroseconds(offTime);
        }
        ```
*   **Hardware PWM:**
    *   Utilizes dedicated hardware timers within the microcontroller to generate PWM signals automatically.
    *   The microcontroller's hardware handles the timing, freeing up the CPU for other tasks.
    *   **Pros:** Highly accurate, efficient (CPU-independent), precise frequency and duty cycle control, stable output.
    *   **Cons:** Limited to specific pins associated with the PWM hardware timers.
    *   **Arduino DUE utilizes Hardware PWM extensively.**

**2.3 Using Arduino IDE for Hardware PWM on DUE:**

The Arduino IDE provides simplified functions to control the hardware PWM peripherals.

*   **`analogWrite(pin, value)`:**
    *   This is the primary function used for PWM on Arduino.
    *   **`pin`**: The digital pin number. For Arduino DUE, pins marked with `~` are PWM capable. Common PWM pins on Due include pins 2-13 and A0-A7.
    *   **`value`**: An integer between 0 and 255.
        *   `0` corresponds to 0% duty cycle (always LOW).
        *   `255` corresponds to 100% duty cycle (always HIGH).
        *   A value of `127` corresponds to approximately 50% duty cycle.
    *   **Important Note for Arduino DUE:** The `analogWrite()` function on Arduino Due uses a **10-bit resolution** by default for PWM output (0-1023), not 8-bit (0-255) like on Arduino Uno. This means `analogWrite(pin, 511)` will give approximately 50% duty cycle. To use the full 10-bit resolution, simply pass values between 0 and 1023. If you pass values between 0 and 255, they will be scaled up automatically.

**2.4 Example: Controlling LED Brightness with PWM**

**Objective:** Control the brightness of an LED connected to a PWM pin on the Arduino Due.

**Hardware Setup:**
*   Connect an LED to a PWM-enabled pin (e.g., Pin 9) through a current-limiting resistor (e.g., 220 Ohm).
*   Connect the other leg of the LED to GND.

**Arduino Code (Sketch):**

```c++
// Define the PWM pin for the LED
const int ledPin = 9;

// Variable to store the brightness level
int brightness = 0;

// Variable to store the direction of brightness change (for fading)
int fadeDirection = 5; // Increment brightness by 5

void setup() {
  // Initialize serial communication for debugging (optional)
  Serial.begin(9600);

  // Set the LED pin as an output
  pinMode(ledPin, OUTPUT);

  // The analogWrite() function does not need to be explicitly configured
  // for the pin mode as it handles it internally.
}

void loop() {
  // Change the brightness
  brightness = brightness + fadeDirection;

  // Reverse direction if brightness reaches maximum (1023 for Due) or minimum (0)
  if (brightness <= 0 || brightness >= 1023) {
    fadeDirection = -fadeDirection; // Reverse the direction
  }

  // Apply the brightness value to the PWM output
  // The DUE has 10-bit PWM (0-1023)
  analogWrite(ledPin, brightness);

  // Small delay to control the fading speed
  // Adjust this delay to change how fast the LED fades
  delay(20); // Delay for 20 milliseconds
}
```

**Explanation:**

1.  **`const int ledPin = 9;`**: Defines the pin connected to the LED. Pin 9 on the Due is PWM capable.
2.  **`int brightness = 0;`**: A variable to hold the desired PWM duty cycle value.
3.  **`int fadeDirection = 5;`**: Controls whether the brightness is increasing or decreasing.
4.  **`setup()`**:
    *   `Serial.begin(9600);` (Optional) Initializes serial communication.
    *   `pinMode(ledPin, OUTPUT);` is technically not strictly necessary for `analogWrite` as `analogWrite` itself configures the pin as output. However, it's good practice to explicitly set pin modes.
5.  **`loop()`**:
    *   **`brightness = brightness + fadeDirection;`**: Updates the `brightness` variable.
    *   **`if (brightness <= 0 || brightness >= 1023)`**: Checks if the brightness has reached the minimum (0) or maximum (1023 for Due's 10-bit PWM).
    *   **`fadeDirection = -fadeDirection;`**: If the limit is reached, the direction of change is reversed.
    *   **`analogWrite(ledPin, brightness);`**: This is the core PWM function. It sets the PWM duty cycle on `ledPin` according to the `brightness` value. For Arduino Due, values from 0 to 1023 are supported.
    *   **`delay(20);`**: A small delay to make the fading effect observable.

**2.5 Controlling Servo Motors with PWM**

*   **Servo motors** are widely used in robotics and automation. They require a specific PWM signal to control their angular position.
*   **Standard Servo Signal:** A PWM signal with a fixed frequency (typically 50 Hz, meaning a period of 20 ms) and a variable pulse width.
    *   A pulse width of 1 ms usually corresponds to 0 degrees.
    *   A pulse width of 1.5 ms usually corresponds to 90 degrees.
    *   A pulse width of 2 ms usually corresponds to 180 degrees.
*   **Arduino `Servo` Library:** The Arduino IDE provides a convenient `Servo.h` library that abstracts away the low-level PWM generation for servo control.

**Example: Controlling a Servo Motor**

**Objective:** Rotate a servo motor to different positions.

**Hardware Setup:**
*   Connect a standard servo motor:
    *   Red wire to the Arduino's 5V pin (or an external power source if the servo draws significant current).
    *   Black or Brown wire to GND.
    *   Yellow, Orange, or White wire (signal wire) to a PWM-enabled pin on the Arduino Due (e.g., Pin 9).

**Arduino Code (Sketch):**

```c++
#include <Servo.h>

// Create a Servo object
Servo myServo;

// Define the pin the servo is connected to
const int servoPin = 9;

void setup() {
  // Attach the servo object to the specified pin
  myServo.attach(servoPin);

  // Optionally, initialize serial communication for control
  Serial.begin(9600);
  Serial.println("Servo control started. Send angle (0-180) via serial.");
}

void loop() {
  // Example 1: Sweep the servo back and forth
  /*
  for (int angle = 0; angle <= 180; angle += 1) {
    myServo.write(angle); // Send the angle to the servo
    delay(15);            // Wait for the servo to reach the position
  }
  for (int angle = 180; angle >= 0; angle -= 1) {
    myServo.write(angle);
    delay(15);
  }
  */

  // Example 2: Read angle from serial monitor
  if (Serial.available() > 0) {
    int angle = Serial.parseInt(); // Read the integer value sent
    // Ensure the angle is within the valid range (0-180)
    if (angle >= 0 && angle <= 180) {
      myServo.write(angle);
      Serial.print("Setting servo to: ");
      Serial.println(angle);
    } else {
      Serial.println("Invalid angle. Please enter a value between 0 and 180.");
    }
  }
}
```

**Explanation:**

1.  **`#include <Servo.h>`**: Includes the necessary Servo library.
2.  **`Servo myServo;`**: Creates an instance of the `Servo` class.
3.  **`myServo.attach(servoPin);`**: In `setup()`, this associates the `myServo` object with the physical pin (`servoPin`) that will generate the PWM signal. The library handles setting up the correct timer and PWM configuration for servo control.
4.  **`myServo.write(angle);`**: In `loop()`, this function sends the desired angle (0-180 degrees) to the servo. The library internally translates this angle into the appropriate PWM pulse width for the 50 Hz signal.
5.  **`delay(15);`**: Provides a small delay to allow the servo to move to the commanded position.
6.  The commented-out section shows a basic sweep routine. The active section demonstrates reading an angle from the Serial Monitor for interactive control.

---

### 3. Classification of Microprocessors (Context for ARM)

*   **Relevance to Learning Outcomes:** This section directly addresses LOs related to classification based on word length, architecture, and instruction set (Module 4 title and description) and understanding the RISC Architecture (CO6).
*   **Reference:** *Fundamentals of Microprocessor and Microcontrollers* by Ram, B, *Microprocessor, Architecture, Programming and Applications* by Ramesh Gaonkar, *Microprocessor Theory and Application* by Rafiquzzaman.

**3.1 Based on Word Length:**

*   **Word Length:** Refers to the number of bits that the processor can process in a single operation.
*   **4-bit Microprocessors:** Early processors, limited processing power (e.g., Intel 4004).
*   **8-bit Microprocessors:** Widely used in early microcontrollers and personal computers (e.g., Intel 8085, Zilog Z80).
*   **16-bit Microprocessors:** Improved performance, more complex addressing modes (e.g., Intel 8086).
*   **32-bit Microprocessors:** Dominant in personal computers and workstations for decades (e.g., Intel 80386, Motorola 68000). **ARM processors are typically 32-bit or 64-bit.**
*   **64-bit Microprocessors:** Current generation, handling larger data sets and memory addresses efficiently (e.g., Intel Core i series, ARM Cortex-A series).

**3.2 Based on Architecture:**

*   **Von Neumann Architecture:**
    *   Uses a single memory space for both instructions and data.
    *   Has a single bus for fetching both instructions and data.
    *   **Bottleneck:** Fetching instructions and data simultaneously is not possible, limiting performance.
*   **Harvard Architecture:**
    *   Uses separate memory spaces for instructions and data.
    *   Has separate buses for instructions and data.
    *   **Advantage:** Allows simultaneous fetching of instructions and data, leading to higher performance.
    *   **Many embedded systems, including ARM Cortex-M microcontrollers, often employ a modified Harvard architecture**, allowing for some degree of parallelism while maintaining flexibility.
*   **RISC (Reduced Instruction Set Computing):**
    *   **Characterized by:**
        *   A small, highly optimized set of instructions.
        *   Instructions are typically fixed-length and execute in a single clock cycle (or a few cycles).
        *   Emphasis on load/store architecture (data processing occurs only on registers; memory access is via explicit load/store instructions).
        *   Large number of general-purpose registers.
        *   Simple addressing modes.
        *   Hardwired control logic.
    *   **Advantages:** Faster execution, simpler hardware design, lower power consumption, easier pipelining.
    *   **Examples:** ARM, MIPS, SPARC. **ARM is a prime example of RISC architecture.**
*   **CISC (Complex Instruction Set Computing):**
    *   **Characterized by:**
        *   A large, complex set of instructions.
        *   Instructions can vary in length and take multiple clock cycles to execute.
        *   Instructions can directly operate on memory operands.
        *   Fewer general-purpose registers.
        *   Complex addressing modes.
        *   Microprogrammed control.
    *   **Advantages:** Can achieve complex operations with fewer lines of assembly code.
    *   **Examples:** Intel x86 family (historically), Motorola 68000 series.

**3.3 Based on Instruction Set:**

*   **RISC vs. CISC:** This is the primary distinction in instruction sets. As discussed above, ARM is a RISC architecture.
*   **Instruction Set Architecture (ISA):** Defines the set of commands that a processor understands and can execute. This includes the types of instructions, their formats, and the addressing modes they support.
*   **ARM ISA:**
    *   **Thumb Instruction Set:** A 16-bit instruction set designed for code density, useful in memory-constrained embedded systems.
    *   **ARM Instruction Set:** A 32-bit instruction set offering greater performance and addressing capabilities.
    *   **AArch64 (ARMv8 onwards):** A 64-bit instruction set.
    *   **Key Features:** Load/store architecture, extensive register set, conditional execution (many instructions can be executed only if a certain condition is met), powerful addressing modes.

---

### 4. Classification of Microprocessors (for context, not direct PWM implementation)

*   **Relevance to Learning Outcomes:** Directly addresses LOs related to classification of microprocessors (Module 4 title and description) and understanding embedded systems and processor selection (CO3).
*   **Reference:** *Fundamentals of Microprocessor and Microcontrollers* by Ram, B, *Microprocessor, Architecture, Programming and Applications* by Ramesh Gaonkar, *Microprocessor Theory and Application* by Rafiquzzaman.

While the topic is PWM implementation, understanding the classification provides context for *why* ARM processors are suitable for embedded systems and how their architecture influences tasks like PWM.

**4.1 Based on Word Length (Recap):**

*   **ARM Cortex-M series (e.g., on many microcontrollers, including some Arduino-compatible boards):** Primarily 32-bit. This allows for efficient handling of data and addresses necessary for complex tasks.

**4.2 Based on Architecture (Recap):**

*   **ARM:** Predominantly RISC architecture. This means simpler, faster instructions, leading to efficient execution of tasks like timer management for PWM. The load/store nature means data is moved to registers for manipulation, which is well-suited for bit manipulation required in PWM control.
*   **Harvard Architecture (modified):** Enables faster instruction fetching and data access, crucial for real-time control applications where PWM signals need to be generated precisely.

**4.3 Based on Instruction Set (Recap):**

*   **ARM ISA:** The RISC nature of ARM's instruction set, with its focus on speed and efficiency, makes it adept at managing hardware peripherals like timers and PWM generators. The availability of both ARM (32-bit) and Thumb (16-bit) instruction sets allows developers to balance performance and code size.

**4.4 Other Classifications (for broader context):**

*   **Microprocessors vs. Microcontrollers:**
    *   **Microprocessor:** Contains only the CPU (Central Processing Unit) on a chip. Requires external memory (RAM, ROM), I/O peripherals, and timers. (e.g., Intel Core i7, older PCs).
    *   **Microcontroller:** A "computer on a chip." Integrates CPU, RAM, ROM/Flash memory, I/O ports, timers, ADCs, DACs, and other peripherals onto a single IC. Ideal for embedded systems. (e.g., Arduino UNO's ATmega328P, Arduino DUE's SAM3X8E). **ARM Cortex-M processors are typically used as the core of microcontrollers.**
*   **Application Specific Integrated Circuits (ASICs):** Custom-designed chips for a specific application, offering high performance and efficiency but at a high development cost.
*   **Field-Programmable Gate Arrays (FPGAs):** Programmable hardware that can be configured to implement custom digital logic circuits. Offers flexibility but can be more complex to program than microcontrollers.

---

### 5. Important Points to Remember

*   **PWM is key for digital-to-analog control** in embedded systems.
*   **Duty Cycle** is the primary parameter controlling the effective analog output of a PWM signal.
*   **Hardware PWM is significantly more efficient and accurate** than software PWM.
*   **Arduino DUE offers 10-bit PWM resolution** (`analogWrite` values 0-1023).
*   **The `Servo.h` library simplifies servo motor control** by handling the specific PWM timing required.
*   **ARM processors are typically 32-bit RISC architectures**, known for their efficiency, low power consumption, and suitability for embedded applications, including precise control tasks like PWM generation.
*   Understanding the difference between microprocessors and microcontrollers is crucial for selecting the right component for an embedded system.

---

### 6. Practice Questions and Answers

**Question 1:**
What is the primary advantage of using hardware PWM over software PWM in an embedded system?

**Answer:**
The primary advantage is efficiency and accuracy. Hardware PWM utilizes dedicated timer peripherals, freeing up the CPU for other tasks and ensuring a stable, precise PWM signal regardless of other software operations. Software PWM is CPU-intensive and susceptible to timing variations due to other program tasks.

**Question 2:**
On an Arduino Due, what is the range of values that can be passed to the `analogWrite()` function, and what do the minimum and maximum values represent?

**Answer:**
The Arduino Due supports 10-bit PWM resolution. The range of values for `analogWrite()` is 0 to 1023.
*   `0` represents a 0% duty cycle (output is always LOW).
*   `1023` represents a 100% duty cycle (output is always HIGH).

**Question 3:**
A servo motor typically requires a PWM signal with a frequency of 50 Hz. What is the period of this signal in milliseconds?

**Answer:**
Frequency (f) = 50 Hz
Period (T) = 1 / f
T = 1 / 50 Hz = 0.02 seconds
To convert to milliseconds: 0.02 seconds * 1000 ms/second = 20 ms.
The period is 20 ms.

**Question 4:**
Explain the concept of "load/store architecture" as it applies to RISC processors like ARM.

**Answer:**
In a load/store architecture, data processing operations (like addition, subtraction, etc.) can only be performed on data held in the processor's registers. To perform operations on data in memory, it must first be explicitly loaded into a register using a "load" instruction. After processing, the result must be explicitly stored back to memory using a "store" instruction. Memory-to-memory operations are not directly supported by the ALU (Arithmetic Logic Unit).

**Question 5:**
You want to control the speed of a DC motor using PWM from an Arduino Due. You connect the motor driver's control input to pin 11, which is a PWM-capable pin. Write a simple Arduino sketch to set the motor speed to approximately 75% of its maximum.

**Answer:**

```c++
// Define the PWM pin for motor control
const int motorPin = 11;

// Set the desired speed (75% duty cycle)
// For Arduino Due (10-bit PWM), 75% of 1023 is approximately 767
int motorSpeed = 767;

void setup() {
  // Set the motor pin as an output
  pinMode(motorPin, OUTPUT);
}

void loop() {
  // Set the PWM output to control the motor speed
  analogWrite(motorPin, motorSpeed);

  // The loop can be empty if the speed is constant,
  // or it can contain code to change the speed dynamically.
  // For this example, we keep the speed constant.
}
```

---

### 7. Alignment with Course Outcomes

*   **CO1 (8085 Architecture and Assembly):** While not directly covered in PWM, understanding foundational microprocessor concepts (like data processing and instruction cycles) from 8085 programming is a prerequisite for understanding any processor's operation.
*   **CO2 (Interrupts, Subroutines, Timing):** PWM relies heavily on precise timing, which is often managed by hardware timers. Understanding timing diagrams helps appreciate the need for dedicated hardware. Subroutines might be used to manage PWM sequences, and interrupts can signal the end of a PWM period or a change in duty cycle.
*   **CO3 (Embedded System and Processor Selection):** This topic directly supports CO3 by illustrating how a specific peripheral (PWM) is implemented and controlled on an ARM-based microcontroller (Arduino Due). Understanding PWM's applications (motor control, LED dimming) helps in selecting processors with adequate PWM capabilities for embedded projects.
*   **CO4 (Arduino Uno Architecture and IDE):** While the focus shifts to Due, the fundamental way `analogWrite()` works is similar in principle to Arduino Uno, though resolution differs. This builds upon the knowledge gained about the Arduino IDE.
*   **CO5 (Embedded C and Arduino UNO):** PWM implementation is a common application of Embedded C on Arduino boards. Writing sketches like the LED fading or servo control examples directly fulfills this outcome.
*   **CO6 (RISC Architecture and ARM Application):** This is the most directly addressed outcome. Understanding ARM's RISC architecture explains *why* it's efficient for tasks like PWM. The examples demonstrate applying this knowledge to real-life problems (controlling motors, LEDs). The contrast between RISC and CISC further solidifies this understanding.

---
This comprehensive set of notes covers the PWM implementation topic within the context of ARM-based embedded systems, drawing connections to the broader concepts of microprocessor classification and aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
