---
title: "Feeding methods"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7dc"
status: "completed"
scrapedAt: "2026-05-23T18:11:51.638Z"
---
# ANTENNA THEORY AND DESIGN

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Feeding Methods

---

### 1. Introduction to Microstrip Antennas

Microstrip antennas, also known as patch antennas, are planar antennas consisting of a metallic patch (radiating element) on one side of a dielectric substrate and a ground plane on the other side. They are popular for their low profile, conformal nature, low cost, and ease of integration with other microwave circuits.

**Key Concepts:**

*   **Radiating Element:** Typically a metal patch of various shapes (rectangular, circular, triangular, etc.).
*   **Dielectric Substrate:** The insulating material between the patch and the ground plane, with dielectric constant ($\epsilon_r$) and thickness ($h$).
*   **Ground Plane:** A conductive layer that reflects the radiated fields and acts as a reference.
*   **Microstrip Line:** A transmission line used to connect the radiating element to the source or load, usually etched on the same substrate.

---

### 2. Radiation Mechanism of Microstrip Antennas

Microstrip antennas primarily radiate through the fringing fields that exist around the edges of the radiating patch.

**Key Concepts:**

*   **Equivalent Magnetic Current Sheets:** The fringing fields can be modeled as equivalent magnetic current sheets along the radiating edges of the patch. For a rectangular patch, the principal radiation comes from the edges parallel to the electric field.
*   **Aperture Model:** The radiating patch can be viewed as an aperture in an infinite ground plane, where the fields on the aperture launch waves into space.
*   **Modes of Operation:** Microstrip antennas typically operate in the dominant TM$_{mn}$ modes, where the radiation pattern is primarily determined by the charge and current distributions on the patch. The most common modes are TM$_{01}$ and TM$_{10}$ for rectangular patches.
*   **Polarization:** The polarization of the radiated wave is determined by the orientation of the electric field in the fringing fields.

**Referenced Texts:**

*   **Balanis (4th Ed.)**: Discusses the fringing field concept and its role in radiation, often using the slot-line analogy and magnetic dipole moments. (Chapter 12 on Microstrip Antennas).
*   **Garg (2001)**: Provides a detailed analysis of the radiation mechanism using equivalent magnetic currents along the edges of the patch. (Chapter 3 on Basic Microstrip Antennas).

---

### 3. Feeding Methods for Microstrip Antennas

The purpose of a feeding method is to effectively couple RF power from a transmission line to the radiating patch while maintaining good impedance matching and desired radiation characteristics. Improper feeding can lead to poor performance, including low efficiency, spurious radiation, and inefficient power transfer.

**Key Concepts:**

*   **Impedance Matching:** The feed network must present a matched impedance to the antenna terminals to maximize power transfer and minimize reflections.
*   **Excitation of Modes:** Different feeding methods excite different modes within the patch, influencing the radiation pattern and polarization.
*   **Bandwidth:** The feeding method can influence the overall bandwidth of the antenna.
*   **Ease of Fabrication:** Some feeding methods are easier to fabricate and integrate than others.

**Learning Outcome Coverage:**

*   **LO1 (Analyze radiation mechanism):** Understanding how feeding methods excite modes and influence current distribution is crucial for analyzing the radiation mechanism.
*   **LO2 (Design and measure parameters):** The choice of feeding method directly impacts the antenna's input impedance, bandwidth, and radiation pattern, which are measured parameters.
*   **CO1 (Analyze radiation mechanism):** Feeding methods are a key aspect of analyzing how an antenna functions.
*   **CO2 (Design and measure):** Designing an antenna involves selecting an appropriate feeding method for desired performance.
*   **CO3 (Analyze and design advanced antennas):** Advanced antenna designs often utilize specific feeding techniques for improved performance.

---

#### 3.1. Contacting Feed Methods

These methods involve directly connecting the feed line to the radiating patch.

##### 3.1.1. Microstrip Line Feed (Edge Feed)

