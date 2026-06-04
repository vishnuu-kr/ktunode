---
title: "equivalence of the two statements"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f5a"
status: "completed"
scrapedAt: "2026-05-20T17:53:35.943Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Kelvin-Planck Statement

## Topic: Equivalence of the Two Statements of the Second Law

This module explores the Second Law of Thermodynamics, focusing on the Kelvin-Planck statement. A crucial aspect of understanding the Second Law is recognizing the equivalence of its various statements. This topic delves into demonstrating how the Kelvin-Planck statement is equivalent to the Clausius statement.

---

### 1. Introduction to the Second Law of Thermodynamics

The Second Law of Thermodynamics deals with the direction of natural processes and the limitations on converting heat into work. It introduces the concept of **entropy**, a measure of disorder or randomness in a system.

*   **Key Concept:** The Second Law dictates that while energy is conserved (First Law), not all of it can be converted into useful work. Some energy is always degraded into less useful forms, typically heat.

*   **Course Outcome Alignment:** CO2 (Understand the laws of thermodynamics) - K1, K2. This section provides the foundational understanding necessary for the subsequent equivalence proofs.

---

### 2. The Kelvin-Planck Statement of the Second Law

This statement focuses on the impossibility of constructing a **perpetual motion machine of the second kind**.

*   **Definition:** "It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a single reservoir to a reservoir at a higher temperature."

*   **Implication:** This statement essentially says that a heat engine operating between a single heat reservoir and producing work cannot exist. To produce work from heat, a heat engine must exchange heat with at least two reservoirs at different temperatures – a high-temperature reservoir (heat source) and a low-temperature reservoir (heat sink).

*   **Textbook Reference:** Cengel & Boles (2011), Chapter 6.1, states this clearly.

*   **Course Outcome Alignment:** CO2 (Understand the laws of thermodynamics) - K1, K2. This statement is a direct articulation of a core principle of the Second Law.

---

### 3. The Clausius Statement of the Second Law

This statement addresses the direction of heat transfer.

*   **Definition:** "It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a colder body to a hotter body."

*   **Implication:** This statement implies that spontaneous heat transfer from a colder body to a hotter body is impossible. To achieve this, external work must be performed on the system (e.g., in a refrigerator or heat pump).

*   **Textbook Reference:** Cengel & Boles (2011), Chapter 6.1, also presents this statement.

*   **Course Outcome Alignment:** CO2 (Understand the laws of thermodynamics) - K1, K2. This is another fundamental statement of the Second Law.

---

### 4. Equivalence of the Two Statements

The core of this topic is demonstrating that if one statement is true, the other must also be true, and vice versa. This can be shown by proving that violating one statement would necessarily lead to a violation of the other. We will use a **reductio ad absurdum** approach.

#### 4.1. Proving Kelvin-Planck Implies Clausius

**Assumption:** Assume the Kelvin-Planck statement is FALSE, but the Clausius statement is TRUE.

*   **Violation of Kelvin-Planck:** This means a device exists that operates in a cycle, takes heat ($Q_L$) from a single reservoir, and produces net work ($W_{net,out}$) without rejecting any heat to a colder reservoir. Let's call this device Device A.

    *   Device A: Cycle, Input: $Q_L$ from Reservoir L, Output: $W_{net,out}$.
    *   From the First Law for Device A: $W_{net,out} = Q_L$ (since there is no heat rejected).

