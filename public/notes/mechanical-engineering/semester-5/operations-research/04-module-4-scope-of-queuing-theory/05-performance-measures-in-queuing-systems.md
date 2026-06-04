---
title: "Performance Measures in Queuing Systems"
subject: "OPERATIONS RESEARCH"
module: "Module 4: Scope of queuing theory"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463635"
status: "completed"
scrapedAt: "2026-05-20T18:02:06.224Z"
---
# Operations Research - Module 4: Scope of Queuing Theory

## Topic: Performance Measures in Queuing Systems

**Course Outcome Alignment:** This topic directly addresses **CO5: To solve problems using classical queuing theory models (Knowledge Level: K2, K3)** by focusing on the quantitative analysis of queuing systems.

**Learning Outcomes:**

*   Understand the fundamental performance measures used to evaluate queuing systems.
*   Calculate and interpret key metrics such as average waiting time, average queue length, and server utilization.
*   Analyze the trade-offs between service level and operational costs using these measures.
*   Apply basic queuing theory models to assess system performance.

---

### 1. Introduction to Queuing Systems and Performance Measures

A queuing system, or waiting line system, is a model of any process where customers (people, parts, jobs, etc.) arrive, wait in line if the service facility is busy, receive service, and then depart. Understanding the performance of these systems is crucial for efficient resource allocation and customer satisfaction.

**Key Concept:** Performance measures quantify the efficiency and effectiveness of a queuing system. They help managers make informed decisions about staffing, service capacity, and operational policies.

**Reference:** Gupta & Hira, Third Edition, Chapter 15, discusses the fundamental concepts of queuing theory and the need for performance evaluation.

---

### 2. Key Performance Measures in Queuing Systems

The following are the most common and important performance measures used to analyze queuing systems:

#### 2.1. Server Utilization ($\rho$)

**Definition:** Server utilization is the proportion of time the service facility is busy serving customers. It's a measure of how effectively the server(s) are being used.

**Formula:**
$\rho = \frac{\text{Average arrival rate}}{\text{Average service rate}}$  or  $\rho = \frac{\lambda}{\mu}$ (for a single-server system)

Where:
*   $\lambda$: Average rate at which customers arrive at the system (e.g., customers per hour).
*   $\mu$: Average rate at which customers are served by a single server (e.g., customers per hour).

**Interpretation:**
*   A high utilization ($\rho$ close to 1) indicates the server is busy most of the time. This can be efficient in terms of resource usage but may lead to long waiting times.
*   A low utilization ($\rho$ close to 0) indicates the server is often idle. This might mean over-capacity or inefficient scheduling, leading to higher operational costs.

**Important Point:** In most stable queuing systems, $\rho < 1$. If $\rho \ge 1$, the queue will grow indefinitely, and the system is unstable.

**Example (Gupta & Hira):**
If customers arrive at a bank teller at an average rate of 20 per hour ($\lambda = 20$) and the teller can serve customers at an average rate of 25 per hour ($\mu = 25$), the server utilization is:
$\rho = \frac{20}{25} = 0.8$ or 80%.

#### 2.2. Average Number of Customers in the System ($L$)

**Definition:** This measure represents the average total number of customers present in the queuing system at any given time, including those waiting in the queue and those currently being served.