This is the most common and simplest feeding method. A microstrip line is etched on the same substrate and connected to the edge of the patch.

*   **Description:** The end of the microstrip feed line is terminated at a specific point along the edge of the patch to match the antenna's input impedance. The depth of the feed point determines the input impedance.
*   **Mechanism:** The microstrip line directly excites the surface current on the patch, leading to the excitation of the TM modes.
*   **Advantages:** Simple to fabricate, easy to integrate, low spurious radiation.
*   **Disadvantages:** Limited impedance matching range, potential for spurious radiation from the feed line if not properly designed, feed line radiation can distort the main pattern.
*   **Impedance Matching:** The feed point is typically placed at a distance $L_f$ from the edge of the patch, where $L_f$ is chosen to achieve the desired impedance. For a rectangular patch fed at the edge, the input impedance varies along the edge. To match the characteristic impedance of the feed line ($Z_0$), the feed point is chosen where the local impedance equals $Z_0$.
*   **Bandwidth:** Generally narrow bandwidth.

**Example:** A rectangular patch fed by a microstrip line on the side parallel to the electric field of the dominant TM$_{10}$ mode.

**Referenced Texts:**

*   **Balanis (4th Ed.)**: Details the concept of varying input impedance along the edge and how to determine the feed point. (Chapter 12).
*   **Garg (2001)**: Provides design equations and considerations for microstrip line feeding. (Chapter 3).
*   **Pozar (4th Ed.)**: Discusses the equivalent circuit model and impedance calculations for edge-fed patches. (Chapter 6 on Microstrip Antennas).

##### 3.1.2. Probe Feed (Internal Feed)

A coaxial probe is used to excite the patch from underneath.

*   **Description:** A center conductor of a coaxial cable is extended through the ground plane and terminates at a specific point within the radiating patch. The outer conductor is connected to the ground plane.
*   **Mechanism:** The probe acts as a vertical electric dipole, launching fields into the patch and exciting the TM modes. The position of the probe significantly affects the input impedance.
*   **Advantages:** Can excite the center of the patch, providing dual-mode operation (e.g., linear or circular polarization depending on feed location and patch geometry), good for dual-frequency operation.
*   **Disadvantages:** More complex fabrication than microstrip feed, the probe can be a source of spurious radiation, the length of the probe needs careful consideration.
*   **Impedance Matching:** The probe is typically placed at the center or offset from the center to match the antenna impedance. Placing it at the center of a symmetric patch excites symmetric modes.
*   **Bandwidth:** Similar to microstrip line feed, generally narrow.

**Example:** A probe feeding a rectangular patch at its center for exciting the TM$_{10}$ or TM$_{01}$ mode depending on the probe's orientation. To achieve circular polarization, the probe is placed at a quarter-wavelength distance from the edge along the axis of maximum electric field, or multiple probes are used.

**Referenced Texts:**

*   **Balanis (4th Ed.)**: Explains the probe feed mechanism and the dependence of impedance on probe position. (Chapter 12).
*   **Garg (2001)**: Offers design guidelines and analysis for probe-fed antennas. (Chapter 3).
*   **Kraus (3rd Ed.)**: Mentions probe feeding as a common method for exciting patch antennas. (Chapter 13 on Printed Circuit Antennas).

---

#### 3.2. Non-Contacting Feed Methods

These methods use electromagnetic coupling to transfer energy to the patch, avoiding direct electrical contact.

##### 3.2.1. Aperture Coupled Feed

The feed line is electromagnetically coupled to the patch through a slot in the ground plane.

