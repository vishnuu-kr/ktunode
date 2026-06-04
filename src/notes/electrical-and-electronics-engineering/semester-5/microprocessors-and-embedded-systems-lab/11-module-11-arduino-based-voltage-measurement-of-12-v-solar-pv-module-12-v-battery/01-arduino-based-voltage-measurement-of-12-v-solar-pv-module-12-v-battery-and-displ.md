---
title: "Arduino based voltage measurement of 12 V solar PV module /12 V battery and displaying the measured value using 12C LCD display.."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 11: Arduino based voltage measurement of 12 V solar PV module /12 V battery and displaying the measured value using 12C LCD display.."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36507"
status: "completed"
scrapedAt: "2026-05-23T16:23:18.604Z"
---
# Microprocessors and Embedded Systems Lab: Module 11 - Arduino Voltage Measurement & I2C LCD Display

This module focuses on practical application of microcontrollers for real-world sensing and display tasks. We will utilize the Arduino platform, a popular choice for embedded systems development due to its ease of use and extensive libraries, to measure voltages from common power sources like a 12V solar PV module or a 12V battery and present this information on an I2C LCD display.

---

## 1. Introduction to Voltage Measurement and Display Systems

### 1.1. Importance of Voltage Measurement in Embedded Systems

*   **Monitoring Power Sources:** Crucial for understanding the health and status of batteries, solar panels, and other power supplies.
*   **System Health and Diagnostics:** Deviations from expected voltage levels can indicate faults or performance issues.
*   **User Feedback:** Providing real-time information to users about system status.
*   **Data Logging:** Recording voltage variations over time for analysis.

### 1.2. Overview of the Project Goal

The primary objective is to build an embedded system that:
*   Measures the voltage of a 12V source (Solar PV module or Battery).
*   Processes this measurement using an Arduino.
*   Displays the measured voltage value on a 16x2 or 20x4 I2C LCD display.

---

## 2. Understanding the Components

### 2.1. Arduino Uno (or similar Arduino board)

*   **Microcontroller:** Typically an Atmel ATmega328P (or similar).
*   **Analog-to-Digital Converter (ADC):** Built-in functionality to convert analog voltage signals into digital values that the microcontroller can process.
*   **Digital Input/Output (I/O) Pins:** Used for connecting sensors, displays, and other peripherals.
*   **I2C Communication Protocol:** A serial communication protocol that allows multiple devices to communicate with each other using only two wires (SDA and SCL).

**Reference:** While the provided textbooks (Ayala, LylaB.Das, MacKenzie, Mazidi) primarily focus on the 8051 microcontroller, the fundamental principles of analog-to-digital conversion and serial communication are transferable. The Arduino's architecture simplifies these processes through its integrated peripherals and libraries.

### 2.2. 12V Solar PV Module / 12V Battery

*   **Voltage Source:** These are the devices whose voltage we intend to measure.
*   **Voltage Range:** Designed to operate around a nominal 12V. The actual voltage can vary depending on load, sunlight intensity (for PV), and state of charge (for battery).

### 2.3. I2C LCD Display

*   **Liquid Crystal Display (LCD):** A common display technology for showing text and simple graphics.
*   **I2C Interface:** This module uses an I2C interface, which significantly reduces the number of pins required for connection compared to traditional parallel LCDs.
    *   **SDA (Serial Data Line):** Carries the data.
    *   **SCL (Serial Clock Line):** Carries the clock signal to synchronize data transfer.
    *   **VCC:** Power supply (typically 5V).
    *   **GND:** Ground.

**Key Concept:** The I2C interface uses a master-slave architecture. The Arduino acts as the **master**, initiating and controlling the communication, while the I2C LCD module acts as the **slave**.

---

## 3. Voltage Measurement with Arduino

### 3.1. Analog-to-Digital Conversion (ADC) on Arduino

*   **How it works:** The Arduino's microcontroller has ADC channels that can read analog voltage levels (typically between 0V and 5V for most Arduino boards).
*   **Resolution:** The Arduino Uno's ATmega328P has a 10-bit ADC, meaning it can distinguish between 2^10 = 1024 different voltage levels.
*   **Mapping:** The input voltage is mapped to a digital value between 0 and 1023.
    *   0V corresponds to digital value 0.
    *   5V (the reference voltage, `AREF`) corresponds to digital value 1023.
*   **Formula for ADC Reading:**
    `digital_value = analogRead(analog_pin);`

### 3.2. The Voltage Divider Circuit

