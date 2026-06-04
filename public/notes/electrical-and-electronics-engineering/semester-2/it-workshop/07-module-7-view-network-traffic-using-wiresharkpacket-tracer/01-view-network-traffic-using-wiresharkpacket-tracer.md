---
title: "View network traffic using Wireshark/Packet tracer"
subject: "IT WORKSHOP"
module: "Module 7: View network traffic using Wireshark/Packet tracer"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f97eb"
status: "completed"
scrapedAt: "2026-05-23T16:07:46.373Z"
---
# IT WORKSHOP - Module 7: Viewing Network Traffic with Wireshark/Packet Tracer

Welcome, everyone! Today, we're diving into a really exciting part of our IT Workshop journey: understanding what actually *happens* on a network. Think of it like this: when you send an email, visit a website, or stream a video, all that information travels in little packets across wires and through the air. But how do we actually *see* these packets? How do we know what's being sent, where it's going, and what it looks like? That's where our stars of the show come in: Wireshark and Packet Tracer.

This module is all about becoming network detectives, and it directly ties into some of our core course objectives. Specifically, we'll be strengthening **CO3: Experiment with the data network communication scenarios using Wireshark**, gaining a hands-on understanding of how data moves. While we won't be physically wiring up hardware like in CO1, understanding network traffic is fundamental to how hardware and software interact, which is a core aspect of that outcome as well. You'll also see how this knowledge can underpin the networking aspects of website development we'll touch upon later.

## What is Network Traffic Anyway?

Before we get our hands dirty with the tools, let's get a clear picture of what we're looking at. Network traffic is essentially the **flow of data packets** between devices on a network. Imagine a busy highway. Cars are like data packets, and the highway is your network (could be your home Wi-Fi, your office network, or the internet). Each car carries passengers and cargo – this is your data: emails, web pages, video streams, everything!

When you send a request to a website, for example, your computer creates a packet (or many packets) containing your request. This packet travels through routers, switches, and cables until it reaches the web server. The server then sends back the website's data in more packets, which travel back to your computer. It's a constant back-and-forth, a symphony of data.

To understand this symphony, we need tools that can "listen" to the highway and dissect each passing car. That's precisely what Wireshark and Packet Tracer allow us to do.

## Wireshark: The Ultimate Network Packet Analyzer

Wireshark is our primary tool for deep-diving into network traffic. It's a free and open-source packet analyzer, meaning it captures and displays the data traveling over a network in detail. Think of Wireshark as a super-powered microscope for your network traffic. It lets you see not just the cars (packets), but also what's inside each car, who's driving it, where it came from, and where it's going.

**How Wireshark Works:**

Wireshark captures packets by placing a network interface card (NIC) in what's called "promiscuous mode." Normally, a NIC only processes packets specifically addressed to it. In promiscuous mode, however, it captures *all* packets that pass by on the network segment, regardless of their intended destination. This is crucial for analyzing network behavior comprehensively.

Let's consider an analogy from Schneider and Gersting's "Invitation to Computer Science." They often explain concepts through analogies. Think of your network card as a postal worker. Normally, they only deliver mail addressed to the houses on their specific route. But if you put them in "promiscuous mode," they'd start looking at *all* the mail passing through the sorting office, even mail for other routes! Wireshark essentially puts our network card into this special mode.

**Key Concepts in Wireshark:**

*   **Packets:** The fundamental unit of data transmitted over a network. Each packet contains header information (like source and destination IP addresses, port numbers, protocol type) and the actual data payload.
*   **Protocols:** The set of rules that govern how data is transmitted and received. You'll see common protocols like HTTP (for web pages), DNS (for translating domain names to IP addresses), TCP (for reliable data transfer), UDP (for faster, less reliable transfer), and many more. Understanding these protocols is key to interpreting the captured data.
*   **IP Address:** A unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. It's like the street address of a house.
*   **Port Number:** A number used to identify a specific process or service on a networked computer. For example, web servers typically listen on port 80 (for HTTP) or port 443 (for HTTPS). It's like the apartment number within a building.
*   **Capture Filters:** These filters are applied *before* packets are saved. They help reduce the amount of data captured by only saving packets that meet specific criteria (e.g., only capture traffic from a specific IP address). This is useful when you know exactly what you're looking for and want to avoid overwhelming your system.
*   **Display Filters:** These filters are applied *after* packets have been captured. They allow you to sift through the already captured data and display only the packets you're interested in. This is incredibly powerful for analysis. For instance, you can filter to see only HTTP traffic or traffic going to a specific website.

