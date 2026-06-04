---
title: "Infrastructure Vs Ad-hoc mode"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 1: Wireless LAN "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb6f"
status: "completed"
scrapedAt: "2026-05-20T16:57:46.785Z"
---
## Wireless & Mobile Computing: Module 1 - Wireless LAN: Infrastructure vs. Ad-hoc Mode

These notes cover the key concepts of Infrastructure and Ad-hoc modes in Wireless LANs.

**Learning Outcomes Covered:**

*   Understand the fundamental differences between Infrastructure and Ad-hoc wireless network modes.
*   Identify the advantages and disadvantages of each mode.
*   Describe the components and setup involved in each mode.
*   Explain scenarios where each mode is most appropriate.

**1. Key Concepts and Definitions:**

*   **Wireless LAN (WLAN):** A wireless computer network that links two or more devices using a wireless distribution method (often using radio waves) within a limited area such as a home, school, computer laboratory, or office building.

*   **Infrastructure Mode:** A WLAN mode that relies on a central access point (AP) to act as a bridge between the wireless network and a wired network.  All communication passes through the access point. Think of it as a wireless hub.

*   **Ad-hoc Mode (also known as Independent Basic Service Set - IBSS):** A WLAN mode where devices communicate directly with each other without the need for a central access point.  It's a direct peer-to-peer wireless connection.

**2. Infrastructure Mode:**

*   **Definition:**  Wireless devices connect to a central Access Point (AP), which is connected to the wired network. The AP acts as a bridge between the wireless and wired networks.

*   **Components:**
    *   **Access Point (AP):** A device that allows wireless devices to connect to a wired network using Wi-Fi, or related standards.  It acts as a central hub.
    *   **Wireless Clients (Stations):** Devices with wireless network interface cards (NICs) that connect to the AP.
    *   **Wired Network:** The existing wired infrastructure providing internet access and/or network resources.
    *   **SSID (Service Set Identifier):** The name of the wireless network.  Clients must know the SSID to connect.

*   **Setup:**
    1.  An Access Point is connected to the wired network.
    2.  The Access Point is configured with an SSID and security settings (e.g., WPA2-PSK).
    3.  Wireless clients are configured to connect to the specified SSID and use the correct security credentials.

*   **Advantages:**
    *   **Wider Range:** The AP extends the range of the network compared to direct device-to-device communication.
    *   **Centralized Security:** Security policies are enforced at the AP, making it easier to manage and secure the network.
    *   **Internet Access:** APs typically provide access to the internet through the wired network.
    *   **Scalability:** Easier to add more devices to the network as the AP manages the connections.
    *   **Network Management:**  Easier to manage the network through the AP's administration interface.

*   **Disadvantages:**
    *   **Single Point of Failure:** If the AP fails, the entire wireless network is down.
    *   **Reliance on Infrastructure:** Requires an existing wired network and a working Access Point.
    *   **Higher Cost:** Requires purchasing and configuring an Access Point.
    *   **Increased Latency:** Communication has to travel through the AP adding a small amount of latency.

*   **Use Cases:**
    *   Home networks
    *   Office networks
    *   Public Wi-Fi hotspots (e.g., coffee shops, airports)
    *   Enterprise networks

*   **Example:** Imagine a coffee shop. Customers connect their laptops and phones to the shop's Wi-Fi network. This Wi-Fi network is based on infrastructure mode, where the coffee shop's router (Access Point) manages all the connections and provides internet access.
**3. Ad-hoc Mode:**

*   **Definition:** Wireless devices communicate directly with each other without the need for an Access Point.

*   **Components:**
    *   **Wireless Clients (Stations):** Devices with wireless network interface cards (NICs) that form a direct connection.  These clients act as both senders and receivers.

*   **Setup:**
    1.  One device creates an Ad-hoc network (specifying an SSID and optionally security settings).
    2.  Other devices search for the SSID and connect directly to the creator device.

*   **Advantages:**
    *   **Simplicity:** Easy to set up without the need for dedicated hardware.
    *   **Cost-Effective:** No need to purchase an Access Point.
    *   **Direct Communication:** Faster communication between devices as there is no central AP.
    *   **Availability during AP failure:** If the AP fails in an infrastructure network, the devices can still communicate among themselves in an ad-hoc fashion

