---
title: "Interfacing an LED and switch with Raspberry Pi"
subject: "INTERNET OF THINGS"
module: "Module 4: Programming Raspberry Pi with Python"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd1c"
status: "completed"
scrapedAt: "2026-05-20T17:25:00.277Z"
---
# INTERNET OF THINGS - Module 4: Programming Raspberry Pi with Python

## Topic: Interfacing an LED and Switch with Raspberry Pi

---

### 1. Introduction to Interfacing

The Raspberry Pi, a versatile single-board computer, can interact with the physical world through its **General Purpose Input/Output (GPIO)** pins. This allows us to connect and control electronic components like LEDs (Light Emitting Diodes) and read input from devices like switches. This module focuses on the fundamental process of interfacing these common components with the Raspberry Pi using Python.

### 2. Understanding the Components

#### 2.1 Light Emitting Diode (LED)

*   **Definition:** An LED is a semiconductor device that emits light when an electric current passes through it.
*   **Polarity:** LEDs are **polar**, meaning they have a positive terminal (anode) and a negative terminal (cathode). The anode must be connected to a higher voltage, and the cathode to a lower voltage, for current to flow and light to be emitted.
*   **Longer Leg:** Typically, the **longer leg** of an LED is the anode (+).
*   **Shorter Leg:** Typically, the **shorter leg** is the cathode (-).
*   **Current Limiting Resistor:** LEDs require a **current-limiting resistor** in series to prevent them from burning out due to excessive current. The value of the resistor depends on the LED's forward voltage and forward current requirements. A common starting point for standard LEDs is around **220-330 Ohms**.

#### 2.2 Tactile Switch (Push Button)

*   **Definition:** A tactile switch is a momentary electrical switch that is actuated by applying pressure. It completes a circuit only when the button is pressed.
*   **Connections:** Most tactile switches have four pins. When the button is pressed, the two pins on one side become connected, and the two pins on the other side also become connected. For basic interfacing, we typically use two pins.
*   **Pull-up/Pull-down Resistors:** When connecting a switch to a GPIO pin, we need to ensure the pin has a defined state when the switch is not being pressed. This is achieved using **pull-up** or **pull-down resistors**.
    *   **Pull-up Resistor:** Connects the GPIO pin to the **high voltage (3.3V)**. When the switch is open, the pin reads HIGH. When the switch is pressed, it connects the pin to **ground (0V)**, and the pin reads LOW.
    *   **Pull-down Resistor:** Connects the GPIO pin to **ground (0V)**. When the switch is open, the pin reads LOW. When the switch is pressed, it connects the pin to **high voltage (3.3V)**, and the pin reads HIGH.
*   **Internal Pull-up/Pull-down:** The Raspberry Pi's GPIO pins have built-in (internal) pull-up and pull-down resistors that can be enabled in software, simplifying the circuit. This is the preferred method for most simple switch connections.

### 3. Raspberry Pi GPIO Pins

*   **Header:** The Raspberry Pi has a set of **GPIO pins** usually exposed via a 40-pin header.
*   **Pin Numbering Schemes:**
    *   **BOARD:** Refers to the physical pin number on the header (1-40).
    *   **BCM (Broadcom SOC channel):** Refers to the specific GPIO channel number assigned by the Broadcom chip. This is generally preferred as it's consistent across different Raspberry Pi models.
*   **GPIO Modes:** Each GPIO pin can be configured as either an **input** or an **output**.
    *   **Output:** Used to send signals to control devices like LEDs.
    *   **Input:** Used to read signals from devices like switches.

### 4. Setting Up the Hardware

#### 4.1 Interfacing an LED

**Required Components:**

*   Raspberry Pi
*   LED (any color)
*   220-330 Ohm resistor
*   Jumper wires

**Wiring Diagram (using BCM numbering):**

1.  **LED Anode (longer leg):** Connect to a chosen GPIO pin (e.g., GPIO 17).
2.  **LED Cathode (shorter leg):** Connect to one end of the resistor.
3.  **Other end of the resistor:** Connect to a **Ground (GND)** pin on the Raspberry Pi.

