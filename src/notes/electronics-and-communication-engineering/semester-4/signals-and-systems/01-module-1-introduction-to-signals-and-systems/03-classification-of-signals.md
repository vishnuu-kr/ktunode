---
title: "Classification of signals"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to signals and systems:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe512"
status: "completed"
scrapedAt: "2026-05-23T17:52:18.414Z"
---
# Signals and Systems: Module 1 - Introduction to Signals and Systems

## Topic: Classification of Signals

This section provides a comprehensive overview of the different ways signals can be classified, a fundamental concept in understanding and analyzing them. This aligns with **Course Outcome 1 (CO1)**, focusing on classifying signals and performing basic operations.

### 1. What is a Signal?

A **signal** is a function that conveys information about the behavior or attributes of some phenomenon. In essence, it's a carrier of information.

*   **Examples:**
    *   The voltage across a resistor as a function of time.
    *   The temperature of a room as a function of spatial coordinates.
    *   The amplitude of a sound wave as a function of time.
    *   An image as a function of spatial coordinates.

### 2. Classification of Signals

Signals can be classified based on various properties, which helps in understanding their characteristics and choosing appropriate analysis techniques.

#### 2.1. Based on the Independent Variable

The independent variable of a signal determines how it is represented and processed.

*   **Continuous-Time Signals:**
    *   **Definition:** Signals whose independent variable is continuous. They are typically defined for all values of time within a given interval.
    *   **Notation:** $x(t)$, where $t$ is the continuous independent variable.
    *   **Representation:** Usually plotted as a continuous curve.
    *   **Textbook References:**
        *   Oppenheim & Willsky (2/e, 2015): Chapter 1 introduces continuous-time signals as functions of a continuous variable $t$.
        *   Haykin (2/e, 2021): Similar to Oppenheim, Haykin defines continuous-time signals in the context of physical phenomena.
    *   **Examples:**
        *   Audio signals (voice, music).
        *   Temperature variations.
        *   Voltage from a battery.
        *   **Mathematical Representation:** $x(t) = \sin(\omega t + \phi)$
    *   **Important Point:** Continuous-time signals are the natural representation of many physical phenomena.

*   **Discrete-Time Signals:**
    *   **Definition:** Signals whose independent variable is discrete. They are defined only at specific, discrete points in time (or another independent variable).
    *   **Notation:** $x[n]$, where $n$ is the discrete independent variable (usually an integer representing a time index).
    *   **Representation:** Usually plotted as a series of points or impulses.
    *   **Textbook References:**
        *   Oppenheim & Willsky (2/e, 2015): Chapter 1 also covers discrete-time signals, often arising from sampling continuous-time signals.
        *   Haykin (2/e, 2021): Haykin distinguishes between analog (continuous-time) and digital (discrete-time) signals.
    *   **Examples:**
        *   Digital audio samples.
        *   Stock prices recorded daily.
        *   Output of a digital sensor.
        *   **Mathematical Representation:** $x[n] = \cos(\frac{\pi}{4} n)$
    *   **Important Point:** Discrete-time signals are crucial in digital signal processing and computer-based analysis.

#### 2.2. Based on Amplitude

The amplitude of a signal refers to its value at each point.

*   **Analog Signals:**
    *   **Definition:** Signals whose amplitude is continuous and can take any value within a given range. They are often synonymous with continuous-time signals.
    *   **Examples:**
        *   The output of a microphone.
        *   The reading on an analog thermometer.

*   **Digital Signals:**
    *   **Definition:** Signals whose amplitude is discrete and can take only a finite set of values. These are typically the result of quantizing analog signals.
    *   **Examples:**
        *   The output of an Analog-to-Digital Converter (ADC).
        *   Binary data (0s and 1s).
    *   **Important Point:** Digital signals are essential for computer processing and storage.

#### 2.3. Based on Whether the Signal is Defined for All Time

This classification relates to the duration for which a signal exists.

