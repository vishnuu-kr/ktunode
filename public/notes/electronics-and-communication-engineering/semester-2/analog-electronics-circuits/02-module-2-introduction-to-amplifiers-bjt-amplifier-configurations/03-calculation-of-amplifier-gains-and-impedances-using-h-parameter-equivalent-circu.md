---
title: "Calculation of amplifier gains and impedances using h parameter equivalent circuit"
subject: "ANALOG ELECTRONICS CIRCUITS"
module: "Module 2: Introduction to Amplifiers  – BJT amplifier configurations – "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9120463779487da6de"
status: "completed"
scrapedAt: "2026-05-23T17:36:20.772Z"
---
# ANALOG ELECTRONICS CIRCUITS - Module 2: Introduction to Amplifiers

## Topic: Calculation of Amplifier Gains and Impedances using h-parameter Equivalent Circuit

Welcome back, everyone! Today, we're diving deeper into the fascinating world of amplifiers, specifically focusing on how we can predict their performance – how much they amplify a signal and how they interact with the circuits connected to them. We'll be using a powerful tool called the **h-parameter equivalent circuit** to do this. This is crucial for understanding and designing amplifier circuits, and it directly relates to our **Course Outcome 2: Model BJT and FET amplifier circuits** and **Course Outcome 3: Design amplifier and oscillator circuits using BJT**. By the end of this session, you'll be able to model these circuits effectively and start thinking about how to design them.

You've likely encountered BJTs (Bipolar Junction Transistors) before, and you know they can amplify. But *how much* they amplify, and *how* they behave when connected to other components, isn't always obvious just by looking at the transistor itself. That's where equivalent circuits come in. They simplify the complex behavior of a transistor into a more manageable set of parameters and circuit elements.

### The Need for an Equivalent Circuit

Think about it like this: if you wanted to understand how a car engine works, you wouldn't just look at every single nut and bolt. You'd use a schematic, a simplified diagram that shows the key functional parts – the cylinders, the crankshaft, the fuel injectors – and how they relate to each other. An equivalent circuit for a transistor serves a similar purpose. It provides a simplified electrical model that accurately represents the transistor's behavior within a circuit, especially for small AC signals.

Why small AC signals? Because in many amplifier applications, we're dealing with a small AC input signal superimposed on a larger DC bias. The equivalent circuit we'll use is primarily for this AC analysis. The DC biasing sets the operating point (the quiescent point), and then the AC signal is amplified around that point.

### Introducing the h-parameters: A Universal Language for Transistors

So, what are these "h-parameters"? They are a set of parameters that describe the linear behavior of a two-port network, and a transistor, when viewed as a black box with an input and an output, is a perfect example of a two-port network. They are called "h" parameters because they are derived from hybrid equations. These parameters are particularly useful because they are relatively easy to measure and are often provided by manufacturers in transistor datasheets.

Let's consider a BJT as a two-port network. We have an input port (base-emitter) and an output port (collector-emitter, or collector-base, depending on the configuration).

*   **Input Port:** Voltage ($V_{in}$), Current ($I_{in}$)
*   **Output Port:** Voltage ($V_{out}$), Current ($I_{out}$)

The h-parameter model relates these input and output quantities using a set of equations. For a general two-port network, the relationships can be expressed as:

$V_1 = h_{11}I_1 + h_{12}V_2$
$I_2 = h_{21}I_1 + h_{22}V_2$

Here, the subscripts '1' usually refer to the input and '2' to the output. For a transistor, let's map these to the BJT terminals. We'll be looking at the common-emitter configuration first, as it's the most widely used for amplification.

In the common-emitter configuration:
*   Input is applied to the base.
*   Output is taken from the collector.
*   The emitter is common to both input and output.

So, in our general equations, we can substitute:
*   $V_1 \rightarrow V_{be}$ (Base-Emitter voltage)
*   $I_1 \rightarrow I_b$ (Base current)
*   $V_2 \rightarrow V_{ce}$ (Collector-Emitter voltage)
*   $I_2 \rightarrow I_c$ (Collector current)

The h-parameter equations for a BJT in the common-emitter configuration become:

$V_{be} = h_{ie}I_b + h_{re}V_{ce}$
$I_c = h_{fe}I_b + h_{oe}V_{ce}$

This is a fundamental set of equations that we will use. Let's break down what each of these h-parameters means:

*   $h_{ie}$: This is the **input impedance** of the transistor, measured at the base-emitter port when the output voltage ($V_{ce}$) is kept constant (shorted output for AC). Think of it as the resistance the input signal "sees" when entering the transistor. Its unit is Ohms ($\Omega$).
*   $h_{re}$: This is the **reverse voltage gain** or **feedback voltage ratio**. It's the ratio of the change in input voltage ($V_{be}$) to the change in output voltage ($V_{ce}$) when the input current ($I_b$) is kept constant (open input for AC). This parameter is usually very small and often neglected in basic analysis. It signifies how much the output voltage affects the input voltage. Its unit is dimensionless.
*   $h_{fe}$: This is the **forward current gain** or **common-emitter current gain**. It's the ratio of the change in output current ($I_c$) to the change in input current ($I_b$) when the output voltage ($V_{ce}$) is kept constant (shorted output for AC). This is the most important parameter for amplification; it tells us how much the collector current increases for a given change in base current. Its unit is dimensionless, though often referred to as the "beta" ($\beta$) of the transistor.
*   $h_{oe}$: This is the **output admittance** of the transistor, measured at the collector-emitter port when the input current ($I_b$) is kept constant (open input for AC). Its reciprocal ($1/h_{oe}$) gives the output resistance. It represents the output conductance, or how much the output current changes for a change in output voltage at a constant input current. Its unit is Siemens (S) or mhos ($\mho$).

**Remember this:** These parameters are usually specified at a particular DC operating point (collector current and collector-emitter voltage) and temperature, as they can vary with these conditions. However, for small-signal AC analysis, we assume they are constant.

### Constructing the h-parameter Equivalent Circuit for Common-Emitter Amplifier

Now, let's translate these equations into a circuit diagram. This is where the "equivalent circuit" part really comes alive. We'll replace the transistor symbol with these equivalent circuit elements.

From the first equation: $V_{be} = h_{ie}I_b + h_{re}V_{ce}$
*   $h_{ie}I_b$ is like a voltage drop across a resistor $h_{ie}$ carrying current $I_b$. So, we have a resistor $h_{ie}$ in series with the input.
*   $h_{re}V_{ce}$ represents a voltage that *depends* on the output voltage $V_{ce}$. This is a **voltage-controlled voltage source**. The source's value is $h_{re}V_{ce}$, and it's in series with the input. However, since $h_{re}$ is typically very small (e.g., $10^{-4}$), this term is often ignored in basic analyses, simplifying the input to just $V_{be} \approx h_{ie}I_b$.

From the second equation: $I_c = h_{fe}I_b + h_{oe}V_{ce}$
*   $h_{fe}I_b$ represents an output current that is proportional to the input current $I_b$. This is a **current-controlled current source**. Its value is $h_{fe}I_b$.
*   $h_{oe}V_{ce}$ represents a current that *depends* on the output voltage $V_{ce}$. However, it's often more convenient to think of this as a current flowing through a parallel resistance. Since $h_{oe}$ is an admittance, its reciprocal, $r_o = 1/h_{oe}$, is the **output resistance**. So, $h_{oe}V_{ce}$ can be seen as a current flowing *out* of the output terminal through this parallel resistance $r_o$.

Putting it all together for the common-emitter configuration (ignoring $h_{re}$ for simplicity in many cases):

The input side shows a resistor $h_{ie}$ in series with the base. The voltage across this resistor is $V_{be}$.
The output side has a current source $h_{fe}I_b$ flowing from collector to emitter, and this source is in parallel with an output resistor $r_o = 1/h_{oe}$, also connected from collector to emitter.

**Visualizing this:** Imagine the transistor symbol. Inside, we draw this equivalent circuit. The base terminal connects to one end of $h_{ie}$. The other end of $h_{ie}$ connects to the emitter terminal. In parallel with the collector-emitter path, we have the current source and the output resistor $r_o$.

