---
title: "Block diagram of DC power supply, circuit and working of half wave, full wave and bridge rectifiers, ripple factor (with and without capacitor filters)"
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 3: Introduction to Electronic devices:"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94b0"
status: "completed"
scrapedAt: "2026-05-23T16:02:49.805Z"
---
# Module 3: Introduction to Electronic Devices

## Topic: DC Power Supply and Rectification

Welcome, everyone! Today, we're diving into one of the most fundamental building blocks of any electronic system: the **DC Power Supply**. You see, most electronic devices, from your smartphone to your TV, run on Direct Current (DC) power. But the electricity that comes from your wall socket is Alternating Current (AC). So, how do we bridge this gap? That's where our topic today comes in – understanding how to convert AC to DC, which is the core function of a DC power supply.

This module is all about understanding the basic electronic devices that make our modern world tick. And the ability to provide a stable DC voltage is absolutely crucial. This connects directly to **Course Outcome 4 (CO4): Describe the fundamental concepts of electronic components and devices**. Specifically, we'll be looking at **diodes**, which are the stars of our rectification process.

### 1. The Block Diagram of a DC Power Supply

Before we get into the nitty-gritty of circuits, let's get a bird's-eye view. Think of a DC power supply as a journey for electricity. It starts as AC from the wall, and it ends up as stable DC, ready to power your electronics. Here's a typical block diagram:

```
AC Mains Input -> Transformer -> Rectifier -> Filter -> Voltage Regulator -> DC Output
```

Let's break down what each block does:

*   **AC Mains Input:** This is your standard AC voltage from the wall socket, say 230V or 120V. It's a sine wave, oscillating back and forth.
*   **Transformer:** Why a transformer? Well, the AC voltage from the mains might be too high or too low for our electronics. A transformer’s job is to **step up** or **step down** this AC voltage to a more suitable level. Think of it like adjusting the water pressure from the main pipe to a level that’s safe for your tap. Transformers are key to controlling the voltage, and this is a fundamental concept in electrical engineering, relating to **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**. We'll be dealing with voltage transformation here.
*   **Rectifier:** This is where the magic of AC to DC conversion happens. The rectifier's main job is to convert the alternating, bidirectional AC voltage into a pulsating DC voltage, where the current flows in only one direction. We'll explore different types of rectifiers shortly.
*   **Filter:** The output from a simple rectifier isn't a smooth DC voltage. It's still "bumpy" or "pulsating." The filter's job is to smooth out these pulsations and make the DC voltage as steady as possible. Imagine trying to drink water from a pipe that’s gushing and then stopping abruptly – the filter is like a reservoir that smooths out the flow. We’ll be focusing on **capacitor filters** here.
*   **Voltage Regulator:** Even after filtering, the DC voltage might fluctuate slightly with changes in the load (what you connect to the power supply) or variations in the input AC voltage. A voltage regulator ensures that the output DC voltage remains constant, regardless of these variations. It’s like a smart tap that maintains a consistent water flow even if you open or close other taps in the house. This is crucial for sensitive electronic components that need a very stable power source.

### 2. Rectifiers: The AC to DC Converters

As we mentioned, the rectifier is the heart of our AC to DC conversion. Its primary component is the **diode**. You can think of a diode as a one-way street for electricity. It allows current to flow easily in one direction (the forward direction) but blocks it almost completely in the opposite direction (the reverse direction). This property is fundamental to rectification.

Diodes are semiconductor devices, and understanding their behavior is key to **CO4**. They are the most basic electronic component we’ll discuss in this context.

There are three main types of rectifiers:

#### 2.1 Half-Wave Rectifier

This is the simplest type of rectifier. As the name suggests, it only rectifies (allows current to flow for) half of the input AC waveform.

**Circuit Diagram:**

```
      AC Input
          |
        -----
       |     |  Diode (D)
      -----
          |
          |------- Load Resistor (RL) ------
          |                               |
         ---                             ---
         GND                             GND
```