*   **Disadvantages:**
    *   **Limited Range:** Range is limited to the direct communication distance between devices.
    *   **No Internet Access (Typically):** Devices cannot easily access the internet unless one device acts as a bridge to another network.
    *   **Security Concerns:** Can be less secure than infrastructure mode unless proper security measures are taken.  Ad-hoc mode often relies on older, less secure encryption protocols.
    *   **Scalability Issues:** Difficult to manage and scale as the number of devices increases.  Each device needs to know about every other device in the network.
    *   **Power Consumption:** Devices may consume more power as they need to actively discover and maintain connections with other devices.
    *   **Lack of Central Management:** No central point to manage the network, making troubleshooting and configuration difficult.

*   **Use Cases:**
    *   Sharing files directly between two computers.
    *   Multiplayer gaming on a local network (e.g., at a LAN party).
    *   Temporary network setup in a location without existing infrastructure.
    *   Device to device communication during an emergency where there's no internet

*   **Example:** Two friends want to quickly share some photos between their laptops. They can create an ad-hoc network directly between their laptops, allowing them to transfer files without needing a router or internet connection.
**4. Key Differences Summarized:**

| Feature          | Infrastructure Mode                      | Ad-hoc Mode                                |
| ---------------- | --------------------------------------- | ------------------------------------------- |
| Access Point     | Required                                | Not Required                               |
| Internet Access   | Typically Available                     | Typically Not Available                      |
| Range            | Wider                                  | Limited                                     |
| Security         | Centralized, Easier to Secure          | Decentralized, More Difficult to Secure   |
| Scalability      | High                                    | Low                                         |
| Complexity       | More Complex to Set Up Initially        | Simpler to Set Up                              |
| Cost             | Higher (Requires AP)                   | Lower (No AP Needed)                        |
| Network Management| Easier, Centralized                      | Difficult, Decentralized                      |

**5. Choosing the Right Mode:**

*   **Choose Infrastructure Mode when:**
    *   You need internet access.
    *   You have a large number of devices.
    *   You need a secure and manageable network.
    *   You have an existing wired network.
    *   You need a wider network range.

*   **Choose Ad-hoc Mode when:**
    *   You need a quick and simple temporary network.
    *   You don't have access to an Access Point.
    *   You need direct communication between a small number of devices.
    *   Internet access is not required.

**6. Important Points to Remember:**

*   Infrastructure mode is the most common type of WLAN, providing a robust and scalable network solution.
*   Ad-hoc mode is useful for quick and temporary connections, but it is not suitable for large or permanent networks.
*   Security is a crucial consideration in both modes. Always configure appropriate security settings (e.g., WPA2/3) to protect your wireless network.
*   The choice between Infrastructure and Ad-hoc mode depends on the specific requirements of the network.

**7. Practice Questions and Exercises:**

1.  **What is the primary difference between Infrastructure and Ad-hoc modes in a WLAN?**

    *   *Answer:* Infrastructure mode uses a central access point (AP) while Ad-hoc mode does not.

2.  **List two advantages of using Infrastructure mode over Ad-hoc mode.**

    *   *Answer:*  Wider range, easier to manage security, internet access.

3.  **What is the main disadvantage of relying on Infrastructure mode for a wireless network?**

    *   *Answer:*  Single point of failure (the AP).

4.  **Provide a scenario where using Ad-hoc mode would be more appropriate than using Infrastructure mode.**

    *   *Answer:*  Sharing files directly between two laptops without an available wireless router.

5.  **True or False: Ad-hoc networks are generally more secure than Infrastructure networks.**

    *   *Answer:* False. Ad-hoc networks are generally *less* secure.

6.  **What does SSID stand for?**

    *   *Answer:* Service Set Identifier

7.  **If you need to provide wireless internet access to a large group of people in a public area, which mode should you use? Why?**

    *   *Answer:* Infrastructure mode. It offers better scalability, range, and centralized security management, which are crucial for public Wi-Fi hotspots.

8.  **Explain the role of an Access Point (AP) in Infrastructure mode.**

    *   *Answer:* An AP acts as a central hub, connecting wireless devices to the wired network and providing internet access.

This detailed set of notes should provide a comprehensive understanding of the Infrastructure vs. Ad-hoc modes in Wireless LANs. Remember to review and practice to solidify your knowledge!
