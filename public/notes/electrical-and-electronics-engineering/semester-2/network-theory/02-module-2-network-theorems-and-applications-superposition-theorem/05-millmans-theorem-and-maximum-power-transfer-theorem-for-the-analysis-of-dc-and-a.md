---
title: "Millman’s theorem and Maximum power transfer theorem for the analysis of DC and AC networks having independent and dependent sources."
subject: "NETWORK THEORY"
module: "Module 2: Network theorems and applications : Superposition theorem"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f987d"
status: "completed"
scrapedAt: "2026-05-23T16:08:35.422Z"
---
# NETWORK THEORY: Module 2 - Network Theorems and Applications

## Introduction to Network Theorems

Welcome, everyone, to Module 2 of Network Theory! In our previous module, we laid the groundwork for understanding electrical circuits using fundamental principles like Ohm's Law and Kirchhoff's Laws. Now, we're going to elevate our analytical toolkit with the power of **network theorems**. Think of these theorems as special shortcuts, clever techniques that simplify the analysis of complex electrical networks. Instead of painstakingly solving a system of equations every single time, these theorems allow us to extract specific information (like voltage across a resistor or current through a branch) much more efficiently.

This module is particularly crucial because it directly addresses **Course Outcome 2 (CO2): Apply network theorems to analyze electrical networks**. You’ll see how these theorems, even for complex AC and DC circuits with various types of sources, can make your life as an electrical engineer significantly easier. We'll be focusing on two powerful theorems today: **Millman's Theorem** and the **Maximum Power Transfer Theorem**.

## 2.1 Millman's Theorem: Unifying Parallel Voltage Sources

Have you ever looked at a circuit with multiple voltage sources connected in parallel, perhaps feeding into a common load? It can seem a bit daunting to figure out the exact voltage across that load. That's precisely where **Millman's Theorem** shines! It’s like a master key that unlocks the voltage across any branch in a network consisting of any number of series-connected branches, each containing any number of elements.

Let's break it down. Imagine you have several "legs" or branches, and each leg is connected to two common points. Each of these legs might have a voltage source, a resistor, or a combination of them in series. Millman's Theorem helps us find the voltage between those two common points.

### The Core Idea: Equivalent Voltage Source

At its heart, Millman's Theorem allows us to convert a parallel combination of voltage sources (each in series with its own impedance) into a single equivalent voltage source connected in series with an equivalent impedance. This makes the analysis of the rest of the circuit a breeze.

Consider a simple parallel network of branches, where each branch $k$ has a voltage source $V_k$ in series with an impedance $Z_k$. If these branches are connected between two nodes, say node A and node B, then the voltage between A and B, $V_{AB}$, can be found using Millman's Theorem.

The formula, often found in textbooks like *Basic Engineering Circuit Analysis* by Irwin and Nelms or *Network Analysis* by Van Valkenburg, looks like this:

$$V_{AB} = \frac{\sum_{k=1}^{n} \frac{V_k}{Z_k}}{\sum_{k=1}^{n} \frac{1}{Z_k}}$$

Here, $V_k$ is the voltage of the $k$-th source and $Z_k$ is its series impedance. The summation is performed over all the parallel branches.

### What about the "G" word? Admittances!

You might also see this theorem expressed in terms of **admittances**. Remember, admittance ($Y$) is the reciprocal of impedance ($Z$), so $Y = 1/Z$. If we use admittances, the formula becomes even more intuitive:

$$V_{AB} = \frac{\sum_{k=1}^{n} V_k Y_k}{\sum_{k=1}^{n} Y_k}$$

This form is often preferred because it directly relates to current ($I = VY$) and conductance/admittance. Think of it like this: each branch contributes a certain amount of "current-making potential" ($V_k Y_k$) to the common nodes, and the total "ease of current flow" between those nodes is represented by the sum of admittances ($\sum Y_k$). The voltage between the nodes is then the total potential divided by the total ease of flow.

### Applying Millman's Theorem: A Practical Analogy

Imagine a water system with several parallel pipes, each having a pump (voltage source) and a filter (impedance) connected in series. We want to find the water pressure difference between the two common connection points of these pipes. Millman's theorem essentially tells us how to combine all these pump-filter systems into one equivalent pump-filter system to easily determine that pressure difference.

