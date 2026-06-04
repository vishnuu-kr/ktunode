---
title: "Light Emitting Diode"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 2: Semiconductor Devices"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f956a"
status: "completed"
scrapedAt: "2026-05-23T16:03:51.051Z"
---
# Physics for Electrical Science: Module 2 - Semiconductor Devices

## Topic: Light Emitting Diode (LED)

Welcome, everyone! Today, we're going to dive into a very practical and fascinating semiconductor device – the Light Emitting Diode, or LED. You see LEDs everywhere, don't you? From the tiny indicator lights on your chargers to the vibrant displays on your phones and the bright streetlights outside. Understanding how these work is fundamental to electrical science, and it directly relates to our course objective of understanding semiconductor behaviour and their applications.

This topic will help us achieve **CO1: Explain the fundamentals of Semiconductor Physics** by showing how the principles of P-N junctions lead to light emission, and **CO2: Describe the behaviour of semiconductor materials in semiconductor devices** by illustrating how specific material properties dictate the color and efficiency of the LED. It’s all about manipulating the electronic properties of semiconductors to create something useful.

### 1. The Fundamental Idea: Electroluminescence

So, what exactly is an LED? At its heart, it’s a special kind of diode – a P-N junction semiconductor device. But unlike a regular diode that just rectifies current, an LED is designed to *emit light* when a forward voltage is applied. This phenomenon is called **electroluminescence**.

Think of it like this: Imagine electrons and holes as tiny charged particles moving around in the semiconductor. In a normal P-N junction, when you apply a forward bias, these electrons from the N-side and holes from the P-side meet at the junction and recombine. This recombination process is where the magic happens for LEDs.

In most semiconductor materials, like Silicon or Germanium, when an electron and a hole recombine, the energy they release during this process is typically in the form of heat (phonons). This is why regular diodes get a bit warm. However, certain semiconductor materials have a special property called an **indirect band gap** or **direct band gap**.

*   **Indirect Band Gap Materials (e.g., Silicon, Germanium):** Here, for an electron to recombine with a hole, it needs to "change direction" in terms of momentum, and this requires the involvement of a phonon (a lattice vibration, i.e., heat). So, recombination mostly results in heat.
*   **Direct Band Gap Materials (e.g., Gallium Arsenide (GaAs), Gallium Phosphide (GaP), Indium Phosphide (InP)):** In these materials, the energy bands are aligned such that an electron can recombine directly with a hole without a significant change in momentum. This direct recombination releases the energy primarily as a **photon**, which is a particle of light!

This is the key: LEDs are made from **direct band gap semiconductors**. When a forward voltage is applied, electrons are injected into the P-region and holes into the N-region. They diffuse towards the junction, and at the junction, they recombine. This recombination releases energy in the form of photons, and if the material is designed correctly, these photons are in the visible spectrum, creating light.

**(Connection to Textbooks):** Beiser's "Concepts of Modern Physics" and Kittel's "Introduction to Solid State Physics" both provide excellent background on band theory, explaining the concepts of direct and indirect band gaps. Streetman and Banerjee's "Solid State Electronic Devices" goes into great detail on the physics of P-N junctions and the mechanisms of radiative and non-radiative recombination, which is crucial for understanding LED efficiency.

### 2. How it Works: The P-N Junction Under Forward Bias

Let’s visualize the P-N junction. We have a P-type semiconductor with an excess of holes and an N-type semiconductor with an excess of free electrons. When we connect a voltage source in forward bias (positive to P-side, negative to N-side), a few critical things happen:

1.  **Reduced Depletion Region:** The applied forward voltage pushes the majority carriers (holes in P, electrons in N) towards the junction. This effectively counteracts the built-in potential that creates the depletion region. The depletion region narrows.
2.  **Injection of Minority Carriers:** As the depletion region narrows and the barrier height is lowered, majority carriers from each side are injected across the junction into the opposite region. So, electrons from the N-side are injected into the P-side, becoming *minority carriers* in the P-region. Similarly, holes from the P-side are injected into the N-side, becoming *minority carriers* in the N-region.
3.  **Recombination and Photon Emission:** These injected minority carriers diffuse away from the junction into the neutral regions. As they diffuse, they encounter majority carriers of the opposite type. This is where recombination occurs. In direct band gap materials, this recombination releases energy as photons.

**Think of it like this:** Imagine a crowded room (the semiconductor). People are mostly in their designated areas (P-region with holes, N-region with electrons). When the music starts (forward bias voltage), people from both sides start mingling in the center (the junction). In our special LED "club," when two people (an electron and a hole) meet and mingle, instead of just bumping into each other, they emit a tiny flash of light! The energy released by their interaction is converted into light.

**(Course Outcome Link):** This directly demonstrates **CO2**, explaining how semiconductor materials behave under applied bias, leading to specific electronic and optical outputs.

### 3. The Color of the Light: Band Gap Energy

