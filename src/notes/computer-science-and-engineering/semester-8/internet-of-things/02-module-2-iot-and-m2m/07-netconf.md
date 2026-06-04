---
title: "NETCONF"
subject: "INTERNET OF THINGS"
module: "Module 2: IoT and M2M"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd06"
status: "completed"
scrapedAt: "2026-05-20T17:24:46.500Z"
---
# Internet of Things (IoT)

## Module 2: IoT and M2M

### Topic: NETCONF (Network Configuration Protocol)

---

### 1. Introduction to NETCONF

*   **What is NETCONF?**
    *   NETCONF is a network management protocol designed by the IETF (Internet Engineering Task Force).
    *   It's used for installing, manipulating, and deleting the configuration of network devices.
    *   It also allows for retrieving operational data from network devices.
    *   NETCONF is designed to be a successor to SNMP (Simple Network Management Protocol) for configuration management, offering more robust capabilities.

*   **Purpose of NETCONF:**
    *   **Automated Network Management:** Facilitates programmatic configuration and management of network devices, enabling automation of complex tasks.
    *   **Standardized Configuration:** Provides a standardized way to interact with different network devices, regardless of vendor.
    *   **Data-Driven Configuration:** Operates on data models, making configuration more structured and less prone to errors.
    *   **State Management:** Allows retrieval of operational state and configuration data.

*   **Relation to M2M and IoT:**
    *   In IoT and M2M environments, devices often need to be remotely configured, updated, and monitored.
    *   NETCONF provides a secure and standardized mechanism for managing large fleets of IoT devices, especially in industrial settings or critical infrastructure where reliable configuration is paramount.
    *   It can be used to configure sensors, actuators, gateways, and other network-connected devices.

---

### 2. Key Concepts and Definitions

*   **NETCONF Sessions:**
    *   NETCONF operates over a secure, connection-oriented transport layer, typically SSH (Secure Shell).
    *   A NETCONF session is established between a NETCONF client (manager) and a NETCONF server (device).
    *   **Client:** Initiates requests to the server.
    *   **Server:** Responds to requests from the client and performs the requested operations.

*   **Transport Layer:**
    *   **SSH (RFC 4251, 4252, 4253, 4254):** The primary and most common transport protocol for NETCONF. It provides security (encryption, authentication, integrity) and a reliable channel.
    *   **TLS (Transport Layer Security):** Can also be used as a transport layer for NETCONF.

*   **Data Encoding:**
    *   **XML (Extensible Markup Language):** The default and primary data encoding format used by NETCONF for all messages, including configuration data, operational data, and RPC (Remote Procedure Call) payloads.
    *   **JSON (JavaScript Object Notation):** While XML is the standard, JSON can also be used as an encoding format for NETCONF, often referred to as "NETCONF over JSON" or "RESTCONF" which is closely related.

*   **NETCONF Operations:**
    *   NETCONF defines a set of standard operations that a client can perform on a server. These are typically represented as RPC calls.
    *   **`<get-config>`:** Retrieves configuration data from the server.
    *   **`<get>`:** Retrieves operational data (state information) from the server.
    *   **`<edit-config>`:** Modifies the configuration on the server.
    *   **`<copy-config>`:** Copies an existing configuration datastore to another.
    *   **`<delete-config>`:** Deletes a configuration datastore.
    *   **`<lock>` / `<unlock>`:** Locks a configuration datastore to prevent concurrent modifications.
    *   **`<close-session>`:** Closes the NETCONF session.
    *   **`<kill-session>`:** Aborts a NETCONF session.

*   **NETCONF Capabilities:**
    *   NETCONF servers advertise the capabilities they support to the client at the start of a session.
    *   Capabilities are defined by URIs (Uniform Resource Identifiers) and describe the features and YANG models supported by the device.
    *   Examples:
        *   `urn:ietf:params:netconf:base:1.0` (NETCONF base protocol version 1.0)
        *   `urn:ietf:params:netconf:capability:candidate:1.0` (Supports candidate configuration datastore)
        *   `urn:ietf:params:netconf:capability:writable-running:1.0` (Allows direct modification of the running configuration)

