---
title: "PSI, Additional (Network information and service description) information in data streams for set-top boxes."
subject: "ENTERTAINMENT ELECTRONICS"
module: "Module 1: Review of Analog Television: Scanning, Horizontal and Vertical Synchronization, Color information, Transmission methods. NTSC and PAL standards."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff014"
status: "completed"
scrapedAt: "2026-05-23T18:00:52.957Z"
---
# ENTERTAINMENT ELECTRONICS - Module 1: Review of Analog Television & Digital Data Streams

## Topic: PSI, Additional (Network Information and Service Description) Information in Data Streams for Set-Top Boxes

This topic delves into how digital television systems, particularly those utilized by Set-Top Boxes (STBs), convey crucial information about available services and networks within their data streams. This information is essential for the STB to function correctly, allowing users to navigate and select their desired content.

---

### 1. Understanding Packetized Streaming of Digital Media (CO1: K2)

The foundation of modern digital television broadcasting lies in **packetized streaming**. Unlike analog television which transmits a continuous analog signal, digital TV breaks down the audio-visual content into discrete data packets. This approach offers significant advantages in terms of efficiency, error resilience, and multiplexing of multiple services.

*   **Packetization:** The process of dividing a continuous data stream (like video and audio) into smaller, manageable units called packets.
*   **Why Packetization?**
    *   **Multiplexing:** Allows multiple independent services (different TV channels, radio stations, data services) to be transmitted simultaneously over a single carrier frequency. Think of it like interleaving different conversations on the same phone line, but each conversation is in its own "packet."
    *   **Error Resilience:** If a packet is lost or corrupted during transmission, only a small portion of the content is affected, and error correction mechanisms can often recover the missing data. This is far more robust than a single error in an analog signal that could disrupt the entire picture.
    *   **Flexibility:** Easily adaptable to different transmission mediums (satellite, cable, terrestrial) and network protocols.
*   **Transport Stream (TS):** In DVB (Digital Video Broadcasting) and similar systems, the primary packetized data stream is called the Transport Stream. This TS contains various Elementary Streams (ES) – raw audio, raw video, etc. – which are then further processed and packetized.
*   **Packet Structure:** Each TS packet is typically 188 bytes long and contains a header and a payload. The header includes vital information like a Packet Identifier (PID).
*   **Packet Identifier (PID):** A unique 13-bit number that identifies the type of data within a packet. For example, one PID might carry video for channel 1, another PID might carry audio for channel 1, and yet another PID might carry service information for channel 1. The STB uses PIDs to reassemble the correct audio and video streams for a selected channel.

**Reference:** *Digital Video and Audio Broadcasting Technology: A Practical Engineering Guide* by W. Fischer (Springer, 2020) extensively discusses the principles of digital signal processing and packetization in broadcasting.

---

### 2. Program Specific Information (PSI)

PSI is a set of **tables** embedded within the Transport Stream that provides essential information about the services and programs available within that stream. It's the "map" that guides the STB in deciphering the broadcast.

#### 2.1. Program Association Table (PAT)

*   **Purpose:** The PAT is the entry point for the STB. It lists all the programs (TV channels, radio channels, etc.) available in the Transport Stream and indicates the PID of the PMT for each program.
*   **Key Information:**
    *   `program_number`: A unique identifier for each program.
    *   `PID_of_PMT`: The Packet Identifier of the Program Map Table associated with that program.
*   **How it works:** When an STB tunes to a broadcast, it first looks for the PAT. Once it finds the PAT, it scans the `program_number` and `PID_of_PMT` entries to understand what programs are offered and where to find the details for each.
*   **PID of PAT:** The PAT is always transmitted with a fixed PID of **0x0000**. This is a crucial piece of information for the STB.

**Example:** Imagine a broadcaster transmits multiple channels. The PAT would list Channel 1 (program number 1) and the PID for its PMT, Channel 2 (program number 2) and the PID for its PMT, and so on.

#### 2.2. Program Map Table (PMT)

*   **Purpose:** For each program identified in the PAT, the PMT provides details about the individual Elementary Streams (ES) that constitute that program. This includes the PIDs for the video, audio, and any other associated data streams (like subtitles or teletext).
*   **Key Information:**
    *   `program_number`: Identifies the program this PMT belongs to.
    *   `stream_type`: Indicates the type of Elementary Stream (e.g., MPEG-2 video, H.264 video, MPEG-1 audio, AC-3 audio).
    *   `PID_of_ES`: The Packet Identifier for each specific Elementary Stream (video, audio, etc.).
