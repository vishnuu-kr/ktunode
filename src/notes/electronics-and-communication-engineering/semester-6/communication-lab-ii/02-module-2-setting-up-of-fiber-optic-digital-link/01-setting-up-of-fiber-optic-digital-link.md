---
title: "Setting up of Fiber optic Digital link."
subject: "COMMUNICATION LAB II"
module: "Module 2: Setting up of Fiber optic Digital link."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff0b9"
status: "completed"
scrapedAt: "2026-05-23T17:59:40.780Z"
---
# COMMUNICATION LAB II: Module 2 - Setting up of Fiber Optic Digital Link

---

## Module Overview

This module focuses on the practical aspects of setting up a fiber optic digital link. We will explore the fundamental components, their functionalities, and the process of connecting them to establish a working communication system. Understanding the principles behind fiber optic communication, including signal transmission, losses, and potential distortions, is crucial for successful implementation and troubleshooting.

---

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand the basic principles of a fiber optic digital link.
*   Identify and describe the function of key components in a fiber optic digital link.
*   Perform the physical setup and connection of a fiber optic digital link.
*   Test and verify the operation of a fiber optic digital link.
*   Explain common issues and troubleshooting techniques for fiber optic links.

---

## 2.1 Introduction to Fiber Optic Digital Links

A fiber optic digital link transmits digital data through light pulses guided by optical fibers. This method offers significant advantages over traditional copper-based communication, including higher bandwidth, lower signal attenuation, immunity to electromagnetic interference (EMI), and enhanced security.

**Key Concepts:**

*   **Digital Data:** Information represented in binary form (0s and 1s).
*   **Light Pulses:** Used to represent digital bits. A pulse signifies a '1', and the absence of a pulse signifies a '0'.
*   **Optical Fiber:** A thin strand of glass or plastic that guides light.
*   **Bandwidth:** The range of frequencies available for transmitting data. Optical fibers offer significantly higher bandwidth than copper cables.
*   **Attenuation:** The loss of signal strength over distance. Optical fibers have much lower attenuation than copper.
*   **Electromagnetic Interference (EMI):** Interference caused by electromagnetic fields. Optical fibers are immune to EMI.

**Textbook References:**

*   **Optical Fiber Communication by Gred Keiser (5th Edition):** Chapters 1 and 2 provide a foundational understanding of optical fiber principles, transmission media, and the basics of optical communication systems.

---

## 2.2 Components of a Fiber Optic Digital Link

A typical fiber optic digital link consists of the following essential components:

### 2.2.1 Optical Transmitter (Light Source)

The optical transmitter converts an electrical digital signal into an optical signal.

**Key Concepts:**

*   **Electrical Input:** Receives the digital data from a source (e.g., a computer, network interface card).
*   **Light Emission:** Generates light pulses corresponding to the binary data.
*   **Types of Light Sources:**
    *   **Light Emitting Diodes (LEDs):** Less expensive, broader spectral width, lower output power, used for shorter distances and lower data rates.
    *   **Laser Diodes (LDs):** More expensive, narrower spectral width, higher output power, used for longer distances and higher data rates.
*   **Modulation:** The process of encoding the digital data onto the light signal. Common methods include On-Off Keying (OOK), where the light is turned on for a '1' and off for a '0'.

**Example:**

A typical digital transmitter might take a serial data stream like `10110` and convert it into light pulses where a pulse represents '1' and no pulse represents '0'.

**Textbook References:**

*   **Optical Fiber Communication by Gred Keiser (5th Edition):** Chapter 3 discusses optical sources, including LEDs and laser diodes, and their characteristics.
*   **Microwave Devices and Circuits by Samuel Y. Liao (3rd Edition):** While primarily focused on microwave devices, understanding semiconductor physics (relevant to LEDs and lasers) is beneficial. Chapters related to semiconductor devices might offer some insight.

### 2.2.2 Optical Fiber Cable

