---
title: "Transformation of basic signals and circuits to s – domain with and without initial conditions"
subject: "NETWORK THEORY"
module: "Module 3: Laplace transforms and transient analysis: Laplace transforms of standard signals and common functions"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da518"
status: "completed"
scrapedAt: "2026-05-23T17:41:17.091Z"
---
# Network Theory: Module 3 - Laplace Transforms and Transient Analysis

## Topic: Transformation of Basic Signals and Circuits to the s-Domain (with and without Initial Conditions)

Welcome, everyone! Today, we're diving deep into a powerful tool that revolutionizes how we analyze electrical circuits, especially when they're not in their steady, predictable state. We're talking about **Laplace Transforms**, and specifically, how we use them to move from the familiar "time domain" (where we usually think about voltage and current changing over time, represented by $v(t)$ and $i(t)$) to the "s-domain" (where things become algebraic and much easier to manipulate, represented by $V(s)$ and $I(s)$). This is absolutely crucial for understanding **transient analysis**, which is all about what happens in a circuit right after a switch is flipped, a source is connected, or some other change occurs. This directly addresses **Course Outcome 3 (CO3): Analyze transient behavior of electrical networks using Laplace transforms**. By the end of this session, you'll be able to take basic circuit components and signals and represent them in this new s-domain, which is a fundamental skill for analyzing complex circuit behaviors.

### 1. The Essence of the s-Domain: Why Bother?

Think about it: analyzing circuits with differential equations (which describe how voltages and currents change with time) can get really messy. Imagine trying to solve a complex circuit with several capacitors and inductors using calculus every single time. It’s like trying to build a complex piece of furniture using only a hammer and nails – possible, but incredibly inefficient and prone to errors.

The Laplace Transform acts like our universal toolkit, giving us power tools like wrenches and screwdrivers. It transforms differential equations into algebraic equations. Suddenly, calculus problems become algebra problems! This is the magic of moving to the s-domain. As R. Mark Nelms and J. David Irwin emphasize in their "Basic Engineering Circuit Analysis," the Laplace transform converts time-domain integro-differential equations into algebraic equations in the s-domain, simplifying analysis significantly. This shift allows us to handle operations like differentiation and integration with simple multiplication and division by 's'.

#### What is 's'?

Before we dive into transformations, let's quickly clarify what 's' represents. In the context of Laplace transforms, $s$ is a complex frequency, often written as $s = \sigma + j\omega$. It's a mathematical variable that allows us to analyze circuits across a spectrum of frequencies and damping effects simultaneously. Don't get too caught up in its physical meaning for now; focus on its utility in simplifying our circuit equations.

### 2. Laplace Transforms of Basic Signals

Before we transform circuits, we need to transform the "inputs" to our circuits – the signals. These are the sources, like voltage or current sources. Here are some fundamental signal transformations you *must* know. Think of these as our basic building blocks.

#### a) The Unit Step Function, $u(t)$

The unit step function, denoted as $u(t)$, is like a perfect switch. It's zero for all negative time ($t < 0$) and jumps to a value of 1 at time $t=0$ and stays there for all positive time ($t \ge 0$).

$$
u(t) = \begin{cases} 0 & t < 0 \\ 1 & t \ge 0 \end{cases}
$$

*   **Relatable Example:** Imagine you're waiting for a bus. The bus is not there before your arrival ($t<0$), and as soon as you arrive at the bus stop at exactly $t=0$, the bus appears and stays there. That's the unit step!

*   **Laplace Transform:** The Laplace transform of $u(t)$ is:
    $$
    \mathcal{L}\{u(t)\} = U(s) = \frac{1}{s}
    $$
    *   **Why?** The formal definition of the Laplace transform is $F(s) = \int_0^\infty f(t)e^{-st} dt$. For $f(t) = u(t)$, this becomes $\int_0^\infty 1 \cdot e^{-st} dt = \left[-\frac{1}{s}e^{-st}\right]_0^\infty = 0 - (-\frac{1}{s}) = \frac{1}{s}$.
    *   **Exam Hint:** This is one of the most fundamental transforms. If you forget everything else, remember the step function transforms to $1/s$. This is vital for analyzing circuits with switches.

#### b) The Exponential Function, $e^{-at}u(t)$

