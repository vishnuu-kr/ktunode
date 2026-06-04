---
title: "Programming Raspberry Pi with Python-Controlling LED with Raspberry Pi"
subject: "INTERNET OF THINGS"
module: "Module 4: Programming Raspberry Pi with Python"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd1b"
status: "completed"
scrapedAt: "2026-05-20T17:24:59.570Z"
---
# INTERNET OF THINGS
## Module 4: Programming Raspberry Pi with Python
### Topic: Programming Raspberry Pi with Python - Controlling an LED with Raspberry Pi

---

### **Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental concepts of controlling hardware devices with a Raspberry Pi.
*   Identify and understand the purpose of the GPIO (General Purpose Input/Output) pins on the Raspberry Pi.
*   Learn how to set up and use the `RPi.GPIO` Python library for GPIO control.
*   Write Python code to turn an LED on and off.
*   Implement basic timing and control for LED blinking.
*   Understand and apply the concept of **digital output** for controlling electronic components.

---

### **1. Introduction to Controlling Hardware with Raspberry Pi**

The Raspberry Pi is a versatile microcomputer capable of interacting with the physical world. This interaction is primarily achieved through its **GPIO pins**. These pins act as a bridge between the software (your Python code) and external electronic components like LEDs, buttons, sensors, and motors.

*   **What is a Raspberry Pi?**
    *   A small, credit-card-sized single-board computer.
    *   Runs a Linux-based operating system (Raspberry Pi OS).
    *   Equipped with a range of connectors, including USB, HDMI, Ethernet, and importantly, **GPIO pins**.

*   **What are GPIO Pins?**
    *   **General Purpose Input/Output** pins.
    *   These pins can be configured as either an **input** (to read signals from devices) or an **output** (to send signals to devices).
    *   They operate at **3.3V logic levels**.

---

### **2. Understanding Raspberry Pi GPIO Pins**

It's crucial to understand the layout and function of the GPIO pins.

*   **GPIO Header:**
    *   Most Raspberry Pi models have a 40-pin GPIO header.
    *   These pins have specific numbering schemes:
        *   **BCM (Broadcom) Numbering:** This refers to the chip's numbering system. It's generally recommended for Python programming as it's more consistent across different Pi models.
        *   **BOARD Numbering:** This refers to the physical pin number on the header.

*   **Key Pin Types:**
    *   **Power Pins:** Provide power to connected components (e.g., 3.3V, 5V, GND - Ground).
        *   **Important:** Always connect grounds together (common ground).
    *   **GPIO Pins:** The programmable pins that can be set as input or output.
    *   **Special Function Pins:** Some pins might be dedicated to specific functions like SPI, I2C, UART, or PWM.

*   **Example GPIO Pinout (Raspberry Pi 4 Model B):**
    ```
    (Visualize a 40-pin header here. You can refer to online diagrams for the exact layout.
     For example: Pin 1 is 3.3V, Pin 2 is 5V, Pin 3 is GPIO2, Pin 4 is 5V, Pin 5 is GPIO3, etc.
     BCM numbering is often shown alongside.)
    ```

*   **Important Note:**
    *   Always refer to a pinout diagram specific to your Raspberry Pi model when working with GPIO.

---

### **3. Introduction to the `RPi.GPIO` Python Library**

The `RPi.GPIO` library provides a user-friendly interface for controlling the GPIO pins of your Raspberry Pi using Python.

*   **Installation:**
    *   The `RPi.GPIO` library is usually pre-installed on Raspberry Pi OS.
    *   If not, you can install it using: `sudo apt update && sudo apt install python3-rpi.gpio`

