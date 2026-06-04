---
title: "Analysis of low pass and high pass RC circuits using Laplace transforms."
subject: "NETWORK THEORY"
module: "Module 3: Laplace transforms and transient analysis: Laplace transforms of standard signals and common functions"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da51a"
status: "completed"
scrapedAt: "2026-05-23T17:41:18.805Z"
---
# Network Theory: Module 3 - Laplace Transforms and Transient Analysis

## Topic: Analysis of Low-Pass and High-Pass RC Circuits Using Laplace Transforms

**(Connecting to Course Outcomes: CO3 - Analyze transient behavior of electrical networks using Laplace transforms (Knowledge Level: K4))**

Welcome, everyone! In this session, we’re going to dive deep into the fascinating world of transient analysis in electrical circuits, specifically focusing on those fundamental building blocks: **RC circuits**. We'll be putting the power of **Laplace transforms** to work, which is a crucial tool for understanding how circuits behave when there’s a sudden change, like switching a voltage source on or off. Remember, understanding transient behavior is key to designing circuits that operate reliably and predictably. This is where our understanding of *how circuits respond over time* truly comes into play, directly linking to **CO3**.

### 1. Why Laplace Transforms for Transient Analysis?

Before we get our hands dirty with circuits, let's quickly recap *why* Laplace transforms are such a game-changer for transient analysis.

Think about a simple circuit. When you flip a switch, the voltage and current don’t instantly jump to their steady-state values. There’s a period of adjustment, a *transient response*. Analyzing this response directly using differential equations can be cumbersome, especially with complex circuits.

The Laplace transform offers an elegant solution by converting these differential equations in the *time domain* (represented by $f(t)$) into algebraic equations in the *frequency domain* (represented by $F(s)$). This transformation simplifies the analysis significantly. We solve the problem in the 's-domain' and then transform the solution back to the time domain using the inverse Laplace transform. It's like translating a difficult problem into a simpler language, solving it, and then translating the answer back! This approach is what makes us capable of *analyzing* the transient behavior as per **CO3**.

**(Relatable Analogy):** Imagine you’re trying to navigate a winding, hilly road (the time domain). It’s tough to see the overall path and anticipate turns. Now, imagine you get an aerial view or a map showing the entire road laid out flat (the 's-domain'). You can easily identify the best route, the steepness of hills, and the turns. The Laplace transform is like getting that aerial view for our circuits!

### 2. The Fundamentals: Key Laplace Transform Pairs

To perform our analysis, we need to know the Laplace transforms of common signals and circuit elements. Here are a few essential ones we'll be using:

*   **Unit Step Function, u(t):** This represents an instantaneous switch turning on at $t=0$. Its Laplace transform is $\mathcal{L}\{u(t)\} = \frac{1}{s}$. Think of it as a light switch that's off before time zero and on after time zero.
*   **Unit Impulse Function, $\delta(t)$:** This is a theoretical signal that is infinitely short and infinitely high, with an area of 1. It represents a sudden, instantaneous event. Its Laplace transform is $\mathcal{L}\{\delta(t)\} = 1$.
*   **Exponential Function, $e^{-at}u(t)$:** Its Laplace transform is $\mathcal{L}\{e^{-at}u(t)\} = \frac{1}{s+a}$. This is crucial for analyzing circuits with decaying responses.

Now, let’s consider the circuit elements in the 's-domain':

*   **Resistor (R):** Its impedance in the s-domain is simply $R$. No change, which is nice and simple.
*   **Capacitor (C):** Its impedance is $Z_C(s) = \frac{1}{sC}$. This is a key transformation! Notice how capacitance, which is reactive in the time domain, becomes an impedance dependent on 's'.
*   **Inductor (L):** Its impedance is $Z_L(s) = sL$. Again, a simple transformation, making inductance a function of 's'.

**(Textbook Reference):** You’ll find these fundamental transform pairs and element impedances detailed in Chapter 14 of "Basic Engineering Circuit Analysis" by Irwin and Nelms, and in Chapter 11 of "Network Analysis and Synthesis" by Franklin F. Kuo. These are essential for building our s-domain models.

### 3. Analyzing the RC Low-Pass Filter

Let's start with one of the most common and intuitive circuits: the **RC Low-Pass Filter**.

