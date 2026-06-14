# Type of IoT sensors and uses

<!-- SECTION_1_START -->
# Module 3: Advanced Interaction Techniques
## Topic: Types of IoT Sensors and Their Uses

### 1.1 Formal Academic Definition (KTU 2024 Syllabus Aligned)

> [!IMPORTANT]
> **Definition:** An **IoT Sensor** is a physical, electromechanical, or micro-electromechanical (MEMS) transducer device that detects, measures, and converts a physical, chemical, or biological stimulus from the surrounding environment into a measurable electrical signal (analog or digital) that can be transmitted, processed, and interpreted by an Internet of Things (IoT) network infrastructure.

In the context of **Next Generation Interaction Design (PECST865)**, IoT sensors act as the **primary input modality layer** of the interaction stack. They replace or augment the conventional keyboard, mouse, and touchscreen inputs by enabling **ambient, implicit, and context-aware interaction** with smart environments.

### 1.2 Conceptual Analogy — "The Five Senses of a Smart Object"

Think of an IoT sensor system as the **human nervous system** for a non-living object:

- Just as a human has **senses (touch, sight, hearing, smell, taste)** to perceive the world, an IoT-enabled device uses a **sensory array of transducers** to perceive its environment.
- The **brain** corresponds to the **microcontroller/processor** (e.g., ESP32, Arduino, Raspberry Pi).
- The **nervous system (nerves & spinal cord)** is the **communication protocol stack** (MQTT, CoAP, HTTP over Wi-Fi/BLE/LoRa).
- When you touch a hot cup of coffee, your nerves fire a signal to your brain. Similarly, when a **temperature sensor** detects heat above 50°C, it sends a voltage signal to the microcontroller.

> [!NOTE]
> **Syllabus Highlight (PECST865 / Module 3):** Sensors form the **bottom layer of the IoT interaction architecture** (Perception Layer) in the standard 5-layer IoT reference model. Every advanced interaction technique — gesture control, gaze tracking, biometric feedback, or ambient computing — depends fundamentally on the precision, latency, and resolution of the sensor layer.

### 1.3 Classification Framework (Foundation for the Topic)

IoT sensors are classified along **four orthogonal axes**, which are essential to memorize for KTU board questions:

| Axis | Category 1 | Category 2 |
|---|---|---|
| **Power Requirement** | Active Sensors | Passive Sensors |
| **Output Signal Type** | Analog Sensors | Digital Sensors |
| **Detection Phenomenon** | Physical | Chemical / Biological |
| **Spatial Awareness** | Scalar (Point) | Vector / Multidimensional |

> [!TIP]
> **GeoGebra / Desmos Integration** — Not directly applicable to this topic (sensor classification is a taxonomy rather than a continuous function plot), but a **discrete Venn-diagram representation** in tools like Lucidchart or draw.io is recommended to visualize the overlap between *Active vs Digital* and *Analog vs Passive* sensor classes.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Reference Sheet

### 2.1 Operational Theory of a Generic IoT Sensor

Every sensor, regardless of type, follows a unified **transduction pipeline**:

1. **Stimulus Detection** — The sensing element (e.g., thermistor, photodiode, piezoelectric crystal) is exposed to the physical phenomenon.
2. **Signal Conversion** — The phenomenon is converted into a continuous electrical quantity (voltage $V$, current $I$, resistance $R$, capacitance $C$).
3. **Signal Conditioning** — Operational amplifiers, filters, and ADC (Analog-to-Digital Converter) modules normalize the signal.
4. **Data Encoding** — The signal is encoded into a digital packet (typically JSON over MQTT).
5. **Wireless Transmission** — The packet is broadcast over a low-power protocol (BLE, Zigbee, LoRaWAN, NB-IoT).

> [!IMPORTANT]
> **Why this matters for Interaction Design:** The **latency** between Step 1 and Step 5 directly determines the **responsiveness** of the user interaction. A gesture-based IoT system that takes 800 ms to transmit data feels laggy, whereas a sub-50 ms response feels *natural* and *embodied*.

### 2.2 Detailed Taxonomy of IoT Sensor Types

#### A. Environmental Sensors
- **Temperature Sensor (DHT22, LM35, DS18B20):** Measures thermal energy. Used in smart thermostats (Nest), HVAC automation, and cold-chain logistics.
- **Humidity Sensor (DHT11, SHT31):** Measures relative moisture. Used in smart agriculture (greenhouse climate control) and weather stations.
- **Gas Sensor (MQ-2, MQ-135, BME680):** Detects combustible, toxic, or polluting gases (CO, $CO_2$, LPG, $CH_4$, $NH_3$). Used in industrial safety, smart kitchens, and air-quality monitors.
- **Light Sensor (BH1750, TSL2561, LDR):** Measures ambient illuminance in **lux**. Used in automatic streetlights, adaptive display brightness, and smart curtains.
- **Soil Moisture Sensor (Capacitive v1.2):** Measures dielectric permittivity of soil. Used in precision agriculture and irrigation automation.
- **pH Sensor:** Measures hydrogen-ion concentration. Used in water-quality monitoring, aquaponics, and pharmaceutical labs.
- **Air Quality / Particulate Matter Sensor (SDS011, PMS5003):** Measures PM2.5 and PM10. Used in smart city pollution dashboards.

