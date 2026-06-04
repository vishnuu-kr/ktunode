---
title: "Maximum power transfer 
theorem"
subject: "CIRCUITS & NETWORKS"
module: "Module 1: Mesh analysis and nodal analysis ( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35aba"
status: "completed"
scrapedAt: "2026-05-23T16:11:20.484Z"
---
## CIRCUITS & NETWORKS: Module 1 Review - Maximum Power Transfer Theorem

This module review focuses on the **Maximum Power Transfer Theorem**, a fundamental concept in circuit analysis that helps us determine the conditions under which a source delivers the maximum possible power to a load.

---

### 1. Introduction to Maximum Power Transfer

**Goal:** To understand how to maximize the power delivered from a source to a load in an electrical circuit.

**Context:** In many applications, the primary objective is not just to make a circuit *work*, but to ensure that it operates at peak efficiency by delivering the maximum possible power to the intended load. This theorem provides the theoretical basis for achieving this.

**Relevance to Course Outcomes:**

*   **CO1 (Apply circuit theorems):** This theorem is a direct application of circuit theorems to analyze and optimize circuit performance. (Knowledge Level: K3)

---

### 2. The Thevenin Equivalent Circuit

Before delving into the theorem itself, it's crucial to understand how to simplify any linear, bilateral network.

**Key Concept:** **Thevenin's Theorem** states that any linear, two-terminal network containing independent sources can be replaced by an equivalent circuit consisting of a single voltage source ($V_{th}$) in series with a single impedance ($Z_{th}$) or resistance ($R_{th}$) for resistive networks.

**How to find $V_{th}$ (Thevenin Voltage):**

*   The voltage across the terminals where the load is to be connected, when the load is removed.

**How to find $Z_{th}$ (Thevenin Impedance):**

*   **For purely resistive networks:** The equivalent resistance seen from the terminals with all independent sources turned off (voltage sources short-circuited, current sources open-circuited).
*   **For AC networks (with impedances):** The equivalent impedance seen from the terminals with all independent sources turned off and dependent sources retained. Alternatively, calculate $V_{oc}$ (open-circuit voltage) and $I_{sc}$ (short-circuit current) across the terminals, and $Z_{th} = V_{oc} / I_{sc}$.

**Textbook References:**

*   **Van Valkenburg (Pearson, 3rd 2019):** Chapter 5, "Thevenin and Norton Theorems."
*   **Ravish R Singh (McGraw Hill Education, 2nd 2019):** Chapter 5, "Network Theorems."
*   **Suresh Kumar (Pearson, Ist 2008):** Chapter 4, "Network Theorems."
*   **A Sudhakar, Shyammohan S Palli (McGraw Hill Education, 5th 2017):** Chapter 8, "Network Theorems."

**Important Point to Remember:** The Thevenin equivalent simplifies complex networks into a very manageable form, making the application of the Maximum Power Transfer Theorem straightforward.

---

### 3. Statement of the Maximum Power Transfer Theorem

**Key Definition:** **Maximum Power Transfer Theorem** states that for a given source, the maximum power is transferred from the source to the load when the load impedance ($Z_L$) is equal to the complex conjugate of the source impedance ($Z_{th}$).

*   **For Resistive Networks:** The maximum power is transferred to the load when the load resistance ($R_L$) is equal to the Thevenin resistance ($R_{th}$).

**Mathematical Representation:**

*   **General Case (AC circuits):** $Z_L = Z_{th}^*$
    *   If $Z_{th} = R_{th} + jX_{th}$, then $Z_L = R_L + jX_L = R_{th} - jX_{th}$.
    *   This means the load resistance should equal the Thevenin resistance ($R_L = R_{th}$), and the load reactance should be the negative of the Thevenin reactance ($X_L = -X_{th}$) to cancel out any reactive power.

*   **Purely Resistive Networks:** $R_L = R_{th}$

**Derivation (for resistive networks):**

