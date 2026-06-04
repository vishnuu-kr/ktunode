---
title: "Feedback Stabilisation, Kalman-Yakubovitch-Popov lemma (Concept only); Stability Analysis of feedback systems, Circle Criterion."
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 3: Frequency domain Analysis of Feedback systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f369ae"
status: "completed"
scrapedAt: "2026-05-23T16:38:30.724Z"
---
# Module 3: Frequency Domain Analysis of Feedback Systems (Nonlinear Control Systems)

This module explores how frequency domain techniques, traditionally used for linear systems, can be extended and adapted to analyze the stability and behavior of nonlinear feedback systems. We will focus on concepts related to feedback stabilization, the fundamental ideas behind the Kalman-Yakubovitch-Popov (KYP) lemma, and stability analysis using the Circle Criterion.

---

## 1. Feedback Stabilisation

**Concept:** Feedback stabilization refers to the process of designing a feedback controller for a nonlinear system such that the closed-loop system is stable, often in the sense of Lyapunov stability. While linear control theory provides well-established frequency-domain tools for stabilization (e.g., Nyquist criterion, root locus), applying these directly to nonlinear systems is challenging due to the lack of superposition. However, understanding the underlying principles of feedback and stability is crucial.

**Key Ideas:**

*   **Feedback:** The core idea of feedback is to use the system's output to influence its input, thereby altering its behavior. In stabilization, the goal is to drive the system's states towards a desired equilibrium point (often the origin) and ensure they remain there despite disturbances.
*   **Stability:** For nonlinear systems, stability is typically analyzed around equilibrium points. Different notions of stability exist (Lyapunov stability, asymptotic stability, exponential stability), and the choice of controller aims to achieve the desired level of stability.
*   **Linearization:** A common approach to analyzing and designing controllers for nonlinear systems is through linearization around an equilibrium point. The linearized system can then be analyzed using linear frequency-domain techniques. However, this approach only guarantees stability of the linearized system, and the stability of the original nonlinear system needs further investigation.
*   **Gain Scheduling:** A practical approach where a linear controller is designed for a specific operating point (linearization). The controller parameters are then adjusted (scheduled) as the system moves to different operating points. This can be viewed as a form of feedback stabilization across the operating range.
*   **Robust Stabilization:** Designing controllers that ensure stability even in the presence of uncertainties in the system model or external disturbances. Frequency domain techniques are particularly useful for robust stabilization in linear systems and provide insights into nonlinear robustness as well.

**Connection to Textbooks:**

*   **Khalil (2002):** Chapter 4 discusses Lyapunov stability theory, which forms the foundation for understanding stabilization. Chapter 8 introduces the concept of feedback linearization, a powerful technique for transforming nonlinear systems into linear ones, often leading to stable closed-loop systems.
*   **Slotine & Li (1991):** Chapter 3 focuses on feedback control of nonlinear systems, including feedback linearization and sliding mode control, both of which are stabilization techniques. They also touch upon the limitations of linearization for stability analysis.

**Course Outcome Alignment:**

*   **CO1 (Analyze qualitative behavior):** Understanding stabilization is inherently linked to controlling the qualitative behavior of a system around its equilibrium.
*   **CO4 (Design feedback controller):** Feedback stabilization is the primary goal of controller design for many nonlinear systems.

---

## 2. Kalman-Yakubovitch-Popov (KYP) Lemma (Concept Only)

**Concept:** The Kalman-Yakubovitch-Popov (KYP) lemma, also known as the Popov-Hautus lemma, establishes a fundamental connection between the input-output behavior (specifically, the transfer function) of a linear time-invariant (LTI) system and the existence of a quadratic Lyapunov function that guarantees stability. In essence, it provides a frequency-domain condition for the stability of an LTI system. While the full lemma deals with LTI systems, its underlying principles are extended to analyze certain classes of nonlinear systems.

**Key Concepts (for nonlinear context):**

*   **System Representation:** The lemma is typically stated for systems in state-space form:
    $\dot{x} = Ax + Bu$
    $y = Cx + Du$
    And its associated transfer function $G(s) = C(sI - A)^{-1}B + D$.

*   **Quadratic Lyapunov Function:** A Lyapunov function of the form $V(x) = x^T P x$, where $P$ is a positive definite matrix. The time derivative of this Lyapunov function along the system trajectories is used to prove stability.

*   **Frequency Domain Conditions:** The KYP lemma relates the stability of the system to properties of its frequency response, specifically the Nyquist plot or the magnitude of the transfer function.

