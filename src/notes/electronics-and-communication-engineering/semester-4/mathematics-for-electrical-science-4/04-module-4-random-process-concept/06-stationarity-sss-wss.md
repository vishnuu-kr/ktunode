---
title: "Stationarity- SSS, WSS"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 4: Random process concept"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4d9"
status: "completed"
scrapedAt: "2026-05-23T17:50:57.076Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 4: Random Process Concept

### Topic: Stationarity - SSS, WSS

---

### **1. Introduction to Random Processes**

*   **Definition:** A **random process** (or stochastic process) is a collection of random variables indexed by time (or sometimes another parameter like space). Think of it as a signal whose value at any given time is uncertain, but the entire process evolves according to probabilistic rules.
    *   Notation: $\{X(t), t \in T\}$, where $T$ is the index set (usually time).
    *   **Realization/Sample Function:** For a given outcome of the underlying random experiment, we get a specific sequence of values over time, which is called a realization or sample function of the random process.

*   **Importance in Electrical Science:** Random processes are crucial for modeling and analyzing:
    *   Communication signals (noise, fading).
    *   Control systems (sensor noise, disturbances).
    *   Signal processing (filtering, estimation).
    *   Electrical noise in circuits.

*   **Relationship to Random Variables:** A random process can be viewed as a collection of random variables, where each random variable $X(t)$ represents the value of the process at a specific time $t$.

---

### **2. Types of Random Processes**

While not directly the focus of stationarity, understanding different types helps contextualize it:

*   **Discrete-Time vs. Continuous-Time:**
    *   **Discrete-Time:** The index set $T$ is discrete (e.g., $T = \{0, 1, 2, \dots\}$). Example: Sampled digital signals.
    *   **Continuous-Time:** The index set $T$ is continuous (e.g., $T = [0, \infty)$). Example: Analog signals, thermal noise.

*   **Discrete-State vs. Continuous-State:**
    *   **Discrete-State:** The random variables $X(t)$ take values from a countable set. Example: Number of arrivals at a queue.
    *   **Continuous-State:** The random variables $X(t)$ take values from a continuous set. Example: Voltage, temperature.

---

### **3. Stationarity: The Core Concept**

Stationarity describes random processes whose statistical properties do not change over time. This simplifies analysis significantly, as we can infer properties from any part of the process.

#### **3.1. Strict-Sense Stationarity (SSS)**

*   **Definition:** A random process $\{X(t), t \in T\}$ is **Strict-Sense Stationary (SSS)** if its statistical properties are invariant under time shifts. This means the joint distribution of any set of random variables $\{X(t_1), X(t_2), \dots, X(t_n)\}$ is the same as the joint distribution of $\{X(t_1+h), X(t_2+h), \dots, X(t_n+h)\}$ for any $n$, any set of times $\{t_1, \dots, t_n\}$, and any time shift $h$ (provided the shifted times are within the index set $T$).

*   **Implications:**
    *   The probability distribution of the process is the same at all time points.
    *   The joint probability distributions are time-invariant.

*   **Practicality:** Proving SSS is very difficult in practice because it requires knowing the entire joint distribution functions, which are often unknown.

*   **Reference:** Devore (9th ed.) often discusses stationarity in the context of time series analysis, where SSS implies that the underlying probabilistic structure remains constant. Papoulis & Pillai (4th ed.) provide a rigorous mathematical foundation for SSS.

#### **3.2. Weak-Sense Stationarity (WSS) / Second-Order Stationarity**

*   **Definition:** A random process $\{X(t), t \in T\}$ is **Weak-Sense Stationary (WSS)** if:
    1.  The mean function $E[X(t)]$ is constant for all $t \in T$.
    2.  The autocorrelation function $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$ depends only on the time difference $\tau = t_2 - t_1$, i.e., $R_X(t_1, t_2) = R_X(\tau)$.