**Working:**

Let's consider the input AC voltage as a sine wave.

*   **Positive Half-Cycle:** When the input voltage is positive, the diode is forward-biased. This means it conducts, and current flows through the load resistor ($R_L$). So, the positive half of the AC input appears across the load.
*   **Negative Half-Cycle:** When the input voltage reverses and becomes negative, the diode is reverse-biased. It acts like an open switch, blocking the current. Therefore, no current flows through the load resistor during the negative half-cycle.

**Output Waveform:** The output voltage across the load resistor ($R_L$) will be a series of positive pulses, with gaps where the negative half-cycles were. It's DC because the current only flows in one direction, but it's not a *smooth* DC.

**Pros:**
*   Very simple and requires only one diode.
*   Low cost.

**Cons:**
*   Inefficient, as it utilizes only half of the AC input.
*   The output is highly pulsating, requiring significant filtering.
*   Lower average DC output voltage compared to other rectifiers.

**Exam Tip:** Be prepared to draw the circuit and explain its operation during both positive and negative half-cycles. The output waveform is also frequently asked.

#### 2.2 Full-Wave Rectifier (Center-Tapped Transformer)

This rectifier utilizes both halves of the AC input waveform, making it more efficient than the half-wave rectifier. It requires a center-tapped transformer and two diodes.

**Circuit Diagram:**

```
      AC Input
          |
        -----
       |     |  Transformer Secondary
       -----
        | | |
        -----
       |     |  Center Tap (GND)
       -----
        | |
        |   D1
        -----
       |     |
       -----
          |
          |------- Load Resistor (RL) ------
          |                               |
         ---                             ---
         GND                             GND
        | |
        |   D2
        -----
       |     |
       -----
          |
          |
```

**Working:**

The center-tapped transformer provides two AC voltages that are 180 degrees out of phase with respect to the center tap.

*   **Positive Half-Cycle (of the top AC voltage):** The top half of the transformer secondary becomes positive, and the bottom half becomes negative (with respect to the center tap).
    *   Diode $D_1$ is forward-biased and conducts. Current flows from the top of the secondary, through $D_1$, through $R_L$ (from top to bottom), and back to the center tap.
    *   Diode $D_2$ is reverse-biased and does not conduct.
*   **Negative Half-Cycle (of the top AC voltage):** The top half of the transformer secondary becomes negative, and the bottom half becomes positive.
    *   Diode $D_1$ is reverse-biased and does not conduct.
    *   Diode $D_2$ is forward-biased and conducts. Current flows from the bottom of the secondary, through $D_2$, through $R_L$ (still from top to bottom), and back to the center tap.

Notice that in both half-cycles, the current through the load resistor $R_L$ flows in the same direction.

**Output Waveform:** The output voltage across $R_L$ is a series of positive pulses, one for each half-cycle of the input AC. It's still pulsating, but the "gaps" are filled in by the second half-cycle, making it smoother than the half-wave rectifier.

**Pros:**
*   More efficient than half-wave rectifier.
*   Higher average DC output voltage.
*   Less ripple than half-wave rectifier.

**Cons:**
*   Requires a special center-tapped transformer, which is more expensive and bulkier.
*   The peak inverse voltage (PIV) across each diode is twice the peak voltage of the secondary winding, which means diodes with higher voltage ratings are needed.

**Analogy:** Imagine a tug-of-war. In a half-wave, only one person pulls for half the time. In a full-wave with a center tap, you have two people pulling in the same direction, but they take turns.

#### 2.3 Full-Wave Bridge Rectifier

This is the most common and preferred type of rectifier for DC power supplies. It uses four diodes arranged in a bridge configuration. It does not require a center-tapped transformer, making it more economical and efficient.

**Circuit Diagram:**