The formula is quite powerful. It works for **DC circuits** (where impedances are just resistances, $Z_k = R_k$) and **AC circuits** (where impedances can be complex, $Z_k = R_k + jX_k$).

### Handling Different Types of Sources: The Key

Now, the question arises: what if we have different types of sources?
*   **Independent Voltage Sources:** These are the standard ones we've been discussing, $V_k$ in series with $Z_k$.
*   **Independent Current Sources:** What if a branch has an independent current source $I_k$ in parallel with an impedance $Z_k$? This is where we need a clever conversion. A current source $I_k$ in parallel with $Z_k$ is *equivalent* to a voltage source $V_k = I_k Z_k$ in series with the *same* impedance $Z_k$. So, we can convert any parallel current source-impedance branch into an equivalent series voltage source-impedance branch and then apply Millman's theorem! This is a crucial step and often tested.

*   **Dependent Sources:** This is where it gets a bit trickier, and many students find this a point of confusion. Millman's Theorem, in its basic form stated above, is directly applicable to networks with *independent* sources only. If you have dependent sources, you cannot directly plug their values into the Millman formula. Instead, you would typically use Millman's theorem to simplify parts of the network that *only* contain independent sources, and then analyze the remaining circuit (including the dependent sources) using other methods like nodal analysis or mesh analysis. Alternatively, you can use it in conjunction with other theorems, but the direct application of the formula with dependent sources is generally not recommended without significant modification or pre-processing. Textbooks like *Circuits and Networks* by Sudhakar and Shyammohan S. P often clarify this limitation.

### Steps to Apply Millman's Theorem:

1.  **Identify parallel branches:** Locate the two nodes (say, A and B) between which you want to find the voltage. Identify all branches connected directly between these two nodes.
2.  **Convert to series voltage source form:** For each branch, ensure you have a voltage source $V_k$ in series with an impedance $Z_k$. If you have a current source $I_k$ in parallel with $Z_k$, convert it to an equivalent voltage source $V_k = I_k Z_k$ in series with $Z_k$. Remember to pay attention to the polarity of the equivalent voltage source.
3.  **Calculate $V_k/Z_k$ (or $V_k Y_k$) for each branch:** For each branch, compute the ratio of the voltage source to its series impedance. If you're using admittances, compute $V_k Y_k$.
4.  **Calculate $1/Z_k$ (or $Y_k$) for each branch:** For each branch, compute the reciprocal of the series impedance. If using admittances, this is just $Y_k$.
5.  **Sum the values:** Add up all the $V_k/Z_k$ (or $V_k Y_k$) terms and all the $1/Z_k$ (or $Y_k$) terms separately.
6.  **Apply the formula:** Divide the sum from step 5 (numerator) by the sum from step 5 (denominator) to get the voltage $V_{AB}$.

**Example Walkthrough (Conceptual):**

Imagine a circuit with two parallel branches feeding into a load resistor.
Branch 1: A 10V DC source in series with a 2-ohm resistor.
Branch 2: A 5V DC source in series with a 5-ohm resistor.
We want to find the voltage across a 3-ohm resistor connected in parallel to these two branches.

Using Millman's:
Branch 1: $V_1 = 10V$, $Z_1 = 2\Omega$. $V_1/Z_1 = 10/2 = 5$. $1/Z_1 = 1/2 = 0.5$.
Branch 2: $V_2 = 5V$, $Z_2 = 5\Omega$. $V_2/Z_2 = 5/5 = 1$. $1/Z_2 = 1/5 = 0.2$.

Sum of $(V_k/Z_k) = 5 + 1 = 6$.
Sum of $(1/Z_k) = 0.5 + 0.2 = 0.7$.

Equivalent voltage of the two branches = $6 / 0.7 \approx 8.57V$.
Equivalent impedance of the two branches = $1 / 0.7 \approx 1.43\Omega$.

Now, we have an equivalent circuit of an 8.57V source in series with a 1.43-ohm resistor, all connected to the 3-ohm load resistor.
The voltage across the 3-ohm load would be found using simple voltage division: $V_{load} = 8.57V \times (3\Omega / (1.43\Omega + 3\Omega)) \approx 5.94V$.

This is so much simpler than trying to set up nodal equations for the entire circuit, right? Remember this advantage!

## 2.2 Maximum Power Transfer Theorem: Delivering the Most Energy

