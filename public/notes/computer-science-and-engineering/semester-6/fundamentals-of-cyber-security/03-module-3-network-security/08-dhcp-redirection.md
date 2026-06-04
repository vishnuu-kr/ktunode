---
title: "DHCP Redirection"
subject: "FUNDAMENTALS OF CYBER SECURITY"
module: "Module 3: Network Security:"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be43"
status: "completed"
scrapedAt: "2026-05-20T16:54:39.551Z"
---
# FUNDAMENTALS OF CYBER SECURITY: Module 3 - Network Security: DHCP Redirection

## Introduction

This module explores the concept of DHCP Redirection, a type of network attack that leverages vulnerabilities in the Dynamic Host Configuration Protocol (DHCP) to redirect victims to malicious servers. Understanding DHCP Redirection is crucial for implementing robust network security measures.

## Learning Outcomes

*   Understand the purpose and function of DHCP.
*   Explain what DHCP redirection is and how it works.
*   Identify the potential risks and impacts of DHCP redirection attacks.
*   Describe common tools and techniques used in DHCP redirection attacks.
*   Implement effective security measures to prevent and mitigate DHCP redirection attacks.

## 1. Understanding DHCP

### 1.1 What is DHCP?

*   **Definition:** Dynamic Host Configuration Protocol.  A network protocol used on IP networks where a DHCP server automatically assigns an IP address and other network configuration parameters (subnet mask, default gateway, DNS server addresses) to each device on the network so they can communicate with other IP networks.

*   **Purpose:** To automate the assignment of IP addresses and network configuration, reducing the administrative burden on network administrators and preventing IP address conflicts.

*   **Key Benefits:**
    *   **Automatic IP Address Assignment:** Simplifies network administration.
    *   **IP Address Re-use:** Enables efficient use of IP addresses.
    *   **Centralized Management:**  Network configuration is managed from a central server.
    *   **Reduced Configuration Errors:** Minimizes human error in manual configuration.

### 1.2 DHCP Message Exchange (DORA Process)

*   DHCP uses a four-step process often referred to as **DORA:**
    *   **Discover:**  The client broadcasts a DHCPDISCOVER message to find available DHCP servers.
    *   **Offer:**  A DHCP server responds with a DHCPOFFER message, offering an IP address and other configuration parameters.
    *   **Request:**  The client broadcasts a DHCPREQUEST message, accepting the offered configuration.  If multiple DHCP servers offered, the client indicates which offer it's accepting.
    *   **Acknowledge:**  The DHCP server acknowledges the client's request with a DHCPACK message, confirming the assigned IP address and configuration.  If there's a problem (e.g., the IP is now taken), the server will send a DHCPNAK.

*   **Key DHCP Message Types:**
    *   `DHCPDISCOVER`:  Client's initial request.
    *   `DHCPOFFER`:  Server's offer of an IP address.
    *   `DHCPREQUEST`:  Client's acceptance of the offered IP address or renewal request.
    *   `DHCPACK`:  Server's acknowledgement of the IP address assignment.
    *   `DHCPNAK`:  Server's rejection of the request (e.g., IP conflict).
    *   `DHCPRELEASE`:  Client releases the IP address.
    *   `DHCPINFORM`:  Client requests additional configuration information without needing an IP address (it already has one).

## 2. DHCP Redirection Explained

### 2.1 What is DHCP Redirection?

*   **Definition:**  A type of man-in-the-middle attack where a rogue DHCP server intercepts or manipulates DHCP messages to redirect a client to a malicious server (e.g., a fake DNS server, a malicious gateway, or a phishing website).  The attacker effectively spoofs a legitimate DHCP server.

*   **How it Works:**
    1.  The attacker sets up a rogue DHCP server on the network.
    2.  This rogue server offers IP addresses and malicious configuration parameters to clients, often before the legitimate DHCP server can respond.
    3.  Clients, unaware of the rogue server's malicious intent, accept the offered configuration.
    4.  The clients are now redirected to the attacker's controlled servers, enabling various attacks.

### 2.2 Attack Vectors and Scenarios

*   **DNS Redirection:**
    *   The rogue DHCP server provides the IP address of a malicious DNS server.
    *   The client resolves domain names through this malicious DNS server, which can then redirect users to phishing websites or malicious content.
    *   **Example:** A user tries to access `www.example.com`. The malicious DNS server resolves this to the IP address of a fake website that looks identical to the real `www.example.com`.  The user enters their login credentials, which are captured by the attacker.

