---
title: "Creating an Actuator for Controlling Illumination"
subject: "INTERNET OF THINGS"
module: "Module 4: Introduction to Raspberry Pi"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c758"
status: "completed"
scrapedAt: "2026-05-20T17:08:25.407Z"
---
# INTERNET OF THINGS: Module 4 - Introduction to Raspberry Pi

## Topic: Creating an Actuator for Controlling Illumination

This module focuses on a fundamental aspect of the Internet of Things (IoT): using a Raspberry Pi to control physical devices. Specifically, we will explore how to create an actuator to control illumination, such as turning an LED on and off, or dimming it.

---

### Learning Outcomes:

*   **Understand the role of actuators in IoT systems.**
*   **Identify and connect essential hardware components for controlling illumination with a Raspberry Pi.**
*   **Write Python code to control the state (on/off) of an LED.**
*   **Write Python code to control the brightness of an LED using Pulse Width Modulation (PWM).**
*   **Explain the basic principles of Pulse Width Modulation (PWM).**

---

### 1. Understanding Actuators in IoT Systems

**Definition:**
An **actuator** is a component of an IoT system that converts an electrical signal into a physical action or movement. In simpler terms, it's the "doer" in an IoT system, responding to commands from the microcontroller (like the Raspberry Pi).

**Role of Actuators in IoT:**

*   **Bringing Physicality:** Actuators bridge the gap between the digital world of data and the physical world of actions.
*   **Performing Tasks:** They execute the desired functions based on sensor inputs or commands received over a network.
*   **Examples:**
    *   **Controlling illumination:** Turning lights on/off, dimming, changing colors.
    *   **Motor control:** Opening/closing doors, moving robotic arms, spinning fans.
    *   **Sound generation:** Playing alarms, notifications.
    *   **Valve control:** Regulating fluid flow in industrial applications.
    *   **Displaying information:** Showing messages on screens or segments.

**Raspberry Pi as a Controller:**
The Raspberry Pi, with its General Purpose Input/Output (GPIO) pins, acts as the brain that sends the electrical signals to the actuators.

---

### 2. Essential Hardware Components for Controlling Illumination

To control illumination with a Raspberry Pi, you'll typically need the following:

#### **2.1. Raspberry Pi Board:**
*   **Function:** The central processing unit and controller. It runs the operating system and executes the Python code.
*   **Key Features:** GPIO pins (for connecting external components), USB ports, Ethernet/Wi-Fi for networking.
*   **Example:** Raspberry Pi 3B+, Raspberry Pi 4, Raspberry Pi Zero W.

#### **2.2. Light Emitting Diode (LED):**
*   **Function:** The component that emits light.
*   **Key Features:**
    *   **Anode:** The longer leg, connected to the positive voltage.
    *   **Cathode:** The shorter leg, connected to ground.
    *   **Polarity:** LEDs are polarized; they must be connected in the correct direction to work.
*   **Example:** Standard 5mm or 3mm LEDs in various colors.