The optical fiber cable acts as the transmission medium, guiding the light pulses from the transmitter to the receiver.

**Key Concepts:**

*   **Structure of an Optical Fiber:**
    *   **Core:** The central part of the fiber where light propagates.
    *   **Cladding:** A layer surrounding the core with a lower refractive index, causing total internal reflection.
    *   **Coating (Buffer):** Protects the fiber from physical damage and moisture.
    *   **Jacket:** The outer protective layer of the cable.
*   **Types of Optical Fibers:**
    *   **Step-Index Fiber:** The refractive index changes abruptly at the core-cladding boundary.
        *   **Multimode Step-Index:** Larger core diameter, allows multiple light modes to propagate, leading to modal dispersion. Suitable for shorter distances.
        *   **Singlemode Step-Index:** Very small core diameter, allows only one light mode to propagate, minimizing modal dispersion. Suitable for long distances.
    *   **Graded-Index Fiber:** The refractive index gradually decreases from the center of the core to the cladding. This helps to reduce modal dispersion in multimode fibers.
*   **Total Internal Reflection (TIR):** The principle by which light is guided within the fiber. When light strikes the core-cladding interface at an angle greater than the critical angle, it is reflected back into the core.
*   **Numerical Aperture (NA):** A measure of the light-gathering ability of the fiber. A higher NA allows more light to be coupled into the fiber.
*   **Acceptance Angle:** The maximum angle at which light can enter the fiber and still be guided by TIR.

**Example:**

Imagine light rays entering a fiber. In multimode fiber, some rays travel directly, while others bounce off the cladding walls multiple times. In graded-index fiber, the rays are bent back towards the center, reducing the travel time differences between different rays.

**Textbook References:**

*   **Optical Fiber Communication by Gred Keiser (5th Edition):** Chapter 2 provides an in-depth explanation of optical fiber structures, types, principles of light propagation (TIR), and fiber characteristics like NA.
*   **Microwave Devices and Circuits by Samuel Y. Liao (3rd Edition):** While not the primary focus, Liao's book might touch upon wave propagation in dielectric waveguides, which shares some similarities with light propagation in optical fibers.

### 2.2.3 Optical Connectors and Splices

These are used to join optical fibers or connect fibers to devices.

**Key Concepts:**

*   **Connectors:** Removable devices that allow for quick connection and disconnection of fiber optic cables. Examples include SC, LC, ST, FC connectors.
*   **Splices:** Permanent or semi-permanent joints between two optical fibers.
    *   **Fusion Splicing:** Uses an electric arc to melt and fuse the ends of the fibers together. Offers low loss and high mechanical strength.
    *   **Mechanical Splicing:** Uses a mechanical alignment mechanism to join fibers. Simpler and quicker but can have higher loss than fusion splicing.
*   **Loss at Connectors/Splices:** Imperfect alignment of fiber cores, air gaps, and surface imperfections can cause signal loss.

**Example:**

You would use an SC connector to plug a fiber optic patch cord into a network switch or a fiber optic transceiver. Fusion splicing would be used to permanently join two long lengths of fiber cable in an underground installation.

**Textbook References:**

*   **Optical Fiber Communication by Gred Keiser (5th Edition):** Chapter 5 discusses fiber optic connectors and splices, detailing their types, performance, and associated losses.

### 2.2.4 Optical Receiver

The optical receiver converts the optical signal back into an electrical digital signal.

**Key Concepts:**

*   **Optical Input:** Receives light pulses from the optical fiber.
*   **Photodetector:** A semiconductor device that converts light energy into electrical energy.
    *   **PIN Photodiodes:** Common for moderate to high speeds, good linearity.
    *   **Avalanche Photodiodes (APDs):** Provide internal gain, suitable for detecting weak optical signals at high speeds, but are more complex and require higher bias voltages.
*   **Signal Amplification:** The weak electrical signal from the photodetector is amplified.
*   **Signal Conditioning:** The amplified signal is processed to restore its original digital form (e.g., reshaping pulses).
*   **Decision Circuit:** Determines whether the received pulse represents a '1' or a '0'.