Consider a simple circuit with a voltage source $V_{th}$ in series with $R_{th}$ and a load $R_L$.
The current flowing through the circuit is $I = \frac{V_{th}}{R_{th} + R_L}$.
The power delivered to the load $R_L$ is $P_L = I^2 R_L = \left(\frac{V_{th}}{R_{th} + R_L}\right)^2 R_L$.

To find the maximum power, we differentiate $P_L$ with respect to $R_L$ and set it to zero:

$\frac{dP_L}{dR_L} = V_{th}^2 \frac{(R_{th} + R_L)^2 \cdot 1 - R_L \cdot 2(R_{th} + R_L)}{(R_{th} + R_L)^4} = 0$

$V_{th}^2 \frac{(R_{th} + R_L) - 2R_L}{(R_{th} + R_L)^3} = 0$

$R_{th} + R_L - 2R_L = 0$

$R_{th} - R_L = 0$

$R_L = R_{th}$

This confirms that maximum power is transferred when the load resistance equals the source resistance.

**Derivation (for AC networks):**

Consider a circuit with $V_{th}$ in series with $Z_{th} = R_{th} + jX_{th}$ and a load $Z_L = R_L + jX_L$.
The current is $I = \frac{V_{th}}{Z_{th} + Z_L} = \frac{V_{th}}{(R_{th} + R_L) + j(X_{th} + X_L)}$.
The magnitude of the current is $|I| = \frac{|V_{th}|}{\sqrt{(R_{th} + R_L)^2 + (X_{th} + X_L)^2}}$.
The power delivered to the load is $P_L = |I|^2 R_L = \frac{|V_{th}|^2 R_L}{(R_{th} + R_L)^2 + (X_{th} + X_L)^2}$.

To maximize $P_L$, we need to consider two conditions:

1.  **Maximize the denominator's resistance component:** The term $(R_{th} + R_L)^2$ is minimized when $R_L = R_{th}$ (assuming $R_L$ is positive).
2.  **Eliminate reactive power:** The term $(X_{th} + X_L)^2$ contributes to the denominator. To minimize the denominator, we want this term to be zero. This happens when $X_{th} + X_L = 0$, or $X_L = -X_{th}$.

Thus, for maximum power transfer, $R_L = R_{th}$ and $X_L = -X_{th}$. This means $Z_L = R_{th} - jX_{th}$, which is the complex conjugate of $Z_{th}$.

**Textbook References:**

*   **Van Valkenburg (Pearson, 3rd 2019):** Chapter 5.
*   **Ravish R Singh (McGraw Hill Education, 2nd 2019):** Chapter 5.
*   **Suresh Kumar (Pearson, Ist 2008):** Chapter 4.
*   **A Sudhakar, Shyammohan S Palli (McGraw Hill Education, 5th 2017):** Chapter 8.

**Important Points to Remember:**

*   The theorem applies to **linear circuits**.
*   It assumes the **source impedance is fixed**. We are adjusting the load impedance.
*   In AC circuits, it's not just the magnitude of the impedance that matters, but also the **phase angle** (or reactance).

---

### 4. Maximum Efficiency vs. Maximum Power Transfer

**Key Distinction:** While maximum power transfer is crucial in many applications (like audio amplifiers or RF circuits where signal strength is paramount), it often comes at the cost of efficiency.

*   **Maximum Power Transfer:** Occurs when $R_L = R_{th}$ (or $Z_L = Z_{th}^*$).
    *   **Efficiency:** At maximum power transfer, the power delivered to the load ($P_L$) is equal to the power dissipated in the source resistance ($P_{th}$) if we consider a resistive case.
        *   $P_L = \left(\frac{V_{th}}{R_{th} + R_L}\right)^2 R_L$. When $R_L = R_{th}$, $P_L = \left(\frac{V_{th}}{2R_{th}}\right)^2 R_{th} = \frac{V_{th}^2}{4R_{th}}$.
        *   Power dissipated in $R_{th}$: $P_{th} = I^2 R_{th} = \left(\frac{V_{th}}{2R_{th}}\right)^2 R_{th} = \frac{V_{th}^2}{4R_{th}}$.
        *   Total power supplied by $V_{th}$: $P_{total} = P_L + P_{th} = \frac{V_{th}^2}{4R_{th}} + \frac{V_{th}^2}{4R_{th}} = \frac{V_{th}^2}{2R_{th}}$.
        *   Efficiency ($\eta$) = $\frac{P_L}{P_{total}} \times 100\% = \frac{V_{th}^2 / (4R_{th})}{V_{th}^2 / (2R_{th})} \times 100\% = \frac{1}{2} \times 100\% = 50\%$.
    *   **Conclusion:** Maximum power transfer occurs at **50% efficiency**.