**Exam Tip:** The distinction between capture filters and display filters is important. Capture filters reduce the size of your capture file, saving disk space and improving capture performance. Display filters help you analyze the data you’ve already collected.

## Cisco Packet Tracer: A Network Simulator

While Wireshark lets us *observe* live traffic, Cisco Packet Tracer is a powerful network simulator that allows us to *build* and *test* network scenarios. It's like a virtual laboratory where you can create your own networks, configure devices like routers and switches, and then see how data flows through them. This is incredibly valuable for understanding networking concepts in a controlled environment, which directly helps us achieve **CO3: Experiment with the data network communication scenarios using Wireshark** by providing a sandbox to create those scenarios.

Think of it as building a miniature city with roads, houses, and cars, and then controlling the traffic flow. You can set up different topologies (the layout of your network), simulate various protocols, and even introduce problems to see how your network handles them.

**Key Features and Concepts in Packet Tracer:**

*   **Network Devices:** You can drag and drop virtual routers, switches, hubs, servers, PCs, laptops, and even wireless devices to build your network topology.
*   **Cabling:** Packet Tracer allows you to connect these devices using different types of cables (e.g., copper straight-through, crossover, fiber optic). The type of cable used can affect connectivity, just like in the real world.
*   **Device Configuration:** You can click on each device and configure its settings, such as IP addresses, default gateways, routing protocols, and even firewall rules. This is where you'll gain practical experience with how network devices are set up.
*   **Simulated Network Traffic:** Packet Tracer simulates the transmission of data packets between devices. You can watch these packets move through the network in real-time, see which path they take, and even click on individual packets to inspect their contents – very much like a simplified Wireshark view within the simulator.
*   **Event List:** This panel shows a chronological log of network events, such as a packet being sent, a device booting up, or an interface going down.

**Relatable Example:** Imagine you're setting up a small office network. You have a main internet connection, a router to distribute that connection, a switch to connect multiple computers, and several computers. In Packet Tracer, you can physically place these devices (represented by icons), connect them with virtual cables, assign IP addresses to each computer and the router's interface, and then test if one computer can "ping" another. You'll see the packets traveling from one PC to the switch, then to the router, and finally to the destination PC. This hands-on experience is invaluable.

**Connecting Packet Tracer and Wireshark:**

The beauty is that you can often integrate Packet Tracer with Wireshark. Packet Tracer has a feature that allows you to "mirror" traffic from a specific port on a switch or router to your computer, where Wireshark can then capture and analyze it. This gives you the best of both worlds: the ability to build and control a network scenario in Packet Tracer and then use Wireshark to get an incredibly detailed look at the traffic generated by that scenario.

This integrated approach directly supports **CO3**, allowing you to not just theorize about network communication but to actively experiment with it.

## Viewing Network Traffic: A Practical Approach

Let's think about *why* we'd want to view network traffic. It's not just about satisfying curiosity; it's a fundamental skill for troubleshooting, security analysis, and understanding network performance.

**Common Use Cases:**

1.  **Troubleshooting Connectivity Issues:** If a website isn't loading or you can't connect to a server, Wireshark can reveal if your requests are even leaving your computer, if they're reaching their destination, or if there are errors in the communication.
2.  **Security Analysis:** Network administrators use Wireshark to detect suspicious activity, identify malware communication, or ensure data is being transmitted securely. For instance, if you see a lot of unexpected traffic going to an unknown server, it might indicate a security breach.
3.  **Network Performance Monitoring:** You can use Wireshark to identify bottlenecks, understand which applications are consuming the most bandwidth, or analyze the efficiency of network protocols.
4.  **Learning and Education:** As we're doing now, it's an excellent tool for understanding how protocols like TCP/IP, HTTP, and DNS actually work under the hood. You can see the handshake process for establishing a TCP connection or how a DNS query resolves a website name.