#### **2.3. Resistor:**
*   **Function:** **Crucial for limiting current** flowing through the LED to prevent it from burning out. LEDs have a forward voltage drop and a maximum current rating.
*   **Calculation (Ohm's Law: V = I * R):**
    *   `Resistance (R) = (Supply Voltage - LED Forward Voltage) / Desired Current`
    *   **Typical values:**
        *   Supply Voltage: 3.3V (from Raspberry Pi GPIO)
        *   LED Forward Voltage (Vf): ~2V (for red, yellow, green LEDs), ~3V (for blue, white LEDs). Check the LED datasheet.
        *   Desired Current (If): ~10-20mA (0.01A - 0.02A) is common for LEDs.
    *   **Example Calculation:** For a red LED (Vf = 2V) connected to a 3.3V GPIO pin, aiming for 15mA (0.015A):
        `R = (3.3V - 2V) / 0.015A = 1.3V / 0.015A ≈ 87 ohms.`
        A standard **220-ohm resistor** is often used as a safe and readily available option, providing a slightly lower current but ensuring the LED's longevity.
*   **Color Codes:** Resistors have colored bands indicating their resistance value.

#### **2.4. Jumper Wires:**
*   **Function:** Used to make electrical connections between the Raspberry Pi's GPIO pins and the other components (LED, resistor).
*   **Types:** Male-to-male, male-to-female, female-to-female. You'll primarily use male-to-male for breadboard prototyping.

#### **2.5. Breadboard (Optional but Recommended):**
*   **Function:** A solderless prototyping board that allows you to easily connect and rearrange electronic components without soldering.
*   **How it works:** Internally, rows and columns of holes are connected. This makes building circuits much faster and less permanent.

#### **Wiring Diagram (Basic LED On/Off):**

```
             +-----------------+
             | Raspberry Pi    |
             |                 |
             | GPIO Pin (e.g., 17) ---> ---[ Resistor ]---+----> Anode (+) of LED
             |                 |                           |
             | Ground (GND)  --------------------------------+----> Cathode (-) of LED
             |                 |
             +-----------------+
```

**Important Note:** Connect the resistor in series with the LED. It can be placed between the GPIO pin and the LED's anode, or between the LED's cathode and the Ground pin.

---

### 3. Python Code to Control LED State (On/Off)

We'll use the `RPi.GPIO` library, which is pre-installed on Raspberry Pi OS.

#### **3.1. Setting up GPIO Pins:**

*   **Importing the library:** `import RPi.GPIO as GPIO`
*   **Choosing a pin numbering scheme:**
    *   `GPIO.setmode(GPIO.BCM)`: Uses Broadcom SOC channel numbers (e.g., GPIO 17). This is generally preferred as it's consistent across different Pi models.
    *   `GPIO.setmode(GPIO.BOARD)`: Uses the physical pin numbers on the header (e.g., Pin 11).
*   **Setting pin direction:** `GPIO.setup(pin_number, GPIO.OUT)` to configure a pin as an output.

#### **3.2. Controlling the LED:**

*   **Turning ON:** `GPIO.output(pin_number, GPIO.HIGH)` (sends 3.3V)
*   **Turning OFF:** `GPIO.output(pin_number, GPIO.LOW)` (sends 0V)

#### **3.3. Basic Python Script (blink.py):**

```python
import RPi.GPIO as GPIO
import time

# Define the GPIO pin number (using BCM numbering)
LED_PIN = 17

# Setup GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

try:
    print("LED ON")
    GPIO.output(LED_PIN, GPIO.HIGH) # Turn LED ON
    time.sleep(5)                   # Keep it ON for 5 seconds

    print("LED OFF")
    GPIO.output(LED_PIN, GPIO.LOW)  # Turn LED OFF
    time.sleep(2)                   # Keep it OFF for 2 seconds

except KeyboardInterrupt:
    # Clean up GPIO settings when the script is interrupted (Ctrl+C)
    print("Program interrupted. Cleaning up GPIO.")
    GPIO.cleanup()

finally:
    # Ensure GPIO is cleaned up even if no exception occurs
    print("Exiting program. Cleaning up GPIO.")
    GPIO.cleanup()
```

**How to Run:**
1.  Save the code as `blink.py` on your Raspberry Pi.
2.  Open a terminal on your Raspberry Pi.
3.  Run the script: `python3 blink.py`

---

### 4. Python Code to Control LED Brightness (PWM)

**Definition:**
**Pulse Width Modulation (PWM)** is a technique used to control the average value of voltage supplied to a device by switching it on and off very rapidly. The "width" of the "pulse" (the duration the signal is HIGH) determines the effective voltage.

**How it works for LEDs:**
By rapidly switching the LED on and off, we can control how much "on-time" it gets within a given period.

*   **Duty Cycle:** The percentage of time the signal is HIGH within a period.
    *   0% Duty Cycle = LED is always OFF (0V average).
    *   50% Duty Cycle = LED is ON for half the time, OFF for half the time (average voltage is half).
    *   100% Duty Cycle = LED is always ON (3.3V average).
*   **Frequency:** How often the pulse cycle repeats. For LEDs, frequencies in the hundreds or thousands of Hertz (Hz) are common, making the blinking imperceptible to the human eye.

#### **4.1. Using PWM with `RPi.GPIO`:**

1.  **Create a PWM object:** `pwm = GPIO.PWM(pin_number, frequency)`
    *   `pin_number`: The GPIO pin you are using.
    *   `frequency`: The PWM frequency in Hz. A good starting point is 100 Hz.
2.  **Start PWM:** `pwm.start(duty_cycle)`
    *   `duty_cycle`: A value from 0.0 to 100.0.
3.  **Change Duty Cycle:** `pwm.ChangeDutyCycle(new_duty_cycle)`
4.  **Stop PWM:** `pwm.stop()`

#### **4.2. PWM Python Script (dim_led.py):**

```python
import RPi.GPIO as GPIO
import time

# Define the GPIO pin number (using BCM numbering)
LED_PIN = 18 # Common PWM pin on Raspberry Pi

# Setup GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

# Create PWM object: pin 18, frequency 100Hz
pwm = GPIO.PWM(LED_PIN, 100)

try:
    # Start PWM with 0% duty cycle (LED off)
    pwm.start(0)
    print("Starting PWM dimming...")

    # Fade in
    print("Fading In...")
    for duty_cycle in range(0, 101, 5): # Increment by 5 from 0 to 100
        pwm.ChangeDutyCycle(duty_cycle)
        time.sleep(0.1) # Small delay for smooth transition

    time.sleep(2) # Keep at full brightness for 2 seconds

    # Fade out
    print("Fading Out...")
    for duty_cycle in range(100, -1, -5): # Decrement by 5 from 100 to 0
        pwm.ChangeDutyCycle(duty_cycle)
        time.sleep(0.1)

    print("PWM complete. LED is off.")
    time.sleep(1)

except KeyboardInterrupt:
    print("Program interrupted. Cleaning up GPIO.")
    pwm.stop() # Stop PWM before cleaning
    GPIO.cleanup()

finally:
    print("Exiting program. Cleaning up GPIO.")
    pwm.stop() # Ensure PWM is stopped
    GPIO.cleanup()
```

**How to Run:**
1.  Save the code as `dim_led.py` on your Raspberry Pi.
2.  Ensure your LED and resistor are connected to **GPIO 18** (or modify the `LED_PIN` variable).
3.  Open a terminal on your Raspberry Pi.
4.  Run the script: `python3 dim_led.py`

---

### 5. Practice Questions and Exercises

**Multiple Choice Questions:**

1.  What is the primary function of an actuator in an IoT system?
    a) To collect data from the environment.
    b) To process data and make decisions.
    c) To convert electrical signals into physical actions.
    d) To transmit data wirelessly.