*   **Generalized KYP Lemma (for nonlinear systems):** For nonlinear systems, the KYP lemma's concepts are extended through techniques that involve:
    *   **Sector-bounded nonlinearities:** Nonlinearities that satisfy certain sector conditions, meaning their input-output relationship lies between two lines passing through the origin. Examples include saturation, dead zones, and relays.
    *   **Integral Quadratic Constraints (IQCs):** A generalization of sector bounds, IQCs provide a way to characterize the input-output behavior of nonlinear operators in a frequency-domain-like manner. The KYP lemma can be viewed as a special case of IQC analysis for linear systems.
    *   **Circle Criterion:** A specific application of IQC ideas that is directly related to the KYP lemma's frequency domain perspective for sector-bounded nonlinearities.

**The "Concept Only" Aspect:**

For this module, the focus is on understanding *what* the KYP lemma implies rather than the detailed mathematical proof or its direct application for stability analysis of complex nonlinear systems. The core takeaway is that frequency-domain information (like transfer functions) can be used to infer properties about the existence of Lyapunov functions and thus stability.

**Connection to Textbooks:**

*   **Khalil (2002):** While Khalil's primary focus is on Lyapunov-based methods, he may allude to the connection between frequency domain and stability in the context of feedback linearization or robust control where such concepts are employed.
*   **Slotine & Li (1991):** Chapter 5 discusses robust control and adaptive control, which often build upon concepts related to the KYP lemma and IQCs, especially when dealing with uncertainties or nonlinearities.
*   **Vidyasagar (1991):** Vidyasagar's book is a strong reference for the KYP lemma and its applications in nonlinear systems, particularly through the lens of operator theory and IQCs. He would detail the formal statements and proofs.

**Course Outcome Alignment:**

*   **CO3 (Analyze behavior using frequency domain):** The KYP lemma is a cornerstone of frequency domain analysis, bridging time and frequency domains. Understanding its concept allows for a deeper appreciation of how frequency information is used.

**Important Point to Remember:** The KYP lemma provides a *sufficient* condition for stability for LTI systems. For nonlinear systems, extensions of these ideas (like IQCs) provide sufficient conditions for stability under certain assumptions about the nonlinearity.

---

## 3. Stability Analysis of Feedback Systems

**Concept:** Stability analysis in feedback systems, particularly nonlinear ones, is about determining whether the system's states will converge to a desired equilibrium point or remain bounded in the presence of disturbances. Frequency domain methods, while originating from linear control, offer powerful tools and insights when adapted for nonlinear systems.

**Key Techniques and Concepts:**

*   **Linearization:** As mentioned earlier, linearizing a nonlinear system around an equilibrium point allows the use of linear stability criteria (e.g., Routh-Hurwitz, Nyquist, Bode plots). However, this only guarantees stability of the linearized system, and the stability of the nonlinear system must be verified using nonlinear analysis methods (e.g., Lyapunov).

*   **Describing Functions:** This is a powerful graphical method for analyzing the behavior of systems with single nonlinearities, especially those exhibiting self-oscillations (limit cycles).
    *   **Nonlinearity:** A nonlinearity is replaced by an equivalent linear gain, the "describing function," which depends on the amplitude of the input sinusoid.
    *   **Equivalent Linear System:** The nonlinear system is approximated by an equivalent linear system with the describing function as the gain of the nonlinear element.
    *   **Frequency Response:** The frequency response of the linear part of the system is plotted (e.g., Nyquist plot). The describing function is also plotted as a function of input amplitude.
    *   **Intersection Points:** Stability is assessed by examining the intersection points of these plots. An intersection indicates a potential equilibrium, and the nature of the intersection (slope) can suggest stability or instability of that equilibrium (often related to limit cycles).

*   **Lyapunov-based Methods (Frequency Domain Interpretation):** While primarily time-domain, Lyapunov stability theory has connections to frequency domain. For instance, the existence of a quadratic Lyapunov function implies certain frequency-domain properties. The KYP lemma is a prime example of this bridge.

*   **Integral Quadratic Constraints (IQCs):** As discussed with the KYP lemma, IQCs provide a robust framework for analyzing the stability of systems with nonlinearities that can be characterized by these frequency-domain-like constraints.

**Connection to Textbooks:**

