---
title: "Interfacing of the relay with Arduino."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 15: Interfacing of the relay with Arduino."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f3650f"
status: "completed"
scrapedAt: "2026-05-23T16:23:21.606Z"
---
# Microprocessors and Embedded Systems Lab

## Module 15: Interfacing of the Relay with Arduino

---

### Topic: Interfacing of the Relay with Arduino

This module focuses on understanding and implementing the interfacing of a relay module with an Arduino microcontroller. Relays are crucial components in embedded systems that allow a low-power microcontroller to control high-power devices.

---

### Learning Outcomes:

*   **Understand the fundamental working principle of a relay.**
*   **Identify the key components of a typical relay module.**
*   **Learn how to connect a relay module to an Arduino board.**
*   **Develop Arduino code (sketch) to control the state of the relay (ON/OFF).**
*   **Apply the learned concepts to control a high-power electrical appliance using the Arduino and relay.**

---

### Course Outcomes Alignment:

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)** - While this module focuses on Arduino (which uses C/C++), the fundamental concept of controlling external devices through logical states (HIGH/LOW) is analogous to ALP operations. Understanding how to translate a digital output to activate a relay is a form of logical problem-solving in hardware.
*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)** - Although the primary language here is Arduino's C/C++, the underlying principles of digital output control, pin manipulation, and timing are directly transferable from 8051 embedded C programming. Understanding how to set a pin HIGH or LOW to control a relay is a core embedded C concept.
*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)** - This module directly addresses examining and understanding the circuit for interfacing the Arduino (a processor-based microcontroller board) with a relay, a common peripheral device.
*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)** - This outcome is partially addressed by understanding the fundamental building blocks. While the specific focus is Arduino, the principles of interfacing a microcontroller to control a higher power load are the same as designing an 8051-based system.
*   **CO5: Design an Arduino based system with the help of various interfacing devices (Knowledge Level: K6)** - This is the primary outcome addressed by this module. We will be designing and implementing a system where an Arduino controls a device via a relay.

---

### Key Concepts and Definitions:

*   **Relay:** An electrically operated switch. It uses an electromagnet to operate a switch. A small voltage from the microcontroller can be used to control a much larger voltage or current.
    *   **Coil:** The electromagnet part of the relay. When current flows through the coil, it generates a magnetic field.
    *   **Armature:** A movable part that is attracted by the magnetic field of the coil.
    *   **Contacts:** The switch terminals. Relays have different types of contacts:
        *   **Common (COM):** The terminal that is connected to either Normally Open or Normally Closed.
        *   **Normally Open (NO):** The contact is open (no connection) when the relay is not energized. It closes when the relay is energized.
        *   **Normally Closed (NC):** The contact is closed (connected) when the relay is not energized. It opens when the relay is energized.
*   **Relay Module:** A pre-assembled circuit board that typically includes:
    *   A relay.
    *   A driving transistor (e.g., NPN transistor) to amplify the current from the Arduino to drive the relay coil.
    *   A flyback diode (also called a freewheeling diode or snubber diode) across the relay coil to protect the transistor from voltage spikes when the coil is de-energized.
    *   Indicator LEDs (e.g., for power and relay status).
    *   Input pins (e.g., IN, VCC, GND).
*   **Arduino:** An open-source electronics platform based on easy-to-use hardware and software. It's a microcontroller board that can be programmed to read inputs and control outputs.
*   **Digital Output Pins:** Pins on the Arduino that can be set to either HIGH (typically 5V or 3.3V) or LOW (0V).
*   **HIGH/LOW Signal:** Represents the voltage levels that control the relay. A HIGH signal from the Arduino usually energizes the relay, while a LOW signal de-energizes it.
*   **Load:** The device being controlled by the relay (e.g., a lamp, motor, fan).

---

### Working Principle of a Relay Module with Arduino:

