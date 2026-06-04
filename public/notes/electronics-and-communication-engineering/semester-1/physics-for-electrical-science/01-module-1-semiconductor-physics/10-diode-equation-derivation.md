---
title: "Diode equation (Derivation)"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 1: Semiconductor  Physics"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da21a"
status: "completed"
scrapedAt: "2026-05-23T17:35:28.704Z"
---
# Physics for Electrical Science: Module 1 - Semiconductor Physics

## Topic: The Diode Equation: Derivation and Significance

Welcome, everyone! Today, we're diving into one of the most fundamental building blocks of modern electronics: the **diode**. You see them everywhere, from simple LED lights to the complex circuitry in your phones. But how does this seemingly simple device actually work? Our focus today is on the **Diode Equation**, a mathematical expression that beautifully describes the current-voltage (I-V) characteristics of a diode. Understanding its derivation is key to understanding diode behavior and, by extension, many other semiconductor devices.

This topic directly addresses **Course Outcome 1 (CO1): Explain the fundamentals of Semiconductor Physics** and **Course Outcome 2 (CO2): Describe the behaviour of semiconductor materials in semiconductor devices**. By the end of this session, you'll have a solid grasp of the underlying physics that governs diode operation.

### 1. The PN Junction: The Heart of the Diode

Before we can derive the diode equation, we need to understand what a diode *is* at its core. A diode is essentially a **PN junction**. What does that mean?

Imagine a piece of semiconductor material, like silicon or germanium. It's pure, with no impurities. Now, we introduce specific impurities to create two distinct regions:

*   **P-type semiconductor:** We dope it with trivalent atoms (like Boron, Gallium). These atoms have one less valence electron than the semiconductor atoms. This creates "holes" – essentially vacancies where electrons should be. Think of these holes as positive charge carriers that can move.
*   **N-type semiconductor:** We dope it with pentavalent atoms (like Phosphorus, Arsenic). These atoms have one extra valence electron compared to the semiconductor atoms. These extra electrons are loosely bound and can easily move around, becoming free charge carriers (negative).

When we bring these two types of semiconductor materials together – a P-type and an N-type – and join them, we form a **PN junction**. This is where the magic happens!

#### The Depletion Region and Built-in Potential

At the moment of joining, something fascinating occurs due to diffusion. The high concentration of free electrons in the N-type region diffuses across the junction into the P-type region, where the electron concentration is low. Similarly, the high concentration of holes in the P-type region diffuses across into the N-type region.

But here's the catch: As electrons move from the N-side to the P-side, they leave behind positively charged donor ions (the pentavalent atoms that donated the electrons). These ions are fixed in the crystal lattice and cannot move. On the P-side, as holes move away (or equivalently, as electrons from the N-side fill holes), they leave behind negatively charged acceptor ions (the trivalent atoms that accepted electrons). These are also immobile.

This process creates a region around the junction that is depleted of free charge carriers (electrons and holes). We call this the **depletion region** or **space-charge region**.

This separation of fixed positive charges on the N-side and fixed negative charges on the P-side creates an **electric field** across the junction. This electric field, in turn, generates a **built-in potential** (or barrier potential), often denoted as $V_{bi}$. This potential opposes further diffusion of majority carriers. Equilibrium is reached when the diffusion current is exactly balanced by the drift current caused by this built-in electric field.

Think of it like two groups of people, one with lots of water bottles (electrons) and another with empty cups (holes). When they meet, the water carriers will naturally want to share their water. But as water flows, the donors start feeling a bit "empty" and the recipients start getting "full." Eventually, a natural barrier forms, preventing excessive sharing.

### 2. Applying External Voltage: Forward Bias and Reverse Bias

Now, what happens when we apply an external voltage across this PN junction? This is how we control the diode's behavior. There are two primary modes of operation:

#### 2.1. Forward Bias

In forward bias, the positive terminal of the external voltage source is connected to the P-type material, and the negative terminal is connected to the N-type material.