*   **Configuration Datastores:**
    *   NETCONF defines conceptual storage areas for configuration data.
    *   **`<running/>`:** The currently active configuration of the device.
    *   **`<startup/>`:** The configuration that will be loaded when the device boots up.
    *   **`<candidate/>`:** An optional datastore that can be used to stage and validate configuration changes before committing them to the running configuration.
    *   **`<candidate/>`** is supported if the `candidate` capability is advertised.

*   **YANG (Yet Another Next Generation) Data Modeling Language (RFC 7950):**
    *   YANG is a language used to model data configuration and state for network devices.
    *   NETCONF uses YANG models to define the structure and semantics of configuration data and operational data.
    *   This ensures that configuration is standardized and machine-readable.
    *   **Example YANG snippet (simplified):**
        ```yang
        module interface-config {
          namespace "http://example.com/interfaces";
          prefix "if";

          container interfaces {
            list interface {
              key "name";
              leaf name { type string; }
              leaf description { type string; }
              leaf enabled { type boolean; default true; }
            }
          }
        }
        ```

*   **NETCONF Message Flow:**
    *   **Open Session:** Client establishes a secure connection (e.g., SSH) and sends an `<hello>` message to the server, advertising its capabilities. The server responds with its capabilities.
    *   **Request/Reply:** Client sends an RPC request (e.g., `<get-config>`). Server processes the request and sends back an RPC reply containing the requested data or a success/error message.
    *   **Notifications (Optional):** Server can send asynchronous notifications to the client about events.
    *   **Close Session:** Client or server can initiate session closure.

---

### 3. NETCONF Protocol Operations and Messages

NETCONF messages are encapsulated within an RPC layer.

*   **`<hello>`:**
    *   Sent by both client and server upon session establishment.
    *   Contains a list of supported NETCONF capabilities.
    *   Establishes the NETCONF protocol version to be used.

    ```xml
    <hello xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
      <capabilities>
        <capability>urn:ietf:params:netconf:base:1.0</capability>
        <capability>urn:ietf:params:netconf:capability:candidate:1.0</capability>
        </capabilities>
      <session-id>42</session-id>
    </hello>
    ```

*   **`<rpc>`:**
    *   The main wrapper for NETCONF operations.
    *   Can carry various operations like `<get-config>`, `<edit-config>`, etc.
    *   Includes a unique message ID for tracking requests and replies.

    ```xml
    <rpc message-id="101" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
      <get-config>
        <source>
          <running/>
        </source>
      </get-config>
    </rpc>
    ```

*   **`<rpc-reply>`:**
    *   Contains the response to an RPC request.
    *   The `message-id` attribute matches the corresponding `<rpc>` message.
    *   Can contain the requested data or an error indication.

    ```xml
    <rpc-reply message-id="101" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
      <data>
        <!-- Configuration data goes here -->
        <interfaces xmlns="http://example.com/interfaces">
          <interface>
            <name>GigabitEthernet0/0</name>
            <description>Uplink</description>
            <enabled>true</enabled>
          </interface>
        </interfaces>
      </data>
    </rpc-reply>
    ```

*   **`<rpc-error>`:**
    *   Sent when an operation fails.
    *   Provides details about the error.

    ```xml
    <rpc-reply message-id="102" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
      <rpc-error>
        <error-type>application</error-type>
        <error-tag>invalid-value</error-tag>
        <error-severity>error</error-severity>
        <error-message>Invalid value for 'mtu' leaf</error-message>
      </rpc-error>
    </rpc-reply>
    ```

