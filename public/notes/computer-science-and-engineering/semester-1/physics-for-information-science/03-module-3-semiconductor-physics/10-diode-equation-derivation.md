---
title: "Diode equation (Derivation)"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 3: Semiconductor Physics"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d86"
status: "completed"
scrapedAt: "2026-05-20T16:41:39.537Z"
---
Absolutely! Here are comprehensive study notes for the Diode Equation derivation, designed to be engaging, informative, and aligned with your course objectives.

---

## Module 3: Semiconductor Physics - The Diode Equation (Derivation)

Welcome back, everyone! In our journey through semiconductor physics, we've explored the fundamental building blocks like p-n junctions. Now, we're going to tackle a crucial concept that describes the very heart of a diode's operation: the **Diode Equation**. Understanding this equation is paramount because it’s the mathematical language that tells us how a diode behaves under different conditions – whether it's allowing current to flow or blocking it. This directly connects to **CO3: Apply the fundamentals of Semiconductor Physics in engineering** and **CO4: Describe the behaviour of semiconductor materials in semiconductor devices**. Remember, the diode equation is the key to designing and analyzing all sorts of semiconductor circuits.

### 1. Revisiting the p-n Junction: The Foundation

Before we dive into the equation itself, let's quickly recap what makes a p-n junction tick. Imagine we have a piece of p-type semiconductor material (rich in holes) and we join it with an n-type semiconductor material (rich in electrons). What happens at the interface?

*   **Diffusion:** Due to the concentration gradient, electrons from the n-side will diffuse across the junction into the p-side, and holes from the p-side will diffuse into the n-side.
*   **Recombination:** When an electron meets a hole, they recombine, effectively disappearing.
*   **Depletion Region:** This diffusion and recombination process leaves behind immobile ionized donor atoms (positive charge) on the n-side and immobile ionized acceptor atoms (negative charge) on the p-side. This region, devoid of free charge carriers, is called the **depletion region**.
*   **Built-in Potential ($V_{bi}$):** The accumulation of opposite charges across the depletion region creates an electric field and thus a potential difference, known as the **built-in potential** or **barrier potential**. This potential opposes further diffusion.
*   **Equilibrium:** In thermal equilibrium, the diffusion current (due to concentration gradient) is exactly balanced by the drift current (due to the built-in electric field). The net current across the junction is zero.

Think of it like a busy marketplace: people naturally move from crowded areas to less crowded ones (diffusion). But if there's a watchful security guard (the built-in electric field) who gently pushes people back, it creates a zone where fewer people linger (the depletion region). Equilibrium is reached when the flow in one direction is exactly matched by the flow in the other.

### 2. Applying External Voltage: Forward and Reverse Bias

Now, what happens when we connect a battery to this p-n junction? This is where the diode equation comes into play, as it describes the current flow when an external voltage ($V$) is applied.

#### 2.1. Forward Bias: Making Current Flow Easy

When we connect the positive terminal of the battery to the p-side and the negative terminal to the n-side, we are **forward biasing** the diode.

*   **How it works:** The applied voltage ($V$) opposes the built-in potential ($V_{bi}$). Essentially, the external field tries to push electrons from the n-side to the p-side and holes from the p-side to the n-side.
*   **Effect on the Depletion Region:** This applied voltage effectively "shrinks" the depletion region. It lowers the barrier height, making it easier for majority carriers (holes in p-side, electrons in n-side) to diffuse across the junction.
*   **Current Flow:** As the depletion region narrows and the barrier is lowered, a significant current, known as the **forward current** ($I_F$), starts to flow. This current is primarily due to the movement of majority carriers.

Imagine you're trying to push a ball over a small hill. The hill represents the barrier potential. In forward bias, you're pushing *with* the direction that lowers the hill, making it much easier for the ball to get over. The harder you push (higher forward voltage), the more easily the ball gets over and the faster it rolls down the other side (higher current).

#### 2.2. Reverse Bias: Blocking Current

When we connect the negative terminal of the battery to the p-side and the positive terminal to the n-side, we are **reverse biasing** the diode.

*   **How it works:** The applied voltage ($V$) adds to the built-in potential ($V_{bi}$). The external field strengthens the internal electric field across the junction.
*   **Effect on the Depletion Region:** This applied voltage "widens" the depletion region. It increases the barrier height, making it extremely difficult for majority carriers to cross.
*   **Current Flow:** For practical purposes, the current due to majority carriers becomes negligible. However, there's a very small current, called the **reverse saturation current** ($I_S$), which flows due to the movement of minority carriers (electrons in the p-side, holes in the n-side). These minority carriers are swept across the junction by the strong electric field. This current is largely independent of the reverse bias voltage, up to a certain breakdown point.