Now, let's switch gears to another incredibly important theorem: the **Maximum Power Transfer Theorem**. This theorem is fundamental in many practical applications, from designing audio amplifiers to ensuring efficient power delivery from a source to a load.

What does it mean to transfer maximum power? Imagine you have a power source, like a battery, connected to a resistive load. As you change the resistance of the load, the amount of power delivered to that load will change. The Maximum Power Transfer Theorem tells us the *exact* condition under which the source will deliver the maximum possible power to the load.

### The Core Principle: Thevenin's Equivalent

The Maximum Power Transfer Theorem is best understood in the context of a **Thevenin equivalent circuit**. If you recall, any linear network can be simplified to an equivalent circuit consisting of a single Thevenin voltage source ($V_{th}$) in series with a single Thevenin impedance ($Z_{th}$).

So, consider a linear network connected to a load impedance $Z_L$. We can represent the network driving the load by its Thevenin equivalent: $V_{th}$ in series with $Z_{th}$. The power delivered to the load $Z_L$ is then given by:

$$P_L = |I|^2 R_L$$

where $I$ is the current flowing through the load, and $R_L$ is the *resistive* part of the load impedance. The current $I$ is given by:

$$I = \frac{V_{th}}{Z_{th} + Z_L}$$

Let's express $Z_{th}$ and $Z_L$ in their rectangular forms:
$Z_{th} = R_{th} + jX_{th}$
$Z_L = R_L + jX_L$

So, $I = \frac{V_{th}}{(R_{th} + R_L) + j(X_{th} + X_L)}$.
The magnitude squared of the current is $|I|^2 = \frac{|V_{th}|^2}{(R_{th} + R_L)^2 + (X_{th} + X_L)^2}$.

And the power delivered to the load is:
$$P_L = |I|^2 R_L = \frac{|V_{th}|^2 R_L}{(R_{th} + R_L)^2 + (X_{th} + X_L)^2}$$

### The Condition for Maximum Power Transfer

Now, to maximize $P_L$, we need to consider how the load impedance $Z_L$ affects this equation. We can vary $R_L$ and $X_L$ to see when $P_L$ is at its peak.

**Case 1: Purely Resistive Networks (DC circuits)**
If the source network is purely resistive (meaning $Z_{th} = R_{th}$) and the load is also purely resistive ($Z_L = R_L$), the power delivered to the load is:

$$P_L = \frac{V_{th}^2 R_L}{(R_{th} + R_L)^2}$$

To find the condition for maximum power, we differentiate $P_L$ with respect to $R_L$ and set the result to zero. This gives us:

$$R_L = R_{th}$$

So, for DC circuits, maximum power is delivered to the load when the load resistance is equal to the Thevenin equivalent resistance of the source network.

**Analogy:** Imagine you're trying to fill a bucket with water from a tank using a hose. The tank has an internal resistance to water flow (your $R_{th}$), and the hose itself has a certain diameter (your $R_L$). If the hose is too narrow ($R_L$ is small), water flows quickly but doesn't fill the bucket much due to the hose's resistance. If the hose is too wide ($R_L$ is large), the flow rate is low, and again, the bucket doesn't fill efficiently. There's an optimal hose width ($R_L = R_{th}$) that balances flow rate and resistance to deliver the most water (power) into the bucket.

**Case 2: AC Networks (Complex Impedances)**
In AC circuits, the load impedance $Z_L$ can be complex, meaning it has both resistance ($R_L$) and reactance ($X_L$). The Thevenin equivalent impedance is also complex, $Z_{th} = R_{th} + jX_{th}$.

The power equation is:
$$P_L = \frac{|V_{th}|^2 R_L}{(R_{th} + R_L)^2 + (X_{th} + X_L)^2}$$

To maximize $P_L$, we have two variables to control: $R_L$ and $X_L$.
First, let's consider the denominator. The term $(X_{th} + X_L)^2$ is always non-negative. To minimize the denominator (and thus maximize $P_L$), this term should be as small as possible. The smallest it can be is zero, which happens when:

$$X_L = -X_{th}$$

This means the load reactance must be the *negative* of the Thevenin equivalent reactance. This is the concept of **complex conjugate matching**. If $Z_{th}$ is inductive ($X_{th} > 0$), then $Z_L$ must be capacitive ($X_L < 0$) with the same magnitude of reactance. If $Z_{th}$ is capacitive ($X_{th} < 0$), then $Z_L$ must be inductive ($X_L > 0$).

