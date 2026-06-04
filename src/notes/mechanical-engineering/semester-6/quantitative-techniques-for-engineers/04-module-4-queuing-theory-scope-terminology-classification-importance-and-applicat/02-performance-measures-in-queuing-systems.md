---
title: "Performance Measures in Queuing Systems"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 4: Queuing theory: Scope, terminology, classification Importance and applications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a7f"
status: "completed"
scrapedAt: "2026-05-20T18:07:40.387Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 4: Queuing Theory: Scope, Terminology, Classification, Importance and Applications

### Topic: Performance Measures in Queuing Systems

---

### **Learning Outcomes:**

By the end of this topic, you should be able to:

*   Understand and define key performance measures used in queuing systems.
*   Explain the significance of each performance measure in analyzing and improving queuing systems.
*   Calculate and interpret common performance measures for simple queuing models.
*   Relate performance measures to the overall efficiency and effectiveness of service systems.

---

### **Introduction:**

Queuing theory is a powerful mathematical tool used to analyze systems where customers (or entities) arrive to receive a service and may have to wait in a queue if the service facility is busy. The primary goal of studying queuing systems is to understand their performance and to find ways to improve them. Performance measures provide quantitative insights into how well a queuing system is operating. These measures help managers make informed decisions about resource allocation, service capacity, and customer satisfaction.

---

### **Key Concepts and Definitions:**

#### **1. Average Number of Customers in the System ($L_s$)**

*   **Definition:** The average number of customers present in the queuing system at any given time. This includes customers who are being served and those who are waiting in the queue.
*   **Significance:** Indicates the overall congestion in the system. A higher $L_s$ suggests longer waiting times and potentially lower customer satisfaction.
*   **Formula (General Concept):** Often derived from Little's Law.
*   **Example:** If on average there are 5 customers in a bank (either at a teller or waiting in line), then $L_s = 5$.

#### **2. Average Number of Customers in the Queue ($L_q$)**

*   **Definition:** The average number of customers waiting in the queue (not including those being served).
*   **Significance:** Directly reflects the waiting experience of customers. A higher $L_q$ means longer waits and increased customer frustration.
*   **Formula (General Concept):** Derived from Little's Law.
*   **Example:** If on average there are 3 customers waiting in line at a coffee shop, then $L_q = 3$.

#### **3. Average Waiting Time in the System ($W_s$)**

*   **Definition:** The average time a customer spends in the entire system, from arrival until service completion. This includes waiting time in the queue and service time.
*   **Significance:** A crucial measure for customer satisfaction. Customers are generally interested in how long they have to wait in total.
*   **Formula (General Concept):** Derived from Little's Law.
*   **Example:** If a customer, on average, spends 10 minutes from arriving at a restaurant to finishing their meal, then $W_s = 10$ minutes.

#### **4. Average Waiting Time in the Queue ($W_q$)**

*   **Definition:** The average time a customer spends waiting in the queue before their service begins.
*   **Significance:** Another critical measure for customer satisfaction and directly relates to the perceived efficiency of the service.
*   **Formula (General Concept):** Derived from Little's Law.
*   **Example:** If a customer, on average, waits 5 minutes in line before being served at a grocery store, then $W_q = 5$ minutes.

#### **5. Utilization Factor ($\rho$)**

*   **Definition:** The proportion of time that the service facility (server) is busy serving customers.
*   **Significance:** Indicates the efficiency of the service facility. A high utilization factor might suggest a need for more servers to avoid long queues, while a very low utilization might indicate overstaffing.
*   **Formula (General Concept):** $\rho = \frac{\text{Average arrival rate}}{\text{Average service rate}} = \frac{\lambda}{\mu}$ (for a single server system). For multi-server systems, it's $\rho = \frac{\lambda}{s\mu}$, where $s$ is the number of servers.
*   **Important Note:** For a stable system, the arrival rate ($\lambda$) must be less than the total service capacity ($s\mu$). So, $\rho < 1$.
*   **Example:** If a single cashier serves customers at an average rate of 20 customers per hour, and customers arrive at an average rate of 15 customers per hour, then $\rho = \frac{15}{20} = 0.75$ or 75%. This means the cashier is busy 75% of the time.

