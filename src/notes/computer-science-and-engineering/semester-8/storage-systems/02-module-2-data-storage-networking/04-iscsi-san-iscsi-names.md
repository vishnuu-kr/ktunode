---
title: "iSCSI SAN- iSCSI names"
subject: "STORAGE SYSTEMS"
module: "Module 2: Data Storage Networking:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8caad"
status: "completed"
scrapedAt: "2026-05-20T17:27:25.199Z"
---
# Storage Systems - Module 2: Data Storage Networking

## Topic: iSCSI SAN - iSCSI Names

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of iSCSI and its role in storage networking.
*   Identify and explain the purpose of iSCSI Names.
*   Describe the different types of iSCSI Names (iSCSI Qualified Name - IQN, Extended Unique Identifier - EUI).
*   Explain the structure and format of iSCSI Names.
*   Understand how iSCSI Names are used for identification and authentication in an iSCSI SAN.
*   Discuss the importance of unique and well-formed iSCSI Names.

---

### 1. Introduction to iSCSI SAN

#### Key Concepts:

*   **iSCSI (Internet Small Computer System Interface):** A storage networking protocol that allows SCSI commands to be sent over IP networks. It enables block-level storage access across standard Ethernet networks.
*   **SAN (Storage Area Network):** A dedicated network that provides access to consolidated, block-level data storage.
*   **iSCSI SAN:** A SAN that utilizes the iSCSI protocol to connect servers (initiators) to storage devices (targets). This allows servers to access storage as if it were locally attached, leveraging existing IP infrastructure.

#### How iSCSI Works:

1.  **Encapsulation:** SCSI commands are encapsulated within TCP/IP packets.
2.  **Transport:** These packets are transmitted over standard Ethernet networks.
3.  **Decapsulation:** The iSCSI target receives the IP packets, decapsulates them, and processes the SCSI commands.
4.  **Data Transfer:** Data is transferred between the initiator and target using SCSI protocols over TCP/IP.

#### Benefits of iSCSI SAN:

*   **Cost-effectiveness:** Leverages existing Ethernet infrastructure, reducing the need for dedicated Fibre Channel hardware.
*   **Scalability:** Easily scales by adding more Ethernet switches and network ports.
*   **Flexibility:** Can be implemented over a wide range of network distances.
*   **Simplicity:** Easier to manage and deploy compared to Fibre Channel for many organizations.

---

### 2. The Purpose of iSCSI Names

#### Key Concepts:

*   **Identification:** iSCSI Names serve as unique identifiers for iSCSI initiators and targets on the network. They are crucial for distinguishing between different devices and components.
*   **Authentication:** In conjunction with other security mechanisms, iSCSI Names can be used to authenticate devices trying to access storage. This ensures that only authorized initiators can connect to specific targets.
*   **Addressability:** While not IP addresses themselves, iSCSI Names provide a logical address that the iSCSI protocol uses to establish connections.

#### Analogy:

Think of iSCSI Names like the **MAC address** of a network interface card (NIC) or a **unique serial number** for a piece of hardware. They are a way to definitively identify and refer to a specific iSCSI device.

---

### 3. Types of iSCSI Names

There are two primary types of iSCSI Names used for identification:

#### 3.1. iSCSI Qualified Name (IQN)

*   **Definition:** The most common and standardized form of an iSCSI Name. It provides a globally unique and hierarchically structured identifier.
*   **Format:**
    ```
    iqn.YYYY-MM.reversed.domain.name:identifier
    ```
    *   **`iqn`:** A fixed prefix indicating an iSCSI Qualified Name.
    *   **`YYYY-MM`:** The year and month when the name was registered or created. This helps in uniqueness and versioning.
    *   **`reversed.domain.name`:** The reversed domain name of the organization that owns the iSCSI name. For example, if the domain is `example.com`, the reversed name would be `com.example`. This ensures global uniqueness.
    *   **`identifier`:** A unique string assigned by the organization to further identify the specific initiator or target. This can be anything from a serial number, model name, or a custom string.

