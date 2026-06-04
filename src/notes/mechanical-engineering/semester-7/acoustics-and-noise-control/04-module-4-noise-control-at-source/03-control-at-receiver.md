---
title: "Control at Receiver"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 4: Noise control at source"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464006"
status: "completed"
scrapedAt: "2026-05-20T18:09:58.554Z"
---
# ACOUSTICS AND NOISE CONTROL - Module 4: Noise Control at Source

## Topic: Control at Receiver

This topic, though situated within "Noise Control at Source," focuses on strategies to mitigate noise *after* it has been generated and is reaching the listener. Essentially, it's about protecting the receiver from the noise that has escaped source control or is inherently unavoidable.

---

### Learning Outcomes Addressed:

*   **Understanding and defining acoustic terminologies related to receiver control (CO1, K2):** This includes understanding concepts like sound transmission loss, noise reduction, insertion loss, and absorption coefficients.
*   **Analyzing the effectiveness of different receiver control strategies (CO2, K4):** This involves understanding how sound behaves when encountering barriers, absorbent materials, and enclosed spaces.
*   **Explaining various noise reducing measures at the receiver (CO4, K2):** This covers the practical application of treatments like acoustic enclosures, barriers, and ear protection.

---

### 1. Introduction to Control at Receiver

While controlling noise at the source is the most effective approach, there are situations where it is not feasible or sufficient. In such cases, we resort to controlling the noise at the receiver. This involves treating the environment or the listener to reduce the perceived noise levels.

**Key Concept:** The fundamental principle behind control at receiver is to alter the path of sound or the listener's exposure to it.

**Reference:** *Noise and vibration control engineering* by Ver and Beranek extensively discusses these strategies, categorizing them by the acoustic principles they employ.

---

### 2. Sound Transmission Loss (STL) and Noise Reduction (NR)

These are crucial metrics for evaluating the effectiveness of treatments that block or attenuate sound.

*   **Sound Transmission Loss (STL):**
    *   **Definition:** STL is a property of a barrier or partition and is defined as the difference in sound pressure level between the incident sound field on one side and the sound transmitted through the partition to the other side. It is expressed in decibels (dB).
    *   **Formula:** $STL = 10 \log_{10} (W_{inc} / W_{trans})$ where $W_{inc}$ is the incident power and $W_{trans}$ is the transmitted power. In practice, it's often calculated using sound pressure levels and area: $STL = L_1 - L_2 + 10 \log_{10} (S_{ap} / A_2)$, where $L_1$ is the average sound pressure level in the source room, $L_2$ is the average sound pressure level in the receiving room, $S_{ap}$ is the area of the partition, and $A_2$ is the absorption in the receiving room.
    *   **Frequency Dependence:** STL is highly dependent on frequency. Higher frequencies are generally attenuated more effectively by lighter partitions.
    *   **Mass Law:** For a single-leaf partition, the STL generally increases with mass and frequency. $STL \propto 20 \log_{10}(m \cdot f)$, where $m$ is the surface density and $f$ is the frequency.
    *   **Mass-Air-Mass Resonance:** For double-leaf partitions (e.g., double-glazed windows), a resonance can occur between the two leaves and the air gap, leading to a dip in STL at a specific frequency.
    *   **Reference:** *Fundamentals of Acoustics* by Kinsler, Frey, Coppens, and Sanders provides a detailed mathematical treatment of sound transmission and barriers.

*   **Noise Reduction (NR):**
    *   **Definition:** NR is the difference in sound pressure level measured in a room *before* and *after* the introduction of a noise control treatment (e.g., adding absorption, installing a barrier). It represents the overall reduction in sound level achieved by the treatment in a specific environment.
    *   **Formula:** $NR = L_{before} - L_{after}$ (in dB).
    *   **Distinction from STL:** NR is an *environmental* measure, while STL is a *material/partition* property. NR can be influenced by the room acoustics, the source, and the position of measurement, in addition to the treatment itself.

**Important Point:** Achieving good noise reduction often requires a combination of strategies, not just one.

---

### 3. Acoustic Barriers (Sound Walls)

Barriers are physical structures designed to block the direct path of sound waves.

