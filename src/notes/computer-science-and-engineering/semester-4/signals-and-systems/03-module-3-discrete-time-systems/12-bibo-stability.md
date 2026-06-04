---
title: "BIBO Stability"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b165"
status: "completed"
scrapedAt: "2026-05-20T16:15:55.443Z"
---
# Signals and Systems: Module 3 - Discrete-Time Systems: BIBO Stability

## Introduction

This module focuses on discrete-time systems, and this section specifically addresses BIBO (Bounded-Input Bounded-Output) stability. Understanding BIBO stability is crucial for designing and analyzing systems that behave predictably and reliably.  It ensures that a system will not produce unbounded outputs when subjected to bounded inputs.

## Learning Outcomes

Upon completion of this section, you will be able to:

*   Define BIBO stability for discrete-time systems.
*   Determine if a discrete-time LTI system is BIBO stable given its impulse response.
*   Relate BIBO stability to the region of convergence (ROC) of the system's transfer function (Z-transform).
*   Understand the implications of BIBO stability for practical system design.

## Key Concepts and Definitions

*   **Discrete-Time System:** A system that processes discrete-time signals, denoted as `x[n]` for input and `y[n]` for output, where 'n' represents discrete time indices (integers).

*   **Bounded Input:** A discrete-time signal `x[n]` is considered bounded if there exists a finite positive number `B_x` such that:

    `|x[n]| <= B_x` for all `n`.

    In simpler terms, the absolute value of the input signal never exceeds a certain limit.

*   **Bounded Output:** A discrete-time signal `y[n]` is considered bounded if there exists a finite positive number `B_y` such that:

    `|y[n]| <= B_y` for all `n`.

    Similarly, the absolute value of the output signal never exceeds a certain limit.

*   **BIBO Stability (Bounded-Input Bounded-Output Stability):** A system is BIBO stable if and only if *every* bounded input produces a bounded output. This is a fundamental property that guarantees predictable and controllable system behavior.  If any bounded input can cause an unbounded output, the system is *not* BIBO stable.

*   **Linear Time-Invariant (LTI) System:**  A system that satisfies both linearity and time-invariance properties. LTI systems are particularly important because their behavior can be fully characterized by their impulse response.

*   **Impulse Response (h[n]):** The output of an LTI system when the input is a unit impulse function, `δ[n]`.  The impulse response completely characterizes the behavior of a discrete-time LTI system.

*   **Convolution:**  The output `y[n]` of an LTI system with impulse response `h[n]` and input `x[n]` is given by the convolution sum:

    `y[n] = x[n] * h[n] = Σ {x[k] * h[n-k]}`  (summation over all k from -infinity to +infinity)

*   **Z-Transform (H(z)):**  The Z-transform of the impulse response `h[n]` is the system's transfer function, denoted as `H(z)`. It represents the system's behavior in the frequency domain.

    `H(z) = Σ {h[n] * z^(-n)}` (summation over all n from -infinity to +infinity)

*   **Region of Convergence (ROC):**  The set of values of `z` for which the Z-transform `H(z)` converges (i.e., is finite). The ROC is crucial for determining the stability and causality of a system.

## BIBO Stability Condition for Discrete-Time LTI Systems

A discrete-time LTI system is BIBO stable if and only if its impulse response `h[n]` is absolutely summable:

`Σ {|h[n]|} < ∞` (summation over all n from -infinity to +infinity)

In other words, the sum of the absolute values of the impulse response must be finite.  This is the *primary condition* to check for BIBO stability of an LTI system.

**Explanation:**

Let's assume a bounded input `x[n]` with `|x[n]| <= B_x` for all `n`. The output `y[n]` is given by the convolution sum:

`y[n] = Σ {x[k] * h[n-k]}` (summation over all k)

Taking the absolute value of both sides:

`|y[n]| = | Σ {x[k] * h[n-k]} |`

Using the triangle inequality:

`|y[n]| <= Σ {|x[k] * h[n-k]|} = Σ {|x[k]| * |h[n-k]|} `

Since `|x[n]| <= B_x` for all `n`, we have:

`|y[n]| <= Σ {B_x * |h[n-k]|} = B_x * Σ {|h[n-k]|}`

Now, let `m = n - k`. As `k` ranges from -infinity to +infinity, `m` also ranges from -infinity to +infinity. So,

