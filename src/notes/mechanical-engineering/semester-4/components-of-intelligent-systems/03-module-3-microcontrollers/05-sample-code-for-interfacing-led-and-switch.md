---
title: "Sample Code for interfacing LED and Switch"
subject: "COMPONENTS OF INTELLIGENT SYSTEMS"
module: "Module 3: Microcontrollers"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf480446311d"
status: "completed"
scrapedAt: "2026-05-20T17:51:52.997Z"
---
# Module 3: Microcontrollers - Sample Code for Interfacing LED and Switch

## Introduction to Microcontrollers

Microcontrollers are small, self-contained computers on a single integrated circuit (IC) containing a processor, memory, and programmable input/output peripherals. They are the "brains" behind many intelligent systems, enabling them to sense their environment, process information, and control actions.

### Key Concepts:

*   **Processor:** Executes instructions and performs calculations.
*   **Memory:** Stores program instructions and data (RAM, ROM/Flash).
*   **Input/Output (I/O) Peripherals:** Interfaces for communicating with external devices (e.g., GPIO pins, timers, ADC, DAC).
*   **GPIO (General Purpose Input/Output):** Pins that can be configured as either input or output to interact with external components.

### Relevant Textbooks:

*   **Beginning Arduino by Michael McRoberts:** Focuses on practical microcontroller programming using the Arduino platform, which is excellent for learning basic interfacing.
*   **Embedded Systems: An Integrated Approach by Lyla B Das:** Provides a foundational understanding of embedded systems, including microcontroller architecture and programming.

## Interfacing an LED with a Microcontroller

### Objective:

To control the state of an LED (ON/OFF) using the microcontroller's output pins.

### Learning Outcome Alignment:

*   **CO3 (K3):** Develop the hardware and software for microcontroller based systems for actuation. This topic directly addresses the software aspect of actuation.

### Key Concepts:

*   **Digital Output:** Configuring a GPIO pin to provide a high (e.g., 5V or 3.3V) or low (0V) voltage.
*   **LED (Light Emitting Diode):** A semiconductor device that emits light when current flows through it.
*   **Current Limiting Resistor:** Essential to protect the LED from excessive current, which can damage it. A typical value for a 5V system and a standard LED might be 220-330 Ohms.
*   **Ground (GND):** The common reference point for electrical circuits.

### Circuit Diagram:

```
      Microcontroller Pin (e.g., Digital Pin 13)
              |
              |
            [Resistor] (e.g., 220-330 Ohm)
              |
              |
             / \
            |   |  (Anode - longer leg)
            \ /   LED
             |   (Cathode - shorter leg)
             |
            GND
```

### Sample Code (Conceptual - Arduino C++ like):

```cpp
// Define the pin connected to the LED
const int ledPin = 13;

void setup() {
  // Initialize the digital pin as an output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Turn the LED ON (set the pin to HIGH)
  digitalWrite(ledPin, HIGH);
  delay(1000); // Wait for 1 second

  // Turn the LED OFF (set the pin to LOW)
  digitalWrite(ledPin, LOW);
  delay(1000); // Wait for 1 second
}
```

### Explanation of Code:

1.  **`const int ledPin = 13;`**: Declares a constant integer variable `ledPin` and assigns it the value `13`. This variable represents the digital pin number on the microcontroller that the LED is connected to. Using a named constant makes the code more readable and easier to modify.
2.  **`void setup() { ... }`**: This function runs once when the microcontroller starts or is reset.
    *   **`pinMode(ledPin, OUTPUT);`**: Configures the `ledPin` as an output pin. This tells the microcontroller to send voltage signals through this pin.
3.  **`void loop() { ... }`**: This function runs repeatedly after `setup()` has finished.
    *   **`digitalWrite(ledPin, HIGH);`**: Sets the `ledPin` to a high voltage state (typically 5V or 3.3V, depending on the microcontroller). This will turn the LED ON.
    *   **`delay(1000);`**: Pauses the program execution for 1000 milliseconds (1 second).
    *   **`digitalWrite(ledPin, LOW);`**: Sets the `ledPin` to a low voltage state (0V). This will turn the LED OFF.
    *   **`delay(1000);`**: Pauses the program execution for another 1 second.

### Important Points to Remember:

*   Always use a current-limiting resistor with an LED.
*   Ensure the LED is connected with the correct polarity (anode to the resistor/pin, cathode to GND).
*   The `setup()` function is for initialization, and the `loop()` function contains the main operational logic.

## Interfacing a Switch with a Microcontroller

### Objective:

To read the state of a physical switch (pressed or not pressed) using the microcontroller's input pins and use this information to control other components (e.g., the LED from the previous section).

### Learning Outcome Alignment:

*   **CO1 (K2):** Explain the working of sensors and transducers. A switch acts as a simple digital sensor.
*   **CO3 (K3):** Develop the hardware and software for microcontroller based systems for actuation. This topic addresses the input side of a microcontroller-based system.

### Key Concepts:

*   **Digital Input:** Configuring a GPIO pin to read voltage levels from external components.
*   **Switch:** A mechanical device that opens or closes an electrical circuit.
*   **Pull-up Resistor:** A resistor connected between a digital input pin and the positive voltage supply. It ensures that the input pin has a defined HIGH state when the switch is open.
*   **Pull-down Resistor:** A resistor connected between a digital input pin and ground. It ensures that the input pin has a defined LOW state when the switch is open.
*   **Debouncing:** The phenomenon where a mechanical switch may generate multiple rapid transitions (ON-OFF-ON-OFF) when pressed or released due to physical contact bounce. This requires software or hardware techniques to mitigate.

### Circuit Diagram (Using Internal Pull-up Resistor - common in many microcontrollers like Arduino):

This configuration utilizes the microcontroller's built-in pull-up resistor. When the switch is open, the pin is pulled HIGH. When the switch is pressed, it connects the pin to GND, making it LOW.

```
      Microcontroller Pin (e.g., Digital Pin 2)
              |
              |---------^ (Internal Pull-up Resistor)
              |
             / \
            |   |  Switch
            \ /
             |
            GND
```

### Circuit Diagram (Using External Pull-down Resistor):

This configuration uses an external resistor to keep the pin LOW when the switch is open. When the switch is pressed, it connects the pin to the voltage supply, making it HIGH.

```
      Microcontroller Pin (e.g., Digital Pin 2)
              |
              |
            [Resistor] (e.g., 10k Ohm)
              |
              |
            GND

      Microcontroller Pin (e.g., Digital Pin 2)
              |
              |
             / \
            |   |  Switch
            \ /
             |
      VCC (e.g., 5V or 3.3V)
```

### Sample Code (Conceptual - Arduino C++ like, using internal pull-up):

```cpp
// Define the pins for the LED and the switch
const int ledPin = 13;
const int switchPin = 2;

// Variable to store the switch state
int switchState = 0;

void setup() {
  // Initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);

  // Initialize the switch pin as an input with internal pull-up resistor enabled
  pinMode(switchPin, INPUT_PULLUP);
}

void loop() {
  // Read the state of the switch
  switchState = digitalRead(switchPin);

  // If the switch is pressed (it will be LOW due to pull-up), turn on the LED
  // If the switch is not pressed, it will be HIGH (due to pull-up)
  if (switchState == LOW) {
    digitalWrite(ledPin, HIGH); // Turn LED ON
  } else {
    digitalWrite(ledPin, LOW);  // Turn LED OFF
  }
}
```

### Explanation of Code:

1.  **`const int ledPin = 13;`**, **`const int switchPin = 2;`**: Define the pins for the LED and the switch.
2.  **`int switchState = 0;`**: Declares an integer variable to store the value read from the switch pin.
3.  **`void setup() { ... }`**:
    *   **`pinMode(ledPin, OUTPUT);`**: Configures the LED pin as an output.
    *   **`pinMode(switchPin, INPUT_PULLUP);`**: Configures the `switchPin` as an input and enables the microcontroller's internal pull-up resistor. This is crucial for correctly reading the switch state.
4.  **`void loop() { ... }`**:
    *   **`switchState = digitalRead(switchPin);`**: Reads the voltage level on the `switchPin`. If the switch is connected to GND (pressed, in the pull-up configuration), `digitalRead()` returns `LOW`. If the switch is open, the internal pull-up resistor keeps the pin HIGH, and `digitalRead()` returns `HIGH`.
    *   **`if (switchState == LOW) { ... } else { ... }`**: This is a conditional statement.
        *   If `switchState` is `LOW` (meaning the switch is pressed), the code inside the `if` block executes: `digitalWrite(ledPin, HIGH);` turns the LED ON.
        *   Otherwise (if `switchState` is `HIGH`, meaning the switch is not pressed), the code inside the `else` block executes: `digitalWrite(ledPin, LOW);` turns the LED OFF.

### Important Points to Remember:

*   **Pull-up vs. Pull-down:** Choose the resistor configuration based on your preference for the logic of the switch press (HIGH when pressed or LOW when pressed). Using the internal pull-up is often simpler.
*   **Debouncing:** For more robust applications, debouncing is necessary. This can be achieved in software by checking the switch state multiple times with small delays and confirming a stable state before acting, or using dedicated hardware debouncing circuits.
*   **Input Pin Configuration:** Always configure input pins correctly using `pinMode()` before reading from them.

## Combining LED and Switch Interfacing

