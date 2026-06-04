---
title: "Port Scanning- TCP and UDP"
subject: "FUNDAMENTALS OF CYBER SECURITY"
module: "Module 3: Network Security:"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be45"
status: "completed"
scrapedAt: "2026-05-20T16:54:40.970Z"
---
# FUNDAMENTALS OF CYBER SECURITY - Module 3: Network Security - Port Scanning (TCP & UDP)

## Learning Outcomes:

*   Understand the concept of port scanning and its purpose in network security.
*   Differentiate between TCP and UDP port scanning techniques.
*   Identify different TCP scan types (e.g., TCP Connect, SYN, FIN, NULL, XMAS).
*   Explain the significance of port states (Open, Closed, Filtered).
*   Describe common tools used for port scanning (e.g., Nmap).
*   Understand the ethical considerations and legal implications of port scanning.
*   Recognize and mitigate the risks associated with port scanning.

## 1. Introduction to Port Scanning

*   **Definition:** Port scanning is a process used to identify open ports and services on a target host or network. It involves sending a series of packets to specific ports and analyzing the responses to determine which ports are active and listening for connections.
*   **Purpose:**
    *   **Reconnaissance:** Gathering information about the target system, including running services and versions.
    *   **Vulnerability Assessment:** Identifying potential weaknesses in the system's security based on open ports and running services.
    *   **Network Mapping:** Discovering the topology of a network and the devices connected to it.
    *   **Security Auditing:** Testing the security posture of a network or system.
*   **Key Concept:** A *port* is a virtual communication endpoint used by applications and services to send and receive data over a network.  Ports are identified by numbers ranging from 0 to 65535.
*   **Port Numbers:**
    *   **Well-Known Ports (0-1023):**  Assigned to common services like HTTP (port 80), SSH (port 22), FTP (port 21), and SMTP (port 25).  These are typically associated with system-level processes.
    *   **Registered Ports (1024-49151):** Assigned to specific applications or services by IANA (Internet Assigned Numbers Authority).
    *   **Dynamic/Private Ports (49152-65535):** Used for temporary connections and client-side applications.

## 2. TCP vs. UDP

*   **TCP (Transmission Control Protocol):**
    *   Connection-oriented protocol.
    *   Reliable: Guarantees data delivery and order.
    *   Uses a three-way handshake (SYN, SYN-ACK, ACK) to establish a connection before data transfer.
    *   Suited for applications that require reliable data transmission, such as web browsing, email, and file transfer.
*   **UDP (User Datagram Protocol):**
    *   Connectionless protocol.
    *   Unreliable: Does not guarantee data delivery or order.
    *   Does not use a handshake.
    *   Faster than TCP due to its simplicity.
    *   Suited for applications that can tolerate some data loss, such as video streaming, online gaming, and DNS lookups.
*   **Key Difference:** The primary difference is reliability. TCP guarantees data delivery, while UDP does not.

## 3. TCP Port Scanning Techniques

*   **TCP Connect Scan (-sT):**
    *   Completes the three-way handshake with the target port.
    *   Logs every connection made, making it easily detectable.
    *   Requires no special privileges (user level scan).
    *   **Process:**
        1.  Client sends a SYN (synchronize) packet to the target port.
        2.  If the port is open, the target responds with a SYN-ACK (synchronize-acknowledge) packet.
        3.  The client completes the handshake by sending an ACK (acknowledge) packet.
        4.  The client then sends an RST (reset) packet to close the connection.
    *   **Detection:**  Target system logs all connections.

*   **TCP SYN Scan (Stealth Scan) (-sS):**
    *   Also known as a "half-open" scan.
    *   Does not complete the three-way handshake.
    *   More stealthy than a TCP Connect Scan.
    *   Requires root/administrator privileges.
    *   **Process:**
        1.  Client sends a SYN packet to the target port.
        2.  If the port is open, the target responds with a SYN-ACK packet.
        3.  The client sends an RST packet to terminate the connection abruptly *before* the handshake is completed.
    *   **Detection:**  More difficult to detect as connections aren't fully established.