**Using Wireshark – A Gentle Introduction:**

When you first open Wireshark, you'll see a list of your computer's network interfaces (like your Ethernet adapter or Wi-Fi adapter).

*   **Starting a Capture:** You'll typically select the interface that's currently connected to the network you want to monitor and click the "Start capturing packets" button (often a blue shark fin icon).
*   **The Packet List Pane:** As packets flow, they appear in the top pane. Each line represents a single packet. The color-coding is helpful:
    *   Light blue lines often represent HTTP traffic.
    *   Yellow lines might indicate malformed packets or protocol errors.
    *   White lines can be various other types of traffic.
*   **The Packet Details Pane:** When you click on a packet in the list, the middle pane shows the packet's contents broken down by protocol layers (e.g., Ethernet header, IP header, TCP header, HTTP data). This is where you'll see the source and destination IP addresses, port numbers, and the actual data payload.
*   **The Packet Bytes Pane:** The bottom pane shows the raw hexadecimal and ASCII data of the selected packet. This is the most granular view.

**Example:** Let's say you want to see what happens when you type a website address into your browser.

1.  Start Wireshark and begin capturing traffic on your active network interface.
2.  Open a web browser and go to a website, say `www.example.com`.
3.  In Wireshark, you'll likely see a flurry of packets. You can use a **display filter** like `dns` to see only the DNS requests. You'll see your computer asking for the IP address of `www.example.com`.
4.  Once that's resolved, you'll see packets related to establishing a TCP connection (the TCP handshake – SYN, SYN-ACK, ACK) with the IP address you just learned.
5.  Finally, you'll see HTTP GET requests being sent and HTTP responses coming back with the website data.

This process directly illustrates network communication, fulfilling **CO3**. You're actively experimenting with a data network communication scenario.

## Putting it Together: Connecting to Course Outcomes

Let's explicitly tie this back to our Course Outcomes:

*   **CO3: Experiment with the data network communication scenarios using Wireshark.**
    *   **How we've addressed it:** By learning to use Wireshark and Packet Tracer, we're gaining the tools to observe and simulate network activity. Every time you capture traffic while browsing, or set up a simple network in Packet Tracer and watch packets flow, you are directly experimenting with data network communication. You’re seeing protocols in action, understanding how devices interact, and troubleshooting – all key aspects of this outcome. We’ve discussed how Packet Tracer allows you to build scenarios, and Wireshark allows you to dissect the traffic from those scenarios.

*   **CO1: Experiment with the fundamental hardware components of a computer and how to interface them with software systems.**
    *   **How we've addressed it:** While this module focuses on software tools, the network traffic we're viewing is fundamentally carried by hardware – network interface cards, cables, routers, switches. Wireshark and Packet Tracer help us understand how the software (protocols, applications) dictates the behavior and flow of data across this hardware. You can see the effects of hardware configurations (or misconfigurations) on the network traffic. For example, a faulty cable might lead to many retransmissions, which you'd see in Wireshark.

*   **CO4: Develop basic websites using HTML, CSS & JavaScript and manage the versions.**
    *   **How we've addressed it:** When you develop a website, you're creating content that will be transmitted over a network using protocols like HTTP. Understanding how this HTTP traffic works, how requests are made, and how data is received is crucial for optimizing website performance and for basic troubleshooting. For instance, seeing the size of assets downloaded (images, CSS files, JavaScript files) in Wireshark can inform you about how to make your website load faster.

## Key Takeaways and Exam Preparation

*   **Wireshark vs. Packet Tracer:** Remember, Wireshark is for *observing* live traffic, while Packet Tracer is for *simulating* and *building* network environments.
*   **Filter Power:** Capture filters and display filters in Wireshark are critical for efficient analysis. Know the difference!
*   **Protocol Layers:** Understanding the layered model (like the TCP/IP model) is essential for interpreting Wireshark's packet details. You'll see data organized by these layers.
*   **Common Protocols:** Be familiar with the purpose of common protocols like HTTP, HTTPS, DNS, TCP, UDP, and ICMP. Exams often test your understanding of what these protocols do and how they appear in network traffic.
*   **Troubleshooting:** Think about how you would use Wireshark to diagnose common network problems. This is a very practical skill and frequently tested.

