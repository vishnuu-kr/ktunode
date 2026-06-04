---
title: "Implementation of IoT-based data acquisition system"
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 21: Implementation of IoT"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d0b"
status: "completed"
scrapedAt: "2026-05-23T16:12:07.996Z"
---
# CIRCUITS AND MEASUREMENTS LAB

## Module 21: Implementation of IoT

### Topic: Implementation of IoT-based Data Acquisition System

**Course Outcomes Addressed:**

*   **CO1, CO2, CO3, CO4, CO5, CO6, CO7:** While this topic is primarily about implementing a system, understanding the underlying measurements and principles (covered in earlier modules) is crucial for data acquisition. For instance, measuring voltage/current (CO1, CO3), calibrating sensors (CO4), or understanding transducer characteristics (CO6) are fundamental to collecting accurate data.
*   **CO8:** Developing simulation models of data acquisition systems would directly align with this outcome.

---

### 1. Introduction to IoT-based Data Acquisition Systems (DAS)

**Key Concepts:**

*   **Data Acquisition System (DAS):** A system that measures a physical phenomenon such as voltage, current, temperature, pressure, etc., and converts the analog waveform acquired from the physical phenomenon into a digital value that can be manipulated by a computer.
*   **Internet of Things (IoT):** A network of physical objects ("things") embedded with sensors, software, and other technologies that enable them to collect and exchange data over the internet.
*   **IoT-based DAS:** A DAS that leverages IoT technologies to collect, transmit, and often analyze data from various sources, enabling remote monitoring, control, and data accessibility.

**Purpose of IoT-based DAS in Circuits & Measurements Lab:**

*   **Remote Monitoring:** Collect data from experiments without being physically present in the lab.
*   **Real-time Data Visualization:** View experimental data as it is being collected.
*   **Automated Data Logging:** Store experimental data efficiently and consistently.
*   **Enhanced Data Analysis:** Utilize cloud platforms or other IoT services for advanced data processing and insights.
*   **Interconnected Experiments:** Link data from multiple experiments or devices.

---

### 2. Components of an IoT-based Data Acquisition System

An IoT-based DAS typically consists of the following key components:

#### 2.1. Sensors/Transducers

*   **Definition:** Devices that convert physical quantities into electrical signals.
*   **Role:** The primary source of data in the DAS.
*   **Examples relevant to Circuits & Measurements Lab:**
    *   **Voltage Sensors:** Potentiometers, voltage dividers, Hall effect sensors (for non-contact voltage measurement).
    *   **Current Sensors:** Shunt resistors, current transformers (CTs), Hall effect current sensors.
    *   **Temperature Sensors:** Thermocouples, RTDs (Resistance Temperature Detectors), thermistors, LM35.
    *   **Other:** Strain gauges, pressure sensors, light sensors (photodiodes, LDRs).
*   **Textbook Relevance:**
    *   **Sawhney (Chapter 16: Transducers):** Discusses various types of transducers, their principles of operation, and characteristics. Understanding these is vital for selecting the right sensor for a specific measurement.
    *   **Gupta (Chapter 23: Transducers and Sensors):** Similar to Sawhney, provides a comprehensive overview of transducers.
    *   **Kalsi (Chapter 14: Transducers and Sensors):** Covers the fundamental concepts and types of transducers.
*   **Important Point:** The accuracy and reliability of the entire DAS depend heavily on the quality and proper selection of sensors.

#### 2.2. Signal Conditioning Unit

*   **Definition:** Electronics that modify the sensor output signal to make it compatible with the Analog-to-Digital Converter (ADC) and the microcontroller.
*   **Functions:**
    *   **Amplification:** Increasing the magnitude of a weak sensor signal.
    *   **Filtering:** Removing unwanted noise from the signal (e.g., low-pass, high-pass filters).
    *   **Linearization:** Correcting non-linear sensor outputs.
    *   **Isolation:** Protecting the microcontroller from high voltages or noise.
    *   **Impedance Matching:** Ensuring efficient transfer of signals between components.
*   **Examples:** Operational Amplifiers (Op-Amps) configured as amplifiers, filters, or buffers.
*   **Textbook Relevance:**
    *   **Sawhney (Chapters 7-10: Amplifiers, Oscillators, Filters):** Provides the theoretical basis for designing and understanding signal conditioning circuits.
    *   **Kalsi (Chapters 5-8: Operational Amplifiers, Filters):** Offers practical insights into Op-Amp applications for signal conditioning.
