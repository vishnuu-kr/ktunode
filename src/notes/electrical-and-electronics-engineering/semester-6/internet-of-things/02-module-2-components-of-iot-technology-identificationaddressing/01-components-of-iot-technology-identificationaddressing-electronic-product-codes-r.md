---
title: "Components of IoT technology: Identification/Addressing - Electronic Product Codes, RFID, ubiquitous code, IPv4, IPv6."
subject: "INTERNET OF THINGS"
module: "Module 2: Components of IoT technology: Identification/Addressing "
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3661d"
status: "completed"
scrapedAt: "2026-05-23T16:28:28.342Z"
---
# Internet of Things (IoT) - Module 2: Components of IoT technology: Identification/Addressing

## Introduction to Identification and Addressing in IoT

The Internet of Things (IoT) is characterized by the ability to connect a vast number of physical objects to the internet, enabling them to collect, exchange, and act upon data. For this interconnectedness to be effective, each "thing" needs a unique identity and a way to be addressed and located within the network. This module focuses on the fundamental components of IoT technology that facilitate this identification and addressing.

**Learning Outcome Covered:**
*   Understanding the need for unique identification and addressing for IoT devices.

**Key Concepts:**
*   **Identification:** Assigning a unique identifier to each physical object in an IoT system.
*   **Addressing:** Defining a mechanism to locate and communicate with these identified objects.

**Why is Identification and Addressing Crucial in IoT?**
*   **Uniqueness:** Prevents ambiguity when multiple devices might have similar functionalities.
*   **Locatability:** Enables the network to find and interact with specific devices.
*   **Data Association:** Links data collected from sensors to the correct physical object.
*   **Scalability:** Essential for managing billions or trillions of connected devices.
*   **Interoperability:** Allows devices from different manufacturers to communicate.

---

## 1. Electronic Product Codes (EPC)

Electronic Product Codes (EPC) are a universal system of product identification designed to provide a globally unique identifier for every physical object, from a single item to a shipping case or pallet. It is an open, global standard developed by the GS1 organization.

**Key Concepts:**
*   **GS1 Standards:** A non-profit organization that develops and maintains global standards for business communication, including product identification.
*   **EPC URI (Uniform Resource Identifier):** A structured string that uniquely identifies an item. It can encode various types of information, such as serial numbers, batch numbers, and location data.
*   **EPC Tag Data Standard (EPC TD):** Defines how data is encoded on RFID tags and other media.
*   **EPC Information Service (EPCIS):** A standard for sharing business-specific event data in a consistent way, enabling visibility of items as they move through supply chains.

**Structure of an EPC:**
An EPC typically has the following structure:
`urn:epc:id: {giai | gid | gtin | sgln | srin | sscc | ...}:{value}`

*   `urn:epc:id`: Prefix indicating an EPC identifier.
*   `{giai | gtin | ...}`: The EPC Scheme, specifying the type of identifier (e.g., GTIN for Global Trade Item Number).
*   `{value}`: The specific data that uniquely identifies the item.

**Examples:**
*   **GTIN (Global Trade Item Number):** Used for products sold in retail.
    *   `urn:epc:id:gtin:061414193001:01`
*   **SSCC (Serial Shipping Container Code):** Used for shipping containers.
    *   `urn:epc:id:sscc:40:061414112345678905`

**How EPC Works with RFID:**
EPCs are commonly encoded onto RFID tags. When an RFID reader encounters a tag, it reads the EPC and can then use EPCIS to retrieve more detailed information about the product or item.

**Reference:**
*   **Madisetti & Bahga (2015):** Discusses RFID as a key technology for item identification and tracking, often leveraging EPC standards for interoperability.
*   **Rajkamal (2022):** Likely covers EPC as a standard for supply chain management and product traceability in an IoT context.

**Important Points to Remember:**
*   EPC is a **standard**, not a technology itself. It defines *what* to identify.
*   It is closely linked with **RFID** and **GS1 standards**.
*   EPCIS provides the **context** and **sharing mechanism** for EPC data.

---

## 2. Radio-Frequency Identification (RFID)