*   **Energy Signals:**
    *   **Definition:** Signals for which the total energy is finite.
    *   **Mathematical Condition:**
        *   For continuous-time signals: $E_x = \int_{-\infty}^{\infty} |x(t)|^2 dt < \infty$
        *   For discrete-time signals: $E_x = \sum_{n=-\infty}^{\infty} |x[n]|^2 < \infty$
    *   **Characteristics:** Energy signals typically have finite duration or decay rapidly to zero.
    *   **Examples:**
        *   A rectangular pulse of finite duration.
        *   A decaying exponential signal.
        *   **Continuous-time example:** $x(t) = e^{-at}u(t)$, where $a>0$ and $u(t)$ is the unit step function.
        *   **Discrete-time example:** $x[n] = a^n u[n]$, where $|a|<1$.
    *   **Important Point:** Energy signals are often band-limited.

*   **Power Signals:**
    *   **Definition:** Signals for which the average power is finite and non-zero. The total energy of a power signal is infinite.
    *   **Mathematical Condition:**
        *   For continuous-time signals: $P_x = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} |x(t)|^2 dt < \infty$
        *   For discrete-time signals: $P_x = \lim_{N \to \infty} \frac{1}{2N+1} \sum_{n=-N}^{N} |x[n]|^2 < \infty$
    *   **Characteristics:** Power signals are typically periodic or have a constant DC component.
    *   **Examples:**
        *   A sinusoidal signal ($A \sin(\omega t)$).
        *   A constant DC signal ($C$).
        *   A periodic square wave.
    *   **Important Point:** If a signal is periodic, it's a power signal (unless it's identically zero).

*   **Neither Energy nor Power Signals:**
    *   Signals that do not satisfy the conditions for either energy or power signals. These often grow unbounded.
    *   **Example:** $x(t) = t$.

#### 2.4. Based on Symmetry

Symmetry properties are useful for simplifying signal analysis.

*   **Even Signals (Symmetric Signals):**
    *   **Definition:** Signals that are symmetric about the vertical axis (or origin in time for discrete-time signals).
    *   **Mathematical Condition:**
        *   For continuous-time signals: $x(t) = x(-t)$
        *   For discrete-time signals: $x[n] = x[-n]$
    *   **Examples:**
        *   $x(t) = \cos(\omega t)$
        *   $x[n] = n^2$
        *   $x(t) = e^{-|t|}$
    *   **Important Point:** Any signal can be decomposed into an even and an odd part. The even part of $x(t)$ is $x_e(t) = \frac{1}{2}(x(t) + x(-t))$.

*   **Odd Signals (Antisymmetric Signals):**
    *   **Definition:** Signals that are antisymmetric about the vertical axis (or origin in time for discrete-time signals).
    *   **Mathematical Condition:**
        *   For continuous-time signals: $x(t) = -x(-t)$
        *   For discrete-time signals: $x[n] = -x[-n]$
    *   **Examples:**
        *   $x(t) = \sin(\omega t)$
        *   $x[n] = n^3$
        *   $x(t) = t$
    *   **Important Point:** The odd part of $x(t)$ is $x_o(t) = \frac{1}{2}(x(t) - x(-t))$. Note that for an odd signal, $x(0)=0$ if $x(0)$ is defined.

#### 2.5. Based on Periodicity

Periodic signals repeat themselves over time.

*   **Periodic Signals:**
    *   **Definition:** Signals that repeat themselves exactly after a certain interval of time.
    *   **Mathematical Condition:** There exists a positive constant $T_0$ (the fundamental period) such that $x(t + T_0) = x(t)$ for all $t$ (for continuous-time). For discrete-time, $x[n+N_0] = x[n]$ for all $n$, where $N_0$ is the fundamental period (a positive integer).
    *   **Examples:**
        *   $x(t) = \sin(\omega t)$ (fundamental period $T_0 = 2\pi/\omega$)
        *   $x[n] = \cos(\frac{2\pi}{5} n)$ (fundamental period $N_0 = 5$)
    *   **Important Point:** The fundamental period is the smallest positive value of $T_0$ (or $N_0$) for which the condition holds. If a signal is periodic, it is a power signal.

*   **Aperiodic Signals (Non-periodic Signals):**
    *   **Definition:** Signals that do not satisfy the condition for periodicity. They do not repeat exactly after any finite interval.
    *   **Examples:**
        *   $x(t) = e^{-t}u(t)$
        *   $x[n] = n$

