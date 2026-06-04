---
title: "Continuous time and discrete time signals - Elementary signals"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to signals and systems:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe511"
status: "completed"
scrapedAt: "2026-05-23T17:52:17.702Z"
---
# Signals and Systems: Module 1 - Introduction to Signals and Systems

## Topic: Continuous-Time and Discrete-Time Signals - Elementary Signals

---

### **1. Introduction to Signals and Systems (Module Overview)**

*   **What are Signals?**
    *   A signal is a function that conveys information about the behavior or attributes of some phenomenon.
    *   It's a physical quantity that varies with time, space, or some other independent variable.
    *   Examples: Audio signals, images, temperature readings, voltage in a circuit, stock prices.

*   **What are Systems?**
    *   A system is anything that operates on a signal (the input signal) to produce another signal (the output signal).
    *   It modifies, processes, or transforms the input signal.
    *   Examples: Amplifier, filter, modulator, computer algorithm, human ear.

*   **Importance of Signals and Systems:**
    *   Fundamental to many engineering disciplines (Electrical, Mechanical, Biomedical, Communications, Control Systems, Computer Engineering).
    *   Understanding signals and systems allows us to analyze, design, and optimize various real-world applications.

---

### **2. Continuous-Time (CT) vs. Discrete-Time (DT) Signals**

**(Relates to CO1: Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals.)**

#### **2.1 Continuous-Time Signals**

*   **Definition:** A signal whose independent variable is continuous. The independent variable is typically denoted by '$t$' and represents time.
*   **Representation:** $x(t)$
*   **Domain:** The independent variable '$t$' can take any real value over a specified interval.
*   **Examples:**
    *   Audio signals (sound waves)
    *   Voltage or current in an electronic circuit
    *   Temperature readings over a period
    *   Speech waveforms

*   **Visual Representation:** Typically depicted as a smooth curve on a graph where the horizontal axis is time.

*   **From Textbooks:**
    *   **Oppenheim & Willsky:** Defines a continuous-time signal as a function of one or more independent variables, where the independent variables are continuous. For signals encountered in this book, the independent variable is typically time, denoted by $t$.
    *   **Haykin:** Describes continuous-time signals as functions of a real variable, commonly representing time.

#### **2.2 Discrete-Time Signals**

*   **Definition:** A signal whose independent variable is discrete. The independent variable is typically denoted by '$n$' and represents an integer index, often representing sampled time.
*   **Representation:** $x[n]$ (square brackets are conventionally used for discrete-time signals)
*   **Domain:** The independent variable '$n$' can only take on integer values (e.g., ..., -2, -1, 0, 1, 2, ...).
*   **Origin:** Discrete-time signals are often obtained by sampling a continuous-time signal at regular intervals.
*   **Examples:**
    *   Digital audio samples
    *   Digital images (pixels arranged in a grid)
    *   Stock prices recorded daily or hourly
    *   Output of a digital sensor

*   **Visual Representation:** Typically depicted as a sequence of points or vertical bars on a graph where the horizontal axis is the index '$n$'.

*   **From Textbooks:**
    *   **Oppenheim & Willsky:** A discrete-time signal is a function of an independent variable that is restricted to discrete values. Typically, the independent variable is an integer, denoted by $n$.
    *   **Haykin:** Discrete-time signals are functions of an integer variable, often representing sampled values of a continuous-time signal.

#### **2.3 Relationship between CT and DT Signals**

*   **Sampling:** The process of converting a continuous-time signal into a discrete-time signal by taking its values at regular intervals.
    *   If $x(t)$ is a continuous-time signal, its sampled version is $x_s(t) = x(nT)$, where $T$ is the sampling period and $n$ is an integer.
    *   The discrete-time signal $x[n]$ is then obtained by $x[n] = x(nT)$.

*   **Reconstruction:** The process of converting a discrete-time signal back into a continuous-time signal. This is often done using interpolation.

#### **2.4 Key Differences**

| Feature         | Continuous-Time Signal       | Discrete-Time Signal          |
| :-------------- | :--------------------------- | :---------------------------- |
| Independent Var | Continuous (e.g., $t$)       | Discrete (integer index, e.g., $n$) |
| Representation  | $x(t)$                       | $x[n]$                        |
| Domain          | Real numbers                 | Integers                      |
| Origin          | Natural phenomena, analog circuits | Sampling, digital processing |
| Continuity      | Continuous in time           | Sampled at specific points    |