In our analogy, reverse bias is like trying to push the ball *up* the hill, and you're even adding to the hill's height. It becomes very difficult for the ball to get over. Only a few stray balls that happen to be rolling very fast from the other side might be caught by the wind (minority carriers) and swept up the hill.

### 3. Deriving the Diode Equation: The Math Behind the Magic

Now, let's get to the core of it – the derivation. This part, often found in detail in books like *Engineering Physics* by Malik and Singh and *Concepts of Modern Physics* by Beiser, involves looking at the currents from a more fundamental, statistical mechanics perspective, specifically using the **Boltzmann distribution**.

The total current ($I$) flowing through the diode is the sum of the forward diffusion current ($I_F$) and the reverse drift current ($I_R$, which is usually negative and represents the reverse saturation current $I_S$).

$$I = I_F + I_R$$

However, the elegant form of the diode equation combines these into a single expression. It's derived by considering the net flux of charge carriers across the junction. The key idea is that the applied voltage $V$ modifies the potential barrier that the charge carriers must overcome.

#### 3.1. Carrier Concentrations Under Bias

Let $p_{p0}$ and $n_{n0}$ be the equilibrium hole and electron concentrations in the p-side and n-side, respectively. Let $p_p$ and $n_n$ be the concentrations in the p-side and n-side *at the edge of the depletion region* when a voltage $V$ is applied.

In forward bias ($V > 0$), the applied voltage reduces the barrier. The concentration of minority carriers near the junction increases. Specifically, the hole concentration in the n-side near the junction, $p_n$, increases significantly. According to the law of mass action and the Boltzmann distribution, the increase in minority carrier concentration is related to the applied forward voltage:

$$n_p \approx n_{p0} e^{V/(kT/q)}$$
$$p_n \approx p_{n0} e^{V/(kT/q)}$$

Here:
*   $n_p$ and $p_n$ are the minority carrier concentrations in the p and n regions, respectively, at the edge of the depletion region under forward bias.
*   $n_{p0}$ and $p_{n0}$ are the equilibrium minority carrier concentrations in the p and n regions, respectively.
*   $V$ is the applied forward bias voltage.
*   $k$ is the Boltzmann constant ($1.38 \times 10^{-23} J/K$).
*   $T$ is the absolute temperature in Kelvin.
*   $q$ is the magnitude of the electronic charge ($1.602 \times 10^{-19} C$).

The term $kT/q$ is often called the **thermal voltage** ($V_T$), and it has a value of approximately 25 mV at room temperature (300 K). So, we can write:

$$n_p \approx n_{p0} e^{V/V_T}$$
$$p_n \approx p_{n0} e^{V/V_T}$$

This exponential relationship is super important! It tells us that even a small change in voltage can cause a large change in current, especially in forward bias.

#### 3.2. Current Components

The total current is composed of diffusion current and drift current. However, the diode equation elegantly captures the net effect. The dominant current in forward bias is the diffusion of injected minority carriers. The number of minority carriers injected across the junction is proportional to the excess minority carrier concentration at the edge of the depletion region.

The injected minority carriers then diffuse into the neutral regions and eventually recombine. The recombination rate, and hence the current, is proportional to the injected minority carrier concentration.

For a forward bias $V$, the current $I_F$ can be related to the injected minority carriers. Textbooks like *Semiconductor Devices Fundamentals* by Pierret go into the detailed transport equations (drift-diffusion equations) to derive this rigorously. The essence is that the excess minority carriers injected from the p-side into the n-side (or vice-versa) diffuse away and recombine. This recombination process generates a current that flows through the external circuit.

Similarly, in reverse bias ($V < 0$), the applied voltage helps the minority carriers to cross the junction, leading to the reverse saturation current. This current is essentially the drift current of minority carriers that are generated thermally and swept across the depletion region. The concentration of these minority carriers is very small and is largely independent of the reverse bias voltage.

The genius of the diode equation is that it unifies these two current components. It starts with the observation that the current flowing across the junction is proportional to the difference between the actual carrier concentrations at the junction and their equilibrium values, modulated by the applied voltage.

By applying the principles of carrier statistics (Boltzmann distribution) and carrier transport (drift and diffusion), and considering the currents of both electrons and holes across the junction, we arrive at the general diode equation:

$$I = I_S \left( e^{V/(kT/q)} - 1 \right)$$