This simplified model is extremely useful for analyzing amplifier circuits. It allows us to perform AC analysis using standard circuit analysis techniques like Ohm's Law, Kirchhoff's Voltage Law (KVL), and Kirchhoff's Current Law (KCL).

### Connecting to Real-World Circuits: The Common-Emitter Amplifier Example

Let's consider a typical common-emitter amplifier circuit. It will have a biasing network (resistors $R_1$, $R_2$, $R_E$, $R_C$) to set the DC operating point, coupling capacitors ($C_{in}$, $C_{out}$) to block DC and pass AC signals, and possibly a bypass capacitor ($C_E$) across the emitter resistor $R_E$.

When we perform AC analysis, the capacitors act as short circuits (assuming frequencies are high enough), and the DC voltage sources become short circuits to ground. This leaves us with the transistor's h-parameter equivalent circuit connected to the AC equivalent of the biasing resistors and load.

**Example Scenario:** Imagine a small audio signal, like a whisper, enters your amplifier. This whisper is our AC input voltage ($v_{in}$). We want this whisper to become loud enough to be heard clearly. The amplifier's job is to increase its amplitude.

Let's analyze the gains using the h-parameter model.

### Calculation of Amplifier Gains

We are usually interested in three types of gains:

1.  **Current Gain ($A_i$):** The ratio of output AC current to input AC current.
2.  **Voltage Gain ($A_v$):** The ratio of output AC voltage to input AC voltage.
3.  **Power Gain ($A_p$):** The ratio of output AC power to input AC power. $A_p = A_v \times A_i$.

Let's derive these for the common-emitter configuration using the h-parameter model.

**1. Current Gain ($A_i$)**

The input current is the base current, $I_b$. The output current is the collector current, $I_c$.
From our h-parameter equation: $I_c = h_{fe}I_b + h_{oe}V_{ce}$.

If we are analyzing a circuit *without* a load resistor connected at the output, and we ignore the output resistance $r_o$, then effectively $I_c \approx h_{fe}I_b$.
In this ideal case, the current gain $A_i = I_c / I_b \approx h_{fe}$. This is very straightforward! $h_{fe}$ directly tells us the current amplification.

However, if there *is* a load resistor $R_L$ connected at the output, the collector current $I_c$ splits between $R_L$ and the output resistance $r_o$.
The total current $I_c$ flows out of the current source $h_{fe}I_b$. This current then splits.
Let's redraw the output part of the circuit: The current source $h_{fe}I_b$ is in parallel with $r_o$ and $R_L$.
The output voltage $V_{ce}$ is the voltage across the parallel combination of $r_o$ and $R_L$.
So, $I_c = h_{fe}I_b$. This $I_c$ flows into the parallel combination of $r_o$ and $R_L$.
The current through the load $R_L$, which is our output current $I_{out}$, is given by the current division rule:
$I_{out} = I_c \times \frac{r_o}{r_o + R_L}$
Substituting $I_c = h_{fe}I_b$:
$I_{out} = h_{fe}I_b \times \frac{r_o}{r_o + R_L}$

The current gain $A_i = I_{out} / I_b = h_{fe} \times \frac{r_o}{r_o + R_L}$.
This is a more realistic current gain, as it accounts for the load and the transistor's own output resistance. Often, $R_L$ is much smaller than $r_o$, in which case $A_i \approx h_{fe} \frac{R_L}{R_L} = h_{fe}$. But if $R_L$ is comparable to $r_o$, this formula is essential.

**2. Voltage Gain ($A_v$)**

The voltage gain is $A_v = V_{out} / V_{in}$.
In the common-emitter configuration, $V_{in} = V_{be}$ and $V_{out} = V_{ce}$.
From the h-parameter equations:
$V_{be} = h_{ie}I_b + h_{re}V_{ce}$
$I_c = h_{fe}I_b + h_{oe}V_{ce}$

Let's analyze the output voltage. The output voltage $V_{out}$ is the voltage across the collector resistor $R_C$ and the load resistor $R_L$ (if $R_L$ is connected directly from collector to ground/emitter). For simplicity, let's assume a collector resistor $R_C$ and a load $R_L$ in series with $R_C$, or more typically, $R_L$ connected from collector to ground.