---

### **3. Elementary Signals**

**(Relates to CO1: Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals.)**

These are basic building blocks used to construct more complex signals. We will look at both CT and DT versions.

#### **3.1 Unit Step Signal**

*   **Definition:** A signal that is zero for negative time and one for non-negative time.

    *   **Continuous-Time (Unit Step Function, $u(t)$):**
        $$
        u(t) = \begin{cases} 1, & t \ge 0 \\ 0, & t < 0 \end{cases}
        $$
        *   **Note:** The value at $t=0$ can be defined differently (e.g., 0.5 or undefined) depending on the convention or context, but $u(t) = 1$ for $t \ge 0$ is a common definition.
        *   **Graphical Representation:** A jump from 0 to 1 at $t=0$.

    *   **Discrete-Time (Unit Step Sequence, $u[n]$):**
        $$
        u[n] = \begin{cases} 1, & n \ge 0 \\ 0, & n < 0 \end{cases}
        $$
        *   **Graphical Representation:** A sequence of 1s starting from $n=0$ and going to the right, and 0s for $n < 0$.

*   **Relationship:** A discrete-time unit step $u[n]$ can be seen as the sampled version of a continuous-time unit step $u(t)$ when sampled at integer times ($n \rightarrow t$).

*   **Operations using Unit Step:**
    *   **Unit Ramp Signal:** $r(t) = t \cdot u(t)$ (CT) or $r[n] = n \cdot u[n]$ (DT). This is a signal that ramps linearly from 0 starting at $t=0$ or $n=0$.
    *   **Shifting:** $u(t-a)$ is a step that starts at $t=a$.
    *   **Multiplication:** $x(t) \cdot u(t)$ isolates the part of $x(t)$ for $t \ge 0$.

#### **3.2 Unit Ramp Signal**

*   **Definition:** A signal that increases linearly with time, starting from zero at $t=0$ (or $n=0$).

    *   **Continuous-Time (Unit Ramp Function, $r(t)$ or $R(t)$):**
        $$
        r(t) = \begin{cases} t, & t \ge 0 \\ 0, & t < 0 \end{cases} = t \cdot u(t)
        $$
        *   **Graphical Representation:** A straight line with a slope of 1 starting at the origin and extending into the positive time axis.

    *   **Discrete-Time (Unit Ramp Sequence, $r[n]$):**
        $$
        r[n] = \begin{cases} n, & n \ge 0 \\ 0, & n < 0 \end{cases} = n \cdot u[n]
        $$
        *   **Graphical Representation:** A sequence where the value at each index $n$ is equal to $n$, for $n \ge 0$. (0, 1, 2, 3, ...)

*   **Relationship:** The unit ramp is the integral of the unit step function.
    *   $\int_{-\infty}^{t} u(\tau) d\tau = r(t)$ (CT)
    *   $\sum_{k=-\infty}^{n} u[k] = r[n]$ (DT)

#### **3.3 Unit Impulse Signal (Dirac Delta Function for CT, Unit Impulse Sequence for DT)**

*   **Definition:** A signal that is zero everywhere except at time zero, where it has an infinite amplitude, but its integral (or sum) over all time is unity. It represents a sudden, brief event.

    *   **Continuous-Time (Unit Impulse, $\delta(t)$ - Dirac Delta Function):**
        $$
        \delta(t) = \begin{cases} \infty, & t = 0 \\ 0, & t \ne 0 \end{cases}
        $$
        and the sifting property:
        $$
        \int_{-\infty}^{\infty} x(t) \delta(t-a) dt = x(a)
        $$
        (where $a$ is a real number)

        *   **Approximation:** Often visualized as a pulse of very narrow width $\Delta t$ and height $1/\Delta t$. As $\Delta t \to 0$, the pulse becomes an impulse.
        *   **Graphical Representation:** A spike at $t=0$.

    *   **Discrete-Time (Unit Impulse Sequence, $\delta[n]$):**
        $$
        \delta[n] = \begin{cases} 1, & n = 0 \\ 0, & n \ne 0 \end{cases}
        $$
        and the sifting property:
        $$
        \sum_{n=-\infty}^{\infty} x[n] \delta[n-a] = x[a]
        $$
        (where $a$ is an integer)

        *   **Graphical Representation:** A single point with value 1 at $n=0$, and 0 elsewhere.

