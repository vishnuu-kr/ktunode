---
title: "Induction generator – line excited and self-excited induction generators (principle of operation only) – torque-slip characteristics for braking, motoring and regeneration"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 4: Braking of Induction motors – plugging, dynamic braking, regenerative braking (concepts only)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35dfe"
status: "completed"
scrapedAt: "2026-05-23T16:19:19.654Z"
---
# SYNCHRONOUS & INDUCTION MACHINES

## Module 4: Braking of Induction Motors & Induction Generators

### Topic: Induction Generator - Principle of Operation & Torque-Slip Characteristics for Braking, Motoring, and Regeneration

---

### 1. Introduction to Induction Generators (K3)

An induction generator is essentially an induction motor operating in a motoring mode, but driven by an external prime mover at a speed *higher* than its synchronous speed. This leads to the production of real power, which is fed back into the supply system.

**Key Concepts:**

*   **Synchronous Speed ($N_s$):** The speed at which the rotating magnetic field in an AC machine rotates. It is determined by the frequency of the supply ($f$) and the number of poles ($P$) of the machine:
    $N_s = \frac{120f}{P}$ (in RPM)
*   **Rotor Speed ($N_r$):** The actual mechanical speed of the rotor.
*   **Slip ($s$):** The difference between the synchronous speed and the rotor speed, expressed as a fraction of the synchronous speed:
    $s = \frac{N_s - N_r}{N_s}$
    *   **Motoring Mode:** $N_r < N_s$, so $s$ is positive (0 < s < 1). The rotor lags the rotating magnetic field.
    *   **Generating Mode:** $N_r > N_s$, so $s$ is negative ($s < 0$). The rotor "overtakes" the rotating magnetic field.

**Textbook References:**
*   **P.S. Bhimbra:** Chapter on Induction Generators. Focuses on the fundamental principles and types.
*   **M.G. Say:** Discusses the operation of induction machines in both motor and generator modes, highlighting the slip reversal.
*   **Kothari & Nagrath:** Provides a clear explanation of the conditions for generating operation.
*   **K Murugesh Kumar:** Covers the operational aspects of induction generators in detail.
*   **J.B. Gupta:** Explains the conversion of mechanical energy to electrical energy by induction machines when driven above synchronous speed.

---

### 2. Principle of Operation of Induction Generators (K3)

The fundamental principle of operation for an induction generator relies on **Faraday's Law of Electromagnetic Induction** and the concept of **slip**.

**Core Principle:**

1.  **Rotating Magnetic Field:** A three-phase AC supply is connected to the stator windings of the induction machine. This creates a rotating magnetic field (RMF) with a speed equal to the synchronous speed ($N_s$).
2.  **Rotor Movement:** The rotor is mechanically driven by a prime mover (e.g., a turbine, engine) at a speed ($N_r$) *greater* than the synchronous speed ($N_s$).
3.  **Relative Speed:** Because the rotor is rotating faster than the RMF, there is a relative speed difference between the stator RMF and the rotor conductors.
4.  **Induced EMF in Rotor:** This relative motion causes the stator's rotating magnetic field to cut the rotor conductors. By Faraday's Law, an electromotive force (EMF) is induced in the rotor conductors.
5.  **Rotor Current:** Since the rotor windings are typically short-circuited (either by end rings in squirrel cage rotors or by external connections in wound rotors), the induced EMF drives currents in the rotor conductors.
6.  **Interaction of Fields:** The rotor currents, in turn, produce their own magnetic field (rotor magnetic field). This rotor magnetic field interacts with the stator magnetic field.
7.  **Torque Production (Opposing Motion):** According to Lenz's Law, the induced rotor currents and the resulting torque will oppose the *relative motion* that caused them. In the motoring mode, this opposition is against the direction of rotation, slowing the rotor down. In the generating mode, this opposition is against the *external driving force*, resulting in a retarding torque.
8.  **Energy Transfer:** When the rotor speed ($N_r$) exceeds the synchronous speed ($N_s$), the slip ($s$) becomes negative. The interaction of the stator RMF and the rotor magnetic field now produces a torque that opposes the *mechanical input* from the prime mover. This retarding torque is a manifestation of the machine converting mechanical energy into electrical energy and delivering it to the connected electrical system.