What does this do to our built-in potential? The applied external voltage ($V_D$) opposes the built-in potential ($V_{bi}$). The **net potential barrier** across the junction is now $(V_{bi} - V_D)$.

Because the effective barrier is reduced, majority carriers now have enough energy to overcome it. Electrons from the N-side diffuse into the P-side, and holes from the P-side diffuse into the N-side. This diffusion of majority carriers across the junction constitutes a significant **forward current** ($I_F$). As we increase the forward voltage, the barrier continues to decrease, allowing more and more majority carriers to cross, and thus the forward current increases rapidly.

Imagine pushing a swing. If you push in the same direction the swing wants to go (forward bias), a small push can make it go higher and higher.

#### 2.2. Reverse Bias

In reverse bias, the negative terminal of the external voltage source is connected to the P-type material, and the positive terminal is connected to the N-type material.

In this case, the applied external voltage ($V_D$) *adds* to the built-in potential ($V_{bi}$). The **net potential barrier** across the junction becomes $(V_{bi} + V_D)$.

This increased barrier height significantly reduces the ability of majority carriers to diffuse across the junction. However, there's still a small current. This current is due to the **minority carriers**. In the P-type material, there are a few free electrons (minority carriers), and in the N-type material, there are a few holes (minority carriers). The strong electric field across the widened depletion region sweeps these minority carriers across the junction. This constitutes a small, nearly constant **reverse saturation current** ($I_S$). This current is largely independent of the applied reverse voltage, until breakdown occurs.

Think of trying to push a swing in the opposite direction it wants to go (reverse bias). It’s much harder, and you only get a very small, almost negligible movement.

### 3. Deriving the Diode Equation: The Physics Behind the Curve

Now that we understand the physical processes under different biasing conditions, let's get to the heart of it: the derivation of the diode equation. This equation, often referred to as the **Shockley diode equation**, quantifies the relationship between the current ($I_D$) flowing through a diode and the voltage ($V_D$) applied across it.

The fundamental principle we rely on is the **Boltzmann distribution** of energy among particles. This distribution tells us how many particles will have a certain energy level. For our PN junction, this applies to the charge carriers crossing the junction.

Let's consider the diffusion of majority carriers across the junction.

*   **Forward Bias ($V_D > 0$):**
    The potential barrier is reduced to $(V_{bi} - V_D)$. The number of carriers with sufficient energy to cross the junction is proportional to $e^{-(V_{bi}-V_D)/V_T}$, where $V_T$ is the **thermal voltage**.
    The thermal voltage is given by $V_T = kT/q$, where:
    *   $k$ is the Boltzmann constant ($1.38 \times 10^{-23} \text{ J/K}$).
    *   $T$ is the absolute temperature in Kelvin.
    *   $q$ is the magnitude of the electronic charge ($1.602 \times 10^{-19} \text{ C}$).

    At room temperature (around 300 K), $V_T \approx 26 \text{ mV}$. This $V_T$ is a crucial parameter – it represents the thermal energy available to carriers.

    The forward current ($I_F$) is primarily due to the diffusion of holes from the P-side to the N-side. The number of holes that can cross is proportional to the hole concentration on the P-side at the edge of the depletion region, which is affected by the reduced barrier.
    So, the forward current can be written as:
    $I_F \propto n_p \cdot e^{(V_{bi}-V_D)/V_T}$
    where $n_p$ is the equilibrium electron concentration in the P-side. This isn't quite right, as it's the holes moving. Let's rephrase: the current is proportional to the *increase* in minority carrier concentration injected across the junction.

    A more accurate approach, considering the net flow of carriers, shows that the forward current is proportional to $e^{V_D/V_T}$.
    So, $I_F = I_0 (e^{V_D/V_T} - 1)$, where $I_0$ is a constant related to the reverse saturation current.

*   **Reverse Bias ($V_D < 0$):**
    The potential barrier is increased to $(V_{bi} + |V_D|)$. The number of majority carriers that can cross is drastically reduced, proportional to $e^{-(V_{bi}+|V_D|)/V_T}$. This term becomes very small for typical reverse voltages.
    The reverse current ($I_R$) is due to minority carriers being swept across the junction by the electric field. This current is nearly constant and is often called the reverse saturation current, $I_S$.
    $I_R \approx -I_S$ (the negative sign indicates current flow in the opposite direction of forward current).