*   **Problem:** The Arduino's ADC can only safely measure voltages up to its reference voltage (typically 5V). Directly connecting a 12V source to an Arduino pin will damage the microcontroller.
*   **Solution:** Use a **voltage divider circuit** to reduce the 12V signal to a voltage within the Arduino's measurable range (0-5V).
*   **Voltage Divider Formula:**
    $V_{out} = V_{in} \times \frac{R2}{R1 + R2}$
    Where:
    *   $V_{out}$ is the voltage across resistor R2 (connected to the Arduino's analog pin).
    *   $V_{in}$ is the input voltage (from the 12V source).
    *   R1 and R2 are the resistances of the two resistors in series.

*   **Design Consideration:** To measure up to 12V, we need $V_{out}$ to be at most 5V. Let's aim for a ratio that allows us to measure slightly above 12V, for safety. A common ratio for this purpose is a 2:1 voltage divider, meaning R1 is twice the value of R2.
    *   **Example:** Let R2 = 10kΩ. Then R1 = 20kΩ.
    *   If $V_{in}$ = 12V, then $V_{out} = 12V \times \frac{10k\Omega}{20k\Omega + 10k\Omega} = 12V \times \frac{10}{30} = 4V$.
    *   This 4V is well within the Arduino's 0-5V range.

*   **Calculating the Actual Voltage from ADC Reading:**
    1.  **Convert ADC value to voltage:**
        $V_{measured} = \text{digital\_value} \times \frac{\text{AREF\_voltage}}{\text{ADC\_resolution}}$
        $V_{measured} = \text{digital\_value} \times \frac{5V}{1024}$
    2.  **Calculate the original input voltage using the voltage divider ratio:**
        $V_{in} = V_{measured} \times \frac{R1 + R2}{R2}$

    *   **Combined Formula:**
        $V_{in} = \left( \text{digital\_value} \times \frac{5V}{1024} \right) \times \frac{R1 + R2}{R2}$

    *   **Using our example (R1=20kΩ, R2=10kΩ):**
        $V_{in} = \left( \text{digital\_value} \times \frac{5}{1024} \right) \times \frac{20000 + 10000}{10000}$
        $V_{in} = \left( \text{digital\_value} \times \frac{5}{1024} \right) \times 3$

**Important Point to Remember:** Always use a voltage divider when measuring voltages higher than the Arduino's reference voltage to prevent damage.

---

## 4. Interfacing with the I2C LCD Display

### 4.1. Understanding the I2C Protocol

*   **Master-Slave:** Arduino is the master, LCD is the slave.
*   **Bus:** Uses two wires: SDA (data) and SCL (clock).
*   **Address:** Each I2C device has a unique address. The I2C LCD module typically has a default address (e.g., 0x27 or 0x3F). This address is crucial for the Arduino to communicate with the correct device.
*   **Data Transfer:**
    *   Master sends a START condition.
    *   Master sends the slave address (with a read/write bit).
    *   Slave acknowledges receipt of the address.
    *   Master sends data bytes.
    *   Slave acknowledges each data byte.
    *   Master sends a STOP condition.

### 4.2. Arduino Libraries for I2C LCD

*   **`Wire.h`:** The built-in Arduino library for I2C communication.
*   **`LiquidCrystal_I2C.h`:** A widely used library specifically for I2C LCD displays. This library simplifies the process of sending commands and data to the LCD.

### 4.3. Connecting the I2C LCD to Arduino

| I2C LCD Pin | Arduino Pin | Description                                   |
| :---------- | :---------- | :-------------------------------------------- |
| VCC         | 5V          | Power supply for the LCD                      |
| GND         | GND         | Ground                                        |
| SDA         | A4 (or SDA) | Serial Data Line. Connect to Arduino's SDA.   |
| SCL         | A5 (or SCL) | Serial Clock Line. Connect to Arduino's SCL.  |

**Note:** The specific analog pins for I2C (A4/A5) are common on Arduino Uno, Nano, and Mega boards. For other Arduino boards, refer to their pinout diagrams.

---

## 5. Programming the Arduino

### 5.1. Setting up the Arduino IDE

1.  **Install Arduino IDE:** Download and install from the official Arduino website.
2.  **Install `LiquidCrystal_I2C` library:**
    *   Open the Arduino IDE.
    *   Go to `Sketch` > `Include Library` > `Manage Libraries...`.
    *   Search for "LiquidCrystal I2C" and install the library (e.g., the one by Frank de Brabander or similar popular versions).

### 5.2. The Arduino Sketch (Code Structure)

```cpp
#include <Wire.h> // For I2C communication
#include <LiquidCrystal_I2C.h> // For I2C LCD display

// --- Configuration ---
// Define the analog pin connected to the voltage divider's output
const int analogPin = A0;

// Define the voltage divider resistors (e.g., R1 = 20k, R2 = 10k)
const float R1 = 20000.0; // Resistance of R1 in ohms
const float R2 = 10000.0; // Resistance of R2 in ohms

// Define the reference voltage of the Arduino (usually 5V for Uno)
const float AREF_VOLTAGE = 5.0;

// Define the LCD I2C address (check your LCD module, common ones are 0x27 or 0x3F)
// You might need to run an I2C scanner sketch to find the correct address
const int lcdAddress = 0x27;

// Define the LCD dimensions (columns, rows)
const int lcdCols = 16;
const int lcdRows = 2;

// Initialize the LCD object
LiquidCrystal_I2C lcd(lcdAddress, lcdCols, lcdRows);

void setup() {
  // Initialize Serial communication for debugging
  Serial.begin(9600);
  Serial.println("I2C LCD Voltage Meter Starting...");

  // Initialize the LCD display
  lcd.init();
  // Turn on the backlight (optional)
  lcd.backlight();
  // Print a welcome message
  lcd.setCursor(0, 0); // Set cursor to column 0, row 0
  lcd.print("Voltage:");
}

void loop() {
  // 1. Read the analog value from the voltage divider
  int adcValue = analogRead(analogPin);

  // 2. Convert ADC value to voltage at the Arduino pin
  float voltageAtPin = adcValue * (AREF_VOLTAGE / 1024.0);

  // 3. Calculate the original input voltage using the voltage divider formula
  // V_in = V_out * (R1 + R2) / R2
  float inputVoltage = voltageAtPin * ((R1 + R2) / R2);

  // 4. Display the measured voltage on the LCD
  lcd.setCursor(0, 1); // Move cursor to the second line (row 1)
  // Print the voltage with 2 decimal places
  lcd.print(inputVoltage, 2);
  lcd.print(" V");

  // 5. Print to Serial Monitor for debugging (optional)
  Serial.print("ADC Value: ");
  Serial.print(adcValue);
  Serial.print(", Voltage at Pin: ");
  Serial.print(voltageAtPin, 3);
  Serial.print("V, Input Voltage: ");
  Serial.print(inputVoltage, 2);
  Serial.println("V");

  // Delay before the next reading
  delay(1000); // Read and update every 1 second
}
```

### 5.3. Explaining Key Code Segments

*   `#include <Wire.h>` and `#include <LiquidCrystal_I2C.h>`: Include necessary libraries.
*   `const int analogPin = A0;`: Defines which analog pin is used.
*   `const float R1 = 20000.0; const float R2 = 10000.0;`: Define the resistor values used in the voltage divider. **Crucial to match these with your actual circuit.**
*   `const float AREF_VOLTAGE = 5.0;`: The voltage reference for the ADC. For most Arduinos, this is 5V.
*   `const int lcdAddress = 0x27;`: The I2C address of your LCD module.
*   `LiquidCrystal_I2C lcd(lcdAddress, lcdCols, lcdRows);`: Creates an instance of the LCD object.
*   `lcd.init();` and `lcd.backlight();`: Initializes the LCD and turns on the backlight.
*   `lcd.setCursor(col, row);`: Positions the cursor on the LCD.
*   `lcd.print(value, decimal_places);`: Prints data to the LCD. The second argument specifies the number of decimal places.
*   `analogRead(analogPin);`: Reads the raw ADC value from the specified pin.
*   `adcValue * (AREF_VOLTAGE / 1024.0);`: Converts the raw ADC reading to a voltage within the Arduino's range.
*   `voltageAtPin * ((R1 + R2) / R2);`: Scales the voltage back up to the original input voltage based on the voltage divider ratio.
*   `delay(1000);`: Pauses the program for 1000 milliseconds (1 second).

---

## 6. Practical Implementation and Troubleshooting

### 6.1. Building the Circuit

1.  **Connect the Voltage Divider:**
    *   Connect the 12V source (e.g., Solar PV positive terminal) to one end of R1.
    *   Connect the other end of R1 to one end of R2.
    *   Connect the common junction of R1 and R2 to the Arduino's analog pin (e.g., A0).
    *   Connect the other end of R2 to the Arduino's GND.
    *   Connect the 12V source (e.g., Solar PV negative terminal) to the Arduino's GND.
2.  **Connect the I2C LCD:**
    *   Connect VCC to Arduino 5V.
    *   Connect GND to Arduino GND.
    *   Connect SDA to Arduino A4 (or SDA pin).
    *   Connect SCL to Arduino A5 (or SCL pin).

### 6.2. Common Issues and Troubleshooting

*   **LCD Not Displaying Anything:**
    *   **Check Wiring:** Ensure VCC, GND, SDA, and SCL are connected correctly.
    *   **Check I2C Address:** The most common issue. Use an I2C scanner sketch to find the correct address of your LCD. If your address is different from `0x27`, update the `lcdAddress` variable in the code.
    *   **Check Backlight:** Some LCDs have a separate backlight potentiometer; ensure it's adjusted.
    *   **Try a different library:** Sometimes, specific versions of libraries work better with certain LCD modules.
*   **Incorrect Voltage Readings:**
    *   **Check Voltage Divider Resistors:** Ensure the resistor values (R1 and R2) in your code **exactly match** the physical resistors used in your circuit.
    *   **Verify AREF:** Confirm your Arduino's operating voltage (usually 5V).
    *   **ADC Accuracy:** The ADC is not perfectly linear, especially at the extreme ends. For very precise measurements, calibration might be needed, but for this lab, the standard formula is sufficient.
    *   **Loose Connections:** Check all solder joints and connections in the voltage divider circuit.
*   **Arduino Not Uploading:**
    *   **Correct Board and Port:** Ensure the correct Arduino board and COM port are selected in the Arduino IDE.
    *   **USB Cable:** Try a different USB cable.

### 6.3. Finding the I2C Address (I2C Scanner Sketch)

If you don't know your LCD's I2C address, upload the following sketch to your Arduino. Open the Serial Monitor, and it will list the addresses of I2C devices connected to the bus.

```cpp
#include <Wire.h>

void setup() {
  Wire.begin(); // Initialize I2C communication
  Serial.begin(9600);
  Serial.println("\nI2C Scanner");
  Serial.println("Scanning for devices...");
}

void loop() {
  byte error, address;
  int nDevices = 0;

  // Try to find devices on the I2C bus
  for (address = 1; address < 127; address++) {
    Wire.beginTransmission(address);
    error = Wire.endTransmission();

    if (error == 0) {
      Serial.print("I2C device found at address 0x");
      if (address < 16) {
        Serial.print("0"); // Pad with a leading zero for single-digit addresses
      }
      Serial.print(address, HEX);
      Serial.println(" !");

      nDevices++;
    } else if (error == 4) {
      // NACK (No Acknowledgment) means the device isn't there
      // No need to print anything for error 4
    } else {
      // Other errors can indicate problems with the bus or device
      Serial.print("Error on address ");
      Serial.print(address, HEX);
      Serial.print(" - ");
      Serial.println(error);
    }
  }

  if (nDevices == 0) {
    Serial.println("No I2C devices found.");
  } else {
    Serial.print("Found ");
    Serial.print(nDevices);
    Serial.println(" device(s).");
  }

  Serial.println("---------------------------");
  delay(5000); // Wait 5 seconds before scanning again
}
```

---

## 7. Alignment with Course Outcomes

This module directly addresses several course outcomes:

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)**
    *   While this lab uses Arduino C++, the underlying principles of arithmetic operations (multiplication, division) and logical flow (if-else, loops) are fundamental to microcontroller programming, and are exercised in solving the voltage calculation problem. The arithmetic involved in the voltage divider calculation and ADC conversion directly relates to this outcome.

