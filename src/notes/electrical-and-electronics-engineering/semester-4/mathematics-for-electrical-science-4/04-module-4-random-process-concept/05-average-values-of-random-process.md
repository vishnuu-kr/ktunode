---
title: "Average Values of Random Process"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 4: Random process concept"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35db4"
status: "completed"
scrapedAt: "2026-05-23T16:17:08.492Z"
---
# Mathematics for Electrical Science – 4: Module 4 - Random Process Concepts

## Topic: Average Values of Random Processes

**Learning Outcomes:**

*   Understand the concept of averaging over time and ensemble for random processes.
*   Differentiate between time averages and ensemble averages.
*   Define and calculate the mean (expected value) of a random process.
*   Define and calculate the time-averaged autocorrelation of a random process.
*   Understand the conditions under which time and ensemble averages are equal (ergodicity).
*   Appreciate the practical implications of average values in electrical science.

**Course Outcomes Alignment:**

This topic directly contributes to **CO4: Analyze random processes by classifying them, describing their properties, utilizing autocorrelation functions, and understanding their applications in areas like signal processing and communication systems.** Specifically, understanding average values is fundamental to describing the behavior of random processes and forms the basis for analyzing their properties like autocorrelation. The knowledge level targeted is **K3 (Apply)**, as students will be expected to calculate and interpret these averages.

---

### 1. Introduction to Random Processes

A **random process** (or stochastic process) is a collection of random variables indexed by time (or sometimes another parameter). In electrical science, random processes are used to model phenomena that evolve randomly over time, such as noise in electronic circuits, communication signals with random fluctuations, or the output of a system subjected to random inputs.

**Key Concept:** A random process $X(t)$ associates a function of time (a sample function or waveform) with each outcome of an experiment.

**Example:** The voltage across a resistor due to thermal noise can be modeled as a random process. At any given instant in time, the voltage is a random variable, and the entire voltage waveform over time is a sample function of the process.

---

### 2. Averaging in Random Processes

We can average a random process in two fundamental ways:

*   **Time Average:** Averaging a *single sample function* of the random process over time.
*   **Ensemble Average:** Averaging the values of the random variables at a *fixed point in time* across all possible sample functions (the ensemble).

---

### 3. Time Average

The time average of a specific sample function $x(t)$ of a random process $X(t)$ is defined as:

$$ \langle x(t) \rangle = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} x(t) dt $$

This represents the average value of that particular waveform over an infinitely long duration.

**Important Note:** The time average is a single number (a deterministic value) associated with a specific realization of the random process.

**Example:** Consider a sample function $x(t) = A \sin(\omega t)$.
The time average is:
$$ \langle x(t) \rangle = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} A \sin(\omega t) dt $$
Since the integral of a sine wave over a full period is zero, and over many periods will also average to zero, the time average is 0.

---

### 4. Ensemble Average (Mean of a Random Process)

The ensemble average of a random process $X(t)$ at a specific time $t$ is the expected value of the random variable $X(t)$. It is denoted by $m_X(t)$ or $E[X(t)]$.

$$ m_X(t) = E[X(t)] = \int_{-\infty}^{\infty} x m_{X(t)}(x) dx $$

where $m_{X(t)}(x)$ is the probability density function (PDF) of the random variable $X(t)$.

If the random process is discrete, the ensemble average is:

$$ m_X(t) = E[X(t)] = \sum_{i} x_i P(X(t) = x_i) $$

**Key Concept:** The ensemble average is the average value of the process across all possible realizations at a given time instant. It is generally a function of time.

**Example:** Let $X(t) = A \cos(\omega t + \Theta)$, where $A$ and $\omega$ are constants, and $\Theta$ is a random variable uniformly distributed over $[0, 2\pi]$.
To find the ensemble average $m_X(t)$:
$$ m_X(t) = E[A \cos(\omega t + \Theta)] = \int_{0}^{2\pi} A \cos(\omega t + \theta) \frac{1}{2\pi} d\theta $$
$$ m_X(t) = \frac{A}{2\pi} \left[ \frac{\sin(\omega t + \theta)}{\omega} \right]_{0}^{2\pi} $$
$$ m_X(t) = \frac{A}{2\pi \omega} (\sin(\omega t + 2\pi) - \sin(\omega t)) = \frac{A}{2\pi \omega} (\sin(\omega t) - \sin(\omega t)) = 0 $$
So, the ensemble average of this random process is 0 for all $t$.