Let's consider the common-emitter amplifier with a collector resistor $R_C$ and a load $R_L$ connected from collector to ground (after a coupling capacitor). The AC equivalent circuit shows $R_C$ and $R_L$ effectively in parallel, connected between the collector terminal and ground. Let's denote the total parallel load resistance as $R_{load} = R_C || R_L$.

The output voltage is the voltage across this parallel combination.
$V_{out} = V_{ce} = -I_c \times R_{load}$ (The negative sign arises because $I_c$ flows downwards, and we define $V_{ce}$ as positive from collector to emitter. With $R_C$ in the circuit, current $I_c$ flows through $R_C$ downwards, so the voltage drop across $R_C$ is in the opposite polarity to $V_{ce}$ if $V_{ce}$ were solely due to the current source).
More precisely, the current source $h_{fe}I_b$ is in parallel with $r_o$. The total current flowing into the parallel combination of $r_o$ and $R_{load}$ is $I_{total} = h_{fe}I_b$.
The output voltage is $V_{out} = I_{total} \times (r_o || R_{load})$.
$V_{out} = h_{fe}I_b \times \frac{r_o R_{load}}{r_o + R_{load}}$

Now, let's relate $I_b$ to $V_{in} = V_{be}$.
From $V_{be} = h_{ie}I_b + h_{re}V_{ce}$:
$V_{in} = h_{ie}I_b + h_{re}V_{out}$
$V_{in} - h_{re}V_{out} = h_{ie}I_b$
$I_b = \frac{V_{in} - h_{re}V_{out}}{h_{ie}}$

Substitute this $I_b$ back into the $V_{out}$ equation:
$V_{out} = h_{fe} \left( \frac{V_{in} - h_{re}V_{out}}{h_{ie}} \right) \times \frac{r_o R_{load}}{r_o + R_{load}}$
$V_{out} = \frac{h_{fe}}{h_{ie}} (V_{in} - h_{re}V_{out}) \times \frac{r_o R_{load}}{r_o + R_{load}}$

Rearranging to find $A_v = V_{out}/V_{in}$:
$V_{out} \left( 1 + \frac{h_{fe}}{h_{ie}} \frac{h_{re} r_o R_{load}}{r_o + R_{load}} \right) = V_{in} \frac{h_{fe}}{h_{ie}} \frac{r_o R_{load}}{r_o + R_{load}}$
$A_v = \frac{V_{out}}{V_{in}} = \frac{\frac{h_{fe}}{h_{ie}} \frac{r_o R_{load}}{r_o + R_{load}}}{1 + \frac{h_{fe}}{h_{ie}} \frac{h_{re} r_o R_{load}}{r_o + R_{load}}}$

This looks complicated! Let's simplify by making some common approximations.
*   $h_{re}$ is very small.
*   $r_o$ is usually large compared to $R_{load}$.

If we ignore $h_{re}$, the numerator becomes $\frac{h_{fe}}{h_{ie}} \frac{r_o R_{load}}{r_o + R_{load}}$.
And the denominator becomes $1$.
So, $A_v \approx \frac{h_{fe}}{h_{ie}} \frac{r_o R_{load}}{r_o + R_{load}}$.

Further, if $R_{load} \ll r_o$, then $\frac{r_o R_{load}}{r_o + R_{load}} \approx R_{load}$.
So, the voltage gain simplifies to:
$A_v \approx \frac{h_{fe}}{h_{ie}} R_{load}$

This is a very common and useful formula! It tells us the voltage gain is the product of the current gain ($h_{fe}/h_{ie}$) and the effective load resistance. Remember, $h_{ie}$ is the input impedance, so it's the voltage gain multiplied by the load. This formula is *so* important, and it's something you'll see repeatedly.

**Let's use an analogy:** Imagine you're trying to push a heavy box across a floor.
*   $h_{fe}$: This is like your strength, how much force you can exert.
*   $h_{ie}$: This is like the friction or resistance of the floor against your feet as you try to move.
*   $R_{load}$: This is like a ramp you need to push the box up.

The voltage gain $A_v$ is related to your strength divided by the resistance you feel on your feet, multiplied by the ramp you're pushing against.

**3. Power Gain ($A_p$)**