*   **TCP FIN Scan (-sF):**
    *   Sends a FIN (finish) packet to the target port.
    *   If the port is open, the target *should* ignore the FIN packet and send no response. (This is implementation dependent and not always true)
    *   If the port is closed, the target responds with an RST packet.
    *   Can bypass some firewalls and intrusion detection systems (IDS).
    *   **Process:**
        1.  Client sends a FIN packet.
        2.  Open Port: No response.
        3.  Closed Port: RST packet.
        4.  Filtered Port:  No response or ICMP error message.

*   **TCP NULL Scan (-sN):**
    *   Sends a TCP packet with no flags set (all flags are turned off).
    *   Similar to FIN scan in terms of response analysis.
    *   **Process:**
        1.  Client sends a NULL packet.
        2.  Open Port: No response.
        3.  Closed Port: RST packet.
        4.  Filtered Port:  No response or ICMP error message.

*   **TCP XMAS Scan (-sX):**
    *   Sends a TCP packet with the FIN, PSH, and URG flags set (like a "Christmas tree" of flags).
    *   Similar to FIN and NULL scans in terms of response analysis.
    *   **Process:**
        1.  Client sends an XMAS packet.
        2.  Open Port: No response.
        3.  Closed Port: RST packet.
        4.  Filtered Port:  No response or ICMP error message.
*   **TCP ACK Scan (-sA):**
    * Sends a TCP packet with only the ACK flag set.
    *  Used to map out firewall rule sets, as it will not determine if the port is open, only if the firewall allows the connection.
    * **Process:**
        1. Client sends ACK packet.
        2. Unfiltered: RST packet is returned.
        3. Filtered: No response.

## 4. UDP Port Scanning

*   **UDP Scan (-sU):**
    *   Sends a UDP packet to the target port.
    *   If the port is open, the application listening on that port *may* respond with a UDP packet.  However, many UDP services do not respond unless they receive a properly formatted request.
    *   If the port is closed, the target responds with an ICMP "port unreachable" error.
    *   Slower and less reliable than TCP scans.
    *   **Process:**
        1.  Client sends a UDP packet.
        2.  Open Port: *Possibly* a UDP response (service-specific)
        3.  Closed Port: ICMP "port unreachable" error.
        4.  Filtered Port: No response or ICMP error message.
*   **Challenge:** UDP scanning is generally slower and less accurate than TCP scanning. Many UDP ports may appear filtered because services do not provide a consistent response to a simple packet.

## 5. Port States

*   **Open:** The port is actively listening for connections.
*   **Closed:** The port is not listening for connections.  The host responds with an RST (TCP) or ICMP "port unreachable" (UDP) packet.
*   **Filtered:**  A firewall or other network device is blocking the connection attempt. The scanner receives no response, or an ICMP error message indicating the packet was dropped (e.g., ICMP type 3, code 13).  The scanner cannot reliably determine if the port is open or closed.
*   **Unfiltered:**  The port is accessible, but the scanner cannot determine whether it is open or closed.  This typically indicates that an ACK scan (-sA) was used and an RST response was received.  It means the port is *not* being filtered by a firewall.
*   **Open|Filtered:**  Nmap reports this when it cannot determine whether a port is open or filtered.  This can happen with UDP scans.
*   **Closed|Filtered:** Nmap reports this when it receives an ICMP message that an administrative filter is blocking access.

## 6. Common Port Scanning Tools (Nmap)

*   **Nmap (Network Mapper):** A powerful and versatile open-source port scanner.
*   **Features:**
    *   Supports a wide range of scan types (TCP Connect, SYN, UDP, etc.).
    *   Operating system detection.
    *   Service version detection.
    *   Scripting capabilities.
