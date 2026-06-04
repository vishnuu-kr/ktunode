---
title: "Properties of an LTI system - Causality"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b162"
status: "completed"
scrapedAt: "2026-05-20T16:15:53.328Z"
---
## Signals and Systems: Module 3 - Discrete-Time Systems - Properties of LTI Systems: Causality

**Subject:** Signals and Systems
**Module:** Discrete-Time Systems
**Topic:** Properties of an LTI System - Causality
**Description:** Causality in the context of Discrete-Time Linear Time-Invariant (LTI) Systems.

**Learning Outcomes:**

*   Understand the definition of causality for discrete-time systems.
*   Determine whether a discrete-time system is causal.
*   Relate causality to the impulse response of an LTI system.
*   Understand the implications of causality for real-time systems.

---

**1. Key Concepts and Definitions**

*   **System:** A system processes an input signal, *x[n]*, and produces an output signal, *y[n]*.

*   **Causality:** A system is **causal** (or non-anticipative) if the output at any time *n* depends only on the input at the present time *n* and past times *n-1, n-2,...*. In other words, the output *y[n]* does *not* depend on future values of the input *x[n+1], x[n+2],...*.

*   **Non-Causal System:** A system is **non-causal** if its output at time *n* depends on future values of the input *x[n]*.

*   **Anti-Causal System:** A special case of a non-causal system where the output at time *n* depends *only* on future values of the input. While theoretical, it's not realizable in real-time.

*   **Real-Time System:** A system that processes information and produces an output in real-time, meaning the output is produced sufficiently quickly to influence the environment being monitored or controlled. Causality is crucial for real-time systems.

*   **Impulse Response:** The impulse response, *h[n]*, of an LTI system is its output when the input is a unit impulse sequence, δ[n].  It completely characterizes the system.

**2. Causality for Discrete-Time LTI Systems**

*   **Impulse Response and Causality:** An LTI system is causal **if and only if** its impulse response *h[n] = 0* for *n < 0*.

    *   This means the impulse response is zero for all negative time indices.  The system can only respond *after* the impulse is applied.

*   **Intuitive Explanation:** If *h[n] ≠ 0* for some *n < 0*, it means the system is responding *before* the impulse is applied at *n=0*, which is a violation of causality.

*   **Convolution Sum:** The output *y[n]* of a discrete-time LTI system is given by the convolution sum:

    *   *y[n] = x[n] * h[n] = Σ<sub>k=-∞</sub><sup>∞</sup> x[k] h[n-k]*

*   **Causal LTI System's Convolution Sum:** For a causal LTI system, *h[n] = 0* for *n < 0*. Therefore, *h[n-k] = 0* for *n-k < 0* or *k > n*. The convolution sum simplifies to:

    *   *y[n] = Σ<sub>k=-∞</sub><sup>n</sup> x[k] h[n-k]*

    *   Alternatively, by substituting *m = n-k* and rearranging,  *y[n] = Σ<sub>m=0</sub><sup>∞</sup> h[m] x[n-m]*.  This form emphasizes that only present and past values of *x[n]* contribute to *y[n]*.

**3. Determining Causality**

*   **Given the System Equation:**

    *   Examine the equation defining the relationship between the input *x[n]* and the output *y[n]*.
    *   If *y[n]* depends on *x[n+k]* where *k > 0*, the system is non-causal.
    *   If *y[n]* only depends on *x[n-k]* where *k ≥ 0*, the system is causal.

*   **Given the Impulse Response *h[n]*:**

    *   Check if *h[n] = 0* for all *n < 0*.
    *   If it is, the system is causal.
    *   If *h[n] ≠ 0* for any *n < 0*, the system is non-causal.

**4. Examples**

*   **Example 1: Causal System**

    *   *y[n] = x[n] + 2x[n-1] - x[n-2]*
    *   This system is causal because the output *y[n]* depends only on the current input *x[n]* and past inputs *x[n-1]* and *x[n-2]*.

*   **Example 2: Non-Causal System**

    *   *y[n] = x[n+1] + x[n] + x[n-1]*
    *   This system is non-causal because the output *y[n]* depends on the future input *x[n+1]*.

