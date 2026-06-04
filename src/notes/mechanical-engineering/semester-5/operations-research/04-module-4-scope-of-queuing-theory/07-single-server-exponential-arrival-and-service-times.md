---
title: "Single-server exponential arrival and service times"
subject: "OPERATIONS RESEARCH"
module: "Module 4: Scope of queuing theory"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463637"
status: "completed"
scrapedAt: "2026-05-20T18:02:07.569Z"
---
## Operations Research: Module 4 - Scope of Queuing Theory

### Topic: Single-Server Exponential Arrival and Service Times (M/M/1 Queue)

This module introduces fundamental concepts of queuing theory, focusing on the simplest and most widely studied model: the **M/M/1 queue**. This model is crucial for understanding waiting lines and their management in various operational settings.

---

### 1. Introduction to Queuing Theory

**Queuing theory** is the mathematical study of waiting lines, or queues. It analyzes the behavior of systems where customers arrive seeking service, wait if necessary, and are eventually served by a limited number of servers. The goal is to understand and improve the efficiency of these systems by minimizing waiting times, resource utilization, and costs.

**Key Concepts:**

*   **Customer:** An entity requiring service (e.g., a person, a vehicle, a job).
*   **Server:** An entity providing the service (e.g., a cashier, a machine, a technician).
*   **Queue:** The line or waiting space formed by customers waiting for service.
*   **Arrival Process:** The pattern in which customers arrive at the system.
*   **Service Process:** The pattern in which customers are served by the server.
*   **System Capacity:** The maximum number of customers allowed in the system (including those being served).
*   **Queue Discipline:** The rule used to select the next customer from the queue for service (e.g., First-Come, First-Served (FCFS), Last-Come, First-Served (LCFS), Priority).

**Relevance to Course Outcomes:**

*   **CO5: To solve problems using classical queuing theory models (Knowledge Level: K2, K3)**
    This entire module directly addresses CO5. Understanding the M/M/1 model is the foundation for solving problems using classical queuing theory.

---

### 2. The M/M/1 Queue Model

The M/M/1 model is characterized by specific assumptions about the arrival and service processes.

**Assumptions:**

1.  **Arrival Process is Poisson:**
    *   Customers arrive at the system according to a Poisson process.
    *   This means the time between consecutive arrivals follows an **exponential distribution**.
    *   The average arrival rate is denoted by **$\lambda$** (lambda).
    *   **Key Property:** The probability of $k$ arrivals in a time interval $t$ is given by $P(k; \lambda t) = \frac{e^{-\lambda t}(\lambda t)^k}{k!}$.

2.  **Service Process is Exponential:**
    *   The time taken to serve each customer follows an **exponential distribution**.
    *   The average service rate per server is denoted by **$\mu$** (mu).
    *   **Key Property:** The probability of service time being less than or equal to $t$ is $P(T \le t) = 1 - e^{-\mu t}$.

3.  **Single Server:**
    *   There is only one server available to provide service.

4.  **Infinite Queue Capacity:**
    *   The system can accommodate an unlimited number of customers in the queue.

5.  **FIFO (First-In, First-Out) Queue Discipline:**
    *   Customers are served in the order they arrive.

**Notation:** The M/M/1 queue is often denoted as **M/M/1** by Kendall's notation, where:
    *   First M: Markovian (Poisson) arrivals.
    *   Second M: Markovian (Exponential) service times.
    *   1: Number of servers.

**Referenced from Textbooks:**
*   **Srinivasan, G. (2017)**: Likely covers the fundamental assumptions of M/M/1 in detail.
*   **Gupta & Hira (2008)**: Often provides a clear exposition of queuing models and their parameters ($\lambda, \mu$).
*   **Vohra & Arora (2021)**: Will also detail the M/M/1 assumptions, potentially with application examples.

---

### 3. Performance Measures of the M/M/1 Queue

We are interested in various metrics to evaluate the performance of an M/M/1 system.

**Key Definitions and Formulas:**

*   **Arrival Rate ($\lambda$):** The average number of customers arriving per unit of time.
*   **Service Rate ($\mu$):** The average number of customers the server can serve per unit of time.
*   **Traffic Intensity ($\rho$):** The ratio of the arrival rate to the service rate.
    *   **$\rho = \frac{\lambda}{\mu}$**
    *   **Important Note:** For the system to be stable (i.e., for the queue not to grow infinitely), we must have $\rho < 1$, which means $\lambda < \mu$. This signifies that the server is busy less than 100% of the time on average.

*   **Probability of the system being empty ($P_0$):** The probability that there are no customers in the system.
    *   **$P_0 = 1 - \rho$**

