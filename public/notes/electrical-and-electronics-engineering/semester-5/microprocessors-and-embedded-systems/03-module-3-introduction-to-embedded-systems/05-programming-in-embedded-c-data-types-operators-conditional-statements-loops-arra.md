---
title: "Programming in Embedded C. Data types- operators, conditional statements- Loops, Arrays and functions- Built in functions in Arduino"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 3: Introduction to Embedded Systems "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36223"
status: "completed"
scrapedAt: "2026-05-23T16:22:51.377Z"
---
Here are comprehensive study notes for the topic "Programming in Embedded C: Data types, operators, conditional statements, Loops, Arrays and functions, Built-in functions in Arduino" from Module 3: Introduction to Embedded Systems in Microprocessors and Embedded Systems.

---

# Module 3: Introduction to Embedded Systems

## Topic: Programming in Embedded C

### 1. Introduction to Embedded C

Embedded C is a subset of the C programming language specifically tailored for embedded systems. It provides the power and flexibility of C while incorporating features and considerations relevant to resource-constrained environments, real-time operations, and direct hardware interaction.

**Key Characteristics of Embedded C:**

*   **Hardware-Specific Features:** Allows direct manipulation of hardware registers, memory addresses, and I/O ports.
*   **Resource Management:** Emphasis on efficient memory usage and processing power.
*   **Real-Time Constraints:** Often used in systems requiring predictable timing and responsiveness.
*   **Portability:** While C is portable, embedded C often includes compiler-specific extensions or pragmas for hardware access.

**Relevance to Course Outcomes:**

*   **CO3:** Understand and gain the basic idea about the embedded system and selection of processors. (Knowledge Level: K2) - Understanding Embedded C is fundamental to understanding how embedded systems are programmed.
*   **CO5:** Write Programs using Embedded C and implement an application using Arduino UNO board. (Knowledge Level: K3) - This topic directly supports the ability to write programs for Arduino.

**Textbook References:**

*   **Fundamentals of Microprocessor and Micro controllers by Ram, B:** Provides a foundational understanding of microcontroller programming, which is essential for Embedded C.
*   **Microprocessor, Architecture, Programming and Applications by Ramesh Gaonkar:** Offers insights into the low-level programming aspects that Embedded C leverages.
*   **Embedded C, Pont by Michael J:** A dedicated resource for understanding the nuances of Embedded C.

---

### 2. Data Types in Embedded C

Embedded C utilizes standard C data types, but understanding their size and representation on specific microcontrollers is crucial due to limited resources.

| Data Type | Description                                  | Typical Size (bits) | Range (Unsigned)         | Range (Signed)             | Example Usage                                |
| :-------- | :------------------------------------------- | :------------------ | :----------------------- | :------------------------- | :------------------------------------------- |
| `char`    | Stores a single character or small integer | 8                   | 0 to 255                 | -128 to 127                | Storing ASCII characters, small numbers      |
| `short`   | Stores a short integer                       | 16                  | 0 to 65,535              | -32,768 to 32,767          | Storing smaller integer values               |
| `int`     | Stores a standard integer                    | 16 or 32            | Varies (platform dependent) | Varies (platform dependent) | General-purpose integer storage              |
| `long`    | Stores a long integer                        | 32                  | Varies (platform dependent) | Varies (platform dependent) | Larger integer values                        |
| `float`   | Stores single-precision floating-point numbers | 32                  | Approx. ±3.4e38          | Approx. ±3.4e38            | Calculations involving decimals              |
| `double`  | Stores double-precision floating-point numbers | 64                  | Approx. ±1.7e308         | Approx. ±1.7e308           | Higher precision floating-point calculations |

**Important Considerations for Embedded Systems:**

*   **`signed` vs. `unsigned`:** Use `unsigned` for values that will never be negative (e.g., counts, memory addresses) to maximize the positive range.
*   **Fixed-Width Integers:** Many embedded C compilers provide fixed-width integer types (e.g., `int8_t`, `uint16_t`, `int32_t`) from `<stdint.h>`. These are highly recommended for predictable behavior across different platforms.
*   **Memory Footprint:** Smaller data types consume less memory. Choose the smallest data type that can accommodate your required range.

**Example:**