`|y[n]| <= B_x * Σ {|h[m]|}`  (summation over all m)

If `Σ {|h[m]|}` is finite, then `|y[n]|` is bounded by a constant multiplied by `B_x`. Therefore, the output `y[n]` is bounded, and the system is BIBO stable. Conversely, if `Σ {|h[m]|}` is infinite, then we *can* find a bounded input that causes the output to be unbounded, and the system is not BIBO stable.

## BIBO Stability and the Z-Transform (H(z))

For a discrete-time LTI system to be BIBO stable, the ROC of its Z-transform `H(z)` *must* include the unit circle (`|z| = 1`).

**Explanation:**

The unit circle represents the discrete-time Fourier transform (DTFT) which is a special case of the Z-transform where `z = e^(jω)`. The condition `Σ {|h[n]|} < ∞` guarantees the convergence of the DTFT, and hence the Z-transform must converge on the unit circle. If the unit circle is not in the ROC, then the DTFT does not exist, and the system is not BIBO stable.

**Specifically:**

*   If the ROC includes the unit circle, the system is BIBO stable.
*   If the ROC does *not* include the unit circle, the system is *not* BIBO stable.

**Note:** The ROC is a ring (or disk) in the complex z-plane centered at the origin. Its boundaries are determined by the poles of H(z).

## Examples

**Example 1:**

Let `h[n] = a^n * u[n]`, where `u[n]` is the unit step function:

`u[n] = 1` for `n >= 0`
`u[n] = 0` for `n < 0`

Determine the condition on 'a' for BIBO stability.

**Solution:**

We need to check if `Σ {|h[n]|}` is finite.

`Σ {|h[n]|} = Σ {|a^n * u[n]|} = Σ {|a^n|}`  (summation from n=0 to infinity)

This is a geometric series.  It converges if `|a| < 1`.

Therefore, the system is BIBO stable if `|a| < 1`.

**Example 2:**

Let `h[n] = (1/2)^n * u[n] + 2^n * u[-n-1]`

Determine if the system is BIBO stable.

**Solution:**

First, find the Z-transform H(z):

`H(z) = Σ {h[n] * z^(-n)} = Σ {(1/2)^n * u[n] * z^(-n)} + Σ {2^n * u[-n-1] * z^(-n)}`

`H(z) = Σ {(1/2)^n * z^(-n)} (n=0 to infinity) + Σ {2^n * z^(-n)} (n=-infinity to -1)`

`H(z) = 1 / (1 - (1/2)z^(-1)) + (-1 + Σ {(2z^(-1))^n} (n=0 to infinity))`
`H(z) = 1 / (1 - (1/2)z^(-1)) - 1 + 1 / (1 - 2z^(-1))`
`H(z) = 1 / (1 - (1/2)z^(-1))  + 1 / (1 - 2z^(-1)) -1`
`H(z) = z/(z-1/2) -z/(z-2) -1`

The ROC for the first term is `|z| > 1/2`.  The ROC for the second term is `|z| < 2`. Therefore, the ROC of the system is `1/2 < |z| < 2`.

Since the unit circle (`|z| = 1`) lies within the ROC (1/2 < 1 < 2), the system *is* BIBO stable.

**Alternative solution (using absolute summability):**

`Σ{|h[n]|} = Σ{|(1/2)^n u[n]|} + Σ{|2^n u[-n-1]|}`

`= Σ{(1/2)^n}, n=0 to infinity  + Σ{|2^n|}, n=-infinity to -1`

`= Σ{(1/2)^n}, n=0 to infinity  + Σ{(1/2)^(-n)}, n=-infinity to -1`

`= Σ{(1/2)^n}, n=0 to infinity  + Σ{(1/2)^k}, k=1 to infinity` (letting k=-n)

`= 1/(1-1/2) -1 + 1/(1-1/2) = 2 + 2 -1 - 1 = 2 + 2 -1 = 3`

Since `Σ{|h[n]|}` = 3 < infinity, the system is BIBO stable.

**Example 3:**

Let `h[n] = u[n]` (the unit step function).

Determine if the system is BIBO stable.

**Solution:**

`Σ {|h[n]|} = Σ {|u[n]|} = Σ {1}` (summation from n=0 to infinity).

This sum diverges (goes to infinity). Therefore, the system is *not* BIBO stable.

