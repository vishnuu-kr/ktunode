---
title: "Semiconductor Physics"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 3: Semiconductor Physics"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d7d"
status: "completed"
scrapedAt: "2026-05-20T16:41:23.403Z"
---
Absolutely! Here are comprehensive study notes for "Semiconductor Physics" from Module 3 of "Physics for Information Science," designed to be engaging, informative, and exam-oriented, just like a professor would deliver them.

---

# Physics for Information Science: Module 3 - Semiconductor Physics

Welcome, everyone! Today, we're diving into a topic that forms the bedrock of all modern electronics and, by extension, much of the information age itself: **Semiconductor Physics**. If you've ever wondered how your smartphone, your computer, or even the intricate circuits that manage our digital world actually work, you're in the right place. We'll be exploring the unique electrical properties of semiconductor materials, and how we harness these properties to create the devices that power our information-driven lives. This module directly ties into our Course Outcome 3: *Apply the fundamentals of Semiconductor Physics in engineering* and Course Outcome 4: *Describe the behaviour of semiconductor materials in semiconductor devices*. Understanding these fundamentals is key to truly grasping how technology functions at its core.

---

## 1. Introduction: What are Semiconductors and Why Should We Care?

We've all heard of conductors (like copper wires that carry electricity effortlessly) and insulators (like rubber or glass that block it). Semiconductors, as the name suggests, sit somewhere in between. They aren't as good at conducting electricity as metals, but they aren't completely resistant either. This "in-between" nature is precisely what makes them so incredibly useful. Think of it like a faucet: a conductor is like a fully open tap, an insulator is a completely closed one, and a semiconductor is like a tap that you can precisely control. You can turn it on, turn it off, or set it to a trickle – all by applying specific external influences.

This controllability is the magic ingredient that allows us to build **transistors**, the fundamental building blocks of all integrated circuits (ICs) and microprocessors. Without semiconductors, the miniaturization and complexity of modern electronic devices would be impossible. As Arthur Beiser rightly points out in *Concepts of Modern Physics*, understanding the behavior of electrons in these materials at the atomic and subatomic level is crucial. This brings us to our Course Outcome 2: *Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics*. We’ll need a little bit of quantum mechanics to truly appreciate why semiconductors behave the way they do.

---

## 2. The Atomic Structure and Bonding in Semiconductors

To understand semiconductor behavior, we first need to look at the materials themselves and how their atoms are arranged and interact. The most important semiconductors we deal with are from Group IV of the periodic table, primarily **Silicon (Si)** and **Germanium (Ge)**.

### 2.1 Covalent Bonding: The Heart of the Matter

Imagine atoms as tiny solar systems with electrons orbiting the nucleus. In solids, these atoms come together and share their outer electrons to achieve a more stable configuration. In semiconductors like Silicon, each atom has **four valence electrons** (electrons in the outermost shell).

In a silicon crystal, each silicon atom forms **covalent bonds** with its four nearest neighbors. What does this mean? It means each atom *shares* one of its valence electrons with each of its four neighbors, and in turn, receives one electron from each neighbor. So, effectively, each silicon atom feels like it has eight electrons in its outer shell – a stable octet, similar to noble gases.

*   **Analogy:** Think of a group of friends sitting around a table, each with four playing cards. To have a complete hand (say, eight cards), they decide to pass one card to each of their four neighbors and receive one card from each. This way, everyone feels like they have a full set. This shared ownership is the essence of covalent bonding.

This strong, directional covalent bonding leads to a very regular, crystalline structure, like the diamond lattice structure for silicon. This ordered structure is essential for their electrical properties.

### 2.2 Energy Bands: The Quantum Mechanical View

Now, this is where quantum mechanics, as mentioned in Course Outcome 2, becomes indispensable. When atoms are far apart, their electrons occupy discrete energy levels. However, when they come close together in a crystal, these discrete energy levels interact and broaden into **energy bands**.

*   **Valence Band:** This is the highest energy band that is completely filled with electrons at absolute zero temperature (0 Kelvin). These are the electrons involved in covalent bonding.
*   **Conduction Band:** This is the next higher energy band, which is empty at absolute zero. Electrons in this band are free to move and contribute to electrical conduction.
*   **Band Gap (Eg):** This is the crucial concept. The band gap is the energy difference between the top of the valence band and the bottom of the conduction band. There are no allowed energy states for electrons within this gap.

Think of energy bands like floors in a building. The valence band is the ground floor, full of people (electrons) who are tied to their seats (atoms). The conduction band is the first floor, empty and accessible. The band gap is the staircase or elevator shaft – a region that electrons need to "jump" across to become free and mobile.