Radio-Frequency Identification (RFID) is a wireless technology that uses radio waves to identify and track tags attached to objects. An RFID system consists of three main components: an RFID tag, an RFID reader (interrogator), and an antenna.

**Key Concepts:**
*   **RFID Tag:** Contains an integrated circuit (chip) and an antenna. It stores data and transmits it wirelessly when activated by an RFID reader.
    *   **Passive Tags:** No internal power source. Powered by the radio waves emitted by the reader. Shorter read range, lower cost.
    *   **Active Tags:** Have their own battery to power the integrated circuit and transmit signals. Longer read range, higher cost, can transmit periodically without a reader's query.
    *   **Semi-Passive Tags:** Have a battery to power the chip but rely on the reader's signal to transmit data.
*   **RFID Reader:** A device that emits radio waves to activate the RFID tag and receives the data from the tag.
*   **Antenna:** Transmits and receives radio waves.
*   **Backscatter Modulation:** The process by which passive RFID tags reflect the reader's radio waves back with their data encoded.

**How RFID Works:**
1.  The RFID reader emits radio waves from its antenna.
2.  When an RFID tag enters the reader's electromagnetic field, its chip is powered up (for passive tags) or activated (for active tags).
3.  The tag's antenna communicates with the reader's antenna.
4.  The tag transmits its stored data (often an EPC) back to the reader.
5.  The reader receives and decodes this data.

**Applications in IoT:**
*   **Asset Tracking:** Monitoring the location and status of valuable assets.
*   **Inventory Management:** Real-time tracking of goods in warehouses and retail stores.
*   **Supply Chain Management:** Tracking products from origin to destination.
*   **Access Control:** Identifying authorized personnel.
*   **Wearable Devices:** Some smart wearables use RFID for payments or access.

**Reference:**
*   **Madisetti & Bahga (2015):** Dedicate significant sections to RFID technology, explaining its principles, types of tags, and applications in IoT. They highlight its role in providing unique identities to physical objects.
*   **Rajkamal (2022):** Likely discusses RFID as a core sensing and identification technology in IoT architectures.
*   **Al-Fuqaha et al. (2015):** Identifies RFID as a key enabling technology for IoT, particularly for identification and data capture.

**Important Points to Remember:**
*   RFID is a **wireless identification technology**.
*   It uses **radio waves** to communicate.
*   The choice between passive and active tags depends on **read range, cost, and power requirements**.
*   EPC is often the **data format** used on RFID tags.

---

## 3. Ubiquitous Code (UbiCode)

Ubiquitous Code (UbiCode) is a concept and a framework proposed for systems that aim for pervasive computing and ubiquitous identification of objects. It's often associated with enabling objects to carry their identity and information in a way that can be accessed by various devices and networks seamlessly. While not as standardized or widely adopted as EPC or RFID, the concept is crucial for understanding the vision of truly "smart" environments.

**Key Concepts:**
*   **Pervasive Computing:** Computing is embedded into everyday objects and environments, becoming invisible yet ever-present.
*   **Context-Awareness:** Systems can sense and respond to the environment and the state of objects.
*   **Interoperability:** Ability of diverse devices and systems to communicate and work together.
*   **Object Identity:** A persistent and accessible identifier for each physical object.

**How it Works (Conceptual):**
UbiCode envisions objects being embedded with identifiers and possibly small amounts of data, accessible through various means (e.g., NFC, QR codes, RFID, optical recognition). The goal is to make the information about an object universally accessible without requiring specific infrastructure for each type of interaction.

**Examples:**
*   Imagine a smart coffee cup that, when placed on a special coaster (a reader), not only identifies itself but also communicates its current temperature, beverage type, and perhaps even a user preference profile to a connected smart appliance or app.
*   A museum exhibit could have a UbiCode that allows visitors to scan it with their smartphones to get detailed information, historical context, and even augmented reality overlays.

**Reference:**
*   The term "Ubiquitous Code" might be less prominent in general IoT literature compared to EPC and RFID. It's more of a conceptual descriptor. However, the underlying principles are discussed in broader IoT contexts.
*   **Vermesan & Friess (2013, 2014):** These works, focusing on converging technologies for smart environments, likely touch upon the idea of pervasive identification and data access, which aligns with the UbiCode concept.

