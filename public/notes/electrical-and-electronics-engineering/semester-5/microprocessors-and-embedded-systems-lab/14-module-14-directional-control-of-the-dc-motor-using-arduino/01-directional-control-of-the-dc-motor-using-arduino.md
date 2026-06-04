---
title: "Directional control of the DC motor using Arduino."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 14: Directional control of the DC motor using Arduino."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3650d"
status: "completed"
scrapedAt: "2026-05-23T16:23:20.858Z"
---
# Microprocessors and Embedded Systems Lab

## Module 14: Directional Control of the DC Motor Using Arduino

### Topic: Directional Control of the DC Motor Using Arduino

---

### 1. Introduction to DC Motors and Directional Control

**Key Concepts:**

*   **DC Motor:** An electric motor that converts direct current electrical energy into mechanical energy. The most common form produces torque by the interaction of a magnetic field and a winding.
*   **Directional Control:** The ability to change the direction of rotation of a DC motor. This is essential for applications requiring movement in both forward and reverse.

**How DC Motors Work (Briefly):**

*   A DC motor has a stator (stationary part) and a rotor (rotating part).
*   The stator typically contains permanent magnets or electromagnets that create a magnetic field.
*   The rotor contains coils of wire (windings) that are energized by an electrical current.
*   The interaction between the magnetic field of the stator and the magnetic field produced by the current in the rotor windings generates torque, causing the rotor to spin.
*   The direction of rotation is determined by the polarity of the current supplied to the rotor windings.

**Why Direct Control is Challenging with Arduino:**

*   **Current Requirements:** DC motors, especially those used in robotics and larger applications, often require more current than an Arduino digital output pin can safely provide. Directly connecting a DC motor to an Arduino pin can damage the Arduino.
*   **Voltage Requirements:** DC motors may operate at different voltages than the Arduino's 5V logic.

**Solution: Motor Driver ICs**

To overcome these limitations, we use motor driver Integrated Circuits (ICs). These ICs act as an interface between the low-power signals from the Arduino and the high-power requirements of the DC motor. They also provide the circuitry needed for directional control.

---

### 2. Essential Components for Directional Control

**Hardware:**

*   **Arduino Board:** The microcontroller platform (e.g., Arduino Uno, Nano).
*   **DC Motor:** The motor to be controlled.
*   **Motor Driver IC:** This is the crucial component. Common choices include:
    *   **L293D:** A dual H-bridge IC that can control two DC motors independently. It can also handle the directional control and basic speed control (though not PWM in this basic setup).
    *   **L298N Module:** A more robust module often built around the L298N IC, which can control two DC motors with higher current capabilities. It typically includes an onboard voltage regulator and screw terminals for easy connections.
    *   **DRV8825, TB6612FNG:** Other popular motor driver ICs offering different features and current capabilities.
*   **Power Supply:** A separate power supply for the DC motor (e.g., batteries, DC adapter) if its voltage or current requirements exceed what the Arduino can provide.
*   **Jumper Wires:** For making connections between the Arduino, motor driver, motor, and power supply.
*   **Optional:**
    *   **Breadboard:** For prototyping connections.
    *   **Capacitors:** Often recommended to be placed across the motor terminals to reduce electrical noise.

**Software:**

*   **Arduino IDE:** The integrated development environment for writing and uploading code to the Arduino.

---

### 3. Understanding the H-Bridge Circuit

**Key Concept:**

*   **H-Bridge:** A fundamental electronic circuit configuration that allows a voltage to be applied across a load in either direction. It's named after the typical shape of the circuit diagram, resembling the letter 'H'.

**How an H-Bridge Works for DC Motor Control:**

An H-bridge uses four switches (typically transistors like BJTs or MOSFETs). By controlling which switches are open and closed, we can control the direction of current flow through the DC motor.

*   **Forward Rotation:**
    *   Close switches S1 and S4. Current flows from the positive supply, through S1, the motor, S4, and to the ground.
*   **Reverse Rotation:**
    *   Close switches S2 and S3. Current flows from the positive supply, through S2, the motor (in the opposite direction), S3, and to the ground.
*   **Braking (Short Circuiting):**
    *   Close switches S1 and S2 (or S3 and S4). This effectively shorts the motor terminals, causing it to brake due to the back EMF generated.
*   **Coast (Freewheeling):**
    *   Open all switches. The motor will coast to a stop.

**L293D as an Example H-Bridge:**

The L293D is a common dual H-bridge IC. Each half of the L293D can control one DC motor.

