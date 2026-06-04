---
title: "Building intrusion detection system with Arduino and Ultrasonic sensor."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 16: Building intrusion detection system with Arduino and Ultrasonic sensor."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36511"
status: "completed"
scrapedAt: "2026-05-23T16:23:22.337Z"
---
# Microprocessors and Embedded Systems Lab - Module 16

## Topic: Building an Intrusion Detection System with Arduino and Ultrasonic Sensor

---

### 1. Introduction to Intrusion Detection Systems (IDS)

An Intrusion Detection System (IDS) is a security system that monitors network or system activities for malicious activities or policy violations and produces a report to manage the information. In the context of embedded systems, an IDS can be designed to detect unauthorized access or presence in a physical space.

**Key Concepts:**

*   **Intrusion:** An unauthorized access or presence in a protected area.
*   **Detection:** The process of identifying an intrusion.
*   **Sensor:** A device that detects physical stimuli and converts them into signals that can be interpreted by a microcontroller.
*   **Microcontroller:** A small computer on a single integrated circuit (IC) containing a processor core, memory, and programmable input/output peripherals.
*   **Actuator:** A device that performs an action based on signals from the microcontroller (e.g., an alarm buzzer).

**Relevance to Course Outcomes:**

*   **CO3 (Examine circuits for interfacing processor with various peripheral devices):** This module involves interfacing an Arduino (a microcontroller platform) with an ultrasonic sensor and an alarm, requiring an understanding of how these components communicate.
*   **CO4 (Design a microcontroller based system with the help of various interfacing devices):** While this specific module focuses on Arduino, the underlying principles of sensor interfacing and system design are transferable to 8051-based systems discussed in earlier modules.
*   **CO5 (Design an Arduino based system with the help of various interfacing devices):** This is directly addressed as we build an Arduino-based system.

---

### 2. Understanding the Ultrasonic Sensor

Ultrasonic sensors are non-contact distance measuring devices. They work by emitting ultrasonic sound waves and measuring the time it takes for these waves to bounce off an object and return to the sensor.

**Key Concepts:**

*   **Ultrasonic Waves:** Sound waves with frequencies above the upper limit of human hearing (typically > 20 kHz).
*   **Transmitter:** Emits the ultrasonic pulse.
*   **Receiver:** Detects the reflected ultrasonic pulse (echo).
*   **Time of Flight (TOF):** The time taken for the ultrasonic pulse to travel to the object and return.
*   **Speed of Sound:** The speed at which sound waves travel through a medium (approximately 343 meters per second or 34,300 cm/s in air at room temperature).

**Formula for Distance:**

Distance = (Speed of Sound × Time of Flight) / 2

*   We divide by 2 because the TOF is the time for the sound to travel to the object *and back*.

**Example Calculation:**

If the TOF is 2 milliseconds (0.002 seconds) and the speed of sound is 343 m/s:
Distance = (343 m/s * 0.002 s) / 2 = 0.686 m / 2 = 0.343 meters or 34.3 cm.

**Interfacing the Ultrasonic Sensor (e.g., HC-SR04):**

The HC-SR04 ultrasonic sensor typically has four pins:

*   **VCC:** Power supply (usually 5V).
*   **Trig (Trigger):** A digital pin on the Arduino that sends a short (10µs) high pulse to the sensor to initiate an ultrasonic burst.
*   **Echo:** A digital pin on the Arduino that receives the echo pulse from the sensor. The duration of this pulse is proportional to the time of flight.
*   **GND:** Ground.

**Textbook Reference:**

While the provided textbooks (Ayala, LylaB.Das, MacKenzie, Mazidi) primarily focus on the 8051 microcontroller, the principles of digital signal generation and measurement are fundamental and apply to any microcontroller. Understanding how to send a pulse (Trig) and measure the duration of a returned pulse (Echo) is a core concept in interfacing digital peripherals, akin to how the 8051 handles I/O ports for timing critical operations. The concept of "examining circuits" (CO3) is crucial here – understanding the pin functions and voltage levels of the ultrasonic sensor.

---

### 3. Understanding Arduino

Arduino is an open-source electronics platform based on easy-to-use hardware and software. It consists of a programmable circuit board (microcontroller) and a piece of software, called the Arduino IDE, used to write and upload computer code to the physical board.

**Key Concepts:**

