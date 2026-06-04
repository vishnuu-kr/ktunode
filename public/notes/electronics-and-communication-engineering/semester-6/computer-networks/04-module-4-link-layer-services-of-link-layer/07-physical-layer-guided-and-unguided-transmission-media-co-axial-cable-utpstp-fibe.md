---
title: "Physical Layer : Guided and unguided transmission media (Co-axial cable, UTP,STP, Fiber optic cable)"
subject: "COMPUTER NETWORKS"
module: "Module 4: Link Layer Services of link layer"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff05e"
status: "completed"
scrapedAt: "2026-05-23T18:00:17.214Z"
---
# Computer Networks: Module 4 - Link Layer Services

## Topic: Physical Layer: Guided and Unguided Transmission Media

**Course Outcomes Addressed:**

*   **CO1 (K2):** Summarize the principles and components of computer networks, switching, basic concepts of delay analysis and the layered network architecture.
*   **CO4 (K3):** Make use of different physical communication standards in computer networks.

**Learning Outcomes:**

*   Understand the role of the Physical Layer in computer networks.
*   Differentiate between guided and unguided transmission media.
*   Describe the characteristics, advantages, and disadvantages of coaxial cable.
*   Describe the characteristics, advantages, and disadvantages of Unshielded Twisted Pair (UTP) cable.
*   Describe the characteristics, advantages, and disadvantages of Shielded Twisted Pair (STP) cable.
*   Describe the characteristics, advantages, and disadvantages of fiber optic cable.
*   Compare and contrast different types of transmission media.

---

### 1. Introduction to the Physical Layer

The **Physical Layer** is the lowest layer in the OSI and TCP/IP models. Its primary responsibility is to transmit individual bits over a physical medium. It deals with the tangible aspects of networking, such as the hardware, cables, connectors, and signal encoding.

**Key Functions of the Physical Layer:**

*   **Bit Representation:** How bits are represented as electrical or optical signals.
*   **Data Rate:** The speed at which bits are transmitted (bits per second).
*   **Synchronization:** Ensuring the sender and receiver clocks are synchronized for accurate bit reception.
*   **Line Configuration:** How devices are connected to the medium (point-to-point, multipoint).
*   **Physical Topology:** The arrangement of devices and media (e.g., bus, star, ring, mesh).
*   **Transmission Mode:** The direction of data flow (simplex, half-duplex, full-duplex).

**Reference:** *Kurose & Ross, Chapter 1.4 - The Physical Layer* discusses the fundamental role of the Physical Layer in moving bits from one host to another.

---

### 2. Transmission Media

Transmission media are the physical pathways over which data signals travel. They can be broadly classified into two categories:

*   **Guided Media (Wired Media):** These media direct the electromagnetic waves along a physical path. The signals are confined within the physical boundaries of the medium.
*   **Unguided Media (Wireless Media):** These media use electromagnetic waves that propagate freely through the air, space, or water without physical confinement.

---

### 3. Guided Transmission Media

Guided media utilize a physical conductor to transmit data. The most common types are:

#### 3.1. Coaxial Cable

Coaxial cable consists of a central conductor surrounded by an insulating layer, a braided metal shield, and an outer insulating jacket.

**Structure:**

*   **Center Conductor:** Typically copper, carries the signal.
*   **Insulator:** Surrounds the center conductor.
*   **Braided Metal Shield:** Wrapped around the insulator, provides shielding against electromagnetic interference (EMI).
*   **Outer Jacket:** Protects the cable from physical damage.

**Types:**

*   **Thicknet (10Base5):** Larger diameter, more robust, supported longer distances.
*   **Thinnet (10Base2):** Smaller diameter, more flexible, easier to install.

**How it Works:**

The inner conductor carries the signal, and the outer shield acts as a ground, reducing interference. The shield's effectiveness depends on its construction and the cable type.

**Advantages:**

*   **Higher Bandwidth than Twisted Pair:** Can support higher data rates.
*   **Good Noise Immunity:** The shielding offers good protection against EMI.
*   **Longer Transmission Distances:** Compared to basic twisted pair.
*   **Cost-Effective:** Relatively inexpensive for the performance offered.

**Disadvantages:**

*   **More Difficult to Install:** Bulkier and less flexible than UTP.
*   **Susceptible to Interference if Shielding is Damaged:** The effectiveness of the shielding is crucial.
*   **Can be Expensive for Large Deployments:** Compared to UTP.
*   **Limited Flexibility:** Can be rigid.