Once we've established $X_L = -X_{th}$, the power equation simplifies to:
$$P_L = \frac{|V_{th}|^2 R_L}{(R_{th} + R_L)^2}$$

Now, we apply the same logic as in the DC case to maximize this with respect to $R_L$:

$$R_L = R_{th}$$

So, the condition for maximum power transfer in AC circuits is:

**The load impedance $Z_L$ must be the complex conjugate of the Thevenin equivalent impedance $Z_{th}$ of the source network.**

$$Z_L = Z_{th}^*$$
or
$$R_L + jX_L = R_{th} - jX_{th}$$

This implies $R_L = R_{th}$ and $X_L = -X_{th}$.

### What about Dependent Sources?

Similar to Millman's Theorem, the Maximum Power Transfer Theorem is stated for a source network that can be represented by a $V_{th}$ and $Z_{th}$. If the source network contains dependent sources, finding $V_{th}$ and $Z_{th}$ requires careful application of other techniques.

*   **Finding $V_{th}$:** When dependent sources are present, $V_{th}$ (the open-circuit voltage) is found by analyzing the circuit with the load removed and the dependent source's controlling variables determined by this open-circuit condition. This often involves nodal or mesh analysis.
*   **Finding $Z_{th}$:** The Thevenin equivalent impedance $Z_{th}$ is found by setting all *independent* sources to zero (voltage sources become short circuits, current sources become open circuits) and then finding the equivalent impedance seen from the load terminals. If there are dependent sources, you typically inject a test voltage or current source at the terminals and determine the resulting current or voltage to find $Z_{th} = V_{test}/I_{test}$ (or $Z_{th} = V_{test}/I_{test}$). This process is thoroughly explained in resources like *Electric Circuits – Schaum’s Outline Series* by Edminister et al.

**Important Note for Exams:** When asked to find $Z_{th}$ with dependent sources, remember to zero out *only* the independent sources. The dependent sources remain active and their behavior is dictated by their control variables.

### Practical Implications and Pitfalls

*   **Efficiency:** While the Maximum Power Transfer Theorem delivers maximum power to the load, it doesn't necessarily mean maximum *efficiency*. When $R_L = R_{th}$, the power delivered to the load is equal to the power dissipated within the source's internal resistance. This means the efficiency is only 50% ($P_L / P_{total} = R_L / (R_L + R_{th}) = R_{th} / (R_{th} + R_{th}) = 0.5$). In power distribution systems, we often want high efficiency, so loads are designed to have much higher resistance than the source's internal resistance. However, in signal transfer applications (like radio receivers), maximizing the power delivered to the receiver is often more critical than efficiency.

*   **Load Matching:** The concept of matching the load impedance to the source impedance is fundamental in RF engineering and communication systems.

*   **AC vs. DC:** Always remember the complex conjugate matching requirement for AC circuits. Forgetting the reactive component matching ($X_L = -X_{th}$) is a common mistake.

**Quick Recall Tip:** For DC, Max Power $\iff R_L = R_{th}$. For AC, Max Power $\iff Z_L = Z_{th}^*$.

### Steps to Apply Maximum Power Transfer Theorem:

1.  **Identify the load:** Determine which element or combination of elements is considered the load ($Z_L$).
2.  **Find the Thevenin equivalent circuit:**
    *   **Calculate $V_{th}$:** Remove the load and find the open-circuit voltage ($V_{oc}$) across the load terminals.
    *   **Calculate $Z_{th}$:** Deactivate all independent sources. If dependent sources exist, inject a test source (voltage or current) at the terminals and calculate the ratio of test voltage to test current (or vice versa) to find $Z_{th}$.
3.  **Determine the condition for maximum power transfer:**
    *   For DC: Set the load resistance $R_L = R_{th}$.
    *   For AC: Set the load impedance $Z_L = R_{th} - jX_{th}$ (the complex conjugate of $Z_{th}$).
