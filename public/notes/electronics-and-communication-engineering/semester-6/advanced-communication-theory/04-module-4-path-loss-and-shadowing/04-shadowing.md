---
title: "Shadowing"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed31"
status: "completed"
scrapedAt: "2026-05-23T17:59:07.058Z"
---
# ADVANCED COMMUNICATION THEORY

## Module 4: Path Loss and Shadowing

### Topic: Shadowing

**Learning Outcomes:**

*   Understand the phenomenon of shadowing in wireless communication.
*   Differentiate shadowing from other propagation impairments like path loss and fading.
*   Analyze the statistical models used to represent shadowing.
*   Explain the impact of shadowing on system performance.
*   Discuss techniques to mitigate the effects of shadowing.

**Course Outcomes Alignment:**

*   **CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)** - Understanding shadowing is fundamental to comprehending how wireless signals propagate and how communication systems operate in real-world environments.
*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)** - Shadowing is a component of the overall wireless channel model and influences the performance analysis of modulation techniques.
*   **CO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance (Knowledge Level: K3)** - Understanding the impact of shadowing is crucial for evaluating the effectiveness of diversity and equalization techniques in combating its effects.

---

### 1. Introduction to Shadowing

**Definition:**
Shadowing, also known as **log-distance path loss** or **slow fading**, is a propagation impairment caused by the presence of large obstacles (e.g., buildings, hills, terrain features) between the transmitter and receiver. These obstacles obstruct or scatter the radio waves, leading to a significant reduction in received signal strength that varies slowly over distance. Unlike fast fading, shadowing is a relatively slow process and is primarily due to the geometry of the environment.

**Key Characteristics:**
*   **Large-scale effect:** Occurs over longer distances.
*   **Obstruction-based:** Caused by the physical presence of obstacles.
*   **Slow variation:** The signal strength changes gradually as the receiver moves.
*   **Directional:** The impact can be more pronounced in certain directions.
*   **Significant impact on coverage:** Can create "shadow zones" where the signal is too weak for reliable communication.

**Distinction from Other Propagation Impairments:**

*   **Path Loss:** Path loss describes the general decrease in signal power with distance due to spreading and absorption. Shadowing is a *component* of path loss that accounts for the additional attenuation caused by obstructions. While path loss predicts an average power decrease, shadowing accounts for the *variability* around this average.
    *   *(Goldsmith, Chapter 3)*: Path loss is fundamental, and shadowing adds a layer of uncertainty to this average.
*   **Fading (Fast Fading):** Fading is caused by multipath propagation, where multiple copies of the signal arrive at the receiver at different times and phases, leading to constructive or destructive interference. Fast fading varies rapidly with small changes in position, frequency, or time. Shadowing, on the other hand, varies slowly with distance due to larger obstacles.
    *   *(Rappaport, Chapter 4)*: Emphasizes that fading is due to multipath, while shadowing is due to obstructions.

---

### 2. Statistical Models for Shadowing

Shadowing is inherently probabilistic because the exact placement and size of obstacles are unknown. Therefore, statistical models are used to characterize its effects.

**2.1 Log-Normal Shadowing Model:**

This is the most widely used model for shadowing. It assumes that the received signal strength, when expressed in decibels (dB), follows a normal (Gaussian) distribution.

*   **Received Power in dB:**
    Let $P_{rx}$ be the received power and $P_{rx, dB}$ be the received power in dB.
    $P_{rx, dB} = 10 \log_{10}(P_{rx})$

*   **Model Formulation:**
    The received power in dB at a distance $d$ from the transmitter is modeled as:
    $P_{rx, dB}(d) = P_{tx, dB} - PL(d) - X_{\sigma}$

    Where:
    *   $P_{tx, dB}$ is the transmitted power in dB.
    *   $PL(d)$ is the path loss in dB at distance $d$. This typically follows a log-distance model:
        $PL(d) = PL(d_0) + 10n \log_{10}(d/d_0)$
        *   $PL(d_0)$ is the path loss at a reference distance $d_0$ (e.g., 1 meter or 100 meters).
        *   $n$ is the path loss exponent, which depends on the environment.
    *   $X_{\sigma}$ is a random variable representing the shadowing effect. It is assumed to be a Gaussian random variable with zero mean and standard deviation $\sigma$ (in dB).
        $X_{\sigma} \sim \mathcal{N}(0, \sigma^2)$