*   **Inputs:** It has control pins to dictate the direction of rotation. Typically, two input pins per motor are used.
*   **Outputs:** It has output pins connected to the motor terminals.
*   **Enable Pins:** These pins control whether the motor driver is active or disabled. They are often used for speed control via Pulse Width Modulation (PWM).

---

### 4. Interfacing the DC Motor with Arduino via L293D (Example)

**Connecting the Components:**

Let's assume we are using an Arduino Uno and an L293D IC to control one DC motor.

**Pin Connections (Example using L293D):**

*   **L293D Pinout:** (Refer to L293D datasheet for exact pin numbers)
    *   **Motor A Outputs:** Pins 2 and 7 (connect to one motor)
    *   **Motor B Outputs:** Pins 15 and 10 (connect to another motor if using both halves)
    *   **Motor A Inputs (Direction Control):** Pins 1 and 2 (e.g., connect to Arduino digital pins 7 and 8)
    *   **Motor B Inputs (Direction Control):** Pins 14 and 13 (e.g., connect to Arduino digital pins 9 and 10)
    *   **Motor A Enable:** Pin 9 (connect to an Arduino PWM pin, e.g., pin 5 for speed control, or a digital pin for ON/OFF)
    *   **Motor B Enable:** Pin 12 (connect to an Arduino PWM pin, e.g., pin 6)
    *   **Power Supply (Vcc1):** Pin 16 (connect to Arduino 5V)
    *   **Ground (GND):** Pins 4, 5, 12, 13 (connect to Arduino GND)
    *   **Motor Power Supply (Vcc2):** Pin 8 (connect to the positive terminal of your motor power supply)
    *   **Motor Power Ground:** Pin 9 (connect to the negative terminal of your motor power supply) - **Important Note:** Pin 9 is Enable A for L293D. The actual motor power ground is usually connected to the common ground pins (4, 5, 12, 13). *Always verify the datasheet.*

*   **DC Motor:** Connect the two terminals of the DC motor to the L293D's Motor A Outputs (Pins 2 and 7).
*   **Motor Power Supply:**
    *   Connect the positive terminal of the motor power supply to the Vcc2 pin of the L293D.
    *   Connect the negative terminal of the motor power supply to the Arduino's GND.

**Diagrammatic Representation:**

```
                      +-------+
                      |       |
 Arduino 5V ----> Vcc1| 16    |
                      |       |
 Arduino GND ----> GND| 4,5,12|
                      |  13   |
                      +-------+
                         |
                         |
                      L293D IC
                         |
      Arduino Pin 7 ---> IN1 | 2   OUT1 | 3 ----> Motor Terminal 1
                         |         |
      Arduino Pin 8 ---> IN2 | 1   OUT2 | 6 ----> Motor Terminal 2
                         |         |
      Arduino Pin 5 ---> EN1 | 9       | 10 -- Motor B OUT1
                         |         |
Motor Supply (+) ----> Vcc2| 8       | 11 -- Motor B OUT2
                         |         |
Motor Supply (-) ----> GND | 12 (Also connected to Arduino GND)
                         |
      Arduino Pin 6 ---> EN2 | 15      | 14 -- Motor B IN2
                         |         |
                         +---------+
```
*Self-correction: The above diagram has a slight confusion with EN1 and Vcc2 pins. For L293D: Pin 8 is Vcc2, Pin 9 is Enable 1. Pin 12 and 13 are Ground, Pin 15 is Enable 2, Pin 16 is Vcc1. Let's correct the connections and example code.*

**Revised Pin Connections (L293D with Arduino Uno):**

*   **L293D Pins:**
    *   `VCC1` (Pin 16): Connect to Arduino `5V`.
    *   `GND` (Pins 4, 5, 12, 13): Connect all to Arduino `GND`.
    *   `VCC2` (Pin 8): Connect to the positive terminal of your motor power supply (e.g., 6V or 12V battery).
    *   `OUT1` (Pin 3): Connect to one terminal of the DC motor.
    *   `OUT2` (Pin 6): Connect to the other terminal of the DC motor.
    *   `IN1` (Pin 2): Connect to Arduino Digital Pin `7`.
    *   `IN2` (Pin 7): Connect to Arduino Digital Pin `8`.
    *   `EN1` (Pin 9): Connect to Arduino Digital PWM Pin `5`. (For speed control if needed, otherwise connect to 5V for full speed).

**Arduino Sketch (`.ino` file):**