**Circuit Configuration:**
Imagine a voltage source $v_{in}(t)$ connected in series with a resistor $R$ and a capacitor $C$. The output voltage $v_{out}(t)$ is taken across the capacitor.

**(Relatable Analogy):** Think of this like a water filter. The input water flow ($v_{in}$) goes through a coarse filter (the resistor) and then a finer filter (the capacitor). A low-pass filter allows low-frequency signals (like slow, steady water flow) to pass through easily, while it attenuates (reduces) high-frequency signals (like sudden surges or rapid ripples). The capacitor, in essence, "smooths out" the voltage fluctuations.

**Circuit Analysis in the Time Domain:**
In the time domain, the behavior of this circuit is governed by Kirchhoff's Voltage Law (KVL):
$v_{in}(t) = i(t)R + v_C(t)$
And the relationship between current and voltage for a capacitor is $i(t) = C \frac{dv_C(t)}{dt}$.
Substituting this into the KVL equation, we get:
$v_{in}(t) = RC \frac{dv_C(t)}{dt} + v_C(t)$
This is a first-order linear differential equation. Solving this directly can be done using methods like integrating factors, but it can get tedious.

**Circuit Analysis in the 's-Domain' using Laplace Transforms:**
Now, let's switch to the 's-domain' for a much smoother ride.

1.  **Transform the circuit components:**
    *   Voltage source $v_{in}(t)$ transforms to $V_{in}(s)$.
    *   Resistor $R$ has impedance $R$.
    *   Capacitor $C$ has impedance $\frac{1}{sC}$.
    *   The output voltage $v_{out}(t)$ transforms to $V_{out}(s)$.

2.  **Apply KVL in the s-domain:**
    $V_{in}(s) = I(s)R + V_{out}(s)$
    where $I(s)$ is the current in the s-domain.

3.  **Relate current and voltage for the capacitor in the s-domain:**
    The current through the capacitor is related to the voltage across it by $I(s) = sC \left(V_{out}(s) - V_C(0^-)\right)$.
    Here, $V_C(0^-)$ represents the initial voltage across the capacitor just before the switch is closed (at $t=0^-$). For simplicity in introductory analysis, we often assume zero initial conditions, meaning $V_C(0^-) = 0$. If there are non-zero initial conditions, they are incorporated as voltage sources in series with the capacitor in the s-domain.

    Let's assume zero initial conditions for now: $I(s) = sC V_{out}(s)$.

4.  **Substitute and solve for the transfer function:**
    Substitute $I(s)$ back into the KVL equation:
    $V_{in}(s) = (sC V_{out}(s))R + V_{out}(s)$
    $V_{in}(s) = V_{out}(s) (sRC + 1)$

    The **transfer function**, $H(s)$, is defined as the ratio of the output to the input in the s-domain:
    $H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{1}{1 + sRC}$

    **(Exam Point):** The transfer function is a very important concept. It encapsulates the circuit's behavior independent of the input signal. You'll often be asked to find the transfer function of a given circuit, which directly relates to **CO4** (identifying network functions).

5.  **Interpreting the Transfer Function:**
    The transfer function $H(s) = \frac{1}{1 + sRC}$ tells us a lot.
    *   **At low frequencies (s approaches 0):** $H(s)$ approaches $\frac{1}{1+0} = 1$. This means $V_{out}(s) \approx V_{in}(s)$, so low-frequency signals pass through with little attenuation.
    *   **At high frequencies (s approaches infinity):** $H(s)$ approaches $\frac{1}{\infty} = 0$. This means $V_{out}(s)$ approaches 0, so high-frequency signals are heavily attenuated.
    This confirms it's a low-pass filter.

