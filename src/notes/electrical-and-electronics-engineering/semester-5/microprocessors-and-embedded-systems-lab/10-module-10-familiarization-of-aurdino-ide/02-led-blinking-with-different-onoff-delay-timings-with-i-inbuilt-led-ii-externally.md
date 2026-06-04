---
title: "LED blinking with different ON/OFF delay timings with (i) inbuilt LED (ii) externally interfaced LED."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 10: Familiarization of Aurdino IDE."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36505"
status: "completed"
scrapedAt: "2026-05-23T16:23:17.864Z"
---
# Microprocessors and Embedded Systems Lab

## Module 10: Familiarization of Arduino IDE

### Topic: LED Blinking with Different ON/OFF Delay Timings with (i) Inbuilt LED (ii) Externally Interfaced LED

---

### 1. Introduction to Arduino and the Arduino IDE

The Arduino platform is an open-source electronics platform based on easy-to-use hardware and software. It's designed for anyone interested in creating interactive projects or objects that can sense and control things in the physical world. The Arduino IDE (Integrated Development Environment) is the software application used to write, compile, and upload code to Arduino boards.

**Key Concepts:**

*   **Arduino Board:** A microcontroller-based circuit board with digital and analog input/output (I/O) pins that can be interfaced to various expansion boards (shields) and other circuits.
*   **Arduino IDE:** A cross-platform application that makes it easy to write and upload code to your Arduino board. It includes a text editor, a compiler, and a serial monitor.
*   **Sketch:** The term used for programs written in the Arduino IDE.
*   **Functions:** Arduino sketches consist of two main functions:
    *   `setup()`: This function runs once when the Arduino board powers up or resets. It's used to initialize pin modes, serial communication, etc.
    *   `loop()`: This function runs continuously after `setup()` has finished. This is where the main logic of your program resides.

**Reference Content (Conceptual Alignment):**

While the provided textbooks (Ayala, LylaB.Das, MacKenzie, Mazidi) focus primarily on the 8051 microcontroller, the principles of programming microcontrollers and interfacing peripherals are transferable. The Arduino IDE simplifies many low-level operations that would typically be handled with Assembly language or C for the 8051. This module bridges the gap by introducing a higher-level, user-friendly platform.

---

### 2. Working with the Inbuilt LED

Most Arduino boards, such as the Arduino Uno, have an onboard LED connected to a specific digital pin (usually digital pin 13). This built-in LED is a convenient way to test your code without needing any external components.

**Learning Outcomes Addressed:**

*   **CO1 & CO2:** Developing basic programming logic (blinking) which aligns with executing programs and using instruction sets (even though simplified by the Arduino environment).
*   **CO3 & CO4:** Understanding how digital pins can control output devices (the LED) lays the foundation for examining and designing interfacing circuits.
*   **CO5:** This topic directly contributes to designing an Arduino-based system by demonstrating fundamental I/O control.

**Key Concepts:**

*   **Digital Pins:** Pins on the Arduino board that can be configured as either input or output.
*   **`pinMode(pin, mode)`:** A function to set the mode of a specific pin to either `INPUT`, `OUTPUT`, or `INPUT_PULLUP`.
*   **`digitalWrite(pin, value)`:** A function to write a `HIGH` (usually 5V or 3.3V depending on the board) or `LOW` (0V) value to a digital pin.
*   **`delay(milliseconds)`:** A function that pauses the program execution for a specified number of milliseconds.

**Example 1: Basic LED Blinking (1-second delay)**

```c++
// The setup function runs once when you press reset or power the board
void setup() {
  // Initialize digital pin 13 as an output.
  pinMode(13, OUTPUT);
}

// The loop function runs over and over again forever
void loop() {
  digitalWrite(13, HIGH);   // Turn the LED on (HIGH is the voltage level)
  delay(1000);              // Wait for a second (1000 milliseconds)
  digitalWrite(13, LOW);    // Turn the LED off by making the voltage LOW
  delay(1000);              // Wait for a second
}
```

**Explanation:**

1.  **`void setup() { pinMode(13, OUTPUT); }`**: In the `setup` function, we configure digital pin 13 as an `OUTPUT`. This tells the Arduino that this pin will be used to send signals *out* to control a device (the LED).
2.  **`void loop() { ... }`**:
    *   **`digitalWrite(13, HIGH);`**: Sets the voltage on pin 13 to HIGH, turning the onboard LED ON.
    *   **`delay(1000);`**: Pauses the program for 1000 milliseconds (1 second).
    *   **`digitalWrite(13, LOW);`**: Sets the voltage on pin 13 to LOW, turning the onboard LED OFF.
    *   **`delay(1000);`**: Pauses the program for another 1 second.
    *   The `loop()` function then repeats, causing the LED to blink.

**Example 2: LED Blinking with Different ON/OFF Delays**

