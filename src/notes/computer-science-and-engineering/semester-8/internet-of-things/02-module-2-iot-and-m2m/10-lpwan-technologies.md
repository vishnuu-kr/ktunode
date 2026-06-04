---
title: "LPWAN technologies"
subject: "INTERNET OF THINGS"
module: "Module 2: IoT and M2M"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd09"
status: "completed"
scrapedAt: "2026-05-20T17:24:48.582Z"
---
# INTERNET OF THINGS

## Module 2: IoT and M2M

### Topic: LPWAN Technologies

---

### **Introduction to LPWAN Technologies**

The Internet of Things (IoT) envisions a world where billions of devices are connected, collecting and exchanging data. Many of these devices are resource-constrained, meaning they have limited power, processing capabilities, and memory. Traditional wireless technologies like Wi-Fi and Bluetooth, while prevalent, often consume too much power for long-term, battery-operated IoT deployments. This is where **Low-Power Wide-Area Network (LPWAN)** technologies come into play.

LPWANs are a class of wireless communication technologies designed specifically for IoT applications that require:

*   **Long Range:** Connecting devices over kilometers, even in challenging environments.
*   **Low Power Consumption:** Enabling devices to operate on batteries for years.
*   **Low Data Rates:** Suitable for sending small amounts of data intermittently.
*   **Low Device Cost:** Minimizing the cost of individual connected devices.

---

### **Learning Outcomes Covered**

This set of notes will cover the following learning outcomes related to LPWAN technologies:

1.  **Understand the need for LPWAN technologies in IoT applications.**
2.  **Identify and differentiate between various LPWAN technologies.**
3.  **Explain the fundamental operating principles of key LPWAN technologies.**
4.  **Discuss the advantages and disadvantages of different LPWAN technologies.**
5.  **Analyze the suitability of LPWAN technologies for various IoT use cases.**

---

### **1. The Need for LPWAN Technologies in IoT Applications**

**Why are traditional wireless technologies insufficient for many IoT deployments?**

*   **Power Consumption:** Wi-Fi, Bluetooth, and cellular (like 4G/5G) are designed for high bandwidth and continuous connectivity, leading to significant power drain. This necessitates frequent battery replacements or tethered power sources, which is impractical for remote or embedded devices.
*   **Range Limitations:** Bluetooth has a very short range. Wi-Fi offers a decent range but is often limited to within buildings or local areas. Cellular networks provide wide coverage but can still have dead zones or require robust signal strength.
*   **Cost:** While cellular IoT modules are becoming more affordable, they can still be a significant cost factor for massive deployments.
*   **Complexity:** Setting up and managing Wi-Fi networks for a vast number of devices can be complex.

**How do LPWANs address these limitations?**

LPWANs are engineered to optimize for specific IoT requirements, prioritizing long battery life and extended range over high data throughput. This makes them ideal for applications like:

*   **Smart Metering:** Gas, water, and electricity meters transmitting readings daily or hourly.
*   **Environmental Monitoring:** Sensors for temperature, humidity, pollution levels in remote areas.
*   **Asset Tracking:** Locating and monitoring the status of goods in transit or storage.
*   **Smart Agriculture:** Soil moisture sensors, weather stations, livestock monitoring.
*   **Smart Cities:** Streetlight control, waste management, parking sensors.

---

### **2. Identification and Differentiation of LPWAN Technologies**

LPWAN technologies can be broadly categorized into two main types:

#### **A. Unlicensed Spectrum LPWANs:**

These technologies operate in unlicensed frequency bands (e.g., 868 MHz in Europe, 915 MHz in North America, 2.4 GHz globally) which are free to use but can be subject to interference.

