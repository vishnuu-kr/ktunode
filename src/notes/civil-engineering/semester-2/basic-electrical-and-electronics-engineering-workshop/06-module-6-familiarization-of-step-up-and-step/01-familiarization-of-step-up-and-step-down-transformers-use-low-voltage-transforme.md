---
title: "Familiarization of step up and step-down transformers, (use low voltage transformers)"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 6: Familiarization of step up and step"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912ecc"
status: "completed"
scrapedAt: "2026-05-20T18:32:59.333Z"
---
# Module 6: Familiarization of Step-Up and Step-Down Transformers (Low Voltage Transformers)

Welcome, everyone, to our workshop session on a fundamental component of electrical engineering: the transformer! Today, we're diving into Module 6, where we'll get hands-on with understanding **step-up and step-down transformers**, specifically focusing on the **low voltage ones** that are safe and common for our laboratory work. Think of this as getting acquainted with your new best friend in any electrical circuit that needs to change voltage levels.

## 1. What is a Transformer? The Core Idea

Before we get into "step-up" and "step-down," let's understand what a transformer *is*. At its heart, a transformer is a **static electrical device** (meaning it has no moving parts) that **transfers electrical energy** from one circuit to another **through electromagnetic induction**, and it does this *without changing the frequency of the AC supply*. The key here is "without changing the frequency." Transformers work with Alternating Current (AC), not Direct Current (DC). Why? Because it’s the *changing* magnetic field produced by AC that induces voltage in the secondary coil.

Think of it like this: Imagine you have a story (your electrical power) that needs to be told in a different way – sometimes louder (higher voltage) and sometimes softer (lower voltage). A transformer is like the storyteller who can adjust the volume without altering the actual content of the story (the frequency).

This principle of electromagnetic induction is something you’ll find deeply explained in textbooks like D.P. Kothari and I. J. Nagrath's "Basic Electrical Engineering." They’ll go into the Faraday’s Law of Induction, which is the bedrock of how transformers operate.

**Relating to Course Outcomes:**
*   **CO2: Familiarise with transformers...** – This is precisely what we're doing today! Getting comfortable with the device itself.
*   **CO1: Demonstrate safety measures against electrical shocks (Knowledge Level: K2)** – While transformers themselves are safe to handle in low voltage, understanding their function is the first step towards safe operation of any electrical equipment. We'll always keep safety paramount.

## 2. The Anatomy of a Transformer: What's Inside?

A basic transformer consists of two main parts:

*   **Windings (Coils):** These are typically made of copper wire. There are two sets of windings:
    *   **Primary Winding:** Connected to the input AC voltage source.
    *   **Secondary Winding:** Connected to the load, where the output voltage is delivered.
    These windings are usually insulated and wound around a common magnetic core.

*   **Magnetic Core:** This is usually made of laminated sheets of soft iron or silicon steel. Why laminated? To reduce energy losses due to eddy currents. The core provides an easy path for the magnetic flux to flow from the primary winding to the secondary winding.

You can visualize this like two separate rope loops. One loop is energized and starts moving, and this movement (magnetic flux) causes the other loop to start moving as well, transferring energy without the loops directly touching.

## 3. The Magic of Voltage Transformation: Step-Up vs. Step-Down

Now, let's address the core of our topic: how transformers change voltage. This depends on the **turns ratio** – the ratio of the number of turns in the secondary winding to the number of turns in the primary winding.

### 3.1 Step-Down Transformer: Bringing Voltage Down

A **step-down transformer** is used to **decrease** the voltage from the primary to the secondary. How do we achieve this? By ensuring the **secondary winding has fewer turns than the primary winding.**

**Analogy:** Imagine a wide, fast-flowing river (high voltage, carrying a lot of energy) that needs to be channeled into several smaller, slower streams (lower voltage). The step-down transformer is like a system of sluice gates that divides the water efficiently.