*   **How it works:** After finding the PAT and identifying the desired program's PMT PID, the STB tunes to that PMT PID. The PMT then tells the STB which PIDs to tune to for the video and audio components of that channel.
*   **PID of PMT:** The PID of the PMT is specified in the PAT.

**Example:** For Channel 1, the PMT might specify:
    *   Stream Type: H.264 Video, PID: 0x101
    *   Stream Type: AAC Audio, PID: 0x102
    *   Stream Type: AC-3 Audio, PID: 0x103

The STB would then know to look for packets with PID 0x101 for the video, and either 0x102 or 0x103 for the audio, depending on user selection or default settings.

#### 2.3. Conditional Access Table (CAT) (Optional but important)

*   **Purpose:** If a broadcast is scrambled or encrypted (e.g., pay-TV channels), the CAT table provides information about the Conditional Access Systems (CAS) used and the PIDs of the Entitlement Management Messages (EMM) and Entitlement Control Messages (ECM) that are required for decryption.
*   **Key Information:**
    *   `CAS_identifier`: Identifies the specific CAS system.
    *   `PID_of_EMM_ECM`: PIDs for messages related to managing and controlling access.
*   **How it works:** The STB, equipped with a decryption module and appropriate smart card or entitlement data, uses the information from the CAT to fetch the necessary decryption keys or authorization data.

**Reference:** *Understanding Digital Television An Introduction to DVB Systems* by Lars-Ingemar Lundström (Focal Press,Elsevier, 2006) provides a detailed explanation of PSI tables and their role in DVB systems.

---

### 3. Additional Information in Data Streams for Set-Top Boxes

Beyond the essential PSI tables, digital TV data streams often contain additional information that enhances the user experience and provides more context.

#### 3.1. Service Description Tables (SDT) / Network Information (NIT)

These tables provide more comprehensive information about the services and the network itself, enabling features like electronic program guides (EPGs).

*   **Service Description Table (SDT):**
    *   **Purpose:** Provides descriptive information about each service (channel name, provider name, etc.) and sometimes links to related services.
    *   **Key Information:**
        *   `service_name`: User-friendly name of the channel (e.g., "BBC One," "ESPN").
        *   `provider_name`: Name of the broadcaster.
        *   `service_type`: Further classification of the service (e.g., digital television service, digital radio service).
        *   `running_status`: Indicates if the service is currently broadcasting.
        *   `free_CA_mode`: Indicates if the service is free-to-air or requires conditional access.
    *   **How it works:** The STB uses SDT information to populate channel lists and display channel names to the user.

*   **Network Information Table (NIT):**
    *   **Purpose:** Provides information about the transport stream and the network of transport streams. It helps the STB to scan for and identify other available transport streams on different frequencies or network identifiers. This is crucial for automatic channel scanning and network updates.
    *   **Key Information:**
        *   `network_name`: Name of the broadcast network.
        *   `network_identifier`: A unique identifier for the network.
        *   `transport_stream_id`: Identifies individual transport streams within the network.
        *   `original_network_id`: Identifies the original network from which the transport stream originated.
        *   `service_list`: Lists the services contained within that specific transport stream.
    *   **How it works:** When the STB receives an NIT, it can learn about other available frequencies or network configurations, facilitating seamless channel scanning and a more complete service discovery.

**Example:** The SDT provides the name "Sky Sports F1" for a particular service. The NIT might tell the STB that this channel is part of the "Sky Digital" network and is broadcast on a specific satellite transponder.

#### 3.2. Event Information Table (EIT)

*   **Purpose:** The EIT carries detailed information about current and upcoming programs (events) for each service. This is the backbone of the Electronic Program Guide (EPG).
*   **Key Information:**
    *   `event_id`: Unique identifier for an event.
    *   `start_time` & `end_time`: Duration of the program.
    *   `title`: Title of the program (e.g., "Match of the Day," "The Crown").
    *   `description`: A brief summary of the program.
    *   `parental_rating`: Age suitability rating.
    *   `component_data`: Information about the video, audio, and subtitle components.
*   **How it works:** The STB collects EIT data for all available channels and uses it to construct the interactive EPG interface, allowing users to browse schedules, set reminders, and record programs. EITs can be transmitted "on-demand" (for the current service) or "present/following" (for other services).

