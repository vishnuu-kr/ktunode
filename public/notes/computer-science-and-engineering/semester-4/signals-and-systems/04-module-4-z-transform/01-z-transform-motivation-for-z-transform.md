---
title: "Z transform  - motivation for z transform"
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b168"
status: "completed"
scrapedAt: "2026-05-20T16:15:56.857Z"
---
## Signals and Systems: Module 4 - Z-Transform - Motivation for Z-Transform

**Topic:** Z-Transform - Motivation for Z-Transform

**Learning Outcomes:**

*   Understand the limitations of Fourier Transform and the need for Z-Transform.
*   Explain how the Z-Transform extends the Fourier Transform.
*   Identify the regions of convergence (ROC) and its significance.
*   Appreciate the role of poles and zeros in system analysis using Z-Transform.
*   Recognize the relationship between the s-plane (Laplace) and the z-plane.

**1. Limitations of the Fourier Transform and the Need for Z-Transform**

*   **Convergence Issues with Fourier Transform:** The Discrete-Time Fourier Transform (DTFT) exists only if the discrete-time signal *x[n]* is absolutely summable, i.e.,  ∑|x[n]| < ∞ (summation from -∞ to +∞). Many signals of practical interest, such as exponentially growing signals or even step functions, do not satisfy this condition and therefore do not have a DTFT.

    *   **Example:** Consider the signal *x[n] = u[n]*.  Its DTFT does not converge directly.
    *   **Example:** Consider the signal *x[n] = a<sup>n</sup>u[n]*, where |a| > 1. This signal also does not have a DTFT directly, because it grows unbounded as n increases.

*   **Analyzing Unstable Systems:**  The DTFT is insufficient for analyzing unstable systems because the impulse response of an unstable system is not absolutely summable.  We need a more general transform to handle these cases.

*   **Need for a More General Transform:** The Z-Transform is introduced to address these limitations by providing a broader class of signals that can be analyzed in the frequency domain.

**2. How the Z-Transform Extends the Fourier Transform**

*   **Introducing a Convergence Factor:**  The Z-Transform introduces a complex variable *z*, which allows us to "weight" the signal *x[n]* with a factor of *z<sup>-n</sup>*. By choosing *z* appropriately, we can often make the weighted signal absolutely summable, even if the original signal was not.

*   **Definition of Z-Transform:**  The Z-Transform of a discrete-time signal *x[n]* is defined as:

    X(z) = ∑x[n]z<sup>-n</sup>  (summation from -∞ to +∞)

    where *z* is a complex variable.

*   **Relationship to DTFT:**  The DTFT is a special case of the Z-Transform, where *z* is restricted to the unit circle in the complex plane (i.e., *z = e<sup>jω</sup>*).  This can be expressed as:

    DTFT{x[n]} = X(e<sup>jω</sup>)

*   **Making Signals Absolutely Summable:** By multiplying *x[n]* with *z<sup>-n</sup>*,  we are effectively scaling *x[n]* by |z|<sup>-n</sup>. If |z| is chosen such that the scaled signal is absolutely summable, the Z-Transform will converge.

    *   **Example:** Consider *x[n] = a<sup>n</sup>u[n]*.  Its Z-Transform is X(z) = ∑a<sup>n</sup>u[n]z<sup>-n</sup> = ∑(a/z)<sup>n</sup>u[n] (summation from 0 to +∞).  This converges if |a/z| < 1, or |z| > |a|. So, even if |a| > 1 (meaning *x[n]* grows), we can choose *z* such that |z| > |a| to make the Z-Transform converge.

**3. Region of Convergence (ROC) and its Significance**

*   **Definition:** The Region of Convergence (ROC) is the set of all values of *z* for which the Z-Transform converges (i.e., the infinite sum in the Z-Transform definition is finite).

*   **Properties of the ROC:**

    *   The ROC is a ring or disk in the complex *z*-plane centered at the origin.
    *   The ROC does not contain any poles.
    *   For causal systems (x[n] = 0 for n < 0), the ROC is the exterior of a circle (i.e., |z| > R, where R is the radius).
    *   For anti-causal systems (x[n] = 0 for n > 0), the ROC is the interior of a circle (i.e., |z| < R).
    *   For two-sided signals, the ROC is an annulus (i.e., R<sub>1</sub> < |z| < R<sub>2</sub>).