*   **Khalil (2002):** Chapter 4 covers Lyapunov stability in detail. While not strictly frequency domain, it's the foundation for understanding stability which frequency domain methods aim to assess or ensure.
*   **Slotine & Li (1991):** Chapter 5 deals with robust control, which often employs frequency domain tools to handle uncertainties. Chapter 6 discusses advanced topics where nonlinear analysis methods are combined with frequency domain concepts.
*   **Isidori (1985):** Isidori's book delves into geometric methods for nonlinear control, but also discusses input-output stability (related to L2 gain) which has strong frequency domain interpretations.
*   **Vidyasagar (1991):** Vidyasagar extensively covers input-output stability, passivity, and the use of IQCs for stability analysis, all of which have strong frequency domain underpinnings.

**Course Outcome Alignment:**

*   **CO2 (Analyze stability):** This is the core of this section.
*   **CO3 (Analyze behavior using frequency domain):** Describing functions and IQCs are direct applications of frequency domain thinking for nonlinear systems.

**Important Points to Remember:**

*   Linearization provides only local stability information.
*   Describing functions are an approximate method, best suited for systems with single nonlinearities and can predict limit cycles.
*   IQCs and related techniques offer more general sufficient conditions for stability for classes of nonlinear systems.

---

## 4. Circle Criterion

**Concept:** The Circle Criterion is a generalization of the Nyquist stability criterion for feedback systems containing a single sector-bounded nonlinearity. It provides a sufficient condition for the stability of the closed-loop system.

**Key Concepts:**

*   **System Structure:** Consider a feedback system where a linear, time-invariant (LTI) subsystem $G(s)$ is in the forward path and a nonlinearity $\phi(e)$ is in the feedback path. The nonlinearity is assumed to be zero-memory and sector-bounded.
    *   **Sector-Bounded Nonlinearity:** A nonlinearity $\phi(e)$ is said to be in the sector $[k_1, k_2]$ if $k_1 e^2 \le e \phi(e) \le k_2 e^2$ for all $e \in \mathbb{R}$, with $k_1 \le k_2$. Typically, $k_1 \ge 0$.
    *   **Example:** A saturation nonlinearity with saturation level $S$ is in the sector $[0, 1/S]$. A relay nonlinearity is in the sector $[0, \infty)$ (or $[0, k]$ if the relay output is limited).

*   **The Criterion:** The closed-loop system is asymptotically stable if, for a system with transfer function $G(s)$ and a sector-bounded nonlinearity $\phi(e) \in [0, K]$, the following condition holds for all frequencies $\omega \in [0, \infty)$:
    $1 + K G(j\omega) \ne 0$ for all $\omega$ (if $k_1=0, k_2=K$)
    More generally, for a sector $[k_1, k_2]$, the condition relates to the Nyquist plot of $G(j\omega)$ and a circle in the complex plane.

    The condition is that the Nyquist plot of $G(j\omega)$ does not intersect or lie outside a certain circle in the complex plane.

*   **Graphical Interpretation:**
    *   For a nonlinearity in the sector $[0, K]$ (i.e., $0 \le e \phi(e) \le K e^2$): The Nyquist plot of $G(j\omega)$ must lie strictly to the left of the vertical line at Re$(G(j\omega)) = -1/K$. This is similar to the Nyquist criterion for linear systems where the plot must not encircle $-1$. Here, the "boundary" is shifted.
    *   For a nonlinearity in the sector $[k_1, k_2]$ with $k_1 > 0$: The Nyquist plot of $G(j\omega)$ must lie strictly inside a circle in the complex plane. Specifically, let $\text{Re}[G(j\omega)] + \frac{1}{k_2} \text{Im}[G(j\omega)] > 0$ and $\text{Re}[G(j\omega)] + \frac{1}{k_1} \text{Im}[G(j\omega)] < 0$ are not sufficient. The actual criterion is that for any $\lambda \in [k_1, k_2]$, the locus $G(j\omega)$ must not intersect the circle with center $-\frac{1}{2}(\frac{1}{k_1}+\frac{1}{k_2})$ and radius $\frac{1}{2}(\frac{1}{k_2}-\frac{1}{k_1})$.

*   **Relationship to KYP Lemma:** The Circle Criterion can be derived from the KYP lemma by considering specific forms of IQCs for sector-bounded nonlinearities.

**Example:**

Consider a system with transfer function $G(s) = \frac{1}{s+1}$ and a saturation nonlinearity $\phi(e)$ with saturation level $S=1$.
This nonlinearity is in the sector $[0, 1]$.
The Nyquist plot of $G(j\omega) = \frac{1}{j\omega+1}$ is a semicircle in the second and third quadrants, passing through $(0, -1)$ at $\omega \to \infty$ and $(1, 0)$ at $\omega=0$.
The Circle Criterion for sector $[0, 1]$ requires that $1 + 1 \cdot G(j\omega) \ne 0$. This means $G(j\omega) \ne -1$.
The Nyquist plot of $G(j\omega)$ passes through $-1$ at $\omega=1$.
Thus, the Circle Criterion indicates that this system is *not necessarily stable* based on this criterion alone (as it touches the forbidden point). However, for this specific linear system, it is stable. The Circle Criterion is a sufficient condition, meaning if it fails, the system might still be stable. If it passes, the system is guaranteed stable.