**Remember this:** The size of the band gap is what fundamentally differentiates conductors, semiconductors, and insulators.

*   **Conductors:** Have overlapping valence and conduction bands, or a very small band gap. Electrons can easily move into the conduction band with minimal energy.
*   **Insulators:** Have a very large band gap (typically > 4 eV). A huge amount of energy is required for electrons to jump from the valence to the conduction band, making them poor conductors.
*   **Semiconductors:** Have a moderate band gap (typically 0.5 eV to 3 eV). At absolute zero, they behave like insulators. However, at room temperature, some electrons gain enough thermal energy to jump across the gap into the conduction band, making them conductors. This is the core of their controllable conductivity.

According to H.K. Malik and A.K. Singh in *Engineering Physics*, the band gap for Silicon is around 1.1 eV and for Germanium is around 0.7 eV. This is why silicon is predominantly used in modern electronics – its band gap is ideal for operation at room temperatures.

---

## 3. Electrical Conductivity in Semiconductors: The Role of Temperature and Impurities

Now that we understand the band structure, let's explore how semiconductors conduct electricity. This directly relates to Course Outcome 1: *Explain electrical conductivity*.

### 3.1 Intrinsic Semiconductors: Pure but Limited

A semiconductor in its purest form is called an **intrinsic semiconductor**. At absolute zero (0 K), all valence electrons are tightly bound in covalent bonds. The valence band is full, and the conduction band is empty. Therefore, an intrinsic semiconductor behaves like an insulator.

As the temperature increases, thermal energy (kT) causes some valence electrons to gain enough energy to break free from their covalent bonds and jump into the conduction band. When an electron leaves the valence band, it leaves behind a vacancy, a "missing" electron. This vacancy is called a **hole**.

*   **Analogy:** Imagine a row of tightly packed chairs. If one person gets up and moves to a different, empty room (the conduction band), their chair becomes empty. Someone else from an adjacent chair might move into that empty chair, making *that* chair empty, and so on. This movement of the empty chair is like the movement of a hole.

In an intrinsic semiconductor, both **electrons** (in the conduction band) and **holes** (in the valence band) are free to move under the influence of an electric field and contribute to current. However, their numbers are equal and relatively small, especially at lower temperatures. This is why intrinsic semiconductors are not very useful for practical applications.

The conductivity ($\sigma$) of an intrinsic semiconductor is given by:
$\sigma = n_i e (\mu_n + \mu_p)$
where:
*   $n_i$ is the intrinsic carrier concentration (number of electrons and holes per unit volume)
*   $e$ is the electronic charge
*   $\mu_n$ is the electron mobility
*   $\mu_p$ is the hole mobility

The key takeaway is that in intrinsic semiconductors, conductivity is highly dependent on temperature. As temperature increases, $n_i$ increases exponentially, leading to a significant increase in conductivity. This is a fundamental difference compared to metals, where conductivity generally decreases with increasing temperature due to increased scattering of electrons.

### 3.2 Extrinsic Semiconductors: The Power of Doping

The real power of semiconductors comes from a process called **doping**. Doping is the intentional addition of a small, controlled amount of impurity atoms into the intrinsic semiconductor crystal lattice. This dramatically alters the conductivity and makes them much more useful for electronic devices. This is where we start seeing the application of semiconductor physics in engineering (CO3) and describing semiconductor behavior in devices (CO4).

There are two main types of extrinsic semiconductors:

#### 3.2.1 N-type Semiconductors: More Electrons

We create an N-type semiconductor by doping an intrinsic semiconductor (like Silicon) with **pentavalent impurity atoms**. These are atoms with **five valence electrons**, such as Phosphorus (P), Arsenic (As), or Antimony (Sb).

When a pentavalent atom replaces a silicon atom in the crystal lattice, four of its valence electrons form covalent bonds with the neighboring silicon atoms. The fifth valence electron is loosely bound to the impurity atom. It requires very little energy (much less than the band gap) to break free from this impurity atom and move into the conduction band.

*   **Analogy:** Imagine our friends around the table again. If we introduce a new friend who already has an extra card (the fifth valence electron), this extra card can easily be used by anyone who needs it. This extra card becomes a "free" card available for movement.

In N-type semiconductors:
*   The impurity atoms are called **donors** because they donate free electrons to the conduction band.
*   **Electrons** become the **majority carriers** (the dominant charge carriers contributing to current).
*   **Holes** are the **minority carriers**.
*   The Fermi level (a conceptual energy level related to the probability of electron occupation) shifts closer to the conduction band.

