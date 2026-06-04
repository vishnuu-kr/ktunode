---
title: "Characteristics of Queuing Systems"
subject: "OPERATIONS RESEARCH"
module: "Module 4: Scope of queuing theory"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463634"
status: "completed"
scrapedAt: "2026-05-20T18:02:05.520Z"
---
# Operations Research: Module 4 - Scope of Queuing Theory

## Topic: Characteristics of Queuing Systems

This module delves into the fundamental components that define and characterize queuing systems. Understanding these characteristics is crucial for applying queuing theory effectively to analyze and optimize various real-world scenarios, from customer service to manufacturing processes. This topic directly supports **Course Outcome 5 (CO5): To solve problems using classical queuing theory models (Knowledge Level: K2, K3)** by providing the foundational understanding required to select and apply appropriate queuing models.

---

### 1. Introduction to Queuing Systems

A queuing system, often referred to as a waiting line system, describes a situation where customers (or entities) arrive seeking a service, wait in a queue if the service facility is busy, and then receive the service. The primary goal of studying queuing systems is to understand and improve the trade-off between the cost of providing service and the cost incurred due to customer waiting.

**Key Concepts:**

*   **Customer:** Any entity that arrives at the service facility seeking service. This can include people, machines, vehicles, data packets, etc.
*   **Server:** The entity that provides the service to the customers. This can be a person, a machine, a computer, etc.
*   **Queue:** The waiting line formed by customers who arrive when all servers are busy.
*   **Service Facility:** The location where the service is provided.

**Real-World Examples:**

*   Customers waiting at a bank teller.
*   Cars waiting at a traffic signal.
*   Patients waiting in a doctor's clinic.
*   Jobs waiting for processing in a computer system.
*   Airplanes waiting for a runway at an airport.

---

### 2. Fundamental Components of a Queuing System

A queuing system can be broken down into several key components, each with its own set of characteristics that influence the overall system performance.

---

#### 2.1. Arrival Process

The arrival process describes how customers enter the system. This is a critical factor in determining the queue length and waiting times.

**Key Concepts & Characteristics:**

*   **Arrival Pattern:** The pattern in which customers arrive. This can be deterministic (fixed intervals) or probabilistic (random).
    *   **Deterministic Arrivals:** Customers arrive at fixed, regular intervals. (Less common in real-world scenarios).
    *   **Probabilistic Arrivals:** Customers arrive randomly. The most common distribution for modeling random arrivals is the **Poisson distribution**.
        *   **Poisson Distribution:** If arrivals follow a Poisson process, the probability of *n* arrivals in a given time interval is given by:
            $P(n) = \frac{(\lambda t)^n e^{-\lambda t}}{n!}$
            where:
            *   $\lambda$ is the average arrival rate (number of customers per unit of time).
            *   $t$ is the time interval.
            *   $n$ is the number of arrivals.
            *   $e$ is the base of the natural logarithm (approximately 2.71828).
*   **Arrival Distribution:** The probability distribution describing the time between consecutive arrivals (inter-arrival times). If the arrival process is Poisson, the inter-arrival times are **exponentially distributed**.
    *   **Exponential Distribution:** The probability density function (PDF) for the inter-arrival time ($T_a$) is:
        $f(T_a) = \lambda e^{-\lambda T_a}$, for $T_a \geq 0$.
        The mean inter-arrival time is $1/\lambda$.
*   **Batch Arrivals:** Customers may arrive in groups (e.g., a family arriving at a restaurant). This can be modeled by considering the group size as a random variable.
*   **Population Size:** The total number of potential customers that can arrive.
    *   **Infinite Population:** The number of potential customers is so large that the arrival of one customer does not significantly affect the arrival rate of others (e.g., customers arriving at a supermarket). This is the most common assumption.
    *   **Finite Population:** The number of potential customers is limited and finite. The arrival of a customer reduces the number of remaining potential customers (e.g., machines in a factory that require maintenance).

**Important Points to Remember:**

