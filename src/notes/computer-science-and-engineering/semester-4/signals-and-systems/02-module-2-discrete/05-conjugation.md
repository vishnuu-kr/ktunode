---
title: "Conjugation"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Discrete"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b14c"
status: "completed"
scrapedAt: "2026-05-20T16:15:38.538Z"
---
## Signals and Systems: Module 2 - Discrete - Conjugation

**Learning Outcomes:**

*   Understand the concept of conjugation of discrete-time signals.
*   Apply conjugation to complex-valued discrete-time signals.
*   Determine the properties of conjugation, including its effect on signal energy and symmetry.
*   Recognize the application of conjugation in signal processing contexts, particularly in the context of Fourier analysis.

**1. Introduction to Conjugation**

*   **Definition:** The conjugate of a complex number is obtained by changing the sign of its imaginary part.
    *   If  *z = a + jb*, where *a* and *b* are real numbers and *j* is the imaginary unit (√-1), then the conjugate of *z*, denoted as *z*<sup>\*</sup>, is *z*<sup>\*</sup> = *a - jb*.

*   **Geometric Interpretation:**  In the complex plane, conjugation corresponds to reflecting the complex number across the real axis.

*   **Discrete-Time Signal Conjugation:**  For a discrete-time signal *x[n]*, which can be complex-valued, the conjugate signal *x<sup>\*</sup>[n]* is obtained by taking the conjugate of each sample:
    *   *x<sup>\*</sup>[n] = (x[n])*<sup>\*</sup>

*   **Why is Conjugation Important?** Conjugation is a fundamental operation in signal processing with applications in:
    *   Fourier analysis
    *   Filter design
    *   Modulation/Demodulation
    *   Correlation

**2. Key Concepts and Definitions**

*   **Complex Number:** A number of the form *a + jb*, where *a* and *b* are real numbers and *j* = √-1.
    *   *a* is the real part (Re{z})
    *   *b* is the imaginary part (Im{z})

*   **Complex Conjugate:** The complex conjugate of *z = a + jb* is *z*<sup>\*</sup> = *a - jb*.

*   **Magnitude:**  The magnitude of a complex number *z = a + jb* is |*z*| = √(*a*<sup>2</sup> + *b*<sup>2</sup>).

*   **Phase:** The phase of a complex number *z = a + jb* is *θ = arctan(b/a)*. Remember to consider the quadrant of (a, b) when calculating arctan to get the correct phase.

*   **Euler's Formula:** *e<sup>jθ</sup> = cos(θ) + j sin(θ)*

*   **Polar Form:** A complex number can be represented in polar form as *z = r e<sup>jθ</sup>*, where *r* is the magnitude (|z|) and *θ* is the phase (angle).

*   **Conjugate in Polar Form:** If *z = r e<sup>jθ</sup>*, then *z*<sup>\*</sup> = *r e<sup>-jθ</sup>*.  The magnitude remains the same, but the phase is negated.

**3. Properties of Conjugation**

*   **(x<sup>\*</sup>[n])<sup>\*</sup> = x[n]**:  Conjugating a signal twice returns the original signal.

*   **(ax[n])<sup>\*</sup> = a<sup>\*</sup>x<sup>\*</sup>[n]**:  The conjugate of a scaled signal is the conjugate of the scalar multiplied by the conjugate of the signal.  If *a* is real, then (ax[n])*<sup>\*</sup> = a x<sup>\*</sup>[n].

*   **(x[n] + y[n])<sup>\*</sup> = x<sup>\*</sup>[n] + y<sup>\*</sup>[n]**:  The conjugate of a sum of signals is the sum of the conjugates of the signals.

*   **(x[n]y[n])<sup>\*</sup> = x<sup>\*</sup>[n]y<sup>\*</sup>[n]**: The conjugate of a product of signals is the product of the conjugates of the signals.