*   **Key Feature:** Number of turns in secondary winding ($N_s$) < Number of turns in primary winding ($N_p$).
*   **Voltage Relationship:** The voltage in the secondary ($V_s$) will be less than the voltage in the primary ($V_p$). Specifically, $V_s/V_p \approx N_s/N_p$.
*   **Current Relationship:** For an ideal transformer, power in equals power out. So, if voltage goes down, current must go up to conserve power ($P_p \approx P_s$, which means $V_p I_p \approx V_s I_s$). This is crucial! The current increases.
*   **Real-World Use:** This is incredibly common! Think about the power adapter for your phone or laptop. The high voltage from the wall socket (e.g., 230V in India) is stepped down to a much lower, safer voltage (e.g., 5V, 12V, 19V) that your devices can handle. M.K. Giridharan's "Electrical Systems Design" would detail how these are used in distribution networks to bring down high transmission voltages to usable levels for homes and businesses.

### 3.2 Step-Up Transformer: Boosting Voltage Up

Conversely, a **step-up transformer** is used to **increase** the voltage from the primary to the secondary. For this, the **secondary winding must have more turns than the primary winding.**

**Analogy:** Imagine you have a gentle trickle of water (low voltage) that you want to collect and channel into a powerful jet (high voltage). The step-up transformer acts like a pump and nozzle system.

*   **Key Feature:** Number of turns in secondary winding ($N_s$) > Number of turns in primary winding ($N_p$).
*   **Voltage Relationship:** The voltage in the secondary ($V_s$) will be greater than the voltage in the primary ($V_p$). Again, $V_s/V_p \approx N_s/N_p$.
*   **Current Relationship:** If voltage goes up, current must go down to conserve power ($V_p I_p \approx V_s I_s$). So, a step-up transformer *steps down* the current.
*   **Real-World Use:** Power transmission! Electricity is generated at a moderate voltage. To transmit it over long distances efficiently, it's stepped up to very high voltages (hundreds of thousands of volts) using step-up transformers. This high voltage reduces current, which in turn minimizes energy loss as heat ($I^2R$ losses) in the transmission lines. K.B. Raina and S.K. Bhattacharya’s "Electrical Design Estimating and Costing" would discuss the economic aspects of using step-up transformers in transmission.

**Crucial Point for Exams:** Always remember the inverse relationship between voltage and current in transformers (assuming ideal conditions). If voltage steps up, current steps down, and vice-versa. It’s a trade-off to maintain power.

**Relating to Course Outcomes:**
*   **CO2: Familiarise with transformers...** – We are differentiating between the two main types.
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits (Knowledge Level: K3)** – Understanding the *purpose* (step-up/down) helps us decide *how* to connect them in a circuit.

## 4. Working with Low Voltage Transformers in the Workshop

In our workshop, we'll be using **low voltage transformers**. These are typically rated for input voltages like 230V AC (standard mains supply) and output voltages such as 12V AC, 24V AC, or even lower. This is a critical safety feature. Handling high voltages is dangerous, but working with these low voltages allows us to experiment and learn without significant risk, aligning perfectly with **CO1: Demonstrate safety measures against electrical shocks**.

When we connect these transformers, we’ll need to be mindful of a few things:

*   **Input Connection:** The primary winding will be connected to the AC power source. Make sure you use the correct terminals.
*   **Output Connection:** The secondary winding will provide the stepped-up or stepped-down voltage.
*   **Polarity:** For transformers with multiple taps or if connecting multiple transformers, understanding polarity is vital to avoid short circuits. Low voltage transformers often have clear markings.
*   **Load:** A transformer needs a load to deliver power to. This could be a resistor, a lamp, or another circuit.
*   **Safety:** Even at low voltages, we must be careful not to short-circuit the output terminals. Always disconnect power before making any connections or disconnections.

**Relating to Course Outcomes:**
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits (Knowledge Level: K3)** – We will be drawing these diagrams and using basic connecting wires, terminals, and perhaps a switch.
*   **CO5: Select and Operate various measuring instruments (Knowledge Level: K3)** – To verify that our transformer is indeed stepping up or down, we will use instruments like a **multimeter** to measure AC voltages on both the primary and secondary sides. This is a direct application of this outcome.