*   A Poisson arrival process is characterized by its "memoryless" property, meaning the probability of an arrival in the next time interval is independent of how much time has already passed since the last arrival.
*   Understanding the arrival pattern is crucial for predicting queue buildup.

**Reference & Content from Textbooks:**

*   **Gupta & Hira (2008):** Likely discusses arrival patterns, Poisson distribution, and its importance in modeling arrivals. They may also cover the concept of inter-arrival times and their distributions.
*   **Srinivasan (2017):** Will elaborate on arrival processes, distinguishing between deterministic and stochastic arrivals, and providing detailed explanations of the Poisson process and its properties.
*   **Vohra & Arora (2021):** Will cover the fundamental aspects of arrival processes, including the mathematical formulation of the Poisson distribution and its application.

---

#### 2.2. Queue Discipline

Queue discipline refers to the set of rules that govern the order in which customers are selected from the queue for service. It dictates which customer gets served next.

**Key Concepts & Characteristics:**

*   **FIFO (First-In, First-Out) / FCFS (First-Come, First-Served):** The customer who arrives first in the queue is the first one to be served. This is the most common and generally considered the fairest discipline.
    *   *Example:* Supermarket checkout lines, most customer service desks.
*   **LIFO (Last-In, First-Out) / LCFS (Last-Come, First-Served):** The customer who arrives last in the queue is the first one to be served.
    *   *Example:* A stack of plates where you take the top one; sometimes used in specialized industrial processes.
*   **SIRO (Service In Random Order):** Customers are selected for service randomly from the queue, irrespective of their arrival order.
    *   *Example:* A lottery system where tickets are drawn randomly.
*   **Priority Discipline:** Customers are assigned priorities, and those with higher priorities are served before those with lower priorities, regardless of arrival order. Within the same priority level, FIFO is usually applied.
    *   **Preemptive Priority:** If a higher-priority customer arrives while a lower-priority customer is being served, the server immediately switches to the higher-priority customer, interrupting the current service.
    *   **Non-Preemptive Priority:** If a higher-priority customer arrives while a lower-priority customer is being served, the server continues to serve the current customer until completion before attending to the higher-priority customer.
    *   *Example:* In a hospital, an emergency patient (high priority) will be seen before a scheduled appointment (lower priority), potentially preempting the scheduled patient if they arrive during their consultation.

**Important Points to Remember:**

*   Queue discipline significantly impacts waiting times for different customer groups, especially in priority systems.
*   FIFO is the most common and often the desired discipline for fairness.

**Reference & Content from Textbooks:**

*   **Srinivasan (2017):** Will detail various queue disciplines, explaining their mechanisms and implications on system performance.
*   **Gupta & Hira (2008):** Will likely cover FIFO, LIFO, SIRO, and the concept of priority queues, perhaps with basic examples.
*   **Rao (Wiley Eastern):** As an optimization reference, it might analyze the efficiency and fairness aspects of different queue disciplines.

---

#### 2.3. Service Mechanism

The service mechanism describes the process by which customers are served and how long service takes.

**Key Concepts & Characteristics:**

*   **Number of Servers:** The quantity of parallel service facilities available.
    *   **Single Server:** Only one server handles all arriving customers.
        *   *Example:* A single ATM machine.
    *   **Multiple Servers (Parallel Servers):** Multiple servers are available, and each can serve one customer at a time. Customers can join any available server.
        *   *Example:* Multiple tellers at a bank, multiple checkout counters at a supermarket.
*   **Service Pattern:** The time it takes to serve a customer. This can be deterministic or probabilistic.
    *   **Deterministic Service:** All customers require a fixed, constant amount of service time. (Less common).
    *   **Probabilistic Service:** Service times vary randomly among customers. The most common distribution for modeling random service times is the **exponential distribution**.
        *   **Exponential Distribution:** If service times follow an exponential distribution, the probability of a service taking time $T_s$ or less is given by:
            $P(T_s \leq t) = 1 - e^{-\mu t}$
            where:
            *   $\mu$ is the average service rate (number of customers served per unit of time by a single server when busy).
            *   $t$ is the service time.
            The mean service time is $1/\mu$.