*   **Important Point:** Without proper signal conditioning, the ADC might not be able to accurately convert the sensor's raw output.

#### 2.3. Analog-to-Digital Converter (ADC)

*   **Definition:** A circuit that converts an analog signal (continuous in amplitude) into a digital signal (discrete in amplitude and time).
*   **Role:** Bridges the gap between the analog world of sensors and the digital world of microcontrollers and computers.
*   **Key Parameters:**
    *   **Resolution:** The smallest change in analog input that can be detected, often expressed in bits (e.g., 10-bit, 12-bit). Higher resolution means more precise digital representation.
    *   **Sampling Rate:** The number of analog samples taken per second. Higher sampling rates capture faster changes in the signal.
    *   **Conversion Time:** The time it takes for the ADC to convert a single analog sample into a digital value.
*   **Types:** Successive Approximation Register (SAR), Sigma-Delta, Flash.
*   **Textbook Relevance:**
    *   **Sawhney (Chapter 17: Electronic Instruments):** May touch upon the principles of ADCs in the context of digital measuring instruments.
    *   **Gupta (Chapter 24: Digital Instruments):** Discusses digital instruments and the role of ADCs in their operation.
    *   **Kalsi (Chapter 10: Digital Measuring Instruments):** Explains the functional blocks of digital instruments, including ADCs.
*   **Important Point:** The choice of ADC is critical for the desired accuracy and speed of data acquisition.

#### 2.4. Microcontroller/Processing Unit

*   **Definition:** A small computer on a single integrated circuit containing a processor core, memory, and programmable input/output peripherals.
*   **Role:**
    *   Reads data from the ADC.
    *   Processes the digital data (e.g., performs calculations, applies calibration factors).
    *   Manages communication with other components and the internet.
    *   Controls actuators or other devices if required for feedback loops.
*   **Examples:** Arduino (e.g., Uno, ESP32), Raspberry Pi, ESP8266.
*   **Important Point:** The microcontroller's processing power and available peripherals determine the complexity of the DAS and the type of data it can handle.

#### 2.5. Communication Module (IoT Connectivity)

*   **Definition:** Enables the microcontroller to connect to the internet or other networks to transmit data.
*   **Common Technologies:**
    *   **Wi-Fi:** Widely available, suitable for local networks and internet connectivity.
    *   **Ethernet:** Reliable wired connection.
    *   **Bluetooth/BLE:** For short-range communication, often used to connect to a gateway device.
    *   **Cellular (GSM/LTE):** For remote locations without Wi-Fi.
    *   **LoRaWAN/NB-IoT:** Low-power, wide-area networks for long-range communication.
*   **Role:** Transmits the collected and processed data to a remote server or cloud platform for storage, analysis, and visualization.
*   **Important Point:** The choice of communication technology depends on the range, power requirements, and availability of networks.

#### 2.6. Cloud Platform/Server & User Interface

*   **Definition:**
    *   **Cloud Platform:** A service that hosts applications and data, providing infrastructure for IoT devices (e.g., AWS IoT, Google Cloud IoT, Microsoft Azure IoT, Thingspeak, Adafruit IO).
    *   **User Interface (UI):** A dashboard or application that allows users to view, analyze, and interact with the collected data.
*   **Role:**
    *   **Data Storage:** Securely stores the incoming data.
    *   **Data Processing & Analytics:** Performs further analysis, generates reports, and triggers alerts.
    *   **Data Visualization:** Presents data in charts, graphs, and tables.
    *   **Remote Control:** Allows users to send commands back to the IoT device.
*   **Important Point:** The platform selection impacts the cost, scalability, and available features for data management and analysis.

---

### 3. Design and Implementation Steps

Implementing an IoT-based DAS involves several key steps:

#### 3.1. Defining the Measurement Requirements

*   **What physical quantity needs to be measured?** (e.g., voltage across a resistor, temperature of a component).
*   **What is the expected range of values?**
*   **What is the required accuracy and precision?**
*   **What is the sampling frequency needed?**
*   **What are the environmental conditions?** (Temperature, humidity, electromagnetic interference).

#### 3.2. Sensor Selection and Interfacing

