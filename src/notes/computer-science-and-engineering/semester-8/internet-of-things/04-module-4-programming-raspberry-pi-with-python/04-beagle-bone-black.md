---
title: "Beagle bone Black"
subject: "INTERNET OF THINGS"
module: "Module 4: Programming Raspberry Pi with Python"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd1e"
status: "completed"
scrapedAt: "2026-05-20T17:25:01.768Z"
---
It seems there might be a slight misunderstanding in the request. You're asking for study notes on the "BeagleBone Black" within the context of "Programming Raspberry Pi with Python." However, the BeagleBone Black and the Raspberry Pi are **two different single-board computers (SBCs)**.

While both are popular platforms for IoT projects and can be programmed using Python, their underlying architecture, operating systems, and specific development environments differ.

Therefore, I will proceed by creating study notes that focus on the **BeagleBone Black** as a platform for IoT development, highlighting its programming aspects with Python, while acknowledging the potential confusion with Raspberry Pi.

---

# INTERNET OF THINGS (IoT)

## Module 4: Programming [Single-Board Computers] with Python

## Topic: BeagleBone Black

---

### **1. Introduction to BeagleBone Black**

The BeagleBone Black is a low-cost, credit-card-sized single-board computer (SBC) developed by the BeagleBoard.org Foundation. It's designed for developers and hobbyists to create embedded Linux systems and IoT applications.

*   **Key Characteristics:**
    *   **Processor:** Texas Instruments Sitara AM3358 ARM Cortex-A8 (1 GHz)
    *   **RAM:** 512MB DDR3
    *   **Storage:** 4GB 8-bit eMMC flash, microSD card slot for expansion
    *   **Connectivity:** Ethernet, USB Host & Client, HDMI output
    *   **I/O Capabilities:** Extensive GPIO pins, Analog-to-Digital Converters (ADCs), PWM outputs, I2C, SPI, UART interfaces.
    *   **Operating System:** Primarily runs Debian Linux, but can also run other distributions like Ubuntu.

*   **Comparison (Briefly) with Raspberry Pi:**
    *   **Processor:** BeagleBone Black typically has a slightly less powerful processor but boasts more robust I/O capabilities out-of-the-box.
    *   **I/O:** BeagleBone Black is often favored for projects requiring direct hardware interaction due to its more accessible and numerous GPIO pins and built-in ADCs.
    *   **Ecosystem:** Raspberry Pi has a larger and more mature community and a wider range of readily available accessories and libraries, especially for beginners.

---

### **2. Setting Up Your BeagleBone Black for Python Development**

To program the BeagleBone Black with Python, you'll need to:

*   **Install an Operating System:**
    *   The most common choice is **Debian (Angstrom was older)**. You'll typically flash this onto a microSD card or the eMMC.
    *   **Tools:** Etcher, Raspberry Pi Imager (can sometimes be used for BeagleBone OS flashing as well), or `dd` command on Linux.
*   **Connect to the BeagleBone Black:**
    *   **Power:** Use a 5V power supply.
    *   **Network:**
        *   **Ethernet:** Connect directly to your router or computer.
        *   **Wi-Fi:** Requires a compatible USB Wi-Fi dongle or an add-on cape.
    *   **Serial Console (Optional but Recommended for initial setup):** Use a USB-to-serial adapter (e.g., FTDI adapter) and a terminal emulator (PuTTY, screen, minicom) to access the boot process and initial configuration.
