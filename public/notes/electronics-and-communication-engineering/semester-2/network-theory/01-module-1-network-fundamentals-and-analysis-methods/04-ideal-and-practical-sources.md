---
title: "Ideal and practical sources"
subject: "NETWORK THEORY"
module: "Module 1: Network fundamentals  and analysis methods:"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da506"
status: "completed"
scrapedAt: "2026-05-23T17:41:02.991Z"
---
# Network Theory: Module 1 - Network Fundamentals and Analysis Methods
## Topic: Ideal and Practical Sources

Welcome, everyone! Today, we're diving into the very foundation of our electrical network analysis journey: the concept of **sources**. Think of sources as the "lifeblood" of any circuit, providing the energy that makes everything else happen. Without them, our circuits would be inert. We'll be exploring two fundamental types: **ideal sources** and **practical sources**. Understanding the difference between these is crucial for accurate analysis and will set us up beautifully for later topics like mesh and node analysis (CO1), applying network theorems (CO2), and even understanding transient behavior (CO3).

### What is a Source?

At its core, an electrical source is a device that converts some form of energy (chemical, mechanical, solar, etc.) into electrical energy. This electrical energy is then delivered to the rest of the circuit. We primarily deal with two types of sources:

*   **Voltage Sources:** These aim to maintain a constant voltage difference across their terminals, regardless of the current drawn from them.
*   **Current Sources:** These aim to deliver a constant current, regardless of the voltage across their terminals.

You'll find these symbols everywhere in circuit diagrams, and it's important to recognize them instantly.

### 1. Ideal Voltage Source

Let's start with the simpler concept, the **ideal voltage source**. Imagine a perfectly behaved battery. What does "perfectly behaved" mean in this context? It means that an ideal voltage source will always deliver its specified voltage, no matter how much current is drawn from it, or even if no current is drawn at all.

**Key Characteristic:** The voltage across an ideal voltage source is *independent* of the current flowing through it.

**Mathematical Representation:**
If we have an ideal voltage source with a voltage $V_s$, then the voltage across its terminals will always be $V_s$, regardless of the current $I$ flowing out of it. This relationship can be represented by the equation $V = V_s$.

**Graphical Representation:**
If you were to plot the voltage ($V$) across an ideal voltage source against the current ($I$) flowing through it, you would get a vertical line at $V = V_s$. This graphically shows that no matter what the current is, the voltage remains constant.

**Analogy Time:**
Think of a perfectly regulated power supply that you might use in a lab. It's designed to provide a stable 5 volts. Whether you connect a tiny LED or a more power-hungry device (within its limits, of course!), it *tries* its best to maintain that 5 volts. The "ideal" part is the absolute, unwavering nature of it.

**Why is this "Ideal"?**
In the real world, nothing is perfect. An ideal voltage source is a simplification that helps us build our understanding. It's like saying a frictionless surface or a massless pulley. These aren't found in reality, but they allow us to isolate and understand specific principles without the complexities of real-world limitations.

### 2. Ideal Current Source

Now, let's look at the **ideal current source**. This is a device that reliably pumps out a constant amount of current, irrespective of the voltage that appears across its terminals.

**Key Characteristic:** The current flowing from an ideal current source is *independent* of the voltage across it.

**Mathematical Representation:**
If we have an ideal current source supplying a current $I_s$, then the current flowing out of it will always be $I_s$, no matter what the voltage $V$ across its terminals is. This is represented by the equation $I = I_s$.

**Graphical Representation:**
If you plot the current ($I$) supplied by an ideal current source against the voltage ($V$) across its terminals, you'll get a horizontal line at $I = I_s$. This visualizes that the current remains constant regardless of the voltage.

**Analogy Time:**
Imagine a highly efficient water pump that's designed to deliver exactly 10 liters of water per minute, no matter how much resistance is in the pipe system (within reason, of course!). It just keeps pushing that 10 liters per minute. The "ideal" part is its unwavering commitment to delivering that specific flow rate.