*   **Constructing a Violating Device for Clausius:** Now, consider a **refrigerator** (which operates in a cycle and is assumed to be possible by the Clausius statement) that uses the work ($W_{net,out}$) produced by Device A as its input. This refrigerator transfers heat ($Q_H$) from a colder reservoir (Reservoir L) to a hotter reservoir (Reservoir H).

    *   Refrigerator: Cycle, Input: $W_{net,in}$ from Device A, Heat absorbed from Reservoir L ($Q_L'$), Output: Heat rejected to Reservoir H ($Q_H$).
    *   From the First Law for the Refrigerator: $Q_H = Q_L' + W_{net,in}$.

*   **Combining Devices A and the Refrigerator:** Now, let's connect Device A and this refrigerator, and operate them together. We can arrange for the work output of Device A ($W_{net,out}$) to be equal to the work input of the refrigerator ($W_{net,in}$). Furthermore, we can design the refrigerator such that the heat it absorbs from Reservoir L ($Q_L'$) is equal to the heat Device A absorbs from Reservoir L ($Q_L$).

    *   Let $W_{net,out} = W_{net,in} = W$.
    *   Let $Q_L = Q_L'$.

*   **Analyzing the Combined System:**
    *   **Heat Transfer:**
        *   Device A absorbs $Q_L$ from Reservoir L.
        *   The Refrigerator absorbs $Q_L'$ from Reservoir L.
        *   Total heat absorbed from Reservoir L = $Q_L + Q_L'$.
        *   The Refrigerator rejects $Q_H$ to Reservoir H.
    *   **Work Transfer:**
        *   Device A produces $W_{net,out} = Q_L$ (from its own First Law analysis).
        *   The Refrigerator consumes $W_{net,in} = W$.
        *   Since $W_{net,out} = W_{net,in}$, the net work exchanged with the surroundings by the combined system is **zero**.

*   **Result of Combination:** The combined system effectively transfers heat $Q_L + Q_L'$ from Reservoir L to Reservoir H, and the net work transfer is zero. If we choose $Q_L = Q_L'$, the combined system transfers a net heat of $Q_L + Q_L$ from Reservoir L to Reservoir H, with no net work input or output. This means heat is transferred from a colder reservoir (L) to a hotter reservoir (H) without any external work input.

*   **Conclusion:** This combined system directly violates the **Clausius statement**. Since we assumed Clausius is true, and our construction led to a violation of Clausius, our initial assumption that Kelvin-Planck is false must be incorrect. Therefore, **Kelvin-Planck implies Clausius**.

*   **Textbook Reference:** P.K. Nag (2017), Chapter 2.4, provides a detailed proof of this implication.

*   **Course Outcome Alignment:** CO2 (Understand the laws of thermodynamics) - K3. This involves applying the First Law and logical reasoning to prove the equivalence.

#### 4.2. Proving Clausius Implies Kelvin-Planck

**Assumption:** Assume the Clausius statement is FALSE, but the Kelvin-Planck statement is TRUE.

*   **Violation of Clausius:** This means a device exists that operates in a cycle and transfers heat from a colder body to a hotter body without any work input. Let's call this device Device B.

    *   Device B: Cycle, Input: Heat absorbed from Reservoir L ($Q_L$), Output: Heat rejected to Reservoir H ($Q_H$).
    *   From the First Law for Device B: $Q_H = Q_L$ (since there is no work input or output).