*   **Arduino Board:** The physical microcontroller board (e.g., Arduino Uno, Nano).
*   **Arduino IDE (Integrated Development Environment):** Software used to write, compile, and upload code (sketches) to the Arduino board.
*   **Sketch:** The term for a program written for Arduino.
*   **Digital Pins:** Pins that can be configured as either input or output, operating at binary logic levels (HIGH or LOW, typically 5V or 0V on a 5V Arduino).
*   **Analog Pins:** Pins that can read analog signals (voltages) and convert them into digital values.
*   **`pinMode()`:** Function to configure a digital pin as an INPUT or OUTPUT.
*   **`digitalWrite()`:** Function to set a digital pin to HIGH or LOW.
*   **`digitalRead()`:** Function to read the state of a digital pin.
*   **`pulseIn()`:** A crucial function for timing. It measures the duration (in microseconds) of a pulse on a specified pin. It can measure a HIGH pulse or a LOW pulse.

**Reference to Course Outcomes:**

*   **CO5 (Design an Arduino based system with the help of various interfacing devices):** This module directly supports this outcome as we are designing a system using Arduino and its interfacing capabilities.

---

### 4. Building the Intrusion Detection System

**Objective:** To create a system that detects when an object enters a predefined detection zone (determined by the ultrasonic sensor) and triggers an alarm.

**Components Required:**

1.  **Arduino Board:** (e.g., Arduino Uno)
2.  **Ultrasonic Sensor Module:** (e.g., HC-SR04)
3.  **Buzzer:** A simple passive or active buzzer to act as an alarm.
4.  **Jumper Wires:** For making connections.
5.  **Power Supply:** For the Arduino board (USB or external adapter).

**Circuit Diagram (Conceptual):**

*   **Ultrasonic Sensor:**
    *   VCC -> Arduino 5V
    *   GND -> Arduino GND
    *   Trig -> Arduino Digital Pin (e.g., 9)
    *   Echo -> Arduino Digital Pin (e.g., 10)
*   **Buzzer:**
    *   Positive pin -> Arduino Digital Pin (e.g., 8)
    *   Negative pin -> Arduino GND

**Arduino Sketch (Program Logic):**

```cpp
/*
  Intrusion Detection System using Arduino and Ultrasonic Sensor

  This sketch uses an ultrasonic sensor to detect objects within a certain range
  and triggers a buzzer as an alarm if an object is detected.
*/

// Define the pins for the ultrasonic sensor
const int trigPin = 9;   // Trigger Pin
const int echoPin = 10;  // Echo Pin

// Define the pin for the buzzer
const int buzzerPin = 8; // Buzzer Pin

// Define the detection threshold distance (in cm)
// If an object is closer than this threshold, the alarm will trigger.
const int detectionThreshold = 20; // Example: 20 cm

void setup() {
  // Initialize serial communication for debugging
  Serial.begin(9600);

  // Configure the trigPin as an OUTPUT
  pinMode(trigPin, OUTPUT);
  // Configure the echoPin as an INPUT
  pinMode(echoPin, INPUT);
  // Configure the buzzerPin as an OUTPUT
  pinMode(buzzerPin, OUTPUT);

  Serial.println("Intrusion Detection System Initialized");
}

void loop() {
  // --- Step 1: Generate the ultrasonic pulse ---
  // Clear the trigPin by setting it to LOW for a few microseconds
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  // Set the trigPin to HIGH for 10 microseconds to send the ultrasonic pulse
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW); // Turn off the pulse

  // --- Step 2: Measure the duration of the echo pulse ---
  // The pulseIn function waits for the echoPin to go HIGH,
  // starts timing, and stops timing when the echoPin goes LOW.
  // It returns the duration of the HIGH pulse in microseconds.
  long duration = pulseIn(echoPin, HIGH);

  // --- Step 3: Calculate the distance ---
  // Speed of sound is 343 m/s = 0.0343 cm/µs
  // Distance = (duration * speed of sound) / 2
  // We divide by 2 because the pulse travels to the object and back.
  float distanceCm = duration * 0.0343 / 2;

  // --- Step 4: Print the distance to the Serial Monitor (for debugging) ---
  Serial.print("Distance: ");
  Serial.print(distanceCm);
  Serial.println(" cm");

  // --- Step 5: Check for intrusion and trigger alarm ---
  if (distanceCm > 0 && distanceCm < detectionThreshold) {
    // Intrusion detected! The object is within the detection range.
    Serial.println("INTRUSION DETECTED!");

    // Activate the buzzer
    digitalWrite(buzzerPin, HIGH); // Turn buzzer ON
    delay(500);                     // Keep buzzer ON for 500 milliseconds
    digitalWrite(buzzerPin, LOW);  // Turn buzzer OFF
    delay(500);                     // Wait before checking again
  } else {
    // No intrusion detected
    digitalWrite(buzzerPin, LOW); // Ensure buzzer is OFF
  }

  // --- Step 6: Add a delay before the next measurement ---
  // This prevents the sensor from detecting its own echo and provides
  // a sampling rate for the system.
  delay(100); // Measure every 100 milliseconds
}
```

