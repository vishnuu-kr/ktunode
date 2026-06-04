---
title: "Creating your first project"
subject: "INTERNET OF THINGS"
module: "Module 4: Introduction to Raspberry Pi"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c756"
status: "completed"
scrapedAt: "2026-05-20T17:08:24.027Z"
---
# Internet of Things: Module 4 - Introduction to Raspberry Pi

## Topic: Creating Your First Project

This module introduces you to the Raspberry Pi, a versatile single-board computer, and guides you through creating your very first project. By the end of this module, you'll be able to set up your Raspberry Pi, write simple Python programs to interact with its GPIO pins, and build a basic IoT application.

---

### Learning Outcomes:

*   **LO1: Set up and configure a Raspberry Pi for basic operation.**
*   **LO2: Understand the concept of General Purpose Input/Output (GPIO) pins and their role in interacting with the physical world.**
*   **LO3: Write and execute basic Python programs to control LEDs and read inputs from buttons using GPIO pins.**
*   **LO4: Assemble a simple hardware circuit involving an LED and a button connected to the Raspberry Pi.**
*   **LO5: Understand the foundational steps for creating a simple IoT project by integrating hardware control with basic programming.**

---

### 1. Setting Up and Configuring Your Raspberry Pi

This section covers the essential steps to get your Raspberry Pi ready for use.

#### 1.1 What is a Raspberry Pi?

*   **Definition:** A Raspberry Pi is a low-cost, credit-card-sized single-board computer developed by the Raspberry Pi Foundation. It's designed to encourage learning about computing and programming.
*   **Key Features:**
    *   **Processor:** Runs a Linux-based operating system (e.g., Raspberry Pi OS).
    *   **RAM:** Varies by model (e.g., 1GB, 2GB, 4GB, 8GB).
    *   **Connectivity:** USB ports, Ethernet port, HDMI port, Wi-Fi, Bluetooth.
    *   **GPIO Pins:** A set of pins that allow it to communicate with external hardware components.
    *   **MicroSD Card Slot:** Used to store the operating system and your programs.

#### 1.2 Essential Components for Setup

To get started, you'll typically need:

*   **Raspberry Pi Board:** The main computer.
*   **MicroSD Card:** At least 8GB recommended, to install the OS.
*   **Power Supply:** A compatible power adapter for your Raspberry Pi model.
*   **Display:** An HDMI monitor or TV.
*   **HDMI Cable:** To connect the Pi to the display.
*   **USB Keyboard and Mouse:** For input.
*   **Internet Connection:** For downloading software and updates.

#### 1.3 Installing Raspberry Pi OS

*   **Purpose:** Raspberry Pi OS (formerly Raspbian) is the official operating system.
*   **Process:**
    1.  **Download Raspberry Pi Imager:** Available from the official Raspberry Pi website.
    2.  **Choose OS:** Select "Raspberry Pi OS (32-bit)" or "Raspberry Pi OS (64-bit)" (recommended for newer Pis). You can choose the "Lite" version if you don't need a graphical desktop.
    3.  **Choose Storage:** Select your MicroSD card. **WARNING:** This will erase all data on the card.
    4.  **Write:** The Imager will download and write the OS to the MicroSD card.
    5.  **Boot:** Insert the MicroSD card into your Raspberry Pi, connect peripherals, and power it on.
    6.  **Initial Setup:** Follow the on-screen prompts for language, keyboard layout, Wi-Fi, and password.

#### 1.4 Connecting to Your Raspberry Pi

*   **Direct Connection:** Connect monitor, keyboard, and mouse directly.
*   **SSH (Secure Shell):**
    *   **Concept:** Allows you to remotely access and control your Raspberry Pi from another computer on the same network.
    *   **Enabling SSH:**
        *   In the Raspberry Pi OS desktop, navigate to Raspberry Pi Configuration (Menu -> Preferences -> Raspberry Pi Configuration).
        *   Go to the "Interfaces" tab and enable SSH.
        *   Alternatively, you can enable it from the command line by typing `sudo raspi-config` and navigating to "Interface Options" -> "SSH".
    *   **Finding Your Pi's IP Address:**
        *   On the Pi: Type `hostname -I` in the terminal.
        *   On your router's admin page.
    *   **Connecting via SSH:** Open a terminal on your computer and use the command: `ssh pi@<your_pi_ip_address>` (default username is `pi`).