*   **LoRaWAN (Long Range Wide Area Network):**
    *   **Overview:** An open, global, royalty-free standard that leverages LoRa modulation. It defines the communication protocol and network architecture.
    *   **Key Features:**
        *   **Proprietary Physical Layer (LoRa):** Developed by Semtech, this chirp spread spectrum modulation provides excellent range and resilience to interference.
        *   **Open MAC Layer (LoRaWAN):** Developed by the LoRa Alliance, this protocol manages network access, data security, and device management.
        *   **Star-of-Stars Topology:** Devices communicate with gateways, which then forward data to a network server.
        *   **Adaptive Data Rate (ADR):** Allows devices to adjust their data rate and transmission power to optimize battery life and network capacity.
        *   **Class A, B, and C Devices:** Different device classes offer trade-offs between latency and power consumption.
    *   **Example:** A smart water meter in a rural area transmitting its daily consumption reading to a gateway several kilometers away.

*   **Sigfox:**
    *   **Overview:** A proprietary LPWAN technology developed by Sigfox. It aims to provide a simple and cost-effective global IoT network.
    *   **Key Features:**
        *   **Ultra-Narrowband (UNB) Modulation:** Uses very narrow channels for transmission, which is highly power-efficient and resilient to interference.
        *   **Limited Message Size and Frequency:** Devices can only send small messages (e.g., 12 bytes) a limited number of times per day.
        *   **Global Network Operator:** Sigfox operates its own network in many countries, or partners with local operators.
        *   **Bidirectional Communication:** Supports downlink messages, but with strict limitations.
    *   **Example:** A vending machine sending a low stock alert to its central server.

*   **Other Unlicensed LPWANs:**
    *   **Weightless-N, Weightless-P, Weightless-X:** A family of LPWAN standards offering different features and operating in various bands.
    *   **Z-Wave:** Primarily used for smart home automation, it operates in the sub-GHz band and is characterized by its mesh networking capabilities.

#### **B. Licensed Spectrum LPWANs:**

These technologies operate in licensed frequency bands, typically utilized by mobile network operators. This offers better quality of service and guaranteed spectrum access but requires licensing fees and infrastructure deployment by MNOs.

*   **LTE-M (Long-Term Evolution for Machines):**
    *   **Overview:** An enhanced machine-type communication (eMTC) technology based on LTE standards, designed for IoT.
    *   **Key Features:**
        *   **Full IP Connectivity:** Offers end-to-end IP connectivity.
        *   **Lower Power Consumption than LTE:** Optimized for IoT devices.
        *   **Better Mobility Support:** Can support devices moving at higher speeds than NB-IoT.
        *   **Higher Data Rates than NB-IoT:** Suitable for applications requiring more data or lower latency.
        *   **Operates in existing LTE bands:** Leverages existing cellular infrastructure.
    *   **Example:** A connected fleet of delivery vehicles transmitting their location and status updates.

*   **NB-IoT (Narrowband Internet of Things):**
    *   **Overview:** Another cellular LPWAN technology designed for a massive number of low-throughput devices.
    *   **Key Features:**
        *   **Extremely Low Power Consumption:** Optimized for long battery life.
        *   **Excellent Coverage:** Can penetrate deep indoors and underground.
        *   **Low Device Cost:** Designed for mass deployment.
        *   **Low Data Rates:** Suitable for small, infrequent data transmissions.
        *   **Operates in dedicated or shared LTE bands:** Can be deployed in existing LTE infrastructure.
        *   **Limited Mobility Support:** Not ideal for devices moving at high speeds.
    *   **Example:** Smart parking sensors reporting vehicle occupancy or a connected agricultural sensor monitoring soil conditions.

*   **EC-GSM-IoT (Extended Coverage-GSM for IoT):**
    *   **Overview:** An IoT extension of the GSM standard, providing a low-cost, low-power option for existing GSM networks.
    *   **Key Features:**
        *   **Utilizes existing GSM infrastructure:** Leverages the widespread GSM network.
        *   **Low power consumption and good coverage.**
        *   **Lower data rates compared to LTE-M and NB-IoT.**
    *   **Example:** Simple devices like smart door locks or temperature sensors in buildings.

---

### **3. Fundamental Operating Principles of Key LPWAN Technologies**

#### **A. LoRaWAN**