*   **Probability of having $n$ customers in the system ($P_n$):** The probability that there are exactly $n$ customers in the system (either being served or waiting).
    *   **$P_n = P_0 \rho^n = (1 - \rho) \rho^n$** for $n = 0, 1, 2, ...$

*   **Average number of customers in the system ($L$):** The average number of customers waiting in the queue plus the one being served.
    *   **$L = \sum_{n=0}^{\infty} n P_n = \frac{\rho}{1 - \rho} = \frac{\lambda}{\mu - \lambda}$**

*   **Average number of customers in the queue ($L_q$):** The average number of customers waiting in the queue, excluding the one being served.
    *   **$L_q = L - \rho = \frac{\rho^2}{1 - \rho} = \frac{\lambda^2}{\mu(\mu - \lambda)}$**

*   **Average time a customer spends in the system ($W$):** The total time a customer waits in the queue plus the time spent being served.
    *   **Little's Law:** $L = \lambda W$
    *   **$W = \frac{L}{\lambda} = \frac{1}{\mu - \lambda}$**

*   **Average time a customer spends in the queue ($W_q$):** The average waiting time for a customer before service begins.
    *   **Little's Law:** $L_q = \lambda W_q$
    *   **$W_q = \frac{L_q}{\lambda} = \frac{\rho}{\mu - \lambda} = \frac{\lambda}{\mu(\mu - \lambda)}$**

**Important Relationships:**
*   $W = W_q + \frac{1}{\mu}$ (Total time in system = waiting time + service time)
*   $L = L_q + \rho$ (Total customers = waiting customers + customer being served)

**Referenced from Textbooks:**
*   **Gupta & Hira (2008)** and **Vohra & Arora (2021)** are excellent sources for these formulas and derivations, often including step-by-step explanations.
*   **Srinivasan (2017)** would likely present these metrics with a focus on their practical interpretation in operational contexts.
*   **Hillier & Lieberman (Eleventh Edition)** is a comprehensive reference for detailed mathematical derivations.

---

### 4. Examples and Applications of M/M/1 Queue

The M/M/1 model is applicable in various scenarios:

*   **A single cashier at a grocery store.**
*   **A single toll booth on a highway.**
*   **A single machine processing jobs in a manufacturing plant.**
*   **A single customer service representative handling calls.**

**Example 1: Supermarket Checkout**

A supermarket has a single checkout counter. Customers arrive at an average rate of 20 per hour. The cashier can process an average of 24 customers per hour. Assuming arrivals follow a Poisson process and service times are exponentially distributed, calculate:

a) The traffic intensity.
b) The probability that the system is empty.
c) The probability that there are exactly 5 customers in the system.
d) The average number of customers in the system.
e) The average number of customers waiting in the queue.
f) The average time a customer spends in the system.
g) The average time a customer spends waiting in the queue.

**Solution:**

Given:
*   Arrival rate ($\lambda$) = 20 customers/hour
*   Service rate ($\mu$) = 24 customers/hour

**a) Traffic Intensity ($\rho$):**
$\rho = \frac{\lambda}{\mu} = \frac{20}{24} = \frac{5}{6} \approx 0.833$
Since $\rho < 1$, the system is stable.

**b) Probability of system being empty ($P_0$):**
$P_0 = 1 - \rho = 1 - \frac{5}{6} = \frac{1}{6} \approx 0.167$

**c) Probability of exactly 5 customers ($P_5$):**
$P_5 = (1 - \rho) \rho^5 = \frac{1}{6} \left(\frac{5}{6}\right)^5 = \frac{1}{6} \times \frac{3125}{7776} = \frac{3125}{46656} \approx 0.067$

**d) Average number of customers in the system ($L$):**
$L = \frac{\rho}{1 - \rho} = \frac{5/6}{1 - 5/6} = \frac{5/6}{1/6} = 5$ customers

**e) Average number of customers in the queue ($L_q$):**
$L_q = \frac{\rho^2}{1 - \rho} = \frac{(5/6)^2}{1 - 5/6} = \frac{25/36}{1/6} = \frac{25}{36} \times 6 = \frac{25}{6} \approx 4.167$ customers

**f) Average time a customer spends in the system ($W$):**
$W = \frac{1}{\mu - \lambda} = \frac{1}{24 - 20} = \frac{1}{4}$ hours
To convert to minutes: $W = \frac{1}{4} \times 60 = 15$ minutes.

**g) Average time a customer spends waiting in the queue ($W_q$):**
$W_q = \frac{\rho}{\mu - \lambda} = \frac{5/6}{24 - 20} = \frac{5/6}{4} = \frac{5}{24}$ hours
To convert to minutes: $W_q = \frac{5}{24} \times 60 = \frac{300}{24} = 12.5$ minutes.

---