A better example would be: $G(s) = \frac{s}{s+1}$.
$G(j\omega) = \frac{j\omega}{j\omega+1}$.
For $\omega=1$, $G(j\omega) = \frac{j}{j+1} = \frac{j(1-j)}{(1+j)(1-j)} = \frac{j+1}{2} = 0.5 + 0.5j$.
Let's assume the nonlinearity is $\phi(e) = 2e$ (sector $[0, 2]$).
The criterion is $1 + 2 G(j\omega) \ne 0$, so $G(j\omega) \ne -1/2$.
The Nyquist plot of $G(j\omega)$ starts at $G(0)=0$, moves to $0.5+0.5j$ at $\omega=1$, and approaches 1 as $\omega \to \infty$. It never reaches $-1/2$. So, the system is stable.

**Connection to Textbooks:**

*   **Khalil (2002):** Khalil may not cover the Circle Criterion directly in detail but discusses nonlinearities and stability which are the basis.
*   **Slotine & Li (1991):** Chapter 5 on robust control often discusses the Circle Criterion and IQCs as methods for handling uncertain or nonlinear systems.
*   **Vidyasagar (1991):** Vidyasagar's book is an excellent source for detailed explanations and derivations of the Circle Criterion and its relationship to IQCs.

**Course Outcome Alignment:**

*   **CO2 (Analyze stability):** The Circle Criterion is a direct tool for stability analysis.
*   **CO3 (Analyze behavior using frequency domain):** It's a direct application of frequency domain analysis to nonlinear systems.

**Important Points to Remember:**

*   The Circle Criterion applies to systems with a *single* sector-bounded nonlinearity.
*   It provides a *sufficient* condition for stability. Failure to meet the criterion does not guarantee instability.
*   The criterion is particularly useful for analyzing systems with hysteresis, saturation, or dead zones.
*   The "generalized" Circle Criterion can handle nonlinearities in sectors $[k_1, k_2]$ by considering a circle, not just a line.

---

## Practice Questions and Exercises

**Question 1 (Feedback Stabilisation):**
Explain the fundamental challenge in applying linear frequency domain techniques directly to nonlinear system stabilization.

**Answer:** The primary challenge is the **lack of the superposition principle** in nonlinear systems. Linear frequency domain methods (like Nyquist, Bode) rely heavily on the ability to analyze the response to sinusoidal inputs and combine them. For nonlinear systems, the output to a sum of inputs is not the sum of outputs to individual inputs, making direct application of these techniques invalid. Linearization is a common workaround, but it provides only local stability guarantees.

---

**Question 2 (KYP Lemma Concept):**
What is the core idea behind the Kalman-Yakubovitch-Popov lemma in connecting time and frequency domains?

**Answer:** The core idea of the KYP lemma is to establish a **direct equivalence between a frequency domain condition (related to the transfer function) and the existence of a quadratic Lyapunov function** for linear time-invariant systems. It shows that if a certain frequency-domain property holds, then there exists a positive definite matrix $P$ such that $x^T P x$ is a Lyapunov function proving the system's stability. This bridges the gap between input-output system descriptions (transfer function) and internal stability proofs (Lyapunov functions).

---

**Question 3 (Stability Analysis - Describing Functions):**
For a system with a nonlinearity $\phi(e)$ and a linear subsystem $G(s)$ in the feedback loop, explain how the describing function method can be used to predict the existence of a limit cycle.

**Answer:** The describing function method approximates the nonlinearity $\phi(e)$ with an equivalent linear gain, the describing function $N(A)$, which is dependent on the amplitude $A$ of the input sinusoid. The nonlinear system is then approximated by an equivalent linear system with $N(A)$ as the gain of the nonlinear element. A limit cycle is predicted to exist if there is an **intersection point between the Nyquist plot of $-G(j\omega)$ and the locus of $-1/N(A)$ as a function of amplitude $A$**. The stability of this potential limit cycle is determined by analyzing the slopes of these plots at the intersection point.

---

**Question 4 (Circle Criterion):**
Consider a feedback system with $G(s) = \frac{1}{s-1}$ and a nonlinearity $\phi(e) = 2e$ (sector $[0, 2]$). Apply the Circle Criterion to determine if the closed-loop system is guaranteed to be stable.