The conductivity of an N-type semiconductor is approximately:
$\sigma \approx n e \mu_n$
where $n$ is the concentration of free electrons (primarily from donor atoms).

#### 3.2.2 P-type Semiconductors: More Holes

We create a P-type semiconductor by doping an intrinsic semiconductor with **trivalent impurity atoms**. These are atoms with **three valence electrons**, such as Boron (B), Aluminum (Al), Gallium (Ga), or Indium (In).

When a trivalent atom replaces a silicon atom, it only has three valence electrons to share. It forms covalent bonds with three neighboring silicon atoms, but there's a shortage of one electron to complete the fourth bond. This creates a vacancy, or a **hole**, in the covalent bond structure. An electron from a neighboring silicon atom can easily jump into this hole, effectively making the hole appear to move.

*   **Analogy:** Now imagine a friend who is missing a card from their hand. To complete their set, they might "borrow" a card from a neighbor, leaving the neighbor's chair empty. The empty chair (hole) then moves to the person who "borrowed" the card.

In P-type semiconductors:
*   The impurity atoms are called **acceptors** because they accept electrons from the valence band, creating holes.
*   **Holes** become the **majority carriers**.
*   **Electrons** are the **minority carriers**.
*   The Fermi level shifts closer to the valence band.

The conductivity of a P-type semiconductor is approximately:
$\sigma \approx p e \mu_p$
where $p$ is the concentration of holes (primarily from acceptor atoms).

**Exam Tip:** You'll often be asked to explain the difference between N-type and P-type semiconductors and how doping affects their conductivity. Remember that doping increases the carrier concentration significantly, making the semiconductor much more conductive than its intrinsic counterpart. The type of impurity (pentavalent for N-type, trivalent for P-type) determines whether electrons or holes are the majority carriers.

---

## 4. The p-n Junction: The Foundation of Semiconductor Devices

This is where it all comes together! The **p-n junction** is formed by joining a P-type semiconductor and an N-type semiconductor. This seemingly simple junction is the basis for diodes, transistors, and virtually all other semiconductor devices. This is directly related to CO4: *Describe the behaviour of semiconductor materials in semiconductor devices*.

When a P-type material is brought into intimate contact with an N-type material:

1.  **Diffusion:** Due to the concentration gradients, majority carriers from both sides start to diffuse across the junction. Electrons from the N-side diffuse into the P-side, and holes from the P-side diffuse into the N-side.

2.  **Recombination:** When an electron from the N-side diffuses into the P-side, it encounters holes. The electron and hole combine (recombine) and disappear as free carriers. Similarly, holes from the P-side that diffuse into the N-side recombine with free electrons there.

3.  **Formation of the Depletion Region:** As diffusion and recombination occur, they leave behind immobile charged ions at the junction. On the N-side, the donor atoms that have lost their free electrons become positively charged (immobile positive ions). On the P-side, the acceptor atoms that have accepted electrons (effectively losing holes) become negatively charged (immobile negative ions). This region around the junction, depleted of free charge carriers, is called the **depletion region** or **space-charge region**.

4.  **Built-in Electric Field and Potential Barrier:** The accumulation of positive ions on the N-side and negative ions on the P-side creates an electric field across the depletion region. This electric field points from the N-side to the P-side. This electric field opposes further diffusion of majority carriers. It also creates a **potential barrier** or **built-in potential ($V_{bi}$)** that prevents more electrons from diffusing from N to P and more holes from diffusing from P to N. At equilibrium, the rate of diffusion is balanced by the drift of carriers caused by this built-in field, and there is no net current.

*   **Analogy:** Imagine two rooms, one full of blue marbles (N-type, electrons) and the other full of red marbles (P-type, holes). If you open a door between them, marbles will naturally roll from the crowded side to the less crowded side. As marbles cross, they might get stuck and disappear (recombine). Where marbles disappear, you are left with "imprints" of the original marbles. The blue marbles leave behind their empty spots (positive ions), and the red marbles leave behind their negative imprints (negative ions). This creates a charged area near the doorway that pushes back incoming marbles, eventually stopping the flow. This charged area is the depletion region, and the push-back is the potential barrier.

### 4.1 Forward Bias

When an external voltage is applied across the p-n junction such that the positive terminal of the voltage source is connected to the P-side and the negative terminal to the N-side, the junction is said to be **forward-biased**.