*   **Key Components of WSS:**

    *   **Constant Mean:**
        *   $E[X(t)] = \mu$ (a constant) for all $t$.
        *   This means the average value of the process does not change over time.

    *   **Autocorrelation Function:**
        *   $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$.
        *   For a WSS process, $R_X(t_1, t_2)$ can be expressed as $R_X(\tau)$, where $\tau = t_2 - t_1$.
        *   **Autocovariance Function:** $C_X(t_1, t_2) = \text{Cov}(X(t_1), X(t_2)) = E[(X(t_1) - \mu)(X(t_2) - \mu)] = R_X(t_1, t_2) - \mu^2$.
        *   For a WSS process, $C_X(t_1, t_2) = C_X(\tau) = R_X(\tau) - \mu^2$.
        *   The autocovariance at $\tau=0$ is the variance: $C_X(0) = \text{Var}(X(t)) = R_X(0) - \mu^2$. This variance must also be constant over time.

*   **Relationship between SSS and WSS:**
    *   **SSS implies WSS.** If a process is strictly stationary, its mean and autocovariance functions will necessarily be time-invariant.
    *   **WSS does not imply SSS.** A process can have a constant mean and an autocorrelation that depends only on the time difference, but its higher-order joint distributions might still change with time.

*   **Practicality:** WSS is much easier to check than SSS. We usually only need to verify the first and second moments (mean and autocorrelation).

*   **Reference:**
    *   **Devore (9th ed.):** Discusses stationarity as a property that simplifies time series analysis, often focusing on WSS properties like constant mean and autocovariance.
    *   **Veerarajan (3rd ed.):** Provides clear definitions and examples of WSS processes, often demonstrating how to calculate the mean and autocorrelation to confirm WSS properties.
    *   **Ross (6th ed.):** Might present WSS in the context of analyzing physical phenomena where time-invariance of basic statistical properties is assumed.
    *   **Papoulis & Pillai (4th ed.):** Offers a rigorous treatment of WSS, linking it to spectral properties.

---

### **4. Properties of WSS Processes**

Let $\{X(t)\}$ be a WSS process with mean $\mu$ and autocorrelation $R_X(\tau)$.

*   **Autocorrelation at $\tau=0$:**
    *   $R_X(0) = E[X(t)X(t)] = E[X^2(t)]$.
    *   Since $E[X(t)] = \mu$ is constant, $E[X^2(t)]$ must also be constant.
    *   $R_X(0) = \text{Var}(X(t)) + (E[X(t)])^2 = \sigma^2 + \mu^2$, where $\sigma^2$ is the constant variance of the process.

*   **Autocorrelation is an Even Function:**
    *   $R_X(\tau) = E[X(t)X(t+\tau)]$
    *   $R_X(-\tau) = E[X(t)X(t-\tau)]$
    *   Let $u = t - \tau$. Then $t = u + \tau$.
    *   $R_X(-\tau) = E[X(u+\tau)X(u)] = R_X(\tau)$.
    *   Thus, $R_X(\tau)$ is an even function of $\tau$.

*   **Maximum Value of Autocorrelation:**
    *   $|R_X(\tau)| \leq R_X(0)$ for all $\tau$.
    *   This comes from the Cauchy-Schwarz inequality: $|E[XY]| \leq \sqrt{E[X^2]}\sqrt{E[Y^2]}$.
    *   Let $Y = X(t+\tau)$. Then $|E[X(t)X(t+\tau)]| \leq \sqrt{E[X^2(t)]}\sqrt{E[X^2(t+\tau)]}$.
    *   Since the process is WSS, $E[X^2(t)] = E[X^2(t+\tau)] = R_X(0)$.
    *   So, $|R_X(\tau)| \leq \sqrt{R_X(0)}\sqrt{R_X(0)} = R_X(0)$.

---

### **5. Examples of Random Processes and Stationarity**

#### **Example 1: A Constant Process**