**Example:** The EIT would contain information for a specific movie, including its title, actors, synopsis, and scheduled broadcast time.

#### 3.3. Time and Date Table (TDT) / Time Offset Table (TOT)

*   **Purpose:** These tables provide accurate time and date information to the STB, which is essential for EPG scheduling, program recording, and internal clock synchronization.
*   **Key Information:**
    *   Current time and date.
    *   Daylight Saving Time (DST) information.
*   **How it works:** The STB synchronizes its internal clock with the time information provided in these tables, ensuring accurate program scheduling.

#### 3.4. Component Registration Table (RRT)

*   **Purpose:** Not directly related to program information but crucial for broadcasting. The RRT can carry information about network configurations and resource management, such as the allocation of bandwidth for different services.
*   **Key Information:**
    *   Details about network components and their configurations.

#### 3.5. Storage Formatting Table (SFT) and Update Table (STU)

*   **Purpose:** Used for delivering software updates to the STB and associated devices.
*   **How it works:** These tables can contain instructions and data packages that allow the STB's firmware to be updated remotely over the broadcast network. This is crucial for security patches, new features, and bug fixes.

**Reference:** *Newnes Guide to Television and Video Technology* by K F Ibrahim (Newnes, 2007) offers insights into the operational aspects of television technology, including data broadcasting. *Digital Video and HD Algorithms and Interfaces* by C. Poynton (Morgan Kaufmann, 2012) delves deeper into the technical details of digital video streams.

---

### 4. NTSC and PAL Standards (Contextual Relevance)

While this module focuses on digital streams, understanding the context of analog standards like NTSC and PAL is important for appreciating the evolution of television technology.

*   **NTSC (National Television System Committee):** Primarily used in North America and parts of South America. Characterized by 525 scanning lines and a frame rate of 29.97 frames per second. Known for its color instability and the need for hue control on the TV.
*   **PAL (Phase Alternating Line):** Used in Europe, Australia, and many other parts of the world. Characterized by 625 scanning lines and a frame rate of 25 frames per second. Known for its more stable color reproduction compared to NTSC, with an automatic correction system.
*   **Synchronization:** Both NTSC and PAL rely on horizontal and vertical synchronization pulses to ensure the electron beam in CRT TVs traces the image correctly, line by line and frame by frame.
*   **Color Information:** Analog color systems encode color information (chrominance) separately from brightness information (luminance).

**How this relates to digital streams:** Digital broadcasting replaced analog systems to overcome their limitations (bandwidth, signal degradation, color issues). Packetized data streams with structured tables (PSI, SDT, EIT, etc.) are the digital equivalent of the continuous, synchronized analog signal, offering much greater flexibility and information capacity.

**Reference:** Chapters in *Newnes Guide to Television and Video Technology* by K F Ibrahim often cover the historical development and technical specifications of NTSC and PAL.

---

### 5. Aligning with Course Outcomes

*   **CO1: Explain packetized streaming of digital media happens in the field of infotainment industry. (Knowledge Level: K2)**
    *   This entire topic directly addresses CO1 by explaining how digital media is broken into packets (TS packets, PIDs) for transmission and how STBs use this structure. The concept of multiplexing multiple services within a single stream is also a core aspect of packetized streaming in infotainment.
*   **CO2: Realise the critical aspects of DVB and DAB standards used for media broadcasting (Knowledge Level: K2)**
    *   The discussion of PSI, SDT, EIT, etc., are all critical components of standards like DVB. Understanding these tables is realizing the "how" behind DVB broadcasting. While DAB (Digital Audio Broadcasting) has its own specific information tables, the underlying principle of carrying service and network information in a structured data stream is common.
*   **CO3: Apply video coding/compression algorithms are used to produce high-definition video in MPEG-4 standard (Knowledge Level: K3)**
    *   While this topic doesn't directly detail MPEG-4 compression *algorithms*, it lays the groundwork for CO3. The `stream_type` field in the PMT indicates which video coding standard is being used (e.g., H.264, which is MPEG-4 Part 10 AVC). The STB's ability to process and display HD video via MPEG-4 relies on it correctly interpreting the PIDs for the video stream as specified in the PMT.
*   **CO4: Describe modern display technologies for video reproduction (Knowledge Level: K2)**
    *   This topic is indirectly related to CO4. The information carried in the data streams (e.g., EIT data for program details, stream types) ultimately influences what is displayed on modern screens. The STB acts as the bridge between the broadcast data and the display technology. The efficiency and information capacity of digital streams enable the transmission of data required for high-definition content that modern displays excel at reproducing.