*   **Core Concepts:**
    *   **Importing the Library:**
        ```python
        import RPi.GPIO as GPIO
        ```
    *   **Setting the Pin Numbering Mode:**
        *   `GPIO.setmode(GPIO.BCM)`: Use BCM numbering.
        *   `GPIO.setmode(GPIO.BOARD)`: Use physical pin numbering.
        *   **Recommendation:** Use `GPIO.BCM` for consistency.
    *   **Setting Up a Pin:**
        *   Configuring a GPIO pin as an output:
            ```python
            GPIO.setup(pin_number, GPIO.OUT)
            ```
        *   Configuring a GPIO pin as an input:
            ```python
            GPIO.setup(pin_number, GPIO.IN)
            ```
    *   **Controlling Output Pins:**
        *   Turning an LED ON (setting the pin to HIGH):
            ```python
            GPIO.output(pin_number, GPIO.HIGH)
            ```
        *   Turning an LED OFF (setting the pin to LOW):
            ```python
            GPIO.output(pin_number, GPIO.LOW)
            ```
    *   **Cleaning Up GPIO Settings:**
        *   It's good practice to clean up the GPIO settings when your script finishes to reset the pins to their default state.
        ```python
        GPIO.cleanup()
        ```
        *   This can be done at the end of your script or within a `try...finally` block to ensure it runs even if errors occur.

---

### **4. Controlling an LED: The Basic Circuit**

To control an LED, you need to connect it to the Raspberry Pi's GPIO pins correctly.

*   **Components Needed:**
    *   Raspberry Pi (with Raspbian OS or similar)
    *   LED (Light Emitting Diode)
    *   Resistor (e.g., 220-ohm or 330-ohm) - **Crucial for protecting the LED and Pi!**
    *   Jumper wires (male-to-female or male-to-male depending on your setup)
    *   Breadboard (optional but recommended for easy connections)

*   **Circuit Diagram and Explanation:**
    *   **LED Polarity:** LEDs have a positive leg (anode, usually longer) and a negative leg (cathode, usually shorter).
    *   **Connection:**
        1.  Connect a **3.3V or 5V pin** from the Raspberry Pi to one end of the **resistor**.
        2.  Connect the other end of the **resistor** to the **longer leg (anode)** of the LED.
        3.  Connect the **shorter leg (cathode)** of the LED to a **Ground (GND) pin** on the Raspberry Pi.
        4.  **Alternatively, to control the LED with a GPIO pin:**
            1.  Connect a **GPIO pin** (e.g., GPIO 17) to one end of the **resistor**.
            2.  Connect the other end of the **resistor** to the **longer leg (anode)** of the LED.
            3.  Connect the **shorter leg (cathode)** of the LED to a **Ground (GND) pin** on the Raspberry Pi.

*   **Why a Resistor?**
    *   The Raspberry Pi's GPIO pins can only safely provide a limited amount of current (typically 16mA per pin, 50mA total).
    *   LEDs require a specific current to operate without burning out.
    *   The resistor limits the current flowing through the LED, protecting both the LED and the Raspberry Pi. A typical value for a standard LED with the Pi's 3.3V output is around 220-330 ohms.

---

### **5. Python Code: Turning an LED ON and OFF**

Let's write the Python code to control an LED.

**Example Scenario:** We'll use **GPIO pin 17** (BCM numbering) to control an LED.

```python
import RPi.GPIO as GPIO
import time # Import the time module for delays

# --- Configuration ---
LED_PIN = 17  # Use BCM numbering for GPIO 17

# --- Setup ---
GPIO.setmode(GPIO.BCM)        # Set the pin numbering scheme to BCM
GPIO.setup(LED_PIN, GPIO.OUT) # Set the LED_PIN as an output pin

# --- Main Program ---
try:
    print("Turning LED ON...")
    GPIO.output(LED_PIN, GPIO.HIGH) # Turn the LED ON
    time.sleep(5)                   # Keep the LED ON for 5 seconds

    print("Turning LED OFF...")
    GPIO.output(LED_PIN, GPIO.LOW)  # Turn the LED OFF
    time.sleep(2)                   # Keep the LED OFF for 2 seconds

except KeyboardInterrupt:
    # If the user presses Ctrl+C, exit gracefully
    print("\nProgram interrupted by user.")

finally:
    # Clean up the GPIO settings
    GPIO.cleanup()
    print("GPIO cleaned up. Exiting.")
```