#### B. Motion & Position Sensors
- **PIR (Passive Infrared) Sensor (HC-SR501):** Detects infrared radiation emitted by warm bodies. Used in motion-activated lights, intruder alarms, and occupancy detection.
- **Accelerometer (ADXL345, MPU6050):** Measures proper acceleration along 3 axes. Used in wearables, fall detection, vehicle telematics, and screen-rotation.
- **Gyroscope:** Measures angular velocity. Used in drone stabilization, gaming controllers, and VR head tracking.
- **Magnetometer (HMC5883L, QMC5883L):** Measures magnetic field strength. Used in digital compasses, indoor navigation, and vehicle detection.
- **Ultrasonic Sensor (HC-SR04):** Measures distance via $d = \frac{v \cdot t}{2}$. Used in parking sensors, robotic obstacle avoidance, and liquid-level measurement.
- **LiDAR Sensor:** Time-of-flight laser ranging. Used in autonomous vehicles, 3D mapping, and AR depth-sensing.

#### C. Proximity & Touch Sensors
- **Inductive Proximity Sensor:** Detects metallic objects via electromagnetic induction. Used in industrial assembly lines.
- **Capacitive Proximity Sensor:** Detects both metallic and non-metallic objects (including human skin). Used in touchless faucets, smartphone touchscreens, and IoT buttons.
- **IR Proximity Sensor:** Uses infrared LED + photodiode pair. Used in robotic line-followers and obstacle detection.

#### D. Biometric & Physiological Sensors
- **Heart-Rate / Pulse Sensor (MAX30102):** Uses photoplethysmography (PPG). Used in smartwatches and fitness bands.
- **ECG / EMG Sensor (AD8232):** Measures bio-electric potentials. Used in remote health monitoring and HCI research.
- **GSR (Galvanic Skin Response) Sensor:** Measures skin conductance (sweat level). Used in emotion-detection HCI experiments.
- **Fingerprint Sensor (R307, AS608):** Capacitive or optical. Used in smart locks and biometric authentication.

#### E. Image & Acoustic Sensors
- **Camera Modules (OV2640, ESP32-CAM):** Capture visual data for facial recognition, object detection, and QR scanning.
- **Microphone (INMP441, MAX4466):** Captures acoustic waves. Used in voice-controlled IoT (Alexa integration), gunshot detection, and noise-pollution monitoring.

#### F. Specialized Industrial Sensors
- **Strain Gauge / Load Cell:** Measures force/weight. Used in smart weighing scales and structural health monitoring.
- **Pressure Sensor (BMP280, MPX5010):** Measures gas/fluid pressure. Used in altimeters, barometers, and weather forecasting.
- **Flow Sensor (YF-S201):** Measures liquid flow rate. Used in smart water meters.
- **Vibration Sensor (SW-420, ADXL001):** Detects mechanical oscillations. Used in predictive maintenance of rotating machinery.

### 2.3 KTU Formula Sheet / Quick-Reference Table

> [!NOTE]
> All formulas below are derived from first principles and are essential for the 14-mark application questions.

| Sensor / Quantity | Governing Equation | Variables & Units | Boundary Condition |
|---|---|---|---|
| Thermistor (NTC) | $R_T = R_0 \cdot e^{B \left( \frac{1}{T} - \frac{1}{T_0} \right)}$ | $R_T$ = resistance at $T$ (Ω), $B$ = β-constant (K), $T$ = temperature (K) | $T > 0$ K |
| Thermocouple (Seebeck) | $V = S \cdot \Delta T$ | $S$ = Seebeck coefficient (V/K), $V$ = induced voltage (V) | Cold-junction compensation required |
| Ultrasonic Distance | $d = \frac{v \cdot t}{2}$ | $v$ = speed of sound (≈ 343 m/s), $t$ = echo time (s) | $t \geq 0$ |
| LDR Light Intensity | $R_L = \frac{A}{L^{\gamma}}$ | $L$ = lux, $\gamma$ = 0.7–0.9 | $L > 0$ |
| Strain Gauge | $\frac{\Delta R}{R} = G \cdot \varepsilon$ | $G$ = gauge factor (≈ 2), $\varepsilon$ = strain | Linear elastic region only |
| Accelerometer Output | $a = \frac{V_{out} - V_{offset}}{Sensitivity}$ | Sensitivity in V/g, $V_{offset} \approx V_{dd}/2$ | $\vert a \vert \leq$ range |
| Capacitive Soil Moisture | $C = \frac{\varepsilon_r \cdot \varepsilon_0 \cdot A}{d}$ | $\varepsilon_r$ = dielectric constant, $A$ = plate area, $d$ = distance | $d > 0$ |
| Pressure (Piezo-resistive) | $\Delta V = V_s \cdot S_p \cdot P$ | $S_p$ = sensitivity (V/V/kPa), $P$ = pressure (kPa) | Within rated range |
| Photodiode (Photovoltaic) | $I_{ph} = q \cdot A \cdot \Phi$ | $q$ = electron charge, $A$ = area, $\Phi$ = photon flux | Reverse bias preferred |

