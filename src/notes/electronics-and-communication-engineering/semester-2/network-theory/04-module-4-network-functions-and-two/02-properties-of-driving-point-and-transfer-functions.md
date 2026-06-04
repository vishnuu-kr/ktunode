---
title: "Properties of driving point and transfer functions"
subject: "NETWORK THEORY"
module: "Module 4: Network functions and two"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da51d"
status: "completed"
scrapedAt: "2026-05-23T17:41:20.530Z"
---
# NETWORK THEORY: Module 4 - Network Functions and Two-Port Networks

## Topic: Properties of Driving Point and Transfer Functions

Welcome, everyone, to Module 4 of Network Theory! Today, we're going to dive into something really fundamental: **Network Functions**. Specifically, we'll be exploring the **properties of driving point and transfer functions**. Think of these functions as the "fingerprints" of a network; they tell us so much about how it behaves when you excite it.

Before we get into the properties, let's quickly refresh what these functions are, connecting back to our Course Outcomes, particularly **CO4: Identify the network functions and parameters of single-port and two-port networks**.

### What are Network Functions?

In essence, a network function is the ratio of a response (usually an output voltage or current) to an excitation (usually an input voltage or current), assuming zero initial conditions. We typically express these in the **s-domain** (using the Laplace variable 's') for ease of analysis, especially when dealing with dynamic circuits containing inductors and capacitors. This is crucial for understanding transient behavior, as outlined in **CO3: Analyze transient behavior of electrical networks using Laplace transforms**.

There are two primary types:

1.  **Driving Point Functions:** These relate a voltage and current *at the same pair of terminals*. The most common example is the **driving point impedance**, $Z_{dp}(s)$, defined as $V(s)/I(s)$ at a specific port. Another is the **driving point admittance**, $Y_{dp}(s) = I(s)/V(s)$. Imagine plugging a signal into one port of a circuit and measuring the current that flows *at that very same port*. That ratio, the driving point impedance, tells you how much "opposition" the network offers to the current at that point.

    *   **Analogy:** Think about the resistance of a light bulb. If you apply a voltage and measure the current at its two terminals, their ratio is its resistance. This resistance is a driving point function. For dynamic circuits, this resistance can change with frequency, hence we use $Z_{dp}(s)$.
    *   **Connection to CO4:** This directly addresses identifying network functions for single-port networks.

2.  **Transfer Functions:** These relate a response at one pair of terminals to an excitation at a *different* pair of terminals. They are typically denoted as $H(s)$. For example, a voltage transfer function $H_{V}(s) = V_{out}(s) / V_{in}(s)$, or a current transfer function $H_{I}(s) = I_{out}(s) / I_{in}(s)$. These are fundamental to understanding how signals are processed and passed through networks, especially in amplifier circuits or filters.

    *   **Analogy:** Consider a microphone and a speaker system. The microphone picks up your voice (input), and the speaker reproduces it (output). The entire system, including amplifiers and wires, has a transfer function that describes how your voice is modified and delivered.
    *   **Connection to CO4:** This is key to understanding network functions for two-port networks.

### Properties of Driving Point Functions

Driving point functions, particularly driving point impedance ($Z_{dp}(s)$) and admittance ($Y_{dp}(s)$), reveal a lot about the network's response when excited at a single port. These properties are largely dictated by the types of components present (R, L, C) and their arrangement.

Let's explore some key properties, keeping in mind how these relate to circuit analysis techniques like mesh and node analysis (**CO1**) and the behavior of circuits (**CO3**).

#### Property 1: Poles and Zeros of $Z_{dp}(s)$ and $Y_{dp}(s)$

*   **What are Poles and Zeros?** A pole of a function is a value of 's' that makes the function infinite. A zero is a value of 's' that makes the function zero. For a rational function like $H(s) = N(s)/D(s)$, the poles are the roots of the denominator polynomial $D(s)$, and the zeros are the roots of the numerator polynomial $N(s)$.

*   **Property:** For a driving point impedance or admittance function of an RLC network, the poles and zeros must *alternate* along the real axis of the s-plane.