*   **Mechanism of Action:** Barriers diffract sound waves around their edges. The effectiveness of a barrier depends on its height, length, and the position of the source and receiver relative to it.
*   **Insertion Loss (IL):**
    *   **Definition:** Insertion Loss is the difference in sound pressure level at a receiver location when a barrier is present compared to when it is absent, measured in dB. It is a measure of the barrier's performance.
    *   **Formula:** $IL = L_{no\_barrier} - L_{with\_barrier}$ (in dB).
    *   **Fray-Maekawa Theory:** This theory provides a way to predict the insertion loss of a barrier. A key parameter is the "Fresnel number" ($N_f$), which relates to the path difference for diffracted sound. Higher $N_f$ generally means greater IL.
    *   **Key Factors Influencing IL:**
        *   **Height of the barrier:** Taller barriers offer greater protection.
        *   **Width of the barrier:** Wider barriers reduce flanking paths.
        *   **Mass and surface density of the barrier:** Heavier barriers are more effective at blocking sound, especially at lower frequencies.
        *   **Ground absorption:** A reflective ground can reduce the effectiveness of a barrier compared to an absorptive ground.
        *   **Source and receiver position:** The closer the source and receiver are to the barrier's path, the more effective it will be.
        *   **Frequency:** Barriers are generally more effective at higher frequencies where the wavelength is shorter and diffraction is less pronounced.
*   **Examples:**
    *   Highway noise barriers to protect nearby residences.
    *   Acoustic walls around construction sites.
    *   Enclosures around noisy machinery.
*   **Reference:** *Noise and Vibration Control* by Munjal delves into the diffraction theory and practical design considerations for acoustic barriers. *Handbook of Noise and Vibration Control* by Crocker also offers comprehensive design guidelines.

**Practice Question 1:**
A barrier is proposed to reduce traffic noise. What are the two most important geometrical factors that determine the effectiveness of this barrier for a receiver located behind it?

**Answer:**
1.  **Height of the barrier:** A taller barrier creates a larger shadow zone, reducing the amount of sound that diffracts over the top.
2.  **The relative positions of the source, receiver, and barrier:** Specifically, how much "in the shadow" the receiver is, which is related to the path difference of the diffracted sound.

---

### 4. Acoustic Treatments for Enclosed Spaces (Room Acoustics)

This category focuses on modifying the acoustic characteristics of the receiving space to reduce reverberation and overall sound levels.

*   **Sound Absorption:**
    *   **Definition:** Sound absorption is the process by which sound energy is converted into other forms of energy (usually heat) when it strikes a surface.
    *   **Absorption Coefficient ($\alpha$):**
        *   **Definition:** The absorption coefficient of a material is the ratio of the sound energy absorbed by the material to the incident sound energy. It ranges from 0 (perfectly reflective) to 1 (perfectly absorptive).
        *   **Frequency Dependence:** Absorption coefficients vary significantly with frequency. Materials that are good absorbers at high frequencies might be poor absorbers at low frequencies.
        *   **Types of Absorbing Materials:**
            *   **Porous absorbers:** (e.g., mineral wool, fiberglass, acoustic foam) - Absorb sound through viscous and thermal losses as sound waves vibrate air within the material's pores. Most effective at mid to high frequencies.
            *   **Resonant absorbers (Membrane absorbers):** (e.g., perforated panels backed by an air cavity, flexible membranes) - Absorb sound at specific frequencies due to panel vibration or resonance within the air cavity. Effective for low-frequency absorption.
            *   **Helmholtz resonators:** (e.g., bottles, specific acoustic panels with a neck) - Absorb sound at a resonant frequency determined by the volume of the cavity and the dimensions of the neck. Effective for narrow-band absorption, often at low frequencies.
    *   **Sabine's Formula for Reverberation Time ($T_{60}$):**
        *   **Definition:** Reverberation time is the time it takes for the sound pressure level to decay by 60 dB after the sound source is stopped.
        *   **Formula:** $T_{60} = 0.161 V / A$, where $V$ is the room volume and $A$ is the total sound absorption in the room ($A = \sum S_i \alpha_i$, where $S_i$ is the surface area of material $i$ and $\alpha_i$ is its absorption coefficient).
        *   **Impact of Absorption:** Increasing the total absorption ($A$) in a room reduces the reverberation time ($T_{60}$), leading to a lower average sound pressure level.
*   **Examples:**
    *   Acoustic ceiling tiles in offices and classrooms.
    *   Acoustic wall panels in auditoriums and conference rooms.
    *   Carpet and soft furnishings in living spaces.
    *   Acoustic curtains in recording studios.
*   **Reference:** *Fundamentals of Acoustics* provides the theoretical basis for reverberation time and sound absorption. *Noise and vibration control engineering* by Ver and Beranek offers extensive data on absorption coefficients of various materials and practical design examples.

**Practice Question 2:**
An office room is found to have a reverberation time that is too long, causing speech to be unintelligible and increasing the overall noise level. If the room volume is 100 m³, and the total absorption is currently 20 Sabins (m²), what is the current reverberation time? If you add acoustic ceiling tiles with a total absorption of 15 Sabins, what will be the new reverberation time?