**Example:**

The photodetector in the receiver senses the incoming light pulses. If there's a pulse, it generates a small electrical current. This current is amplified and then used by a comparator to decide if it's a "high" (1) or "low" (0) signal.

**Textbook References:**

*   **Optical Fiber Communication by Gred Keiser (5th Edition):** Chapter 4 covers optical receivers, including photodetector types, their characteristics, and receiver sensitivity.

---

## 2.3 Setting up the Fiber Optic Digital Link

The process involves connecting the components in a sequential manner to create a functional communication path.

**Steps:**

1.  **Prepare the Fiber Optic Cables:**
    *   Ensure the ends of the fiber optic cables are clean.
    *   If using connectors, ensure they are properly terminated according to the manufacturer's instructions. This often involves stripping the fiber coating, cleaving the fiber end, and attaching the connector.
    *   If splicing, prepare the fiber ends for splicing using appropriate tools (strippers, cleavers).

2.  **Connect the Optical Transmitter:**
    *   Connect the output port of the optical transmitter to one end of the fiber optic cable using an appropriate connector.
    *   Ensure the transmitter is powered on and configured with the correct digital input signal.

3.  **Connect the Optical Receiver:**
    *   Connect the other end of the fiber optic cable to the input port of the optical receiver using an appropriate connector.
    *   Ensure the receiver is powered on and ready to process the incoming optical signal.

4.  **Establish Power and Data Connections:**
    *   Connect the necessary power supplies to both the transmitter and receiver.
    *   Connect the electrical data input to the transmitter and the electrical data output from the receiver to the destination device.

5.  **Verification and Testing:**
    *   Once all connections are made, power up the system.
    *   Observe the status indicators on the transmitter and receiver.
    *   Use an optical power meter to measure the optical power levels at the transmitter output and receiver input to check for signal strength.
    *   If possible, use a bit error rate tester (BERT) to assess the quality of the digital transmission.

**Important Points to Remember:**

*   **Cleanliness:** Optical fiber connectors and fiber ends are extremely sensitive to dirt and contamination. Always use lint-free wipes and approved cleaning solutions.
*   **Proper Handling:** Avoid bending the fiber optic cable beyond its minimum bend radius, as this can cause signal loss or damage the fiber.
*   **Connector Alignment:** Ensure connectors are properly seated and latched to maintain good optical contact.
*   **Polarity:** For some connectors and transceivers, correct polarity (e.g., Tx to Rx) is crucial.

**Textbook References:**

*   **Optical Fiber Communication by Gred Keiser (5th Edition):** Chapter 5 on connectors and splices will be relevant to the physical connection process. Practical setup guides are often found in laboratory manuals associated with such courses.

---

## 2.4 Signal Degradation Factors in Fiber Optic Links

While optical fibers offer excellent transmission characteristics, several factors can degrade the signal quality.

**Key Concepts:**

*   **Attenuation (Loss):**
    *   **Absorption:** Loss due to the material of the fiber absorbing light energy.
    *   **Scattering:** Loss due to imperfections in the fiber material or its structure, causing light to scatter in different directions.
    *   **Bending Losses:**
        *   **Macrobending:** Loss caused by large-scale bends in the fiber.
        *   **Microbending:** Loss caused by small, microscopic bends or distortions in the fiber, often due to external pressure.
    *   **Connection/Splice Losses:** As discussed earlier, misalignment and imperfections at joints cause loss.
*   **Dispersion:** The spreading of optical pulses as they travel through the fiber, which can lead to intersymbol interference (ISI).
    *   **Modal Dispersion:** Occurs in multimode fibers due to different path lengths taken by different modes of light. Graded-index fibers minimize this.
    *   **Chromatic Dispersion:** Occurs because different wavelengths (colors) of light travel at slightly different speeds in the fiber material. This is more significant in high-speed, long-distance links.
    *   **Polarization Mode Dispersion (PMD):** Occurs in single-mode fibers due to slight asymmetries in the fiber, causing different polarization states of light to travel at different speeds.