*   **Maximum Efficiency:** Occurs when $R_L \to \infty$ (or $Z_L$ has infinite impedance).
    *   As $R_L$ increases, the current decreases, and the power delivered to the load ($P_L = I^2 R_L$) decreases.
    *   However, the power dissipated in the source resistance ($P_{th} = I^2 R_{th}$) also decreases, and as $R_L \to \infty$, the efficiency $\eta = \frac{P_L}{P_{th} + P_L} \to 100\%$.
    *   **Practical Limitation:** In reality, we need to deliver *some* power, so infinite load resistance is not practical.

**When to use Maximum Power Transfer:**

*   Situations where maximizing the output signal level is critical, and efficiency is a secondary concern (e.g., antenna matching in communication systems, audio amplifiers to drive speakers, powering sensitive electronic devices).

**When to prioritize Efficiency:**

*   Situations where minimizing energy waste is crucial, and a slightly lower power output is acceptable (e.g., power supplies, battery-operated devices, high-power transmission systems).

**Textbook References:**

*   **Van Valkenburg (Pearson, 3rd 2019):** Discussed in the context of power calculations.
*   **Ravish R Singh (McGraw Hill Education, 2nd 2019):** Section on efficiency implications.
*   **A Sudhakar, Shyammohan S Palli (McGraw Hill Education, 5th 2017):** Efficiency analysis in relation to power transfer.

**Important Point to Remember:** Understand the trade-off between maximum power transfer and efficiency. Choose the operating point based on the specific application requirements.

---

### 5. Application Examples and Problem Solving

Let's illustrate with examples.

**Example 1: Resistive Network**

**Problem:** Find the value of $R_L$ that will receive maximum power from the circuit shown below, and calculate this maximum power.

```
      +-------[ 4 ohm ]-------+
      |                        |
  12V o                        o Load (R_L)
      |                        |
      +-------[ 2 ohm ]-------+
```

**Solution:**

1.  **Find the Thevenin equivalent circuit of the source network:**
    *   **Remove $R_L$.**
    *   **Calculate $V_{th}$:** This is the open-circuit voltage across the terminals.
        *   Using nodal analysis or voltage division: The total resistance in the loop is $4 \Omega + 2 \Omega = 6 \Omega$.
        *   Current $I = \frac{12V}{6\Omega} = 2A$.
        *   The voltage across the $4\Omega$ resistor is $V_{th} = I \times 4\Omega = 2A \times 4\Omega = 8V$.
    *   **Calculate $R_{th}$:** Turn off the independent voltage source (short circuit).
        *   The $4\Omega$ and $2\Omega$ resistors are in parallel.
        *   $R_{th} = \frac{4 \Omega \times 2 \Omega}{4 \Omega + 2 \Omega} = \frac{8}{6} \Omega = \frac{4}{3} \Omega$.

2.  **Apply the Maximum Power Transfer Theorem:**
    *   For maximum power transfer, $R_L = R_{th}$.
    *   Therefore, $R_L = \frac{4}{3} \Omega$.

3.  **Calculate the maximum power transferred to $R_L$:**
    *   $P_{L,max} = \frac{V_{th}^2}{4 R_{th}} = \frac{(8V)^2}{4 \times (4/3) \Omega} = \frac{64}{16/3} = 64 \times \frac{3}{16} = 4 \times 3 = 12W$.

**Answer:** $R_L = \frac{4}{3} \Omega$, $P_{L,max} = 12W$.

