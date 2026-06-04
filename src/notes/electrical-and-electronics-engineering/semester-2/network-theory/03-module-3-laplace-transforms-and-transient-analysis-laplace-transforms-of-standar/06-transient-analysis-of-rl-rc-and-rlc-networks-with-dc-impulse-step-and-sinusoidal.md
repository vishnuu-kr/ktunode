---
title: "Transient analysis of RL, RC and RLC networks with DC, impulse, step and sinusoidal inputs"
subject: "NETWORK THEORY"
module: "Module 3: Laplace transforms and transient analysis: Laplace transforms of standard signals and common functions"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9883"
status: "completed"
scrapedAt: "2026-05-23T16:08:40.948Z"
---
# NETWORK THEORY: MODULE 3 - TRANSIENT ANALYSIS OF RL, RC, AND RLC NETWORKS WITH VARIOUS INPUTS

Welcome, everyone, to Module 3! This module is where we truly bring our circuit analysis to life. We've spent time understanding the steady-state behavior of circuits – what happens after everything settles down. But what about the moments *before* that? The moments when a switch is flipped, a signal suddenly appears, or disappears? Those are the transient moments, and understanding them is crucial for designing anything from a simple dimmer switch to complex communication systems.

This module focuses on **Transient Analysis of RL, RC, and RLC Networks** using the powerful tool of **Laplace Transforms**. You'll see how this mathematical technique, which we'll briefly touch upon as a refresher, allows us to solve differential equations describing circuit behavior in a much more manageable way.

Our main goal here is to understand how circuits with inductors (L) and capacitors (C) react when subjected to different types of inputs: DC, impulse, step, and sinusoidal. This directly ties into **Course Outcome 3 (CO3): Analyze transient behavior of electrical networks using Laplace transforms (Knowledge Level: K4)**. We're not just applying theorems; we're performing detailed analysis to predict the *dynamic* response of these circuits.

***

## 1. The Power of Laplace Transforms: A Quick Recap for Circuit Analysis

Before we dive into circuits, let's remind ourselves why Laplace transforms are so indispensable in circuit analysis, especially for transients. Remember from your earlier studies (and perhaps hinted at in your textbooks like Irwin & Nelms or Van Valkenburg)?

The time-domain equations describing circuits with inductors and capacitors are often differential equations. Solving these directly can be cumbersome. The Laplace transform, developed by Pierre-Simon Laplace, is a mathematical operation that converts a function of time, $f(t)$, into a function of a complex frequency variable, $s$. This transformation turns differential equations into algebraic equations in the 's-domain'. And solving algebraic equations? Much easier!

**The Core Idea:**
*   **Time Domain ($t$):** Where our circuits physically exist, governed by differential equations.
*   **s-Domain ($s$):** The transformed domain, where we deal with algebraic equations.
*   **The Transformation:** $\mathcal{L}\{f(t)\} = F(s)$
*   **The Inverse Transformation:** $\mathcal{L}^{-1}\{F(s)\} = f(t)$

**Why is this brilliant for circuits?**
When we transform circuit elements like resistors, inductors, and capacitors into the s-domain:
*   **Resistor ($R$):** Remains $R$. Simple enough!
*   **Inductor ($L$):** Its impedance becomes $sL$. Think of it as $R_{effective} = sL$.
*   **Capacitor ($C$):** Its impedance becomes $1/(sC)$. Think of it as $R_{effective} = 1/(sC)$.

And crucially, **initial conditions** (like the initial voltage across a capacitor or initial current through an inductor) are automatically incorporated into these s-domain representations. This is key for transient analysis!

This ability to handle initial conditions and simplify differential equations is precisely why the Laplace transform is our go-to tool for **CO3**.

***

## 2. Standard Signals and Their Laplace Transforms

To analyze circuits with various inputs, we need the Laplace transforms of these common input signals. These are fundamental building blocks. You'll find tables of these in all your textbooks (Irwin & Nelms, Kuo, Sudhakar & Shyammohan, Van Valkenburg). Let's highlight the most important ones for transient analysis:

### 2.1 The Unit Step Function, $u(t)$

This is perhaps the most common signal for turning circuits "on." It's zero for $t<0$ and 1 for $t \ge 0$.

$$
u(t) = \begin{cases} 0, & t < 0 \\ 1, & t \ge 0 \end{cases}
$$

*   **Analogy:** Imagine flipping a light switch. Before you flip it, the light is off (0). The moment you flip it, the light turns on and stays on (1). That's the unit step!

*   **Laplace Transform:** $\mathcal{L}\{u(t)\} = \frac{1}{s}$

### 2.2 The Unit Impulse Function, $\delta(t)$

This is a bit more abstract – a pulse that is infinitely high and infinitesimally narrow, with an area of 1. It represents a sudden, very brief energy injection.