Combining these, the total current ($I_D$) through the diode is the sum of the forward current component and the reverse current component. The forward current component is proportional to $e^{V_D/V_T}$, and the reverse current component is $-I_S$.

Therefore, we can write the **Diode Equation** as:

$$I_D = I_S (e^{V_D/(n V_T)} - 1)$$

Where:
*   $I_D$: Total diode current (Amperes).
*   $I_S$: Reverse saturation current (Amperes). This is a material-dependent parameter and is very small, typically in the range of $10^{-12}$ to $10^{-6}$ A. It's highly sensitive to temperature.
*   $V_D$: Voltage across the diode (Volts). Positive for forward bias, negative for reverse bias.
*   $n$: The **ideality factor** or **emission coefficient**. This dimensionless factor accounts for deviations from ideal behavior. For an ideal diode made from a silicon PN junction, $n$ is typically between 1 and 2. $n=1$ represents an ideal diode, while values greater than 1 indicate recombination in the depletion region and other non-ideal effects.
*   $V_T$: The thermal voltage, $kT/q$ (Volts).

**Crucial Point:** The term $(-1)$ in the equation is important. For forward bias where $V_D \gg nV_T$, the exponential term dominates, and $I_D \approx I_S e^{V_D/(n V_T)}$. For reverse bias where $V_D \ll -nV_T$, the exponential term becomes negligible, and $I_D \approx -I_S$. This confirms that the equation accurately captures both forward and reverse bias behavior.

#### The Role of the Ideality Factor ($n$)

The ideality factor ($n$) is a parameter that reflects how closely the diode behaves like an ideal theoretical diode.

*   **$n = 1$:** This represents an **ideal diode**. In this case, the forward current is solely due to the diffusion of minority carriers injected across the junction. This is what we typically assume in basic circuit analysis unless otherwise specified.
*   **$n = 2$:** This indicates that **recombination** is significant in the depletion region. Recombination is the process where an electron and a hole meet and annihilate each other, reducing the number of carriers available to contribute to the current. When this happens, the number of carriers that can cross the junction is less than predicted by pure diffusion, leading to a slower increase in current with voltage. This is common in devices like Zener diodes and some diodes operating at high current densities.

*   **Real-World Connection:** When you're troubleshooting a circuit with a diode, understanding the ideality factor helps you predict its performance. A diode with $n=2$ will require a slightly higher voltage to achieve the same current as an ideal diode. This is a practical consideration in precision analog circuit design.

#### Temperature Dependence

Don't forget that $V_T$ depends on temperature ($V_T = kT/q$). As temperature increases, $V_T$ increases, meaning the exponential term $e^{V_D/(nV_T)}$ becomes smaller for the same voltage $V_D$. This implies that the forward voltage required to achieve a certain current *decreases* with increasing temperature. This is why diodes can drift in performance with temperature changes. Also, $I_S$ is highly temperature-dependent, increasing significantly with temperature. This is why diodes have a negative temperature coefficient for their forward voltage drop.

**Remember this:** the diode equation is the bedrock of semiconductor device understanding. It links voltage and current through physical parameters ($I_S$, $n$, $V_T$) that tell us about the material and operating conditions.

### 4. Visualizing the Diode Equation: The I-V Characteristics

Let's sketch the I-V curve based on the diode equation.

*   **Forward Bias ($V_D > 0$):**
    As $V_D$ increases from 0, the current $I_D$ starts very small and then increases exponentially. There's a point called the **threshold voltage** or **cut-in voltage** (around 0.7V for silicon, 0.3V for germanium) where the current starts to flow significantly. Before this voltage, the current is practically zero. After this voltage, the current rises very steeply. This steep rise is the exponential term $e^{V_D/(nV_T)}$ dominating.

