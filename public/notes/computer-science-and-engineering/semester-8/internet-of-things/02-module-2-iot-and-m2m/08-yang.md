---
title: "YANG"
subject: "INTERNET OF THINGS"
module: "Module 2: IoT and M2M"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd07"
status: "completed"
scrapedAt: "2026-05-20T17:24:47.190Z"
---
# INTERNET OF THINGS - Module 2: IoT and M2M - YANG

---

## Introduction to YANG

The **YANG (Yet Another Next Generation)** data modeling language is a crucial component in modern network management and the Internet of Things (IoT). It provides a standardized and structured way to define the configuration, state data, RPCs (Remote Procedure Calls), and notifications of network devices and software components.

### Key Concepts and Definitions

*   **Data Modeling Language:** A language used to describe the structure and organization of data. In networking, it defines how configuration parameters, operational state, and event notifications are represented.
*   **Network Management:** The process of controlling, monitoring, and maintaining network infrastructure and services.
*   **RPC (Remote Procedure Call):** A protocol that allows a program on one computer to execute a procedure (subroutine) on another computer without the programmer explicitly coding the details for this remote interaction.
*   **Notifications:** Event-driven messages sent by a device to indicate a change in its state or a significant event.
*   **Schema:** A formal description of the structure and organization of data. YANG models define the schema for network data.
*   **Vendor Neutrality:** YANG aims to be vendor-neutral, allowing different network devices and software to be managed using a common language and framework.

### Importance of YANG in IoT and M2M

In the context of IoT and Machine-to-Machine (M2M) communication, YANG plays a vital role in enabling interoperability and efficient management:

*   **Standardization:** It provides a common language for describing the data and capabilities of IoT devices, regardless of their manufacturer. This avoids proprietary data formats and simplifies integration.
*   **Interoperability:** Devices modeled with YANG can be managed by various network management systems (NMS) that understand YANG, fostering interoperability between diverse IoT ecosystems.
*   **Automation:** YANG models facilitate network automation by providing a structured way for devices to expose their configurations and operational states, allowing NMS to programmatically manage them.
*   **Programmability:** It enables developers and network administrators to write applications that interact with IoT devices in a predictable and standardized manner.
*   **Lifecycle Management:** YANG models can describe the full lifecycle of an IoT device, from initial configuration and deployment to ongoing monitoring and updates.

---

## YANG Data Modeling Concepts

YANG models are built using a hierarchical structure with defined data types and constraints.

### Core YANG Statements

YANG models are composed of various statements that define the data and its characteristics.

*   **`module`:** The top-level statement that encapsulates a collection of YANG definitions. It typically includes a name, organization, and revision history.
    *   **Example:**
        ```yang
        module example-sensor {
            yang-version 1.1;
            namespace "urn:example:sensor";
            prefix ex;
            organization "Example Corp";
            contact "support@example.com";
            description "A YANG module for a simple environmental sensor.";
            revision 2023-10-27 {
                description "Initial version.";
                reference "RFC 7950";
            }
        }
        ```

*   **`container`:** Represents a grouping of data, similar to a directory or a complex object. It can contain other data nodes like leaf, leaf-list, list, or other containers.
    *   **Example:**
        ```yang
        container sensor-data {
            description "Contains current sensor readings.";
        }
        ```

*   **`leaf`:** Represents a single piece of data with a specific data type. It cannot contain other data nodes.
    *   **Example:**
        ```yang
        leaf temperature {
            type decimal64 {
                fraction-digits 2;
            }
            units "Celsius";
            description "Current temperature reading.";
        }
        ```

*   **`leaf-list`:** Represents an ordered list of unique leaf values. Each element in the list has the same type as the leaf.
    *   **Example:**
        ```yang
        leaf-list mac-addresses {
            type mac-address;
            description "MAC addresses of connected devices.";
        }
        ```

*   **`list`:** Represents an unordered list of unique nodes, where each node is identified by one or more keys. Lists are often used to represent multiple instances of the same type of data (e.g., multiple network interfaces).
    *   **Example:**
        ```yang
        list interface {
            key "name"; // 'name' is the identifier for each interface
            leaf name {
                type string;
                description "The name of the interface.";
            }
            leaf state {
                type enumeration {
                    enum up;
                    enum down;
                }
                description "The current state of the interface.";
            }
        }
        ```

