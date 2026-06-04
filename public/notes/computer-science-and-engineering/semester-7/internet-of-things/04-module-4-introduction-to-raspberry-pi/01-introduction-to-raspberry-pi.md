---
title: "Introduction to Raspberry Pi"
subject: "INTERNET OF THINGS"
module: "Module 4: Introduction to Raspberry Pi"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c755"
status: "completed"
scrapedAt: "2026-05-20T17:08:23.333Z"
---
# INTERNET OF THINGS - Module 4: Introduction to Raspberry Pi

## Topic: Introduction to Raspberry Pi

---

### 1. Overview and Purpose of Raspberry Pi

*   **What is Raspberry Pi?**
    *   A low-cost, credit-card-sized single-board computer (SBC).
    *   Developed by the Raspberry Pi Foundation in the UK.
    *   Originally designed to promote the teaching of basic computer science in schools and developing countries.
    *   Has since become immensely popular among hobbyists, makers, and professionals for a wide range of applications, including IoT.

*   **Purpose and Key Features:**
    *   **Affordability:** Significantly cheaper than traditional desktop computers, making computing accessible to a wider audience.
    *   **Versatility:** Can be used for a multitude of tasks, from learning programming and electronics to running complex server applications and controlling hardware.
    *   **GPIO Pins (General Purpose Input/Output):** A crucial feature for IoT projects. These pins allow the Raspberry Pi to interact with external electronic components like sensors, LEDs, motors, and relays.
    *   **Compact Size:** Its small form factor makes it ideal for embedded systems and projects where space is limited.
    *   **Low Power Consumption:** Efficient power usage makes it suitable for battery-powered or always-on applications.
    *   **Linux-based Operating System:** Typically runs Raspberry Pi OS (formerly Raspbian), a Debian-based Linux distribution, providing a familiar and powerful computing environment.

*   **Why is Raspberry Pi important in IoT?**
    *   Acts as the **"brain"** or **"edge device"** for many IoT projects.
    *   Can collect data from sensors connected via GPIO.
    *   Can process this data locally.
    *   Can connect to the internet (via Ethernet or Wi-Fi) to send data to cloud platforms or receive commands.
    *   Can control actuators (e.g., turning on a light, operating a motor) based on sensor data or remote commands.

---

### 2. Different Raspberry Pi Models and Their Features

The Raspberry Pi Foundation has released several models, each with advancements in processing power, connectivity, and features. Understanding the differences helps choose the right model for a specific project.

**Key Models and Their Evolution:**

*   **Raspberry Pi 1 (Model B, A, B+):**
    *   **Processor:** Single-core ARM Cortex-A7.
    *   **RAM:** 256MB or 512MB.
    *   **Connectivity:** USB 2.0, Ethernet (on Model B/B+), Composite Video out.
    *   **GPIO:** 26-pin header (Model B), 40-pin header (Model B+).
    *   **Legacy:** The original models that started it all. Still usable for basic tasks but limited in performance.

*   **Raspberry Pi 2 (Model B):**
    *   **Processor:** Quad-core ARM Cortex-A7 (significant speed boost).
    *   **RAM:** 1GB.
    *   **Connectivity:** USB 2.0, Gigabit Ethernet.
    *   **GPIO:** 40-pin header.
    *   **Improvements:** Better performance for multitasking and more demanding applications.

*   **Raspberry Pi 3 (Model B, B+, A+):**
    *   **Processor:** Quad-core 1.2GHz 64-bit ARM Cortex-A53.
    *   **RAM:** 1GB (Model B/B+), 512MB (Model A+).
    *   **Connectivity:**
        *   **Built-in Wi-Fi and Bluetooth:** A major addition for wireless connectivity, simplifying many IoT projects.
        *   USB 2.0, Gigabit Ethernet (Model B/B+).
    *   **GPIO:** 40-pin header.
    *   **Improvements:** Enhanced processing power, integrated wireless, making it a very popular choice for IoT.

*   **Raspberry Pi 4 (Model B):**
    *   **Processor:** Quad-core 1.5GHz (later 1.8GHz) 64-bit ARM Cortex-A72.
    *   **RAM:** Available in 1GB, 2GB, 4GB, and 8GB options.
    *   **Connectivity:**
        *   **True Gigabit Ethernet.**
        *   **Dual-band Wi-Fi (2.4GHz and 5.0GHz) and Bluetooth 5.0.**
        *   **USB 3.0 ports:** Significantly faster data transfer.
        *   **Dual Micro-HDMI ports:** Support for up to two 4K displays.
    *   **GPIO:** 40-pin header.
    *   **Improvements:** A substantial leap in performance, memory, and connectivity, making it suitable for more advanced computing and high-throughput IoT data processing.