```c
// Using standard data types
char initial = 'A';
int count = 10;
float temperature = 25.5;

// Using fixed-width integer types (recommended)
#include <stdint.h>
uint8_t led_state = 0;      // For a single LED (0 or 1)
uint16_t sensor_value = 512; // For a 10-bit ADC reading
```

**Highlight:** Always prefer fixed-width integer types (`uint8_t`, `int16_t`, etc.) for predictable behavior and portability in embedded systems.

---

### 3. Operators in Embedded C

Operators are symbols that perform operations on variables and values. Embedded C uses the same operators as standard C.

#### 3.1 Arithmetic Operators

| Operator | Description | Example |
| :------- | :---------- | :------ |
| `+`      | Addition    | `a + b` |
| `-`      | Subtraction | `a - b` |
| `*`      | Multiplication | `a * b` |
| `/`      | Division    | `a / b` |
| `%`      | Modulo (Remainder) | `a % b` |

#### 3.2 Relational Operators

Used for comparisons. They return `1` (true) or `0` (false).

| Operator | Description           | Example |
| :------- | :-------------------- | :------ |
| `==`     | Equal to              | `a == b` |
| `!=`     | Not equal to          | `a != b` |
| `>`      | Greater than          | `a > b`  |
| `<`      | Less than             | `a < b`  |
| `>=`     | Greater than or equal to | `a >= b` |
| `<=`     | Less than or equal to | `a <= b` |

#### 3.3 Logical Operators

Used to combine or negate conditional statements.

| Operator | Description           | Example |
| :------- | :-------------------- | :------ |
| `&&`     | Logical AND           | `(a > 0) && (b < 10)` |
| `||`     | Logical OR            | `(a == 0) || (b == 5)` |
| `!`      | Logical NOT           | `!(a == 5)` |

#### 3.4 Bitwise Operators

Essential for direct hardware manipulation and efficient operations.

| Operator | Description           | Example |
| :------- | :-------------------- | :------ |
| `&`      | Bitwise AND           | `status & 0x01` (Check if the least significant bit is set) |
| `|`      | Bitwise OR            | `control_reg |= 0x02` (Set a specific bit) |
| `^`      | Bitwise XOR           | `data ^ mask` |
| `~`      | Bitwise NOT (Complement) | `~value` |
| `<<`     | Left Shift            | `value << 2` (Multiply by 4) |
| `>>`     | Right Shift           | `value >> 1` (Divide by 2) |

**Example:** Setting a specific bit in a control register.

```c
volatile uint8_t *PORTB = (volatile uint8_t *)0x05; // Example address for PORTB

// To set the 3rd bit (pin PB3) to high (1)
*PORTB |= (1 << 3); // (1 << 3) creates a byte with only the 3rd bit set (00001000)

// To clear the 3rd bit (pin PB3) to low (0)
*PORTB &= ~(1 << 3); // ~(1 << 3) creates a byte with all bits set except the 3rd (11110111)
```

**Highlight:** Bitwise operators are your primary tools for controlling individual hardware pins and bits within registers.

---

### 4. Conditional Statements in Embedded C

Conditional statements allow programs to make decisions based on specific conditions.

#### 4.1 `if`, `else if`, `else`

Executes a block of code if a condition is true, and optionally another block if the condition is false.

**Syntax:**

```c
if (condition) {
    // Code to execute if condition is true
} else if (another_condition) {
    // Code to execute if another_condition is true
} else {
    // Code to execute if all conditions are false
}
```

**Example (Arduino):** Turning an LED on or off based on a button press.

```c
int buttonPin = 2;
int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(buttonPin); // Read the state of the button

  if (buttonState == HIGH) { // If button is pressed (HIGH)
    digitalWrite(ledPin, HIGH); // Turn LED on
  } else { // If button is not pressed (LOW)
    digitalWrite(ledPin, LOW); // Turn LED off
  }
}
```

#### 4.2 `switch-case`

Allows selecting one of many code blocks to be executed. Useful when checking a variable against multiple constant values.

**Syntax:**

```c
switch (expression) {
    case constant_value_1:
        // Code for case 1
        break; // Exits the switch statement
    case constant_value_2:
        // Code for case 2
        break;
    // ... more cases
    default: // Optional
        // Code if none of the cases match
}
```

**Example:** Controlling an LED based on serial input.

