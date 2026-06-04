---
title: "Energy band diagram of p-n junction - Qualitative description of charge flow across a p-n junction - Forward and reverse biased p-n junctions"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 3: Semiconductor Physics"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d85"
status: "completed"
scrapedAt: "2026-05-20T16:41:38.067Z"
---
## Physics for Information Science: Module 3 - Semiconductor Physics

### Topic: Energy Band Diagram of a p-n Junction, Charge Flow, and Biased Junctions

Welcome, everyone, to our deep dive into the fascinating world of semiconductor physics! In this module, we've been building our understanding of how materials behave at the atomic and subatomic level, and today we're going to focus on one of the most fundamental building blocks of modern electronics: the **p-n junction**. Understanding this junction is absolutely crucial because it's the heart of diodes, transistors, and a whole host of other devices that power our digital world. This topic directly connects to our **Course Outcome 3 (CO3)** – applying semiconductor physics in engineering – and **Course Outcome 4 (CO4)** – describing the behavior of semiconductor materials in devices.

We'll be drawing insights from our textbooks, particularly "Engineering Physics" by Malik and Singh, and "Concepts of Modern Physics" by Beiser, as well as the excellent reference books like Pierret's "Semiconductor Devices Fundamentals" and Kittel's "Introduction to Solid State Physics."

Let's get started by first understanding what happens when we bring a p-type semiconductor and an n-type semiconductor together.

### The Energy Band Diagram: A Window into Semiconductor Behavior

Before we talk about the p-n junction itself, let's quickly recap what we mean by energy bands. Remember, in solids, the discrete energy levels of individual atoms broaden into bands due to the interaction of electrons in neighboring atoms. The two most important bands for us are:

*   **Valence Band:** This is the highest energy band that is completely filled with electrons at absolute zero temperature. These electrons are typically involved in bonding.
*   **Conduction Band:** This is the next higher energy band, which is typically empty or partially filled. Electrons in this band are free to move and conduct electricity.
*   **Band Gap ($E_g$):** The forbidden energy region between the valence band and the conduction band. Electrons need to gain energy equal to or greater than the band gap to jump from the valence band to the conduction band and contribute to conduction.

Now, let's consider our p-type and n-type semiconductors separately.

*   **p-type semiconductor:** In a p-type material, we have an excess of holes (absence of electrons) in the valence band. The Fermi level ($E_F$), which represents the energy level with a 50% probability of being occupied by an electron, is located closer to the valence band.
*   **n-type semiconductor:** In an n-type material, we have an excess of free electrons in the conduction band. The Fermi level ($E_F$) in an n-type material is located closer to the conduction band.

### Bringing p and n Together: The Formation of a p-n Junction

Imagine we have a single crystal of semiconductor material, and we dope one side with acceptor impurities (to make it p-type) and the other side with donor impurities (to make it n-type). When these two regions are brought into intimate contact, something remarkable happens at the interface – the **p-n junction**.

At the moment of formation (before any external voltage is applied), there's a significant difference in the concentration of free charge carriers across the junction:

*   **In the n-type region:** A high concentration of free electrons.
*   **In the p-type region:** A high concentration of holes.

This concentration difference drives a process called **diffusion**. Electrons from the n-side, where they are abundant, will diffuse across the junction into the p-side, where they are scarce. Similarly, holes from the p-side will diffuse into the n-side.

#### The Depletion Region and the Built-in Potential

Now, what happens as these charge carriers diffuse across the junction?

When an electron diffuses from the n-side to the p-side, it leaves behind a positively charged donor ion on the n-side. This is because the donor atom has given away its extra electron and is now a fixed positive ion.
Similarly, when a hole diffuses from the p-side to the n-side, it essentially recombines with an electron on the n-side, leaving behind a negatively charged acceptor ion on the p-side. Remember, acceptor atoms "accept" an electron to fill their valence shell, becoming negatively charged when they do.

These fixed, immobile ions – positive on the n-side and negative on the p-side – accumulate on either side of the metallurgical junction. This region, which becomes depleted of free mobile charge carriers (electrons and holes), is called the **depletion region** or **space-charge region**.

The accumulation of positive charges on the n-side and negative charges on the p-side creates an **electric field** across the depletion region, pointing from the positive n-side to the negative p-side. This electric field, in turn, creates a potential difference across the junction, known as the **built-in potential** ($V_{bi}$).

This built-in potential opposes further diffusion of majority carriers. It acts as a barrier, preventing more electrons from crossing from n to p and more holes from crossing from p to n. At equilibrium, the tendency for diffusion due to concentration gradients is balanced by the electric field and the resulting drift of carriers.

**So, how does this look on an energy band diagram?**

Let's visualize this. Before junction formation, the Fermi levels in the isolated p-type and n-type semiconductors are at different energies. When they are joined, for equilibrium to be established, the Fermi levels must align. This alignment can only occur if the energy bands bend.