**Z-transform Approach:**

`H(z) = z/(z-1)`,  `|z| > 1`. The ROC is `|z| > 1`.  The unit circle (`|z| = 1`) is *not* included in the ROC. Therefore, the system is *not* BIBO stable.

## Practical Implications of BIBO Stability

*   **System Design:** BIBO stability is a fundamental requirement for practical system design. Unstable systems can produce uncontrollable and unpredictable outputs, potentially leading to damage or malfunction.

*   **Feedback Systems:** In feedback control systems, BIBO stability is essential to ensure that the system reaches and maintains a desired operating point without oscillations or divergence.

*   **Signal Processing:** In signal processing applications, BIBO stability ensures that filters and other processing algorithms do not amplify noise or produce spurious artifacts in the output.

## Important Points to Remember

*   **BIBO stability is a crucial property for discrete-time systems, ensuring bounded outputs for bounded inputs.**
*   **For discrete-time LTI systems, BIBO stability is equivalent to the absolute summability of the impulse response: `Σ {|h[n]|} < ∞`.**
*   **In the Z-domain, BIBO stability requires the ROC of `H(z)` to include the unit circle (`|z| = 1`).**
*   **Understanding BIBO stability is essential for designing reliable and predictable systems in various engineering applications.**

## Practice Questions/Exercises

1.  **Question:** Determine if the system with impulse response `h[n] = (0.8)^n * cos(πn/4) * u[n]` is BIBO stable.

    **Answer:**  Yes, the system is BIBO stable. Since `|cos(πn/4)| <= 1`, `|h[n]| <= (0.8)^n * u[n]`.  The sum of (0.8)^n from n=0 to infinity is a converging geometric series (1/(1-0.8) = 5), so `Σ {|h[n]|}` is finite.

2.  **Question:** A discrete-time LTI system has a transfer function `H(z) = (z + 0.5) / (z^2 - 1.5z + 0.5)`.  Determine if the system is BIBO stable.

    **Answer:** First, find the poles of H(z) by finding the roots of the denominator: `z^2 - 1.5z + 0.5 = (z - 1)(z - 0.5) = 0`. The poles are at `z = 1` and `z = 0.5`.  Since one of the poles lies on the unit circle (|z|=1), the ROC cannot include the unit circle for a causal or anti-causal system.  The ROC is either |z|>1, 0.5 < |z| < 1 or |z| < 0.5, none of which include the unit circle, meaning the system is not BIBO stable.

3.  **Question:** A system has `H(z) = 1/(1 - az^-1)` , where `a` is a constant. For what values of `a` is the system BIBO stable if the system is (a) causal, (b) anti-causal?

    **Answer:** The pole is at z=a.

    (a) **Causal**: The ROC is |z| > |a|. For BIBO stability, the unit circle must be in the ROC, thus |a| < 1.
    (b) **Anti-Causal**: The ROC is |z| < |a|.  For BIBO stability, the unit circle must be in the ROC, thus |a| > 1.

4.  **Question:** Given h[n] = A (0.5)^n u[n] + B (2)^n u[-n-1]. What are the constraints on A and B for this to be BIBO stable?

    **Answer:** Because h[n] has two decaying exponential components added together, it is guaranteed to be stable so long as the series converges. We need to find the sum, which we already computed in one of the examples:

     Σ{|h[n]|} = Σ{|(1/2)^n u[n]|} + Σ{|2^n u[-n-1]|}

    `= Σ{(1/2)^n}, n=0 to infinity  + Σ{(1/2)^(-n)}, n=-infinity to -1`

    `= Σ{(1/2)^n}, n=0 to infinity  + Σ{(1/2)^k}, k=1 to infinity` (letting k=-n)

    `= 1/(1-1/2) -1 + 1/(1-1/2) = 2 + 2 -1 - 1 = 2 + 2 -1 = 3`

    Thus so long as A and B are finite, this will be BIBO stable.

5.  **Question:** If a system is BIBO stable, is it necessarily causal?

    **Answer:** No. A system can be BIBO stable and non-causal (anti-causal or mixed causal/anti-causal). The ROC must simply include the unit circle.  Causality and stability are independent properties. As seen in previous examples the ROC for anti-causal systems may include the unit circle meaning they can be BIBO stable.