**Visual Representation (conceptual):**

```
   Raspberry Pi GPIO Pin (e.g., GPIO 17) ---> LED Anode
                                            LED Cathode ---> Resistor ---> Raspberry Pi GND Pin
```

#### 4.2 Interfacing a Switch

**Required Components:**

*   Raspberry Pi
*   Tactile switch
*   Jumper wires

**Wiring Diagram (using BCM numbering, with internal pull-up resistor):**

1.  **One side of the switch:** Connect to a chosen GPIO pin (e.g., GPIO 18).
2.  **The other side of the switch:** Connect to a **Ground (GND)** pin on the Raspberry Pi.

**Visual Representation (conceptual):**

```
   Raspberry Pi GPIO Pin (e.g., GPIO 18) ---> One side of Switch
                                            Other side of Switch ---> Raspberry Pi GND Pin
```

*   **Explanation:** When the switch is *not* pressed, the GPIO pin is connected to 3.3V via the internal pull-up resistor, so it reads `HIGH`. When the switch *is* pressed, it creates a direct connection to Ground, overriding the pull-up resistor, and the GPIO pin reads `LOW`.

**Alternative Wiring (using internal pull-down resistor):**

1.  **One side of the switch:** Connect to a chosen GPIO pin (e.g., GPIO 18).
2.  **The other side of the switch:** Connect to a **3.3V** pin on the Raspberry Pi.

*   **Explanation:** When the switch is *not* pressed, the GPIO pin is connected to Ground via the internal pull-down resistor, so it reads `LOW`. When the switch *is* pressed, it creates a direct connection to 3.3V, overriding the pull-down resistor, and the GPIO pin reads `HIGH`.

### 5. Programming with Python using `RPi.GPIO` Library

The `RPi.GPIO` library is the standard Python library for controlling the Raspberry Pi's GPIO pins.

#### 5.1 Installation (if not already present)

The `RPi.GPIO` library is usually pre-installed on Raspberry Pi OS. If not, you can install it using:

```bash
sudo apt update
sudo apt install python3-rpi.gpio
```

#### 5.2 Basic Syntax and Operations

*   **Importing the library:**
    ```python
    import RPi.GPIO as GPIO
    import time # For introducing delays
    ```
*   **Setting the pin numbering mode:**
    ```python
    GPIO.setmode(GPIO.BCM) # Use BCM numbering scheme
    # or
    # GPIO.setmode(GPIO.BOARD) # Use BOARD numbering scheme
    ```
*   **Setting up a GPIO pin:**
    *   **For output (e.g., LED):**
        ```python
        led_pin = 17
        GPIO.setup(led_pin, GPIO.OUT)
        ```
    *   **For input (e.g., Switch):**
        ```python
        switch_pin = 18
        # Using internal pull-up resistor
        GPIO.setup(switch_pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
        # Using internal pull-down resistor
        # GPIO.setup(switch_pin, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
        ```
*   **Controlling an output pin:**
    *   **Set pin to HIGH (3.3V):**
        ```python
        GPIO.output(led_pin, GPIO.HIGH)
        ```
    *   **Set pin to LOW (0V):**
        ```python
        GPIO.output(led_pin, GPIO.LOW)
        ```
    *   **Toggle pin state (useful for blinking):**
        ```python
        GPIO.output(led_pin, not GPIO.input(led_pin))
        ```
*   **Reading an input pin:**
    ```python
    switch_state = GPIO.input(switch_pin)
    if switch_state == GPIO.LOW: # If using pull-up and switch is pressed
        print("Switch is pressed!")
    elif switch_state == GPIO.HIGH: # If using pull-up and switch is not pressed
        print("Switch is not pressed.")
    ```
*   **Cleaning up GPIO settings:** It's good practice to clean up GPIO settings when your script finishes to release the pins.
    ```python
    GPIO.cleanup()
    ```

### 6. Practical Examples

#### 6.1 Blinking an LED

**Objective:** Make an LED blink on and off at a regular interval.

**Code:**