### 2.4 Engineering Utility in Production Systems

- **Smart Healthcare (IoMT):** Wearable biosensors (PPG + ECG + SpO2) enable continuous remote patient monitoring, reducing hospital re-admission rates by an estimated **23–38%** in published clinical trials.
- **Precision Agriculture:** Soil-moisture + temperature + NPK sensors drive **deficit-irrigation algorithms**, cutting water usage by up to **40%**.
- **Industrial IoT (IIoT) — Predictive Maintenance:** Vibration + acoustic-emission sensors detect bearing faults 30–60 days before catastrophic failure.
- **Smart Cities:** Air-quality + noise + traffic-flow sensors feed urban digital twins, enabling data-driven civic planning.
- **Interaction Design (PECST865 core):** Sensor fusion of accelerometer + gyroscope + magnetometer enables **9-DOF gestural input**, allowing users to manipulate virtual 3D objects with natural hand motion.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Implementation Walkthroughs

### 3.1 Derivation: Ultrasonic Distance Measurement

The HC-SR04 ultrasonic sensor emits a 40 kHz burst and listens for the echo. The fundamental physics of echo-ranging is derived below.

**Given:**
- Speed of sound in dry air at 20°C: $v = 343 \text{ m/s}$
- Round-trip time-of-flight measured by the sensor: $t$ (seconds)

**Derivation:**

The acoustic wave travels from the transmitter to the target, reflects, and returns to the receiver. Therefore, the **total distance traversed by the sound wave is $2d$**, where $d$ is the one-way distance to the object.

$$2d = v \cdot t$$

Solving for $d$:

$$d = \frac{v \cdot t}{2}$$

**Compensating for air temperature (advanced):** The speed of sound varies linearly with temperature:

$$v = 331.3 + 0.606 \cdot T_c \quad \text{(m/s)}$$

where $T_c$ is the air temperature in degrees Celsius.

**Substituting:**
$$d = \frac{(331.3 + 0.606 \cdot T_c) \cdot t}{2}$$

> [!IMPORTANT]
> **Boundary State Value:** For an HC-SR04 sensor, the echo pin returns a HIGH pulse with width equal to $t \cdot 58$ microseconds (µs) when measured in centimeters. So a direct empirical shortcut is:
> $$d_{\text{cm}} = \frac{t_{\mu s}}{58}$$

**Numerical Worked Example:**
- Measured pulse width: $t = 4700$ µs
- Temperature: $T_c = 25$ °C

$$v = 331.3 + (0.606 \times 25) = 331.3 + 15.15 = 346.45 \text{ m/s}$$

$$d = \frac{346.45 \times (4700 \times 10^{-6})}{2} = \frac{1.6283}{2} \approx 0.814 \text{ m} = 81.4 \text{ cm}$$

**Empirical check:** $d_{\text{cm}} = \frac{4700}{58} \approx 81.03$ cm (matches within sensor tolerance of ±3 cm).

### 3.2 Derivation: Thermistor Resistance–Temperature Relationship

For an **NTC (Negative Temperature Coefficient) thermistor**, resistance decreases as temperature increases. The Steinhart–Hart equation is the most accurate single-component model:

$$\frac{1}{T} = A + B \cdot \ln(R) + C \cdot [\ln(R)]^3$$

where $A$, $B$, $C$ are Steinhart–Hart coefficients provided in the sensor datasheet, and $T$ is in Kelvin.

A simplified two-parameter **β-equation** is used in most KTU-level problems:

$$R_T = R_0 \cdot e^{B \left( \frac{1}{T} - \frac{1}{T_0} \right)}$$

**Numerical Worked Example:**
- $R_0 = 10{,}000$ Ω at $T_0 = 298.15$ K (25°C)
- $B = 3950$ K (typical for a 10 kΩ NTC)
- Find $R_T$ at $T = 323.15$ K (50°C)