*   **LoRa Modulation (Physical Layer):**
    *   Uses **Chirp Spread Spectrum (CSS)** modulation.
    *   Chirps are frequency-modulated signals that sweep across a wide bandwidth, spreading the signal energy.
    *   This makes the signal robust against interference and allows for high receiver sensitivity, enabling long-range communication.
    *   **Spreading Factor (SF):** A key parameter that determines how much the signal is spread. Higher SF means longer range but lower data rate. LoRaWAN supports SF from 7 to 12.
    *   **Bandwidth (BW):** Typically 125 kHz or 250 kHz.

*   **LoRaWAN Protocol (MAC Layer):**
    *   **Network Architecture:**
        *   **End Devices:** The sensors/actuators.
        *   **Gateways:** Receive LoRa signals from end devices and forward them to the network server via IP.
        *   **Network Server:** Manages the network, deduplicates data, handles ADR, and routes data to the application server.
        *   **Application Server:** Processes and analyzes the data.
    *   **Communication Classes:**
        *   **Class A (Default):** Devices transmit data and then open two short receive windows to listen for acknowledgments or downlink messages. Most power-efficient, highest latency.
        *   **Class B:** Devices transmit data and then open scheduled receive windows, allowing for more predictable downlink latency.
        *   **Class C:** Devices continuously listen for downlink messages, only closing their receive windows briefly during transmissions. Lowest latency, highest power consumption.
    *   **Frequency Bands:** Operates in ISM bands (e.g., 433 MHz, 868 MHz, 915 MHz).

#### **B. Sigfox**

*   **Ultra-Narrowband (UNB) Modulation:**
    *   Transmits data over extremely narrow channels (e.g., 100 Hz or less).
    *   This concentration of signal energy allows for very high receiver sensitivity and excellent range, even with low transmit power.
    *   **Robustness:** Very resistant to interference due to the narrow bandwidth.
    *   **Data Rate:** Very low, typically a few bits per second.
*   **Network Architecture:**
    *   **End Devices:** Transmit small messages.
    *   **Sigfox Base Stations:** Receive these messages and forward them to the Sigfox Cloud.
    *   **Sigfox Cloud:** Processes the data and routes it to subscribed applications.
*   **Limitations:** Strict message size (max 12 bytes) and transmission count (max 140 messages per day per device).

#### **C. NB-IoT**

*   **LTE-based Technology:**
    *   Designed for IoT applications and operates within existing LTE cellular infrastructure.
    *   **Narrowband Spectrum:** Uses a narrow bandwidth (180 kHz) for communication, allowing for efficient use of spectrum and lower power consumption compared to standard LTE.
*   **Deployment Options:**
    *   **In-band:** Deployed within an LTE carrier's bandwidth.
    *   **Guard-band:** Deployed in the unused portion of an LTE carrier's spectrum.
    *   **Standalone:** Deployed in a dedicated frequency band.
*   **Features:**
    *   **Low Power Mode (PSM):** Devices can sleep for extended periods, waking up only to transmit data.
    *   **Extended Discontinuous Reception (eDRX):** Allows devices to periodically wake up to check for downlink messages without maintaining a continuous connection.
    *   **High Coverage:** Achieved through techniques like repetition of transmissions.

---

### **4. Advantages and Disadvantages of LPWAN Technologies**

