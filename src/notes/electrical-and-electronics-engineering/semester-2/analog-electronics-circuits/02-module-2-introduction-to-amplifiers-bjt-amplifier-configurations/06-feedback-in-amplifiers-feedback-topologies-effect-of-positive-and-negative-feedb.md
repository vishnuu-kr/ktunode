---
title: "Feedback in amplifiers  – Feedback topologies - Effect of positive and negative feedbacks"
subject: "ANALOG ELECTRONICS CIRCUITS"
module: "Module 2: Introduction to Amplifiers  – BJT amplifier configurations – "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213e9ece2bdd875f95b4"
status: "completed"
scrapedAt: "2026-05-23T16:04:25.056Z"
---
Welcome everyone to Module 2, where we've been diving into the exciting world of BJT amplifier configurations. Today, we're going to tackle a crucial concept that underpins the performance and stability of almost *every* amplifier you'll ever encounter: **Feedback in Amplifiers**. This is where we transition from simply making a signal bigger to making it bigger *reliably* and *predictably*.

Think about it: if you build a simple amplifier, it might work great in the lab under ideal conditions. But what happens when the temperature changes? Or when the power supply voltage fluctuates? Or when you connect a slightly different load? Your amplification might go haywire! Feedback is our secret weapon to combat these real-world imperfections. It’s like having a skilled conductor guiding an orchestra – ensuring everyone plays together harmoniously, even when individual musicians have minor variations.

### Understanding Feedback: The Core Idea

At its heart, feedback is simply taking a portion of the amplifier's output signal and feeding it back to the input. It's like checking your work as you go along. You produce something, then you look at it, compare it to what you *wanted* to produce, and make adjustments.

This concept is incredibly powerful and is directly linked to **CO2: Model BJT and FET amplifier circuits** and **CO3: Design amplifier and oscillator circuits using BJT**. By understanding feedback, we gain the tools to design amplifiers that are stable, predictable, and perform as intended, moving beyond just basic modeling to actual design.

There are two fundamental types of feedback, and understanding their distinct effects is paramount:

1.  **Negative Feedback:** This is the workhorse of the electronics world when it comes to amplifiers. As the name suggests, a portion of the output is fed back in such a way that it *opposes* the original input signal.
2.  **Positive Feedback:** This type of feedback reinforces the input signal. While it has its uses, particularly in oscillators (which we'll touch upon in later modules, linking to **CO3**), it generally makes amplifiers unstable if not carefully controlled.

Let's delve into each of these.

### Negative Feedback: The Amplifier's Best Friend

Negative feedback is all about improving the *quality* of amplification. It’s like a thermostat in your house. If the room gets too hot (output is too high), the thermostat signals the heater to turn off or reduce its output. If it gets too cold (output is too low), it signals the heater to turn on more. It’s a continuous process of correction.

**Key Effects of Negative Feedback:**

Negative feedback, while often reducing the overall gain, brings about several significant improvements that are invaluable for practical amplifier design. These are concepts you'll definitely see tested in exams, often asking to explain *why* negative feedback is used.

*   **Stabilization of Gain:** This is perhaps the most significant benefit. Unwanted variations in the amplifier's components (like transistor characteristics changing with temperature or manufacturing tolerances) can cause the gain to drift. Negative feedback makes the amplifier's gain much less dependent on these variations.
    *   **How it works:** Imagine your amplifier's open-loop gain (the gain without feedback) is $A_o$. Let the fraction of the output fed back to the input be $\beta$. The feedback is negative, so the actual input to the amplifier is $V_{in} - \beta V_{out}$. The output is then $V_{out} = A_o (V_{in} - \beta V_{out})$. Rearranging this, we get $V_{out} (1 + A_o \beta) = A_o V_{in}$, so the closed-loop gain $A_{cl} = \frac{V_{out}}{V_{in}} = \frac{A_o}{1 + A_o \beta}$.
    *   **The Magic:** Look at that denominator: $1 + A_o \beta$. If $A_o \beta$ is very large (which is usually the case in well-designed negative feedback systems), the gain $A_{cl}$ becomes approximately $\frac{A_o}{A_o \beta} = \frac{1}{\beta}$. This means the closed-loop gain is now primarily determined by the feedback network (which can be built with very stable resistors and capacitors), and not by the unpredictable open-loop gain $A_o$. This is crucial for predictable performance, aligning with **CO3**.
    *   **Analogy:** Think of a seasoned chef adjusting a recipe. The initial ingredients (open-loop gain) might vary slightly, but their experience (feedback loop) ensures the final dish (closed-loop gain) always tastes consistently good.

*   **Reduction of Distortion:** Amplifiers can introduce unwanted harmonics or non-linearities into the signal. Negative feedback can significantly reduce these.
    *   **How it works:** Any distortion produced in the amplifier's active devices is also present in the output signal. A portion of this distorted output is fed back. Since the feedback is negative, the feedback signal *subtracts* from the original input, and it also subtracts the distortion components. The amplifier then amplifies this "corrected" input, effectively canceling out a good portion of the distortion that would have otherwise appeared at the output.
    *   **Relatable Example:** Imagine you're trying to sing a specific note, but your voice cracks a little (distortion). If you have someone listening who immediately tells you, "Hey, you're cracking a bit," you can adjust your vocal effort on the next attempt. Negative feedback does something similar for electronic signals.

*   **Increase in Bandwidth:** The bandwidth of an amplifier is the range of frequencies over which it operates effectively. Negative feedback typically extends this range.
    *   **How it works:** The gain-bandwidth product of an amplifier is often constant. When negative feedback reduces the mid-band gain ($A_{cl} \approx 1/\beta$), it proportionally increases the bandwidth. So, if you halve the gain, you effectively double the bandwidth. This means your amplifier can faithfully amplify a wider range of frequencies.
    *   **Exam Tip:** You might be asked to explain the "gain-bandwidth product" relationship. It's a fundamental trade-off that negative feedback helps manage.

*   **Reduction of Noise:** Any noise generated within the amplifier itself is also fed back. If the feedback network is designed to be quiet, the overall noise figure of the amplifier can be improved.
    *   **How it works:** Similar to distortion, amplifier noise is part of the output signal. Negative feedback subtracts this noise from the input, and the amplifier's subsequent amplification process can effectively reduce the impact of the internal noise.

*   **Modification of Input and Output Impedances:** This is where the specific feedback topology becomes very important, which we'll discuss next. Negative feedback can be used to either increase or decrease the input and output impedances, allowing us to match the amplifier to its source and load more effectively. This is a crucial aspect of **CO3** when designing systems.

**So, in summary for negative feedback:** It's the go-to for stability, accuracy, and linearity, even at the cost of some initial gain. It's about making your amplifier robust and predictable in the face of real-world conditions.

### Feedback Topologies: How We Connect the Loop

Now, how do we actually implement this feedback? We need to take a portion of the output and feed it back to the input. The way we sample the output and the way we inject the feedback signal at the input determines the **feedback topology**. These topologies have a profound impact on the amplifier's input and output impedance, which is a key aspect of our learning outcomes.

There are four fundamental topologies, often categorized by what is in *series* or *parallel* with the signal at the input and output.

1.  **Voltage-Series Feedback (also known as Series-Shunt):**
    *   **Sampling:** A *fraction of the output voltage* is sampled. Think of taking a direct "look" at the output voltage.
    *   **Injection:** This sampled voltage is fed back in *series* with the input voltage. This means the feedback voltage is added or subtracted directly from the input voltage source.
    *   **Effect on Impedances:**
        *   **Input Impedance ($Z_{in}$):** *Increases*. Because the feedback voltage is in series with the input, it subtracts from the voltage presented to the amplifier's input terminals. For a given input current, the voltage across the amplifier's input terminals will appear higher, indicating a higher input impedance.
        *   **Output Impedance ($Z_{out}$):** *Increases*. The feedback signal, being a voltage, is fed back to the amplifier's output in opposition to the output voltage. This effectively reduces the output voltage for a given change in output current, making the amplifier behave more like a current source, hence increasing its output impedance.
    *   **Applications:** This topology is commonly used in common-emitter or common-source amplifiers, which typically have low input impedance and moderate output impedance. Voltage-series feedback helps to boost the input impedance, making it less of a load on the preceding stage.
    *   **Analogy:** Imagine you're driving a car, and you have a sensor that measures your speed. This speed reading is fed back to your steering wheel in a way that if you're going too fast (output voltage is too high), it subtly makes the steering wheel feel heavier (series feedback increases input impedance), encouraging you to slow down or adjust.

2.  **Voltage-Voltage Feedback (also known as Shunt-Shunt):**
    *   **Sampling:** A *fraction of the output voltage* is sampled.
    *   **Injection:** This sampled voltage is fed back in *parallel* (shunt) with the input current. This means the feedback current is diverted into the input circuitry, effectively reducing the net input current.
    *   **Effect on Impedances:**
        *   **Input Impedance ($Z_{in}$):** *Decreases*. The feedback current being in parallel with the input signal current means that for a given input voltage, less current flows into the amplifier itself, thus reducing the input impedance.
        *   **Output Impedance ($Z_{out}$):** *Decreases*. The feedback voltage is applied across the output, effectively reducing the output voltage for a given output current. This makes the amplifier behave more like a voltage source, decreasing its output impedance.
    *   **Applications:** This topology is suitable for amplifiers that need a low output impedance and where the input impedance is not a primary concern, or perhaps needs to be lowered to drive a low-impedance load. Op-amp voltage followers and common-collector (emitter-follower) amplifiers often exhibit characteristics similar to this.
    *   **Analogy:** Think of a water pipe system. If you divert some water flow (feedback current) away from the main flow just before it enters a pump (input), the pump receives less water for the same pressure, indicating a lower effective input impedance.

3.  **Current-Series Feedback (also known as Series-Series):**
    *   **Sampling:** A *fraction of the output current* is sampled. This is often done by placing a small resistor in series with the output and measuring the voltage across it, which is proportional to the output current.
    *   **Injection:** This sampled current (or rather, a voltage proportional to it, which then drives a current) is fed back in *series* with the input voltage.
    *   **Effect on Impedances:**
        *   **Input Impedance ($Z_{in}$):** *Increases*. Similar to voltage-series, the feedback acts in series with the input voltage.
        *   **Output Impedance ($Z_{out}$):** *Increases*. The feedback voltage, being in series with the output, opposes changes in output voltage, making the amplifier behave more like a current source, thus increasing output impedance.
    *   **Applications:** This topology is ideal for current amplifiers and is characteristic of common-base or common-gate amplifiers, which inherently have low input and high output impedance. Current-series feedback further enhances the high output impedance.
    *   **Analogy:** Imagine you are trying to maintain a constant current through a heating element. If the current starts to drop (output current decreases), you sense this drop and actively increase the voltage supplied to the heating element (feedback in series with input), which in turn increases the current.

4.  **Current-Current Feedback (also known as Shunt-Shunt):**
    *   **Sampling:** A *fraction of the output current* is sampled.
    *   **Injection:** This sampled current is fed back in *parallel* (shunt) with the input current.
    *   **Effect on Impedances:**
        *   **Input Impedance ($Z_{in}$):** *Decreases*. The feedback current is shunted across the input, effectively reducing the current going into the amplifier for a given input voltage.
        *   **Output Impedance ($Z_{out}$):** *Decreases*. The feedback current injects into the output in parallel, effectively reducing the output current for a given output voltage, making it more like a voltage source.
    *   **Applications:** This is suitable for current amplifiers where a low output impedance is desired. Common-collector amplifiers can exhibit characteristics of this topology when driven by a current source.
    *   **Analogy:** Consider a crowd control scenario. If the flow of people (output current) is too high at an exit, you might open up more pathways (feedback current in parallel) to disperse the crowd, reducing the bottleneck (lowering output impedance).

**Key Takeaway on Topologies:** The choice of topology dictates how the amplifier interacts with its source and load, making it a fundamental design decision for achieving desired impedance matching and performance characteristics, directly contributing to **CO3**.

### Positive Feedback: The Path to Oscillation (and Instability)

Now, let's talk about positive feedback. Unlike negative feedback, positive feedback reinforces the input signal. A portion of the output is fed back to the input in phase with the original signal.

**Key Effects of Positive Feedback:**

*   **Increased Gain:** The gain of the amplifier increases. If the open-loop gain is $A_o$ and the feedback factor is $\beta$, the closed-loop gain becomes $A_{cl} = \frac{A_o}{1 - A_o \beta}$. Notice the denominator is $1 - A_o \beta$.
*   **Instability and Oscillation:** This is the most critical effect. If the loop gain ($A_o \beta$) reaches unity (i.e., $A_o \beta = 1$), the denominator becomes zero, and the gain theoretically becomes infinite. In reality, this means the amplifier will start oscillating. The smallest fluctuation or noise signal at the input will be amplified and fed back, amplified again, and so on, until the amplifier is driven into saturation, producing a continuous, self-sustaining waveform. This is the basis of oscillators, as mentioned in **CO3**.
    *   **Analogy:** Imagine someone with a microphone too close to a speaker. The sound from the speaker is picked up by the microphone, amplified, sent back to the speaker, picked up again, amplified again... and you get that piercing screech (feedback howl). That's positive feedback in action!

*   **Reduced Bandwidth:** Positive feedback generally reduces the bandwidth of the amplifier.
*   **Increased Distortion:** While negative feedback reduces distortion, positive feedback tends to increase it, especially as the gain approaches the point of oscillation.

**When is Positive Feedback Useful?**

While detrimental to stable amplification, positive feedback is essential for **oscillators**. By carefully controlling the amount of positive feedback and ensuring the phase shift around the loop is 0 or 360 degrees at a particular frequency, we can create circuits that generate sinusoidal or other waveforms without an external input signal. This is a core application discussed in **CO3**.

**The Barkhausen Criterion:** For sustained oscillations in an oscillator circuit, the Barkhausen criterion states that the loop gain ($A_o \beta$) must have a magnitude of at least 1, and the total phase shift around the feedback loop must be $0^\circ$ or $n \times 360^\circ$ (where n is an integer).

### Connecting Feedback to Course Outcomes: A Quick Recap

*   **CO2 (Model BJT and FET amplifier circuits):** Understanding feedback helps us model the *behavior* of these amplifiers more accurately, especially their stability and frequency response. We can't truly model an amplifier without considering how feedback affects its performance.
*   **CO3 (Design amplifier and oscillator circuits using BJT):** This is where feedback truly shines. Negative feedback is key to designing amplifiers with predictable gain, low distortion, and wide bandwidth. Positive feedback is the foundation for designing oscillators. The choice of feedback topology directly impacts how we design these circuits to interface with other components.
*   **CO1, CO4, CO5 (Diode circuits, Op-Amps):** While this module focuses on BJTs, the fundamental principles of feedback apply universally. Diode circuits can be used in feedback networks, and Op-amps are heavily reliant on negative feedback for their precise operation in various applications.

Remember, feedback is not just an add-on; it's an integral part of amplifier and oscillator design that allows us to tailor performance to specific needs.

---

### Sample Questions and Answers

**Q1. Explain the primary reason why negative feedback is extensively used in amplifier circuits.**

**Answer:** The primary reason for using negative feedback is to **stabilize the amplifier's gain**. It makes the closed-loop gain much less sensitive to variations in the amplifier's internal parameters (like transistor characteristics affected by temperature or manufacturing tolerances) and changes in load impedance. Instead, the gain becomes predominantly dependent on the feedback network, which can be built with highly stable components.

**Q2. What are the two main effects of positive feedback on an amplifier's behavior?**

**Answer:** The two main effects of positive feedback are:
1.  **Increased Gain:** The amplifier's gain is increased.
2.  **Instability/Oscillation:** If the loop gain ($A_o \beta$) reaches unity, the amplifier becomes unstable and will start to oscillate, generating its own signal. This is the principle behind oscillators.

**Q3. A voltage-series feedback amplifier is used. How does this topology affect the input and output impedances? Explain briefly.**

**Answer:** In a **voltage-series feedback** topology:
*   **Input Impedance:** Increases. The feedback voltage is in series with the input signal, effectively increasing the impedance presented to the source.
*   **Output Impedance:** Increases. The feedback voltage opposes changes in output voltage, making the amplifier behave more like a current source (higher output impedance).

**Q4. Why is it said that negative feedback reduces distortion? Elaborate on the mechanism.**

**Answer:** Negative feedback reduces distortion by ensuring that any distortion created within the amplifier is also fed back to the input. Since the feedback is negative, this fed-back distortion signal effectively subtracts from the original input signal. Consequently, the amplifier amplifies a "corrected" input signal, and the distortion that would have been produced from the original signal is largely canceled out. Essentially, the negative feedback loop works to counteract the non-linearities of the amplifier.

**Q5. Consider an amplifier with an open-loop gain ($A_o$) of 1000. If a negative feedback network with a feedback factor ($\beta$) of 0.1 is applied, what is the closed-loop gain ($A_{cl}$)? What happens to the gain stability if $A_o$ changes by 20% due to temperature?**

**Answer:**
The closed-loop gain ($A_{cl}$) with negative feedback is given by:
$A_{cl} = \frac{A_o}{1 + A_o \beta}$

Given: $A_o = 1000$, $\beta = 0.1$

$A_{cl} = \frac{1000}{1 + (1000 \times 0.1)} = \frac{1000}{1 + 100} = \frac{1000}{101} \approx 9.90$

Now, let's see what happens if $A_o$ changes by 20%.
New $A_o = 1000 \times 1.20 = 1200$ (20% increase)
New $A_{cl} = \frac{1200}{1 + (1200 \times 0.1)} = \frac{1200}{1 + 120} = \frac{1200}{121} \approx 9.92$

Or if $A_o$ decreases by 20%:
New $A_o = 1000 \times 0.80 = 800$ (20% decrease)
New $A_{cl} = \frac{800}{1 + (800 \times 0.1)} = \frac{800}{1 + 80} = \frac{800}{81} \approx 9.88$

**Analysis of Gain Stability:**
The original gain was approximately 9.90. With a 20% change in $A_o$, the closed-loop gain only changed by about $0.02$ (from 9.90 to 9.92 or 9.88). This is a very small percentage change compared to the 20% change in open-loop gain. This demonstrates that negative feedback significantly **stabilizes the gain**, making it much less sensitive to variations in the amplifier's open-loop gain. The gain is now primarily dictated by $1/\beta = 1/0.1 = 10$, which is very close to our calculated values. This illustrates the practical benefit of negative feedback for predictable amplification.