*   **Accessing the BeagleBone Black Remotely:**
    *   **SSH (Secure Shell):** Once the BeagleBone Black is on the network, you can SSH into it from your computer.
        *   **Default Username:** `debian` (or `ubuntu`, depending on the OS image)
        *   **Default Password:** `temppwd` (it's crucial to change this immediately!)
    *   **Web Server:** Many BeagleBone Black OS images come with pre-installed web servers, allowing you to interact with it via a web browser.

*   **Installing Python:**
    *   Python 3 is usually pre-installed on modern Debian images.
    *   You can check the version with `python3 --version`.
    *   Update your package list: `sudo apt update`
    *   Upgrade existing packages: `sudo apt upgrade`

---

### **3. Interacting with Hardware using Python on BeagleBone Black**

The BeagleBone Black's strength lies in its extensive I/O capabilities. Python libraries are essential for controlling these.

#### **3.1. General Purpose Input/Output (GPIO)**

GPIO pins can be configured as inputs or outputs to interact with sensors, LEDs, buttons, and other digital components.

*   **Key Concepts:**
    *   **Pin Numbering:** BeagleBone Black uses its own pin numbering scheme, often referring to pins by their **name** (e.g., `P8_7`, `P9_16`).
    *   **Exporting Pins:** Before you can use a GPIO pin, it needs to be "exported" to the user space, making it accessible.
    *   **Input/Output Modes:** Setting a pin as `in` (input) or `out` (output).
    *   **Reading Digital Values:** Reading `0` or `1` from an input pin.
    *   **Writing Digital Values:** Writing `0` or `1` to an output pin.

*   **Python Libraries:**
    *   **`Adafruit-BBIO` (Recommended):** This is a popular and well-maintained Python library specifically for the BeagleBone Black. It simplifies GPIO, PWM, ADC, and I2C interactions.
    *   **`gpiozero` (Can be used, but might require some configuration for BBB specific features):** A user-friendly library that works across various SBCs, including Raspberry Pi and BeagleBone Black.

*   **Example using `Adafruit-BBIO`:**

    ```python
    import Adafruit_BBIO.GPIO as GPIO
    import time

    # Define a GPIO pin (e.g., P8_10)
    LED_PIN = "P8_10"

    # Set the pin numbering mode (either 'platform' or 'gpio')
    # 'platform' uses the BBB's native naming (P8_X, P9_Y)
    GPIO.setup(LED_PIN, GPIO.OUT)

    print("LED blinking...")

    try:
        while True:
            GPIO.output(LED_PIN, GPIO.HIGH) # Turn LED ON
            time.sleep(1)
            GPIO.output(LED_PIN, GPIO.LOW)  # Turn LED OFF
            time.sleep(1)
    except KeyboardInterrupt:
        print("Stopping LED blink.")
        GPIO.cleanup() # Clean up GPIO settings
    ```

    **To run this:**
    1.  Install `Adafruit-BBIO`: `sudo pip3 install Adafruit-BBIO`
    2.  Connect an LED (with a current-limiting resistor) to `P8_10` and GND.

---

#### **3.2. Analog-to-Digital Converters (ADCs)**

The BeagleBone Black has built-in ADCs, allowing it to read analog voltages from sensors (e.g., potentiometers, temperature sensors).

*   **Key Concepts:**
    *   **Analog Voltage:** A continuous range of voltage.
    *   **Digital Value:** A discrete numerical representation of the analog voltage.
    *   **ADC Channels:** Specific pins on the BeagleBone Black that are connected to the ADC hardware. These are often found on the `P9` header (e.g., `AIN0`, `AIN1`).
    *   **Resolution:** The number of bits the ADC uses to represent the analog value (e.g., 12-bit ADC means 4096 possible values).

*   **Python Libraries:**
    *   **`Adafruit-BBIO`:** Provides functions to read from ADC channels.

*   **Example using `Adafruit-BBIO`:**

    ```python
    import Adafruit_BBIO.ADC as ADC
    import time

    # Initialize ADC (optional, but good practice)
    ADC.setup()

    # Define an ADC pin (e.g., P9_39, which maps to AIN0)
    POT_PIN = "AIN0"

    print("Reading analog value from", POT_PIN)

    try:
        while True:
            # Read the analog value (0.0 to 1.0)
            analog_value = ADC.read(POT_PIN)

            # Convert to voltage (assuming a 1.8V reference for AIN0-AIN3)
            # Note: Reference voltage can vary for different ADC channels. Check documentation!
            voltage = analog_value * 1.8

            # Convert to a 0-4095 range (for 12-bit ADC)
            digital_value = int(analog_value * 4095)

            print(f"Analog: {analog_value:.4f}, Voltage: {voltage:.2f}V, Digital: {digital_value}")
            time.sleep(0.5)
    except KeyboardInterrupt:
        print("Stopping analog reading.")
        # No specific cleanup needed for ADC reading itself in Adafruit-BBIO
    ```

    **To run this:**
    1.  Connect a potentiometer to `P9_39` (AIN0), 3.3V, and GND.
    2.  Run the script.

---

#### **3.3. Pulse Width Modulation (PWM)**

PWM is used to control the speed of motors, the brightness of LEDs, or generate analog-like outputs from digital pins.

*   **Key Concepts:**
    *   **Duty Cycle:** The percentage of time a signal is HIGH within a period.
    *   **Frequency:** The number of cycles per second.
    *   **PWM Period:** The total time for one cycle.
    *   **PWM Exporting:** Specific GPIO pins need to be configured as PWM outputs. BeagleBone Black has multiple PWM subsystems.

*   **Python Libraries:**
    *   **`Adafruit-BBIO`:** Offers PWM control.

*   **Example using `Adafruit-BBIO`:**

    ```python
    import Adafruit_BBIO.PWM as PWM
    import time

    # Define a PWM pin (e.g., P8_13, which is eHRPWM1A)
    # PWM Pins are often named like 'P8_13', 'P9_14', etc.
    # Ensure you check the BBB pinmux documentation for available PWM pins.
    PWM_PIN = "P8_13"

    # Set PWM period (in microseconds). Let's use 20ms (50Hz).
    PWM_PERIOD_US = 20000

    # Initialize PWM
    PWM.start(PWM_PIN, 0, PWM_PERIOD_US) # Start with 0% duty cycle

    print(f"Controlling LED brightness on {PWM_PIN}...")

    try:
        # Increase brightness
        for duty_cycle in range(0, 101, 5):
            PWM.set_duty_cycle(PWM_PIN, duty_cycle)
            print(f"Duty Cycle: {duty_cycle}%")
            time.sleep(0.2)

        time.sleep(1)

        # Decrease brightness
        for duty_cycle in range(100, -1, -5):
            PWM.set_duty_cycle(PWM_PIN, duty_cycle)
            print(f"Duty Cycle: {duty_cycle}%")
            time.sleep(0.2)

    except KeyboardInterrupt:
        print("Stopping PWM control.")
    finally:
        PWM.stop(PWM_PIN)
        PWM.cleanup() # Clean up PWM settings
    ```

    **To run this:**
    1.  Connect an LED (with a current-limiting resistor) to `P8_13` and GND.
    2.  Run the script.

---

#### **3.4. Serial Communication (UART)**

UART (Universal Asynchronous Receiver/Transmitter) is used for serial communication with other devices like GPS modules, sensors, or other microcontrollers.

*   **Key Concepts:**
    *   **TX (Transmit):** Sends data.
    *   **RX (Receive):** Receives data.
    *   **Baud Rate:** The speed of data transmission (bits per second).
    *   **Data Bits, Stop Bits, Parity:** Common serial communication parameters.
    *   **UART Ports:** BeagleBone Black has multiple UART ports (e.g., `ttyO0`, `ttyO1`, `ttyO2`).

*   **Python Libraries:**
    *   **`pyserial`:** The standard Python library for serial communication.

*   **Example using `pyserial`:**

    ```python
    import serial
    import time

    # Define the serial port and baud rate
    # On BeagleBone Black, UART ports are often accessed as /dev/ttyO0, /dev/ttyO1, etc.
    # Check your OS image and board documentation for the correct port.
    # For example, ttyO0 is often the debug console (connected via USB serial adapter).
    # ttyO1 and ttyO2 are usually available on header pins. Let's assume ttyO1.
    SERIAL_PORT = "/dev/ttyO1"
    BAUD_RATE = 9600

    try:
        # Open the serial port
        ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
        print(f"Serial port {SERIAL_PORT} opened successfully.")
        time.sleep(2) # Give the connection a moment to settle

        # Send data
        message_to_send = "Hello from BeagleBone Black!\n"
        ser.write(message_to_send.encode()) # Encode string to bytes
        print(f"Sent: {message_to_send.strip()}")

        # Read data (assuming another device is sending data back)
        print("Waiting to receive data...")
        while True:
            if ser.in_waiting > 0:
                received_data = ser.readline().decode().strip() # Decode bytes to string and remove whitespace
                if received_data:
                    print(f"Received: {received_data}")
            time.sleep(0.1)

    except serial.SerialException as e:
        print(f"Error opening or communicating with serial port {SERIAL_PORT}: {e}")
    except KeyboardInterrupt:
        print("Stopping serial communication.")
    finally:
        if 'ser' in locals() and ser.isOpen():
            ser.close()
            print(f"Serial port {SERIAL_PORT} closed.")
    ```

    **To run this:**
    1.  Connect your BeagleBone Black to another device (e.g., another BBB, an Arduino) via their respective UART pins (TX to RX, RX to TX) and ensure they are configured for the same baud rate.
    2.  Make sure `pyserial` is installed: `sudo pip3 install pyserial`

---

#### **3.5. I2C and SPI Communication**

These are other common serial communication protocols for connecting to various sensors and peripherals.

*   **Key Concepts:**
    *   **I2C (Inter-Integrated Circuit):** A two-wire serial bus (SDA and SCL) used for communication between multiple master and slave devices.
    *   **SPI (Serial Peripheral Interface):** A synchronous serial data link that uses four signals (MOSI, MISO, SCK, SS) for full-duplex communication.
    *   **Enable I2C/SPI:** These interfaces often need to be enabled in the BeagleBone Black's device tree.

*   **Python Libraries:**
    *   **`Adafruit-BBIO`:** Supports I2C.
    *   **`spidev`:** A popular library for SPI communication.

*   **Example (Conceptual - I2C):**

    ```python
    import Adafruit_BBIO.I2C as I2C
    import time

    # Define I2C bus number
    # On BeagleBone Black, I2C1 is usually on P9_19 (SCL) and P9_20 (SDA)
    I2C_BUS = 1
    I2C_ADDRESS = 0x48 # Example address of an I2C sensor

    try:
        # Initialize I2C
        bus = I2C.I2C(I2C_BUS)

        # Write data to the sensor (assuming a sensor that expects a register address)
        register_address = 0x00
        data_to_write = 0x01
        bus.write_byte_data(I2C_ADDRESS, register_address, data_to_write)
        print(f"Wrote {data_to_write} to register {register_address} on I2C address {hex(I2C_ADDRESS)}")
        time.sleep(0.1)

        # Read data from the sensor
        read_data = bus.read_byte_data(I2C_ADDRESS, register_address)
        print(f"Read {read_data} from register {register_address} on I2C address {hex(I2C_ADDRESS)}")

    except IOError as e:
        print(f"I2C communication error: {e}")
        print("Ensure the I2C device is connected and the address is correct.")
        print("Also, check if I2C is enabled in the device tree.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    finally:
        # No explicit close needed for Adafruit_BBIO.I2C in this manner
        pass
    ```

    **To run this:**
    1.  Connect an I2C sensor to the appropriate I2C pins (`P9_19` for SCL, `P9_20` for SDA on I2C1).
    2.  Ensure I2C is enabled (often done via `config-pin` or device tree overlays).
    3.  Install `Adafruit-BBIO`.

---

### **4. Advanced Topics and Considerations**

*   **`config-pin` Utility:** A powerful command-line tool to configure the function of BeagleBone Black pins. You can use it to set pins for GPIO, UART, I2C, SPI, PWM, etc.
    *   Example: `config-pin P9_19 i2c` (configures P9_19 for I2C)
    *   Example: `config-pin P8_13 pwm` (configures P8_13 for PWM)
    *   You can also enable "modes" which automatically configure multiple pins for a specific peripheral.

*   **Device Tree Overlays:** Modern Linux systems use device trees to describe hardware. Overlays allow you to dynamically enable or modify hardware configurations without recompiling the kernel. Many libraries and `config-pin` operations rely on device tree overlays to enable peripherals.

*   **System Management:**
    *   **Updating System:** `sudo apt update && sudo apt upgrade`
    *   **Changing Password:** `passwd`
    *   **Managing Services:** `systemctl` commands to start, stop, enable, disable services.

*   **Remote Development:**
    *   **SSH:** For command-line access.
    *   **VS Code Remote - SSH Extension:** Allows you to edit code on your computer while it runs on the BeagleBone Black.
    *   **Jupyter Notebooks:** You can run Jupyter kernels on the BeagleBone Black and access them from your browser.

---

### **5. Practice Questions & Exercises**

**Question 1:**
What is the primary advantage of the BeagleBone Black over the Raspberry Pi for certain types of projects, particularly concerning hardware interaction?

**Answer 1:**
The BeagleBone Black generally offers more extensive and accessible GPIO pins and built-in Analog-to-Digital Converters (ADCs) out-of-the-box, making it highly suitable for projects that require direct and complex interaction with sensors and actuators without the need for additional HATs or shields in many cases.

---

**Question 2:**
Which Python library is specifically recommended for ease of use when interacting with the hardware (GPIO, PWM, ADC) on a BeagleBone Black?

**Answer 2:**
The `Adafruit-BBIO` library is specifically recommended.

---

**Question 3:**
Describe the steps you would take to blink an LED connected to the `P8_10` pin on a BeagleBone Black using Python. Mention the library and key functions.

**Answer 3:**
1.  **Install `Adafruit-BBIO`:** `sudo pip3 install Adafruit-BBIO`
2.  **Import necessary modules:** `import Adafruit_BBIO.GPIO as GPIO` and `import time`.
3.  **Define the pin:** `LED_PIN = "P8_10"`
4.  **Set up the pin as an output:** `GPIO.setup(LED_PIN, GPIO.OUT)`
5.  **Create a loop:** Use a `while True:` loop.
6.  **Turn the LED ON:** `GPIO.output(LED_PIN, GPIO.HIGH)`
7.  **Wait:** `time.sleep(1)`
8.  **Turn the LED OFF:** `GPIO.output(LED_PIN, GPIO.LOW)`
9.  **Wait again:** `time.sleep(1)`
10. **Cleanup on exit:** Use a `try...except KeyboardInterrupt` block to call `GPIO.cleanup()` when the script is stopped.

---

**Question 4:**
What is the purpose of the `config-pin` utility on the BeagleBone Black? Provide an example of its usage.

**Answer 4:**
The `config-pin` utility is a command-line tool used to configure the function of the BeagleBone Black's pins. It allows you to set pins for specific peripherals like GPIO, UART, I2C, SPI, PWM, etc., by manipulating the underlying device tree.

**Example Usage:**
To configure pin `P9_19` for I2C communication:
`config-pin P9_19 i2c`

---

**Question 5:**
You want to read a voltage from a sensor connected to the `P9_39` pin (which is typically mapped to an ADC channel). Which Python library would you use, and what function would you call to read the analog value?

**Answer 5:**
You would use the `Adafruit-BBIO` library. The function to read the analog value is `ADC.read("AIN0")` (assuming `P9_39` is mapped to `AIN0`).

---

### **6. Important Points to Remember**

*   **BeagleBone Black vs. Raspberry Pi:** They are distinct SBCs with different strengths. Understand their architectures.
*   **Pin Numbering:** Use the BeagleBone Black's specific pin names (e.g., `P8_X`, `P9_Y`, `AINx`).
*   **`Adafruit-BBIO`:** This library is your primary tool for hardware interaction on the BeagleBone Black.
*   **`config-pin` and Device Tree:** These are crucial for correctly enabling and configuring hardware peripherals.
*   **Default Passwords:** Always change the default password for security reasons.
*   **Error Handling:** Implement `try...except...finally` blocks for robust hardware control, especially for `GPIO.cleanup()` and `serial.close()`.
*   **Documentation:** Refer to the official BeagleBone Black pinout diagrams and documentation for specific pin functions and capabilities.

---