At the junction, due to the built-in electric field, the conduction band on the p-side will be at a higher energy level than the conduction band on the n-side. Similarly, the valence band on the p-side will be higher than the valence band on the n-side. The energy difference between the Fermi levels in the n and p regions, when they were separated, is now manifested as the band bending, and the potential difference associated with this band bending is precisely the built-in potential ($V_{bi}$).

**Key takeaway:** The bending of energy bands at the p-n junction is a direct consequence of the built-in potential, which arises from the diffusion of charge carriers and the resulting formation of the depletion region. This built-in potential acts as a barrier to further diffusion. This understanding is vital for CO4.

### Qualitative Description of Charge Flow Across a p-n Junction

Even at equilibrium (no external voltage), there is always some charge flow happening, but it's a dynamic balance.

1.  **Diffusion Current:** As we discussed, due to the concentration gradient of majority carriers across the junction, electrons diffuse from the n-side to the p-side, and holes diffuse from the p-side to the n-side. This movement of charge constitutes a **diffusion current**. This current flows from p to n for electrons and n to p for holes.

2.  **Drift Current:** The electric field in the depletion region exerts a force on the minority carriers. Minority electrons in the p-side, which are few in number, are swept across the junction by the field towards the n-side. Similarly, minority holes in the n-side are swept across the junction towards the p-side. This movement of charge due to the electric field is called the **drift current**.

At equilibrium, these two currents are equal and opposite, resulting in no net current flow.

Think of it like a busy marketplace. People (charge carriers) are moving around randomly (diffusion). Some are being guided by a security guard (electric field) along a specific path (drift). At equilibrium, the number of people moving freely is exactly balanced by the number being guided.

This concept of balanced currents is fundamental to semiconductor device operation and relates to CO4.

### Biased p-n Junctions: Controlling the Flow

Now, what happens when we apply an external voltage across the p-n junction? This is where the magic of controlling current flow truly begins. We can apply voltage in two primary ways: **forward bias** and **reverse bias**.

#### 1. Forward-Biased p-n Junction

Imagine connecting the positive terminal of a battery to the p-side of the junction and the negative terminal to the n-side. This is **forward biasing**.

*   **Effect on the Depletion Region:** The applied external voltage ($V_A$) opposes the built-in potential ($V_{bi}$). Effectively, the barrier height is reduced to ($V_{bi} - V_A$). This reduction in the barrier potential causes the depletion region to **narrow**.
*   **Effect on Charge Flow:** With a reduced barrier, majority carriers now have enough energy to easily cross the junction. A large number of holes from the p-side are injected into the n-side, and a large number of electrons from the n-side are injected into the p-side. These injected carriers become minority carriers in the opposite region and diffuse away from the junction, where they can recombine. This results in a significant **forward current** flowing through the junction.
*   **Energy Band Diagram:** In forward bias, the energy bands bend less. The conduction band on the p-side is now only slightly higher in energy than the conduction band on the n-side. The Fermi level essentially shifts, and the difference in energy between the Fermi level on the p-side and the conduction band on the n-side (or vice-versa) decreases, allowing more carriers to cross.
*   **Current-Voltage (I-V) Characteristics:** In forward bias, the current increases exponentially with the applied voltage, following an equation similar to $I = I_0 (e^{V_A / nV_T} - 1)$, where $I_0$ is the reverse saturation current, $V_A$ is the applied voltage, $n$ is the ideality factor, and $V_T$ is the thermal voltage. You'll see a very small current initially, and then, once the applied voltage exceeds a certain threshold (the cut-in voltage or turn-on voltage, typically around 0.7V for silicon and 0.3V for germanium), the current rises dramatically.

**Relatable Analogy:** Think of a dam with a gate. The built-in potential is like the initial height of the water behind the dam. Forward biasing is like lowering the gate. When you lower the gate a little, a small amount of water flows. As you lower it further (increase forward voltage), much more water flows through.

This is directly related to CO3, as we are seeing how applying a voltage changes the behavior of the semiconductor junction, enabling current flow.

#### 2. Reverse-Biased p-n Junction

Now, let's connect the negative terminal of the battery to the p-side and the positive terminal to the n-side. This is **reverse biasing**.

*   **Effect on the Depletion Region:** The applied external voltage ($V_A$) now adds to the built-in potential ($V_{bi}$). The total barrier height increases to ($V_{bi} + V_A$). This increase in the barrier potential causes the depletion region to **widen**.
*   **Effect on Charge Flow:** With a larger barrier, it becomes much harder for majority carriers to cross the junction. The diffusion of majority carriers is effectively blocked. However, the electric field in the wider depletion region is stronger, and it effectively sweeps the *minority* carriers across the junction. Minority electrons from the p-side are pulled to the n-side, and minority holes from the n-side are pulled to the p-side. This results in a small, constant current flowing in the reverse direction, called the **reverse saturation current** ($I_0$). This current is primarily due to minority carriers and is largely independent of the applied reverse voltage, as long as breakdown doesn't occur.
*   **Energy Band Diagram:** In reverse bias, the energy bands bend even more significantly. The conduction band on the p-side is now much higher in energy than the conduction band on the n-side. The energy barrier is substantially increased, making it very difficult for majority carriers to traverse.
*   **Current-Voltage (I-V) Characteristics:** In reverse bias, the current is very small and almost constant, until a critical voltage known as the **breakdown voltage** is reached. At breakdown, the current increases very sharply, which can damage the device if not managed. Breakdown can occur due to two mechanisms: Zener breakdown and Avalanche breakdown.