**How to Run the Code:**

1.  Save the code as a Python file (e.g., `led_control.py`) on your Raspberry Pi.
2.  Open a terminal on your Raspberry Pi.
3.  Navigate to the directory where you saved the file.
4.  Run the script with root privileges (required for GPIO access):
    ```bash
    sudo python3 led_control.py
    ```

---

### **6. Python Code: Making an LED Blink**

A common introductory example is making an LED blink. This demonstrates timing and repeating actions.

```python
import RPi.GPIO as GPIO
import time

# --- Configuration ---
LED_PIN = 17  # Use BCM numbering for GPIO 17
BLINK_DELAY = 1 # Delay in seconds for blinking

# --- Setup ---
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

# --- Main Program ---
print(f"Starting LED blinking on GPIO {LED_PIN}. Press Ctrl+C to stop.")

try:
    while True: # Infinite loop to keep blinking
        GPIO.output(LED_PIN, GPIO.HIGH) # Turn LED ON
        time.sleep(BLINK_DELAY)        # Wait for BLINK_DELAY seconds

        GPIO.output(LED_PIN, GPIO.LOW)  # Turn LED OFF
        time.sleep(BLINK_DELAY)        # Wait for BLINK_DELAY seconds

except KeyboardInterrupt:
    # If the user presses Ctrl+C, exit gracefully
    print("\nBlinking stopped by user.")

finally:
    # Clean up the GPIO settings
    GPIO.cleanup()
    print("GPIO cleaned up. Exiting.")
```

**Explanation of the Blink Code:**

*   `while True:`: Creates an infinite loop. The LED will continue to blink until you manually stop the script.
*   `time.sleep(BLINK_DELAY)`: Pauses the execution of the script for the specified duration, creating the "on" and "off" periods for the blink.

---

### **7. Key Concepts and Definitions to Remember:**

*   **GPIO (General Purpose Input/Output):** Pins on the Raspberry Pi that can be programmed to interact with the physical world.
*   **BCM Numbering:** A GPIO numbering scheme based on the Broadcom chip.
*   **BOARD Numbering:** A GPIO numbering scheme based on the physical pin location on the header.
*   **Digital Output:** Sending a binary signal (HIGH or LOW) to a pin to control a device.
*   **HIGH:** Represents a voltage level of 3.3V (or close to it).
*   **LOW:** Represents a voltage level of 0V (Ground).
*   **Resistor:** An electronic component that limits current flow. **Essential for protecting LEDs and the Raspberry Pi.**
*   **LED Anode (+):** The positive leg of an LED.
*   **LED Cathode (-):** The negative leg of an LED.
*   `RPi.GPIO` Library: The Python library used to control Raspberry Pi GPIO pins.
*   `GPIO.setmode()`: Sets the pin numbering scheme.
*   `GPIO.setup()`: Configures a pin as input or output.
*   `GPIO.output()`: Sets the state of an output pin (HIGH or LOW).
*   `GPIO.cleanup()`: Resets all GPIO pins used by the script to their default state.
*   `time.sleep()`: Pauses program execution for a specified duration.

---

### **8. Important Points to Remember:**

*   **Always use a resistor** with LEDs to prevent damage.
*   **Always connect grounds (GND)** of components to the Raspberry Pi's GND pin when necessary.
*   **Refer to your specific Raspberry Pi model's pinout diagram** for correct pin connections.
*   **Use `GPIO.setmode(GPIO.BCM)`** for better compatibility across different Pi models.
*   **Always call `GPIO.cleanup()`** at the end of your script to release GPIO resources.
*   **Run Python scripts controlling GPIO with `sudo`**.
*   **Be aware of the current limitations** of each GPIO pin and the Raspberry Pi as a whole.