*   **Key Properties:**
    *   **Sifting Property:** This is the most important property. It allows us to extract the value of a signal at a specific point in time/index.
        *   $x(t) \delta(t) = x(0) \delta(t)$ (CT)
        *   $x[n] \delta[n] = x[0] \delta[n]$ (DT)
    *   **Scaling:** $\delta(at) = \frac{1}{|a|} \delta(t)$ (CT)
    *   **Shifting:** $\delta(t-a)$ is an impulse at time $t=a$.
    *   **Relationship to Unit Step:**
        *   $\frac{du(t)}{dt} = \delta(t)$ (CT)
        *   $u[n] - u[n-1] = \delta[n]$ (DT)

*   **From Textbooks:**
    *   **Oppenheim & Willsky:** Emphasize the sifting property as the defining characteristic of the impulse. They also discuss approximations of the impulse using functions like the rectangular pulse.
    *   **Haykin:** Presents the unit impulse as a fundamental signal in discrete-time systems, highlighting its role in characterizing system responses. The Dirac delta function is introduced as its continuous-time counterpart.
    *   **Lathi:** Discusses the impulse as the derivative of the step function and the response of a system to an impulse (the impulse response) is crucial for system analysis.

#### **3.4 Unit Exponential Signal**

*   **Definition:** A signal whose amplitude grows or decays exponentially with time.

    *   **Continuous-Time (Unit Exponential, $e^{at}$):**
        *   Where '$a$' is a constant.
        *   If $a > 0$: Growing exponential.
        *   If $a < 0$: Decaying exponential.
        *   If $a = j\omega$ (where $j$ is the imaginary unit and $\omega$ is a real constant): Complex exponential $e^{j\omega t}$. This leads to sinusoidal signals via Euler's formula: $e^{j\omega t} = \cos(\omega t) + j \sin(\omega t)$.
        *   If $a = \sigma + j\omega$: Complex exponential $e^{(\sigma+j\omega)t} = e^{\sigma t} e^{j\omega t} = e^{\sigma t}(\cos(\omega t) + j \sin(\omega t))$. This represents a sinusoid whose amplitude grows or decays exponentially.

    *   **Discrete-Time (Unit Exponential, $a^n$):**
        *   Where '$a$' is a constant.
        *   If $|a| > 1$: Growing exponential.
        *   If $|a| < 1$: Decaying exponential.
        *   If $a = re^{j\theta}$: Complex exponential $a^n = (re^{j\theta})^n = r^n e^{j\theta n} = r^n(\cos(\theta n) + j \sin(\theta n))$. This represents a sinusoid whose amplitude ($r^n$) grows or decays exponentially with the index $n$.

*   **Example:**
    *   CT: $e^{-2t}$ for $t \ge 0$ is a decaying exponential. $e^{0.5t}$ for $t \ge 0$ is a growing exponential.
    *   DT: $(0.5)^n$ for $n \ge 0$ is a decaying exponential sequence. $2^n$ for $n \ge 0$ is a growing exponential sequence.

*   **From Textbooks:**
    *   **Oppenheim & Willsky:** Discusses exponential and sinusoidal signals as fundamental signals and their role in representing natural modes of LTI systems.
    *   **Haykin:** Introduces complex exponentials $a^n$ and $e^{j\omega t}$ as crucial for analyzing discrete-time and continuous-time systems, respectively, especially in the context of Fourier analysis.

#### **3.5 Sinusoidal Signals**