---

### 2. Understanding General Purpose Input/Output (GPIO) Pins

This section delves into how your Raspberry Pi interacts with the physical world.

#### 2.1 What are GPIO Pins?

*   **Definition:** GPIO pins are a set of pins on the Raspberry Pi that can be configured as either **inputs** or **outputs** to communicate with electronic components.
*   **Purpose:** They act as bridges between the digital world of the Raspberry Pi and the analog/physical world of sensors and actuators (like LEDs, motors, buttons).

#### 2.2 GPIO Pinout

*   **Importance:** Knowing which pin does what is crucial for connecting components correctly.
*   **Common Pin Types:**
    *   **Power Pins:** 3.3V, 5V, Ground (GND). These supply power to your components.
    *   **GPIO Pins:** Numbered from 0 to 27 (or higher on some models). These are the programmable pins.
    *   **Special Function Pins:**
        *   **SPI (Serial Peripheral Interface):** For high-speed serial communication.
        *   **I2C (Inter-Integrated Circuit):** For communicating with multiple devices on a two-wire bus.
        *   **UART (Universal Asynchronous Receiver/Transmitter):** For serial communication.
        *   **PWM (Pulse Width Modulation):** For controlling the brightness of LEDs or the speed of motors.

*   **Visual Aid:** It's highly recommended to refer to a GPIO pinout diagram for your specific Raspberry Pi model (e.g., Raspberry Pi 4 Model B). You can easily find these online by searching "Raspberry Pi [Your Model] GPIO pinout".

    **Example Pinout Representation (Conceptual):**

    | Pin Number | Name/Function | Description                               |
    | :--------- | :------------ | :---------------------------------------- |
    | 1          | 3.3V          | 3.3 Volt Power                            |
    | 2          | 5V            | 5 Volt Power                              |
    | 3          | GPIO2 (SDA)   | I2C Data                                  |
    | 4          | GND           | Ground                                    |
    | 5          | GPIO3 (SCL)   | I2C Clock                                 |
    | ...        | ...           | ...                                       |
    | 40         | GPIO21        | General Purpose Input/Output              |

#### 2.3 Input vs. Output Pins

*   **Output Pins:**
    *   **Function:** The Raspberry Pi sends signals to control a component.
    *   **Example:** Setting an output pin HIGH (3.3V) to turn on an LED, or LOW (0V) to turn it off.
*   **Input Pins:**
    *   **Function:** The Raspberry Pi reads signals from a component.
    *   **Example:** Reading the state of a button (pressed or not pressed). A pressed button might connect the input pin to ground or 3.3V.

---

### 3. Writing and Executing Basic Python Programs

Python is the go-to language for Raspberry Pi projects due to its simplicity and extensive libraries.

#### 3.1 Introduction to Python on Raspberry Pi

*   **Pre-installed:** Python is usually pre-installed on Raspberry Pi OS.
*   **Development Environments:**
    *   **Thonny:** A beginner-friendly Python IDE often pre-installed. (Menu -> Programming -> Thonny Python IDE).
    *   **IDLE:** Another standard Python IDE.
    *   **Text Editors:** nano, vim (command-line) or leafpad, gedit (graphical).

#### 3.2 Controlling an LED (Output)