---

**Example 2: AC Network**

**Problem:** Determine the load impedance $Z_L$ that will draw maximum power from the network, and find that maximum power.

```
      +-------[ 5 ohm ]-------+
      |         + j2 ohm      |
  20V/0deg o                  o Load (Z_L)
      |         - j1 ohm      |
      +-------[ 3 ohm ]-------+
```

**Solution:**

1.  **Find the Thevenin equivalent circuit:**
    *   **Remove $Z_L$.**
    *   **Calculate $V_{th}$:** This is the open-circuit voltage across the terminals.
        *   The network is a series combination of $5\Omega$ and $(3\Omega - j1\Omega)$, in parallel with a $j2\Omega$ impedance.
        *   Total impedance of the bottom branch: $Z_{bottom} = (5\Omega + 3\Omega - j1\Omega) = (8 - j1)\Omega$.
        *   Total impedance of the circuit with load removed: $Z_{total} = \frac{(j2\Omega)(8 - j1)\Omega}{(j2\Omega) + (8 - j1)\Omega} = \frac{j16 + 2}{8 + j1}\Omega$.
        *   $Z_{total} = \frac{2 + j16}{8 + j1} \times \frac{8 - j1}{8 - j1} = \frac{16 - j2 + j128 + 16}{64 + 1} = \frac{32 + j126}{65} = (\frac{32}{65} + j\frac{126}{65})\Omega$.
        *   The current from the source is $I = \frac{20V/0deg}{Z_{total}} = \frac{20 \angle 0^\circ}{(\frac{32}{65} + j\frac{126}{65})\Omega} = \frac{20 \angle 0^\circ}{(\frac{\sqrt{32^2 + 126^2}}{65}) \angle \arctan(\frac{126}{32})} = \frac{20 \angle 0^\circ}{(\frac{\sqrt{1024 + 15876}}{65}) \angle \arctan(3.9375)} = \frac{20 \angle 0^\circ}{(\frac{\sqrt{16900}}{65}) \angle 75.73^\circ} = \frac{20 \angle 0^\circ}{(\frac{130}{65}) \angle 75.73^\circ} = \frac{20 \angle 0^\circ}{2 \angle 75.73^\circ} = 10 \angle -75.73^\circ A$.
        *   Now, $V_{th}$ is the voltage across the terminals, which are in series with the $j2\Omega$ impedance.
        *   $V_{th} = I \times (j2\Omega) = (10 \angle -75.73^\circ A) \times (2 \angle 90^\circ \Omega) = 20 \angle (90^\circ - 75.73^\circ) = 20 \angle 14.27^\circ V$.

    *   **Calculate $Z_{th}$:** Turn off the independent voltage source (short circuit).
        *   The $j2\Omega$ impedance is in series with the parallel combination of the $(5\Omega)$ and $(8-j1)\Omega$ branches.
        *   Impedance of the top branch: $Z_{top} = j2\Omega$.
        *   Impedance of the bottom branch: $Z_{bottom} = 5\Omega + (3\Omega - j1\Omega) = (8 - j1)\Omega$.
        *   The equivalent impedance of the parallel combination: $Z_{parallel} = \frac{(j2\Omega)(8 - j1)\Omega}{(j2\Omega) + (8 - j1)\Omega} = \frac{j16 + 2}{8 + j1} = \frac{2 + j16}{8 + j1} \times \frac{8 - j1}{8 - j1} = \frac{16 - j2 + j128 + 16}{64 + 1} = \frac{32 + j126}{65}\Omega$.
        *   $Z_{th}$ is the impedance seen from the terminals, which is the impedance of the top branch in series with the parallel combination:
        *   $Z_{th} = j2\Omega + Z_{parallel} = j2 + \frac{32 + j126}{65} = \frac{j130 + 32 + j126}{65} = \frac{32 + j256}{65}\Omega$.
        *   $Z_{th} = (\frac{32}{65} + j\frac{256}{65})\Omega$.