This is a signal that decays (or grows, if 'a' is negative) exponentially over time. The $u(t)$ is crucial here, meaning the exponential only starts at $t=0$.

$$
e^{-at}u(t)
$$

*   **Relatable Example:** Think about a leaky balloon. If you let out air at a rate proportional to the amount of air remaining, the pressure inside will decrease exponentially. Or, consider a capacitor discharging through a resistor – the voltage across it decays exponentially.

*   **Laplace Transform:**
    $$
    \mathcal{L}\{e^{-at}u(t)\} = \frac{1}{s+a}
    $$
    *   **Connection to $1/s$:** Notice the similarity! This is actually a consequence of the **First Shifting Theorem** (or frequency shifting theorem) of Laplace transforms. If you have a function $F(s) = \mathcal{L}\{f(t)\}$, then $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$. Here, our $f(t)$ is $u(t)$, whose transform is $1/s$. So, $\mathcal{L}\{e^{-at}u(t)\}$ is $(1/s)$ with '$s$' replaced by '$s - (-a)$', which is $s+a$. So, it becomes $1/(s+a)$.

#### c) The Ramp Function, $tu(t)$

The ramp function starts at zero at $t=0$ and increases linearly with time.

$$
tu(t)
$$

*   **Relatable Example:** Imagine filling a swimming pool with a hose that delivers water at a constant rate. The volume of water in the pool increases linearly with time.

*   **Laplace Transform:**
    $$
    \mathcal{L}\{tu(t)\} = \frac{1}{s^2}
    $$
    *   **How to remember?** This comes from another property: the **Integration in the Time Domain** property. If $F(s) = \mathcal{L}\{f(t)\}$, then $\mathcal{L}\left\{\int_0^t f(\tau) d\tau\right\} = \frac{F(s)}{s}$. Alternatively, and more directly applicable here, is the property $\mathcal{L}\{t^n f(t)\} = (-1)^n \frac{d^n F(s)}{ds^n}$. For $f(t)=u(t)$ and $n=1$, we have $f(t)=1$. $\mathcal{L}\{u(t)\} = 1/s$. So, $\mathcal{L}\{t \cdot u(t)\} = (-1)^1 \frac{d}{ds} \left(\frac{1}{s}\right) = -1 \cdot \left(-\frac{1}{s^2}\right) = \frac{1}{s^2}$.
    *   **Generalization:** This pattern continues! $\mathcal{L}\{t^n u(t)\} = \frac{n!}{s^{n+1}}$. So, $t^2 u(t)$ transforms to $2!/s^3 = 2/s^3$, and so on.

#### d) The Sine and Cosine Functions, $\sin(\omega t)u(t)$ and $\cos(\omega t)u(t)$

These are the building blocks of AC analysis, and their Laplace transforms are essential.

*   **Sine:** $\sin(\omega t)u(t)$
    $$
    \mathcal{L}\{\sin(\omega t)u(t)\} = \frac{\omega}{s^2 + \omega^2}
    $$
*   **Cosine:** $\cos(\omega t)u(t)$
    $$
    \mathcal{L}\{\cos(\omega t)u(t)\} = \frac{s}{s^2 + \omega^2}
    $$
    *   **How to remember these?** You can derive them from Euler's formula ($e^{j\theta} = \cos\theta + j\sin\theta$).
        $\cos(\omega t) = \frac{e^{j\omega t} + e^{-j\omega t}}{2}$ and $\sin(\omega t) = \frac{e^{j\omega t} - e^{-j\omega t}}{2j}$.
        Using the transform of $e^{-at}u(t)$ with $a = -j\omega$ and $a = j\omega$:
        $\mathcal{L}\{e^{j\omega t}u(t)\} = \frac{1}{s-j\omega}$ and $\mathcal{L}\{e^{-j\omega t}u(t)\} = \frac{1}{s+j\omega}$.
        Then, substituting these into the expressions for sine and cosine and simplifying (which involves rationalizing the denominator) gives the formulas above.
    *   **Exam Tip:** Notice the denominators are the same: $s^2 + \omega^2$. The numerator distinguishes them: 's' for cosine, $\omega$ for sine. This is a common pattern.

#### e) The Unit Impulse Function, $\delta(t)$