**Formula (Little's Law):**
$L = \lambda \times W$

Where:
*   $L$: Average number of customers in the system.
*   $\lambda$: Average arrival rate.
*   $W$: Average time a customer spends in the system (waiting time + service time).

**Interpretation:** A higher $L$ indicates a more congested system, potentially leading to longer waiting times and decreased customer satisfaction.

#### 2.3. Average Number of Customers in the Queue ($L_q$)

**Definition:** This measure represents the average number of customers waiting in the queue, excluding those being served.

**Formula (Little's Law):**
$L_q = \lambda \times W_q$

Where:
*   $L_q$: Average number of customers in the queue.
*   $\lambda$: Average arrival rate.
*   $W_q$: Average time a customer spends waiting in the queue.

**Interpretation:** $L_q$ is a direct indicator of congestion in the waiting line. Managers often aim to minimize $L_q$ to improve customer experience.

#### 2.4. Average Time a Customer Spends in the System ($W$)

**Definition:** This is the average total time a customer spends from arrival until they complete service and leave the system. It includes both waiting time and service time.

**Formula (Little's Law):**
$W = \frac{L}{\lambda}$

**Interpretation:** A lower $W$ indicates faster service and a better customer experience. It's a key metric for assessing service efficiency.

#### 2.5. Average Time a Customer Spends Waiting in the Queue ($W_q$)

**Definition:** This is the average time a customer spends waiting in the queue before their service begins.

**Formula (Little's Law):**
$W_q = \frac{L_q}{\lambda}$

**Interpretation:** $W_q$ is crucial for customer satisfaction. High values of $W_q$ can lead to customer frustration and defection.

**Important Note on Little's Law:** Little's Law is a fundamental theorem in queuing theory that states, for any stable queuing system, the average number of items in the system ($L$) is equal to the average arrival rate ($\lambda$) multiplied by the average time an item spends in the system ($W$). This holds true regardless of the arrival or service time distributions or the number of servers, as long as the system is stable. The same applies to the queue itself ($L_q = \lambda W_q$).

**Reference:** Srinivasan, Third Edition, Chapter 11, provides a detailed explanation of Little's Law and its applications.

#### 2.6. Probability of the System Being Empty ($P_0$)

**Definition:** This is the probability that there are no customers in the queuing system (neither waiting nor being served).

**Interpretation:** A higher $P_0$ indicates that the server is idle more often, which might imply over-capacity or a need to adjust service rates.

#### 2.7. Probability of having $n$ Customers in the System ($P_n$)

**Definition:** This is the probability that there are exactly $n$ customers in the queuing system (waiting and being served).

**Interpretation:** These probabilities are used to derive other performance measures and to understand the distribution of system occupancy.

#### 2.8. Probability of a Customer Having to Wait

**Definition:** This is the probability that an arriving customer finds all servers busy and must join the queue.

**Interpretation:** This measure directly relates to the customer's experience of encountering a queue.

---

### 3. Performance Measures in Specific Queuing Models

The exact formulas for these performance measures depend on the specific queuing model being used (e.g., M/M/1, M/M/c, M/G/1). Here, we will focus on the commonly used M/M/1 model for illustrative purposes, as it forms the basis for understanding more complex systems.

**M/M/1 Queuing Model:**
*   **M (Markovian/Memoryless):** Arrivals follow a Poisson distribution.
*   **M (Markovian/Memoryless):** Service times follow an exponential distribution.
*   **1:** There is a single server.

For an M/M/1 system with arrival rate $\lambda$ and service rate $\mu$ (where $\mu > \lambda$ for stability), the key performance measures are:

*   **Server Utilization ($\rho$):** $\rho = \frac{\lambda}{\mu}$
*   **Probability of the System Being Empty ($P_0$):** $P_0 = 1 - \rho$
*   **Probability of having $n$ Customers in the System ($P_n$):** $P_n = \rho^n P_0 = \rho^n (1 - \rho)$
*   **Average Number of Customers in the System ($L$):** $L = \frac{\rho}{1 - \rho} = \frac{\lambda}{\mu - \lambda}$
*   **Average Number of Customers in the Queue ($L_q$):** $L_q = \frac{\rho^2}{1 - \rho} = \frac{\lambda^2}{\mu(\mu - \lambda)}$
*   **Average Time a Customer Spends in the System ($W$):** $W = \frac{1}{\mu - \lambda}$ (using Little's Law: $W = L/\lambda = \frac{\lambda}{\mu - \lambda} / \lambda = \frac{1}{\mu - \lambda}$)
*   **Average Time a Customer Spends Waiting in the Queue ($W_q$):** $W_q = \frac{\rho}{\mu(1 - \rho)} = \frac{\lambda}{\mu(\mu - \lambda)}$ (using Little's Law: $W_q = L_q/\lambda = \frac{\lambda^2}{\mu(\mu - \lambda)} / \lambda = \frac{\lambda}{\mu(\mu - \lambda)}$)
*   **Probability of a Customer Having to Wait:** This is equivalent to the probability that there is at least one customer in the system when an arrival occurs, which is $1 - P_0 = \rho$.

**Reference:** Vohra & Arora, Sixth Edition, Chapter 14, extensively covers the M/M/1 model and its associated performance measures with examples.

**Example (M/M/1 System):**
Consider a single-server call center that handles customer queries.
*   Average arrival rate of calls: $\lambda = 10$ calls per hour.
*   Average service rate per operator: $\mu = 12$ calls per hour.

**Calculations:**
1.  **Server Utilization ($\rho$):**
    $\rho = \frac{\lambda}{\mu} = \frac{10}{12} = \frac{5}{6} \approx 0.8333$ or 83.33%
    *Interpretation:* The operator is busy about 83.33% of the time.

2.  **Probability of the System Being Empty ($P_0$):**
    $P_0 = 1 - \rho = 1 - \frac{5}{6} = \frac{1}{6} \approx 0.1667$ or 16.67%
    *Interpretation:* There's about a 16.67% chance that no calls are in the system.

3.  **Average Number of Calls in the System ($L$):**
    $L = \frac{\rho}{1 - \rho} = \frac{5/6}{1 - 5/6} = \frac{5/6}{1/6} = 5$ calls.
    *Interpretation:* On average, there are 5 calls in the system (waiting or being handled).

4.  **Average Number of Calls Waiting in the Queue ($L_q$):**
    $L_q = \frac{\rho^2}{1 - \rho} = \frac{(5/6)^2}{1 - 5/6} = \frac{25/36}{1/6} = \frac{25}{36} \times 6 = \frac{25}{6} \approx 4.167$ calls.
    *Interpretation:* On average, there are about 4.167 calls waiting in the queue.

5.  **Average Time a Call Spends in the System ($W$):**
    $W = \frac{1}{\mu - \lambda} = \frac{1}{12 - 10} = \frac{1}{2}$ hours = 30 minutes.
    *Interpretation:* On average, a call spends 30 minutes from arrival to completion.

6.  **Average Time a Call Spends Waiting in the Queue ($W_q$):**
    $W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{10}{12(12 - 10)} = \frac{10}{12 \times 2} = \frac{10}{24} = \frac{5}{12}$ hours.
    $\frac{5}{12} \text{ hours} \times 60 \text{ minutes/hour} = 25$ minutes.
    *Interpretation:* On average, a caller waits for 25 minutes before speaking to an operator.

7.  **Probability of a Call Having to Wait:**
    This is $\rho = 5/6 \approx 83.33\%$.
    *Interpretation:* Approximately 83.33% of incoming calls will have to wait in the queue.

---

### 4. Balancing Costs and Performance

Performance measures are critical for making economic decisions in queuing systems. Managers often face a trade-off between the cost of providing service and the cost of customer waiting.

*   **Cost of Service:** Increases with more servers, higher service rates, or more sophisticated equipment.
*   **Cost of Waiting:** Includes customer dissatisfaction, lost sales, potential loss of goodwill, employee idle time (if internal customers), etc.

By calculating these performance measures, managers can:

*   **Determine Optimal Staffing Levels:** How many servers are needed to achieve a desired average waiting time?
*   **Evaluate Service Policies:** Does changing the service order (e.g., from FIFO to priority) improve overall performance?
*   **Assess Capacity Requirements:** Is the current service capacity sufficient for the expected arrival rates?
*   **Justify Investments:** Can the cost of improving the system (e.g., faster servers, more servers) be offset by reduced waiting costs?

**Reference:** Hillier & Lieberman, Eleventh Edition, Chapter 17, provides detailed discussions on the economic implications of queuing systems and decision-making based on performance measures.

---

### 5. Advanced Performance Measures and Concepts

While the above are the primary measures, other important metrics and concepts include:

*   **Maximum Queue Length:** The highest number of customers observed in the queue at any point in time. This is important for resource planning (e.g., physical space for queues).
*   **Maximum Number of Customers in the System:** The highest total number of customers in the system.
*   **Maximum Waiting Time:** The longest time any customer has spent waiting.
*   **Average Waiting Time of Those Who Wait:** This is different from $W_q$. It calculates the average waiting time only for customers who actually had to wait (i.e., those who found the server busy upon arrival).
*   **Probability of Delay:** Similar to the probability of having to wait, often calculated for specific M/M/c models.

**Reference:** Ravindran, Phillips, and Solberg, discusses queuing models in the context of operational decisions and resource management.

---

### 6. Practice Questions and Exercises

**Question 1:**
A single-server retail store has an average customer arrival rate of $\lambda = 20$ customers per hour. The server can serve customers at an average rate of $\mu = 24$ customers per hour. Assume this is an M/M/1 queuing system. Calculate:
a) The server utilization.
b) The average number of customers in the system.
c) The average time a customer spends waiting in the queue.
d) The average time a customer spends in the system.

**Answer 1:**
Given: $\lambda = 20$, $\mu = 24$.
a) Server Utilization ($\rho$):
   $\rho = \frac{\lambda}{\mu} = \frac{20}{24} = \frac{5}{6} \approx 0.8333$ or 83.33%

b) Average number of customers in the system ($L$):
   $L = \frac{\rho}{1 - \rho} = \frac{5/6}{1 - 5/6} = \frac{5/6}{1/6} = 5$ customers.