$$
\delta(t) = \begin{cases} \infty, & t = 0 \\ 0, & t \ne 0 \end{cases} \quad \text{and} \quad \int_{-\infty}^{\infty} \delta(t) dt = 1
$$

*   **Analogy:** Think of a perfectly sharp, instantaneous "kick" to a system. Like hitting a bell with a hammer – the impact is brief but potent. Or a lightning strike.

*   **Laplace Transform:** $\mathcal{L}\{\delta(t)\} = 1$
    *   **Key point for exams:** The Laplace transform of an impulse is simply 1. This is super useful!

### 2.3 The Exponential Function, $e^{-at}u(t)$

This represents a signal that decays exponentially.

*   **Analogy:** The discharge of a capacitor through a resistor, or a sound wave fading away.

*   **Laplace Transform:** $\mathcal{L}\{e^{-at}u(t)\} = \frac{1}{s+a}$

### 2.4 The Unit Ramp Function, $r(t) = tu(t)$

This is a signal that starts at zero and increases linearly with time.

$$
r(t) = tu(t) = \begin{cases} 0, & t < 0 \\ t, & t \ge 0 \end{cases}
$$

*   **Analogy:** Imagine slowly lifting an object at a constant speed. The height increases linearly with time.

*   **Laplace Transform:** $\mathcal{L}\{tu(t)\} = \frac{1}{s^2}$

### 2.5 Sinusoidal Functions, $\sin(\omega t)u(t)$ and $\cos(\omega t)u(t)$

These are fundamental for AC analysis and many communication signals.

*   **Laplace Transform of $\sin(\omega t)u(t)$:** $\mathcal{L}\{\sin(\omega t)u(t)\} = \frac{\omega}{s^2 + \omega^2}$
*   **Laplace Transform of $\cos(\omega t)u(t)$:** $\mathcal{L}\{\cos(\omega t)u(t)\} = \frac{s}{s^2 + \omega^2}$

**Remember these transforms!** They are the currency we use to move between the time domain and the s-domain. Having them memorized or readily accessible is crucial.

***

## 3. Transient Analysis of RL Circuits

Let's start with the simplest reactive circuit: the RL circuit.

### 3.1 The Series RL Circuit with a DC Input

Imagine a simple circuit: a voltage source ($V_s$), a resistor ($R$), and an inductor ($L$) all in series, with a switch that closes at $t=0$.

*   **Circuit Setup:**
    ```
      Vs -----[SW]----- R ----- L ----- Ground
                  |
                  (Voltage across L is v_L)
                  (Current through circuit is i(t))
    ```