*   **Example 3: Impulse Response for a Causal System**

    *   *h[n] = u[n] =  {1, n ≥ 0; 0, n < 0 }* (Unit step function)
    *   This system is causal because *h[n] = 0* for *n < 0*.

*   **Example 4: Impulse Response for a Non-Causal System**

    *   *h[n] = a<sup>n</sup> u[-n]*  (where |a| < 1)
    *   This system is non-causal because *h[n] ≠ 0* for *n < 0*.

**5. Implications for Real-Time Systems**

*   **Real-time processing requires causal systems.** A non-causal system cannot be implemented in real-time because it needs access to future input values, which are not yet available.

*   **Practical considerations:**  While theoretically non-causal systems are not implementable in real-time, in some applications, a small delay can be introduced to approximate a non-causal system.  This allows the system to "look ahead" a short period, using buffered data. However, this introduces a latency.

**6. Practice Questions/Exercises**

1.  **Determine whether the following systems are causal:**

    *   a) *y[n] = x[2n]*
    *   b) *y[n] = Σ<sub>k=-∞</sub><sup>n+1</sup> x[k]*
    *   c) *y[n] = x[n]cos(nπ)*
    *   d) *h[n] = (0.5)<sup>n</sup> u[n-1]*
    *   e) *h[n] = (0.5)<sup>|n|</sup>*

2.  **An LTI system has an impulse response *h[n] = u[n] - u[n-4]*. Is this system causal? Explain.**

3.  **Describe the implications of using a non-causal system for a real-time audio processing application.**

**7. Answers to Practice Questions**

1.  **Causality Analysis:**

    *   a) *y[n] = x[2n]*.  This is causal. The output at time *n* depends on the input at time *2n*. This input is either at the same time (if *n=0*) or in the past (if *n>0*). It does not depend on *x[n+k]* where *k>0*.

    *   b) *y[n] = Σ<sub>k=-∞</sub><sup>n+1</sup> x[k]*. This is non-causal.  The output *y[n]* depends on *x[n+1]*, which is a future value.

    *   c) *y[n] = x[n]cos(nπ)*. This is causal. The output *y[n]* depends only on the input at the same time, *x[n]*.

    *   d) *h[n] = (0.5)<sup>n</sup> u[n-1]*. This is causal. *u[n-1]* is zero for n < 1, meaning h[n] = 0 for n<1. In other words h[n] = 0 for n < 0.

    *   e) *h[n] = (0.5)<sup>|n|</sup>*. This is non-causal. *h[n] ≠ 0* for *n < 0*.  For example, *h[-1] = (0.5)<sup>|-1|</sup> = 0.5 ≠ 0*.

2.  **Impulse Response Causality:**

    *   Yes, the system is causal. *h[n] = u[n] - u[n-4]*  is zero for *n < 0* because *u[n] = 0* and *u[n-4] = 0* for *n < 0*. Therefore, *h[n] = 0* for *n < 0*, satisfying the condition for causality. The impulse response is equal to 1 for n = 0, 1, 2 and 3 and zero everywhere else.

3.  **Non-Causal Audio Processing:**

    *   Using a non-causal system for real-time audio processing is problematic.  The system would require access to future audio samples to produce the current output sample. This is impossible in a true real-time scenario.
    *   The result would be that the output is delayed until the future input data is available.
    *   In practice, to approximate a non-causal system, one would need to buffer a section of audio, then process it with knowledge of data ahead of the "current" time. The consequence is a delayed (latented) audio output.  The delay may be tolerable for offline processing (e.g., audio editing) but is generally unacceptable for interactive applications (e.g., live performance, virtual instruments).

**8. Important Points to Remember**

*   Causality is a fundamental property of systems, especially critical for real-time applications.
*   An LTI system is causal if and only if its impulse response is zero for all negative time indices.
*   Non-causal systems cannot be implemented in real-time without introducing a delay.
*   Understanding the relationship between the system equation, the impulse response, and causality is crucial for analyzing and designing systems.
