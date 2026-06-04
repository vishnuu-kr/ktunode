---
title: "trunking and grade off service"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 3: Introduction to Wireless Communication"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed24"
status: "completed"
scrapedAt: "2026-05-23T17:58:58.532Z"
---
# ADVANCED COMMUNICATION THEORY - Module 3: Introduction to Wireless Communication

## Topic: Trunking and Grade of Service (GoS)

This module introduces fundamental concepts in wireless communication, focusing on efficient resource utilization through **trunking** and the performance metric of **Grade of Service (GoS)**. These concepts are crucial for designing and managing cellular systems, ensuring reliable communication for a growing number of users.

---

### 1. Introduction to Wireless Communication and Resource Allocation

*   **Core Challenge:** Wireless communication systems have finite resources (e.g., radio frequencies, time slots, power) to serve a potentially unlimited number of users. Efficient resource allocation is paramount.
*   **Evolution of Cellular Systems:** Early mobile systems used dedicated channels for each user, which was highly inefficient. Cellular architecture, with its concept of frequency reuse, enabled sharing of limited spectrum.
*   **Trunking's Role:** Trunking is a technique used to maximize the utilization of a limited pool of shared resources (e.g., radio channels) by allowing them to be accessed by a larger group of users on demand. This is a fundamental principle in telecommunications network design, extending to wireless systems.
*   **Relevance to Course Outcomes:**
    *   **CO4 (Explain the basic Principle of wireless communication techniques):** Trunking is a core principle enabling the scalability and efficiency of wireless systems.
    *   **CO1 (Explain information theory measures):** While not directly about entropy, the concept of resource efficiency can be loosely related to maximizing information throughput per unit of resource.

---

### 2. Trunking: The Concept of Sharing

**Definition:** Trunking is the pooling of resources (e.g., channels, circuits) to be shared by a large number of users. Instead of each user having a dedicated resource, a group of users share a common pool. A user is allocated a resource from the pool only when needed.

*   **Key Idea:** Trunking exploits the statistical nature of demand. Not all users require a resource simultaneously. By sharing, the total number of resources needed is less than the sum of resources that would be required if each user had a dedicated resource.
*   **Analogy:** Think of a hotel with a limited number of rooms. Instead of each potential guest booking a room permanently, they book rooms for the duration of their stay. The hotel can accommodate more guests over time than if all rooms were permanently occupied.
*   **Components of a Trunked System:**
    *   **User Group:** A set of users who can access the shared resources.
    *   **Resource Pool:** The collection of shared resources (e.g., radio channels).
    *   **Switching System:** Manages the allocation of resources from the pool to users on demand.

#### 2.1 Trunking Efficiency

*   **Efficiency Gain:** Trunking significantly increases resource efficiency compared to dedicated allocation. A smaller number of shared resources can serve a larger number of users.
*   **Trade-off:** This efficiency comes at the cost of potential blocking. When all shared resources are busy, a new request may be denied.

#### 2.2 Trunking Gains

*   **Definition:** Trunking gain is the reduction in the number of required resources achieved through pooling and sharing.
*   **Example:** If 100 users each needed a dedicated channel, you'd need 100 channels. With trunking, if the peak demand is for only 30 channels at any given time, you might only need 30-40 shared channels to serve all 100 users with an acceptable level of blocking.

---

### 3. Grade of Service (GoS)

**Definition:** Grade of Service (GoS) is a measure of the quality of service provided by a telecommunications system, specifically concerning the availability of resources (like channels) to users. It quantifies the probability that a request for service will be blocked or delayed.

*   **Key Performance Indicator:** GoS is a critical metric for designing and dimensioning telecommunications networks. It dictates how many resources are needed to meet a desired service level.
*   **Common Definitions of GoS:**
    *   **Blocking Probability (P_b):** The probability that an incoming call request finds all available channels busy and is therefore blocked. This is the most common and direct measure of GoS in trunked systems.
    *   **Delay Probability:** The probability that a call request is queued and experiences a significant delay before being connected (more common in systems with queuing).

#### 3.1 Types of Grade of Service