**Reference (Devore, J. L., 9th ed., Chapter on Random Variables):** Chapter 6 of Devore discusses expected values of random variables. The concept of an ensemble average directly extends this to random processes, where $E[X(t)]$ is the expected value of the random variable $X(t)$ for a fixed $t$.

**Reference (Veerarajan, T., 3rd ed., Chapter on Random Processes):** Veerarajan's textbook extensively covers random processes and their statistical properties, including the mean. He defines the mean function $\mu_X(t) = E[X(t)]$.

---

### 5. Conditions for Equality of Time and Ensemble Averages: Ergodicity

For many random processes encountered in practice, the time average of any sample function is equal to the ensemble average. Such processes are called **ergodic**.

**Definition of an Ergodic Process:** A random process $X(t)$ is said to be ergodic if the time average of any of its sample functions is equal to the ensemble average of the process.

Mathematically, for an ergodic process:

$$ \langle x(t) \rangle = E[X(t)] = m_X $$

where $m_X$ is a constant (i.e., the ensemble average is independent of time).

**Types of Ergodicity:**

*   **Mean Ergodicity:** If $\lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} x(t) dt = E[X(t)]$, the process is mean ergodic. This implies that the time average converges to the (possibly time-varying) ensemble average. If the ensemble average is constant, this means the time average converges to a constant.
*   **Autocorrelation Ergodicity:** If the time-averaged autocorrelation of a sample function equals the ensemble-averaged autocorrelation.

**Importance of Ergodicity:**

*   **Simplification of Analysis:** If a process is ergodic, we can estimate its ensemble averages by taking time averages of a single sample function, which is often much easier in practice.
*   **Statistical Characterization:** Ergodic processes are often considered "well-behaved" and their statistical properties can be fully characterized by studying a single, sufficiently long, sample function.

**Conditions for Ergodicity (Generally complex, but some common implications):**

*   **Stationarity:** Ergodicity is a stronger condition than stationarity. A common sufficient (but not necessary) condition for a stationary process to be ergodic is if its autocorrelation function decays sufficiently fast as the time lag increases.
*   **Absence of DC Offset in Autocorrelation:** For a process to be mean ergodic, its autocorrelation function must not have a DC component that prevents convergence of the time average.

**Reference (Papoulis & Pillai, 4th ed., Chapter on Ergodic Processes):** Papoulis provides a rigorous treatment of ergodicity, defining different types and their implications. He emphasizes that for an ergodic process, statistical properties can be inferred from time averages of a single sample.

**Reference (Ross, S. M., 6th ed., Chapter on Stochastic Processes):** Ross discusses stationarity and ergodicity as key properties of random processes, highlighting how ergodicity allows for estimation of population averages from sample averages.

---

### 6. Average Power of a Random Process

The average power of a random process $X(t)$ is related to the mean square value, which is the ensemble average of $X^2(t)$:

$$ E[X^2(t)] = \int_{-\infty}^{\infty} x^2 m_{X(t)}(x) dx $$

For a zero-mean process ($E[X(t)] = 0$), the average power is simply $E[X^2(t)]$.

If the process is **mean ergodic**, then the time average of $x^2(t)$ also converges to the ensemble average $E[X^2(t)]$:

$$ \langle x^2(t) \rangle = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} x^2(t) dt = E[X^2(t)] $$

In electrical engineering, if $X(t)$ represents a voltage or current, $X^2(t)$ is proportional to power. Thus, $E[X^2(t)]$ represents the average power delivered by the process.

**Example:** Consider a random process $X(t) = S(t) + N(t)$, where $S(t)$ is a deterministic signal and $N(t)$ is a zero-mean, stationary noise process.
The mean of $X(t)$ is $E[X(t)] = E[S(t) + N(t)] = S(t) + E[N(t)] = S(t)$.
The mean square value is $E[X^2(t)] = E[(S(t) + N(t))^2] = E[S^2(t) + 2S(t)N(t) + N^2(t)]$.
If $S(t)$ is a constant $S$, then $E[S^2(t)] = S^2$.
If $S(t)$ is deterministic and $N(t)$ is zero-mean, then $E[S(t)N(t)] = S(t)E[N(t)] = 0$.
So, $E[X^2(t)] = S^2 + E[N^2(t)]$. The average power of the signal $X(t)$ is its DC power ($S^2$) plus the average power of the noise ($E[N^2(t)]$).