**Answer:**
*   **Current Reverberation Time:**
    $T_{60} = 0.161 \times (100 \text{ m³}) / (20 \text{ Sabins}) = 0.805 \text{ seconds}$

*   **New Reverberation Time:**
    New Total Absorption = 20 Sabins + 15 Sabins = 35 Sabins
    $T_{60\_new} = 0.161 \times (100 \text{ m³}) / (35 \text{ Sabins}) \approx 0.459 \text{ seconds}$

---

### 5. Acoustic Enclosures and Barriers for Machinery

These are physical structures designed to contain or block noise from specific sources.

*   **Acoustic Enclosures (Booths, Silencers, Wraps):**
    *   **Purpose:** To isolate a noise source from the surrounding environment.
    *   **Design Considerations:**
        *   **STL of the enclosure:** The walls, roof, and floor of the enclosure must have sufficient sound transmission loss to prevent noise from escaping.
        *   **Ventilation:** Enclosures often require ventilation for cooling. This ventilation must be designed with silencers (mufflers) to avoid creating a new noise path.
        *   **Access Doors and Panels:** These must be sealed effectively to maintain the acoustic integrity of the enclosure.
        *   **Vibration Isolation:** The machinery within the enclosure should be vibration isolated from the enclosure structure to prevent structural-borne noise.
        *   **Internal Absorption:** The interior surfaces of the enclosure are often lined with sound-absorbing materials to reduce reverberation within the enclosure, which can otherwise increase the noise level inside and transmit more sound through the walls.
    *   **Reference:** *Industrial Noise Control and Acoustics* by Barron provides detailed principles and examples for designing acoustic enclosures for industrial machinery.
*   **Damping:**
    *   **Definition:** Damping is the dissipation of vibrational energy within a material or structure, reducing the amplitude of vibrations and hence the noise radiated.
    *   **Methods:**
        *   **Viscoelastic materials:** Applied as constrained layers or free layers to vibrating surfaces.
        *   **Sound mats:** Used to damp panel vibrations.
    *   **Application:** Damping is often applied to panels of enclosures or machinery casings to reduce their vibration and radiated noise.

**Example:** A noisy compressor is housed within a sound-insulated enclosure with acoustically treated ventilation.

---

### 6. Personal Protective Equipment (PPE)

When other control measures are insufficient or impractical, or for temporary exposure, PPE is used to protect the individual receiver.

*   **Earplugs:**
    *   **Description:** Devices inserted into the ear canal.
    *   **Types:** Foam (expandable), pre-molded, custom-molded.
    *   **Effectiveness:** Can provide significant noise reduction (NRR - Noise Reduction Rating) if fitted properly.
    *   **Reference:** *Noise and Vibration Control* by Munjal discusses the principles of hearing protection.

*   **Earmuffs:**
    *   **Description:** Devices that fit over the entire ear.
    *   **Mechanism:** Cup-shaped shells with acoustic sealing around the ear and internal absorbent material.
    *   **Effectiveness:** Generally offer higher NRR than earplugs, especially at lower frequencies, and are often more comfortable for extended wear.

*   **Important Considerations for PPE:**
    *   **Fit:** Proper fit is crucial for effectiveness. A poor fit can dramatically reduce the noise reduction.
    *   **Comfort:** For consistent use, PPE must be comfortable.
    *   **Maintenance:** Earplugs and earmuffs need regular cleaning and replacement.
    *   **Communication:** Some PPE can impair communication. Select PPE that allows for necessary communication (e.g., communication earmuffs).
    *   **Reference:** OSHA (Occupational Safety and Health Administration) and NIOSH (National Institute for Occupational Safety and Health) provide standards and guidelines for PPE.

**Example:** Construction workers wearing earmuffs while operating heavy machinery.

---

### 7. Acoustic Louvers and Silencers (Mufflers)

These are specific devices used to allow airflow while attenuating noise.

*   **Acoustic Louvers:**
    *   **Purpose:** To provide ventilation while reducing noise transmission.
    *   **Design:** Consist of baffles lined with sound-absorbing materials, arranged to allow airflow through curved paths, thus reducing direct sound transmission.
    *   **Application:** Used in building facades, HVAC systems, and enclosures where ventilation is required.
*   **Silencers (Mufflers):**
    *   **Purpose:** To reduce noise generated by airflow in ducts, exhaust systems, or intake systems.
    *   **Mechanisms:**
        *   **Reactive Silencers:** Use resonant chambers and expansion chambers to reflect sound waves back towards the source, creating destructive interference. Effective for specific frequency ranges.
        *   **Dissipative Silencers:** Use sound-absorbing materials (similar to porous absorbers) to dissipate sound energy as heat. Effective over a broader frequency range.
        *   **Hybrid Silencers:** Combine both reactive and dissipative elements.
    *   **Reference:** *Mechanical Vibrations and Industrial Noise Control* by Lasithan L G might cover specific aspects of silencer design for mechanical systems.