*   **Reverse Bias ($V_D < 0$):**
    As $V_D$ becomes negative, the exponential term $e^{V_D/(nV_T)}$ becomes very small (close to zero). The equation becomes $I_D \approx -I_S$. This means the current is a small, constant negative value (the reverse saturation current). This holds true until a sufficiently large reverse voltage is applied, causing **breakdown**. In breakdown, the reverse current can increase dramatically, which is a separate phenomenon (like Zener or Avalanche breakdown) not fully captured by this basic equation alone.

This I-V characteristic is what you'll see in datasheets and is fundamental to how diodes are used in circuits for rectification, switching, and signal processing.

### 5. Connection to Course Outcomes

Let's revisit our course outcomes and see how this topic connects:

*   **CO1: Explain the fundamentals of Semiconductor Physics:** The derivation of the diode equation relies heavily on fundamental semiconductor concepts like doping, PN junctions, depletion regions, built-in potential, diffusion, drift, minority and majority carriers, and the Boltzmann distribution. We've covered all these building blocks.
*   **CO2: Describe the behaviour of semiconductor materials in semiconductor devices:** The diode equation itself describes the behavior of a semiconductor device (the diode). The parameters within the equation ($I_S$, $n$, $V_T$) are directly related to the material properties (intrinsic carrier concentration, doping levels, recombination mechanisms) and operating conditions (temperature).

### 6. Practical Considerations and Exam Tips

*   **Approximations:** In many circuit analyses, especially for forward bias, the diode is approximated as a voltage-controlled switch.
    *   For $V_D < V_{on}$ (turn-on voltage, e.g., 0.7V for Si), $I_D \approx 0$.
    *   For $V_D \ge V_{on}$, $I_D$ can be calculated using $I_D = I_S e^{(V_D-V_{on})/(n V_T)}$ (where $V_{on}$ is the voltage at which current becomes significant) or, more simply, by assuming $V_D \approx V_{on}$ and using Ohm's law with a small series resistance if needed.
*   **Reverse Breakdown:** The basic diode equation does *not* describe breakdown. Be aware of this distinction in exams. Breakdown is a separate failure mechanism.
*   **Temperature Effects:** Always remember that $V_T$ and $I_S$ are temperature-dependent. This is a frequent point of discussion or calculation in exam problems. $I_S$ approximately doubles for every 10°C rise in temperature. The forward voltage drop $V_D$ for a constant current decreases by about 2mV/°C.
*   **Units:** Pay close attention to units. Voltages are in Volts, currents in Amperes, and temperatures in Kelvin.

**Exam Tip:** When asked to derive the diode equation, focus on explaining the physical processes (diffusion, drift, barrier potential, effect of applied voltage) and how they lead to the exponential and constant current components. Clearly define all terms in the equation.

### Summary of Key Takeaways

*   A diode is a PN junction.
*   The depletion region and built-in potential are formed at equilibrium.
*   Forward bias reduces the barrier, allowing significant majority carrier current.
*   Reverse bias increases the barrier, allowing only a small minority carrier current (reverse saturation current).
*   The diode equation, $I_D = I_S (e^{V_D/(n V_T)} - 1)$, quantifies this behavior.
*   $I_S$ is the reverse saturation current, $n$ is the ideality factor, and $V_T = kT/q$ is the thermal voltage.
*   The ideality factor accounts for recombination in the depletion region.
*   The diode's I-V characteristics show exponential growth in forward bias and a near-constant small current in reverse bias.

## Sample Questions with Answers

**1. Conceptual Question:** Explain the origin of the reverse saturation current ($I_S$) in a PN junction diode.

**Answer:** The reverse saturation current ($I_S$) in a PN junction diode originates from the minority carriers present in each region of the junction. In the N-type material, there are a small number of holes (minority carriers), and in the P-type material, there are a small number of electrons (minority carriers). When a reverse bias voltage is applied, it increases the potential barrier and widens the depletion region. The strong electric field across this region sweeps the minority carriers from their respective regions across the junction. For example, holes from the N-side are swept to the P-side, and electrons from the P-side are swept to the N-side. This flow of minority carriers constitutes the reverse current. Since the number of minority carriers is primarily determined by temperature and is not significantly affected by the reverse voltage (until breakdown), the reverse current remains nearly constant and is called the reverse saturation current.