*   **Description:** A microstrip feed line is located on a separate substrate below the ground plane. A slot is etched in the ground plane beneath the radiating patch. The size, shape, and location of the slot determine the coupling.
*   **Mechanism:** The fields from the microstrip line travel through the slot in the ground plane and excite the radiating patch. The slot acts as a coupling aperture.
*   **Advantages:** Isolation between the feed line and the radiating element (reduces spurious radiation from the feed line), can be designed for wider bandwidths, independent optimization of feed line and radiating patch, allows for different dielectric substrates for the feed and radiating elements.
*   **Disadvantages:** More complex fabrication due to the multiple layers and the slot, potential for slot radiation to interfere with the main pattern, insertion loss through the slot.
*   **Bandwidth:** Can achieve wider bandwidth compared to contacting feeds by optimizing the slot geometry and dimensions.
*   **Polarization:** Can be used for linear or circular polarization depending on the slot shape and orientation.

**Example:** A T-shaped or dumbbell-shaped slot can be used for impedance matching and to excite desired modes. A cross-shaped slot can be used for dual-polarization.

**Referenced Texts:**

*   **Balanis (4th Ed.)**: Discusses aperture coupling as a method for improved isolation and bandwidth. (Chapter 12).
*   **Garg (2001)**: Provides extensive details on the design and analysis of aperture-coupled microstrip antennas, including various slot shapes. (Chapter 3).
*   **Pozar (4th Ed.)**: Offers a detailed electromagnetic analysis of aperture coupling. (Chapter 6).

##### 3.2.2. Proximity Coupled Feed (or Coupling Feed)

Coupling occurs through the fringing fields of the feed line to the patch.

*   **Description:** A microstrip feed line is placed on a separate substrate below the radiating patch, with a small gap between the two substrates. No direct electrical connection or aperture is present.
*   **Mechanism:** The fringing fields of the microstrip feed line couple electromagnetically to the radiating patch. The coupling strength depends on the gap distance, width of the feed line, and dielectric properties.
*   **Advantages:** Good isolation, can achieve wider bandwidths, avoids spurious radiation from the feed line, allows for flexible substrate choices.
*   **Disadvantages:** More complex structure with multiple substrates and precise alignment, sensitive to manufacturing tolerances.
*   **Bandwidth:** Generally offers wider bandwidths than contacting feeds.
*   **Polarization:** Primarily for linear polarization.

**Example:** A standard microstrip line placed below a patch antenna with a small dielectric spacer in between.

**Referenced Texts:**

*   **Balanis (4th Ed.)**: Explains proximity coupling and its advantages for bandwidth and isolation. (Chapter 12).
*   **Garg (2001)**: Provides design principles for proximity-coupled antennas. (Chapter 3).
*   **Raju (2009)**: Covers proximity coupling as a method for achieving broadband microstrip antennas. (Chapter 5).

---

#### 3.3. Other Feeding Methods

While less common, other methods exist for specific applications.

##### 3.3.1. Linearly Polarized Arrays (Corporate Feed)

For multi-element microstrip arrays, a corporate feed network is used to distribute power to each element.

*   **Description:** A series of Wilkinson power dividers or branch line couplers are used to split the power from a single input to multiple antenna elements.
*   **Mechanism:** Power is divided equally and with equal phase to each radiating patch in the array.
*   **Advantages:** Provides uniform excitation, facilitates broadside radiation from the array.
*   **Disadvantages:** Can be complex to design and fabricate for large arrays, can introduce significant losses in the feed network.

**Referenced Texts:**

*   **Balanis (4th Ed.)**: Discusses array feeding networks extensively. (Chapter 6 on Array Antennas).
*   **Pozar (4th Ed.)**: Covers microwave network design, applicable to corporate feeding. (Chapter 7 on Power Dividers and Couplers).

##### 3.3.2. Circularly Polarized Arrays

For circularly polarized arrays, techniques like hybrid couplers (e.g., branch-line coupler, Lange coupler) or orthogonal feeding of elements are used.

*   **Description:** A hybrid coupler splits the input power into two equal parts with a 90-degree phase difference, which are then fed to adjacent elements or orthogonally polarized elements to generate circular polarization.
*   **Mechanism:** The quadrature phase relationship between the feeds creates the rotating electric field vector for circular polarization.
*   **Advantages:** Generates circular polarization for improved performance in environments with Faraday rotation or depolarization.
*   **Disadvantages:** Increased complexity in the feed network.

