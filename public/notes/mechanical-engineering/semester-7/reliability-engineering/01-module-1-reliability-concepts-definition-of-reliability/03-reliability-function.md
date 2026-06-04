---
title: "Reliability function"
subject: "RELIABILITY ENGINEERING"
module: "Module 1: Reliability Concepts: Definition of reliability"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e3e"
status: "completed"
scrapedAt: "2026-05-20T18:17:45.491Z"
---
# Reliability Engineering: Module 1 - Reliability Concepts: Definition of Reliability - Reliability Function

This module introduces the fundamental concept of reliability and delves into the mathematical representation of reliability through the reliability function. Understanding these foundational elements is crucial for predicting, analyzing, and improving the dependability of engineering systems.

## 1.1 Definition of Reliability

**Definition:** Reliability is the probability that a product, system, or component will perform its intended function without failure for a specified period of time under stated conditions.

**Key Aspects of the Definition:**

*   **Probability:** Reliability is inherently a probabilistic measure. It quantifies the likelihood of success.
*   **Intended Function:** The system must perform its designed task correctly.
*   **Specified Period of Time:** Reliability is always associated with a duration. A system might be reliable for an hour but not for a year.
*   **Stated Conditions:** Environmental factors, operating loads, maintenance schedules, and usage patterns significantly influence reliability.

**Course Outcome Alignment:** CO1 (Explain various modes of failure and basic concepts of reliability - K2)

### 1.1.1 Modes of Failure

Understanding how failures occur is fundamental to reliability. Failures can manifest in various ways, often categorized as:

*   **Sudden/Catastrophic Failures:** Occur abruptly without prior warning.
    *   *Examples:* Mechanical fracture, electrical short circuit, blowout of a tire.
*   **Gradual/Wear-out Failures:** Occur due to the accumulation of damage over time, leading to a progressive decline in performance.
    *   *Examples:* Wear of moving parts, fatigue of materials, degradation of electronic components due to heat.
*   **Infant Mortality Failures:** Occur early in the life of a product, often due to manufacturing defects, material flaws, or design errors. These are typically corrected through burn-in testing.
    *   *Examples:* Weak solder joints, microscopic cracks in materials, incorrect assembly.
*   **Random Failures:** Occur at any point in the useful life of a product, typically due to unpredictable external factors or internal variations.
    *   *Examples:* Power surges damaging electronic components, unexpected mechanical stress, operator error.

**Reference:** Balagurusamy (2017) often discusses failure modes in the context of system design and analysis. Srinath (2005) also provides detailed insights into different failure mechanisms.

## 1.2 The Reliability Function

The reliability function, denoted by $R(t)$, mathematically describes the probability that a component or system will survive (i.e., not fail) up to a given time $t$.

**Definition:** The reliability function $R(t)$ is the probability that a device will function correctly at time $t$ without failure.

$$R(t) = P(\text{T} > t)$$

Where:
*   $R(t)$ is the reliability at time $t$.
*   $T$ is the random variable representing the time to failure (also known as the lifetime).
*   $P(\cdot)$ denotes the probability.

**Key Properties of the Reliability Function:**

1.  **Non-increasing:** Reliability can only decrease or stay the same over time. It never increases.
    $$R(t_1) \ge R(t_2) \text{ if } t_1 \le t_2$$
2.  **Boundary Conditions:**
    *   At time $t=0$, the probability of survival is 1 (assuming the system starts in a working state).
        $$R(0) = 1$$
    *   As time approaches infinity, the probability of survival approaches 0 (assuming failures are inevitable).
        $$\lim_{t \to \infty} R(t) = 0$$

**Relationship with the Cumulative Distribution Function (CDF):**

The reliability function is directly related to the Cumulative Distribution Function (CDF) of the time to failure, $F(t)$. The CDF, $F(t)$, is the probability that the system fails at or before time $t$.

$$F(t) = P(\text{T} \le t)$$

Since failure and survival are complementary events, the reliability function is the complement of the CDF:

$$R(t) = 1 - F(t)$$

**Reference:** Chandrupatla (2009) and Srinath (2005) provide extensive coverage of the reliability function and its relationship with the CDF.

### 1.2.1 Probability Density Function (PDF) of Time to Failure

The Probability Density Function (PDF), denoted by $f(t)$, describes the rate of failure at a specific time $t$. It is the derivative of the CDF.

$$f(t) = \frac{dF(t)}{dt}$$

The reliability function can also be expressed in terms of the PDF:

$$R(t) = \int_{t}^{\infty} f(u) du$$

**Relationship between PDF, CDF, and Reliability Function:**

*   $F(t) = \int_{0}^{t} f(u) du$
*   $R(t) = 1 - F(t)$
*   $f(t) = -\frac{dR(t)}{dt}$

**Reference:** Balagurusamy (2017) and Lewis (2012) often use these relationships in their examples and derivations.

### 1.2.2 Hazard Rate Function (Failure Rate)

The hazard rate function, denoted by $\lambda(t)$, represents the instantaneous rate of failure at time $t$, given that the system has survived up to time $t$. It is a crucial concept for understanding how the likelihood of failure changes over the system's life.