*   **Examples:**
    *   Initiator Name: `iqn.2001-04.com.example:storage.initiator.01`
    *   Target Name: `iqn.1998-01.com.hp.servers:storage.target.disks`

#### 3.2. Extended Unique Identifier (EUI)

*   **Definition:** An iSCSI Name based on the IEEE's Extended Unique Identifier (EUI-64) standard. It's typically derived from the MAC address of the network interface.
*   **Format:**
    ```
    eui.64-bit-mac-address
    ```
    *   **`eui`:** A fixed prefix indicating an Extended Unique Identifier.
    *   **`64-bit-mac-address`:** A 64-bit MAC address, often represented as 16 hexadecimal characters. The EUI-64 format typically involves inserting `FFFE` in the middle of a 48-bit MAC address.

*   **Examples:**
    *   If a MAC address is `00:1A:2B:3C:4D:5E`, the EUI-64 name might be `eui.021a2bfffe3c4d5e`. (The `02` is derived from the original MAC's first byte, indicating a locally administered address. `FFFE` is inserted).

*   **When Used:** EUI names are less common than IQNs for enterprise-level iSCSI deployments but can be found in some implementations, especially in scenarios where MAC address-based identification is preferred.

#### **Important Note:**

*   **Uniqueness is paramount:** Both IQNs and EUI names must be unique within the iSCSI SAN environment. Duplicate names will lead to connection failures and identification issues.
*   **Consistency:** It's important to maintain consistent naming conventions across your iSCSI environment.

---

### 4. Structure and Format of iSCSI Names

Let's break down the structure of the IQN, as it's the most prevalent.

#### 4.1. IQN Structure Breakdown

*   **`iqn`:**
    *   **Purpose:** Clearly identifies the name as an iSCSI Qualified Name.
    *   **Standard:** Defined by the iSCSI standard.

*   **`YYYY-MM` (Date Stamp):**
    *   **Purpose:** Provides a chronological element for uniqueness and management. It indicates the date the name was registered or allocated.
    *   **Format:** Four-digit year followed by a hyphen and two-digit month (e.g., `2023-10`).
    *   **Importance:** This element, combined with the reversed domain name, helps prevent name collisions if multiple organizations use the same identifier part.

*   **`reversed.domain.name`:**
    *   **Purpose:** Ensures global uniqueness by leveraging domain name ownership. Organizations register their domains and then reverse them for iSCSI naming.
    *   **Format:** The fully qualified domain name (FQDN) of the vendor or organization, reversed, with dots separating the components.
        *   Example: `example.com` becomes `com.example`.
        *   Example: `mycompany.storage.net` becomes `net.storage.mycompany`.
    *   **Best Practice:** Organizations often register a specific domain for their storage devices (e.g., `storage.mycompany.com`) and reverse that to ensure distinctness from their general corporate domain.

*   **`identifier`:**
    *   **Purpose:** A vendor-defined or user-defined string that uniquely identifies a specific iSCSI target or initiator within the scope of the reversed domain name and date stamp.
    *   **Flexibility:** Can include information like:
        *   Product name (`storage-array-model-xyz`)
        *   Serial number (`SN-ABC12345`)
        *   Specific device instance (`port-a.lun-0`)
        *   Custom logical grouping (`production-data-volume`)
    *   **Rules:** Typically alphanumeric characters, hyphens (`-`), and dots (`.`) are allowed. Spaces are generally not permitted.

#### 4.2. EUI Structure Breakdown

*   **`eui`:**
    *   **Purpose:** Clearly identifies the name as an Extended Unique Identifier.
    *   **Standard:** Based on IEEE EUI-64.

*   **`64-bit-mac-address`:**
    *   **Purpose:** A globally unique identifier derived from hardware addressing.
    *   **Derivation:**
        1.  Start with a 48-bit MAC address (e.g., `00:1A:2B:3C:4D:5E`).
        2.  Insert `FFFE` in the middle of the 48-bit MAC address.
        3.  The first octet of the MAC address is modified. If the least significant bit of the first octet is 0, it's changed to 1 to indicate a locally administered address.
            *   MAC: `00:1A:2B:3C:4D:5E`
            *   First octet: `00`. Least significant bit is 0. Change to 1. Result: `02`.
            *   Resulting EUI-64: `021A2BFFFE3C4D5E`.
    *   **Format:** 16 hexadecimal characters.

#### **Important Point to Remember:**

*   **Case Sensitivity:** While not always enforced by every iSCSI implementation, it's best practice to treat iSCSI Names as case-sensitive to avoid potential issues. The standard generally implies case insensitivity for domain parts but recommends case sensitivity for the identifier.

---

### 5. Usage of iSCSI Names in iSCSI SAN

#### 5.1. Initiator Identification

*   **Role:** The iSCSI Initiator (server) presents its iSCSI Name to the iSCSI Target (storage device) during the login process.
*   **Purpose:** The target uses the initiator's iSCSI Name to:
    *   **Identify the initiator:** Recognize which server is attempting to connect.
    *   **Apply Access Control Lists (ACLs):** Check if the initiator is authorized to access specific storage LUNs (Logical Unit Numbers).
    *   **Configure session parameters:** Set up the connection parameters specific to that initiator.

#### 5.2. Target Identification

*   **Role:** The iSCSI Target (storage device) advertises its iSCSI Name(s) to the network, making it discoverable by initiators.
*   **Purpose:** The initiator uses the target's iSCSI Name to:
    *   **Discover targets:** Locate available storage resources on the network.
    *   **Establish connections:** Initiate a session with a specific target.
    *   **Authenticate:** The target may use the initiator's name for authentication.

#### 5.3. Authentication and Access Control

*   **CHAP (Challenge-Handshake Authentication Protocol):** A common authentication mechanism used in iSCSI. During CHAP authentication, both the initiator and target exchange credentials. The iSCSI Names are used as part of the authentication process. The target typically stores a secret associated with the initiator's iSCSI Name.
*   **ACLs on Targets:** Storage targets can be configured with Access Control Lists that specify which iSCSI Names (initiators) are allowed to connect to which LUNs or targets. This is a critical security measure.

#### **Example Scenario:**

1.  A server (Initiator) has the iSCSI Name: `iqn.2003-01.com.mycorp.servers:webserver-01`
2.  A storage array (Target) has a target with the iSCSI Name: `iqn.2000-10.com.storagevendor.array:target0` and hosts LUNs (e.g., LUN 0, LUN 1).
3.  The storage array's ACL is configured to allow `iqn.2003-01.com.mycorp.servers:webserver-01` to access LUN 0 and LUN 1.
4.  The webserver initiator attempts to log in to the target.
5.  During login, the initiator presents its iSCSI Name.
6.  The target verifies if the presented iSCSI Name is present in its ACLs and authorized for the requested LUNs.
7.  If authorized, the connection is established. If not, the login is rejected.

---

### 6. Importance of Unique and Well-Formed iSCSI Names

#### 6.1. Uniqueness

*   **Prevents Collisions:** Duplicate iSCSI Names will cause confusion and prevent proper communication. The iSCSI protocol relies on these names for unambiguous identification.
*   **Target Discovery:** If multiple devices have the same iSCSI Name, an initiator might discover and attempt to connect to the wrong device.
*   **ACL Management:** Incorrectly managed names or duplicates can lead to security vulnerabilities where unauthorized initiators might gain access.

#### 6.2. Well-Formed Names

*   **Standard Compliance:** Using the correct format (IQN or EUI) ensures compatibility with iSCSI initiators and targets. Non-compliant names may not be recognized.
*   **Manageability:** A consistent and logical naming convention makes it easier to manage storage resources, track devices, and troubleshoot issues.
*   **Scalability:** As your iSCSI SAN grows, well-structured names become essential for maintaining order and control.

#### **Best Practices for iSCSI Naming:**

*   **Use IQNs:** Prefer IQNs for their standardization and built-in uniqueness mechanisms.
*   **Reverse Your Domain:** Use your organization's reversed domain name as the foundation for uniqueness. Consider a dedicated subdomain for storage.
*   **Consistent Identifiers:** Develop a clear and consistent naming convention for the `identifier` part of the IQN. This could include the server role, serial number, or unique ID.
*   **Document:** Maintain thorough documentation of all iSCSI Names assigned to initiators and targets.
*   **Regular Audits:** Periodically audit your iSCSI Name assignments to ensure uniqueness and compliance.
*   **Case Sensitivity:** Be mindful of case sensitivity when configuring and verifying iSCSI Names.

---

### Practice Questions

**Question 1:**
What is the primary purpose of an iSCSI Name in an iSCSI SAN?
a) To assign an IP address to an iSCSI device.
b) To uniquely identify and authenticate iSCSI initiators and targets.
c) To define the network subnet for iSCSI traffic.
d) To encrypt data transferred over the iSCSI connection.