*   The applied external electric field opposes the built-in electric field.
*   This reduces the width of the depletion region and lowers the potential barrier.
*   If the applied voltage is greater than the built-in potential, majority carriers can now easily overcome the reduced barrier and flow across the junction.
*   Electrons from the N-side diffuse into the P-side and recombine with holes, and holes from the P-side diffuse into the N-side and recombine with electrons.
*   This results in a large forward current. The current increases exponentially with the applied forward voltage.

*   **Analogy:** Continuing the marble analogy, if you now push more strongly from the blue marble side (N-type) and pull slightly from the red marble side (P-type), you overcome the barrier, and marbles flow freely.

### 4.2 Reverse Bias

When an external voltage is applied such that the negative terminal of the voltage source is connected to the P-side and the positive terminal to the N-side, the junction is said to be **reverse-biased**.

*   The applied external electric field aids the built-in electric field.
*   This increases the width of the depletion region and increases the potential barrier.
*   The flow of majority carriers across the junction is effectively stopped.
*   However, a very small current, called the **reverse saturation current**, still flows. This current is due to the minority carriers (electrons in the P-side, holes in the N-side) that are swept across the junction by the strong electric field. This current is largely independent of the applied reverse voltage until breakdown occurs.

*   **Analogy:** If you push from the red marble side (P-type) and pull from the blue marble side (N-type), you strengthen the barrier. Only a few stray marbles that happen to be near the barrier might be pulled across by the strong force, but the main flow is blocked.

**The p-n junction diode:** This behavior—allowing current to flow easily in one direction (forward bias) and blocking it in the other (reverse bias)—is the defining characteristic of a diode. This is a direct application of semiconductor physics in engineering (CO3) and a prime example of the behavior of semiconductor materials in devices (CO4).

---

## 5. Basic Semiconductor Devices: Diodes and Transistors

We've seen how the p-n junction works. Now let's touch upon what it enables.

### 5.1 The Diode: A One-Way Street for Electricity

As discussed, a simple p-n junction acts as a diode. It's like an electronic check valve.

*   **Rectification:** Diodes are primarily used to convert AC (alternating current) to DC (direct current) in a process called rectification. They allow current to pass only during the positive half-cycles of an AC input.
*   **Switching:** They can also act as electronic switches.

### 5.2 The Transistor: The Amplifier and Switch

The transistor is arguably the most important invention of the 20th century. It's the fundamental building block of modern electronics. There are two main types:

*   **Bipolar Junction Transistor (BJT):** Consists of two p-n junctions, either NPN or PNP. A small current flowing into the base terminal controls a much larger current flowing between the collector and emitter terminals. This allows it to act as an amplifier.
*   **Field-Effect Transistor (FET):** The most common type is the MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor). In an FET, an electric field, controlled by a voltage applied to a gate electrode, modulates the conductivity of a semiconductor channel between two terminals (source and drain). This makes it an excellent voltage-controlled switch and amplifier.

Understanding the operation of these devices requires delving deeper into the physics of charge carrier transport and the interplay of electric fields, as covered in advanced texts like Pierret's *Semiconductor Devices Fundamentals* or Streetman & Banerjee's *Solid State Electronic Devices*.

---

## 6. Other Important Concepts in Semiconductor Physics

While the p-n junction is foundational, there are other concepts vital for a comprehensive understanding.

### 6.1 Carrier Mobility ($\mu$) and Conductivity ($\sigma$)

Mobility is a measure of how easily charge carriers (electrons and holes) can move through a semiconductor material under the influence of an electric field. It's essentially their average drift velocity per unit electric field.

$\mu = \frac{v_d}{E}$

Where:
*   $v_d$ is the drift velocity
*   $E$ is the electric field strength

Higher mobility means carriers move more easily, leading to higher conductivity. Mobility is affected by temperature and the presence of impurities (which cause scattering).

Conductivity ($\sigma$) is directly proportional to both carrier concentration ($n$ or $p$) and carrier mobility ($\mu$):
$\sigma = n e \mu_n + p e \mu_p$

This equation summarizes how both the number of carriers and their ease of movement contribute to electrical conduction.

### 6.2 Carrier Generation and Recombination

In addition to thermal generation (which creates electron-hole pairs), other processes can generate or recombine carriers:

*   **Optical Generation:** When a photon with energy greater than the band gap strikes a semiconductor, it can excite an electron from the valence band to the conduction band, creating an electron-hole pair. This is the principle behind **photodiodes** and **solar cells**. This relates to Course Outcome 2 as it involves quantum interactions of light with matter.
*   **Recombination:** As discussed with the p-n junction, electrons and holes can recombine, releasing energy. This energy can be emitted as light (in **LEDs** and **lasers**) or dissipated as heat.

### 6.3 Hall Effect