```python
import RPi.GPIO as GPIO
import time

# Define the GPIO pin for the LED
led_pin = 17

# Set the GPIO mode to BCM
GPIO.setmode(GPIO.BCM)

# Set up the LED pin as an output
GPIO.setup(led_pin, GPIO.OUT)

try:
    while True:
        # Turn the LED on
        GPIO.output(led_pin, GPIO.HIGH)
        print("LED ON")
        time.sleep(1) # Wait for 1 second

        # Turn the LED off
        GPIO.output(led_pin, GPIO.LOW)
        print("LED OFF")
        time.sleep(1) # Wait for 1 second

except KeyboardInterrupt:
    # Clean up GPIO settings when the script is interrupted (Ctrl+C)
    print("Exiting and cleaning up GPIO...")
    GPIO.cleanup()
```

**Explanation:**

1.  We import the necessary libraries (`RPi.GPIO` and `time`).
2.  We define `led_pin` to 17.
3.  We set the mode to `GPIO.BCM`.
4.  We configure `led_pin` as an output.
5.  The `while True` loop continuously turns the LED on (`GPIO.HIGH`), waits for 1 second, turns it off (`GPIO.LOW`), and waits for another second.
6.  The `try...except KeyboardInterrupt` block ensures that `GPIO.cleanup()` is called when you press `Ctrl+C`, preventing issues with future scripts.

#### 6.2 Controlling an LED with a Switch

**Objective:** Turn an LED on when a switch is pressed, and off when it's released.

**Hardware Setup:**

*   LED connected to GPIO 17 (with a resistor to GND).
*   Switch connected between GPIO 18 and GND (using internal pull-up).

**Code:**

```python
import RPi.GPIO as GPIO
import time

# Define GPIO pins
led_pin = 17
switch_pin = 18

# Set the GPIO mode to BCM
GPIO.setmode(GPIO.BCM)

# Set up the LED pin as an output
GPIO.setup(led_pin, GPIO.OUT)

# Set up the switch pin as an input with internal pull-up resistor
GPIO.setup(switch_pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)

try:
    print("Press the switch to turn on the LED. Press Ctrl+C to exit.")
    while True:
        # Read the state of the switch
        switch_state = GPIO.input(switch_pin)

        # If the switch is pressed (LOW because of pull-up), turn the LED ON
        if switch_state == GPIO.LOW:
            GPIO.output(led_pin, GPIO.HIGH)
            # print("Switch pressed - LED ON") # Optional: uncomment for feedback
        else:
            # If the switch is not pressed (HIGH), turn the LED OFF
            GPIO.output(led_pin, GPIO.LOW)
            # print("Switch not pressed - LED OFF") # Optional: uncomment for feedback

        # Small delay to prevent overwhelming the CPU
        time.sleep(0.01)

except KeyboardInterrupt:
    # Clean up GPIO settings
    print("Exiting and cleaning up GPIO...")
    GPIO.cleanup()
```

**Explanation:**

1.  We define pins for both the LED and the switch.
2.  The LED pin is set as an output.
3.  The switch pin is set as an input with `GPIO.PUD_UP` to use the internal pull-up resistor.
4.  The `while True` loop continuously reads the `switch_pin`.
5.  If `switch_state` is `GPIO.LOW` (meaning the switch is pressed and connected to GND), the `led_pin` is set to `GPIO.HIGH`, turning the LED on.
6.  If `switch_state` is `GPIO.HIGH` (meaning the switch is not pressed), the `led_pin` is set to `GPIO.LOW`, turning the LED off.
7.  A small `time.sleep(0.01)` is included to reduce CPU usage, as we're polling the switch very frequently.

### 7. Key Concepts and Definitions Summary

