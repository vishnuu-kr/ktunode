---
title: "Cumulative distribution function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4c1"
status: "completed"
scrapedAt: "2026-05-23T17:50:41.603Z"
---
# Mathematics for Electrical Science – 4

## Module 2: Continuous Random Variables and their Probability Distributions

### Topic: Cumulative Distribution Function (CDF)

---

**Course Outcomes Addressed:**

*   **CO2:** Describe the concept, properties and important models of continuous random variables and to apply in suitable random phenomena. (Knowledge Level: K3)

---

### 1. Introduction to Cumulative Distribution Function (CDF)

The Cumulative Distribution Function (CDF) is a fundamental concept for understanding continuous random variables. It provides a way to quantify the probability that a random variable will take on a value less than or equal to a specific value. This contrasts with the Probability Density Function (PDF), which describes the probability at a single point (though for continuous variables, this probability is technically zero, and the PDF represents the *density* of probability).

**Key Idea:** The CDF "accumulates" probability from the left towards a given point.

---

### 2. Definition of CDF for Continuous Random Variables

Let $X$ be a continuous random variable. The Cumulative Distribution Function, denoted by $F_X(x)$, is defined as:

$F_X(x) = P(X \le x)$

where:
*   $P$ denotes probability.
*   $X$ is the continuous random variable.
*   $x$ is any real number, representing a specific value or threshold.

**In simpler terms:** $F_X(x)$ is the probability that the random variable $X$ will have a value of $x$ or less.

**Reference:** This definition aligns with the foundational concepts presented in **Devore (2016), Chapter 3** and **Veerarajan (2008), Chapter 4**.

---

### 3. Properties of the Cumulative Distribution Function (CDF)

The CDF of a continuous random variable possesses several important properties:

*   **Non-decreasing:** For any $x_1 < x_2$, $F_X(x_1) \le F_X(x_2)$.
    *   **Explanation:** As the threshold $x$ increases, the accumulated probability can only stay the same or increase; it can never decrease. This is intuitive because if you consider a larger upper bound, you are including all the probabilities from the smaller bound plus potentially more.
    *   **Textbook Insight:** Both **Devore (2016)** and **Veerarajan (2008)** emphasize this property as a direct consequence of how probability accumulates.

*   **Limits:**
    *   $\lim_{x \to -\infty} F_X(x) = 0$
        *   **Explanation:** As the threshold approaches negative infinity, the probability that $X$ is less than or equal to this value becomes zero, as there's no probability in the extreme negative tail of the distribution.
    *   $\lim_{x \to \infty} F_X(x) = 1$
        *   **Explanation:** As the threshold approaches positive infinity, the probability that $X$ is less than or equal to this value approaches one, meaning the entire probability mass of the distribution is covered.
    *   **Textbook Insight:** These limiting behaviors are crucial for defining the boundaries of the probability space for continuous random variables, as discussed in **Papoulis & Pillai (2002), Chapter 4**.

*   **Right-Continuity:** $F_X(x)$ is right-continuous. This means $F_X(x) = \lim_{h \to 0^+} F_X(x+h)$.
    *   **Explanation:** For continuous random variables, the probability at a single point is zero, so the CDF is continuous at every point. The right-continuity is a more general property that holds for any random variable (discrete, continuous, or mixed).
    *   **Textbook Insight:** While often stated implicitly for continuous RVs, the concept of continuity is central to their treatment in **Ross (2020), Chapter 2**.

*   **Probability of an Interval:** The CDF can be used to calculate the probability that $X$ falls within a specific interval $(a, b]$:
    $P(a < X \le b) = F_X(b) - F_X(a)$

    *   **Explanation:** This is derived from the property $F_X(b) = P(X \le b) = P(X \le a) + P(a < X \le b)$. Rearranging gives the desired formula.
    *   **Example:** If $F_X(x) = x^2$ for $0 \le x \le 1$, then $P(0.2 < X \le 0.5) = F_X(0.5) - F_X(0.2) = (0.5)^2 - (0.2)^2 = 0.25 - 0.04 = 0.21$.
    *   **Textbook Insight:** This is a direct application of the CDF and is a core feature discussed in **Devore (2016)** and **Veerarajan (2008)** for calculating probabilities of events.

*   **Relationship with Probability Density Function (PDF):** If $X$ is a continuous random variable with PDF $f_X(x)$, then its CDF is given by:
    $F_X(x) = \int_{-\infty}^{x} f_X(t) dt$

    *   **Explanation:** This integral sums up the probability densities from negative infinity up to $x$, effectively accumulating the probability.
    *   **Example:** If $f_X(x) = 2x$ for $0 \le x \le 1$ and $0$ otherwise, then $F_X(x) = \int_{0}^{x} 2t dt = [t^2]_0^x = x^2$ for $0 \le x \le 1$.
    *   **Textbook Insight:** This integral relationship is fundamental and forms the basis for converting between PDFs and CDFs, a key topic in **Palaniammal (2015), Chapter 3** and **Anderson & Benedek (2017), Chapter 5**.