---

### 7. Time-Averaged Autocorrelation

The time-averaged autocorrelation of a sample function $x(t)$ is defined as:

$$ R_x(\tau) = \langle x(t)x(t+\tau) \rangle = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} x(t)x(t+\tau) dt $$

This measures the similarity between the waveform $x(t)$ and a time-shifted version of itself, averaged over all time.

**Relation to Ensemble-Averaged Autocorrelation:**

For a **wide-sense stationary (WSS)** random process, the ensemble-averaged autocorrelation function $R_X(\tau) = E[X(t)X(t+\tau)]$ is independent of $t$.

If a WSS process is also **ergodic**, then the time-averaged autocorrelation is equal to the ensemble-averaged autocorrelation:

$$ R_x(\tau) = R_X(\tau) $$

**Importance:**

*   **Signal Characterization:** The autocorrelation function reveals the temporal dependencies within a random process.
*   **System Analysis:** Autocorrelation is crucial in analyzing how linear systems respond to random inputs, particularly in signal processing and control systems.

**Reference (Palaniammal, S., 3rd ed., Chapter on Random Processes):** Palaniammal discusses autocorrelation functions as a key tool for characterizing random processes and their memory properties.

**Reference (Anderson, D. F., et al., 1st ed., Chapter on Stationary Processes):** This book likely covers the relationship between stationarity and autocorrelation, which is a prerequisite for understanding when time and ensemble averages of autocorrelation are equal.

---

### 8. Applications in Electrical Science

*   **Noise Analysis:** The average power of thermal noise in resistors or shot noise in semiconductors is characterized by their mean square values. Understanding these averages helps in designing circuits that are robust to noise.
*   **Signal Detection:** In communication systems, detecting a weak signal in the presence of noise often involves averaging or filtering techniques that rely on the statistical properties, including the average values, of the signal and noise.
*   **System Identification:** The response of a system to a random input can be characterized by its output's average values and autocorrelation. This is vital for modeling and controlling dynamic systems.
*   **Power Spectrum Estimation:** The average power of a random process over different frequencies is described by its power spectral density, which is the Fourier transform of the autocorrelation function.

---

### 9. Key Points to Remember

*   **Time Average:** Average over time for a single sample function.
*   **Ensemble Average (Mean):** Average over all possible sample functions at a fixed time.
*   **Ergodicity:** The condition where time averages equal ensemble averages. It simplifies analysis significantly.
*   **Mean:** $m_X(t) = E[X(t)]$. For a stationary process, the mean is constant.
*   **Mean Square Value:** $E[X^2(t)]$, related to average power.
*   For ergodic processes, you can estimate statistical averages from time averages of a single realization.
*   The concepts of average values are foundational for understanding correlation, stationarity, and spectral properties of random processes.

---

### 10. Practice Questions and Exercises

**Question 1:**
Let $X(t) = C$, where $C$ is a random variable with mean $E[C] = \mu$ and variance $\text{Var}(C) = \sigma^2$.
(a) Calculate the ensemble average $m_X(t)$ of the random process $X(t)$.
(b) Calculate the time average $\langle x(t) \rangle$ for any sample function $x(t)$.
(c) Is this process ergodic? Justify your answer.

**Answer 1:**
(a) The ensemble average is $m_X(t) = E[X(t)] = E[C] = \mu$.
(b) The time average for any sample function $x(t) = c$ (where $c$ is a specific realization of $C$) is $\langle x(t) \rangle = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} c dt = \lim_{T \to \infty} \frac{1}{2T} [ct]_{-T}^{T} = \lim_{T \to \infty} \frac{1}{2T} (cT - c(-T)) = \lim_{T \to \infty} \frac{2cT}{2T} = c$.
(c) For the process to be ergodic, the time average must equal the ensemble average. Here, the time average is $c$ (which depends on the specific sample function), while the ensemble average is $\mu$ (a constant). Unless $c = \mu$ for all sample functions (which is only true if the variance $\sigma^2 = 0$), the time average is not equal to the ensemble average. Therefore, this process is not ergodic in general.

---

