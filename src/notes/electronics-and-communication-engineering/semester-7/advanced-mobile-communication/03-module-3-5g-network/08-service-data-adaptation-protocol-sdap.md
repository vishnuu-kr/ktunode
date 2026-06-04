---
title: "Service Data Adaptation Protocol (SDAP)"
subject: "ADVANCED MOBILE COMMUNICATION"
module: "Module 3: 5G Network"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff0fa"
status: "completed"
scrapedAt: "2026-05-23T18:04:48.525Z"
---
# ADVANCED MOBILE COMMUNICATION - Module 3: 5G Network

## Topic: Service Data Adaptation Protocol (SDAP)

---

### **Introduction to SDAP and its Role in 5G**

The evolution of mobile communication, from 1G to the current 5G era, has been driven by the increasing demand for higher data rates, lower latency, and improved efficiency. 5G New Radio (NR) introduces new protocols and architectural changes to meet these demands. One such crucial protocol is the **Service Data Adaptation Protocol (SDAP)**.

**Key Concept:** SDAP is a new protocol introduced in 5G NR, operating in the User Plane. Its primary function is to adapt the Quality of Service (QoS) of the IP packet flow to the QoS requirements of the specific Radio Bearer. This enables finer-grained QoS control and differentiation for different services and applications.

**CO1 & CO2 Alignment:** Understanding SDAP is essential for explaining the basics of 5G and how it has evolved to support diverse service requirements.

**Textbook Reference:** Ahmadi, S. (2019). *5G NR: Architecture, Technology, Implementation, and Operation of 3GPP New Radio Standards*. Chapter on User Plane Protocols.

**Important Point to Remember:** SDAP is specific to the 5G NR user plane and is designed to bridge the gap between the IP layer QoS and the radio layer QoS.

---

### **Key Concepts and Definitions**

*   **Quality of Service (QoS):** A measure of the performance of a telecommunications system, especially in terms of its ability to satisfy the needs of different types of users. In 5G, QoS is characterized by parameters such as bit rate, latency, packet loss rate, and jitter.
*   **Radio Bearer:** A logical connection established between the User Equipment (UE) and the base station (gNB) for the transmission of user data. Radio Bearers are configured with specific QoS characteristics.
*   **IP Packet Flow:** A sequence of IP packets that share common characteristics, such as source and destination IP addresses, ports, and protocol. These flows are often associated with specific applications or services.
*   **SDAP Header:** A header added by the SDAP layer to user data packets. This header carries information for QoS mapping and other control functionalities.
*   **SDAP Instance:** A logical entity within the SDAP layer that is responsible for processing a specific set of IP packet flows and mapping them to a particular QoS Flow.
*   **QoS Flow:** A unidirectional flow of packets that are treated with a specific QoS characteristic. A QoS flow is associated with a QoS Profile Identifier (QFI).
*   **QoS Profile Identifier (QFI):** A unique identifier assigned to a QoS Flow, defining its QoS characteristics (e.g., ARP, 5QI, QoS class identifier).
*   **5QI (5G QoS Identifier):** A standardized identifier representing a specific QoS treatment combination, simplifying QoS configuration and management.
*   **ARP (Allocation and Retention Priority):** A mechanism to prioritize resources for different services, ensuring that high-priority services receive preferential treatment even under congestion.
*   **SDAP Service Information:** Information provided to the SDAP layer about the QoS requirements of an IP packet flow. This information can originate from higher layers (e.g., Application Layer, IMS) or be pre-configured.

**Textbook Reference:** Dahlman, Skold, & Parkvall (2016). *4G, LTE-Advanced Pro and The Road to 5G*. While this book primarily focuses on LTE, it provides foundational understanding of QoS mechanisms that have evolved into 5G. Chapter on QoS in LTE.

**Important Point to Remember:** SDAP enables a flexible mapping between potentially complex IP service requirements and the more constrained radio bearer QoS parameters.

---

### **SDAP Architecture and Functionality**

The SDAP layer is positioned below the PDCP (Packet Data Convergence Protocol) layer and above the Radio Link Control (RLC) layer in the 5G NR protocol stack.

**High-Level Protocol Stack:**

