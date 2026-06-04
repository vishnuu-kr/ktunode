---
title: "C program for stepper motor control."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 5: C program for stepper motor control."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364f5"
status: "completed"
scrapedAt: "2026-05-23T16:23:09.643Z"
---
# Microprocessors and Embedded Systems Lab: Module 5 - C Program for Stepper Motor Control

## Topic: C Program for Stepper Motor Control

This module focuses on understanding and implementing C programs for controlling a stepper motor using a microcontroller, specifically the 8051 family, as is common in Microprocessors and Embedded Systems labs.

### Learning Outcomes:

Upon successful completion of this module, students will be able to:

*   Understand the working principle of stepper motors.
*   Identify the different types of stepper motors and their characteristics.
*   Explain the sequence of operations required to drive a stepper motor.
*   Develop C programs to control the direction and speed of a stepper motor.
*   Interface a stepper motor with the 8051 microcontroller.
*   Analyze the timing requirements for stepper motor control.

### 1. Introduction to Stepper Motors

Stepper motors are brushless DC electric motors that divide a full rotation into a number of equal steps. The motor has an internal rotor with permanent magnets or is made of ferromagnetic material, and the stator has electromagnets that are pulsed sequentially to rotate the rotor. This allows for precise control of angular position and velocity without the need for feedback sensors like encoders.

**Key Concepts:**

*   **Step Angle:** The angle the rotor moves for each step. It is determined by the number of stator poles and rotor poles.
    *   *Formula:* Step Angle = 360° / (Number of Motor Steps per Revolution)
*   **Steps per Revolution:** The total number of steps required for the motor to complete one full rotation.
*   **Holding Torque:** The torque that the motor can withstand when it is de-energized and stationary.
*   **Pull-in Torque:** The maximum torque at which the motor can start and accelerate without losing steps.
*   **Pull-out Torque:** The maximum torque at which the motor can operate at its rated stepping rate without losing steps.
*   **Slew Rate:** The maximum stepping rate at which the motor can operate without losing steps.

**Types of Stepper Motors:**

*   **Permanent Magnet (PM) Stepper Motors:** The rotor is made of permanent magnets. They are relatively inexpensive and offer good torque.
    *   *Referenced in:* **The 8051 microcontroller by Kenneth Ayala** likely discusses basic motor control principles, which would include PM motors.
*   **Variable Reluctance (VR) Stepper Motors:** The rotor is made of soft iron and has no permanent magnets. They are simpler in construction but generally offer lower torque and are more prone to vibration.
*   **Hybrid Stepper Motors:** Combines features of both PM and VR motors. The rotor has permanent magnets and also has teeth on its periphery. These motors offer a good balance of torque, speed, and step resolution, making them the most common type for microcontroller applications.
    *   *Likely covered in:* **Microprocessors and Microcontrollers by R. LylaB.Das** and **The 8051 microcontroller and embedded systems by Muhammad Ali Mazidi** would provide in-depth coverage of hybrid stepper motor operation and interfacing.

### 2. Stepper Motor Drive Techniques

Stepper motors require a specific sequence of energizing stator coils to achieve rotation. The way these coils are energized determines the stepping mode and the motor's performance.

**Coil Energizing Sequences:**

*   **Wave Drive (1-phase on):** Only one coil is energized at a time. This provides the lowest torque and highest step resolution.
    *   *Sequence Example:* A-B-C-D (where A, B, C, D represent distinct coils or phases).
*   **Two-phase on (Full Step):** Two adjacent coils are energized simultaneously. This provides higher torque compared to wave drive.
    *   *Sequence Example:* AB-BC-CD-DA
*   **Half Step Drive:** Alternates between one-phase on and two-phase on. This doubles the step resolution and provides smoother operation but with slightly lower torque in the one-phase on steps.
    *   *Sequence Example:* A-AB-B-BC-C-CD-D-DA

**Important Point:** The order of energizing the coils determines the direction of rotation. Reversing the sequence reverses the direction.

### 3. Interfacing Stepper Motor with 8051 Microcontroller