*   **Grade of Service A (GoS A) / Blocking Grade of Service:** Refers specifically to the probability of a call being blocked.
*   **Grade of Service B (GoS B) / Delay Grade of Service:** Refers to the probability of a call experiencing a delay beyond a specified threshold, usually in systems that queue incoming calls.

#### 3.2 Factors Affecting GoS

*   **Number of Resources (N):** The total number of available channels. More channels generally lead to lower GoS.
*   **Traffic Intensity (A):** The average volume of traffic offered to the system, measured in Erlangs. It's the product of the average call holding time and the average number of calls per unit time.
*   **Call Arrival Distribution:** Typically modeled as a Poisson process.
*   **Call Holding Time Distribution:** Often modeled as an exponential distribution.

#### 3.3 Importance in Wireless Systems

*   **Resource Management:** In cellular systems, channels are a scarce resource. GoS helps determine how many channels are needed in each cell to handle the expected traffic without excessive blocking.
*   **User Experience:** A high GoS (meaning low blocking probability) ensures a better user experience, as users are more likely to get a connection when they need one.
*   **Network Planning:** GoS is a crucial input for dimensioning the network capacity.

---

### 4. Trunking Formulas and Calculations

The theoretical basis for trunking calculations often relies on queuing theory, particularly the **Erlang B formula** and the **Engset formula**.

#### 4.1 Erlang B Formula

**Assumption:** The Erlang B formula assumes an infinite number of users and a Poisson arrival process for calls. It calculates the blocking probability for a system with a finite number of servers (channels) and a given traffic intensity.

*   **Traffic Intensity (A):**
    $A = \lambda \times h$
    Where:
    *   $\lambda$ is the average call arrival rate (calls per unit time).
    *   $h$ is the average call holding time (unit time).
    *   **Unit of Traffic:** Erlang. One Erlang represents the traffic intensity when the average number of simultaneous calls is one.

*   **Erlang B Formula (Blocking Probability, $P_b$):**
    $$P_b(N, A) = \frac{\frac{A^N}{N!}}{\sum_{k=0}^{N} \frac{A^k}{k!}}$$
    Where:
    *   $N$ is the number of channels.
    *   $A$ is the offered traffic in Erlangs.

*   **Interpretation:** The Erlang B formula tells us the probability that all $N$ channels are busy when the system is offered a traffic intensity of $A$ Erlangs.

#### 4.2 Example Calculation (Erlang B)

**Problem:** A cellular sector has 20 voice channels. The average call arrival rate is 100 calls per minute, and the average call holding time is 2 minutes. Calculate the Grade of Service (blocking probability) for this sector.

**Solution:**

1.  **Calculate Traffic Intensity (A):**
    *   $\lambda = 100$ calls/minute
    *   $h = 2$ minutes
    *   $A = \lambda \times h = 100 \times 2 = 200$ Erlangs

2.  **Number of Channels (N):**
    *   $N = 20$ channels

3.  **Calculate Blocking Probability ($P_b$):**
    Using the Erlang B formula:
    $$P_b(20, 200) = \frac{\frac{200^{20}}{20!}}{\sum_{k=0}^{20} \frac{200^k}{k!}}$$

    **Note:** Calculating this manually is very difficult. It's typically done using:
    *   **Erlang tables:** Pre-calculated tables for various values of $N$ and $A$.
    *   **Software/Calculators:** Online Erlang calculators or built-in functions in mathematical software.

    Let's assume we use an Erlang B calculator or table for $N=20$ and $A=200$.
    The blocking probability would be extremely high, likely very close to 1. This indicates that 20 channels are *grossly insufficient* for 200 Erlangs of traffic.

**Conclusion from Example:** This example highlights the need for proper dimensioning. If we want a GoS of, say, 0.01 (1% blocking), we would need to find a larger $N$ that satisfies $P_b(N, 200) \le 0.01$. Consulting Erlang B tables, for $A=200$ Erlangs and a desired $P_b = 0.01$, $N$ would be around 240 channels.

#### 4.3 Engset Formula (Finite User Population)

**Assumption:** The Engset formula considers a finite number of users ($M$) with a given call arrival rate per user. It's more realistic for smaller, isolated systems.

