---
title: "Interconnection of LTI systems."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Z transform  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b17b"
status: "completed"
scrapedAt: "2026-05-20T16:16:10.615Z"
---
## Signals and Systems - Module 4: Z-Transform - Interconnection of LTI Systems

**Introduction:** This module focuses on understanding the Z-transform and its application in analyzing and designing Linear Time-Invariant (LTI) systems. Specifically, this section covers the interconnection of multiple LTI systems and how their individual Z-transforms combine to represent the overall system.

**Learning Outcomes:** Upon completion of this section, you should be able to:

*   Determine the Z-transform of the cascaded, parallel, and feedback interconnections of LTI systems.
*   Calculate the system function of interconnected LTI systems.
*   Determine the Region of Convergence (ROC) of the overall system function for interconnected LTI systems.
*   Analyze the stability of interconnected systems based on the location of poles in the Z-plane.

**1. Key Concepts and Definitions:**

*   **LTI System:** A system that is both linear and time-invariant. Its behavior is completely characterized by its impulse response, *h[n]*.

*   **Z-Transform:** A mathematical tool that transforms a discrete-time signal *x[n]* into a complex-valued function *X(z)* of a complex variable *z*.  The Z-transform is defined as:

    *   *X(z) =  ∑<sub>n=-∞</sub><sup>∞</sup> x[n]z<sup>-n</sup>*

*   **System Function (Transfer Function):** The Z-transform of the impulse response *h[n]* of an LTI system. Denoted as *H(z)*.

    *   *H(z) =  ∑<sub>n=-∞</sub><sup>∞</sup> h[n]z<sup>-n</sup>*
    *   The output *Y(z)* of an LTI system to an input *X(z)* is given by:  *Y(z) = H(z)X(z)*

*   **Region of Convergence (ROC):** The set of values of *z* in the complex plane for which the Z-transform *X(z)* converges.  The ROC is crucial for determining the unique inverse Z-transform of *X(z)*.

*   **Poles and Zeros:**
    *   **Poles:** Values of *z* for which the magnitude of *H(z)* approaches infinity.
    *   **Zeros:** Values of *z* for which *H(z)* equals zero.

*   **Stability:** An LTI system is stable if its impulse response *h[n]* is absolutely summable, i.e., ∑<sub>n=-∞</sub><sup>∞</sup> |h[n]| < ∞. In the Z-domain, an LTI system is stable if its ROC includes the unit circle (|z| = 1).  For a causal LTI system, stability implies that all poles of *H(z)* lie inside the unit circle.

**2. Types of Interconnections of LTI Systems:**

*   **Cascade (Series) Interconnection:**

    *   Two or more LTI systems connected in series, where the output of one system becomes the input of the next.
    *   **System Function:** *H(z) = H<sub>1</sub>(z)H<sub>2</sub>(z)*
    *   **ROC:** The ROC of *H(z)* is at least the intersection of the ROCs of *H<sub>1</sub>(z)* and *H<sub>2</sub>(z)*.  It may be larger if pole-zero cancellation occurs.

    *   **Example:**  Consider two LTI systems with system functions *H<sub>1</sub>(z) = 1/(1 - 0.5z<sup>-1</sup>), |z| > 0.5* and *H<sub>2</sub>(z) = 1/(1 - 0.8z<sup>-1</sup>), |z| > 0.8*. The overall system function is *H(z) = H<sub>1</sub>(z)H<sub>2</sub>(z) = 1/((1 - 0.5z<sup>-1</sup>)(1 - 0.8z<sup>-1</sup>))*. The ROC of the overall system is *|z| > 0.8*.

*   **Parallel Interconnection:**

    *   Two or more LTI systems connected in parallel, where the same input is applied to each system, and the outputs are summed to produce the overall output.
    *   **System Function:** *H(z) = H<sub>1</sub>(z) + H<sub>2</sub>(z)*
    *   **ROC:** The ROC of *H(z)* is the intersection of the ROCs of *H<sub>1</sub>(z)* and *H<sub>2</sub>(z)*.

    *   **Example:**  Consider two LTI systems with system functions *H<sub>1</sub>(z) = 1/(1 - 0.5z<sup>-1</sup>), |z| > 0.5* and *H<sub>2</sub>(z) = 1/(1 - 0.8z<sup>-1</sup>), |z| > 0.8*. The overall system function is *H(z) = H<sub>1</sub>(z) + H<sub>2</sub>(z) = 1/(1 - 0.5z<sup>-1</sup>) + 1/(1 - 0.8z<sup>-1</sup>) = (2 - 1.3z<sup>-1</sup>)/((1 - 0.5z<sup>-1</sup>)(1 - 0.8z<sup>-1</sup>))*. The ROC of the overall system is *|z| > 0.8*.

