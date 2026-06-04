---
title: "Introduction to CRO and Lissajous patterns"
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 4: Modern Electronics and its applications: General block diagram of a Communication system, Block diagram of Fiber optic Communication system"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c7e"
status: "completed"
scrapedAt: "2026-05-20T16:39:33.285Z"
---
## Module 4: Modern Electronics and its Applications – Introduction to CRO and Lissajous Patterns

Welcome back, everyone! Today, we're diving into a fundamental tool in the world of electronics, something that lets us *see* the invisible signals that make our modern devices tick. We're talking about the **Cathode Ray Oscilloscope**, or CRO for short. Think of it as the "eyes" of an electronics engineer, allowing us to visualize the behavior of electrical signals. This fits perfectly with our understanding of communication systems (CO5) because signals are the very essence of how information travels.

### What is a Cathode Ray Oscilloscope (CRO)?

At its heart, a CRO is a type of electronic test instrument that graphically displays varying signal voltages, usually as a two-dimensional plot of one or more signals as a function of time. The most common CRO displays are **X-Y plots**. This means one signal is plotted on the horizontal axis (the X-axis) and another signal is plotted on the vertical axis (the Y-axis).

Let's break down how it works, kind of like understanding the basic building blocks of a communication system (CO5).

**The Core Idea: Visualizing Voltage Over Time (or Against Another Voltage)**

Imagine you're listening to music. The sound is a wave, an electrical signal. But how do you know what that wave looks like? Is it a smooth sine wave? Is it jagged and complex? The CRO shows us this.

*   **The "Ray":** The "Cathode Ray" part refers to a beam of electrons. This beam is generated in a vacuum tube, similar to an old TV picture tube.
*   **The "Oscillo":** This refers to oscillations, which are the back-and-forth movements of signals.
*   **The "Scope":** This means it's a device for viewing or observing.

So, a CRO is a device that lets us view oscillating (varying) electrical signals.

**Block Diagram of a CRO: The Internal Journey of a Signal**

To truly appreciate the CRO, let's look at its internal "block diagram." Think of this as the journey the electrical signal takes from the input to the screen. Many electronic devices, including communication systems (CO5), rely on a sequence of operations, much like this:

1.  **Electron Gun:** This is where it all starts. It generates a focused beam of electrons. It consists of a heated filament (cathode) that emits electrons, control grids to regulate the beam's intensity and focus, and accelerating anodes to give the electrons a high velocity.
2.  **Deflection System:** This is the crucial part that allows us to control where the electron beam hits the screen. There are two sets of deflection plates:
    *   **Vertical Deflection Plates:** These are positioned horizontally. When a voltage is applied to them, they deflect the electron beam up or down. The amount of deflection is directly proportional to the voltage applied. This is where our *input signal* typically goes – it controls the vertical movement.
    *   **Horizontal Deflection Plates:** These are positioned vertically. They deflect the beam left or right. In most cases, a signal called a "time-base signal" or "sweep signal" (usually a sawtooth wave) is applied here. This makes the beam sweep across the screen at a constant speed, from left to right, and then quickly return to the left to start again. This allows us to see how the input signal changes *over time*.
3.  **Fluorescent Screen:** The inside surface of the glass screen is coated with a phosphorescent material. When the high-speed electron beam strikes this coating, it glows, creating a visible dot. The brighter the glow, the more intense the electron beam.
4.  **Graticule:** This is a set of fine lines etched on the screen or superimposed on it, forming a grid. It helps in measuring the amplitude and time duration of the displayed waveform.

**How it Works Together:**

The input signal is applied to the vertical deflection plates. Simultaneously, a sweep signal (time-base) is applied to the horizontal deflection plates. The electron beam, accelerated and focused by the electron gun, is deflected vertically by the input signal and horizontally by the sweep signal. The resulting spot on the screen traces out the waveform of the input signal against time.

**Why is this important for us?**

Understanding the CRO's internal workings helps us grasp how we can manipulate and observe electrical phenomena. This is foundational to understanding how signals are transmitted, modulated, and received in communication systems (CO5). It’s like understanding the transmitter and receiver components before studying the channel.

### Lissajous Patterns: Seeing Two Signals at Once!

Now, what happens when we don't use a time-base signal on the horizontal plates, but instead, apply *another* electrical signal? This is where things get really interesting and incredibly useful, especially for comparing two signals. This is where we introduce **Lissajous Patterns**.

When we apply two sinusoidal voltages to the horizontal and vertical deflection plates of a CRO, the electron beam traces out a pattern that depends on the **amplitude, frequency, and phase difference** between the two signals. These patterns are called Lissajous figures or Lissajous patterns.

**Think of it like this:** Imagine you're drawing on a piece of paper. If you move your hand steadily to the right (like the time-base) and up and down according to a rhythm (your input signal), you get a waveform. But if you have *two* independent hands, each drawing a different pattern, the combined motion on the paper can create complex and beautiful shapes. That's essentially what Lissajous patterns are for electrical signals.