*   **Explanation:** This is a very powerful property derived from the structure of RLC networks. If you have a driving point impedance, say $Z_{dp}(s) = K \frac{(s-z_1)(s-z_2)...}{(s-p_1)(s-p_2)...}$, where $z_i$ are zeros and $p_i$ are poles, then when you plot these on the complex s-plane, they will appear along the real axis in an alternating fashion: zero, pole, zero, pole, etc., or pole, zero, pole, zero, etc.

*   **Why does this happen?** Consider a simple series RL circuit. $Z_{dp}(s) = R + sL = L(s + R/L)$. It has one zero at $s = -R/L$ and no finite poles. Now consider a parallel RC circuit. $Y_{dp}(s) = 1/R + sC = C(s + 1/RC)$. It has one zero at $s = -1/RC$ and no finite poles. When you start combining these elements in series and parallel, especially with both L and C, the mathematics of the resulting impedance/admittance functions inherently lead to this alternating pole-zero pattern on the real axis. For an impedance function $Z_{dp}(s)$, poles of $Z_{dp}(s)$ are zeros of $Y_{dp}(s)$ and vice-versa.

*   **Intuition:** Think of this like tuning a radio. Certain frequencies (represented by 's' values) might cause the impedance to be very low (a zero for impedance, meaning current flows easily) or very high (a pole for impedance, meaning current is blocked). The alternating nature suggests a rhythmic response, where the circuit is highly conductive at some points and highly resistive at others, as you sweep through frequencies.

*   **Exam Relevance:** This property is often tested. You might be given a set of pole-zero locations and asked if it can represent a driving point impedance/admittance of an RLC network. The answer is yes, *only if* they alternate on the real axis.
    *   **Quick Tip:** If you see poles and zeros clustered together without alternation on the real axis, it's likely not a valid driving point function for a passive RLC network.

#### Property 2: Behavior at the Origin and Infinity

*   **For Driving Point Impedance ($Z_{dp}(s)$):**
    *   **At $s=0$ (DC):** $Z_{dp}(0)$ represents the DC resistance of the network. If there are no inductors or capacitors connected in a way that shorts the port at DC, $Z_{dp}(0)$ will be finite and non-negative. If there's a direct path for current (like a resistor in series or a short circuit), $Z_{dp}(0)$ will be finite. If the port is open at DC, $Z_{dp}(0)$ will be infinite (a pole at $s=0$).
    *   **At $s=\infty$ (High Frequency):** $Z_{dp}(\infty)$ depends on the nature of series/parallel combinations. For a network consisting of only resistors and inductors in series, $Z_{dp}(s) \to sL$ as $s \to \infty$. For resistors and capacitors in parallel, $Y_{dp}(s) \to sC$ as $s \to \infty$, meaning $Z_{dp}(s) \to 1/(sC)$ as $s \to \infty$. In general, for a passive RLC network, $Z_{dp}(s)$ will behave like $s^k$ for some non-negative integer $k$ at high frequencies. The order of the numerator and denominator polynomials in $Z_{dp}(s)$ cannot differ by more than 1. Specifically, for a driving point impedance, the highest power of 's' in the numerator can be at most one higher than the highest power of 's' in the denominator.

*   **For Driving Point Admittance ($Y_{dp}(s)$):**
    *   **At $s=0$ (DC):** $Y_{dp}(0)$ represents the DC conductance. If the port is open at DC, $Y_{dp}(0) = 0$. If it's a short circuit at DC, $Y_{dp}(0)$ will be finite and non-negative.
    *   **At $s=\infty$ (High Frequency):** Similar to impedance, $Y_{dp}(s)$ will behave like $s^k$ for some non-negative integer $k$. The order of the numerator and denominator polynomials in $Y_{dp}(s)$ cannot differ by more than 1. For a driving point admittance, the highest power of 's' in the numerator can be at most one higher than the highest power of 's' in the denominator.