*   **Nonlinear Effects:** At very high optical power levels, interactions between light and the fiber material can occur, leading to signal distortion.

**Course Outcome Alignment:**

*   **CO2 (Knowledge Level: K2):** Describe the principles of fiber-optic communications and the different kinds of losses, signal distortion and other signal degradation factors. This section directly addresses this outcome by detailing attenuation and dispersion.

**Textbook References:**

*   **Optical Fiber Communication by Gred Keiser (5th Edition):** Chapters 2 and 5 provide detailed explanations of attenuation mechanisms, bending losses, and various types of dispersion (modal, chromatic).

---

## 2.5 Troubleshooting and Testing

Identifying and resolving issues in a fiber optic link is crucial for reliable communication.

**Common Problems:**

*   **No Signal:**
    *   Check power to transmitter and receiver.
    *   Verify all connections are secure and clean.
    *   Ensure correct Tx-to-Rx connectivity.
*   **Low Signal Strength:**
    *   Use an optical power meter to measure power levels at various points.
    *   Check for excessively sharp bends in the cable.
    *   Inspect connectors and splices for dirt or damage.
    *   Consider if the link length exceeds the capability of the components.
*   **High Bit Error Rate (BER):**
    *   Indicates signal quality issues, likely due to attenuation or dispersion.
    *   Use an optical time-domain reflectometer (OTDR) to locate faults, measure fiber length, and assess splice/connector losses.
    *   Check the integrity of the optical fiber cable.
*   **Intermittent Connectivity:**
    *   Often caused by loose connectors or damaged fibers that are sensitive to vibration or movement.

**Testing Tools:**

*   **Optical Power Meter:** Measures the optical power in dBm.
*   **Optical Light Source:** Provides a stable optical signal for testing receiver sensitivity or link loss.
*   **Optical Time-Domain Reflectometer (OTDR):** Sends pulses of light into the fiber and analyzes the backscattered and reflected light to detect faults, measure distances, and characterize fiber performance.
*   **Visual Fault Locator (VFL):** A laser pen that emits visible red light. It can help identify breaks, bends, and faulty connectors by showing light leakage at the point of the fault.
*   **Bit Error Rate Tester (BERT):** Generates a known digital pattern and measures the number of errors in the received signal to calculate the BER.

**Course Outcome Alignment:**

*   **CO1 (Knowledge Level: K4):** Familiarize the basic Microwave components and to analyse a few microwave measurements and its parameters. While this course outcome is broadly about microwave, the concept of analyzing measurements and parameters applies to fiber optics too. Testing tools like power meters and BERTs are analogous to measurement instruments in microwave labs.

**Textbook References:**

*   **Optical Fiber Communication by Gred Keiser (5th Edition):** Chapter 6 discusses fiber optic measurements and testing, including the use of OTDRs and power meters.

---

## Practice Questions and Exercises

**Multiple Choice Questions:**

1.  Which of the following is a common optical light source used for short-distance, lower-speed applications?
    a) Laser Diode (LD)
    b) Light Emitting Diode (LED)
    c) Avalanche Photodiode (APD)
    d) PIN Photodiode

2.  The phenomenon responsible for the spreading of optical pulses due to different path lengths in multimode fibers is called:
    a) Chromatic Dispersion
    b) Polarization Mode Dispersion
    c) Modal Dispersion
    d) Attenuation

3.  Which testing tool is used to locate faults, measure distances, and characterize fiber performance by analyzing backscattered light?
    a) Optical Power Meter
    b) Visual Fault Locator (VFL)
    c) Bit Error Rate Tester (BERT)
    d) Optical Time-Domain Reflectometer (OTDR)

4.  The core of an optical fiber has a refractive index that is generally:
    a) Lower than the cladding
    b) Higher than the cladding
    c) Equal to the cladding
    d) Variable and dependent on the application