```c++
// Define the pins connected to the L293D for one motor
const int motorPinIN1 = 7;  // Input 1 for direction control
const int motorPinIN2 = 8;  // Input 2 for direction control
const int motorPinEnable = 5; // Enable pin for speed control (PWM)

void setup() {
  // Set the motor control pins as OUTPUT
  pinMode(motorPinIN1, OUTPUT);
  pinMode(motorPinIN2, OUTPUT);
  pinMode(motorPinEnable, OUTPUT);

  // Start with the motor stopped
  stopMotor();

  Serial.begin(9600); // Initialize serial communication for debugging
  Serial.println("DC Motor Direction Control Ready");
}

void loop() {
  // Example sequence:
  Serial.println("Moving Forward");
  moveForward(200); // Move forward at 200/255 speed
  delay(2000);     // Run for 2 seconds

  Serial.println("Stopping");
  stopMotor();
  delay(1000);     // Stop for 1 second

  Serial.println("Moving Backward");
  moveBackward(150); // Move backward at 150/255 speed
  delay(2000);      // Run for 2 seconds

  Serial.println("Stopping");
  stopMotor();
  delay(1000);      // Stop for 1 second
}

// Function to move the motor forward
void moveForward(int speed) {
  // Set direction: IN1 HIGH, IN2 LOW
  digitalWrite(motorPinIN1, HIGH);
  digitalWrite(motorPinIN2, LOW);
  // Set speed (0-255)
  analogWrite(motorPinEnable, speed);
}

// Function to move the motor backward
void moveBackward(int speed) {
  // Set direction: IN1 LOW, IN2 HIGH
  digitalWrite(motorPinIN1, LOW);
  digitalWrite(motorPinIN2, HIGH);
  // Set speed (0-255)
  analogWrite(motorPinEnable, speed);
}

// Function to stop the motor (brake)
void stopMotor() {
  // Set direction: IN1 LOW, IN2 LOW (or HIGH, HIGH for braking)
  digitalWrite(motorPinIN1, LOW);
  digitalWrite(motorPinIN2, LOW);
  // Turn off the motor driver by setting enable pin to 0
  analogWrite(motorPinEnable, 0);
}
```

**Explanation of the Code:**

*   **Pin Definitions:** Assigns meaningful names to the Arduino pins connected to the L293D's control and enable pins.
*   **`setup()` function:**
    *   Configures the motor control pins as `OUTPUT`.
    *   Calls `stopMotor()` to ensure the motor is off when the program starts.
    *   Initializes serial communication for monitoring.
*   **`loop()` function:**
    *   Demonstrates a sequence of forward movement, stopping, and backward movement with specified delays.
*   **`moveForward(int speed)` function:**
    *   Sets `motorPinIN1` to `HIGH` and `motorPinIN2` to `LOW`. This establishes the current flow for forward rotation.
    *   Uses `analogWrite(motorPinEnable, speed)` to control the motor speed. `analogWrite` on a PWM pin outputs a varying duty cycle, controlling the effective voltage to the motor. A `speed` value of 255 means full voltage, while 0 means no voltage.
*   **`moveBackward(int speed)` function:**
    *   Sets `motorPinIN1` to `LOW` and `motorPinIN2` to `HIGH`. This reverses the current flow.
    *   Sets the speed using `analogWrite`.
*   **`stopMotor()` function:**
    *   Sets both `motorPinIN1` and `motorPinIN2` to `LOW`. This effectively stops the motor by cutting off current. For braking, you would set both to `HIGH`.
    *   Sets the `motorPinEnable` to `0` to disable the motor driver output.

---

### 5. Using L298N Module for Enhanced Control

**Advantages of L298N Module:**

*   **Higher Current:** Typically rated for up to 2A per channel, suitable for more powerful DC motors.
*   **Onboard Voltage Regulator:** Often includes a 5V regulator, allowing you to power the Arduino from the module's supply.
*   **Easier Connections:** Usually comes with screw terminals for motor and power connections, simplifying wiring.
*   **Heat Sink:** Better heat dissipation for the L298N IC.

**Typical Pin Connections (L298N Module):**

*   **Motor Power Input:** Connect your external motor power supply (e.g., 6-12V) to `+12V` and `GND` terminals.
*   **Motor Outputs:** Connect the DC motor terminals to `OUT1` and `OUT2`.
*   **Enable Pins (ENA, ENB):** Connect to Arduino PWM pins for speed control. If you want full speed, you can use the onboard jumpers to connect them to 5V.
*   **Input Pins (IN1, IN2, IN3, IN4):**
    *   `IN1` and `IN2` control Motor A. Connect to Arduino digital pins (e.g., 7 and 8).
    *   `IN3` and `IN4` control Motor B. Connect to Arduino digital pins (e.g., 9 and 10).