*   **Gateway Redirection:**
    *   The rogue DHCP server provides the IP address of a malicious gateway.
    *   All network traffic from the client passes through this gateway, allowing the attacker to intercept and monitor data, or even inject malicious code into web pages.
    *   **Example:** A user browses to their online banking website. The attacker, acting as the malicious gateway, intercepts the traffic and steals the user's credentials or injects malicious JavaScript to redirect funds to the attacker's account.

*   **IP Address Starvation:**
    *   The rogue DHCP server rapidly leases all available IP addresses from the legitimate DHCP server, preventing legitimate clients from obtaining valid IP addresses.
    *   This can cause a denial-of-service (DoS) attack, disrupting network connectivity for legitimate users.
    *   **Example:** Imagine a network with 20 available IP addresses. The rogue DHCP server floods the legitimate server with requests, claiming all 20 addresses. Now, when a new employee connects their laptop, they can't get an IP address and can't access the network.

### 2.3 Why DHCP is Vulnerable

*   **Lack of Authentication:** DHCP doesn't inherently authenticate the DHCP server. Clients generally accept the first offer they receive.  This makes it easy for rogue servers to impersonate legitimate ones.
*   **Broadcast Nature:** DHCP relies on broadcasts, which can be intercepted by anyone on the network.

## 3. Risks and Impacts

*   **Data Theft:** Attackers can intercept sensitive data, such as usernames, passwords, credit card details, and confidential documents.
*   **Malware Distribution:** Users can be redirected to websites that distribute malware, infecting their devices.
*   **Phishing Attacks:** Attackers can redirect users to fake login pages, stealing their credentials.
*   **Man-in-the-Middle Attacks:**  Attackers can intercept and modify network traffic, compromising the confidentiality and integrity of data.
*   **Denial-of-Service (DoS):** Attackers can exhaust IP address pools, preventing legitimate users from accessing the network.
*   **Loss of Trust:**  Compromised networks can lead to a loss of trust from customers and partners.
*   **Financial Losses:**  Data breaches and service disruptions can result in significant financial losses.

## 4. Tools and Techniques Used in DHCP Redirection Attacks

*   **DHCPing:**  A command-line tool used to discover DHCP servers and send DHCP requests. Attackers can use it to flood DHCP servers with requests, leading to IP address starvation.
    *   `dhcping -s <rogue_dhcp_server_ip> -i <interface>`
*   **Yersinia:** A network attack tool that can be used to perform various network attacks, including DHCP spoofing and redirection.
    *   Yersinia has a modular structure that supports numerous attack types, making it highly versatile.
*   **Metasploit Framework:** A powerful penetration testing framework that includes modules for DHCP spoofing and other network attacks.
*   **Scapy:** A Python library for packet manipulation. Attackers can use Scapy to craft custom DHCP packets for redirection attacks.
*   **Rogue DHCP Servers (e.g., Dnsmasq, dnschef):**  Simple to set up and configure, allowing attackers to quickly deploy rogue DHCP servers on a network.

## 5. Prevention and Mitigation Strategies

*   **DHCP Snooping:**
    *   **Definition:** A security feature that filters DHCP messages on a switch port basis.  It distinguishes between trusted and untrusted DHCP ports.
    *   **How it Works:** Only DHCP messages from trusted ports (connected to legitimate DHCP servers) are forwarded. Messages from untrusted ports (connected to clients or potential attackers) are dropped.
    *   **Implementation:** Configure DHCP snooping on network switches to designate trusted ports.

*   **Port Security:**
    *   **Definition:** Limits the number of MAC addresses allowed on a port.
    *   **How it Works:** By limiting the number of MAC addresses, port security can prevent attackers from connecting unauthorized devices to the network and launching DHCP redirection attacks.
    *   **Implementation:** Enable port security on switch ports and configure the maximum number of MAC addresses allowed per port.

*   **RAID (Rogue AP Identification and Detection):**
    *   Though geared toward wireless networks, RAID can help detect unauthorized devices (including rogue DHCP servers) by monitoring network traffic and identifying unusual activity.

*   **DHCP Server Authorization:**
    *   In Active Directory environments, authorize DHCP servers to prevent unauthorized servers from issuing IP addresses.  This is a critical step in securing a Windows-based network.

*   **Network Segmentation:**
    *   Divide the network into smaller, isolated segments to limit the impact of a successful DHCP redirection attack. If one segment is compromised, the attacker will not be able to easily access other segments.