```
      AC Input
          |
        -----
       |     |  Transformer Secondary
       -----
        | | |
        |   D1-----|
        |       |  |
      -----     -----
     |     |   |     | Diode Bridge
     -----   -----
        | | |       |
        |   D3-----|----- Load Resistor (RL) ------
        |       |                               |
        -----   -----                           ---
       |     | |     |                         GND
       -----   -----
        |   D2-----|
        |       |
        -----
       |     |
       -----
          |
          |
```

**Working:**

Let's trace the current path:

*   **Positive Half-Cycle (of the AC input):** The top of the transformer secondary is positive, and the bottom is negative.
    *   Diodes $D_1$ and $D_3$ are forward-biased.
    *   Diodes $D_2$ and $D_4$ are reverse-biased.
    *   Current flows from the top of the secondary, through $D_1$, through $R_L$ (from top to bottom), through $D_3$, and back to the bottom of the secondary.
*   **Negative Half-Cycle (of the AC input):** The top of the transformer secondary is negative, and the bottom is positive.
    *   Diodes $D_2$ and $D_4$ are forward-biased.
    *   Diodes $D_1$ and $D_3$ are reverse-biased.
    *   Current flows from the bottom of the secondary, through $D_4$, through $R_L$ (still from top to bottom), through $D_2$, and back to the top of the secondary.

Again, in both half-cycles, the current through the load resistor $R_L$ flows in the same direction.

**Output Waveform:** Similar to the full-wave center-tapped rectifier, the output is a series of positive pulses. The key advantage is that the diodes $D_1$ and $D_3$ (or $D_2$ and $D_4$) conduct during their respective half-cycles, and the voltage across each diode is half of the PIV of the full-wave center-tapped rectifier.

**Pros:**
*   Most efficient among the basic rectifier types.
*   Higher average DC output voltage.
*   Uses a standard transformer (no center tap needed).
*   Lower PIV required for each diode compared to center-tapped full-wave.

**Cons:**
*   Requires four diodes.
*   Slightly more complex circuit than half-wave.

**Remember this:** The bridge rectifier is the workhorse for most DC power supplies because of its efficiency and use of a standard transformer.

### 3. Ripple Factor: Measuring the "Bumps" in DC

After rectification, the output is pulsating DC. This "pulsating" nature is characterized by **ripple**. Ripple is the AC component that remains superimposed on the desired DC output. Imagine a perfectly flat road (pure DC) versus a road with many speed bumps (pulsating DC). The speed bumps represent the ripple.

The **ripple factor** ($\gamma$) is a measure of how much ripple is present in the rectified output. A lower ripple factor means a smoother DC output. Ideally, for a pure DC voltage, the ripple factor would be zero.

For exam purposes, you'll often see formulas for ripple factor.

#### 3.1 Ripple Factor Without Filter

*   **Half-Wave Rectifier:** The output is a series of pulses separated by zero voltage periods.
    *   Formula: $\gamma_{HW} \approx 1.21$
    *   This is a relatively high ripple factor, indicating significant pulsating DC.

*   **Full-Wave Rectifier (Center-Tapped or Bridge):** The output pulses are closer together, with no zero voltage periods between them.
    *   Formula: $\gamma_{FW} \approx 0.482$
    *   This is much lower than the half-wave rectifier, meaning the output is smoother.

**Key takeaway:** Full-wave rectification inherently produces less ripple than half-wave rectification. This is why we prefer full-wave rectifiers.

#### 3.2 Ripple Factor With Capacitor Filter

To smooth out the pulsating DC from the rectifier, we add a filter, typically a capacitor ($C$), connected in parallel with the load resistor ($R_L$).

**Circuit Diagram (Full-Wave Bridge Rectifier with Capacitor Filter):**