*   **`enumeration`:** Defines a set of predefined string values for a data node.
    *   **Example:** (As seen in the `state` leaf above)

*   **`typedef`:** Defines a reusable data type that can be used across different parts of the module.
    *   **Example:**
        ```yang
        typedef ipv4-address {
            type union {
                type string { // Placeholder for actual IPv4 format validation
                    pattern '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}';
                }
            }
            description "An IPv4 address.";
        }
        ```

*   **`rpc`:** Defines a remote procedure call, specifying input and output parameters.
    *   **Example:**
        ```yang
        rpc reboot-device {
            input {
                leaf delay {
                    type uint32;
                    units "seconds";
                    default 0;
                    description "Delay before rebooting (in seconds).";
                }
            }
            output {
                leaf status {
                    type enumeration {
                        enum success;
                        enum failed;
                    }
                    description "Status of the reboot operation.";
                }
            }
            description "Initiates a device reboot.";
        }
        ```

*   **`notification`:** Defines event notifications that can be sent by a device.
    *   **Example:**
        ```yang
        notification device-restarted {
            description "Indicates that the device has been restarted.";
            leaf restart-time {
                type yang:date-and-time;
                description "The time when the device was restarted.";
            }
        }
        ```

### Data Types

YANG supports a rich set of built-in data types, including:

*   **Numeric:** `int8`, `uint8`, `int16`, `uint16`, `int32`, `uint32`, `int64`, `uint64`, `decimal64`, `float32`, `float64`.
*   **Boolean:** `boolean`.
*   **String:** `string`, `boolean`, `enumeration`, `bits`.
*   **Date and Time:** `date`, `time`, `date-and-time`.
*   **Binary:** `binary`.
*   **Instance Identifiers:** `instance-identifier`.
*   **Network Address Types:** `ipv4-address`, `ipv6-address`, `domain-name`, `host`.
*   **MAC Address:** `mac-address`.
*   **UUID:** `uuid`.

### Constraints and Augmentations

*   **Constraints:** YANG allows defining constraints on data values, such as:
    *   **`range`:** Specifies a valid range for numeric types.
    *   **`length`:** Specifies valid lengths for string types.
    *   **`pattern`:** Uses regular expressions to validate string formats.
    *   **`mandatory`:** Ensures a leaf or list entry is always present.
    *   **`default`:** Provides a default value for a leaf.
*   **`augment`:** Allows extending existing YANG modules with new data nodes. This is crucial for building modular and extensible YANG models.
    *   **Example:**
        ```yang
        augment "/example-sensor/sensor-data" {
            leaf humidity {
                type uint8;
                units "percent";
                description "Current humidity reading.";
            }
        }
        ```

---

## YANG and Network Management Protocols

YANG models are used in conjunction with various protocols to manage network devices.

### Key Protocols

*   **NETCONF (Network Configuration Protocol):** A protocol designed for installing, manipulating, and deleting the configuration of network devices. NETCONF servers expose YANG models to clients.
*   **RESTCONF:** A RESTful interface that uses HTTP as the transport protocol for accessing network configuration and operational data, also based on YANG models.
*   **gRPC (gRPC Remote Procedure Calls):** A high-performance, open-source universal RPC framework. YANG can be used to define the service interfaces for gRPC in network devices.
*   **SNMP (Simple Network Management Protocol):** While older, some devices may still expose YANG-modeled data through SNMP, often via YANG-to-MIB (Management Information Base) translations.

### How YANG is Used

1.  **Data Definition:** YANG models define the structure and semantics of the data that can be managed.
2.  **Protocol Interaction:** NETCONF, RESTCONF, and gRPC use these YANG models to understand the configuration parameters, operational state, RPCs, and notifications of a device.
3.  **Configuration Management:** A network management system can use a YANG model to understand how to configure a specific device parameter (e.g., setting an interface IP address) and then use NETCONF or RESTCONF to send the configuration to the device.
4.  **State Monitoring:** The NMS can query the operational state of a device (e.g., interface status, CPU usage) by referencing the state data defined in the YANG model and using NETCONF or RESTCONF.
5.  **Event Handling:** Notifications defined in YANG models allow devices to inform the NMS about significant events, such as a link going down or a hardware failure.

