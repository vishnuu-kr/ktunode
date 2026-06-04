---
title: "Construction and working of Ruby laser and CO2 laser"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 1: Laser & Fiber Optics"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e835a3"
status: "completed"
scrapedAt: "2026-05-20T17:39:46.078Z"
---
# Module 1: Laser & Fiber Optics - Construction and Working of Ruby and CO2 Lasers

Welcome, everyone, to our exciting journey into the world of lasers and fiber optics! Today, we're diving into the heart of two iconic lasers: the **Ruby Laser** and the **CO2 Laser**. Understanding these lasers is crucial because they laid the groundwork for much of the laser technology we see and use today. Remember, lasers, short for Light Amplification by Stimulated Emission of Radiation, are not just fancy light sources; they are tools that have revolutionized everything from surgery to manufacturing to telecommunications. This module, in fact, directly connects to **CO1: Explain the basic principles and properties of laser and optic fibers**, as we'll be dissecting how these devices achieve their unique properties.

## Understanding the Basics: What Makes a Laser a Laser?

Before we get into the specifics of the Ruby and CO2 lasers, let's quickly recap the fundamental principles that are common to all lasers. Think of it like understanding the basic ingredients before baking different cakes.

*   **Stimulated Emission:** This is the cornerstone of laser operation. Imagine an atom in an excited state. If a photon with the exact energy difference between the excited state and a lower energy state comes along, it can "stimulate" the atom to drop to the lower state, emitting another photon that is identical to the incoming one – same frequency, same phase, same direction. This is like having a domino effect with light! (This concept ties into **CO3: Explain the behaviour of matter at the atomic and subatomic level through the principles of quantum mechanics**).
*   **Population Inversion:** For stimulated emission to dominate over absorption, we need more atoms in the excited state than in the lower energy state. This unusual condition is called **population inversion**. Without it, most incoming photons would simply be absorbed by atoms in the ground state, and we wouldn't get light amplification.
*   **Optical Resonator (Cavity):** To amplify the light effectively, we need to trap it and make it pass through the active medium multiple times. This is achieved using two mirrors placed at either end of the active medium. One mirror is fully reflective, and the other is partially reflective, allowing some of the amplified light to escape as the laser beam. This setup ensures that the photons keep stimulating more emissions, building up a coherent beam. (This reinforces **CO1** by showing how properties like coherence are achieved).

Now, let's explore how these principles are implemented in our two star lasers.

## The Ruby Laser: The Pioneer

The Ruby laser, invented by Theodore Maiman in 1960, was the **very first working laser**. It’s a solid-state laser that uses a synthetic ruby crystal as its active medium.

### Construction of a Ruby Laser

Let’s break down its components, picturing it like a sophisticated torch.

1.  **Active Medium:** This is the heart of the laser. In the Ruby laser, it's a **ruby crystal**. What is ruby? It's essentially **aluminum oxide (Al₂O₃)** with a tiny percentage of **chromium (Cr³⁺) ions** added. These chromium ions are the key players, the ones that get excited and eventually emit the laser light. The ruby crystal is typically shaped into a rod.
2.  **Pumping Source:** To achieve population inversion, we need to pump energy into the active medium. In early ruby lasers, a **high-intensity flash lamp**, usually a xenon flash tube, was used. This lamp emits a broad spectrum of light, and the ruby crystal absorbs specific wavelengths from this light to excite the Cr³⁺ ions. Imagine the flash lamp as a powerful strobe light that “pumps” energy into the ruby.
3.  **Optical Resonator:** As we discussed, mirrors are essential. For a ruby laser rod, the ends are polished flat and silvered. One end is coated for **100% reflectivity**, and the other end has a **partial reflectivity coating** (around 50-70%). These mirrors bounce the light back and forth through the ruby rod, allowing for amplification.

**Visualizing the Setup:** Picture a cylindrical ruby rod. Wrapped around it is the flash lamp, like a coil. At each end of the rod, we have mirrors precisely aligned. This whole assembly is carefully enclosed.

### Working of a Ruby Laser

Let's walk through the process step-by-step:

1.  **Pumping:** When the flash lamp is fired, it emits intense pulses of light. The Cr³⁺ ions in the ruby crystal absorb photons from this flash. This absorption causes the Cr³⁺ ions to jump from their ground state to higher energy levels. (This absorption process is critical to setting up population inversion).
2.  **Non-radiative Decay:** The ions don't stay in these very high energy levels for long. They quickly (within nanoseconds) fall to a metastable state, let’s call it E₂, through a process called non-radiative decay. This means they lose energy as heat or vibrations within the crystal, not as light. The metastable state is crucial because ions can linger here for a relatively longer time (microseconds).
3.  **Population Inversion:** As the pumping continues and ions fall into the metastable state (E₂), and because they don't quickly decay further, we achieve population inversion – more Cr³⁺ ions are in the metastable state (E₂) than in the lower energy state (E₁), which is the ground state.
4.  **Spontaneous Emission:** Some ions in the metastable state will naturally decay to the ground state by emitting photons. This is **spontaneous emission**, and the emitted photons are randomly oriented and out of phase.
5.  **Stimulated Emission and Amplification:** If one of these spontaneously emitted photons happens to travel along the axis of the ruby rod and passes near another Cr³⁺ ion in the metastable state, it can trigger **stimulated emission**. The Cr³⁺ ion drops to the ground state, emitting a second photon that is identical to the first – same frequency, phase, and direction. These two photons then travel along the axis, stimulating more emissions, and the process cascades.
6.  **Laser Output:** The mirrors reflect these coherent photons back and forth, making them pass through the ruby rod repeatedly. Each pass amplifies the light. When the intensity of the light inside the cavity becomes high enough, a portion of it escapes through the partially reflective mirror as a **highly monochromatic, coherent, and directional beam of red light** (wavelength around 694.3 nm).