c) Average time a customer spends waiting in the queue ($W_q$):
   $W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{20}{24(24 - 20)} = \frac{20}{24 \times 4} = \frac{20}{96} = \frac{5}{24}$ hours.
   In minutes: $\frac{5}{24} \times 60 = \frac{300}{24} = 12.5$ minutes.

d) Average time a customer spends in the system ($W$):
   $W = \frac{1}{\mu - \lambda} = \frac{1}{24 - 20} = \frac{1}{4}$ hours.
   In minutes: $\frac{1}{4} \times 60 = 15$ minutes.
   (Alternatively, $W = W_q + \text{Average Service Time}$. Average Service Time = $1/\mu = 1/24$ hours. $W = 5/24 + 1/24 = 6/24 = 1/4$ hours).

---

**Question 2:**
A barbershop has one barber. Customers arrive at an average rate of $\lambda = 4$ customers per hour. The barber can serve customers at an average rate of $\mu = 5$ customers per hour. This can be modeled as an M/M/1 system.
a) What is the average waiting time in the queue for a customer?
b) What is the average number of customers waiting in the queue?
c) If the barber's wage is \$15 per hour and the cost of a customer waiting is estimated at \$20 per hour (due to dissatisfaction and lost future business), what is the net cost per hour for this system?

**Answer 2:**
Given: $\lambda = 4$, $\mu = 5$.
a) Average waiting time in the queue ($W_q$):
   $W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{4}{5(5 - 4)} = \frac{4}{5 \times 1} = \frac{4}{5}$ hours.
   In minutes: $\frac{4}{5} \times 60 = 48$ minutes.