**Example:** A silencer on the exhaust of a generator.

---

### 8. Vibration Isolation and Damping (as it affects receiver)

While often discussed in terms of source control, vibration isolation and damping treatments can also be considered receiver-side treatments if they are applied to a structure that is being affected by external vibration sources, thereby reducing the noise perceived within that structure.

*   **Vibration Isolation:**
    *   **Concept:** Preventing vibrations from being transmitted from a source structure to a receiving structure.
    *   **Methods:** Spring mounts, rubber mounts, resilient pads.
    *   **Example:** Installing a building on a resilient foundation to isolate it from underground machinery vibrations.
*   **Damping:**
    *   **Concept:** Reducing the amplitude of vibrations in a structure.
    *   **Example:** Applying damping materials to a floor slab to reduce impact noise transmission to the room below.

---

### 9. Summary of Control at Receiver Strategies

| Strategy                 | Description                                                                                                                                    | Key Principles                                                      | Examples                                                              |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ | :-------------------------------------------------------------------- |
| **Acoustic Barriers**    | Physical structures to block direct sound paths.                                                                                               | Diffraction, Insertion Loss, Mass, Geometry                       | Highway walls, enclosures around equipment.                           |
| **Sound Absorption**     | Using materials to convert sound energy into heat.                                                                                             | Absorption Coefficient ($\alpha$), Reverberation Time ($T_{60}$) | Acoustic ceiling tiles, wall panels, carpets.                         |
| **Acoustic Enclosures**  | Sealed structures to contain noise sources.                                                                                                    | Sound Transmission Loss (STL), Ventilation with silencers         | Machine enclosures, generator rooms.                                  |
| **Personal Protection**  | Devices worn by individuals to reduce sound exposure.                                                                                          | Noise Reduction Rating (NRR), Fit, Comfort                        | Earplugs, earmuffs.                                                   |
| **Acoustic Louvers/Silencers** | Devices allowing airflow while attenuating noise.                                                                                              | Baffling, Absorption, Resonance                                     | HVAC system vents, exhaust systems.                                   |
| **Vibration Isolation/Damping** | Preventing or reducing vibration transmission to structures.                                                                                     | Resonance, Damping materials                                        | Resilient mounts for buildings, damping on floor slabs.               |

---

### 10. Important Points to Remember

*   **Hierarchy of Controls:** Source control is always preferred over receiver control.
*   **Effectiveness:** Receiver control measures are often less efficient and more costly than effective source control.
*   **Frequency Dependence:** Most noise control treatments are frequency-dependent.
*   **Combined Strategies:** A combination of treatments is often necessary for optimal results.
*   **Measurement and Verification:** It's crucial to measure noise levels before and after implementing receiver control measures to verify their effectiveness.
*   **Standards and Regulations:** Noise control practices must comply with relevant occupational and environmental noise regulations. (CO3)

---

### 11. Practice Questions and Answers

**Question 3:**
A factory worker is exposed to 105 dB(A) noise for 8 hours. Standard noise exposure limits (e.g., 85 dB(A) for 8 hours) are exceeded. The factory management decides not to reduce the noise at the source due to high cost. Which of the following is a control at receiver strategy that can be implemented?
    a) Replacing the noisy machine with a quieter one.
    b) Installing acoustic lagging on the machine.
    c) Providing the worker with earmuffs.
    d) Improving ventilation in the factory.

**Answer:**
c) Providing the worker with earmuffs. This is a form of Personal Protective Equipment (PPE), which is a classic "control at receiver" strategy.
    *   a) and b) are control at source strategies.
    *   d) might indirectly help by reducing overall ambient noise through better airflow management but is not a direct receiver protection measure.

**Question 4:**
What is the primary difference between Sound Transmission Loss (STL) and Noise Reduction (NR)?

**Answer:**
Sound Transmission Loss (STL) is an intrinsic property of a material or partition, quantifying how much sound it blocks. Noise Reduction (NR) is a measure of the actual sound level difference achieved in a specific environment after a treatment is applied, and it is influenced by the room acoustics, source characteristics, and measurement locations, in addition to the STL of the component.

**Question 5:**
If you want to absorb low-frequency noise, which type of acoustic treatment is generally most effective?

**Answer:**
Resonant absorbers (like membrane absorbers or Helmholtz resonators) are generally most effective for low-frequency noise. Porous absorbers are typically most effective at mid to high frequencies.

---

This concludes the study notes for "Control at Receiver" in Module 4. Remember to cross-reference with your textbooks for further details and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