The unit impulse, or Dirac delta function, $\delta(t)$, is a bit abstract. It's zero everywhere except at $t=0$, where it's infinitely tall, but its total area is 1.

$$
\delta(t) = \begin{cases} \infty & t = 0 \\ 0 & t \ne 0 \end{cases}
$$
with the property $\int_{-\infty}^{\infty} \delta(t) dt = 1$.

*   **Relatable Example:** Imagine a hammer hitting a nail. For a very, very short duration, there's an enormous force. If we model this force as an impulse, it's a good representation. It's a sudden, brief input.

*   **Laplace Transform:**
    $$
    \mathcal{L}\{\delta(t)\} = 1
    $$
    *   **Why?** Applying the definition: $\int_0^\infty \delta(t)e^{-st} dt$. Since $\delta(t)$ is zero for $t \ne 0$, the integral is effectively only evaluated at $t=0$. The value of $e^{-st}$ at $t=0$ is $e^0 = 1$. And since the integral of $\delta(t)$ is 1, the result is $1 \times 1 = 1$.
    *   **Importance:** The impulse function is crucial for understanding the "response" of a system to a sudden "kick." Its transform being '1' means it introduces no $s$ term in the transformation, simplifying things greatly.

**Summary Table of Common Laplace Transforms:**
It's good to have this in your notes, but understand *why* these transforms are what they are.

| $f(t)$, $t \ge 0$ | $F(s)$                      |
| :---------------- | :-------------------------- |
| $u(t)$            | $\frac{1}{s}$               |
| $tu(t)$           | $\frac{1}{s^2}$             |
| $t^n u(t)$        | $\frac{n!}{s^{n+1}}$        |
| $e^{-at}u(t)$     | $\frac{1}{s+a}$             |
| $\sin(\omega t)u(t)$ | $\frac{\omega}{s^2 + \omega^2}$ |
| $\cos(\omega t)u(t)$ | $\frac{s}{s^2 + \omega^2}$  |
| $\delta(t)$       | $1$                         |

### 3. Transforming Circuit Elements to the s-Domain

Now, let's see how our familiar circuit components – resistors, inductors, and capacitors – behave in the s-domain. This is where the magic really happens for circuit analysis. We'll transform their voltage-current relationships.

#### a) The Resistor, $R$

This is the simplest one. Ohm's law in the time domain is $v(t) = R i(t)$.
To transform this to the s-domain, we simply take the Laplace transform of both sides:
$\mathcal{L}\{v(t)\} = \mathcal{L}\{R i(t)\}$
$V(s) = R \mathcal{L}\{i(t)\}$
$V(s) = R I(s)$

*   **s-Domain Equivalent:** A resistor in the time domain remains a resistor with the same value $R$ in the s-domain. It's just a simple algebraic relationship $V(s) = R I(s)$. The "impedance" of a resistor is simply $R$.

#### b) The Inductor, $L$

In the time domain, the voltage across an inductor is given by $v(t) = L \frac{di(t)}{dt}$.
Let's take the Laplace transform of both sides:
$\mathcal{L}\{v(t)\} = \mathcal{L}\left\{L \frac{di(t)}{dt}\right\}$
$V(s) = L \mathcal{L}\left\{\frac{di(t)}{dt}\right\}$

Now, we need the Laplace transform of a derivative. This is where initial conditions come into play, but let's first consider the case **without initial conditions** for simplicity, or assuming the inductor is initially relaxed (no stored energy, so $i(0)=0$).

*   **Laplace Transform of a Derivative (without initial conditions):** $\mathcal{L}\left\{\frac{df(t)}{dt}\right\} = sF(s) - f(0)$. If $f(0)=0$, then $\mathcal{L}\left\{\frac{df(t)}{dt}\right\} = sF(s)$.

So, for an inductor with $i(0)=0$:
$V(s) = L (sI(s))$
$V(s) = sLI(s)$

*   **s-Domain Equivalent:** The inductor's impedance in the s-domain is $sL$. This is a fantastic result! What was a differential equation ($v = L \frac{di}{dt}$) becomes an algebraic relation ($V = (sL)I$). $sL$ is the **impedance** of the inductor.

#### c) The Capacitor, $C$