Controlling a stepper motor directly from microcontroller pins is not possible due to the higher current and voltage requirements of the motor windings. A driver circuit is necessary.

**Driver Circuit Components:**

*   **Driver ICs:** Commonly used driver ICs for stepper motors include:
    *   **ULN2003A:** A Darlington transistor array that can sink current, making it suitable for driving common cathode stepper motors.
    *   **L293D/L298N:** Motor driver ICs that can drive stepper motors in both directions and can handle higher currents. L298N is often used for higher power stepper motors.
    *   *Referenced in:* **The 8051 microcontroller by Kenneth Ayala** and **The 8051 microcontroller and embedded systems by Muhammad Ali Mazidi** will likely have sections on interfacing motor drivers. **Microprocessors and Microcontrollers by R. LylaB.Das** will also cover these interfacing concepts.
*   **Transistors (e.g., BJT or MOSFET):** Can be used as switches to control the current to the motor windings, especially if a dedicated driver IC is not used or for specific power requirements.
*   **Flyback Diodes:** Essential to protect the microcontroller and driver circuitry from voltage spikes generated when the motor coils are switched off. These diodes are typically placed in reverse parallel across each coil.

**Interfacing Diagram (Conceptual):**

```
+-----------------+      +-----------------+      +-----------------+
|                 |      |                 |      |                 |
|  8051          |      |  Driver IC      |      |  Stepper Motor  |
|  Microcontroller|----->|  (e.g., ULN2003A,|----->|  (Coils A, B, C, D)|
|                 |      |  L298N)         |      |                 |
+-----------------+      +-----------------+      +-----------------+
        ^                                                  |
        |                                                  | (Power Supply)
        +--------------------------------------------------+
```

**Explanation of Interfacing:**

*   The microcontroller's I/O pins are connected to the input pins of the driver IC.
*   The output pins of the driver IC are connected to the respective coils of the stepper motor.
*   The driver IC is powered by an external power supply, which can be higher than the microcontroller's supply voltage.
*   The microcontroller sends specific sequences of digital signals to the driver IC's inputs to control the energizing of the motor coils.

**Course Outcome Alignment:**

*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)** - This section directly addresses the examination of circuits for interfacing the 8051 with a stepper motor via a driver.
*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)** - Understanding the driver circuit is crucial for designing a complete system that incorporates a stepper motor.

### 4. C Program for Stepper Motor Control (8051)

The C program will involve defining the pin assignments, creating functions for stepping in different modes and directions, and controlling the speed.

**Essential C Constructs:**

*   **`sbit` directive:** To define special function registers (SFRs) for I/O pins.
*   **Delay functions:** Crucial for controlling the stepping speed. `_nop_()` and loop-based delays are common.
*   **Arrays:** To store the stepping sequences.
*   **Functions:** For modularity and reusability (e.g., `stepForward()`, `stepBackward()`, `setSpeed()`).

**Example C Program Structure (using ULN2003A for a 4-phase stepper motor):**