**Important Note:** Unlike synchronous generators, induction generators do not generate voltage or magnetic flux by themselves. They require a source of reactive power (from the connected AC supply or capacitors) to establish the stator magnetic field.

**Textbook References:**
*   **P.S. Bhimbra:** Details the process of EMF induction in the rotor and the creation of rotor current.
*   **M.G. Say:** Emphasizes the requirement of an external AC source or capacitors for excitation.
*   **Kothari & Nagrath:** Explains how negative slip leads to power generation.
*   **K Murugesh Kumar:** Provides a detailed step-by-step explanation of the energy conversion process.
*   **J.B. Gupta:** Illustrates the analogy with the motoring operation, highlighting the reversal of slip and torque.

---

### 3. Types of Induction Generators (Concepts Only) (K3)

Induction generators can be broadly classified based on their excitation method:

#### 3.1. Line-Excited Induction Generator (LEIG)

*   **Concept:** In this type, the stator windings are directly connected to an AC supply system. This supply system provides both the required excitation voltage and the reactive power to establish the stator magnetic field.
*   **Operation:**
    *   The prime mover drives the rotor at a speed *slightly above* the synchronous speed.
    *   The stator RMF is established by the connected AC supply.
    *   The induction generator then draws reactive power from the supply to magnetize its core and, in return, delivers real power to the supply system.
*   **Characteristics:**
    *   Requires a stable AC supply for excitation.
    *   Voltage and frequency are dictated by the connected supply system.
    *   Often used in applications where a stable grid is available, such as wind turbines connected to a grid.
*   **Textbook References:**
    *   **P.S. Bhimbra:** Discusses LEIGs as a common configuration.
    *   **Kothari & Nagrath:** Explains the role of the connected grid in providing excitation.

#### 3.2. Self-Excited Induction Generator (SEIG)

*   **Concept:** In this type, the stator windings are *not* connected to an external AC supply. Instead, they are connected to a bank of capacitors. These capacitors provide the necessary reactive power for excitation and voltage build-up.
*   **Operation:**
    *   When the rotor is driven by a prime mover, a small residual magnetism exists in the stator poles due to previous operation or inherent properties.
    *   This residual magnetism, combined with the capacitance connected to the stator terminals, causes a small voltage to build up across the stator.
    *   As the voltage builds up, it drives current through the capacitors and the stator windings.
    *   This creates a rotating magnetic field.
    *   The rotor, driven at a speed above synchronous speed, interacts with this field, inducing currents and producing a stronger magnetic field, leading to further voltage build-up.
    *   The process continues until the reactive power generated by the capacitors equals the reactive power consumed by the machine's magnetizing reactance and the losses.
*   **Characteristics:**
    *   Can operate in isolation (off-grid).
    *   The output voltage and frequency are dependent on the rotor speed, the capacitance value, and the load connected.
    *   Capacitor selection is critical for stable operation.
    *   Used in small-scale power generation, such as micro-hydro or wind power systems where grid connection is not available.
*   **Textbook References:**
    *   **P.S. Bhimbra:** Provides a detailed explanation of the self-excitation process and the role of capacitors.
    *   **M.G. Say:** Explains the conditions for voltage build-up in SEIGs.
    *   **K Murugesh Kumar:** Focuses on the design considerations and operational parameters of SEIGs.
    *   **J.B. Gupta:** Discusses the transient behavior and stability of SEIGs.

---

### 4. Torque-Slip Characteristics for Braking, Motoring, and Regeneration (K3)

The torque-slip characteristics are fundamental to understanding the operation of induction machines in different modes. For an induction generator, the torque-slip curve extends into the region where the rotor speed is greater than the synchronous speed.

**Understanding the Torque-Slip Curve:**

The general torque-slip curve for an induction machine has the following key regions:

*   **Motoring Region:**
    *   **Slip ($s$):** Positive and less than 1 ($0 < s < 1$).
    *   **Rotor Speed ($N_r$):** Less than synchronous speed ($N_r < N_s$).
    *   **Torque:** Positive (motoring torque). The torque is in the direction of rotation, causing the motor to accelerate or maintain speed.
    *   **Power Flow:** Mechanical power is input to the rotor, and electrical power is output from the stator.
    *   **Maximum Torque (Breakdown Torque):** Occurs at a specific slip value ($s_{max}$) beyond which torque decreases with increasing slip.