#### **6. Probability of Zero Customers in the System ($P_0$)**

*   **Definition:** The probability that there are no customers in the queuing system (neither waiting nor being served).
*   **Significance:** A low $P_0$ indicates a busy system, while a high $P_0$ suggests that the service facility is often idle.
*   **Formula:** Varies depending on the specific queuing model (e.g., M/M/1, M/M/c).
*   **Example:** In an M/M/1 system, $P_0 = 1 - \rho$. If $\rho = 0.75$, then $P_0 = 1 - 0.75 = 0.25$. This means there is a 25% chance the system is empty.

#### **7. Probability of $n$ Customers in the System ($P_n$)**

*   **Definition:** The probability that there are exactly $n$ customers in the queuing system.
*   **Significance:** Helps to understand the distribution of customers in the system and identify the likelihood of certain congestion levels.
*   **Formula:** Varies depending on the specific queuing model.
*   **Example:** For an M/M/1 system, $P_n = \rho^n P_0 = \rho^n (1-\rho)$. If $\rho = 0.75$, then $P_2 = (0.75)^2 (1 - 0.75) = 0.5625 \times 0.25 = 0.140625$. There's a 14.0625% chance there are exactly 2 customers in the system.

#### **8. Probability of Waiting ($P(\text{wait})$)**

*   **Definition:** The probability that an arriving customer will have to wait in the queue before being served.
*   **Significance:** Directly relates to the likelihood of a customer experiencing a queue.
*   **Formula:** For a single-server system (like M/M/1), $P(\text{wait}) = \rho$. For multi-server systems, it's more complex and depends on the probability of all servers being busy.
*   **Example:** In an M/M/1 system with $\rho = 0.75$, $P(\text{wait}) = 0.75$. This means 75% of arriving customers will have to wait.

---

### **Little's Law:**

Little's Law is a fundamental theorem in queuing theory that provides a powerful relationship between the average number of entities in a system and the average rate at which they flow through it. It applies to any stable system where the arrival rate equals the departure rate in the long run.

*   **Statement:** For any stable queuing system, the average number of entities in the system ($L$) is equal to the average arrival rate ($\lambda$) multiplied by the average time an entity spends in the system ($W$).
*   **Formulas:**
    *   $L_s = \lambda \times W_s$
    *   $L_q = \lambda \times W_q$

*   **Significance:** Little's Law is remarkably general and does not depend on the arrival or service time distributions. It allows us to infer one performance measure if we know the other two.
*   **Example:** If a call center receives an average of 100 calls per hour ($\lambda = 100$), and the average time a call spends in the system (waiting + talking) is 6 minutes (0.1 hours), then the average number of calls in the system is $L_s = 100 \text{ calls/hour} \times 0.1 \text{ hours/call} = 10$ calls.

---

### **Performance Measures for Specific Queuing Models:**

While Little's Law is general, specific formulas exist for common queuing models (e.g., M/M/1, M/M/c). These formulas are derived using probability theory and Markov chains.

**1. M/M/1 Queuing System (Single Server, Poisson Arrivals, Exponential Service Times):**

*   **Assumptions:**
    *   Arrivals follow a Poisson process with rate $\lambda$.
    *   Service times are exponentially distributed with rate $\mu$.
    *   There is a single server ($s=1$).
    *   The queue discipline is First-Come, First-Served (FCFS).
    *   The system capacity is infinite.
    *   The calling population is infinite.
