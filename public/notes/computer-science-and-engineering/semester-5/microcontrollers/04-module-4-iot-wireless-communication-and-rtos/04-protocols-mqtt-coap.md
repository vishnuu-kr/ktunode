---
title: "Protocols (MQTT, CoAP)"
subject: "MICROCONTROLLERS"
module: "Module 4: IoT, Wireless Communication, and RTOS:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b631"
status: "completed"
scrapedAt: "2026-05-20T16:48:46.932Z"
---
# MICROCONTROLLERS - Module 4: IoT, Wireless Communication, and RTOS - Protocols (MQTT, CoAP)

These notes cover the MQTT and CoAP protocols, critical for IoT applications using microcontrollers.

## 1. Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the principles of MQTT and CoAP protocols.
*   Compare and contrast MQTT and CoAP protocols.
*   Identify the advantages and disadvantages of each protocol.
*   Describe use cases where MQTT or CoAP are most appropriate.
*   Explain the key components of MQTT and CoAP messages.
*   Implement basic MQTT and CoAP communication using microcontroller examples.

## 2. Key Concepts and Definitions

### 2.1 Introduction to IoT Protocols

*   **IoT (Internet of Things):** A network of physical devices, vehicles, home appliances, and other items embedded with electronics, software, sensors, actuators, and network connectivity, which enables these objects to collect and exchange data.

*   **IoT Protocol:** A standard set of rules that enables devices on the IoT network to communicate with each other and with the cloud. They are crucial for ensuring interoperability and secure data exchange.

*   **Constrained Devices:** IoT devices with limited processing power, memory, and battery life. Often use low-power communication technologies.

### 2.2 MQTT (Message Queuing Telemetry Transport)

*   **Definition:** A lightweight, publish-subscribe network protocol that transports messages between devices. It is designed for constrained devices and low-bandwidth, high-latency networks.

*   **Publish-Subscribe Model:** Instead of direct communication, devices publish messages to a central broker on specific topics, and other devices subscribe to those topics to receive the messages.

*   **Key Components:**
    *   **MQTT Client:** Any device (sensor, actuator, microcontroller) that publishes messages or subscribes to topics.
    *   **MQTT Broker:** A server that receives messages from publishers and routes them to subscribers.  It acts as a central hub. Examples: Mosquitto, HiveMQ, EMQX.
    *   **Topic:** A hierarchical string used to categorize messages. Clients subscribe to specific topics or topic patterns. Example: "sensor/temperature", "device/+/status" (+ is a wildcard).

*   **Quality of Service (QoS):** Defines the reliability of message delivery. MQTT supports three QoS levels:
    *   **QoS 0 (At Most Once):** The message is sent once and no guarantee of delivery. Fastest but least reliable. "Fire and forget".
    *   **QoS 1 (At Least Once):** The message is sent until the publisher receives an acknowledgement (PUBACK) from the broker. Message might be delivered more than once.
    *   **QoS 2 (Exactly Once):** The message is delivered exactly once. Most reliable but requires more overhead. Uses a four-part handshake.

*   **Key Operations:**
    *   **CONNECT:** Establishes a connection between the client and the broker.
    *   **PUBLISH:** Sends a message to the broker on a specific topic.
    *   **SUBSCRIBE:** Registers the client's interest in one or more topics.
    *   **UNSUBSCRIBE:** Removes the client's subscription to one or more topics.
    *   **PINGREQ/PINGRESP:** Used to keep the connection alive and detect disconnections.
    *   **DISCONNECT:** Closes the connection between the client and the broker.

*   **Advantages:**
    *   Lightweight and efficient for low-bandwidth environments.
    *   Suitable for constrained devices.
    *   Scalable for large-scale IoT deployments.
    *   Easy to implement with readily available libraries.
    *   Supports different QoS levels for varying reliability requirements.

*   **Disadvantages:**
    *   Requires a central broker, which can be a single point of failure.
    *   Less suitable for peer-to-peer communication.
    *   Reliance on TCP which is not suitable for highly lossy environments.

*   **Example:** A temperature sensor publishes temperature readings to the "sensor/temperature" topic. A display panel subscribes to the same topic and displays the received temperature values.