2.  Which of the following components is essential to prevent an LED from burning out when connected to a Raspberry Pi?
    a) Jumper wire
    b) Resistor
    c) Breadboard
    d) LED itself

3.  In the `RPi.GPIO` library, which of the following commands sets the pin numbering scheme to use Broadcom SOC channel numbers?
    a) `GPIO.setmode(GPIO.BOARD)`
    b) `GPIO.setup(pin, GPIO.INPUT)`
    c) `GPIO.setmode(GPIO.BCM)`
    d) `GPIO.output(pin, GPIO.HIGH)`

4.  What does the `duty_cycle` parameter control in PWM?
    a) The frequency of the signal.
    b) The voltage level of the signal.
    c) The duration the signal is HIGH within a period.
    d) The total ON time of the device.

**Practical Exercises:**

1.  **Build a Circuit:** Connect an LED (with a 220-ohm resistor) to GPIO pin 17 on your Raspberry Pi.
2.  **Write a Program:** Create a Python script that blinks the LED twice every second for 10 seconds, then stays off. Ensure you use `GPIO.BCM` numbering and include proper `GPIO.cleanup()` in a `try...finally` block.
3.  **PWM Dimming:** Connect an LED (with a 220-ohm resistor) to GPIO pin 18. Write a Python script that makes the LED slowly fade from fully off to fully on, and then slowly fade back off, repeating this cycle continuously.

---

### **Answers to Practice Questions:**

**Multiple Choice:**

1.  **c) To convert electrical signals into physical actions.**
2.  **b) Resistor**
3.  **c) `GPIO.setmode(GPIO.BCM)`**
4.  **c) The duration the signal is HIGH within a period.**

**Practical Exercises (Conceptual Answers):**

*   **Exercise 2 (Blinking LED):**
    ```python
    import RPi.GPIO as GPIO
    import time

    LED_PIN = 17
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(LED_PIN, GPIO.OUT)

    try:
        for _ in range(10): # Repeat 10 times
            GPIO.output(LED_PIN, GPIO.HIGH)
            time.sleep(0.5) # ON for 0.5 seconds
            GPIO.output(LED_PIN, GPIO.LOW)
            time.sleep(0.5) # OFF for 0.5 seconds
    finally:
        GPIO.cleanup()
    ```

*   **Exercise 3 (PWM Dimming):**
    ```python
    import RPi.GPIO as GPIO
    import time

    LED_PIN = 18
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(LED_PIN, GPIO.OUT)

    pwm = GPIO.PWM(LED_PIN, 100) # 100Hz frequency

    try:
        pwm.start(0) # Start with LED off
        while True: # Infinite loop for continuous fading
            # Fade in
            for duty_cycle in range(0, 101, 10):
                pwm.ChangeDutyCycle(duty_cycle)
                time.sleep(0.2)

            time.sleep(1) # Hold at full brightness

            # Fade out
            for duty_cycle in range(100, -1, -10):
                pwm.ChangeDutyCycle(duty_cycle)
                time.sleep(0.2)
            
            time.sleep(1) # Hold at off

    except KeyboardInterrupt:
        print("Program interrupted.")
    finally:
        pwm.stop()
        GPIO.cleanup()
    ```
    *(Note: The `range` steps and `time.sleep` values can be adjusted for desired speed.)*

---

### **Important Points to Remember:**

*   **Always use a resistor with an LED.** This is non-negotiable for protecting your components.
*   **Understand GPIO pin numbering:** `BCM` is generally preferred for portability across Pi models.
*   **Use `GPIO.cleanup()`:** This resets the GPIO pins to their default state, preventing potential issues in subsequent programs. Place it in a `finally` block for guaranteed execution.
*   **Polarity of LEDs:** Ensure the anode (longer leg) is connected to the positive voltage (via the resistor/GPIO) and the cathode (shorter leg) to ground.
*   **PWM Resolution:** The `RPi.GPIO` library's PWM offers a duty cycle resolution from 0.0 to 100.0.
*   **PWM Frequency:** Higher frequencies result in smoother perceived brightness changes for LEDs. 100Hz is usually sufficient.

---
This concludes Module 4's topic on creating an actuator for controlling illumination. You've learned the basics of how to make your Raspberry Pi interact with the physical world by controlling an LED.