*   **Service Rate:** The average rate at which a server can serve customers when it is busy. This is denoted by $\mu$.

**Important Points to Remember:**

*   The choice between single and multiple servers depends on the arrival rate, desired service level, and cost considerations.
*   The service rate $(\mu)$ is a key parameter in determining system capacity. For a single server, the system is stable only if the arrival rate $(\lambda)$ is less than the service rate $(\mu)$ (i.e., $\lambda < \mu$). For multiple servers, the total service capacity is $c\mu$, where $c$ is the number of servers, and stability requires $\lambda < c\mu$.

**Reference & Content from Textbooks:**

*   **Srinivasan (2017):** Will thoroughly cover single vs. multiple servers, deterministic vs. stochastic service times, and the exponential service time distribution.
*   **Gupta & Hira (2008):** Will likely provide the basic definitions of service mechanisms and the significance of the service rate.
*   **Vohra & Arora (2021):** Will explain the concepts of server configuration and service time distributions, including exponential service.

---

#### 2.4. System Capacity

System capacity refers to the maximum number of customers that can be present in the queuing system (both waiting in the queue and being served).

**Key Concepts & Characteristics:**

*   **Infinite Capacity:** The system can accommodate an unlimited number of customers. There is no limit on the queue length.
    *   *Example:* Most general waiting lines where space is not a constraint.
*   **Finite Capacity:** The system can only accommodate a limited number of customers. If the system is full when a customer arrives, that customer is **"lost"** or **"blocked"** and does not enter the system.
    *   *Example:* A small waiting room with limited seating, a telephone system with a fixed number of lines.

**Important Points to Remember:**

*   Finite capacity systems introduce the concept of **blocking probability**, which is the probability that an arriving customer finds the system full and is denied service.
*   Understanding capacity is crucial for capacity planning and managing customer loss.

**Reference & Content from Textbooks:**

*   **Srinivasan (2017):** Will discuss both infinite and finite capacity models, highlighting the implications of blocking.
*   **Gupta & Hira (2008):** May introduce the concept of finite capacity and its impact on arrival rates.
*   **Hillier & Lieberman (Eleventh Edition):** Their comprehensive text will likely provide detailed analysis of finite capacity systems and the associated blocking probabilities.

---

#### 2.5. Queuing Model Notation (Kendall's Notation)

A standardized notation, known as **Kendall's Notation**, is used to describe queuing systems concisely. It typically follows the format: **A/B/c/K/N/D**

**Key Concepts & Definitions:**

*   **A:** The distribution of inter-arrival times.
*   **B:** The distribution of service times.
*   **c:** The number of parallel servers.
*   **K:** The capacity of the system (maximum number of customers allowed in the system). If omitted, it is assumed to be infinite.
*   **N:** The population size from which customers arrive. If omitted, it is assumed to be infinite.
*   **D:** The queue discipline. If omitted, it is assumed to be FIFO.

**Common Notations for A and B:**

*   **M:** Markovian (Poisson process for arrivals, Exponential distribution for service).
*   **D:** Deterministic (constant inter-arrival or service times).
*   **Ek:** Erlang distribution with parameter *k*.
*   **GI:** General independent distribution.

**Examples of Kendall's Notation:**

*   **M/M/1:** A single-server system with Poisson arrivals and exponential service times, infinite capacity, and infinite population. This is the simplest and most fundamental queuing model.
*   **M/M/c:** A multi-server system with Poisson arrivals and exponential service times, infinite capacity, and infinite population.
*   **M/D/1:** A single-server system with Poisson arrivals and deterministic service times.
*   **M/M/1/K:** A single-server system with Poisson arrivals and exponential service times, but with a finite system capacity of K customers.
*   **M/M/c/c:** An *m*-server **Erlang loss system**, where $c$ is the number of servers. If all servers are busy, arriving customers are blocked (lost). The system capacity is equal to the number of servers, and there's no waiting line.

**Important Points to Remember:**