*   **Connection to Textbook Concepts:** Van Valkenburg (Revised 3/e) and Kuo (2/e) extensively discuss these behaviors in the context of passive network synthesis. They explain how the degree of the numerator and denominator polynomials of $Z_{dp}(s)$ and $Y_{dp}(s)$ are constrained. For example, a driving point impedance of a passive network cannot have a numerator degree greater than the denominator degree by more than one.

*   **Relatable Example:** Imagine a simple R-L series circuit as a voltage source and an impedance. At DC ($s=0$), the inductor acts like a short circuit, so $Z_{dp}(0) = R$. As frequency increases ($s \to \infty$), the inductor's impedance ($sL$) dominates, so $Z_{dp}(s) \approx sL$. Now consider an R-C parallel circuit. At DC ($s=0$), the capacitor is an open circuit, so $Y_{dp}(0) = 1/R$ (finite). As frequency increases ($s \to \infty$), the capacitor's admittance ($sC$) dominates, so $Y_{dp}(s) \approx sC$. This shows how the circuit elements dictate the behavior at extremes.

#### Property 3: Positive Real Functions (PRF)

This is a more advanced but crucial property, especially when we talk about synthesizing circuits from their network functions.

*   **What is a Positive Real Function?** A function $F(s)$ is a Positive Real Function (PRF) if:
    1.  $F(s)$ is real for all real $s \ge 0$.
    2.  $F(s)$ has no poles in the right-half of the s-plane (i.e., for $\text{Re}(s) > 0$). Poles are allowed on the negative real axis and at the origin.
    3.  If $F(s)$ has a pole at $s = j\omega$ (on the imaginary axis), then the residue at that pole must be positive and real.

*   **Property:** Driving point impedance and admittance functions of passive networks are always Positive Real Functions (PRFs). Conversely, any PRF can be realized as the driving point impedance or admittance of a passive network.

*   **Explanation:** This property is deeply rooted in the physical behavior of passive components (R, L, C). Resistors dissipate energy (always positive impedance), inductors store energy magnetically (impedance $sL$, positive for $s>0$), and capacitors store energy electrically (impedance $1/(sC)$, positive for $s>0$). Because these components either dissipate or store energy in a way that doesn't lead to runaway oscillations or amplification in passive networks, their driving point functions must satisfy the PRF criteria. The "positive real" aspect essentially means that for positive frequencies (or positive 's' values), the function's real part is non-negative, indicating no net energy generation.

*   **Exam Relevance:** Understanding the PRF criteria is essential for network synthesis problems. You'll need to check if a given function is a PRF before you can claim it can be realized by a passive network. This is a direct link to synthesis aspects not explicitly in this topic but foundational to network functions.

*   **Connection to Textbooks:** This is a core concept in Kuo's "Network Analysis and Synthesis" and is often covered in detail in books like Abhijit Chakrabarti's "Circuit Theory Analysis and Synthesis." They provide rigorous proofs of why passive network driving point functions are PRFs.

### Properties of Transfer Functions

Transfer functions ($H(s)$) are more general than driving point functions because they describe the relationship between two different ports. They are fundamental to understanding system behavior, filtering, and signal processing.

#### Property 1: Rational Functions

*   **Property:** Transfer functions of linear, lumped-parameter, time-invariant (LTI) networks are always rational functions of 's'. This means they can be expressed as a ratio of two polynomials in 's': $H(s) = \frac{N(s)}{D(s)}$, where $N(s)$ and $D(s)$ are polynomials in 's'.

*   **Explanation:** This stems directly from using Kirchhoff's laws and Laplace transforms. When we set up node or mesh equations for a circuit with R, L, and C components, the resulting algebraic equations in the s-domain involve polynomials in 's'. Solving these equations for a voltage or current at one port in terms of an input at another port naturally yields a ratio of polynomials. The denominator polynomial $D(s)$ is often called the characteristic polynomial of the network. Its roots are the *poles* of the transfer function and determine the natural modes (transient behavior) of the network, as discussed in **CO3**.

*   **Analogy:** Think of a recipe. A rational function is like a ratio of ingredients. The input is like the primary ingredient, and the output is what you get after processing. The "recipe" (the function) tells you how the input ingredient is transformed.

