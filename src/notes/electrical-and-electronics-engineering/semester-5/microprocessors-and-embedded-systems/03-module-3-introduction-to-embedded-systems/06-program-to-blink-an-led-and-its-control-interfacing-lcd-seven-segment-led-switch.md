---
title: "Program to blink an LED and its control., Interfacing LCD, Seven Segment LED, switch Interface, Binary counter"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 3: Introduction to Embedded Systems "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36224"
status: "completed"
scrapedAt: "2026-05-23T16:22:52.142Z"
---
# Microprocessors and Embedded Systems: Module 3 - Introduction to Embedded Systems

This module introduces fundamental concepts and practical implementations in embedded systems, focusing on interfacing common peripherals with microcontrollers, particularly using the Arduino platform.

## 3.1 Program to Blink an LED and its Control

### Learning Outcomes Covered:
*   Understanding basic input/output operations in embedded systems.
*   Implementing simple control logic for peripheral devices.
*   Gaining practical experience with Arduino IDE and programming.

### Key Concepts and Definitions:
*   **Embedded System:** A computer system – a combination of a computer processor, computer memory, and input/output peripheral devices – that has been designed to perform a dedicated function.
*   **Microcontroller:** A small computer on a single integrated circuit (IC) containing a processor core, memory, and programmable input/output peripherals.
*   **LED (Light Emitting Diode):** A semiconductor device that emits light when an electric current passes through it.
*   **Digital Output:** A pin on a microcontroller that can be set to a high voltage (typically +5V or +3.3V) or a low voltage (0V), representing binary 1 and 0 respectively.
*   **Arduino Uno:** A popular microcontroller board based on the ATmega328P microcontroller, widely used for prototyping and learning embedded systems.
*   **Sketch:** The term used for programs written for Arduino.
*   **`pinMode()` function:** Configures a specific pin to behave either as an input or an output.
*   **`digitalWrite()` function:** Sets a digital pin to either HIGH (on) or LOW (off).
*   **`delay()` function:** Pauses the program for a specified number of milliseconds.

### How it Works:
1.  **Hardware Setup:** An LED is connected to a digital pin of the Arduino Uno. A current-limiting resistor (typically 220-330 ohms) is connected in series with the LED to prevent it from burning out. The anode of the LED connects to the resistor, and the other end of the resistor connects to the digital pin. The cathode of the LED connects to the GND (Ground) pin of the Arduino.
2.  **Software (Sketch):**
    *   The `setup()` function is called once when the Arduino starts or is reset. Here, we configure the chosen digital pin as an `OUTPUT` using `pinMode()`.
    *   The `loop()` function is called repeatedly after `setup()`. In the `loop()` function, we:
        *   Turn the LED ON by setting the pin to `HIGH` using `digitalWrite()`.
        *   Pause for a specified duration (e.g., 1000 milliseconds) using `delay()`.
        *   Turn the LED OFF by setting the pin to `LOW` using `digitalWrite()`.
        *   Pause again for a specified duration.

### Example Arduino Sketch (Blinking LED):

```cpp
// Define the pin to which the LED is connected
const int ledPin = 13; // Most Arduino boards have an onboard LED connected to pin 13

void setup() {
  // Initialize the digital pin as an output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH); // Turn the LED on
  delay(1000);                // Wait for 1 second (1000 milliseconds)
  digitalWrite(ledPin, LOW);  // Turn the LED off
  delay(1000);                // Wait for 1 second
}
```

### Control of LED:
*   **Blinking Rate:** Modifying the `delay()` values changes how fast the LED blinks. Shorter delays result in faster blinking.
*   **Dimming (PWM):** For microcontrollers with Pulse Width Modulation (PWM) capabilities (indicated by a '~' symbol next to the pin number on Arduino Uno, e.g., pins 3, 5, 6, 9, 10, 11), you can simulate dimming by varying the duty cycle of the digital signal. The `analogWrite()` function is used for this.

#### Example Sketch (Dimming LED - Requires PWM pin):

