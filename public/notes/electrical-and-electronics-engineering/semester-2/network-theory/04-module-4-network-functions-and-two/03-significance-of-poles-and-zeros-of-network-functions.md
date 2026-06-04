---
title: "Significance of poles and zeros of network functions"
subject: "NETWORK THEORY"
module: "Module 4: Network functions and two"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9887"
status: "completed"
scrapedAt: "2026-05-23T16:08:44.319Z"
---
# NETWORK THEORY: Module 4 - Network Functions and Two-Port Networks

## Topic: Significance of Poles and Zeros of Network Functions

Welcome, everyone, to our exploration of Network Theory! Today, we're diving deep into Module 4, where we'll unravel the power of **Network Functions**. Specifically, we're going to focus on a concept that's absolutely fundamental to understanding how electrical networks behave, especially in the frequency domain: the **significance of poles and zeros** of these network functions.

Before we jump into poles and zeros, let's refresh our understanding of what a network function is. As we've touched upon in our earlier discussions (and as highlighted in textbooks like Van Valkenburg's "Network Analysis," a classic resource), a network function, often denoted as $H(s)$, is essentially a **ratio of the Laplace transform of the output signal to the Laplace transform of the input signal**, assuming zero initial conditions. It's our tool for analyzing circuits in the s-domain, which is a powerful transformation that simplifies our analysis, particularly for circuits with inductors and capacitors. Remember, $s$ here is the complex frequency, $s = \sigma + j\omega$.

This $H(s)$ is typically a **rational function** – a ratio of two polynomials in $s$.
$$ H(s) = \frac{Y(s)}{X(s)} = \frac{a_m s^m + a_{m-1} s^{m-1} + \dots + a_1 s + a_0}{b_n s^n + b_{n-1} s^{n-1} + \dots + b_1 s + b_0} $$
Here, $Y(s)$ is the Laplace transform of the output and $X(s)$ is the Laplace transform of the input.

Now, where do poles and zeros come into play? They are the special values of $s$ that make the network function behave in very specific and important ways.

### What are Poles and Zeros?

Let's define these terms clearly.

*   **Zeros of a network function $H(s)$** are the values of $s$ that make the **numerator polynomial equal to zero**. In other words, they are the roots of the numerator polynomial. When $s$ is a zero, $H(s) = 0$.
*   **Poles of a network function $H(s)$** are the values of $s$ that make the **denominator polynomial equal to zero**. They are the roots of the denominator polynomial. When $s$ is a pole, $H(s)$ becomes infinite (or undefined).

Think of it like this: imagine a musical instrument, say a guitar. The network function is like the sound produced by the guitar strings. The **zeros** are like the frequencies at which the string *doesn't* vibrate much, or where the sound is dampened. The **poles** are like the resonant frequencies, the frequencies at which the string vibrates with great amplitude, producing the loudest and most distinct notes.

This analogy is quite helpful because it directly relates to how poles and zeros influence the *frequency response* of a circuit. Understanding these points is crucial for tasks related to **CO4: Identify the network functions and parameters of single-port and two-port networks**, as poles and zeros are intrinsic to the very definition and behavior of these functions.

### The Significance of Poles and Zeros

So, why do we care so much about these specific values of $s$? Their significance lies in their profound impact on the **magnitude and phase** of the network function, which, in turn, dictates how a circuit will respond to different input frequencies and signals.

#### 1. Determining the Network's Natural Response (Stability and Transient Behavior)

This is perhaps the most critical role of poles. The location of the poles of a network function in the complex $s$-plane tells us about the **natural response** of the network. Remember Course Outcome **CO3: Analyze transient behavior of electrical networks using Laplace transforms**? This is exactly where it connects.

*   **Stability:** A network is considered **stable** if its output remains bounded for any bounded input. In terms of poles, for a network to be stable, **all its poles must lie in the left half of the complex $s$-plane** (i.e., their real part, $\sigma$, must be negative). If even one pole is in the right half-plane ($\sigma > 0$), the network is unstable, meaning its output will grow unboundedly with time, even for a small input. This is a critical concept in system design and is heavily emphasized in many control systems and advanced circuit analysis courses.
*   **Transient Response Characteristics:** The location of poles also dictates how the circuit settles down after a change (e.g., when a switch is closed).
    *   **Poles on the real axis:** These correspond to **exponentially decaying or growing terms** in the time-domain response. If the pole is at $s = -a$ (where $a > 0$), the time-domain response term is $e^{-at}u(t)$, which decays to zero. If it's at $s = +a$ (where $a > 0$), it's $e^{+at}u(t)$, which grows unboundedly (unstable).
    *   **Complex conjugate poles:** If poles occur in complex conjugate pairs, say at $s = -\sigma \pm j\omega_d$, they lead to **oscillatory responses**. The term $e^{-\sigma t}\cos(\omega_d t + \phi)$ represents a damped sinusoid. The real part $\sigma$ determines the rate of decay or growth of these oscillations, and the imaginary part $\omega_d$ determines the frequency of oscillation.
        *   Poles with $\sigma < 0$ (left half-plane) lead to decaying oscillations, which eventually die out. This is typical of a stable, damped system.
        *   Poles with $\sigma > 0$ (right half-plane) lead to growing oscillations, an indication of instability.
        *   Poles on the $j\omega$ axis (i.e., $s = \pm j\omega$) represent sustained oscillations, where the amplitude remains constant. These are often considered marginally stable.

**Example:** Imagine your car's shock absorbers. If they're too soft (like having poles too close to the $j\omega$ axis), the car will bounce up and down for a long time after hitting a bump – the oscillations are slow to die out. If they're too stiff (poles far into the left half-plane with large negative real parts), the ride might be jerky. The ideal shock absorber has poles that quickly damp out oscillations, providing a smooth ride. This is analogous to a stable circuit that quickly settles to its steady state.

**Exam Tip:** For exams, be ready to identify if a network is stable based on the location of its poles. Sketching the $s$-plane and marking the pole locations is a common strategy.

#### 2. Shaping the Frequency Response (Magnitude and Phase Characteristics)

This is where zeros become particularly important, alongside poles. The network function $H(s)$ directly relates to the circuit's behavior when subjected to sinusoidal inputs. If we set $s = j\omega$ (which is what we do to find the sinusoidal steady-state response), $H(j\omega)$ gives us the **frequency response**.

*   **Magnitude Response $|H(j\omega)|$:**
    *   **Zeros at $s=0$:** These tend to attenuate low frequencies.
    *   **Poles at $s=0$:** These tend to amplify low frequencies.
    *   **Zeros on the $j\omega$ axis:** If a zero is exactly on the $j\omega$ axis, say at $s = j\omega_0$, then $H(j\omega_0) = 0$. This means at the frequency $\omega_0$, the output is zero, regardless of the input. This is a **notch filter** characteristic, blocking a specific frequency.
    *   **Poles on the $j\omega$ axis:** If a pole is on the $j\omega$ axis, say at $s = j\omega_0$, then $H(j\omega_0)$ goes to infinity. This indicates **resonance** at that frequency. The circuit amplifies signals at this specific frequency. This is the core of band-pass filters.
    *   **Poles and zeros in the left half-plane:** Their distance from the $j\omega$ axis dictates how quickly the magnitude response changes as frequency changes. Poles closer to the $j\omega$ axis cause steeper rolloffs or sharper peaks in the magnitude response. Zeros also introduce dips or "notches" in the magnitude response.

*   **Phase Response $\angle H(j\omega)$:**
    *   Poles and zeros contribute to the phase shift of the signal. A pole at $s = -\sigma - j\omega_0$ contributes a phase of $-\arctan(\frac{\omega_0}{\sigma - \omega}) - \arctan(\frac{\omega_0}{\sigma + \omega})$. A zero at $s = -\sigma - j\omega_0$ contributes a phase of $+\arctan(\frac{\omega_0}{\sigma - \omega}) + \arctan(\frac{\omega_0}{\sigma + \omega})$.
    *   Poles and zeros on the real axis also contribute phase shifts, but they are simpler: a pole at $s=-a$ contributes $-\arctan(\omega/a)$, and a zero at $s=-a$ contributes $+\arctan(\omega/a)$.
    *   The overall phase response of the network is the sum of the phase contributions from all its poles and zeros. This is crucial for understanding signal distortion and timing in communication systems.

**Example:** Think about audio equalizers. The sliders on an equalizer control the gain at different frequency bands. These sliders effectively adjust the poles and zeros of the audio processing circuit. If you boost the bass, you're increasing the gain around low frequencies, which could be analogous to introducing poles at low frequencies or adjusting zeros at high frequencies. A graphic equalizer uses many such adjustments to shape the sound. This directly relates to **CO4** and its understanding of network functions and parameters.

#### 3. Designing Filters and Shaping Signal Spectra

The ability to place poles and zeros at desired locations in the $s$-plane is the foundation of **filter design**.
*   **Low-pass filters:** These allow low frequencies to pass and attenuate high frequencies. Their network functions typically have poles in the left half-plane and may have zeros at infinity (or very far out).
*   **High-pass filters:** These attenuate low frequencies and allow high frequencies to pass. They often have zeros at the origin ($s=0$) and poles in the left half-plane.
*   **Band-pass filters:** These pass a specific band of frequencies. They are characterized by poles near the $j\omega$ axis and often zeros away from this region.
*   **Band-stop filters (Notch filters):** These block a specific band of frequencies. They are designed with zeros on the $j\omega$ axis at the frequency to be rejected.

Textbooks like Franklin F. Kuo's "Network Analysis and Synthesis" dedicate significant portions to synthesis techniques, which are all about constructing networks with desired pole-zero configurations. This is a direct application of understanding their significance.

#### 4. Simplifying Network Analysis and Understanding System Behavior

*   **Causality:** The requirement for causal systems (systems whose output depends only on present and past inputs, not future ones) means that the network function $H(s)$ must be analytic in the right half of the $s$-plane. This implies that all poles of a causal system must lie in the left half-plane or on the $j\omega$ axis.
*   **Network Function as a Characterization:** The entire behavior of a Linear Time-Invariant (LTI) system can be characterized by its network function $H(s)$. Knowing $H(s)$ is equivalent to knowing the system's response to any input, and the poles and zeros are the key determinants of this response.

### Visualizing Poles and Zeros: The Pole-Zero Plot

To fully grasp their significance, we often use a **pole-zero plot**. This is a scatter plot in the complex $s$-plane:
*   **Zeros are marked with 'o'**.
*   **Poles are marked with 'x'**.

The plot gives us an immediate visual cue about the system's behavior.

**Example:**
Consider a simple RC circuit where $H(s) = \frac{1}{s + a}$.
*   Zero: None.
*   Pole: $s = -a$. If $a > 0$, the pole is on the negative real axis, in the left half-plane, indicating a stable system with exponential decay. The time-domain response is $e^{-at}u(t)$.

Now consider a transfer function with both poles and zeros:
$$ H(s) = \frac{s+z_0}{s+p_0} $$
*   Zero: at $s = -z_0$.
*   Pole: at $s = -p_0$.

If $z_0 = p_0$, $H(s)=1$, a simple gain.
If $z_0 = 0$ and $p_0 > 0$, $H(s) = \frac{s}{s+p_0}$. This is a high-pass filter. It has a zero at the origin, which blocks DC ($s=0$).

The interplay between the locations of poles and zeros is what sculpts the network's characteristics. For instance, a zero "pulls" the magnitude response down to zero at its frequency, while a pole "pushes" it up towards infinity at its frequency.

### Connecting to Course Outcomes

Let's explicitly link this back to our course objectives:

*   **CO1 (Mesh/Node Methods):** While poles and zeros are derived from network functions, which are usually obtained via Laplace transforms, the initial analysis of circuits to derive these functions often relies on mesh and node analysis in the s-domain. For example, finding the impedance of a series RL circuit in the s-domain gives $Z(s) = R + sL$, which is a simple rational function.
*   **CO2 (Network Theorems):** Theorems like superposition, Thevenin's, and Norton's can be applied in the s-domain to simplify circuit analysis and derive network functions. For instance, finding the Thevenin equivalent impedance in the s-domain will yield a function $Z_{Th}(s)$, whose poles and zeros characterize that part of the network.
*   **CO3 (Transient Behavior):** This is where poles are paramount. As discussed, the location of poles dictates the natural modes of the system – the exponential and oscillatory components of the transient response.
*   **CO4 (Network Functions/Parameters):** Poles and zeros *define* the network function. When we talk about $h$-parameters, $y$-parameters, or $z$-parameters for two-port networks, these parameters are themselves often expressed as network functions, and their pole-zero content is vital to understanding the two-port network's behavior as an overall system. For example, the transfer function of a two-port network, relating an input voltage to an output current, will have its own set of poles and zeros.

### Summary and Key Takeaways

Remember these points as you tackle problems and design circuits:

*   **Network functions $H(s)$ are ratios of polynomials, $H(s) = N(s)/D(s)$.**
*   **Zeros are roots of $N(s)$; poles are roots of $D(s)$.**
*   **Pole location dictates stability:** All poles must be in the left half of the $s$-plane for stability.
*   **Pole location dictates transient response:** Real poles give exponentials; complex poles give damped/growing oscillations.
*   **Poles and zeros shape frequency response:** Poles cause resonance (peaks); zeros cause attenuation (notches).
*   **Zeros at $s=0$ attenuate low frequencies; poles at $s=0$ enhance them.**
*   **Zeros on the $j\omega$ axis create nulls (block specific frequencies); poles on the $j\omega$ axis create resonance (amplify specific frequencies).**
*   **The combination of pole and zero locations is the fingerprint of a network's behavior.**

Understanding the significance of poles and zeros is not just about identifying them; it's about interpreting what they tell us about how a circuit will *act* – how it will respond to inputs, how stable it is, and how it will filter or shape signals. This is the essence of designing effective and predictable electrical systems.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, covering conceptual and exam-oriented aspects:

**Q1. A network function has a pole at $s = -2 + j5$. Describe the nature of the transient response associated with this pole.**

**Answer:**
The pole is at $s = -2 + j5$. This is a complex pole located in the left half of the $s$-plane (since the real part, -2, is negative). The presence of complex conjugate poles indicates an oscillatory component in the transient response. The negative real part ($\sigma = -2$) signifies that these oscillations will be **damped**, meaning their amplitude will decrease over time. The imaginary part ($\omega_d = 5$) indicates that the frequency of these oscillations will be 5 radians per second. So, the transient response will exhibit damped sinusoidal oscillations at a frequency of 5 rad/s.

**Reasoning:** The general form of a transient response term due to complex conjugate poles $s = -\sigma \pm j\omega_d$ is $e^{-\sigma t} \cos(\omega_d t + \phi)u(t)$. Here, $\sigma = 2$ and $\omega_d = 5$. The $e^{-2t}$ term causes the decay, and $\cos(5t)$ gives the oscillation.

**Q2. Consider a network function $H(s) = \frac{s}{s+10}$. What is the behavior of this network at $s=0$ (DC) and what type of filter does this resemble?**

**Answer:**
At $s=0$ (DC), $H(0) = \frac{0}{0+10} = 0$. This means that the output of the network is zero when the input is a DC signal.
This network has a zero at the origin ($s=0$) and a pole at $s=-10$. A zero at the origin indicates that the network attenuates or blocks DC frequencies. Systems that block DC and allow higher frequencies to pass are characteristic of **high-pass filters**.

**Reasoning:** The zero at $s=0$ directly causes $H(s)$ to be zero at DC. The pole at $s=-10$ ensures stability and influences the transition from blocked to passed frequencies. This pole-zero placement is a classic configuration for a simple RC high-pass filter.

**Q3. State the condition for the stability of a network in terms of the poles of its network function and explain why this condition is necessary.**

**Answer:**
The condition for the stability of a network is that **all poles of its network function must lie in the left half of the complex $s$-plane**. This means the real part of every pole must be negative ($\text{Re}(s) < 0$).

**Explanation:** When we analyze a network using Laplace transforms, the time-domain response is often expressed as a sum of terms like $A e^{st}u(t)$, where $s$ is a pole of the network function.
*   If $s$ is a negative real number (e.g., $s = -a$ where $a > 0$), the term is $A e^{-at}u(t)$, which decays to zero as time increases. This is a stable, transient response.
*   If $s$ is a complex number with a negative real part (e.g., $s = -\sigma + j\omega$ where $\sigma > 0$), the term is $A e^{-\sigma t} e^{j\omega t}u(t)$. The $e^{-\sigma t}$ factor causes the amplitude of the oscillation $e^{j\omega t}$ to decay to zero over time. This is also a stable response.
*   However, if a pole has a positive real part (e.g., $s = a$ where $a > 0$, or $s = \sigma + j\omega$ where $\sigma > 0$), the corresponding term $A e^{at}u(t)$ or $A e^{\sigma t} \cos(\omega t + \phi)u(t)$ will grow unboundedly as time increases. This means the network's output will become infinitely large for any bounded input, which is the definition of an unstable system. Therefore, all poles must be in the left half-plane for stability.

**Reasoning:** This is a fundamental concept linking the mathematical representation of a system (poles) to its physical behavior (stability). It's directly related to **CO3** on transient analysis.