### 5. Important Points to Remember

*   **Stability Condition ($\lambda < \mu$):** This is paramount. If $\lambda \ge \mu$, the queue will grow indefinitely, and the system will collapse.
*   **Poisson Arrivals & Exponential Service Times:** These are the defining characteristics of the M/M/1 model. Any deviation requires different queuing models.
*   **Traffic Intensity ($\rho$):** A key indicator of system utilization and a crucial factor in all performance measures. Higher $\rho$ leads to longer waiting times and more customers in the system.
*   **Little's Law ($L = \lambda W$, $L_q = \lambda W_q$):** A fundamental relationship that holds for most queuing systems, connecting average queue/system length to average waiting times.
*   **Interchangeability of Metrics:** The formulas are interconnected. If you know one metric, you can often calculate others.

---

### 6. Practice Questions/Exercises

**Question 1:**
A bank has a single ATM. Customers arrive at an average rate of 15 per hour. The ATM can serve customers at an average rate of 20 per hour. Assume Poisson arrivals and exponential service times.

Calculate:
a) The traffic intensity.
b) The probability that the ATM is idle.
c) The average number of customers waiting in the queue.
d) The average time a customer spends waiting in the queue.
e) The average time a customer spends in the system.

**Answer 1:**
Given: $\lambda = 15$ customers/hour, $\mu = 20$ customers/hour

a) $\rho = \frac{15}{20} = 0.75$

b) $P_0 = 1 - \rho = 1 - 0.75 = 0.25$

c) $L_q = \frac{\lambda^2}{\mu(\mu - \lambda)} = \frac{15^2}{20(20 - 15)} = \frac{225}{20(5)} = \frac{225}{100} = 2.25$ customers

d) $W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{15}{20(5)} = \frac{15}{100} = 0.15$ hours.
In minutes: $0.15 \times 60 = 9$ minutes.

e) $W = \frac{1}{\mu - \lambda} = \frac{1}{20 - 15} = \frac{1}{5} = 0.2$ hours.
In minutes: $0.2 \times 60 = 12$ minutes.

---

**Question 2:**
Consider a single-server system where customers arrive according to a Poisson process with rate $\lambda = 30$ per hour. The service times are exponentially distributed with a mean service time of 1 minute.

Calculate:
a) The service rate per hour.
b) The probability that there are more than 2 customers in the system.
c) The average number of customers in the system.

**Answer 2:**
Given: $\lambda = 30$ customers/hour. Mean service time = 1 minute = 1/60 hour.

a) Service rate ($\mu$) is the reciprocal of the mean service time:
$\mu = \frac{1}{1/60} = 60$ customers/hour.

b) Probability of more than 2 customers in the system ($P(n > 2)$) is $1 - P(n \le 2) = 1 - [P_0 + P_1 + P_2]$.
First, calculate $\rho$:
$\rho = \frac{\lambda}{\mu} = \frac{30}{60} = 0.5$

$P_0 = 1 - \rho = 1 - 0.5 = 0.5$
$P_1 = (1 - \rho) \rho^1 = 0.5 \times 0.5 = 0.25$
$P_2 = (1 - \rho) \rho^2 = 0.5 \times (0.5)^2 = 0.5 \times 0.25 = 0.125$

$P(n \le 2) = 0.5 + 0.25 + 0.125 = 0.875$
$P(n > 2) = 1 - 0.875 = 0.125$

Alternatively, $P(n > k) = \rho^{k+1}$. So, $P(n > 2) = \rho^{2+1} = \rho^3 = (0.5)^3 = 0.125$.

c) Average number of customers in the system ($L$):
$L = \frac{\rho}{1 - \rho} = \frac{0.5}{1 - 0.5} = \frac{0.5}{0.5} = 1$ customer.

---

### 7. Connection to Course Outcomes

*   **CO5: To solve problems using classical queuing theory models (Knowledge Level: K2, K3)**
    This topic provides the foundational knowledge (K2) to understand the M/M/1 model and the skills (K3) to apply its formulas to solve practical problems involving single-server systems with exponential arrivals and service times. By working through examples and practice questions, students develop the ability to analyze queue performance metrics.

---

### 8. Further Exploration (Beyond M/M/1)

While M/M/1 is fundamental, it's important to note that real-world systems might not always fit these assumptions. Future modules will likely explore:

*   **M/M/c:** Multiple servers.
*   **M/G/1:** General service times.
*   **G/M/1:** General arrivals.
*   **D/M/1:** Deterministic arrivals.

This foundational understanding of M/M/1 is crucial for grasping the complexities of these more advanced models.

---

This concludes the study notes for the M/M/1 queue model. Remember to practice applying the formulas and understanding the meaning of each performance metric.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