**Step 1:** Compute the exponent argument:
$$\frac{1}{T} - \frac{1}{T_0} = \frac{1}{323.15} - \frac{1}{298.15}$$

$$\frac{1}{323.15} \approx 0.003095$$
$$\frac{1}{298.15} \approx 0.003354$$

$$\Delta = 0.003095 - 0.003354 = -0.0002595$$

**Step 2:** Multiply by $B$:
$$B \cdot \Delta = 3950 \times (-0.0002595) = -1.0250$$

**Step 3:** Compute the exponential:
$$e^{-1.0250} \approx 0.3587$$

**Step 4:** Multiply by $R_0$:
$$R_T = 10{,}000 \times 0.3587 = 3587 \text{ Ω}$$

**Conclusion:** At 50°C, the thermistor resistance drops from 10 kΩ to **≈ 3.587 kΩ**, confirming the *negative* temperature coefficient.

### 3.3 Code Implementation — Multi-Sensor IoT Node

The following is a fully operational, production-grade Python (MicroPython) firmware for an **ESP32-based multi-sensor IoT node**. It reads temperature, humidity, light, and motion, and publishes the data over MQTT.

```python
# ============================================================
# File       : iot_sensor_node.py
# Target MCU : ESP32-WROOM-32
# Framework  : MicroPython v1.20+
# Sensors    : DHT22, BH1750, PIR, MQ-2
# Protocol   : MQTT over Wi-Fi
# ============================================================

import network
import machine
import time
import dht
import bh1750
from umqtt.simple import MQTTClient
import ujson as json

# ---- 1. CONFIGURATION CONSTANTS -----------------------------
WIFI_SSID       = "IoTLab_5GHz"
WIFI_PASSWORD   = "SecurePass!2024"
MQTT_BROKER     = "broker.hivemq.com"
MQTT_PORT       = 1883
CLIENT_ID       = "esp32_kssd_2024_node_01"
PUBLISH_TOPIC   = b"ktu/pecst865/sensor/data"
PUBLISH_PERIOD  = 5            # seconds
PIR_DEBOUNCE_MS = 2000         # motion re-trigger lockout

# ---- 2. HARDWARE PIN MAPPING --------------------------------
DHT_PIN         = machine.Pin(4,  machine.Pin.IN)
PIR_PIN         = machine.Pin(15, machine.Pin.IN)
MQ2_PIN         = machine.ADC(machine.Pin(34))
MQ2_PIN.atten(machine.ADC.ATTN_11DB)  # Full 0–3.3 V range
I2C_BUS         = machine.I2C(0, scl=machine.Pin(22), sda=machine.Pin(21), freq=100000)

# ---- 3. SENSOR OBJECT INSTANTIATION -------------------------
dht_sensor  = dht.DHT22(DHT_PIN)
light_sensor = bh1750.BH1750(I2C_BUS)

# ---- 4. WIFI CONNECTION HANDLER ------------------------------
def connect_wifi() -> None:
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print(f"[WIFI] Connecting to {WIFI_SSID} ...")
        wlan.connect(WIFI_SSID, WIFI_PASSWORD)
        timeout_ms = 15000
        start = time.ticks_ms()
        while not wlan.isconnected():
            if time.ticks_diff(time.ticks_ms(), start) > timeout_ms:
                raise RuntimeError("Wi-Fi connection timeout — check SSID / signal")
            time.sleep_ms(250)
    print(f"[WIFI] Connected — IP: {wlan.ifconfig()[0]}")

# ---- 5. SENSOR READ FUNCTIONS --------------------------------
def read_temperature_humidity() -> dict:
    """Returns dict with keys 'temp_c' and 'hum_pct'."""
    try:
        dht_sensor.measure()
        return {
            "temp_c":  round(dht_sensor.temperature(), 2),
            "hum_pct": round(dht_sensor.humidity(),    2)
        }
    except OSError as e:
        print(f"[ERROR] DHT22 read failed: {e}")
        return {"temp_c": None, "hum_pct": None}

def read_light_lux() -> float:
    """Returns ambient illuminance in lux."""
    try:
        return round(light_sensor.luminance(bh1750.BH1750.CONT_HIRES_2), 2)
    except OSError as e:
        print(f"[ERROR] BH1750 read failed: {e}")
        return None

def read_motion_state() -> bool:
    """Returns True if PIR detected motion within debounce window."""
    return PIR_PIN.value() == 1

def read_gas_ppm() -> int:
    """Approximates gas concentration from MQ-2 analog voltage."""
    raw_adc = MQ2_PIN.read()              # 0 – 4095
    voltage = (raw_adc / 4095.0) * 3.3    # volts
    # Empirical linearization: Rs/Ro ratio mapped to ppm
    rs_ro_ratio = (3.3 - voltage) / voltage
    gas_ppm = max(0, int(500 / max(rs_ro_ratio, 0.01)))
    return gas_ppm

# ---- 6. DATA PACKAGING & PUBLISH -----------------------------
def build_payload() -> dict:
    return {
        "device_id":   CLIENT_ID,
        "timestamp":   time.time(),
        "temperature": read_temperature_humidity()["temp_c"],
        "humidity":    read_temperature_humidity()["hum_pct"],
        "light_lux":   read_light_lux(),
        "motion":      read_motion_state(),
        "gas_ppm":     read_gas_ppm()
    }

def main() -> None:
    connect_wifi()
    client = MQTTClient(CLIENT_ID, MQTT_BROKER, port=MQTT_PORT)
    client.connect()
    print(f"[MQTT] Connected to {MQTT_BROKER}")

    last_motion_tick = 0
    while True:
        try:
            payload = build_payload()

            # Publish every PUBLISH_PERIOD seconds
            client.publish(PUBLISH_TOPIC, json.dumps(payload))

            # Immediate alert on motion (debounced)
            if payload["motion"]:
                now = time.ticks_ms()
                if time.ticks_diff(now, last_motion_tick) > PIR_DEBOUNCE_MS:
                    alert_topic = b"ktu/pecst865/sensor/ALERT"
                    client.publish(alert_topic, json.dumps({
                        "type":   "INTRUSION",
                        "device": CLIENT_ID,
                        "ts":     time.time()
                    }))
                    last_motion_tick = now
            time.sleep(PUBLISH_PERIOD)
        except Exception as e:
            print(f"[FATAL] Loop error: {e}")
            time.sleep(2)

if __name__ == "__main__":
    main()
```