**Question 2:**
Which of the following is the most common format for an iSCSI Name?
a) MAC Address
b) IP Address
c) IQN (iSCSI Qualified Name)
d) Hostname

**Question 3:**
Explain the components of an IQN and their purpose. Provide an example of a valid IQN.

**Question 4:**
If an organization has the domain `storage.example.com`, what would be the `reversed.domain.name` part of their iSCSI IQN?

**Question 5:**
Why is it crucial for iSCSI Names to be unique within an iSCSI SAN?

---

### Answers to Practice Questions

**Answer 1:**
The primary purpose of an iSCSI Name in an iSCSI SAN is to **uniquely identify and authenticate iSCSI initiators and targets**.

**Answer 2:**
The most common format for an iSCSI Name is **c) IQN (iSCSI Qualified Name)**.

**Answer 3:**
The components of an IQN are:
*   **`iqn`:** A fixed prefix indicating an iSCSI Qualified Name.
*   **`YYYY-MM`:** A date stamp (year-month) for uniqueness and versioning.
*   **`reversed.domain.name`:** The reversed domain name of the organization, ensuring global uniqueness.
*   **`identifier`:** A vendor or user-defined string that uniquely identifies a specific device or resource.

*Example of a valid IQN:* `iqn.2023-11.com.mycompany.storage:array1.target0`