*   **Constructing a Violating Device for Kelvin-Planck:** Now, consider a **heat engine** (which operates in a cycle and is assumed to be possible by the Kelvin-Planck statement) that absorbs heat ($Q_H'$) from Reservoir H and converts some of it into work ($W_{net,out}$), rejecting the rest ($Q_L''$) to Reservoir L.

    *   Heat Engine: Cycle, Input: Heat absorbed from Reservoir H ($Q_H'$), Output: Work ($W_{net,out}$) and Heat rejected to Reservoir L ($Q_L''$).
    *   From the First Law for the Heat Engine: $W_{net,out} = Q_H' - Q_L''$.

*   **Combining Devices B and the Heat Engine:** Now, let's connect Device B and this heat engine, and operate them together. We can arrange for the heat rejected by Device B to Reservoir L ($Q_L$) to be equal to the heat absorbed by the heat engine from Reservoir L ($Q_L''$).

    *   Let $Q_L = Q_L''$.

*   **Analyzing the Combined System:**
    *   **Heat Transfer:**
        *   Device B absorbs $Q_L$ from Reservoir L.
        *   Device B rejects $Q_H$ to Reservoir H.
        *   The Heat Engine absorbs $Q_H'$ from Reservoir H.
        *   The Heat Engine rejects $Q_L''$ to Reservoir L.
    *   **Work Transfer:**
        *   Device B produces no net work.
        *   The Heat Engine produces $W_{net,out}$.

*   **Result of Combination:**
    *   From the First Law for Device B, $Q_H = Q_L$.
    *   Let's consider the net heat transfer to Reservoir H: The Heat Engine absorbs $Q_H'$ from H, and Device B rejects $Q_H$ to H. Net heat transfer to H is $Q_H' - Q_H$.
    *   Let's consider the net heat transfer from Reservoir L: Device B absorbs $Q_L$ from L, and the Heat Engine rejects $Q_L''$ to L. Net heat transfer from L is $Q_L - Q_L''$.
    *   Since $Q_L = Q_L''$, the net heat transfer from Reservoir L is zero.
    *   The net work transfer from the combined system is $W_{net,out}$.
    *   The net heat transfer to Reservoir H is $Q_H' - Q_H$.
    *   Using the First Law for the combined system: $W_{net,out} = (Q_H' - Q_H) - (Q_L - Q_L'')$. Since $Q_L = Q_L''$, this simplifies to $W_{net,out} = Q_H' - Q_H$.

    *   Now, let's carefully examine the heat transfers again.
        *   Device B transfers heat $Q_L$ from L to H.
        *   The Heat Engine takes $Q_H'$ from H and rejects $Q_L''$ to L, producing $W_{net,out} = Q_H' - Q_L''$.

    *   Let's combine them such that $Q_L = Q_L''$.
    *   The heat absorbed by Device B from L is $Q_L$.
    *   The heat rejected by Device B to H is $Q_H$. (And $Q_H = Q_L$)
    *   The heat absorbed by the Heat Engine from H is $Q_H'$.
    *   The heat rejected by the Heat Engine to L is $Q_L''$. (And $Q_L'' = Q_L$)
    *   Work produced by Heat Engine is $W_{net,out} = Q_H' - Q_L''$.

    *   **Net effect on Reservoir H:** Heat absorbed is $Q_H'$. Heat rejected is $Q_H$. Net heat transfer to H is $Q_H' - Q_H$.
    *   **Net effect on Reservoir L:** Heat absorbed is $Q_L$. Heat rejected is $Q_L''$. Net heat transfer from L is $Q_L - Q_L''$. Since $Q_L = Q_L''$, the net heat transfer from L is zero.

    *   **Overall system:** The heat engine produces work $W_{net,out} = Q_H' - Q_L''$.
    *   Device B transfers heat $Q_L$ from L to H.
    *   Let's choose the operation such that $Q_H'$ absorbed by the heat engine from H is equal to the heat $Q_H$ rejected by Device B to H. So, $Q_H' = Q_H$.
    *   Since $Q_H = Q_L$ for Device B, we have $Q_H' = Q_L$.
    *   The heat engine's work output is $W_{net,out} = Q_H' - Q_L'' = Q_L - Q_L''$.
    *   For the combined system, there is no net heat transfer from L as $Q_L$ is transferred to H by Device B, and then $Q_L''$ is transferred back to L by the heat engine, and we set $Q_L = Q_L''$.
    *   The net heat transfer to H is $Q_H' - Q_H$. Since we set $Q_H' = Q_H$, the net heat transfer to H is zero.
    *   The work output is $W_{net,out} = Q_L - Q_L'' = 0$.

    *   This doesn't seem to work. Let's re-evaluate the goal: Violate Kelvin-Planck.
    *   Kelvin-Planck violation: A device takes heat from a single reservoir and produces net work.
    *   We have Device B (violates Clausius) and a Heat Engine (assumed to work by Kelvin-Planck).
    *   Device B: $Q_L$ from L $\rightarrow$ $Q_H$ to H ($Q_H = Q_L$).
    *   Heat Engine: $Q_H'$ from H $\rightarrow$ $W_{net,out} + Q_L''$ to L ($W_{net,out} = Q_H' - Q_L''$).

    *   **To violate Kelvin-Planck:** We need a system that absorbs heat from a single reservoir (say, H) and produces work.
    *   Let's couple Device B with the Heat Engine.
    *   We can arrange for the heat rejected by the heat engine to Reservoir L ($Q_L''$) to be equal to the heat absorbed by Device B from Reservoir L ($Q_L$). So, $Q_L'' = Q_L$.
    *   The Heat Engine takes heat $Q_H'$ from H and rejects $Q_L''$ to L, producing work $W_{net,out} = Q_H' - Q_L''$.
    *   Device B takes heat $Q_L$ from L and rejects $Q_H$ to H, with $Q_H = Q_L$.

    *   **Net effect of the combined system:**
        *   Heat transfer from Reservoir L: Device B absorbs $Q_L$, Heat Engine rejects $Q_L''$. Net from L is $Q_L - Q_L''$. If $Q_L = Q_L''$, then net from L is 0.
        *   Heat transfer to Reservoir H: Heat Engine absorbs $Q_H'$, Device B rejects $Q_H$. Net to H is $Q_H' - Q_H$.
        *   Net work output: $W_{net,out}$ from the Heat Engine.

    *   **Crucial step:** Let's use the Heat Engine to power Device B. Wait, Device B doesn't consume work. Device B *is* the violation of Clausius.

    *   Let's think about the *purpose* of the combined system. We want to create a single device that violates Kelvin-Planck. This means a device operating in a cycle, taking heat from *one* reservoir, and producing work.

    *   Consider the Heat Engine: It takes heat $Q_H'$ from H, produces $W_{net,out}$, and rejects $Q_L''$ to L.
    *   Consider Device B: It takes heat $Q_L$ from L, rejects $Q_H$ to H ($Q_H=Q_L$).

    *   Let's connect them such that the work from the Heat Engine ($W_{net,out}$) is used to power a reversed version of Device B (a refrigerator). This is getting too complex.

    *   Let's go back to the simpler coupling:
        *   Assume Clausius is false, meaning Device B exists: $Q_L$ from L $\rightarrow$ $Q_H$ to H, with $Q_H=Q_L$.
        *   Assume Kelvin-Planck is true.
        *   Now, let's use the Heat Engine (which works according to Kelvin-Planck) to "enhance" Device B.
        *   Device B takes $Q_L$ from L and gives $Q_H$ to H.
        *   Let's use a Heat Engine that absorbs heat from H and rejects heat to L. Suppose this heat engine produces exactly the amount of work required to transfer the heat from L to H, but this is what Device B *already* does without work.

    *   Let's try this logic:
        1.  Device B exists (violates Clausius): Transfers $Q_L$ from L to H, with $Q_H = Q_L$.
        2.  Let the Heat Engine absorb heat $Q_H'$ from H and reject heat $Q_L''$ to L, producing work $W_{net,out} = Q_H' - Q_L''$. This heat engine adheres to Kelvin-Planck.
        3.  We want to construct a *new* device that violates Kelvin-Planck (takes heat from a single reservoir and produces work).
        4.  Let's make the heat transfer between the reservoirs such that the combined system has no heat interaction with one of the reservoirs.
        5.  Consider the heat flow:
            *   Device B: Absorbs $Q_L$ from L. Rejects $Q_H$ to H. ($Q_H = Q_L$).
            *   Heat Engine: Absorbs $Q_H'$ from H. Rejects $Q_L''$ to L. ($W_{net,out} = Q_H' - Q_L''$).
        6.  Let's couple them such that the heat rejected by the heat engine to L ($Q_L''$) is equal to the heat absorbed by Device B from L ($Q_L$). So, $Q_L'' = Q_L$.
        7.  This means the net heat transfer from Reservoir L is $Q_L - Q_L'' = 0$.
        8.  The net heat transfer to Reservoir H is $Q_H' - Q_H$.
        9.  The net work produced by the combined system is $W_{net,out} = Q_H' - Q_L''$.
        10. We want to make the net heat transfer to H zero, so $Q_H' - Q_H = 0$, which means $Q_H' = Q_H$.
        11. Since $Q_H = Q_L$ for Device B, we have $Q_H' = Q_L$.
        12. Now substitute these into the work equation: $W_{net,out} = Q_H' - Q_L'' = Q_L - Q_L$.
        13. This gives $W_{net,out} = 0$. This combination doesn't produce work.

    *   **Let's rethink the coupling strategy:**
        *   Device B violates Clausius: $Q_L$ from L $\rightarrow$ $Q_H$ to H. ($Q_H = Q_L$).
        *   Heat Engine works: $Q_H'$ from H $\rightarrow$ $W_{net,out} + Q_L''$ to L. ($W_{net,out} = Q_H' - Q_L''$).
        *   We want to show that IF Device B exists, THEN a violation of Kelvin-Planck is possible.
        *   To violate Kelvin-Planck, we need a device that takes heat from *one* reservoir and produces work.
        *   Let's use the Heat Engine to absorb heat from H, and Device B to transfer heat from L to H.
        *   Let the Heat Engine absorb $Q_H'$ from H, produce $W_{net,out}$, and reject $Q_L''$ to L.
        *   Let Device B absorb $Q_L$ from L and reject $Q_H$ to H, with $Q_H = Q_L$.
        *   Suppose we operate the Heat Engine such that its net heat interaction with H is zero. This means $Q_H' = Q_H$.
        *   Then the Heat Engine's output work is $W_{net,out} = Q_H' - Q_L'' = Q_H - Q_L''$.
        *   Device B's operation is independent of external work.
        *   **Crucial insight:** Let's use the work output of the Heat Engine to operate a refrigerator. This is getting complicated again.

    *   **Simpler approach:**
        1.  Assume Clausius is false. Device B exists: $Q_L$ from L $\rightarrow$ $Q_H$ to H, with $Q_H = Q_L$.
        2.  Take a Heat Engine (which we assume works by Kelvin-Planck) that operates between H and L.
        3.  Let the Heat Engine absorb heat $Q_H'$ from H and reject heat $Q_L''$ to L, producing work $W_{net,out} = Q_H' - Q_L''$.
        4.  Now, arrange the heat transfers such that Device B and the Heat Engine together violate Kelvin-Planck.
        5.  To violate Kelvin-Planck, we need a net heat input from a single reservoir and net work output.
        6.  Let's make the Heat Engine receive *less* heat from H than Device B rejects to H.
        7.  Consider the combined system:
            *   Device B absorbs $Q_L$ from L.
            *   Device B rejects $Q_H$ to H. ($Q_H = Q_L$).
            *   Heat Engine absorbs $Q_H'$ from H.
            *   Heat Engine rejects $Q_L''$ to L.
            *   Heat Engine produces $W_{net,out} = Q_H' - Q_L''$.

        8.  To violate Kelvin-Planck, we want a net heat transfer from *one* reservoir and net work output.
        9.  Let's arrange the heat transfers such that the net heat transfer between Reservoir L is zero. This means the heat absorbed by Device B from L must be equal to the heat rejected by the Heat Engine to L: $Q_L = Q_L''$.
        10. Now, consider the net heat transfer to Reservoir H: The Heat Engine absorbs $Q_H'$ from H, and Device B rejects $Q_H$ to H. The net heat into H is $Q_H' - Q_H$.
        11. The net work output is $W_{net,out} = Q_H' - Q_L''$.
        12. Since $Q_L = Q_L''$, the net work output is $W_{net,out} = Q_H' - Q_L$.
        13. We know for Device B that $Q_H = Q_L$.
        14. If we set $Q_H' = Q_H + \delta$, where $\delta > 0$.
        15. Then $W_{net,out} = (Q_H + \delta) - Q_L$. Since $Q_H = Q_L$, $W_{net,out} = Q_L + \delta - Q_L = \delta$.
        16. The net heat transfer to Reservoir H is $Q_H' - Q_H = (Q_H + \delta) - Q_H = \delta$.
        17. So, the combined system absorbs heat $\delta$ from Reservoir H and produces work $\delta$. This *is* a violation of Kelvin-Planck!
        18. The device that violates Kelvin-Planck is the combination of Device B and the Heat Engine. This combined system takes heat $\delta$ from Reservoir H (a single reservoir) and produces net work $\delta$.

    *   **Conclusion:** Since the existence of Device B (violating Clausius) leads to the construction of a system that violates Kelvin-Planck, the truth of Clausius statement is necessary for the truth of Kelvin-Planck statement. Therefore, **Clausius implies Kelvin-Planck**.