*   **Generating Region (Regeneration):**
    *   **Slip ($s$):** Negative ($s < 0$).
    *   **Rotor Speed ($N_r$):** Greater than synchronous speed ($N_r > N_s$).
    *   **Torque:** Negative (braking torque). The torque opposes the direction of rotation, meaning the prime mover must supply this torque.
    *   **Power Flow:** Mechanical power is input to the rotor (and hence to the machine), and electrical power is delivered from the stator. The machine acts as a generator.

*   **Braking Regions:**

    *   **Plugging (Reverse-Current Braking):**
        *   **Concept:** Achieved by reversing any two of the three stator supply connections while the motor is running. This reverses the direction of the stator RMF.
        *   **Slip ($s$):** The slip becomes *very large* and negative with respect to the *original* direction of rotation, but it's effectively large and positive with respect to the *new* direction of the RMF. For instance, if rotating at $N_r$ below $N_s$ in the positive direction, and we reverse the supply, the new synchronous speed is $-N_s$. The slip with respect to the new RMF is $s' = \frac{-N_s - N_r}{-N_s} = 1 + \frac{N_r}{N_s}$ (if $N_r > 0$), which is a large positive slip.
        *   **Torque:** Produces a large braking torque in the direction *opposite* to the motor's rotation.
        *   **Power Flow:** Electrical power is drawn from the supply, converted into mechanical power by the reversed RMF, and then dissipated as heat in the stator windings and rotor. A significant portion is also dissipated as heat in external resistors if used.
        *   **Characteristics:** Rapid braking, but high currents are drawn from the supply, requiring robust protection.

    *   **Dynamic Braking (Rheostatic Braking):**
        *   **Concept:** The stator windings are disconnected from the AC supply and connected to a variable resistance (rheostat) or a fixed resistor bank. The rotor is still driven by the prime mover.
        *   **Slip ($s$):** If the machine is running as a motor and then disconnected and connected to a resistor, the RMF from the supply is removed. However, if it's used as a braking method for a generator that is driven above synchronous speed, it's a slightly different scenario where the generator is connected to a resistive load instead of feeding the grid. In the context of braking an induction *motor*, when disconnected from the supply and connected to resistors, the residual magnetism in the stator acts with the rotor's kinetic energy and the external resistor to produce braking torque. The RMF is established by the residual magnetism and rotor currents.
        *   **Torque:** Produces a braking torque that dissipates energy in the external resistors and the internal resistance of the windings. The magnitude of braking torque depends on the resistance value.
        *   **Power Flow:** Mechanical energy from the rotor's inertia is converted into electrical energy, which is then dissipated as heat in the external resistor and the machine.
        *   **Important for Induction Generators:** If an induction generator is to be braked, it can be disconnected from the grid and connected to a resistor bank. The generator's stored energy will be dissipated, and the machine will slow down. This is effectively dynamic braking for a generator.

**Torque-Slip Curve Visualization:**

```
      ^ Torque (T)
      |
      |        ------- Motor Torque ------
      |       /                        \
      |      /                          \
      |     /                            \
      |----/--------------\---------------------> Slip (s)
      |   /                \   Plugging Region
      |  /                  \ (High negative slip w.r.t. new RMF)
      | /                    \
      |/                      \---------- Generating Torque (Negative Slip) ----------
      |                        \          (Negative torque, positive slip magnitude)
      |                         \
      |--------------------------|--------------------
      -1        0          s_max (Breakdown Slip)       1
                (N_r = N_s)
```

*   **Motoring Region (0 < s < 1):** Positive torque, machine accelerates.
*   **Generating Region (s < 0):** Negative torque, machine acts as a generator, feeding power. The magnitude of negative torque increases as rotor speed increases beyond $N_s$.
*   **Plugging:** Occurs when the phase sequence of the supply is reversed. This results in a large negative slip relative to the *new* RMF, producing a large braking torque. In the generalized torque-slip characteristic plot, this is seen as a very steep negative torque region corresponding to a large positive slip value relative to the reversed RMF.
*   **Dynamic Braking:** Disconnecting from the supply and connecting to a resistor. Results in a braking torque that dissipates energy.

**Key Points for Torque-Slip Characteristics:**

*   The slip sign indicates the mode of operation: positive for motoring, negative for generating.
*   Plugging creates a large braking torque by reversing the RMF.
*   Dynamic braking dissipates energy in external resistors.
*   Regeneration is simply the machine operating as an induction generator, with the rotor speed exceeding synchronous speed.

