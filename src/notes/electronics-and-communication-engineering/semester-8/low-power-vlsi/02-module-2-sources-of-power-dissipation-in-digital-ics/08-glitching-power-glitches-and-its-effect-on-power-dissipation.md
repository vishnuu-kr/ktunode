---
title: "Glitching Power: Glitches and its effect on power dissipation"
subject: "LOW POWER VLSI"
module: "Module 2: Sources of power dissipation in digital  ICs"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff67c"
status: "completed"
scrapedAt: "2026-05-23T18:14:39.774Z"
---
# LOW POWER VLSI - Module 2: Sources of Power Dissipation in Digital ICs

## Topic: Glitching Power: Glitches and its Effect on Power Dissipation

---

### 1. Introduction to Glitching Power

**Key Concept:** Glitches are unintended, transient signal transitions that occur in digital circuits. They are a significant contributor to dynamic power dissipation in digital integrated circuits.

*   **What is a Glitch?** A glitch is a spurious, momentary transition of a signal from one logic level to another and back again, without the intended logic transitioning to that new level. These are also referred to as "spurious transitions" or "glitches."
*   **Why do Glitches occur?**
    *   **Unequal Propagation Delays:** Different paths within a combinational logic circuit can have different propagation delays. When multiple inputs change simultaneously, the output may transition multiple times before settling to its final correct value.
    *   **Asynchronous Logic:** Circuits that do not rely on a global clock signal are more susceptible to glitches due to the inherent timing dependencies.
    *   **Clock Skew and Jitter:** While primarily affecting sequential logic, imbalances in clock arrival times can also indirectly contribute to glitch generation in associated logic.
    *   **Logic Level Sensitivity:** Highly sensitive logic gates or circuits operating near their switching thresholds can be more prone to glitch generation.
*   **Effect on Power Dissipation:** Each spurious transition on a signal line causes a temporary short circuit between VDD and GND through the pull-up and pull-down transistors of the gates driving and receiving that signal. This short-circuit current contributes to dynamic power dissipation.

---

### 2. Understanding Glitches in Combinational Logic

**Key Concept:** Glitches are most prevalent in combinational logic circuits where signal arrival times vary.

*   **Example Scenario:** Consider a simple multiplexer (MUX) where the select line is controlled by a combinational circuit. If the inputs to the MUX change, and the select line takes a brief time to stabilize to its correct value, the output of the MUX might flicker through intermediate values before settling.

    *   **Illustration:**
        Let's consider a simple circuit: `Y = A * S + B * !S`
        Assume `A` changes from 0 to 1, `B` changes from 0 to 1, and `S` changes from 0 to 1.
        If the path through `A * S` has a shorter delay than the path through `B * !S`, and `S` transitions slightly before `!S` settles to 0, we might see a temporary glitch.

        *   **Initial State:** `A=0`, `B=0`, `S=0`. `Y = 0*0 + 0*1 = 0`.
        *   **Transition:** `A` goes to 1, `B` goes to 1, `S` goes to 1.
        *   **Desired Final State:** `Y = 1*1 + 0*0 = 1`.
        *   **Glitchy Transition:** Suppose `S` becomes 1 and `!S` becomes 0. If the `A*S` path is fast, and `B` hasn't yet transitioned to 1 (or `B*!S` is still evaluated with an old `B`), we might see `Y` momentarily go to 1 due to `A*S` before the `B*!S` term correctly makes `Y` stay at 1. More complex glitches occur when intermediate nodes themselves generate glitches.

*   **Impact of Glitches:**
    *   **Increased Dynamic Power:** Each glitch contributes to switching power.
    *   **Reduced Noise Margin:** Glitches can make signals more susceptible to noise, potentially leading to functional failures.
    *   **Functional Errors:** In asynchronous circuits or timing-critical synchronous circuits, glitches can be misinterpreted as valid transitions, leading to incorrect operation.

---

### 3. Quantifying Glitching Power

**Key Concept:** Glitching power is a component of dynamic power that arises from unintended switching activity.

*   **Relationship to Dynamic Power:** Dynamic power ($P_{dynamic}$) is generally expressed as:
    $P_{dynamic} = \alpha C_{L} V_{DD}^2 f$
    where:
    *   $\alpha$ is the activity factor (average number of transitions per clock cycle).
    *   $C_L$ is the load capacitance.
    *   $V_{DD}$ is the supply voltage.
    *   $f$ is the operating frequency.