| Technology       | Advantages                                                                                                                                                               | Disadvantages                                                                                                                                     |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **LoRaWAN**      | **Long Range:** Up to 10-15 km in rural areas, 1-2 km in urban. <br> **Low Power:** Years of battery life. <br> **Low Cost:** Open standard, readily available hardware. <br> **Flexible Deployment:** Private or public networks. <br> **Good Interference Immunity:** Due to LoRa modulation. | **Low Data Rate:** Not suitable for high-bandwidth applications. <br> **Limited Bandwidth:** Can be congested in densely populated areas. <br> **No Guaranteed QoS:** Operates in unlicensed spectrum. |
| **Sigfox**       | **Ultra-Low Power:** Very long battery life. <br> **Extremely Long Range:** Potentially longer than LoRaWAN in certain conditions. <br> **Simple & Cost-Effective:** Proprietary but easy to implement. <br> **Global Network Coverage (increasing):** Managed by Sigfox. | **Very Low Data Rate:** Highly restrictive message size and frequency. <br> **Proprietary:** Dependent on Sigfox network. <br> **Limited Bidirectional Communication.** <br> **Can be expensive for high message volumes.** |
| **NB-IoT**       | **Excellent Coverage:** Penetrates buildings and underground well. <br> **Low Power:** Long battery life (PSM, eDRX). <br> **Leverages Existing Infrastructure:** Utilizes cellular networks. <br> **Good Security:** Inherits cellular security features. <br> **Standardized by 3GPP.** | **Higher Cost:** Requires licensed spectrum and MNO infrastructure. <br> **Lower Data Rate than LTE-M:** Not for high-bandwidth use cases. <br> **Limited Mobility:** Not ideal for fast-moving devices. <br> **Network Operator Dependence.** |
| **LTE-M**        | **Good Data Rates:** Higher than NB-IoT, suitable for more data. <br> **Lower Latency than NB-IoT:** Better for real-time applications. <br> **Good Mobility Support:** Can handle moving devices. <br> **Leverages Existing Infrastructure.** <br> **Standardized by 3GPP.** | **Higher Power Consumption than NB-IoT and LoRaWAN/Sigfox:** Battery life may be shorter. <br> **Higher Cost than unlicensed LPWANs.** <br> **Network Operator Dependence.**                                                                     |

---

### **5. Suitability of LPWAN Technologies for Various IoT Use Cases**

| Use Case             | LoRaWAN                                     | Sigfox                                                              | NB-IoT                                                                 | LTE-M                                                                    |
| :------------------- | :------------------------------------------ | :------------------------------------------------------------------ | :--------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| **Smart Metering**   | **Excellent:** Low power, long range, infrequent data. | **Good:** If data volume is very low.                             | **Excellent:** Wide coverage, low power, leverages cellular.            | **Good:** If periodic status updates are needed.                          |
| **Asset Tracking**   | **Good:** For static or slow-moving assets. | **Good:** For occasional updates.                                   | **Good:** If cellular coverage is reliable.                            | **Excellent:** For dynamic tracking, good mobility.                       |
| **Environmental Monitoring** | **Excellent:** Remote sensor deployments.     | **Good:** For simple, infrequent readings.                        | **Excellent:** Wide coverage, penetration, low power.                  | **Good:** If more complex data needs to be transmitted.                  |
| **Smart Agriculture**| **Excellent:** Wide area coverage, low power. | **Good:** For basic sensor readings.                              | **Excellent:** For coverage in rural areas, low power.                 | **Good:** For sensors with more data needs or mobility (e.g., livestock). |
| **Smart Cities**     | **Good:** Streetlights, waste bins, parking.  | **Good:** For simple alerts (e.g., parking availability).         | **Excellent:** For widespread sensor networks, good penetration.       | **Good:** For more interactive city services (e.g., traffic management). |
| **Industrial IoT**   | **Good:** Condition monitoring in factories.  | **Limited:** Due to data restrictions.                            | **Good:** For machine status, predictive maintenance.                  | **Excellent:** For real-time process control, machine-to-machine.       |
| **Wearables**        | **Limited:** Data rates, latency.           | **Very Limited:** Due to message restrictions.                    | **Limited:** Power consumption might be higher than ideal.             | **Excellent:** For connected health trackers, smartwatches.              |

---

### **Key Concepts and Definitions to Remember**