The voltage-current relationship for a capacitor in the time domain is $i(t) = C \frac{dv(t)}{dt}$. However, it's more common to express voltage in terms of current: $v(t) = \frac{1}{C} \int_{-\infty}^t i(\tau) d\tau$. To handle this easily, we usually write the current as a function of voltage: $i(t) = C \frac{dv(t)}{dt}$.

Let's transform the voltage equation $v(t) = \frac{1}{C} \int_{-\infty}^t i(\tau) d\tau$. This integral from $-\infty$ includes any initial charge on the capacitor. A more practical form that incorporates initial conditions directly is:
$v(t) = \frac{1}{C} \int_{0}^t i(\tau) d\tau + v(0)$
where $v(0)$ is the voltage across the capacitor at $t=0$.

Taking the Laplace transform:
$\mathcal{L}\{v(t)\} = \mathcal{L}\left\{\frac{1}{C} \int_{0}^t i(\tau) d\tau\right\} + \mathcal{L}\{v(0)\}$

We know $\mathcal{L}\{i(t)\} = I(s)$.
The Laplace transform of an integral is $\mathcal{L}\left\{\int_0^t f(\tau) d\tau\right\} = \frac{F(s)}{s}$.
And $\mathcal{L}\{v(0)\}$ where $v(0)$ is a constant, is $\frac{v(0)}{s}$.

So,
$V(s) = \frac{1}{C} \frac{I(s)}{s} + \frac{v(0)}{s}$
$V(s) = \frac{I(s)}{sC} + \frac{v(0)}{s}$

Rearranging to find $I(s)$:
$I(s) = C s V(s) - C v(0)$

*   **s-Domain Equivalent:**
    *   The term $\frac{1}{sC}$ is the **impedance** of the capacitor. Notice how the integral in the time domain becomes division by $s$ in the s-domain.
    *   The term $Cv(0)$ represents the **initial condition** voltage. It acts like an independent voltage source in series with the capacitor's impedance. This source has a value of $v(0)$ in the time domain, and its Laplace transform is $v(0)/s$.

    So, in the s-domain, a capacitor can be represented as an impedance of $\frac{1}{sC}$ in series with a voltage source of $\frac{v(0)}{s}$.

    Alternatively, we can think of it as a current source of $-Cv(0)$ in parallel with the impedance $1/(sC)$. Why? Because $I(s) = \frac{V(s)}{1/(sC)} - \frac{Cv(0)}{1/(sC)}$.

    Let's stick to the series representation for clarity: **Capacitor impedance = $1/(sC)$, and an initial voltage $v(0)$ acts as a voltage source $v(0)/s$ in series with the impedance.**

### 4. Including Initial Conditions: The Complete Picture

Now, let's put it all together and formally consider the initial conditions for all elements. This is essential for transient analysis, as most circuits are not starting from a completely zero state.

**The Key Idea:** Initial conditions represent stored energy in the circuit elements (inductors and capacitors) at the moment the analysis begins ($t=0$). The Laplace transform conveniently incorporates these energy storage terms as equivalent sources in the s-domain circuit.

#### a) Resistor (R)

*   **Time Domain:** $v(t) = R i(t)$
*   **s-Domain:** $V(s) = R I(s)$
    *   **Initial Conditions:** Resistors don't store energy, so there are no initial conditions to transform for a resistor itself.

#### b) Inductor (L)

*   **Time Domain:** $v(t) = L \frac{di(t)}{dt}$
*   **Laplace Transform of Derivative:** $\mathcal{L}\left\{\frac{di(t)}{dt}\right\} = sI(s) - i(0)$
*   **s-Domain:**
    $V(s) = L (sI(s) - i(0))$
    $V(s) = sLI(s) - Li(0)$
    $V(s) = (sL)I(s) + (-Li(0))$

*   **s-Domain Equivalent Circuit:** An inductor with initial current $i(0)$ is represented by its s-domain impedance $sL$ in series with a voltage source of value $-Li(0)$. This negative sign is important! It's like a voltage drop that appears in series. Think of it as an internal voltage generated by the stored magnetic flux.
    *   **Impedance:** $Z_L(s) = sL$
    *   **Initial Condition Voltage Source:** $V_{L, initial}(s) = -Li(0)$ (in series)

#### c) Capacitor (C)

