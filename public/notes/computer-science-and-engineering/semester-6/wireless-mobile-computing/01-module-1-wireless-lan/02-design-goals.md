---
title: "Design goals"
subject: "WIRELESS & MOBILE COMPUTING"
module: "Module 1: Wireless LAN "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb6d"
status: "completed"
scrapedAt: "2026-05-20T16:57:45.367Z"
---
# WIRELESS & MOBILE COMPUTING - Module 1: Wireless LAN - Design Goals

## Introduction

This module focuses on Wireless LANs (WLANs) and, specifically, this section covers the design goals that influence their architecture and functionality. Understanding these goals is crucial for appreciating the trade-offs made in WLAN design and for effectively deploying and managing wireless networks.

## Learning Outcomes

By the end of this section, you should be able to:

*   Identify and explain the primary design goals of WLANs.
*   Describe how these design goals often conflict with each other.
*   Analyze the impact of different design choices on WLAN performance.
*   Understand the trade-offs between cost, complexity, and performance in WLAN design.
*   Apply these design goals to evaluate and compare different WLAN technologies.

## Key Concepts and Definitions

*   **Wireless LAN (WLAN):** A local area network that uses radio waves as its communication medium rather than physical cables.
*   **Throughput:**  The actual rate of data transfer in a network, often measured in bits per second (bps).
*   **Coverage Area:** The physical area over which a WLAN provides connectivity.
*   **Interference:**  Disruptive signals that corrupt data transmission in a wireless network.
*   **Security:**  Measures taken to protect data transmitted over a wireless network from unauthorized access.
*   **Power Consumption:** The amount of electrical power used by the wireless devices, especially critical for mobile devices.
*   **Mobility Support:** The ability of a WLAN to seamlessly support devices as they move within the network's coverage area.
*   **Cost:** The overall expense associated with deploying and maintaining a WLAN, including hardware, software, and management.
*   **Complexity:** The level of difficulty involved in configuring, managing, and troubleshooting a WLAN.
*   **Scalability:** The ability of a WLAN to accommodate an increasing number of users and devices without significant performance degradation.

## Primary Design Goals of WLANs

Here's a breakdown of the key design goals for WLANs:

*   **High Throughput/Data Rate:**
    *   **Definition:**  Achieving the maximum possible data transfer rate for users.  This is a primary goal as users expect fast download and upload speeds.
    *   **Examples:** Streaming high-definition video, transferring large files, online gaming.
    *   **Considerations:**  Modulation schemes, channel bandwidth, multiple antennas (MIMO), interference management.
    *   **Trade-offs:**  Higher throughput often requires more complex technology, increased power consumption, and potentially reduced coverage.
*   **Extended Coverage Area:**
    *   **Definition:** Providing wireless connectivity over a wide physical area.
    *   **Examples:** Covering an entire office building, a campus, or a warehouse.
    *   **Considerations:**  Transmit power, antenna gain, frequency band, obstacles.
    *   **Trade-offs:** Increasing coverage often leads to reduced throughput, increased interference, and higher infrastructure costs (more access points).
*   **Robustness/Reliability:**
    *   **Definition:** Ensuring consistent and dependable network performance, even in the presence of interference and noise.
    *   **Examples:** Maintaining a stable connection for voice calls, critical data transmission.
    *   **Considerations:** Error correction techniques, interference mitigation, redundancy.
    *   **Trade-offs:** Improved reliability can increase overhead, reducing overall throughput.
*   **Security:**
    *   **Definition:** Protecting the network and data from unauthorized access and eavesdropping.
    *   **Examples:** Preventing unauthorized access to the network, protecting sensitive data transmitted over the air.
    *   **Considerations:**  Encryption protocols (WPA3, WPA2), authentication mechanisms (802.1X), firewalls.
    *   **Trade-offs:** Stronger security measures can add complexity and potentially reduce throughput due to encryption overhead.
*   **Mobility Support:**
    *   **Definition:**  Allowing users to move seamlessly within the WLAN coverage area without losing connectivity.
    *   **Examples:**  A user moving around a building while maintaining a video call.
    *   **Considerations:** Handover mechanisms, roaming protocols.
    *   **Trade-offs:** Smooth handover requires sophisticated algorithms and signaling, potentially adding complexity.
*   **Power Efficiency:**
    *   **Definition:** Minimizing power consumption for mobile devices to extend battery life.
    *   **Examples:** Laptop, smartphone.
    *   **Considerations:** Power-saving modes, efficient data transmission protocols.
    *   **Trade-offs:**  Power saving modes often involve reducing activity, which can impact responsiveness and throughput.
*   **Cost Effectiveness:**
    *   **Definition:** Minimizing the overall cost of deploying and maintaining the WLAN.
    *   **Examples:** Selecting affordable access points, minimizing maintenance requirements.
    *   **Considerations:**  Hardware costs, software licensing, installation costs, management costs.
    *   **Trade-offs:** Lower cost often comes with reduced performance, limited features, and less robust security.
*   **Simplicity/Ease of Management:**
    *   **Definition:** Making the WLAN easy to configure, manage, and troubleshoot.
    *   **Examples:** User-friendly interfaces, automated configuration tools.
    *   **Considerations:** Centralized management systems, simplified configuration protocols.
    *   **Trade-offs:** Simpler systems may lack advanced features or customization options.
*   **Scalability:**
    *   **Definition:** The ability of the WLAN to easily accommodate more users and devices without significant performance degradation.
    *   **Examples:** Adding more access points to a network as the number of users increases.
    *   **Considerations:** Network architecture, resource allocation, interference management.
    *   **Trade-offs:** Scalable designs can be more complex and may require more initial investment.