*   **Definition:** Signals that vary sinusoidally (like sine or cosine waves).

    *   **Continuous-Time (Sinusoidal Function):**
        *   **General Form:** $A \cos(\omega_0 t + \phi)$ or $A \sin(\omega_0 t + \phi)$
            *   $A$: Amplitude
            *   $\omega_0$: Angular frequency (radians per second)
            *   $t$: time
            *   $\phi$: Phase (radians)
        *   **Frequency:** $f_0 = \omega_0 / (2\pi)$ (Hertz, cycles per second)
        *   **Period:** $T_0 = 1/f_0 = 2\pi/\omega_0$ (seconds)
        *   **Properties:** Periodic, oscillatory.
        *   **From Complex Exponential:** $A \cos(\omega_0 t + \phi) = \text{Re}\{A e^{j(\omega_0 t + \phi)}\}$

    *   **Discrete-Time (Sinusoidal Sequence):**
        *   **General Form:** $A \cos(\Omega_0 n + \phi)$ or $A \sin(\Omega_0 n + \phi)$
            *   $A$: Amplitude
            *   $\Omega_0$: Digital angular frequency (radians per sample)
            *   $n$: discrete time index
            *   $\phi$: Phase (radians)
        *   **Note on Periodicity:** Discrete-time sinusoids are periodic only if $\Omega_0/(2\pi)$ is a rational number. The period $N$ is the smallest integer such that $\Omega_0 N = 2\pi k$ for some integer $k$.
        *   **From Complex Exponential:** $A \cos(\Omega_0 n + \phi) = \text{Re}\{A e^{j(\Omega_0 n + \phi)}\}$

*   **From Textbooks:**
    *   **Oppenheim & Willsky:** Discusses the representation of sinusoids using complex exponentials and their importance in signal decomposition (e.g., Fourier Series).
    *   **Haykin:** Emphasizes the sinusoidal signal as a fundamental component in signal analysis and system characterization, particularly concerning frequency response.

#### **3.6 Other Elementary Signals (Often derived or used in combination)**

*   **Rectangular Pulse (or Gate Function):**
    *   CT: $\text{rect}(t/\tau) = u(t/\tau) - u(t/\tau - 1)$ (a pulse of height 1 from $t=0$ to $t=\tau$) or more generally, a pulse of duration $T$ starting at $t_0$: $u(t-t_0) - u(t-t_0-T)$.
    *   DT: A sequence with value 1 for a finite range of $n$ and 0 otherwise.

*   **Triangular Pulse:**
    *   CT: A triangular shape.
    *   DT: A sequence forming a triangle.

*   **Sinc Function (Continuous-Time):**
    *   $\text{sinc}(t) = \frac{\sin(\pi t)}{\pi t}$ (This is the normalized sinc function).
    *   Often arises in the context of sampling and filtering.

---

### **4. Basic Operations on Signals**

**(Relates to CO1: Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals.)**

These operations can be applied to both CT and DT signals.

#### **4.1 Amplitude Scaling**

*   Multiplying a signal by a constant.
    *   CT: $y(t) = a \cdot x(t)$
    *   DT: $y[n] = a \cdot x[n]$
*   **Effect:** Changes the vertical scale of the signal's graph.

#### **4.2 Time Shifting**

*   Shifting a signal along the time axis.
    *   CT: $y(t) = x(t - t_0)$
        *   $t_0 > 0$: Shift to the right (delay).
        *   $t_0 < 0$: Shift to the left (advance).
    *   DT: $y[n] = x[n - n_0]$
        *   $n_0 > 0$: Shift to the right (delay).
        *   $n_0 < 0$: Shift to the left (advance).

*   **Example:** If $x(t) = u(t)$, then $x(t-2) = u(t-2)$ is a unit step that starts at $t=2$. If $x[n] = \delta[n]$, then $x[n+1] = \delta[n+1]$ is an impulse at $n=-1$.

#### **4.3 Time Scaling**

*   Compressing or expanding a signal along the time axis.
    *   CT: $y(t) = x(at)$
        *   $a > 1$: Time compression (signal appears faster).
        *   $0 < a < 1$: Time expansion (signal appears slower).
        *   $a < 0$: Time reversal and scaling. $x(-t)$ is a reflection about the $t=0$ axis. $x(-at) = x(-(at))$ is reversal followed by scaling.
    *   DT: $y[n] = x(an)$
        *   **Caution:** For DT signals, time scaling by a non-integer factor 'a' is not straightforward. It usually implies interpolation. If 'a' is an integer greater than 1, it's like skipping samples. If 'a' is a fraction less than 1, it's like inserting samples. If 'a' is negative, it's reversal.

*   **Example:** If $x(t) = \cos(2\pi t)$, then $x(2t) = \cos(4\pi t)$ has twice the frequency (compressed in time). $x(t/2) = \cos(\pi t)$ has half the frequency (expanded in time).