```c
#include <reg51.h> // Or other appropriate 8051 header file

// Define pin assignments for the stepper motor driver inputs
sbit IN1 = P1^0;
sbit IN2 = P1^1;
sbit IN3 = P1^2;
sbit IN4 = P1^3;

// Stepping sequences (Full Step, Half Step)
// Refer to your specific stepper motor datasheet for the correct sequence.
// This is a common sequence for a 4-phase unipolar motor with a ULN2003A driver.

// Full Step Sequence (2 phases on)
unsigned char full_step_seq[] = {0x03, 0x06, 0x0C, 0x09}; // Example: 00000011, 00000110, 00001100, 00001001

// Half Step Sequence (1 phase on, then 2 phases on)
unsigned char half_step_seq[] = {0x01, 0x03, 0x02, 0x06, 0x04, 0x0C, 0x08, 0x09}; // Example: 00000001, 00000011, etc.

unsigned int delay_time = 1000; // Adjust this for desired speed (in microseconds or machine cycles)
unsigned char current_step = 0;

// Function to create a delay
void delay(unsigned int ms) {
    unsigned int i, j;
    for (i = 0; i < ms; i++) {
        for (j = 0; j < 1000; j++) { // Adjust inner loop for precise ms delay
            _nop_(); // Assembly instruction for no operation
        }
    }
}

// Function to move the stepper motor one step forward
void stepForward() {
    // Using Full Step as an example
    P1 = full_step_seq[current_step];
    delay(delay_time); // Delay determines speed
    current_step = (current_step + 1) % 4; // Move to the next step in the sequence
}

// Function to move the stepper motor one step backward
void stepBackward() {
    // Using Full Step as an example
    P1 = full_step_seq[current_step];
    delay(delay_time);
    current_step = (current_step - 1 + 4) % 4; // Move to the previous step (wrap around)
}

// Function to set the motor speed
void setSpeed(unsigned int speed_ms) {
    delay_time = speed_ms;
}

void main() {
    // Example: Rotate 90 degrees clockwise (assuming 200 steps/rev, 48 steps per 90 deg)
    // and then 180 degrees counter-clockwise.

    int i;
    unsigned int steps_90_deg = 48; // Example: Adjust based on your motor's steps/rev
    unsigned int steps_180_deg = 96; // Example

    // Set speed for slower rotation initially
    setSpeed(1000); // Slower speed

    // Rotate 90 degrees clockwise (full step)
    for (i = 0; i < steps_90_deg; i++) {
        P1 = full_step_seq[current_step];
        delay(delay_time);
        current_step = (current_step + 1) % 4;
    }

    // Add a longer delay to observe the position
    delay(500000); // Approximately 0.5 seconds

    // Set speed for faster rotation
    setSpeed(500); // Faster speed

    // Rotate 180 degrees counter-clockwise (full step)
    for (i = 0; i < steps_180_deg; i++) {
        P1 = full_step_seq[current_step];
        delay(delay_time);
        current_step = (current_step - 1 + 4) % 4;
    }

    // Stop the motor (all coils off)
    P1 = 0x00;

    while (1) {
        // The motor has completed its task. The program can idle or perform other tasks.
    }
}
```

**Explanation of the C Code:**

1.  **`#include <reg51.h>`:** Includes the header file for the 8051 microcontroller, providing access to SFRs.
2.  **`sbit IN1 = P1^0;` etc.:** Defines aliases for the microcontroller pins connected to the stepper motor driver inputs.
3.  **`full_step_seq[]` and `half_step_seq[]`:** Arrays store the digital patterns to be sent to the driver IC for each step. The specific values depend on the motor and driver.
4.  **`delay_time`:** A global variable to control the time between steps, thus controlling the motor speed. Smaller values mean faster speed.
5.  **`delay(unsigned int ms)`:** A simple delay function. For precise timing, one would typically use timer interrupts or more sophisticated delay calculations based on the microcontroller's clock frequency.
    *   *Referenced in:* **The 8051 microcontroller by Kenneth Ayala** and **The 8051 microcontroller and embedded systems by Muhammad Ali Mazidi** provide examples of delay routines.
6.  **`stepForward()` and `stepBackward()`:** Functions to control the stepping direction. They update the output port (`P1`) with the appropriate sequence value and then update the `current_step` index.
7.  **`setSpeed(unsigned int speed_ms)`:** A function to change the `delay_time`, thereby altering the motor speed.
8.  **`main()`:** Contains the main logic. It demonstrates how to call the stepping functions to achieve desired rotations. The example shows rotating clockwise and then counter-clockwise at different speeds.

**Course Outcome Alignment:**

*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)** - This module directly involves developing C programs for the 8051.
*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)** - The program is designed to work with the interfacing circuits discussed earlier.

**Important Point to Remember:** Always consult the datasheet of your specific stepper motor and driver IC for the correct stepping sequences and electrical specifications.

### 5. Controlling Stepper Motor Speed

The speed of the stepper motor is inversely proportional to the delay between steps.

*   **Faster Speed:** Shorter delay between steps.
*   **Slower Speed:** Longer delay between steps.

**How to Control Speed:**