```cpp
const int pwmLedPin = 9; // Use a PWM-capable pin

void setup() {
  pinMode(pwmLedPin, OUTPUT);
}

void loop() {
  // Fade in
  for (int brightness = 0; brightness <= 255; brightness += 5) {
    analogWrite(pwmLedPin, brightness);
    delay(30);
  }

  // Fade out
  for (int brightness = 255; brightness >= 0; brightness -= 5) {
    analogWrite(pwmLedPin, brightness);
    delay(30);
  }
}
```

### Important Points to Remember:
*   Always use a current-limiting resistor with an LED to protect it.
*   Ensure you connect the LED with the correct polarity (anode to positive, cathode to negative/GND).
*   `pinMode()` must be called in `setup()` before using a pin.
*   `digitalWrite()` controls digital pins. `analogWrite()` is used for PWM output.

### Practice Questions:
1.  What is the purpose of the `delay()` function in the LED blinking program?
2.  If you want the LED to blink twice as fast, what changes would you make to the `delay()` values?
3.  Which function is used to set a digital pin as an output in Arduino?
4.  Can you dim an LED using `digitalWrite()`? Explain why or why not.

### Answers:
1.  The `delay()` function pauses the program execution for a specified duration, creating the "on" and "off" states for the LED that we perceive as blinking.
2.  You would halve the duration of each `delay()` call. For example, change `delay(1000)` to `delay(500)`.
3.  The `pinMode()` function is used to set a digital pin as an output (or input).
4.  No, you cannot directly dim an LED using `digitalWrite()`. `digitalWrite()` only allows setting the pin to HIGH (fully on) or LOW (fully off). Dimming requires varying the voltage or using PWM, which is done with `analogWrite()` on PWM-capable pins.

---

## 3.2 Interfacing LCD (Liquid Crystal Display)

### Learning Outcomes Covered:
*   Understanding how to interface external display devices with microcontrollers.
*   Learning to send commands and data to an LCD.
*   Implementing text-based output on an embedded system.

### Key Concepts and Definitions:
*   **LCD:** A display technology that uses liquid crystals to produce a visible image. Commonly used character LCDs are based on controllers like the HD44780.
*   **HD44780:** A very common controller chip used in character LCD modules.
*   **Parallel Interface:** The LCD module typically requires multiple digital pins from the microcontroller for data and control signals.
*   **I2C Interface (Optional):** Some LCD modules come with an I2C backpack, which significantly reduces the number of pins required (typically only 2 data pins and power).
*   **RS (Register Select) Pin:** Selects between command register and data register.
*   **RW (Read/Write) Pin:** Controls the direction of data transfer (read from or write to the LCD). For most embedded applications, this is tied to GND (write-only).
*   **Enable (E) Pin:** Used to latch data into the LCD's internal registers.
*   **Data Pins (D0-D7):** Transmit data or commands to the LCD. Can be used in 8-bit or 4-bit mode. 4-bit mode is more common in embedded systems to save pins.
*   **Backlight (A/K pins):** Pins to power the backlight of the LCD.
*   **Arduino `LiquidCrystal` Library:** A built-in library that simplifies interfacing with character LCDs.

### How it Works (4-bit Mode):
1.  **Hardware Setup:**
    *   The LCD's RS, E, D4, D5, D6, D7 pins are connected to digital pins on the Arduino.
    *   The LCD's RW pin is connected to GND.
    *   The LCD's VSS pin is connected to GND, VDD to +5V.
    *   The V0 pin (contrast adjustment) is connected to a potentiometer (wiper) to control display contrast, with the potentiometer's ends connected to +5V and GND.
    *   The backlight pins (A and K) are connected to +5V and GND, usually with a current-limiting resistor for pin A.