*   **Time Domain:** $v(t) = \frac{1}{C} \int_0^t i(\tau) d\tau + v(0)$
*   **Laplace Transform:** $V(s) = \frac{1}{C} \frac{I(s)}{s} + \frac{v(0)}{s}$
    Rearranging for $I(s)$: $I(s) = sCV(s) - Cv(0)$
    $I(s) = (sC)V(s) + (-Cv(0))$

*   **s-Domain Equivalent Circuit:** A capacitor with initial voltage $v(0)$ is represented by its s-domain impedance $\frac{1}{sC}$ in series with a voltage source of value $v(0)$. This voltage source is positive! It represents the initial potential difference across the capacitor's plates.
    *   **Impedance:** $Z_C(s) = \frac{1}{sC}$
    *   **Initial Condition Voltage Source:** $V_{C, initial}(s) = v(0)$ (in series)

    **Crucial Note:** Some textbooks and instructors prefer to represent the initial condition as a current source in parallel. For a capacitor, $I(s) = (sC)V(s) - Cv(0)$. If we consider $I_{split}(s) = sCV(s)$ (impedance $1/sC$) and $I_{initial}(s) = -Cv(0)$, this is a parallel branch. So, a capacitor can be seen as an impedance $1/(sC)$ in parallel with a current source of $-Cv(0)$.

    However, the **series voltage source model is often more intuitive** when transforming circuit diagrams directly from their time-domain configuration.

    **Example: Transforming a Series RL Circuit with Initial Conditions**

    Consider a circuit with a resistor $R$ and an inductor $L$ in series, connected to a voltage source $v_s(t)$. At $t=0$, let the initial current through the inductor be $i(0)$.

    *   **Time Domain Equation:** $v_s(t) = Ri(t) + L\frac{di(t)}{dt}$
    *   **s-Domain Transformation:**
        Take the Laplace transform of both sides:
        $\mathcal{L}\{v_s(t)\} = \mathcal{L}\{Ri(t)\} + \mathcal{L}\left\{L\frac{di(t)}{dt}\right\}$
        $V_s(s) = RI(s) + L(sI(s) - i(0))$
        $V_s(s) = RI(s) + sLI(s) - Li(0)$
        $V_s(s) = (R+sL)I(s) - Li(0)$

    *   **s-Domain Circuit Diagram:**
        The voltage source $v_s(t)$ becomes $V_s(s)$.
        The resistor $R$ becomes its impedance $R$.
        The inductor $L$ becomes its impedance $sL$.
        The initial current $i(0)$ is represented by a voltage source of $-Li(0)$ in series with the inductor's impedance.
        So, the circuit in the s-domain is: $V_s(s)$ is in series with $R$, $sL$, and the voltage source $-Li(0)$. The current is $I(s)$.
        The equation $V_s(s) = (R+sL)I(s) - Li(0)$ can be rearranged to $V_s(s) + Li(0) = (R+sL)I(s)$. This matches our s-domain circuit: the sum of voltage sources ($V_s(s)$ and $-Li(0)$ with the polarity making it add up) divided by the total impedance $(R+sL)$ gives the current $I(s)$.

    **Example: Transforming a Series RC Circuit with Initial Conditions**

    Consider a circuit with a resistor $R$ and a capacitor $C$ in series, connected to a voltage source $v_s(t)$. At $t=0$, let the initial voltage across the capacitor be $v(0)$.

    *   **Time Domain Equation:** $v_s(t) = Ri(t) + v_c(t)$, where $i(t) = C\frac{dv_c(t)}{dt}$.
        Substituting $i(t)$: $v_s(t) = R C \frac{dv_c(t)}{dt} + v_c(t)$
    *   **s-Domain Transformation:**
        Take the Laplace transform of $v_s(t) = R i(t) + v_c(t)$:
        $V_s(s) = R I(s) + V_c(s)$
        We know $I(s) = sC V_c(s) - C v_c(0)$.
        Substitute $I(s)$ into the equation:
        $V_s(s) = R (sC V_c(s) - C v_c(0)) + V_c(s)$
        $V_s(s) = sRC V_c(s) - RC v_c(0) + V_c(s)$
        $V_s(s) = (sRC + 1) V_c(s) - RC v_c(0)$
        Rearranging for $V_c(s)$:
        $V_s(s) + RC v_c(0) = (sRC + 1) V_c(s)$
        $V_c(s) = \frac{V_s(s) + RC v_c(0)}{sRC + 1}$
        $V_c(s) = \frac{V_s(s)}{sRC + 1} + \frac{RC v_c(0)}{sRC + 1}$
        $V_c(s) = \frac{V_s(s)/R}{sC + 1/R} + \frac{v_c(0)}{s + 1/RC}$

    *   **s-Domain Circuit Diagram:**
        The voltage source $v_s(t)$ becomes $V_s(s)$.
        The resistor $R$ becomes impedance $R$.
        The capacitor $C$ with initial voltage $v_c(0)$ becomes impedance $\frac{1}{sC}$ in series with a voltage source of $v_c(0)$.
        So, the circuit in the s-domain is: $V_s(s)$ in series with $R$, $1/(sC)$, and $v_c(0)$.
        The total impedance of the series combination is $R + \frac{1}{sC} = \frac{sRC + 1}{sC}$.
        Using KVL in the s-domain: $V_s(s) + v_c(0) = I(s) \left( R + \frac{1}{sC} \right)$
        $V_s(s) + v_c(0) = I(s) \left( \frac{sRC+1}{sC} \right)$
        $I(s) = \frac{sC(V_s(s) + v_c(0))}{sRC+1}$
        This matches our derived $I(s)$ if we use $I(s) = sCV_c(s) - Cv_c(0)$.
        $I(s) = sC \left( \frac{V_s(s)}{sRC + 1} + \frac{RC v_c(0)}{sRC + 1} \right) - Cv_c(0)$
        $I(s) = \frac{sCV_s(s)}{sRC + 1} + \frac{sRCv_c(0)}{sRC + 1} - \frac{Cv_c(0)(sRC+1)}{sRC + 1}$
        $I(s) = \frac{sCV_s(s)}{sRC + 1} + \frac{sRCv_c(0) - sRCv_c(0) - Cv_c(0)}{sRC + 1}$
        $I(s) = \frac{sCV_s(s) - Cv_c(0)}{sRC + 1} = \frac{C(sV_s(s) - v_c(0))}{sRC + 1}$.
        This is slightly different in form, but algebraically equivalent. The key is that the s-domain circuit accurately represents the KVL equation with initial conditions.

    *   **What this means for CO3:** By transforming the circuit elements and sources to the s-domain, we convert a differential equation (or integro-differential equation) problem into an algebraic problem. We can then use simpler circuit analysis techniques (like KVL, KCL, mesh, node, or even simple algebraic manipulation) to find the s-domain representation of the response, $I(s)$ or $V(s)$. The final step, not covered in this specific topic but crucial for transient analysis, is to perform the **inverse Laplace transform** to get the response back in the time domain, $i(t)$ or $v(t)$.

