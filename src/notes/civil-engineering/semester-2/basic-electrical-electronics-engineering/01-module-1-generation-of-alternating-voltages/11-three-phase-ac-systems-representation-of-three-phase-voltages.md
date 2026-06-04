---
title: "Three phase AC systems : Representation of three phase voltages"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 1: Generation of alternating voltages : "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912df0"
status: "completed"
scrapedAt: "2026-05-20T18:32:37.824Z"
---
# Module 1: Generation of Alternating Voltages

## Topic: Three-Phase AC Systems: Representation of Three-Phase Voltages

Welcome, everyone! Today, we're diving into a fundamental aspect of our electrical world: **Three-Phase AC Systems**. You see them everywhere, from the power lines feeding your homes to the massive generators in power plants. Why three phases? It's all about efficiency, power delivery, and the smooth operation of many electrical machines. To truly appreciate how these systems work, we first need to understand how we represent the voltages involved.

This topic directly relates to our **Course Outcome 2 (CO2)**: "Develop an awareness on the fundamentals of electric power generation, transmission and distribution." Understanding three-phase systems is the bedrock for grasping how power is generated, transmitted efficiently, and distributed reliably. It also helps us understand why certain electrical equipment, like large motors (related to **CO3**), are designed to operate on three phases.

### Why Three Phases? A Little Analogy

Imagine you're pushing a heavy merry-go-round. If you push it with just one hand, you'll get jerky movements and it’ll be hard to keep it going smoothly. But if you have three people, spaced equally around the merry-go-round, each pushing in turn, you’ll get a much smoother, continuous rotation, and a lot more power can be applied. This is the essence of why we use three phases in AC power. It provides a more constant and balanced power delivery compared to a single-phase system.

### The Heart of the Matter: Representing Three-Phase Voltages

In a three-phase system, we generate three separate alternating voltages. These voltages are:

1.  **Sinusoidal**: Like single-phase AC, each of these voltages varies with time in a sinusoidal manner.
2.  **Equal in Magnitude**: Ideally, the peak voltage (and therefore the RMS voltage) of each of the three phases is the same.
3.  **Phase-Shifted**: This is the crucial part. The three voltages are not in sync; they are intentionally staggered in time.

**How are they staggered?** They are displaced from each other by **120 degrees** in phase. Think of it as three waves, perfectly timed to rise and fall one after another, ensuring there's always power being delivered.

Let's represent these voltages mathematically. If we consider one of the phases, say Phase A, to have a voltage that can be represented as:

$v_A(t) = V_m \sin(\omega t)$

Where:
*   $v_A(t)$ is the instantaneous voltage of Phase A at time 't'.
*   $V_m$ is the **maximum voltage** or **amplitude** of the voltage wave for Phase A.
*   $\omega$ is the **angular frequency** of the voltage (related to the power supply frequency, $\omega = 2\pi f$, where 'f' is the frequency in Hz).

Now, because the other two phases (Phase B and Phase C) are 120 degrees behind Phase A in their sinusoidal cycle, we can write their voltages as:

$v_B(t) = V_m \sin(\omega t - 120^\circ)$
$v_C(t) = V_m \sin(\omega t - 240^\circ)$

Notice a couple of things here:

*   **Amplitude ($V_m$):** We've kept the amplitude the same for all three phases, as mentioned earlier. This is the ideal scenario.
*   **Phase Shift:** Phase B is shifted by $120^\circ$ *later* than Phase A, and Phase C is shifted by $240^\circ$ *later* than Phase A.