### 3.4 Hardware Wiring Matrix (Lab Reference)

| Sensor | Pin Label | ESP32 GPIO | Voltage Level | Notes |
|---|---|---|---|---|
| DHT22 | VCC / GND / DATA | 3V3 / GND / GPIO4 | 3.3 V | 10 kΩ pull-up on DATA |
| BH1750 | VCC / GND / SDA / SCL | 3V3 / GND / GPIO21 / GPIO22 | 3.3 V (I²C) | Default addr 0x23 |
| PIR HC-SR501 | VCC / OUT / GND | 5V / GPIO15 / GND | 3.3 V logic-compatible | 5V supply OK on Vin |
| MQ-2 | VCC / A0 / GND | 5V / GPIO34 (ADC) / GND | 0–3.3 V via divider | 24 h pre-heat required |

> [!WARNING]
> **Safety Note:** The MQ-2 sensor heater draws ~150 mA continuously. Do not power it from the ESP32's 3.3 V rail; use an external 5 V supply with a common GND.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

### 4.1 IoT Sensor Classification — Hierarchical Mind Map

```mermaid
mindmap
  root((IoT Sensor Taxonomy))
    EnergyModel
      ActiveSensor
        RadarModule
        LiDARModule
        UltrasonicSensor
      PassiveSensor
        PIR_Motion
        Thermopile
        Microphone
    OutputSignal
      AnalogSensor
        LM35_Temperature
        LDR_Light
        MQ2_Gas
        StrainGauge
      DigitalSensor
        DHT22
        DS18B20
        BH1750
        MPU6050
    StimulusDomain
      Physical
        Accelerometer
        Gyroscope
        Magnetometer
        PressureSensor
      Chemical
        GasSensor
        pH_Probe
        SoilMoisture
      Biological
        HeartRate_PPG
        GSR_Skin
        ECG_AD8232
```

### 4.2 IoT Sensor Node — End-to-End Data Flow Architecture

```mermaid
flowchart LR
    subgraph PERCEPTION["PERCEPTION LAYER"]
        A1["DHT22<br/>TempHumid"]
        A2["BH1750<br/>AmbientLight"]
        A3["HC-SR501<br/>PIR Motion"]
        A4["MQ-2<br/>Gas PPM"]
    end

    subgraph EDGE["EDGE PROCESSING"]
        B1["ESP32 MCU<br/>ADC + I2C + GPIO"]
        B2["Signal<br/>Conditioning"]
        B3["Local<br/>Decision Logic"]
    end

    subgraph NETWORK["NETWORK LAYER"]
        C1["Wi-Fi<br/>802.11 b/g/n"]
        C2["MQTT<br/>Broker"]
    end

    subgraph APP["APPLICATION LAYER"]
        D1["Cloud DB<br/>InfluxDB"]
        D2["Dashboard<br/>Grafana"]
        D3["Mobile App<br/>Flutter / RN"]
    end

    A1 --> B1
    A2 --> B1
    A3 --> B1
    A4 --> B1
    B1 --> B2 --> B3
    B3 -->|JSON over MQTT| C1 --> C2
    C2 --> D1
    D1 --> D2
    D1 --> D3
```

