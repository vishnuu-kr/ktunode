---
title: "Bilinear Transformation"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 1: Analysis of Sampled Data Systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368cc"
status: "completed"
scrapedAt: "2026-05-23T16:36:05.951Z"
---
# Discrete Time Control Systems: Module 1 - Analysis of Sampled Data Systems

## Topic: Bilinear Transformation

---

### **1. Introduction to Sampled Data Systems and the Need for Transformation**

**Context:** In digital control systems, a continuous-time (analog) plant is controlled by a digital controller. This necessitates sampling the plant's output and converting it into a discrete-time signal for processing by the digital controller. The digital controller then generates a discrete-time control signal, which is usually converted back to an analog signal by a Digital-to-Analog Converter (DAC) before being applied to the plant.

**Key Concepts:**

*   **Sampled Data System:** A control system that operates on signals that are sampled at discrete instants of time.
*   **Digital Controller:** A controller implemented using a digital computer or microprocessor.
*   **Analog-to-Digital Converter (ADC):** Converts a continuous-time signal into a discrete-time signal.
*   **Digital-to-Analog Converter (DAC):** Converts a discrete-time signal into a continuous-time signal.
*   **Zero-Order Hold (ZOH):** A common type of DAC that holds the last sampled value of the discrete-time signal constant until the next sample arrives. This is crucial for understanding the system's behavior in the continuous-time domain after digital control.

**Why Transformations?**

*   **Analysis in the z-domain:** The primary method for analyzing discrete-time systems is using the z-transform. The z-transform converts a discrete-time signal $x(k)$ into a function of $z$, denoted as $X(z)$. This allows for algebraic manipulation and the analysis of system properties like stability, transient response, and steady-state response.
*   **Design in the s-domain:** Often, the plant dynamics are initially described in the continuous-time (s-domain). Designing controllers directly in the z-domain can sometimes be challenging, especially when dealing with existing analog controllers or when aiming for specific performance characteristics that are more intuitively understood in the s-domain.
*   **Bridging the gap:** Transformations are needed to relate the continuous-time system dynamics to their discrete-time equivalent, and vice versa, to enable analysis and design across both domains.

---

### **2. The Bilinear Transformation (or Trapezoidal Rule)**

**Definition:** The bilinear transformation is a mathematical technique used to map the continuous-time domain (s-plane) to the discrete-time domain (z-plane). It is derived from the trapezoidal integration rule applied to the differential equation governing a system.

**Derivation:**

Consider a continuous-time system with a transfer function $G(s)$. We can represent the system by its differential equation. For instance, if $G(s) = Y(s)/U(s)$, where $Y(s)$ is the Laplace transform of the output $y(t)$ and $U(s)$ is the Laplace transform of the input $u(t)$, we have:

$Y(s) = G(s)U(s)$

In the time domain, this corresponds to a differential equation. For integration, the trapezoidal rule approximates the integral:

$\int_{t_0}^{t_1} f(\tau) d\tau \approx \frac{T}{2} [f(t_0) + f(t_1)]$

Applying this to the integral form of a system's dynamics (e.g., integrating the derivative of the state):

Let $y(t) = \int u(\tau) d\tau$.
In discrete time, this becomes $y(kT) \approx \sum_{i=0}^{k-1} u(iT) T$.
Using the trapezoidal rule for one sampling period $T$, where $t_0 = (k-1)T$ and $t_1 = kT$:

$y(kT) - y((k-1)T) \approx \frac{T}{2} [u(kT) + u((k-1)T)]$

Taking the z-transform of this difference equation:

$zY(z) - Y(z) \approx \frac{T}{2} [U(z) + z^{-1}U(z)]$
$Y(z)(z-1) \approx \frac{T}{2} U(z)(1 + z^{-1})$
$\frac{Y(z)}{U(z)} = \frac{T}{2} \frac{1+z^{-1}}{z-1}$

This discrete-time representation of an integrator using the trapezoidal rule is fundamental. To obtain the bilinear transformation itself, we relate the derivative operator $\frac{d}{dt}$ to the z-transform.