Now, you might be wondering, why do LEDs come in different colors – red, green, blue, yellow? The color of the emitted light is determined by the **energy of the emitted photons**. And the energy of the emitted photon is directly related to the **band gap energy ($E_g$)** of the semiconductor material used.

Remember Planck's relation from physics: $E = hf$, where $E$ is the energy of a photon, $h$ is Planck's constant, and $f$ is the frequency of the light. We also know that the speed of light ($c$) is related to frequency and wavelength ($\lambda$) by $c = f\lambda$, so $f = c/\lambda$. Substituting this, we get:

$E = \frac{hc}{\lambda}$

This equation is crucial! It tells us that the energy of the photon is inversely proportional to its wavelength. Shorter wavelengths correspond to higher energy photons, and longer wavelengths correspond to lower energy photons.

In an LED, the energy of the emitted photon during an electron-hole recombination is approximately equal to the band gap energy of the material. So, if the band gap is large, the emitted photon has high energy and thus a shorter wavelength (e.g., blue light). If the band gap is small, the emitted photon has lower energy and a longer wavelength (e.g., red light).

*   **Red LEDs:** Often use materials like Gallium Arsenide Phosphide (GaAsP) or Aluminum Gallium Arsenide (AlGaAs). These have smaller band gaps.
*   **Green/Yellow LEDs:** Might use Gallium Phosphide (GaP) or Aluminum Gallium Indium Phosphide (AlGaInP).
*   **Blue/White LEDs:** Typically use materials like Gallium Nitride (GaN) or Indium Gallium Nitride (InGaN), which have large band gaps. White light is usually achieved by combining different colored LEDs or by using a blue LED with a phosphor coating that converts some blue light into yellow or red light.

**(Exam Tip):** Be prepared to relate the color of the emitted light to the band gap energy of the semiconductor material. Understanding $E = hc/\lambda$ is key here.

**(Connection to Textbooks):** Avadhanulu, Kshirsagar, and Murthy's "A Textbook of Engineering Physics" and Malik and Singh's "Engineering Physics" will have sections discussing the relationship between band gap and emitted light wavelength, likely with diagrams of band structures.

### 4. Efficiency and External Quantum Efficiency ($\eta_{ext}$)

Not every electron-hole recombination in an LED produces an *emitted* photon that escapes the device. Several factors affect the efficiency of an LED. We often talk about:

*   **Internal Quantum Efficiency ($\eta_{int}$):** This is the ratio of photons generated internally to the number of electron-hole pairs that recombine. Some recombinations are non-radiative; they release energy as heat instead of light. Materials with direct band gaps have higher internal quantum efficiencies because radiative recombination is the dominant process.
*   **Light Extraction Efficiency ($\eta_{ext}$):** This is the ratio of photons that actually escape the semiconductor material and reach the outside to the photons generated internally. Factors like internal reflection (due to the high refractive index of semiconductors), absorption within the material, and the geometry of the LED chip can reduce this efficiency.