```c
char incomingByte;

void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT); // Set pin 13 as output
}

void loop() {
  if (Serial.available() > 0) {
    incomingByte = Serial.read(); // Read the incoming byte

    switch (incomingByte) {
      case '1':
        digitalWrite(13, HIGH); // Turn LED ON
        break;
      case '0':
        digitalWrite(13, LOW);  // Turn LED OFF
        break;
      default:
        // Ignore other characters
        break;
    }
  }
}
```

**Highlight:** Use `if-else if-else` for complex conditions and `switch-case` for checking a single variable against multiple constant values. Always remember the `break` statement in `switch-case` to prevent fall-through.

---

### 5. Loops in Embedded C

Loops are used to execute a block of code repeatedly.

#### 5.1 `for` Loop

Used when the number of iterations is known beforehand.

**Syntax:**

```c
for (initialization; condition; update) {
    // Code to be executed in each iteration
}
```

**Example:** Blinking an LED 5 times.

```c
int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  for (int i = 0; i < 5; i++) {
    digitalWrite(ledPin, HIGH);
    delay(500); // Wait for 500 milliseconds
    digitalWrite(ledPin, LOW);
    delay(500);
  }
  // The loop finishes after 5 blinks, then the program continues.
  // In this simple example, it might re-run the for loop immediately.
}
```

#### 5.2 `while` Loop

Executes a block of code as long as a condition remains true. The condition is checked *before* each iteration.

**Syntax:**

```c
while (condition) {
    // Code to be executed while condition is true
}
```

**Example:** Waiting for a button to be pressed.

```c
int buttonPin = 2;
int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Wait here until the button is pressed
  while (digitalRead(buttonPin) == LOW) {
    // Do nothing, just keep checking the button
  }

  // Once the button is pressed (digitalRead returns HIGH)
  digitalWrite(ledPin, HIGH); // Turn the LED on
  delay(1000); // Keep it on for 1 second
  digitalWrite(ledPin, LOW);  // Turn the LED off
  delay(1000); // Wait a bit before checking the button again
}
```

#### 5.3 `do-while` Loop

Executes a block of code at least once, then continues to execute as long as a condition remains true. The condition is checked *after* each iteration.

**Syntax:**

```c
do {
    // Code to be executed
} while (condition);
```

**Example:** A simple menu system that always displays the options once.

```c
char choice;

void setup() {
  Serial.begin(9600);
  Serial.println("System Menu:");
}

void loop() {
  do {
    Serial.println("Enter '1' for Option 1, '2' for Option 2, 'q' to quit:");
    Serial.flush(); // Ensure buffer is clear

    // Wait until data is available from Serial
    while (!Serial.available()) {
      // Busy-wait, waiting for serial input
    }

    choice = Serial.read(); // Read the character

    switch (choice) {
      case '1':
        Serial.println("Executing Option 1...");
        // Add code for Option 1 here
        break;
      case '2':
        Serial.println("Executing Option 2...");
        // Add code for Option 2 here
        break;
      case 'q':
        Serial.println("Exiting menu.");
        break;
      default:
        Serial.println("Invalid choice. Please try again.");
        break;
    }
  } while (choice != 'q'); // Continue looping until 'q' is entered

  Serial.println("Program terminated.");
  while(1); // Halt the program
}
```

**Highlight:** Choose the loop that best suits the logic: `for` for known iterations, `while` for condition-based repetition (checking first), and `do-while` for at least one execution.

---

### 6. Arrays in Embedded C

Arrays are collections of elements of the same data type stored in contiguous memory locations.

**Declaration:**

```c
data_type array_name[array_size];
```

**Accessing Elements:**

Elements are accessed using an index, starting from 0.

```c
array_name[index]
```

**Example:** Storing a sequence of sensor readings.

```c
int sensorReadings[5]; // Declares an array to hold 5 integers

void setup() {
  Serial.begin(9600);
  // Initialize the array elements
  sensorReadings[0] = 100;
  sensorReadings[1] = 120;
  sensorReadings[2] = 115;
  sensorReadings[3] = 130;
  sensorReadings[4] = 125;

  // Print the array elements
  for (int i = 0; i < 5; i++) {
    Serial.print("Sensor Reading [");
    Serial.print(i);
    Serial.print("]: ");
    Serial.println(sensorReadings[i]);
  }
}

void loop() {
  // You could read new values and update the array here
}
```

**Example:** Using an array to control multiple LEDs.