*   **Varying the `delay_time`:** As shown in the `setSpeed()` function.
*   **Using Timers:** For more precise speed control and to free up the CPU for other tasks, timer interrupts can be used to generate the stepping pulses. This is a more advanced technique.
    *   *Referenced in:* **The 8051 microcontroller by Kenneth Ayala** and **The 8051 microcontroller and embedded systems by Muhammad Ali Mazidi** have dedicated chapters on timers in the 8051.

### 6. Practice Questions and Exercises

**Question 1:**

Explain the difference between Wave Drive and Full Step drive for a stepper motor in terms of torque and step resolution.

**Answer 1:**

*   **Wave Drive (1-phase on):**
    *   **Torque:** Lower torque compared to Full Step.
    *   **Step Resolution:** Higher (all steps are single-coil energization).
*   **Full Step Drive (2-phase on):**
    *   **Torque:** Higher torque compared to Wave Drive.
    *   **Step Resolution:** Lower (steps involve energizing two coils simultaneously).

**Question 2:**

What is the purpose of a flyback diode in a stepper motor control circuit?

**Answer 2:**

Flyback diodes (also known as freewheeling diodes) are used to provide a path for the inductive current in the motor windings when the coils are switched off. This prevents high voltage spikes (back EMF) from damaging the microcontroller or driver circuitry. They are placed in reverse parallel across each motor coil.

**Question 3:**

Write a C code snippet for the 8051 to rotate a stepper motor one step backward using the half-step sequence (assuming `P1` is used and the sequence is stored in `half_step_seq` and `current_step` is maintained).

**Answer 3:**

```c
// Assuming half_step_seq[] and current_step are defined as in the example above
// And delay(delay_time) is available.

void stepBackwardHalfStep() {
    // Ensure current_step is within bounds and the sequence is correctly defined
    current_step = (current_step - 1 + 8) % 8; // Move to the previous step (wrap around for 8 steps)
    P1 = half_step_seq[current_step];
    delay(delay_time);
}
```

**Question 4:**

How would you make a stepper motor rotate faster using the provided C code structure?

**Answer 4:**

To make the stepper motor rotate faster, you need to decrease the `delay_time` variable. A smaller `delay_time` means less time between switching coils, resulting in a higher stepping frequency and thus faster rotation.

**Question 5:**

Design a simple interfacing circuit for a 4-phase unipolar stepper motor using an 8051 microcontroller and the ULN2003A driver IC. Briefly describe the connections.

**Answer 5:**

**Circuit Description:**

1.  **Stepper Motor:** Connect the four coils (e.g., A, B, C, D) of the unipolar stepper motor to the output pins (e.g., OUT1, OUT2, OUT3, OUT4) of the ULN2003A IC.
2.  **ULN2003A:**
    *   Connect the common cathode of the ULN2003A (pin 9) to the negative terminal of the motor power supply.
    *   Connect the input pins (IN1, IN2, IN3, IN4) of the ULN2003A to four output pins of the 8051 microcontroller (e.g., P1.0, P1.1, P1.2, P1.3).
    *   The ULN2003A is powered by the motor power supply, usually 5V or 12V depending on the motor.
3.  **8051 Microcontroller:**
    *   Connect the VCC and GND pins of the 8051 to its respective power supply.
    *   Ensure the 8051's I/O pins connected to the ULN2003A are configured as outputs.

**Key Points to Remember:**

*   **Datasheets are Crucial:** Always refer to the datasheets for your specific stepper motor and driver IC for pinouts, stepping sequences, and electrical characteristics.
*   **Timing is Everything:** The delay between steps directly controls the motor's speed and its ability to avoid losing steps.
*   **Power Requirements:** Stepper motors often require more current than a microcontroller pin can directly supply. Driver circuits are essential.
*   **Direction Control:** The direction of rotation is determined by the sequence in which the coils are energized. Reversing the sequence reverses the direction.
*   **Microcontroller Clock:** The accuracy of your delay functions depends on the microcontroller's clock frequency and the optimization of your code.

This comprehensive set of notes covers the fundamental aspects of controlling a stepper motor with C programs on an 8051 microcontroller, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