*   **Textbook Reference:** P.K. Nag (2017), Chapter 2.4, provides a clear explanation of this direction of implication as well. Moran & Shapiro (2006) also discusses this equivalence.

*   **Course Outcome Alignment:** CO2 (Understand the laws of thermodynamics) - K3. This involves constructing a hypothetical scenario and analyzing it based on the laws.

---

### 5. Key Takeaways and Important Points to Remember

*   **Equivalence:** The Kelvin-Planck and Clausius statements are equivalent. Proving one implies the other is fundamental to understanding the Second Law.
*   **Method of Proof:** The proofs typically involve assuming one statement is violated and constructing a system that violates the other statement, using a device that obeys the other law.
*   **Perpetual Motion Machines:**
    *   Perpetual Motion Machine of the First Kind: Violates the First Law of Thermodynamics (produces energy from nothing). Impossible.
    *   Perpetual Motion Machine of the Second Kind: Violates the Second Law of Thermodynamics (e.g., converts heat completely into work from a single reservoir - violates Kelvin-Planck). Impossible.
    *   Perpetual Motion Machine of the Third Kind: Violates the Second Law by eliminating friction and other dissipative effects to achieve perpetual motion. While ideal, true elimination is impossible, so these are also considered impossible in practice.
*   **Direction of Processes:** The Second Law, through these statements, establishes the natural direction of thermodynamic processes. Heat naturally flows from hot to cold; transferring heat from cold to hot requires work.
*   **Efficiency Limitation:** The Kelvin-Planck statement implies that 100% thermal efficiency for a heat engine operating with a single reservoir is impossible.