*   **Raspberry Pi Zero / Zero W / Zero 2 W:**
    *   **Processor:** Single-core 1GHz (Zero/Zero W), Quad-core 1GHz (Zero 2 W).
    *   **RAM:** 512MB.
    *   **Connectivity:**
        *   **Zero W/Zero 2 W:** Built-in Wi-Fi and Bluetooth.
        *   Micro USB ports (for power and data).
        *   Mini-HDMI port.
    *   **GPIO:** 40-pin header (requires soldering or a pre-soldered header).
    *   **Form Factor:** Extremely small and low-cost.
    *   **Ideal for:** Small, embedded projects where space and power are critical, but less processing power is needed. The Zero 2 W offers a significant performance upgrade over the original Zero/Zero W.

*   **Raspberry Pi Pico:**
    *   **Not a traditional SBC:** It's a **microcontroller development board**, not a full computer.
    *   **Processor:** RP2040 microcontroller (designed by Raspberry Pi).
    *   **Features:**
        *   Dual-core ARM Cortex-M0+.
        *   264KB of SRAM.
        *   No built-in operating system (programmed directly in C/C++ or MicroPython).
        *   Plenty of I/O, including PIO (Programmable I/O) states machines for precise timing.
    *   **Ideal for:** Real-time control, low-level hardware interaction, and projects that don't require a full Linux OS.

**Important Distinction:**
*   **Raspberry Pi (SBCs):** Run a full operating system (Linux), suitable for running applications, networking, and complex tasks.
*   **Raspberry Pi Pico (Microcontroller):** Runs bare-metal code or MicroPython, designed for direct hardware control and real-time applications.

---

### 3. Essential Hardware Components for Raspberry Pi Projects

To get started with a Raspberry Pi, you'll need more than just the board itself.

*   **Raspberry Pi Board:** The central unit.
*   **Power Supply:**
    *   Crucial for stability.
    *   Requires a specific USB power adapter (USB-C for Pi 4, Micro USB for older models).
    *   Ensure it provides sufficient amperage (e.g., 3A for Pi 4).
    *   **Important:** Using an underpowered supply can lead to instability and data corruption. Look for the official Raspberry Pi power supply or a high-quality alternative.

*   **MicroSD Card:**
    *   Stores the operating system and user data.
    *   **Minimum Recommended Size:** 8GB, but 16GB or 32GB is better for more storage and faster performance.
    *   **Speed Class:** Class 10 or UHS-I (U1/U3) is recommended for good performance.
    *   **Operating System:** Raspberry Pi OS is most common. Other Linux distributions or even specialized OSs can be installed.

*   **Display:**
    *   **HDMI Monitor:** Connects via an HDMI cable.
    *   **Raspberry Pi Official Touchscreen Display:** A convenient option for interactive projects.
    *   **Older Models:** May require a composite video connection.

*   **Input Devices:**
    *   **USB Keyboard:** For typing commands and configuration.
    *   **USB Mouse:** For navigating the graphical desktop environment.

*   **Connectivity Cables:**
    *   **HDMI Cable:** To connect to a monitor.
    *   **Ethernet Cable (Optional):** For wired internet connection.

*   **Case (Optional but Recommended):**
    *   Protects the Raspberry Pi board from dust, static electricity, and physical damage.
    *   Many cases offer cooling solutions (e.g., heatsinks or fans).

*   **Breadboard and Jumper Wires (for Electronics Projects):**
    *   **Breadboard:** A solderless prototyping board to easily connect electronic components.
    *   **Jumper Wires:** Male-to-male, male-to-female, and female-to-female wires used to connect components on the breadboard and to the Raspberry Pi's GPIO pins.

*   **Electronic Components (Sensors, LEDs, Resistors, Buttons, etc.):**
    *   The building blocks for interacting with the physical world.

---

### 4. Setting Up Raspberry Pi OS and Basic Configuration

This section covers the initial setup of your Raspberry Pi.

