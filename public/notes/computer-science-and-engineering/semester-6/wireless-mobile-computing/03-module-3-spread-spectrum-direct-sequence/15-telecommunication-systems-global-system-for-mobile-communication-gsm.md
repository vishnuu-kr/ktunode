---
title: "Telecommunication Systems - Global System for Mobile Communication (GSM)"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 3: Spread spectrum – Direct sequence"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb8c"
status: "completed"
scrapedAt: "2026-05-20T16:58:06.292Z"
---
## WIRELESS & MOBILE COMPUTING - Module 3: Spread Spectrum – Direct Sequence
### Topic: Telecommunication Systems - Global System for Mobile Communication (GSM)

**Introduction:**

These notes cover the Global System for Mobile Communication (GSM), a widely adopted 2G digital cellular technology. We'll explore its architecture, functionalities, and key concepts. While newer technologies like 3G, 4G, and 5G are prevalent, understanding GSM provides a fundamental grounding in mobile communication principles.

**Learning Outcomes:**

*   Understand the basic architecture and key components of the GSM system.
*   Explain the different functional areas and subsystems within GSM.
*   Describe the channel structure and multiple access techniques used in GSM.
*   Discuss the call setup process and handover mechanism in GSM.
*   Identify the security features implemented in GSM.

**1. GSM Architecture and Key Components:**

*   **Definition:** GSM (Global System for Mobile communication) is a second-generation (2G) digital cellular technology used for transmitting mobile voice and data services.  It's a circuit-switched technology.

*   **Key Components:**

    *   **Mobile Station (MS):** The mobile device (e.g., mobile phone). Consists of:
        *   **Mobile Equipment (ME):** The physical hardware (phone). Identified by the International Mobile Equipment Identity (IMEI).
        *   **Subscriber Identity Module (SIM):** A smart card containing the user's subscription information, security keys, and address book. Identified by the International Mobile Subscriber Identity (IMSI).
    *   **Base Station Subsystem (BSS):** Controls the radio link with the Mobile Station. Consists of:
        *   **Base Transceiver Station (BTS):** Transmits and receives radio signals to and from the MS. One BTS typically covers a cell.
        *   **Base Station Controller (BSC):** Manages one or more BTSs. Handles radio resource allocation, handover, and cell configuration.  Connects to the Mobile Switching Center (MSC).
    *   **Network Switching Subsystem (NSS):** The core network, responsible for switching and routing calls. Consists of:
        *   **Mobile Switching Center (MSC):** The heart of the network.  Performs switching functions, call routing, and mobility management. Connects to other MSCs, Public Switched Telephone Network (PSTN), and other networks.
        *   **Visitor Location Register (VLR):** A database containing temporary information about MSs that are roaming into the MSC's service area. Data is obtained from the HLR.
        *   **Home Location Register (HLR):** A central database containing permanent subscriber information, including service profiles, location information, and security information.
        *   **Authentication Center (AuC):** Generates authentication keys and encryption keys to ensure secure communication.
        *   **Equipment Identity Register (EIR):** A database containing information about mobile equipment (ME) to prevent stolen or unauthorized devices from accessing the network. Contains white, grey and black lists of IMEIs.
    *   **Operation and Support Subsystem (OSS):**  Monitors and maintains the overall network performance. Includes:
        *   **Network Management Center (NMC):** Provides centralized monitoring and control of the entire GSM network.

*   **Diagram:**  (You would typically include a diagram here showing the interconnected components: MS -> BTS -> BSC -> MSC -> VLR/HLR/AuC/EIR -> PSTN/Other Networks)

**2. Functional Areas and Subsystems within GSM:**

*   **Radio Interface:** The air interface between the MS and the BTS.  Uses Time Division Multiple Access (TDMA) and Frequency Division Multiple Access (FDMA).
*   **Mobility Management (MM):**
    *   **Location Management:** Tracking the location of the MS so that calls can be routed to it.  Involves Location Area Updates.
    *   **Handover Management:** Transferring a call from one cell to another without interruption.
*   **Call Control (CC):** Establishes, maintains, and terminates calls.
*   **Supplementary Services:**  Additional features offered to subscribers, such as call forwarding, call waiting, and caller ID.
*   **Security Management:** Authentication, encryption, and IMEI check.
*   **Network Management:** Monitoring and controlling the network, including fault management, performance management, and configuration management.

**3. Channel Structure and Multiple Access Techniques:**

*   **Multiple Access Techniques:** GSM uses a combination of FDMA and TDMA.
    *   **FDMA (Frequency Division Multiple Access):** Divides the available frequency band into channels, each allocated to a different user.
    *   **TDMA (Time Division Multiple Access):**  Divides each frequency channel into time slots. Each user is assigned one or more time slots within a frame.