2.  **Software (Sketch using `LiquidCrystal` library):**
    *   Include the `LiquidCrystal` library: `#include <LiquidCrystal.h>`.
    *   Initialize the `LiquidCrystal` object, specifying the Arduino pins connected to the LCD's RS, E, D4, D5, D6, D7: `LiquidCrystal lcd(rs, en, d4, d5, d6, d7);`.
    *   In `setup()`:
        *   Start the LCD in 4-bit mode: `lcd.begin(16, 2);` (for a 16-character, 2-line display).
        *   Clear the display: `lcd.clear();`.
        *   Set the cursor position: `lcd.setCursor(column, row);`.
        *   Print text: `lcd.print("Hello");`.

### Example Arduino Sketch (Displaying Text on LCD):

```cpp
#include <LiquidCrystal.h>

// Initialize the library with the numbers of the interface pins
// LiquidCrystal lcd(rs, en, d4, d5, d6, d7);
LiquidCrystal lcd(12, 11, 5, 4, 3, 2); // Example pin connections

void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2); // For a 16x2 LCD

  // Print a message to the LCD
  lcd.print("Hello, Arduino!");

  // Set the cursor to column 0, line 1 (the second line)
  lcd.setCursor(0, 1);
  // Print another message
  lcd.print("Embedded Systems");
}

void loop() {
  // Nothing to do here for this basic example
}
```

### Important Points to Remember:
*   The pin connections for RS, E, D4-D7 in the `LiquidCrystal` constructor must match your actual wiring.
*   Always use a potentiometer for contrast adjustment.
*   The `lcd.begin()` function initializes the LCD and specifies its dimensions.
*   `lcd.setCursor(column, row)` is crucial for positioning text. Rows are 0-indexed (0 for the first line, 1 for the second).
*   Character LCDs typically operate in 4-bit mode to save microcontroller pins.

### Practice Questions:
1.  What is the common controller chip used in character LCD modules, and what does RS stand for?
2.  Why is a potentiometer usually connected to the V0 pin of an LCD?
3.  Explain the difference between `lcd.print()` and `lcd.setCursor()`.
4.  If you have a 20x4 LCD, how would you initialize it in the `lcd.begin()` function?

### Answers:
1.  The common controller chip is the HD44780. RS stands for Register Select.
2.  The potentiometer is used to adjust the contrast of the LCD display. The V0 pin controls the voltage applied to the liquid crystals, which affects how well they refract light.
3.  `lcd.print()` displays text or numbers on the LCD at the current cursor position. `lcd.setCursor(column, row)` moves the cursor to a specific column and row on the LCD without printing anything, so subsequent `print` commands will start from that new position.
4.  You would initialize it as `lcd.begin(20, 4);` for a 20-character, 4-line LCD.

---

## 3.3 Interfacing Seven Segment LED

### Learning Outcomes Covered:
*   Understanding different types of seven-segment displays.
*   Implementing display logic for numbers and characters.
*   Controlling multiple seven-segment displays.

### Key Concepts and Definitions:
*   **Seven-Segment Display:** A display device made of seven LEDs (or other light-emitting elements) arranged in a figure-eight pattern to display numerals. Each LED is typically referred to by a letter from 'a' to 'g'. An additional decimal point (dp) is often included.
*   **Common Cathode (CC):** The cathodes of all seven LEDs are connected together to ground (GND). To turn on a segment, its corresponding anode pin must be driven HIGH.
*   **Common Anode (CA):** The anodes of all seven LEDs are connected together to the positive voltage supply. To turn on a segment, its corresponding cathode pin must be driven LOW (to GND).
*   **Multiplexing:** A technique used to drive multiple seven-segment displays by rapidly switching between them, making it appear as if all are lit simultaneously. This saves on the number of output pins required.
*   **Digit Select Pins:** In multiplexed displays, dedicated pins are used to enable (turn on) a specific digit.
*   **Segment Pins:** Pins for each of the seven segments (a-g) and the decimal point (dp).

### How it Works (Common Cathode - Single Display):
1.  **Hardware Setup:**
    *   The seven segment pins (a-g) and dp are connected to individual digital pins on the Arduino.
    *   A current-limiting resistor is recommended for each segment to prevent damage.
    *   The common cathode pin is connected to GND.