*   Kendall's Notation provides a universal language for describing queuing systems, allowing for clear communication and selection of appropriate models.
*   The most commonly studied models are those with 'M' for both arrival and service distributions due to their tractability and wide applicability.

**Reference & Content from Textbooks:**

*   **Srinivasan (2017):** Will extensively use and explain Kendall's Notation as the standard for classifying queuing models.
*   **Gupta & Hira (2008):** Will introduce Kendall's Notation and explain the meaning of each component.
*   **Hillier & Lieberman (Eleventh Edition):** Their text will likely provide a comprehensive overview of Kendall's Notation and its variations.
*   **Ravindran, Phillips, and Solberg (1987):** Will undoubtedly cover Kendall's Notation as a fundamental aspect of queuing theory.

---

### 3. Performance Measures of Queuing Systems

Once a queuing system is characterized, we can analyze its performance using various metrics. These metrics help in evaluating the efficiency of the system and making decisions for improvement.

**Key Concepts & Definitions:**

*   **L:** The average number of customers in the system (waiting in queue + being served).
*   **Lq:** The average number of customers in the queue (waiting).
*   **W:** The average time a customer spends in the system (waiting time + service time).
*   **Wq:** The average time a customer spends waiting in the queue.
*   **$\rho$ (rho):** The server utilization or traffic intensity. It is the proportion of time the server(s) are busy.
    *   For a single server: $\rho = \lambda / \mu$
    *   For multiple servers ($c$ servers): $\rho = \lambda / (c\mu)$
    *   For stability, $\rho < 1$ (or $\lambda < \mu$ for a single server, $\lambda < c\mu$ for multiple servers).
*   **$P_0$:** The probability that there are zero customers in the system (the system is idle).
*   **$P_n$:** The probability that there are exactly *n* customers in the system.
*   **$P_{wait}$:** The probability that an arriving customer has to wait (i.e., has to join the queue). This is the probability that all servers are busy.
*   **Blocking Probability ($P_b$):** In finite capacity systems, this is the probability that an arriving customer is denied service because the system is full.

**Little's Law:**

A fundamental relationship that connects the average number of customers in a system to the average time spent in the system, and similarly for the queue. It holds for any stable system where customers are neither created nor destroyed.

*   **Little's Law for the System:** $L = \lambda W$
*   **Little's Law for the Queue:** $L_q = \lambda W_q$

**Important Points to Remember:**

*   Little's Law is a powerful tool that can be used to derive other performance measures or to check the consistency of results.
*   $\rho$ is a key indicator of system congestion. High utilization might lead to long waiting times.
*   The goal is often to find an optimal balance between server utilization and customer waiting times, considering the costs associated with both.

**Reference & Content from Textbooks:**

*   **Srinivasan (2017):** Will introduce all these performance measures and provide formulas for calculating them for different queuing models. Little's Law will be a central concept.
*   **Gupta & Hira (2008):** Will define these performance measures and likely provide introductory formulas, especially for the M/M/1 model.
*   **Vohra & Arora (2021):** Will cover performance metrics and their calculation, emphasizing the trade-offs between service cost and waiting cost.
*   **Hillier & Lieberman (Eleventh Edition):** Will offer in-depth derivations and analyses of these performance measures for various queuing models.

---

### 4. Practice Questions and Exercises

**Question 1:**

A bank has a single teller. Customers arrive at the teller at an average rate of 20 per hour, and their arrivals follow a Poisson distribution. The teller can serve customers at an average rate of 30 per hour, and service times are exponentially distributed.

a) What is the average arrival rate ($\lambda$)?
b) What is the average service rate ($\mu$)?
c) What is Kendall's notation for this system?
d) Calculate the server utilization ($\rho$).
e) Is the system stable?
f) What is the average number of customers in the system ($L$)?
g) What is the average number of customers in the queue ($L_q$)?
h) What is the average time a customer spends in the system ($W$)?
i) What is the average time a customer spends waiting in the queue ($W_q$)?
j) What is the probability that an arriving customer has to wait ($P_{wait}$)?

**Answer 1:**