*   **5V Terminal:** If the onboard regulator is enabled (via jumper), this can be used to power the Arduino.

**Arduino Sketch (for L298N controlling one motor):**

The code structure is very similar to the L293D example, but pin assignments will change.

```c++
// Define the pins connected to the L298N module for one motor
const int motorPinIN1 = 7;  // Input 1 for direction control
const int motorPinIN2 = 8;  // Input 2 for direction control
const int motorPinEnable = 5; // Enable pin for speed control (PWM) - often labeled ENA or ENB

void setup() {
  // Set the motor control pins as OUTPUT
  pinMode(motorPinIN1, OUTPUT);
  pinMode(motorPinIN2, OUTPUT);
  pinMode(motorPinEnable, OUTPUT);

  // Start with the motor stopped
  stopMotor();

  Serial.begin(9600);
  Serial.println("L298N DC Motor Direction Control Ready");
}

void loop() {
  Serial.println("Moving Forward");
  moveForward(200); // Move forward at 200/255 speed
  delay(2000);

  Serial.println("Stopping");
  stopMotor();
  delay(1000);

  Serial.println("Moving Backward");
  moveBackward(150); // Move backward at 150/255 speed
  delay(2000);

  Serial.println("Stopping");
  stopMotor();
  delay(1000);
}

void moveForward(int speed) {
  digitalWrite(motorPinIN1, HIGH);
  digitalWrite(motorPinIN2, LOW);
  analogWrite(motorPinEnable, speed);
}

void moveBackward(int speed) {
  digitalWrite(motorPinIN1, LOW);
  digitalWrite(motorPinIN2, HIGH);
  analogWrite(motorPinEnable, speed);
}

void stopMotor() {
  digitalWrite(motorPinIN1, LOW);
  digitalWrite(motorPinIN2, LOW);
  analogWrite(motorPinEnable, 0);
}
```

---

### 6. Practicing Directional Control: Exercises and Solutions

**Exercise 1:**

Write an Arduino sketch to make a DC motor connected to an L293D module rotate clockwise for 3 seconds, then stop for 1 second, then rotate counter-clockwise for 3 seconds, and repeat. Assume motor connections as in Section 4.

**Solution 1:**

```c++
// Define the pins connected to the L293D for one motor
const int motorPinIN1 = 7;
const int motorPinIN2 = 8;
const int motorPinEnable = 5;

void setup() {
  pinMode(motorPinIN1, OUTPUT);
  pinMode(motorPinIN2, OUTPUT);
  pinMode(motorPinEnable, OUTPUT);
  stopMotor(); // Ensure motor is off at start
}

void loop() {
  // Clockwise rotation for 3 seconds (using full speed)
  digitalWrite(motorPinIN1, HIGH);
  digitalWrite(motorPinIN2, LOW);
  analogWrite(motorPinEnable, 255); // Full speed
  delay(3000);

  // Stop for 1 second
  stopMotor();
  delay(1000);

  // Counter-clockwise rotation for 3 seconds (using full speed)
  digitalWrite(motorPinIN1, LOW);
  digitalWrite(motorPinIN2, HIGH);
  analogWrite(motorPinEnable, 255); // Full speed
  delay(3000);

  // Stop for 1 second
  stopMotor();
  delay(1000);
}

void stopMotor() {
  digitalWrite(motorPinIN1, LOW);
  digitalWrite(motorPinIN2, LOW);
  analogWrite(motorPinEnable, 0);
}
```

**Exercise 2:**

Modify the sketch from Exercise 1 to control the speed. Make the motor rotate clockwise at half speed (50%) for 3 seconds, stop for 1 second, then rotate counter-clockwise at quarter speed (25%) for 3 seconds, and repeat.

**Solution 2:**