**Where do we see these?**
Ideal current sources might seem a bit abstract at first. However, they are excellent models for certain electronic components like transistors when biased appropriately, or for modeling the output of photovoltaic cells under specific conditions. They are also incredibly useful in circuit analysis, especially when we're using methods like nodal analysis (CO1) or when simplifying parts of a larger circuit.

### The Power Delivered by Ideal Sources

A quick but important point:
*   **Ideal Voltage Source:** Power delivered is $P = VI = V_s I$.
*   **Ideal Current Source:** Power delivered is $P = VI = V I_s$.

Remember that power can be delivered *by* the source (positive) or absorbed *by* the source (negative), depending on the direction of current relative to voltage polarity.

### 3. Practical Voltage Source

Okay, so ideal sources are great for theory, but what about the real world? When we disconnect a real voltage source from a circuit, it has a specific voltage across its terminals. However, as soon as we connect it to a load and current starts to flow, the terminal voltage usually drops. Why? Because real voltage sources aren't perfect. They have internal resistance.

**What is Internal Resistance?**
Think about the materials and components that make up a real battery or a power supply. These aren't perfect conductors. There's resistance inherent in the wires, the chemical electrolytes (in batteries), or the electronic components within a power supply. This internal resistance impedes the flow of current.

**Modeling a Practical Voltage Source:**
We model a practical voltage source as an *ideal voltage source* in series with a *resistor*. This resistor represents the internal resistance of the source. Let's call the voltage of the ideal source $V_s$ (this is often called the "open-circuit voltage" or "EMF" - electromotive force) and the internal resistance $R_{int}$.

**The Equation:**
If a current $I$ flows out of this practical voltage source, the voltage across its terminals ($V_T$) will be the ideal voltage minus the voltage drop across the internal resistor:
$V_T = V_s - I \cdot R_{int}$

**Graphical Representation:**
Now, if you plot terminal voltage ($V_T$) against current ($I$) for a practical voltage source, you get a straight line with a *negative slope*. The voltage is $V_s$ when $I=0$ (open circuit), and the voltage decreases linearly as the current increases. The slope of this line is $-R_{int}$.

**Analogy Time:**
Imagine you're trying to push a shopping cart up a slightly inclined ramp. The effort you put in is like the ideal voltage source ($V_s$). However, the wheels of the cart aren't perfectly smooth, and there might be a bit of friction in the axle. This friction acts like the internal resistance ($R_{int}$). The faster you try to push the cart (higher current), the more this friction slows you down, and the less progress you make up the ramp (lower terminal voltage). If you push very slowly (low current), the effect of friction is minimal, and you're almost at the full height of the ramp.

**What happens if $R_{int}$ is very small?**
If $R_{int}$ is very, very close to zero, the practical voltage source behaves almost like an ideal voltage source. This is why the assumption of ideal sources is useful – it's a good approximation when the internal resistance is negligible compared to the load resistance.

**Exam Tip:** Often, you'll be given a practical source by specifying its open-circuit voltage and its internal resistance. Or, you might be given two operating points (e.g., voltage and current at two different load conditions) and asked to find $V_s$ and $R_{int}$. This is usually a straightforward algebra problem using the $V_T = V_s - I \cdot R_{int}$ equation.

### 4. Practical Current Source

Similarly, a real current source isn't perfect. While it strives to deliver a constant current, it has some limitations. The primary limitation is that as the voltage across its terminals increases, the current it delivers might start to decrease slightly.

**Modeling a Practical Current Source:**
We model a practical current source as an *ideal current source* in parallel with a *resistor*. This parallel resistor represents the internal conductance of the source (or, more commonly, its internal resistance). Let's call the ideal current $I_s$ and the internal resistance $R_{int}$.

**The Equation:**
When a voltage $V_T$ appears across the terminals of this practical current source, some of the current from the ideal source will bypass through the internal resistor. The current delivered to the external circuit ($I_T$) will be the ideal current minus the current flowing through the internal resistor:
$I_T = I_s - \frac{V_T}{R_{int}}$