The derivative $\frac{dy(t)}{dt}$ can be approximated in discrete time. A simple approximation is the forward difference: $\frac{y(kT) - y((k-1)T)}{T}$.
The z-transform of this is $\frac{Y(z) - z^{-1}Y(z)}{T} = \frac{Y(z)(1-z^{-1})}{T}$.
Equating this to $sY(s)$, we get $s \approx \frac{1-z^{-1}}{T} = \frac{z-1}{Tz}$. This is a backward difference approximation.

The trapezoidal rule approximation for an integrator $\frac{1}{s}$ is $\frac{T}{2} \frac{1+z^{-1}}{z-1}$.
Therefore, the mapping from $s$ to $z$ is obtained by equating $\frac{1}{s}$ to this discrete-time integrator:

$s \leftrightarrow \frac{2}{T} \frac{z-1}{z+1}$

This is the **bilinear transformation**.

**The Transformation Rule:**

The core of the bilinear transformation is the substitution of $s$ in the continuous-time transfer function $G(s)$ with the expression:

$s = \frac{2}{T} \frac{z-1}{z+1}$

where:
*   $T$ is the sampling period.
*   $z$ is the complex variable in the z-domain.

**Alternatively, to transform from the z-domain back to the s-domain:**

$z = \frac{1 + \frac{T}{2}s}{1 - \frac{T}{2}s} = \frac{2+Ts}{2-Ts}$

---

### **3. Properties and Advantages of the Bilinear Transformation**

**Key Properties:**

*   **Mapping of the jω-axis:** The bilinear transformation maps the entire imaginary axis (jω-axis) of the s-plane onto the unit circle ($|z|=1$) of the z-plane.
    *   This means that a system stable in the s-plane (all poles in the left-half plane) can potentially be stable in the z-plane.
*   **Mapping of the LHP to the interior of the unit circle:** The left-half of the s-plane (LHP), where stable continuous-time systems reside, is mapped to the interior of the unit circle ($|z|<1$) in the z-plane.
    *   This is a crucial property for stability analysis: if a discrete-time system obtained via bilinear transformation is stable, the corresponding continuous-time system should also be stable.
*   **Mapping of the RHP to the exterior of the unit circle:** The right-half of the s-plane (RHP) is mapped to the exterior of the unit circle ($|z|>1$).
*   **Mapping of poles and zeros:** Poles and zeros in the s-plane are mapped to specific locations in the z-plane. The mapping is not one-to-one; for example, the entire jω-axis maps to the unit circle.
*   **Warping Effect:** A significant characteristic is the non-linear relationship between the frequency in the s-plane ($\omega$) and the frequency in the z-plane ($\theta = \omega T$). This is known as **frequency warping**.

**Frequency Warping Explained:**

Let $s = j\omega$ and $z = e^{j\theta}$. Substituting into the transformation:

$j\omega = \frac{2}{T} \frac{e^{j\theta}-1}{e^{j\theta}+1}$

We can simplify the term $\frac{e^{j\theta}-1}{e^{j\theta}+1}$:
$\frac{e^{j\theta}-1}{e^{j\theta}+1} = \frac{e^{j\theta/2}(e^{j\theta/2}-e^{-j\theta/2})}{e^{j\theta/2}(e^{j\theta/2}+e^{-j\theta/2})} = \frac{2j\sin(\theta/2)}{2\cos(\theta/2)} = j\tan(\theta/2)$

So, $j\omega = \frac{2}{T} j\tan(\theta/2)$
$\omega = \frac{2}{T} \tan(\theta/2)$

This equation shows that the continuous-time frequency $\omega$ is related to the discrete-time frequency variable $\theta$ by the tangent function.

*   For small $\omega$ (low frequencies), $\tan(\theta/2) \approx \theta/2$, so $\omega \approx \frac{2}{T} (\theta/2) = \frac{\theta}{T}$. This means $\theta \approx \omega T$, which is the expected relationship for small frequencies.
*   As $\omega$ increases, the tangent function grows faster. This means that higher frequencies in the s-plane are compressed into the range $[-\pi, \pi]$ of $\theta$ (or $[0, 2\pi]$). The frequency response of the discrete-time system will appear "warped" compared to the continuous-time system.

**Advantages of Bilinear Transformation:**

