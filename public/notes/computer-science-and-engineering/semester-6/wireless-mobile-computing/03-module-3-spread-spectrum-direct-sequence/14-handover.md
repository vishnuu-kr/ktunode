---
title: "Handover."
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 3: Spread spectrum – Direct sequence"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb8b"
status: "completed"
scrapedAt: "2026-05-20T16:58:05.580Z"
---
# WIRELESS & MOBILE COMPUTING - Module 3: Spread Spectrum - Direct Sequence - Handover

## 1. Introduction to Handover

Handover, also known as handoff, is a crucial process in wireless and mobile computing that allows a mobile device (MD) or mobile station (MS) to maintain a continuous connection as it moves from one base station (BS) or cell to another.  Without handover, a call would be dropped every time the user moves out of the coverage area of the current BS. This is especially important in cellular networks using spread spectrum technologies like Direct Sequence Spread Spectrum (DSSS), as maintaining synchronization and code phase alignment during the transition is critical.

**Learning Outcomes:**

*   Understand the concept of handover in wireless networks.
*   Identify different types of handover.
*   Explain the handover process in a DSSS system.
*   Discuss the parameters that influence handover decisions.
*   Analyze the challenges and considerations in handover design.

## 2. Key Concepts and Definitions

*   **Handover/Handoff:** The process of transferring an ongoing call or data session from one base station (BS) to another as the mobile device moves.
*   **Cell:** The geographical area covered by a single base station.
*   **Base Station (BS):** A fixed radio transmitter and receiver that serves a cell.
*   **Mobile Device (MD) / Mobile Station (MS):** The user's wireless device (e.g., mobile phone, laptop).
*   **Channel:** A specific frequency band or code sequence used for communication.
*   **Signal Strength:** The power of the received signal from a base station.
*   **Signal-to-Interference Ratio (SIR):** The ratio of the power of the desired signal to the power of interfering signals.
*   **Pilot Signal:** A continuous signal transmitted by a base station used for signal strength measurement and synchronization.
*   **Handover Margin (Hysteresis):** A threshold added to the signal strength of the target base station to prevent ping-ponging (repeated handover between two cells).
*   **Dwell Time:** The time a mobile device spends in a particular cell.
*   **Forced Handover:** Handover initiated by the network, often due to load balancing or maintenance.
*   **Network Topology:** The physical or logical arrangement of network elements (base stations, cells).
*   **Neighbor List:** A list maintained by the mobile device (or the network) containing information about neighboring cells and their base stations.

## 3. Types of Handover

Handover can be classified based on several factors:

*   **Based on Cell/Sector Involvement:**

    *   **Intra-Cell Handover:** Handover within the same cell, usually between different sectors of a sectorized antenna. This is also known as sector switching.
    *   **Inter-Cell Handover:** Handover between different cells. This is the most common type of handover.

*   **Based on Network Involvement:**

    *   **Hard Handover:**  A "break-before-make" approach. The connection to the old base station is broken before establishing a connection to the new base station. This can result in a brief interruption in service.
    *   **Soft Handover:** A "make-before-break" approach.  The mobile device establishes a connection to the new base station before breaking the connection to the old base station. This provides a smoother transition and reduces the risk of call drops. *This is particularly relevant in CDMA and hence DSSS based systems.*

*   **Based on Handover Direction:**

    *   **Horizontal Handover:** Handover between base stations within the same network and using the same radio access technology (e.g., from one 4G LTE base station to another 4G LTE base station).
    *   **Vertical Handover:** Handover between base stations using different radio access technologies (e.g., from a 4G LTE base station to a Wi-Fi access point).  This is typically more complex and requires additional signaling and negotiation.

## 4. Handover Process in DSSS Systems (specifically considering CDMA principles)

The handover process in a DSSS (specifically CDMA) system involves the following steps:

1.  **Signal Strength Monitoring:**  The mobile device continuously monitors the signal strength (pilot signal strength) from its serving base station and neighboring base stations. This is crucial for handover decisions.  The Neighbor List helps the MD to efficiently scan relevant channels.