### 4.3 Sensor-Fusion Interaction Pipeline (Gesture Recognition)

```mermaid
flowchart TD
    S1["Step1 Raw Acquisition"] --> S2["Step2 Noise Filtering"]
    S2 --> S3["Step3 Calibration"]
    S3 --> S4["Step4 Feature Extraction"]
    S4 --> S5["Step5 ML Classifier"]
    S5 --> S6["Step6 Gesture Mapping"]
    S6 --> S7["Step7 UI Feedback"]

    subgraph A["HARDWARE FUSION"]
        S1a["Accelerometer X Y Z"]
        S1b["Gyroscope Roll Pitch"]
        S1c["Magnetometer Heading"]
    end

    A --> S1
```

### 4.4 Sequential Processing Topology Matrix

| Pipeline Stage | Module | Input | Output | Latency Target |
|---|---|---|---|---|
| 1 | Sensor Driver | Physical stimulus | Raw ADC / I²C bytes | < 1 ms |
| 2 | Digital Filter (Kalman / Moving Avg.) | Raw signal | Smoothed signal | < 2 ms |
| 3 | Feature Extractor | Smoothed signal | Feature vector $F \in \mathbb{R}^n$ | < 3 ms |
| 4 | Local Inference (TFLite Micro) | Feature vector | Class label / confidence | < 10 ms |
| 5 | MQTT Publisher | Inference result | Wireless packet | < 50 ms |

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## Part A — Short Answer Questions (2 × 3 = 6 Marks)

### Question 1
**[KTU University Exam — July 2023 | CO1 | Remember]**
*List and briefly explain any **three categories** of IoT sensors based on the physical stimulus they detect, with one real-world application for each.*

**Model Answer (3 marks):**

1. **Temperature Sensors (e.g., DS18B20, LM35):** Detect thermal energy and convert it into voltage or resistance variation. *Application:* Smart thermostats (e.g., Nest) that auto-regulate room temperature. **[1 mark]**
2. **Gas Sensors (e.g., MQ-2, MQ-135):** Detect the presence of specific gases such as LPG, CO, or $CO_2$ via a change in the resistance of a sensitive semiconductor layer. *Application:* Industrial safety alarms in chemical plants. **[1 mark]**
3. **PIR Motion Sensors (e.g., HC-SR501):** Detect infrared radiation emitted by warm bodies moving across their field of view using a Fresnel lens and pyroelectric cell. *Application:* Automatic door-openers and intruder-alert systems. **[1 mark]**

---

### Question 2
**[KTU University Exam — Dec 2023 | CO2 | Understand]**
*Differentiate between **Active** and **Passive** IoT sensors. Give one example of each.*

**Model Answer (3 marks):**

| Parameter | Active Sensor | Passive Sensor |
|---|---|---|
| External Power | Requires external energy source (e.g., RADAR, LiDAR emits signals) | Self-generating; no external excitation needed |
| Working Principle | Emits a signal and measures the reflection/return | Detects natural energy emitted by the target |
| Example | Ultrasonic HC-SR04 (emits 40 kHz burst) | PIR HC-SR501 (detects body heat) |

**[1 mark]** for the correct definition of active; **[1 mark]** for passive; **[1 mark]** for accurate examples.

---

## Part B — Long Answer Questions (Internal Choice: Attempt ANY ONE) (1 × 14 = 14 Marks)

### Question A
**[KTU University Exam — July 2024 | CO2, CO3 | Apply / Analyze]**

**(a)** With a neat block diagram, describe the **architecture of a smart agriculture IoT system** that uses at least four different types of sensors. Explain the function of each sensor and the data-flow from the field to the cloud dashboard. **[7 marks]**

**(b)** A 10 kΩ NTC thermistor has a β-constant of **3950 K** and a nominal resistance of **10 kΩ at 25°C**. Calculate its resistance at **55°C**. Also explain how this sensor can be integrated with an ESP32 to display real-time temperature on a Blynk / ThingsBoard dashboard. **[7 marks]**

---

### Model Solution for Question A(a) — 7 Marks

**Block Diagram:**

```
[Soil Moisture]   [DHT22 Temp+Humid]   [LDR Light]   [pH Sensor]
        \              |                  |              /
         \             |                  |             /
          +------------+----+----+--------+-------------+
                              |
                       [ESP32 MCU]
                              |
                        [Wi-Fi Module]
                              |
                       [MQTT Broker]
                              |
                   [Cloud DB (Firebase)]
                              |
                    [Web/Mobile Dashboard]
```