**Definition:** The hazard rate $\lambda(t)$ is the conditional probability density of failure at time $t$, given that the item has survived up to time $t$.

$$\lambda(t) = \frac{f(t)}{R(t)}$$

**Relationship with Reliability Function:**

The reliability function can be expressed using the hazard rate function:

$$R(t) = \exp\left(-\int_{0}^{t} \lambda(u) du\right)$$

**Interpretation of Hazard Rate:**

*   **Decreasing Hazard Rate (DHR):** Occurs during the infant mortality period. Failures are more likely early on, and the rate of failure decreases as time progresses.
*   **Constant Hazard Rate (CHR):** Occurs during the useful life (or random failure) period. The probability of failure per unit time is constant, regardless of age.
*   **Increasing Hazard Rate (IHR):** Occurs during the wear-out period. As the system ages, its components degrade, leading to an increased probability of failure.

**Reference:** Ebling (2004) provides an excellent overview of the hazard rate and its significance across different life stages of a product. Naikan (2008) also elaborates on hazard rate modeling for various systems.

**Important Point to Remember:** The shape of the hazard rate function over time is often represented by the "bathtub curve," illustrating the three life stages of a product (infant mortality, useful life, wear-out).

## 1.3 Examples of Reliability Functions

The specific mathematical form of $R(t)$ depends on the underlying probability distribution of the time to failure.

### 1.3.1 Exponential Distribution

The exponential distribution is commonly used to model the reliability of components during their useful life (constant hazard rate).

*   **PDF:** $f(t) = \lambda e^{-\lambda t}$ for $t \ge 0$, where $\lambda > 0$ is the constant failure rate.
*   **CDF:** $F(t) = 1 - e^{-\lambda t}$
*   **Reliability Function:** $R(t) = 1 - F(t) = e^{-\lambda t}$

**Interpretation:** In the exponential distribution, the reliability decreases exponentially with time. The failure rate $\lambda$ represents the probability of failure per unit time.

**Example:** If a electronic component has a failure rate $\lambda = 0.01$ failures per hour, its reliability after 100 hours is:
$R(100) = e^{-0.01 \times 100} = e^{-1} \approx 0.368$
This means there is a 36.8% chance the component will survive for 100 hours.

**Reference:** All textbooks and reference books cover the exponential distribution in detail, as it's a cornerstone of reliability analysis.

### 1.3.2 Weibull Distribution

The Weibull distribution is a versatile distribution that can model all three life stages (infant mortality, useful life, and wear-out) by adjusting its shape parameter.

*   **PDF:** $f(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1} e^{-\left(\frac{t}{\eta}\right)^{\beta}}$ for $t \ge 0$, $\beta > 0$, $\eta > 0$.
    *   $\beta$ is the **shape parameter**.
    *   $\eta$ is the **scale parameter** (characteristic life, the time at which approximately 63.2% of the items have failed).
*   **Reliability Function:** $R(t) = \exp\left(-\left(\frac{t}{\eta}\right)^{\beta}\right)$

**Interpretation based on $\beta$:**

*   If $\beta < 1$: Decreasing Hazard Rate (Infant Mortality)
*   If $\beta = 1$: Constant Hazard Rate (Useful Life - becomes exponential distribution)
*   If $\beta > 1$: Increasing Hazard Rate (Wear-out)

**Example:**
*   If $\beta=0.5$, $R(t) = e^{-(t/\eta)^{-0.5}}$, which indicates infant mortality.
*   If $\beta=1$, $R(t) = e^{-t/\eta}$, which is the exponential reliability with $\lambda = 1/\eta$.
*   If $\beta=2$, $R(t) = e^{-(t/\eta)^2}$, which indicates wear-out.

**Reference:** Chandrupatla (2009) and Ebling (2004) provide thorough explanations and examples of the Weibull distribution's application in reliability engineering.

### 1.3.3 Normal Distribution (Limited Use in Reliability)

While the normal distribution is widely used in statistics, its direct application to model time-to-failure is limited because it predicts a non-zero probability of negative time-to-failure, which is physically impossible. However, it can be used as an approximation for the wear-out phase if the coefficient of variation is small.

*   **PDF:** $f(t) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{t-\mu}{\sigma}\right)^2}$ for $t \ge 0$, where $\mu$ is the mean and $\sigma$ is the standard deviation.
*   **Reliability Function:** $R(t) = 1 - \Phi\left(\frac{t-\mu}{\sigma}\right)$, where $\Phi$ is the CDF of the standard normal distribution.

**Caution:** For reliability modeling, the domain of $t$ must be non-negative. Truncated normal distributions are sometimes used to address this.

**Reference:** Srinath (2005) may discuss the limitations and specific applications of the normal distribution in reliability.

## 1.4 Important Points to Remember