*   **Regular Security Audits and Penetration Testing:**
    *   Periodically assess the network for vulnerabilities and misconfigurations that could be exploited in a DHCP redirection attack.
    *   Penetration testing simulates real-world attacks to identify weaknesses in the network security posture.

*   **Intrusion Detection/Prevention Systems (IDS/IPS):**
    *   Monitor network traffic for suspicious DHCP activity and automatically block or alert on malicious attempts.

*   **Client-Side Security Measures:**
    *   Implement host-based firewalls on client devices to block unauthorized DHCP servers.
    *   Use DHCP client validation tools to verify the authenticity of DHCP servers.

*   **DHCP Relay Agents with Option 82:**
    *   DHCP Relay agents forward DHCP requests to DHCP servers in different subnets. Option 82 adds information about the client's location (e.g., switch port) to the DHCP request.  This information can be used for security purposes, such as identifying the location of a rogue DHCP server.

## Important Points to Remember

*   DHCP is a critical network service, but it's inherently vulnerable to attacks if not properly secured.
*   DHCP redirection can have severe consequences, including data theft, malware distribution, and denial-of-service attacks.
*   Implementing a multi-layered security approach is essential for preventing and mitigating DHCP redirection attacks.
*   Stay informed about the latest DHCP vulnerabilities and security best practices.

## Practice Questions and Exercises

**1. What is the primary function of DHCP?**

*   **Answer:** To automatically assign IP addresses and other network configuration parameters to devices on a network.

**2. Explain how DHCP redirection works in simple terms.**

*   **Answer:** A fake DHCP server tricks devices into using the attacker's chosen configuration settings (like a fake DNS server or gateway) instead of the real, secure ones.

**3. Give an example of a potential impact of a successful DHCP redirection attack.**

*   **Answer:** Users could be redirected to a phishing website where their login credentials are stolen.

**4. Which security feature helps prevent rogue DHCP servers by filtering DHCP messages on switch ports?**

*   **Answer:** DHCP snooping.

**5. What is the DORA process in DHCP communication, and what does each step represent?**

*   **Answer:** DORA stands for Discover, Offer, Request, and Acknowledge.
    *   Discover: Client broadcasts to find DHCP servers.
    *   Offer: DHCP server proposes an IP address.
    *   Request: Client accepts the offered IP.
    *   Acknowledge: Server confirms the IP assignment.

**6. Briefly describe how you could use port security to mitigate DHCP redirection.**

*   **Answer:**  By limiting the number of MAC addresses allowed on a switch port, you can prevent an attacker from connecting a rogue DHCP server to that port.

**7. What is the purpose of a DHCP relay agent?**

*   **Answer:** To forward DHCP requests between different subnets.

**8. Research and list three command-line tools (besides those mentioned above) that could be used in a DHCP redirection attack or for network analysis related to DHCP.**

*   **Answer:**
    *   `Wireshark`:  A network protocol analyzer that can capture and analyze DHCP traffic.
    *   `Ettercap`: A suite for man-in-the-middle attacks. Can be used for DHCP spoofing.
    *   `Netdiscover`:  An active/passive address reconnaissance tool primarily developed to gain info about wireless networks using ARP requests.  Could be adapted for DHCP-related reconnaissance.

**9. (Advanced)  Explain how Option 82, used in conjunction with DHCP Relay Agents, can enhance network security.**

*   **Answer:** Option 82 allows a DHCP relay agent to insert information about the client's location (e.g., switch port, VLAN) into the DHCP request. This information can be used by the DHCP server for several security purposes:
    *   **IP Address Allocation Policies:**  The DHCP server can use the client's location to assign IP addresses based on pre-defined policies. For example, clients connected to a specific VLAN might be assigned IP addresses from a particular subnet.
    *   **Access Control:** The DHCP server can verify the client's location against a database of authorized locations. If the client is not connected to an authorized location, the DHCP server can refuse to assign an IP address, preventing unauthorized access to the network.
    *   **Rogue DHCP Server Detection:** The network administrator can monitor DHCP traffic for unexpected Option 82 information. If a DHCP offer contains Option 82 information from an unauthorized relay agent, it could indicate the presence of a rogue DHCP server.
    *   **Logging and Auditing:**  Option 82 information can be logged and used for auditing purposes, providing a record of where each client was connected when it received its IP address.

This enhances security by providing a more granular level of control and visibility over the DHCP process.