*   **Concept:** To turn an LED on, you need to send a high voltage (3.3V) to its corresponding GPIO pin. To turn it off, you send a low voltage (0V).
*   **Required Library:** `RPi.GPIO` library. This library provides functions to control the GPIO pins.
*   **Basic Python Code Structure:**

    ```python
    import RPi.GPIO as GPIO
    import time

    # Set the GPIO mode
    # GPIO.BCM: Uses Broadcom SOC channel numbers
    # GPIO.BOARD: Uses the physical pin numbering
    GPIO.setmode(GPIO.BCM)

    # Define the GPIO pin number for the LED
    LED_PIN = 17  # Example: GPIO17

    # Set the pin as an output
    GPIO.setup(LED_PIN, GPIO.OUT)

    try:
        # Turn LED on
        print("LED ON")
        GPIO.output(LED_PIN, GPIO.HIGH)
        time.sleep(2)  # Keep it on for 2 seconds

        # Turn LED off
        print("LED OFF")
        GPIO.output(LED_PIN, GPIO.LOW)
        time.sleep(2)

    except KeyboardInterrupt:
        # Clean up GPIO settings when the program is interrupted
        print("Program stopped. Cleaning up GPIO.")
        GPIO.cleanup()

    finally:
        # Ensure cleanup even if no exception occurs
        GPIO.cleanup()
    ```

*   **Explanation of Code:**
    *   `import RPi.GPIO as GPIO`: Imports the GPIO library and gives it a shorter alias `GPIO`.
    *   `import time`: Imports the `time` module for pausing execution.
    *   `GPIO.setmode(GPIO.BCM)`: Sets the numbering scheme for GPIO pins. `BCM` refers to the "Broadcom SOC channel" numbers, which are generally preferred as they remain consistent across different Pi models. `BOARD` refers to the physical pin numbers.
    *   `LED_PIN = 17`: Defines the GPIO pin number we will use.
    *   `GPIO.setup(LED_PIN, GPIO.OUT)`: Configures the specified pin (`LED_PIN`) as an output pin.
    *   `GPIO.output(LED_PIN, GPIO.HIGH)`: Sets the output pin to a high voltage (3.3V), turning the LED on.
    *   `GPIO.output(LED_PIN, GPIO.LOW)`: Sets the output pin to a low voltage (0V), turning the LED off.
    *   `time.sleep(seconds)`: Pauses the program for the specified number of seconds.
    *   `GPIO.cleanup()`: Resets all GPIO pins to their default state. This is crucial to prevent issues with future programs. The `try...except...finally` block ensures cleanup happens even if an error occurs or the program is interrupted (e.g., by Ctrl+C).

#### 3.3 Reading a Button Press (Input)

*   **Concept:** To detect a button press, we configure a GPIO pin as an input. When the button is pressed, it completes a circuit, changing the voltage level on the pin.
*   **Common Button Wiring:**
    *   **Pull-up Resistor:** The GPIO pin is internally connected to 3.3V via a resistor. When the button is **not pressed**, the pin reads HIGH (3.3V). When the button **is pressed**, it connects the pin to Ground (0V), making it read LOW.
    *   **Pull-down Resistor:** The GPIO pin is internally connected to Ground via a resistor. When the button is **not pressed**, the pin reads LOW (0V). When the button **is pressed**, it connects the pin to 3.3V, making it read HIGH.
*   **Using Internal Pull-up/Pull-down Resistors:** The Raspberry Pi has internal pull-up and pull-down resistors that can be enabled in software, simplifying wiring.
*   **Basic Python Code Structure (using internal pull-up):**

    ```python
    import RPi.GPIO as GPIO
    import time

    GPIO.setmode(GPIO.BCM)

    BUTTON_PIN = 18  # Example: GPIO18
    LED_PIN = 17     # Example: GPIO17

    # Setup button pin as input with pull-up resistor
    GPIO.setup(BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)

    # Setup LED pin as output
    GPIO.setup(LED_PIN, GPIO.OUT)

    print("Press the button! (Press Ctrl+C to exit)")

    try:
        while True:
            # Read the button state
            button_state = GPIO.input(BUTTON_PIN)

            if button_state == GPIO.LOW:  # Button is pressed (due to pull-up)
                print("Button Pressed!")
                GPIO.output(LED_PIN, GPIO.HIGH) # Turn LED ON
            else:
                GPIO.output(LED_PIN, GPIO.LOW)  # Turn LED OFF

            time.sleep(0.05) # Short delay to prevent excessive CPU usage

    except KeyboardInterrupt:
        print("Program stopped. Cleaning up GPIO.")
        GPIO.cleanup()
    finally:
        GPIO.cleanup()
    ```