*   **GPIO:** General Purpose Input/Output pins on the Raspberry Pi.
*   **LED:** Light Emitting Diode; emits light when current flows. Requires a resistor to limit current.
*   **Tactile Switch:** Momentary push button.
*   **Pull-up Resistor:** Connects a pin to 3.3V, resulting in a HIGH reading when the switch is open.
*   **Pull-down Resistor:** Connects a pin to GND, resulting in a LOW reading when the switch is open.
*   **Internal Pull-up/Pull-down:** Built-in resistors on Raspberry Pi GPIO pins that can be enabled in software.
*   **BCM vs. BOARD:** Two numbering schemes for GPIO pins. BCM is generally preferred.
*   **Input Pin:** Configured to read signals from external devices.
*   **Output Pin:** Configured to send signals to control external devices.
*   **`RPi.GPIO`:** Python library for GPIO control.
*   **`GPIO.setmode()`:** Sets the pin numbering mode.
*   **`GPIO.setup()`:** Configures a pin as input or output, and optionally sets pull-up/down.
*   **`GPIO.output()`:** Sets the state of an output pin (HIGH or LOW).
*   **`GPIO.input()`:** Reads the state of an input pin (HIGH or LOW).
*   **`GPIO.cleanup()`:** Resets all GPIO pins used by the script.

### 8. Important Points to Remember

*   **Always use a current-limiting resistor** with an LED to prevent it from burning out.
*   **Use internal pull-up or pull-down resistors** for switches to ensure a defined state and avoid floating input.
*   **Choose a consistent pin numbering scheme** (BCM is recommended).
*   **Always call `GPIO.cleanup()`** at the end of your script to release GPIO resources.
*   **Be mindful of the Raspberry Pi's voltage levels** (typically 3.3V for GPIO).
*   **Double-check your wiring** before powering up the Raspberry Pi. Incorrect wiring can damage the Pi or the components.

---

### 9. Practice Questions & Exercises

**Question 1:** What is the purpose of a current-limiting resistor when connecting an LED to a Raspberry Pi?

**Answer:** The current-limiting resistor prevents excessive current from flowing through the LED, which could otherwise damage or burn out the LED.

**Question 2:** When connecting a tactile switch to a Raspberry Pi's GPIO pin, which method is generally preferred to ensure a stable reading when the switch is not pressed, and why?

**Answer:** Using the Raspberry Pi's internal **pull-up** or **pull-down** resistors is preferred. This ensures the GPIO pin has a defined logical state (HIGH or LOW) when the switch is open, preventing it from being in a "floating" state, which could lead to unpredictable readings.

**Question 3:** You have wired an LED to GPIO pin 18 and a switch to GPIO pin 23 (using BCM numbering). Write a Python code snippet that turns the LED ON only when the switch is pressed. Assume the switch is wired with an internal pull-up resistor.

**Answer:**

```python
import RPi.GPIO as GPIO
import time

led_pin = 18
switch_pin = 23

GPIO.setmode(GPIO.BCM)
GPIO.setup(led_pin, GPIO.OUT)
GPIO.setup(switch_pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)

try:
    while True:
        if GPIO.input(switch_pin) == GPIO.LOW: # Switch is pressed
            GPIO.output(led_pin, GPIO.HIGH)
        else: # Switch is not pressed
            GPIO.output(led_pin, GPIO.LOW)
        time.sleep(0.01)
except KeyboardInterrupt:
    GPIO.cleanup()
```

**Question 4:** Explain the difference between `GPIO.setmode(GPIO.BCM)` and `GPIO.setmode(GPIO.BOARD)`. Which one is generally considered more robust across different Raspberry Pi models?

**Answer:**
*   `GPIO.setmode(GPIO.BCM)` uses the Broadcom SOC channel numbering, which refers to the specific GPIO channel number as defined by the Broadcom processor.
*   `GPIO.setmode(GPIO.BOARD)` uses the physical pin number on the Raspberry Pi's 40-pin header.

The **BCM** numbering scheme is generally considered more robust and preferred because it remains consistent across different Raspberry Pi models, whereas the physical pin layout might change between versions.

**Exercise 1:** Modify the "Blinking an LED" code to make the LED blink faster (e.g., 0.5 seconds on, 0.5 seconds off).

**Exercise 2:** Write a program that turns an LED ON when a switch is pressed and toggles the LED's state (on to off, off to on) each time the switch is pressed and released. This is often referred to as a "toggle switch" behavior. (Hint: You might need to track the previous state of the switch to detect a "press" event).