*   Let $X(t) = c$, where $c$ is a random variable.
*   **Mean:** $E[X(t)] = E[c]$. Let $E[c] = \mu$. This is constant for all $t$.
*   **Autocorrelation:** $R_X(t_1, t_2) = E[X(t_1)X(t_2)] = E[c \cdot c] = E[c^2]$. Let $E[c^2] = K$. This is constant.
*   **WSS?** Yes, if $E[c]$ and $E[c^2]$ exist.
*   **SSS?** Yes. If $X(t)=c$, the joint distribution of $\{X(t_1), \dots, X(t_n)\}$ is just the distribution of $\{c, \dots, c\}$, which is the same as $\{c, \dots, c\}$ shifted by $h$.

#### **Example 2: A Sinusoidal Process with Random Phase**

*   Let $X(t) = A \cos(\omega_0 t + \Phi)$, where $A$ and $\omega_0$ are constants, and $\Phi$ is a random variable uniformly distributed over $[0, 2\pi]$.
*   **Mean:** $E[X(t)] = E[A \cos(\omega_0 t + \Phi)]$.
    *   Assuming $A$ is constant, $E[X(t)] = A \int_{0}^{2\pi} \cos(\omega_0 t + \phi) \frac{1}{2\pi} d\phi$.
    *   The integral of $\cos$ over a full period is zero. So, $E[X(t)] = 0$. This is constant.
*   **Autocorrelation:** $R_X(t_1, t_2) = E[X(t_1)X(t_2)] = E[A \cos(\omega_0 t_1 + \Phi) \cdot A \cos(\omega_0 t_2 + \Phi)]$.
    *   $R_X(t_1, t_2) = A^2 E[\cos(\omega_0 t_1 + \Phi) \cos(\omega_0 t_2 + \Phi)]$.
    *   Using the product-to-sum formula $2 \cos A \cos B = \cos(A-B) + \cos(A+B)$:
    *   $R_X(t_1, t_2) = \frac{A^2}{2} E[\cos(\omega_0(t_1-t_2)) + \cos(\omega_0(t_1+t_2) + 2\Phi)]$.
    *   Since $\Phi$ is uniform on $[0, 2\pi]$, $E[\cos(\omega_0(t_1+t_2) + 2\Phi)] = 0$.
    *   $R_X(t_1, t_2) = \frac{A^2}{2} \cos(\omega_0(t_1-t_2))$.
    *   This depends only on $\tau = t_2 - t_1$. Let $\tau = t_2 - t_1$.
    *   $R_X(\tau) = \frac{A^2}{2} \cos(\omega_0 \tau)$.
*   **WSS?** Yes. Mean is 0, and autocorrelation depends only on the time difference.
*   **SSS?** No. The higher-order distributions depend on the phase, which changes the shape of the sample functions, even if the mean and autocorrelation are constant. For instance, the distribution of $X(t_1)$ is different from $X(t_1+h)$.

#### **Example 3: White Noise (Idealized)**

*   **Definition:** A continuous-time random process $\{W(t)\}$ is called **ideal white noise** if its mean is zero and its autocorrelation is a Dirac delta function:
    *   $E[W(t)] = 0$ for all $t$.
    *   $R_W(\tau) = E[W(t)W(t+\tau)] = \sigma^2 \delta(\tau)$, where $\sigma^2$ is the power spectral density (PSD) and $\delta(\tau)$ is the Dirac delta function.
*   **WSS?** Yes. Mean is 0, and autocorrelation depends only on $\tau$.
*   **SSS?** No. Ideal white noise is a theoretical construct. Its instantaneous values $W(t)$ are uncorrelated for $t \neq t+\tau$. For SSS, we need the entire joint distribution to be time-invariant.

*   **Reference:** Veerarajan (3rd ed.) and Papoulis & Pillai (4th ed.) are excellent sources for understanding the properties and importance of white noise in signal processing.

#### **Example 4: A Random Walk**