*   **Preserves Stability:** The mapping of the LHP to the interior of the unit circle is very convenient for stability analysis and design. If we design a controller in the s-domain to be stable, its bilinear transformation to the z-domain will also result in a stable discrete-time controller.
*   **Simplicity of Design:** It allows designing controllers in the s-domain using well-established continuous-time design techniques (e.g., root locus, Bode plots, Nyquist criterion) and then transforming the controller to the z-domain.
*   **No Aliasing:** Unlike the impulse invariance method, the bilinear transformation inherently avoids aliasing because it does not directly sample the continuous-time frequency response.

**Disadvantages of Bilinear Transformation:**

*   **Frequency Warping:** The non-linear frequency mapping can be a significant drawback if the system's performance is highly dependent on preserving the frequency response characteristics accurately across the entire frequency spectrum. The bandwidth of the digital system might not directly correspond to the bandwidth of the continuous-time system.
*   **Discretization of Time Delays:** Time delays in the s-domain (e.g., $e^{-sT_d}$) are mapped to rational functions of $z$ which are not strictly realizable as simple delays in the z-domain without approximation.

---

### **4. Application of Bilinear Transformation in Digital Control Design**

The bilinear transformation is a popular method for converting a continuous-time controller $C(s)$ into a discrete-time controller $C(z)$.

**Steps:**

1.  **Design the Continuous-Time Controller $C(s)$:** Based on the continuous-time plant dynamics and desired performance specifications, design a controller in the s-domain using standard techniques.
2.  **Apply the Bilinear Transformation:** Substitute $s = \frac{2}{T} \frac{z-1}{z+1}$ into the continuous-time controller transfer function $C(s)$ to obtain the discrete-time controller transfer function $C(z)$.
3.  **Implement the Discrete-Time Controller:** The resulting $C(z)$ can be implemented on a digital processor.

**Example (From Ogata, Chapter 4):**

Suppose we want to design a digital PID controller. A continuous-time PID controller has the transfer function:

$C(s) = K_p + \frac{K_I}{s} + K_D s$

We want to convert this into a digital controller $C(z)$ using the bilinear transformation with a sampling period $T$.

Replace $s$ with $\frac{2}{T} \frac{z-1}{z+1}$:

$C(z) = K_p + K_I \left( \frac{T}{2} \frac{z+1}{z-1} \right) + K_D \left( \frac{2}{T} \frac{z-1}{z+1} \right)$

To get a rational transfer function in $z$:

$C(z) = K_p + \frac{K_I T}{2} \frac{z+1}{z-1} + \frac{2 K_D}{T} \frac{z-1}{z+1}$

Combine the terms over a common denominator $(z-1)(z+1)$:

$C(z) = \frac{K_p(z-1)(z+1) + \frac{K_I T}{2}(z+1)^2 + \frac{2 K_D}{T}(z-1)^2}{(z-1)(z+1)}$

$C(z) = \frac{K_p(z^2-1) + \frac{K_I T}{2}(z^2+2z+1) + \frac{2 K_D}{T}(z^2-2z+1)}{z^2-1}$

$C(z) = \frac{(K_p + \frac{K_I T}{2} + \frac{2 K_D}{T})z^2 + (K_I T - \frac{4 K_D}{T})z + (\frac{K_I T}{2} - \frac{2 K_D}{T})}{z^2-1}$

This is the digital PID controller in transfer function form, ready for implementation.

---

### **5. Bilinear Transformation and Stability Analysis**

The bilinear transformation is particularly useful for analyzing the stability of a closed-loop discrete-time system when the controller is designed in the s-domain.

**Process:**

1.  **Obtain the continuous-time plant transfer function $G(s)$.**
2.  **Design a continuous-time controller $C(s)$ to achieve desired stability and performance for the closed-loop system with $G(s)$.**
3.  **Transform the plant $G(s)$ into its discrete-time equivalent $G(z)$ using an appropriate method (e.g., ZOH for the plant).**
4.  **Transform the controller $C(s)$ into $C(z)$ using the bilinear transformation:** $s = \frac{2}{T} \frac{z-1}{z+1}$.
5.  **Form the closed-loop transfer function in the z-domain:** $T(z) = \frac{C(z)G(z)}{1+C(z)G(z)}$.
6.  **Analyze the stability of $T(z)$ by examining the locations of its poles (roots of the characteristic equation $1+C(z)G(z)=0$).** For stability, all poles must lie inside the unit circle.