*   **Explanation of Code:**
    *   `GPIO.setup(BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)`: Configures `BUTTON_PIN` as an input and enables the internal pull-up resistor. This means the pin will read `HIGH` (1) by default, and `LOW` (0) when the button is pressed (connecting it to ground).
    *   `while True:`: Creates an infinite loop to continuously check the button state.
    *   `button_state = GPIO.input(BUTTON_PIN)`: Reads the current state of the `BUTTON_PIN`.
    *   `if button_state == GPIO.LOW:`: Checks if the button is pressed. Since we used a pull-up resistor, a pressed button means the pin is connected to ground, resulting in a `LOW` state.
    *   `time.sleep(0.05)`: A small delay is added to reduce the CPU load. Without it, the loop would run as fast as possible, wasting resources.

---

### 4. Assembling a Simple Hardware Circuit

This section outlines how to physically connect components to your Raspberry Pi.

#### 4.1 Required Components for the Project

*   **Raspberry Pi Board** (already set up)
*   **Breadboard:** A solderless prototyping board.
*   **Jumper Wires:** To connect components to the Pi and breadboard.
*   **LED:** Light Emitting Diode (any color). Remember LEDs have polarity: a longer leg (anode) and a shorter leg (cathode).
*   **Resistor (e.g., 220 Ohm or 330 Ohm):** Crucial to limit current to the LED and prevent it from burning out.
*   **Tactile Push Button:** A momentary switch.

#### 4.2 Wiring the LED