2.  **Handover Decision:** The mobile device (or network) makes a decision to initiate handover based on predefined criteria. These criteria may include:

    *   **Signal Strength Threshold:** The signal strength from the serving base station falls below a certain threshold.
    *   **Signal-to-Interference Ratio (SIR):** The SIR of the serving base station degrades below a certain level.
    *   **Handover Margin (Hysteresis):**  The signal strength from a neighboring base station exceeds the signal strength from the serving base station by a certain margin (hysteresis) to prevent ping-ponging.
    *   **Distance Estimation:**  Based on signal propagation models or GPS data (if available), the mobile device can estimate its distance from the base station.
    *   **Network Load:** The network might initiate a forced handover to balance the load among base stations.

3.  **Handover Initiation:** Once a handover decision is made, the mobile device (or the network) initiates the handover process. This typically involves sending a handover request to the network.

4.  **Target Base Station Selection:** The network selects the target base station based on the signal strength, network load, and other factors.  In a soft handover scenario, multiple base stations might be selected.

5.  **Channel Assignment and Synchronization:** The target base station assigns a channel (code sequence in DSSS/CDMA) to the mobile device. The mobile device synchronizes its code phase with the new base station's pilot signal. In soft handover, the MD synchronizes with *multiple* base stations.

6.  **Connection Establishment:** The mobile device establishes a connection with the target base station while maintaining a connection with the serving base station (in soft handover).

7.  **Data Transfer:** Data is now transmitted and received through the new connection.

8.  **Old Connection Release (Hard Handover):**  In a hard handover, the connection to the old base station is released. In a soft handover, the connection to the old base station is released when its signal strength becomes too weak or after a predetermined period.

**Example (Soft Handover in CDMA):**

Imagine a mobile phone user driving along a highway. As the user moves away from Base Station A and towards Base Station B, the mobile phone's signal strength from Base Station A decreases, while the signal strength from Base Station B increases. A soft handover is initiated when the signal from Base Station B becomes strong enough. The mobile phone now communicates simultaneously with both Base Station A and Base Station B. The network intelligently combines the signals received from both base stations (through a technique called macro-diversity), providing a strong and reliable connection. Finally, when the signal from Base Station A becomes too weak, the connection to Base Station A is dropped.

## 5. Parameters Influencing Handover Decisions

Several parameters influence handover decisions:

*   **Received Signal Strength (RSS):**  The primary parameter used for handover. A decrease in RSS from the serving cell often triggers handover.
*   **Signal-to-Interference Ratio (SIR):**  A low SIR indicates poor signal quality and interference, which can trigger handover.
*   **Bit Error Rate (BER) / Frame Error Rate (FER):** High BER/FER suggests a degraded connection and can prompt handover.
*   **Distance to Base Station:**  Estimating the distance can help in predicting signal strength and making informed handover decisions.
*   **Mobile Device Speed:**  Faster-moving devices require more frequent handovers. Handover parameters may need to be adjusted based on speed.
*   **Network Load:**  Base stations with high load can trigger handover to offload users to less congested cells.
*   **Power Control:** Power control algorithms can impact signal strength and affect handover decisions.
*   **QoS Requirements:** The Quality of Service (QoS) requirements of the connection (e.g., bandwidth, latency) can influence handover decisions.  A connection requiring low latency may be handed over to a cell with better network conditions even if the RSS is slightly lower.
*   **Battery Life:** In some implementations, handover decisions may consider battery life. For instance, aggressively handing over to a cell with a strong signal but suboptimal other conditions to reduce transmit power may extend battery life.

## 6. Challenges and Considerations in Handover Design

*   **Ping-Ponging:**  Repeated handover between two cells due to fluctuating signal strength. Handover margin (hysteresis) helps mitigate this.
*   **Call Dropping:**  Handover failure resulting in a dropped call. This can occur if the handover is initiated too late or if the target base station is unavailable.
*   **Handover Delay:**  The time it takes to complete the handover process. Excessive delay can disrupt service.  Minimizing handover latency is crucial.
*   **Complexity:**  Handover algorithms can be complex, requiring significant processing power and signaling overhead.
*   **Security:**  Handover procedures must be secure to prevent unauthorized access and eavesdropping.
*   **Signaling Overhead:** Frequent handovers can increase signaling traffic in the network, impacting overall network performance.
*   **Compatibility:**  Handover between different technologies (vertical handover) requires careful consideration of compatibility issues.
*   **Context Transfer:** During handover, it's important to transfer the user's context (e.g., session state, security keys) to the target base station to maintain seamless service.
*   **Location Privacy:**  Frequent handover can potentially expose the user's location to the network. Privacy considerations are important.
*   **Radio Resource Management:** Efficient radio resource management is critical during handover to minimize interference and maximize network capacity.