*   **Exam Relevance:** You will often be asked to find the transfer function of a given circuit. The result will always be a ratio of polynomials.

#### Property 2: Poles and Zeros of Transfer Functions

*   **Property:** Unlike driving point functions, the poles and zeros of transfer functions do not have any mandatory alternating pattern on the real axis. They can be located anywhere in the s-plane, with certain restrictions.

*   **Explanation:**
    *   **Poles:** For stability, the poles of any transfer function representing a physical system must lie in the left-half of the s-plane (Re(s) < 0) or on the imaginary axis (Re(s) = 0) for marginally stable systems. Poles in the right-half plane (Re(s) > 0) imply an unstable system that will grow unboundedly. This is a critical concept for system stability.
    *   **Zeros:** Zeros can be located anywhere in the s-plane. They influence the shape of the frequency response and the transient response but do not, by themselves, cause instability.

*   **Connection to CO3:** The location of poles dictates the natural response (transient behavior) of the network.
    *   Real poles in the left-half plane: Indicate decaying exponential terms in the transient response.
    *   Complex conjugate poles in the left-half plane: Indicate damped sinusoidal oscillations.
    *   Poles on the imaginary axis: Indicate sustained oscillations.
    *   Poles in the right-half plane: Indicate growing oscillations or exponentially growing terms, leading to instability.

*   **Example:** Consider a simple voltage divider with a capacitor in series with the load. The voltage across the load can have zeros in the right-half plane if a specific configuration is chosen, but the poles must remain in the left-half plane for stability.

#### Property 3: Behavior at the Origin and Infinity for Transfer Functions