```c++
// Define constants for pin numbers and delays for better readability
const int inbuiltLedPin = 13;
const int onDuration = 250;  // LED ON for 250 milliseconds
const int offDuration = 750; // LED OFF for 750 milliseconds

void setup() {
  // Initialize digital pin 13 as an output.
  pinMode(inbuiltLedPin, OUTPUT);
}

void loop() {
  digitalWrite(inbuiltLedPin, HIGH); // Turn the LED on
  delay(onDuration);                 // Wait for the specified ON duration

  digitalWrite(inbuiltLedPin, LOW);  // Turn the LED off
  delay(offDuration);                // Wait for the specified OFF duration
}
```

**Explanation:**

This example demonstrates varying the ON and OFF times. The LED will be ON for 250ms and OFF for 750ms, resulting in a faster ON period and a longer OFF period. This is achieved by changing the arguments passed to the `delay()` function.

**Practice Questions:**

1.  How would you modify the code to make the LED blink with an ON time of 200ms and an OFF time of 100ms?
2.  What would happen if you used `pinMode(13, INPUT)` instead of `OUTPUT` in the `setup()` function?
3.  Write a sketch to make the onboard LED blink twice rapidly (50ms ON, 50ms OFF) and then pause for 1 second (1000ms OFF).

**Answers:**

1.  Change `onDuration` to `200` and `offDuration` to `100`.
    ```c++
    const int onDuration = 200;
    const int offDuration = 100;
    ```
2.  If `pinMode(13, INPUT)` is used, `digitalWrite(13, HIGH)` and `digitalWrite(13, LOW)` will have no effect on the LED because the pin is configured as an input. The LED will likely remain in its previous state or behave unpredictably.
3.  ```c++
    const int inbuiltLedPin = 13;

    void setup() {
      pinMode(inbuiltLedPin, OUTPUT);
    }

    void loop() {
      // First rapid blink
      digitalWrite(inbuiltLedPin, HIGH);
      delay(50);
      digitalWrite(inbuiltLedPin, LOW);
      delay(50);

      // Second rapid blink
      digitalWrite(inbuiltLedPin, HIGH);
      delay(50);
      digitalWrite(inbuiltLedPin, LOW);
      delay(50);

      // Pause
      delay(1000);
    }
    ```

---

### 3. Interfacing an Externally Connected LED

To control external LEDs, you need to connect them to a digital pin on the Arduino board. This involves using a resistor to limit the current flowing through the LED and prevent it from burning out.

**Learning Outcomes Addressed:**

*   **CO1 & CO2:** Similar to the inbuilt LED, this involves programming logic for controlling an output.
*   **CO3:** This is a direct application of examining circuits for interfacing.
*   **CO4 & CO5:** Crucial for designing systems where external LEDs are used for indicators or visual feedback.

**Key Concepts:**

*   **LED (Light Emitting Diode):** A semiconductor device that emits light when an electric current passes through it. LEDs have polarity:
    *   **Anode:** The longer leg (positive).
    *   **Cathode:** The shorter leg (negative).
*   **Resistor:** An electrical component that resists the flow of electric current. It's essential to protect the LED from excessive current.
*   **Ohm's Law:** $V = I \times R$, where $V$ is voltage, $I$ is current, and $R$ is resistance. This law helps in calculating the required resistor value.

**Circuit Diagram:**

```
Arduino Digital Pin (e.g., Digital Pin 7) ----> Resistor ----> LED Anode ----> LED Cathode ----> GND (Ground)
```

**Choosing the Resistor Value:**

1.  **Determine LED Forward Voltage ($V_f$):** This is the voltage drop across the LED when it's ON. Typical values for red LEDs are around 2V, and for blue/green LEDs, around 3V. Check the LED's datasheet.
2.  **Determine Desired LED Current ($I_f$):** This is the current the LED should operate at for optimal brightness and lifespan. Typical values are around 20mA (0.02A). Again, check the datasheet.
3.  **Determine Arduino Output Voltage ($V_{out}$):** For most Arduinos (Uno, Nano, Mega), this is 5V. For boards like the Arduino Due or MKR series, it might be 3.3V.
4.  **Calculate Voltage Drop Across Resistor ($\Delta V_R$):** $\Delta V_R = V_{out} - V_f$.
5.  **Calculate Required Resistance (R) using Ohm's Law:** $R = \Delta V_R / I_f$.

**Example Calculation for a Red LED:**

*   $V_{out} = 5V$
*   $V_f = 2V$ (typical for red LED)
*   $I_f = 20mA = 0.02A$

1.  $\Delta V_R = 5V - 2V = 3V$
2.  $R = 3V / 0.02A = 150\Omega$

You would typically use a standard resistor value close to this, such as $150\Omega$ or $220\Omega$. Using a slightly higher resistance is safer.

**Example 3: Blinking an Externally Connected LED**

Let's assume you've connected an LED to Digital Pin 7 with a current-limiting resistor (e.g., $220\Omega$) in series.

```c++
// Define constants for pin numbers and delays
const int externalLedPin = 7;
const int onDuration = 500;  // LED ON for 500 milliseconds
const int offDuration = 500; // LED OFF for 500 milliseconds

void setup() {
  // Initialize digital pin 7 as an output.
  pinMode(externalLedPin, OUTPUT);
}

void loop() {
  digitalWrite(externalLedPin, HIGH); // Turn the LED on
  delay(onDuration);                  // Wait for the specified ON duration

  digitalWrite(externalLedPin, LOW);  // Turn the LED off
  delay(offDuration);                 // Wait for the specified OFF duration
}
```