### Objective:

To use a switch to control the state of an LED – turning it ON when the switch is pressed and OFF when it is released.

### Learning Outcome Alignment:

*   **CO3 (K3):** Develop the hardware and software for microcontroller based systems for actuation. This is a direct application of both input and output control.

### Circuit Diagram:

Combine the LED and switch circuits as described above. For example, connect an LED with its resistor to pin 13 and a switch to pin 2 (using internal pull-up).

### Sample Code (Arduino C++ like):

```cpp
// Define the pins
const int ledPin = 13;
const int switchPin = 2;

// Variable to store the switch state
int switchState = 0;

void setup() {
  // Initialize LED as output
  pinMode(ledPin, OUTPUT);
  // Initialize Switch as input with pull-up
  pinMode(switchPin, INPUT_PULLUP);
}

void loop() {
  // Read the switch state
  switchState = digitalRead(switchPin);

  // If the switch is pressed (LOW), turn the LED ON
  if (switchState == LOW) {
    digitalWrite(ledPin, HIGH);
  } else {
    // If the switch is not pressed (HIGH), turn the LED OFF
    digitalWrite(ledPin, LOW);
  }
}
```

### Practice Questions:

1.  **Question:** What is the purpose of a current-limiting resistor when interfacing an LED with a microcontroller?
    *   **Answer:** To protect the LED from damage due to excessive current flow from the microcontroller pin.
2.  **Question:** In the context of digital input, what does `INPUT_PULLUP` do on a microcontroller pin?
    *   **Answer:** It enables an internal resistor that pulls the pin's voltage to the HIGH state when no external connection is made.
3.  **Question:** If you connect a switch between a microcontroller pin and Ground, and configure the pin as `INPUT_PULLUP`, what value will `digitalRead()` return when the switch is pressed?
    *   **Answer:** `LOW`.
4.  **Question:** What is the primary function of the `setup()` function in an Arduino sketch?
    *   **Answer:** To perform initial configurations and setup operations that run only once at the start of the program.
5.  **Question:** Describe a scenario where debouncing a switch would be important.
    *   **Answer:** When the switch press needs to trigger a specific, single action, like incrementing a counter or toggling a state. Without debouncing, a single press might be interpreted as multiple presses, leading to incorrect behavior.

### Exercises:

1.  **Exercise:** Modify the combined code to make the LED blink only when the switch is held down. When the switch is released, the LED should be off.
    *   **Hint:** You'll need to move the `digitalWrite(ledPin, HIGH);` and `digitalWrite(ledPin, LOW);` inside the `if` and `else` blocks respectively, and potentially introduce a `delay()` within the `if` block if you want a steady light.
2.  **Exercise:** Connect two LEDs to different pins and two switches to different pins. Write a program where pressing switch 1 turns on LED 1, and pressing switch 2 turns on LED 2. Both LEDs should turn off when their respective switches are released.
    *   **Hint:** This will involve using multiple `pinMode` statements in `setup` and multiple `digitalRead`/`digitalWrite` pairs in `loop`.

## Referencing Textbooks and Course Outcomes

*   **Introduction to Robotics by S K Saha (2008):** While this book focuses on robotics, it often delves into microcontroller basics for robot control, which would cover actuator (LED) and sensor (switch) interfacing as fundamental building blocks.
*   **Sensors, Actuators, and their Interfaces: A multidisciplinary introduction by SciTech Publishing Inc (2011):** This book is highly relevant as it directly addresses the core concepts of sensors (like switches) and actuators (like LEDs) and how they interface with electronic systems, including microcontrollers.
*   **Beginning Arduino by Michael McRoberts (2011):** This is an excellent practical guide. The sample code provided in this module is heavily inspired by the style and simplicity found in Arduino programming. It directly supports learning how to implement basic I/O operations on a microcontroller.
*   **Embedded Systems: An Integrated Approach by Lyla B Das (2012):** This text provides the theoretical foundation for microcontrollers within the broader context of embedded systems. Understanding the architecture and peripherals discussed here is crucial for appreciating why certain code functions (`pinMode`, `digitalWrite`, `digitalRead`) are used.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Explaining the working of a switch as a digital sensor is covered when discussing switch interfacing.
*   **CO2 (K2):** Describing the operation of an LED as a basic actuator that responds to voltage signals is covered in LED interfacing.
*   **CO3 (K3):** Developing both the hardware (circuit connections) and software (code logic) for controlling an LED based on switch input directly fulfills this outcome.
*   **CO4 (K2):** Understanding how microcontrollers, LEDs, and switches form simple embedded systems provides a basic concept of embedded systems.

This module lays the groundwork for more complex intelligent systems by demonstrating how microcontrollers interact with the physical world through simple inputs and outputs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