*   **Glitching and Activity Factor:** Glitches increase the effective activity factor ($\alpha$) of a signal, even if the signal eventually settles to the correct state. This is because each glitch counts as a transition.
*   **Simulation-Based Estimation:**
    *   **Event-Driven Simulators:** Advanced simulators can detect and count glitch transitions.
    *   **Activity Factor Measurement:** By simulating the circuit with typical input vectors and accurately modeling gate delays, the average number of transitions on each net can be measured. A high transition count on a net that doesn't change its stable value between two consecutive clock cycles is an indicator of glitching.
*   **Analytical Estimation:** More complex analytical models can predict the likelihood and impact of glitches based on circuit topology and delay variations.

---

### 4. Glitch Propagation and Mitigation

**Key Concepts:** Glitches can propagate through a circuit, and there are techniques to minimize their occurrence and impact.

*   **Hazard vs. Glitch:**
    *   **Hazard:** A hazard is a temporary undesirable output change. There are different types:
        *   **Static Hazard:** Output temporarily changes when it should remain constant (e.g., 0 to 1 to 0 when it should be 0).
        *   **Dynamic Hazard:** Output oscillates multiple times when it should transition only once.
        *   **Function Hazard:** Due to the nature of implementation (e.g., race conditions).
    *   **Glitch:** A glitch is a physical manifestation of a hazard due to propagation delays.

*   **Mitigation Techniques:**
    *   **Redundant Gates (Hazard Containment):** Adding redundant gates can eliminate static hazards. This is a traditional technique for hazard prevention. However, these redundant gates can sometimes introduce new glitches if not carefully placed.
        *   *Refer to Sedra & Smith (8/e), Chapter 12 (Sequential Logic Design) for concepts of hazards and state-machine design that indirectly relate to timing issues.*
    *   **Logic Restructuring and Synthesis Optimization:**
        *   **Balanced Delays:** Using gates with more balanced propagation delays in critical paths can reduce glitch generation.
        *   **Gate Sizing:** Adjusting the size of transistors within gates can fine-tune their delays.
        *   **Using XOR/XNOR gates:** Certain logic functions, when implemented with XOR/XNOR gates, can be less prone to glitches compared to implementations using AND/OR gates.
    *   **Clock Gating:** While primarily for power gating, effective clock gating reduces switching activity, including glitch activity in clocked logic.
    *   **Buffer Insertion:** Strategically placed buffers can equalize path delays.
    *   **Retiming:** A technique in synchronous design that moves flip-flops across combinational logic to balance delays and reduce critical path lengths, which can also help in reducing glitching.
    *   **Dual-Edge Triggered Flip-Flops:** Can reduce the number of flip-flops and thus the complexity of logic, potentially reducing glitching.
    *   **Asynchronous Design with Careful Hazard Elimination:** While asynchronous circuits are more prone to glitches, careful design can mitigate them.
        *   *Refer to concepts in advanced digital design that discuss asynchronous state machines and handshake protocols.*
    *   **Logic Synthesis Tools:** Modern synthesis tools employ sophisticated algorithms to minimize glitches during the optimization process, often by considering timing and power.

---

### 5. Effect of Glitching on CMOS Circuits (Drawing from Textbooks)

**Key Concepts:** Understanding how glitches manifest in CMOS transistor-level behavior is crucial for low-power design.

*   **CMOS Switch Model:**
    *   In CMOS logic, dynamic power dissipation during switching occurs in two forms:
        *   **Charging/Discharging Capacitive Loads:** $P = \alpha C_L V_{DD}^2 f$.
        *   **Short-Circuit Current:** When both NMOS and PMOS transistors in a gate are simultaneously conducting (during the switching transition), a direct path from $V_{DD}$ to GND is momentarily formed, leading to short-circuit current.
    *   **Glitch Impact:** Each glitch causes a transient but complete switching event. This means both charging/discharging of load capacitance *and* short-circuit current flow happen, even if the final output value is the same as the initial one.

*   **Analysis by Razavi (Design of Analog CMOS Integrated Circuits):** While Razavi's focus is analog, the principles of transistor operation and signal integrity apply.
    *   **Propagation Delay:** Razavi discusses how factors like load capacitance, channel length, and overdrive voltage affect the delay of transistors. Unequal delays in different branches of a circuit are the root cause of glitches.
    *   **Short-Circuit Current:** Razavi's analysis of static and dynamic power in CMOS circuits highlights the contribution of short-circuit current. Glitches exacerbate this by causing more frequent, albeit brief, periods of simultaneous PMOS/NMOS conduction.