#### 2.6. Based on the Presence of a DC Component

A DC (Direct Current) component is a constant value added to a time-varying signal.

*   **Signals with a DC Component:**
    *   **Definition:** Signals that have a non-zero average value over an infinite time interval.
    *   **Mathematical Condition:**
        *   For continuous-time signals: $\lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} x(t) dt \neq 0$
        *   For discrete-time signals: $\lim_{N \to \infty} \frac{1}{2N+1} \sum_{n=-N}^{N} x[n] \neq 0$
    *   **Example:** $x(t) = 5 + \sin(t)$ (DC component is 5).

*   **Signals without a DC Component:**
    *   **Definition:** Signals whose average value over an infinite time interval is zero.
    *   **Mathematical Condition:**
        *   For continuous-time signals: $\lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} x(t) dt = 0$
        *   For discrete-time signals: $\lim_{N \to \infty} \frac{1}{2N+1} \sum_{n=-N}^{N} x[n] = 0$
    *   **Example:** $x(t) = \sin(t)$.

#### 2.7. Other Important Classifications

*   **Causal Signals:**
    *   **Definition:** Signals that are zero for all negative values of the independent variable. This is particularly relevant in system analysis where events in the past influence the present.
    *   **Mathematical Condition:**
        *   For continuous-time signals: $x(t) = 0$ for $t < 0$. Often represented using the unit step function $u(t)$.
        *   For discrete-time signals: $x[n] = 0$ for $n < 0$. Often represented using $u[n]$.
    *   **Examples:**
        *   $x(t) = e^{-t}u(t)$
        *   $x[n] = 2^n u[n]$
    *   **Reference:** This concept is crucial for understanding causality in systems (CO2).

*   **Non-causal Signals:**
    *   **Definition:** Signals that are non-zero for at least one negative value of the independent variable.
    *   **Examples:**
        *   $x(t) = e^{t}u(t)$ (non-zero for $t>0$, but also can be thought of as having past components if the system has memory)
        *   $x(t) = \cos(\omega t)$ (non-zero for $t<0$)
        *   $x[n] = u[n+2]$

*   **Deterministic Signals:**
    *   **Definition:** Signals whose values can be precisely predicted for all time. They can be described by a mathematical formula.
    *   **Examples:** Sinusoids, exponentials, pulses.

*   **Random Signals (Stochastic Signals):**
    *   **Definition:** Signals whose values cannot be precisely predicted for all time, and are described in terms of probability distributions.
    *   **Examples:** Noise signals (like thermal noise), speech signals in a statistical sense.

### 3. Basic Operations on Signals

Understanding how to manipulate signals is essential for analysis and processing. These operations often form the basis of system behavior. This directly supports **CO1**.

#### 3.1. Addition and Subtraction

*   **Definition:** Combining signals by adding or subtracting their corresponding amplitude values at each point.
*   **Example:** $y(t) = x_1(t) + x_2(t)$ or $y[n] = x_1[n] - x_2[n]$.
*   **Graphical Interpretation:** Vertical addition/subtraction of the signal waveforms.

#### 3.2. Scalar Multiplication

*   **Definition:** Multiplying a signal by a constant scalar value.
*   **Example:** $y(t) = A x(t)$ or $y[n] = c x[n]$.
*   **Graphical Interpretation:** Vertically scaling the amplitude of the signal.

#### 3.3. Multiplication of Signals

*   **Definition:** Multiplying the corresponding amplitude values of two signals at each point.
*   **Example:** $y(t) = x_1(t) \cdot x_2(t)$ or $y[n] = x_1[n] \cdot x_2[n]$.
*   **Reference:** This is a fundamental operation and is used in modulation and other signal processing techniques discussed in later chapters of Oppenheim & Willsky and Haykin.

#### 3.4. Time Shifting

*   **Definition:** Shifting a signal forward or backward in time.
*   **Continuous-Time:** $y(t) = x(t - t_0)$
    *   If $t_0 > 0$, the signal is shifted to the right (delayed).
    *   If $t_0 < 0$, the signal is shifted to the left (advanced).