*   **Reversing the Relationship (using the Fundamental Theorem of Calculus):** If $F_X(x)$ is differentiable, then its derivative is the PDF:
    $f_X(x) = \frac{d}{dx} F_X(x)$

    *   **Explanation:** The rate at which the cumulative probability increases at a point $x$ is precisely the probability density at that point.
    *   **Example:** If $F_X(x) = x^2$ for $0 \le x \le 1$, then $f_X(x) = \frac{d}{dx}(x^2) = 2x$ for $0 \le x \le 1$.
    *   **Textbook Insight:** This inverse relationship is a direct application of calculus and is thoroughly covered in **Ross (2020)** and **Veerarajan (2008)**.

---

### 4. Examples of CDFs

**Example 1: Uniform Distribution**

Let $X$ be a continuous random variable uniformly distributed over the interval $[a, b]$.
Its PDF is $f_X(x) = \frac{1}{b-a}$ for $a \le x \le b$, and $0$ otherwise.

The CDF is calculated as:
$F_X(x) = \int_{-\infty}^{x} f_X(t) dt$

*   For $x < a$: $F_X(x) = \int_{-\infty}^{x} 0 \, dt = 0$
*   For $a \le x \le b$: $F_X(x) = \int_{-\infty}^{a} 0 \, dt + \int_{a}^{x} \frac{1}{b-a} \, dt = 0 + \frac{1}{b-a} [t]_{a}^{x} = \frac{x-a}{b-a}$
*   For $x > b$: $F_X(x) = \int_{-\infty}^{a} 0 \, dt + \int_{a}^{b} \frac{1}{b-a} \, dt + \int_{b}^{x} 0 \, dt = 0 + \frac{b-a}{b-a} + 0 = 1$

So, the CDF of a uniform distribution on $[a, b]$ is:
$$ F_X(x) = \begin{cases} 0 & x < a \\ \frac{x-a}{b-a} & a \le x \le b \\ 1 & x > b \end{cases} $$

**Example of use:** If voltage $V$ is uniformly distributed between 0V and 5V, $V \sim U(0, 5)$.
The CDF is $F_V(v) = \frac{v}{5}$ for $0 \le v \le 5$.
The probability that the voltage is between 1V and 3V is:
$P(1 < V \le 3) = F_V(3) - F_V(1) = \frac{3}{5} - \frac{1}{5} = \frac{2}{5} = 0.4$.
This aligns with **Devore (2016), Section 3.3**.

**Example 2: Exponential Distribution**

Let $X$ be an exponentially distributed random variable with rate parameter $\lambda > 0$.
Its PDF is $f_X(x) = \lambda e^{-\lambda x}$ for $x \ge 0$, and $0$ otherwise.

The CDF is calculated as:
$F_X(x) = \int_{-\infty}^{x} f_X(t) dt$

*   For $x < 0$: $F_X(x) = \int_{-\infty}^{x} 0 \, dt = 0$
*   For $x \ge 0$: $F_X(x) = \int_{-\infty}^{0} 0 \, dt + \int_{0}^{x} \lambda e^{-\lambda t} \, dt = 0 + \lambda \left[ \frac{e^{-\lambda t}}{-\lambda} \right]_0^x = [-e^{-\lambda t}]_0^x = -e^{-\lambda x} - (-e^0) = 1 - e^{-\lambda x}$

So, the CDF of an exponential distribution with rate $\lambda$ is:
$$ F_X(x) = \begin{cases} 0 & x < 0 \\ 1 - e^{-\lambda x} & x \ge 0 \end{cases} $$

**Example of use:** The time between arrivals of customers at a service station follows an exponential distribution with a mean of 5 minutes ($\lambda = 1/5 = 0.2$).
The CDF is $F_X(x) = 1 - e^{-0.2x}$ for $x \ge 0$.
The probability that the time between arrivals is less than 10 minutes:
$P(X \le 10) = F_X(10) = 1 - e^{-0.2 \times 10} = 1 - e^{-2} \approx 1 - 0.1353 = 0.8647$.
This is a classic example found in **Veerarajan (2008), Section 4.5**.

---

### 5. Applications in Electrical Science

The CDF is invaluable in electrical engineering for modeling and analyzing various phenomena:

*   **Reliability Engineering:** The CDF of the lifetime of a component (e.g., a capacitor, transistor) represents the probability that the component will fail by time $t$. This is directly modeled by distributions like the exponential or Weibull.
    *   **Insight:** If $T$ is the lifetime of a component, $F_T(t) = P(T \le t)$ is the probability of failure by time $t$. $1 - F_T(t)$ is the reliability function (probability of survival).
    *   **Reference:** **Devore (2016), Chapter 3** and **Palaniammal (2015)** often use examples related to component lifetimes.