*   **Analysis by Baker, Li, Boyce (CMOS: Circuits Design, Layout and Simulation):** This textbook provides a more direct link to digital circuit design and power.
    *   **Switching Power:** They clearly define switching power as $P_{sw} = V_{DD}^2 f C_{eff} + I_{sc} V_{DD}$. Glitches directly increase $f C_{eff}$ (effectively increasing the activity factor) and also contribute to $I_{sc}$ over time.
    *   **Activity Factor:** Baker et al. emphasize that accurate estimation of the activity factor is critical for power budgeting. Glitches are a major, often overlooked, contributor to this activity factor.
    *   **Simulation Tools:** The book often refers to the use of SPICE and other simulators for analyzing circuit behavior, including timing and power. These tools are essential for identifying and quantifying glitching.

*   **Analysis by Sedra & Smith (Microelectronic Circuits):**
    *   **Digital Logic Gate Operation:** Sedra & Smith explain the fundamental operation of CMOS gates and their switching characteristics. They detail how the transition time (rise/fall time) of signals is affected by the transistors and load capacitance.
    *   **Hazards and Races:** In their digital systems chapters, they discuss hazards (static, dynamic, function) and races, which are directly related to the temporal behavior that leads to glitches. Understanding hazard containment is crucial.
    *   **Timing Analysis:** Their coverage of timing in sequential circuits (setup/hold times, clock skew) indirectly points to the importance of precise timing control, which can be disrupted by glitches.

---

### 6. Learning Outcomes Alignment

*   **CO1: Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.**
    *   **Alignment:** While this topic focuses on glitches, technology scaling (smaller transistors, lower $V_{DD}$) affects propagation delays and sensitivity to noise. Smaller transistors can have more varied delays due to process variations, potentially increasing glitching. Lower $V_{DD}$ reduces the power dissipated per glitch, but if the number of glitches increases significantly, the net effect on power can still be substantial.
*   **CO2: Discuss the different sources of power dissipation in digital ICs.**
    *   **Alignment:** This entire topic is dedicated to one specific source of dynamic power dissipation: glitching power. It explains *how* glitches contribute to dynamic power in addition to intentional switching.
*   **CO3: Describe the various approaches for power management in digital ICs.**
    *   **Alignment:** Mitigation techniques for glitching (logic restructuring, buffer insertion, synthesis optimization) are direct power management approaches. By reducing glitching, designers manage power.
*   **CO4: Apply various clocked and non-clocked design styles for logic implementation.**
    *   **Alignment:** Glitches are more problematic in non-clocked (asynchronous) logic but also occur in synchronous logic. Understanding glitch sources is key to designing robust clocked and non-clocked logic that minimizes unintended switching. Techniques like retiming are applied to clocked logic to manage timing and reduce glitches.
*   **CO5: Describe the use of Adiabatic switching for power management in digital ICs.**
    *   **Alignment:** While adiabatic switching is a technique to reduce power during voltage transitions, glitching represents uncontrolled and inefficient voltage transitions. Understanding glitches helps appreciate the benefits of controlled transitions offered by adiabatic techniques.

---

### 7. Key Points to Remember

*   **Glitches are spurious transitions** that occur due to unequal propagation delays in logic paths.
*   They are a **significant contributor to dynamic power dissipation**, increasing the effective activity factor of signals.
*   Glitches are most common in **combinational logic**.
*   Each glitch causes the **charging/discharging of capacitance and short-circuit current flow**, similar to a genuine transition.
*   Mitigation strategies include **logic restructuring, gate sizing, buffer insertion, and synthesis optimization**.
*   **Simulation is crucial** for identifying and quantifying glitching.
*   Understanding **hazards** is fundamental to understanding glitch origins.
*   **CMOS transistor-level behavior** (propagation delay, short-circuit current) explains why glitches dissipate power.

---

### 8. Practice Questions and Exercises

**Question 1:** Define "glitch" in the context of digital ICs and explain its primary cause.
**Answer:** A glitch is a spurious, momentary transition of a signal from one logic level to another and back again, without the intended logic transitioning to that new level. Its primary cause is the unequal propagation delays of signals through different paths in a logic circuit, leading to temporary incorrect signal levels before they settle to their final stable values.