```c
int ledPins[] = {10, 11, 12, 13}; // Array of pin numbers for LEDs
int numLeds = sizeof(ledPins) / sizeof(ledPins[0]); // Calculate number of LEDs

void setup() {
  // Initialize all LED pins as outputs
  for (int i = 0; i < numLeds; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void loop() {
  // Turn on LEDs one by one
  for (int i = 0; i < numLeds; i++) {
    digitalWrite(ledPins[i], HIGH);
    delay(200);
  }

  // Turn off LEDs one by one
  for (int i = 0; i < numLeds; i++) {
    digitalWrite(ledPins[i], LOW);
    delay(200);
  }
}
```

**Highlight:** Arrays are powerful for managing collections of data. Be mindful of array bounds to prevent buffer overflows, which can lead to unpredictable behavior in embedded systems.

---

### 7. Functions in Embedded C

Functions are blocks of reusable code that perform a specific task. They help in modularizing code, making it organized and easier to maintain.

**Structure of a Function:**

```c
return_type function_name(parameter_list) {
    // Function body: code to perform the task
    // ...
    return value; // If return_type is not void
}
```

*   **`return_type`:** The data type of the value the function returns. `void` if it doesn't return anything.
*   **`function_name`:** A unique identifier for the function.
*   **`parameter_list`:** A comma-separated list of variables (parameters) that the function accepts. Each parameter has a data type and a name.
*   **Function Body:** Contains the statements that the function executes.
*   **`return value;`:** The `return` statement sends a value back to the caller.

**Example:** A function to control a single LED.

```c
// Function definition
void controlLED(int pin, int state) {
  digitalWrite(pin, state);
}

int ledPin1 = 10;
int ledPin2 = 11;

void setup() {
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
}

void loop() {
  // Calling the function
  controlLED(ledPin1, HIGH); // Turn LED on pin 10 ON
  delay(500);
  controlLED(ledPin1, LOW);  // Turn LED on pin 10 OFF
  delay(500);

  controlLED(ledPin2, HIGH); // Turn LED on pin 11 ON
  delay(500);
  controlLED(ledPin2, LOW);  // Turn LED on pin 11 OFF
  delay(500);
}
```

**Example:** A function to calculate the average of two numbers.

```c
// Function definition that returns a float
float calculateAverage(float num1, float num2) {
  float sum = num1 + num2;
  return sum / 2.0;
}

void setup() {
  Serial.begin(9600);
  float val1 = 10.5;
  float val2 = 20.3;

  // Calling the function and storing the returned value
  float average = calculateAverage(val1, val2);

  Serial.print("The average of ");
  Serial.print(val1);
  Serial.print(" and ");
  Serial.print(val2);
  Serial.print(" is: ");
  Serial.println(average);
}

void loop() {
  // Nothing to do here for this example
}
```

**Highlight:** Functions promote code reusability and make programs more organized. `setup()` and `loop()` in Arduino are themselves functions, with `setup()` running once at the start and `loop()` running repeatedly.

---

### 8. Built-in Functions in Arduino

The Arduino environment provides a rich set of built-in functions that simplify interaction with hardware and common tasks. These are typically implemented in C/C++ and are part of the Arduino Core libraries.

**Key Categories of Built-in Arduino Functions:**

#### 8.1 Digital I/O

Control digital pins for input and output.

*   `pinMode(pin, mode)`: Configures a specific pin to behave either as an `INPUT`, `OUTPUT`, or `INPUT_PULLUP`.
    *   `pin`: The number of the pin.
    *   `mode`: `INPUT`, `OUTPUT`, or `INPUT_PULLUP`.
*   `digitalWrite(pin, value)`: Writes a `HIGH` (5V or 3.3V depending on board) or `LOW` (0V) to a digital pin.
    *   `pin`: The number of the pin.
    *   `value`: `HIGH` or `LOW`.
*   `digitalRead(pin)`: Reads the value from a specified digital pin, returning `HIGH` or `LOW`.
    *   `pin`: The number of the pin.

**Example:** Reading a button and controlling an LED.