**Relatable Analogy:** Using the dam analogy again, reverse biasing is like increasing the height of the dam's wall. The barrier becomes much higher, and very little water can flow over it. Only a few stray leaves or twigs (minority carriers) might be caught by the current and carried over, but the main flow is stopped.

This behavior is also a key aspect of CO3 and CO4, demonstrating how applying a reverse voltage drastically alters the current flow.

### Summary and Key Points to Remember

*   The **p-n junction** is formed at the interface of p-type and n-type semiconductors.
*   Diffusion of majority carriers creates a **depletion region** devoid of free carriers and establishes a **built-in potential** ($V_{bi}$).
*   The **energy band diagram** visually represents this by showing **band bending** due to the built-in potential.
*   At equilibrium, **diffusion current** is balanced by **drift current**.
*   **Forward bias** reduces the barrier potential, narrows the depletion region, and allows a large forward current. The current increases exponentially with applied voltage.
*   **Reverse bias** increases the barrier potential, widens the depletion region, and allows only a small reverse saturation current due to minority carriers.
*   Understanding these biased conditions is fundamental to how diodes and transistors function, directly enabling the application of semiconductor physics in engineering (CO3) and describing semiconductor device behavior (CO4).

**Exam Tip:** Be prepared to draw and explain the energy band diagrams for both unbiased, forward-biased, and reverse-biased p-n junctions. Also, understand the physical mechanisms behind the current flow in each case and how the depletion region width changes. The I-V characteristics are also frequently tested.

### Sample Questions with Answers

**1. Conceptual Question:** Explain why the Fermi levels must align in a p-n junction at equilibrium, even though they are at different energies in isolated p-type and n-type semiconductors.

**Answer:** At equilibrium, there can be no net flow of charge carriers. If the Fermi levels were not aligned, there would be a net potential difference and a resulting electric field that would drive a continuous flow of carriers from the region of higher Fermi energy to the region of lower Fermi energy. To achieve a state of no net current flow, the Fermi levels must align, indicating that the probability of occupation of energy states is consistent across the entire material. This alignment is achieved through the formation of the depletion region and the associated built-in potential, which effectively counteracts the initial tendency for diffusion. This relates to our understanding of equilibrium in CO2 and device behavior in CO4.

**2. Application/Diagrammatic Question:** Sketch the energy band diagram of a forward-biased p-n junction and qualitatively describe the charge flow.

**Answer:**
*   **Diagram:** The diagram would show the conduction band and valence band of the p-side higher than those of the n-side, but with a smaller energy difference compared to the unbiased case. The Fermi levels would be nearly aligned. The depletion region would be shown as narrow.
*   **Charge Flow Description:** In forward bias, the applied voltage reduces the potential barrier. Majority carriers (holes from p, electrons from n) now have sufficient energy to overcome the reduced barrier and diffuse across the junction. This leads to a significant injection of holes into the n-region and electrons into the p-region, resulting in a large forward current. The drift current, due to minority carriers, is still present but is overwhelmed by the diffusion current of majority carriers. This demonstrates the application aspect of CO3.

**3. Explanatory Question:** What is the role of the built-in potential in a p-n junction, and how does it change under reverse bias?

**Answer:** The built-in potential ($V_{bi}$) is the potential difference that develops across the depletion region of a p-n junction due to the diffusion of majority carriers and the formation of immobile ionized dopant atoms. It acts as a barrier that opposes further diffusion of majority carriers, establishing equilibrium. Under reverse bias, the applied voltage opposes the built-in potential, effectively increasing the total potential barrier across the junction. This increased barrier height causes the depletion region to widen and makes it much harder for majority carriers to cross, leading to a very small reverse current. This is crucial for understanding device behavior as per CO4.

**4. Comparative Question:** Compare and contrast the depletion region width and current flow in forward-biased and reverse-biased p-n junctions.

**Answer:**
*   **Depletion Region Width:**
    *   Forward Bias: Narrower than in the unbiased case.
    *   Reverse Bias: Wider than in the unbiased case.
*   **Current Flow:**
    *   Forward Bias: Large forward current, primarily due to diffusion of majority carriers, increasing exponentially with voltage.
    *   Reverse Bias: Very small, nearly constant reverse saturation current, primarily due to drift of minority carriers, until breakdown voltage is reached.

This comparative understanding is essential for CO3 and CO4.

Keep practicing these concepts, and you'll find that semiconductor physics, and thus the p-n junction, is not just theoretical but forms the very foundation of the technologies we interact with every day!