*   **Discrete-Time:** $y[n] = x[n - n_0]$
    *   If $n_0 > 0$, the signal is shifted to the right (delayed).
    *   If $n_0 < 0$, the signal is shifted to the left (advanced).
*   **Example:** If $x(t)$ is a pulse starting at $t=0$, then $x(t-2)$ is the same pulse starting at $t=2$.
*   **Graphical Interpretation:** The entire waveform moves horizontally.

#### 3.5. Time Scaling

*   **Definition:** Compressing or expanding a signal in time.
*   **Continuous-Time:** $y(t) = x(at)$
    *   If $a > 1$, the signal is compressed (faster).
    *   If $0 < a < 1$, the signal is expanded (slower).
    *   If $a < 0$, it involves a time reversal as well ($x(-at) = x(|a|(-t))$).
*   **Discrete-Time:** $y[n] = x[an]$
    *   This operation can be tricky for discrete signals. For example, $x[2n]$ means you only keep samples at even indices. $x[n/2]$ means you might need to interpolate or consider samples that don't exist at integer indices.
*   **Reference:** Oppenheim & Willsky discuss time scaling and reversal in Chapter 1 as basic operations.
*   **Example:** If $x(t)$ is a pulse of duration $T$, then $x(2t)$ is a pulse of duration $T/2$, and $x(t/2)$ is a pulse of duration $2T$.

#### 3.6. Time Reversal (Folding)

*   **Definition:** Flipping a signal about the vertical axis.
*   **Continuous-Time:** $y(t) = x(-t)$
*   **Discrete-Time:** $y[n] = x[-n]$
*   **Example:** If $x(t)$ is a pulse from $t=0$ to $t=1$, then $x(-t)$ is the same pulse from $t=-1$ to $t=0$.

#### 3.7. Amplitude Scaling

*   **Definition:** Multiplying the signal by a constant.
*   **Continuous-Time:** $y(t) = A \cdot x(t)$
*   **Discrete-Time:** $y[n] = c \cdot x[n]$
*   **Graphical Interpretation:** Vertically stretches or compresses the signal.

### 4. Practice Questions and Answers

**Question 1:** Classify the following signals as continuous-time or discrete-time:
    a) The temperature recorded by a thermometer every hour.
    b) The voltage output of a radio wave.
    c) The number of customers in a queue at any given second.
    d) The pixel intensity of an image.

**Answer 1:**
    a) Discrete-time (recorded at specific time intervals).
    b) Continuous-time (radio waves are physical phenomena occurring over continuous time).
    c) Discrete-time (counted at specific time instances).
    d) Typically considered discrete-space, but if thought of as a function of scanning time, it can be discrete-time. In image processing, it's usually $f(x, y)$ where $x, y$ are discrete spatial coordinates.

**Question 2:** Determine if the signal $x(t) = 3 \cos(2t + \pi/4)$ is periodic. If it is, find its fundamental period.

**Answer 2:**
The signal is a cosine function. The general form is $A \cos(\omega t + \phi)$.
Here, $\omega = 2$. The fundamental period $T_0$ for a continuous-time cosine signal is given by $T_0 = \frac{2\pi}{\omega}$.
So, $T_0 = \frac{2\pi}{2} = \pi$.
The signal $x(t)$ is periodic with a fundamental period of $\pi$.

**Question 3:** Determine if the signal $x[n] = 5$ is periodic. If it is, find its fundamental period.

**Answer 3:**
A constant signal $x[n] = C$ is periodic.
For any integer $N_0$, $x[n+N_0] = 5$ and $x[n] = 5$. Thus, $x[n+N_0] = x[n]$ for all $n$.
The smallest positive integer $N_0$ for which this holds is $N_0 = 1$.
So, the signal $x[n] = 5$ is periodic with a fundamental period of 1.

**Question 4:** Classify the signal $x(t) = e^{-2t}u(t)$ as an energy or power signal. Calculate its energy or power.