**Answer:**
The nonlinearity is $\phi(e) = 2e$, which is in the sector $[0, 2]$.
The linear subsystem is $G(s) = \frac{1}{s-1}$.
The Circle Criterion for sector $[0, K]$ requires that the Nyquist plot of $G(j\omega)$ lies strictly to the left of the vertical line $\text{Re}(G(j\omega)) = -1/K$.
Here, $K=2$, so the critical line is $\text{Re}(G(j\omega)) = -1/2$.

Let's evaluate $G(j\omega)$:
$G(j\omega) = \frac{1}{j\omega - 1} = \frac{-1 - j\omega}{(-1 - j\omega)(-1 + j\omega)} = \frac{-1 - j\omega}{1 + \omega^2}$
$G(j\omega) = -\frac{1}{1+\omega^2} - j\frac{\omega}{1+\omega^2}$

The real part is $\text{Re}(G(j\omega)) = -\frac{1}{1+\omega^2}$.
We need to check if $\text{Re}(G(j\omega)) < -1/2$ for any $\omega$.
$-\frac{1}{1+\omega^2} < -\frac{1}{2}$
$\frac{1}{1+\omega^2} > \frac{1}{2}$
$2 > 1+\omega^2$
$1 > \omega^2$
This inequality holds for $\omega \in [0, 1)$.

Since the real part of $G(j\omega)$ is less than $-1/2$ for $\omega \in [0, 1)$, the Nyquist plot of $G(j\omega)$ crosses the critical line $\text{Re}(G(j\omega)) = -1/2$ to the right of the line.
Specifically, at $\omega=0$, $G(j0) = -1$. This is less than $-1/2$.
As $\omega \to \infty$, $G(j\omega) \to 0$.
The Nyquist plot of $G(j\omega)$ starts at $-1$ and moves towards $0$.
The condition $\text{Re}(G(j\omega)) < -1/2$ is violated for $\omega \ge 1$.

More formally, the condition is $1 + K G(j\omega) \ne 0$.
$1 + 2 \frac{1}{j\omega-1} \ne 0$
$j\omega - 1 + 2 \ne 0$
$j\omega + 1 \ne 0$
This is true for all $\omega \in \mathbb{R}$.

Let's re-evaluate the condition for sector $[0, K]$. The condition is that the Nyquist locus of $G(j\omega)$ must lie strictly to the left of the vertical line $\text{Re}(G(j\omega)) = -1/K$.
Here, the critical line is $\text{Re}(G(j\omega)) = -1/2$.
We found $\text{Re}(G(j\omega)) = -\frac{1}{1+\omega^2}$.
For $\omega=0$, $\text{Re}(G(j0)) = -1$, which is less than $-1/2$.
For $\omega=1$, $\text{Re}(G(j1)) = -1/2$.
For $\omega=2$, $\text{Re}(G(j2)) = -1/5$, which is greater than $-1/2$.
The Nyquist plot of $G(j\omega)$ passes through the point $(-1, 0)$ at $\omega=0$ and approaches the origin from the second quadrant.

The condition $\text{Re}(G(j\omega)) < -1/2$ is satisfied for $\omega \in [0, \sqrt{1})$.
The condition is violated when $\text{Re}(G(j\omega)) \ge -1/2$. This happens for $\omega \ge 1$.
At $\omega=1$, $\text{Re}(G(j1)) = -1/2$. The criterion requires the locus to be strictly to the *left* of the line. Touching the line means the condition is not strictly met.

**Conclusion:** Since the Nyquist locus of $G(j\omega)$ touches the critical line $\text{Re}(G(j\omega)) = -1/2$ at $\omega=1$ (where $\text{Re}(G(j1)) = -1/2$), the Circle Criterion **does not guarantee** stability. The actual system is unstable because $G(s)$ has an unstable pole at $s=1$. This highlights that the Circle Criterion is a sufficient, not necessary, condition.

---

**Question 5 (CO Alignment):**
Which of the learning outcomes (LOs) is most directly addressed by the Circle Criterion, and why?

**Answer:** The Circle Criterion most directly addresses **LO2: Analyze the stability of nonlinear systems** and **LO3: Analyze the behavior of nonlinear systems using frequency domain analysis**.
It is a tool for stability analysis (LO2) and it operates entirely within the frequency domain (LO3). It provides a graphical method using the Nyquist plot of the linear part and a geometric condition (a line or circle) related to the nonlinearity.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