1.  **Arduino Output:** The Arduino microcontroller sends a digital signal (HIGH or LOW) from one of its digital output pins to the input pin (often labeled `IN`) of the relay module.
2.  **Transistor Driver:** The relay module uses a transistor (e.g., an NPN transistor) as a switch. The input signal from the Arduino controls the base of this transistor.
    *   When the Arduino sends a **HIGH** signal, it turns the transistor ON. The transistor then acts as a closed switch, allowing current to flow from the relay module's power supply (VCC) through the relay coil and to ground.
    *   When the Arduino sends a **LOW** signal, it turns the transistor OFF. This stops the current flow through the relay coil.
3.  **Relay Coil Activation:** When current flows through the relay coil, it creates a magnetic field. This magnetic field attracts the armature.
4.  **Contact Switching:** The movement of the armature causes the relay contacts to change their state.
    *   If the relay is designed for active-HIGH control (most common), a HIGH signal from Arduino energizes the relay, closing the NO contact and opening the NC contact.
    *   If the relay is designed for active-LOW control, a LOW signal from Arduino energizes the relay.
5.  **Load Control:** The relay contacts are wired in series with the load (the high-power device). By switching the relay contacts, the flow of current to the load is controlled.
    *   When the relay contacts close the circuit to the load, the load turns ON.
    *   When the relay contacts open the circuit to the load, the load turns OFF.
6.  **Flyback Diode:** When the transistor turns OFF, the magnetic field in the coil collapses, inducing a high voltage spike (back EMF). The flyback diode provides a path for this induced current to flow and dissipate safely, preventing damage to the transistor.

---

### Hardware Setup:

**Components Required:**

*   Arduino Uno (or compatible board)
*   5V Single-channel Relay Module
*   Jumper Wires
*   A small DC load (e.g., an LED with a current-limiting resistor) or a mains-powered appliance (e.g., a table lamp) for demonstration.
    *   **IMPORTANT SAFETY NOTE:** When dealing with mains voltage (110V/220V AC), ensure you have proper knowledge and safety precautions. If you are unsure, stick to low-voltage DC loads or work under supervision.

**Connections:**

Connect the relay module to the Arduino as follows:

| Relay Module Pin | Arduino Pin | Description                               |
| :--------------- | :---------- | :---------------------------------------- |
| **VCC**          | 5V          | Power supply for the relay module.        |
| **GND**          | GND         | Ground connection for the relay module.   |
| **IN (or SIG)**  | Digital Pin (e.g., D7) | Signal input from Arduino to control the relay. |

**Connecting the Load:**

*   **Low-Voltage DC Load (e.g., LED):**
    *   Connect the **COM** terminal of the relay to the positive terminal of your DC power source.
    *   Connect the **NO** terminal of the relay to the anode (+) of the LED.
    *   Connect the cathode (-) of the LED to a current-limiting resistor (e.g., 220-330 Ohm).
    *   Connect the other end of the resistor to the ground (GND) of your DC power source.
    *   Ensure the relay module's power (VCC and GND) is connected to the Arduino's 5V and GND respectively.

*   **Mains-Powered Appliance (e.g., Lamp):**
    *   **Extreme Caution Required!** If you are not experienced with mains voltage, DO NOT proceed.
    *   You will be interrupting one of the wires of the power cord to the appliance. Typically, this is the **live** wire.
    *   Disconnect the appliance from the power outlet.
    *   Carefully cut one wire of the appliance's power cord.
    *   Connect one end of the cut wire to the **COM** terminal of the relay.
    *   Connect the other end of the cut wire to the **NO** terminal of the relay.
    *   The appliance's power cord should now be routed through the relay. The Arduino's 5V/GND will power the relay module.

---

### Arduino Code (Sketch):

This sketch will turn the relay ON for 1 second and then OFF for 1 second, repeatedly.