Power gain is $A_p = A_v \times A_i$.
Using the simplified approximations:
$A_i \approx h_{fe}$
$A_v \approx \frac{h_{fe}}{h_{ie}} R_{load}$

$A_p \approx \left(\frac{h_{fe}}{h_{ie}} R_{load}\right) \times h_{fe} = \frac{h_{fe}^2 R_{load}}{h_{ie}}$

This shows that power gain depends on the square of the current gain, the load resistance, and inversely on the input impedance. A higher $h_{fe}$ (more amplification) and a larger load resistance both lead to higher power gain, provided the input impedance is not too low.

### Calculation of Amplifier Impedances

We've already touched upon impedances, but let's formalize it.

**1. Input Impedance ($Z_{in}$)**

The input impedance is the effective resistance seen at the input terminals of the amplifier. In the h-parameter model for common-emitter, this is essentially $h_{ie}$, but we need to consider the entire circuit.

The input impedance of the amplifier circuit ($Z_{in, amp}$) is the impedance looking into the base terminal.
From our h-parameter equations: $V_{be} = h_{ie}I_b + h_{re}V_{ce}$.
The input impedance of the *transistor* itself is $Z_{in, transistor} = V_{be}/I_b$ when $V_{ce}$ is considered as a specific voltage.
$Z_{in, transistor} = \frac{h_{ie}I_b + h_{re}V_{ce}}{I_b} = h_{ie} + h_{re}\frac{V_{ce}}{I_b}$

Now, we need to relate $V_{ce}/I_b$ to the circuit.
$V_{ce} = -I_c \times R_{load}$, where $R_{load} = R_C || R_L$ (assuming $R_C$ is the collector resistor and $R_L$ is the actual load connected after coupling capacitor).
And $I_c = h_{fe}I_b + h_{oe}V_{ce}$.

Let's use the simplified circuit where the output is connected to $R_{load}$.
$V_{ce} = I_{ce} \times (r_o || R_{load})$, where $I_{ce}$ is the collector current.
The current source is $h_{fe}I_b$, so $I_{ce}$ is the total current through $r_o$ and $R_{load}$.
$V_{ce} = (h_{fe}I_b) \times (r_o || R_{load})$.
So, $V_{ce}/I_b = h_{fe} \times (r_o || R_{load})$.

Substituting this back into the $Z_{in, transistor}$ equation:
$Z_{in, transistor} = h_{ie} + h_{re} (h_{fe} \times (r_o || R_{load}))$.

Again, because $h_{re}$ is very small, and $h_{fe} \times (r_o || R_{load})$ is typically much larger than $h_{ie}$, this second term is usually negligible.
Therefore, the input impedance of the transistor is often approximated as $Z_{in, transistor} \approx h_{ie}$.

**Now, what about the amplifier's input impedance?** The amplifier's input impedance ($Z_{in, amp}$) is what the signal source "sees" when connected to the amplifier's input. If the input is coupled via a capacitor $C_{in}$, and the biasing resistors $R_1$ and $R_2$ are connected to the base, then the source sees the parallel combination of $R_1$, $R_2$, and the transistor's input impedance.
$Z_{in, amp} \approx R_1 || R_2 || h_{ie}$ (assuming $C_{in}$ acts as a short).

This is a crucial point for **Course Outcome 2 (Model BJT and FET amplifier circuits)**. Understanding these impedances helps in designing biasing networks and predicting how the source will load the amplifier.

**2. Output Impedance ($Z_{out}$)**