1.  **Connect the Resistor:**
    *   Insert one end of the resistor into a hole on the breadboard.
    *   Plug the longer leg (anode) of the LED into a nearby hole on the breadboard.
    *   Connect the shorter leg (cathode) of the LED to another hole on the breadboard.
    *   Use a jumper wire to connect the resistor (which is now connected to the LED's anode) to a **3.3V** pin on your Raspberry Pi.
    *   Use another jumper wire to connect the LED's cathode to a **Ground (GND)** pin on your Raspberry Pi.

    **Important:** The resistor can be placed in series with either the anode or cathode, but it's commonly placed in series with the anode before the LED.

2.  **Alternative Wiring for LED Control (using GPIO):**
    *   Connect the **longer leg (anode)** of the LED to one end of the resistor.
    *   Connect the other end of the resistor to your chosen **GPIO output pin** (e.g., GPIO17).
    *   Connect the **shorter leg (cathode)** of the LED to a **Ground (GND)** pin on your Raspberry Pi.

    *This wiring allows the Raspberry Pi to control the flow of current through the LED.*

#### 4.3 Wiring the Push Button

1.  **Using Internal Pull-up Resistor:**
    *   Insert the tactile button into the breadboard, spanning the center gap.
    *   Connect one leg of the button to a **Ground (GND)** pin on your Raspberry Pi using a jumper wire.
    *   Connect another leg of the button (on the same side as the GND connection) to your chosen **GPIO input pin** (e.g., GPIO18) using a jumper wire.
    *   *(No external resistor is needed if using the internal pull-up)*

    *When the button is pressed, it will connect the GPIO pin to Ground, pulling its state LOW. When not pressed, the internal pull-up resistor keeps the pin HIGH.*

#### 4.4 Putting it Together (LED and Button)

*   Connect the LED circuit as described in 4.2 (using GPIO control).
*   Connect the button circuit as described in 4.3 (using internal pull-up).
*   Ensure you are using **different GPIO pins** for the LED and the button as defined in your Python script.
*   **Double-check all connections** before powering on your Raspberry Pi to avoid short circuits.

---

### 5. Foundational Steps for Creating a Simple IoT Project

This project is a stepping stone to more complex IoT applications.

#### 5.1 What is an IoT Project?

*   **Definition:** An Internet of Things (IoT) project involves devices with sensors and actuators connected to the internet, collecting data, and/or performing actions based on that data.
*   **Key Components:**
    *   **Device:** The hardware (Raspberry Pi, sensors, actuators).
    *   **Connectivity:** How the device connects to the internet (Wi-Fi, Ethernet).
    *   **Data Processing/Platform:** Where the data is sent, stored, analyzed, and acted upon (cloud services, web servers).
    *   **User Interface:** How users interact with the system (web dashboard, mobile app).

#### 5.2 Extending Your Project

Your current project (controlling an LED with a button) is a basic example of **device control**. Here's how you could evolve it:

1.  **Remote Control:**
    *   **Concept:** Control the LED from a different device over the internet.
    *   **How:**
        *   Use a web framework like Flask or Django on the Raspberry Pi to create a simple web page.
        *   The web page would have buttons to turn the LED on/off.
        *   When a button is clicked, it sends a request to the Raspberry Pi's web server, which then controls the GPIO pin.

2.  **Data Reporting:**
    *   **Concept:** Send the button press data to a remote server.
    *   **How:**
        *   Use Python libraries like `requests` to send data (e.g., button pressed/not pressed status) to a cloud platform (like ThingSpeak, Adafruit IO, AWS IoT, Google Cloud IoT).
        *   These platforms can then store, visualize, and trigger actions based on the incoming data.

3.  **Adding Sensors:**
    *   **Concept:** Introduce sensors to collect environmental data.
    *   **How:**
        *   Connect sensors like temperature sensors (e.g., DHT11/DHT22), light sensors (photoresistors), or motion sensors to different GPIO pins.
        *   Write Python code to read data from these sensors.
        *   Send this sensor data to a cloud platform or display it on a web dashboard.

#### 5.3 Example IoT Scenario: Smart Light Switch

*   **Hardware:** Raspberry Pi, LED, Button, Wi-Fi.
*   **Software:** Python script to read button, Flask web server.
*   **Functionality:**
    *   The button locally controls the LED.
    *   A web interface accessed from any device on the network can also turn the LED on/off.
    *   *Extension:* If connected to the internet, you could control the LED from anywhere and have it report its status online.

---

### Practice Questions and Exercises

**Instructions:** Answer the following questions based on the module content.

**Question 1:** What is the primary purpose of GPIO pins on a Raspberry Pi?
    a) To connect to the internet
    b) To control external electronic components
    c) To store the operating system
    d) To run graphical applications

**Question 2:** Which Python library is commonly used to control GPIO pins on a Raspberry Pi?
    a) `os`
    b) `sys`
    c) `RPi.GPIO`
    d) `time`

**Question 3:** If you are using `GPIO.setmode(GPIO.BCM)` and want to connect an LED to the pin labeled "17" on a GPIO pinout diagram, what value would you use in `GPIO.setup()` and `GPIO.output()`?
    a) 17
    b) The physical pin number corresponding to GPIO17
    c) "LED17"
    d) None of the above

**Question 4:** When using an internal pull-up resistor for a button, what is the expected `GPIO.input()` value when the button is pressed (assuming the button connects the GPIO pin to Ground)?
    a) `GPIO.HIGH`
    b) `GPIO.LOW`
    c) `0`
    d) Both b and c

**Question 5:** What is the role of a resistor when connecting an LED to a Raspberry Pi GPIO pin?
    a) To increase the brightness of the LED
    b) To limit the current flowing through the LED and prevent damage
    c) To act as a switch
    d) To provide power to the LED

**Question 6:** Briefly explain the difference between `GPIO.HIGH` and `GPIO.LOW` in the context of controlling an output pin.

**Question 7:** What is the purpose of `GPIO.cleanup()`?

