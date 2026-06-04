---
title: "Formation of p-n junction"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 1: Semiconductor  Physics"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f955b"
status: "completed"
scrapedAt: "2026-05-23T16:03:39.445Z"
---
# PHYSICS FOR ELECTRICAL SCIENCE

## MODULE 1: SEMICONDUCTOR PHYSICS

### TOPIC: FORMATION OF P-N JUNCTION

Welcome, everyone! Today, we're diving into one of the most fundamental building blocks of modern electronics: the **p-n junction**. Understanding how this junction forms and behaves is absolutely crucial for grasping how diodes, transistors, and practically every semiconductor device works. This topic directly supports **Course Outcome 1 (CO1): Explain the fundamentals of Semiconductor Physics** and **Course Outcome 2 (CO2): Describe the behaviour of semiconductor materials in semiconductor devices**. As we go through this, keep asking yourself: "How does this relate to the devices I see around me?"

### 1. Recap: The Essence of Semiconductors

Before we talk about the junction, let's quickly remember what makes semiconductors special. Unlike conductors (like metals) where electrons flow freely, or insulators (like glass) where electrons are tightly bound, semiconductors have a conductivity that lies *in between*. Their conductivity can be manipulated.

The most common semiconductors are from Group IV of the periodic table, like **Silicon (Si)** and **Germanium (Ge)**. In their pure, crystalline form, each atom is bonded to its neighbors via covalent bonds. These electrons are mostly localized in these bonds. At absolute zero temperature (0 Kelvin), a pure semiconductor acts like an insulator because all electrons are stuck in the valence band.

However, as we increase the temperature, some of these covalent bonds break, releasing electrons into the conduction band. These free electrons can conduct electricity. What’s equally important is that when an electron leaves a covalent bond, it leaves behind a "hole" – a vacancy where an electron should be. These holes can also move, acting as positive charge carriers. This is a key concept from Beiser's "Concepts of Modern Physics" – the idea of intrinsic carriers.

### 2. Doping: Creating 'Impurities' with Purpose

Pure semiconductors are useful, but their conductivity is very limited and highly temperature-dependent. To make them practical, we deliberately introduce impurities – a process called **doping**. This is where we start to tailor their electrical properties.

#### 2.1 N-Type Semiconductors: Excess Electrons

Imagine we take pure silicon and add a small, controlled amount of an element from Group V of the periodic table, like **Phosphorus (P)** or **Arsenic (As)**. These atoms have five valence electrons. When a phosphorus atom replaces a silicon atom in the crystal lattice, four of its valence electrons form covalent bonds with neighboring silicon atoms. The *fifth* valence electron, however, is loosely bound to the phosphorus atom.

Think of the phosphorus atom as a parent with five children, and the silicon crystal needs four to help build houses (covalent bonds). The fifth child is a bit of a free spirit, not really participating in the house-building, easily able to wander off. This fifth electron requires very little energy to break free and become a mobile charge carrier in the conduction band.

In n-type semiconductors, the doping atoms are called **donor atoms** because they donate free electrons. The majority charge carriers are **electrons**, and the minority charge carriers are **holes**. The conductivity is primarily due to these excess electrons. As Malik and Singh explain in "Engineering Physics," this process significantly increases conductivity compared to the intrinsic state.

#### 2.2 P-Type Semiconductors: Excess Holes

Now, what if we dope silicon with an element from Group III, like **Boron (B)** or **Gallium (Ga)**? These atoms have only three valence electrons. When a boron atom replaces a silicon atom, it can form only three covalent bonds with its neighbors. There's a missing electron needed to complete the fourth bond.

Here, the boron atom is like a parent needing four children to help build a house, but only having three. The incomplete bond creates a vacancy, a **hole**. This hole can readily accept an electron from a neighboring atom's covalent bond, effectively causing the hole to move.

In p-type semiconductors, the doping atoms are called **acceptor atoms** because they readily accept electrons, creating holes. The majority charge carriers are **holes**, and the minority charge carriers are **electrons**. The conductivity is primarily due to these holes. Avadhanulu, Kshirsagar, and Arun Murthy, in their "A Textbook of Engineering Physics," emphasize that this introduction of acceptor impurities creates an abundance of mobile positive charge carriers (holes).

Remember this:
*   **N-type:** Donor impurities (Group V), majority carriers are **electrons**.
*   **P-type:** Acceptor impurities (Group III), majority carriers are **holes**.

This distinction is fundamental. It's like having two different types of cities: one filled with people who are always on the move (electrons in n-type) and another filled with people looking for a place to settle (holes in p-type).