```cpp
// Define the digital pin connected to the relay module's IN pin
const int relayPin = 7;

void setup() {
  // Initialize the digital pin as an output
  pinMode(relayPin, OUTPUT);

  // Optional: Start with the relay OFF
  digitalWrite(relayPin, LOW); // Assuming active-HIGH relay module
}

void loop() {
  // Turn the relay ON (energize coil)
  // For active-HIGH relays, HIGH turns it ON.
  // For active-LOW relays, LOW turns it ON.
  // Most common relay modules are active-HIGH.
  digitalWrite(relayPin, HIGH);
  Serial.println("Relay ON");
  delay(1000); // Wait for 1 second

  // Turn the relay OFF (de-energize coil)
  digitalWrite(relayPin, LOW);
  Serial.println("Relay OFF");
  delay(1000); // Wait for 1 second
}
```

**Explanation of the Code:**

*   `const int relayPin = 7;`: This line declares an integer variable `relayPin` and assigns it the value `7`. This means the relay module is connected to digital pin 7 of the Arduino.
*   `void setup()`: This function runs once when the Arduino starts up.
    *   `pinMode(relayPin, OUTPUT);`: This sets the `relayPin` as an output pin, allowing the Arduino to send signals to it.
    *   `digitalWrite(relayPin, LOW);`: This sets the `relayPin` to a LOW state initially. This ensures the relay is OFF when the program starts. (Adjust if your relay module is active-LOW).
*   `void loop()`: This function runs repeatedly after `setup()` has finished.
    *   `digitalWrite(relayPin, HIGH);`: This sends a HIGH signal to the `relayPin`, which energizes the relay coil (assuming an active-HIGH module).
    *   `Serial.println("Relay ON");`: This prints a message to the Serial Monitor indicating the relay is ON.
    *   `delay(1000);`: This pauses the program execution for 1000 milliseconds (1 second).
    *   `digitalWrite(relayPin, LOW);`: This sends a LOW signal to the `relayPin`, de-energizing the relay coil.
    *   `Serial.println("Relay OFF");`: This prints a message to the Serial Monitor indicating the relay is OFF.
    *   `delay(1000);`: Another pause of 1 second.

---

### Variations and Considerations:

*   **Active-LOW Relays:** Some relay modules are designed to be activated by a LOW signal. In such cases, you would swap `HIGH` and `LOW` in the `digitalWrite()` commands.
    *   To turn ON an active-LOW relay: `digitalWrite(relayPin, LOW);`
    *   To turn OFF an active-LOW relay: `digitalWrite(relayPin, HIGH);`
*   **Relay Module Voltage:** Ensure the relay module's operating voltage (typically 5V) matches the Arduino's output voltage. Some modules may also have a separate connection for the relay coil power, allowing them to be powered from a different supply.
*   **Current Draw:** While the Arduino can drive the relay coil through its output pins, the relay coil itself can draw a significant amount of current. This is why modules use a transistor driver. Avoid directly connecting a relay coil to an Arduino pin without a driver circuit.
*   **Types of Loads:**
    *   **DC Loads:** Can be switched directly as shown with the LED example.
    *   **AC Loads:** Require careful handling of mains voltage. The relay acts as a mechanical switch to break or make the AC circuit.
*   **Isolation:** Relay modules provide electrical isolation between the low-voltage Arduino circuit and the high-voltage load circuit. This is a crucial safety feature.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Referencing Textbooks and Reference Books:

*   **The 8051 Microcontroller by Kenneth Ayala:** While this book focuses on the 8051, the fundamental concepts of I/O control, digital signals (HIGH/LOW), and interfacing external components are directly applicable. Chapter on I/O ports and peripheral interfacing would discuss how to generate signals to control external devices. The principle of using a transistor to drive a load is also covered.
*   **Microprocessors and Microcontrollers by R. LylaB.Das:** This book likely covers basic microcontrollers and their peripheral interfacing. Chapters on I/O ports, digital logic, and possibly basic transducer interfacing would provide the theoretical background for understanding how a microcontroller controls external hardware like a relay.
*   **The 8051 Microcontroller by I. Scott MacKenzie, Raphael C.-W. Phan:** Similar to Ayala's book, this would offer insights into I/O operations and signal generation from a microcontroller. The focus on understanding the "why" behind driving external devices would be valuable.
*   **The 8051 microcontroller and embedded systems by Muhammad Ali Mazidi:** This comprehensive text will definitely delve into input/output operations, interrupt handling, and peripheral interfacing. While the examples might be 8051-centric, the principles of signal generation, timing, and controlling external hardware are universal. You'd find detailed explanations of transistor biasing and driving external loads, which is key to understanding how the relay module works.