*   **Important Point to Remember:** The core idea behind the equivalence is that if you can build a device that violates one statement, you can combine it with a device that *obeys* the other law (like a standard heat engine or refrigerator) to create a *composite* device that violates the first statement.

*   **Course Outcome Alignment:** CO2 (Understand the laws of thermodynamics) - K1, K2. Reinforces the understanding of the fundamental principles and their implications.

---

### 6. Examples and Applications

*   **Refrigerators and Heat Pumps:** These devices demonstrate the Clausius statement. They require work input to transfer heat from a cold space to a warmer space. If they could do this spontaneously (violating Clausius), then we could use them to create a perpetual motion machine of the second kind.
*   **Heat Engines:** Any real heat engine (steam engine, internal combustion engine) illustrates the Kelvin-Planck statement. They take heat from a high-temperature source and reject some heat to a low-temperature sink, producing work. 100% conversion is impossible.

---

### 7. Practice Questions

**Question 1:**
State the Kelvin-Planck and Clausius statements of the Second Law of Thermodynamics. (Knowledge Level: K1)

**Answer:**
*   **Kelvin-Planck:** It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a single reservoir to a reservoir at a higher temperature.
*   **Clausius:** It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a colder body to a hotter body.

**Question 2:**
Prove that the violation of the Clausius statement leads to the violation of the Kelvin-Planck statement. (Knowledge Level: K3)