*   **Key Formulas:**
    *   **Utilization Factor ($\rho$):** $\rho = \frac{\lambda}{\mu}$ (Requires $\lambda < \mu$ for stability)
    *   **Probability of Zero Customers ($P_0$):** $P_0 = 1 - \rho$
    *   **Probability of $n$ Customers in the System ($P_n$):** $P_n = \rho^n (1 - \rho)$
    *   **Average Number of Customers in the System ($L_s$):** $L_s = \frac{\rho}{1 - \rho} = \frac{\lambda}{\mu - \lambda}$
    *   **Average Number of Customers in the Queue ($L_q$):** $L_q = \frac{\rho^2}{1 - \rho} = \frac{\lambda^2}{\mu(\mu - \lambda)}$
    *   **Average Waiting Time in the System ($W_s$):** $W_s = \frac{1}{\mu - \lambda}$ (Using Little's Law: $W_s = L_s / \lambda$)
    *   **Average Waiting Time in the Queue ($W_q$):** $W_q = \frac{\lambda}{\mu(\mu - \lambda)}$ (Using Little's Law: $W_q = L_q / \lambda$)
    *   **Probability of Waiting ($P(\text{wait})$):** $P(\text{wait}) = \rho$

*   **Example (M/M/1):** A single bank teller serves customers. Customers arrive at an average rate of 10 per hour ($\lambda = 10$). The teller can serve an average of 12 customers per hour ($\mu = 12$).
    *   Utilization: $\rho = \frac{10}{12} = \frac{5}{6} \approx 0.833$
    *   Average number of customers in the system: $L_s = \frac{10}{12-10} = \frac{10}{2} = 5$ customers.
    *   Average number of customers in the queue: $L_q = \frac{10^2}{12(12-10)} = \frac{100}{12 \times 2} = \frac{100}{24} \approx 4.17$ customers.
    *   Average waiting time in the system: $W_s = \frac{1}{12-10} = \frac{1}{2}$ hours = 30 minutes.
    *   Average waiting time in the queue: $W_q = \frac{10}{12(12-10)} = \frac{10}{24}$ hours = 25 minutes.

**2. M/M/c Queuing System (Multiple Servers, Poisson Arrivals, Exponential Service Times):**

*   **Assumptions:** Same as M/M/1, but with $c$ servers.
*   **Key Formulas (Refer to Taha, Paneerselvam, or Hillier & Lieberman for detailed derivations and formulas):**
    *   **Utilization Factor ($\rho$):** $\rho = \frac{\lambda}{c\mu}$ (Requires $\lambda < c\mu$ for stability)
    *   **Probability of Zero Customers ($P_0$):**
        $$P_0 = \left[ \sum_{n=0}^{c-1} \frac{(\lambda/\mu)^n}{n!} + \frac{(\lambda/\mu)^c}{c!} \frac{1}{1 - (\lambda/c\mu)} \right]^{-1}$$
    *   **Probability of $n$ Customers in the Queue ($P(n \text{ in queue})$):**
        *   For $n < c$: $P(n \text{ in queue}) = P_n = \frac{(\lambda/\mu)^n}{n!} P_0$
        *   For $n \ge c$: $P(n \text{ in queue}) = P_n = \frac{(\lambda/\mu)^n}{c! c^{n-c}} P_0$
    *   **Probability that an arriving customer has to wait ($P(\text{wait})$):** This is the probability that all $c$ servers are busy.
        $$P(\text{wait}) = P_c = \frac{(\lambda/\mu)^c}{c!} \frac{1}{1 - (\lambda/c\mu)} P_0$$
    *   **Average Number of Customers in the Queue ($L_q$):**
        $$L_q = \frac{P(\text{wait}) \rho}{1 - \rho}$$
        Where $\rho = \lambda / (c\mu)$ is the average utilization per server.
    *   **Average Waiting Time in the Queue ($W_q$):** (Using Little's Law: $W_q = L_q / \lambda$)
        $$W_q = \frac{L_q}{\lambda}$$
    *   **Average Number of Customers in the System ($L_s$):** $L_s = L_q + \frac{\lambda}{\mu}$
    *   **Average Waiting Time in the System ($W_s$):** $W_s = W_q + \frac{1}{\mu}$

*   **Example (M/M/2):** A supermarket has 2 checkout counters. Customers arrive at an average rate of 30 per hour ($\lambda = 30$). Each counter can serve an average of 20 customers per hour ($\mu = 20$).
    *   Total service capacity: $c\mu = 2 \times 20 = 40$ customers per hour.
    *   Utilization: $\rho = \frac{\lambda}{c\mu} = \frac{30}{40} = 0.75$.
    *   To calculate $P_0$, $L_q$, $W_q$, etc., you would use the M/M/c formulas, which involve calculating $P_0$ first. Let's assume $P_0$ is calculated to be approximately 0.125 (for illustrative purposes, exact calculation is complex).
    *   Probability of waiting ($P(\text{wait}) = P_2$): This would be the probability that both counters are busy.
    *   $L_q$ and $W_q$ would then be calculated using the respective formulas.

---

### **Importance and Application of Performance Measures:**

*   **Resource Allocation:** Helps determine the optimal number of servers (e.g., tellers, machines, call center agents) needed to meet desired service levels. High utilization might signal a need for more resources, while low utilization might suggest overstaffing.
*   **Customer Satisfaction:** Measures like $W_q$ and $W_s$ directly impact how customers perceive the service. Reducing waiting times can significantly improve customer loyalty.
*   **Cost Analysis:** Balancing the cost of providing service (e.g., staffing costs) against the cost of waiting (e.g., lost customers, idle time).
*   **System Design:** Useful in designing new service systems, such as setting up call centers, retail store layouts, or manufacturing processes.
*   **Performance Improvement:** By tracking performance measures, managers can identify bottlenecks and implement strategies to improve efficiency.

---

### **Key Points to Remember:**

*   **Little's Law ($L = \lambda W$) is universally applicable to stable systems.**
*   **For stability in any queuing system, the arrival rate must be less than the total service capacity ($\lambda < s\mu$).**
*   **Utilization ($\rho$) is a key indicator of system congestion.**
*   **$W_q$ is the primary measure of customer waiting experience.**
*   **The choice of queuing model (e.g., M/M/1, M/M/c) dictates the specific formulas for performance measures.**
*   **Engineers use these measures to optimize system design and operational efficiency.**

---

### **Practice Questions/Exercises:**

**Question 1:**
A single barber shop serves customers who arrive according to a Poisson process at a rate of 4 customers per hour. The barber can serve customers at an average rate of 5 customers per hour, with service times being exponentially distributed.
Calculate the following performance measures for this barbershop, assuming it's an M/M/1 system:
a) The utilization factor of the barber.
b) The average number of customers in the system.
c) The average number of customers waiting in the queue.
d) The average time a customer spends waiting in the queue.
e) The average time a customer spends in the system.
f) The probability that the barber is idle.

