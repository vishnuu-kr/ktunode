---
title: "Complex Modulation (z-Domain Scaling)"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b16c"
status: "completed"
scrapedAt: "2026-05-20T16:15:59.693Z"
---
# Signals and Systems: Module 4 - Z Transform: Complex Modulation (z-Domain Scaling)

## Introduction

This module focuses on the Z-transform and specifically delves into the concept of complex modulation (also known as z-domain scaling). Complex modulation provides a powerful tool for analyzing and manipulating signals in the z-domain, influencing properties like frequency response and stability. Understanding this concept is crucial for analyzing systems with complex poles and zeros and for implementing various signal processing techniques.

## Learning Outcomes

Upon completion of this section, you should be able to:

1.  Understand the concept of complex modulation (z-domain scaling).
2.  Derive the z-transform of a signal modulated by a complex exponential.
3.  Apply the complex modulation property to find the z-transform of signals.
4.  Analyze the effect of complex modulation on the Region of Convergence (ROC).
5.  Utilize complex modulation for frequency shifting in discrete-time systems.
6. Solve problems involving complex modulation.

## 1. Key Concepts and Definitions

*   **Z-Transform:**  The Z-transform of a discrete-time signal *x[n]* is defined as:

    *   X(z) = Σ<sub>n=-∞</sub><sup>∞</sup> x[n]z<sup>-n</sup>

    where *z* is a complex variable.

*   **Region of Convergence (ROC):** The set of all values of *z* for which the Z-transform converges. The ROC is crucial for determining the uniqueness and stability of the system.

*   **Complex Modulation (Z-Domain Scaling):**  The complex modulation property states that if *x[n]* has a Z-transform *X(z)* with ROC *R*, then *a<sup>n</sup>x[n]*, where *a* is a complex constant, has a Z-transform *X(z/a)* with ROC *|a|R*.  This corresponds to scaling the z-plane by a factor of *|a|*.

    *   Formally:  If x[n] ↔ X(z), ROC: R, then  a<sup>n</sup>x[n] ↔ X(z/a), ROC: |a|R

## 2. Derivation of the Complex Modulation Property

Let's derive the complex modulation property from the definition of the Z-transform.

Given: x[n] ↔ X(z), ROC: R

We want to find the Z-transform of  y[n] = a<sup>n</sup>x[n]. Let's denote the Z-transform of y[n] as Y(z).

Y(z) = Σ<sub>n=-∞</sub><sup>∞</sup> y[n]z<sup>-n</sup>
Y(z) = Σ<sub>n=-∞</sub><sup>∞</sup> a<sup>n</sup>x[n]z<sup>-n</sup>
Y(z) = Σ<sub>n=-∞</sub><sup>∞</sup> x[n](az)<sup>-n</sup>
Y(z) = Σ<sub>n=-∞</sub><sup>∞</sup> x[n](z/a)<sup>-n</sup>  | Multiplying numerator and denominator by a<sup>-n</sup> and rearranging
Y(z) = X(z/a)

Therefore, a<sup>n</sup>x[n] ↔ X(z/a)

**Effect on ROC:**

For X(z) to converge, we require |z| ∈ R.
For X(z/a) to converge, we require |z/a| ∈ R.
This implies |z|/|a| ∈ R  or  |z| ∈ |a|R

Thus, the ROC for X(z/a) becomes |a|R, which is the original ROC scaled by |a|.

## 3. Applying the Complex Modulation Property

The complex modulation property is used to:

*   Find the Z-transform of signals that are modulated by exponential sequences.
*   Perform frequency shifting in the z-domain.
*   Analyze systems with poles and zeros that have been scaled.

**Examples:**

**Example 1:**

Find the Z-transform of x[n] = (1/2)<sup>n</sup>u[n]cos(ω<sub>0</sub>n)

1.  **Identify the base signal and the modulating term:**

    *   Base signal: y[n] = (1/2)<sup>n</sup>u[n]
    *   Modulating term: cos(ω<sub>0</sub>n) = (e<sup>jω<sub>0</sub>n</sup> + e<sup>-jω<sub>0</sub>n</sup>)/2
    *   Overall, x[n] = (1/2)<sup>n</sup>u[n] * (e<sup>jω<sub>0</sub>n</sup> + e<sup>-jω<sub>0</sub>n</sup>)/2 = (1/2) * (e<sup>jω<sub>0</sub></sup>)<sup>n</sup> * (1/2)<sup>n</sup>u[n] + (1/2) * (e<sup>-jω<sub>0</sub></sup>)<sup>n</sup> * (1/2)<sup>n</sup>u[n]