*   **Downloading Raspberry Pi OS:**
    *   Go to the official Raspberry Pi website (`raspberrypi.com/software/`).
    *   Download the latest version of Raspberry Pi OS (e.g., "Raspberry Pi OS with desktop" for a full graphical interface, or "Raspberry Pi OS Lite" for a command-line-only experience).

*   **Flashing the OS to the MicroSD Card:**
    *   **Raspberry Pi Imager:** The recommended and easiest tool. Available for Windows, macOS, and Linux.
    *   **Steps using Raspberry Pi Imager:**
        1.  Insert the MicroSD card into your computer.
        2.  Open Raspberry Pi Imager.
        3.  Click "CHOOSE OS" and select your downloaded Raspberry Pi OS image.
        4.  Click "CHOOSE STORAGE" and select your MicroSD card.
        5.  **(Optional but Recommended):** Click the gear icon to pre-configure settings like Wi-Fi credentials, SSH, and username/password. This is incredibly useful for headless setups (without a monitor).
        6.  Click "WRITE". This will erase all data on the MicroSD card and install the OS.

*   **First Boot and Basic Configuration:**
    1.  Insert the flashed MicroSD card into the Raspberry Pi.
    2.  Connect your keyboard, mouse, and monitor.
    3.  Connect the power supply. The Pi will boot up.
    4.  **Initial Setup Wizard:** If you used the graphical version of the OS, you'll likely be guided through a setup wizard to set your country, language, timezone, change the default password, connect to Wi-Fi, and update software.
    5.  **Command-Line Configuration (if needed):**
        *   If you are using Raspberry Pi OS Lite or need to change settings later, you can use the `raspi-config` tool in the terminal:
            ```bash
            sudo raspi-config
            ```
        *   This menu allows you to:
            *   Change password
            *   Configure network options
            *   Enable/disable interfaces (e.g., SPI, I2C, Camera, VNC, SSH)
            *   Localisation options
            *   Advanced options (e.g., expand filesystem)

*   **Updating the System:**
    *   It's crucial to keep your system up-to-date for security and bug fixes.
    *   Open a terminal and run:
        ```bash
        sudo apt update        # Fetches the list of available updates
        sudo apt upgrade       # Installs the updates
        ```

*   **Enabling SSH (for Headless Operation):**
    *   Allows you to connect to your Raspberry Pi remotely from another computer on your network without needing a monitor or keyboard directly connected to the Pi.
    *   **Method 1 (During Imaging with Imager):** Use the advanced options in Raspberry Pi Imager.
    *   **Method 2 (via `raspi-config`):**
        1.  Run `sudo raspi-config`.
        2.  Navigate to `Interface Options`.
        3.  Select `SSH` and choose `Yes`.
    *   **Method 3 (Manual File Creation):** If you've already booted the Pi without enabling SSH, you can boot the MicroSD card on your computer, create an empty file named `ssh` (with no extension) in the `boot` partition. The Pi will detect this on the next boot and enable SSH.

---

### 5. Interfacing with GPIO Pins

This is where the Raspberry Pi truly shines for IoT and hardware projects.

*   **What are GPIO Pins?**
    *   General Purpose Input/Output pins.
    *   Allow the Raspberry Pi to communicate with external electronic components.
    *   They can be configured as either an **input** (to read data from a sensor) or an **output** (to send a signal to an actuator like an LED).

*   **The 40-Pin Header:**
    *   Most modern Raspberry Pi models (except Pico) have a 40-pin GPIO header.
    *   **Pinout:** The arrangement of these pins is consistent across most models, but it's always good to check the specific pinout for your model (e.g., using `pinout` command or online diagrams).
    *   **Types of Pins:**
        *   **Power Pins:** Provide voltage (3.3V, 5V) and ground (GND).
        *   **GPIO Pins:** Configurable as input/output.
        *   **Special Function Pins:**
            *   **I2C (Inter-Integrated Circuit):** For communicating with multiple devices using only two data lines (SDA, SCL). Many sensors use I2C.
            *   **SPI (Serial Peripheral Interface):** Another serial communication protocol, often faster than I2C, used for devices like SD cards and some sensors.
            *   **UART (Universal Asynchronous Receiver/Transmitter):** For serial communication, often used for debugging or communicating with other microcontrollers (like Arduino).
            *   **PWM (Pulse Width Modulation):** Can be used to control the brightness of LEDs or the speed of motors.
            *   **ADC (Analog-to-Digital Converter):** **Note:** Raspberry Pi SBCs do NOT have built-in ADCs. You need an external ADC chip (like the MCP3008) to read analog sensor values. The Raspberry Pi Pico *does* have ADCs.