**Important Points to Remember:**
*   UbiCode represents the **ideal of pervasive identification** where objects are easily identified and their information accessed by any available means.
*   It emphasizes **seamless integration** of identification into the environment.
*   It's a **conceptual goal** that drives the development of various identification technologies.

---

## 4. Internet Protocol Version 4 (IPv4)

IPv4 (Internet Protocol version 4) is the fourth version of the Internet Protocol and has been the dominant protocol for routing traffic on the internet for many years. It provides a unique numerical address for each device connected to a network.

**Key Concepts:**
*   **IP Address:** A unique numerical label assigned to each device participating in a computer network that uses the Internet Protocol for communication.
*   **32-bit Address:** An IPv4 address is a 32-bit number, typically represented in dot-decimal notation (e.g., 192.168.1.1).
*   **Address Space:** The total number of possible IPv4 addresses is approximately 4.3 billion ($2^{32}$).
*   **Classes:** Originally, IPv4 addresses were divided into classes (A, B, C, D, E) based on the first octet, determining the network and host portions of the address. This has largely been superseded by Classless Inter-Domain Routing (CIDR).
*   **Public vs. Private IP Addresses:**
    *   **Public IPs:** Globally unique and assigned by the Internet Assigned Numbers Authority (IANA) through Regional Internet Registries (RIRs). Used for devices directly accessible on the internet.
    *   **Private IPs:** Reserved for use within private networks (e.g., home or office LANs) and are not routable on the public internet. Examples include addresses in the 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 ranges. These require Network Address Translation (NAT) to communicate with the internet.
*   **Network Address Translation (NAT):** A method used to remap one IP address space into another, allowing multiple devices with private IP addresses to share a single public IP address.

**Limitations for IoT:**
*   **Address Exhaustion:** The 4.3 billion addresses are insufficient for the projected number of IoT devices.
*   **NAT Complexity:** While NAT helps conserve IPv4 addresses, it can introduce complexity and hinder end-to-end connectivity for some IoT applications.

**Reference:**
*   **Madisetti & Bahga (2015):** Discuss IPv4 as the foundational addressing scheme for the internet and its challenges with the growth of connected devices, including IoT.
*   **Rajkamal (2022):** Will likely cover IPv4 as the legacy protocol and its limitations, paving the way for IPv6.
*   **Al-Fuqaha et al. (2015):** Highlights the address exhaustion problem of IPv4 as a major driver for the adoption of IPv6 in the context of IoT.

**Important Points to Remember:**
*   IPv4 provides **32-bit numerical addresses**.
*   Its primary limitation for IoT is the **limited address space**.
*   **NAT** is commonly used to mitigate address exhaustion but has drawbacks.

---

## 5. Internet Protocol Version 6 (IPv6)

IPv6 (Internet Protocol version 6) is the successor to IPv4, designed to address the limitations of IPv4, particularly the exhaustion of IP addresses. It provides a vastly larger address space and introduces other improvements.