*   **Parameters:**
    *   $M$: Total number of users in the system.
    *   $A'$: Offered traffic per user (in Erlangs per user).
    *   $N$: Number of channels.

*   **Total Offered Traffic (A):** $A = M \times A'$

*   **Engset Formula (Blocking Probability, $P_b$):**
    $$P_b(M, N, A') = \frac{\binom{M-1}{N} A'^N}{\sum_{k=0}^{N} \binom{M-1}{k} A'^k}$$
    Where $\binom{n}{k}$ is the binomial coefficient $\frac{n!}{k!(n-k)!}$.

*   **When to Use:**
    *   When the number of users is small compared to the number of channels.
    *   When the ratio of users to channels is high.
    *   For systems where users are less likely to attempt a call when busy (e.g., a private branch exchange (PBX) with a fixed set of internal users).

#### 4.4 Comparing Erlang B and Engset

*   **Erlang B:** Assumes infinite users, so the arrival rate doesn't decrease as channels become busy. It tends to overestimate the number of channels needed for a given GoS compared to Engset when the user population is finite and small relative to the traffic.
*   **Engset:** Accounts for the fact that users might not attempt a call if they perceive the system to be busy. It's more accurate for finite user groups.

#### 4.5 Importance of Erlangs and GoS in Capacity Planning

*   **Capacity Dimensioning:** By knowing the expected traffic per user and the number of users, and by setting a target GoS, engineers can use these formulas to determine the minimum number of channels required.
*   **Spectrum Efficiency:** Trunking allows for efficient use of limited radio spectrum by maximizing the number of users that can be served with a given number of channels, contributing to the overall capacity of a cellular network.

---

### 5. Trunking in Cellular Systems

*   **Cellular Architecture:** Cellular systems divide a geographical area into smaller cells, each served by a base station.
*   **Frequency Reuse:** Frequencies are reused in non-adjacent cells.
*   **Trunking within Cells:** Within each cell, there is a pool of radio channels that are trunked and shared among the mobile users in that cell.
*   **Dynamic Channel Allocation (DCA):** Advanced cellular systems can further improve efficiency by dynamically allocating channels from a common pool to cells that have higher demand, rather than having fixed channel assignments per cell. This is a more sophisticated form of trunking.
*   **Impact of Mobility:** Hand-offs between cells add complexity to channel management, as channels need to be released and acquired smoothly to maintain call continuity.

---

### 6. Key Concepts and Definitions Summary

*   **Trunking:** Pooling of resources to be shared by a group of users to increase efficiency.
*   **Grade of Service (GoS):** A measure of the quality of service, usually defined as the probability of blocking or delay.
*   **Blocking Probability ($P_b$):** The probability that an incoming call request finds all resources busy.
*   **Traffic Intensity (A):** The average volume of traffic offered to a system, measured in Erlangs (Erlangs = Arrival Rate × Holding Time).
*   **Erlang B Formula:** Calculates blocking probability for infinite user populations and Poisson arrivals.
*   **Engset Formula:** Calculates blocking probability for finite user populations.

---

### 7. Important Points to Remember

*   **Efficiency vs. Blocking:** Trunking improves resource efficiency at the expense of introducing blocking. GoS quantifies this trade-off.
*   **Traffic Load:** The amount of traffic (A) is the primary driver of blocking probability. Higher traffic requires more resources.
*   **Number of Channels:** Increasing the number of channels ($N$) reduces blocking probability for a given traffic load.
*   **Erlang B is a Foundation:** While Engset is more accurate for finite users, Erlang B is widely used due to its simplicity and the often-large number of users in cellular systems, making the infinite user assumption a reasonable approximation.
*   **Capacity Planning:** Trunking formulas are essential tools for network engineers to dimension cellular systems and ensure a desired level of service.

---

### 8. Practice Questions and Exercises

**Question 1:**
A call center has 10 agents (channels). The average number of incoming calls per hour is 40, and the average call duration is 10 minutes. Assuming calls arrive according to a Poisson process and are handled on a first-come, first-served basis, what is the Grade of Service (blocking probability) for this call center?

**Answer 1:**
1.  **Calculate Arrival Rate ($\lambda$):**
    $\lambda = 40$ calls/hour
2.  **Calculate Average Holding Time ($h$):**
    $h = 10$ minutes = $10/60$ hours = $1/6$ hours
3.  **Calculate Traffic Intensity (A) in Erlangs:**
    $A = \lambda \times h = 40 \times (1/6) = 40/6 = 20/3 \approx 6.67$ Erlangs
4.  **Number of Channels (N):**
    $N = 10$ channels
5.  **Calculate Blocking Probability ($P_b$) using Erlang B formula:**
    $$P_b(10, 6.67) = \frac{\frac{6.67^{10}}{10!}}{\sum_{k=0}^{10} \frac{6.67^k}{k!}}$$
    Using an Erlang B calculator: $P_b \approx 0.0255$ or 2.55%.

**Question 2:**
A small corporate office has 50 employees. Each employee generates an average of 2 call attempts per hour. The average duration of a call is 5 minutes. If the office has 15 phone lines (channels), what is the Grade of Service (blocking probability) for this system? Use the Engset formula.

**Answer 2:**
1.  **Total Number of Users (M):**
    $M = 50$ users
2.  **Offered Traffic Per User (A'):**
    Arrival rate per user = 2 calls/hour
    Holding time ($h$) = 5 minutes = $5/60$ hours = $1/12$ hours
    $A' = 2 \times (1/12) = 1/6$ Erlangs/user
3.  **Total Offered Traffic (A):**
    $A = M \times A' = 50 \times (1/6) = 50/6 = 25/3 \approx 8.33$ Erlangs
4.  **Number of Channels (N):**
    $N = 15$ channels
5.  **Calculate Blocking Probability ($P_b$) using Engset formula:**
    $$P_b(50, 15, 1/6) = \frac{\binom{50-1}{15} (1/6)^{15}}{\sum_{k=0}^{15} \binom{50-1}{k} (1/6)^k} = \frac{\binom{49}{15} (1/6)^{15}}{\sum_{k=0}^{15} \binom{49}{k} (1/6)^k}$$
    This calculation is also complex and requires a specialized calculator or software.
    Using an Engset calculator for $M=50, N=15, A'=1/6$:
    $P_b \approx 0.002$ or 0.2%.

    **Comparison Note:** If we had used Erlang B for Question 2, assuming infinite users and $A=8.33$ Erlangs with $N=15$ channels:
    $P_b(15, 8.33) \approx 0.005$ or 0.5%.
    The Engset formula shows a lower blocking probability because it accounts for the finite user population.

**Question 3 (Conceptual):**
Explain why trunking is essential for the efficient operation of a cellular mobile communication system. Relate your answer to the concept of resource utilization and user demand.

**Answer 3:**
Trunking is essential for cellular systems because radio spectrum (and therefore channels) is a finite and expensive resource. User demand for communication is statistically variable; not all users require a channel simultaneously. Trunking allows a large pool of users to share a smaller pool of channels. By pooling resources, the system can handle a significantly higher total traffic load with a given number of channels than if each user had a dedicated channel. This leads to much higher spectral efficiency and overall system capacity, making it economically viable to provide mobile services to a large number of subscribers. Without trunking, the number of required channels would be impractically large, rendering cellular systems unfeasible. The trade-off is that occasional blocking is accepted, and the Grade of Service (GoS) quantifies this acceptable level of blocking.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. References and Further Reading

*   **Wireless Communications by Theodore S. Rappaport (Pearson Education, 2/e, 2022):** Chapter 5 discusses cellular system capacity and resource allocation, including trunking concepts.
*   **Wireless Communications by Andreas F Molish (Wiley India Publications, 2nd Edition 2013):** Similar to Rappaport, Molisch provides explanations of capacity planning and resource management in cellular networks.
*   **Mobile Communications by Jochen Schiller (Pearson, 2nd Edition 2008):** Chapter 2 covers cellular architecture and traffic considerations, including Erlang formulas.
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Wiley-Interscience, 2/e 2006):** While not directly on trunking, this book provides the foundational information theory concepts that underpin the need for efficient resource utilization in any communication system.

---