#### **4.4 Time Reversal (Folding)**

*   Flipping a signal about the time axis.
    *   CT: $y(t) = x(-t)$
    *   DT: $y[n] = x[-n]$

*   **Example:** If $x(t)$ is a pulse for $0 \le t \le 1$, then $x(-t)$ is a pulse for $-1 \le t \le 0$.

#### **4.5 Amplitude Reversal**

*   Multiplying a signal by -1.
    *   CT: $y(t) = -x(t)$
    *   DT: $y[n] = -x[n]$

#### **4.6 Addition and Subtraction**

*   Combining signals point-wise.
    *   CT: $y(t) = x_1(t) \pm x_2(t)$
    *   DT: $y[n] = x_1[n] \pm x_2[n]$

#### **4.7 Multiplication**

*   Multiplying signals point-wise.
    *   CT: $y(t) = x_1(t) \cdot x_2(t)$
    *   DT: $y[n] = x_1[n] \cdot x_2[n]$
*   **Effect:** Can be used for modulation or to isolate parts of a signal (e.g., multiplying by a rectangular pulse).

#### **Important Note on DT Time Scaling:**
For discrete-time signals, time scaling $x(an)$ is usually interpreted as:
*   If $a$ is an integer $> 1$: $x[an]$ means keeping samples at $n=0, a, 2a, ...$ and discarding intermediate samples. This is a downsampling or decimation by factor $a$.
*   If $a$ is a fraction $1/L$ (where $L$ is an integer $> 1$): $x[n/L]$ means inserting $L-1$ zeros between samples. This is an upsampling or interpolation by factor $L$.

---

### **5. Practice Questions and Exercises**

**Question 1 (CO1):**
For the continuous-time signal $x(t)$ shown below, sketch the following signals:
a) $x(t-2)$
b) $x(-t)$
c) $x(2t)$
d) $x(t/2)$
e) $x(t) u(t-1)$

**(Assume $x(t)$ is a simple rectangular pulse from $t=0$ to $t=3$ with height 1.)**

**Answer 1:**
*   **a) $x(t-2)$:** The pulse shifts to the right by 2 units. It will be from $t=2$ to $t=5$.
*   **b) $x(-t)$:** The pulse is reflected. It will be from $t=-3$ to $t=0$.
*   **c) $x(2t)$:** Time compression. The pulse duration is halved. It will be from $t=0$ to $t=1.5$.
*   **d) $x(t/2)$:** Time expansion. The pulse duration is doubled. It will be from $t=0$ to $t=6$.
*   **e) $x(t) u(t-1)$:** This is equivalent to multiplying $x(t)$ by a unit step starting at $t=1$. The signal becomes 0 for $t<1$. So, the pulse will exist only from $t=1$ to $t=3$.

**Question 2 (CO1):**
Consider the discrete-time signal $x[n]$ defined as:
$x[n] = \{..., 0, 0, 1, 2, 1, 0, 0, ...\}$ where $x[0]=1$, $x[1]=2$, $x[2]=1$.
Sketch the following signals:
a) $x[n+1]$
b) $x[-n]$
c) $x[2n]$ (interpreted as downsampling by 2)
d) $x[n-1]u[n-2]$

**Answer 2:**
*   **a) $x[n+1]$:** Shift left by 1. $x[1]=1$, $x[2]=2$, $x[3]=1$.
*   **b) $x[-n]$:** Reflection. $x[0]=1$, $x[-1]=2$, $x[-2]=1$.
*   **c) $x[2n]$:** Downsampling by 2. Keep $x[0], x[2], x[4], ...$ and discard $x[1], x[3], ...$. The new sequence is $\{..., 0, 0, x[0], 0, x[2], 0, x[4], ...\} = \{..., 0, 0, 1, 0, 1, 0, 0, ...\}$ where the '1' is at index 0 and the next '1' is at index 1. (Note: $x[2n]$ means we evaluate $x$ at $n=0, \pm 2, \pm 4, \dots$. So, $x[2(0)]=x[0]=1$, $x[2(1)]=x[2]=1$, $x[2(-1)]=x[-2]=0$, etc. This results in a sequence like $\{..., 0, 1, 0, 0, ...\}$ with the '1' at index 0. The interpretation of $x[2n]$ as downsampling usually leads to $y[n] = x[kn]$, which when defining a new signal $y[m]$, means $y[m] = x[km]$. So for $k=2$, $y[m] = x[2m]$. This results in keeping only samples where the index is a multiple of 2. $y[0]=x[0]=1$, $y[1]=x[2]=1$, $y[2]=x[4]=0$. The sequence is $\{..., 0, 1, 1, 0, ...\}$ with the first '1' at index 0.)
    *Let's clarify the $x[2n]$ interpretation. If we define a new sequence $y[n] = x[2n]$, then $y[0] = x[0] = 1$, $y[1] = x[2] = 1$, $y[2] = x[4] = 0$, $y[-1] = x[-2] = 0$. The resulting sequence is $\{..., 0, 1, 1, 0, 0, ...\}$ with the two '1's at indices 0 and 1.
