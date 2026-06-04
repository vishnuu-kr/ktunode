---
title: "Demo experiments on Arduino / Raspberry Pi to upload /retrieve temperature and humidity data to thing speak cloud."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 12: Demo experiments on Arduino / Raspberry Pi to upload /retrieve temperature and humidity data to thing speak cloud."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36509"
status: "completed"
scrapedAt: "2026-05-23T16:23:19.362Z"
---
# Microprocessors and Embedded Systems Lab - Module 12: IoT Data Logging with Arduino/Raspberry Pi and ThingSpeak

## Topic: Demo experiments on Arduino / Raspberry Pi to upload /retrieve temperature and humidity data to thing speak cloud.

### 1. Introduction to IoT and Data Cloud Platforms

**Key Concept:** The Internet of Things (IoT) refers to the network of physical devices, vehicles, home appliances, and other items embedded with electronics, software, sensors, actuators, and network connectivity which enable these objects to collect and exchange data. Cloud platforms are essential for storing, processing, and visualizing this vast amount of data.

**ThingSpeak:** ThingSpeak is an open web service for **Internet of Things (IoT) applications** that allows you to aggregate, visualize, and act on data from your sensors or devices. It provides a platform to collect data, analyze it, and develop IoT and M2M applications without complex server infrastructure.

**Learning Outcome Alignment:** This section introduces the fundamental concepts of IoT and the role of cloud platforms, which is crucial for understanding the entire module. It lays the groundwork for applying microcontrollers to real-world data collection scenarios, indirectly supporting **CO1, CO2, CO3, CO4, and CO5** by providing context for the practical applications.

### 2. Required Hardware and Software

This experiment involves connecting a sensor to a microcontroller and then communicating with the internet to upload data.

**2.1. Hardware:**

*   **Microcontroller Board:**
    *   **Arduino Uno/Nano:** A popular, user-friendly microcontroller platform. It has built-in Wi-Fi capabilities (like Arduino Uno WiFi Rev2 or ESP8266-based boards like NodeMCU/Wemos D1 Mini) or requires an external Wi-Fi module (like ESP8266-01 or HC-05 Bluetooth module for internet gateway).
    *   **Raspberry Pi (e.g., Raspberry Pi 3B+/4B):** A single-board computer with built-in Wi-Fi and Ethernet, making it a more powerful option for direct internet connectivity.
*   **Temperature and Humidity Sensor:**
    *   **DHT11/DHT22:** Common, low-cost digital sensors that measure both temperature and humidity. They are easy to interface with microcontrollers.
    *   **BME280/BMP280:** More advanced sensors that can measure temperature, humidity, and pressure (BMP280 measures only temperature and pressure). They typically use I2C or SPI communication.
*   **Jumper Wires:** For connecting components.
*   **Power Supply:** For the microcontroller board.
*   **Wi-Fi Connectivity:** A stable Wi-Fi network.

**2.2. Software:**