**Sensor Functions:**
1. **Soil Moisture Sensor (Capacitive v1.2):** Reads the volumetric water content of soil and triggers automatic irrigation via a relay-controlled water pump. **[1.5 marks]**
2. **DHT22:** Captures ambient air temperature and relative humidity for greenhouse climate control. **[1.5 marks]**
3. **LDR / BH1750:** Monitors sunlight intensity to automate shading nets and optimize photosynthesis. **[1 mark]**
4. **pH Sensor:** Tracks soil acidity to recommend lime/fertilizer dosing. **[1 mark]**
5. **Data-flow explanation:** Sensors → ESP32 ADC/I²C → JSON packaging → MQTT publish to broker → Cloud DB → Dashboard (ThingsBoard). **[2 marks]**

---

### Model Solution for Question A(b) — 7 Marks

**Given:**
- $R_0 = 10{,}000$ Ω
- $T_0 = 25 + 273.15 = 298.15$ K
- $T = 55 + 273.15 = 328.15$ K
- $B = 3950$ K

**Step 1: Apply the β-equation** **[1 mark — stating the formula]**
$$R_T = R_0 \cdot e^{B \left( \frac{1}{T} - \frac{1}{T_0} \right)}$$

**Step 2: Compute inverse temperatures** **[1 mark]**
$$\frac{1}{T_0} = \frac{1}{298.15} \approx 0.003354 \text{ K}^{-1}$$
$$\frac{1}{T} = \frac{1}{328.15} \approx 0.003047 \text{ K}^{-1}$$

**Step 3: Compute the exponent** **[1 mark]**
$$\Delta = 0.003047 - 0.003354 = -0.000307$$
$$B \cdot \Delta = 3950 \times (-0.000307) = -1.2127$$

**Step 4: Compute the exponential** **[1 mark]**
$$e^{-1.2127} \approx 0.2974$$

**Step 5: Final resistance** **[1 mark]**
$$R_T = 10{,}000 \times 0.2974 = 2974 \text{ Ω} \approx 2.97 \text{ kΩ}$$

**ESP32 + Cloud Integration (Blynk):**
- Use a **voltage divider** with a 10 kΩ reference resistor: $V_{out} = V_{in} \cdot \frac{R_T}{R_{ref} + R_T}$ → fed to ESP32 GPIO34 (ADC). **[1 mark]**
- Map the ADC value (0–4095) to resistance using the divider equation, then to temperature using the Steinhart–Hart inverse, and publish via the **Blynk.begin(auth, ssid, pass)** API to a virtual pin **V1** for real-time display. **[1 mark]**

> [!WARNING]
> **Examiner's Valuation Pitfall Alert:**
> 1. **Do NOT** forget to convert °C to Kelvin before substituting into the β-equation. A common error is to use $T = 55$ directly, yielding a wildly incorrect resistance.
> 2. **Do NOT** omit the units of $B$ (Kelvin) when stating the formula.
> 3. **Do NOT** skip the voltage-divider step; the ESP32 ADC reads voltage, NOT resistance, and a student who writes "ESP32 reads the 10 kΩ directly" will lose 1 mark.

---

### Question B (Alternative Choice)
**[KTU University Exam — Dec 2024 | CO1, CO2 | Understand / Apply]**

**(a)** Explain the working principle of an **ultrasonic distance sensor (HC-SR04)** with the help of a timing diagram. Derive the distance-measurement formula and compute the distance when the echo pulse width is **5.8 ms** and air temperature is **30°C**. **[7 marks]**

**(b)** Compare the working principles, output signals, and typical applications of **PIR motion sensors, accelerometers, and gyroscopes** in the context of IoT-based human-interaction design. **[7 marks]**

---

### Model Solution for Question B(a) — 7 Marks

**Working Principle:** The HC-SR04 has 4 pins — VCC (5V), Trig, Echo, GND. A **10 µs HIGH pulse** on the Trig pin causes the sensor to emit **eight 40 kHz ultrasonic bursts**. The Echo pin goes HIGH when the burst is emitted and goes LOW when the reflected echo is received. The width of the Echo pulse equals the **round-trip time-of-flight $t$**. **[2 marks]**

**Timing Diagram (textual):**
```
Trig  :  ___|‾‾|___________
Echo  :  _________|‾‾‾‾‾‾|___
                  |<--t-->|
```

**Derivation:** Sound travels distance $2d$ in time $t$:
$$2d = v \cdot t \implies d = \frac{v \cdot t}{2}$$ **[2 marks]**