```c
const int buttonPin = 2; // the number of the pushbutton pin
const int ledPin = 13;   // the number of the LED pin

int buttonState = 0;     // variable for reading the pushbutton status

void setup() {
  pinMode(ledPin, OUTPUT);      // initialize the LED pin as an output:
  pinMode(buttonPin, INPUT);    // initialize the button pin as an input:
}

void loop() {
  buttonState = digitalRead(buttonPin); // read the state of the button:

  if (buttonState == HIGH) { // if the button is pressed
    digitalWrite(ledPin, HIGH);  // turn LED on
  } else { // if the button is not pressed
    digitalWrite(ledPin, LOW);   // turn LED off
  }
}
```

#### 8.2 Analog I/O

Read analog values from pins (via Analog-to-Digital Converter - ADC) and generate PWM signals.

*   `analogRead(pin)`: Reads the value from the specified analog pin. Returns an integer between 0 and 1023 (for most Arduino boards).
    *   `pin`: The analog pin number (e.g., A0, A1).
*   `analogWrite(pin, value)`: Writes an analog value (PWM signal) to a pin. The value is between 0 (0% duty cycle) and 255 (100% duty cycle).
    *   `pin`: A PWM-enabled digital pin.
    *   `value`: An integer from 0 to 255.

**Example:** Reading a potentiometer and controlling LED brightness.

```c
const int potPin = A0; // Analog pin connected to the potentiometer
const int ledPin = 9;  // Digital pin connected to the LED (must support PWM)

int potValue = 0;    // variable to store the potentiometer reading
int brightness = 0;  // variable to store the LED brightness

void setup() {
  pinMode(ledPin, OUTPUT); // Set the LED pin as an output
}

void loop() {
  potValue = analogRead(potPin); // Read the analog value from the potentiometer

  // Map the potentiometer value (0-1023) to LED brightness (0-255)
  brightness = map(potValue, 0, 1023, 0, 255);

  analogWrite(ledPin, brightness); // Set the LED brightness

  delay(10); // Small delay for stability
}
```

#### 8.3 Timing

Functions for controlling time and delays.

*   `delay(ms)`: Pauses the program for the specified number of milliseconds.
    *   `ms`: The number of milliseconds to wait.
*   `millis()`: Returns the number of milliseconds since the Arduino board began running the current program. This is crucial for non-blocking timing.
    *   Returns an `unsigned long` integer.
*   `micros()`: Returns the number of microseconds since the Arduino board began running the current program.
    *   Returns an `unsigned long` integer.

**Example:** Using `millis()` for non-blocking blinking.

```c
const int ledPin = 13;

unsigned long previousMillis = 0; // will store last time LED was updated
const long interval = 1000;       // interval at which to blink (milliseconds)

int ledState = LOW;             // ledState used to set the LED
                               // current state of the LED

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  unsigned long currentMillis = millis(); // get the current time

  if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;

    // if the LED is off turn it on and vice-versa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }

    // set the LED with the ledState of the variable:
    digitalWrite(ledPin, ledState);
  }
  // The rest of your code can run here without being blocked by delay()
}
```

#### 8.4 Math Functions

Common mathematical operations.

*   `map(value, fromLow, fromHigh, toLow, toHigh)`: Remaps a number from one range to another. This is very useful for scaling sensor inputs to control actuators.
    *   `value`: The value to be mapped.
    *   `fromLow`, `fromHigh`: The lower and upper bounds of the input range.
    *   `toLow`, `toHigh`: The lower and upper bounds of the output range.
    *   Returns the mapped value.

**Example:** Already shown in the `analogWrite` example.

#### 8.5 Communication Functions

For serial communication (e.g., with a computer or other devices).

*   `Serial.begin(baudRate)`: Initializes serial communication at the specified baud rate.
*   `Serial.print(data)`: Sends data over serial without a newline.
*   `Serial.println(data)`: Sends data over serial with a newline character.
*   `Serial.read()`: Reads incoming serial data as a byte.
*   `Serial.available()`: Returns the number of bytes available to read from the serial port.

**Example:** Already shown in the `switch-case` and `analogRead` examples.

**Textbook References:**

*   **Arduino Cookbook by Michael Margolis:** This book is a treasure trove of examples and explanations for Arduino's built-in functions and programming techniques.
*   **Arduino for beginners: Essential Skills Every Maker Needs by John Baichtal:** Provides practical introductions to many of these functions.
*   **Programming Arduino Next Steps: Going Further with Sketches by Simon Monk:** Offers deeper dives into advanced uses of these functions.