*   **Basic Nmap Commands:**
    *   `nmap <target>`: Basic TCP Connect Scan of common ports.
    *   `nmap -sS <target>`: TCP SYN Scan.
    *   `nmap -sU <target>`: UDP Scan.
    *   `nmap -p <port_list> <target>`: Scan specific ports (e.g., `nmap -p 21,22,80,443 <target>`).
    *   `nmap -p- <target>`: Scan all 65535 ports. (Be cautious about this as it can be very noisy and easily detected).
    *   `nmap -sV <target>`: Service version detection.
    *   `nmap -O <target>`: Operating System detection.
    *   `nmap -A <target>`: Aggressive scan (enables OS detection, version detection, script scanning, and traceroute).
*   **Example:**
    *   `nmap -sS -p 1-100 <target_ip>`:  Performs a TCP SYN scan on ports 1 through 100 of the specified target IP address.

## 7. Ethical Considerations and Legal Implications

*   **Legality:**  Port scanning without permission is generally illegal. It can be considered unauthorized access and may violate computer crime laws.
*   **Ethical Guidelines:**
    *   Obtain explicit permission before scanning any network or system you do not own.
    *   Clearly define the scope of the scan and the purpose for which it is being conducted.
    *   Minimize the impact of the scan on the target system and network.
    *   Handle sensitive information responsibly.
*   **Best Practices:** Always seek authorization before conducting any port scanning activities.

## 8. Risks and Mitigation

*   **Risks:**
    *   **Detection:**  Port scanning can be detected by firewalls, intrusion detection systems (IDS), and security information and event management (SIEM) systems.
    *   **Resource Consumption:** Aggressive or comprehensive port scans can consume significant network bandwidth and system resources.
    *   **False Positives:**  Firewalls and other network devices can sometimes generate false positives, leading to inaccurate scan results.
*   **Mitigation:**
    *   **Rate Limiting:**  Configure firewalls and IDS to limit the rate of incoming connection attempts.
    *   **Intrusion Detection:** Implement intrusion detection systems to detect and alert on suspicious port scanning activity.
    *   **Firewall Rules:**  Configure firewalls to block unsolicited inbound connections.
    *   **Honeypots:** Deploy honeypots to attract and detect attackers.
    *   **Regular Security Audits:** Conduct regular security audits to identify and address potential vulnerabilities.
*   **Key Concept:** Defense in Depth - Implement multiple layers of security controls to protect your network.

## Practice Questions & Exercises:

1.  **Question:** What is the main difference between TCP and UDP port scanning?
    *   **Answer:** TCP is connection-oriented and guarantees delivery, while UDP is connectionless and does not.

2.  **Question:** Which TCP scan type completes the three-way handshake?
    *   **Answer:** TCP Connect Scan.

3.  **Question:** If Nmap reports a port as "Filtered," what does this mean?
    *   **Answer:** A firewall or other network device is blocking the connection attempt, and Nmap cannot determine if the port is open or closed.

4.  **Exercise:** Use Nmap to perform a SYN scan on your own computer and identify any open ports.
    *   **Command:** `nmap -sS localhost` (or `127.0.0.1`)
    *   **Expected Result:**  You should see a list of open ports, such as port 22 (SSH) if SSH is running. You may need to use `sudo nmap -sS localhost` on some systems for SYN scan to work correctly.

5. **Question:** Why might UDP scans be less reliable than TCP scans?
    * **Answer:** UDP scans are less reliable because many UDP services do not provide a consistent response to a simple probe packet.  Also, the reliance on ICMP port unreachable messages can be unreliable in heavily filtered environments.

6.  **Exercise:**  Research the legal implications of port scanning in your jurisdiction.

## Important Points to Remember:

*   Always obtain permission before scanning any network or system.
*   Understand the different TCP and UDP scan types and their respective strengths and weaknesses.
*   Be aware of the potential risks associated with port scanning and take steps to mitigate them.
*   Use port scanning tools responsibly and ethically.
*   Port scanning is a valuable tool for network security professionals, but it should only be used for legitimate purposes.
*   Keep your port scanning tools updated to ensure you have access to the latest features and security updates.