```
      AC Input
          |
        -----
       |     |  Transformer Secondary
       -----
        | | |
        |   D1-----|
        |       |  |
      -----     -----
     |     |   |     | Diode Bridge
     -----   -----
        | | |       |
        |   D3-----|----- Load Resistor (RL) ------||---- C (Filter Capacitor)
        |       |                               |    |
        -----   -----                           ---  ---
       |     | |     |                         GND  GND
       -----   -----
        |   D2-----|
        |       |
        -----
       |     |
       -----
          |
          |
```

**Working of Capacitor Filter:**

The capacitor acts like a small reservoir.

1.  **Charging:** During the initial part of a positive pulse from the rectifier, the voltage increases. The capacitor charges up to this peak voltage.
2.  **Discharging:** As the rectifier output voltage starts to fall, the capacitor, which has stored charge, begins to discharge through the load resistor ($R_L$).
3.  **Recharging:** Before the capacitor discharges too much, the next rectified pulse arrives, and the capacitor starts charging again, "topping up" its charge.

This continuous cycle of charging and discharging smooths out the voltage. The output voltage will still have a small ripple, but it will be significantly less than without the capacitor.

**Ripple Factor with Capacitor Filter:**

The ripple factor depends on the values of the capacitor ($C$) and the load resistance ($R_L$), as well as the frequency of the AC input. For a **full-wave rectifier** with a capacitor filter, the ripple factor is approximately:

*   Formula: $\gamma \approx \frac{1}{4\sqrt{3} f R_L C}$ (This is a simplified approximation for lightly loaded conditions)

Where:
*   $f$ is the frequency of the AC input (e.g., 50 Hz or 60 Hz).
*   $R_L$ is the load resistance.
*   $C$ is the filter capacitance.

**Key points about the formula:**

*   **Larger Capacitance ($C$) $\rightarrow$ Lower Ripple Factor:** A larger capacitor can store more charge, leading to slower discharge and less voltage drop between charging pulses.
*   **Larger Load Resistance ($R_L$) $\rightarrow$ Lower Ripple Factor:** With a higher load resistance, less current is drawn from the capacitor, so it discharges more slowly.
*   **Higher Frequency ($f$) $\rightarrow$ Lower Ripple Factor:** For full-wave rectifiers, the frequency is twice the mains frequency. Higher frequency means the charging pulses happen more often, giving the capacitor less time to discharge.

**Example:** Imagine filling a leaky bucket. Without filtering, it’s like just pouring water in bursts. With a filter capacitor, it’s like having a small holding tank that smooths out the flow. The bigger the tank (larger capacitor), the smoother the output water.

**Exam Tip:** Be able to explain *why* a capacitor smooths the output. Also, understand how changing $C$ or $R_L$ affects the ripple factor. The approximation formula is important. For half-wave rectifiers with a capacitor, the ripple factor is approximately $\gamma \approx \frac{1}{2\sqrt{3} f R_L C}$ (double the ripple of full-wave for same $C$ and $R_L$).

### Connecting to Course Outcomes

Let's summarize how this topic relates to our Course Outcomes:

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits:** We've used concepts like voltage, current, resistance, and the behavior of diodes (which obey specific voltage-current characteristics) to analyze rectifier circuits. Understanding how AC is transformed and then converted to DC is a direct application of circuit analysis.
*   **CO4: Describe the fundamental concepts of electronic components and devices:** This topic is fundamentally about the **diode** and its behavior as a switch. We've discussed its role in rectifying AC signals. We also touched upon **capacitors** as filtering elements, which are crucial passive electronic components.

### Summary of Key Concepts

*   **DC Power Supply:** Converts AC to DC.
*   **Block Diagram:** Transformer -> Rectifier -> Filter -> Regulator.
*   **Diodes:** One-way devices for current. Essential for rectification.
*   **Rectifiers:** Convert AC to pulsating DC.
    *   **Half-Wave:** Uses one diode, rectifies only half the AC cycle. Less efficient, high ripple.
    *   **Full-Wave (Center-Tapped):** Uses two diodes and a center-tapped transformer. Rectifies both cycles, more efficient, less ripple than half-wave.
    *   **Full-Wave Bridge:** Uses four diodes, no center-tapped transformer. Most efficient, commonly used.
