---
title: "IEEE 802.11 System Architecture"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 1: Wireless LAN "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb70"
status: "completed"
scrapedAt: "2026-05-20T16:57:47.492Z"
---
# Wireless & Mobile Computing - Module 1: Wireless LAN - IEEE 802.11 System Architecture

**Learning Outcomes:**

*   Understand the fundamental components of the IEEE 802.11 architecture.
*   Describe the Basic Service Set (BSS) and Extended Service Set (ESS) topologies.
*   Explain the role of the Distribution System (DS) in connecting access points.
*   Differentiate between Independent Basic Service Set (IBSS) and Infrastructure mode.
*   Identify the different types of frames used in 802.11 communication.
*   Understand the 802.11 Layers and Service Primitives.
*   Describe the role of the Mobile Station (STA)

## 1. Introduction to IEEE 802.11

*   **Definition:** IEEE 802.11 is a set of media access control (MAC) and physical layer (PHY) specifications for implementing wireless local area network (WLAN) computer communication.  It is commonly referred to as Wi-Fi.
*   **Goal:** To provide wireless connectivity to devices, allowing them to communicate and access networks without physical cables.
*   **Standard Evolution:**  The 802.11 standard has evolved over time with revisions such as 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac, 802.11ax (Wi-Fi 6), and 802.11be (Wi-Fi 7), each offering improvements in data rates, range, and efficiency.

## 2. IEEE 802.11 System Architecture - Fundamental Components

The core components of the IEEE 802.11 architecture are:

*   **Mobile Station (STA):**  A device equipped with a wireless network interface card (WNIC) that allows it to connect to a wireless network. Examples include laptops, smartphones, tablets, and IoT devices.
    *   Each STA has a unique MAC address.
    *   STAs can be *mobile* (moving) or *stationary*.

*   **Access Point (AP):**  A device that acts as a central connection point for wireless devices. It bridges the wireless network to a wired network (typically Ethernet).
    *   APs transmit and receive radio signals.
    *   APs provide network services like DHCP, NAT, and security.
    *   An AP essentially acts as a base station for wireless clients.

*   **Basic Service Set (BSS):** The fundamental building block of an 802.11 WLAN. It consists of a group of STAs that can communicate directly with each other. There are two types of BSS:
    *   **Independent Basic Service Set (IBSS) or Ad-Hoc Network:** STAs communicate directly with each other without the need for an AP.  It's a peer-to-peer network.
    *   **Infrastructure BSS:** STAs communicate through an AP, which then forwards traffic to the wired network. This is the most common type of WLAN deployment.

*   **Distribution System (DS):** A backbone network that connects multiple APs, enabling roaming and extending the coverage area of the WLAN.
    *   The DS can be wired (e.g., Ethernet) or wireless.
    *   The DS enables seamless handoff of STAs between APs within the same ESS.

*   **Extended Service Set (ESS):**  A set of one or more interconnected BSSs that appear as a single logical network to the user.
    *   APs within an ESS have the same Service Set Identifier (SSID).
    *   The DS interconnects the APs in the ESS.

## 3. Basic Service Set (BSS) Topologies

*   **Independent Basic Service Set (IBSS) / Ad-Hoc Mode:**
    *   **Definition:**  A self-contained network where wireless devices communicate directly with each other, without an access point.
    *   **Characteristics:**
        *   No AP required.
        *   Peers communicate directly.
        *   Limited range and scalability.
        *   Easy to set up for small, temporary networks.
    *   **Use Cases:**  Temporary file sharing between laptops, setting up a game network in a conference room.
    *   **Example:** Two laptops in a coffee shop directly sharing files.

*   **Infrastructure Mode:**
    *   **Definition:**  A network where wireless devices communicate through an access point.
    *   **Characteristics:**
        *   Requires an AP.
        *   APs provide connectivity to a wired network.
        *   Centralized management and security.
        *   Better range and scalability than IBSS.
    *   **Use Cases:**  Home networks, office networks, public Wi-Fi hotspots.
    *   **Example:**  A laptop connecting to the internet through a home Wi-Fi router (AP).

## 4. Extended Service Set (ESS)

*   **Definition:** A set of one or more interconnected BSSs that are connected via a Distribution System (DS).  It gives the impression of a single larger network.
*   **Purpose:** To extend the coverage area of a WLAN.
*   **SSID:** All APs in an ESS share the same Service Set Identifier (SSID), which is the name of the Wi-Fi network.
*   **Roaming:** Allows STAs to move seamlessly between APs within the ESS without losing connectivity.
*   **Example:** A large office building where multiple APs are set up to cover the entire area with the same SSID.  A user can move between floors without losing their Wi-Fi connection.

## 5. Distribution System (DS)

*   **Definition:** The backbone network used to interconnect Access Points (APs) in an ESS.
*   **Function:** Enables communication between APs, allowing seamless roaming for STAs.
*   **Implementation:** Typically implemented using wired Ethernet, but can also be wireless.
*   **Key Features:**
    *   **Connectivity:** Provides the necessary connections between APs.
    *   **Roaming Support:** Allows STAs to transition from one AP to another without disrupting the connection.
    *   **Scalability:** Supports the addition of more APs to extend the network coverage.
*   **DS Services:** The DS provides essential services, like association, disassociation, distribution, integration, and reassociation.

## 6. 802.11 Frame Types

802.11 uses three main frame types for communication:

*   **Management Frames:** Used for managing the WLAN, such as network discovery, association, and authentication.
    *   **Beacon Frames:** Periodically broadcast by APs to advertise their presence and capabilities.
    *   **Probe Request/Response Frames:** Used by STAs to discover available networks.
    *   **Authentication Frames:** Used to establish a secure connection between an STA and an AP.
    *   **Association Request/Response Frames:** Used to associate an STA with an AP.