**A little more on the phase shift:** Sometimes, instead of $-240^\circ$, we might see $+120^\circ$ for Phase C. Why? Because $\sin(x - 240^\circ) = \sin(x + 120^\circ)$. Both are valid representations and mean the same thing – Phase C lags Phase A by $240^\circ$ or leads Phase A by $120^\circ$ (if we consider the negative direction of time, which is less common in this context, or more simply, it's $120^\circ$ ahead of Phase B). The key is the **$120^\circ$ separation** between consecutive phases.

### Visualizing the Voltages: Phasors and Waveforms

How can we visualize this $120^\circ$ separation?

#### 1. Time Domain (Waveforms)

Imagine plotting these three voltages on a graph with time on the x-axis. You would see three identical sine waves, but they would be shifted horizontally. Phase A starts at 0, Phase B would start at a point corresponding to $120^\circ$ later in its cycle, and Phase C would start $240^\circ$ later.

[Imagine a diagram here showing three sinusoidal waves, one starting at t=0, the second starting 1/3 of a cycle later, and the third starting 2/3 of a cycle later. They are all the same height.]

*   **Exam Tip:** When asked to represent three-phase voltages, sketching these waveforms is a great way to demonstrate understanding. Remember to label the axes and the phase shifts clearly.

#### 2. Phasor Representation

In AC circuit analysis, we often use **phasors**. A phasor is a rotating line segment that represents a sinusoidal quantity. Its length represents the amplitude (or RMS value), and its angle represents the phase.

For our three-phase voltages, we can draw three phasors:

*   **Phasor A:** Let's place it along the positive x-axis, representing $0^\circ$. Its length corresponds to $V_m$.
*   **Phasor B:** This phasor will be 120 degrees *behind* Phasor A. So, it will be at an angle of $-120^\circ$ (or $+240^\circ$) from the x-axis. Its length is also $V_m$.
*   **Phasor C:** This phasor will be 240 degrees *behind* Phasor A, or equivalently, 120 degrees behind Phasor B. So, it will be at an angle of $-240^\circ$ (or $+120^\circ$) from the x-axis. Its length is $V_m$.

[Imagine a diagram here showing three vectors (phasors) originating from the same point. One vector points horizontally to the right (0 degrees). The second vector is rotated 120 degrees clockwise from the first. The third vector is rotated another 120 degrees clockwise (total 240 degrees clockwise from the first). All vectors have the same length.]

When these three phasors rotate together at angular frequency $\omega$, their tips trace out the sinusoidal waveforms we discussed.

*   **Why Phasors?** Phasors simplify the addition and subtraction of AC quantities, especially when dealing with circuits. Instead of dealing with complex trigonometric functions, we deal with vectors, which is much easier. This relates to **CO1**: "Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits."

### Key Terminology and What it Means for You

*   **Phase Sequence:** The order in which the voltages reach their peak. For example, A-B-C is one phase sequence, and A-C-B is another. This is critical for the direction of rotation of three-phase motors. If you connect a motor with an A-B-C sequence and it rotates one way, swapping any two connections (e.g., swapping A and B) will reverse its direction of rotation. This is a very practical application.
*   **Line Voltage vs. Phase Voltage:** This is a concept we'll explore more when we discuss connections (like star and delta), but it's good to be aware of now.
    *   **Phase Voltage:** The voltage across a single phase winding of the source or load (e.g., $v_A(t)$).
    *   **Line Voltage:** The voltage between any two of the three lines connecting the source to the load. In a balanced system, the magnitude of the line voltage is $\sqrt{3}$ times the magnitude of the phase voltage.

### Why This Matters (Connecting to Course Outcomes)

*   **CO1 (Solving Circuits):** Understanding the sinusoidal nature and phase shifts is essential for using phasor analysis to solve AC circuits containing resistors, inductors, and capacitors, which form the basis of electrical engineering.
*   **CO2 (Power Generation, Transmission, Distribution):** Three-phase systems are the backbone of our power grid precisely because they are more efficient for transmitting large amounts of power. The constant power delivery means smoother operation of power plants and distribution networks. The $120^\circ$ phase shift is engineered into generators.
*   **CO3 (Motors):** Three-phase induction motors are ubiquitous because they are simple, robust, and efficient. Their rotating magnetic field, which leads to rotation, is created by the interaction of these three phase-shifted currents.

### In Summary: The Essence of Three-Phase Voltages

Remember this: A three-phase AC system utilizes three sinusoidal voltages of **equal magnitude** and **frequency**, but **displaced by 120 degrees** in phase from each other. This precise $120^\circ$ separation is what allows for efficient power generation and distribution, and is fundamental to the operation of many electrical machines. Mathematically, we represent them using sine functions with appropriate phase shifts. Visually, they can be understood through waveforms or rotating phasors.

---

## Sample Questions and Answers

**1. Conceptual Question:**
Explain why three-phase AC power is generally preferred over single-phase AC power for large-scale power generation and distribution.

**Answer:**
Three-phase AC power is preferred for several key reasons related to efficiency and smooth operation.
*   **Constant Power Delivery:** In a three-phase system, the instantaneous total power delivered is constant, unlike single-phase power which pulsates at twice the supply frequency. This leads to smoother operation of machinery and a more stable power supply.
*   **Efficiency in Transmission:** For the same amount of power delivered, three-phase systems require less conductor material (copper or aluminum) compared to three separate single-phase systems delivering the same total power. This is due to the inherent power factor characteristics and how power is distributed among the phases.
*   **Motor Performance:** Three-phase motors are simpler, more robust, and self-starting compared to single-phase motors. The rotating magnetic field produced by three-phase currents naturally induces rotation without needing special starting mechanisms. This connects to **CO3**.

**2. Exam-Oriented Question:**
If the voltage of Phase A of a three-phase system is given by $v_A(t) = 300 \sin(377t)$, write the expressions for the voltages of Phase B and Phase C, assuming a positive phase sequence (A-B-C).

**Answer:**
The angular frequency $\omega = 377$ rad/s. The amplitude $V_m = 300$ V.
In a three-phase system with a positive phase sequence (A-B-C), Phase B lags Phase A by $120^\circ$, and Phase C lags Phase A by $240^\circ$ (or leads Phase A by $120^\circ$).

Therefore, the expressions are:

*   **Phase B Voltage:**
    $v_B(t) = V_m \sin(\omega t - 120^\circ)$
    $v_B(t) = 300 \sin(377t - 120^\circ)$ V

*   **Phase C Voltage:**
    $v_C(t) = V_m \sin(\omega t - 240^\circ)$
    $v_C(t) = 300 \sin(377t - 240^\circ)$ V

    *(Alternatively, using the equivalent lead for Phase C):*
    $v_C(t) = 300 \sin(377t + 120^\circ)$ V

**Reasoning:** This question tests the understanding of the mathematical representation of three-phase voltages and the concept of phase sequencing. The core idea is the $120^\circ$ phase shift between successive phases.

**3. Conceptual/Visualisation Question:**
Describe how you would represent the three phase voltages of a balanced three-phase system using phasors. What does the length and orientation of each phasor signify?

**Answer:**
In a balanced three-phase system, the three phase voltages can be represented by three phasors.
*   **Length of Phasor:** The length of each phasor represents the amplitude (maximum value, $V_m$) or the RMS value of the respective phase voltage. For a balanced system, all three phasors have the same length.
*   **Orientation of Phasor:** The orientation (angle) of each phasor with respect to a reference axis indicates the phase of the voltage. If we take the voltage of Phase A as the reference and place its phasor along the positive x-axis (at 0 degrees), then:
    *   The phasor for Phase B would be rotated $120^\circ$ clockwise (or $-120^\circ$ from the reference).
    *   The phasor for Phase C would be rotated $240^\circ$ clockwise (or $-240^\circ$ or $+120^\circ$ from the reference).

These phasors would typically be shown rotating at the angular frequency of the AC system. The tips of these rotating phasors, as they sweep through 360 degrees, would trace out the instantaneous sinusoidal voltage waveforms for each phase. This representation is key to applying AC circuit analysis techniques, as per **CO1**.