**What can Lissajous Patterns tell us?**

This is a key exam point! Lissajous patterns are used to determine:

1.  **Frequency Ratios:** How the frequency of the signal on one axis relates to the frequency of the signal on the other axis.
2.  **Phase Difference:** The time difference between the peaks or zero crossings of two signals of the same frequency.
3.  **Amplitudes:** Although not its primary use, it can give an indication of the relative amplitudes.

**Understanding Frequency Ratios with Lissajous Patterns**

This is where we can directly relate to CO5 (principles of communication systems) because frequency is a fundamental property of any signal.

*   **Equal Frequencies (1:1 Ratio):**
    *   If two signals of the same frequency and zero phase difference are applied, the pattern will be a straight line at 45 degrees. (Think: both signals move in sync, one up/down, one left/right at the same pace).
    *   If they are 90 degrees out of phase (e.g., sine and cosine), the pattern becomes a circle.
    *   If they are 180 degrees out of phase, it’s a straight line with a negative slope.

*   **Frequency Ratios Other Than 1:1:** This is where it gets cool!
    *   **Count the horizontal tangents:** Count how many times the pattern touches the extreme left and right edges of the screen. This number often relates to the frequency on the *vertical* axis.
    *   **Count the vertical tangents:** Count how many times the pattern touches the extreme top and bottom edges of the screen. This number often relates to the frequency on the *horizontal* axis.

    Let's use an analogy from everyday life. Imagine two dancers, one moving left/right and the other up/down. If the left/right dancer completes 3 "steps" for every 2 "steps" of the up/down dancer, the combined pattern they trace on the floor will be more complex. The number of times their path touches the extreme left/right boundaries and the extreme top/bottom boundaries will tell us about their relative step counts (frequencies).

    **Formalizing this:** If $f_x$ is the frequency applied to the horizontal plates and $f_y$ is the frequency applied to the vertical plates:

    *   Number of horizontal tangents ($N_x$) = $f_y / f_{gcd}$, where $f_{gcd}$ is the greatest common divisor of $f_x$ and $f_y$.
    *   Number of vertical tangents ($N_y$) = $f_x / f_{gcd}$.

    Therefore, the frequency ratio is simply:
    $$ \frac{f_y}{f_x} = \frac{\text{Number of vertical tangents}}{\text{Number of horizontal tangents}} = \frac{N_y}{N_x} $$

    **Exam Tip:** Always remember to count the *tangents* to the extreme edges. Sometimes a simple loop might not touch the edge, but the entire pattern will have a tangent point. Look for the maximum excursions.

**Determining Phase Difference Using Lissajous Patterns**

This is another crucial application. For two signals of the *same frequency*, the shape of the Lissajous pattern provides information about their phase difference.