```
+-------------------+
|     Application   |
+-------------------+
|        IP         |
+-------------------+
|       SDAP        |  <-- NEW in 5G NR
+-------------------+
|       PDCP        |
+-------------------+
|        RLC        |
+-------------------+
|        MAC        |
+-------------------+
|         PHY       |
+-------------------+
```

**Key Functions of SDAP:**

1.  **QoS Flow Identification:** SDAP identifies IP packet flows based on information provided by higher layers or by inspecting packet headers (e.g., source/destination IP, port numbers).
2.  **Mapping of IP Packet Flows to QoS Flows:** SDAP maps identified IP packet flows to appropriate QoS Flows. This mapping is crucial for applying the correct QoS treatment.
3.  **SDAP Header Addition/Removal:** SDAP adds an SDAP header to user data packets when transmitting and removes it upon reception. This header contains information necessary for QoS mapping.
4.  **QoS Marking:** SDAP can mark packets with specific QoS identifiers (e.g., 5QI) to ensure they receive the intended QoS treatment across the radio access network.
5.  **Per-QoS Flow Packet Handling:** SDAP ensures that packets belonging to different QoS flows are handled according to their respective QoS requirements.

**Textbook Reference:** Ahmadi, S. (2019). *5G NR: Architecture, Technology, Implementation, and Operation of 3GPP New Radio Standards*. Detailed explanation of SDAP's position and functions within the NR stack.

**Reference Book Example:** Cox, C. (2020). *An Introduction to 5G: The New Radio, 5G Network and Beyond*. Provides a conceptual overview of how 5G protocols like SDAP contribute to enhanced user experience.

**Important Point to Remember:** SDAP acts as a translator between the network layer (IP) and the radio layer, ensuring that end-to-end QoS requirements are met.

---

### **SDAP Header Structure and Operation**

The SDAP header is designed to be compact and efficient, carrying essential information for QoS mapping.

**SDAP Header Fields (Commonly Used):**

*   **QFI (QoS Flow Identifier):** This is the most critical field, identifying the specific QoS Flow to which the packet belongs.
*   **Extension Header Indication:** A flag to indicate the presence of an extension header, allowing for future extensibility.
*   **Information Element (IE) Identifier:** Used to identify specific information elements within the SDAP header.

**Operation Example:**

Consider a UE receiving a video stream (high bandwidth, moderate latency) and a Voice over IP (VoIP) call (low latency, low jitter).

1.  **QoS Flow Creation:** The network (gNB and core network) establishes separate QoS Flows for the video stream and the VoIP call, each with different QoS parameters (e.g., 5QI values).
2.  **SDAP Identification:** The SDAP layer in the UE identifies incoming IP packets belonging to the video stream and the VoIP call.
3.  **Mapping:** SDAP maps these IP flows to their respective QoS Flows.
4.  **SDAP Header Addition:** For each packet, SDAP adds an SDAP header. The header will contain the QFI corresponding to the QoS Flow for either the video or VoIP traffic.
5.  **Transmission:** The packet, with the SDAP header, is then passed down to PDCP, RLC, MAC, and PHY for transmission over the radio interface.
6.  **Reception:** The receiving gNB's SDAP layer receives the packet, reads the QFI from the SDAP header, and directs the packet to the appropriate RLC entity and radio bearer configured for that QoS Flow.

**Textbook Reference:** Ahmadi, S. (2019). *5G NR: Architecture, Technology, Implementation, and Operation of 3GPP New Radio Standards*. Provides detailed specifications of the SDAP header format.

**Important Point to Remember:** The QFI within the SDAP header is the key element that allows the radio access network to apply the correct QoS treatment to the packet.

---

### **SDAP in the Context of 5G Services and Use Cases**

5G is designed to support a wide range of services, each with unique QoS requirements. SDAP plays a vital role in enabling this service differentiation.

*   **Enhanced Mobile Broadband (eMBB):** For applications like high-definition video streaming and virtual reality, SDAP can map these flows to QoS Flows that prioritize high throughput and moderate latency.
*   **Ultra-Reliable Low-Latency Communication (URLLC):** For critical applications like autonomous driving and remote surgery, SDAP maps these flows to highly prioritized QoS Flows that guarantee extremely low latency and high reliability.
*   **Massive Machine Type Communication (mMTC):** For IoT devices that send small amounts of data infrequently, SDAP can map these flows to efficient QoS Flows that prioritize power saving and connection density.

**Course Outcome Alignment:**