**Referenced Texts:**

*   **Balanis (4th Ed.)**: Discusses methods for achieving circular polarization in arrays. (Chapter 13 on Polarization).
*   **Garg (2001)**: Might cover specific feeding networks for CP microstrip antennas. (Chapter 4 on Polarization).

---

### 4. Design Considerations for Feeding Methods

When choosing a feeding method, several factors need to be considered:

*   **Impedance Matching:** Achieving a good match over the desired frequency band.
*   **Bandwidth:** The feeding method's impact on the antenna's usable bandwidth.
*   **Polarization:** The type of polarization required (linear, circular).
*   **Radiation Pattern:** The feeding method can influence sidelobe levels and pattern distortion.
*   **Spurious Radiation:** Minimizing unwanted radiation from the feed structure.
*   **Fabrication Complexity and Cost:** Ease of manufacturing and cost-effectiveness.
*   **Integration:** How well the feed integrates with the overall system.
*   **Isolation:** The degree of decoupling between the feed and radiating element.

**Important Points to Remember:**

*   The **location** of the feed point is critical for impedance matching in contacting feeds.
*   The **slot geometry** and **location** are crucial for aperture-coupled feeds.
*   The **gap** between substrates is important for proximity-coupled feeds.
*   **Non-contacting feeds** generally offer better isolation and wider bandwidth but are more complex.
*   The feed network design is as important as the radiating element design for overall antenna performance.

---

### 5. Practice Questions and Exercises

**Question 1:**
Briefly describe the mechanism of radiation for a microstrip patch antenna. How do fringing fields contribute to radiation?
*(Knowledge Level: K3 - Analyze)*

**Answer:**
Microstrip antennas radiate primarily due to the fringing electromagnetic fields that fringe from the edges of the metallic patch to the ground plane. These fringing fields can be modeled as equivalent magnetic current sheets along the radiating edges of the patch. The interaction of these magnetic currents with space launches electromagnetic waves. The distribution of charge and current on the patch determines the excitation of specific TM$_{mn}$ modes, which in turn dictates the radiation pattern. The edges parallel to the direction of the electric field within the patch typically contribute the most to radiation.

---

**Question 2:**
Compare and contrast the microstrip line feed and the probe feed methods for microstrip antennas. Discuss their advantages and disadvantages.
*(Knowledge Level: K4 - Analyze/Design)*

**Answer:**

| Feature           | Microstrip Line Feed (Edge Feed)                                 | Probe Feed (Internal Feed)                                      |
| :---------------- | :--------------------------------------------------------------- | :-------------------------------------------------------------- |
| **Description**   | Microstrip line connected to the edge of the patch.              | Coaxial probe through ground plane connected to the patch.      |
| **Excitation**    | Excites surface currents on the patch.                           | Acts as a vertical dipole, launching fields into the patch.     |
| **Fabrication**   | Simple, integrated on the same substrate.                        | More complex due to the probe insertion.                        |
| **Isolation**     | Moderate, potential for spurious radiation from feed line.       | Moderate, probe can be a source of spurious radiation.          |
| **Impedance**     | Impedance varies along the edge; feed point chosen for matching. | Impedance varies with probe position; center feed is common.    |
| **Bandwidth**     | Narrow.                                                          | Narrow.                                                         |
| **Polarization**  | Typically linear.                                                | Can excite dual modes; placement can influence polarization.     |
| **Advantages**    | Simple, low cost, easy integration.                              | Can achieve dual-mode operation, good for dual-frequency.     |
| **Disadvantages** | Limited impedance matching range, potential feed radiation.      | Complex fabrication, probe spurious radiation.                  |

---

**Question 3:**
An antenna designer wants to achieve a wider bandwidth and better isolation between the feed line and the radiating element of a microstrip antenna. Which feeding method would you recommend and why?
*(Knowledge Level: K4 - Design)*