**Question 8:** **Practical Exercise:**
    *   Wire an LED to GPIO pin 17 and a button to GPIO pin 18 (using internal pull-up).
    *   Write a Python script that turns the LED ON when the button is pressed and turns it OFF when the button is not pressed.
    *   *Hint:* Refer to the code examples in sections 3.2 and 3.3.

---

### Answers to Practice Questions

**Answer 1:**
    b) To control external electronic components

**Answer 2:**
    c) `RPi.GPIO`

**Answer 3:**
    a) 17
    *(Explanation: When using `GPIO.BCM`, you refer to the Broadcom SOC channel numbers, which are the numbers like 17, 18, etc.)*

**Answer 4:**
    d) Both b and c
    *(Explanation: `GPIO.LOW` is the symbolic representation, and its numerical value is 0.)*

**Answer 5:**
    b) To limit the current flowing through the LED and prevent damage

**Answer 6:**
    *   `GPIO.HIGH`: Sets the output pin to a high voltage level (typically 3.3V on a Raspberry Pi), which can turn on an LED or send a digital '1' signal.
    *   `GPIO.LOW`: Sets the output pin to a low voltage level (typically 0V or Ground), which can turn off an LED or send a digital '0' signal.

**Answer 7:**
    `GPIO.cleanup()` resets all GPIO pins that have been used by the script back to their default state (usually input). This is important to prevent potential conflicts or unexpected behavior if you run another script that uses the same pins, or to ensure the pins are in a safe state when the program finishes.

**Answer 8:**
    **Python Script (`button_led.py`):**

    ```python
    import RPi.GPIO as GPIO
    import time

    # Set GPIO mode to BCM
    GPIO.setmode(GPIO.BCM)

    # Define pin numbers
    LED_PIN = 17
    BUTTON_PIN = 18

    # Setup LED pin as output
    GPIO.setup(LED_PIN, GPIO.OUT)

    # Setup button pin as input with internal pull-up resistor
    GPIO.setup(BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)

    print("Press the button to turn on the LED. Press Ctrl+C to exit.")

    try:
        while True:
            # Read the state of the button
            button_state = GPIO.input(BUTTON_PIN)

            # If the button is pressed (input is LOW because of pull-up resistor)
            if button_state == GPIO.LOW:
                GPIO.output(LED_PIN, GPIO.HIGH) # Turn LED ON
                print("Button Pressed - LED ON")
            else:
                GPIO.output(LED_PIN, GPIO.LOW)  # Turn LED OFF
                # print("Button Released - LED OFF") # Uncomment for continuous feedback

            # Short delay to reduce CPU usage
            time.sleep(0.05)

    except KeyboardInterrupt:
        print("\nProgram terminated by user.")
    finally:
        # Clean up GPIO settings
        GPIO.cleanup()
        print("GPIO cleaned up successfully.")
    ```

    **To run this script:**
    1.  Save the code as `button_led.py` on your Raspberry Pi.
    2.  Open a terminal on your Raspberry Pi.
    3.  Navigate to the directory where you saved the file.
    4.  Run the script using: `python3 button_led.py`

---

### Important Points to Remember:

*   **GPIO Pin Numbering:** Always be mindful of whether you are using `GPIO.BCM` or `GPIO.BOARD` and use the corresponding pin numbers. `GPIO.BCM` is generally recommended.
*   **Resistors are Crucial:** Never connect an LED directly to a GPIO pin without a current-limiting resistor, as it will likely burn out the LED and potentially damage the Raspberry Pi.
*   **`GPIO.cleanup()` is Essential:** Always include `GPIO.cleanup()` at the end of your scripts (preferably in a `finally` block) to reset GPIO pins.
*   **Double-Check Wiring:** Before powering on your Raspberry Pi, carefully review your circuit connections to prevent short circuits.
*   **Start Simple:** Begin with basic projects like controlling an LED and reading a button to build confidence before tackling more complex circuits or IoT integrations.
*   **Consult Pinout Diagrams:** Keep a GPIO pinout diagram for your specific Raspberry Pi model handy.