*   **Arduino IDE:** For programming Arduino boards.
*   **Python Environment (if using Raspberry Pi):** Such as Thonny IDE or standard Python installations.
*   **ThingSpeak Account:** A free account on [https://thingspeak.com/](https://thingspeak.com/) to create channels and store data.
*   **Libraries:**
    *   **Arduino IDE:**
        *   `DHT sensor library` (for DHT11/DHT22)
        *   `Adafruit Unified Sensor Driver` (often a dependency for other sensors)
        *   `Adafruit BME280 Library` (for BME280)
        *   `ThingSpeak` library (for direct communication with ThingSpeak)
        *   `ESP8266WiFi.h` (if using an ESP8266-based board or module)
    *   **Python (for Raspberry Pi):**
        *   `requests` library (for HTTP requests)
        *   `Adafruit_DHT` library (for DHT sensors)
        *   `bme280` library (for BME280)

**Learning Outcome Alignment:** This section directly addresses **CO3** by examining the circuits and components needed for interfacing the sensor with the microcontroller. It also touches upon **CO5** as we'll be using Arduino.

### 3. Setting Up ThingSpeak

**Key Concepts:**
*   **Channel:** A container for data streams (fields) from a single device or application.
*   **Fields:** Individual data streams within a channel (e.g., "Temperature", "Humidity").
*   **API Keys:** Unique keys that authorize your device to write data to your ThingSpeak channel.

**Steps:**

1.  **Sign Up/Login:** Go to [https://thingspeak.com/](https://thingspeak.com/) and create a free account or log in.
2.  **Create a New Channel:**
    *   Navigate to "Channels" -> "My Channels".
    *   Click "New Channel".
    *   **Name:** Give your channel a descriptive name (e.g., "Home Environment Monitor").
    *   **Description (Optional):** Briefly describe the purpose of the channel.
    *   **Fields:**
        *   **Field 1:** Name it "Temperature" (e.g., "Temperature (C)").
        *   **Field 2:** Name it "Humidity" (e.g., "Humidity (%)").
    *   **Save** the channel.
3.  **Get API Keys:**
    *   After saving the channel, go to the "API Keys" tab of your newly created channel.
    *   **Write API Key:** This is crucial for sending data from your device to ThingSpeak. Copy this key.
    *   **Read API Key:** This is used to retrieve data from your channel.

**Important Point:** Keep your Write API Key secure. It allows anyone with the key to send data to your channel, which could potentially overwrite your legitimate data.

**Learning Outcome Alignment:** Understanding ThingSpeak setup is fundamental to the experiment's success, supporting **CO5** (designing an Arduino-based system) by providing the data destination and control mechanism.

### 4. Experiment 1: Uploading Temperature and Humidity Data to ThingSpeak using Arduino

This experiment focuses on reading data from a DHT sensor and uploading it to ThingSpeak.

**4.1. Interfacing DHT Sensor with Arduino:**

*   **DHT11/DHT22 Pinout:**
    *   **VCC:** Connect to Arduino 5V (or 3.3V depending on the sensor and Arduino board).
    *   **Data:** Connect to a digital pin on the Arduino (e.g., Digital Pin 2).
    *   **GND:** Connect to Arduino GND.
*   **Resistor (Optional but Recommended):** A 4.7kΩ to 10kΩ pull-up resistor between the Data pin and VCC can improve signal integrity. Some DHT modules have this built-in.

**Wiring Diagram (Conceptual):**

```
     +-----------------+       +-----------------+
     |   DHT Sensor    |       |    Arduino Uno  |
     +-----------------+       +-----------------+
     | VCC ----------- | ----> | 5V              |
     | Data ---------- | ----> | Digital Pin 2   |
     | GND ----------- | ----> | GND             |
     +-----------------+       +-----------------+
```

**4.2. Arduino Code (Sketch):**

```cpp
#include <WiFi.h> // For ESP32/ESP8266 boards
// #include <SPI.h> // For Arduino Uno with Ethernet Shield
// #include <Ethernet.h> // For Arduino Uno with Ethernet Shield

#include "DHT.h"
#include <ThingSpeak.h>

// --- Wi-Fi Credentials ---
const char* ssid = "YOUR_WIFI_SSID";         // Replace with your Wi-Fi network name
const char* password = "YOUR_WIFI_PASSWORD"; // Replace with your Wi-Fi password

// --- ThingSpeak Settings ---
unsigned long myChannelNumber = YOUR_CHANNEL_NUMBER;          // Replace with your ThingSpeak Channel Number
const char * myWriteAPIKey = "YOUR_WRITE_API_KEY"; // Replace with your ThingSpeak Write API Key

// --- DHT Sensor Setup ---
#define DHTPIN 2     // Digital pin connected to the DHT sensor
#define DHTTYPE DHT11 // Or DHT22

DHT dht(DHTPIN, DHTTYPE);

// WiFi client object
WiFiClient client;

unsigned long lastConnectionTime = 0;
boolean lastKStatus = false;

// Connection interval in milliseconds (e.g., 15 seconds)
const long interval = 15000;

void setup() {
  Serial.begin(115200);
  delay(10);

  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  // Initialize DHT sensor
  dht.begin();

  // Set ThingSpeak timeout for the connection
  ThingSpeak.setConnectTimeout(10000); // 10 seconds
  ThingSpeak.setClient(&client);
}

void loop() {
  unsigned long now = millis();

  // Check if it's time to send data
  if (now - lastConnectionTime >= interval) {
    lastConnectionTime = now;

    // --- Read Temperature and Humidity ---
    float h = dht.readHumidity();
    float t = dht.readTemperature(); // Reads temperature in Celsius (default)
    // float f = dht.readTemperature(true); // Reads temperature in Fahrenheit

    // Check if any reads failed and exit early (to try again).
    if (isnan(h) || isnan(t)) {
      Serial.println("Failed to read from DHT sensor!");
      return;
    }

    Serial.print("Humidity: ");
    Serial.print(h);
    Serial.print(" %\t");
    Serial.print("Temperature: ");
    Serial.print(t);
    Serial.println(" *C");

    // --- Upload to ThingSpeak ---
    // Set the fields with your data
    ThingSpeak.setField(1, t); // Field 1 for Temperature
    ThingSpeak.setField(2, h); // Field 2 for Humidity

    // Send the data
    int x = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);

    if (x == 200) {
      Serial.println("Channel update successful.");
    } else {
      Serial.println("Problem updating Channel. HTTP error code " + String(x));
    }
  }
}
```

**Explanation of Code:**

*   **Includes:** Necessary libraries for Wi-Fi and ThingSpeak communication, and the DHT sensor.
*   **Wi-Fi Credentials:** Replace `"YOUR_WIFI_SSID"` and `"YOUR_WIFI_PASSWORD"` with your network details.
*   **ThingSpeak Settings:** Replace `YOUR_CHANNEL_NUMBER` and `"YOUR_WRITE_API_KEY"` with the values from your ThingSpeak channel's API Keys tab.
*   **DHT Setup:** Defines the pin connected to the DHT sensor and the sensor type.
*   **`setup()` function:**
    *   Initializes serial communication for debugging.
    *   Connects the Arduino to your Wi-Fi network.
    *   Initializes the DHT sensor.
    *   Configures ThingSpeak settings.
*   **`loop()` function:**
    *   Reads humidity and temperature from the DHT sensor.
    *   **Error Handling:** Checks if the sensor readings are valid (`isnan`).
    *   Prints readings to the Serial Monitor.
    *   Uses `ThingSpeak.setField()` to assign values to your channel's fields.
    *   Uses `ThingSpeak.writeFields()` to send the data to ThingSpeak.
    *   Checks the HTTP response code (200 indicates success).
    *   The code is structured to send data at a defined `interval` (15 seconds in this example) to avoid overwhelming ThingSpeak and to comply with its free tier rate limits.

**Learning Outcome Alignment:** This section directly addresses **CO2** (developing embedded C programming) and **CO5** (designing an Arduino-based system). It also involves **CO3** (examining circuits for interfacing) through the wiring.

**Reference to Textbooks:**
*   While the provided textbooks (Ayala, Das, MacKenzie, Mazidi) focus on 8051 microcontrollers, the principles of sensor interfacing, digital I/O, and program flow are transferable. For instance, understanding how to configure a pin as an input or output in 8051 (Ayala, Chapter 4: Input/Output Ports) is analogous to using `pinMode()` and digital read/write functions in Arduino. The concept of timers and delays for timing critical operations (Ayala, Chapter 6: Timer and Counter Programming) is relevant to controlling the upload interval in the Arduino code.
*   The network communication aspect, while not explicitly covered in 8051 texts, builds upon the foundational knowledge of data transmission and protocols.

**Important Points to Remember:**

*   **Wi-Fi Credentials:** Ensure your Wi-Fi SSID and password are correct.
*   **ThingSpeak API Keys:** Double-check your Channel Number and Write API Key.
*   **Sensor Pin:** Verify the digital pin you've connected the DHT sensor's data pin to.
*   **Rate Limits:** ThingSpeak's free tier has limits on how often you can write data (typically once every 15 seconds). Adjust your `interval` accordingly.
*   **Serial Monitor:** Use the Arduino IDE's Serial Monitor to debug your code and see sensor readings and upload status.

**Practice Question 1:**
What is the primary function of the `ThingSpeak.setField()` command in the Arduino code?

**Answer:** The `ThingSpeak.setField()` command is used to specify which data value should be sent to which field in your ThingSpeak channel. For example, `ThingSpeak.setField(1, t);` assigns the value of the `t` variable (temperature) to Field 1 of the ThingSpeak channel.

**Practice Question 2:**
Why is it important to check for `isnan(h) || isnan(t)` in the DHT sensor reading?

**Answer:** The `isnan()` function checks if a value is "Not a Number". This condition is crucial because the DHT sensor might fail to read data under certain circumstances (e.g., poor connection, incorrect wiring, or environmental interference). If a reading fails, the function returns `NaN`. Checking for `NaN` allows the program to detect these failures and prevent sending invalid data to ThingSpeak.

### 5. Experiment 2: Uploading Temperature and Humidity Data to ThingSpeak using Raspberry Pi

This experiment demonstrates a similar functionality but using a Raspberry Pi, which offers more flexibility and processing power.

**5.1. Interfacing DHT Sensor with Raspberry Pi:**

*   **DHT11/DHT22 Pinout:**
    *   **VCC:** Connect to Raspberry Pi 3.3V pin.
    *   **Data:** Connect to a GPIO pin on the Raspberry Pi (e.g., GPIO4).
    *   **GND:** Connect to Raspberry Pi GND pin.
*   **Resistor:** A 4.7kΩ to 10kΩ pull-up resistor between the Data pin and VCC is essential for the DHT sensor to communicate reliably with the Raspberry Pi.

**Wiring Diagram (Conceptual):**

```
     +-----------------+       +-------------------+
     |   DHT Sensor    |       |   Raspberry Pi    |
     +-----------------+       +-------------------+
     | VCC ----------- | ----> | 3.3V              |
     | Data ---------- | ----> | GPIO 4 (Pin 7)    |
     | GND ----------- | ----> | GND (Pin 9)       |
     +-----------------+       +-------------------+
```

**5.2. Python Code:**

**Prerequisites:**
1.  **Install Libraries:**
    ```bash
    pip install Adafruit-DHT requests
    ```
2.  **Ensure Wi-Fi is Connected:** Your Raspberry Pi should be connected to your Wi-Fi network.

```python
import Adafruit_DHT
import requests
import time
import json

# --- Raspberry Pi GPIO Pin ---
DHT_PIN = 4 # GPIO pin connected to the DHT sensor data line

# --- DHT Sensor Type ---
# Use Adafruit_DHT.DHT11 or Adafruit_DHT.DHT22
DHT_TYPE = Adafruit_DHT.DHT11

# --- ThingSpeak Settings ---
THINGSPEAK_API_KEY = "YOUR_WRITE_API_KEY" # Replace with your ThingSpeak Write API Key
THINGSPEAK_CHANNEL_ID = YOUR_CHANNEL_NUMBER  # Replace with your ThingSpeak Channel Number

# --- Data Upload Interval (seconds) ---
UPLOAD_INTERVAL = 60 # Upload data every 60 seconds (1 minute)

def get_sensor_data():
    """Reads humidity and temperature from the DHT sensor."""
    humidity, temperature = Adafruit_DHT.read_retry(DHT_TYPE, DHT_PIN)
    if humidity is not None and temperature is not None:
        return round(temperature, 2), round(humidity, 2)
    else:
        print("Failed to retrieve data from humidity sensor")
        return None, None

def upload_to_thingspeak(temperature, humidity):
    """Uploads temperature and humidity data to ThingSpeak."""
    url = f"https://api.thingspeak.com/update.json"
    payload = {
        "api_key": THINGSPEAK_API_KEY,
        "field1": temperature,  # Field 1 for Temperature
        "field2": humidity      # Field 2 for Humidity
    }
    headers = {'Content-type': 'application/json'}

    try:
        response = requests.post(url, data=json.dumps(payload), headers=headers)
        if response.status_code == 200:
            print(f"Successfully uploaded: Temp={temperature}°C, Humidity={humidity}%")
        else:
            print(f"Error uploading data. Status code: {response.status_code}")
            print(f"Response: {response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Network error: {e}")

if __name__ == "__main__":
    print("Starting IoT data logger...")
    print("Press Ctrl+C to stop.")

    while True:
        temp, hum = get_sensor_data()

        if temp is not None and hum is not None:
            upload_to_thingspeak(temp, hum)
        else:
            print("Skipping upload due to sensor read failure.")

        time.sleep(UPLOAD_INTERVAL)
```

**Explanation of Code:**

*   **Imports:** Necessary libraries for sensor reading (`Adafruit_DHT`), making HTTP requests (`requests`), time handling (`time`), and JSON formatting (`json`).
*   **Constants:** Defines the DHT sensor pin, type, ThingSpeak API key, channel ID, and the upload interval.
*   **`get_sensor_data()`:** Reads data from the DHT sensor using `Adafruit_DHT.read_retry`, which attempts to read the data multiple times if the initial attempt fails. It returns rounded temperature and humidity values.
*   **`upload_to_thingspeak()`:**
    *   Constructs the ThingSpeak API URL.
    *   Creates a `payload` dictionary containing the API key and the data for Field 1 (temperature) and Field 2 (humidity).
    *   Uses the `requests.post()` method to send the data to ThingSpeak. The data is sent as a JSON payload.
    *   Checks the HTTP response status code to confirm successful upload.
    *   Includes error handling for network issues.
*   **`if __name__ == "__main__":`:**
    *   The main loop continuously calls `get_sensor_data()` and `upload_to_thingspeak()` at the specified `UPLOAD_INTERVAL`.

**Learning Outcome Alignment:** This section directly addresses **CO3** (examining circuits for interfacing) and **CO4** (designing a microcontroller-based system). While Raspberry Pi is a single-board computer, it functions as the embedded controller in this context. The programming aspect aligns with general embedded system development.

**Reference to Textbooks:**
*   Similar to the Arduino experiment, the core concepts of interfacing (connecting sensors) and data handling are relevant to the 8051 textbooks. For example, the use of GPIO pins in Raspberry Pi is analogous to the I/O ports of the 8051. The textbooks provide a strong foundation in understanding the fundamental operations of microcontrollers, even when working with a more advanced platform like Raspberry Pi. The Python code, while different in syntax, implements the same logic as the C++ code for Arduino: read sensor, send data.

**Important Points to Remember:**

*   **GPIO Pin Numbering:** Ensure you are using the correct GPIO pin number (BCM numbering is commonly used in Python libraries).
*   **3.3V Logic:** The Raspberry Pi operates on 3.3V logic. Ensure your DHT sensor is compatible or use a level shifter if necessary.
*   **Python Environment:** Make sure you have Python installed and the required libraries.
*   **Network Connectivity:** The Raspberry Pi must be connected to the internet.

**Practice Question 3:**
In the Python script for Raspberry Pi, what library is used to communicate with the DHT sensor?

**Answer:** The `Adafruit_DHT` library is used to communicate with the DHT sensor.

**Practice Question 4:**
What does the `requests.post()` function do in the Python script?

**Answer:** The `requests.post()` function is used to send an HTTP POST request to the ThingSpeak API endpoint. This request contains the sensor data (temperature and humidity) and the API key, which ThingSpeak uses to update the specified channel with the new data.

### 6. Retrieving Data from ThingSpeak

Once data is being uploaded, you can retrieve it for visualization, analysis, or further processing.

**6.1. Using ThingSpeak's Built-in Visualizations:**

*   **Charts:** After uploading data, navigate to your channel's "PrivateView" or "PublicView" tab. You will see interactive charts that display your temperature and humidity data over time. You can customize the appearance and time range of these charts.

**6.2. Retrieving Data via ThingSpeak API (Example: Python):**

You can fetch data programmatically using ThingSpeak's API.

```python
import requests
import json

# --- ThingSpeak Settings ---
THINGSPEAK_READ_API_KEY = "YOUR_READ_API_KEY" # Replace with your ThingSpeak Read API Key
THINGSPEAK_CHANNEL_ID = YOUR_CHANNEL_NUMBER     # Replace with your ThingSpeak Channel Number
DAYS_TO_FETCH = 1                               # Fetch data from the last 'n' days

def get_data_from_thingspeak():
    """Retrieves the last set of data from ThingSpeak."""
    # URL to fetch the last entry
    url = f"https://api.thingspeak.com/channels/{THINGSPEAK_CHANNEL_ID}/feeds/last.json?api_key={THINGSPEAK_READ_API_KEY}"

    # Alternatively, to fetch data for a specific number of days:
    # url = f"https://api.thingspeak.com/channels/{THINGSPEAK_CHANNEL_ID}/feeds.json?api_key={THINGSPEAK_READ_API_KEY}&days={DAYS_TO_FETCH}"

    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            # Process the retrieved data
            if data and 'field1' in data and 'field2' in data:
                temperature = data.get('field1')
                humidity = data.get('field2')
                created_at = data.get('created_at') # Timestamp of the data
                print(f"Retrieved data at {created_at}:")
                print(f"  Temperature: {temperature}°C")
                print(f"  Humidity: {humidity}%")
                return temperature, humidity
            else:
                print("No data found or unexpected response format.")
                return None, None
        else:
            print(f"Error retrieving data. Status code: {response.status_code}")
            print(f"Response: {response.text}")
            return None, None
    except requests.exceptions.RequestException as e:
        print(f"Network error: {e}")
        return None, None

if __name__ == "__main__":
    print("Fetching data from ThingSpeak...")
    get_data_from_thingspeak()
```

**Explanation of Code:**

*   **`THINGSPEAK_READ_API_KEY`:** You'll need to use your ThingSpeak **Read API Key** for this.
*   **URL Construction:** The URL points to the ThingSpeak API endpoint for retrieving channel feeds.
    *   `/feeds/last.json`: Retrieves the most recent entry.
    *   `/feeds.json?days={DAYS_TO_FETCH}`: Retrieves entries from the last specified number of days.
*   **`requests.get()`:** Makes an HTTP GET request to fetch the data.
*   **JSON Parsing:** The response is parsed from JSON format into a Python dictionary.
*   **Data Extraction:** The temperature and humidity values are extracted from the `field1` and `field2` keys.

**Learning Outcome Alignment:** This section directly supports the "retrieve" part of the module topic. It demonstrates how to access the collected data, reinforcing the understanding of data flow and network communication in embedded systems, aligning with **CO4** and **CO5**.

**Important Points to Remember:**

*   **Read API Key:** Never use your Write API Key to fetch data; use the Read API Key.
*   **Rate Limits for Reading:** Be mindful of ThingSpeak's read rate limits for the free tier.

**Practice Question 5:**
What is the difference between the Write API Key and the Read API Key in ThingSpeak?

**Answer:** The **Write API Key** is used to authorize your device to send data to your ThingSpeak channel. The **Read API Key** is used to allow others (or your own programs) to retrieve data from your ThingSpeak channel without compromising your ability to write data.

### 7. Applications and Further Extensions

*   **Environmental Monitoring:** Home automation, greenhouse monitoring, industrial process control.
*   **Data Logging:** Recording historical trends for analysis, predictive maintenance.
*   **Alerting Systems:** Triggering notifications (e.g., email, SMS) when temperature or humidity exceeds thresholds (can be configured in ThingSpeak).
*   **Integration with other services:** Using ThingSpeak's "ThingHTTP" or webhooks to trigger actions on other platforms.
*   **Different Sensors:** Interfacing with other types of sensors (e.g., soil moisture, light intensity, gas sensors) and uploading their data.
*   **Machine Learning:** Using the collected data for training machine learning models for forecasting or anomaly detection.

**Learning Outcome Alignment:** This section broadens the perspective on the practical utility of the learned concepts, directly supporting **CO4** and **CO5** by showing how these systems can be designed for various real-world applications.

### 8. Conclusion

This module provided hands-on experience in building an IoT system capable of collecting and transmitting environmental data (temperature and humidity) to a cloud platform like ThingSpeak. By using either an Arduino or a Raspberry Pi, you've learned to:

*   Interface sensors with microcontrollers.
*   Connect to Wi-Fi networks.
*   Utilize cloud services for data storage and visualization.
*   Program embedded systems for data acquisition and transmission.
*   Retrieve data from the cloud.

These skills are foundational for developing more complex IoT solutions and embedded systems.

---

This comprehensive set of notes covers the topic of demo experiments on Arduino/Raspberry Pi to upload/retrieve temperature and humidity data to ThingSpeak cloud, aligning with the specified learning outcomes and course outcomes. The integration of textbook references, key concepts, practical examples, code snippets, and practice questions aims to provide a thorough understanding of the subject matter.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