*   **Received Power (Linear Scale):**
    On a linear scale, the received power $P_{rx}(d)$ is given by:
    $P_{rx}(d) = P_{tx} \left(\frac{d}{d_0}\right)^{-n} 10^{-\frac{X_{\sigma}}{10}}$

    Here, $10^{-\frac{X_{\sigma}}{10}}$ is a log-normally distributed random variable. If $X_{\sigma}$ is Gaussian with mean 0 and variance $\sigma^2$, then $Y = 10^{-X_{\sigma}/10}$ is log-normally distributed.

**2.2 Interpretation of $\sigma$:**

*   The standard deviation $\sigma$ quantifies the severity of shadowing.
*   A larger $\sigma$ indicates a wider spread in received signal strength due to shadowing, leading to greater variability and a higher probability of deep fades.
*   Typical values for $\sigma$ range from 4 dB to 12 dB, depending on the environment (e.g., urban, suburban, rural).
    *   *(Rappaport, Chapter 4)*: Provides typical $\sigma$ values for various environments.
    *   *(Goldsmith, Chapter 3)*: Discusses the empirical nature of $\sigma$ and its dependence on environmental factors.

**Example:**
Consider a wireless link where the path loss exponent is $n=3$ and the path loss at $d_0 = 100$m is $PL(100) = 40$ dB. The transmitter power is $P_{tx,dB} = 30$ dBm. If shadowing has a standard deviation of $\sigma = 8$ dB, what is the expected received power at $d = 1$ km (1000m) and what is the range of power levels due to shadowing?

*   **Path Loss at 1 km:**
    $PL(1000) = 40 + 10 \times 3 \times \log_{10}(1000/100)$
    $PL(1000) = 40 + 30 \times \log_{10}(10)$
    $PL(1000) = 40 + 30 \times 1 = 70$ dB

*   **Expected Received Power (average, without shadowing):**
    $P_{rx, dB, avg}(1000) = P_{tx, dB} - PL(1000)$
    $P_{rx, dB, avg}(1000) = 30 \text{ dBm} - 70 \text{ dB} = -40 \text{ dBm}$

*   **Range due to Shadowing ($\sigma = 8$ dB):**
    The received power in dB will be distributed around -40 dBm.
    *   One standard deviation below: $-40 \text{ dBm} - 8 \text{ dB} = -48 \text{ dBm}$
    *   One standard deviation above: $-40 \text{ dBm} + 8 \text{ dB} = -32 \text{ dBm}$
    So, at 1 km, the received power is expected to be -40 dBm, but due to shadowing, it can typically range between -48 dBm and -32 dBm. This means there's a significant chance of the signal dropping below a usable threshold.

---

### 3. Impact of Shadowing on System Performance

Shadowing significantly impacts the reliability and capacity of wireless communication systems.

*   **Coverage Holes:** Shadowing can create areas with very low received signal strength, leading to dropped calls, poor data quality, and complete loss of service.
    *   *(Schiller, Chapter 3)*: Discusses coverage planning and the need to account for shadowing to avoid dead zones.

*   **Reduced System Capacity:** If the average received power is low due to shadowing, more power is needed to maintain a certain Signal-to-Noise Ratio (SNR). This can limit the number of users a system can support or reduce the achievable data rates.

*   **Increased Bit Error Rate (BER):** When the received signal strength drops below a certain threshold due to shadowing, the BER increases, leading to unreliable data transmission.

*   **Impact on Link Budget:** Shadowing must be incorporated into the link budget calculations to ensure that the minimum required SNR is met at the receiver for a specified probability.

*   **Uneven Coverage:** Shadowing contributes to the unevenness of coverage in a wireless network, making it challenging to provide consistent service.

**Example:**
Imagine a cellular base station designed to provide coverage up to 1 km. If shadowing has a standard deviation of 8 dB, there's a probability that the received signal strength at 1 km is more than one standard deviation below the average. This means the signal could be 8 dB weaker than expected, potentially falling below the minimum threshold required for reliable communication, creating a coverage hole.

---

### 4. Mitigation Techniques for Shadowing

Several techniques are employed to combat the adverse effects of shadowing.

**4.1 Site Diversity:**

*   **Concept:** Using multiple base stations (or antennas at different locations) to serve a particular area. If one site is in a shadowing region, another site might have a stronger signal.
*   **Implementation:** A mobile station can select the base station with the strongest signal or combine signals from multiple base stations.
*   **Effectiveness:** Very effective against shadowing because the probability of multiple sites being simultaneously in deep shadow is much lower than a single site being in shadow.
    *   *(Goldsmith, Chapter 5)*: Discusses macro-diversity and micro-diversity and their effectiveness against large-scale fading.