**Remember this:** The Ruby laser is a **pulsed laser**. This means it emits light in short, intense bursts, not continuously. The output is a distinct **red beam**. Think of it like a powerful camera flash going off repeatedly. This type of laser is excellent for applications where high peak power is needed, like in laser cutting of thin materials or certain types of medical procedures. Avadhanulu, Kshirsagar, and Murthy's "A Textbook of Engineering Physics" would provide detailed energy level diagrams for Cr³⁺ ions in Al₂O₃, illustrating these transitions beautifully.

## The CO2 Laser: The Workhorse

Now, let's switch gears to the **CO2 laser**, a gas laser that is incredibly versatile and widely used in industry and medicine. It was developed in the 1960s as well, shortly after the ruby laser, and is considered a workhorse due to its high power output and efficiency.

### Construction of a CO2 Laser

The construction is quite different from the ruby laser, featuring a gas mixture within a tube.

1.  **Active Medium:** The active medium here is a **gas mixture**, typically consisting of **Carbon Dioxide (CO₂)**, **Nitrogen (N₂)**, and Helium (He), often with a small amount of Water Vapor (H₂O) or Xenon (Xe). CO₂ molecules are the ones that actually emit the laser light. Nitrogen plays a crucial role in efficiently pumping the CO₂ molecules, and Helium helps in de-excitation and cooling.
2.  **Discharge Tube:** The gas mixture is contained within a **long, sealed tube**, usually made of glass or ceramic. This tube is often several meters long.
3.  **Pumping Source:** The pumping mechanism is an **electrical discharge** (a high-voltage current) passed through the gas mixture. This electrical discharge excites the gas molecules.
4.  **Optical Resonator:** Similar to the ruby laser, mirrors are used. However, for the CO2 laser, the mirrors are designed to reflect the **infrared radiation** that the CO2 molecules emit. One mirror is highly reflective, and the other is partially reflective. Often, the ends of the tube are fitted with **Brewster windows** – angled windows that transmit light polarized parallel to the plane of incidence, which helps in achieving polarization of the laser beam.

**Visualizing the Setup:** Imagine a long, hollow tube, like a fluorescent light tube, but much larger and filled with a specific gas mixture. Electrodes are placed at either end to pass an electric current. Mirrors are positioned at each end to confine the light.

### Working of a CO2 Laser

Let's trace the path of energy to understand how the CO2 laser works:

1.  **Pumping via Electrical Discharge:** A high voltage is applied across the electrodes, creating an electrical discharge in the gas mixture. This discharge excites the gas molecules through collisions with energetic electrons.
2.  **Nitrogen Excitation:** The energetic electrons preferentially excite the **Nitrogen (N₂) molecules** to a metastable vibrational state. Think of Nitrogen as the efficient "energy courier."
3.  **Energy Transfer (Resonance Excitation):** The excited Nitrogen molecules (N₂*) are at a specific energy level. Crucially, the first excited vibrational state of Nitrogen is very close in energy to one of the vibrational states of the **CO₂ molecules**. Through **collisional energy transfer**, the excited N₂ molecules transfer their energy to the CO₂ molecules. This is a highly efficient process, like a perfectly tuned transfer. The CO₂ molecules jump to a higher vibrational energy level.
4.  **Population Inversion:** This efficient energy transfer from N₂ to CO₂ creates population inversion in the CO₂ molecules. Specifically, it populates a particular **vibrational-rotational energy level** in the CO₂ molecule.
5.  **Stimulated Emission:** When a CO₂ molecule in this excited vibrational state is hit by a photon of the correct energy (corresponding to the energy difference between the excited state and a lower vibrational state), it emits an identical photon via stimulated emission. This process amplifies the light.
6.  **Laser Output:** The mirrors reflect these infrared photons back and forth, building up intensity. The output is a beam of **infrared radiation** (typically around 10.6 micrometers). This wavelength is invisible to the human eye, so you wouldn't see a visible beam unless you used a thermal viewer or dusted the beam path with a fluorescent powder. The CO2 laser is a **continuous wave (CW) laser**, meaning it can emit a constant beam of light as long as the discharge is maintained.

**Key Points for CO2 Lasers:**