**Question 2:** How does glitching contribute to power dissipation in a CMOS circuit?
**Answer:** Glitching contributes to dynamic power dissipation. Each spurious transition causes the load capacitance connected to the signal to be charged and discharged, consuming power. Additionally, during these transient transitions, both the PMOS pull-up and NMOS pull-down transistors in the driving gate are momentarily turned on, creating a short-circuit path from $V_{DD}$ to GND, which dissipates power.

**Question 3:** List three techniques that can be used to mitigate glitching in digital circuits.
**Answer:**
1.  **Logic Restructuring/Synthesis Optimization:** Modifying the logic to balance path delays or use gate implementations less prone to glitches.
2.  **Buffer Insertion:** Strategically placing buffers to equalize propagation delays along different logic paths.
3.  **Gate Sizing:** Adjusting the size of transistors within gates to fine-tune their switching speeds and balance delays.

**Question 4:** Consider the logic function $Y = A \cdot B + \bar{A} \cdot C$. If input A changes from 0 to 1, and simultaneously B changes from 0 to 1 and C changes from 0 to 1. Assume the $\bar{A} \cdot C$ path has a longer delay than the $A \cdot B$ path. Describe a potential glitch at the output Y. (Assume initial state is A=0, B=0, C=0, so Y=0)
**Solution:**
*   **Initial State:** $A=0$, $B=0$, $C=0$. $Y = (0 \cdot 0) + (\bar{0} \cdot 0) = 0 + (1 \cdot 0) = 0$.
*   **Transition:** $A \to 1$, $B \to 1$, $C \to 1$.
*   **Desired Final State:** $Y = (1 \cdot 1) + (\bar{1} \cdot 1) = 1 + (0 \cdot 1) = 1 + 0 = 1$.
*   **Glitch Scenario:**
    1.  As $A$ transitions to 1, the term $A \cdot B$ (with the new $B=1$) starts to become 1. This path is faster.
    2.  Simultaneously, $\bar{A}$ transitions from 1 to 0. The term $\bar{A} \cdot C$ will start to become 0.
    3.  If the $A \cdot B$ path is significantly faster, $Y$ will momentarily become 1 due to $A \cdot B$ before the $\bar{A} \cdot C$ term fully settles.
    4.  Crucially, if $\bar{A}$ transitions very quickly to 0, and $C$ is already 1, the $\bar{A} \cdot C$ term *could* briefly go from 1 (old $\bar{A}$) to 0 (new $\bar{A}$). However, the typical glitch scenario here is that if the AND gate for $A \cdot B$ responds to the input changes faster, $Y$ could momentarily rise due to $A \cdot B$ becoming true.
    5.  **More precisely:** Consider the inversion of A. When A goes from 0 to 1, $\bar{A}$ goes from 1 to 0.
        *   Path 1: $A \cdot B$. If B is already 1 (or transitions very quickly), this path becomes 1.
        *   Path 2: $\bar{A} \cdot C$. This path was initially $1 \cdot 0 = 0$. When $A=1$, $\bar{A}=0$. So this path becomes $0 \cdot 1 = 0$.
        *   **The glitch might occur if there's a delay in $\bar{A}$'s transition, or if the original $C$ value was temporarily invalid.** A more common glitch in this form arises when inputs change *simultaneously*. Let's re-evaluate with a clearer timing assumption:
        *   Suppose $A$ changes to 1. Let $B$ change to 1 *slightly after* $A$. Let $C$ change to 1 *slightly after* $B$.
        *   Path 1 ($A \cdot B$): Initially 0. When $A=1$, $B=0$ (for a moment), path output is 0. When $B$ becomes 1, path output becomes 1.
        *   Path 2 ($\bar{A} \cdot C$): Initially $1 \cdot 0 = 0$. When $A$ changes to 1, $\bar{A}$ changes to 0. This path output becomes $0 \cdot 1 = 0$.
        *   **A potential glitch:** What if $A$ changes, then $C$ changes, then $B$ changes?
            *   Initial: $A=0, B=0, C=0 \implies Y=0$.
            *   $A \to 1$: Intermediate.
            *   $C \to 1$: Intermediate.
            *   $B \to 1$: Intermediate.
            *   Consider the scenario where $A$ transitions, and then $C$ transitions.
                *   $A \to 1$
                *   $C \to 1$
                *   Assume $\bar{A}$ path is slower than $A$ path. So $\bar{A}$ is 1 for a short time after $A$ changed.
                *   The $\bar{A} \cdot C$ term was $1 \cdot 0 = 0$. When $C$ becomes 1, the term is $1 \cdot 1 = 1$. This would cause $Y$ to go to 1.
                *   However, $A$ is now 1, and $B$ is still 0. So $A \cdot B = 1 \cdot 0 = 0$.
                *   So, if the $\bar{A} \cdot C$ path responds to the $C$ input first (even if $A$ has changed), and $\bar{A}$ is still temporarily "valid" as 1, we get $Y=1$. Then, as $\bar{A}$ becomes 0, the term $\bar{A} \cdot C$ becomes 0.
                *   The correct state $Y=1$ is reached via $A \cdot B$. If $A$ is 1 and $B$ becomes 1, $A \cdot B = 1$.
                *   **The glitch occurs if the $\bar{A} \cdot C$ term *temporarily* makes Y go to 1, and then later Y is corrected by $A \cdot B$.**
                *   Let's assume delays: $d_A$, $d_B$, $d_C$ for inputs. $d_{invA}$ for inversion. $d_{AND1}$ for $A \cdot B$, $d_{AND2}$ for $\bar{A} \cdot C$. $d_{OR}$ for the final OR gate.
                *   If $d_{invA} + d_{AND2}$ is shorter than $d_A + d_{AND1}$ (which contradicts the problem statement "$\bar{A} \cdot C$ path has longer delay"), then we'd have glitches.
                *   **Re-interpreting the problem:** "$\bar{A} \cdot C$ path has longer delay" means the time for $\bar{A} \cdot C$ to settle to its final value is longer.
                *   Initial: $A=0, B=0, C=0 \implies \bar{A}=1$. $Y = (0 \cdot 0) + (1 \cdot 0) = 0$.
                *   Inputs $A \to 1, B \to 1, C \to 1$ arrive at gate inputs at different times due to propagation delays within the input logic.
                *   Let's assume inputs to the AND/OR gates arrive in this order: A (fastest), then B, then C. The inversion of A ($\bar{A}$) is also a path.
                *   **Scenario for Glitch:** Suppose $A$ transitions to 1. $\bar{A}$ transitions to 0.
                    *   The $A \cdot B$ path receives '1' for A.
                    *   The $\bar{A} \cdot C$ path receives '0' for $\bar{A}$.
                    *   If $B$ arrives and enables $A \cdot B$ to be 1, $Y$ becomes 1.
                    *   If $C$ arrives and enables $\bar{A} \cdot C$ to be 1 *before* $\bar{A}$ has fully settled to 0 (e.g., if $\bar{A}$ transition is slow), then $\bar{A} \cdot C$ would momentarily be $1 \cdot 1 = 1$ (if $\bar{A}$ is still "high" in its transition). This would make $Y$ momentarily 1 due to this path.
                    *   However, the prompt states the $\bar{A} \cdot C$ path is *longer*. This implies that the signal values through this path take longer to stabilize.
                    *   **More likely glitch:** Let's assume $A \to 1, B \to 1$ arrive and settle to make $A \cdot B = 1$. Let $C \to 1$ arrive.
                        *   The $A \cdot B$ part makes $Y$ go to 1.
                        *   The $\bar{A} \cdot C$ part, which is slower, involves $\bar{A}$ going from 1 to 0. When $A$ becomes 1, $\bar{A}$ becomes 0.
                        *   If $C$ becomes 1, the $\bar{A} \cdot C$ term will be $0 \cdot 1 = 0$.
                        *   **The glitch occurs if the AND gate for $\bar{A} \cdot C$ receives its inputs in a specific order that causes a temporary 1.** Example: If the inverter for $\bar{A}$ is slow, and $C$ arrives *before* $\bar{A}$ is fully 0, then $\bar{A} \cdot C$ could be $1 \cdot 1 = 1$ for a moment. This would make $Y$ momentarily 1 due to $\bar{A} \cdot C$.
                        *   Then, as $\bar{A}$ finally becomes 0, $\bar{A} \cdot C$ becomes 0.
                        *   The final correct output $Y=1$ is maintained by the $A \cdot B$ path.
                        *   So, the glitch would be Y momentarily switching to 1 (or flickering if it was already 1) due to the $\bar{A} \cdot C$ path before it correctly settles to 1 via the $A \cdot B$ path.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