*   **At $s=0$ (DC):** The value of $H(0)$ represents the DC gain of the transfer function. For a voltage transfer function $V_{out}/V_{in}$, $H(0)$ would be the ratio of the output voltage to the input voltage when all frequencies are zero (i.e., under DC conditions). If a transfer function has a zero at $s=0$, it means the output is zero for a DC input (e.g., a capacitor in series with the output). If it has a pole at $s=0$, the output would be infinite for a DC input (which is physically unrealistic for passive networks unless there's an inherent energy source).

*   **At $s=\infty$ (High Frequency):** The behavior of $H(s)$ as $s \to \infty$ tells us how the network passes high-frequency signals.
    *   If $N(s)$ has a lower degree than $D(s)$, $H(\infty) = 0$. This means the network attenuates high frequencies (e.g., a low-pass filter).
    *   If $N(s)$ has the same degree as $D(s)$, $H(\infty)$ is a finite non-zero constant (the ratio of the leading coefficients). This indicates that the network passes high frequencies without significant attenuation (e.g., a band-pass filter with a wide bandwidth or a all-pass filter).
    *   If $N(s)$ has a higher degree than $D(s)$, $H(\infty) \to \infty$, implying amplification of high frequencies. For passive networks, this usually indicates an issue with the assumed network configuration or that the function is not realizable as a passive network's transfer function (e.g., it might require active components or violate causality/stability if it implies infinite gain at infinite frequency).

*   **Connection to CO4:** Understanding these limits is part of identifying the behavior associated with network functions. For two-port networks, the different types of transfer functions (voltage, current, transimpedance, transadmittance) will have these behaviors depending on their structure.

*   **Textbook Mention:** Sudhakar and Shyammohan S. P (5/e) often uses frequency response analysis, where these behaviors at $s=0$ and $s=\infty$ translate to gain at DC and high frequencies, respectively.

#### Property 4: Causality and Realizability

*   **Property:** A physically realizable transfer function for a linear, time-invariant system must be causal. For Laplace domain functions, this implies that poles must lie in the left-half plane or on the imaginary axis (for marginally stable systems). Functions with poles in the right-half plane are non-causal and non-realizable.

*   **Explanation:** Causality means the output of a system cannot occur before the input. In the s-domain, this is directly tied to the location of poles. If a pole is in the RHP, the corresponding natural response grows unboundedly, which is equivalent to saying the output starts "responding" before any input is applied, or that an initial condition in the RHP will cause an unbounded output, which is non-causal behavior.

*   **Exam Relevance:** This is a fundamental check for realizability. A common question is to determine if a given function is physically realizable.

### Connecting to Course Outcomes

Let's explicitly tie this back to our course objectives:

*   **CO1 (Mesh/Node Methods):** The derivation of any network function (driving point or transfer) starts with applying KVL/KCL, typically using mesh or node analysis in the s-domain. The resulting algebraic equations directly lead to the polynomial forms of these functions.
*   **CO2 (Network Theorems):** While not directly the focus here, theorems like superposition (for linear systems) or even concepts from Thevenin/Norton equivalences in the s-domain can simplify the calculation of these functions.
*   **CO3 (Laplace Transforms/Transient Behavior):** This is where network functions shine. The poles of both driving point and transfer functions directly dictate the transient behavior (natural response) of the network. The zeros influence how the natural response is excited by a specific input (forced response).
*   **CO4 (Network Functions/Parameters):** This entire topic is dedicated to understanding what network functions are and their key properties for both single-port (driving point) and two-port networks (transfer functions).

### Summary of Key Takeaways

*   **Driving Point Functions ($Z_{dp}, Y_{dp}$):** Relate voltage/current at the *same* port. Key properties include alternating poles/zeros on the real axis and specific behaviors at $s=0$ and $s=\infty$. They are always Positive Real Functions for passive networks.
*   **Transfer Functions ($H(s)$):** Relate response at one port to excitation at another. They are rational functions with poles that must lie in the LHP for stability. Poles and zeros don't have an alternating requirement.
*   **Poles:** Determine stability and natural response characteristics.
*   **Zeros:** Influence the system's response to specific inputs.
*   **Physical Realizability:** Requires poles to be in the LHP or on the jw-axis.

Remember these properties; they are the foundation for understanding how circuits behave and how to design them to achieve desired responses.

---

## Sample Questions with Answers

Here are a few questions to test your understanding, ranging from conceptual to exam-style:

**Question 1 (Conceptual):**
Can the driving point impedance of a passive RLC network have poles and zeros at $s = -1+j2$, $s = -3$, and $s = -5$? Explain why or why not.

**Answer:**
No, it cannot. For a driving point impedance (or admittance) of a passive RLC network, poles and zeros must alternate along the real axis. In this case, $s = -1+j2$ is a complex pole, and there's no corresponding complex zero to maintain the alternation pattern on the real axis. If the pole was on the real axis, say at $s=-1$, then a zero would be expected at some other real location, and so on. The presence of an isolated complex pole (without its conjugate, which is also implied here if it's a pole of the impedance) or clustered real poles/zeros without alternation violates this fundamental property.

**Question 2 (Exam-Oriented):**
A network function is given by $H(s) = \frac{s+2}{s^2+3s+2}$.
(a) Is this function physically realizable as a transfer function?
(b) What is the behavior of this function at DC and very high frequencies?
(c) What are the poles and zeros of this function? What kind of transient behavior do the poles indicate?

**Answer:**
(a) **Physical Realizability:** The poles are the roots of $s^2+3s+2=0$, which are $(s+1)(s+2)=0$, so $s=-1$ and $s=-2$. Both poles are in the left-half plane (Re(s) < 0). Therefore, the function is physically realizable as a transfer function.

(b) **Behavior at DC ($s=0$):**
$H(0) = \frac{0+2}{0^2+3(0)+2} = \frac{2}{2} = 1$.
The DC gain is 1.

**Behavior at very high frequencies ($s \to \infty$):**
$H(s) = \frac{s+2}{s^2+3s+2}$.
As $s \to \infty$, the highest power of 's' in the numerator is $s^1$, and in the denominator is $s^2$.
$H(s) \approx \frac{s}{s^2} = \frac{1}{s}$ as $s \to \infty$.
So, $H(s) \to 0$ as $s \to \infty$. This indicates that the network attenuates high-frequency signals.