---

## Practical Applications in IoT and M2M

YANG's structured approach to data modeling makes it highly valuable in various IoT and M2M scenarios.

### Examples

*   **Smart Home Devices:**
    *   A YANG model can define the configuration and state of smart lights (e.g., on/off status, brightness, color), smart thermostats (e.g., target temperature, current temperature, mode), and smart locks (e.g., lock/unlock status, user access).
    *   NETCONF or RESTCONF clients (like a smartphone app or a central home automation hub) can use these models to control and monitor the devices.
*   **Industrial IoT (IIoT):**
    *   YANG models can describe the data from sensors in a factory, such as pressure, temperature, vibration, and motor speed.
    *   This data can be streamed via protocols like gRPC for real-time monitoring and analysis by an IIoT platform.
    *   RPCs defined in YANG can be used to trigger actions on industrial machinery, like starting or stopping a conveyor belt.
*   **Connected Vehicles:**
    *   YANG can model vehicle parameters like speed, fuel level, tire pressure, and engine diagnostic codes.
    *   These parameters can be accessed remotely for fleet management and predictive maintenance.
*   **Telecommunications IoT:**
    *   Network operators use YANG extensively to configure and manage cellular base stations and other network equipment, ensuring consistent management of IoT devices connected to their networks.

---

## Practice Questions and Exercises

**Question 1:**
What is the primary purpose of YANG in the context of IoT and M2M?
A. To provide a physical interface for devices.
B. To define the structure and semantics of data for management and control.
C. To encrypt data transmitted between devices.
D. To manage the power consumption of IoT devices.

**Question 2:**
Which YANG statement is used to group related data nodes?
A. `leaf`
B. `list`
C. `container`
D. `notification`

**Question 3:**
If a YANG model defines that a `temperature` leaf must always have a value between -50 and 150 degrees Celsius, which constraint statement is most likely used?
A. `length`
B. `pattern`
C. `range`
D. `mandatory`

**Question 4:**
Which protocol is commonly used to interact with network devices that expose YANG-modeled data and is designed for network configuration and management?
A. HTTP
B. FTP
C. SSH
D. NETCONF

**Question 5:**
Write a simple YANG snippet that defines a list of network interfaces. Each interface should have a `name` (string) and a `status` (enumeration with values "up" and "down").

---

## Answers to Practice Questions

**Answer 1:**
The primary purpose of YANG in the context of IoT and M2M is **B. To define the structure and semantics of data for management and control.** This standardization is key for interoperability and automation.

**Answer 2:**
The YANG statement used to group related data nodes is **C. `container`**.

**Answer 3:**
The constraint statement used to specify a valid range for numeric values is **C. `range`**.

**Answer 4:**
The protocol commonly used for network configuration and management that interacts with YANG models is **D. NETCONF**.

**Answer 5:**
```yang
list interface {
    key "name"; // 'name' serves as the unique identifier for each interface

    leaf name {
        type string;
        description "The name of the network interface (e.g., Ethernet0/0).";
    }

    leaf status {
        type enumeration {
            enum up {
                description "The interface is operational.";
            }
            enum down {
                description "The interface is not operational.";
            }
        }
        description "The current operational status of the interface.";
    }
}
```

---

## Important Points to Remember

*   **YANG is for Data Modeling:** Its primary role is to define *how* data is structured, not *how* data is transmitted or processed.
*   **Standardization is Key:** YANG's strength lies in its vendor-neutral and standardized approach, enabling interoperability.
*   **Hierarchical Structure:** YANG models are organized hierarchically, similar to file system directories.
*   **Data Types and Constraints:** YANG provides a rich set of data types and allows for defining constraints to ensure data integrity.
*   **Protocols are the Interface:** Protocols like NETCONF, RESTCONF, and gRPC are used to *interact* with devices based on YANG models.
*   **Extensibility:** The `augment` statement allows for extending existing YANG models, making them adaptable.
*   **Foundation for Automation:** YANG is a cornerstone for network automation by providing a predictable and machine-readable way to describe network behavior.
*   **RPCs and Notifications:** YANG can also define how devices can be commanded (RPCs) and how they can report events (notifications).

---