*   **Accessing GPIO Pins in Software:**
    *   **Python Libraries:** The most common and beginner-friendly way.
        *   **`RPi.GPIO`:** A popular library for Python 3.
        *   **`gpiozero`:** A simpler, more object-oriented library that abstracts away some of the complexity of `RPi.GPIO`, making it very easy to use for common tasks.
    *   **Command Line Tools:** For basic control.
    *   **C/C++ Libraries:** For performance-critical applications.

*   **Example: Controlling an LED using `gpiozero`:**

    ```python
    from gpiozero import LED
    from time import sleep

    # Define the GPIO pin the LED is connected to (using BCM numbering)
    # Example: Connect LED anode to GPIO 17, cathode to GND via a resistor
    led = LED(17)

    print("Turning LED on for 5 seconds...")
    led.on()      # Turn the LED on
    sleep(5)      # Wait for 5 seconds
    led.off()     # Turn the LED off
    print("LED turned off.")

    # Blinking the LED
    print("Blinking LED for 10 seconds...")
    led.blink(on_time=0.5, off_time=0.5) # Blink with 0.5s on, 0.5s off
    sleep(10)
    led.off() # Turn off after blinking
    print("Done blinking.")
    ```

*   **Example: Reading a Button Press using `gpiozero`:**

    ```python
    from gpiozero import Button, LED
    from signal import pause

    # Connect button to GPIO 2 and GND (pull_up=True implies internal pull-up resistor)
    button = Button(2, pull_up=True)
    # Connect LED to GPIO 17
    led = LED(17)

    print("Press the button to turn on the LED. Press again to turn off.")

    # When the button is pressed, turn the LED on
    button.when_pressed = led.on
    # When the button is released, turn the LED off
    button.when_released = led.off

    # Keep the script running
    pause()
    ```

*   **Important Considerations for GPIO:**
    *   **Voltage Levels:** Raspberry Pi GPIOs operate at 3.3V. Connecting a 5V device directly might damage the Pi. Use level shifters if necessary.
    *   **Current Limits:** Each GPIO pin has a limited current output/input capacity. Do not draw too much current, as it can damage the Pi. Use transistors or driver circuits for high-current devices.
    *   **Resistors:** Always use a current-limiting resistor (typically 220-330 ohms) in series with an LED to prevent it from burning out.
    *   **Pin Numbering Schemes:**
        *   **BOARD:** Refers to the physical pin numbers on the header (1-40).
        *   **BCM:** Refers to the Broadcom SOC channel numbers (e.g., GPIO17).
        *   `gpiozero` and `RPi.GPIO` can use either, but BCM is generally more consistent across Pi models.

---

### 6. Basic Networking and Connectivity

Connectivity is fundamental to IoT.

*   **Ethernet:**
    *   Provides a stable, wired internet connection.
    *   Connect an Ethernet cable from the Raspberry Pi to your router or network switch.
    *   Automatic configuration via DHCP is usually enabled.

*   **Wi-Fi:**
    *   Enables wireless connectivity.
    *   **Built-in Wi-Fi:** Available on Raspberry Pi 3, 4, Zero W, Zero 2 W, and newer models.
    *   **Configuration:**
        *   **Graphical Interface:** Connect through the network icon on the desktop.
        *   **Command Line:**
            *   Edit the `/etc/wpa_supplicant/wpa_supplicant.conf` file:
                ```bash
                sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
                ```
            *   Add your network details (replace `YOUR_SSID` and `YOUR_PSK`):
                ```
                network={
                    ssid="YOUR_SSID"
                    psk="YOUR_PSK"
                }
                ```
            *   Save and exit (`Ctrl+X`, `Y`, `Enter`).
            *   You might need to reboot or restart the network services: `sudo wpa_cli -i wlan0 reconfigure`

*   **Bluetooth:**
    *   Available on many models (Pi 3 onwards).
    *   Used for connecting to Bluetooth devices like speakers, keyboards, or sensors.
    *   Can be managed via the desktop interface or command-line tools (`bluetoothctl`).