*   **LPWAN:** Low-Power Wide-Area Network - a class of wireless technologies for IoT with long range, low power, and low data rates.
*   **ISM Bands:** Industrial, Scientific, and Medical bands - unlicensed radio frequency bands used by technologies like LoRaWAN and Sigfox.
*   **Chirp Spread Spectrum (CSS):** Modulation technique used by LoRa, providing excellent range and interference resistance.
*   **Spreading Factor (SF):** In LoRa, a parameter that affects range and data rate. Higher SF = longer range, lower data rate.
*   **Ultra-Narrowband (UNB):** Modulation technique used by Sigfox, characterized by very narrow channels for high efficiency and range.
*   **Adaptive Data Rate (ADR):** A feature in LoRaWAN that allows devices to dynamically adjust their data rate and transmit power.
*   **PSM (Power Saving Mode):** A low-power mode for NB-IoT devices, allowing them to sleep for long periods.
*   **eDRX (Extended Discontinuous Reception):** A feature for NB-IoT devices to periodically wake up and check for downlink messages.
*   **MAC Layer:** Media Access Control layer, responsible for how devices access the network.
*   **Physical Layer:** Defines the radio transmission characteristics (modulation, frequency, etc.).

---

### **Important Points to Remember**

*   LPWANs are not a one-size-fits-all solution. The choice of technology depends heavily on the specific application requirements.
*   The trade-off between range, power consumption, and data rate is fundamental to all LPWAN technologies.
*   Licensed spectrum technologies (NB-IoT, LTE-M) offer better guaranteed quality of service but typically come with higher costs and dependence on MNOs.
*   Unlicensed spectrum technologies (LoRaWAN, Sigfox) offer greater flexibility in deployment and lower operational costs but have no guaranteed Quality of Service.
*   LoRaWAN offers a good balance of range, power, and flexibility, making it popular for various private and public deployments.
*   Sigfox is ideal for extremely low-bandwidth, infrequent data transmissions where global coverage is paramount.
*   NB-IoT and LTE-M are strong contenders for cellular-based IoT, offering different performance characteristics suitable for diverse use cases.

---

### **Practice Questions/Exercises**

**Question 1:**
Which LPWAN technology uses Chirp Spread Spectrum (CSS) modulation and is known for its flexibility in deploying private or public networks?
a) Sigfox
b) NB-IoT
c) LoRaWAN
d) LTE-M

**Question 2:**
A smart agriculture sensor needs to report soil moisture and temperature readings once a day from a remote farm with limited cellular coverage. Which LPWAN technology would be most suitable, and why?

**Question 3:**
What is the primary trade-off that LPWAN technologies aim to optimize compared to traditional wireless technologies like Wi-Fi or cellular LTE?

**Question 4:**
Explain the difference between LoRaWAN Class A and Class C devices in terms of latency and power consumption.

**Question 5:**
Which LPWAN technology is characterized by its ultra-narrowband modulation and strict limitations on message size and frequency, making it ideal for simple, infrequent alerts?
a) LoRaWAN
b) LTE-M
c) Sigfox
d) NB-IoT

---

### **Answers to Practice Questions**

**Answer 1:**
c) LoRaWAN

**Answer 2:**
**LoRaWAN** would be the most suitable.
**Reasoning:**
*   **Long Range:** Essential for remote farm deployments where cellular coverage might be weak or non-existent.
*   **Low Power:** Allows the sensor to operate on batteries for years without frequent replacement, which is crucial for remote installations.
*   **Low Data Rates:** The daily readings (soil moisture, temperature) are small data packets, perfectly fitting the capabilities of LoRaWAN.
*   **Flexible Deployment:** A private LoRaWAN network can be set up on the farm without relying on external network providers.

**Answer 3:**
The primary trade-off LPWAN technologies aim to optimize is the balance between **long range** and **low power consumption** at the cost of **lower data rates**. Traditional wireless technologies often offer higher data rates and lower latency but at the expense of significantly higher power consumption and shorter range.

**Answer 4:**
*   **LoRaWAN Class A:** Devices transmit data and then open two short receive windows for downlink messages. This is the **most power-efficient** but offers the **highest latency** as downlink messages can only be received after the device has transmitted and opened its receive windows.
*   **LoRaWAN Class C:** Devices continuously listen for downlink messages, only closing their receive windows briefly when they are transmitting. This offers the **lowest latency** as downlink messages can be received at almost any time, but it has the **highest power consumption**.

**Answer 5:**
c) Sigfox

---