*   **Ripple Factor ($\gamma$):** Measures the AC component in the DC output. Lower is better.
*   **Capacitor Filter:** Smooths pulsating DC by storing and releasing charge. Reduces ripple significantly. The ripple factor is inversely proportional to $f$, $R_L$, and $C$.

Understanding these concepts is vital for anyone entering the field of electrical and electronics engineering. They are the foundation upon which more complex circuits and systems are built.

---

## Sample Questions with Answers

**Q1. What is the primary function of a rectifier in a DC power supply?**

**Answer:** The primary function of a rectifier is to convert alternating current (AC) into direct current (DC). It achieves this by allowing current to flow in only one direction, effectively blocking or inverting the negative half-cycles of the AC input.

**Q2. Draw the circuit diagram of a full-wave bridge rectifier and explain its working during the positive and negative half-cycles of the input AC voltage.**

**Answer:**
*(Refer to the Circuit Diagram for Full-Wave Bridge Rectifier above)*

**Working:**
*   **Positive Half-Cycle:** When the top terminal of the transformer secondary is positive and the bottom is negative, diodes $D_1$ and $D_3$ are forward-biased and conduct. Current flows from the transformer secondary, through $D_1$, through the load resistor ($R_L$), through $D_3$, and back to the transformer secondary. Diodes $D_2$ and $D_4$ are reverse-biased and block current.
*   **Negative Half-Cycle:** When the top terminal becomes negative and the bottom becomes positive, diodes $D_2$ and $D_4$ are forward-biased and conduct. Current flows from the transformer secondary, through $D_4$, through the load resistor ($R_L$) (in the same direction as before), through $D_2$, and back to the transformer secondary. Diodes $D_1$ and $D_3$ are reverse-biased.
In both half-cycles, the current through $R_L$ flows in the same direction, resulting in a unidirectional pulsating DC output.

**Q3. How does a capacitor filter reduce the ripple in a rectified DC output? Explain with reference to charging and discharging.**

**Answer:** A capacitor filter is connected in parallel with the load resistor. During the charging phase (when the rectifier output voltage is rising), the capacitor charges up to the peak voltage. As the rectifier output voltage starts to fall, the capacitor begins to discharge through the load resistor, providing a current path. This discharge action prevents the output voltage from dropping as sharply as it would without the capacitor. Before the capacitor discharges too much, the next positive pulse from the rectifier arrives, and the capacitor recharges. This continuous cycle of charging and discharging smooths out the output voltage, significantly reducing the ripple. The capacitor essentially acts as a temporary energy reservoir, filling in the "dips" between the rectified pulses.

**Q4. Compare the ripple factors of half-wave and full-wave rectifiers (without filters).**

**Answer:** A half-wave rectifier has a significantly higher ripple factor (approximately 1.21) compared to a full-wave rectifier (approximately 0.482). This is because the half-wave rectifier only utilizes half of the input AC waveform, leaving larger gaps in its output, which results in more pronounced pulsations (AC component) in the DC output. The full-wave rectifier utilizes both halves of the AC cycle, filling in these gaps and producing a smoother output with less ripple.

**Q5. If you increase the capacitance of the filter capacitor in a full-wave rectifier circuit, what happens to the ripple factor? Justify your answer.**

**Answer:** If you increase the capacitance of the filter capacitor, the ripple factor decreases. This is because a larger capacitance allows the capacitor to store more charge. Consequently, it discharges more slowly between charging pulses from the rectifier. A slower discharge means the voltage drop across the capacitor (and hence the ripple voltage) is smaller. Mathematically, the ripple factor is inversely proportional to capacitance ($ \gamma \approx \frac{1}{4\sqrt{3} f R_L C} $), so increasing $C$ leads to a decrease in $\gamma$.