The **External Quantum Efficiency ($\eta_{ext}$)** is the product of these two:
$\eta_{ext} = \eta_{int} \times \eta_{ext}$ (using $\eta_{ext}$ for extraction is confusing, let's call it $\eta_{LE}$)
$\eta_{ext} = \eta_{int} \times \eta_{LE}$

Where:
*   $\eta_{int}$ = Number of emitted photons / Number of recombined electron-hole pairs
*   $\eta_{LE}$ = Number of escaped photons / Number of emitted photons

This is why advances in LED technology focus on both improving the radiative recombination in the semiconductor material itself and designing better structures to get the light out.

**(Analogy):** Imagine you're trying to shine a flashlight through a thick fog. The flashlight's bulb (internal efficiency) might be very bright, but if the fog is dense (internal absorption and reflection), not much light gets through to the outside observer (external efficiency).

**(Course Outcome Link):** Understanding efficiency relates to **CO2** by showing how material properties and device design influence the output. It also indirectly touches on **CO5** by implying the need for specific material properties and device structures to achieve desired performance.

### 5. LED Structure and Operation

A typical LED structure involves a P-N junction sandwiched between electrical contacts. The semiconductor material is usually grown on a substrate, and then a P-N junction is formed using doping techniques.

*   **Materials:** As discussed, direct band gap semiconductors like GaAs, GaP, InGaN, etc., are used.
*   **Doping:** Precisely controlled doping is essential to create the P and N regions and to achieve the desired band gap.
*   **Contacts:** Ohmic contacts are made to both the P and N regions for efficient current injection.
*   **Packaging:** The semiconductor chip is encapsulated in a transparent plastic or epoxy lens. This lens not only protects the chip but also helps in directing and possibly diffusing the emitted light. The shape of the lens can be designed to focus the light or spread it out.

When a forward voltage is applied, current flows. The recombination and light emission occur primarily within a small region around the junction. The light generated travels through the semiconductor material and the surrounding epoxy lens to reach our eyes.

**(Course Outcome Link):** This description reinforces **CO2** by explaining the practical implementation of semiconductor behavior in a device.

### 6. Applications of LEDs

The applications of LEDs are vast and ever-expanding due to their advantages like:

*   **High Efficiency:** Compared to incandescent bulbs.
*   **Long Lifespan:** Last much longer.
*   **Low Power Consumption:** Very energy efficient.
*   **Fast Switching Speed:** Can be turned on/off very quickly.
*   **Durability:** Solid-state devices, less prone to breakage.
*   **Compact Size:** Allows for innovative designs.
*   **Directionality:** Can be designed to emit light in a specific direction.

Some common applications include:

*   **Indicators:** Power-on lights, status lights on electronic devices.
*   **Lighting:** General illumination (bulbs, streetlights), architectural lighting, automotive lighting.
*   **Displays:** Seven-segment displays, LED matrices, full-color video screens.
*   **Optocouplers:** Isolating electrical circuits.
*   **Optical Communication:** As light sources in fiber optic systems (though lasers are more common for long distances).
*   **Medical Devices:** Phototherapy, pulse oximeters.
*   **Traffic Signals:** Highly visible and energy-efficient.

**(Course Outcome Link):** This section directly relates to **CO4: Apply the comprehended knowledge about laser and fiber optics in various engineering applications**. While LEDs are not lasers, their role as light sources in optical communication systems is a direct application area.

### 7. Comparing LEDs with Other Light Sources

It's useful to see how LEDs stack up against older technologies:

*   **Incandescent Bulbs:** Work by heating a filament until it glows. Very inefficient as most energy is lost as heat. Short lifespan.
*   **Fluorescent Lamps:** Use gas discharge and phosphor coatings. More efficient than incandescents but contain mercury and can flicker.
*   **Halogen Lamps:** Improved incandescent technology but still primarily heat-based.

LEDs offer a significant leap in efficiency, lifespan, and control, making them the dominant lighting technology today.

### Summary of Key Takeaways for LEDs

Remember these points as you revise:

*   LEDs are P-N junction devices that emit light through **electroluminescence** under forward bias.
*   They are made from **direct band gap semiconductors**.
*   The **color of the light** is determined by the **band gap energy ($E_g$)** of the material, related by $E = hc/\lambda$.
*   **Efficiency** is a critical parameter, influenced by internal quantum efficiency and light extraction efficiency.
*   LEDs are highly efficient, long-lasting, and versatile, with numerous applications in modern technology.

This foundational understanding of how semiconductor properties translate into optical output is vital for electrical science. It’s a beautiful interplay of quantum physics and practical engineering!

---

## Sample Questions and Answers

Here are a few questions to help you solidify your understanding, similar to what you might encounter in exams:

**Q1. What is the primary mechanism responsible for light emission in an LED?**

**Answer:** The primary mechanism is **electroluminescence**, which occurs when electron-hole pairs recombine in a direct band gap semiconductor under forward bias, releasing energy in the form of photons.

**Reasoning:** This directly tests the core concept of how an LED functions. It emphasizes the process of recombination and the material property (direct band gap) that enables light emission.

**Q2. Explain why different semiconductor materials are used to produce LEDs of different colors.**

**Answer:** The color of the light emitted by an LED is determined by the energy of the photons produced during electron-hole recombination. This energy is approximately equal to the **band gap energy ($E_g$)** of the semiconductor material. According to the equation $E = hc/\lambda$, higher band gap energies result in higher photon energies and thus shorter wavelengths (e.g., blue light), while lower band gap energies result in lower photon energies and longer wavelengths (e.g., red light). Therefore, by choosing semiconductor materials with different band gap energies, LEDs of various colors can be manufactured.

**Reasoning:** This question assesses the understanding of the relationship between band gap energy and emitted light color, requiring the recall of the relevant physical equation ($E = hc/\lambda$).

**Q3. What is the difference between internal quantum efficiency and light extraction efficiency in an LED?**

**Answer:**
*   **Internal Quantum Efficiency ($\eta_{int}$):** This refers to the ratio of the number of photons generated internally within the semiconductor material to the total number of electron-hole pairs that recombine. It indicates how effectively the recombination process converts electrical energy into light energy, as opposed to heat.
*   **Light Extraction Efficiency ($\eta_{LE}$):** This refers to the ratio of the number of photons that successfully escape the semiconductor chip and its packaging to the total number of photons generated internally. It accounts for losses due to internal reflections, absorption within the material, and scattering.

The **External Quantum Efficiency** is the product of these two efficiencies.

**Reasoning:** This question tests the student's knowledge of efficiency parameters, requiring them to define and differentiate between the two key contributors to the overall efficiency of an LED.

**Q4. True or False: Silicon-based LEDs are commonly used for visible light emission.**

**Answer:** **False.**

**Reasoning:** Silicon has an indirect band gap. While it exhibits electroluminescence, the recombination process is predominantly non-radiative (generating heat rather than light). Direct band gap semiconductors are required for efficient visible light emission in LEDs. Silicon is more commonly used in diodes for switching and rectification where light emission is not the desired output.