---

### 6. Key Concepts and Definitions to Remember

*   **Packetization:** Breaking data into discrete packets.
*   **Transport Stream (TS):** The main digital broadcast stream containing multiple services.
*   **Packet Identifier (PID):** Unique ID for data types within TS packets.
*   **Program Specific Information (PSI):** Tables providing broadcast structure.
*   **Program Association Table (PAT):** Entry point; maps programs to PMT PIDs.
*   **Program Map Table (PMT):** Details ES PIDs for a specific program.
*   **Elementary Stream (ES):** Raw audio, video, or data.
*   **Service Description Table (SDT):** Channel/service names and provider info.
*   **Network Information Table (NIT):** Network-wide broadcast information.
*   **Event Information Table (EIT):** Program details for EPGs.
*   **Conditional Access Table (CAT):** Information for scrambled content.
*   **Multiplexing:** Combining multiple services into one stream.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of the Program Association Table (PAT) in a digital television broadcast?
a) To provide detailed program descriptions.
b) To identify the PIDs for audio and video streams of a specific channel.
c) To list all available programs and their associated Program Map Table (PMT) PIDs.
d) To manage conditional access to encrypted channels.

**Question 2:**
A Set-Top Box receives a Transport Stream. It needs to display Channel 5. Which table would it first consult to find out which PID contains the video for Channel 5?
a) EIT
b) SDT
c) PAT
d) CAT

**Question 3:**
If a digital television broadcast contains multiple TV channels, radio channels, and data services, how are these different services carried within a single Transport Stream?
a) Through analog multiplexing.
b) By dividing the bandwidth into separate analog channels.
c) Through packetization, where each service's data is assigned specific PIDs within the stream.
d) By using different carrier frequencies for each service.

**Question 4:**
What is the significance of PIDs in a Transport Stream for a Set-Top Box?
a) They are used for time synchronization.
b) They allow the STB to identify and demultiplex different audio, video, and data streams.
c) They provide information about the broadcast network.
d) They are solely for encryption and decryption.

**Question 5 (Application/Analysis):**
Describe how the information contained in the PAT, PMT, SDT, and EIT tables works together to allow a user to select a channel and view its program guide on their television.

---

### 8. Answers to Practice Questions

**Answer 1:**
c) To list all available programs and their associated Program Map Table (PMT) PIDs.

**Answer 2:**
c) PAT. The PAT contains the mapping from program number (e.g., Channel 5) to the PID of its corresponding PMT. Once the PMT PID is known, the STB can then extract the video PID from the PMT itself.

**Answer 3:**
c) Through packetization, where each service's data is assigned specific PIDs within the stream.

**Answer 4:**
b) They allow the STB to identify and demultiplex different audio, video, and data streams.

**Answer 5:**
The PAT acts as the initial directory, listing all available programs (channels) and the specific PID for the PMT of each program. The STB tunes to the PAT (PID 0x0000) to get this information. When a user selects a channel, the STB then tunes to the PMT PID for that channel, as identified in the PAT. The PMT then details the specific PIDs for the video, audio, and other components of that selected channel. The SDT provides user-friendly names for these channels (e.g., "BBC One"), which the STB displays in its channel list. The EIT carries the program details (title, description, start/end times) for each channel. The STB collects EIT data for all channels and uses it to populate the Electronic Program Guide, allowing the user to browse what's on now and next, and to see future schedules.

---

### 9. Important Points to Remember

*   Digital TV is fundamentally **packetized**.
*   **PIDs** are the key to demultiplexing different data streams within a Transport Stream.
*   The **PAT (PID 0x0000)** is the starting point for a Set-Top Box to understand the broadcast structure.
*   The **PMT** provides the specific PIDs for the audio and video components of a program.
*   **SDT** and **EIT** tables are crucial for user-facing features like channel naming and Electronic Program Guides.
*   Understanding these tables is essential for comprehending how digital broadcasting systems (like DVB) function and how STBs interpret and process broadcast data.

---
This comprehensive study note provides a detailed overview of PSI and additional information in digital television data streams, directly addressing the learning outcomes and course outcomes outlined for Module 1, Section on PSI and Data Streams. The references provided throughout highlight the sources from which this information is derived, reinforcing the practical and theoretical underpinnings of the topic.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