**Question 2:**
Consider the random process $X(t) = A \cos(\omega t + \Theta)$, where $A$ and $\omega$ are constants, and $\Theta$ is a random variable uniformly distributed over $[0, 2\pi]$. We calculated the ensemble average $m_X(t) = 0$ in the notes.
Now, let's consider a specific sample function where $\Theta = \pi/4$. So, $x(t) = A \cos(\omega t + \pi/4)$.
(a) Calculate the time average of this specific sample function $x(t)$.
(b) Is this process ergodic? Explain why or why not based on your calculations for the ensemble average and the time average.

**Answer 2:**
(a) The time average of $x(t) = A \cos(\omega t + \pi/4)$ is:
$$ \langle x(t) \rangle = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} A \cos(\omega t + \pi/4) dt $$
The integral of a cosine function over a sufficiently large interval that contains many periods is zero. Therefore, the time average is 0.

(b) The ensemble average $m_X(t) = 0$ for all $t$.
The time average for the sample function $x(t) = A \cos(\omega t + \pi/4)$ is also 0.
Since the time average of this sample function equals the ensemble average, and this holds true for any sample function due to the nature of the uniform distribution of $\Theta$, the process is ergodic. Specifically, it is mean ergodic because the time average of any sample function converges to the constant ensemble average.

---

**Question 3:**
Let $X(t) = N(t)$, where $N(t)$ is a zero-mean, stationary random process with an autocorrelation function $R_N(\tau) = E[N(t)N(t+\tau)] = \sigma^2 e^{-\alpha|\tau|}$, where $\sigma^2 > 0$ and $\alpha > 0$.
(a) What is the ensemble average $m_X(t)$?
(b) What is the mean square value $E[X^2(t)]$?
(c) If this process is also ergodic, what would be the time-averaged autocorrelation $\langle n(t)n(t+\tau) \rangle$?

**Answer 3:**
(a) Since $N(t)$ is a zero-mean process, its ensemble average is $m_X(t) = E[N(t)] = 0$.
(b) The mean square value is $E[X^2(t)] = E[N^2(t)]$. For a stationary process, $E[N^2(t)]$ is constant. By definition of autocorrelation, $R_N(0) = E[N(t)N(t+0)] = E[N^2(t)]$.
Therefore, $E[X^2(t)] = R_N(0) = \sigma^2 e^{-\alpha|0|} = \sigma^2$. The mean square value is $\sigma^2$.
(c) If the process is ergodic, then the time-averaged autocorrelation equals the ensemble-averaged autocorrelation. Therefore, $\langle n(t)n(t+\tau) \rangle = R_N(\tau) = \sigma^2 e^{-\alpha|\tau|}$.

---

**Question 4:**
Consider a random process $Y(t) = 5 + X(t)$, where $X(t)$ is a zero-mean, stationary, and ergodic process with autocorrelation $R_X(\tau)$.
(a) Find the ensemble average $m_Y(t)$.
(b) Find the mean square value $E[Y^2(t)]$.
(c) Find the time-averaged autocorrelation $\langle y(t)y(t+\tau) \rangle$.

**Answer 4:**
(a) $m_Y(t) = E[Y(t)] = E[5 + X(t)] = E[5] + E[X(t)] = 5 + 0 = 5$.
(b) $E[Y^2(t)] = E[(5 + X(t))^2] = E[25 + 10X(t) + X^2(t)] = E[25] + 10E[X(t)] + E[X^2(t)]$.
Since $X(t)$ is zero-mean and stationary, $E[X(t)] = 0$ and $E[X^2(t)] = R_X(0)$.
So, $E[Y^2(t)] = 25 + 10(0) + R_X(0) = 25 + R_X(0)$.
(c) Since $X(t)$ is ergodic, $Y(t)$ is also ergodic.
$\langle y(t)y(t+\tau) \rangle = E[Y(t)Y(t+\tau)]$
$= E[(5 + X(t))(5 + X(t+\tau))]$
$= E[25 + 5X(t+\tau) + 5X(t) + X(t)X(t+\tau)]$
$= E[25] + 5E[X(t+\tau)] + 5E[X(t)] + E[X(t)X(t+\tau)]$
$= 25 + 5(0) + 5(0) + R_X(\tau)$
$= 25 + R_X(\tau)$.
The time-averaged autocorrelation is $25 + R_X(\tau)$.

---