*   **How to Measure:** Draw two perpendicular lines (major and minor axes of the ellipse, or the diagonals of a square if it's rotated).
    *   Let 'a' be the length of the intercept along the Y-axis when the ellipse crosses the X-axis.
    *   Let 'b' be the length of the intercept along the X-axis when the ellipse crosses the Y-axis.

*   **The Formula:** The sine of the phase difference ($\phi$) between the two signals is given by:
    $$ \sin(\phi) = \frac{a}{b} $$
    Where:
    *   'b' is the maximum vertical deflection when the horizontal deflection is zero (i.e., the intercept on the Y-axis when the ellipse crosses the X-axis).
    *   'a' is the vertical deflection when the horizontal deflection is at its maximum (i.e., the intercept on the Y-axis at the points where the ellipse is widest horizontally).

    **Analogy:** Imagine two people walking. If they start at the same time and walk in sync, their paths are simple. But if one starts a bit later, their combined path on the ground will be an ellipse. The "slenderness" of that ellipse tells us how much later the second person started (the phase difference).

    **Important Note:** This formula gives $\sin(\phi)$. So, if $\sin(\phi) = 0.5$, then $\phi$ could be 30 degrees or 150 degrees. To distinguish, you need to observe the direction of the trace. If the trace moves from bottom-left to top-right in the section where it crosses the Y-axis, the phase angle is acute (0-90 degrees). If it moves from top-left to bottom-right, it's obtuse (90-180 degrees).

**Practical Applications of CRO and Lissajous Patterns**

These tools aren't just theoretical exercises; they are workhorses in electronics and communication engineering (CO5, CO6):

*   **Troubleshooting Electronic Circuits:** The CRO is indispensable for debugging. Engineers can directly see if a signal is distorted, noisy, or not behaving as expected. This is vital in ensuring the integrity of signals in any communication system.
*   **Measuring Signal Parameters:** Beyond just shape, we can measure amplitude, frequency, and phase. This is critical for understanding the characteristics of signals being transmitted or received.
*   **Component Testing:** Some basic tests on passive components or even simple active components can be performed using a CRO and Lissajous patterns.
*   **Frequency Comparison:** As discussed, Lissajous patterns are a simple and effective way to check if two signal generators are producing frequencies that are related by a simple integer ratio.
*   **Displaying Audio Waveforms:** Seeing the shape of audio signals helps in understanding sound quality and effects.

**Connecting to Other Course Outcomes:**

While our focus today is on the CRO and Lissajous patterns within the context of modern electronics and communication systems (CO5, CO6), the fundamental principles of electricity and circuits that we've learned (CO1, CO2, CO3) are the bedrock upon which these sophisticated instruments operate. The CRO manipulates voltages and currents, and its accuracy relies on well-understood circuit behavior.

Remember, the CRO is like a window into the electrical world. Mastering its use, including the insightful patterns of Lissajous figures, gives you a powerful advantage in understanding and working with all sorts of electronic and communication systems. It’s a direct way to visualize the electrical signals that carry our data, our voices, and our entertainment (CO6).

---

### Sample Questions with Answers

**Q1. Explain the primary function of a Cathode Ray Oscilloscope (CRO). How does it help in understanding communication signals?**

**Answer:**
The primary function of a CRO is to display voltage signals as a graph of voltage versus time or voltage versus voltage. It allows engineers to visualize the waveform of electrical signals, making it possible to observe characteristics like amplitude, frequency, shape, and the presence of noise or distortion.

In the context of communication systems (CO5), the CRO is invaluable for:
*   **Signal Analysis:** Observing the modulated carrier signal, the baseband information signal, and the transmitted signal's characteristics.
*   **Troubleshooting:** Identifying problems in transmitters, receivers, or signal processing units by visualizing the signals at different stages. For example, if a signal is supposed to be a clean sine wave but appears distorted on the CRO, it indicates a problem in the circuit.
*   **Parameter Measurement:** Precisely measuring the frequency, peak-to-peak voltage, and time duration of signals, which are critical parameters in any communication link.

**Q2. Describe the role of the vertical and horizontal deflection systems in a CRO.**

**Answer:**
*   **Vertical Deflection System:** This system controls the up-and-down movement of the electron beam on the screen. It typically receives the *input signal* or the signal whose waveform we wish to observe. The magnitude of the voltage applied to the vertical deflection plates is directly proportional to the vertical displacement of the spot on the screen.
*   **Horizontal Deflection System:** This system controls the left-and-right movement of the electron beam. In most standard oscilloscope operations, a *time-base generator* produces a sawtooth voltage waveform and applies it to the horizontal plates. This causes the beam to sweep across the screen at a constant velocity from left to right, and then quickly retrace back to the left. This provides the time axis for observing waveforms.

**Q3. What are Lissajous patterns and what are their main applications in electronics?**

**Answer:**
Lissajous patterns are figures traced on the CRO screen when two sinusoidal signals are applied to the horizontal and vertical deflection plates, respectively, instead of a time-base signal on the horizontal axis. The shape of these patterns depends on the amplitude, frequency ratio, and phase difference between the two signals.

Their main applications are:
1.  **Frequency Comparison:** Determining the ratio of frequencies of the two applied signals by counting the number of tangents to the horizontal and vertical extremes of the pattern.
2.  **Phase Measurement:** For signals of the same frequency, the phase difference can be determined by measuring specific intercepts on the pattern.

**Q4. If a Lissajous pattern displays 3 vertical tangents and 2 horizontal tangents, what is the ratio of the frequency applied to the vertical plates ($f_y$) to the frequency applied to the horizontal plates ($f_x$)?**

**Answer:**
The relationship between the number of tangents and the frequency ratio is:
$$ \frac{f_y}{f_x} = \frac{\text{Number of vertical tangents}}{\text{Number of horizontal tangents}} $$

Given:
*   Number of vertical tangents = 3
*   Number of horizontal tangents = 2

Therefore, the frequency ratio is:
$$ \frac{f_y}{f_x} = \frac{3}{2} $$

This means the frequency applied to the vertical plates is 1.5 times the frequency applied to the horizontal plates.

**Q5. How can you determine the phase difference between two signals of the same frequency using a Lissajous pattern?**

**Answer:**
When two signals of the same frequency produce an elliptical Lissajous pattern, the phase difference ($\phi$) can be determined using the formula:
$$ \sin(\phi) = \frac{a}{b} $$
where:
*   'b' is the vertical intercept of the ellipse on the Y-axis when it crosses the X-axis.
*   'a' is the vertical intercept of the ellipse on the Y-axis at the points where the ellipse is widest horizontally.

By measuring these intercepts and calculating the ratio $\frac{a}{b}$, the sine of the phase difference is found, from which the phase difference can be calculated. The direction of the trace in the relevant section helps determine if the phase is acute or obtuse.