**Highlight:** Understanding and effectively using Arduino's built-in functions is key to rapid prototyping and efficient embedded system development on the Arduino platform. Familiarize yourself with the documentation for these functions.

---

### 9. Practice Questions and Answers

**Question 1:**
Which data type is most suitable for storing the number of milliseconds since a microcontroller started, ensuring it can handle large values without overflow?
a) `int`
b) `short`
c) `unsigned long`
d) `float`

**Answer:** c) `unsigned long`

**Explanation:** `unsigned long` is a 32-bit unsigned integer type, capable of storing values up to 4,294,967,295. Millisecond counts can grow very large, and `unsigned long` is designed to accommodate this. `int` and `short` are typically smaller, and `float` is for floating-point numbers and less precise for exact counts.

---

**Question 2:**
You want to set the 5th bit (counting from 0, so bit index 4) of a variable `status_register`. Which bitwise operation would you use?
a) `status_register >> 4;`
b) `status_register | (1 << 4);`
c) `status_register & ~(1 << 4);`
d) `status_register ^ (1 << 4);`

**Answer:** b) `status_register | (1 << 4);`

**Explanation:**
*   `1 << 4` creates a binary number `00010000` (with the 4th bit set).
*   The bitwise OR operator (`|`) combines the bits. If a bit is 1 in either operand, the resulting bit is 1. This effectively sets the 4th bit to 1 without affecting other bits.
*   `>>` is right shift.
*   `& ~` is used to clear a bit.
*   `^` is XOR, which toggles bits.

---

**Question 3:**
Describe the difference between a `while` loop and a `do-while` loop. Provide a scenario where one would be preferred over the other.

**Answer:**
*   **`while` loop:** The condition is checked *before* the loop body is executed. If the condition is initially false, the loop body will never execute.
*   **`do-while` loop:** The loop body is executed *at least once*, and then the condition is checked. If the condition is true, the loop continues; otherwise, it terminates.

**Scenario:**
*   **`while` loop preferred:** If you need to poll a sensor, but you only want to process its value *if* it has changed since the last reading. If it hasn't changed, you might skip the processing entirely.
    ```c
    int sensorValue = readSensor();
    while(sensorValue != lastSensorValue) {
        processSensorData(sensorValue);
        lastSensorValue = sensorValue;
        sensorValue = readSensor();
    }
    ```
*   **`do-while` loop preferred:** When you need to present a menu of options to the user and get their input at least once, regardless of whether there's any input pending initially.
    ```c
    char choice;
    do {
        displayMenu();
        choice = getUserInput();
    } while (choice != 'q');
    ```

---

**Question 4:**
Write an Arduino sketch that makes an LED connected to pin 13 blink every 2 seconds using the `millis()` function for timing.

**Answer:**

```c
const int ledPin = 13;

// Variables to store the state and timing
unsigned long previousMillis = 0; // Stores the time when the LED was last toggled
const long interval = 2000;       // Interval for blinking (2000 milliseconds = 2 seconds)
int ledState = LOW;               // Current state of the LED

void setup() {
  // Initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Get the current time
  unsigned long currentMillis = millis();

  // Check if the interval has passed since the last toggle
  if (currentMillis - previousMillis >= interval) {
    // Save the current time as the last toggle time
    previousMillis = currentMillis;

    // Toggle the LED state
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }

    // Update the LED state
    digitalWrite(ledPin, ledState);
  }
  // Other code can run here without being blocked by a delay()
}
```

---

### 10. Important Points to Remember

*   **Resource Constraints:** Embedded systems often have limited memory (RAM, Flash) and processing power. Choose data types and algorithms carefully to optimize resource usage.
*   **Hardware Interaction:** Embedded C directly manipulates hardware registers. Understanding memory-mapped I/O and bitwise operations is critical.
*   **Real-Time Behavior:** For time-sensitive applications, avoid blocking functions like `delay()` when possible. Use `millis()` or timers for non-blocking operations.
*   **Portability:** Use fixed-width integer types (`<stdint.h>`) for greater portability and predictable behavior across different microcontroller architectures.
*   **Arduino Functions:** Leverage Arduino's extensive library of built-in functions for simplified hardware control and common tasks.
*   **Debugging:** Debugging embedded systems can be challenging. Use `Serial.print()` extensively to monitor variable values and program flow.

---
