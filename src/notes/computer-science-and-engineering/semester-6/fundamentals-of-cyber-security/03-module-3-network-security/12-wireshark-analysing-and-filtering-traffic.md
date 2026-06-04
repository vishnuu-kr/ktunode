---
title: "Wireshark- Analysing and Filtering  Traffic"
subject: "FUNDAMENTALS OF CYBER SECURITY"
module: "Module 3: Network Security:"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be47"
status: "completed"
scrapedAt: "2026-05-20T16:54:42.435Z"
---
# FUNDAMENTALS OF CYBER SECURITY

## Module 3: Network Security

### Topic: Wireshark - Analyzing and Filtering Traffic

---

### Introduction to Wireshark

Wireshark is a free and open-source packet analyzer. It allows you to capture and interactively browse the traffic running on a computer network. It's an invaluable tool for network troubleshooting, analysis, security auditing, and software and protocol development.

**Key Concepts:**

*   **Packet:** The basic unit of data transmitted over a network. Wireshark captures these packets.
*   **Packet Capture:** The process of intercepting and recording network traffic.
*   **Protocol:** A set of rules that govern how data is transmitted across a network. Wireshark understands and displays information about various protocols (e.g., TCP, UDP, HTTP, DNS).
*   **Network Interface:** The hardware component (e.g., Ethernet card, Wi-Fi adapter) that connects a computer to a network. Wireshark captures traffic from a chosen interface.

---

### Learning Outcomes Covered

1.  **Understand the role of Wireshark in network security:**
    *   How Wireshark aids in identifying malicious traffic.
    *   Its use in detecting network vulnerabilities.
    *   Its application in incident response and forensic analysis.
2.  **Perform basic Wireshark installation and setup:**
    *   Downloading and installing Wireshark.
    *   Understanding the dependency on Npcap/WinPcap.
    *   Selecting and starting a capture on a network interface.
3.  **Explain the Wireshark user interface (UI) and its main components:**
    *   Packet List Pane.
    *   Packet Details Pane.
    *   Packet Bytes Pane.
    *   Capture Filters Pane.
    *   Display Filters Pane.
4.  **Apply capture filters to narrow down the traffic being captured:**
    *   Understanding the syntax of capture filters.
    *   Common capture filter examples (e.g., by IP address, protocol, port).
5.  **Apply display filters to analyze specific packets from a captured file:**
    *   Understanding the syntax of display filters.
    *   Common display filter examples (e.g., by IP address, protocol, port, HTTP requests, DNS queries).
    *   Using logical operators (AND, OR, NOT) in display filters.
6.  **Analyze common network protocols using Wireshark:**
    *   TCP: Connection establishment (3-way handshake), data transfer, connection termination.
    *   UDP: Datagrams, stateless communication.
    *   HTTP: Request/response cycles, methods (GET, POST), status codes.
    *   DNS: Domain name resolution, queries, and responses.
7.  **Identify potential security threats by analyzing Wireshark captures:**
    *   Unencrypted sensitive data (passwords, credit card numbers).
    *   Suspicious network activity (e.g., unusual ports, high traffic volumes).
    *   Signs of reconnaissance (e.g., port scans).
    *   Malware communication patterns.
8.  **Save and export Wireshark capture files:**
    *   Saving captures in `.pcap` or `.pcapng` format.
    *   Exporting specific packet details.

---

### 1. Role of Wireshark in Network Security

Wireshark is a fundamental tool for cybersecurity professionals. Its ability to see network traffic at a granular level makes it indispensable for:

*   **Identifying Malicious Traffic:**
    *   Detecting unusual protocols or ports being used.
    *   Spotting patterns indicative of malware communication (e.g., C2 servers).
    *   Recognizing traffic associated with known attack vectors.
*   **Detecting Network Vulnerabilities:**
    *   Identifying unpatched systems communicating insecurely.
    *   Spotting weak encryption protocols in use.
    *   Finding exposed sensitive data due to misconfigurations.