**Answer 4:**
If an organization has the domain `storage.example.com`, the `reversed.domain.name` part of their iSCSI IQN would be **`com.storage.example`**.

**Answer 5:**
It is crucial for iSCSI Names to be unique within an iSCSI SAN to:
*   **Prevent Name Collisions:** Ensure that each iSCSI device can be unambiguously identified.
*   **Enable Proper Discovery:** Allow initiators to find and connect to the correct targets.
*   **Facilitate Accurate Access Control:** Ensure that ACLs on targets correctly map to the intended initiators.
*   **Avoid Communication Errors:** Prevent confusion and connection failures that arise from duplicate identifiers.

---

### Important Points to Remember:

*   **iSCSI** allows SCSI commands over IP networks.
*   **iSCSI Names** (IQN and EUI) are essential for **unique identification** and **authentication** in an iSCSI SAN.
*   **IQNs** are the preferred and most common format, structured as `iqn.YYYY-MM.reversed.domain.name:identifier`.
*   The **reversed domain name** in an IQN is key to ensuring **global uniqueness**.
*   **EUI names** are based on MAC addresses and are less common.
*   **Uniqueness** of iSCSI Names is paramount to avoid configuration errors and communication failures.
*   **Well-formed names** ensure compliance and ease of management.
*   iSCSI Names are used by **initiators** to identify themselves and by **targets** to control access (via ACLs).
*   **CHAP authentication** often uses iSCSI Names as part of the credential exchange.