*   **CO1 & CO2:** Demonstrates how 5G has evolved to support diverse services, directly impacting the understanding of 5G basics.
*   **CO3:** Illustrates the network architecture and how SDAP contributes to efficient service delivery.
*   **CO4:** Highlights how SDAP addresses the challenges of managing diverse QoS requirements in 5G.

**Reference Book Example:** Prasad, R. (2016). *5G Outlook – Innovations and Applications*. Discusses the various application domains of 5G and the underlying QoS mechanisms required for their success.

**Important Point to Remember:** SDAP is a key enabler for the diverse service capabilities of 5G, ensuring that each service receives the appropriate level of quality.

---

### **Benefits and Advantages of SDAP**

*   **Granular QoS Control:** SDAP allows for finer-grained control over QoS for individual IP packet flows, enabling more precise service differentiation.
*   **Simplified QoS Management:** By abstracting IP flow characteristics to QoS Flows and QFIs, SDAP simplifies the management of QoS across the radio access network.
*   **Flexibility and Extensibility:** The design of SDAP, including the potential for extension headers, allows for future adaptations and support of new QoS requirements.
*   **Improved Resource Utilization:** By mapping flows to appropriate QoS profiles, SDAP contributes to more efficient utilization of radio resources.
*   **Enhanced User Experience:** Ultimately, SDAP contributes to a better user experience by ensuring that applications receive the QoS they require, leading to smoother streaming, more responsive interactions, and reliable critical services.

**Textbook Reference:** Ahmadi, S. (2019). *5G NR: Architecture, Technology, Implementation, and Operation of 3GPP New Radio Standards*. Chapter dedicated to the advantages and design principles of 5G protocols.

**Important Point to Remember:** SDAP is a critical component in realizing the full potential of 5G by providing efficient and flexible QoS management.

---

### **Practice Questions and Exercises**

**Question 1:** What is the primary function of the Service Data Adaptation Protocol (SDAP) in 5G NR?
**Answer:** The primary function of SDAP is to adapt the Quality of Service (QoS) of IP packet flows to the QoS requirements of the specific Radio Bearer.

**Question 2:** In which layer of the 5G NR protocol stack does SDAP operate, and what are its neighboring layers?
**Answer:** SDAP operates in the User Plane, below the PDCP layer and above the RLC layer.

**Question 3:** What is the significance of the QoS Flow Identifier (QFI) within the SDAP header?
**Answer:** The QFI is a crucial field in the SDAP header that identifies the specific QoS Flow to which an IP packet belongs, enabling the radio access network to apply the correct QoS treatment.

**Question 4:** How does SDAP contribute to supporting different 5G use cases like eMBB and URLLC?
**Answer:** SDAP maps IP packet flows from these diverse use cases to appropriate QoS Flows with distinct QoS parameters (e.g., high throughput for eMBB, low latency for URLLC), ensuring that each service receives the required quality of service.

**Question 5 (Application Based):** Imagine a user is simultaneously video conferencing (high bandwidth, low latency) and downloading a large file (high bandwidth, less latency sensitive). Explain how SDAP would handle these two different IP packet flows on the radio interface.
**Answer:** SDAP would identify the IP packet flows for the video conference and the file download. It would then map the video conferencing flow to a QoS Flow optimized for low latency and sufficient bandwidth, and the file download flow to a QoS Flow optimized for high throughput. The SDAP headers for packets from each flow would contain different QFIs, allowing the gNB to apply distinct radio bearer configurations and scheduling priorities to ensure the best possible user experience for both activities.

---

### **Summary and Key Takeaways**

*   **SDAP is a new 5G NR User Plane protocol.**
*   **Its core function is QoS mapping between IP packet flows and Radio Bearers.**
*   **It operates between PDCP and RLC layers.**
*   **The SDAP header, particularly the QFI, is essential for QoS identification.**
*   **SDAP enables granular QoS control, supporting diverse 5G services (eMBB, URLLC, mMTC).**
*   **It simplifies QoS management and improves resource utilization.**

**Important Point to Remember:** SDAP is a critical enabler for the differentiated service delivery that defines 5G's capabilities.

---
This concludes the study notes for the Service Data Adaptation Protocol (SDAP) in 5G networks. Remember to refer to the specified textbooks and reference books for more in-depth understanding and detailed technical specifications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