(c) **Poles and Zeros:**
Zeros: The numerator is $s+2$, so there is a zero at $s = -2$.
Poles: The denominator is $s^2+3s+2 = (s+1)(s+2)$, so there are poles at $s = -1$ and $s = -2$.

**Transient Behavior:**
The poles are at $s=-1$ and $s=-2$. Both are real and negative.
The term corresponding to $s=-1$ will be of the form $Ae^{-t}$.
The term corresponding to $s=-2$ will be of the form $Be^{-2t}$.
These indicate two decaying exponential terms in the transient response. Since $s=-2$ is a zero, the zero at $s=-2$ will cause the natural response associated with the pole at $s=-2$ to be suppressed (a phenomenon called "cancellation of pole by zero" or "geometric zero"). Thus, the dominant transient behavior will be characterized by the pole at $s=-1$, meaning the response will decay as $e^{-t}$.

**Question 3 (Conceptual):**
A driving point impedance function $Z_{dp}(s)$ has poles at $s = -2, -4$ and zeros at $s = -1, -3, -5$. Can this be the driving point impedance of a passive RLC network? Justify your answer.

**Answer:**
No, this cannot be the driving point impedance of a passive RLC network. The property for driving point functions is that poles and zeros must alternate along the real axis. Here, we have poles at -2 and -4, and zeros at -1, -3, and -5. The pattern is zero, pole, zero, pole, zero. This looks like alternation. However, let's examine the behavior at infinity. For a driving point impedance, the degree of the numerator polynomial (number of zeros) can be at most one greater than the degree of the denominator polynomial (number of poles). In this case, we have 3 zeros and 2 poles. This means the degree of the numerator is 3 and the degree of the denominator is 2. The difference is 1. So, the degree condition is met ($N(s)$ degree $\le$ $D(s)$ degree + 1).

However, let's re-check the alternation:
Zeros: -1, -3, -5
Poles: -2, -4

Arranged on the real axis:
... (-5) Zero, (-4) Pole, (-3) Zero, (-2) Pole, (-1) Zero ...

This *does* satisfy the alternating pole-zero property on the real axis.

Let's reconsider: What if we were constructing this from components? A network made of R, L, C can only have poles and zeros alternating on the real axis for its driving point impedance or admittance.

**Correction/Refinement of Answer:**
Let's re-state the alternating property clearly. If we have $k$ poles and $m$ zeros, they must appear in sequence on the real axis, like $p_1, z_1, p_2, z_2, \dots$ or $z_1, p_1, z_2, p_2, \dots$.

Given: Zeros at $s = -1, -3, -5$. Poles at $s = -2, -4$.

If we order them: $-5, -4, -3, -2, -1$.
This sequence is: Zero, Pole, Zero, Pole, Zero.
This *is* an alternating pattern.

So, let's check the degree condition again:
Number of zeros ($m$) = 3
Number of poles ($k$) = 2

For a driving point impedance $Z_{dp}(s) = K \frac{\prod(s-z_i)}{\prod(s-p_i)}$:
The degree of the numerator ($m$) can be equal to the degree of the denominator ($k$), or $m = k+1$.
Here, $m=3$ and $k=2$. So, $m = k+1$. This condition is met.

Now, consider the behavior at $s=\infty$.
$Z_{dp}(s) \approx K \frac{s^3}{s^2} = Ks$ as $s \to \infty$.
This behavior ($s$) is permissible for a driving point impedance of a passive network (e.g., a series R-L circuit behaves like $sL$).

**Revised Answer:**
Yes, this could potentially be the driving point impedance of a passive RLC network. The poles and zeros alternate along the real axis (-5 (zero), -4 (pole), -3 (zero), -2 (pole), -1 (zero)). Also, the number of zeros (3) is exactly one more than the number of poles (2), which satisfies the degree condition for a driving point impedance ($m = k+1$). The behavior as $s \to \infty$ would be proportional to $s$, which is also consistent with passive network driving point impedances (e.g., a series inductor's impedance).

*(Self-correction: It's crucial to verify all conditions. The initial thought process correctly identified the alternating pattern but a full check requires considering the degree difference and asymptotic behavior.)*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