**Applications:**

*   Cable TV distribution.
*   Early Ethernet networks (e.g., 10Base5, 10Base2).
*   Some high-speed data transmission systems.

**Reference:** *Forouzan, Chapter 2.3 - Twisted-Pair, Coaxial, and Optical-Fiber Cables* provides a detailed explanation of coaxial cable construction and characteristics.

---

#### 3.2. Twisted Pair Cable

Twisted pair cable consists of pairs of insulated copper wires twisted together. The twisting reduces crosstalk and electromagnetic interference.

**Structure:**

*   **Insulated Copper Wires:** Typically two wires twisted together.
*   **Twisting:** Each pair of wires is twisted. The number of twists per inch varies depending on the cable category.
*   **Outer Jacket:** Protects the wires.

**How it Works:**

Each pair of wires carries a signal. The twisting creates a cancellation effect: when one wire is exposed to EMI, the other wire in the pair is also exposed but with the opposite polarity. This differential signaling reduces noise.

**Types:**

*   **Unshielded Twisted Pair (UTP):** The most common type. It relies solely on the twisting of wires for noise reduction.
    *   **Categories (e.g., Cat 3, Cat 5, Cat 5e, Cat 6, Cat 6a, Cat 7, Cat 8):** Each category specifies different performance characteristics, including bandwidth and data rate capabilities, and construction (e.g., number of twists per inch).
        *   **Cat 5e:** Supports up to 1 Gbps.
        *   **Cat 6:** Supports up to 10 Gbps over shorter distances (e.g., 55 meters).
        *   **Cat 6a:** Supports up to 10 Gbps over longer distances (e.g., 100 meters).
*   **Shielded Twisted Pair (STP):** Includes a metallic shield around each pair of wires or around all pairs, providing additional protection against EMI.

**Advantages of UTP:**

*   **Most Common and Widely Used:** Standard for Ethernet networks.
*   **Low Cost:** Relatively inexpensive to manufacture and install.
*   **Flexible and Easy to Install:** Easier to bend and route than coaxial cable.
*   **Supports Various Data Rates:** Depending on the category.

**Disadvantages of UTP:**

*   **Susceptible to EMI:** Especially in noisy environments, without proper shielding.
*   **Shorter Transmission Distances:** Compared to coaxial or fiber optic cable (typically limited to 100 meters for Ethernet).
*   **Limited Bandwidth:** Compared to fiber optic cable.

**Advantages of STP:**

*   **Better Noise Immunity than UTP:** Due to the additional shielding.
*   **Can Support Higher Data Rates:** Over longer distances than UTP in some cases.

**Disadvantages of STP:**

*   **More Expensive than UTP:** The shielding adds to the cost.
*   **More Difficult to Install:** Less flexible and requires proper grounding.
*   **Bulkier:** The shielding makes it thicker.

**Applications:**

*   Local Area Networks (LANs), especially Ethernet.
*   Telephone wiring.
*   ISDN.

**Reference:** *Kurose & Ross, Chapter 1.4 - The Physical Layer* briefly mentions twisted pair as a common physical medium. *Forouzan, Chapter 2.3* provides detailed coverage of UTP and STP.

---

#### 3.3. Fiber Optic Cable

Fiber optic cable transmits data as pulses of light through thin strands of glass or plastic.

**Structure:**

*   **Core:** The central part of the fiber, made of glass or plastic, where light travels.
*   **Cladding:** A layer surrounding the core with a lower refractive index, which causes light to reflect back into the core (total internal reflection).
*   **Buffer Coating:** A protective layer.
*   **Strength Members:** Such as Kevlar, to add tensile strength.
*   **Outer Jacket:** For external protection.

**How it Works:**

Light pulses are sent down the fiber. The principle of **total internal reflection** keeps the light confined within the core, even when the cable bends.

**Types:**

*   **Single-Mode Fiber (SMF):**
    *   **Core Diameter:** Very small (around 9 µm).
    *   **Light Source:** Laser.
    *   **Propagation:** Only one path (mode) of light can travel through the core.
    *   **Characteristics:** Supports very high bandwidth and very long distances (tens to hundreds of kilometers) with minimal signal loss.