*   **Specific Operations:**

    *   **`<get-config>`:**
        *   Used to retrieve configuration data.
        *   Can specify a `<source>` (e.g., `<running/>`, `<startup/>`, `<candidate/>`).
        *   Can filter the data to be retrieved using XPath expressions.

        ```xml
        <rpc message-id="103" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
          <get-config>
            <source>
              <running/>
            </source>
            <filter type="xpath" select="/interfaces/interface[name='GigabitEthernet0/1']"/>
          </get-config>
        </rpc>
        ```

    *   **`<get>`:**
        *   Used to retrieve operational data (state).
        *   Can also filter the data.

        ```xml
        <rpc message-id="104" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
          <get>
            <filter type="xpath" select="/system-uptime"/>
          </get>
        </rpc>
        ```

    *   **`<edit-config>`:**
        *   Used to modify the configuration.
        *   Requires specifying a `<target>` datastore (e.g., `<running/>`, `<startup/>`, `<candidate/>`).
        *   The `<config>` element contains the XML data to be applied.
        *   **`operation` attribute:** Can be `create`, `replace`, `merge`, `delete`. Default is `merge`.
        *   **`error-option` attribute:** Can be `stop-on-error` (default), `continue-on-error`, `rollback-on-error`.

        ```xml
        <rpc message-id="105" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
          <edit-config>
            <target>
              <running/>
            </target>
            <config>
              <interfaces xmlns="http://example.com/interfaces">
                <interface>
                  <name>GigabitEthernet0/2</name>
                  <description>New Interface</description>
                  <enabled>false</enabled>
                </interface>
              </interfaces>
            </config>
            <error-option>continue-on-error</error-option>
          </edit-config>
        </rpc>
        ```

    *   **`<commit>` (with candidate datastore):**
        *   If the `candidate` capability is supported, a commit operation is used to apply the staged configuration from the candidate datastore to the running datastore.

        ```xml
        <rpc message-id="106" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
          <commit/>
        </rpc>
        ```

---

### 4. NETCONF Security Considerations

*   **Transport Security:** The use of SSH (or TLS) is fundamental for securing NETCONF sessions, providing:
    *   **Authentication:** Verifying the identity of the client and server (e.g., using public-key cryptography, password-based authentication).
    *   **Confidentiality:** Encrypting data in transit to prevent eavesdropping.
    *   **Integrity:** Ensuring data has not been tampered with during transmission.

*   **Authorization:** Once authenticated, users (or clients) should be authorized to perform specific operations on specific configuration items. This is typically managed by the network device's access control lists (ACLs) or role-based access control (RBAC) mechanisms.

*   **Secure Yang Models:** While NETCONF itself is secure over SSH, the YANG models and the data they represent must be designed with security in mind, preventing the exposure of sensitive information or the enablement of malicious actions.

---

### 5. Benefits of NETCONF

*   **Standardization:** Interoperability between devices from different vendors.
*   **Automation:** Enables programmatic control and automation of network tasks.
*   **Data-Driven:** Uses YANG models for structured, machine-readable configuration.
*   **Robustness:** Supports transactions, locking, and error handling.
*   **Security:** Built-in transport security through SSH.
*   **Efficiency:** More efficient for configuration management than older protocols like SNMP.
*   **Transactional Capabilities:** Allows for committing or rolling back a set of changes.

---

### 6. Limitations of NETCONF

*   **Complexity:** Can be more complex to implement and understand than simpler protocols like SNMP.
*   **XML Verbosity:** XML encoding can be verbose, leading to larger message sizes.
*   **Learning Curve:** Requires understanding of YANG, XML, and RPC concepts.
*   **Server Support:** Not all network devices, especially older or embedded IoT devices, might support NETCONF.

---

### 7. NETCONF vs. SNMP