**Answer 1:**
Given: $\lambda = 4$ customers/hour, $\mu = 5$ customers/hour.

a) **Utilization Factor ($\rho$):**
   $\rho = \frac{\lambda}{\mu} = \frac{4}{5} = 0.8$

b) **Average number of customers in the system ($L_s$):**
   $L_s = \frac{\lambda}{\mu - \lambda} = \frac{4}{5 - 4} = \frac{4}{1} = 4$ customers.

c) **Average number of customers waiting in the queue ($L_q$):**
   $L_q = \frac{\lambda^2}{\mu(\mu - \lambda)} = \frac{4^2}{5(5 - 4)} = \frac{16}{5(1)} = \frac{16}{5} = 3.2$ customers.

d) **Average time a customer spends waiting in the queue ($W_q$):**
   $W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{4}{5(5 - 4)} = \frac{4}{5}$ hours.
   $W_q = \frac{4}{5} \text{ hours} \times 60 \text{ minutes/hour} = 48$ minutes.

e) **Average time a customer spends in the system ($W_s$):**
   $W_s = \frac{1}{\mu - \lambda} = \frac{1}{5 - 4} = \frac{1}{1} = 1$ hour.
   $W_s = 1 \text{ hour} \times 60 \text{ minutes/hour} = 60$ minutes.
   *(Alternatively, using Little's Law: $W_s = L_s / \lambda = 4 / 4 = 1$ hour)*

f) **Probability that the barber is idle ($P_0$):**
   $P_0 = 1 - \rho = 1 - 0.8 = 0.2$