*   **Coexistence:**
    *   **Definition:** The ability of the WLAN to operate effectively in environments with other wireless technologies (e.g., Bluetooth, microwave ovens).
    *   **Examples:**  Avoiding interference with other devices operating in the 2.4 GHz band.
    *   **Considerations:**  Channel selection, interference avoidance techniques, adaptive modulation.
    *   **Trade-offs:** Coexistence mechanisms can reduce available bandwidth and limit performance.

## Conflicts Between Design Goals

Many of the design goals conflict with each other. For example:

*   **High Throughput vs. Coverage:** Increasing the transmit power to extend coverage can lead to increased interference, which reduces throughput.
*   **Security vs. Throughput:** Strong encryption algorithms increase security but can also add overhead, reducing throughput.
*   **Power Efficiency vs. Throughput:**  Power saving modes, which reduce radio activity, can lower throughput.
*   **Cost vs. Performance:** Cheaper equipment may offer lower performance and less robust security features.

## Impact of Design Choices on WLAN Performance

The specific design choices made for a WLAN significantly impact its performance. Here are some examples:

*   **Frequency Band:** The 2.4 GHz band offers wider coverage but is more susceptible to interference than the 5 GHz band, which provides higher throughput but shorter range.
*   **Modulation Scheme:**  More complex modulation schemes offer higher data rates but require better signal quality and are more susceptible to noise.
*   **Antenna Configuration (MIMO):** Multiple Input Multiple Output (MIMO) technology improves throughput and reliability but increases complexity and cost.
*   **Channel Selection:**  Selecting less congested channels minimizes interference and improves performance.
*   **Security Protocol:**  Choosing a strong encryption protocol like WPA3 ensures better security but may slightly reduce throughput compared to weaker protocols.

## Trade-offs Between Cost, Complexity, and Performance

Designing a WLAN involves making trade-offs between cost, complexity, and performance.

*   **High-Performance WLAN:**  Typically involves higher costs (more expensive hardware, professional installation) and more complexity (advanced features, sophisticated management tools).
*   **Low-Cost WLAN:**  Often means sacrificing performance (lower throughput, limited coverage) and security (weaker encryption).
*   **Simple WLAN:**  Easy to deploy and manage but may lack advanced features and scalability.

## Applying Design Goals to Evaluate WLAN Technologies

When evaluating different WLAN technologies (e.g., 802.11ac vs. 802.11ax), consider how well they address the design goals:

*   **Throughput:**  What is the maximum data rate offered by the technology?
*   **Coverage:** What is the typical range of the technology?
*   **Security:** What security protocols are supported?
*   **Power Efficiency:** How does the technology impact battery life?
*   **Cost:** What is the cost of the hardware and software?
*   **Complexity:** How easy is it to deploy and manage the technology?
*   **Scalability:** How well does the technology scale to support a large number of users?

By analyzing these factors, you can determine which technology best meets the specific requirements of your application.

## Important Points to Remember

*   WLAN design involves balancing competing goals.
*   There is no one-size-fits-all solution for WLAN design.
*   The best design depends on the specific requirements of the application.
*   Understanding the trade-offs involved is crucial for making informed decisions.

## Practice Questions and Exercises

**Question 1:**  Explain why maximizing throughput in a WLAN may conflict with maximizing coverage area.

**Answer:**  Increasing transmit power to extend coverage can lead to increased interference, especially from neighboring WLANs or other devices operating on the same frequency band. This increased interference reduces the signal-to-noise ratio (SNR) and ultimately limits the achievable data rate (throughput). Higher frequencies, which provide higher throughput, have shorter ranges.

**Question 2:** How does choosing a strong security protocol like WPA3 affect the design goals of a WLAN?

**Answer:**  WPA3 prioritizes security, which can lead to a slight reduction in throughput due to the overhead of the encryption algorithms. It also adds some complexity as it requires compatible hardware and proper configuration. However, the enhanced security is often considered worth the trade-off, especially for networks handling sensitive data.

**Question 3:**  What design considerations are most important for a WLAN deployed in a large warehouse environment?

**Answer:**  In a warehouse, key design considerations include:

*   **Coverage:**  Ensure adequate coverage throughout the entire warehouse, including areas with obstacles (shelves, equipment).
*   **Robustness:**  Minimize the impact of interference from industrial equipment (e.g., forklifts, motors).
*   **Scalability:**  Accommodate a potentially large number of mobile devices (scanners, tablets).
*   **Cost:**  Keep costs down while still meeting the necessary performance requirements.
*   **Reliability:** Ensure a reliable connection for inventory tracking and operational efficiency.

**Question 4:**  A small coffee shop wants to implement a WLAN for its customers. What design goals should they prioritize, and what trade-offs might they need to consider?

**Answer:**  For a coffee shop WLAN, the priorities would be:

*   **Cost-effectiveness:**  Minimize the cost of the equipment and installation.
*   **Ease of use:** Simple setup and management for non-technical staff.
*   **Security:** Provide basic security to protect the network from unauthorized access.
*   **Reasonable throughput:**  Adequate bandwidth for web browsing and email.
*   **Coverage:**  Coverage within the seating area.

Trade-offs might include:

*   Choosing a lower-cost access point that provides sufficient, but not maximum, throughput.
*   Using a less complex security protocol (e.g., WPA2-PSK) to simplify configuration.
*   Sacrificing some advanced features to reduce complexity.
