---
title: "Inverting and non- inverting amplifier circuits"
subject: "ANALOG ELECTRONICS CIRCUITS"
module: "Module 3: Operational Amplifiers : Block diagram of Op"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9120463779487da6e8"
status: "completed"
scrapedAt: "2026-05-23T17:36:28.615Z"
---
# ANALOG ELECTRONICS CIRCUITS - Module 3: Operational Amplifiers

## Topic: Inverting and Non-Inverting Amplifier Circuits

Welcome back, everyone! In our last session, we got a good overview of the Operational Amplifier (Op-Amp) – its basic building blocks and that iconic block diagram. Today, we're going to dive into some of the most fundamental and incredibly useful applications of the op-amp: the **Inverting Amplifier** and the **Non-Inverting Amplifier**. These circuits are the bread and butter for any analog electronics enthusiast, and understanding them is crucial for grasping more complex op-amp designs. Remember, our goal here is to build a solid understanding (that's CO4: Explain the basic concepts of Operational amplifier) so we can eventually design our own circuits (CO5: Design and develop various OPAMP application circuits).

### Understanding the "Ideal" Op-Amp Assumptions

Before we draw our first circuit, let's recap those all-important "ideal op-amp" assumptions. These simplify our analysis immensely, and for most practical purposes, they hold up remarkably well. Think of it like a perfectly efficient machine for now, and we'll worry about the imperfections later if needed.

1.  **Infinite Open-Loop Gain ($A_{OL}$):** This means even a tiny difference between the non-inverting and inverting inputs will cause the output to swing to its maximum positive or negative voltage. It's like having a volume knob that's incredibly sensitive; a whisper of difference makes a shout of output.
2.  **Infinite Input Impedance ($Z_{in}$):** This implies no current flows into either the inverting (-) or non-inverting (+) input terminals. This is fantastic because it means our op-amp doesn't "load down" the signal source. The signal voltage at the input terminals is exactly as the previous stage intended.
3.  **Zero Output Impedance ($Z_{out}$):** This means the op-amp can deliver any amount of current to the load without its output voltage dropping. It's like a powerful battery that can power anything without getting drained.
4.  **Infinite Bandwidth:** The op-amp can amplify signals of any frequency equally well. (We'll often relax this one in higher-level discussions, but for basic amplifier analysis, it's a good starting point.)
5.  **Zero Output Voltage when Inputs are Zero:** If both input terminals are at the same voltage (usually 0V), the output should also be 0V. This is the "zero offset" characteristic.