*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)**
    *   Although the platform is Arduino, the structure of the C code, the use of variables, data types, functions (`setup()`, `loop()`), and control flow directly mirrors embedded C programming practices applicable to the 8051. Understanding how the Arduino handles serial communication and ADC through its libraries builds a foundation for appreciating how these functions are implemented at a lower level, which is relevant to understanding 8051 instruction sets.

*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)**
    *   This is a core outcome for this module. We examine the circuit for interfacing the Arduino (processor) with:
        *   **Voltage Divider:** A passive circuit for voltage scaling.
        *   **I2C LCD:** An active peripheral device using a specific communication protocol (I2C).
    *   Understanding the pin connections and the purpose of each component in the interface is central to this outcome.

*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)**
    *   This module is a direct exercise in designing a simple microcontroller-based system. The student designs the voltage divider circuit, selects appropriate resistors, connects the LCD, and writes the software to integrate these components into a functional system for voltage measurement and display.

*   **CO5: Design an Arduino based system with the help of various interfacing devices (Knowledge Level: K6)**
    *   This is the most direct alignment. The entire module is about designing an Arduino-based system, including the hardware interface (voltage divider, LCD connection) and the software logic to achieve the desired functionality.

---

## 8. Practice Questions and Exercises

**Question 1:**
A solar PV module is measured to produce a voltage of 13.5V under certain conditions. If you are using a voltage divider circuit with R1 = 30kΩ and R2 = 10kΩ, and the Arduino's analog reading is 700. Assuming the Arduino's reference voltage is 5V and its ADC resolution is 10 bits, calculate the following:
a) The voltage measured at the Arduino's analog pin.
b) The original voltage of the solar PV module based on your calculation and the voltage divider parameters.