*   Let $X_n = \sum_{i=1}^n U_i$, where $U_i$ are independent random variables with $E[U_i] = 0$ and $\text{Var}(U_i) = \sigma^2$. This is a discrete-time process.
*   **Mean:** $E[X_n] = \sum_{i=1}^n E[U_i] = 0$. Constant.
*   **Autocorrelation:** $R_{X_n, X_m} = E[X_n X_m]$. Assume $n \leq m$.
    *   $E[X_n X_m] = E[(\sum_{i=1}^n U_i)(\sum_{j=1}^m U_j)] = E[\sum_{i=1}^n \sum_{j=1}^m U_i U_j]$.
    *   Since $U_i$ are independent and $E[U_i]=0$, $E[U_i U_j] = 0$ for $i \neq j$.
    *   $E[X_n X_m] = \sum_{i=1}^n \sum_{j=1}^m E[U_i U_j] = \sum_{i=1}^n E[U_i^2] = n \sigma^2$.
*   **WSS?** No. The autocorrelation $n\sigma^2$ depends on $n$ (and $m$). It is not of the form $R_X(n-m)$. The variance of $X_n$ is $n\sigma^2$, which also changes with $n$.

---

### **6. Stationarity and Course Outcomes Alignment**

*   **CO1 & CO2 (Discrete/Continuous Random Variables):** Stationarity concepts are applied to random processes, which are collections of random variables. The mean and autocorrelation are statistical properties of these random variables, directly linking to the understanding of their distributions.
*   **CO3 (Parameter Estimation, Confidence Intervals, Hypothesis Testing):** While CO3 focuses on static populations, the statistical properties of stationary random processes (mean, variance) are essential for estimating parameters of these processes. For example, estimating the mean of a WSS process using its sample mean.
*   **CO4 (Analyze random processes, properties, autocorrelation, applications):** This CO is directly addressed by the topic of stationarity.
    *   **Classifying them:** Stationarity is a key classification property.
    *   **Describing their properties:** Mean and autocorrelation are fundamental properties.
    *   **Utilizing autocorrelation functions:** WSS definition relies heavily on the autocorrelation function depending only on the time difference.
    *   **Understanding their applications:** Stationarity is a simplifying assumption that makes many analysis techniques (like filtering, spectral analysis) tractable in signal processing and communication systems. For example, designing a filter for a WSS signal.

---

### **7. Important Points to Remember**

*   **SSS** means all statistical properties (joint distributions) are time-invariant. Very strict and hard to prove.
*   **WSS** means only the mean and autocorrelation are time-invariant. Easier to check.
*   **SSS implies WSS**, but **WSS does not imply SSS**.
*   For a WSS process:
    *   $E[X(t)] = \mu$ (constant).
    *   $R_X(t_1, t_2) = R_X(\tau)$ where $\tau = t_2 - t_1$.
    *   $R_X(0) = E[X^2(t)]$ = constant (variance + mean squared).
    *   $R_X(\tau) = R_X(-\tau)$ (even function).
    *   $|R_X(\tau)| \leq R_X(0)$ (bounded by the power).
*   Stationarity is a crucial simplifying assumption in the analysis of many electrical systems.

---

### **8. Practice Questions and Exercises**

**Question 1:**
A random process is defined as $X(t) = 5 + N(t)$, where $N(t)$ is a random process with $E[N(t)] = 0$ and $R_N(\tau) = 4e^{-| \tau |}$. Determine if $X(t)$ is WSS. If it is, find its mean and autocorrelation function.

**Solution 1:**
*   **Mean of $X(t)$:**
    $E[X(t)] = E[5 + N(t)] = 5 + E[N(t)] = 5 + 0 = 5$.
    The mean is a constant (5).
*   **Autocorrelation of $X(t)$:**
    $R_X(t_1, t_2) = E[X(t_1)X(t_2)] = E[(5 + N(t_1))(5 + N(t_2))]$
    $R_X(t_1, t_2) = E[25 + 5N(t_1) + 5N(t_2) + N(t_1)N(t_2)]$
    $R_X(t_1, t_2) = 25 + 5E[N(t_1)] + 5E[N(t_2)] + E[N(t_1)N(t_2)]$
    Since $E[N(t)] = 0$ for all $t$, we get:
    $R_X(t_1, t_2) = 25 + 0 + 0 + R_N(t_2 - t_1)$
    Given $R_N(\tau) = 4e^{-| \tau |}$, then $R_N(t_2 - t_1) = 4e^{-|t_2 - t_1|}$.
    So, $R_X(t_1, t_2) = 25 + 4e^{-|t_2 - t_1|}$.