2.  **Software (Sketch):**
    *   Define which Arduino pins are connected to which segments (a-g, dp).
    *   Create a lookup table (an array) to map each digit (0-9) or character to the corresponding segment states (HIGH for ON, LOW for OFF).
    *   In `setup()`: Configure all segment pins as `OUTPUT`.
    *   In `loop()` or a custom function:
        *   To display a digit, set the segment pins according to the lookup table for that digit.

### Example Arduino Sketch (Displaying a Digit on a Single Common Cathode Seven-Segment Display):

```cpp
// Define pins for segments a through g and dp
const int segmentA = 2;
const int segmentB = 3;
const int segmentC = 4;
const int segmentD = 5;
const int segmentE = 6;
const int segmentF = 7;
const int segmentG = 8;
const int segmentDP = 9; // Optional

// Define common cathode pin (connected to GND)
const int commonCathodePin = 10; // Assuming a single display with common cathode

// Lookup table for digits 0-9 (Common Cathode: 1=ON, 0=OFF)
// Segments: a, b, c, d, e, f, g, dp
byte segmentsForDigit[] = {
  // a, b, c, d, e, f, g, dp
  B11000000, // 0
  B11111101, // 1
  B10100100, // 2
  B10010100, // 3
  B10011101, // 4
  B01011100, // 5
  B01000000, // 6
  B11111100, // 7
  B10000000, // 8
  B10010000  // 9
};

void setup() {
  // Set all segment pins as OUTPUT
  pinMode(segmentA, OUTPUT);
  pinMode(segmentB, OUTPUT);
  pinMode(segmentC, OUTPUT);
  pinMode(segmentD, OUTPUT);
  pinMode(segmentE, OUTPUT);
  pinMode(segmentF, OUTPUT);
  pinMode(segmentG, OUTPUT);
  pinMode(segmentDP, OUTPUT);

  // Set the common cathode pin to output
  pinMode(commonCathodePin, OUTPUT);
  digitalWrite(commonCathodePin, LOW); // Ensure common cathode is LOW for ON

  // Display digit 5 initially
  displayDigit(5);
}

void loop() {
  // Cycle through digits 0-9
  for (int digit = 0; digit <= 9; digit++) {
    displayDigit(digit);
    delay(500);
  }
}

void displayDigit(int digit) {
  // Get the byte for the digit from the lookup table
  byte segments = segmentsForDigit[digit];

  // Set each segment pin based on the byte
  digitalWrite(segmentA, bitRead(segments, 7)); // a
  digitalWrite(segmentB, bitRead(segments, 6)); // b
  digitalWrite(segmentC, bitRead(segments, 5)); // c
  digitalWrite(segmentD, bitRead(segments, 4)); // d
  digitalWrite(segmentE, bitRead(segments, 3)); // e
  digitalWrite(segmentF, bitRead(segments, 2)); // f
  digitalWrite(segmentG, bitRead(segments, 1)); // g
  // For DP, you'd need an extra bit or specific logic.
  // Assuming dp is not used for digit display in this example for simplicity.
  // If dp is segment 0: digitalWrite(segmentDP, bitRead(segments, 0));
}
```
*Note on `bitRead()` and `B11000000`*: `B11000000` is a binary literal representing the state of segments 'a' through 'g'. The `bitRead(byte, bit)` function checks the state of a specific bit (0-7) within the `segments` byte. The mapping of bit position to segment (e.g., bit 7 for 'a', bit 6 for 'b', etc.) depends on how you define your lookup table and the `bitRead` order. It's crucial to be consistent.

### Multiplexing Multiple Seven-Segment Displays:
*   **Hardware Setup:**
    *   Each set of segment pins (a-g, dp) for each display is connected to the same corresponding Arduino pins.
    *   Each display has a common cathode (or anode) pin. These are connected to separate Arduino digital pins, called "digit select" pins.