The Hall effect is a phenomenon observed when a current-carrying conductor or semiconductor is placed in a magnetic field perpendicular to the current. A voltage, known as the **Hall voltage**, is developed across the material, perpendicular to both the current and the magnetic field.

*   The Hall effect is crucial because it allows us to determine:
    *   The **type of majority carrier** (electron or hole) in a semiconductor.
    *   The **carrier concentration**.
    *   The **mobility** of the carriers.

This technique, often covered in practical lab sessions (CO5), is invaluable for characterizing semiconductor materials.

---

## 7. Summary and Key Takeaways

Let's quickly recap the main points.

*   **Semiconductors** (like Si, Ge) have conductivity between conductors and insulators, primarily due to their **band gap**.
*   Their electrical properties are governed by **covalent bonding** and the formation of **energy bands** (valence and conduction bands).
*   **Intrinsic semiconductors** are pure but have limited conductivity.
*   **Doping** with **pentavalent** (donor) or **trivalent** (acceptor) impurities creates **N-type** and **P-type** extrinsic semiconductors, respectively, dramatically increasing conductivity.
*   The **p-n junction**, formed by joining P-type and N-type materials, creates a **depletion region** and a **potential barrier**.
*   Applying voltage creates **forward bias** (low resistance, high current) or **reverse bias** (high resistance, low current), enabling devices like **diodes**.
*   The ability to control current flow via doping and junctions is fundamental to transistors, amplifiers, and switches.
*   Concepts like **mobility**, **carrier generation/recombination**, and the **Hall effect** are essential for understanding and characterizing semiconductor materials and devices.

Understanding these principles is not just about memorizing facts; it's about grasping the fundamental physics that enables all the electronic devices we rely on daily.

---

## Sample Questions with Answers

Here are a few questions that touch upon the concepts we've discussed, relevant for exams and understanding.

**Q1: What is the primary reason semiconductors are so crucial in modern electronics?**

**Answer:** The primary reason is their **controllable conductivity**. Unlike conductors (always on) and insulators (always off), semiconductors can be made to conduct or resist electricity based on external factors like temperature, light, or applied voltage. This controllability, particularly through doping and the formation of p-n junctions, allows us to build complex devices like transistors that can amplify signals and act as switches, forming the basis of all integrated circuits.

**Q2: Explain how doping with a pentavalent impurity creates an N-type semiconductor.**

**Answer:** When a pentavalent impurity atom (like Phosphorus, with 5 valence electrons) is introduced into the crystal lattice of a semiconductor like Silicon (which has 4 valence electrons), the impurity atom forms covalent bonds with four neighboring silicon atoms. Four of its valence electrons are used in these bonds. The fifth valence electron, however, is only loosely bound to the impurity atom. This fifth electron requires very little energy to break free and enter the conduction band, becoming a free charge carrier. Since these impurity atoms donate an extra electron to the conduction band, they are called "donor" atoms, and the resulting semiconductor, with an excess of free electrons, is an N-type semiconductor. Electrons become the majority charge carriers in N-type material.

**Q3: What is the depletion region in a p-n junction, and how is it formed?**

**Answer:** The depletion region (or space-charge region) is a region around the interface of a p-n junction that is depleted of free charge carriers (electrons and holes). It is formed due to the diffusion of majority carriers across the junction immediately after joining P-type and N-type materials. Electrons from the N-side diffuse into the P-side and recombine with holes, and holes from the P-side diffuse into the N-side and recombine with electrons. This process leaves behind immobile charged impurity ions: positively charged donor ions on the N-side (where electrons have been lost) and negatively charged acceptor ions on the P-side (where holes have been effectively lost). The accumulation of these fixed charges creates an internal electric field and a potential barrier that opposes further diffusion, thus "depleting" the region of free carriers.

**Q4: How does the conductivity of a semiconductor differ from that of a metal as temperature increases?**

**Answer:**
*   **Semiconductors:** As temperature increases, more thermal energy is available to break covalent bonds, creating more electron-hole pairs. This **increases the carrier concentration** significantly, leading to a **marked increase in conductivity**.
*   **Metals:** In metals, the carrier concentration is already very high and relatively constant with temperature. As temperature increases, the lattice vibrations become more vigorous, leading to increased scattering of the free electrons. This **increases resistance** and therefore **decreases conductivity**.
This difference in temperature dependence is a key characteristic distinguishing semiconductors from metals.

---

I hope these notes provide a solid foundation for your understanding of Semiconductor Physics. This is a fascinating field, and its principles are critical for anyone interested in information science and technology. Keep exploring and asking questions!