**Important Note:** When using the bilinear transformation for controller design, the controller itself is transformed. The plant is typically discretized using other methods like ZOH. However, if we want to analyze the stability of the *entire* system after transforming both plant and controller using bilinear transformation (though less common for the plant itself), we would substitute $s = \frac{2}{T} \frac{z-1}{z+1}$ into $G(s)$ to get $G_{bilinear}(z)$.

**Example of Stability Analysis (Hypothetical):**

Consider a discrete-time system with characteristic equation $1+C(z)G(z) = 0$.
Let $C(z)G(z) = \frac{z+0.5}{z-0.8}$.
The characteristic equation is $1 + \frac{z+0.5}{z-0.8} = 0$.
$\frac{z-0.8 + z+0.5}{z-0.8} = 0$
$2z + 0.2 = 0$
$z = -0.1$

Since the pole $z = -0.1$ is inside the unit circle ($|-0.1| < 1$), the system is stable.

**Connecting to Textbook Material:**

*   **Ogata:** Chapter 4 discusses the bilinear transformation and its application in converting continuous-time controller designs into discrete-time controllers, particularly focusing on the PID controller example. He also explains the stability mapping from the s-plane to the z-plane.
*   **Philips & Nagle:** Often discuss the mapping properties and the frequency warping issue. They might present an alternative method for converting controller parameters.
*   **Gopal:** Likely covers the mathematical basis and the transformation of polynomial systems.

---

### **6. Practice Questions and Exercises**

**Question 1:**

A continuous-time controller has the transfer function $C(s) = \frac{s+2}{s+5}$. Using the bilinear transformation with a sampling period $T = 0.1$ seconds, find the equivalent discrete-time controller $C(z)$.

**Answer 1:**

We use the substitution $s = \frac{2}{T} \frac{z-1}{z+1}$.
Given $T = 0.1$, so $\frac{2}{T} = \frac{2}{0.1} = 20$.
$s = 20 \frac{z-1}{z+1}$

Substitute this into $C(s)$:
$C(z) = \frac{20 \frac{z-1}{z+1} + 2}{20 \frac{z-1}{z+1} + 5}$

To simplify, multiply the numerator and denominator by $(z+1)$:
$C(z) = \frac{20(z-1) + 2(z+1)}{20(z-1) + 5(z+1)}$
$C(z) = \frac{20z - 20 + 2z + 2}{20z - 20 + 5z + 5}$
$C(z) = \frac{22z - 18}{25z - 15}$

Therefore, $C(z) = \frac{22z - 18}{25z - 15} = \frac{11z - 9}{12.5z - 7.5}$.

---

**Question 2:**

Explain the concept of "frequency warping" introduced by the bilinear transformation. What are its implications for digital control system design?

**Answer 2:**

**Frequency Warping:** The bilinear transformation introduces a non-linear relationship between the frequency ($\omega$) in the continuous-time domain and the discrete-time frequency variable ($\theta$, related to the angle on the unit circle). The relationship is given by $\omega = \frac{2}{T} \tan(\theta/2)$.

**Implications:**

*   **Bandwidth Distortion:** High frequencies in the s-plane are compressed into a smaller range of $\theta$ values in the z-plane. This means that the frequency response of the discrete-time system may not accurately represent the frequency response of the original continuous-time system, especially at higher frequencies. The effective bandwidth of the digital system can be different from the analog system.
*   **Controller Design Consideration:** When designing a controller in the s-domain for a specific frequency response (e.g., a cutoff frequency), the bilinear transformation will shift this cutoff frequency in the discrete-time domain due to warping. Designers must account for this by pre-warping the desired frequency specifications in the s-domain before applying the transformation. For example, if a desired cutoff frequency is $\omega_c$, the actual frequency in the s-plane for design should be $\omega_{design} = \frac{2}{T} \arctan(\frac{\omega_c T}{2})$.
*   **Stability Analysis Benefit:** Despite the warping, the mapping of the LHP to the inside of the unit circle remains accurate, making stability analysis straightforward.

---

**Question 3:**

A second-order low-pass filter in the s-domain is given by $G(s) = \frac{100}{s^2 + 10s + 100}$. Using the bilinear transformation with $T=0.05$s, find the discrete-time transfer function $G(z)$.