**4.2 Micro-diversity / Antenna Diversity (at the receiver):**

*   **Concept:** Using multiple antennas at the receiver, spatially separated.
*   **Mitigation:** While primarily designed to combat multipath fading, antenna diversity can offer some benefit against shadowing if the antenna separation is large enough to experience slightly different shadowing conditions. However, it's less effective against shadowing than against fast fading.
    *   *(Rappaport, Chapter 6)*: Explains that for shadowing, larger antenna separations are needed for significant diversity gain.

**4.3 Dynamic Power Control:**

*   **Concept:** Adjusting the transmitter power (either at the base station or the mobile) to compensate for path loss and shadowing.
*   **Mechanism:** If the received signal is weak due to shadowing, the transmitter increases its power to boost the signal strength.
*   **Challenges:** Can increase interference to other users and requires efficient feedback mechanisms.
    *   *(Schiller, Chapter 6)*: Discusses power control strategies for cellular systems.

**4.4 Relay Nodes:**

*   **Concept:** Introducing intermediate nodes (relays) to retransmit the signal.
*   **Mechanism:** A relay can pick up a signal that is weakened by shadowing and retransmit it with higher power, effectively bypassing the shadowed region.
*   **Application:** Used in cellular networks and ad-hoc networks to improve coverage and signal strength.

**4.5 Higher Transmission Power:**

*   **Concept:** Simply increasing the transmit power.
*   **Effectiveness:** Can help overcome shadowing to some extent by increasing the average received signal strength.
*   **Limitations:** Not always feasible due to regulatory limits, battery constraints (for mobile devices), and increased interference.

**4.6 Careful Site Selection:**

*   **Concept:** Choosing base station locations that minimize the probability of being in heavily shadowed areas.
*   **Methodology:** Involves detailed propagation studies and terrain analysis.
*   **Importance:** Proactive measure to ensure good coverage from the outset.

---

### 5. Linking Shadowing to Course Outcomes

*   **CO4 (Basic Principles):** Shadowing is a core principle of how wireless signals propagate in real-world environments, impacting the fundamental design and operation of wireless systems.
*   **CO5 (Channel Models & Modulation Performance):** The log-normal shadowing model is a key component of comprehensive wireless channel models. Understanding shadowing is essential to analyze how modulation techniques will perform under varying signal strength conditions, especially when combined with fading. For example, a modulation scheme that performs poorly at low SNRs will be more vulnerable to shadowing.
*   **CO6 (Diversity & Equalization):** Shadowing's slow and deep fades necessitate techniques like site diversity to maintain reliable links. While antenna diversity primarily addresses fast fading, spatial separation can offer some resilience to shadowing. Understanding shadowing's impact highlights why these techniques are crucial for improving receiver performance in challenging environments.

---

### 6. Important Points to Remember

*   Shadowing is a **large-scale** propagation effect caused by **obstructions**.
*   It results in **slow variations** in received signal strength.
*   The **log-normal distribution** is the standard model for shadowing.
*   The standard deviation $\sigma$ (in dB) quantifies the severity of shadowing.
*   Shadowing creates **coverage holes** and reduces system **capacity**.
*   **Site diversity** is the most effective mitigation technique for shadowing.
*   Shadowing is distinct from fast fading (multipath).

---

### 7. Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain the primary difference between shadowing and fast fading in wireless communication.
*   **Answer:** Shadowing is a large-scale effect caused by obstructions, leading to slow variations in signal strength over distance. Fast fading is a small-scale effect caused by multipath propagation, leading to rapid fluctuations in signal strength with small changes in position, frequency, or time.

**Question 2 (Application - Log-Normal Model):**
A wireless link operates in an urban environment where shadowing is characterized by a standard deviation of $\sigma = 8$ dB. The average received power at a certain location is -70 dBm. What is the probability that the received power at this location drops below -80 dBm due to shadowing?
*   **Hint:** Use the properties of the Gaussian distribution. The value -80 dBm is 10 dB below the average of -70 dBm. This corresponds to 10 dB / 8 dB = 1.25 standard deviations.
*   **Calculation:**
    Let $P_{rx, dB}$ be the received power in dB. We are given $E[P_{rx, dB}] = -70$ dBm and $\sigma = 8$ dB. We want to find $P(P_{rx, dB} < -80 \text{ dBm})$.
    This is equivalent to finding $P(Z < \frac{-80 - (-70)}{8})$, where $Z$ is a standard normal variable.
    $P(Z < \frac{-10}{8}) = P(Z < -1.25)$
    Using a standard normal distribution table or calculator, the cumulative probability for Z = -1.25 is approximately 0.1056.