6.  **Finding the Transient Response for a Specific Input:**
    Let's say our input is a unit step function, $v_{in}(t) = u(t)$. Its Laplace transform is $V_{in}(s) = \frac{1}{s}$.
    Then, $V_{out}(s) = H(s) V_{in}(s) = \frac{1}{1 + sRC} \cdot \frac{1}{s} = \frac{1}{s(1 + sRC)}$

    To find $v_{out}(t)$, we use partial fraction expansion:
    $\frac{1}{s(1 + sRC)} = \frac{A}{s} + \frac{B}{1 + sRC}$
    $1 = A(1 + sRC) + Bs$

    Setting $s=0$: $1 = A(1) \implies A = 1$.
    Setting $s = -\frac{1}{RC}$: $1 = B(-\frac{1}{RC}) \implies B = -RC$.

    So, $V_{out}(s) = \frac{1}{s} - \frac{RC}{1 + sRC} = \frac{1}{s} - \frac{1}{s + \frac{1}{RC}}$.

    Now, we take the inverse Laplace transform:
    $v_{out}(t) = \mathcal{L}^{-1}\{\frac{1}{s}\} - \mathcal{L}^{-1}\{\frac{1}{s + \frac{1}{RC}}\}$
    $v_{out}(t) = u(t) - e^{-\frac{t}{RC}}u(t)$
    $v_{out}(t) = \left(1 - e^{-\frac{t}{RC}}\right)u(t)$

    **(Interpretation of the result):** This equation tells us that the output voltage across the capacitor starts at 0 (at $t=0$) and rises exponentially towards the input voltage (1V for a unit step). The term $e^{-\frac{t}{RC}}$ is the decay factor, and $RC$ is the **time constant** ($\tau$). The time constant dictates how quickly the capacitor charges. After one time constant ($t=\tau$), the capacitor charges to about 63.2% of the final voltage.

    **(Connecting to CO3):** This step-by-step derivation of $v_{out}(t)$ clearly demonstrates how we *analyze the transient behavior* of the RC low-pass circuit using Laplace transforms. We transform, solve algebraically, and transform back.

### 4. Analyzing the RC High-Pass Filter

Now, let's flip things around and look at the **RC High-Pass Filter**.

**Circuit Configuration:**
This time, the resistor $R$ and capacitor $C$ are in series with the input voltage $v_{in}(t)$, but the output voltage $v_{out}(t)$ is taken across the **resistor**.

**(Relatable Analogy):** Continuing our water filter analogy, in a high-pass filter, the roles are swapped. The input flow ($v_{in}$) first goes through the fine filter (capacitor) and then the coarse filter (resistor). This setup allows high-frequency signals (rapid changes in flow) to pass through to the output (across the resistor) with minimal loss, while low-frequency signals (slow, steady flow) are largely blocked or attenuated by the capacitor. The capacitor acts as a DC block.

**Circuit Analysis in the 's-Domain' using Laplace Transforms:**

1.  **Transform the circuit components:**
    *   $v_{in}(t) \rightarrow V_{in}(s)$
    *   $R \rightarrow R$
    *   $C \rightarrow \frac{1}{sC}$
    *   $v_{out}(t) \rightarrow V_{out}(s)$ (across the resistor)

2.  **Apply KVL in the s-domain:**
    $V_{in}(s) = V_C(s) + V_{out}(s)$
    where $V_C(s)$ is the voltage across the capacitor in the s-domain.

3.  **Relate current and voltage for the capacitor in the s-domain:**
    Assuming zero initial conditions ($V_C(0^-)=0$), the current through the series circuit is $I(s) = \frac{V_C(s)}{1/(sC)} = sC V_C(s)$.
    The voltage across the resistor (our output) is $V_{out}(s) = I(s)R$.
    So, $V_{out}(s) = (sC V_C(s))R = sRC V_C(s)$.

4.  **Express $V_{in}(s)$ in terms of $V_{out}(s)$:**
    From step 2, $V_C(s) = V_{in}(s) - V_{out}(s)$.
    Substitute this into the expression for $V_{out}(s)$:
    $V_{out}(s) = sRC (V_{in}(s) - V_{out}(s))$
    $V_{out}(s) = sRC V_{in}(s) - sRC V_{out}(s)$

    Rearrange to solve for $V_{out}(s)/V_{in}(s)$:
    $V_{out}(s) (1 + sRC) = sRC V_{in}(s)$

5.  **Determine the Transfer Function:**
    The transfer function for the high-pass filter is:
    $H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{sRC}{1 + sRC}$

    **(Textbook Reference):** You can cross-check this derivation with examples in "Circuits and Networks - Analysis and Synthesis" by Sudhakar and Shyammohan S. P, particularly in their chapters on transient analysis using transforms.

6.  **Interpreting the Transfer Function:**
    *   **At low frequencies (s approaches 0):** $H(s)$ approaches $\frac{0}{1+0} = 0$. This indicates that low-frequency signals are blocked or heavily attenuated.
    *   **At high frequencies (s approaches infinity):** We can divide the numerator and denominator by $sRC$: $H(s) = \frac{1}{1/sRC + 1}$. As $s \to \infty$, $1/sRC \to 0$, so $H(s)$ approaches $\frac{1}{0+1} = 1$. High-frequency signals pass through with little attenuation.
    This confirms its characteristic as a high-pass filter.