**Important Points to Remember:**

*   Handover is essential for maintaining continuous connectivity in mobile networks.
*   Soft handover provides a smoother transition than hard handover, but it requires more resources.
*   The handover process is influenced by various parameters, including signal strength, SIR, and network load.
*   Handover design must address challenges such as ping-ponging, call dropping, and handover delay.
*   Security, privacy, and resource management are important considerations in handover design.

## 7. Practice Questions & Exercises

**Question 1:**  Explain the difference between hard handover and soft handover. Which is more suitable for a DSSS/CDMA system and why?

**Answer:**

*   **Hard Handover:** Break-before-make. The connection to the old BS is broken *before* the connection to the new BS is made.  Potentially causes service interruption.
*   **Soft Handover:** Make-before-break. A new connection is established *before* breaking the old connection. Smoother transition, less call dropping.
*   **Suitability for DSSS/CDMA:** Soft handover is more suitable for DSSS/CDMA systems because it leverages the inherent capabilities of code division multiple access. CDMA allows multiple users to share the same frequency band simultaneously using different code sequences. This makes it feasible for a mobile device to maintain connections with multiple base stations during the handover process. Soft handover provides a smoother transition, reduces the risk of call drops, and improves overall system performance by exploiting macro-diversity.  Macro-diversity improves performance because the best signal from multiple BS's are combined.

**Question 2:** What is the purpose of handover margin (hysteresis) in handover decisions?

**Answer:**  Handover margin (hysteresis) is a threshold added to the signal strength of the target base station to prevent ping-ponging. Without hysteresis, small fluctuations in signal strength could cause the mobile device to repeatedly handover between two cells, leading to instability and unnecessary signaling overhead.

**Question 3:**  List three parameters that can be used to trigger a handover.

**Answer:**

1.  Received Signal Strength (RSS)
2.  Signal-to-Interference Ratio (SIR)
3.  Network Load

**Question 4:**  What are some of the challenges in implementing vertical handover?

**Answer:**

*   **Different Radio Access Technologies (RATs):** Vertical handover involves transitioning between different RATs (e.g., Wi-Fi, 4G LTE), which have different protocols, signaling mechanisms, and data formats.
*   **Security:** Maintaining security during handover between different RATs can be complex, as each RAT may have its own security protocols.
*   **Authentication:**  Authenticating the user in the new RAT may require additional steps and credentials.
*   **IP Address Management:**  Maintaining the same IP address during vertical handover is desirable for seamless service, but it can be challenging to implement.
*   **QoS Management:**  Ensuring consistent QoS during vertical handover is difficult due to the different capabilities and characteristics of each RAT.
*   **Application Continuity:**  Maintaining the state of applications during vertical handover requires careful design and coordination between the different RATs.

**Question 5:** Explain how a DSSS system uses code synchronization in the handover process.

**Answer:** During a DSSS handover, especially in CDMA-based systems with soft handover, the mobile device needs to synchronize its spreading code (the pseudo-random noise sequence used for spreading the signal) with the target base station(s). Here's how it works:

1.  **Pilot Signal:** The target base station transmits a continuous pilot signal, which uses a known spreading code sequence. This pilot signal acts as a timing reference.

2.  **Code Phase Alignment:** The mobile device searches for the pilot signal from the target base station and attempts to align its own spreading code with the pilot signal's code phase. This is achieved using correlation techniques. The mobile device slides its code phase until it finds a strong correlation peak with the received pilot signal.

3.  **Timing Adjustment:** Once a strong correlation is detected, the mobile device adjusts its timing to precisely match the target base station's timing. This is crucial for successful despreading of the received signal.

4.  **Maintaining Synchronization:** Even after the initial synchronization, the mobile device continuously tracks the pilot signal and adjusts its timing to maintain synchronization, especially in the presence of Doppler shift (due to mobile device movement) and other timing variations.

In soft handover, the mobile device needs to synchronize with multiple base stations simultaneously.  Each base station transmits a pilot signal with a unique code offset, allowing the mobile device to distinguish between them and synchronize with each one individually. The network then combines the signals received from the different base stations.
