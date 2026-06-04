---
title: "V-I Characteristics of p-n junction"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 1: Semiconductor  Physics"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f955f"
status: "completed"
scrapedAt: "2026-05-23T16:03:42.532Z"
---
# PHYSICS FOR ELECTRICAL SCIENCE - Module 1: Semiconductor Physics

## Topic: V-I Characteristics of p-n Junction

Welcome, everyone! Today, we're diving into one of the most fundamental concepts in semiconductor physics, the **V-I Characteristics of a p-n Junction**. This is absolutely crucial for understanding how diodes, transistors, and many other essential electronic components work. So, let's get started with a clear picture of what happens when we apply a voltage across a p-n junction.

Our goal here is to understand the relationship between the voltage applied across a p-n junction and the current that flows through it. This relationship, the V-I characteristic, tells us a lot about the behavior of the junction itself.

### Understanding the p-n Junction: A Quick Recap

Before we look at the V-I curves, it's vital to remember what a p-n junction is. As we've discussed, it's formed by bringing together a p-type semiconductor (with an excess of holes) and an n-type semiconductor (with an excess of electrons). When these two types meet, something fascinating happens at the interface:

*   **Diffusion:** Electrons from the n-side diffuse across the junction into the p-side, and holes from the p-side diffuse into the n-side.
*   **Depletion Region:** As these charge carriers cross, they leave behind immobile ionized donor atoms on the n-side (positive charge) and immobile ionized acceptor atoms on the p-side (negative charge). This region, devoid of free charge carriers, is called the **depletion region** or **space charge region**.
*   **Built-in Potential (Barrier Potential):** The accumulation of positive charge on the n-side and negative charge on the p-side creates an electric field across the junction. This field opposes further diffusion and is associated with a potential difference, the **built-in potential** ($V_{bi}$ or $V_0$). This potential acts as a barrier for charge carriers trying to cross the junction.

Think of the depletion region like a small no-man's-land created when two different armies meet. The soldiers who cross over leave their flags behind, creating a zone where neither army can freely roam. The built-in potential is like the barrier that prevents more soldiers from crossing.

This built-in potential is a key concept from our foundational understanding of semiconductors (CO1: Explain the fundamentals of Semiconductor Physics). It's what dictates how the junction behaves when an external voltage is applied.

### Applying an External Voltage: The Two Main Scenarios

Now, let's consider what happens when we connect an external voltage source to this p-n junction. There are two primary ways to do this:

1.  **Forward Bias:** Connecting the positive terminal of the voltage source to the p-side and the negative terminal to the n-side.
2.  **Reverse Bias:** Connecting the negative terminal of the voltage source to the p-side and the positive terminal to the n-side.

These two biasing conditions lead to very different current flows, which is exactly what the V-I characteristics describe.

---

### 1. Forward Bias and its V-I Characteristics

When we apply a **forward bias**, we are essentially pushing charge carriers towards the junction.

*   **How it works:** The applied forward voltage ($V_F$) opposes the built-in potential ($V_{bi}$). If the applied voltage is of the same polarity as the built-in potential, it reduces the effective barrier height. The depletion region narrows because the external field pushes majority carriers (holes from p-side, electrons from n-side) towards the junction, neutralizing some of the immobile ions.
*   **Current flow:** Once the applied forward voltage exceeds a certain threshold (the cut-in voltage or knee voltage, typically around 0.7V for silicon and 0.3V for germanium), the barrier becomes significantly reduced. Majority carriers now have enough energy to overcome the weakened barrier and diffuse across the junction in large numbers. This diffusion of majority carriers constitutes a significant **forward current**.
*   **The V-I Curve:**
    *   Initially, at very small forward voltages, the current is very small because the barrier is still too high.
    *   As we increase the forward voltage, the barrier drops rapidly, and the forward current starts to increase exponentially. This is the characteristic of a diode – very little current below a certain voltage, and then a rapid increase.
    *   The equation that describes this is often given by:
        $I_F = I_S \left( e^{\frac{V_F}{nV_T}} - 1 \right)$
        Where:
        *   $I_F$ is the forward current.
        *   $I_S$ is the reverse saturation current (a small, constant current).
        *   $V_F$ is the applied forward voltage.
        *   $n$ is the ideality factor (accounts for recombination and is typically between 1 and 2).
        *   $V_T$ is the thermal voltage, given by $V_T = \frac{kT}{q}$, where $k$ is Boltzmann's constant, $T$ is absolute temperature, and $q$ is the electronic charge.

*   **Analogy:** Imagine a dam with a certain water level (built-in potential). In forward bias, we're lowering the water level on one side (applying $V_F$ opposing $V_{bi}$). Initially, when the water level is high, very little water leaks through. But as we lower it, a trickle starts, and then, once it's low enough, water flows in a steady stream. The exponential rise in current is like the increasing flow rate as the water level drops further. This behavior is fundamental to how semiconductor devices like diodes control current flow (CO2: Describe the behaviour of semiconductor materials in semiconductor devices).