*   **Channel Structure:**
    *   **Traffic Channels (TCH):** Carry user voice or data.
    *   **Control Channels:** Carry signaling information.
        *   **Broadcast Channels (BCH):** Transmit information to all MSs in a cell (e.g., cell ID, available frequencies).
        *   **Common Control Channels (CCCH):** Used for establishing a connection between the MS and the network.
        *   **Dedicated Control Channels (DCCH):** Used for ongoing communication between the MS and the network after a connection has been established.
*   **Frame Structure:** A TDMA frame consists of 8 time slots.  Each time slot can carry a burst of data.

**4. Call Setup Process and Handover Mechanism:**

*   **Call Setup Process (Mobile Originated Call):**
    1.  The MS sends a call request to the BTS.
    2.  The BTS forwards the request to the BSC.
    3.  The BSC analyzes the request and allocates a traffic channel.
    4.  The BSC sends the request to the MSC.
    5.  The MSC checks the HLR for subscriber information and authentication.
    6.  The MSC routes the call to the destination (another mobile or PSTN).
*   **Handover Mechanism:**  The process of transferring a call from one cell to another.
    *   **Types of Handover:**
        *   **Intra-BSC Handover:** Handover between two cells controlled by the same BSC.
        *   **Inter-BSC Handover:** Handover between two cells controlled by different BSCs but the same MSC.
        *   **Inter-MSC Handover:** Handover between two cells controlled by different MSCs.
    *   **Handover Process:**
        1.  The MS measures the signal strength of neighboring cells.
        2.  The MS reports the measurements to the serving BTS.
        3.  The BSC analyzes the measurements and decides if a handover is necessary.
        4.  If a handover is needed, the BSC initiates the handover process.
        5.  The target BSC allocates resources for the call.
        6.  The MSC switches the call to the new cell.
        7.  The MS tunes to the new frequency channel.

**5. Security Features in GSM:**

*   **Authentication:** The network verifies the identity of the subscriber.  Uses the A3 and A8 algorithms in conjunction with the Ki (individual subscriber authentication key).
    *   **Process:**
        1.  The AuC generates a random number (RAND).
        2.  RAND is sent to the SIM card.
        3.  The SIM uses the A3 algorithm with RAND and Ki to generate a Signed Response (SRES).
        4.  The SIM uses the A8 algorithm with RAND and Ki to generate a session key (Kc).
        5.  The SRES is sent back to the network.
        6.  The network compares the received SRES with its own calculated SRES.  If they match, the subscriber is authenticated.
*   **Encryption:** The communication between the MS and the BTS is encrypted to prevent eavesdropping.  Uses the A5 algorithm.
    *   **Process:**  The Kc (session key) generated during authentication is used by the A5 algorithm to encrypt the voice and data transmitted over the air interface.  There are different versions of the A5 algorithm (A5/1, A5/2, A5/3).
*   **IMEI Check:** The EIR database is used to prevent stolen or unauthorized mobile equipment from accessing the network.

**Important Points to Remember:**

*   GSM uses a combination of FDMA and TDMA for multiple access.
*   The HLR is the central database for subscriber information.
*   The VLR contains temporary information about roaming subscribers.
*   Authentication and encryption are key security features in GSM.
*   Handover allows for seamless call continuation as the mobile moves between cells.
*   While GSM is a 2G technology, its fundamental principles are important for understanding later generations of mobile communication.

**Practice Questions and Exercises:**

1.  **Question:** What are the main components of the GSM architecture?
    **Answer:** Mobile Station (MS), Base Station Subsystem (BSS), Network Switching Subsystem (NSS), and Operation and Support Subsystem (OSS).

2.  **Question:**  Explain the roles of the HLR and VLR in GSM.
    **Answer:** The HLR (Home Location Register) stores permanent subscriber information, while the VLR (Visitor Location Register) stores temporary information about roaming subscribers.

3.  **Question:** Describe the multiple access techniques used in GSM.
    **Answer:** GSM uses a combination of FDMA (Frequency Division Multiple Access) and TDMA (Time Division Multiple Access).

4.  **Question:** Briefly explain the GSM authentication process.
    **Answer:** The network sends a random number (RAND) to the SIM, which uses it with the user's secret key (Ki) to generate a Signed Response (SRES). The network compares the received SRES with its own calculation, and if they match, the user is authenticated.

5.  **Question:** What is handover and why is it important in GSM?
    **Answer:** Handover is the process of transferring a call from one cell to another as the mobile moves. It is important for providing seamless call continuity and avoiding dropped calls.

6.  **Exercise:** Draw a diagram illustrating the GSM architecture and label all the key components.

7.  **Exercise:** Research and compare the different versions of the A5 encryption algorithm used in GSM (A5/1, A5/2, A5/3).  What are the key differences and security implications? (This requires outside research)

These notes provide a comprehensive overview of the Global System for Mobile Communication (GSM). By understanding its architecture, functionalities, and key concepts, you'll gain a solid foundation in mobile communication principles. Remember to review the important points and practice the exercises to solidify your understanding. Good luck!