*   Choose sensors that meet the measurement requirements.
*   Understand the sensor's output (voltage, current, resistance) and its operating range.
*   Connect the sensor to the signal conditioning circuitry or directly to the microcontroller's ADC (if compatible).

#### 3.3. Signal Conditioning Circuit Design

*   Design or select appropriate amplifiers, filters, etc., based on the sensor output and ADC input requirements.
*   Consider impedance matching.

#### 3.4. Microcontroller and ADC Selection

*   Choose a microcontroller with sufficient ADC channels, processing power, and communication capabilities.
*   If the microcontroller doesn't have a suitable ADC, select an external ADC module.

#### 3.5. Firmware Development (Programming the Microcontroller)

*   **Sensor Reading:** Write code to read data from the ADC.
*   **Data Processing:** Implement any necessary calculations (e.g., converting ADC readings to engineering units using calibration factors).
*   **Communication Protocol:** Implement the chosen communication protocol (e.g., Wi-Fi, MQTT) to send data to the cloud.
*   **Error Handling:** Include logic to manage potential errors.

#### 3.6. Connectivity Setup

*   Configure the Wi-Fi module or other communication interface.
*   Connect to a Wi-Fi network or cellular network.
*   Establish a connection with the chosen IoT platform/server.

#### 3.7. Cloud Platform Configuration and Dashboard Creation

*   Set up an account on the chosen IoT platform.
*   Configure the platform to receive data from the microcontroller.
*   Design and build a dashboard to visualize the incoming data in real-time.
*   Set up any desired alerts or notifications.

#### 3.8. Testing and Calibration

*   **Initial Testing:** Verify that data is being collected and transmitted correctly.
*   **Calibration:** Compare the readings from the IoT DAS with a calibrated reference instrument (as per CO4) to ensure accuracy. Adjust software or hardware as needed.
*   **Long-term Stability:** Monitor the system over time to ensure consistent performance.

---

### 4. Practical Example: Implementing a Temperature Data Logger using Arduino and Thingspeak

**Objective:** To measure room temperature using an LM35 temperature sensor and send the readings to the Thingspeak platform every minute.

**Components:**

*   Arduino Uno or compatible board
*   LM35 Temperature Sensor
*   Jumper wires
*   Computer with Arduino IDE and internet access

**Circuit Diagram:**

```
+----------+     +-------+
| LM35     |     | Arduino |
|          |     |       |
| VCC (Pin 1) ---> 5V    |
| VOUT (Pin 2) ---> Analog Pin A0 |
| GND (Pin 3) ---> GND    |
+----------+     +-------+
```

**Steps:**