### 2.3 CoAP (Constrained Application Protocol)

*   **Definition:** A specialized web transfer protocol for use with constrained nodes and constrained networks in the IoT. It is designed to be similar to HTTP but is more lightweight and efficient.

*   **Client-Server Model:** CoAP uses a request-response model similar to HTTP.  A client sends a request to a server, and the server responds to the request.

*   **Key Components:**
    *   **CoAP Client:** The device sending requests (e.g., a microcontroller controlling a light).
    *   **CoAP Server:** The device receiving requests and sending responses (e.g., a smart light bulb).
    *   **URI (Uniform Resource Identifier):**  Identifies a resource on the server (similar to HTTP URLs). Example: "coap://example.com/sensors/temperature".

*   **Message Format:** CoAP messages are binary and compact.  They consist of:
    *   **Header:** Contains version, message type (CON, NON, ACK, RST), message ID, and token.
    *   **Options:** Provide additional information about the message (e.g., content format, URI path).
    *   **Payload:** The actual data being exchanged.

*   **Message Types:**
    *   **Confirmable (CON):** Requires an acknowledgement (ACK) from the recipient.
    *   **Non-Confirmable (NON):** Does not require an acknowledgement.  Similar to UDP best-effort delivery.
    *   **Acknowledgement (ACK):** Acknowledges the receipt of a CON message.
    *   **Reset (RST):** Indicates that a message could not be processed.

*   **Methods (Similar to HTTP):**
    *   **GET:** Retrieves a representation of a resource.
    *   **POST:** Creates a new resource.
    *   **PUT:** Updates an existing resource.
    *   **DELETE:** Deletes a resource.

*   **Advantages:**
    *   Lightweight and efficient for constrained devices.
    *   Utilizes UDP for low overhead (optionally TCP for more reliability).
    *   Supports resource discovery (multicast).
    *   Integrates well with the web (HTTP proxying).
    *   Supports DTLS for secure communication.

*   **Disadvantages:**
    *   Less mature ecosystem compared to MQTT.
    *   UDP-based, so requires careful handling of packet loss and retransmissions when using NON messages.
    *   Can be more complex to implement than MQTT for very simple scenarios.

*   **Example:** A smart thermostat (CoAP client) sends a GET request to a smart air conditioner (CoAP server) to read the current temperature. The air conditioner responds with the temperature value.

## 3. Comparison of MQTT and CoAP

| Feature          | MQTT                               | CoAP                                 |
|-------------------|------------------------------------|--------------------------------------|
| **Model**        | Publish-Subscribe                  | Client-Server                        |
| **Transport**      | TCP (typically)                    | UDP (typically), but can use TCP    |
| **Message Size** | Variable, generally larger        | Smaller                              |
| **Complexity**   | Simpler to implement for basic use | More complex for full feature set |
| **Resource Discovery** | Not built-in                       | Built-in (multicast)                |
| **Security**     | TLS/SSL                            | DTLS                                 |
| **QoS**          | Yes (0, 1, 2)                      | Reliability managed through CON/NON |
| **Typical Use Cases** | Telemetry, messaging, large scale IoT | Sensor networks, device management |

## 4. Use Case Scenarios

*   **MQTT:**
    *   **Telemetry data collection:** Collecting sensor data from numerous devices (e.g., environmental monitoring).
    *   **Smart home automation:** Controlling lights, thermostats, and appliances.
    *   **Industrial IoT (IIoT):** Monitoring and controlling industrial equipment.
    *   **Messaging applications:**  Sending and receiving messages between devices.

*   **CoAP:**
    *   **Smart lighting:** Controlling light bulbs and managing their settings.
    *   **Building automation:** Monitoring and controlling building systems (e.g., HVAC, access control).
    *   **Wireless sensor networks (WSNs):** Collecting data from sensor nodes in a resource-constrained environment.
    *   **Device management:** Remotely configuring and managing IoT devices.

## 5. Implementing Basic Communication (Examples)

**Note:**  These are simplified examples and would require external libraries for actual implementation on a microcontroller.

### 5.1 MQTT Example (Pseudocode)