7.  **Finding the Transient Response for a Specific Input:**
    Let's again consider the input as a unit step function, $v_{in}(t) = u(t)$, so $V_{in}(s) = \frac{1}{s}$.
    Then, $V_{out}(s) = H(s) V_{in}(s) = \frac{sRC}{1 + sRC} \cdot \frac{1}{s} = \frac{RC}{1 + sRC}$.

    To make this easier to find the inverse Laplace transform, we can rewrite it:
    $V_{out}(s) = \frac{RC}{1 + sRC} = \frac{1}{1/RC + s}$
    $V_{out}(s) = \frac{1}{s + 1/RC}$

    Taking the inverse Laplace transform:
    $v_{out}(t) = \mathcal{L}^{-1}\left\{\frac{1}{s + 1/RC}\right\}$
    $v_{out}(t) = e^{-\frac{t}{RC}}u(t)$

    **(Interpretation of the result):** For a unit step input, the output voltage across the resistor starts at 1V (because at the instant of switching, $t=0^+$, the capacitor acts as a short circuit to current) and then decays exponentially towards 0V with a time constant $\tau = RC$. This behavior is characteristic of a high-pass filter's response to a step input – it gives a "kick" that decays away.

    **(Connecting to CO3):** This derivation clearly shows the transient response for the RC high-pass circuit, reinforcing our ability to *analyze transient behavior* using Laplace transforms.

### 5. Incorporating Initial Conditions (Briefly)

What if the capacitor wasn't initially uncharged? For example, if $v_C(0^-) = V_0$.

*   In the s-domain, an initial voltage $V_0$ across a capacitor is modeled as a voltage source of value $V_0$ in series with the capacitor's impedance $\frac{1}{sC}$. The total impedance in series becomes $\frac{1}{sC}$ and a voltage source $V_0$. The current through it is $I(s) = sC(V_{out}(s) - V_C(0^-))$.

*   For the **low-pass filter** with initial voltage $V_0$ across C:
    $V_{in}(s) = I(s)R + V_C(s)$
    $I(s) = sC V_{out}(s) - C V_C(0^-)$
    $V_{in}(s) = (sC V_{out}(s) - C V_0)R + V_{out}(s)$
    $V_{in}(s) = sRC V_{out}(s) - RC V_0 + V_{out}(s)$
    $V_{in}(s) + RC V_0 = V_{out}(s)(1 + sRC)$
    $V_{out}(s) = \frac{V_{in}(s)}{1+sRC} + \frac{RCV_0}{1+sRC}$

    If $V_{in}(s) = 1/s$ (unit step):
    $V_{out}(s) = \frac{1}{s(1+sRC)} + \frac{RCV_0}{1+sRC}$
    $V_{out}(s) = \left(\frac{1}{s} - \frac{RC}{1+sRC}\right) + \frac{RCV_0}{1+sRC}$
    $v_{out}(t) = u(t) - e^{-t/RC}u(t) + V_0 e^{-t/RC}u(t)$
    $v_{out}(t) = (1 - (1-V_0)e^{-t/RC})u(t)$

    This shows that the initial voltage influences the transient response, causing it to start from $V_0$ and head towards 1V.

*   **Remember this**: Always check for initial conditions specified in the problem. They are crucial for accurate transient analysis. This detail is often tested in exams.

### 6. Summary and Key Takeaways

We've seen how Laplace transforms provide a powerful and systematic way to analyze transient behavior in RC circuits.

*   **RC Low-Pass Filter:** Allows low frequencies to pass, attenuates high frequencies. Transfer function $H(s) = \frac{1}{1 + sRC}$. For a unit step input, the output voltage across the capacitor rises exponentially from 0 towards the input voltage.
*   **RC High-Pass Filter:** Allows high frequencies to pass, attenuates low frequencies. Transfer function $H(s) = \frac{sRC}{1 + sRC}$. For a unit step input, the output voltage across the resistor starts at the input voltage and decays exponentially towards zero.
*   **Time Constant ($\tau = RC$):** This parameter is critical. It defines the rate of exponential decay or growth in the transient response. A larger time constant means a slower response.
*   **Initial Conditions:** When present, they affect the transient response and must be included in the s-domain analysis, often as voltage sources in series with capacitors.