4.  **Calculate the maximum power (optional but often required):** Once you have the optimal $Z_L$, substitute it back into the power formula to find the maximum power that can be delivered.
    *   For DC: $P_{L,max} = \frac{V_{th}^2}{4 R_{th}}$
    *   For AC: $P_{L,max} = \frac{|V_{th}|^2}{4 R_{th}}$ (Note: the $R_{th}$ in the denominator comes from $R_L + R_{th}$ when $R_L=R_{th}$, and the voltage term $|V_{th}|^2$ is actually $|V_{th}|^2/(R_{th}+R_{th})^2 \times R_{th} = |V_{th}|^2/(2R_{th})^2 \times R_{th} = |V_{th}|^2 R_{th} / (4R_{th}^2) = |V_{th}|^2 / (4R_{th})$).

This theorem is very practical. Think about tuning an old radio. You turn a dial to "tune in" a station. This tuning process often involves adjusting the load impedance (the radio's circuitry) to match the complex conjugate of the antenna's impedance, thereby maximizing the power received from the radio wave.

## Connecting to Course Outcomes

Throughout this discussion, we've directly addressed **CO2: Apply network theorems to analyze electrical networks**.

*   **Millman's Theorem** provides a specific method to simplify parallel voltage sources, making circuit analysis more manageable. Its application is a direct demonstration of applying a theorem.
*   **Maximum Power Transfer Theorem** shows us *how* to configure a load to receive the most energy from a source. This involves first finding the Thevenin equivalent (which itself uses other theorems and analysis techniques like nodal/mesh) and then applying the matching condition. This requires a deeper level of analysis (CO1) to find $V_{th}$ and $Z_{th}$, and then applying a specific principle (CO2).

While we haven't explicitly used Laplace transforms (CO3) or focused on network functions (CO4) in this particular segment, understanding these theorems is crucial for those later modules. For example, finding $Z_{th}$ often involves analyzing the circuit with independent sources off, which can be a prelude to finding network functions.

## Conclusion for Today

We've covered two powerful tools in our network analysis arsenal: Millman's Theorem for simplifying parallel voltage sources, and the Maximum Power Transfer Theorem for optimizing energy delivery. Remember the key conditions and the types of sources each theorem handles best. Practice is key, so work through the examples provided and don't hesitate to consult your textbooks, especially Irwin/Nelms for detailed examples on Millman's and Sudhakar/Shyammohan for clarity on source types and limitations.

***

## Sample Questions and Answers

**Question 1 (Conceptual):** In a DC circuit analysis, if a branch contains an independent current source $I_s$ in parallel with a resistor $R$, how would you represent this branch in a form suitable for Millman's Theorem?

**Answer:** To apply Millman's Theorem, all branches must be in the form of a voltage source in series with an impedance. A current source $I_s$ in parallel with a resistor $R$ is equivalent to a voltage source $V_s = I_s \times R$ in series with the same resistor $R$. The polarity of the voltage source $V_s$ must be consistent with the direction of the current source $I_s$.

**Reasoning:** This is a direct application of source transformation, a fundamental technique used in circuit analysis. The voltage across the parallel combination of $I_s$ and $R$ is $I_s R$. For the series equivalent, $V_s$ is the voltage source, and $R$ is the series impedance. The current through $R$ in the parallel case is the total current minus the current through $I_s$, which is not straightforward. However, the voltage across the parallel combination is $I_s R$. In the series equivalent, the current through $R$ is $V_s / (Z_{th} + R)$. For equivalence, the voltage across the original parallel combination must equal the voltage across the series combination when terminals are open. In this case, the voltage across the parallel $I_s$ and $R$ is $I_s R$. The equivalent series voltage source $V_s$ will therefore be $I_s R$.

**Question 2 (Exam-Oriented):** For the AC network shown below (assume a circuit diagram would be provided with $V_1=10\angle0^\circ$ V, $Z_1 = 2+j1 \Omega$, $V_2=5\angle30^\circ$ V, $Z_2 = 3-j2 \Omega$, connected in parallel to a load $Z_L = 5+j2 \Omega$), find the value of $Z_L$ required to receive maximum power from the source network formed by $V_1, Z_1, V_2, Z_2$.

**Answer:**
First, we need to find the Thevenin equivalent of the source network formed by $V_1, Z_1, V_2, Z_2$.
The source network consists of two parallel branches. We'll use Millman's theorem to find the equivalent voltage source.

Branch 1: $V_1 = 10\angle0^\circ$, $Z_1 = 2+j1 \Omega$. Admittance $Y_1 = \frac{1}{Z_1} = \frac{1}{2+j1} = \frac{2-j1}{(2+j1)(2-j1)} = \frac{2-j1}{4+1} = 0.4 - j0.2$ S.
$V_1 Y_1 = (10\angle0^\circ)(0.4 - j0.2) = 10(0.4 - j0.2) = 4 - j2$.

Branch 2: $V_2 = 5\angle30^\circ = 5(\cos 30^\circ + j\sin 30^\circ) = 5(0.866 + j0.5) = 4.33 + j2.5$.
$Z_2 = 3-j2 \Omega$. Admittance $Y_2 = \frac{1}{Z_2} = \frac{1}{3-j2} = \frac{3+j2}{(3-j2)(3+j2)} = \frac{3+j2}{9+4} = \frac{3+j2}{13} \approx 0.231 + j0.154$ S.
$V_2 Y_2 = (4.33 + j2.5)(0.231 + j0.154) \approx (4.33 \times 0.231) + j(4.33 \times 0.154) + j(2.5 \times 0.231) + j^2(2.5 \times 0.154)$
$V_2 Y_2 \approx 1.000 + j0.667 + j0.356 - 0.385 = 0.615 + j1.023$.

Now, apply Millman's theorem to find the equivalent voltage $V_{th}$:
$V_{th} = \frac{V_1 Y_1 + V_2 Y_2}{Y_1 + Y_2}$
$V_{th} = \frac{(4 - j2) + (0.615 + j1.023)}{(0.4 - j0.2) + (0.231 + j0.154)}$
$V_{th} = \frac{4.615 - j0.977}{0.631 - j0.046}$

Now, we calculate the complex division:
$V_{th} \approx \frac{4.615 - j0.977}{0.631 - j0.046} \approx \frac{4.734 \angle -12.16^\circ}{0.631 \angle -4.18^\circ} \approx 7.50 \angle -8.0^\circ$ V.

Next, we find the Thevenin equivalent impedance $Z_{th}$. Deactivate voltage sources (short circuit).
$Z_{th} = \frac{1}{Y_1 + Y_2} = \frac{1}{0.631 - j0.046} \approx 1.585 \angle 4.18^\circ \Omega$.
Converting to rectangular form: $Z_{th} \approx 1.585 (\cos 4.18^\circ + j\sin 4.18^\circ) \approx 1.585 (0.997 + j0.073) \approx 1.580 + j0.115 \Omega$.

For maximum power transfer, the load impedance $Z_L$ must be the complex conjugate of $Z_{th}$.
$Z_{L, \text{optimal}} = Z_{th}^* = (1.580 - j0.115) \Omega$.

The question asks for the value of $Z_L$ required for maximum power transfer, which is the complex conjugate of $Z_{th}$.
$Z_L = 1.580 - j0.115 \Omega$.

**Reasoning:** This question tests both Millman's Theorem (to find the equivalent source voltage) and the Maximum Power Transfer Theorem for AC circuits. The steps involve calculating admittances, performing complex arithmetic for Millman's, finding the Thevenin impedance by deactivating sources, and finally stating the complex conjugate for the load. This is a typical multi-step problem that combines different theorem applications.

**Question 3 (Conceptual):** Does the Maximum Power Transfer Theorem guarantee the highest *efficiency* of power delivery? Explain why or why not.

**Answer:** No, the Maximum Power Transfer Theorem does not guarantee the highest *efficiency* of power delivery. It guarantees that the *absolute maximum amount of power* is transferred from the source to the load. This occurs when the load impedance is the complex conjugate of the Thevenin equivalent impedance of the source. In the case of purely resistive circuits (DC), this condition is $R_L = R_{th}$. At this point, the power dissipated in the load is $P_L = I^2 R_L$, and the power dissipated in the source's internal resistance is $P_{internal} = I^2 R_{th}$. Since $R_L = R_{th}$, $P_L = P_{internal}$. This means the total power generated by the source is $P_{total} = P_L + P_{internal} = 2P_L$. Therefore, the efficiency ($\eta = P_L / P_{total}$) is $P_L / (2P_L) = 0.5$, or 50%. To achieve higher efficiency (closer to 100%), the load resistance $R_L$ should be much larger than $R_{th}$.

**Reasoning:** This question probes the understanding of the trade-off between maximum power delivery and efficiency, a common point of confusion. The explanation correctly identifies the 50% efficiency point and contrasts it with the desire for high efficiency in many practical power systems.