1.  **Hardware Setup:** Connect the LM35 sensor to the Arduino as shown in the diagram.
2.  **Software Setup:**
    *   Install the Arduino IDE.
    *   Sign up for an account on [Thingspeak.com](https://thingspeak.com/).
    *   Create a new "Channel" in Thingspeak for temperature data. Note down the "Write API Key" and the Channel ID.
    *   Install the "Thingspeak" library in the Arduino IDE (Sketch -> Include Library -> Manage Libraries).
3.  **Arduino Code (Sketch):**

    ```cpp
    #include <WiFi.h> // Or <WiFi.h> for ESP32, adjust if using other boards
    #include "ThingSpeak.h"

    // --- Wi-Fi Credentials ---
    const char* ssid = "YOUR_WIFI_SSID";
    const char* password = "YOUR_WIFI_PASSWORD";

    // --- Thingspeak Credentials ---
    unsigned long myChannelNumber = YOUR_CHANNEL_ID; // Replace with your Channel ID
    const char* myWriteAPIKey = "YOUR_WRITE_API_KEY"; // Replace with your Write API Key

    WiFiClient client; // For ESP8266/ESP32

    unsigned long temp; // For temperature reading

    void setup() {
      Serial.begin(115200);
      delay(10);

      // Initialize Wi-Fi
      WiFi.begin(ssid, password);
      while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.println("Connecting to WiFi...");
      }
      Serial.println("Connected to WiFi");
      Serial.print("IP Address: ");
      Serial.println(WiFi.localIP());

      // Initialize Thingspeak
      ThingSpeak.begin(client);
    }

    void loop() {
      // Read temperature from LM35
      // LM35 outputs 10mV per degree Celsius.
      // Arduino's analogRead returns a value from 0-1023 for a 0-5V range (using default 5V reference).
      // So, voltage = (analogRead(A0) / 1023.0) * 5.0;
      // Temperature = voltage / 0.010; // 10mV/degree Celsius
      // Simplified calculation:
      temp = analogRead(A0); // Read raw ADC value
      float temperatureC = temp * (5.0 / 1023.0) * 100.0; // Convert to Celsius

      Serial.print("Temperature: ");
      Serial.print(temperatureC);
      Serial.println(" *C");

      // Send data to Thingspeak
      int httpCode = ThingSpeak.setField(1, temperatureC); // Field 1 for temperature
      if (httpCode == 200) {
        Serial.println("Field 1 set successfully.");
      } else {
        Serial.print("Error setting field 1, HTTP code: ");
        Serial.println(httpCode);
      }

      httpCode = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);

      if (httpCode == 200) {
        Serial.println("Data sent to Thingspeak successfully.");
      } else {
        Serial.print("Error sending data to Thingspeak, HTTP code: ");
        Serial.println(httpCode);
      }

      // Wait for 1 minute before sending next reading
      delay(60000); // 60 seconds * 1000 milliseconds
    }
    ```
    *Replace `YOUR_WIFI_SSID`, `YOUR_WIFI_PASSWORD`, `YOUR_CHANNEL_ID`, and `YOUR_WRITE_API_KEY` with your actual credentials.*

4.  **Upload and Monitor:** Upload the code to your Arduino. Open the Serial Monitor to see the temperature readings and connection status.
5.  **View Data:** Go to your Thingspeak channel online. You should see the temperature data being logged in real-time.

**Relation to Course Outcomes:**

*   **CO6 (Transducer Characteristics):** The LM35 is a transducer, and understanding its output (10mV/°C) is crucial for the conversion calculation.
*   **CO4 (Calibration):** In a real-world scenario, you'd calibrate the LM35 readings against a known accurate thermometer.
*   **CO8 (Simulation Models):** While this is an implementation, one could develop a simulation of the LM35 output and its conversion to digital data.

---

### 5. Practice Questions

1.  **What is the primary role of an ADC in an IoT-based data acquisition system?**
    *   **Answer:** An ADC converts the analog signal from sensors into a digital format that microcontrollers and computers can process.

2.  **List three common IoT communication technologies and their typical use cases.**
    *   **Answer:**
        *   **Wi-Fi:** Local area networks, internet connectivity for home/lab environments.
        *   **Bluetooth/BLE:** Short-range device-to-device or device-to-gateway communication.
        *   **Cellular (LTE/NB-IoT):** Remote locations, mobile applications where Wi-Fi is unavailable.

3.  **Explain the importance of signal conditioning in an IoT DAS.**
    *   **Answer:** Signal conditioning prepares the sensor's raw output signal to be accurately processed by the ADC and microcontroller. This includes amplification, filtering out noise, and linearization, ensuring the integrity of the data.

4.  **If you are measuring a small voltage signal from a sensor, which signal conditioning component would be most critical?**
    *   **Answer:** An amplifier (specifically, a non-inverting amplifier or a differential amplifier if common-mode noise is an issue) would be most critical to boost the signal's amplitude.

5.  **How does the resolution of an ADC affect the data acquisition process?**
    *   **Answer:** Higher ADC resolution means the analog signal can be represented by more discrete digital values, leading to a more precise and accurate digital representation of the measured physical quantity.

---

### 6. Important Points to Remember

*   **Sensor Choice is Paramount:** The entire system's accuracy hinges on selecting the right sensor for the measurement.
*   **Signal Integrity Matters:** Signal conditioning is not optional; it's crucial for accurate data.
*   **Sampling Rate vs. Data Volume:** Choose a sampling rate that captures the phenomenon adequately without generating excessive data.
*   **Calibration is Key for Accuracy:** Always calibrate your system against known standards.
*   **Power Management:** For battery-powered IoT devices, power efficiency in sensors, microcontrollers, and communication is critical.
*   **Security:** In real-world IoT deployments, data security and device authentication are vital considerations.
*   **Modularity:** Design your DAS in a modular fashion, allowing for easy replacement or upgrades of components.

---

This study material provides a foundational understanding of implementing IoT-based data acquisition systems, connecting theoretical concepts from your textbooks to practical application in a lab setting. Remember to consult your textbooks for deeper dives into specific components and principles as needed.