The most critical assumptions for our inverting and non-inverting amplifier analysis are **infinite input impedance** and **zero voltage difference between the input terminals** (due to the infinite open-loop gain and negative feedback, which we'll talk about). The "zero voltage difference" is often referred to as the **"virtual short"** concept.

### The Inverting Amplifier: Flipping and Amplifying

Let's start with the **Inverting Amplifier**. As the name suggests, it not only amplifies the input signal but also *inverts* it. If your input goes positive, the output goes negative, and vice-versa.

**Circuit Diagram:**

Imagine an op-amp. It has two input terminals: the non-inverting (+) and the inverting (-). It also has an output terminal.

*   The input signal ($V_{in}$) is applied to the inverting terminal (-) through a resistor, let's call it $R_1$.
*   The non-inverting terminal (+) is connected directly to ground (0V).
*   A feedback resistor, $R_f$, connects the output terminal ($V_{out}$) back to the inverting terminal (-).

**(Imagine drawing this on a blackboard: an op-amp symbol, $V_{in}$ going into $R_1$, $R_1$ connecting to the '-' input, '-' input also connected to $R_f$, $R_f$ going to $V_{out}$, '+' input connected to ground. $V_{out}$ is the output.)**

**How it Works (The Magic of Negative Feedback):**

This is where the op-amp's magic really happens, thanks to **negative feedback**. We've connected the output back to the inverting input. This has a crucial effect:

1.  **Virtual Ground at the Inverting Input:** Because the non-inverting input (+) is grounded (0V), and the op-amp, with its huge open-loop gain, tries to keep the voltage difference between its inputs at zero, it forces the inverting input (-) to be at virtual ground. It's not *actually* connected to ground, but its voltage is held at approximately 0V. This is a key takeaway, so **remember this: the inverting input is at virtual ground.**

2.  **Current Flow:** Since the inverting input is at virtual ground (0V), the input voltage $V_{in}$ is applied across $R_1$. The current flowing *into* $R_1$ (let's call it $I_{in}$) is determined by Ohm's Law:
    $I_{in} = \frac{V_{in} - 0}{R_1} = \frac{V_{in}}{R_1}$

3.  **No Current into Op-Amp Input:** Our ideal op-amp has infinite input impedance, meaning no current flows *into* the inverting terminal. So, this entire current $I_{in}$ must flow through the feedback resistor $R_f$.

4.  **Output Voltage Calculation:** Now, this current $I_{in}$ flows through $R_f$ towards the output. The voltage across $R_f$ is $I_{in} \times R_f$. Since the current is flowing from virtual ground (0V) to the output $V_{out}$, the voltage drop across $R_f$ is $(0 - V_{out})$.
    So, $I_{in} = \frac{0 - V_{out}}{R_f} = \frac{-V_{out}}{R_f}$

5.  **Putting it Together (The Gain Formula):** We have two expressions for $I_{in}$:
    $\frac{V_{in}}{R_1} = \frac{-V_{out}}{R_f}$

    Let's rearrange this to find the voltage gain ($A_v = \frac{V_{out}}{V_{in}}$):
    $V_{out} = -\frac{R_f}{R_1} \times V_{in}$

    Therefore, the voltage gain is:
    $A_v = \frac{V_{out}}{V_{in}} = -\frac{R_f}{R_1}$

    Isn't that neat? The gain is simply the ratio of the feedback resistor to the input resistor. The negative sign, as expected, indicates inversion.

**Example:** If $R_1 = 1 k\Omega$ and $R_f = 10 k\Omega$, the gain is $A_v = -\frac{10}{1} = -10$. This means a $1V$ input will result in a $-10V$ output.

**Key Characteristics of Inverting Amplifier:**

*   **Gain:** $A_v = -\frac{R_f}{R_1}$. Determined by external resistors.
*   **Input Impedance:** This is a crucial point. Since the inverting input is at virtual ground, the input impedance seen by the source is simply $R_1$. This is a significant advantage for some applications, as it doesn't load the input signal source heavily. (Refer to Bell, Chapter 10, for detailed impedance analysis).
*   **Output:** Inverted and amplified.

**Real-World Analogy:** Imagine you're using a megaphone. The inverting amplifier is like a megaphone that not only makes your voice louder but also flips your words backward (though that part isn't very practical for communication!). The important thing is that it amplifies your voice significantly. The gain determines how much louder your voice becomes.

### The Non-Inverting Amplifier: Amplifying Without Flipping

Now, let's look at the **Non-Inverting Amplifier**. As the name suggests, this circuit amplifies the input signal without inverting its phase. A positive input gives a positive output.

**Circuit Diagram:**

*   The input signal ($V_{in}$) is applied directly to the non-inverting terminal (+).
*   The inverting terminal (-) is connected to ground through a resistor, $R_1$.
*   A feedback resistor, $R_f$, connects the output terminal ($V_{out}$) back to the inverting terminal (-).

**(Imagine drawing this: op-amp symbol, $V_{in}$ directly into the '+' input. The '-' input is connected to $R_1$, and $R_1$ is connected to ground. The '-' input is also connected to $R_f$, and $R_f$ goes to $V_{out}$. $V_{out}$ is the output.)**

**How it Works (Still with Negative Feedback!):**

Again, negative feedback is key. The op-amp's goal is to keep the voltage difference between its inputs zero.

1.  **Virtual Short:** Since $V_{in}$ is applied to the non-inverting input (+), the op-amp will adjust its output $V_{out}$ such that the inverting input (-) voltage ($V_{-}$) becomes equal to $V_{in}$. So, $V_{-} = V_{in}$. This is the "virtual short" in action again.

2.  **Current Flow:** The inverting terminal (-) is now part of a voltage divider network formed by $R_1$ and $R_f$. The voltage at the inverting terminal is $V_{-} = V_{in}$. The output voltage $V_{out}$ is connected to the junction of $R_1$ and $R_f$. So, the voltage at the top of $R_f$ is $V_{out}$.
    The current flowing through $R_f$ (let's call it $I_f$) is:
    $I_f = \frac{V_{out} - V_{-}}{R_f} = \frac{V_{out} - V_{in}}{R_f}$

3.  **No Current into Op-Amp Input:** Just like before, no current flows into the inverting input terminal. This means the current flowing through $R_1$ (let's call it $I_1$) must be equal to $I_f$.
    $I_1 = I_f$

4.  **Voltage at Inverting Terminal:** The voltage at the inverting terminal is $V_{-} = V_{in}$. This voltage is also present across $R_1$ because the other end of $R_1$ is connected to ground. So, the current through $R_1$ is:
    $I_1 = \frac{V_{-} - 0}{R_1} = \frac{V_{in}}{R_1}$

5.  **Putting it Together (The Gain Formula):** Now we equate the currents:
    $\frac{V_{in}}{R_1} = \frac{V_{out} - V_{in}}{R_f}$

    Let's rearrange to find the voltage gain ($A_v = \frac{V_{out}}{V_{in}}$):
    $V_{in} \frac{R_f}{R_1} = V_{out} - V_{in}$
    $V_{out} = V_{in} + V_{in} \frac{R_f}{R_1}$
    $V_{out} = V_{in} \left(1 + \frac{R_f}{R_1}\right)$

    So, the voltage gain is:
    $A_v = \frac{V_{out}}{V_{in}} = 1 + \frac{R_f}{R_1}$

    See? The gain is always greater than or equal to 1. It's $1 +$ the ratio of the feedback resistor to the other resistor in the voltage divider. No inversion here! This is a vital concept for understanding amplifier design (CO5).

**Example:** If $R_1 = 10 k\Omega$ and $R_f = 100 k\Omega$, the gain is $A_v = 1 + \frac{100}{10} = 1 + 10 = 11$. A $1V$ input will give a $11V$ output.

**Key Characteristics of Non-Inverting Amplifier:**

*   **Gain:** $A_v = 1 + \frac{R_f}{R_1}$. Always greater than or equal to 1. Determined by external resistors.
*   **Input Impedance:** This is where the non-inverting amplifier truly shines! Because the signal is applied directly to the high-impedance non-inverting input, and the feedback network doesn't affect it, the input impedance is essentially *infinite* (or very, very high, close to the op-amp's open-loop input impedance). This is a significant advantage for circuits where the source impedance is high (like from certain sensors). (Refer to Floyd, Chapter 15, for detailed impedance analysis).
*   **Output:** Non-inverted and amplified.

**Real-World Analogy:** Think of a simple amplifier for your guitar. The non-inverting amplifier is like a clean boost pedal. It makes your guitar sound louder, but it preserves the original tone and doesn't flip the sound waves. The gain is adjustable by turning up the volume knob (representing the resistor ratio).

### Comparing Inverting and Non-Inverting Amplifiers

Let's summarize the key differences and similarities:

| Feature             | Inverting Amplifier                    | Non-Inverting Amplifier                 |
| :------------------ | :------------------------------------- | :-------------------------------------- |
| **Input Polarity**  | Inverted (Phase Shift of 180°)         | Non-inverted (Phase Shift of 0°)        |
| **Voltage Gain**    | $A_v = -\frac{R_f}{R_1}$               | $A_v = 1 + \frac{R_f}{R_1}$             |
| **Gain Range**      | Can be < 1 (attenuation), negative     | $\ge 1$ (amplification only)            |
| **Input Impedance** | Approximately $R_1$                    | Very High (approaching $\infty$)        |
| **Output Impedance**| Low (typical of op-amp output)         | Low (typical of op-amp output)          |
| **Circuit Config.** | Input signal to $R_1$ to inverting pin | Input signal to non-inverting pin       |
| **Feedback Path**   | From output to inverting pin           | From output to inverting pin (via $R_f$) |

Both circuits use negative feedback, which is crucial for stabilizing the gain and making it dependent on external components rather than the op-amp's internal (and variable) open-loop gain. This stability is fundamental to using op-amps reliably, and it directly relates to our course outcome CO2 (Model BJT and FET amplifier circuits) by showing how gain can be controlled.

### When to Use Which?

*   **Inverting Amplifier:** Use when you need amplification and also need to invert the signal. It's also a good choice when the input source has a relatively low impedance, and you want the amplifier's input impedance to be controllable ($R_1$).
*   **Non-Inverting Amplifier:** Use when you need amplification without inversion and, most importantly, when you need a very high input impedance to avoid loading the source signal. This is often the preferred choice for interfacing with sensors or other circuits where the source impedance is high.

### Practical Considerations (A Peek Ahead)

In real op-amps (like the ubiquitous 741, or newer ones), the open-loop gain isn't infinite, and the input impedance isn't infinite either. Also, there's a small offset voltage. However, with negative feedback, the closed-loop gain ($A_{CL}$) becomes much more stable and predictable, closely following our derived formulas. The deviation from ideal behavior is usually small enough that these formulas are excellent approximations for most applications (CO5). For very precise designs, you might need to consider the non-ideal characteristics, which is a topic for advanced studies, but understanding these basic circuits is the essential first step, aligning perfectly with CO4.

---

### Sample Questions and Answers

**1. Conceptual Question:** What is the most significant advantage of using a non-inverting amplifier configuration compared to an inverting amplifier when interfacing with a high-impedance sensor?

**Answer:** The most significant advantage is the **very high input impedance** of the non-inverting amplifier. This ensures that the op-amp draws negligible current from the sensor, preventing any significant voltage drop across the sensor's internal resistance. This preserves the true signal voltage from the sensor, leading to more accurate amplification. The inverting amplifier, with its input impedance set by $R_1$, would load the sensor more heavily.

**2. Exam-Oriented Question:** For an inverting amplifier circuit with $R_1 = 2 \text{ k}\Omega$ and $R_f = 20 \text{ k}\Omega$, what is the voltage gain and the input impedance? If the input voltage is $0.5 \text{ V}$, what is the output voltage?

**Answer:**
*   **Voltage Gain ($A_v$)**: For an inverting amplifier, $A_v = -\frac{R_f}{R_1}$.
    $A_v = -\frac{20 \text{ k}\Omega}{2 \text{ k}\Omega} = -10$.
*   **Input Impedance ($Z_{in}$)**: For an inverting amplifier, $Z_{in} \approx R_1$.
    $Z_{in} \approx 2 \text{ k}\Omega$.
*   **Output Voltage ($V_{out}$)**: $V_{out} = A_v \times V_{in}$.
    $V_{out} = -10 \times 0.5 \text{ V} = -5 \text{ V}$.

**3. Conceptual Question:** What do we mean by "virtual ground" in the context of an inverting op-amp configuration?

**Answer:** "Virtual ground" refers to the condition where the inverting input terminal of the op-amp is held at approximately 0 volts due to the action of negative feedback and the op-amp's very high open-loop gain. The non-inverting input is usually connected to ground. The op-amp adjusts its output voltage to maintain a near-zero voltage difference between its two input terminals. Although the inverting input is not physically connected to ground, its voltage is effectively clamped at 0V, behaving like a ground for circuit analysis purposes.

**4. Exam-Oriented Question:** A non-inverting amplifier uses an op-amp with feedback resistor $R_f = 50 \text{ k}\Omega$ and resistor $R_1 = 5 \text{ k}\Omega$. If the input signal is $20 \text{ mV}$, what is the output voltage? What is the approximate input impedance of this circuit?

**Answer:**
*   **Voltage Gain ($A_v$)**: For a non-inverting amplifier, $A_v = 1 + \frac{R_f}{R_1}$.
    $A_v = 1 + \frac{50 \text{ k}\Omega}{5 \text{ k}\Omega} = 1 + 10 = 11$.
*   **Output Voltage ($V_{out}$)**: $V_{out} = A_v \times V_{in}$.
    $V_{out} = 11 \times 20 \text{ mV} = 220 \text{ mV}$ or $0.22 \text{ V}$.
*   **Input Impedance ($Z_{in}$)**: The input impedance of a non-inverting amplifier is very high, essentially determined by the op-amp's intrinsic input impedance, which is typically in the Megaohms (M$\Omega$) range. For practical analysis, we consider it to be approximately infinite.

These questions cover the core calculations and conceptual understanding required for these fundamental op-amp circuits. Keep practicing these, as they form the basis for so many more advanced op-amp applications!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