### 5. Circuits Without Initial Conditions

When we are explicitly told a circuit is "initially relaxed" or "starting from rest," it means all initial currents and voltages are zero ($i(0)=0$ for inductors, $v(0)=0$ for capacitors). In such cases, the initial condition source terms ($Li(0)$ and $v(0)$) simply become zero.

*   **Inductor:** Becomes just its impedance $sL$.
*   **Capacitor:** Becomes just its impedance $\frac{1}{sC}$.

This significantly simplifies the s-domain representation. Circuits that were complicated by differential equations become simple algebraic networks of impedances. For example, a series RLC circuit becomes a series combination of $R$, $sL$, and $\frac{1}{sC}$.

This directly relates to **Course Outcome 4 (CO4): Identify the network functions and parameters of single-port and two-port networks**. The impedance $Z(s) = V(s)/I(s)$ is a fundamental network function. For passive elements, these impedance functions are derived from the s-domain transformations we've just discussed.

### 6. Summary and Key Takeaways for Exams

*   **The Goal:** Convert time-domain differential equations/circuits into s-domain algebraic equations/circuits for easier analysis.
*   **Key Transforms:** Memorize the transforms of basic signals ($u(t)$, $tu(t)$, $e^{-at}u(t)$, $\sin(\omega t)u(t)$, $\cos(\omega t)u(t)$, $\delta(t)$). These are your vocabulary.
*   **Circuit Element Impedances:**
    *   Resistor: $R$
    *   Inductor: $sL$ (with initial condition $i(0)$ acting as a series voltage source of $-Li(0)$)
    *   Capacitor: $\frac{1}{sC}$ (with initial condition $v(0)$ acting as a series voltage source of $v(0)$)