*   **Software (Sketch):**
    *   Define pins for segments (a-g, dp) and digit select pins.
    *   Use arrays for segment patterns and potentially for controlling the digit select pins.
    *   In `loop()`:
        *   Turn OFF all displays (set digit select pins HIGH for CC, LOW for CA).
        *   Select the first digit (set its digit select pin LOW for CC, HIGH for CA).
        *   Output the segment pattern for the desired digit on that display.
        *   Wait for a very short duration (e.g., 2-5 ms).
        *   Turn OFF the first display.
        *   Repeat for the second digit, third, and so on.
    *   This rapid switching creates the illusion of multiple displays working simultaneously.

### Important Points to Remember:
*   Identify whether your display is Common Cathode or Common Anode. This determines whether you connect the common pin to GND (CC) or +5V (CA) and how you set the segment pins (HIGH for ON for CC, LOW for ON for CA).
*   Use current-limiting resistors for each segment.
*   A lookup table significantly simplifies displaying digits.
*   Multiplexing is essential for driving multiple digits efficiently.

### Practice Questions:
1.  What is the fundamental difference between a Common Cathode and a Common Anode seven-segment display in terms of how segments are turned ON?
2.  If you are using a Common Anode display, what logic level (HIGH or LOW) would you apply to a segment pin to turn it ON?
3.  Why is multiplexing used when displaying numbers on multiple seven-segment digits?
4.  Describe the role of "digit select" pins in a multiplexed seven-segment display system.

### Answers:
1.  For a Common Cathode display, you connect the common pin to GND and set the segment pins to HIGH to turn them ON. For a Common Anode display, you connect the common pin to +5V and set the segment pins to LOW to turn them ON.
2.  When using a Common Anode display, you would apply a LOW logic level (0V) to a segment pin to turn it ON.
3.  Multiplexing is used to reduce the number of microcontroller pins required. Instead of needing separate pins for each segment of each digit, a common set of segment pins is shared, and individual "digit select" pins are used to activate one digit at a time in rapid succession.
4.  Digit select pins are used to enable or disable specific seven-segment digits. In a multiplexed system, they are activated one by one, allowing the microcontroller to send the correct segment pattern to only the currently active digit.

---

## 3.4 Switch Interface

### Learning Outcomes Covered:
*   Understanding how to read input from physical switches.
*   Implementing debouncing techniques.
*   Using switch inputs to control embedded system behavior.

### Key Concepts and Definitions:
*   **Switch:** An electrical component that can connect or disconnect an electrical circuit.
*   **Pushbutton:** A common type of switch that is activated by pressing it.
*   **Digital Input:** A pin on a microcontroller that can read the voltage level, typically interpreted as HIGH (representing a logical 1) or LOW (representing a logical 0).
*   **Pull-up Resistor:** An external or internal resistor connected to a digital input pin that pulls the pin's voltage to HIGH when the switch is open.
*   **Pull-down Resistor:** An external or internal resistor connected to a digital input pin that pulls the pin's voltage to LOW when the switch is open.
*   **Floating Input:** An input pin that is not connected to a defined voltage level (neither HIGH nor LOW). This can lead to unpredictable readings.
*   **Debouncing:** The process of preventing multiple readings from a single switch press due to mechanical vibrations when the switch contacts make or break.
*   **Arduino `INPUT` Mode:** Configures a pin to read external voltage.
*   **Arduino `INPUT_PULLUP` Mode:** Configures a pin as input and enables the internal pull-up resistor.

### How it Works (Using Internal Pull-up Resistors):
1.  **Hardware Setup:**
    *   Connect one terminal of the pushbutton to a digital input pin on the Arduino.
    *   Connect the other terminal of the pushbutton to GND.
    *   Configure the Arduino pin in `INPUT_PULLUP` mode. This internally connects a resistor between the input pin and +5V.