**Answer 4:**
This is a continuous-time signal.
Check for energy:
$E_x = \int_{-\infty}^{\infty} |x(t)|^2 dt = \int_{-\infty}^{\infty} |e^{-2t}u(t)|^2 dt$
Since $u(t)=0$ for $t<0$, the integral becomes:
$E_x = \int_{0}^{\infty} (e^{-2t})^2 dt = \int_{0}^{\infty} e^{-4t} dt$
$E_x = \left[ \frac{e^{-4t}}{-4} \right]_0^{\infty} = 0 - \left( \frac{e^0}{-4} \right) = 0 - (-\frac{1}{4}) = \frac{1}{4}$
Since the total energy $E_x = 1/4$ is finite, the signal is an **energy signal**.

**Question 5:** Classify the signal $x[n] = \sin(\frac{\pi}{3} n)$ as an energy or power signal. Calculate its energy or power.

**Answer 5:**
This is a discrete-time periodic signal. Periodic signals are typically power signals.
First, find the fundamental period. For $x[n] = \sin(\frac{\pi}{3} n)$, the angular frequency is $\Omega = \frac{\pi}{3}$.
The fundamental period $N_0$ is the smallest positive integer such that $\frac{\pi}{3} N_0 = 2\pi k$ for some integer $k$.
$N_0 = 6k$. The smallest positive integer is $N_0 = 6$.
Since the signal is periodic, it is a power signal.
Calculate the average power:
$P_x = \lim_{N \to \infty} \frac{1}{2N+1} \sum_{n=-N}^{N} |x[n]|^2$
For a periodic signal, we can average over one period:
$P_x = \frac{1}{N_0} \sum_{n=0}^{N_0-1} |x[n]|^2$
$P_x = \frac{1}{6} \sum_{n=0}^{5} |\sin(\frac{\pi}{3} n)|^2$
$P_x = \frac{1}{6} \left( \sin^2(0) + \sin^2(\frac{\pi}{3}) + \sin^2(\frac{2\pi}{3}) + \sin^2(\pi) + \sin^2(\frac{4\pi}{3}) + \sin^2(\frac{5\pi}{3}) \right)$
$P_x = \frac{1}{6} \left( 0 + (\frac{\sqrt{3}}{2})^2 + (\frac{\sqrt{3}}{2})^2 + 0 + (-\frac{\sqrt{3}}{2})^2 + (-\frac{\sqrt{3}}{2})^2 \right)$
$P_x = \frac{1}{6} \left( 0 + \frac{3}{4} + \frac{3}{4} + 0 + \frac{3}{4} + \frac{3}{4} \right)$
$P_x = \frac{1}{6} \left( 4 \times \frac{3}{4} \right) = \frac{1}{6} (3) = \frac{1}{2}$
The signal $x[n] = \sin(\frac{\pi}{3} n)$ is a **power signal** with an average power of $1/2$.

**Question 6:** Express the signal $y(t)$ in terms of $x(t)$ for the following transformations:
    a) $y(t)$ is $x(t)$ shifted 2 units to the right.
    b) $y(t)$ is $x(t)$ compressed by a factor of 3.
    c) $y(t)$ is $x(t)$ reversed in time.

**Answer 6:**
    a) $y(t) = x(t-2)$
    b) $y(t) = x(3t)$
    c) $y(t) = x(-t)$

### 5. Important Points to Remember

*   **Continuous vs. Discrete:** The independent variable is key. $t$ for continuous, $n$ for discrete.
*   **Energy vs. Power:** Energy signals have finite total energy; Power signals have finite average power. Periodic signals are generally power signals.
*   **Even/Odd Decomposition:** Any signal can be written as the sum of an even and an odd signal. $x(t) = x_e(t) + x_o(t)$.
*   **Time Operations:** Understand the effect of shifting ($t \pm t_0$), scaling ($at$), and reversal ($-t$) on the signal waveform.
*   **Causality:** Critical for system analysis, a causal signal is zero for negative time.
*   **Textbook Focus:** Oppenheim & Willsky and Haykin provide foundational definitions and examples for these classifications. Pay attention to the mathematical conditions they present for energy, power, and periodicity.

This comprehensive overview of signal classification equips you with the fundamental vocabulary and concepts necessary for the subsequent topics in Signals and Systems, particularly for understanding system properties and operations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