*   **Control Frames:** Used for controlling access to the wireless medium and managing data flow.
    *   **RTS (Request to Send)/CTS (Clear to Send):** Used for collision avoidance using the CSMA/CA protocol.
    *   **ACK (Acknowledgment):** Used to confirm the successful reception of a data frame.

*   **Data Frames:** Used for carrying the actual data payload.
    *   Contain the data being transmitted between STAs or between an STA and the AP.

## 7. 802.11 Layers and Service Primitives

*   **Relationship to OSI Model:**  802.11 primarily focuses on the Data Link Layer (specifically the MAC sublayer) and the Physical Layer.

*   **MAC Layer Functions:**
    *   **CSMA/CA:** Carrier Sense Multiple Access with Collision Avoidance (to prevent collisions).
    *   **Framing:**  Encapsulating data into 802.11 frames.
    *   **Addressing:**  Using MAC addresses for identifying STAs and APs.
    *   **Association/Disassociation:**  Managing the connection between STAs and APs.
    *   **Security:**  Implementing security protocols like WEP, WPA, and WPA2/3.

*   **Physical Layer Functions:**
    *   **Modulation:**  Converting digital data into radio signals.
    *   **Encoding:**  Preparing data for transmission over the wireless medium.
    *   **Channel Access:**  Selecting the appropriate frequency channel.

*   **Service Primitives:** These are abstract interfaces used for communication between the MAC layer and the higher layers of the networking stack. Some common primitives include:
    *   **MA-UNITDATA.request:** Request to send data to another station.
    *   **MA-UNITDATA.indication:** Notification of received data.
    *   **MLME-ASSOCIATE.request:** Request to associate with an access point.
    *   **MLME-ASSOCIATE.confirm:** Confirmation of association result.
    *   **MLME-DISASSOCIATE.request:** Request to disassociate from an access point.

## 8. Mobile Station (STA)

*   **Role:**  The core element in a wireless network allowing users to connect and communicate wirelessly.
*   **Functionality:**
    *   **Scanning:** Discovers available wireless networks (using Probe Requests and listening for Beacons).
    *   **Authentication:** Verifies identity with the AP.
    *   **Association:** Establishes a connection with an AP.
    *   **Data Transmission & Reception:** Sends and receives data through the AP (Infrastructure mode) or directly to other STAs (IBSS mode).
    *   **Roaming:** Seamlessly transitions between APs within an ESS.
*   **Hardware:** Typically includes a wireless network interface card (WNIC) that handles the physical layer and MAC layer functions.
*   **Power Management:** STAs often implement power-saving mechanisms to extend battery life.

## Important Points to Remember

*   **BSSID:** The MAC address of the AP in an Infrastructure BSS.
*   **SSID:** The name of the wireless network.  All APs in an ESS share the same SSID.
*   **IBSS vs. Infrastructure:** IBSS is ad-hoc, while Infrastructure uses an AP.
*   **ESS extends coverage:** Multiple BSSs connected by a DS create an ESS.
*   **Frames:** Management, Control, and Data frames are essential for WLAN operation.
*   **CSMA/CA:**  A crucial MAC layer protocol for collision avoidance.

## Practice Questions & Exercises

**1. What are the two types of Basic Service Sets (BSS)? Describe the differences between them.**

*   **Answer:** The two types of BSS are Independent Basic Service Set (IBSS) and Infrastructure BSS. In IBSS, STAs communicate directly with each other without an AP, while in Infrastructure BSS, STAs communicate through an AP.

**2. Explain the role of the Distribution System (DS) in an Extended Service Set (ESS).**

*   **Answer:** The DS interconnects multiple APs in an ESS, enabling seamless roaming for STAs as they move between AP coverage areas. It acts as a backbone network, facilitating communication between APs and maintaining network connectivity.

**3. Describe the purpose of a Beacon frame and which component transmits it.**

*   **Answer:** A Beacon frame is a management frame periodically broadcast by Access Points (APs) to advertise their presence, capabilities, and network parameters (e.g., SSID).  It allows STAs to discover and connect to the WLAN.

**4.  Differentiate between Authentication and Association in 802.11.**

*   **Answer:** Authentication is the process of verifying the identity of a STA requesting to join the network.  Association is the process of establishing a connection between a STA and an AP after successful authentication. Association allocates resources and integrates the STA into the BSS.

**5.  Why is CSMA/CA used in 802.11 networks, and what problem does it solve?**

*   **Answer:** CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) is used because wireless networks use shared medium and it is difficult to detect collisions while transmitting (unlike wired Ethernet).  CSMA/CA tries to avoid collisions by listening for traffic before transmitting.

**6.  Scenario: You are setting up a temporary network for a small group of colleagues to share files directly.  Would you choose IBSS or Infrastructure mode?  Why?**

*   **Answer:** IBSS (Independent Basic Service Set). IBSS is suitable for temporary networks where direct communication between devices is needed without the overhead of setting up an access point.  It's simpler and faster to configure.

**7.  Describe the function of a mobile station (STA) in the 802.11 network.**

*   **Answer:**  A mobile station (STA) is a device with a wireless network interface that allows it to connect to a wireless network. Its primary function is to transmit and receive data wirelessly, enabling users to access network resources and communicate with other devices.

**8.  If all AP's within the same ESS use a different SSID, what problems can be anticipated when devices move between them?**

*   **Answer:** If APs within the same ESS use different SSIDs, devices moving between them will experience a complete disconnection. The device will see each AP as a completely different network and would need to re-authenticate and re-associate each time. This prevents seamless roaming, defeating the purpose of the ESS.
