---
title: "Negative feedback in Op-amps"
subject: "ANALOG ELECTRONICS CIRCUITS"
module: "Module 3: Operational Amplifiers : Block diagram of Op"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213e9ece2bdd875f95b9"
status: "completed"
scrapedAt: "2026-05-23T16:04:28.915Z"
---
# Module 3: Operational Amplifiers – Negative Feedback in Op-Amps

Welcome back, everyone! In our journey through Analog Electronics Circuits, we've built a solid foundation with understanding basic semiconductor devices and then moved on to the incredibly versatile Operational Amplifier, or Op-Amp, as it's commonly known. We've touched upon its block diagram, understanding its internal components like differential amplifiers, gain stages, and output stages. Now, we're diving deep into one of the most crucial aspects that unlock the true power of op-amps: **Negative Feedback**.

This topic is absolutely central to op-amp circuits and directly relates to **Course Outcome 4 (Explain the basic concepts of Operational amplifier (OPAMP))** and **Course Outcome 5 (Design and develop various OPAMP application circuits)**. Understanding negative feedback allows us to move from simply knowing what an op-amp *is* to knowing how to *use* it effectively and predictably. It’s where the "application" part of CO5 really begins!

## What is Feedback Anyway?

Before we talk about *negative* feedback, let's think about feedback in general. Imagine you're learning to ride a bicycle. As you pedal, you naturally adjust your steering based on how the bike is leaning, right? If you start leaning too far left, you instinctively steer a little to the left to correct yourself. That's feedback! You're taking information about the output (the bike's lean) and using it to influence the input (your steering action).

In electronic circuits, feedback is simply taking a portion of the output signal and feeding it back to the input. This can be done in two main ways:

*   **Positive Feedback:** The fed-back signal reinforces the original input signal. Think of a microphone placed too close to a speaker – you get that loud, squealing howl. The sound from the speaker is fed back to the microphone, amplified, sent back to the speaker, amplified again, and so on. It leads to instability and is often used in oscillators.
*   **Negative Feedback:** The fed-back signal opposes or subtracts from the original input signal. This is the star of our show today, and it's what makes op-amps so incredibly useful in linear applications.

## The Magic of Negative Feedback in Op-Amps

So, why is negative feedback so special for op-amps? Well, remember that an op-amp, in its open-loop configuration (without any feedback), has an *enormous* open-loop gain ($A_{OL}$). We're talking hundreds of thousands, even millions! This massive gain, while impressive, makes the op-amp very difficult to control. A tiny difference between the inverting and non-inverting inputs will be amplified so much that the output will saturate, either going to the positive or negative power supply rail. It’s like trying to steer a race car with a single, jerky twitch of the steering wheel – you'll likely spin out.

Negative feedback tames this wild, high gain. It allows us to:

1.  **Stabilize the circuit:** It makes the circuit behave predictably.
2.  **Control the gain precisely:** We can set the circuit's gain to a specific, desired value, largely independent of the op-amp's inherent (and often variable) open-loop gain.
3.  **Improve bandwidth:** The range of frequencies over which the circuit operates effectively is increased.
4.  **Reduce distortion:** Non-linearities in the op-amp are minimized.
5.  **Affect input and output impedances:** Depending on the feedback configuration, it can either increase or decrease input/output impedances, which is crucial for matching circuits.

Let's look at how this works, drawing from concepts in books like **"Linear Integrated Circuits" by Choudhury R.** and **"Op-Amps and Linear Integrated Circuits" by Gayakwad R. A.**

### The General Negative Feedback Structure

Imagine an op-amp as a black box with a very high gain, $A_{OL}$. Let $V_{in}$ be the input voltage, $V_{out}$ be the output voltage, and $V_d$ be the differential input voltage ($V_d = V_+ - V_-$). Ideally, $V_{out} = A_{OL} \cdot V_d$.

Now, with negative feedback, we take a fraction of the output voltage, let's call this fraction $\beta \cdot V_{out}$, and feed it back to the *inverting input* (-). The non-inverting input (+) is typically where the actual input signal is applied, or it might be connected to ground.

So, the voltage at the inverting input is no longer zero. It's now influenced by the feedback. The effective differential input voltage becomes:

$V_d = V_+ - V_-$

If $V_+$ is our input signal $V_{in}$ and the feedback is applied to the inverting terminal, then the voltage at the inverting terminal is $V_- = \beta \cdot V_{out}$.

So, $V_d = V_{in} - (\beta \cdot V_{out})$.

The op-amp still amplifies this $V_d$:

$V_{out} = A_{OL} \cdot V_d = A_{OL} \cdot (V_{in} - \beta \cdot V_{out})$

Now, we can rearrange this equation to find the closed-loop gain, $A_{CL} = V_{out} / V_{in}$:

$V_{out} = A_{OL} V_{in} - A_{OL} \beta V_{out}$
$V_{out} + A_{OL} \beta V_{out} = A_{OL} V_{in}$
$V_{out} (1 + A_{OL} \beta) = A_{OL} V_{in}$
$A_{CL} = \frac{V_{out}}{V_{in}} = \frac{A_{OL}}{1 + A_{OL} \beta}$

This is a fundamental equation for negative feedback circuits. Now, remember that $A_{OL}$ is huge. So, $A_{OL} \beta$ is likely much, much greater than 1.

Therefore, we can approximate the closed-loop gain as:

$A_{CL} \approx \frac{A_{OL}}{A_{OL} \beta} = \frac{1}{\beta}$

This is the **power of negative feedback**: the closed-loop gain $A_{CL}$ is determined primarily by the feedback factor $\beta$, which is set by passive components like resistors and capacitors. These components are much more stable and predictable than the op-amp's open-loop gain.

Think of it like this: You want a precise magnifying glass. A raw lens from a telescope might have a very high, but slightly imperfect, magnification. If you mount it in a tube with a carefully designed focusing mechanism (the feedback network), you can control the final magnification to be exactly what you need, and it won't drift much with temperature or manufacturing variations of the lens itself. The focusing mechanism is our $\beta$.

### Common Modes of Negative Feedback

There are four basic ways to apply negative feedback, categorized by whether the feedback signal is a voltage or current, and whether it's applied to the voltage or current input of the op-amp. However, for op-amps, the most common and conceptually easier ones to grasp initially are:

1.  **Voltage-Series Feedback (Series-Shunt Feedback):** The feedback signal is a *voltage* proportional to the output *voltage*, and it's applied in *series* with the input signal. This is the most common type and leads to circuits like the non-inverting and inverting amplifiers.
2.  **Voltage-Shunt Feedback:** The feedback signal is a *voltage* proportional to the output *voltage*, and it's applied in *shunt* (parallel) with the input signal. This is less common for basic op-amp configurations but is the basis for some amplifier designs.

For our purposes in understanding basic op-amp applications, we'll focus on the implications of voltage-series feedback, as it underpins many foundational circuits.

## Key Concepts and Their Impact

Let's break down *how* negative feedback achieves those benefits we listed earlier:

### 1. Stabilization and Gain Control (The $1/\beta$ Rule)

As we saw, $A_{CL} \approx 1/\beta$. This is a cornerstone of op-amp circuit design. If we want a voltage gain of, say, 10, we just need to design our feedback network so that $\beta = 1/10 = 0.1$. This is typically achieved with a voltage divider using resistors.

*   **Relatable Example:** Imagine you have a powerful engine (the op-amp's $A_{OL}$), but you need to drive a small toy car at a controlled speed. You don't just connect the engine directly; you use a gearbox (the feedback network, $\beta$) to reduce the speed to a manageable and predictable level. The gearbox ratio determines the final speed, not the raw power of the engine.

This is crucial for **CO5**, as it's the primary way we design amplifier circuits with specific gain requirements.

### 2. Impact on Input Impedance ($Z_{in}$)

Negative feedback, particularly voltage-series feedback, generally **increases** the input impedance of the circuit.

Let's consider an ideal op-amp with infinite input impedance and zero output impedance. In a voltage-series feedback configuration, the input voltage is applied to the non-inverting terminal, and the feedback voltage is subtracted at the inverting terminal. The op-amp's differential input impedance is $Z_{id}$.

The voltage appearing across the op-amp's input terminals is $V_d = V_{in} - V_{feedback}$. Since $V_d$ is now a fraction of $V_{in}$ (because of feedback), and the current drawn by the op-amp's input is $I_{in} = V_d / Z_{id}$, the effective input impedance seen by the source becomes $Z_{in(feedback)} = V_{in} / I_{in}$.

Substituting $V_d$: $I_{in} = (V_{in} - V_{feedback}) / Z_{id}$.
Since $V_{feedback} = \beta V_{out} = \beta A_{CL} V_{in}$,
$I_{in} = (V_{in} - \beta A_{CL} V_{in}) / Z_{id} = V_{in} (1 - \beta A_{CL}) / Z_{id}$.

So, $Z_{in(feedback)} = V_{in} / I_{in} = Z_{id} / (1 - \beta A_{CL})$.
Since $A_{CL} = A_{OL} / (1 + A_{OL}\beta)$, $1 - \beta A_{CL} = 1 - \beta \frac{A_{OL}}{1 + A_{OL}\beta} = \frac{1 + A_{OL}\beta - \beta A_{OL}}{1 + A_{OL}\beta} = \frac{1}{1 + A_{OL}\beta}$.

Therefore, $Z_{in(feedback)} = Z_{id} \cdot (1 + A_{OL}\beta)$.

Because $A_{OL}$ is very large, $(1 + A_{OL}\beta)$ is also very large. So, the input impedance is significantly boosted.

*   **Relatable Example:** Think of trying to push a heavy box. If you push directly, it's hard work (low input impedance – you need to supply a lot of "force" for a little movement). If you use a lever (the feedback network), you multiply your effort, and a small "push" on the lever results in a much larger movement of the box. The lever system makes it *easier* for you to get the box moving, akin to a higher input impedance allowing the source to deliver its signal with less "effort" (voltage drop). This is important for connecting signal sources without loading them down.

### 3. Impact on Output Impedance ($Z_{out}$)

Negative feedback, particularly voltage-series feedback, significantly **reduces** the output impedance of the circuit.

The op-amp's open-loop output impedance is $Z_{od}$. With feedback, the output voltage is sensed and fed back. This feedback counteracts any attempt to change the output voltage due to a load.

If we try to draw current through a load $R_L$ connected to the output, $V_{out}$ will tend to drop. However, this drop in $V_{out}$ is detected by the feedback network, and a larger $V_d$ is generated at the input, causing the op-amp to drive the output harder to maintain the desired $V_{out}$. This "stiffening" effect makes the output behave as if it has a much lower impedance.

The effective output impedance with voltage-series feedback is given by:

$Z_{out(feedback)} = Z_{od} / (1 + A_{OL}\beta)$

Since $(1 + A_{OL}\beta)$ is very large, $Z_{out(feedback)}$ becomes very small.

*   **Relatable Example:** Consider a faucet. A poorly regulated faucet (high output impedance) might have a fluctuating water flow if you slightly open or close another faucet in the house. A well-regulated faucet with a good pressure regulator (negative feedback) will maintain a steady flow, regardless of what's happening elsewhere in the plumbing system. The regulator makes the water pressure at the faucet spout very consistent, meaning it has a low output impedance. This is critical for driving loads without the output voltage being significantly affected by the load current.

### 4. Bandwidth Extension

There's a fundamental trade-off between gain and bandwidth in amplifiers. This is often described by the **gain-bandwidth product (GBWP)**. For a single-pole amplifier (which an op-amp approximates), $GBWP \approx A_{OL} \cdot BW_{OL}$, where $BW_{OL}$ is the bandwidth in open-loop. This product is typically constant.

With negative feedback, the closed-loop gain $A_{CL}$ is reduced to $A_{OL} / (1 + A_{OL}\beta)$. The new bandwidth, $BW_{CL}$, increases such that the GBWP remains approximately constant:

$GBWP \approx A_{CL} \cdot BW_{CL}$
$GBWP \approx \frac{A_{OL}}{1 + A_{OL}\beta} \cdot BW_{CL}$

Since $GBWP \approx A_{OL} \cdot BW_{OL}$, we can say:

$A_{OL} \cdot BW_{OL} \approx \frac{A_{OL}}{1 + A_{OL}\beta} \cdot BW_{CL}$
$BW_{OL} \approx \frac{BW_{CL}}{1 + A_{OL}\beta}$
$BW_{CL} \approx BW_{OL} \cdot (1 + A_{OL}\beta)$

So, the bandwidth is extended by the same factor that the gain is reduced, i.e., $(1 + A_{OL}\beta)$, often called the "desensitivity factor" or "feedback factor".

*   **Relatable Example:** Imagine a high-speed train. It can travel very fast (high bandwidth) but might be restricted to specific routes (limited gain/application). If you want to use this train for a more local route (lower gain application), you might have to make more stops (increase the complexity of the route, but the overall journey might still be efficient). Or, think of a sports car engine. It's designed for high RPMs (high frequency response, bandwidth). If you use it to power a slow-moving vehicle, it can easily achieve that slow speed, but it has the *potential* to go much faster if needed. The engine's inherent capability (GBWP) is utilized differently.

### 5. Distortion Reduction

Non-linearities in the op-amp create harmonic distortion in the output signal. Negative feedback helps to reduce this distortion.

Suppose the op-amp introduces a distortion signal $V_{dist}$ at its output. With negative feedback, this distortion signal is also fed back to the input. Because the feedback is negative, the effective input signal to the amplifier is reduced, and thus the amplified distortion is also reduced.

Specifically, the distortion at the output is reduced by the same factor $(1 + A_{OL}\beta)$ that the signal gain is reduced. So, if the open-loop distortion is $D_{OL}$, the closed-loop distortion $D_{CL}$ is approximately $D_{OL} / (1 + A_{OL}\beta)$.

*   **Relatable Example:** Imagine a singer with a powerful voice (high $A_{OL}$). If they sing without any practice or guidance, their performance might be erratic and contain many off-key notes (distortion). If they have a skilled conductor (negative feedback) guiding them, the conductor listens to the performance and gives them subtle cues to stay on pitch. The conductor's influence (the feedback) corrects deviations from the intended tune, making the final performance much cleaner and more accurate.

This is a significant benefit for **CO5**, enabling the design of high-fidelity amplifiers.

## Common Pitfalls and Exam Focus

*   **Ideal vs. Real Op-amps:** Always remember the ideal op-amp assumptions (infinite open-loop gain, infinite input impedance, zero output impedance) and how they simplify analysis. Then, consider how real-world limitations (finite gain, finite input impedance, non-zero output impedance) affect the feedback equations. Textbooks like **Boylestad R. L. and L. Nashelsky** often delve into these practical considerations.
*   **Understanding $\beta$:** The factor $\beta$ is *not* always just a simple resistor ratio. It depends on the specific feedback network configuration. However, for many basic op-amp circuits, it will be a voltage division ratio.
*   **The $1/\beta$ Approximation:** The condition for $A_{CL} \approx 1/\beta$ is that $A_{OL}\beta \gg 1$. This is generally true for op-amps operating within their useful frequency range. However, at very high frequencies, $A_{OL}$ drops significantly, and this approximation might not hold.
*   **Positive vs. Negative Feedback:** Be clear on the defining characteristic: does the feedback signal *add* to or *subtract* from the input signal?
*   **Gain-Bandwidth Product:** This is a very common exam topic. Understand that reducing gain with negative feedback *buys* you increased bandwidth, reduced distortion, and better impedance characteristics.

Remember this: Negative feedback is the key to making op-amps predictable, reliable, and useful for a vast array of applications. It transforms a wild, high-gain amplifier into a versatile building block for analog circuit design.

---

## Sample Questions and Answers

**Question 1 (Conceptual):** Briefly explain why an op-amp with very high open-loop gain needs negative feedback for most linear applications.

**Answer:** An op-amp with extremely high open-loop gain ($A_{OL}$) is highly sensitive to even minuscule differences between its input terminals. Without feedback, a small input voltage difference would be amplified so much that the output would quickly saturate at the power supply rails, making it unstable and unusable for precise signal amplification. Negative feedback stabilizes the circuit by reducing the overall gain to a predictable, lower level determined by the feedback network, preventing saturation and allowing for controlled amplification. This directly addresses **CO4**.

**Question 2 (Exam-Oriented - Calculation):** An op-amp with an open-loop gain of $200,000$ is used in a negative feedback configuration with a feedback factor $\beta = 0.05$. Calculate the closed-loop gain ($A_{CL}$) and the desensitivity factor.

**Answer:**
The closed-loop gain is given by $A_{CL} = \frac{A_{OL}}{1 + A_{OL} \beta}$.
Given: $A_{OL} = 200,000$, $\beta = 0.05$.
$A_{OL} \beta = 200,000 \times 0.05 = 10,000$.
$A_{CL} = \frac{200,000}{1 + 10,000} = \frac{200,000}{10,001} \approx 19.998$.

The desensitivity factor (or feedback factor) is $(1 + A_{OL} \beta)$.
Desensitivity factor = $1 + 10,000 = 10,001$.

**Note:** You can see that the closed-loop gain is very close to $1/\beta = 1/0.05 = 20$. This illustrates the approximation $A_{CL} \approx 1/\beta$ when $A_{OL}\beta \gg 1$. This question tests understanding of the core gain formula and relates to **CO5**.

**Question 3 (Conceptual - Impact):** How does negative feedback generally affect the input impedance and output impedance of an op-amp circuit?

**Answer:** For common negative feedback configurations like voltage-series feedback (used in non-inverting and inverting amplifiers), negative feedback generally:
1.  **Increases Input Impedance:** This is because the feedback voltage reduces the voltage difference across the op-amp's input terminals, meaning less current is drawn from the source for a given input voltage. The input impedance is multiplied by the desensitivity factor $(1 + A_{OL}\beta)$.
2.  **Decreases Output Impedance:** This is because the feedback mechanism counteracts any change in output voltage caused by load variations, effectively making the output "stiffer" and less sensitive to load current. The output impedance is divided by the desensitivity factor $(1 + A_{OL}\beta)$.
This question assesses understanding of the practical benefits of feedback, relating to both **CO4** and **CO5**.

**Question 4 (Application):** You need to design a circuit that amplifies an audio signal by a factor of 100 and has a very low output impedance to drive a speaker. Which type of feedback would you choose and why?

**Answer:** You would choose **negative feedback**. Specifically, a configuration like a **non-inverting amplifier** or an **inverting amplifier** with appropriate resistor values to achieve a gain of 100. Negative feedback is chosen because:
1.  It allows precise control of the gain to the desired value of 100 (using the $1/\beta$ relationship).
2.  It significantly reduces the output impedance, making it suitable for driving low-impedance loads like speakers without the output voltage being heavily affected by the load.
3.  It also reduces distortion and increases bandwidth, which are desirable for audio amplification.
This question directly targets **CO5** by asking for a design choice based on performance requirements.