*   **Signal Processing:** Analyzing the distribution of signal amplitudes or noise levels. The CDF can tell us the probability of a signal exceeding a certain threshold, which is crucial for designing detection systems.
    *   **Example:** For a Gaussian noise signal $N$, $F_N(n) = P(N \le n)$. If we need to detect a signal, we might set a threshold $n_0$. The CDF helps determine the probability of false alarms ($P(N > n_0)$) or missed detections.
    *   **Reference:** **Papoulis & Pillai (2002)** extensively cover signal analysis, where CDFs are implicitly used in characterizing noise and signal properties.

*   **System Performance:** Evaluating the probability that a system parameter (e.g., voltage, current, frequency) stays within acceptable operating limits.
    *   **Example:** If the output voltage of a power supply $V_{out}$ has a CDF $F_{V_{out}}(v)$, then $P(V_{min} \le V_{out} \le V_{max}) = F_{V_{out}}(V_{max}) - F_{V_{out}}(V_{min})$.

*   **Queueing Theory (in communication systems):** The CDF can describe the distribution of waiting times for data packets in a buffer.

---

### 6. Practice Questions and Exercises

**Question 1:**
Let $X$ be a continuous random variable with the CDF $F_X(x) = \frac{x^2}{4}$ for $0 \le x \le 2$, and $F_X(x) = 0$ for $x < 0$ and $F_X(x) = 1$ for $x > 2$.
a) What is the probability $P(0.5 < X \le 1.5)$?
b) Find the probability density function (PDF) $f_X(x)$.
c) Verify that $f_X(x)$ is a valid PDF.

**Solution 1:**
a) $P(0.5 < X \le 1.5) = F_X(1.5) - F_X(0.5) = \frac{(1.5)^2}{4} - \frac{(0.5)^2}{4} = \frac{2.25}{4} - \frac{0.25}{4} = \frac{2.00}{4} = 0.5$.

b) To find the PDF, we differentiate the CDF:
For $0 < x < 2$: $f_X(x) = \frac{d}{dx} \left(\frac{x^2}{4}\right) = \frac{2x}{4} = \frac{x}{2}$.
So, $f_X(x) = \begin{cases} \frac{x}{2} & 0 < x < 2 \\ 0 & \text{otherwise} \end{cases}$.

c) To verify it's a valid PDF:
*   $f_X(x) \ge 0$ for all $x$. (Since $x/2 \ge 0$ for $0 < x < 2$).
*   $\int_{-\infty}^{\infty} f_X(x) dx = \int_{0}^{2} \frac{x}{2} dx = \left[\frac{x^2}{4}\right]_0^2 = \frac{2^2}{4} - \frac{0^2}{4} = \frac{4}{4} - 0 = 1$.
Both conditions are met, so it's a valid PDF.

**Question 2:**
The time to failure (in hours) of a certain electronic component is exponentially distributed with a mean time between failures of 1000 hours.
a) Find the CDF of the failure time.
b) What is the probability that a component fails before 500 hours?
c) What is the probability that a component survives for more than 1000 hours?

**Solution 2:**
The mean of an exponential distribution is $1/\lambda$. So, $1/\lambda = 1000$ hours, which means $\lambda = 1/1000 = 0.001$.

a) The CDF of an exponential distribution is $F_X(x) = 1 - e^{-\lambda x}$ for $x \ge 0$.
Substituting $\lambda = 0.001$: $F_X(x) = 1 - e^{-0.001x}$ for $x \ge 0$.

b) Probability of failing before 500 hours is $P(X \le 500)$:
$P(X \le 500) = F_X(500) = 1 - e^{-0.001 \times 500} = 1 - e^{-0.5} \approx 1 - 0.6065 = 0.3935$.

c) Probability of surviving for more than 1000 hours is $P(X > 1000)$:
$P(X > 1000) = 1 - P(X \le 1000) = 1 - F_X(1000)$.
$F_X(1000) = 1 - e^{-0.001 \times 1000} = 1 - e^{-1} \approx 1 - 0.3679 = 0.6321$.
So, $P(X > 1000) = 1 - (1 - e^{-1}) = e^{-1} \approx 0.3679$.
This demonstrates the memoryless property of the exponential distribution.

---

### 7. Important Points to Remember

*   The CDF $F_X(x)$ is the probability that a random variable $X$ takes a value *less than or equal to* $x$.
*   **$F_X(x)$ is always between 0 and 1.**
*   **$F_X(x)$ is non-decreasing.**
*   **$F_X(x)$ approaches 0 as $x \to -\infty$ and 1 as $x \to \infty$.**
*   The probability of $X$ falling in an interval $(a, b]$ is $F_X(b) - F_X(a)$.
*   The PDF is the derivative of the CDF, and the CDF is the integral of the PDF. This is a critical relationship.
*   The CDF uniquely determines the distribution of a random variable.

---

### 8. Conclusion

The Cumulative Distribution Function (CDF) is a powerful tool for understanding and working with continuous random variables. Its properties and its direct relationship with the Probability Density Function (PDF) make it essential for calculating probabilities of events, analyzing system behavior, and modeling various phenomena in electrical science and engineering. Mastery of the CDF is key to building a strong foundation in probability and statistics for this field.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