2.  **Reading the Switch:**
    *   When the switch is **open**, the internal pull-up resistor keeps the input pin HIGH.
    *   When the switch is **closed** (pressed), it connects the input pin directly to GND, overriding the pull-up resistor and making the input pin LOW.
    *   Therefore, for a switch wired to GND with `INPUT_PULLUP`, a LOW reading indicates the switch is pressed, and a HIGH reading indicates it's released.

### Example Arduino Sketch (Reading a Switch to Control an LED):

```cpp
const int switchPin = 2;   // The pin where the pushbutton is connected
const int ledPin = 13;    // The pin where the LED is connected

void setup() {
  // Initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);

  // Initialize the switch pin as an input with an internal pull-up resistor
  pinMode(switchPin, INPUT_PULLUP);

  Serial.begin(9600); // For debugging
}

void loop() {
  // Read the state of the pushbutton
  int switchState = digitalRead(switchPin);

  // Print the state to the Serial Monitor (for debugging)
  Serial.print("Switch State: ");
  Serial.println(switchState);

  // If the switch is pressed (LOW due to pull-up to GND), turn the LED ON
  if (switchState == LOW) {
    digitalWrite(ledPin, HIGH); // Turn LED ON
  } else {
    digitalWrite(ledPin, LOW);  // Turn LED OFF
  }
}
```

### Debouncing:
Mechanical switches have contacts that can bounce when pressed or released, causing multiple rapid transitions between HIGH and LOW. This can lead to a single press being registered as multiple presses.

**Software Debouncing Techniques:**

1.  **Delay-Based Debouncing:** After detecting a switch state change, introduce a short delay (e.g., 20-50 ms) and then re-read the switch state. If the state remains the same after the delay, it's considered a stable reading.

    ```cpp
    // Inside the loop, after reading switchState
    if (switchState == LOW) { // If switch is pressed
      // Wait for debouncing
      delay(50);
      // Re-read the switch state
      switchState = digitalRead(switchPin);
      // If still LOW, then it's a valid press
      if (switchState == LOW) {
        digitalWrite(ledPin, HIGH); // Turn LED ON
      } else {
        digitalWrite(ledPin, LOW); // LED OFF if it bounced back HIGH
      }
    } else { // If switch is not pressed (HIGH)
      digitalWrite(ledPin, LOW); // Turn LED OFF
    }
    ```
    *Important Note:* This simple delay-based debouncing can block other code execution. More advanced methods exist (like using timers or state machines) that don't halt the program.

2.  **State Change Detection:** Track the previous state of the switch. Only act when the state changes from released to pressed (or vice-versa). Combine this with a delay.

### Important Points to Remember:
*   Always use pull-up or pull-down resistors to prevent floating input pins. Arduino's internal `INPUT_PULLUP` is very convenient.
*   When using `INPUT_PULLUP`, a pressed switch connected to GND will read as `LOW`.
*   Debouncing is crucial for reliable switch input, especially for actions like incrementing a counter or changing modes.
*   Avoid putting a switch directly between an input pin and +5V without a pull-down resistor or using `INPUT_PULLUP`.

### Practice Questions:
1.  What is a "floating input" and why is it problematic?
2.  If you wire a pushbutton between an Arduino digital pin and +5V, and configure the pin as `INPUT_PULLUP`, what will be the reading when the button is NOT pressed? What about when it IS pressed?
3.  Explain the concept of switch debouncing.
4.  Suggest one method to debounce a switch in your Arduino code.

### Answers:
1.  A floating input is an input pin that is not connected to a defined logic level (HIGH or LOW). It "floats" between states, leading to unpredictable and erroneous readings by the microcontroller.
2.  When the button is NOT pressed, the internal pull-up resistor will keep the pin HIGH. When the button IS pressed, it connects the pin to +5V, so it will read HIGH. (This wiring setup is less common; usually, switches connect to GND, and `INPUT_PULLUP` is used to read LOW when pressed).
    *Correction for common practice:* If wired to GND with `INPUT_PULLUP`: Not pressed = HIGH, Pressed = LOW.