*   **Re{x[n]} = (x[n] + x<sup>\*</sup>[n])/2**:  The real part of a signal can be obtained by averaging the signal and its conjugate.

*   **Im{x[n]} = (x[n] - x<sup>\*</sup>[n])/(2j)**: The imaginary part of a signal can be obtained by subtracting the signal and its conjugate, then dividing by *2j*.

*   **|x<sup>\*</sup>[n]| = |x[n]|**: The magnitude of the conjugated signal is the same as the magnitude of the original signal.

*   **Phase{x<sup>\*</sup>[n]} = -Phase{x[n]}**: The phase of the conjugated signal is the negative of the phase of the original signal.

**4. Effect on Signal Energy**

*   **Energy of a Signal:** The energy of a discrete-time signal *x[n]* is defined as:
    *   *E = Σ |x[n]|<sup>2</sup>  (summed over all n)*

*   **Energy Invariance under Conjugation:**  The energy of a signal and its conjugate are the same.
    *   *Σ |x<sup>\*</sup>[n]|<sup>2</sup> = Σ |x[n]|<sup>2</sup>*

*   **Proof:**  Since |x<sup>\*</sup>[n]| = |x[n]|, then |x<sup>\*</sup>[n]|<sup>2</sup> = |x[n]|<sup>2</sup>.

**5. Effect on Signal Symmetry**

*   **Even Signal (Symmetric):** A signal *x[n]* is even if *x[n] = x[-n]*.

*   **Odd Signal (Anti-symmetric):** A signal *x[n]* is odd if *x[n] = -x[-n]*.

*   **Conjugate Symmetric (Hermitian):** A complex-valued signal *x[n]* is conjugate symmetric if *x[n] = x<sup>\*</sup>[-n]*.  This is the complex-valued analog of an even signal.

*   **Conjugate Anti-symmetric (Anti-Hermitian):** A complex-valued signal *x[n]* is conjugate anti-symmetric if *x[n] = -x<sup>\*</sup>[-n]*.  This is the complex-valued analog of an odd signal.

*   **Real-valued Even Signals:**  A real-valued even signal is also conjugate symmetric.
*   **Real-valued Odd Signals:** A real-valued odd signal is also conjugate anti-symmetric.

**6. Application in Signal Processing (Fourier Analysis)**

*   **Discrete-Time Fourier Transform (DTFT):**  The DTFT of a signal *x[n]* is *X(e<sup>jω</sup>) = Σ x[n]e<sup>-jωn</sup>  (summed over all n)*, where *ω* is the frequency.

*   **Property of DTFT for Real Signals:** If *x[n]* is a real-valued signal, then *X(e<sup>jω</sup>) = X<sup>\*</sup>(e<sup>-jω</sup>)*.  This means the DTFT of a real signal is conjugate symmetric.  This is a crucial property used to simplify computations and interpretations.

*   **Implications for Magnitude and Phase:** If *x[n]* is real:
    *   |X(e<sup>jω</sup>)| = |X(e<sup>-jω</sup>)|  (Magnitude is even)
    *   Phase{X(e<sup>jω</sup>)} = -Phase{X(e<sup>-jω</sup>)}  (Phase is odd)

**7. Examples**

**Example 1: Conjugation of a simple complex signal**

*   Let *x[n] = 2 + j3  for n = 0;  x[n] = 1 - j for n = 1; x[n] = 0 otherwise*.
*   Then, *x<sup>\*</sup>[n] = 2 - j3  for n = 0;  x<sup>\*</sup>[n] = 1 + j for n = 1; x<sup>\*</sup>[n] = 0 otherwise*.

**Example 2: Conjugation in Polar Form**

*   Let *x[n] = e<sup>j(π/4)n</sup>* for 0 ≤ n ≤ 3, and *x[n] = 0* otherwise.
*   Then *x<sup>\*</sup>[n] = e<sup>-j(π/4)n</sup>* for 0 ≤ n ≤ 3, and *x<sup>\*</sup>[n] = 0* otherwise.