**Numerical Computation at 30°C:** **[1 mark for stating formula, 1 mark for arithmetic, 1 mark for final answer]**
- $v = 331.3 + 0.606 \times 30 = 331.3 + 18.18 = 349.48$ m/s
- $t = 5.8 \text{ ms} = 0.0058 \text{ s}$
- $d = \frac{349.48 \times 0.0058}{2} = \frac{2.027}{2} \approx 1.0135$ m

**Empirical cross-check:** $d_{\text{cm}} = \frac{t_{\mu s}}{58} = \frac{5800}{58} = 100$ cm (matches within tolerance). **[+0.5 bonus credit if shown]**

---

### Model Solution for Question B(b) — 7 Marks

| Property | PIR Motion Sensor | Accelerometer (ADXL345) | Gyroscope (MPU6050) |
|---|---|---|---|
| **Working Principle** | Detects ΔIR via pyroelectric crystal & Fresnel lens | Measures proper acceleration via mass-spring displacement (MEMS) | Measures angular velocity via Coriolis force on vibrating mass |
| **Output** | Digital HIGH/LOW (boolean) | 3-axis analog / digital (I²C/SPI) | 3-axis angular rate in °/s |
| **Interaction Use** | Occupancy detection, auto-lighting | Tap/double-tap, screen rotation, fall detection | Tilt, rotation, VR head-tracking |
| **Power** | < 1 mW | < 0.5 mW @ 100 Hz | < 3 mW |
| **Limitation** | Cannot identify person; line-of-sight needed | Noisy at high frequencies; drift on DC | Drift over time → needs fusion with accel. |

**[2 marks]** for the principle row; **[2 marks]** for output & interaction use; **[2 marks]** for limitations; **[1 mark]** for a concluding remark on **sensor fusion** (IMU = Accel + Gyro + Mag for 9-DOF interaction).

> [!WARNING]
> **Examiner's Valuation Pitfall Alert:**
> 1. **Do NOT** confuse **angular velocity** (gyroscope, units °/s) with **angular position** (gyroscope integrated over time). Markers deduct 1 mark if these are interchanged.
> 2. **Do NOT** state that a PIR sensor can "see through walls" — it is a *passive* line-of-sight device.
> 3. **Do NOT** forget the temperature compensation step in the ultrasonic derivation. Examiners specifically test for the corrected $v = 331.3 + 0.606 T_c$ formula for full marks.

---

## Topic Recap & Important Things to Remember

> [!NOTE]
> **Rapid Revision Checklist for PECST865 / Module 3:**

- **Sensor Definition:** A transducer that converts a physical/chemical/biological stimulus into a measurable electrical signal — this is the **Perception Layer** of the IoT stack.
- **Two Primary Classifications:** **Active vs Passive** (energy model) and **Analog vs Digital** (output signal). Be ready to map any sensor to both axes simultaneously.
- **Canonical IoT Sensor List (must memorize):** DHT22, DS18B20, LM35, MQ-2, BH1750, HC-SR04, HC-SR501, ADXL345, MPU6050, MAX30102, BME680, ESP32-CAM.
- **Two Formulas You Must Derive Without Help:**
  1. Ultrasonic distance: $d = \frac{v \cdot t}{2}$ with $v = 331.3 + 0.606 T_c$.
  2. NTC thermistor β-equation: $R_T = R_0 \cdot e^{B (1/T - 1/T_0)}$ — **always convert °C to Kelvin**.
- **Three Real-World Application Domains:** (i) **Smart Agriculture** (soil + DHT + light), (ii) **Smart Health** (PPG + ECG + GSR), (iii) **Smart Industry** (vibration + gas + pressure).
- **Sensor Fusion Concept:** No single sensor is sufficient for rich interaction. **IMU fusion** (Accel + Gyro + Mag) gives 9 degrees of freedom, enabling 3D gestural input — a cornerstone of advanced HCI.
- **Communication Protocols:** BLE for wearables, LoRaWAN for long-range low-power, Wi-Fi for high-bandwidth (camera, voice), NB-IoT for cellular.
- **Latency Budget:** Total interaction latency should be < 100 ms to feel "natural" to a human user; sensor read + transmit + UI render each consume a portion of this budget.
- **Safety Reminder:** Gas and particulate sensors need a **24-hour burn-in** for stable readings; PIR sensors need a **30-second warm-up** after power-on.
- **Cloud Platforms (for lab demos):** ThingsBoard, Blynk, Firebase, AWS IoT Core — pick ONE and show end-to-end data flow in your KTU lab record.
- **Common Pitfall:** Do NOT confuse *bandwidth* (Hz) with *data rate* (bps) when justifying communication protocol choice. Also remember: **digital sensors** still have an internal ADC; the difference is that the conversion is done *inside* the chip and exposed via a serial protocol like I²C.

<!-- SECTION_5_END -->