b) Average number of customers waiting in the queue ($L_q$):
   $L_q = \frac{\lambda^2}{\mu(\mu - \lambda)} = \frac{4^2}{5(5 - 4)} = \frac{16}{5 \times 1} = \frac{16}{5} = 3.2$ customers.

c) Net cost per hour:
   *   Cost of Service = Barber's wage per hour = \$15.
   *   Cost of Waiting = (Average number of customers in the system) * (Cost per customer waiting per hour).
        First, calculate $L$:
        $\rho = \frac{\lambda}{\mu} = \frac{4}{5} = 0.8$
        $L = \frac{\rho}{1 - \rho} = \frac{0.8}{1 - 0.8} = \frac{0.8}{0.2} = 4$ customers.
   *   Cost of Waiting = $L \times \$20/\text{hour} = 4 \times \$20 = \$80$.
   *   Total Cost per hour = Cost of Service + Cost of Waiting
   *   Total Cost per hour = \$15 + \$80 = \$95 per hour.

---

### 7. Important Points to Remember

*   **Stability Condition:** For most queuing systems, the arrival rate must be less than the total service rate to ensure stability ($\lambda < c\mu$, where $c$ is the number of servers).
*   **Little's Law:** $L = \lambda W$ and $L_q = \lambda W_q$ are universally applicable to stable queuing systems.
*   **M/M/1 Assumptions:** Be mindful of the assumptions of Poisson arrivals and exponential service times when using M/M/1 formulas. Real-world systems may deviate.
*   **Performance Measures are Interconnected:** Changes in one measure (e.g., arrival rate) will impact others (e.g., waiting time, queue length).
*   **Trade-offs:** Always consider the trade-off between service capacity/cost and customer waiting time/satisfaction.
*   **Context is Key:** The "best" performance measures depend on the specific goals of the system (e.g., a premium service might prioritize low waiting times, while a low-cost service might accept longer waits).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. Further Reading and References

*   **Srinivasan, G. (2017).** *Operations Research-Principles and Applications* (Third Edition). PHI Pvt. Ltd. (Refer to chapters on Queuing Theory for performance measures and models.)
*   **Gupta, P. K., & Hira, D. S. (2008).** *Operations Research* (Third Edition). S Chand publication. (Excellent resource for basic queuing models and their performance metrics.)
*   **Vohra, N. D., & Arora, H. (2021).** *Quantitative Techniques in Management* (Sixth Edition). McGraw Hill. (Provides practical examples and calculations for queuing performance measures.)
*   **Hillier, F. S., & Lieberman, G. J. (Eleventh Edition).** *Introduction to Operations Research*. McGraw Hill. (Offers a rigorous treatment of queuing theory and its applications.)

This study guide provides a foundational understanding of performance measures in queuing systems, crucial for solving problems using classical queuing theory models as per CO5.