**Rearranging this equation:**
If we want to express $V_T$ in terms of $I_T$, we can do a bit of algebra. Let $I_{internal} = \frac{V_T}{R_{int}}$. Then $V_T = I_{internal} \cdot R_{int}$. Also, $I_s = I_T + I_{internal}$. So, $I_{internal} = I_s - I_T$.
Substituting this back: $V_T = (I_s - I_T) \cdot R_{int}$.
This looks suspiciously like our practical voltage source equation! Indeed, a practical current source can be represented as a practical voltage source with $V_s = I_s \cdot R_{int}$ in series with $R_{int}$. This is the concept of **source transformation**, which we'll explore more deeply later.

**Graphical Representation:**
For a practical current source, plotting terminal current ($I_T$) against terminal voltage ($V_T$), you'll see a straight line with a *negative slope*. The current is $I_s$ when $V_T=0$ (short circuit). As the voltage increases, the current drawn from the source decreases. The slope of this line is $-1/R_{int}$.

**Analogy Time:**
Think of a water tap that's supposed to deliver a constant flow. As you turn the faucet handle higher (increasing voltage across the tap mechanism), you might notice the water pressure *slightly* drops, and the flow isn't as robust as it was at the initial setting. The internal resistance here is like some internal back-pressure or flow restriction within the faucet itself that becomes more pronounced as you try to force more water through it.

**What happens if $R_{int}$ is very large?**
If $R_{int}$ is very, very large (approaching infinity), then the current through it ($V_T/R_{int}$) becomes negligible for any reasonable voltage $V_T$. In this case, the practical current source behaves very much like an ideal current source. This is often the case for certain semiconductor devices like transistors.

### Connecting to Course Outcomes

*   **CO1 (Mesh and Node Analysis):** Understanding ideal sources is fundamental. When you use nodal analysis, you're essentially dealing with current sources (or converting voltage sources to current sources), and ideal current sources are directly used. For mesh analysis, ideal voltage sources are more naturally incorporated. Recognizing how internal resistances affect real sources is crucial for advanced analysis where ideal assumptions might not hold.
*   **CO2 (Network Theorems):** Theorems like Superposition, Thevenin's, and Norton's often involve simplifying circuits. The ability to model practical sources as combinations of ideal sources and resistances is key to applying these theorems effectively. For instance, finding the Thevenin or Norton equivalent often means dealing with the internal resistance of the source itself.
*   **CO3 (Transient Behavior):** When analyzing circuits with capacitors and inductors, the nature of the source (constant, sinusoidal, etc.) and its internal resistance significantly impact how the circuit responds over time. A practical voltage source with its internal resistance will lead to different transient responses compared to an ideal one.
*   **CO4 (Network Functions and Parameters):** While this topic focuses on sources, understanding their behavior is part of characterizing a network. The output impedance of a network often relates to the internal resistance of the source driving it.

### Summary: Ideal vs. Practical

| Feature               | Ideal Voltage Source              | Practical Voltage Source             | Ideal Current Source                | Practical Current Source             |
| :-------------------- | :-------------------------------- | :----------------------------------- | :---------------------------------- | :----------------------------------- |
| **Terminal Voltage**  | Constant ($V_s$), independent of $I$ | $V_T = V_s - I \cdot R_{int}$        | Variable, depends on load           | Variable, depends on load            |
| **Terminal Current**  | Variable, depends on load         | Variable, depends on load            | Constant ($I_s$), independent of $V$ | $I_T = I_s - V_T / R_{int}$          |
| **Internal Component**| None                              | Resistor ($R_{int}$) in series       | None                                | Resistor ($R_{int}$) in parallel     |
| **$V$ vs $I$ Plot**   | Vertical line at $V = V_s$        | Line with negative slope $(-R_{int})$ | Horizontal line at $I = I_s$        | Line with negative slope $(-1/R_{int})$ |
| **Real-world Model**  | Approximation                     | Better approximation                 | Approximation                       | Better approximation                 |

**Remember this:** The "ideal" is a theoretical construct that simplifies analysis. The "practical" incorporates the inevitable imperfections, primarily represented by internal resistance, making the model more realistic. The choice between using an ideal or practical model depends on the required accuracy of your analysis and the context of the problem.