**Answer 3:**

We use the substitution $s = \frac{2}{T} \frac{z-1}{z+1}$.
Given $T = 0.05$, so $\frac{2}{T} = \frac{2}{0.05} = 40$.
$s = 40 \frac{z-1}{z+1}$

Substitute into $G(s)$:
$G(z) = \frac{100}{\left(40 \frac{z-1}{z+1}\right)^2 + 10\left(40 \frac{z-1}{z+1}\right) + 100}$

Multiply numerator and denominator by $(z+1)^2$:
$G(z) = \frac{100(z+1)^2}{\left(40(z-1)\right)^2 + 10 \cdot 40(z-1)(z+1) + 100(z+1)^2}$
$G(z) = \frac{100(z^2 + 2z + 1)}{1600(z^2 - 2z + 1) + 400(z^2 - 1) + 100(z^2 + 2z + 1)}$

Expand and collect terms:
Numerator: $100z^2 + 200z + 100$

Denominator:
$1600z^2 - 3200z + 1600$
$+ 400z^2 - 400$
$+ 100z^2 + 200z + 100$
----------------------------
$2100z^2 - 3000z + 1300$

So, $G(z) = \frac{100z^2 + 200z + 100}{2100z^2 - 3000z + 1300}$

Divide numerator and denominator by 100:
$G(z) = \frac{z^2 + 2z + 1}{21z^2 - 30z + 13}$

---

### **7. Important Points to Remember**

*   **Bilinear Transformation Formula:** $s = \frac{2}{T} \frac{z-1}{z+1}$
*   **Purpose:** To convert continuous-time controllers/systems to discrete-time, enabling digital implementation and analysis.
*   **Stability Mapping:** LHP in s-plane maps to the interior of the unit circle in z-plane. This is its most significant advantage.
*   **Frequency Warping:** The mapping $\omega = \frac{2}{T} \tan(\theta/2)$ distorts frequency response at higher frequencies.
*   **Design Strategy:** Design controller in s-domain, then transform to z-domain using the bilinear substitution.
*   **Pre-warping:** If precise frequency response matching is critical, use pre-warping for specifications before transformation.
*   **Contrast with Impulse Invariance:** Bilinear transformation is generally preferred over impulse invariance for controller design as it inherently avoids aliasing and preserves stability properties more directly. However, impulse invariance might be better for preserving the frequency response of the *plant itself* at low frequencies.

---

### **8. Alignment with Course Outcomes**

*   **CO1: Model and analyse discrete-time system using pulse transfer function approach.**
    *   The bilinear transformation is a direct tool for obtaining the pulse transfer function of a digitally controlled system, particularly when starting with an analog controller. Analyzing the stability and performance of this resulting pulse transfer function is a core aspect of CO1.
*   **CO2: Design digital compensators for linear systems.**
    *   The primary application of the bilinear transformation discussed is in converting a continuous-time controller (compensator) design into its discrete-time equivalent. This directly addresses the design aspect of CO2.
*   **CO3: Model and analyse discrete-time system using state space approach.**
    *   While this topic primarily focuses on transfer function methods, understanding how continuous-time system dynamics are represented in discrete time (even if via a simplified transform like bilinear) provides foundational knowledge for state-space transformations as well. The mapping properties are relevant.
*   **CO4: Design discrete-time state feedback controllers and observers for a linear system.**
    *   Similar to CO3, the bilinear transformation's emphasis on bridging continuous and discrete domains indirectly supports CO4 by illustrating how continuous-time control concepts are adapted for digital implementation. The stability preservation aspect is paramount in both areas.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **9. References**

*   **Digital control system analysis and design by Philips and Nagle:** Provides a good foundation on transformations and their properties.
*   **Discrete Time Control Systems by K. Ogata:** Essential for understanding the practical application and derivation of the bilinear transformation, especially for PID controllers.
*   **Digital control and State Variable methods by M. Gopal:** Offers mathematical rigor for transformations and system analysis.
*   **Digital Control Systems by B C Kuo:** Offers comprehensive coverage and comparative analysis of different discretization methods.
*   **Digital Control of Dynamic Systems by G.F.Franklin, J. David Powell and M. Workman:** Provides deep insights into the practical aspects and limitations, including frequency warping.