**Answer 1:**
a) **Voltage at the Arduino's analog pin:**
   The ADC resolution is 10 bits, meaning 1024 levels (0-1023).
   $V_{measured} = \text{ADC value} \times \frac{\text{AREF\_voltage}}{\text{ADC resolution}}$
   $V_{measured} = 700 \times \frac{5V}{1024}$
   $V_{measured} \approx 700 \times 0.0048828V$
   $V_{measured} \approx 3.418V$

b) **Original voltage of the solar PV module:**
   Using the voltage divider formula: $V_{in} = V_{out} \times \frac{R1 + R2}{R2}$
   $V_{in} = 3.418V \times \frac{30k\Omega + 10k\Omega}{10k\Omega}$
   $V_{in} = 3.418V \times \frac{40k\Omega}{10k\Omega}$
   $V_{in} = 3.418V \times 4$
   $V_{in} \approx 13.672V$
   *(Note: Slight discrepancies from the stated 13.5V can be due to ADC quantization, resistor tolerances, or the stated 13.5V being an approximation).*

**Question 2:**
You are designing a system to measure a 12V battery. You want to use a voltage divider with resistors R1 and R2. If R2 is a standard 10kΩ resistor, what value should R1 be so that the maximum voltage fed to the Arduino's analog pin (assuming 5V AREF) does not exceed 4V?