*   **Multi-Mode Fiber (MMF):**
    *   **Core Diameter:** Larger (50 µm or 62.5 µm).
    *   **Light Source:** LED or laser.
    *   **Propagation:** Multiple paths (modes) of light can travel through the core.
    *   **Characteristics:** Supports lower bandwidth and shorter distances (up to a few kilometers) due to modal dispersion (different light paths take different times to arrive).

**Advantages:**

*   **Extremely High Bandwidth:** Can support very high data rates (Tbps).
*   **Very Long Transmission Distances:** Minimal signal attenuation.
*   **Immunity to Electromagnetic Interference (EMI):** Light signals are not affected by electrical noise.
*   **Security:** Difficult to tap without detection.
*   **Lightweight and Thin:** Compared to copper cables.

**Disadvantages:**

*   **Higher Cost:** Both the cable itself and the associated equipment (transceivers, connectors) are generally more expensive.
*   **More Difficult to Install and Terminate:** Requires specialized tools and expertise.
*   **Fragile:** Can be damaged if bent too sharply or subjected to excessive force.
*   **Requires Different Connectors:** Than copper cables (e.g., SC, LC, ST).

**Applications:**

*   Backbone networks (Internet, long-haul telecommunications).
*   Metropolitan Area Networks (MANs).
*   High-speed Local Area Networks (LANs).
*   Cable TV.

**Reference:** *Kurose & Ross, Chapter 1.4 - The Physical Layer* discusses fiber optic cable as a key physical medium. *Forouzan, Chapter 2.3* provides an in-depth analysis of fiber optic cable construction and principles.

---

### 4. Unguided Transmission Media (Wireless)

Unguided media transmit electromagnetic waves through the atmosphere or space. They are used for wireless communication.

**Types:**

*   **Radio Waves:** Frequencies from 3 kHz to 1 GHz. Used for AM/FM radio, cellular phones, Wi-Fi. Omnidirectional propagation.
*   **Microwaves:** Frequencies from 1 GHz to 300 GHz. Used for satellite communication, point-to-point terrestrial microwave links. Directional propagation.
*   **Infrared Waves:** Frequencies above 300 GHz (wavelengths from 1 mm to 1 meter). Used for short-range communication, TV remote controls, IrDA ports. Line-of-sight propagation.

**Advantages:**

*   **Mobility:** Allows devices to move freely.
*   **No Cabling Required:** Reduces installation costs and complexity.
*   **Can Reach Difficult Terrain:** Where laying cables is impossible or impractical.

**Disadvantages:**

*   **Susceptible to Interference:** From other wireless devices and environmental factors.
*   **Lower Bandwidth and Data Rates:** Generally, compared to guided media, especially over longer distances.
*   **Security Concerns:** Signals can be intercepted more easily.
*   **Propagation Limitations:** Affected by obstacles, distance, and atmospheric conditions.

**Reference:** *Forouzan, Chapter 2.4 - Wireless Transmission Media* covers radio wave, microwave, and infrared transmission.

---

### 5. Comparison of Transmission Media

| Feature             | Coaxial Cable                      | UTP (e.g., Cat 6)                  | STP                                | Fiber Optic Cable (SMF)            | Fiber Optic Cable (MMF)            | Unguided Media (e.g., Wi-Fi)      |
| :------------------ | :--------------------------------- | :--------------------------------- | :--------------------------------- | :--------------------------------- | :--------------------------------- | :-------------------------------- |
| **Medium**          | Copper conductor, shield           | Copper wires                       | Copper wires, shielding            | Glass or plastic strands           | Glass or plastic strands           | Air, space, water                 |
| **Signal Type**     | Electrical                         | Electrical                         | Electrical                         | Light                              | Light                              | Electromagnetic waves             |
| **Bandwidth**       | High                               | Moderate to High                   | High                               | Very High                          | High                               | Variable, generally lower         |
| **Data Rate**       | Up to 10 Mbps (early Ethernet)     | Up to 10 Gbps                      | Up to 10 Gbps                      | Tbps                               | Gbps                               | Mbps to Gbps                      |
| **Transmission Distance** | ~500 meters (Thicknet)             | Up to 100 meters                   | Up to 100 meters                   | Tens to hundreds of kilometers     | Up to a few kilometers             | Meters to kilometers              |
| **EMI Susceptibility** | Good                               | Moderate                           | Very Good                          | None                               | None                               | High                              |
| **Cost**            | Moderate                           | Low                                | Moderate                           | High                               | Moderate to High                   | Varies                            |
| **Installation**    | Moderate                           | Easy                               | Moderate                           | Difficult                          | Moderate                           | N/A (no cables)                   |
| **Primary Use**     | Cable TV, early Ethernet           | LANs (Ethernet)                    | LANs (in noisy environments)       | Backbone networks, long-haul       | LANs, data centers                 | Wireless LANs, cellular, satellite |