**Key Takeaways from References:**

*   Microcontrollers interact with the external world through their I/O pins, which can be configured as inputs or outputs.
*   Digital output pins can be set to specific voltage levels (HIGH/LOW) to represent binary states.
*   To control high-power devices, an intermediate circuit (like the transistor driver in a relay module) is necessary to handle the current and voltage differences.
*   Understanding the timing and sequence of output signals is crucial for controlling devices accurately.

---

### Practice Questions and Exercises:

**Question 1:**

What is the primary function of a relay in an embedded system?

**Answer:** A relay acts as an electrically operated switch, allowing a low-voltage signal from a microcontroller to control a high-voltage or high-current load.

**Question 2:**

List the main components typically found on a 5V relay module.

**Answer:** A relay, a driving transistor, a flyback diode, and possibly indicator LEDs.

**Question 3:**

Describe the connections between an Arduino Uno and a typical 5V relay module.

**Answer:**
*   Relay Module VCC -> Arduino 5V
*   Relay Module GND -> Arduino GND
*   Relay Module IN -> Arduino Digital Pin (e.g., D7)

**Question 4:**

Explain the difference between Normally Open (NO) and Normally Closed (NC) contacts on a relay.

**Answer:**
*   **NO:** The contact is open (no connection) when the relay coil is not energized. It closes when the coil is energized.
*   **NC:** The contact is closed (connected) when the relay coil is not energized. It opens when the coil is energized.

**Question 5:**

If your relay module is found to be controlled by a LOW signal (active-LOW), how would you modify the Arduino code to turn the relay ON for 2 seconds and then OFF for 2 seconds?

**Answer:**

```cpp
const int relayPin = 7;

void setup() {
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // Start with relay OFF for active-LOW
}

void loop() {
  // Turn the relay ON (energize coil with LOW signal)
  digitalWrite(relayPin, LOW);
  Serial.println("Relay ON");
  delay(2000); // Wait for 2 seconds

  // Turn the relay OFF (de-energize coil with HIGH signal)
  digitalWrite(relayPin, HIGH);
  Serial.println("Relay OFF");
  delay(2000); // Wait for 2 seconds
}
```

**Exercise:**

*   Connect an LED (with a current-limiting resistor) to the relay module as described in the hardware setup.
*   Upload the provided Arduino sketch to your Arduino board.
*   Observe the LED. It should blink ON for 1 second and OFF for 1 second.
*   Try changing the `delay()` values to alter the blinking speed.
*   If you have a mains-powered appliance and the necessary safety knowledge, connect it to the relay and observe how the Arduino can switch it on and off.

---

### Important Points to Remember:

*   **Safety First:** Always prioritize safety, especially when working with mains voltage. If in doubt, do not proceed.
*   **Relay Type:** Be aware if your relay module is active-HIGH or active-LOW and adjust your code accordingly.
*   **Load Capacity:** Check the specifications of the relay module to ensure it can handle the voltage and current of the load you intend to control.
*   **Flyback Diode:** The flyback diode is critical for protecting the transistor and the Arduino from voltage spikes. Ensure your relay module has one.
*   **Isolation:** Relays provide excellent isolation, which is essential for safely controlling high-power circuits from low-power microcontrollers.

---

This concludes Module 15 on interfacing relays with Arduino. Understanding this fundamental interfacing technique is crucial for building many practical embedded systems.