*   **Incident Response and Forensic Analysis:**
    *   Capturing live traffic during a security incident to understand the attacker's actions.
    *   Analyzing pre-captured traffic logs to reconstruct events.
    *   Identifying the source and destination of malicious activity.
    *   Extracting evidence from network captures.
*   **Network Troubleshooting:**
    *   Diagnosing connectivity issues.
    *   Understanding why applications might not be working.
    *   Optimizing network performance.

---

### 2. Basic Wireshark Installation and Setup

*   **Downloading Wireshark:**
    *   Visit the official Wireshark website: [https://www.wireshark.org/](https://www.wireshark.org/)
    *   Download the appropriate installer for your operating system (Windows, macOS, Linux).
*   **Installation:**
    *   Run the installer.
    *   **Npcap/WinPcap:** During installation, you'll be prompted to install Npcap (for Windows). This is a packet capture driver and library that Wireshark relies on to capture live network traffic. **Ensure Npcap is installed** for live capture functionality.
*   **Starting a Capture:**
    1.  Launch Wireshark.
    2.  The main screen will display a list of available network interfaces.
    3.  Identify the interface through which your network traffic flows (e.g., "Ethernet" for wired connections, "Wi-Fi" for wireless).
    4.  Double-click the desired interface or select it and click the blue shark fin icon (Start Capturing Packets) in the toolbar.
    5.  Wireshark will immediately begin capturing and displaying packets in real-time.

**Important Point to Remember:**
*   **Permissions:** On some operating systems (especially Linux), you might need administrative privileges to capture network traffic.

---

### 3. Wireshark User Interface (UI) Components

The Wireshark UI is divided into several key panes:

*   **Welcome Screen:** Displays recent captures, allows starting a new capture, opening existing files, and accessing documentation.
*   **Main Window (after starting a capture or opening a file):**
    *   **Packet List Pane (Top):**
        *   Displays a summary of each captured packet.
        *   Columns typically include: No., Time, Source, Destination, Protocol, Length, Info.
        *   Packets are color-coded based on protocol by default.
    *   **Packet Details Pane (Middle):**
        *   Shows a hierarchical breakdown of the selected packet's layers and protocols.
        *   You can expand or collapse protocol layers (e.g., Ethernet, IP, TCP, HTTP) to see details.
        *   This is where you examine the content of headers and, sometimes, the payload.
    *   **Packet Bytes Pane (Bottom):**
        *   Displays the raw hexadecimal and ASCII data of the selected packet.
        *   Wireshark highlights the section of data in this pane that corresponds to the selected protocol element in the Packet Details Pane.
    *   **Capture Filter Bar:** Located above the Packet List Pane. Used to specify filters *before* capturing traffic.
    *   **Display Filter Bar:** Located above the Packet List Pane. Used to filter packets *after* they have been captured.

---

### 4. Applying Capture Filters

Capture filters limit the amount of data Wireshark actually saves to disk. This is crucial for efficiency, especially on busy networks, as capturing everything can be overwhelming and disk-intensive.

**Syntax:** Capture filters use the **BPF (Berkeley Packet Filter)** syntax.

**Common Capture Filter Examples:**

*   **Capture traffic to/from a specific IP address:**
    *   `host 192.168.1.100`
    *   `src host 192.168.1.100` (source IP)
    *   `dst host 192.168.1.100` (destination IP)
*   **Capture traffic for a specific protocol:**
    *   `tcp`
    *   `udp`
    *   `icmp`
    *   `dns` (though `udp port 53` is more common for DNS capture)
*   **Capture traffic on a specific port:**
    *   `port 80` (traffic to or from port 80)
    *   `src port 80` (traffic originating from port 80)
    *   `dst port 80` (traffic destined for port 80)
*   **Capture traffic to/from a specific IP address and protocol:**
    *   `host 192.168.1.100 and tcp`
    *   `src host 192.168.1.100 and dst port 443`
*   **Capture traffic to/from a network segment:**
    *   `net 192.168.1.0/24`

**How to Use:**
1.  In the Wireshark Welcome Screen, before starting a capture, enter your filter into the "Capture filter for selected interfaces" box.
2.  Alternatively, after starting a capture, you can stop it, apply a capture filter via the Capture Options menu, and restart.

**Important Point to Remember:**
*   Capture filters are applied *before* packets are written to the capture buffer. If you miss a packet due to a capture filter, you cannot recover it later.

---

### 5. Applying Display Filters

Display filters allow you to sift through packets *already captured*. This is the most common way to analyze traffic in Wireshark. You can apply and modify display filters without stopping the capture.

**Syntax:** Display filters have a more expressive and protocol-aware syntax.

**Common Display Filter Examples:**

*   **Filter by IP address:**
    *   `ip.addr == 192.168.1.100`
    *   `ip.src == 192.168.1.100`
    *   `ip.dst == 192.168.1.100`
*   **Filter by Protocol:**
    *   `tcp`
    *   `udp`
    *   `icmp`
    *   `dns`
    *   `http`
    *   `ssl` or `tls`
*   **Filter by Port:**
    *   `tcp.port == 80`
    *   `udp.port == 53`
    *   `tcp.srcport == 80`
    *   `tcp.dstport == 443`
*   **Filter by TCP Flags (important for analyzing connection states):**
    *   `tcp.flags.syn == 1` (SYN packet - connection initiation)
    *   `tcp.flags.ack == 1` (ACK packet - acknowledgment)
    *   `tcp.flags.fin == 1` (FIN packet - connection termination)
    *   `tcp.flags.rst == 1` (RST packet - connection reset)
*   **Combine Filters with Logical Operators:**
    *   `and` or `&&`
    *   `or` or `||`
    *   `not` or `!`
    *   `ip.addr == 192.168.1.100 and tcp.port == 80`
    *   `http or dns`
    *   `!(arp or icmp)`
*   **Filter for HTTP Requests:**
    *   `http.request.method == "GET"`
    *   `http.request.uri contains "login.php"`
*   **Filter for DNS Queries:**
    *   `dns.qry.name == "www.google.com"`
    *   `dns.qry.type == 1` (A record query)

**How to Use:**
1.  Type your display filter into the "Apply a display filter" bar at the top of the Wireshark window.
2.  Press Enter or click the "Apply" button.
3.  The Packet List Pane will update to show only the packets matching your filter.
4.  **Coloring Rules:** Wireshark uses coloring rules to visually highlight different types of traffic, which can be customized.

**Wireshark Filter Syntax Helper:**
*   As you type in the display filter bar, Wireshark provides auto-completion and highlights syntax errors in red.
*   You can right-click on a field in the Packet Details Pane and select "Apply as Filter" to quickly generate a filter for that specific field.

---

### 6. Analyzing Common Network Protocols

*   **TCP (Transmission Control Protocol):**
    *   **Connection Establishment (3-Way Handshake):**
        1.  **SYN:** Client sends a SYN packet to the server to initiate connection. (`tcp.flags.syn == 1 and tcp.flags.ack == 0`)
        2.  **SYN-ACK:** Server responds with a SYN-ACK packet. (`tcp.flags.syn == 1 and tcp.flags.ack == 1`)
        3.  **ACK:** Client sends an ACK packet to confirm. (`tcp.flags.syn == 0 and tcp.flags.ack == 1`)
    *   **Data Transfer:** Packets with the ACK flag set to indicate received data. Sequence numbers (`tcp.seq`) and acknowledgment numbers (`tcp.ack`) are crucial.
    *   **Connection Termination:** Typically involves FIN and ACK packets.
    *   **Analysis:** Look for retransmissions, out-of-order packets, and connection resets (RST flags), which can indicate network problems or attacks.
*   **UDP (User Datagram Protocol):**
    *   **Stateless:** No connection establishment or termination required. Packets (datagrams) are sent independently.
    *   **Ports:** Uses source and destination ports to identify applications.
    *   **Analysis:** Useful for real-time applications (streaming, VoIP), but less reliable than TCP. Can be used for DNS, DHCP, SNMP. Look for high volumes of UDP traffic or traffic on unusual ports.
*   **HTTP (Hypertext Transfer Protocol):**
    *   **Web Traffic:** Used for requesting and receiving web pages.
    *   **Requests:** GET, POST, PUT, DELETE, etc.
    *   **Responses:** Status codes (200 OK, 404 Not Found, 500 Internal Server Error).
    *   **Analysis:** Crucial for identifying unencrypted sensitive data like usernames, passwords, cookies, and form submissions.
    *   **Filter:** `http`
    *   **Example:** `http.request.method == "POST"` or `http.user_agent`
*   **DNS (Domain Name System):**
    *   **Resolution:** Translates human-readable domain names (e.g., `www.example.com`) into IP addresses.
    *   **Queries:** Client asking for an IP address.
    *   **Responses:** Server providing the IP address.
    *   **Analysis:** Look for unusual DNS queries (e.g., to known malicious domains), excessive DNS traffic (potential DNS amplification attack), or DNS tunneling (hiding data within DNS queries).
    *   **Filter:** `dns` or `udp.port == 53` or `tcp.port == 53`

---

### 7. Identifying Potential Security Threats

*   **Unencrypted Sensitive Data:**
    *   **How to spot:** Filter for `http` or `ftp` traffic. Examine the "Info" column for keywords like "POST" or "login." In the Packet Bytes Pane, look for usernames, passwords, credit card numbers, or session cookies in plain text.
    *   **Threat:** Data interception by attackers.
*   **Suspicious Network Activity:**
    *   **High Traffic Volumes:** Large amounts of traffic to/from a specific host or on unusual ports can indicate a DDoS attack, malware activity, or data exfiltration.
    *   **Unusual Ports:** Services running on non-standard ports might be an attempt to bypass firewalls or an indicator of compromised systems.
    *   **Connection Attempts:** Numerous failed connection attempts to multiple hosts can signal reconnaissance (port scanning).
    *   **Threat:** Reconnaissance, malware activity, denial-of-service.
*   **Signs of Reconnaissance (Scanning):**
    *   **How to spot:** Filter for `icmp` (ping scans) or TCP `SYN` packets to many different ports on one or more hosts. Look for patterns of connection attempts.
    *   **Threat:** Attackers mapping out the network and identifying open ports and services.
*   **Malware Communication Patterns:**
    *   **How to spot:** Look for periodic "heartbeat" traffic to known malicious IP addresses or domains. Analyze traffic to unfamiliar servers. Check for unusual protocols or data encoding.
    *   **Threat:** Command and Control (C2) communication, data exfiltration.
*   **Insecure Protocols:**
    *   **How to spot:** Filter for protocols like Telnet (`telnet`), FTP (`ftp`), or unencrypted HTTP (`http`).
    *   **Threat:** Passwords and data transmitted in clear text are easily intercepted.

---

### 8. Saving and Exporting Wireshark Capture Files

*   **Saving Captures:**
    *   After capturing or analyzing traffic, you can save the captured data for later analysis or sharing.
    *   Go to `File` -> `Save As...`
    *   Choose a location and file name.
    *   **File Formats:**
        *   `.pcap` (Packet Capture): The traditional Wireshark format.
        *   `.pcapng` (Packet Capture Next Generation): The newer, preferred format. It supports metadata, encapsulation, and multiple interfaces better.
*   **Exporting Packet Details:**
    *   You can export specific packets or portions of packets.
    *   Go to `File` -> `Export Specified Packets...`
    *   This allows you to export packets matching a display filter.
    *   You can choose to export selected packets only or all packets.
    *   Choose the export format (e.g., Plain Text, CSV, JSON, even raw packets).
    *   Go to `File` -> `Export Packet Dissections...` to export the detailed, human-readable information about packets.

---

### Practice Questions & Exercises

**Instructions:** For each exercise, assume you have Wireshark installed and are capturing traffic on your local network.

1.  **Identify your IP Address:** What is the command to filter for all traffic involving your own IP address?
2.  **Web Traffic Analysis:** How would you filter Wireshark to see only HTTP traffic? If you observe an HTTP POST request, what potential security risk might be present?
3.  **DNS Queries:** Write a display filter to show all DNS queries for the domain `malware-site.com`.
4.  **TCP Handshake:** What is the sequence of flags for a successful TCP 3-way handshake? What filter would show only the first step (SYN packet)?
5.  **Unencrypted Credentials:** You've captured traffic and see a `POST` request in HTTP. What would you look for in the Packet Details and Packet Bytes panes to identify potential unencrypted credentials?
6.  **Capture vs. Display Filter:** Explain the fundamental difference between a capture filter and a display filter. When would you prefer to use one over the other?
7.  **Suspect Activity:** You see a large number of UDP packets being sent from your computer to a server on port 123 (NTP). While NTP is legitimate, a flood of UDP packets can indicate a UDP Flood attack. How would you monitor this with Wireshark (think about filters and what to look for)?

---

### Answers to Practice Questions

1.  **Identify your IP Address:**
    *   Let's assume your IP address is `192.168.1.150`.
    *   **Display Filter:** `ip.addr == 192.168.1.150`
    *   **Capture Filter:** `host 192.168.1.150`
2.  **Web Traffic Analysis:**
    *   **Filter for HTTP traffic:** `http`
    *   **Potential security risk:** Unencrypted transmission of sensitive data, such as usernames, passwords, session cookies, or credit card details.
3.  **DNS Queries:**
    *   **Display Filter:** `dns.qry.name == "malware-site.com"`
    *   You could also use `dns.qry.name matches "malware-site.com"` for more flexibility with substrings.
4.  **TCP Handshake:**
    *   **Sequence of flags:** SYN -> SYN-ACK -> ACK
    *   **Filter for the first step (SYN packet):** `tcp.flags.syn == 1 and tcp.flags.ack == 0`
5.  **Unencrypted Credentials:**
    *   You would look for keywords like "username," "password," "user," "pass," "login," or specific form field names in the **Packet Details Pane** (under the HTTP layer).
    *   In the **Packet Bytes Pane**, you would look for the actual plain-text username and password values alongside the request data.
6.  **Capture vs. Display Filter:**
    *   **Capture Filter:** Applied *before* packets are captured. It limits the data that Wireshark actually saves. Use it to reduce the amount of data captured on busy networks or to focus on very specific traffic from the start.
    *   **Display Filter:** Applied *after* packets have been captured. It filters the packets that are shown in the Packet List Pane. Use it for detailed analysis, experimentation, and to isolate specific events within a larger capture.
    *   **Preference:** Use capture filters when you know exactly what you're looking for and want to reduce capture size. Use display filters for exploration, troubleshooting, and in-depth analysis of captured data.
7.  **Suspect Activity (UDP Flood):**
    *   **Monitoring:**
        *   Start a capture on your relevant network interface.
        *   Apply a display filter: `udp.port == 123` (to see NTP traffic) or simply `udp` to see all UDP traffic.
        *   Observe the **Packet List Pane** for a high rate of UDP packets.
        *   Look at the **"Time"** column to estimate the packet rate (e.g., packets per second).
        *   Examine the source and destination IP addresses and ports to confirm the pattern. A UDP flood would typically involve many packets originating from one or more sources directed at a target, often using spoofed source IPs.

---

### Important Points to Remember

*   **Ethical Hacking:** Always ensure you have explicit permission before capturing traffic on any network you do not own or administer. Unauthorized packet capture is illegal and unethical.
*   **Capture Filters vs. Display Filters:** Understand their distinct purposes and apply them accordingly.
*   **Protocol Layers:** Wireshark breaks down packets by protocol layers (Ethernet, IP, TCP/UDP, Application). Understanding these layers is key to interpreting the data.
*   **Practice:** The best way to master Wireshark is through hands-on practice. Experiment with different filters and analyze various types of network traffic.
*   **Sensitive Data:** Be extremely cautious when dealing with captured traffic, as it may contain sensitive personal or corporate information.
*   **Npcap/WinPcap:** This is essential for live packet capture.

---