*   **SSH (Secure Shell):**
    *   As discussed earlier, essential for remote access.
    *   **Finding your Pi's IP Address:**
        *   On the Pi's terminal: `hostname -I`
        *   On your router's administration page.
        *   Using network scanning tools (e.g., `nmap`, Fing app).
    *   **Connecting via SSH:**
        *   From a Linux/macOS terminal: `ssh pi@YOUR_PI_IP_ADDRESS` (default username is `pi`)
        *   From Windows: Use an SSH client like PuTTY.

*   **VNC (Virtual Network Computing):**
    *   Allows you to access and control the Raspberry Pi's graphical desktop remotely.
    *   **Enable VNC:**
        1.  Run `sudo raspi-config`.
        2.  Navigate to `Interface Options`.
        3.  Select `VNC` and choose `Yes`.
    *   **Connect:** Use a VNC client (e.g., RealVNC Viewer) on your computer, pointing to your Pi's IP address.

---

### 7. Running Python and Other Programming Languages

The Raspberry Pi is a fantastic platform for learning and using various programming languages.

*   **Python:**
    *   **Pre-installed:** Raspberry Pi OS comes with Python 3 pre-installed.
    *   **IDLE (Integrated Development and Learning Environment):** A simple IDE for writing and running Python code, usually found in the programming menu.
    *   **Text Editors:** `nano`, `vim`, VS Code (installable), Thonny (often pre-installed on newer OS images, a beginner-friendly Python IDE).
    *   **Running Python Scripts:**
        ```bash
        python3 your_script_name.py
        ```
    *   **Installing Packages:** Use `pip` (Python's package installer):
        ```bash
        pip3 install <package_name>
        # Example: pip3 install requests
        ```

*   **Other Languages:**
    *   **Scratch:** A visual programming language ideal for beginners, often pre-installed.
    *   **Java:** Can be installed.
    *   **C/C++:** Can be compiled and run using GCC.
    *   **Node.js:** Popular for web development and IoT.
    *   **Go, Ruby, etc.:** Most common languages can be installed and used.

---

### 8. Introduction to Projects and Applications in IoT

The Raspberry Pi's capabilities make it suitable for a vast array of IoT projects.

*   **Sensor Data Acquisition:**
    *   Reading data from temperature, humidity, light, motion, gas, etc., sensors.
    *   Examples: Weather stations, environmental monitoring, smart home sensors.

*   **Home Automation:**
    *   Controlling lights, fans, appliances, thermostats.
    *   Using relays to switch mains voltage (with caution and proper safety precautions!).
    *   Examples: Smart plugs, automated blinds, garden watering systems.

*   **Monitoring and Surveillance:**
    *   Using the Raspberry Pi camera module for time-lapse photography, motion detection, or live streaming.
    *   Examples: Security cameras, pet monitors, wildlife cameras.

*   **Robotics and Control:**
    *   Controlling motors, servos, and other actuators for robots.
    *   Examples: Line-following robots, robotic arms, remote-controlled vehicles.

*   **Media Centers:**
    *   Running software like Kodi or Plex to create a home media server.

*   **Web Servers and Cloud Connectivity:**
    *   Hosting web pages to display data or provide a control interface.
    *   Sending data to cloud IoT platforms (e.g., AWS IoT, Google Cloud IoT, Azure IoT Hub, ThingsBoard, Blynk).
    *   Receiving commands from the cloud.

*   **Examples of Specific IoT Projects:**
    *   **Smart Garden System:** Monitor soil moisture and temperature, automatically water plants.
    *   **Home Security Alarm:** Detect motion with PIR sensors and trigger alerts (email, SMS).
    *   **IoT Air Quality Monitor:** Use gas sensors to measure pollutants and display data on a web interface.
    *   **Remote Temperature Logger:** Log temperature data from a sensor and upload it to a cloud service every few minutes.

---

### Important Points to Remember:

*   **Power Supply is Critical:** Always use a stable and adequately rated power supply.
*   **MicroSD Card Quality:** A good quality, fast MicroSD card improves performance and reliability.
*   **GPIO Safety:** Understand voltage levels (3.3V vs 5V) and current limits. Use resistors for LEDs.
*   **Enabling Interfaces:** Remember to enable necessary interfaces (SSH, VNC, I2C, SPI) via `raspi-config`.
*   **`sudo` is Your Friend:** Many system-level commands require administrator privileges, hence the use of `sudo`.
*   **Headless Operation:** Learn to set up SSH for remote access; it's invaluable.
*   **`gpiozero` is Great for Beginners:** Its simple API makes GPIO interaction much easier.
*   **Choose the Right Pi Model:** Consider your project's requirements (processing power, connectivity, size) when selecting a Raspberry Pi.
*   **Safety First:** When working with mains voltage (e.g., controlling household appliances via relays), exercise extreme caution and ensure you understand electrical safety principles, or seek expert help.

---

### Practice Questions and Exercises

**Questions:**

1.  What is a Raspberry Pi, and what was its original intended purpose?
2.  What is the primary advantage of the Raspberry Pi's GPIO pins for IoT projects?
3.  List at least three essential hardware components you need to start a Raspberry Pi project besides the Pi board itself.
4.  What is the purpose of Raspberry Pi Imager?
5.  Explain the difference between the `apt update` and `apt upgrade` commands.
6.  What does SSH stand for, and why is it useful for Raspberry Pi projects?
7.  Describe the difference between the BOARD and BCM pin numbering schemes for GPIO pins.
8.  What is the typical voltage level of Raspberry Pi GPIO pins? What is a potential risk of connecting a 5V device directly to a GPIO pin?
9.  Name one Python library commonly used for controlling GPIO pins on a Raspberry Pi.
10. Give an example of an IoT project that could be built using a Raspberry Pi.

**Exercises:**

1.  **Setup:** If you have a Raspberry Pi, follow the guide to download Raspberry Pi OS and flash it to a MicroSD card using Raspberry Pi Imager.
2.  **Basic Connectivity:** Connect your Raspberry Pi to your network via Ethernet or Wi-Fi. Find its IP address and try to SSH into it from another computer on your network.
3.  **LED Control (Simulation or Hardware):**
    *   **If you have hardware:** Connect an LED (with a resistor!) to GPIO pin 17 and GND. Write a Python script using `gpiozero` to turn the LED on and off.
    *   **If you don't have hardware:** You can simulate this using online tools or by running the Python script and observing the output messages, imagining the LED blinking.
4.  **Button Input (Simulation or Hardware):**
    *   **If you have hardware:** Connect a push button between GPIO pin 2 and GND. Configure the button to be pull-up enabled. Write a Python script using `gpiozero` so that when the button is pressed, it turns on an LED connected to GPIO 17.
    *   **If you don't have hardware:** Focus on understanding the `Button` class and the `when_pressed` attribute in `gpiozero`.

---

### Answers to Practice Questions

1.  A Raspberry Pi is a low-cost, credit-card-sized single-board computer. Its original intended purpose was to promote the teaching of basic computer science in schools.
2.  GPIO pins allow the Raspberry Pi to interact with external electronic components like sensors (for input) and actuators like LEDs or motors (for output), making it ideal for controlling and monitoring the physical world in IoT.
3.  Essential hardware components include: a power supply, a MicroSD card, a display (monitor), a keyboard, and a mouse.
4.  Raspberry Pi Imager is a tool that simplifies the process of downloading and writing operating system images (like Raspberry Pi OS) to MicroSD cards. It also allows for pre-configuration of settings.
5.  `sudo apt update` fetches the latest list of available software packages and their versions from the repositories. `sudo apt upgrade` then downloads and installs these updates for the installed packages.
6.  SSH stands for Secure Shell. It is useful for remotely accessing and controlling the Raspberry Pi's command-line interface from another computer over a network, without needing a physical keyboard and monitor attached to the Pi (headless operation).
7.  **BOARD** refers to the physical pin numbers on the 40-pin header (1 to 40). **BCM** refers to the Broadcom SOC channel numbers assigned to the pins (e.g., GPIO17). BCM is generally more consistent across different Pi models.
8.  Raspberry Pi GPIO pins operate at **3.3V**. Connecting a 5V device directly to a 3.3V GPIO pin can potentially **damage the Raspberry Pi's GPIO header** or the Broadcom chip.
9.  Popular Python libraries for GPIO control include `RPi.GPIO` and `gpiozero`.
10. An example of an IoT project is a **Smart Garden System** that uses sensors to monitor soil moisture and temperature, and then automatically waters plants when the soil is dry. Another example is a **Home Security Alarm** that uses a PIR motion sensor to detect movement and send an alert via email or SMS.