*   **Initial Conditions:** These are crucial for transient analysis. They are represented as independent voltage sources in series with inductors/capacitors. Remember the polarity and sign: $-Li(0)$ for inductors and $+v(0)$ for capacitors.
*   **Circuits without initial conditions:** The initial condition sources vanish, leaving only the impedances. This is simpler, but less representative of most real-world transient scenarios.
*   **Why this helps CO3:** By transforming circuits, we can apply algebraic circuit analysis techniques in the s-domain to find the system's response ($I(s), V(s)$). The final step (inverse transform) brings it back to $i(t), v(t)$. This process is the backbone of transient analysis using Laplace transforms.

---

### Sample Questions with Answers

**Question 1 (Conceptual - Testing understanding of basic transforms and CO4):**
What is the impedance of a capacitor in the s-domain, and how does its initial condition manifest in the s-domain representation?

**Answer:**
The impedance of a capacitor $C$ in the s-domain is $\frac{1}{sC}$. If the capacitor has an initial voltage $v(0)$ across it at time $t=0$, this initial condition is represented as a voltage source with a value of $v(0)$ in series with the capacitor's s-domain impedance. This addition accounts for the stored energy in the capacitor at the start of the analysis. This directly relates to CO4 by defining the network function (impedance) of the capacitor in the s-domain.

**Question 2 (Exam-Oriented - Testing transformation with initial conditions and CO3):**
A voltage source $v_s(t) = 5u(t)$ V is connected to a series RL circuit with $R = 10 \Omega$ and $L = 2$ H. If the initial current through the inductor is $i(0) = 0.5$ A, find the s-domain equation for KVL.

**Answer:**
The KVL equation in the time domain is:
$v_s(t) = R i(t) + L \frac{di(t)}{dt}$

Transforming to the s-domain:
$\mathcal{L}\{v_s(t)\} = \mathcal{L}\{R i(t)\} + \mathcal{L}\{L \frac{di(t)}{dt}\}$

We know:
$\mathcal{L}\{v_s(t)\} = \mathcal{L}\{5u(t)\} = \frac{5}{s}$
$\mathcal{L}\{R i(t)\} = R I(s) = 10 I(s)$
$\mathcal{L}\{L \frac{di(t)}{dt}\} = L (sI(s) - i(0)) = 2 (sI(s) - 0.5)$

Substituting these into the transformed KVL equation:
$\frac{5}{s} = 10 I(s) + 2 (sI(s) - 0.5)$
$\frac{5}{s} = 10 I(s) + 2s I(s) - 1$

Rearranging to solve for $I(s)$:
$\frac{5}{s} + 1 = (10 + 2s) I(s)$
$\frac{5+s}{s} = (10+2s) I(s)$

The s-domain KVL equation is:
$\frac{5}{s} = 10 I(s) + 2s I(s) - 1$
or more commonly written as:
$\frac{5}{s} + 1 = (10 + 2s) I(s)$

This question tests the student's ability to apply CO3 by correctly transforming a basic circuit and its source, including the initial condition for the inductor, into the s-domain representation, leading to an algebraic equation.

**Question 3 (Conceptual - Testing understanding of initial condition representation and CO3):**
When transforming an RC series circuit to the s-domain, if the capacitor has an initial voltage $v(0)$, how is this represented, and why is it important for transient analysis?

**Answer:**
The capacitor's s-domain impedance is $\frac{1}{sC}$. The initial voltage $v(0)$ across the capacitor is represented as an independent voltage source with a value of $v(0)$ in series with the capacitor's impedance. This is important for transient analysis (CO3) because $v(0)$ represents the initial stored energy in the capacitor. Without this term, the analysis would assume the capacitor is initially discharged, leading to an incorrect transient response. The Laplace transform neatly packages this initial energy storage into an equivalent voltage source that can be algebraically manipulated along with the circuit's impedances and external voltage sources in the s-domain.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