*   **Reliability is a probability:** It's a number between 0 and 1.
*   **Time is a critical factor:** Reliability is always specified for a duration.
*   **Conditions matter:** Environmental and operational conditions must be defined.
*   **$R(t)$ is never increasing:** As time passes, the chance of survival can only decrease or stay the same.
*   **$R(0) = 1$:** At the start, the system is assumed to be working.
*   **The exponential distribution implies a constant failure rate ($\lambda$).**
*   **The Weibull distribution is flexible and can model different failure patterns.**
*   **The hazard rate ($\lambda(t)$) describes the instantaneous risk of failure.**

## 1.5 Practice Questions and Exercises

**Question 1:**
Define reliability and state the fundamental properties of the reliability function $R(t)$. (CO1 - K2)

**Answer:**
Reliability is the probability that a product, system, or component will perform its intended function without failure for a specified period of time under stated conditions.
Properties of $R(t)$:
1.  $0 \le R(t) \le 1$ for all $t \ge 0$.
2.  $R(0) = 1$.
3.  $R(t)$ is a non-increasing function of $t$.
4.  $\lim_{t \to \infty} R(t) = 0$.

**Question 2:**
A system has a time to failure that follows an exponential distribution with a failure rate of $\lambda = 0.05$ failures per 1000 hours.
a) Write the reliability function for this system.
b) Calculate the reliability of the system at $t = 500$ hours.
c) Calculate the reliability of the system at $t = 1000$ hours.
d) What is the probability that the system fails between 500 and 1000 hours?
(CO2 - K3)

**Answer:**
a) The reliability function for an exponential distribution is $R(t) = e^{-\lambda t}$.
Given $\lambda = 0.05$ failures per 1000 hours. To use this consistently, let's express $\lambda$ per hour:
$\lambda = 0.05 / 1000 = 0.00005$ failures/hour.
So, $R(t) = e^{-0.00005 t}$, where $t$ is in hours.

b) Reliability at $t = 500$ hours:
$R(500) = e^{-0.00005 \times 500} = e^{-0.025} \approx 0.9753$

c) Reliability at $t = 1000$ hours:
$R(1000) = e^{-0.00005 \times 1000} = e^{-0.05} \approx 0.9512$

d) The probability of failure between 500 and 1000 hours is $P(500 < T \le 1000) = F(1000) - F(500)$.
Since $F(t) = 1 - R(t)$:
$P(500 < T \le 1000) = (1 - R(1000)) - (1 - R(500))$
$P(500 < T \le 1000) = R(500) - R(1000)$
$P(500 < T \le 1000) \approx 0.9753 - 0.9512 = 0.0241$
Alternatively, using the probability of survival:
$P(500 < T \le 1000) = P(T > 500) - P(T > 1000) = R(500) - R(1000)$
$P(500 < T \le 1000) \approx 0.9753 - 0.9512 = 0.0241$
This means there is approximately a 2.41% chance the system will fail between 500 and 1000 hours.

**Question 3:**
A system's reliability is described by the Weibull distribution with a shape parameter $\beta = 2.5$ and a scale parameter $\eta = 5000$ hours.
a) Is this system in its infant mortality, useful life, or wear-out phase at $t = 1000$ hours? Explain your reasoning.
b) Calculate the reliability of the system at $t = 2000$ hours.
(CO1, CO2 - K2, K3)

**Answer:**
a) The phase of the system is determined by the shape parameter $\beta$.
Given $\beta = 2.5$. Since $\beta > 1$, the system is in its **wear-out phase** at $t = 1000$ hours (and generally for all $t > 0$ given this $\beta$). This indicates that the failure rate is increasing with time.

b) The reliability function for the Weibull distribution is $R(t) = \exp\left(-\left(\frac{t}{\eta}\right)^{\beta}\right)$.
Given $\beta = 2.5$ and $\eta = 5000$ hours.
Calculate reliability at $t = 2000$ hours:
$R(2000) = \exp\left(-\left(\frac{2000}{5000}\right)^{2.5}\right)$
$R(2000) = \exp\left(-(0.4)^{2.5}\right)$
$R(2000) = \exp\left(-(0.4^2 \times 0.4^{0.5})\right) = \exp\left(-(0.16 \times 0.632)\right) = \exp(-0.10112)$
$R(2000) \approx 0.9039$
The reliability at 2000 hours is approximately 0.9039.

**Question 4:**
Explain the relationship between the reliability function $R(t)$ and the cumulative distribution function $F(t)$. (CO1 - K2)

**Answer:**
The reliability function $R(t)$ is the probability that the system survives beyond time $t$, i.e., $R(t) = P(T > t)$. The cumulative distribution function $F(t)$ is the probability that the system fails at or before time $t$, i.e., $F(t) = P(T \le t)$. Since failure and survival are complementary events, their probabilities must sum to 1. Therefore, $R(t) + F(t) = 1$, which means $R(t) = 1 - F(t)$.

**Question 5:**
How can the reliability function be expressed in terms of the probability density function (PDF) $f(t)$? (CO1 - K2)

**Answer:**
The reliability function $R(t)$ can be expressed as the integral of the PDF from time $t$ to infinity:
$R(t) = \int_{t}^{\infty} f(u) du$. This represents the total probability of failure occurring at any time after $t$, given that the system has not failed before $t$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
