---
title: "Pole-zero plot"
subject: "NETWORK THEORY"
module: "Module 4: Network functions and two"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da51f"
status: "completed"
scrapedAt: "2026-05-23T17:41:22.491Z"
---
## NETWORK THEORY: MODULE 4 - NETWORK FUNCTIONS AND TWO-PORT NETWORKS

### Topic: Pole-Zero Plot – Understanding System Behavior

Welcome back, everyone! In our journey through Network Theory, we've been building a robust understanding of how electrical networks behave. Today, we dive into a fascinating topic that provides a powerful visual representation of our system's characteristics: the **Pole-Zero Plot**.

This concept is deeply intertwined with what we call **Network Functions** (often denoted as $H(s)$ or $Y(s)$, $Z(s)$, etc., depending on what we're looking at – voltage/current ratio, impedance, etc.). Remember, a network function is essentially the ratio of a response to an excitation in the Laplace domain. It's our mathematical fingerprint of the network. And the pole-zero plot? It's the DNA analysis of that fingerprint!

**How does this tie into our Course Objectives?**

*   **CO4: Identify the network functions and parameters of single-port and two-port networks (Knowledge Level: K2).** Absolutely! The pole-zero plot is a direct way to visualize and understand the properties of these network functions. Knowing where the poles and zeros are tells us a lot about the network's behavior.
*   **CO3: Analyze transient behavior of electrical networks using Laplace transforms (Knowledge Level: K4).** This is where the real magic happens. The location of poles and zeros directly dictates how a network will respond to different inputs, especially during the transient phase – that initial "settling down" period after a change. Think of it like flicking a switch; the poles and zeros tell us *how* the light bulb will brighten, not just *if* it will.
*   **CO1 & CO2 (Knowledge Level K4 & K3):** While not directly about pole-zero plots, understanding network functions and their behavior (which the pole-zero plot illuminates) is fundamental to analyzing networks using mesh/node methods and applying network theorems. A system with poles near the imaginary axis might exhibit oscillations, which is a critical observation for stability analysis and theorem application.

Let's get into the core concepts.

### What are Poles and Zeros?

Imagine our network function $H(s)$ as a fraction of two polynomials in 's' (where 's' is the complex Laplace variable, $s = \sigma + j\omega$).

$$H(s) = K \frac{(s - z_1)(s - z_2)...(s - z_m)}{(s - p_1)(s - p_2)...(s - p_n)}$$

Here:

*   **Zeros ($z_i$):** These are the values of 's' that make the numerator of the network function equal to zero. When $s = z_i$, the output of the network becomes zero (assuming a non-zero input at that 's' value). Think of zeros as "zeros of transmission" or frequencies where the network completely blocks or attenuates the signal.
*   **Poles ($p_j$):** These are the values of 's' that make the denominator of the network function equal to zero. When $s = p_j$, the network function tends to infinity. Poles are fundamentally linked to the natural response or the inherent modes of the system. They tell us about the system's stability and the types of transient responses we can expect.

**Analogy Time:** Think of a musical instrument, like a guitar. When you pluck a string, it vibrates at specific frequencies, producing sound. These natural resonant frequencies are like the **poles** of the guitar's "acoustic function." If you have a broken string or a loose part, it might vibrate at an unwanted frequency, leading to buzzing or distortion – these are like "bad" poles. The **zeros** would be like frequencies that the guitar *doesn't* naturally produce or amplify effectively, perhaps due to the instrument's design or how you're holding it. A well-designed guitar has poles that create pleasing musical tones and no annoying "zeros" that kill the sound.

### Constructing the Pole-Zero Plot

The pole-zero plot is a graphical representation of these complex numbers ($z_i$ and $p_j$) on the **complex 's'-plane**.

*   The horizontal axis represents the **real part** of 's' ($\sigma$).
*   The vertical axis represents the **imaginary part** of 's' ($\omega$).

**Convention:**

*   **Zeros** are marked with **'o' (circles)**.
*   **Poles** are marked with **'x' (crosses)**.

The plot also shows the **gain constant (K)**, which scales the overall magnitude of the response.

**Example 1: A Simple RC Low-Pass Filter**

Consider a series RC circuit with a voltage source $V_{in}(s)$ and the output voltage $V_{out}(s)$ taken across the capacitor. The transfer function $H(s) = \frac{V_{out}(s)}{V_{in}(s)}$ is:

$$H(s) = \frac{1/sC}{R + 1/sC} = \frac{1}{1 + sRC}$$

Let's rewrite this in the standard form:

$$H(s) = \frac{1}{RC(s + \frac{1}{RC})}$$

From this, we can identify:

*   **Zero:** There are no finite zeros (or you can think of a zero at infinity, but that's less commonly plotted). The numerator is a constant '1'.
*   **Pole:** The denominator is zero when $s = -\frac{1}{RC}$. So, we have a pole at $p_1 = -\frac{1}{RC}$.
*   **Gain Constant (K):** $K = \frac{1}{RC}$.

Now, let's visualize this on the s-plane. The pole is located on the **negative real axis**.

```
       jω
        ^
        |
        |
--------+--------> σ
        |      x
        |
```

Here, 'x' denotes the pole at $s = -1/(RC)$. This pole being on the negative real axis tells us a lot. We'll discuss what these locations mean shortly.

**Reference Check:** You'll find this concept explored in depth in Kuo's "Network Analysis and Synthesis" and Van Valkenburg's "Network Analysis," where they emphasize how the rational function form of $H(s)$ leads directly to pole and zero locations.

### Interpretation: What Do Pole and Zero Locations Tell Us?

This is the crucial part, folks. The beauty of the pole-zero plot lies in its ability to predict system behavior without complex calculations every time. The location of poles and zeros in the s-plane is directly related to the system's **natural response** and its **stability**.

Let's break down the s-plane into regions:

1.  **The Left-Half Plane (LHP): $\sigma < 0$**
    *   **Poles in the LHP:** If all poles lie in the left-half of the s-plane (i.e., $\sigma < 0$), the system is **stable**. The transient response will eventually decay to zero.
        *   **Poles on the negative real axis ($\sigma < 0, \omega = 0$):** These contribute to **non-oscillatory** decay. The closer the pole is to the origin (i.e., the larger the negative value of $\sigma$), the faster the decay. Think of a very quick settling time.
        *   **Complex conjugate poles in the LHP ($\sigma < 0, \omega \neq 0$):** These contribute to **damped oscillations**. The real part ($\sigma$) determines the rate of decay (how quickly the oscillations die out), and the imaginary part ($\omega$) determines the frequency of oscillation. As seen in Irwin & Nelms, the magnitude of $\sigma$ dictates the damping factor.

2.  **The Right-Half Plane (RHP): $\sigma > 0$**
    *   **Poles in the RHP:** If even a single pole lies in the right-half of the s-plane (i.e., $\sigma > 0$), the system is **unstable**. The transient response will grow unbounded with time, leading to oscillation or runaway behavior. This is critical in power systems and control systems – you *always* want your poles in the LHP!

3.  **The Imaginary Axis: $\sigma = 0$**
    *   **Poles on the imaginary axis ($\sigma = 0, \omega \neq 0$):** If there are poles on the imaginary axis, and they are **simple poles** (meaning they appear only once in the denominator), the system is **marginally stable**. The transient response will oscillate indefinitely without decaying or growing. This is often seen in resonant circuits.
    *   **Poles at the origin ($\sigma = 0, \omega = 0$):** Poles at the origin usually indicate an **integrator-like behavior** and can lead to instability or uncontrollability in a practical sense, often related to ramp inputs or systems that can accumulate error.

**Zeros and their influence:** Zeros don't directly cause instability, but they *do* significantly affect the *shape* and *magnitude* of the response, including the transient response.
*   A zero can sometimes cancel out a pole's effect if they are at the same location, but this is a perfect cancellation and rare in practice.
*   Zeros influence the initial conditions of the response and can create "non-minimum phase" behavior, where the initial response might be in the opposite direction of the steady-state response.

**Example 2: Let's consider a transfer function with both poles and zeros.**

Suppose we have $H(s) = \frac{s+2}{(s+1)(s+3)}$.

*   **Zeros:** $z_1 = -2$ (a pole on the negative real axis).
*   **Poles:** $p_1 = -1$, $p_2 = -3$ (two poles on the negative real axis).

The pole-zero plot would look like this:

```
       jω
        ^
        |
--------+--------> σ
    x   o   x
   p1  z1  p2
```

Both poles are in the LHP, so this system is stable. The pole at $s=-1$ will decay slower than the pole at $s=-3$. The zero at $s=-2$ will shape the overall response.

**Recall from Sudhakar & Shyammohan:** They emphasize that poles determine the *types* of transient responses (exponential decay, oscillatory decay) and their speed, while zeros influence the *amplitude* and *phase* of the response.

### Connecting to System Order and Roots

The number of poles of a network function is generally equal to the **order of the differential equation** describing the network. For a rational network function $H(s) = N(s)/D(s)$, the degree of the denominator polynomial $D(s)$ gives us the order of the system. This order is also equal to the number of **independent energy storage elements** (capacitors and inductors) in the network.

**Exam Tip:** When asked about the stability of a network, the first thing you should do is find the network function and identify its poles. If any pole has a positive real part, it's unstable. If all poles have negative real parts, it's stable. If poles are on the imaginary axis (and are simple), it's marginally stable. This is a direct application of CO4 and CO3.

### Poles and Zeros of Common Network Functions

*   **Impedance ($Z(s)$):** Poles of $Z(s)$ are the frequencies where the impedance is infinite. Zeros of $Z(s)$ are frequencies where the impedance is zero.
*   **Admittance ($Y(s)$):** Poles of $Y(s)$ are frequencies where the admittance is infinite (i.e., impedance is zero). Zeros of $Y(s)$ are frequencies where the admittance is zero (i.e., impedance is infinite).
*   **Transfer Functions ($H(s) = V_{out}(s)/V_{in}(s)$ or $I_{out}(s)/I_{in}(s)$ etc.):** As we've seen, poles dictate the natural modes of the system and stability. Zeros affect the way these modes are excited and the overall system response.

### Visualizing Frequency Response from Pole-Zero Plot

The pole-zero plot is not just for transient analysis; it's also a powerful tool for understanding the **frequency response** ($H(j\omega)$).

*   **Magnitude Response $|H(j\omega)|$:** For a frequency $\omega$ on the $j\omega$ axis (where $s = j\omega$), the magnitude $|H(j\omega)|$ is proportional to the product of the distances from the point $j\omega$ on the imaginary axis to the zeros, divided by the product of the distances from $j\omega$ to the poles.
    $$|H(j\omega)| = K \frac{\prod |j\omega - z_i|}{\prod |j\omega - p_j|}$$
    *   As $j\omega$ gets closer to a zero, $|H(j\omega)|$ gets smaller (approaches zero).
    *   As $j\omega$ gets closer to a pole, $|H(j\omega)|$ gets larger (approaches infinity).

*   **Phase Response $\angle H(j\omega)$:** The phase angle $\angle H(j\omega)$ is the sum of the angles from each zero to the point $j\omega$, minus the sum of the angles from each pole to $j\omega$.
    $$\angle H(j\omega) = \sum \angle (j\omega - z_i) - \sum \angle (j\omega - p_j)$$

**Intuition for Frequency Response:**
Imagine "scanning" along the $j\omega$ axis (which represents actual frequencies) on the s-plane.
*   If you're passing a point close to a zero on the imaginary axis, the magnitude will dip.
*   If you're passing a point close to a pole on the imaginary axis, the magnitude will peak.

This is why an RC low-pass filter, with its pole on the negative real axis (away from the $j\omega$ axis), has a smooth magnitude response that rolls off. If we had a system with a pole *on* the $j\omega$ axis, we'd see a resonance or a peak at that frequency.

**From Van Valkenburg:** He masterfully explains how the "variable real frequency $\omega$" corresponds to points along the $j\omega$ axis. The magnitude and phase at any $j\omega$ can be visualized by drawing vectors from the poles and zeros to that point. This is a core concept for understanding filters and resonant circuits.

### Common Pitfalls and Quick Recall

*   **Confusing Poles and Zeros:** Always remember: Poles are roots of the denominator ($x$), Zeros are roots of the numerator ($o$).
*   **Stability is determined SOLELY by pole locations.** Zeros affect the response shape but not stability itself.
*   **Sign of the Real Part:** $\sigma < 0$ for stability. If $\sigma > 0$, it's unstable.
*   **Imaginary Axis:** Poles here mean marginal stability or oscillations.

### Summary for Exams and Concepts

The pole-zero plot is your 'x-ray' vision for network functions. It's a direct visual link between the mathematical representation ($H(s)$) and the physical behavior (transient response, stability, frequency response).

*   **Poles:** Dictate stability and the natural modes (decaying exponentials, damped oscillations).
*   **Zeros:** Shape the response, affecting magnitude and phase.
*   **Location matters:** Left Half Plane (LHP) = stable. Right Half Plane (RHP) = unstable. Imaginary axis = marginal stability.
*   **Distances on the s-plane:** From a point $j\omega$ on the imaginary axis, distance to a pole/zero influences magnitude and phase.

Mastering the pole-zero plot is key to fulfilling CO3 and CO4, and it provides the foundational understanding needed for deeper analysis in CO1 and CO2.

---

### Sample Questions with Answers

**Q1. (Conceptual) What is the primary significance of poles in the context of a network function's pole-zero plot?**

**Answer:** The primary significance of poles is their direct correlation with the **stability** of the network and the **natural modes of its response**. The location of poles in the s-plane dictates whether the transient response will decay to zero (stable), grow unboundedly (unstable), or oscillate indefinitely (marginally stable). They are roots of the denominator of the network function.

**Q2. (Exam-Oriented) A network function is given by $H(s) = \frac{s+5}{(s+2)(s^2 + 4s + 8)}$. Determine the location of all poles and zeros and comment on the stability of the network.**

**Solution:**
First, we factorize the denominator:
The quadratic term is $s^2 + 4s + 8$. Using the quadratic formula $s = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$s = \frac{-4 \pm \sqrt{4^2 - 4(1)(8)}}{2(1)} = \frac{-4 \pm \sqrt{16 - 32}}{2} = \frac{-4 \pm \sqrt{-16}}{2} = \frac{-4 \pm j4}{2} = -2 \pm j2$.

So, the denominator can be written as $(s+2)(s - (-2+j2))(s - (-2-j2))$.

The network function is:
$H(s) = \frac{s+5}{(s+2)(s+2+j2)(s+2-j2)}$

*   **Poles:**
    *   $p_1 = -2$ (on the negative real axis)
    *   $p_2 = -2 + j2$ (in the Left Half Plane)
    *   $p_3 = -2 - j2$ (in the Left Half Plane)

*   **Zeros:**
    *   $z_1 = -5$ (on the negative real axis)

**Stability Comment:** All three poles ($p_1, p_2, p_3$) have negative real parts ($\text{Re}(p_1) = -2$, $\text{Re}(p_2) = -2$, $\text{Re}(p_3) = -2$). Therefore, the network is **stable**. The complex conjugate poles at $-2 \pm j2$ indicate that the transient response will contain damped oscillatory components with a frequency of 2 rad/s and a decay rate determined by the real part -2.

**Q3. (Conceptual) How does the location of a pole on the imaginary axis ($s=j\omega_0$) affect the frequency response of a network function?**

**Answer:** A pole located on the imaginary axis at $s=j\omega_0$ causes a **resonance** or a **peak** in the magnitude response $|H(j\omega)|$ at the frequency $\omega = \omega_0$. This is because as $s=j\omega$ approaches $j\omega_0$, the distance from the pole to $j\omega$ approaches zero, making the magnitude of $H(j\omega)$ tend towards infinity (or a very large value, depending on other poles/zeros). If the pole is a simple pole, this resonance will be infinitely high in the theoretical frequency response plot. This behavior is characteristic of resonant circuits.

**Q4. (Application) For a network function $H(s) = \frac{10(s+1)}{(s+1)(s+2)}$, what is the steady-state DC response ($H(0)$)? How does the pole-zero plot help us see this?**

**Solution:**
The network function is $H(s) = \frac{10(s+1)}{(s+1)(s+2)}$.
We can see a pole and a zero at $s=-1$. This suggests a cancellation. If we cancel the $(s+1)$ terms, we get $H(s) = \frac{10}{s+2}$.
To find the steady-state DC response, we evaluate $H(s)$ at $s=0$.
$H(0) = \frac{10}{0+2} = \frac{10}{2} = 5$.

**How the pole-zero plot helps:**
The pole-zero plot for $H(s) = \frac{10(s+1)}{(s+1)(s+2)}$ would show:
*   A zero at $s=-1$ ('o').
*   A pole at $s=-1$ ('x').
*   A pole at $s=-2$ ('x').

```
       jω
        ^
        |
--------+--------> σ
    x   o,x
   -2  -1
```
The pole at $s=-1$ and the zero at $s=-1$ are at the same location. This indicates a pole-zero cancellation. For practical purposes (and in most steady-state calculations), this cancellation means the pole at $s=-1$ does not contribute to the system's behavior. The dominant behavior is determined by the remaining pole at $s=-2$ and the gain. Evaluating the *simplified* function $H(s) = \frac{10}{s+2}$ at $s=0$ gives the DC response. The pole-zero plot visually highlights this cancellation, which is crucial for correctly determining the system's behavior, especially when dealing with such simplifications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