Or, using the thermal voltage $V_T$:

$$I = I_S \left( e^{V/V_T} - 1 \right)$$

Where:
*   $I$ is the total diode current.
*   $I_S$ is the **reverse saturation current**. This is a constant for a given diode at a specific temperature. It represents the current that flows when the diode is reverse biased. It's a very small current, typically in the picoampere ($10^{-12}A$) or nanoampere ($10^{-9}A$) range. It depends on the material properties and the geometry of the diode.
*   $V$ is the applied voltage across the diode. Conventionally, $V$ is positive for forward bias and negative for reverse bias.
*   $e$ is the base of the natural logarithm.
*   $k$ is the Boltzmann constant ($1.38 \times 10^{-23} J/K$).
*   $T$ is the absolute temperature in Kelvin.
*   $q$ is the magnitude of the electronic charge ($1.602 \times 10^{-19} C$).
*   $V_T = kT/q$ is the thermal voltage.

**Remember this:** The term $(e^{V/V_T} - 1)$ is the heart of the diode equation. It dictates the behavior of the diode.

#### 3.3. Analyzing the Equation in Different Regimes

Let's see how this equation beautifully describes the diode's behavior:

*   **Forward Bias ($V \gg V_T$):**
    If $V$ is significantly larger than $V_T$ (e.g., $V > 0.1 V$ at room temperature), the term $e^{V/V_T}$ becomes very large compared to 1.
    So, $e^{V/V_T} - 1 \approx e^{V/V_T}$.
    The equation simplifies to:
    $$I \approx I_S e^{V/V_T}$$
    This is the **exponential relationship** we discussed earlier! It tells us that the forward current increases exponentially with the applied forward voltage. This is why diodes are considered "non-linear" devices. A small increase in voltage leads to a large increase in current. This is a key concept often tested in exams.

    *Example:* Imagine you're turning a dimmer switch for a light. A small turn of the knob (small change in voltage) makes the light much brighter (large change in current).

*   **Reverse Bias ($V \ll -V_T$):**
    If $V$ is negative and its magnitude is much larger than $V_T$ (e.g., $V < -0.1 V$ at room temperature), then $e^{V/V_T}$ becomes very small, close to zero.
    For instance, if $V = -0.5 V$ and $V_T = 0.025 V$, then $V/V_T = -20$.
    $e^{-20}$ is approximately $2 \times 10^{-9}$, which is extremely small.
    So, $e^{V/V_T} - 1 \approx 0 - 1 = -1$.
    The equation becomes:
    $$I \approx I_S (-1) = -I_S$$
    This means the current is approximately a constant negative value, equal to $-I_S$. This constant negative current is the **reverse saturation current**. This behavior is also crucial to understand. The current doesn't change much with reverse voltage, until breakdown.

    *Example:* Imagine a leaky faucet. A small trickle of water comes out regardless of how much you push the handle in the "off" direction (within reason!). That trickle is like the reverse saturation current.

*   **Zero Bias ($V = 0$):**
    If $V = 0$, then $e^{V/V_T} = e^0 = 1$.
    The equation becomes:
    $$I = I_S (1 - 1) = 0$$
    This is correct because, in equilibrium (zero applied voltage), there is no net current flow.

### 4. The Significance of $I_S$ and Temperature Dependence

The reverse saturation current, $I_S$, is not truly constant. It's highly dependent on temperature. As temperature increases, more electron-hole pairs are generated thermally, increasing the concentration of minority carriers. This leads to a larger reverse saturation current. It's often stated that $I_S$ approximately doubles for every $10^\circ C$ rise in temperature.

This temperature dependence is a critical factor in the practical design of electronic circuits. For example, if a diode gets too hot, its forward voltage drop might change, or its reverse leakage might increase, affecting circuit performance. This relates to **CO4: Describe the behaviour of semiconductor materials in semiconductor devices**.

Books like *Solid State Electronic Devices* by Streetman and Banerjee delve deep into the factors influencing $I_S$, such as doping concentrations, material bandgap, and device dimensions.

### 5. Why is the Derivation Important? (Connecting to Learning Outcomes)