**Key Concepts:**
*   **128-bit Address:** An IPv6 address is a 128-bit number, typically represented in hexadecimal notation with colons separating groups of 16 bits (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`).
*   **Vastly Larger Address Space:** Offers $2^{128}$ possible addresses, which is an astronomically large number, effectively eliminating address exhaustion concerns for the foreseeable future.
*   **Address Simplification:** Rules exist to shorten IPv6 addresses (e.g., omitting leading zeros, collapsing consecutive blocks of zeros).
*   **Stateless Address Autoconfiguration (SLAAC):** Allows devices to automatically configure their IPv6 address without the need for a DHCP server.
*   **Improved Security:** IPv6 has built-in support for IPsec (Internet Protocol Security), enhancing authentication and encryption.
*   **No NAT Required (Ideally):** With the abundance of addresses, every device can have a unique, globally routable IP address, enabling true end-to-end connectivity.
*   **Flow Labeling:** A field in the IPv6 header that can be used to identify a sequence of packets belonging to a particular flow, aiding in quality of service (QoS) management.

**Advantages for IoT:**
*   **Massive Addressability:** Essential for connecting billions of IoT devices.
*   **Simplified Network Management:** SLAAC and the potential absence of NAT can simplify network configuration.
*   **Enhanced Security:** Built-in IPsec is beneficial for securing IoT communications.
*   **End-to-End Connectivity:** Facilitates direct communication between devices without intermediaries like NAT.

**Reference:**
*   **Madisetti & Bahga (2015):** Emphasize IPv6 as the future of internet addressing, crucial for the scalability of IoT, and detail its structure and advantages over IPv4.
*   **Rajkamal (2022):** Will provide a thorough explanation of IPv6 as the mandated addressing scheme for modern IoT deployments, covering its structure, benefits, and transition mechanisms from IPv4.
*   **Al-Fuqaha et al. (2015):** Strongly advocates for IPv6 adoption in IoT due to its vast address space, which is fundamental for the massive scale of connected devices.

**Important Points to Remember:**
*   IPv6 uses **128-bit addresses**.
*   It solves the **address exhaustion problem** of IPv4.
*   Key features include **SLAAC**, **built-in IPsec**, and the elimination of the need for NAT.
*   IPv6 is **critical for the scalability of IoT**.

---

## Practice Questions and Answers

**Question 1:** What is the primary purpose of a unique identifier in an IoT system?
**Answer:** The primary purpose is to distinguish one device or object from all others in the network, ensuring that data and commands are correctly associated with the intended entity.

**Question 2:** Which organization is responsible for developing and maintaining standards like EPC?
**Answer:** GS1.

**Question 3:** Briefly explain the difference between passive and active RFID tags.
**Answer:** Passive RFID tags are powered by the radio waves from the reader, have a shorter read range, and are typically less expensive. Active RFID tags have their own battery, allowing for a longer read range and more advanced features, but are more expensive.

**Question 4:** What is the main limitation of IPv4 that makes it challenging for large-scale IoT deployments?
**Answer:** The limited address space (approximately 4.3 billion addresses) is insufficient for the vast number of devices expected in IoT.

**Question 5:** How does IPv6 address the limitations of IPv4 for IoT?
**Answer:** IPv6 provides a significantly larger address space (128-bit addresses), which can accommodate billions of IoT devices. It also offers features like stateless address autoconfiguration and built-in security, simplifying and enhancing IoT network management.

**Question 6:** If you need to track individual items in a retail store for inventory management, which identification technologies would be most suitable and why?
**Answer:** RFID with EPC is a strong candidate. RFID provides wireless identification and tracking, while EPC offers a standardized way to encode unique identifiers for each item, facilitating seamless integration with inventory management systems and supply chain visibility.

---

## Summary and Key Takeaways

*   **Identification and Addressing** are fundamental pillars of IoT, enabling devices to be uniquely recognized and communicated with.
*   **EPC** is a standardized framework for product identification, often used in conjunction with RFID.
*   **RFID** is a wireless technology that uses radio waves to read identification tags attached to objects, crucial for physical object identification.
*   The concept of **Ubiquitous Code** represents the vision of pervasive identification, where objects are easily identifiable through various means in a ubiquitous computing environment.
*   **IPv4**, with its 32-bit addresses, suffers from address exhaustion, making it inadequate for the massive scale of IoT.
*   **IPv6**, with its 128-bit addresses, is the essential addressing protocol for IoT, providing a practically limitless address space and improved functionalities.

**Alignment with Course Outcomes:**

*   **CO1 (Explain architecture):** Understanding identification and addressing is crucial for explaining how different components of an IoT architecture interact. (Knowledge Level: K2)
*   **CO2 (Identify hardware/software components):** RFID readers, tags, and IP protocols (IPv4/IPv6) are core hardware and software components discussed. (Knowledge Level: K3)
*   **CO3 (Discuss communication technologies):** RFID and IP protocols are key communication and addressing technologies in IoT. (Knowledge Level: K2)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