*   **Feedback Interconnection:**

    *   The output of one system is fed back and combined (typically subtracted) with the input.
    *   **System Function:**
        *   *H(z) = H<sub>1</sub>(z) / (1 + H<sub>1</sub>(z)H<sub>2</sub>(z))*, where H<sub>1</sub>(z) is the forward path system and H<sub>2</sub>(z) is the feedback path system.
    *   **ROC:** Determined by the poles of *H(z)*. The ROC must be outside all poles for a causal system. The ROC typically includes the intersection of the ROCs of  *H<sub>1</sub>(z)*, *H<sub>2</sub>(z)*, and the region where *|H<sub>1</sub>(z)H<sub>2</sub>(z)| < 1*.

    *   **Example:**  Let's assume a feedback system with *H<sub>1</sub>(z) = 1/(1 - 0.5z<sup>-1</sup>), |z| > 0.5* and *H<sub>2</sub>(z) = z<sup>-1</sup>, |z| > 0*. The overall system function is *H(z) = H<sub>1</sub>(z) / (1 + H<sub>1</sub>(z)H<sub>2</sub>(z)) = (1/(1 - 0.5z<sup>-1</sup>)) / (1 + (1/(1 - 0.5z<sup>-1</sup>)) * z<sup>-1</sup>) = 1 / (1 - 0.5z<sup>-1</sup> + z<sup>-1</sup>) = 1 / (1 + 0.5z<sup>-1</sup>)*. The ROC is *|z| > 0.5*.

**3. Determining Stability of Interconnected Systems:**

*   **Cascade:** The interconnected system is stable if *both* systems in the cascade are stable.  This means all poles of *H<sub>1</sub>(z)* and *H<sub>2</sub>(z)* lie inside the unit circle, and *H<sub>1</sub>(z)H<sub>2</sub>(z)* has all its poles inside the unit circle after any pole-zero cancellations.

*   **Parallel:** The interconnected system is stable if *both* systems in the parallel are stable. This means all poles of *H<sub>1</sub>(z)* and *H<sub>2</sub>(z)* lie inside the unit circle, and *H<sub>1</sub>(z) + H<sub>2</sub>(z)* has all its poles inside the unit circle after any cancellations.

*   **Feedback:** Stability is determined by the location of the poles of the overall system function *H(z) = H<sub>1</sub>(z) / (1 + H<sub>1</sub>(z)H<sub>2</sub>(z))*. The system is stable if all poles of *H(z)* lie inside the unit circle. This is equivalent to examining the roots of the characteristic equation:  *1 + H<sub>1</sub>(z)H<sub>2</sub>(z) = 0*.

**4. Important Points to Remember:**

*   Pole-zero cancellations can occur in cascaded systems, potentially widening the ROC.
*   The ROC of a parallel connection is the *intersection* of the individual ROCs.
*   Stability of feedback systems is determined by the roots of the characteristic equation.
*   Always consider the ROC when determining the inverse Z-transform and analyzing the system's behavior.

**5. Practice Questions and Exercises:**

**Question 1:**

Two LTI systems are connected in cascade. Their impulse responses are *h<sub>1</sub>[n] = (1/2)<sup>n</sup>u[n]* and *h<sub>2</sub>[n] = (1/3)<sup>n</sup>u[n]*.

(a) Find the system functions *H<sub>1</sub>(z)* and *H<sub>2</sub>(z)* and their respective ROCs.
(b) Find the overall system function *H(z)* and its ROC.
(c) Determine the stability of the overall system.

**Answer:**

(a)  *H<sub>1</sub>(z) = 1/(1 - 0.5z<sup>-1</sup>), ROC: |z| > 0.5* and *H<sub>2</sub>(z) = 1/(1 - 0.333z<sup>-1</sup>), ROC: |z| > 0.333*

(b)  *H(z) = H<sub>1</sub>(z)H<sub>2</sub>(z) = 1/((1 - 0.5z<sup>-1</sup>)(1 - 0.333z<sup>-1</sup>)), ROC: |z| > 0.5*

(c) The system is stable because both poles (z = 0.5 and z = 0.333) are inside the unit circle, and the ROC includes the unit circle.

**Question 2:**

Two LTI systems with system functions *H<sub>1</sub>(z) = z/(z - 0.5), |z| > 0.5* and *H<sub>2</sub>(z) = (z - 0.5)/(z + 0.8), |z| > 0.8* are connected in cascade.

(a) Find the overall system function *H(z)* and its ROC.
(b) Determine if the system is causal.
(c) Determine the stability of the overall system.

**Answer:**

(a) *H(z) = H<sub>1</sub>(z)H<sub>2</sub>(z) = z/(z + 0.8), ROC: |z| > 0.8* (Note the pole-zero cancellation at z = 0.5)

(b)  Yes, the system is causal because the ROC is outside the outermost pole.

(c) The system is stable because the pole (z = -0.8) is inside the unit circle, and the ROC includes the unit circle.

**Question 3:**

Consider a feedback system with *H<sub>1</sub>(z) = 2z<sup>-1</sup>* and *H<sub>2</sub>(z) = 0.5*. Determine the overall system function *H(z)* and its stability. Assume ROC includes infinity.

**Answer:**

*H(z) = H<sub>1</sub>(z) / (1 + H<sub>1</sub>(z)H<sub>2</sub>(z)) = 2z<sup>-1</sup> / (1 + 2z<sup>-1</sup> * 0.5) = 2z<sup>-1</sup> / (1 + z<sup>-1</sup>) = 2/(z + 1)*. The pole is at *z = -1*. Since this pole is ON the unit circle, the system is marginally stable, also known as *stable but not asymptotically stable*.

**6. Further Study:**

*   Review the definitions of linearity, time-invariance, and causality.
*   Practice Z-transforming common signals and finding inverse Z-transforms.
*   Explore the relationship between the Z-transform and the discrete-time Fourier transform (DTFT).
*   Investigate more advanced topics like the use of Z-transforms in filter design and control systems.