By mastering these concepts, you are well on your way to analyzing more complex circuits and understanding how they behave in dynamic situations, directly fulfilling **CO3**. The ability to derive and interpret transfer functions also aligns with **CO4**.

---

## Sample Questions and Answers

**Q1. Conceptual Question:**
What is the primary advantage of using Laplace transforms for analyzing transient behavior in RC circuits compared to solving differential equations directly in the time domain?

**Answer:**
The primary advantage is the **simplification of analysis**. Laplace transforms convert linear differential equations in the time domain into algebraic equations in the s-domain. This transformation allows us to solve circuit problems using algebraic manipulations, which are generally simpler and less error-prone than solving differential equations directly. It also provides a structured way to incorporate initial conditions and obtain the circuit's behavior over time. This directly addresses the "why" behind using Laplace transforms for achieving **CO3**.

**Q2. Exam-Oriented Question:**
For the RC low-pass filter circuit where $v_{in}(t) = 10u(t)$ V, $R = 10 \, \text{k}\Omega$, and $C = 0.1 \, \mu\text{F}$, find the voltage across the capacitor $v_{out}(t)$ assuming zero initial conditions.

**Solution:**
1.  **Identify the circuit:** This is an RC low-pass filter with the output across the capacitor.
2.  **Calculate the time constant:** $\tau = RC = (10 \times 10^3 \, \Omega) \times (0.1 \times 10^{-6} \, \text{F}) = 1 \times 10^{-3} \, \text{s} = 1 \, \text{ms}$.
3.  **Determine the input in the s-domain:** $v_{in}(t) = 10u(t)$ V, so $V_{in}(s) = \frac{10}{s}$.
4.  **Find the transfer function:** For an RC low-pass filter, $H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{1}{1 + sRC}$.
5.  **Calculate $V_{out}(s)$:**
    $V_{out}(s) = H(s) V_{in}(s) = \frac{1}{1 + s(1 \times 10^{-3})} \cdot \frac{10}{s} = \frac{10}{s(1 + 10^{-3}s)}$
6.  **Partial Fraction Expansion:**
    $\frac{10}{s(1 + 10^{-3}s)} = \frac{A}{s} + \frac{B}{1 + 10^{-3}s}$
    $10 = A(1 + 10^{-3}s) + Bs$
    Setting $s=0 \implies 10 = A(1) \implies A=10$.
    Setting $s = -1000 \implies 10 = B(-1000) \implies B = -10 \times 10^{-3} = -0.01$.
    So, $V_{out}(s) = \frac{10}{s} - \frac{0.01}{1 + 10^{-3}s} = \frac{10}{s} - \frac{10}{1000 + s} = \frac{10}{s} - \frac{10}{s + 1000}$.
7.  **Inverse Laplace Transform:**
    $v_{out}(t) = \mathcal{L}^{-1}\left\{\frac{10}{s}\right\} - \mathcal{L}^{-1}\left\{\frac{10}{s + 1000}\right\}$
    $v_{out}(t) = 10u(t) - 10e^{-1000t}u(t)$
    $v_{out}(t) = 10(1 - e^{-1000t})u(t)$ V.

This question tests the application of Laplace transforms, partial fraction expansion, and inverse Laplace transforms to find the time-domain response, aligning with **CO3**.

**Q3. Conceptual Question:**
In an RC high-pass filter with a step voltage input, why does the voltage across the resistor initially jump to the input voltage and then decay?

**Answer:**
At the instant a step voltage is applied ($t=0^+$), the capacitor, due to its property of opposing sudden changes in voltage, acts like a **short circuit to current**. This means that initially, all the input voltage appears across the resistor, as the capacitor offers no opposition to the initial flow of current from the source. However, as time progresses ($t > 0$), the capacitor begins to charge. As charge accumulates, the voltage across the capacitor increases, and consequently, the voltage across the resistor (which is the difference between the input voltage and the capacitor voltage) decreases. This phenomenon is described by the exponential decay term $e^{-t/RC}$ in the output voltage expression for a step input, as derived in our analysis. This explanation relates directly to the transient behavior analysis (**CO3**).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
