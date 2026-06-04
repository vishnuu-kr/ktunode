---
title: "Tunnel diode - V-I characteristics"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 2: Semiconductor Devices"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da220"
status: "completed"
scrapedAt: "2026-05-23T17:35:33.947Z"
---
# Module 2: Semiconductor Devices - Tunnel Diode V-I Characteristics

Welcome, everyone, to Module 2, where we delve into the fascinating world of semiconductor devices. Today, we’re going to shine a spotlight on a rather unique and important member of the semiconductor family: the **Tunnel Diode**. You’ve already built a strong foundation in semiconductor physics (that's your CO1!), and we’ve discussed how different materials behave within devices (CO2). The tunnel diode, with its peculiar V-I characteristics, is a perfect example of how quantum mechanical principles directly influence the macroscopic behavior of a semiconductor device.

## Understanding the Tunnel Diode: More Than Just a Regular Diode

Before we jump into the V-I characteristics, let’s quickly recap what makes a semiconductor diode work. We have a p-n junction, right? When we apply a forward bias, charge carriers move across the junction, and current flows. In reverse bias, carriers are swept away, and very little current flows, ideally.

Now, the tunnel diode is *different*. It’s a heavily doped p-n junction diode. What does "heavily doped" mean? It means we’ve packed in *way* more impurity atoms (dopants) than in a standard diode. Think of it like adding a massive amount of sugar to your tea – the concentration is incredibly high. This heavy doping has profound implications due to quantum mechanics, specifically **quantum tunneling**.

### Quantum Tunneling: The Secret Sauce

You might remember from your modern physics classes (Beiser, perhaps?) that quantum mechanics allows particles, like electrons, to do some rather counter-intuitive things. One of these is **tunneling**. Imagine you have a ball and you throw it at a wall. If you don't throw it hard enough, it bounces back, right? It doesn't go *through* the wall. But in the quantum world, if an electron encounters an energy barrier (like the depletion region in a p-n junction) that it classically shouldn't be able to overcome, there’s a finite probability that it can *tunnel* through it. This probability is higher if the barrier is thin.

And where do we find a very thin barrier? In a *heavily doped* p-n junction! The heavy doping leads to a very narrow depletion region. This thinness is crucial for the tunnel diode’s operation.

So, when we talk about the tunnel diode, remember that it's this quantum tunneling phenomenon, operating across a very narrow depletion region due to heavy doping, that gives it its distinctive characteristics. This is a direct link to CO1 (Fundamentals of Semiconductor Physics) and CO2 (Behavior of semiconductor materials in devices).

## The V-I Characteristics: A Curve Like No Other

Now, let's get to the heart of the matter: the Voltage-Current (V-I) characteristics of a tunnel diode. Unlike a regular diode that simply shows increasing current with increasing forward voltage, the tunnel diode exhibits a peculiar region where the current *decreases* as the voltage *increases*. This is called the **negative differential resistance** region.

Let’s break down the curve as we apply voltage, typically in the forward direction first.

### Region 1: Initial Conduction (Very Low Forward Bias)

As we apply a very small forward voltage ($V_F$ approximately 0 to 0.1V, though these values can vary), we start to see current flow. This current is primarily due to the tunneling of electrons. Electrons in the conduction band of the n-side have enough energy to tunnel directly into empty states in the valence band of the p-side. As we increase this small voltage, the overlap of these energy states increases, allowing more electrons to tunnel. So, the current rises rapidly. Think of it like opening a very narrow valve slightly – a small turn lets a little water through, and a tiny bit more opening lets a bit more through.

### Region 2: The Peak Current ($I_p$) and the Onset of Negative Resistance

As we continue to increase the forward voltage, something interesting happens. The energy bands start to shift relative to each other. The conduction band on the n-side begins to align with the *forbidden gap* on the p-side. Now, electrons can still tunnel, but the number of available *empty states* in the valence band of the p-side that they can tunnel *into* starts to decrease.

This is the critical part! Even though we’re applying more voltage, the *rate* at which electrons can tunnel is now limited by the availability of these empty states. So, as voltage increases, current starts to *decrease*. This is our famous **negative differential resistance (NDR)** region. It’s like that narrow valve where, as you try to open it further, the water flow actually starts to get restricted and might even go down for a bit.

The point where the current reaches its maximum in this initial rise is called the **peak current ($I_p$)**, and the voltage at which it occurs is the **peak voltage ($V_p$)**.

### Region 3: The Valley Current ($I_v$) and the End of Negative Resistance

As we increase the forward voltage further (beyond $V_p$), the energy bands shift even more. The conduction band on the n-side is now well below the valence band on the p-side. Tunneling becomes less significant. However, as the p-n junction starts to resemble a regular diode junction under forward bias, the normal diode conduction mechanism (diffusion of carriers across the junction, overcoming the potential barrier) begins to dominate.

So, after the current dips down in the NDR region, it starts to rise again. This minimum current point in the NDR region is called the **valley current ($I_v$)**, and the voltage at which it occurs is the **valley voltage ($V_v$)**. For a functional tunnel diode, we generally need $V_p < V_v$.

### Region 4: Normal Diode Conduction (Higher Forward Bias)

Beyond the valley voltage ($V > V_v$), the tunnel diode behaves much like a conventional p-n junction diode. The current increases exponentially with increasing forward voltage, driven by the diffusion of majority carriers across the junction. The tunneling current is now negligible compared to the diffusion current.

### Putting it Together: The V-I Curve Sketch

If you were to sketch this, you’d see an initial steep rise in current, followed by a dip (the NDR region), and then a more gradual, exponential rise similar to a regular diode. The peak current ($I_p$) and valley current ($I_v$), and their corresponding voltages ($V_p$ and $V_v$), are key parameters defining a specific tunnel diode.

*Diagram:* (Imagine a sketch here: X-axis is Forward Voltage (Vf), Y-axis is Forward Current (If). It starts from the origin, rises steeply to a peak (Ip, Vp), then drops to a valley (Iv, Vv), and then rises again in a curve similar to a normal diode but starting from a higher voltage than origin. The region between Vp and Vv has a negative slope.)

### Reverse Bias Characteristics

What happens when we apply a reverse bias? For a tunnel diode, the tunneling mechanism is still very effective under reverse bias because the bands are aligned to facilitate tunneling across the junction. Electrons from the valence band of the p-side can tunnel into the conduction band of the n-side. Since the doping is heavy, a significant reverse current can flow even at low reverse voltages. This reverse current continues to flow until the reverse voltage is very high, at which point avalanche breakdown or Zener breakdown might occur, similar to a normal diode, but the tunneling current is dominant for a wide range of reverse voltages.

## Connecting to Course Outcomes

So, how does this relate to our course objectives?

*   **CO1: Explain the fundamentals of Semiconductor Physics:** We've seen how heavy doping changes the depletion region width and how quantum tunneling, a core concept in modern physics, is fundamental to the tunnel diode's operation.
*   **CO2: Describe the behaviour of semiconductor materials in semiconductor devices:** We've observed how the specific doping levels and the resulting energy band alignments in a heavily doped p-n junction lead to the unique V-I characteristics. The transition from tunneling dominance to diffusion dominance as voltage changes is a prime example of this behavior.
*   **CO3: Explain Superconductivity and basic theory of dielectrics:** While not directly about superconductivity or dielectrics, understanding the band structure and carrier behavior in semiconductors is a foundational step towards understanding these other solid-state phenomena.
*   **CO4: Apply the comprehended knowledge about laser and fiber optics in various engineering applications:** The negative differential resistance region of the tunnel diode is crucial for its applications in high-frequency oscillators and amplifiers. This ability to amplify or generate signals is fundamental in many communication systems, including those that utilize lasers and fiber optics. For instance, oscillators built with tunnel diodes can be used as local oscillators in microwave receivers.
*   **CO5: Apply basic knowledge of principles and theories in physics to conduct experiments:** Understanding the V-I characteristics of a tunnel diode is essential for anyone who wants to experimentally verify these concepts by building a circuit and measuring the diode's behavior. You'd need to know what to expect and how to interpret the readings.

## Key Takeaways and Exam Focus

When studying the tunnel diode for exams, focus on these points:

*   **Definition:** A heavily doped p-n junction diode exhibiting negative differential resistance.
*   **Mechanism:** Quantum tunneling across a narrow depletion region.
*   **Key Regions of the V-I Curve:** Initial rise, Negative Differential Resistance (NDR), normal diode conduction.
*   **Key Parameters:** Peak voltage ($V_p$), peak current ($I_p$), valley voltage ($V_v$), valley current ($I_v$). Remember the condition $V_p < V_v$ is crucial.
*   **Applications:** High-frequency oscillators, amplifiers, and switching circuits due to the NDR region.
*   **Comparison:** How it differs from a regular diode.

**Common Pitfalls:** Students sometimes forget that the NDR region is a result of the *decrease* in tunneling current as voltage increases, not due to breakdown mechanisms like Zener or avalanche, though these may occur at much higher reverse voltages. Also, it’s important to remember that tunnel diodes are typically used for their unique *forward bias* characteristics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## References from Your Reading List

You can find extensive details on these concepts in your textbooks:

*   **Arthur Beiser’s "Concepts of Modern Physics"** is excellent for understanding the quantum tunneling phenomenon itself.
*   **H.K. Malik and A.K. Singh's "Engineering Physics"** and **Avadhanulu, Kshirsagar, and Arun Murthy’s "A Textbook of Engineering Physics"** provide a good blend of semiconductor physics and device behavior, with clear explanations of p-n junctions and doping effects.
*   For a deeper dive into device physics and characteristics, **Robert F. Pierret's "Semiconductor Devices Fundamentals"** and **Streetman and Banerjee’s "Solid State Electronic Devices"** are invaluable references. They’ll explain the band bending and carrier statistics that precisely describe the V-I curves.

Remember this: the tunnel diode is a testament to how quantum mechanics, not just classical physics, dictates the behavior of semiconductor devices, opening up possibilities for high-speed electronics.

---

## Sample Questions with Answers

Here are a few questions to test your understanding, covering both conceptual recall and application:

**Q1. What is the primary physical phenomenon responsible for the unique V-I characteristics of a tunnel diode?**
**Answer:** The primary phenomenon is **quantum tunneling** across a very narrow depletion region, which is a consequence of heavy doping in the p-n junction.

**Q2. Describe the 'negative differential resistance' region of a tunnel diode's V-I characteristic. What causes it?**
**Answer:** The negative differential resistance (NDR) region is where the current *decreases* as the applied forward voltage *increases*. This occurs because, as forward bias increases, the energy bands shift such that the available empty states in the valence band of the p-side for tunneling electrons from the n-side decrease, thus reducing the tunneling current.

**Q3. What is the typical application of a tunnel diode that leverages its negative differential resistance property?**
**Answer:** Tunnel diodes are primarily used in **high-frequency oscillators** and **amplifiers**. The NDR property allows them to provide the necessary feedback or gain for oscillation and amplification at microwave frequencies.

**Q4. Explain why the reverse bias characteristics of a tunnel diode are different from those of a standard rectifier diode.**
**Answer:** In a tunnel diode, due to heavy doping and the resulting narrow depletion region, quantum tunneling is efficient even under reverse bias. This leads to a significant reverse current that flows over a wider range of reverse voltages compared to a standard diode, where reverse current is very small until breakdown. The tunneling current is dominant in reverse bias for tunnel diodes.

**Q5. Consider a tunnel diode with $V_p = 0.1V$, $I_p = 5mA$, $V_v = 0.4V$, and $I_v = 1mA$. Sketch its forward V-I characteristic and label these points.**
**Answer:**
*(Sketch required, similar to the diagram described earlier in the notes. The sketch should start from origin, rise to a point (0.1V, 5mA), then fall to a point (0.4V, 1mA), and then rise again in a curve resembling a standard diode's forward bias curve starting from roughly 0.4V).*

**Explanation for Sketch:** The sketch would show current increasing steeply from zero voltage. It reaches a peak of 5mA at 0.1V. Then, it falls to a minimum of 1mA at 0.4V. Beyond 0.4V, the current starts to increase again, and this increase becomes steeper with further voltage, characteristic of normal diode conduction. The region between 0.1V and 0.4V clearly shows a negative slope.