```c++
// Define the pins connected to the L293D for one motor
const int motorPinIN1 = 7;
const int motorPinIN2 = 8;
const int motorPinEnable = 5;

void setup() {
  pinMode(motorPinIN1, OUTPUT);
  pinMode(motorPinIN2, OUTPUT);
  pinMode(motorPinEnable, OUTPUT);
  stopMotor();
}

void loop() {
  // Clockwise rotation at half speed (50%)
  digitalWrite(motorPinIN1, HIGH);
  digitalWrite(motorPinIN2, LOW);
  analogWrite(motorPinEnable, 127); // Half speed (255 / 2 ≈ 127)
  delay(3000);

  // Stop for 1 second
  stopMotor();
  delay(1000);

  // Counter-clockwise rotation at quarter speed (25%)
  digitalWrite(motorPinIN1, LOW);
  digitalWrite(motorPinIN2, HIGH);
  analogWrite(motorPinEnable, 64); // Quarter speed (255 / 4 ≈ 64)
  delay(3000);

  // Stop for 1 second
  stopMotor();
  delay(1000);
}

void stopMotor() {
  digitalWrite(motorPinIN1, LOW);
  digitalWrite(motorPinIN2, LOW);
  analogWrite(motorPinEnable, 0);
}
```

---

### 7. Important Points to Remember

*   **Motor Power Supply:** Always use a separate power supply for the DC motor if it requires voltage or current beyond what the Arduino can provide.
*   **Common Ground:** Ensure that the ground of the motor power supply is connected to the Arduino's ground. This is crucial for proper signal reference.
*   **Motor Driver ICs:** Never connect a DC motor directly to Arduino output pins. Always use a motor driver IC or module.
*   **L293D/L298N Datasheets:** Refer to the datasheets for correct pinouts and operating specifications. Pin assignments can sometimes vary slightly between manufacturers or breakout boards.
*   **PWM for Speed Control:** Utilize PWM-capable pins on the Arduino (marked with a '~') to control the speed of the DC motor using `analogWrite()`.
*   **Braking:** To brake the motor, you typically set both motor input pins to HIGH (or LOW depending on the driver). This shorts the motor terminals and dissipates energy.
*   **Current Limits:** Be mindful of the maximum current each motor driver channel can handle to avoid damaging the IC.

---

### 8. Relevance to Course Outcomes (COs)

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)**
    *   While this module focuses on Arduino C++, understanding the underlying logic of motor control (e.g., setting bits for direction) is a foundational concept that relates to controlling peripherals, a core task often done with ALP. The logical operations (HIGH/LOW) to control direction are akin to bit manipulation.

*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)**
    *   This module directly addresses embedded C programming on the Arduino platform, which shares many similarities in structure and concepts with 8051 embedded C programming. The use of `pinMode`, `digitalWrite`, and `analogWrite` are direct applications of embedded C for peripheral control.

*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)**
    *   This module involves examining and understanding the circuit required to interface the Arduino processor with a DC motor using a motor driver IC (L293D or L298N). This involves understanding how the IC acts as an intermediary.

*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)**
    *   Designing a system that controls a DC motor's direction and speed is a direct application of this CO. You are designing how the microcontroller (Arduino) interacts with the motor through a dedicated interface (motor driver).

*   **CO5: Design an Arduino based system with the help of various interfacing devices (Knowledge Level: K6)**
    *   This module is a prime example of designing an Arduino-based system to control a common actuator (DC motor), demonstrating the practical application of Arduino for embedded system design.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References from Textbooks and Reference Books

While the provided textbooks (Ayala, LylaB.Das) and reference books (MacKenzie, Mazidi) primarily focus on the 8051 microcontroller, the fundamental concepts of interfacing and controlling peripherals are transferable.

*   **From Ayala's "The 8051 Microcontroller":** Chapters discussing I/O port programming, interfacing with external devices, and motor control (if covered) would highlight the principles of sending control signals from a microcontroller to external hardware. The concept of using driver circuits to handle higher current loads is universal.
*   **From LylaB.Das's "Microprocessors and Microcontrollers":** Similar to Ayala, sections on peripheral interfacing, digital logic, and I/O operations are relevant. The understanding of how a microcontroller orchestrates actions by controlling output pins is key.
*   **From Mazidi's "The 8051 microcontroller and embedded systems":** This book is likely to have more in-depth coverage of interfacing. Concepts like using external components to extend the capabilities of the microcontroller (like motor drivers) and understanding the timing and logic of control signals will be emphasized.

**Key Takeaway from Textbooks:** The core principle remains the same: the microcontroller generates specific signals (HIGH/LOW, PWM) on its output pins to control external hardware. The challenge lies in using appropriate interface circuits (like motor drivers) to match the microcontroller's low-power signals to the external device's requirements. The Arduino's higher-level libraries abstract some of this, but the underlying principles are derived from microcontroller interfacing fundamentals.

---