2.  **Apply the Maximum Power Transfer Theorem:**
    *   For maximum power transfer, $Z_L = Z_{th}^*$.
    *   $Z_{th} = (\frac{32}{65} + j\frac{256}{65})\Omega$.
    *   $Z_L = (\frac{32}{65} - j\frac{256}{65})\Omega$.

3.  **Calculate the maximum power transferred to $Z_L$:**
    *   $R_L = \text{Real part of } Z_L = \frac{32}{65}\Omega$.
    *   $P_{L,max} = \frac{|V_{th}|^2}{4 R_L} = \frac{|20 \angle 14.27^\circ V|^2}{4 \times (32/65)\Omega} = \frac{20^2}{4 \times (32/65)} = \frac{400}{(128/65)} = 400 \times \frac{65}{128} = \frac{26000}{128} = 203.125W$.

**Answer:** $Z_L = (\frac{32}{65} - j\frac{256}{65})\Omega$, $P_{L,max} = 203.125W$.

---

### 6. Practice Questions

**Question 1:** (Resistive Network)
A voltage source has an internal resistance of $10\Omega$. To receive maximum power from the source, what should be the resistance of the load?

**Question 2:** (AC Network)
A source has a Thevenin impedance of $Z_{th} = (6 + j8)\Omega$. What load impedance $Z_L$ will receive maximum power? What is the condition on the load reactance?

**Question 3:** (Conceptual)
Explain the relationship between maximum power transfer and circuit efficiency. At what efficiency does maximum power transfer occur in a purely resistive circuit?

**Question 4:** (Application)
An audio amplifier has an output impedance of $8\Omega$. To get maximum power to a speaker, what should be the impedance of the speaker?

---

### 7. Answers to Practice Questions

**Answer 1:**
For maximum power transfer, the load resistance must equal the source resistance.
$R_L = R_{th} = 10\Omega$.

**Answer 2:**
For maximum power transfer, $Z_L = Z_{th}^*$.
Given $Z_{th} = (6 + j8)\Omega$,
$Z_L = (6 - j8)\Omega$.
The condition on the load reactance is $X_L = -X_{th}$, so $X_L = -8\Omega$. This means the load should have an inductive reactance of $8\Omega$ (or capacitive reactance of $-8\Omega$).

**Answer 3:**
Maximum power transfer occurs when the load impedance is the complex conjugate of the source impedance ($Z_L = Z_{th}^*$). This condition results in a circuit efficiency of 50% because half of the total power is dissipated within the source impedance. Maximum efficiency (approaching 100%) occurs when the load resistance is infinitely large, but this also means the power delivered to the load approaches zero.

**Answer 4:**
For maximum power transfer, the load impedance (speaker impedance) should match the source impedance (amplifier output impedance).
Speaker impedance $Z_L = 8\Omega$. (Assuming the speaker is purely resistive or we are considering the real part for impedance matching).

---

### 8. Alignment with Course Outcomes

*   **CO1 (Apply circuit theorems):** This entire topic directly addresses CO1 by explaining and applying the Maximum Power Transfer Theorem, building upon the understanding of Thevenin's theorem. The problem-solving examples demonstrate the practical application of these theorems (K3).

---

### 9. Summary of Key Points

*   **Maximum Power Transfer Theorem:** Maximum power is delivered to the load when the load impedance ($Z_L$) is the complex conjugate of the source impedance ($Z_{th}$).
    *   For resistive circuits: $R_L = R_{th}$.
    *   For AC circuits: $Z_L = R_{th} - jX_{th}$ (where $Z_{th} = R_{th} + jX_{th}$).
*   **Thevenin Equivalent:** Essential for simplifying the source network to apply the theorem.
*   **Efficiency Trade-off:** Maximum power transfer occurs at 50% efficiency. High efficiency requires a load impedance much larger than the source impedance.
*   **Applications:** Crucial in areas where maximizing signal strength or output power is critical.

---

This review provides a solid foundation for understanding and applying the Maximum Power Transfer Theorem in various circuit analysis scenarios. Remember to always start by finding the Thevenin equivalent of the source network.