3.  Switch debouncing is the process of filtering out spurious rapid ON/OFF transitions that occur when a mechanical switch's contacts make or break. These "bounces" can cause a single physical press to be registered as multiple presses by the microcontroller.
4.  One method is delay-based debouncing: after detecting a state change, wait for a short period (e.g., 50ms) and then re-read the switch state. If the state is still the same, consider it a valid input.

---

## 3.5 Binary Counter

### Learning Outcomes Covered:
*   Understanding the concept of binary counting.
*   Implementing a counter using microcontrollers.
*   Applying counter logic to control peripherals (e.g., sequencing LEDs, digits on a seven-segment display).

### Key Concepts and Definitions:
*   **Binary Number System:** A base-2 number system that uses only two digits, 0 and 1.
*   **Counter:** A sequential logic circuit or program that counts events or pulses.
*   **Up Counter:** Counts in increasing order (0, 1, 2, ...).
*   **Down Counter:** Counts in decreasing order (..., 2, 1, 0).
*   **Modulo-N Counter:** Counts from 0 up to N-1 and then resets to 0.
*   **Clock Pulse:** An external or internal signal that triggers the counter to advance to its next state. In Arduino, this could be the system clock, a timer interrupt, or a change in an input signal.
*   **State Machine:** A computational model that can be in exactly one of a finite number of states at any given time. The state machine progresses from one state to another in response to some external inputs.

### How it Works (Using Arduino):
A binary counter can be implemented in software by maintaining a variable that holds the current count. This variable is incremented (or decremented) based on some event.

**Example Scenarios:**

1.  **Software Counter to Blink LED:** The `loop()` function itself acts as a basic counter for the blinking sequence (ON for a duration, OFF for a duration).
2.  **Counter to Cycle Through Seven-Segment Displays:** As demonstrated in the seven-segment section, a counter variable can be used to select which digit to display next.
3.  **Counter Driven by a Switch:** Use a switch press as the "clock" pulse to increment a counter.

### Example Arduino Sketch (Binary Counter driven by a Switch, displayed on LEDs):

This example uses 4 LEDs to represent a 4-bit binary counter. Each switch press increments the counter.

```cpp
const int switchPin = 2; // Input pin for the switch
const int ledPins[] = {13, 12, 11, 10}; // Pins for the 4 LEDs (representing bits 0-3)
const int numLeds = 4;

int counterValue = 0;
int lastSwitchState = HIGH; // Assume switch is not pressed initially

void setup() {
  // Initialize LED pins as output
  for (int i = 0; i < numLeds; i++) {
    pinMode(ledPins[i], OUTPUT);
  }

  // Initialize switch pin as input with pull-up resistor
  pinMode(switchPin, INPUT_PULLUP);

  Serial.begin(9600);
}

void loop() {
  int currentSwitchState = digitalRead(switchPin);

  // Check for a rising edge on the switch (transition from HIGH to LOW)
  // This effectively debounces and registers only the press
  if (currentSwitchState == LOW && lastSwitchState == HIGH) {
    // Switch was pressed, increment the counter
    counterValue++;

    // Optional: Limit the counter (e.g., to 15 for 4 bits, modulo 16)
    if (counterValue > 15) {
      counterValue = 0;
    }

    // Update the LEDs to display the binary value of counterValue
    updateLEDs(counterValue);

    Serial.print("Counter: ");
    Serial.println(counterValue);

    // Add a small delay after detecting a press to prevent multiple increments
    // from a single press if debouncing isn't perfect.
    delay(100);
  }

  // Store the current switch state for the next iteration
  lastSwitchState = currentSwitchState;

  // No other actions in loop; counter only advances on switch press
}

void updateLEDs(int value) {
  // Iterate through each LED and set its state based on the binary representation of 'value'
  for (int i = 0; i < numLeds; i++) {
    // Use bitRead to get the state of each bit (from right to left, bit 0 is the least significant)
    // We map bit 'i' to ledPins[i]
    if (bitRead(value, i) == 1) {
      digitalWrite(ledPins[i], HIGH); // Turn LED ON if the bit is 1
    } else {
      digitalWrite(ledPins[i], LOW);  // Turn LED OFF if the bit is 0
    }
  }
}
```