*   **Understanding Non-Linearity (CO3, CO4):** The exponential term in the diode equation is the direct reason why diodes are non-linear devices. This non-linearity is exploited in many applications like rectification, switching, and signal amplification. Understanding *why* it's exponential helps us predict how a diode will behave in a circuit.
*   **Predicting Behavior (CO3, CO4):** With the diode equation, we can predict the current through a diode for any given voltage (within its operating limits). This is essential for circuit design. If you need a specific current, you can estimate the required voltage using this equation.
*   **Temperature Effects (CO4):** Recognizing the $T$ in $kT/q$ and knowing how $I_S$ varies with temperature helps us understand why circuits might behave differently in hot or cold environments.
*   **Foundation for Other Devices (CO3):** The diode equation is a fundamental building block. Many other semiconductor devices, like Bipolar Junction Transistors (BJTs) and Field-Effect Transistors (FETs), have current-voltage relationships that are derived from or analogous to the diode equation.

### 6. Common Pitfalls and Exam Tips

*   **Sign Convention:** Always be careful with the sign of the applied voltage $V$. Positive $V$ for forward bias, negative $V$ for reverse bias.
*   **Approximations:** In forward bias, remember that $I \approx I_S e^{V/V_T}$, and in reverse bias, $I \approx -I_S$. These approximations are very useful for quick calculations and conceptual understanding.
*   **Units:** Ensure you use consistent units, especially for temperature (Kelvin) and charge (Coulombs).
*   **Thermal Voltage ($V_T$):** Know that $V_T \approx 25mV$ at room temperature (300K). This is a value you'll encounter frequently.
*   **$I_S$ value:** $I_S$ is usually given or needs to be calculated based on minority carrier lifetimes and doping levels, but for many problems, you'll just use the provided value.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
Explain why the diode equation has an exponential term. What does this term signify about the diode's electrical behavior?

**Answer:**
The diode equation is $I = I_S (e^{V/(kT/q)} - 1)$. The exponential term, $e^{V/(kT/q)}$, arises from the statistical distribution of charge carriers (electrons and holes) across the potential barrier of the p-n junction. In forward bias, the applied voltage $V$ reduces this barrier, allowing more carriers to cross. The probability of a carrier having enough energy to overcome the reduced barrier increases exponentially with the applied voltage, leading to the exponential increase in forward current. This signifies that diodes are non-linear devices, meaning their current does not change linearly with voltage. A small change in voltage can cause a significant change in current, particularly in forward bias.

**Question 2 (Application/Calculation):**
A silicon diode has a reverse saturation current ($I_S$) of $10^{-14} A$ at room temperature (300 K). Calculate the current through the diode when a forward voltage of 0.7 V is applied. Assume $kT/q = 25 mV$.

**Answer:**
We use the diode equation: $I = I_S (e^{V/(kT/q)} - 1)$.
Given:
$I_S = 10^{-14} A$
$V = 0.7 V$
$kT/q = V_T = 0.025 V$

First, calculate the exponent:
$V/V_T = 0.7 V / 0.025 V = 28$

Now, substitute into the equation:
$I = 10^{-14} A (e^{28} - 1)$

Since $e^{28}$ is a very large number (approximately $3.2 \times 10^{12}$), the $-1$ becomes negligible.
$I \approx 10^{-14} A \times e^{28}$
$I \approx 10^{-14} A \times 3.2 \times 10^{12}$
$I \approx 3.2 \times 10^{-2} A$
$I \approx 32 mA$

**Therefore, the current through the diode is approximately 32 mA.**

**Question 3 (Conceptual/Comparison):**
How does the behavior of a diode in forward bias differ from its behavior in reverse bias, as described by the diode equation?

**Answer:**
The diode equation $I = I_S (e^{V/(kT/q)} - 1)$ elegantly captures both behaviors:

*   **Forward Bias ($V > 0$):** When a positive voltage is applied (forward bias), the term $e^{V/(kT/q)}$ becomes much greater than 1 for even moderate forward voltages. The equation approximates to $I \approx I_S e^{V/(kT/q)}$. This results in a large, exponentially increasing forward current. The diode essentially acts like a closed switch, allowing significant current to flow.

*   **Reverse Bias ($V < 0$):** When a negative voltage is applied (reverse bias), the term $e^{V/(kT/q)}$ becomes a very small positive number (close to zero) because $V$ is negative and $kT/q$ is positive. The equation approximates to $I \approx I_S (0 - 1) = -I_S$. This means a small, constant current, called the reverse saturation current ($I_S$), flows in the opposite direction. The diode acts like an open switch, blocking most of the current.

In summary, in forward bias, the current is large and highly voltage-dependent, while in reverse bias, the current is very small and relatively independent of voltage until breakdown.

---

I hope these notes provide a clear and comprehensive understanding of the diode equation. Keep practicing with different values and scenarios, and you'll find it becomes second nature!