---

**Question 2:**
A customer service center has 3 identical agents who can handle calls. Calls arrive at a rate of 20 calls per hour, and each agent can handle an average of 8 calls per hour. Assume the system is M/M/3.
a) Calculate the utilization factor of each agent.
b) Calculate the probability that an arriving customer has to wait.
c) Calculate the average number of calls waiting in the queue.
d) Calculate the average waiting time in the queue for a call.

**Answer 2:**
Given: $\lambda = 20$ calls/hour, $c = 3$ agents, $\mu = 8$ calls/hour per agent.

a) **Utilization factor of each agent ($\rho$):**
   $\rho = \frac{\lambda}{c\mu} = \frac{20}{3 \times 8} = \frac{20}{24} = \frac{5}{6} \approx 0.833$

b) **Probability that an arriving customer has to wait ($P(\text{wait}) = P_c$):**
   This requires calculating $P_0$ first.
   $\lambda/\mu = 20/8 = 2.5$.
   $$P_0 = \left[ \sum_{n=0}^{2} \frac{(2.5)^n}{n!} + \frac{(2.5)^3}{3!} \frac{1}{1 - (20/24)} \right]^{-1}$$
   $$P_0 = \left[ \frac{(2.5)^0}{0!} + \frac{(2.5)^1}{1!} + \frac{(2.5)^2}{2!} + \frac{(2.5)^3}{6} \frac{1}{1/6} \right]^{-1}$$
   $$P_0 = \left[ 1 + 2.5 + \frac{6.25}{2} + \frac{15.625}{6} \times 6 \right]^{-1}$$
   $$P_0 = \left[ 1 + 2.5 + 3.125 + 15.625 \right]^{-1}$$
   $$P_0 = \left[ 22.25 \right]^{-1} \approx 0.04494$$

   Now, calculate $P_c$ (probability that all 3 agents are busy, i.e., $P_3$):
   $$P_3 = \frac{(\lambda/\mu)^c}{c!} \frac{1}{1 - (\lambda/c\mu)} P_0$$
   $$P_3 = \frac{(2.5)^3}{3!} \frac{1}{1 - (20/24)} P_0$$
   $$P_3 = \frac{15.625}{6} \frac{1}{1/6} \times 0.04494$$
   $$P_3 = 2.60417 \times 6 \times 0.04494 \approx 0.702$$
   So, the probability that an arriving customer has to wait is approximately 0.702 or 70.2%.

c) **Average number of calls waiting in the queue ($L_q$):**
   $L_q = \frac{P(\text{wait}) \rho}{1 - \rho} = \frac{0.702 \times (5/6)}{1 - (5/6)} = \frac{0.702 \times 0.833}{1/6} \approx \frac{0.5847}{0.1667} \approx 3.507$ calls.

d) **Average waiting time in the queue for a call ($W_q$):**
   Using Little's Law: $W_q = \frac{L_q}{\lambda} = \frac{3.507 \text{ calls}}{20 \text{ calls/hour}} \approx 0.17535$ hours.
   $W_q \approx 0.17535 \text{ hours} \times 60 \text{ minutes/hour} \approx 10.52$ minutes.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **References:**

*   **Paneerselvam R. (2023).** *Operations Research* (Third edition). PHI. (Chapters on Queuing Theory).
*   **Taha H. A. (2019).** *Operations Research: An Introduction* (Tenth edition). Pearson. (Chapters on Queuing Theory).
*   **Hillier F. S., & Lieberman G. J. (2017).** *Introduction to Operations Research* (Tenth edition). McGraw Hill. (Chapters on Queuing Theory).

---

This detailed note covers the essential performance measures in queuing systems, their definitions, significance, formulas for M/M/1 and a brief mention of M/M/c, and includes practice problems with solutions. It aligns with the course outcomes by providing the knowledge to analyze queuing problems, a key aspect of applying quantitative techniques in engineering.