*   **d) $x[n-1]u[n-2]$:** First shift $x[n]$ right by 1: $\{..., 0, 1, 2, 1, 0, ...\}$ where $x[1]=1, x[2]=2, x[3]=1$. Then multiply by $u[n-2]$. This means the signal is 0 for $n<2$. So, only $x[2]$ onwards from the shifted sequence contributes. This gives: $\{..., 0, 0, 2, 1, 0, ...\}$ where the '2' is at index 2 and the '1' is at index 3.

**Question 3 (CO1):**
Describe the continuous-time signal $y(t) = 5 \cdot \sin(4\pi t + \pi/3)$.
What are its amplitude, angular frequency, frequency, phase, and period?

**Answer 3:**
*   Amplitude ($A$): 5
*   Angular frequency ($\omega_0$): $4\pi$ radians/second
*   Frequency ($f_0$): $\omega_0 / (2\pi) = (4\pi) / (2\pi) = 2$ Hz
*   Phase ($\phi$): $\pi/3$ radians
*   Period ($T_0$): $1/f_0 = 1/2$ seconds

**Question 4 (CO1):**
What is the mathematical definition of the discrete-time unit impulse $\delta[n]$? Write down the sifting property of the unit impulse.

**Answer 4:**
*   **Definition:**
    $$
    \delta[n] = \begin{cases} 1, & n = 0 \\ 0, & n \ne 0 \end{cases}
    $$
*   **Sifting Property:** For any discrete-time signal $x[n]$ and any integer $a$:
    $$
    \sum_{n=-\infty}^{\infty} x[n] \delta[n-a] = x[a]
    $$

---

### **6. Important Points to Remember**

*   **Notation:** $x(t)$ for continuous-time, $x[n]$ for discrete-time.
*   **Independent Variable:** $t$ for continuous, $n$ for discrete.
*   **Unit Impulse ($\delta(t)$ and $\delta[n]$):** Its sifting property is crucial. It "picks out" the value of a signal at a specific point.
*   **Unit Step ($u(t)$ and $u[n]$):** Represents the start of a signal or event. Can be used to define causal signals.
*   **Exponential and Sinusoidal Signals:** Fundamental building blocks, crucial for understanding system behavior and frequency analysis.
*   **Discrete-Time Operations:** Time scaling in DT needs careful interpretation (often implies interpolation or decimation).
*   **CO1 Focus:** This module heavily focuses on understanding and manipulating these basic signals and performing operations on them.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **7. Textbook/Reference Mentions**

*   **Oppenheim & Willsky:** Excellent for foundational understanding, rigorous definitions, and detailed explanations of signal properties. Chapter 1 often covers this introductory material.
*   **Haykin:** Also a strong resource, often with a good focus on practical applications and system-level analysis. Its introduction to discrete-time signals and elementary signals is comprehensive.
*   **Lathi:** Provides a good balance between theory and application, particularly strong on the mathematical aspects of signals and their role in linear systems.
*   **Ziemer:** Offers a combined approach to continuous and discrete-time signals, which is very beneficial for seeing the parallels and differences.

---

This set of notes provides a comprehensive overview of continuous-time and discrete-time signals and elementary signals as introduced in Module 1. It aligns with the learning outcomes and course outcomes mentioned, particularly CO1. The practice questions are designed to test understanding of these concepts.