## 5. Practical Demonstration and Observation

Let's imagine we have a **step-down transformer** in front of us. It has two input terminals (primary) and, say, three output terminals (secondary), perhaps with taps at different voltage levels (e.g., 0-12V, 0-9V, 0-6V).

**Step-by-step:**

1.  **Safety First:** Ensure the transformer is not plugged in.
2.  **Connect to AC Source:** Connect the primary terminals to the AC mains supply (via a plug and perhaps a fuse for extra safety).
3.  **Measure Input Voltage:** Use a multimeter set to AC voltage measurement. Carefully measure the voltage across the primary terminals. Let’s say it reads around 230V.
4.  **Measure Output Voltage:** Now, switch the multimeter to measure AC voltage on the secondary side.
    *   Connect the probes to the 12V output terminals. You should read something close to 12V AC.
    *   Connect to the 9V terminals. You should read around 9V AC.
    *   Connect to the 6V terminals. You should read around 6V AC.
5.  **Observation:** You will clearly see that the voltage on the secondary side is *lower* than the voltage on the primary side. This confirms it’s a step-down transformer.

Now, if we had a **step-up transformer** (less common in basic workshops for safety, but the principle is the same), say a 12V AC to 24V AC transformer:

1.  **Connect Input:** Connect the 12V AC terminals to a low-voltage AC source.
2.  **Measure Input:** Measure about 12V AC at the primary.
3.  **Measure Output:** Measure across the 24V terminals. You should read approximately 24V AC.
4.  **Observation:** The voltage has increased. This confirms it’s a step-up transformer.

**What if we connect the AC mains (230V) to the *secondary* of a step-down transformer?** If we connect the 230V to the lower voltage winding (which was originally the secondary), it will become the primary. Since the original primary had *more* turns, the new secondary (original primary) will have a much *higher* voltage output – potentially thousands of volts! This is why it's critical to know which is the primary and secondary, and to always connect the mains supply to the primary winding designed for it. This reinforces **CO1** and **CO3**.

## 6. Understanding Transformer Ratings and Types

Transformers are rated by their **apparent power** (in Volt-Amperes, VA) and their voltage levels (e.g., 230V/12V). The VA rating tells you how much power the transformer can safely handle.

*   **Small transformers** (like the ones we use in labs) are rated in VA (e.g., 5VA, 10VA, 50VA).
*   **Larger transformers** (like those in power substations) are rated in kVA (kilovolt-amperes) or MVA (megavolt-amperes).

Types of transformers we might encounter include:

*   **Isolation Transformers:** These are transformers where the primary and secondary have the same voltage (e.g., 230V/230V). They don't step voltage up or down, but they provide electrical isolation between the input and output circuits, which is a significant safety feature. They are excellent for protecting the user and the equipment from ground faults.
*   **Center-Tapped Transformers:** These have a tap in the middle of the secondary winding, providing two output voltages that are equal in magnitude but out of phase (e.g., 0-12V-0, giving +12V, 0, and -12V relative to the center tap, when used with a rectifier).

## 7. Why Transformers are Essential: Beyond the Workshop

Transformers are the backbone of our electrical power systems.

*   **Power Generation:** Generators produce power at a moderate voltage.
*   **Transmission:** Step-up transformers boost voltage for efficient long-distance transmission.
*   **Distribution:** Step-down transformers at substations and local poles bring voltage down to safer levels for homes and industries.
*   **Utilization:** Small step-down transformers are in countless devices – phone chargers, computer power supplies, audio amplifiers, and so on.

This widespread application highlights the fundamental importance of understanding them, as covered in textbooks like "Basic Electronics and Linear Circuits" by Bhargava, Kulshreshtha, and Gupta, which would explain their role in power supplies.