The output impedance is the impedance seen looking back into the output terminals of the amplifier, with the input signal source shorted (since we're analyzing AC behavior).
To find the output impedance of the amplifier circuit, we look into the collector terminal.
In the AC equivalent circuit, the input current source ($I_b$) is removed (or treated as zero), and we look into the output.
The equivalent circuit at the output consists of the transistor's output resistance $r_o$ and the collector resistor $R_C$. If a load $R_L$ is present, it's also in parallel.

When we look back into the collector terminal, with the input source shorted ($I_b=0$), the current-controlled current source $h_{fe}I_b$ becomes zero.
The only element connecting the collector to the emitter (ground) in the transistor's model is $r_o = 1/h_{oe}$.
Additionally, the collector resistor $R_C$ is connected from the collector to the DC supply (which is AC ground).
So, the output impedance of the amplifier circuit ($Z_{out, amp}$) is the parallel combination of $r_o$ and $R_C$:

$Z_{out, amp} = r_o || R_C = \frac{r_o R_C}{r_o + R_C}$.

If a load resistor $R_L$ is connected after a coupling capacitor at the output, the output impedance of the amplifier itself (before the load) is $r_o || R_C$. The overall load seen by the output stage would then be $R_{load} = (r_o || R_C) || R_L$.

**Practical Considerations and Common Pitfalls**

*   **h-parameter values:** Always refer to datasheets for typical h-parameter values for a specific transistor at a given operating point. For example, for small-signal BJTs, $h_{fe}$ might be around 100-300, $h_{ie}$ might be a few k$\Omega$, $h_{oe}$ very small (high $r_o$), and $h_{re}$ very small.
*   **Approximations:** The approximations ($h_{re} \approx 0$, $r_o \gg R_{load}$) are very useful for quick calculations and understanding the dominant factors. However, for precision, or when dealing with high-impedance loads or specific transistor characteristics, use the full formulas.
*   **Frequency Effects:** h-parameters are defined for low frequencies. At high frequencies, parasitic capacitances within the transistor become significant, and the h-parameter model needs to be extended or replaced with a more complex model (like the hybrid-$\pi$ model). This topic is usually covered in later modules.
*   **Load and Source Impedance Interaction:** The voltage gain calculation $A_v \approx \frac{h_{fe}}{h_{ie}} R_{load}$ assumes that the input signal source has a very low impedance, and the load $R_{load}$ is directly connected. In reality, the source impedance ($Z_{S}$) and the amplifier's input impedance ($Z_{in, amp}$) form a voltage divider at the input, reducing the actual voltage seen by the transistor. Similarly, the amplifier's output impedance ($Z_{out, amp}$) and the load impedance ($Z_L$) form a voltage divider at the output. This is critical for **Course Outcome 3 (Design amplifier circuits)**.

**Let's tie this back to the Course Outcomes:**

*   **CO2: Model BJT and FET amplifier circuits:** By learning the h-parameter equivalent circuit, we are directly modeling BJT amplifiers. We can see how the transistor's intrinsic properties ($h_{ie}, h_{fe}, h_{oe}, h_{re}$) translate into circuit behavior. This lays the groundwork for understanding FET models as well, which use different parameter sets (like g-parameters for FETs).
*   **CO3: Design amplifier and oscillator circuits using BJT:** To design an amplifier, you need to predict its gain and impedances. The h-parameter model provides the tools for these calculations. You'll use these formulas to choose component values ($R_C, R_E, R_L$) to achieve a desired voltage gain, current gain, or power gain. Understanding input and output impedances is vital for cascading amplifier stages or interfacing with other circuits without significant signal loss or distortion. For example, if you have a source with a high output impedance, you'll need an amplifier with a high input impedance to avoid loading it down.

### Summary of Key Formulas (Common-Emitter)

*   **h-parameter Model Equations:**
    $V_{be} = h_{ie}I_b + h_{re}V_{ce}$
    $I_c = h_{fe}I_b + h_{oe}V_{ce}$
*   **Current Gain ($A_i$):** $A_i = \frac{I_{out}}{I_b} \approx h_{fe} \times \frac{r_o}{r_o + R_{load}}$ (where $R_{load}$ is the parallel combination of $R_C || R_L$)
    *   *Simplified:* $A_i \approx h_{fe}$
*   **Voltage Gain ($A_v$):** $A_v = \frac{V_{out}}{V_{in}} \approx \frac{h_{fe}}{h_{ie}} \times \frac{r_o R_{load}}{r_o + R_{load}}$
    *   *Simplified:* $A_v \approx -\frac{h_{fe} R_{load}}{h_{ie}}$ (The negative sign indicates a phase inversion, common in common-emitter amplifiers)
*   **Power Gain ($A_p$):** $A_p = A_v \times A_i$
    *   *Simplified:* $A_p \approx \frac{h_{fe}^2 R_{load}}{h_{ie}}$
*   **Input Impedance ($Z_{in, transistor}$):** $Z_{in, transistor} \approx h_{ie}$
    *   *Amplifier Input Impedance:* $Z_{in, amp} \approx R_1 || R_2 || h_{ie}$
*   **Output Impedance ($Z_{out, amp}$):** $Z_{out, amp} \approx r_o || R_C$

**Remember this:** The h-parameter model provides a powerful, albeit simplified, way to analyze BJT amplifier circuits. Mastering these calculations is fundamental for any analog electronics student.

---

### Sample Questions with Answers

**Question 1 (Conceptual):** What does the h-parameter $h_{fe}$ represent in a common-emitter BJT amplifier, and why is it important?

**Answer:** $h_{fe}$ is the forward current gain, also known as the common-emitter current gain ($\beta$). It represents the ratio of the change in collector current ($I_c$) to the change in base current ($I_b$) when the output voltage ($V_{ce}$) is kept constant. It is crucial because it directly quantifies how much the transistor amplifies the input current signal, which is a primary function of an amplifier.

**Question 2 (Calculation):** A common-emitter amplifier uses a BJT with the following h-parameters at its operating point: $h_{fe} = 100$, $h_{ie} = 1.5 k\Omega$, $h_{oe} = 20 \mu S$, and $h_{re} = 2 \times 10^{-4}$. The amplifier is biased with a collector resistor $R_C = 3.3 k\Omega$. A load resistor $R_L = 10 k\Omega$ is connected to the output through a coupling capacitor. Calculate the approximate voltage gain ($A_v$) and current gain ($A_i$) of the amplifier.

**Solution:**

First, calculate the output resistance of the transistor:
$r_o = 1/h_{oe} = 1/(20 \times 10^{-6} S) = 50 k\Omega$.

Next, calculate the effective load resistance $R_{load}$ at the output. This is the parallel combination of the collector resistor $R_C$ and the external load resistor $R_L$:
$R_{load} = R_C || R_L = \frac{R_C \times R_L}{R_C + R_L} = \frac{3.3 k\Omega \times 10 k\Omega}{3.3 k\Omega + 10 k\Omega} = \frac{33}{13.3} k\Omega \approx 2.48 k\Omega$.

Now, let's calculate the voltage gain using the simplified formula $A_v \approx -\frac{h_{fe} R_{load}}{h_{ie}}$:
$A_v \approx -\frac{100 \times 2.48 k\Omega}{1.5 k\Omega} = -\frac{248}{1.5} \approx -165.33$.
The negative sign indicates a phase inversion.

Now, let's calculate the current gain using the formula $A_i \approx h_{fe} \times \frac{r_o}{r_o + R_{load}}$:
$A_i \approx 100 \times \frac{50 k\Omega}{50 k\Omega + 2.48 k\Omega} = 100 \times \frac{50}{52.48} \approx 100 \times 0.953 \approx 95.3$.

**Question 3 (Application/Design thought):** Why is the input impedance of an amplifier important when it's connected to a signal source? What happens if the input impedance is too low compared to the source impedance?

**Answer:** The input impedance of an amplifier ($Z_{in, amp}$) and the output impedance of the signal source ($Z_{source}$) form a voltage divider at the input of the amplifier. The voltage gain of the amplifier is applied to the voltage delivered to the amplifier's input terminals, not necessarily the voltage produced by the source itself. The formula for the voltage delivered to the amplifier's input is $V_{in, amp} = V_{source} \times \frac{Z_{in, amp}}{Z_{source} + Z_{in, amp}}$.

If the amplifier's input impedance ($Z_{in, amp}$) is too low compared to the source impedance ($Z_{source}$), a significant voltage drop will occur across the source impedance. This means only a small fraction of the source voltage will actually reach the amplifier's input terminals. Consequently, the overall gain of the system (source to amplifier output) will be reduced, potentially leading to a weak amplified signal, even if the amplifier itself has a high intrinsic gain. Therefore, to ensure maximum signal transfer from the source to the amplifier, the amplifier's input impedance should ideally be much higher than the source impedance (a common design goal is $Z_{in, amp} \gg Z_{source}$). This aligns with the principles needed for **Course Outcome 3 (Design amplifier circuits)**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