**Short Answer Questions:**

5.  Briefly explain the principle of Total Internal Reflection (TIR) in the context of optical fiber communication.
6.  List three types of losses that can occur in an optical fiber link.
7.  What is the primary function of the cladding in an optical fiber?
8.  Describe the difference between fusion splicing and mechanical splicing.

**Practical Exercise Scenario:**

Imagine you are tasked with setting up a simple point-to-point fiber optic digital link between two computers using a single-mode fiber optic cable and transceivers.

9.  List the essential components you would need for this setup.
10. Outline the key steps you would follow to connect these components and verify the link's operation. What specific measurements would you ideally perform?

---

## Answers to Practice Questions

1.  **b) Light Emitting Diode (LED)**
    *   *Explanation:* LEDs are less expensive and suitable for shorter distances and lower data rates due to their broader spectral width and lower output power.

2.  **c) Modal Dispersion**
    *   *Explanation:* Modal dispersion arises because different light rays (modes) travel different paths within the fiber, leading to variations in arrival times.

3.  **d) Optical Time-Domain Reflectometer (OTDR)**
    *   *Explanation:* An OTDR is specifically designed to analyze the light reflected and scattered back from a fiber optic cable to locate faults and measure performance.

4.  **b) Higher than the cladding**
    *   *Explanation:* For Total Internal Reflection to occur, the core must have a higher refractive index than the cladding.

5.  **Princ of Total Internal Reflection (TIR):** TIR occurs when light traveling from a denser medium (higher refractive index, e.g., the fiber core) to a less dense medium (lower refractive index, e.g., the cladding) strikes the interface at an angle greater than the critical angle. At this point, the light is completely reflected back into the denser medium, allowing it to be guided along the fiber.

6.  **Three types of losses:**
    *   Attenuation (absorption, scattering, bending losses)
    *   Connector losses
    *   Splice losses

7.  **Primary function of the cladding:** The cladding's lower refractive index is essential for Total Internal Reflection (TIR), which confines the light signals within the fiber's core, preventing them from escaping.

8.  **Difference between fusion splicing and mechanical splicing:**
    *   **Fusion splicing:** Uses a controlled electric arc to melt and fuse the ends of two optical fibers together, creating a permanent and low-loss joint.
    *   **Mechanical splicing:** Uses a precision-aligned ferrule or other mechanical means to hold the fiber ends in close proximity, creating a joint that is often less permanent and may have higher loss than fusion splicing.

9.  **Essential components for the setup:**
    *   Two computers (or devices with network interfaces)
    *   Two fiber optic transceivers (e.g., SFP modules) compatible with the computers' network ports.
    *   One single-mode fiber optic patch cord with appropriate connectors (e.g., LC or SC) for the transceivers.
    *   Power supplies for the transceivers (if not powered directly by the computers).

10. **Key steps for connection and verification:**
    *   **Connection:**
        1.  Install the fiber optic transceivers into the network ports of each computer.
        2.  Ensure the fiber optic patch cord is clean.
        3.  Connect one end of the patch cord to the optical output port of the transceiver on the first computer.
        4.  Connect the other end of the patch cord to the optical input port of the transceiver on the second computer.
        5.  Ensure proper power is supplied to the transceivers.
    *   **Verification:**
        1.  Power on the computers.
        2.  Check the status indicators on the transceivers for a light connection.
        3.  Ideally, use an **optical power meter** to measure the optical power at the output of the transmitting transceiver and the input of the receiving transceiver to ensure sufficient signal strength.
        4.  Attempt to ping one computer from the other to confirm data transmission.
        5.  If available, use a **Bit Error Rate Tester (BERT)** to quantify the quality of the digital signal transmission.

---

This comprehensive set of notes covers the fundamental aspects of setting up a fiber optic digital link as per Module 2. Remember to consult your lab manual for specific equipment usage and practical demonstration details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