**Textbook References:**
*   **P.S. Bhimbra:** Detailed torque-slip curves and their interpretation for motoring, braking, and generating.
*   **M.G. Say:** Explains the mathematical derivation and graphical representation of the torque-slip characteristic.
*   **Kothari & Nagrath:** Provides simplified torque-slip curves for conceptual understanding.
*   **K Murugesh Kumar:** Analyzes the effect of external resistance on the torque-slip characteristic for dynamic braking.
*   **J.B. Gupta:** Compares the torque-slip characteristics across different operating modes.

---

### 5. Connection to Course Outcomes (K3)

*   **CO4: Analyse the various starting, braking and speed control methods of 3- phase induction motors.**
    *   This module directly addresses the "braking methods" aspect. Understanding plugging and dynamic braking as torque-slip phenomena is crucial for analyzing these methods.
    *   The concepts of induction generators also inform about the behavior of induction machines when their speed is controlled externally and they operate in the generating quadrant.

---

### 6. Practice Questions and Exercises

**Q1. Define slip and explain its significance in the operation of an induction machine.**

**Answer:** Slip ($s$) is the difference between the synchronous speed ($N_s$) and the rotor speed ($N_r$), expressed as a fraction of synchronous speed: $s = \frac{N_s - N_r}{N_s}$.
*   **Significance:**
    *   **Motoring:** Positive slip ($0 < s < 1$) leads to the induction of rotor currents and a positive motoring torque.
    *   **Generating:** Negative slip ($s < 0$) leads to the induction of rotor currents that produce a torque opposing the prime mover, allowing the machine to act as a generator.
    *   **Braking (Plugging):** Large negative slip relative to the reversed RMF produces a large braking torque.

**Q2. Describe the fundamental principle of operation of an induction generator.**

**Answer:** An induction generator operates when its rotor is driven by an external prime mover at a speed exceeding the synchronous speed. This causes the rotor conductors to cut the stator's rotating magnetic field (established by an external AC supply or capacitors) at a relative speed, inducing EMF and currents in the rotor. These rotor currents create a magnetic field that interacts with the stator field, producing a retarding torque that opposes the prime mover's input. The machine then converts this mechanical input into electrical output, feeding power into the connected system.

**Q3. Differentiate between Line-Excited and Self-Excited Induction Generators.**

**Answer:**
*   **Line-Excited Induction Generator (LEIG):** Requires connection to an external AC supply for excitation (reactive power). Voltage and frequency are dictated by the supply.
*   **Self-Excited Induction Generator (SEIG):** Uses a bank of capacitors for excitation. Can operate independently of the grid. Output voltage and frequency are dependent on rotor speed, capacitance, and load.

**Q4. In the torque-slip characteristic curve of an induction machine, what does the region with negative slip represent?**

**Answer:** The region with negative slip represents the **generating (or regenerative braking)** mode of operation. In this mode, the rotor speed is greater than the synchronous speed, and the machine acts as a generator, delivering electrical power to the connected supply. The torque produced is negative, opposing the direction of rotation, and is supplied by the prime mover.

**Q5. Briefly explain the concept of plugging as a braking method for induction motors.**

**Answer:** Plugging is a braking method achieved by reversing any two phases of the stator supply while the motor is running. This reverses the direction of the stator's rotating magnetic field. The rotor, still rotating in the original direction, now experiences a very large slip relative to the reversed field, resulting in a powerful braking torque that opposes the original rotation. This causes the motor to decelerate rapidly.

---

### 7. Important Points to Remember

*   **Slip is key:** The sign and magnitude of slip determine the operating mode (motoring, generating, braking).
*   **$N_r > N_s$ for Generation:** Induction generators *must* be driven above synchronous speed.
*   **Excitation Requirement:** Induction generators need a source of reactive power (AC supply or capacitors) to establish the stator magnetic field. They cannot self-excite without this.
*   **Torque Direction:** Torque is in the same direction as rotation in motoring mode, and opposite to rotation in generating and braking modes.
*   **Plugging vs. Dynamic Braking:** Plugging uses reversed supply for rapid braking, drawing high current. Dynamic braking uses external resistors to dissipate energy.
*   **SEIGs for Off-Grid:** Self-excited induction generators are ideal for isolated power generation applications.

---