### Using a Counter with Seven-Segment Displays:
You can use a counter variable to drive the display of numbers on a seven-segment display.

```cpp
// ... (Seven Segment setup from earlier section) ...
int currentDigit = 0;

void setup() {
  // ... (Seven Segment setup) ...
  displayDigit(currentDigit); // Display initial digit
}

void loop() {
  // Example: Increment digit every second
  delay(1000);
  currentDigit++;
  if (currentDigit > 9) {
    currentDigit = 0; // Reset to 0 after 9
  }
  displayDigit(currentDigit);
}
```

### Important Points to Remember:
*   A counter can be implemented using a simple integer variable in software.
*   The counter's increment/decrement logic is triggered by an event, such as a timer or an input signal (like a switch press).
*   Understanding binary representation is key to displaying counter values on LEDs or seven-segment displays.
*   When using external inputs to drive a counter, debounce the input for reliable operation.

### Practice Questions:
1.  What is the difference between an up counter and a down counter?
2.  In the provided LED binary counter example, which `digitalRead()` value (HIGH or LOW) signifies that the switch has been pressed?
3.  How does the `bitRead(value, i)` function help in displaying a binary counter's value on multiple LEDs?
4.  If you wanted to create a counter that cycles through digits 0-9 and then repeats, what mathematical operation would you use to reset the counter after it reaches 9?

### Answers:
1.  An up counter increments its value sequentially (e.g., 0, 1, 2, 3), while a down counter decrements its value sequentially (e.g., 3, 2, 1, 0).
2.  In the example using `INPUT_PULLUP` and wiring the switch to GND, a `LOW` value from `digitalRead(switchPin)` signifies that the switch has been pressed.
3.  The `bitRead(value, i)` function extracts the state of the i-th bit from the `value`. This allows you to determine whether a specific bit is 0 or 1. By mapping each bit position (0, 1, 2, 3) to a corresponding LED pin, you can illuminate the LEDs to visually represent the binary value of the counter.
4.  You would use the modulo operator (`%`). After incrementing the counter, you would set `counterValue = counterValue % 10;` (or `counterValue = counterValue % 10` if the maximum value is 9, so the cycle is 0-9). If the counter goes up to `N`, the reset would be `counterValue = counterValue % N;`.

---

This concludes the study notes for Module 3. Remember to practice these concepts with an Arduino Uno or similar development board to solidify your understanding.

**References:**
*   **Ram, B. (Year). *Fundamentals of Microprocessor and Micro controllers***. DHANPAT Rai Publications (P) Ltd.
*   **Gaonkar, R. (2014). *Microprocessor, Architecture, Programming and Applications*** (Sixth edition). Penram International Publishing.
*   **Margolis, M. (Year). *Arduino Cookbook*** (1st Edition). O’Reilly Media, Inc.
*   **Rafiquzzaman, M. (Year). *Microprocessor Theory and Application***. PHI Learning.
*   **Singh, R., Gehlot, A., Singh, B., & Choudhury, S. (Year). *Arduino-Based Embedded Systems***.
*   **Baichtal, J. (Year). *Arduino for beginners: Essential Skills Every Maker Needs***. Person Education.
*   **Pajankar, A. (Year). *Arduino Made Simple***.
*   **Pont, M. J. (Year). *Embedded C***.
*   **Monk, S. (Year). *Programming Arduino Next Steps: Going Further with Sketches***.
*   **Hughes, J. M. (Year). *Arduino: A Technical Reference***. O'Reilly Media, Inc.
*   **Boxall, J. (Year). *Arduino Workshop: A Hands-On Introduction with 65 Projects***.
*   **Blum, J. (Year). *Exploring Arduino: Tools and Techniques for Engineering Wizardry***. WILEY.