*   **Wavelength:** The output is in the **infrared** region, which is crucial for many industrial applications like cutting and welding metals, as well as for medical surgery. This wavelength is strongly absorbed by water, which is why it's effective for biological tissue. (This connects to **CO1** by highlighting the specific properties of the laser beam).
*   **Efficiency:** CO2 lasers are known for their **high efficiency** (often 10-20%), meaning a good portion of the electrical energy input is converted into laser light.
*   **Power:** They can produce very **high power outputs**, ranging from watts to kilowatts, making them suitable for heavy-duty industrial tasks.
*   **Gas Mixture:** The specific ratio of CO₂, N₂, and He, along with the gas pressure and flow rate, are carefully controlled to optimize performance. Aruldhas's "Engineering Physics" often discusses the quantum mechanical basis of molecular vibrations and rotations, which explains the specific wavelengths emitted by CO2 lasers.

## Connecting to Course Outcomes

Let's see how these laser examples directly address our course outcomes:

*   **CO1 (Principles & Properties):** We've seen how stimulated emission, population inversion, and optical resonators lead to properties like coherence, monochromaticity, and directionality in both lasers. The specific wavelength (red for Ruby, infrared for CO2) and whether they are pulsed or continuous are also key properties discussed.
*   **CO3 (Quantum Mechanics):** The energy levels of atoms (Cr³⁺ ions) and molecules (CO₂), transitions between these levels, metastable states, and the process of stimulated and spontaneous emission are all rooted in quantum mechanics. Understanding these laser mechanisms provides a practical application of quantum principles.
*   **CO5 (Conduct Experiments):** While we haven't performed experiments here, understanding the construction and working principles is the first step towards designing and setting up laser experiments, or even troubleshooting existing ones. Imagine calibrating the mirrors or adjusting the gas pressure in a CO2 laser – these are practical experimental skills.

## Common Pitfalls and Exam Focus

When studying these lasers for exams, keep these in mind:

*   **Distinguish between Ruby and CO2:** Be clear about the active medium (solid vs. gas), pumping source (flash lamp vs. electric discharge), output wavelength (red vs. infrared), and operational mode (pulsed vs. continuous).
*   **Energy Level Diagrams:** While not always required to draw, understanding the concept of metastable states and energy transfer in CO2 lasers is vital.
*   **Role of each component:** For both lasers, know the function of the active medium, pumping source, and mirrors. In CO2 lasers, the role of N₂ and He is particularly important.
*   **Applications:** While the focus is construction and working, a brief mention of typical applications can solidify understanding and demonstrate the relevance.

## Sample Questions with Answers

Here are a few questions to test your understanding:

1.  **Conceptual Question:** What is the fundamental requirement for laser action, and how is it achieved in a Ruby laser?
    *   **Answer:** The fundamental requirement is population inversion, meaning more atoms in an excited state than in a lower energy state. In a Ruby laser, this is achieved by pumping the Cr³⁺ ions in the ruby crystal using an intense flash lamp, exciting them to higher energy levels, from which they quickly fall to a metastable state.

2.  **Exam-Oriented Question:** Compare and contrast the construction and working principles of a Ruby laser and a CO2 laser, highlighting at least three key differences.
    *   **Answer:**
        *   **Active Medium:** Ruby laser uses a solid crystal (Cr³⁺ doped Al₂O₃), while CO2 laser uses a gas mixture (CO₂, N₂, He).
        *   **Pumping Source:** Ruby laser uses a flash lamp, whereas CO2 laser uses an electrical discharge.
        *   **Output Wavelength:** Ruby laser emits visible red light (approx. 694.3 nm), while CO2 laser emits infrared radiation (approx. 10.6 µm).
        *   **Mode of Operation:** Ruby lasers are typically pulsed, while CO2 lasers are usually continuous wave (CW).

3.  **Conceptual Question:** Explain the role of Nitrogen gas in a CO2 laser.
    *   **Answer:** Nitrogen gas (N₂) is used in the CO2 laser mixture to efficiently absorb energy from the electrical discharge, getting excited to a metastable vibrational state. This excited N₂ then transfers its energy through collisions to CO₂ molecules, populating the required upper laser level in CO₂. This process is called resonance excitation and is more efficient than direct excitation of CO₂ by electrons.

4.  **Exam-Oriented Question:** What are the essential components of any laser, and how do they contribute to producing laser light?
    *   **Answer:** Any laser requires:
        *   **Active Medium:** A material (solid, liquid, or gas) containing atoms or molecules that can be excited to emit light. It's where population inversion occurs.
        *   **Pumping Source:** An external energy source (like a flash lamp or electrical discharge) to excite the atoms/molecules in the active medium and create population inversion.
        *   **Optical Resonator (Cavity):** A system of mirrors that reflect the light back and forth through the active medium, allowing for amplification through stimulated emission, and also directing the output beam. One mirror is fully reflective, and the other is partially reflective to allow the laser beam to exit.

Keep practicing and visualizing these processes. Understanding these foundational lasers will make learning about more advanced laser systems and fiber optics much easier!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