**Answer 2:**
We want the output voltage ($V_{out}$) to be at most 4V when the input voltage ($V_{in}$) is 12V.
Using the voltage divider formula: $V_{out} = V_{in} \times \frac{R2}{R1 + R2}$
We want to find R1 when $V_{out} = 4V$, $V_{in} = 12V$, and $R2 = 10k\Omega$.

$4V = 12V \times \frac{10k\Omega}{R1 + 10k\Omega}$

Divide both sides by 12V:
$\frac{4V}{12V} = \frac{10k\Omega}{R1 + 10k\Omega}$
$\frac{1}{3} = \frac{10k\Omega}{R1 + 10k\Omega}$

Cross-multiply:
$1 \times (R1 + 10k\Omega) = 3 \times 10k\Omega$
$R1 + 10k\Omega = 30k\Omega$

Subtract 10kΩ from both sides:
$R1 = 30k\Omega - 10k\Omega$
$R1 = 20k\Omega$

So, R1 should be 20kΩ.

**Question 3:**
What are the two main wires used for I2C communication, and what roles do they play?

**Answer 3:**
The two main wires used for I2C communication are:
1.  **SDA (Serial Data Line):** This line carries the actual data being transmitted between the master (Arduino) and the slave (LCD display).
2.  **SCL (Serial Clock Line):** This line carries the clock signal that synchronizes the data transfer between the master and the slave. The master generates this clock signal.

---

## 9. Important Points to Remember

*   **Voltage Division is Crucial:** Never connect a voltage source higher than your microcontroller's operating voltage (typically 5V for Arduino) directly to an analog input pin. Always use a voltage divider.
*   **Resistor Values Matter:** Ensure the R1 and R2 values in your code accurately reflect the physical resistors used in your voltage divider circuit.
*   **I2C Address:** The I2C address of your LCD is critical. If the LCD is not working, this is the first thing to check. Use an I2C scanner sketch.
*   **Library Inclusion:** Make sure you have included the necessary libraries (`Wire.h` and `LiquidCrystal_I2C.h`) and that the `LiquidCrystal_I2C` library is installed.
*   **Pin Connections:** Double-check all physical connections between the Arduino, the voltage divider, and the LCD.
*   **Debugging:** Use the Serial Monitor (`Serial.begin()`, `Serial.print()`) to debug your code and understand the intermediate values of your calculations.

---

This comprehensive set of notes should provide a solid foundation for understanding and implementing the Arduino-based voltage measurement and I2C LCD display project. Remember to consult the textbooks and reference books for deeper theoretical insights into microcontrollers and embedded systems concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