```c
// Initialize MQTT client
MQTTClient client;
client.brokerAddress = "your_broker_address";
client.clientId = "your_client_id";

// Connect to broker
client.connect();

// Subscribe to a topic
client.subscribe("sensor/temperature");

// Publish a message
string temperatureValue = readTemperatureSensor();
client.publish("sensor/temperature", temperatureValue, QoS1);

// Handle incoming messages
while (true) {
  MQTTMessage message = client.receiveMessage();
  if (message.topic == "command/led") {
    if (message.payload == "on") {
      turnOnLED();
    } else {
      turnOffLED();
    }
  }
}

// Disconnect from broker
client.disconnect();
```

### 5.2 CoAP Example (Pseudocode)

```c
// Initialize CoAP client
CoAPClient client;
client.serverAddress = "your_server_address";

// Send a GET request
CoAPResponse response = client.get("sensors/temperature");

// Process the response
if (response.code == 205) { // 2.05 Content (success)
  string temperatureValue = response.payload;
  displayTemperature(temperatureValue);
} else {
  print("Error retrieving temperature");
}

// Send a PUT request
CoAPRequest request;
request.method = PUT;
request.uri = "actuators/led";
request.payload = "on";
client.send(request);
```

## 6. Practice Questions and Exercises

1.  **Question:** What are the three QoS levels in MQTT, and what do they guarantee?
    **Answer:** QoS 0 (At Most Once - no guarantee), QoS 1 (At Least Once - message delivered at least once, potentially multiple times), QoS 2 (Exactly Once - message delivered exactly once).

2.  **Question:** What is the primary transport protocol used by CoAP? Why is it chosen?
    **Answer:** UDP (User Datagram Protocol).  It's chosen for its low overhead, making it suitable for constrained devices and networks. However, TCP can also be used.

3.  **Question:** Explain the publish-subscribe model used by MQTT.
    **Answer:** Devices (clients) publish messages to a central broker on specific topics. Other devices (clients) subscribe to those topics to receive messages published to them. There is no direct communication between devices; all communication goes through the broker.

4.  **Exercise:** Imagine you are building a smart agriculture system using microcontrollers with limited battery life. Would you prefer MQTT or CoAP for transmitting sensor data (temperature, humidity) and controlling actuators (watering system)? Explain your choice.
    **Answer:** CoAP might be a better choice. CoAP can utilize UDP, which is generally lower overhead than TCP (MQTT's common transport), leading to potentially less battery consumption, especially if the loss of some infrequent data points is acceptable. CoAP's built-in resource discovery might also be useful in a dynamic sensor network. However, MQTT's established ecosystem and QoS levels may be preferred if data reliability is paramount, even at the cost of potentially higher power consumption. The specific choice depends on the exact requirements and constraints of the system.

5. **Question:** Differentiate between CONNECT and PUBLISH operations in MQTT
    **Answer:** CONNECT establishes a connection between the client and broker. PUBLISH sends a message from the client to the broker, which then distributes it to subscribers.

6. **Exercise:** Write a sequence of CoAP operations to read the status of a light (on/off) and then turn it off. Assume the light's URI is "lights/1".
    **Answer:**
    1.  **GET Request:** `GET coap://your_server_address/lights/1` (to read the current status)
    2.  **Process Response:**  Analyze the payload of the response.  If the payload indicates the light is "on," proceed.
    3.  **PUT Request:**  `PUT coap://your_server_address/lights/1` with payload "off" (to turn the light off).

## 7. Important Points to Remember

*   MQTT is a lightweight publish-subscribe protocol ideal for large-scale IoT deployments and constrained devices.
*   CoAP is a RESTful protocol designed for constrained environments, utilizing UDP for low overhead.
*   Choose MQTT when reliability and scalability are key, and CoAP when resource constraints are severe and HTTP integration is desired.
*   Understand the trade-offs between different QoS levels (MQTT) and message types (CoAP) in terms of reliability and performance.
*   Security is crucial in IoT applications. Use TLS/SSL with MQTT and DTLS with CoAP.
*   Consider the maturity and available libraries for each protocol when choosing for a project.