*   **Time-Domain Equation (using Kirchhoff's Voltage Law - KVL):**
    When the switch closes at $t=0$, the voltage source is $V_s u(t)$.
    $v_R(t) + v_L(t) = V_s u(t)$
    $Ri(t) + L \frac{di(t)}{dt} = V_s u(t)$

*   **Initial Condition:** For an inductor, the current cannot change instantaneously. Assuming the circuit was open before $t=0$ and no current was flowing, the initial current $i(0^-) = i(0) = 0$.

*   **Converting to the s-Domain:**
    Applying the Laplace transform to the KVL equation:
    $\mathcal{L}\{Ri(t)\} + \mathcal{L}\{L \frac{di(t)}{dt}\} = \mathcal{L}\{V_s u(t)\}$

    Using the linearity of the Laplace transform and the derivative property ($\mathcal{L}\{\frac{df}{dt}\} = sF(s) - f(0)$):
    $R \cdot I(s) + L[sI(s) - i(0)] = V_s \cdot \frac{1}{s}$

    Since $i(0) = 0$:
    $RI(s) + LsI(s) = \frac{V_s}{s}$

*   **Solving for $I(s)$ (the current in the s-domain):**
    $I(s)(R + sL) = \frac{V_s}{s}$
    $I(s) = \frac{V_s}{s(R + sL)} = \frac{V_s}{L} \frac{1}{s(s + R/L)}$

*   **Partial Fraction Expansion:** To get back to the time domain, we need to decompose $I(s)$.
    $\frac{1}{s(s + R/L)} = \frac{A}{s} + \frac{B}{s + R/L}$
    $1 = A(s + R/L) + Bs$

    Setting $s=0$: $1 = A(R/L) \Rightarrow A = \frac{L}{R}$
    Setting $s=-R/L$: $1 = B(-R/L) \Rightarrow B = -\frac{L}{R}$

    So, $I(s) = \frac{V_s}{L} \left( \frac{L/R}{s} - \frac{L/R}{s + R/L} \right)$
    $I(s) = \frac{V_s}{R} \left( \frac{1}{s} - \frac{1}{s + R/L} \right)$

*   **Inverse Laplace Transform to find $i(t)$:**
    Using the transforms for step and exponential functions:
    $i(t) = \mathcal{L}^{-1}\{I(s)\} = \frac{V_s}{R} \left( \mathcal{L}^{-1}\left\{\frac{1}{s}\right\} - \mathcal{L}^{-1}\left\{\frac{1}{s + R/L}\right\} \right)$
    $i(t) = \frac{V_s}{R} (1 - e^{-(R/L)t}) u(t)$

*   **Understanding the Result:**
    *   The term $\frac{V_s}{R}$ is the **steady-state current**. This makes sense; after a long time, the inductor acts like a short circuit, and only the resistor limits the current.
    *   The term $e^{-(R/L)t}$ shows the exponential decay of the transient part.
    *   The constant $\frac{L}{R}$ is the **time constant** of the RL circuit, often denoted by $\tau$. It dictates how quickly the circuit reaches its steady-state. A larger $\tau$ means a slower response.

*   **Exam Focus:** You'll often be asked to find the current $i(t)$, the voltage across the resistor $v_R(t) = Ri(t)$, or the voltage across the inductor $v_L(t) = L\frac{di(t)}{dt}$. Be prepared to differentiate or multiply the obtained $i(t)$ by $R$ or $L$.

### 3.2 Series RL Circuit with a Sinusoidal Input

Now, what if our voltage source is not DC but a sine wave, say $v_s(t) = V_m \cos(\omega t) u(t)$?

*   **Time-Domain Equation:**
    $Ri(t) + L \frac{di(t)}{dt} = V_m \cos(\omega t) u(t)$
    Initial condition: $i(0) = 0$.

*   **s-Domain Equation:**
    $RI(s) + L[sI(s) - i(0)] = V_m \frac{s}{s^2 + \omega^2}$
    $RI(s) + LsI(s) = V_m \frac{s}{s^2 + \omega^2}$
    $I(s)(R + sL) = V_m \frac{s}{s^2 + \omega^2}$
    $I(s) = \frac{V_m s}{(R+sL)(s^2+\omega^2)} = \frac{V_m}{L} \frac{s}{(s+R/L)(s^2+\omega^2)}$

*   **Partial Fraction Expansion:** This is where it gets a bit more involved.
    $\frac{s}{(s+R/L)(s^2+\omega^2)} = \frac{A}{s+R/L} + \frac{Bs+C}{s^2+\omega^2}$

    Solving this for A, B, and C (using techniques like equating coefficients or substituting values of $s$) will give you constants. This is a standard procedure taught in your math courses and covered in detail in Kuo or Edminister's Schaum's Outline.

    After finding A, B, and C, you'll get $I(s)$ in the form:
    $I(s) = \frac{V_m}{L} \left( \frac{A}{s+R/L} + \frac{Bs}{s^2+\omega^2} + \frac{C}{s^2+\omega^2} \right)$

*   **Inverse Laplace Transform:**
    Taking the inverse transform will yield a transient component (from $e^{-(R/L)t}$) and a steady-state sinusoidal component (from the terms with $s^2+\omega^2$). The transient part will decay over time, leaving only the steady-state response.

    $i(t) = \text{Transient component} + \text{Steady-state component}$
    $i(t) = K_1 e^{-(R/L)t} u(t) + K_2 \cos(\omega t - \phi) u(t)$

    Where $K_1$ accounts for the initial condition, and $K_2, \phi$ describe the steady-state AC response.

*   **Exam Tip:** For AC inputs, the transient analysis focuses on the *initial* response. The steady-state response is what you'd typically find using phasor analysis. The Laplace method elegantly shows both. You'll be tested on your ability to perform the partial fraction decomposition correctly and then apply the inverse Laplace transform.

### 3.3 The RL Circuit with an Impulse Input

An impulse input is like a very short, sharp voltage spike. For example, $v_s(t) = V_0 \delta(t)$.

*   **s-Domain Equation:**
    $RI(s) + LsI(s) - Li(0) = V_0 \cdot 1$
    With $i(0)=0$:
    $I(s)(R + sL) = V_0$
    $I(s) = \frac{V_0}{R+sL} = \frac{V_0}{L} \frac{1}{s+R/L}$

*   **Inverse Laplace Transform:**
    $i(t) = \mathcal{L}^{-1}\left\{\frac{V_0}{L} \frac{1}{s+R/L}\right\} = \frac{V_0}{L} e^{-(R/L)t} u(t)$

*   **Interpretation:** The circuit responds with a decaying exponential current. The initial current is proportional to the "strength" of the impulse ($V_0/L$) and decays with the circuit's time constant $\tau=L/R$. This is a very clean response, showing the natural response of the circuit.

***

## 4. Transient Analysis of RC Circuits

Now, let's look at circuits with resistors and capacitors. The fundamental difference is how the initial conditions are handled, especially for the capacitor.

### 4.1 The Series RC Circuit with a DC Input

Consider a DC voltage source ($V_s$) in series with a resistor ($R$) and a capacitor ($C$), with a switch closing at $t=0$.

*   **Circuit Setup:**
    ```
      Vs -----[SW]----- R ----- C ----- Ground
                  |
                  (Voltage across C is v_C(t))
                  (Current through circuit is i(t))
    ```

*   **Time-Domain Equation (KVL):**
    $v_R(t) + v_C(t) = V_s u(t)$
    $Ri(t) + v_C(t) = V_s u(t)$

    We also know that $i(t) = C \frac{dv_C(t)}{dt}$. Substituting this into the KVL equation:
    $R \left( C \frac{dv_C(t)}{dt} \right) + v_C(t) = V_s u(t)$
    $RC \frac{dv_C(t)}{dt} + v_C(t) = V_s u(t)$

*   **Initial Condition:** For a capacitor, the voltage cannot change instantaneously. Let the initial voltage across the capacitor be $v_C(0) = V_0$. This $V_0$ could be 0 if the capacitor was initially uncharged.

*   **Converting to the s-Domain:**
    $\mathcal{L}\{RC \frac{dv_C}{dt}\} + \mathcal{L}\{v_C(t)\} = \mathcal{L}\{V_s u(t)\}$
    $RC[sV_C(s) - v_C(0)] + V_C(s) = V_s \frac{1}{s}$
    $RC[sV_C(s) - V_0] + V_C(s) = \frac{V_s}{s}$

*   **Solving for $V_C(s)$:**
    $RCsV_C(s) - RCV_0 + V_C(s) = \frac{V_s}{s}$
    $V_C(s)(RCs + 1) = \frac{V_s}{s} + RCV_0$
    $V_C(s) = \frac{V_s}{s(1+RCs)} + \frac{RCV_0}{1+RCs}$
    $V_C(s) = \frac{V_s}{s(1+RCs)} + \frac{CV_0}{s+1/RC}$

    The first term can be simplified by dividing numerator and denominator by $RC$:
    $V_C(s) = \frac{V_s}{RC} \frac{1}{s(s+1/RC)} + \frac{CV_0}{s+1/RC}$

*   **Partial Fraction Expansion (for the first term):**
    $\frac{1}{s(s+1/RC)} = \frac{A}{s} + \frac{B}{s+1/RC}$
    $1 = A(s+1/RC) + Bs$
    Setting $s=0 \Rightarrow 1 = A(1/RC) \Rightarrow A = RC$
    Setting $s=-1/RC \Rightarrow 1 = B(-1/RC) \Rightarrow B = -RC$

    So, $\frac{1}{s(s+1/RC)} = \frac{RC}{s} - \frac{RC}{s+1/RC}$

    Substituting back into $V_C(s)$:
    $V_C(s) = \frac{V_s}{RC} \left( \frac{RC}{s} - \frac{RC}{s+1/RC} \right) + \frac{CV_0}{s+1/RC}$
    $V_C(s) = \frac{V_s}{s} - \frac{V_s}{s+1/RC} + \frac{CV_0}{s+1/RC}$
    $V_C(s) = \frac{V_s}{s} + \frac{CV_0 - V_s}{s+1/RC}$

*   **Inverse Laplace Transform to find $v_C(t)$:**
    $v_C(t) = \mathcal{L}^{-1}\left\{\frac{V_s}{s}\right\} + \mathcal{L}^{-1}\left\{\frac{CV_0 - V_s}{s+1/RC}\right\}$
    $v_C(t) = V_s u(t) + (CV_0 - V_s)e^{-(1/RC)t} u(t)$

    This can be rewritten to group the initial and final values:
    $v_C(t) = V_s + (V_0 - V_s)e^{-t/(RC)} u(t)$

*   **Understanding the Result:**
    *   $V_s$ is the final steady-state voltage across the capacitor (when it's fully charged, no current flows, so it looks like an open circuit).
    *   $V_0$ is the initial voltage.
    *   The term $e^{-t/(RC)}$ shows the exponential decay of the difference between the initial and final voltage.
    *   The **time constant** for an RC circuit is $\tau = RC$.

*   **Analogy:** Imagine filling a bathtub with a hose. The water level starts at $V_0$ (maybe there was some water left from before). The hose supplies water at a rate $V_s$. The rate at which the water level changes depends on the "resistance" to flow and the tub's capacity. Eventually, the tub fills to $V_s$, and the water level stops changing. The $e^{-t/RC}$ term describes how quickly it gets there.

*   **Finding Current $i(t)$:** Once you have $v_C(t)$, you can find $i(t)$ using $i(t) = C \frac{dv_C(t)}{dt}$ or from the KVL equation $i(t) = \frac{V_s - v_C(t)}{R}$.
    $i(t) = C \frac{d}{dt} [V_s + (V_0 - V_s)e^{-t/(RC)}] u(t) + C(V_0-V_s)e^{-t/(RC)}\frac{d}{dt}[u(t)]$ (using product rule, derivative of u(t) is $\delta(t)$)
    $i(t) = C (V_0 - V_s) e^{-t/(RC)}(-1/RC) u(t) + C(V_0-V_s)e^{-t/(RC)}\delta(t)$
    Since $\delta(t)$ is zero everywhere except $t=0$, and $e^{-t/(RC)}$ is finite at $t=0$, the term with $\delta(t)$ is only non-zero at $t=0$. The initial current is $i(0^+) = C(V_0-V_s)(-1/RC) = \frac{V_s-V_0}{R}$. This aligns with $i(0^+) = \frac{V_s - v_C(0^+)}{R} = \frac{V_s-V_0}{R}$.

    The expression for $i(t)$ becomes:
    $i(t) = \frac{V_0 - V_s}{RC} e^{-t/(RC)} u(t) + C(V_0-V_s)e^{-t/(RC)}\delta(t)$
    Or more simply, using $i(t) = \frac{V_s - v_C(t)}{R}$:
    $i(t) = \frac{V_s - [V_s + (V_0 - V_s)e^{-t/(RC)}]}{R} u(t)$
    $i(t) = \frac{-(V_0 - V_s)e^{-t/(RC)}}{R} u(t) = \frac{(V_s - V_0)}{R} e^{-t/(RC)} u(t)$
    This is the current that flows *during* the transient. Notice its initial value depends on the initial capacitor voltage.

### 4.2 Series RC Circuit with an Impulse Input

Let $v_s(t) = V_0 \delta(t)$.

*   **s-Domain Equation:**
    $RC[sV_C(s) - v_C(0)] + V_C(s) = V_0 \cdot 1$
    With $v_C(0)=0$:
    $RCsV_C(s) + V_C(s) = V_0$
    $V_C(s)(RCs + 1) = V_0$
    $V_C(s) = \frac{V_0}{1+RCs} = \frac{V_0/RC}{s+1/RC}$

*   **Inverse Laplace Transform:**
    $v_C(t) = \mathcal{L}^{-1}\left\{\frac{V_0/RC}{s+1/RC}\right\} = \frac{V_0}{RC} e^{-t/(RC)} u(t)$

*   **Interpretation:** The capacitor voltage starts at 0 and rises as a decaying exponential, reaching a maximum at $t=0^+$, then decaying to zero. This shows the natural response of the RC circuit to an initial energy input.

### 4.3 Series RC Circuit with a Step Input and Non-zero Initial Capacitor Voltage

This is a very common scenario. A capacitor might be pre-charged to a certain voltage before the switch is closed.
Let $v_s(t) = V_s u(t)$ and $v_C(0) = V_0$.

We already derived the formula for $v_C(t)$:
$v_C(t) = V_s + (V_0 - V_s)e^{-t/(RC)} u(t)$

*   **Case 1: $V_0 = 0$ (Uncharged capacitor)**
    $v_C(t) = V_s (1 - e^{-t/(RC)}) u(t)$. The capacitor charges exponentially towards $V_s$.

*   **Case 2: $V_0 = V_s$ (Capacitor initially charged to source voltage)**
    $v_C(t) = V_s + (V_s - V_s)e^{-t/(RC)} u(t) = V_s u(t)$. The voltage is already at the final value, so nothing happens.

*   **Case 3: $V_0 > V_s$ (Capacitor initially charged above source voltage)**
    $v_C(t) = V_s + (V_0 - V_s)e^{-t/(RC)} u(t)$. The capacitor voltage will decrease exponentially from $V_0$ towards $V_s$.

    This behavior is critical for understanding phenomena like overshoot or undershoot in circuits.

### 4.4 The RC Circuit with a Sinusoidal Input

Similar to the RL circuit, when a sinusoidal voltage source is applied to an RC circuit, the Laplace transform method will yield a response that consists of a transient term (exponentially decaying) and a steady-state term (sinusoidal at the input frequency). The mathematics involves partial fraction expansion of the s-domain impedance, similar to the RL case.

***

## 5. Transient Analysis of RLC Circuits

Now we combine everything – resistors, inductors, and capacitors. These circuits exhibit the most complex transient behavior, including oscillations.

### 5.1 The Series RLC Circuit with a DC Input

Consider a DC voltage source ($V_s$), resistor ($R$), inductor ($L$), and capacitor ($C$) in series, with a switch closing at $t=0$. Assume $i(0)=0$ and $v_C(0)=V_0$.

*   **Time-Domain Equation (KVL):**
    $v_R(t) + v_L(t) + v_C(t) = V_s u(t)$
    $Ri(t) + L \frac{di(t)}{dt} + v_C(t) = V_s u(t)$

    We need an equation in terms of a single variable. Let's use $i(t)$. We know $v_C(t) = v_C(0) + \frac{1}{C} \int_0^t i(\tau)d\tau$.
    $Ri(t) + L \frac{di(t)}{dt} + V_0 + \frac{1}{C} \int_0^t i(\tau)d\tau = V_s u(t)$

*   **Converting to the s-Domain:**
    $\mathcal{L}\{Ri(t)\} + \mathcal{L}\{L \frac{di(t)}{dt}\} + \mathcal{L}\{V_0\} + \mathcal{L}\{\frac{1}{C} \int_0^t i(\tau)d\tau\} = \mathcal{L}\{V_s u(t)\}$

    Using the integration property ($\mathcal{L}\{\int_0^t f(\tau)d\tau\} = \frac{F(s)}{s}$):
    $RI(s) + L[sI(s) - i(0)] + V_0 \frac{1}{s} + \frac{1}{C} \frac{I(s)}{s} = V_s \frac{1}{s}$

    With $i(0)=0$:
    $RI(s) + LsI(s) + \frac{V_0}{s} + \frac{I(s)}{Cs} = \frac{V_s}{s}$

*   **Solving for $I(s)$:**
    $I(s) \left( R + Ls + \frac{1}{Cs} \right) = \frac{V_s}{s} - \frac{V_0}{s}$
    $I(s) \left( sL + R + \frac{1}{Cs} \right) = \frac{V_s - V_0}{s}$
    $I(s) \left( \frac{s^2LC + sRC + 1}{Cs} \right) = \frac{V_s - V_0}{s}$
    $I(s) = \frac{Cs(V_s - V_0)}{s^2LC + sRC + 1}$
    Divide numerator and denominator by $LC$:
    $I(s) = \frac{\frac{C}{LC}(V_s - V_0)s}{s^2 + \frac{RC}{LC}s + \frac{1}{LC}}$
    $I(s) = \frac{\frac{1}{L}(V_s - V_0)s}{s^2 + \frac{R}{L}s + \frac{1}{LC}}$

*   **Characteristic Equation and Damping:**
    The denominator $s^2 + \frac{R}{L}s + \frac{1}{LC}$ is the **characteristic polynomial**. The roots of this polynomial, $s_1$ and $s_2$, determine the nature of the transient response.
    The general form is $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$, where $\omega_n = \frac{1}{\sqrt{LC}}$ is the **undamped natural frequency** and $\zeta = \frac{R}{2}\sqrt{\frac{C}{L}}$ is the **damping ratio**.

    The roots are given by the quadratic formula:
    $s = \frac{-\frac{R}{L} \pm \sqrt{(\frac{R}{L})^2 - 4\frac{1}{LC}}}{2} = -\frac{R}{2L} \pm \sqrt{\left(\frac{R}{2L}\right)^2 - \frac{1}{LC}}$
    $s = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2 - 1}$

    There are three possible types of damping:
    1.  **Overdamped ($\zeta > 1$):** Two distinct real negative roots. The response is a sum of two decaying exponentials, no oscillations.
    2.  **Critically Damped ($\zeta = 1$):** One repeated real negative root. Fastest response without overshoot.
    3.  **Underdamped ($\zeta < 1$):** Two complex conjugate roots ($s = -\alpha \pm j\omega_d$). The response is a decaying sinusoid. The **damped frequency** is $\omega_d = \omega_n\sqrt{1-\zeta^2}$.

*   **Inverse Laplace Transform for $i(t)$:**
    Depending on the values of $R, L, C$ (which determine $\zeta$), the inverse transform will result in different forms for $i(t)$:
    *   **Overdamped:** $i(t) = K_1 e^{s_1 t} + K_2 e^{s_2 t}$
    *   **Critically Damped:** $i(t) = (K_1 + K_2 t) e^{s t}$
    *   **Underdamped:** $i(t) = e^{-\alpha t}(K_3 \cos(\omega_d t) + K_4 \sin(\omega_d t))$

    The constants $K_1, K_2, K_3, K_4$ are determined by the initial conditions and the specific form of $I(s)$.

*   **Key Takeaway for Exams:** Understanding the relationship between $R, L, C$ and the damping ratio $\zeta$ is crucial. You'll be asked to determine the type of response (overdamped, critically damped, underdamped) given circuit component values. You'll also need to calculate the natural frequency $\omega_n$, damping ratio $\zeta$, and damped frequency $\omega_d$.

### 5.2 Series RLC Circuit with an Impulse Input

If $v_s(t) = V_0 \delta(t)$, the s-domain equation for current becomes:
$I(s) \left( sL + R + \frac{1}{Cs} \right) = V_0$
$I(s) = \frac{V_0}{sL + R + \frac{1}{Cs}} = \frac{V_0 Cs}{s^2LC + sRC + 1} = \frac{\frac{V_0}{L}s}{s^2 + \frac{R}{L}s + \frac{1}{LC}}$

This $I(s)$ expression is similar to the DC case, but the voltage source term is replaced by $V_0$. The transient behavior will again depend on the damping ratio $\zeta$.

### 5.3 Parallel RLC Circuit

While series circuits are good for understanding basic concepts, parallel RLC circuits are also common. The analysis involves converting the series components to their s-domain impedances and then applying circuit analysis techniques like nodal analysis.

*   **Admittance approach:** For a parallel circuit, it's often easier to work with admittances.
    *   Resistor: $G = 1/R$
    *   Inductor: $Y_L = 1/(sL)$
    *   Capacitor: $Y_C = sC$

    The total admittance is $Y_{total} = G + Y_L + Y_C = \frac{1}{R} + \frac{1}{sL} + sC$.
    The input current $I(s)$ applied to this parallel combination would produce a voltage $V(s) = I(s)/Y_{total}$.
    The characteristic equation for the parallel RLC circuit is also derived from $Y_{total}$, leading to similar damping behavior as the series case.

### 5.4 RLC Circuits with Sinusoidal Inputs

When a sinusoidal voltage is applied to an RLC circuit, the s-domain analysis will again yield a solution with both transient and steady-state components. The transient behavior (overdamped, critically damped, underdamped) is governed by the $R, L, C$ values, while the steady-state behavior is determined by the frequency response.

***

## 6. Connecting to Course Outcomes and Exam Preparation

Let's explicitly link this back to our Course Outcomes:

*   **CO3: Analyze transient behavior of electrical networks using Laplace transforms (Knowledge Level: K4).**
    This entire module is dedicated to this! We've seen how to:
    *   Convert differential equations to algebraic s-domain equations.
    *   Incorporate initial conditions naturally.
    *   Use standard signal transforms (step, impulse, sinusoidal).
    *   Apply partial fraction expansion to decompose s-domain functions.
    *   Inverse transform back to the time domain to get the transient response ($i(t)$ or $v(t)$).
    *   Understand how circuit parameters ($R, L, C$) dictate the nature of the transient (overdamped, underdamped, etc.).

    **Exam Focus:** You will be given a circuit with specific component values, an input signal (step, DC, impulse, or sinusoid), and initial conditions. You'll be asked to find a specific current or voltage as a function of time. This requires meticulous application of the Laplace transform method, from writing the KVL/KCL to performing the partial fraction expansion and inverse transform. **Common Pitfalls:** Errors in algebraic manipulation during partial fractions, incorrect initial conditions, or mistakes in applying transform pairs. Practice is key here!

*   **CO1: Analyze electrical networks using mesh and node methods (Knowledge Level: K4).**
    While we're using Laplace transforms for transients, the initial step of writing the circuit equations (KVL or KCL) often involves mesh or node analysis principles to set up the differential equations. So, the foundational skills from Module 1 are still relevant.

*   **CO2: Apply network theorems to analyze electrical networks (Knowledge Level: K3).**
    Superposition can be used in the s-domain, similar to how it's used in the frequency domain or steady-state DC analysis. If you have multiple sources, you can analyze the circuit's response to each source individually and then sum them up in the s-domain, before taking the inverse Laplace transform. Theorems like Thevenin's or Norton's can also be applied to simplify complex networks into equivalent RL or RC circuits before performing transient analysis.

*   **CO4: Identify the network functions and parameters of single-port and two-port networks (Knowledge Level: K2).**
    Network functions, like $H(s) = V_o(s)/V_{in}(s)$ or $H(s) = I_o(s)/V_{in}(s)$, are inherently related to the Laplace transform analysis. In fact, the ratio of the output transform to the input transform in the s-domain *is* the network function. Understanding transient analysis builds the intuition for how these functions dictate the circuit's behavior over time.

***

## Sample Questions and Answers

Here are some sample questions to test your understanding, ranging from conceptual to exam-style.

**Question 1 (Conceptual):**
An inductor's impedance in the s-domain is $sL$. If $s$ is very large (approaching infinity), what does this imply about the inductor's behavior for very high-frequency or rapidly changing signals? Conversely, if $s$ is very small (approaching zero), what does it imply?

**Answer:**
*   **Large $s$ (high frequency/rapid change):** The impedance $sL$ becomes very large. This means the inductor acts like an **open circuit** to high-frequency or rapidly changing signals, opposing the change in current.
*   **Small $s$ (low frequency/slow change):** The impedance $sL$ becomes very small, approaching zero. This means the inductor acts like a **short circuit** to low-frequency or slowly changing signals, offering very little opposition to current flow.

This is a fundamental behavior of inductors that is directly evident from their s-domain impedance.

**Question 2 (Exam Style - RL Circuit):**
Consider a series RL circuit with $R = 10 \Omega$ and $L = 2 \text{ H}$. At $t=0$, a switch closes, connecting the circuit to a DC voltage source of $V_s = 50 \text{ V}$. Assume the initial current through the inductor is zero. Find the current $i(t)$ for $t \ge 0$.

**Answer:**
The circuit is a series RL circuit with a DC step input.
The governing equation is $Ri(t) + L \frac{di(t)}{dt} = V_s u(t)$.
With initial condition $i(0) = 0$.
The time constant $\tau = L/R = 2 \text{ H} / 10 \Omega = 0.2 \text{ s}$.
The steady-state current is $I_{ss} = V_s/R = 50 \text{ V} / 10 \Omega = 5 \text{ A}$.
The transient response for current in a series RL circuit with a DC step input is given by:
$i(t) = I_{ss}(1 - e^{-t/\tau}) u(t)$
Substituting the values:
$i(t) = 5(1 - e^{-t/0.2}) u(t)$
$i(t) = 5(1 - e^{-5t}) u(t) \text{ A}$

**Question 3 (Exam Style - RC Circuit):**
A series RC circuit has $R = 1 \text{ k}\Omega$ and $C = 1 \mu\text{F}$. At $t=0$, a switch closes, connecting the circuit to a DC voltage source of $V_s = 10 \text{ V}$. The capacitor is initially uncharged ($v_C(0) = 0$). Find the voltage across the capacitor, $v_C(t)$, for $t \ge 0$.

**Answer:**
The circuit is a series RC circuit with a DC step input and zero initial capacitor voltage.
The time constant $\tau = RC = (1 \times 10^3 \Omega) \times (1 \times 10^{-6} \text{ F}) = 1 \times 10^{-3} \text{ s} = 1 \text{ ms}$.
The final voltage across the capacitor will be equal to the source voltage, $V_f = V_s = 10 \text{ V}$.
The voltage across the capacitor is given by:
$v_C(t) = V_f + (V_0 - V_f)e^{-t/\tau} u(t)$
Substituting the values ($V_f = 10\text{ V}$, $V_0 = 0\text{ V}$, $\tau = 1 \text{ ms}$):
$v_C(t) = 10 + (0 - 10)e^{-t/0.001} u(t)$
$v_C(t) = 10(1 - e^{-1000t}) u(t) \text{ V}$

**Question 4 (Conceptual - RLC Damping):**
For a series RLC circuit with an input voltage $V_s$, the characteristic equation is $s^2 + \frac{R}{L}s + \frac{1}{LC} = 0$.
If $R = 10 \Omega$, $L = 1 \text{ H}$, and $C = 1 \text{ F}$, what type of transient response will this circuit exhibit? Calculate the damping ratio and the damped natural frequency.

**Answer:**
Given: $R = 10 \Omega$, $L = 1 \text{ H}$, $C = 1 \text{ F}$.
The characteristic equation is $s^2 + \frac{R}{L}s + \frac{1}{LC} = 0$.
Plugging in values: $s^2 + \frac{10}{1}s + \frac{1}{1 \times 1} = 0 \Rightarrow s^2 + 10s + 1 = 0$.

Now, compare this to the standard form $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$.
We have $\omega_n^2 = 1 \Rightarrow \omega_n = 1 \text{ rad/s}$.
And $2\zeta\omega_n = 10$.
Substituting $\omega_n = 1$: $2\zeta(1) = 10 \Rightarrow \zeta = 5$.

Since $\zeta = 5 > 1$, the circuit is **overdamped**.
The damped natural frequency is $\omega_d = \omega_n\sqrt{1-\zeta^2}$.
However, for an overdamped system, $\zeta^2 > 1$, so $1-\zeta^2$ is negative, meaning $\omega_d$ would be imaginary. The concept of damped frequency doesn't apply directly in the same way as for underdamped systems. The roots of the characteristic equation are real and distinct.

Let's find the roots for confirmation:
$s = \frac{-10 \pm \sqrt{10^2 - 4(1)(1)}}{2} = \frac{-10 \pm \sqrt{100 - 4}}{2} = \frac{-10 \pm \sqrt{96}}{2}$
$s = -5 \pm \sqrt{24} = -5 \pm 2\sqrt{6}$
$s_1 \approx -5 + 4.899 = -0.101$
$s_2 \approx -5 - 4.899 = -9.899$
These are two distinct real negative roots, confirming the overdamped response.

This covers the core concepts of transient analysis using Laplace transforms for RL, RC, and RLC circuits with various inputs. Keep practicing these steps, and you'll master this essential topic!