---

### **9. Practice Questions and Exercises:**

**Question 1:** What is the primary purpose of GPIO pins on a Raspberry Pi?

**Question 2:** Explain the difference between BCM and BOARD numbering schemes for GPIO pins. Which one is generally recommended for Python programming, and why?

**Question 3:** Why is it crucial to use a resistor with an LED when connecting it to a Raspberry Pi's GPIO pin? What would happen if you didn't use one?

**Question 4:** Write a Python script using the `RPi.GPIO` library to turn an LED connected to GPIO pin 18 ON for 3 seconds and then OFF for 3 seconds, repeating this cycle indefinitely.

**Question 5:** How would you modify the script from Question 4 to make the LED blink twice per second (i.e., ON for 0.5 seconds, OFF for 0.5 seconds)?

**Question 6:** What does the `GPIO.cleanup()` function do, and why is it important to include it in your scripts?

---

### **Answers to Practice Questions:**

**Answer 1:** The primary purpose of GPIO pins on a Raspberry Pi is to allow it to interact with external electronic components and the physical world. They can be configured as inputs to read signals or as outputs to send signals to devices like LEDs, sensors, buttons, and motors.

**Answer 2:**
*   **BCM Numbering:** Refers to the numbering of the GPIO channels as defined by the Broadcom SoC (System on Chip) manufacturer. It is based on the internal numbering of the chip's GPIO ports.
*   **BOARD Numbering:** Refers to the physical pin numbers on the 40-pin header.
*   **Recommendation:** **BCM numbering** is generally recommended for Python programming because it tends to be more consistent across different Raspberry Pi models, whereas the physical pin layout might change slightly between revisions.

**Answer 3:** It is crucial to use a resistor with an LED to limit the amount of current flowing through it. The Raspberry Pi's GPIO pins can only safely supply a limited current (typically 16mA per pin). If you connect an LED directly without a resistor, the excessive current can overheat and permanently damage both the LED and the GPIO pin on the Raspberry Pi.

**Answer 4:**
```python
import RPi.GPIO as GPIO
import time

LED_PIN = 18  # Using GPIO 18 (BCM numbering)
ON_DURATION = 3
OFF_DURATION = 3

GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

print(f"Controlling LED on GPIO {LED_PIN}. Press Ctrl+C to stop.")

try:
    while True:
        print("LED ON")
        GPIO.output(LED_PIN, GPIO.HIGH)
        time.sleep(ON_DURATION)

        print("LED OFF")
        GPIO.output(LED_PIN, GPIO.LOW)
        time.sleep(OFF_DURATION)

except KeyboardInterrupt:
    print("\nOperation stopped by user.")

finally:
    GPIO.cleanup()
    print("GPIO cleaned up.")
```

**Answer 5:** To make the LED blink twice per second, you need to set the ON and OFF durations to 0.5 seconds each.

```python
import RPi.GPIO as GPIO
import time

LED_PIN = 18
BLINK_DELAY = 0.5 # 0.5 seconds for ON, 0.5 seconds for OFF

GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

print(f"Blinking LED rapidly on GPIO {LED_PIN}. Press Ctrl+C to stop.")

try:
    while True:
        GPIO.output(LED_PIN, GPIO.HIGH)
        time.sleep(BLINK_DELAY)
        GPIO.output(LED_PIN, GPIO.LOW)
        time.sleep(BLINK_DELAY)

except KeyboardInterrupt:
    print("\nBlinking stopped by user.")

finally:
    GPIO.cleanup()
    print("GPIO cleaned up.")
```

**Answer 6:** The `GPIO.cleanup()` function resets all the GPIO pins that have been used by your script to their default state (usually as inputs). This is important because it releases the pins, preventing conflicts or unexpected behavior if other scripts or programs try to use those pins later. It also ensures that the pins are not left in an unexpected state (e.g., HIGH or LOW) after your program finishes.