*   **Answer:** The probability that the received power drops below -80 dBm is approximately 0.1056, or about 10.56%.

**Question 3 (System Design):**
You are designing a wireless network and need to ensure a minimum received signal strength of -85 dBm at the cell edge, 1 km away from a base station. The base station transmits at 30 dBm. The path loss exponent is $n=3.5$, and the path loss at $d_0=100$m is 40 dB. The shadowing standard deviation is $\sigma=6$ dB. To guarantee service at the cell edge with a certain margin, should you rely solely on the average path loss calculation, or do you need to consider shadowing? Explain your reasoning.
*   **Calculation:**
    *   Path Loss at 1 km ($d=1000$m):
        $PL(1000) = 40 + 10 \times 3.5 \times \log_{10}(1000/100)$
        $PL(1000) = 40 + 35 \times \log_{10}(10)$
        $PL(1000) = 40 + 35 \times 1 = 75$ dB
    *   Average Received Power:
        $P_{rx, dB, avg}(1000) = P_{tx, dB} - PL(1000)$
        $P_{rx, dB, avg}(1000) = 30 \text{ dBm} - 75 \text{ dB} = -45 \text{ dBm}$
    *   Range due to shadowing ($\sigma=6$ dB):
        The received power is distributed around -45 dBm.
        *   One standard deviation below: $-45 - 6 = -51$ dBm
        *   Two standard deviations below: $-45 - 12 = -57$ dBm
        *   Three standard deviations below: $-45 - 18 = -63$ dBm
*   **Reasoning:** The average received power at 1 km is -45 dBm. The required minimum is -85 dBm. This means there's a significant margin of 40 dB from the average. However, shadowing introduces variability. If the signal strength drops by, say, 3 standard deviations due to shadowing (3 * 6 dB = 18 dB), the received power would be -45 dBm - 18 dB = -63 dBm. This is still well above the required -85 dBm.

    *   *Correction/Refinement:* The question asks about ensuring service at the cell edge. The average power is -45 dBm. If the required threshold is, for example, -75 dBm to achieve a certain data rate, then shadowing can cause issues.
    *   Let's assume a threshold of -75 dBm is required.
    *   Difference from average: $-75 \text{ dBm} - (-45 \text{ dBm}) = -30 \text{ dB}$.
    *   This difference corresponds to $30 \text{ dB} / 6 \text{ dB/std} = 5$ standard deviations.
    *   The probability of dropping below -75 dBm is $P(Z < -5)$, which is extremely low (approx. $2.87 \times 10^{-7}$).

    *   **Revised Reasoning:** Even though the average power (-45 dBm) is significantly higher than the target (-85 dBm), the question implies ensuring consistent service. If the requirement for reliable communication (e.g., a certain SNR for a specific data rate) is, say, -75 dBm, then we must consider the probability of falling below this. In this specific example, the margin is so large (40 dB) that even with 6 dB shadowing, the probability of failing to meet the -85 dBm threshold is extremely low. However, in real-world scenarios with smaller margins, shadowing is *critical*. You *must* consider shadowing because it can cause the signal to drop below the required threshold for many users, even if the average path loss calculation suggests otherwise.

*   **Answer:** Yes, you absolutely need to consider shadowing. While the average received power (-45 dBm) is significantly higher than the required -85 dBm, shadowing introduces slow variations. If the minimum required signal strength for reliable communication were, for instance, -70 dBm to achieve a specific data rate, shadowing could cause the received power to drop below this threshold. The average path loss calculation only provides an expected value, not the statistical distribution of the signal strength. Failure to account for shadowing would lead to unpredictable coverage and potentially poor service quality for users experiencing deeper shadow fades.

---
**References:**

*   Goldsmith, A. (2005). *Wireless Communications*. Cambridge University Press.
*   Rappaport, T. S. (2022). *Wireless Communication: Principles and Practice*. Pearson Education.
*   Schiller, J. (2008). *Mobile Communications*. Pearson.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