**Answer:**
(Refer to Section 4.2 for the detailed proof. The key is to assume a device violating Clausius exists, then couple it with a hypothetical heat engine to create a composite device that violates Kelvin-Planck by transferring heat from a single reservoir to produce net work).

**Question 3:**
Imagine a hypothetical device that could spontaneously transfer heat from a cold object to a hot object without any work input (violating Clausius). If you had a normal heat engine that obeys the Kelvin-Planck statement, how could you combine these to create a device that violates the Kelvin-Planck statement? Briefly describe the process. (Knowledge Level: K3)

**Answer:**
Assume a device (Device B) violates Clausius: transfers $Q_L$ from cold reservoir L to hot reservoir H, with $Q_H = Q_L$. Couple this with a heat engine that takes heat $Q_H'$ from H, rejects $Q_L''$ to L, and produces work $W_{net,out} = Q_H' - Q_L''$. To violate Kelvin-Planck, we need net work out from a single heat input.
1.  Set $Q_L = Q_L''$ (heat absorbed by Device B from L equals heat rejected by the Heat Engine to L). This cancels out heat transfer from reservoir L.
2.  Let the heat engine absorb slightly more heat from H than Device B rejects to H. Say, $Q_H' = Q_H + \Delta W_{net,out}$, where $\Delta W_{net,out}$ is the desired net work output.
3.  The combined system's net heat interaction with H is $Q_H' - Q_H$.
4.  The combined system's net work output is $W_{net,out} = Q_H' - Q_L''$.
5.  Substituting $Q_L'' = Q_L$ and $Q_H = Q_L$: $W_{net,out} = Q_H' - Q_L$.
6.  If we let $Q_H' = Q_L + \delta$, then $W_{net,out} = (Q_L + \delta) - Q_L = \delta$.
7.  The net heat transfer to H is $Q_H' - Q_H = (Q_L + \delta) - Q_L = \delta$.
8.  Therefore, the combined system takes heat $\delta$ from reservoir H and produces work $\delta$, violating the Kelvin-Planck statement.