| Feature            | NETCONF                                    | SNMP                                       |
| :----------------- | :----------------------------------------- | :----------------------------------------- |
| **Primary Use**    | Configuration Management                   | Monitoring and Basic Control               |
| **Data Modeling**  | YANG                                       | MIBs (Management Information Bases)        |
| **Data Format**    | XML (primarily), JSON                      | ASN.1 (for MIBs), PDU structure            |
| **Transport**      | SSH, TLS (secure)                          | UDP (insecure by default)                  |
| **Operations**     | Rich set of RPC operations (get, edit, lock) | GET, GETNEXT, SET, TRAP                    |
| **Configuration**  | Transactional, structured, robust          | Often unstructured, error-prone            |
| **Security**       | Strong (SSH/TLS)                           | Weak by default (SNMPv1/v2c), improved in v3 |
| **Complexity**     | Higher                                     | Lower                                      |
| **Automation**     | Excellent                                  | Limited for complex config                 |
| **Target Devices** | Routers, Switches, Firewalls, modern IoT   | Network devices, printers, servers         |

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of the NETCONF protocol?
a) Network monitoring
b) Network configuration management
c) Network security scanning
d) Network file transfer

**Question 2:**
What is the default and most commonly used data encoding format for NETCONF messages?
a) JSON
b) Protocol Buffers
c) XML
d) YAML

**Question 3:**
Which transport protocol is typically used to secure NETCONF sessions?
a) HTTP
b) FTP
c) SSH
d) Telnet

**Question 4:**
Explain the difference between the `<get-config>` and `<get>` operations in NETCONF.

**Question 5:**
If a network device supports the `<candidate/>` datastore capability, what NETCONF operation would be used to apply staged configuration changes to the running configuration?

**Question 6:**
Describe two key benefits of using NETCONF over SNMP for network configuration management.

---

### 9. Answers to Practice Questions

**Answer 1:**
b) Network configuration management

**Answer 2:**
c) XML

**Answer 3:**
c) SSH

**Answer 4:**
*   **`<get-config>`:** This operation is used to retrieve configuration data from a specified configuration datastore (e.g., running, startup, candidate). It's focused on retrieving how the device is configured.
*   **`<get>`:** This operation is used to retrieve operational data, which includes the current state of the device, statistics, information about processes, etc. It's focused on retrieving the current status or state of the device.

**Answer 5:**
The `<commit/>` operation would be used to apply staged configuration changes from the candidate datastore to the running datastore.

**Answer 6:**
Two key benefits of using NETCONF over SNMP for network configuration management are:
1.  **Standardized and Structured Configuration:** NETCONF uses YANG models, which provide a structured, data-driven way to define and manage configurations. This reduces errors and improves interoperability compared to SNMP's MIB-based approach, which is less suited for complex configuration tasks.
2.  **Robustness and Transactionality:** NETCONF supports features like configuration locking and transactional operations (commit/rollback), allowing for safer and more reliable changes to network configurations, especially in automated scripts. SNMP's `SET` operation is less transactional and can be prone to partial failures.
3.  **Security:** NETCONF inherently runs over secure transport protocols like SSH, providing strong authentication, confidentiality, and integrity, which is a significant advantage over the default insecurity of SNMP v1/v2c.

---

### 10. Important Points to Remember

*   **NETCONF is for Configuration:** Its primary role is managing how devices are set up, not just monitoring their status.
*   **YANG is Key:** Configuration data is defined by YANG models. Understand YANG to understand NETCONF data.
*   **SSH is Security:** Always use SSH (or TLS) for NETCONF transport for security.
*   **RPC Framework:** NETCONF uses a Remote Procedure Call (RPC) mechanism to exchange messages.
*   **Datastores are Storage:** Understand `<running/>`, `<startup/>`, and `<candidate/>` datastores.
*   **Capabilities Define Features:** Devices advertise what NETCONF features they support.
*   **XML is the Language:** All NETCONF messages are encoded in XML (or sometimes JSON).
*   **Automation Enabler:** NETCONF is a cornerstone for network automation.

---
This concludes the study notes for NETCONF.