---

### Sample Questions with Answers

**Q1. A student is analyzing a circuit and models a battery as an ideal voltage source of 12V. When connected to a load, the voltage across the load drops to 11V. What does this observation imply about the battery?**

**Answer:** This observation implies that the battery is not behaving like an ideal voltage source. The drop in terminal voltage from the ideal value (12V) when current is drawn indicates the presence of internal resistance within the battery. A real voltage source will exhibit this behavior.

**Reasoning:** Ideal voltage sources maintain a constant voltage regardless of the current drawn. The measured drop in voltage indicates that the internal resistance of the battery is causing a voltage drop ($I \cdot R_{int}$) when current flows.

**Q2. Explain why the internal resistance of a practical voltage source is modeled in series with an ideal voltage source, while the internal resistance of a practical current source is modeled in parallel with an ideal current source.**

**Answer:**
*   **Practical Voltage Source:** A practical voltage source's limitation is that its terminal voltage decreases as current increases due to an internal impedance that *opposes* the flow of current. A series resistor perfectly models this opposition – as current ($I$) flows through it, it causes a voltage drop ($I \cdot R_{int}$) that subtracts from the ideal source voltage.
*   **Practical Current Source:** A practical current source's limitation is that as the voltage across it increases, some of the current that the ideal source *tries* to push gets diverted internally, reducing the current delivered to the external circuit. A parallel resistor models this diversion – as voltage ($V$) across the source increases, current ($V/R_{int}$) flows through the parallel resistor, effectively bypassing the ideal current source and reducing the net output current.

**Reasoning:** These configurations (series for voltage, parallel for current) are chosen because they mathematically represent the observed behavior of real-world sources. The series resistance in a voltage source formulation directly subtracts from the ideal voltage, mirroring the voltage drop. The parallel resistance in a current source formulation diverts current from the ideal source, mirroring the reduced output current. This aligns with the fundamental definition of how these sources behave under varying load conditions.

**Q3. Consider a practical voltage source with an open-circuit voltage of 10V and an internal resistance of 2Ω. If this source is connected to a load resistor of 8Ω, calculate the terminal voltage across the load and the current delivered to the load.**

**Answer:**
The practical voltage source can be represented as an ideal voltage source $V_s = 10$V in series with an internal resistance $R_{int} = 2$Ω.
The load resistor is $R_L = 8$Ω.

The total resistance in the circuit is the sum of the internal resistance and the load resistance:
$R_{total} = R_{int} + R_L = 2\Omega + 8\Omega = 10\Omega$

The current delivered by the source is given by Ohm's law:
$I = \frac{V_s}{R_{total}} = \frac{10V}{10\Omega} = 1A$

The terminal voltage across the load is the voltage across the 8Ω resistor:
$V_T = I \cdot R_L = 1A \cdot 8\Omega = 8V$

Alternatively, using the terminal voltage formula for a practical voltage source:
$V_T = V_s - I \cdot R_{int} = 10V - (1A \cdot 2\Omega) = 10V - 2V = 8V$

So, the terminal voltage across the load is 8V, and the current delivered to the load is 1A.

**Reasoning:** This problem directly applies the model of a practical voltage source. We first calculate the total resistance in the series circuit and then use Ohm's law to find the current. Finally, we calculate the voltage drop across the load resistor to find the terminal voltage. The consistency between the two methods of calculating $V_T$ reinforces the understanding of the source model.

**Q4. What is the primary characteristic that differentiates an ideal voltage source from a practical voltage source?**

**Answer:** The primary characteristic that differentiates an ideal voltage source from a practical voltage source is the presence of **internal resistance** in a practical voltage source. An ideal voltage source has zero internal resistance, meaning its terminal voltage remains constant regardless of the current drawn. A practical voltage source has a non-zero internal resistance, causing its terminal voltage to decrease as the current drawn increases.

**Reasoning:** This question tests the fundamental definition and the key differentiating factor between the two types of voltage sources. The concept of internal resistance is central to the practical model.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