a) $\lambda = 20$ customers/hour
b) $\mu = 30$ customers/hour
c) M/M/1
d) $\rho = \lambda / \mu = 20 / 30 = 2/3 \approx 0.667$
e) Yes, because $\rho < 1$.
f) $L = \rho / (1 - \rho) = (2/3) / (1 - 2/3) = (2/3) / (1/3) = 2$ customers.
g) $L_q = \lambda^2 / (\mu(\mu - \lambda)) = (20^2) / (30(30 - 20)) = 400 / (30 * 10) = 400 / 300 = 4/3 \approx 1.333$ customers.
   Alternatively, using $L_q = \rho L = (2/3) * 2 = 4/3$.
h) $W = L / \lambda = 2 / 20 = 1/10$ hours = 6 minutes.
   Alternatively, $W = 1 / (\mu - \lambda) = 1 / (30 - 20) = 1/10$ hours = 6 minutes.
i) $W_q = L_q / \lambda = (4/3) / 20 = 4/60 = 1/15$ hours = 4 minutes.
   Alternatively, $W_q = W - 1/\mu = 6 \text{ minutes} - (1/30) \text{ hours} = 6 \text{ minutes} - 2 \text{ minutes} = 4 \text{ minutes}$.
j) $P_{wait} = \rho = 2/3 \approx 0.667$. This is the probability that the server is busy.

---

**Question 2:**

A call center has 3 identical servers. Customers arrive at a rate of 10 per hour, following a Poisson process. Service times are exponentially distributed with an average service rate of 4 customers per hour per server.

a) What is Kendall's notation for this system?
b) Calculate the total service capacity of the system.
c) Calculate the server utilization ($\rho$).
d) Is the system stable?
e) What is the average number of customers in the system ($L$)? (Requires advanced formulas for M/M/c)
f) What is the average number of customers waiting in the queue ($L_q$)? (Requires advanced formulas for M/M/c)

**Answer 2:**

a) M/M/3
b) Total service capacity = Number of servers * Service rate per server = 3 * 4 = 12 customers/hour.
c) $\rho = \lambda / (c\mu) = 10 / (3 * 4) = 10 / 12 = 5/6 \approx 0.833$.
d) Yes, because $\rho < 1$.

*(Note: Calculating L and Lq for M/M/c systems typically requires using specific formulas involving $P_0$. The calculation of $P_0$ itself is complex and often found in textbooks or calculated using software/tables. For this level, understanding the notation and calculating $\rho$ and stability is key.)*

---

### 5. Key Points to Remember

*   **Queuing systems are defined by their arrival process, queue discipline, service mechanism, system capacity, and population size.**
*   **Poisson arrivals and exponential service times are the most common assumptions in queuing theory due to their mathematical tractability.**
*   **Kendall's Notation (A/B/c/K/N/D) is essential for classifying and describing queuing systems.**
*   **Server utilization ($\rho$) is a critical metric indicating the intensity of traffic in the system.**
*   **System stability requires $\rho < 1$ (i.e., arrival rate must be less than total service capacity).**
*   **Little's Law ($L = \lambda W$ and $L_q = \lambda W_q$) provides fundamental relationships between average quantities in a stable system.**
*   **The objective of queuing analysis is to balance service costs with waiting costs.**

---

### 6. Connection to Course Outcomes

This topic directly contributes to **CO5: To solve problems using classical queuing theory models (Knowledge Level: K2, K3)**. By understanding the characteristics of queuing systems, students gain the foundational knowledge to:

*   **Identify and model** real-world waiting line situations using appropriate queuing system parameters (K2).
*   **Apply** the concepts of arrival rates, service rates, and queue disciplines to various scenarios (K2).
*   **Use Kendall's notation** to classify and select the correct queuing model for analysis (K2).
*   **Calculate basic performance measures** like server utilization ($\rho$) and assess system stability (K3).
*   **Understand the fundamental components** that form the basis for solving more complex queuing problems (K2).

The detailed breakdown of each characteristic equips students with the ability to analyze the structure of a waiting line system, a prerequisite for applying the mathematical formulas and models covered in subsequent topics within queuing theory.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