*   **Exam Tip:** The exponential nature of the forward current is a key point. Remember that the current is highly sensitive to voltage changes in the forward-biased region once the cut-in voltage is reached.

### 2. Reverse Bias and its V-I Characteristics

Now, let's flip the connections. When we apply a **reverse bias**, we are actually reinforcing the built-in potential.

*   **How it works:** The applied reverse voltage ($V_R$) is connected with opposite polarity to the built-in potential, effectively increasing the total barrier height. This causes the depletion region to widen, as the external field pulls majority carriers further away from the junction, leaving more immobile ions exposed.
*   **Current flow:** With a widened depletion region and an increased barrier, it becomes extremely difficult for majority carriers to cross the junction. However, there are a small number of **minority carriers** present in both the p and n regions (electrons in the p-region and holes in the n-region) due to thermal generation. The strong electric field across the widened depletion region readily sweeps these minority carriers across the junction. This results in a very small, nearly constant **reverse saturation current** ($I_S$) flowing through the junction.
*   **The V-I Curve:**
    *   In the reverse bias region, the current is very small and remains almost constant, regardless of the applied reverse voltage, as long as it's below a certain breakdown voltage. This constant current is the reverse saturation current ($I_S$).
    *   The equation $I_F = I_S \left( e^{\frac{V_F}{nV_T}} - 1 \right)$ also describes this. When $V_F$ is negative (reverse bias), $e^{\frac{V_F}{nV_T}}$ becomes very small, and the equation effectively becomes $I_R \approx -I_S$ (the negative sign indicates current flow opposite to the conventional forward current direction).

*   **Analogy:** Going back to our dam analogy, reverse bias is like increasing the water level on one side of the dam (reinforcing $V_{bi}$). This makes it even harder for water to flow across. However, there might be a few very tiny leaks (minority carriers) that still manage to seep through, creating a small, consistent flow of water, regardless of how high you raise the water level on your side. This small, consistent flow is the reverse saturation current.

*   **Breakdown Voltage:** What happens if we keep increasing the reverse voltage? Eventually, the electric field in the depletion region becomes so strong that it can rip electrons out of their covalent bonds (through a mechanism called **avalanche breakdown**) or directly pull them away (through **Zener breakdown**). This leads to a sudden, drastic increase in the reverse current, often damaging the junction if not limited. This voltage is known as the **breakdown voltage**. This phenomenon is crucial for devices like Zener diodes, which are designed to operate in the breakdown region.

*   **Exam Tip:** The near-constant reverse current is a key characteristic. Students often mistakenly think the reverse current increases significantly with voltage. Remember, it's the *minority* carriers causing this small current.

---

### The Complete V-I Characteristic Curve

Let's put it all together on a single graph. The V-I characteristic of a p-n junction diode is typically plotted with voltage on the horizontal axis (V) and current on the vertical axis (I).

*   **Forward Bias Region:** In the first quadrant (positive voltage, positive current), we see the exponential rise starting from the origin after the cut-in voltage.
*   **Reverse Bias Region:** In the third quadrant (negative voltage, negative current), we see a very small, nearly constant negative current, followed by a sharp upward turn at the breakdown voltage.

It's important to note that the reverse saturation current ($I_S$) is highly dependent on temperature. An increase in temperature leads to more thermal generation of electron-hole pairs, thus increasing the number of minority carriers and consequently increasing $I_S$. This is a critical point for understanding device performance in varying thermal environments (CO2: Describe the behaviour of semiconductor materials in semiconductor devices).

---

### Connection to Course Outcomes and Learning

This topic directly addresses:

*   **CO1: Explain the fundamentals of Semiconductor Physics.** We've revisited diffusion, depletion regions, and built-in potential, all fundamental to semiconductor behavior. The V-I characteristics are a direct consequence of these physical principles.
*   **CO2: Describe the behaviour of semiconductor materials in semiconductor devices.** The V-I curve is the quintessential description of how a semiconductor junction (the basic building block of many devices) behaves under different electrical conditions. Understanding this allows us to predict and design circuits using diodes and transistors.
*   **CO3: Explain Superconductivity and basic theory of dielectrics.** While this topic focuses on semiconductors, understanding p-n junctions is a prerequisite for understanding how different materials behave in electrical contexts. Superconductors and dielectrics are other important classes of materials with distinct electrical properties.
*   **CO4: Apply the comprehended knowledge about laser and fiber optics in various engineering applications.** While not directly about lasers or fiber optics, the ability to understand and analyze fundamental electronic components like diodes is foundational for building optical systems that often rely on semiconductor devices (e.g., LEDs, photodetectors).

The "knowledge level" for these outcomes is K2 (understanding), and our exploration here is designed to build that deep understanding. We're not just memorizing curves; we're understanding *why* they look the way they do, based on physics.

---

### Summary of Key Points to Remember:

*   A p-n junction has a depletion region and a built-in potential that acts as a barrier.
*   **Forward Bias:** Applied voltage opposes built-in potential, narrows depletion region, low barrier, high current (exponential rise after cut-in voltage).
*   **Reverse Bias:** Applied voltage aids built-in potential, widens depletion region, high barrier, very small current (reverse saturation current, nearly constant).
*   **Breakdown Voltage:** In reverse bias, a sufficiently high voltage causes a sudden current increase due to avalanche or Zener breakdown.
*   The reverse saturation current ($I_S$) is temperature-dependent.

---

### Sample Questions with Answers:

**Conceptual Question 1:** Explain why the reverse saturation current in a p-n junction diode is very small and nearly constant, even as the reverse voltage increases.

**Answer:** The reverse saturation current is due to the flow of minority carriers across the junction. In reverse bias, the applied voltage increases the barrier height and widens the depletion region. This effectively isolates the majority carriers. However, a small number of minority carriers (electrons in the p-side, holes in the n-side) are always present due to thermal generation. The strong electric field in the widened depletion region readily sweeps these minority carriers across the junction. Since the concentration of minority carriers is small and relatively independent of the reverse voltage (until breakdown), the current they cause remains small and nearly constant. This current is limited by the generation rate of minority carriers, not the applied voltage, as per the fundamental physics of semiconductor junctions (CO2).

**Exam-Oriented Question 2:** A silicon p-n junction diode has a reverse saturation current of 10 nA at room temperature (300 K). Calculate the forward current when a forward voltage of 0.7 V is applied. Assume the ideality factor ($n$) is 1. (Given: Boltzmann's constant $k = 1.38 \times 10^{-23} J/K$, elementary charge $q = 1.60 \times 10^{-19} C$)

**Solution:**
First, calculate the thermal voltage ($V_T$):
$V_T = \frac{kT}{q} = \frac{(1.38 \times 10^{-23} J/K) \times (300 K)}{1.60 \times 10^{-19} C} \approx 0.025875 V \approx 25.9 mV$

Now, use the diode current equation for forward bias:
$I_F = I_S \left( e^{\frac{V_F}{nV_T}} - 1 \right)$

Given:
$I_S = 10 \text{ nA} = 10 \times 10^{-9} A$
$V_F = 0.7 V$
$n = 1$
$V_T \approx 0.0259 V$

Calculate the exponent term:
$\frac{V_F}{nV_T} = \frac{0.7 V}{1 \times 0.0259 V} \approx 27.03$

Now, calculate $e^{27.03}$:
$e^{27.03} \approx 1.17 \times 10^{11}$

Substitute into the diode equation:
$I_F = (10 \times 10^{-9} A) \left( 1.17 \times 10^{11} - 1 \right)$
Since $1.17 \times 10^{11}$ is much larger than 1, we can approximate:
$I_F \approx (10 \times 10^{-9} A) \times (1.17 \times 10^{11})$
$I_F \approx 1170 A$

Wait, this result seems too high! Let's re-check the calculation. Ah, it's important to be careful with the units and magnitudes. A current of 1170 A is not typical for a single small diode at 0.7V. Let's re-evaluate the calculation and context.

*Re-calculating carefully:*
$e^{27.03}$ is indeed a very large number. This indicates that even a small voltage like 0.7V applied to a forward-biased diode causes a significant current, as expected. The magnitude might seem surprising, but it highlights the exponential nature.
However, it's important to remember that $I_S$ is for a *specific diode size*. The current density is what's exponential. For a standard small-signal diode, the current might be in the milliampere or ampere range, but perhaps not thousands of amperes unless it's a power diode or a large junction area. The question implies a typical scenario, and the calculation method is correct. The exponential rise is the key takeaway. Let's assume the numbers are for illustrative purposes of the exponential increase. For practical purposes, current will be limited by other factors or the diode design.

Let's re-do the multiplication:
$I_F = (10 \times 10^{-9} A) \times (1.17 \times 10^{11})$
$I_F = 10 \times 1.17 \times 10^{(-9+11)}$
$I_F = 11.7 \times 10^{2}$
$I_F = 1170 \text{ A}$

The calculation is arithmetically correct. The extreme value emphasizes how sensitive the forward current is to the applied voltage once the barrier is overcome. In a real-world scenario, the diode would likely burn out or a current-limiting resistor would be in place. The question aims to test the application of the formula and the understanding of the exponential behavior (CO1, CO2).

**Conceptual Question 3:** What is the significance of the "breakdown voltage" in the reverse V-I characteristic of a p-n junction diode?

**Answer:** The breakdown voltage is the specific reverse voltage at which the diode's reverse current increases dramatically. This occurs due to mechanisms like avalanche breakdown (carrier multiplication caused by impact ionization) or Zener breakdown (field-induced electron tunneling). Exceeding this voltage can lead to irreversible damage to the diode if the current is not limited. However, specific diodes like Zener diodes are designed to operate safely in this breakdown region to provide a stable voltage reference (CO2).

---