**Explanation of the Code:**

1.  **Pin Definitions:** `trigPin`, `echoPin`, and `buzzerPin` are defined to map the sensor and buzzer to specific Arduino digital pins. `detectionThreshold` sets the range for triggering the alarm.
2.  **`setup()` Function:**
    *   `Serial.begin(9600);` starts serial communication to send data to the computer for monitoring.
    *   `pinMode()` configures the pins: `trigPin` and `buzzerPin` as `OUTPUT`, and `echoPin` as `INPUT`.
3.  **`loop()` Function:**
    *   **Pulse Generation:** A 10µs HIGH pulse is sent to `trigPin` to trigger the ultrasonic sensor. This is preceded and followed by LOW states to ensure a clean pulse.
    *   **Echo Measurement:** `pulseIn(echoPin, HIGH)` measures the duration of the HIGH pulse received on `echoPin`. This duration represents the time of flight.
    *   **Distance Calculation:** The formula `duration * 0.0343 / 2` converts the duration (in microseconds) into distance (in centimeters).
    *   **Serial Output:** The calculated distance is printed to the Serial Monitor for debugging and observation.
    *   **Intrusion Detection:** The `if` statement checks if the calculated `distanceCm` is within the `detectionThreshold`.
    *   **Alarm Trigger:** If an intrusion is detected, `digitalWrite(buzzerPin, HIGH)` turns the buzzer on for a short period, followed by a brief delay, creating an audible alert. If no intrusion is detected, the buzzer is ensured to be LOW (off).
    *   **Delay:** `delay(100);` introduces a pause between measurements, controlling the responsiveness and preventing rapid, unreliable readings.

**How it relates to Course Outcomes:**

*   **CO1 (Develop and execute ALP programs...):** While this is an Arduino C++ sketch, understanding the underlying principles of pulse generation and timing directly relates to how you would control I/O pins on an 8051 for similar timing-critical operations using Assembly Language. The concepts of bit manipulation and timing are common.
*   **CO2 (Develop embedded C programming using instruction sets of 8051):** The Arduino programming language is based on C/C++. The functions used (like `pinMode`, `digitalWrite`, `pulseIn`) abstract the low-level register manipulations that you would perform directly when programming the 8051 in C. Understanding these Arduino functions provides a higher-level perspective of what needs to be achieved at the register level for an 8051.
*   **CO3 (Examine circuits for interfacing processor with various peripheral devices):** This module requires examining the ultrasonic sensor and buzzer, understanding their pin functions, voltage requirements, and how they connect to the Arduino's digital pins. This directly fulfills the outcome.
*   **CO5 (Design an Arduino based system with the help of various interfacing devices):** This is the primary outcome addressed, as we are designing and building a functional system using Arduino, an ultrasonic sensor, and a buzzer.

---

### 5. Important Points to Remember

*   **Speed of Sound Variation:** The speed of sound can vary slightly with temperature and humidity. For precise applications, you might need to calibrate or account for these variations.
*   **Pulse Width for `pulseIn()`:** Ensure the `pulseIn()` function is configured to read the correct pulse state (HIGH in this case) and that your trigger pulse is long enough for the `pulseIn()` function to detect it reliably.
*   **Detection Zone Limitations:** The ultrasonic sensor has a conical detection beam. Objects outside this cone may not be detected. The effective range is also limited by the sensor's capabilities and the surrounding environment.
*   **False Positives/Negatives:** Environmental factors (e.g., soft surfaces that absorb sound, objects with irregular shapes) can lead to false readings.
*   **Buzzer Type:** Active buzzers produce a tone when voltage is applied. Passive buzzers require a PWM (Pulse Width Modulation) signal to produce a tone. The code assumes an active buzzer or that the Arduino's digital HIGH is sufficient to drive it. If using a passive buzzer, you might need `tone()` and `noTone()` functions.
*   **Power Consumption:** Consider the power requirements of the buzzer and sensor, especially if powering multiple components from the Arduino's 5V pin, which has a limited current capacity.

---

### 6. Practice Questions and Exercises

**Question 1:**

What is the primary principle of operation for an ultrasonic sensor in an intrusion detection system?

**Answer 1:**