2.  **Find the Z-transform of the base signal:**

    *   Y(z) = Z{(1/2)<sup>n</sup>u[n]} = z/(z - 1/2),  ROC: |z| > 1/2
3.  **Apply the complex modulation property:**

    *   Z{(e<sup>jω<sub>0</sub></sup>)<sup>n</sup>(1/2)<sup>n</sup>u[n]} = Y(z/e<sup>jω<sub>0</sub></sup>) = (z/e<sup>jω<sub>0</sub></sup>)/(z/e<sup>jω<sub>0</sub></sup> - 1/2) = z/(z - (1/2)e<sup>jω<sub>0</sub></sup>),  ROC: |z| > |(1/2)e<sup>jω<sub>0</sub></sup>| = 1/2
    *   Z{(e<sup>-jω<sub>0</sub></sup>)<sup>n</sup>(1/2)<sup>n</sup>u[n]} = Y(z/e<sup>-jω<sub>0</sub></sup>) = (z/e<sup>-jω<sub>0</sub></sup>)/(z/e<sup>-jω<sub>0</sub></sup> - 1/2) = z/(z - (1/2)e<sup>-jω<sub>0</sub></sup>),  ROC: |z| > |(1/2)e<sup>-jω<sub>0</sub></sup>| = 1/2

4.  **Combine the results:**

    *   X(z) = (1/2) * [z/(z - (1/2)e<sup>jω<sub>0</sub></sup>) + z/(z - (1/2)e<sup>-jω<sub>0</sub></sup>)]
    *   X(z) = (1/2) * [z(z - (1/2)e<sup>-jω<sub>0</sub></sup>) + z(z - (1/2)e<sup>jω<sub>0</sub></sup>)] / [(z - (1/2)e<sup>jω<sub>0</sub></sup>)(z - (1/2)e<sup>-jω<sub>0</sub></sup>)]
    *   X(z) = (1/2) * [z<sup>2</sup> - (1/2)ze<sup>-jω<sub>0</sub></sup> + z<sup>2</sup> - (1/2)ze<sup>jω<sub>0</sub></sup>] / [z<sup>2</sup> - (1/2)ze<sup>jω<sub>0</sub></sup> - (1/2)ze<sup>-jω<sub>0</sub></sup> + (1/4)]
    *   X(z) = (1/2) * [2z<sup>2</sup> - z(1/2)(e<sup>jω<sub>0</sub></sup>+e<sup>-jω<sub>0</sub></sup>)] / [z<sup>2</sup> - (1/2)z(e<sup>jω<sub>0</sub></sup>+e<sup>-jω<sub>0</sub></sup>) + (1/4)]
    *   X(z) = (z<sup>2</sup> - (1/2)zcos(ω<sub>0</sub>)) / [z<sup>2</sup> - zcos(ω<sub>0</sub>) + (1/4)]  , ROC: |z| > 1/2

**Example 2:**

Given x[n] ↔ X(z) = 1/(1 - 0.5z<sup>-1</sup>) for |z| > 0.5, find the Z-transform of y[n] = (0.7)<sup>n</sup>x[n].

1. **Apply the property directly:**

   Y(z) = X(z/0.7) = 1/(1 - 0.5(z/0.7)<sup>-1</sup>) = 1/(1 - 0.5(0.7)z<sup>-1</sup>) = 1/(1 - 0.35z<sup>-1</sup>)

2. **Find the new ROC:**

   Original ROC: |z| > 0.5.  New ROC: |z/0.7| > 0.5  => |z| > (0.5)(0.7) = 0.35

3. **Final Result:**

   Y(z) = 1/(1 - 0.35z<sup>-1</sup>),  ROC: |z| > 0.35

## 4. Analyzing the Effect of Complex Modulation on the ROC

As shown in the derivation and examples, complex modulation scales the ROC. If the original ROC is *R*, the new ROC becomes *|a|R*, where *a* is the complex constant used for modulation.

*   If |a| > 1, the ROC expands.
*   If |a| < 1, the ROC shrinks.
*   If |a| = 1, the ROC remains the same size, but its position can be shifted (rotated if *a* is complex).

**Important Note:**  Complex modulation can affect the stability and causality of a system if the ROC is altered in a way that it no longer includes the unit circle (|z| = 1).

## 5. Utilizing Complex Modulation for Frequency Shifting

Complex modulation can be used to shift the frequency content of a discrete-time signal. This is analogous to modulation in continuous-time systems.