### 3. The Magic Happens: Forming the P-N Junction

Now, let's bring these two types of semiconductors together. The **p-n junction** is formed when a piece of p-type semiconductor material is brought into intimate contact with a piece of n-type semiconductor material. This isn't just like sticking two magnets together; it's achieved through precise manufacturing processes, often by diffusing one type of dopant into a region of the other, or by growing one type of material on top of another. Streetman and Banerjee, in "Solid State Electronic Devices," describe these fabrication techniques in detail.

What happens at this interface? This is where the fascinating physics kicks in.

#### 3.1 Diffusion Current: The Initial Shuffle

Initially, when the p-type and n-type materials are joined, there's a large concentration gradient of charge carriers across the junction.

*   In the p-side, there are many holes (majority carriers) and few electrons (minority carriers).
*   In the n-side, there are many electrons (majority carriers) and few holes (minority carriers).

Due to this concentration difference, holes from the p-side will naturally diffuse across the junction into the n-side, where there are fewer holes. Similarly, electrons from the n-side will diffuse across the junction into the p-side, where there are fewer electrons. This movement of charge carriers across the junction due to concentration differences is called **diffusion current**. It's like people from a crowded city moving to a less crowded one.

#### 3.2 Formation of the Depletion Region (Space Charge Region)

As holes diffuse from the p-side to the n-side, they leave behind immobile, negatively charged acceptor ions on the p-side (because the boron atom accepted an electron to become neutral, but the hole it left behind was mobile; when that hole moves away, the acceptor atom becomes negatively ionized).

Simultaneously, as electrons diffuse from the n-side to the p-side, they leave behind immobile, positively charged donor ions on the n-side (because the phosphorus atom donated an electron to become neutral; when that electron moves away, the donor atom becomes positively ionized).

So, on the p-side of the junction, we accumulate immobile negative charges, and on the n-side, we accumulate immobile positive charges. This region around the junction, which has been depleted of free mobile charge carriers and contains only fixed ionized impurities, is called the **depletion region** or **space charge region**. Kittel's "Introduction to Solid State Physics" covers this depletion region as a core concept.

Imagine a busy marketplace (p-side) and a quiet residential area (n-side). People from the marketplace start moving into the residential area. As they leave the marketplace, they leave behind empty stalls (negative ions). The people moving in also leave behind a trace of their origin. The residential area now has more visitors, but the original residents of the marketplace are now gone, leaving behind a trace of their presence (positive ions). The area right where the marketplace meets the residential area becomes a transition zone where the original activity has stopped, and only the "footprints" (ions) remain.

#### 3.3 The Built-in Potential (Barrier Potential)

The accumulation of positive charges on the n-side and negative charges on the p-side creates an electric field across the depletion region. This electric field points from the positive charges (n-side) to the negative charges (p-side).

This electric field opposes further diffusion of majority carriers. It acts as a barrier, preventing more holes from diffusing from the p-side to the n-side and more electrons from diffusing from the n-side to the p-side. This barrier electric field leads to a potential difference across the junction, known as the **built-in potential** or **barrier potential** ($V_{bi}$).

Think of it like a hill. The diffused carriers have to climb this hill (potential barrier). Once the barrier is established, it becomes difficult for majority carriers to cross. The built-in potential is a critical parameter. For silicon, it's typically around 0.6-0.7V at room temperature.

#### 3.4 Drift Current: The Counterbalance

As the built-in electric field is established, it exerts a force on any *minority* charge carriers present in the depletion region.

*   Minority electrons in the p-side are pushed by the electric field towards the n-side.
*   Minority holes in the n-side are pushed by the electric field towards the p-side.

This movement of minority carriers under the influence of the built-in electric field is called **drift current**.

At equilibrium, the rate of diffusion of majority carriers across the junction is exactly balanced by the rate of drift of minority carriers across the junction. The net current across the junction becomes zero. This is the state of **thermal equilibrium**. Pillai's "Solid State Physics" often details this equilibrium condition.

Remember this:
*   The junction initially has a **diffusion current** due to concentration gradients.
*   This creates a **depletion region** with immobile ions.
*   The ions create a **built-in electric field** and **built-in potential** ($V_{bi}$).
*   The electric field causes a **drift current** of minority carriers.
*   At equilibrium, **diffusion current = drift current**, and net current is zero.

### 4. Connecting to Course Outcomes

Let's see how this topic directly relates to our course objectives:

*   **CO1: Explain the fundamentals of Semiconductor Physics:** We've covered the basic properties of pure semiconductors, the concept of doping, and how it introduces majority and minority carriers. The formation of the p-n junction is a prime example of these fundamentals in action.
*   **CO2: Describe the behaviour of semiconductor materials in semiconductor devices:** The p-n junction *is* the basic semiconductor device. Understanding its formation explains why it can conduct electricity under certain conditions (which we'll cover in later topics like biasing). It explains the existence of a depletion region and a built-in potential, which are key to device operation.
*   **CO3: Explain Superconductivity and basic theory of dielectrics:** While this topic doesn't directly cover superconductivity or dielectrics, the fundamental understanding of charge carriers, energy bands, and material properties that we build here is essential for those later topics.
*   **CO4: Apply the comprehended knowledge about laser and fiber optics in various engineering applications:** Again, this is a foundational step. Lasers and optical fibers rely on semiconductor devices (like LEDs and photodiodes), whose operation is rooted in p-n junction physics.
*   **CO5: Apply basic knowledge of principles and theories in physics to conduct experiments:** Understanding *why* a p-n junction forms and behaves as it does allows us to design and interpret experiments that measure its properties, such as its I-V characteristics.

### 5. Key Takeaways for Exams

When asked about the formation of a p-n junction, make sure to explain:

1.  **What happens when p-type and n-type are joined:** Concentration gradient.
2.  **Diffusion:** Movement of majority carriers across the junction.
3.  **Depletion Region:** Formation due to immobile ions left behind by diffused carriers.
4.  **Built-in Potential:** Electric field and potential difference across the depletion region.
5.  **Drift Current:** Movement of minority carriers due to the built-in field.
6.  **Equilibrium:** Balance between diffusion and drift currents, resulting in zero net current.

It’s common to be asked to draw a schematic showing the depletion region, the built-in field, and the potential barrier. Make sure you can sketch this! Premlet B Phasor's "Advanced Engineering Physics" likely has excellent diagrams for this.

### Sample Questions and Answers

**Q1. What are the majority and minority charge carriers in an n-type semiconductor?**

**Answer:** In an n-type semiconductor, the majority charge carriers are **electrons**. This is because donor impurities (from Group V) donate extra electrons to the conduction band. The minority charge carriers are **holes**, which are generated by thermal excitation and are much fewer in number.

**Q2. Explain the origin of the built-in potential in a p-n junction.**

**Answer:** The built-in potential arises from the diffusion of majority carriers across the junction. When holes from the p-side diffuse into the n-side, they leave behind immobile negative acceptor ions. Similarly, when electrons from the n-side diffuse into the p-side, they leave behind immobile positive donor ions. This creates a region devoid of free carriers (the depletion region) with a net charge separation. This charge separation results in an electric field and a potential difference across the junction, known as the built-in potential, which opposes further diffusion.

**Q3. At thermal equilibrium in a p-n junction, what is the relationship between the diffusion current and the drift current?**

**Answer:** At thermal equilibrium, the p-n junction is in a stable state where there is no net flow of charge. This is achieved when the diffusion current (due to the concentration gradient of majority carriers moving across the junction) is exactly balanced in magnitude by the drift current (due to minority carriers being swept across the junction by the built-in electric field). Therefore, at equilibrium, **diffusion current = drift current**, and the net current across the junction is zero.

**Q4. Why is the depletion region called "depletion" or "space charge" region?**

**Answer:** It is called the **depletion region** because it is depleted of free mobile charge carriers (electrons and holes). The mobile carriers have diffused away from this region, leaving behind only the immobile, fixed ionized impurity atoms (negative ions on the p-side and positive ions on the n-side). It is called the **space charge region** because of the presence of these net uncompensated immobile charges, which create an electric field and the built-in potential.

**Q5. Draw a schematic diagram illustrating the formation of a p-n junction, showing the depletion region, the built-in electric field, and the potential barrier.**

**Answer:**
*(Student should draw a diagram with:)*
*   *A p-type region and an n-type region separated by a junction.*
*   *The depletion region centered around the junction.*
*   *Negative signs indicating immobile ions on the p-side of the depletion region.*
*   *Positive signs indicating immobile ions on the n-side of the depletion region.*
*   *An arrow indicating the electric field pointing from the n-side to the p-side within the depletion region.*
*   *A potential energy diagram showing a "hill" or barrier on the n-side and a dip on the p-side, representing the built-in potential difference.*

This concludes our discussion on the formation of the p-n junction. This is the foundation upon which all semiconductor device operation is built. Make sure to review these concepts thoroughly!