Ultrasonic sensors work by emitting ultrasonic sound pulses and measuring the time it takes for the reflected sound waves (echoes) to return to the sensor. This "time of flight" is used to calculate the distance to an object.

**Question 2:**

If an ultrasonic sensor returns an echo pulse of 500 microseconds, and the speed of sound is 343 m/s, what is the distance to the object in centimeters?

**Answer 2:**

*   Convert speed of sound to cm/µs: 343 m/s = 34300 cm/s. Since there are 1,000,000 µs in a second, the speed of sound is 34300 cm/s / 1,000,000 µs/s = 0.0343 cm/µs.
*   Distance = (duration × speed of sound) / 2
*   Distance = (500 µs × 0.0343 cm/µs) / 2
*   Distance = 17.15 cm / 2
*   Distance = 8.575 cm

**Question 3:**

In the provided Arduino sketch, what is the purpose of `delayMicroseconds(10);` after `digitalWrite(trigPin, HIGH);`?

**Answer 3:**

This line sends a HIGH pulse of 10 microseconds to the `trigPin`. This specific pulse width is the standard requirement for the HC-SR04 ultrasonic sensor to trigger an ultrasonic burst.

**Question 4 (Design Exercise):**

Modify the provided Arduino sketch to:
a) Change the detection threshold to 30 cm.
b) Make the buzzer sound continuously as long as an intrusion is detected (instead of beeping).
c) Add a second ultrasonic sensor and a second buzzer. Connect the first sensor to pins 9 and 10, the second sensor to pins 5 and 6, and the buzzers to pins 8 and 7 respectively. The system should trigger the respective buzzer if an object is detected by its corresponding sensor within 30 cm.

**Answer 4 (Conceptual Outline):**

a) Change `const int detectionThreshold = 20;` to `const int detectionThreshold = 30;`.
b) Remove the `delay(500); digitalWrite(buzzerPin, LOW); delay(500);` lines inside the `if` block and simply keep `digitalWrite(buzzerPin, HIGH);` when an intrusion is detected. Ensure `digitalWrite(buzzerPin, LOW);` is in the `else` block.
c) You would need to:
    *   Define new pins for the second sensor (`trigPin2`, `echoPin2`) and second buzzer (`buzzerPin2`).
    *   Configure these new pins in `setup()`.
    *   Duplicate the pulse generation and distance calculation logic for the second sensor within the `loop()`.
    *   Add a separate `if` statement to check the distance from the second sensor and control the second buzzer.

---

### 7. Connecting to 8051 (Transferable Concepts)

While this module uses Arduino, the fundamental concepts of interfacing with sensors are directly applicable to the 8051 microcontroller, as discussed in the textbooks:

*   **Ayala's "The 8051 Microcontroller":** Chapter 7 (I/O Port Programming) and subsequent chapters on interfacing with peripherals like LCDs and sensors provide the foundation. To implement an ultrasonic system with an 8051, you would:
    *   **Trig Pin:** Use an 8051 output pin to generate a timed HIGH pulse (e.g., using assembly instructions or C code with delays).
    *   **Echo Pin:** Use an 8051 input pin. You would need to detect the rising edge of the echo signal and then use a timer to measure the duration until the falling edge. This is analogous to `pulseIn()` but requires manual timer control.
    *   **Buzzer:** Use another 8051 output pin to drive the buzzer.
*   **LylaB.Das's "Microprocessors and Microcontrollers":** Similarly, chapters on I/O ports, timers, and interfacing would be relevant. The challenge with the 8051 is the more direct handling of timers and interrupt-driven input capture for measuring pulse durations, which is more complex than Arduino's `pulseIn()`.
*   **Mazidi's "The 8051 microcontroller and embedded systems":** This book offers extensive details on 8051 programming, including timer functions and interrupt handling, which are crucial for implementing accurate timing measurements for the ultrasonic sensor.

**Knowledge Level Alignment:**

*   **CO1 (K3):** Understanding how to generate timed pulses and measure pulse durations for the ultrasonic sensor requires applying knowledge of microcontroller timing operations.
*   **CO2 (K3):** Writing the Arduino sketch involves embedded C programming concepts that are foundational for 8051 C programming.
*   **CO3 (K4):** Examining the circuit connections, understanding pin configurations, and signal types (digital, HIGH/LOW pulses) involves analyzing the interface between the microcontroller and peripherals.
*   **CO4 (K6):** Designing an 8051-based system would involve similar steps: selecting appropriate I/O pins, using timers for pulse measurement, and controlling output devices.
*   **CO5 (K6):** The entire module directly supports this outcome by building a functional Arduino-based system.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