**Answer:**
For wider bandwidth and better isolation, I would recommend either the **aperture coupled feed** or the **proximity coupled feed**.

*   **Aperture Coupled Feed:** Offers excellent isolation as the ground plane separates the feed line from the patch. The slot geometry can be optimized to enhance bandwidth. It also allows for independent design of the feed network and the radiating element.
*   **Proximity Coupled Feed:** Also provides good isolation due to the gap between the substrates. The fringing fields coupling through the gap can be tuned to achieve wider bandwidths compared to contacting feeds. It also avoids direct excitation of the feed line by the radiating patch.

Both methods are more complex to fabricate than simple contacting feeds but offer significant performance advantages in terms of bandwidth and isolation.

---

**Question 4:**
Explain how a coaxial probe feed can be used to achieve circular polarization in a microstrip antenna.
*(Knowledge Level: K3 - Analyze)*

**Answer:**
To achieve circular polarization with a coaxial probe feed, the feed point must excite the TM$_{10}$ and TM$_{01}$ modes (for a square patch) or equivalent dominant modes with equal amplitude and a 90-degree phase difference. This is typically achieved by:

1.  **Using a square patch:** This ensures degeneracy between modes.
2.  **Offsetting the probe feed:** The probe is placed off-center, typically at a distance of $a/2$ (where $a$ is the side length of the square patch) from the center along the diagonal. This placement excites both TM$_{10}$ and TM$_{01}$ modes with approximately equal amplitudes.
3.  **Slightly perturbing the patch geometry:** To ensure a precise 90-degree phase difference between the excited modes, the patch is often slightly modified. This can be done by truncating the corners (chamfering) or by slightly altering the dimensions of one side.

This asymmetric excitation of the dominant modes results in a rotating electric field vector, thereby producing circularly polarized radiation.

---

**Question 5:**
What are the key design parameters for an aperture-coupled microstrip antenna?
*(Knowledge Level: K4 - Analyze)*

**Answer:**
The key design parameters for an aperture-coupled microstrip antenna are:

*   **Slot Dimensions and Shape:** The length, width, and shape of the slot in the ground plane are critical for determining the coupling strength, impedance matching, and bandwidth. Common shapes include rectangular, dumbbell, T-shaped, or H-shaped slots.
*   **Slot Location:** The position of the slot relative to the radiating patch influences the excitation of modes and the input impedance.
*   **Feed Line Width:** Affects the characteristic impedance of the feed line and its coupling to the slot.
*   **Substrate Properties:** Dielectric constant and thickness of both the substrate supporting the patch and the substrate supporting the feed line play significant roles in performance.
*   **Gap between Substrates:** For some variations, a gap can exist, affecting coupling.
*   **Patch Dimensions and Shape:** Determine the resonant frequency and radiation characteristics.
*   **Feed Line Characteristics:** Characteristic impedance and termination.

By tuning these parameters, the antenna can be optimized for desired impedance matching, bandwidth, and radiation pattern.

---

### 6. Important Points to Remember

*   **Mode Excitation:** The feeding method dictates which modes are excited and their relative strengths, directly impacting the radiation pattern.
*   **Impedance Matching:** Essential for efficient power transfer. The feed location (for contacting feeds) or coupling mechanism (for non-contacting feeds) is crucial.
*   **Bandwidth Enhancement:** Non-contacting feeds (aperture-coupled, proximity-coupled) generally offer wider bandwidths than contacting feeds.
*   **Isolation:** Non-contacting feeds provide better isolation between the feed line and the radiating element, reducing spurious radiation from the feed.
*   **Polarization Control:** The choice of feeding method and its implementation (e.g., probe placement, slot shape) can be used to achieve linear or circular polarization.
*   **Fabrication Complexity:** There's often a trade-off between performance (bandwidth, isolation) and fabrication complexity/cost.

---

This concludes the study notes for "Feeding Methods" in Microstrip Antennas. Remember to consult the referenced textbooks for more in-depth analysis and detailed design equations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