**Explanation:**

The code structure is identical to the inbuilt LED example. The only difference is that `externalLedPin` is set to `7` (or whichever pin you've chosen), and the physical connection is made on the breadboard.

**Example 4: Custom Blinking Pattern for External LED**

This sketch makes an external LED blink with varying ON/OFF times to create a distinct pattern.

```c++
// Define constants for pin numbers and delays
const int externalLedPin = 7;
const int fastOn = 100;
const int mediumOn = 300;
const int slowOn = 700;
const int pauseDuration = 400;

void setup() {
  pinMode(externalLedPin, OUTPUT);
}

void loop() {
  // Pattern: Fast ON, medium OFF
  digitalWrite(externalLedPin, HIGH);
  delay(fastOn);
  digitalWrite(externalLedPin, LOW);
  delay(mediumOn);

  // Pattern: Medium ON, slow OFF
  digitalWrite(externalLedPin, HIGH);
  delay(mediumOn);
  digitalWrite(externalLedPin, LOW);
  delay(slowOn);

  // Pattern: Slow ON, pause
  digitalWrite(externalLedPin, HIGH);
  delay(slowOn);
  digitalWrite(externalLedPin, LOW);
  delay(pauseDuration);
}
```

**Practice Questions:**

1.  You want to connect a blue LED (typical $V_f = 3V$) to a 5V Arduino. You want to limit the current to 15mA ($0.015A$). What is the minimum resistance required?
2.  If you connect an LED directly to an Arduino digital pin without a resistor and upload a blinking sketch, what is likely to happen to the LED?
3.  Write a sketch that makes an external LED connected to pin 8 blink ON for 1 second, then OFF for 2 seconds, and repeat this pattern.

**Answers:**

1.  $\Delta V_R = 5V - 3V = 2V$. $R = 2V / 0.015A \approx 133\Omega$. You would use a $150\Omega$ or $180\Omega$ resistor.
2.  The LED will likely burn out quickly due to excessive current flowing through it. The Arduino's digital pins can only supply a limited amount of current (typically 20-40mA max per pin).
3.  ```c++
    const int externalLedPin = 8;
    const int onDuration = 1000; // 1 second ON
    const int offDuration = 2000; // 2 seconds OFF

    void setup() {
      pinMode(externalLedPin, OUTPUT);
    }

    void loop() {
      digitalWrite(externalLedPin, HIGH);
      delay(onDuration);
      digitalWrite(externalLedPin, LOW);
      delay(offDuration);
    }
    ```

---

### 4. Key Takeaways and Best Practices

**Important Points to Remember:**

*   **`setup()` runs once, `loop()` runs forever.** Structure your code accordingly.
*   **`pinMode()` is essential** before using `digitalWrite()` or `digitalRead()`.
*   **`delay()` stops all program execution.** Use it judiciously, especially in more complex projects. For non-blocking timing, investigate the `millis()` function.
*   **Always use a current-limiting resistor with external LEDs.** This protects both the LED and the Arduino.
*   **Connect the LED anode (longer leg) to the resistor/pin, and the cathode (shorter leg) to GND.**
*   **When calculating resistor values, always check the LED's datasheet for $V_f$ and maximum recommended current ($I_f$).** Using a resistor value that is slightly higher than calculated is always safer.
*   **For 8051 microcontrollers, direct register manipulation is used for I/O control (e.g., P1.0 for output), whereas Arduino IDE provides higher-level functions.** This abstraction simplifies embedded development. (Conceptual link to textbooks).

**Alignment with Course Outcomes:**

*   **CO1 & CO2:** Demonstrating understanding of microcontroller programming through simple output control sketches, even with the simplified Arduino abstraction.
*   **CO3:** Practical experience in connecting and controlling external peripherals (LEDs) with a microcontroller board.
*   **CO4 & CO5:** Foundational skills for designing microcontroller-based systems by learning basic input/output operations and interfacing principles.

---

### 5. Further Exploration (Beyond Basic Blinking)

*   **`millis()` function:** Explore how to create multiple, independent timing events without blocking the program flow. This is crucial for more advanced embedded systems.
*   **PWM (Pulse Width Modulation):** Learn how to use `analogWrite()` to control the brightness of an LED by varying the duty cycle of a square wave. This demonstrates a more sophisticated output control.
*   **Multiple LEDs:** Interface multiple LEDs to different pins and control them independently or in sequence.
*   **Input from Switches:** Introduce buttons or switches to control the LED blinking pattern (e.g., changing delay times based on button presses). This would involve `digitalRead()`.

---

This concludes Module 10's topic on LED blinking. By understanding these fundamentals, you are well-equipped to tackle more complex interfacing tasks and system designs in your Microprocessors and Embedded Systems Lab. Remember to practice these concepts diligently.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