*   Multiplying a signal x[n] by e<sup>jω<sub>0</sub>n</sup> shifts the signal's frequency spectrum by ω<sub>0</sub>.  This means that the frequency component at ω in X(e<sup>jω</sup>) will be shifted to ω - ω<sub>0</sub> in Y(e<sup>jω</sup>), where Y(z) is the Z-transform of e<sup>jω<sub>0</sub>n</sup>x[n].  Similarly, multiplying by e<sup>-jω<sub>0</sub>n</sup> shifts the spectrum by +ω<sub>0</sub>.

**Example:**

Consider a low-pass signal x[n] with a Z-transform X(z).  To shift the signal to a higher frequency band, you can multiply x[n] by e<sup>jω<sub>0</sub>n</sup> where ω<sub>0</sub> is the desired frequency shift.  The Z-transform of the resulting signal will be X(z/e<sup>jω<sub>0</sub></sup>). The ROC will remain the same size but rotated.

## 6. Practice Questions/Exercises with Answers

**Question 1:**

Find the Z-transform of x[n] = n(3)<sup>n</sup>u[n].

**Solution:**

1. Start with the known transform: (3)<sup>n</sup>u[n] ↔ z/(z-3), |z| > 3
2. Recognize that n(3)<sup>n</sup>u[n] can be written as -z d/dz(z/(z-3)).
3. Calculate the derivative: d/dz(z/(z-3)) = (z-3 - z)/(z-3)<sup>2</sup> = -3/(z-3)<sup>2</sup>
4. Multiply by -z: -z * (-3/(z-3)<sup>2</sup>) = 3z/(z-3)<sup>2</sup>
   Answer: X(z) = 3z/(z-3)<sup>2</sup>, |z| > 3

**Question 2:**

Given X(z) = z/(z-0.8) for |z| > 0.8, find the Z-transform of y[n] = (j2)<sup>n</sup>x[n].

**Solution:**

1. Apply the complex modulation property: Y(z) = X(z/j2) = (z/j2)/((z/j2)-0.8)
2. Simplify: Y(z) = z/(z - 0.8(j2)) = z/(z - j1.6)
3.  Find the new ROC:  Original ROC: |z| > 0.8.  New ROC: |z/j2| > 0.8 => |z| > 0.8*|j2| = 0.8 * 2 = 1.6
   Answer: Y(z) = z/(z - j1.6), |z| > 1.6

**Question 3:**

If x[n] ↔ X(z) = (z+1)/z, |z|>0.  Find the Z-transform of  y[n] = (1/4)<sup>n</sup>x[n]

**Solution:**

1.  Apply complex modulation: Y(z) = X(z/(1/4)) = X(4z) = ((4z)+1)/(4z) = (4z+1)/(4z) = 1 + (1/(4z))
2. Find ROC: Original ROC |z| > 0. New ROC |z/(1/4)| > 0 => |4z| > 0 => |z| > 0
   Answer: Y(z) = (4z+1)/(4z), |z| > 0

**Question 4:**

A signal x[n] has Z-transform X(z) = 1/(1-0.9z<sup>-1</sup>) for |z| > 0.9. Determine the Z-transform and ROC of  y[n] = (-1)<sup>n</sup>x[n].

**Solution:**

1. Recognize that (-1)<sup>n</sup> is equivalent to (-1)<sup>n</sup>. So a=-1.
2.  Apply complex modulation:  Y(z) = X(z/-1) = X(-z) = 1/(1-0.9(-z)<sup>-1</sup>) = 1/(1 + 0.9z<sup>-1</sup>)
3.  Find ROC:  Original ROC |z| > 0.9.  New ROC: |-z| > 0.9  =>  |z| > 0.9
   Answer: Y(z) = 1/(1 + 0.9z<sup>-1</sup>), |z| > 0.9

## 7. Important Points to Remember

*   Complex modulation scales the z-plane and hence the ROC.
*   The stability and causality of a system can be affected by complex modulation due to changes in the ROC.
*   Complex modulation is a powerful technique for frequency shifting in discrete-time systems.
*   Always consider the ROC when applying the complex modulation property. Failure to do so can lead to incorrect results and misinterpretations of the system's behavior.
*  Be careful with complex numbers. Express your answer clearly with real and imaginary part if applicable.

This document provides a comprehensive overview of complex modulation in the context of the Z-transform. By understanding the concepts, derivations, and applications presented here, you will be well-equipped to analyze and manipulate signals and systems in the z-domain. Remember to practice with various examples to solidify your understanding.