**Example 3: Conjugate Symmetry**

*   Let *x[n] = [1, 2 + j, 3, 2 - j, 1]*.  We want to check if it is conjugate symmetric.
    *   *x[-2] = 1, x[-1] = 2-j, x[0] = 3, x[1] = 2+j, x[2] = 1*
    *   *x<sup>\*</sup>[-2] = 1, x<sup>\*</sup>[-1] = 2+j, x<sup>\*</sup>[0] = 3, x<sup>\*</sup>[1] = 2-j, x<sup>\*</sup>[2] = 1*
    *   Since *x[n] = x<sup>\*</sup>[-n]*, the signal is conjugate symmetric.

**8. Practice Questions/Exercises**

**Q1:** Find the conjugate of *x[n] = 3 - j2* for *n = 0* and *x[n] = j5* for *n = 1*.  What is |x[0]| and |x<sup>\*</sup>[0]|?

**A1:**
*   *x<sup>\*</sup>[n] = 3 + j2* for *n = 0* and *x<sup>\*</sup>[n] = -j5* for *n = 1*.
*   |x[0]| = √(3<sup>2</sup> + (-2)<sup>2</sup>) = √13
*   |x<sup>\*</sup>[0]| = √(3<sup>2</sup> + 2<sup>2</sup>) = √13

**Q2:**  If *x[n]* is a real-valued signal, what can you say about the relationship between *X(e<sup>jω</sup>)* and *X(e<sup>-jω</sup>)*, where *X(e<sup>jω</sup>)* is the DTFT of *x[n]*.

**A2:**  *X(e<sup>jω</sup>) = X<sup>\*</sup>(e<sup>-jω</sup>)*.  The DTFT of a real-valued signal is conjugate symmetric.

**Q3:** Determine if the signal *x[n] = [1 + j, 2, 1 - j]* is conjugate symmetric.

**A3:**
*   First, calculate *x<sup>\*</sup>[-n]*.  We need to consider the length of the signal to ensure proper indexing. Assume *x[0] = 2*.
*   *x[-1] = 1+j; x[0] = 2; x[1] = 1-j*
*   *x<sup>\*</sup>[-1] = 1-j; x<sup>\*</sup>[0] = 2; x<sup>\*</sup>[1] = 1+j*
*   Comparing to the original, *x<sup>\*</sup>[-1] = x[1]; x<sup>\*</sup>[0] = x[0]; x<sup>\*</sup>[1] = x[-1]*
*   Therefore, the signal *x[n]* is conjugate symmetric.

**Q4:** Let x[n] = n + j*n<sup>2</sup> from n=0 to 4. Compute the magnitude and phase of x[2] and x<sup>\*</sup>[2].

**A4:**
*   x[n] = n + j*n<sup>2</sup>
*   x[2] = 2 + j*4
*   |x[2]| = sqrt(2<sup>2</sup> + 4<sup>2</sup>) = sqrt(20)
*   Phase{x[2]} = arctan(4/2) = arctan(2) ≈ 1.107 radians
*   x<sup>\*</sup>[2] = 2 - j*4
*   |x<sup>\*</sup>[2]| = sqrt(2<sup>2</sup> + (-4)<sup>2</sup>) = sqrt(20)
*   Phase{x<sup>\*</sup>[2]} = arctan(-4/2) = arctan(-2) ≈ -1.107 radians

**9. Important Points to Remember**

*   Conjugation changes the sign of the imaginary part of a complex number or signal.
*   The magnitude of a signal and its conjugate are equal.
*   The phase of a signal and its conjugate are negatives of each other.
*   Conjugation preserves signal energy.
*   The DTFT of a real signal is conjugate symmetric. This is a very important property.
*   Conjugate symmetry is the complex-valued analog of even symmetry.
*   Understanding complex numbers and their manipulation (including conjugation) is essential for advanced signal processing topics.