Remember, mastering these tools takes practice. Don't be afraid to experiment with Packet Tracer to build different network setups and then use Wireshark to see what's happening. It's through this hands-on exploration that the concepts truly solidify.

---

## Sample Questions and Answers

**Question 1 (Conceptual):**
What is the primary difference between a capture filter and a display filter in Wireshark?

**Answer:**
The primary difference lies in *when* they are applied and *what* they achieve.
*   A **capture filter** is applied *before* packets are saved to disk. Its purpose is to reduce the amount of data captured, thus saving disk space and improving capture performance. You specify what you *want* to capture.
*   A **display filter** is applied *after* packets have been captured. Its purpose is to sift through the already saved data and show only the packets that match specific criteria. You specify what you *want to see* from the captured data.

**Question 2 (Exam-Oriented):**
You are troubleshooting a website loading issue. You suspect the problem might be with how your computer is resolving the website's domain name. Which type of Wireshark filter would be most effective to start with, and what filter expression would you likely use?

**Answer:**
To start troubleshooting the domain name resolution, you'd want to capture all traffic related to the Domain Name System (DNS) to see if your computer is successfully requesting and receiving IP addresses.

1.  **Filter Type:** You would likely start with a **display filter** to sift through existing traffic, or a **capture filter** if you're starting a new capture specifically for this purpose. A display filter is often more practical if you've already captured some general network traffic.
2.  **Filter Expression:** The most common filter expression to see DNS traffic is `dns`.

    *   *Reasoning:* The `dns` filter in Wireshark targets packets using the DNS protocol, which is responsible for translating human-readable domain names (like `www.example.com`) into machine-readable IP addresses. By filtering for `dns`, you can observe the requests sent by your computer and the responses received from DNS servers. If there are errors or delays here, it would explain why the website isn't loading correctly.

**Question 3 (Application/Scenario):**
You are using Packet Tracer to simulate a small office network. You've connected a PC to a switch, and the switch to a router. You want to verify that the PC can reach the router by sending a "ping" command. Describe the steps you would take in Packet Tracer and what you would expect to see.

**Answer:**
**Steps in Packet Tracer:**

1.  **Topology Setup:** Ensure you have a PC and a router connected via a switch using appropriate cabling (e.g., copper straight-through from PC to switch, copper straight-through from switch to router).
2.  **IP Configuration:**
    *   Click on the PC, go to the "Desktop" tab, then "IP Configuration." Assign a static IP address to the PC (e.g., `192.168.1.10`) and a subnet mask (e.g., `255.255.255.0`). Set the Default Gateway to the router's interface IP address (e.g., `192.168.1.1`).
    *   Click on the router, go to the "CLI" or "Config" tab. Configure the interface connected to the switch with an IP address (e.g., `192.168.1.1`) and the same subnet mask (e.g., `255.255.255.0`). Ensure the interface is enabled (`no shutdown`).
3.  **Pinging:**
    *   On the PC, go to the "Desktop" tab, then "Command Prompt."
    *   Type `ping 192.168.1.1` (the router's IP address) and press Enter.

**Expected Observation:**

*   **Packet Tracer Simulation:** You will see a small data packet (likely an ICMP Echo Request) originate from the PC, travel across the cable to the switch. The switch will then forward this packet to the router's interface. You'll see status indicators on the packet change as it moves.
*   **Command Prompt Output:** The command prompt on the PC will show a series of replies from `192.168.1.1`, indicating that the ping was successful. Each successful ping corresponds to an ICMP Echo Reply packet received from the router. If the ping fails, you'd see "Request timed out" or similar messages, indicating a problem in connectivity or configuration.
*   **Wireshark (if connected):** If you were capturing traffic on the PC's interface with Wireshark (by mirroring traffic from the switch to the PC), you would see the ICMP Echo Request packet leaving the PC, and later, an ICMP Echo Reply packet arriving back at the PC. You would also see the ARP requests that happen before the ping to resolve the router's MAC address.

This exercise directly demonstrates **CO3** by experimenting with a data network communication scenario, observing packet flow, and verifying connectivity, which is a fundamental aspect of networking.