**Relating to Course Outcomes:**
*   **CO2: Familiarise with transformers...** – We've now seen their basic function and types.
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits (Knowledge Level: K3)** – Understanding the purpose helps in circuit design.

## 8. Summary and Key Takeaways

Today, we've learned that:

*   Transformers transfer AC electrical energy from one circuit to another via electromagnetic induction, without changing frequency.
*   They consist of a primary and secondary winding wound on a magnetic core.
*   **Step-down transformers** decrease voltage ($N_s < N_p$) and increase current.
*   **Step-up transformers** increase voltage ($N_s > N_p$) and decrease current.
*   The turns ratio ($N_s/N_p$) dictates the voltage transformation.
*   Low voltage transformers (e.g., 230V/12V) are safe and ideal for workshop experiments.
*   We use measuring instruments like multimeters to verify voltage changes.
*   Transformers are vital for power transmission, distribution, and operation of many electronic devices.

Remember this: **Voltage up, current down. Voltage down, current up.** This is the golden rule for transformers. Always prioritize safety and ensure you understand the input and output terminals before powering anything on.

---

## Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** What fundamental principle allows a transformer to operate?
    **Answer:** A transformer operates on the principle of **mutual electromagnetic induction** (also known as Faraday's Law of Induction). The alternating current in the primary winding creates a changing magnetic flux, which then induces an alternating voltage in the secondary winding.

2.  **Question:** Explain why transformers cannot work with DC voltage.
    **Answer:** Transformers require a *changing* magnetic flux to induce a voltage in the secondary coil. Direct Current (DC) produces a constant magnetic flux. If you apply DC, the magnetic flux doesn't change, so no voltage is induced in the secondary winding, and the transformer simply acts as two separate coils with a magnetic core between them, offering very little conductance (due to the inductance of the coils). This would also likely damage the transformer due to the primary winding acting like a short circuit to DC, drawing excessive current.

3.  **Question:** In a step-up transformer, does the current increase or decrease, and why?
    **Answer:** In an ideal step-up transformer, the current **decreases**. This is because power is conserved (Power In = Power Out). Mathematically, Power (P) = Voltage (V) × Current (I). If the voltage (V) increases, the current (I) must decrease proportionally to keep the product (Power) constant.

**Exam-Oriented Questions:**

4.  **Question:** A transformer has 500 turns in its primary winding and 1500 turns in its secondary winding. If the input voltage is 230V AC, what is the output voltage? Is this a step-up or step-down transformer?
    **Answer:**
    Given:
    Primary turns, $N_p = 500$
    Secondary turns, $N_s = 1500$
    Input voltage, $V_p = 230$V AC

    The voltage transformation is given by the ratio of turns:
    $V_s / V_p = N_s / N_p$

    Therefore, $V_s = V_p \times (N_s / N_p)$
    $V_s = 230 \text{ V} \times (1500 / 500)$
    $V_s = 230 \text{ V} \times 3$
    $V_s = 690$V AC

    Since the secondary voltage (690V) is greater than the primary voltage (230V), and the number of turns in the secondary (1500) is greater than the primary (500), this is a **step-up transformer**.

5.  **Question:** A step-down transformer has a turns ratio of 10:1 (primary:secondary). If it supplies a current of 2A to a load at the secondary, what is the primary current, assuming an ideal transformer?
    **Answer:**
    Turns ratio ($N_p : N_s$) = 10:1. This means $N_p/N_s = 10/1$.
    Secondary current, $I_s = 2$A

    For an ideal transformer, the ratio of voltages is equal to the ratio of turns, and the ratio of currents is the inverse of the ratio of turns:
    $V_p / V_s = N_p / N_s$
    $I_s / I_p = N_p / N_s$

    So, $I_s / I_p = 10 / 1$
    $2 \text{ A} / I_p = 10 / 1$

    Rearranging to solve for $I_p$:
    $I_p = (2 \text{ A} \times 1) / 10$
    $I_p = 0.2$A

    The primary current is 0.2A. This makes sense, as a step-down transformer increases voltage, and therefore decreases current.