---

### 6. Key Concepts and Definitions

*   **Electromagnetic Interference (EMI):** Unwanted electromagnetic energy that can disrupt the operation of electronic devices.
*   **Crosstalk:** The unwanted transfer of signals between adjacent circuits or channels.
*   **Bandwidth:** The range of frequencies available for transmission in a communication channel. Higher bandwidth allows for higher data rates.
*   **Attenuation:** The gradual loss of signal strength over distance.
*   **Refractive Index:** A measure of how much light bends when it enters a material. Used in fiber optics to achieve total internal reflection.
*   **Total Internal Reflection:** The phenomenon where light is completely reflected back into a medium when it strikes the boundary with another medium at an angle greater than the critical angle.
*   **Modal Dispersion:** In multi-mode fiber, the spreading of a light pulse due to different light paths (modes) taking different amounts of time to travel through the fiber.

---

### 7. Important Points to Remember

*   The Physical Layer is responsible for the actual transmission of bits.
*   Guided media provide a physical path for signals, while unguided media use the atmosphere.
*   Twisted pair (UTP) is the most common medium for LANs due to its cost and ease of installation, but it is susceptible to EMI.
*   Fiber optic cable offers the highest bandwidth and longest transmission distances but is more expensive and harder to install.
*   The choice of transmission medium depends on factors like required bandwidth, distance, cost, and environmental conditions.
*   Understanding different cable categories (e.g., Cat 5e, Cat 6) is crucial for network performance.

---

### 8. Practice Questions

1.  **Which physical layer medium is most resistant to electromagnetic interference (EMI) and why?**
    *   **Answer:** Fiber optic cable. This is because it transmits data using light pulses, not electrical signals, making it immune to EMI and crosstalk.
2.  **What is the primary mechanism that reduces crosstalk in twisted pair cables?**
    *   **Answer:** The twisting of the wire pairs. This twisting causes the electromagnetic fields produced by each wire in the pair to cancel each other out, reducing the impact of external noise and interference.
3.  **Compare and contrast Single-Mode Fiber (SMF) and Multi-Mode Fiber (MMF) in terms of core diameter, light source, bandwidth, and typical applications.**
    *   **Answer:**
        *   **SMF:** Small core diameter (9 µm), uses lasers, supports very high bandwidth, used for long-haul and backbone networks.
        *   **MMF:** Larger core diameter (50 or 62.5 µm), uses LEDs or lasers, supports high bandwidth over shorter distances, used in LANs and data centers.
4.  **You are designing a new office network that requires high speeds (10 Gbps) and is located in an area with significant electrical equipment that might cause interference. Which cable type would you recommend and why?**
    *   **Answer:** For 10 Gbps speeds and high interference environments, Shielded Twisted Pair (STP) or Fiber Optic Cable would be suitable.
        *   **STP:** Provides better protection against EMI than UTP. Cat 6a or higher would be needed for 10 Gbps.
        *   **Fiber Optic Cable:** Offers immunity to EMI and can easily support 10 Gbps and much higher speeds over distances. It's the more robust, albeit more expensive, choice in highly noisy environments.
5.  **What are the main limitations of Unshielded Twisted Pair (UTP) cable?**
    *   **Answer:** The main limitations are its susceptibility to EMI and crosstalk, and its limited transmission distance (typically 100 meters) for high-speed data.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References

*   **Kurose, J. F., & Ross, K. W. (2017). *Computer Networking: A Top-Down Approach Featuring the Internet* (Sixth Edition). Pearson.**
*   **Forouzan, B. A. (2008). *Data Communications and Networking* (Fourth Edition). Tata McGraw-Hill.**
*   **Tanenbaum, A. S., & Wetherall, D. J. (Latest Edition). *Computer Networks*. Pearson.**
*   **Peterson, L. L., & Davie, B. S. (Latest Edition). *Computer Networks – A Systems Approach*. Morgan Kauffman.**