*   **Importance of the ROC:** The ROC is crucial because it determines the uniqueness of the inverse Z-Transform.  The same algebraic expression for X(z) can correspond to different time-domain signals depending on the ROC.

    *   **Example:**  X(z) = z/(z-0.5).  This can represent two different signals:

        *   *x[n] = (0.5)<sup>n</sup>u[n]*, if ROC is |z| > 0.5 (causal).
        *   *x[n] = -(0.5)<sup>n</sup>u[-n-1]*, if ROC is |z| < 0.5 (anti-causal).

**4. Poles and Zeros in System Analysis**

*   **Definition of Poles:** Poles are the values of *z* for which the Z-Transform *X(z)* approaches infinity (i.e., the denominator of *X(z)* is zero).

*   **Definition of Zeros:** Zeros are the values of *z* for which the Z-Transform *X(z)* is equal to zero (i.e., the numerator of *X(z)* is zero).

*   **Poles and Zeros and the ROC:** The ROC is bounded by the poles. The ROC cannot contain any poles.

*   **System Stability:**  For a causal LTI system to be stable, all the poles of its system function *H(z)* must lie inside the unit circle (|z| < 1). This ensures that the impulse response *h[n]* is absolutely summable.

*   **Frequency Response:**  The magnitude and phase of the frequency response of a system can be determined from the location of its poles and zeros in the z-plane.  Poles near the unit circle amplify the frequency response, while zeros near the unit circle attenuate it.

**5. Relationship Between the s-plane (Laplace) and the z-plane**

*   **Mapping:** The s-plane (used in Laplace Transform for continuous-time systems) and the z-plane are related by the transformation:

    z = e<sup>sT</sup>

    where *T* is the sampling period.

*   **Stability Region Mapping:** The left half of the s-plane (Re(s) < 0, representing stable continuous-time systems) maps to the inside of the unit circle in the z-plane (|z| < 1, representing stable discrete-time systems). The *jω* axis in the s-plane maps to the unit circle in the z-plane.

*   **Pole Locations and System Behavior:**

    *   Poles in the left half s-plane correspond to exponentially decaying signals in the time domain. These map to poles inside the unit circle in the z-plane, which also correspond to decaying signals.
    *   Poles in the right half s-plane correspond to exponentially growing signals in the time domain. These map to poles outside the unit circle in the z-plane, which also correspond to growing signals.
    *   Poles on the imaginary axis in the s-plane correspond to sustained oscillations. These map to poles on the unit circle in the z-plane, which also correspond to sustained oscillations.

**Practice Questions/Exercises:**

1.  **Question:** Explain why the Z-Transform is necessary when the DTFT is not sufficient for analyzing certain discrete-time signals.

    **Answer:** The DTFT requires absolute summability of the signal. Many important signals, like exponentially growing signals or the unit step function, don't satisfy this condition. The Z-Transform introduces a complex variable 'z' which allows us to weight the signal to achieve convergence, expanding the range of analyzable signals.

2.  **Question:**  A system has a transfer function H(z) = (z-0.2)/(z-0.8). What is the ROC for a causal system? Is the system stable?

    **Answer:**  The pole is at z = 0.8. For a causal system, the ROC is |z| > 0.8.  Since the pole is inside the unit circle (|0.8| < 1), the system is stable.

3.  **Question:**  If X(z) = 1/(1-z<sup>-1</sup>) and the ROC is |z| > 1, what is x[n]?

    **Answer:** Using the Z-transform pair, x[n] = u[n], the unit step function.

4.  **Question:**  If X(z) = 1/(1-z<sup>-1</sup>) and the ROC is |z| < 1, what is x[n]?

     **Answer:** Using the Z-transform pair, x[n] = -u[-n-1].

5.  **Question:** Describe how the location of poles of a system's transfer function relates to the stability of a causal system.

    **Answer:** For a causal LTI system to be stable, all poles of its transfer function H(z) must lie *inside* the unit circle (|z| < 1). If any pole lies outside the unit circle, the impulse response will grow unbounded, making the system unstable.

**Important Points to Remember:**

*   The Z-Transform is a generalization of the DTFT.
*   The Region of Convergence (ROC) is essential for a unique inverse Z-Transform.
*   Poles and Zeros provide valuable information about the system's behavior.
*   For a causal system to be stable, all poles must be inside the unit circle.
*   The mapping z = e<sup>sT</sup> connects the s-plane and z-plane, allowing us to relate continuous-time and discrete-time system behavior.