**2. Derivation/Application Question:** Derive the diode equation for a PN junction and explain the physical significance of the ideality factor ($n$).

**Answer:**
**Derivation:**
The total current ($I_D$) through a PN junction diode is the sum of the forward current ($I_F$) and the reverse current ($I_R$).
In forward bias ($V_D > 0$), the potential barrier is reduced, allowing majority carriers to diffuse across the junction. The number of carriers with sufficient energy to cross is proportional to $e^{V_D/V_T}$ (where $V_T = kT/q$). Thus, $I_F \propto e^{V_D/V_T}$.
In reverse bias ($V_D < 0$), the potential barrier is increased, and majority carrier diffusion is negligible. The current is due to minority carriers being swept across the junction by the electric field, which is approximately constant and equal to $-I_S$.
Combining these, the total current can be expressed as $I_D = I_F + I_R$.
$I_D = A(e^{V_D/V_T} - 1)$, where $A$ is a proportionality constant. This constant is related to the reverse saturation current $I_S$. For a more complete model considering recombination, we introduce the ideality factor $n$.
The diode equation is:
$$I_D = I_S (e^{V_D/(n V_T)} - 1)$$
where $I_S$ is the reverse saturation current, $V_D$ is the diode voltage, $n$ is the ideality factor, and $V_T$ is the thermal voltage ($kT/q$).

**Physical Significance of the Ideality Factor ($n$):**
The ideality factor ($n$) accounts for deviations from ideal behavior in the diode.
*   When $n=1$, the diode is considered ideal. The forward current is solely due to the diffusion of minority carriers injected across the junction.
*   When $n>1$ (typically $n \approx 2$ for silicon diodes), it indicates that recombination of electron-hole pairs within the depletion region is a significant contributor to the current flow. When an electron and hole recombine in the depletion region, they do not contribute to the external current. This process effectively reduces the number of carriers that can cross the junction for a given applied voltage compared to an ideal diffusion-only mechanism, leading to a less steep exponential rise in forward current. It signifies increased losses or inefficiencies in the charge transport process.

**3. Application Question:** A silicon PN junction diode has a reverse saturation current $I_S = 10^{-12}$ A at room temperature (300 K). If the ideality factor $n=1$, calculate the diode current when a forward voltage of 0.7 V is applied. (Assume $k = 1.38 \times 10^{-23}$ J/K and $q = 1.602 \times 10^{-19}$ C).

**Answer:**
First, calculate the thermal voltage $V_T$:
$V_T = kT/q = (1.38 \times 10^{-23} \text{ J/K} \times 300 \text{ K}) / (1.602 \times 10^{-19} \text{ C})$
$V_T \approx 0.02597 \text{ V} \approx 26 \text{ mV}$

Given:
$I_S = 10^{-12}$ A
$V_D = 0.7$ V
$n = 1$
$V_T = 0.026$ V (using the approximate value for simplicity)

Using the diode equation:
$I_D = I_S (e^{V_D/(n V_T)} - 1)$
$I_D = 10^{-12} \text{ A} (e^{0.7 \text{ V} / (1 \times 0.026 \text{ V})} - 1)$
$I_D = 10^{-12} \text{ A} (e^{0.7 / 0.026} - 1)$
$I_D = 10^{-12} \text{ A} (e^{26.92} - 1)$

Since $e^{26.92}$ is a very large number (approximately $1.09 \times 10^{11}$), the '-1' term is negligible.
$I_D \approx 10^{-12} \text{ A} \times e^{26.92}$
$I_D \approx 10^{-12} \text{ A} \times 1.09 \times 10^{11}$
$I_D \approx 0.109 \text{ A} = 109 \text{ mA}$

So, the diode current is approximately 109 mA. This demonstrates how a small change in voltage (from 0.7V to 0.726V, which is $V_T$) would lead to a doubling of the current for an ideal diode.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