**Question 4:**
Why is a device that converts 100% of heat from a single reservoir into work considered impossible? Which statement of the Second Law does this violate? (Knowledge Level: K1, K2)

**Answer:**
Such a device is impossible because it violates the **Kelvin-Planck statement** of the Second Law. The statement explicitly prohibits a cycle that has no effect other than the transfer of heat from a single reservoir to produce work. This implies that a perfect conversion of heat to work from a single reservoir is not possible; some heat must always be rejected to a colder reservoir.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. Further Reading and References

*   **Cengel, Y. A., Boles, M. A., & Kanoğlu, M. (2011).** *Thermodynamics: an engineering approach*. McGraw-hill. (Chapter 6: Second Law of Thermodynamics)
*   **Nag, P. K. (2017).** *Engineering Thermodynamics* (6th ed.). McGraw-Hill Education. (Chapter 2: Second Law of Thermodynamics)
*   **Moran, J. M., & Shapiro, N. M. (2006).** *Fundamentals of Engineering Thermodynamics*. Wiley.
*   **Sonntag, R. E., Borgnakke, C., & VanWylen, G. J. (2014).** *Fundamentals of Thermodynamics* (8th ed.). Wiley.
*   **Ansermet, J.-P., & Brechet, S. D. (2019).** *Thermodynamics: Principles and Applications*. Cambridge University Press.

---

This concludes Module 3, Topic: Equivalence of the Two Statements. Understanding this equivalence is crucial for grasping the fundamental nature of the Second Law of Thermodynamics.