*   **Conclusion:**
    Let $\tau = t_2 - t_1$. Then $R_X(t_1, t_2) = 25 + 4e^{-| \tau |}$.
    The mean is constant (5) and the autocorrelation function depends only on the time difference $\tau$. Therefore, $X(t)$ is WSS.
    *   Mean: $\mu = 5$
    *   Autocorrelation: $R_X(\tau) = 25 + 4e^{-| \tau |}$

---

**Question 2:**
Consider the random process $X(t) = \cos(t) + U$, where $U$ is a random variable with $E[U] = 0$ and $E[U^2] = \sigma_U^2$. Is $X(t)$ WSS? Justify your answer.

**Solution 2:**
*   **Mean of $X(t)$:**
    $E[X(t)] = E[\cos(t) + U] = \cos(t) + E[U] = \cos(t) + 0 = \cos(t)$.
    The mean $E[X(t)]$ is $\cos(t)$, which depends on time $t$.
*   **Conclusion:**
    Since the mean function $E[X(t)]$ is not constant, the process $X(t)$ is **not WSS**.

---

**Question 3:**
Let $Y(t) = A \sin(\omega_0 t + \Theta)$, where $A$ and $\omega_0$ are constants, and $\Theta$ is a random variable uniformly distributed on $[0, 2\pi]$. Assume $A$ is a constant. Is $Y(t)$ WSS?

**Solution 3:**
*   **Mean of $Y(t)$:**
    $E[Y(t)] = E[A \sin(\omega_0 t + \Theta)] = A \int_0^{2\pi} \sin(\omega_0 t + \theta) \frac{1}{2\pi} d\theta$.
    The integral of a sine function over a full period ($2\pi$) is zero. Thus, $E[Y(t)] = 0$, which is a constant.
*   **Autocorrelation of $Y(t)$:**
    $R_Y(t_1, t_2) = E[Y(t_1)Y(t_2)] = E[A \sin(\omega_0 t_1 + \Theta) \cdot A \sin(\omega_0 t_2 + \Theta)]$
    $R_Y(t_1, t_2) = A^2 E[\sin(\omega_0 t_1 + \Theta) \sin(\omega_0 t_2 + \Theta)]$
    Using the product-to-sum formula: $2 \sin A \sin B = \cos(A-B) - \cos(A+B)$
    $R_Y(t_1, t_2) = \frac{A^2}{2} E[\cos((\omega_0 t_1 + \Theta) - (\omega_0 t_2 + \Theta)) - \cos((\omega_0 t_1 + \Theta) + (\omega_0 t_2 + \Theta))]$
    $R_Y(t_1, t_2) = \frac{A^2}{2} E[\cos(\omega_0 (t_1 - t_2)) - \cos(\omega_0 (t_1 + t_2) + 2\Theta)]$
    Since $\Theta$ is uniform on $[0, 2\pi]$, $E[\cos(\omega_0 (t_1 + t_2) + 2\Theta)] = 0$.
    $R_Y(t_1, t_2) = \frac{A^2}{2} \cos(\omega_0 (t_1 - t_2))$.
    Let $\tau = t_2 - t_1$. Then $R_Y(t_1, t_2) = \frac{A^2}{2} \cos(\omega_0 (-\tau)) = \frac{A^2}{2} \cos(\omega_0 \tau)$.
*   **Conclusion:**
    The mean is constant (0), and the autocorrelation function depends only on the time difference $\tau$. Therefore, $Y(t)$ is **WSS**.
    *   Mean: $\mu = 0$
    *   Autocorrelation: $R_Y(\tau) = \frac{A^2}{2} \cos(\omega_0 \tau)$

---

This concludes the study notes on Stationarity (SSS, WSS) for Module 4. Remember to review the relevant chapters in your textbooks for a deeper understanding and more examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
