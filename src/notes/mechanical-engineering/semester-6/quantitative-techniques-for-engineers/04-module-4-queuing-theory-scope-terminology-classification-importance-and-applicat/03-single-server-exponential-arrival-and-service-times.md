---
title: "Single-server exponential arrival and service times"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 4: Queuing theory: Scope, terminology, classification Importance and applications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a80"
status: "completed"
scrapedAt: "2026-05-20T18:07:41.094Z"
---
# Quantitative Techniques for Engineers: Study Notes

## Module 4: Queuing Theory

### Topic: Single-Server Exponential Arrival and Service Times

---

**Course Outcome Alignment:** This topic directly contributes to **CO5: To solve problems using classical queuing theory models (Knowledge Level: K3)**. Understanding the fundamentals of single-server queues is a prerequisite for applying more complex queuing models.

---

### 1. Introduction to Queuing Theory

Queuing theory is a mathematical study of waiting lines, or queues. It provides a framework for analyzing and optimizing systems where entities (customers, jobs, etc.) arrive, wait for service, receive service, and then depart.

**Key Concepts:**

*   **Queue:** A line of entities waiting for service.
*   **Customer:** An entity that arrives at the system, requires service, and then leaves. This can be a person, a machine, a data packet, etc.
*   **Server:** The entity that provides the service. This can be a cashier, a machine, a computer processor, etc.
*   **System:** The combination of the queue and the server(s).

**Textbook References:**

*   **Paneerselvam R., "Operations Research" (Third edition, 2023):** Chapter on Queuing Theory typically covers the basic structure and terminology.
*   **Taha, "Operations Research" (Tenth edition, 2019):** Similar to Paneerselvam, Taha provides a foundational understanding of queuing systems.
*   **Hillier & Lieberman, "Introduction to Operations Research" (Tenth edition, 2017):** Offers a comprehensive overview of queuing models and their analysis.

---

### 2. Scope, Terminology, Classification, and Importance of Queuing Theory

#### 2.1 Scope of Queuing Theory

Queuing theory has a broad scope and is applicable in numerous real-world scenarios. Its primary goal is to:

*   Determine the optimal number of servers.
*   Minimize waiting times for customers.
*   Maximize server utilization.
*   Understand the performance of queuing systems (e.g., average waiting time, queue length).

#### 2.2 Key Terminology in Queuing Systems

*   **Arrival Process:** Describes how customers arrive at the system.
    *   **Arrival Rate ($\lambda$):** The average number of customers arriving per unit of time.
    *   **Inter-arrival Time:** The time between successive arrivals.
*   **Service Process:** Describes how customers are served.
    *   **Service Rate ($\mu$):** The average number of customers served by a server per unit of time.
    *   **Service Time:** The time it takes to serve a customer.
*   **Queue Discipline:** The rule used to select the next customer from the queue for service.
    *   **FIFO (First-In, First-Out) / FCFS (First-Come, First-Served):** The customer who arrived first is served first.
    *   **LIFO (Last-In, First-Out):** The customer who arrived last is served first.
    *   **SIRO (Service In Random Order):** Customers are selected for service randomly.
    *   **Priority:** Customers are served based on their priority level.
*   **System Capacity:** The maximum number of customers allowed in the system (queue + service).
    *   **Finite Capacity:** A limited number of customers can be in the system.
    *   **Infinite Capacity:** No limit to the number of customers that can be in the system.
*   **Calling Population:** The source from which customers arrive.
    *   **Infinite Population:** The arrival of one customer does not significantly affect the probability of another customer arriving.
    *   **Finite Population:** The number of potential customers is limited.

#### 2.3 Classification of Queuing Models (Kendall's Notation)

A widely used notation to classify queuing models is Kendall's notation: **A/B/c/K/N/D**

*   **A:** Specifies the arrival distribution.
*   **B:** Specifies the service time distribution.
*   **c:** Specifies the number of parallel servers.
*   **K:** Specifies the system capacity (queue capacity + service capacity). If omitted, it's assumed to be infinite.
*   **N:** Specifies the size of the calling population. If omitted, it's assumed to be infinite.
*   **D:** Specifies the queue discipline. If omitted, it's assumed to be FIFO.

**Common Distributions for A and B:**

*   **M (Markovian or Exponential):** Arrivals or service times follow an exponential distribution.
*   **D (Deterministic):** Arrivals or service times are constant.
*   **Ek (Erlang):** Arrivals or service times follow an Erlang distribution.
*   **GI (General Independent):** Arrivals or service times follow an arbitrary (general) distribution.

**Example:** **M/M/1** represents a single-server queue where arrivals follow an exponential distribution, service times follow an exponential distribution, and there is only one server.

#### 2.4 Importance and Applications of Queuing Theory

Queuing theory is vital for optimizing resource allocation and improving customer satisfaction.

**Importance:**

*   **Resource Optimization:** Helps determine the right number of servers to meet demand without excessive idle time or long queues.
*   **Performance Evaluation:** Provides metrics to understand system performance and identify bottlenecks.
*   **Cost Reduction:** Minimizes costs associated with idle servers and customer waiting.
*   **Improved Customer Service:** Reduces waiting times and enhances customer experience.

**Applications:**

*   **Telecommunications:** Analyzing call centers, network traffic routing.
*   **Manufacturing:** Scheduling machines, managing production lines.
*   **Healthcare:** Patient flow in hospitals, scheduling appointments, ER waiting times.
*   **Transportation:** Airport check-in counters, toll booths, traffic signal optimization.
*   **Retail:** Checkout counters, customer service desks.
*   **Computer Systems:** Processor scheduling, I/O request handling.

**Textbook/Reference Integration:**

*   **Paneerselvam R.:** Often introduces the classification and importance early in the chapter.
*   **Taha:** Provides detailed examples of applications across various industries.
*   **Hillier & Lieberman:** Offers a rigorous mathematical foundation for understanding why these classifications are important.

---

### 3. Single-Server Exponential Arrival and Service Times (M/M/1 Model)

This is the most fundamental queuing model. It assumes:

*   **Arrivals:** Poisson process, meaning inter-arrival times are exponentially distributed with rate $\lambda$.
*   **Service Times:** Exponentially distributed with rate $\mu$.
*   **Number of Servers:** 1.
*   **System Capacity:** Infinite.
*   **Calling Population:** Infinite.
*   **Queue Discipline:** FIFO.

This model is denoted as **M/M/1**.

**Key Parameters:**

*   $\lambda$: Average arrival rate (customers per unit time).
*   $\mu$: Average service rate (customers per unit time), **per server**.

**Important Condition for Stability:**

For the system to be stable (i.e., the queue does not grow infinitely long), the arrival rate must be less than the service rate:

**$\lambda < \mu$**

The ratio $\frac{\lambda}{\mu}$ is called the **traffic intensity** or **utilization factor** of the server, denoted by $\rho$. So, for stability, **$\rho < 1$**.

**Formulas for M/M/1 Queue:**

These formulas are derived using probability theory and steady-state analysis. (Refer to textbooks for derivations).

| Performance Measure                     | Formula                                                                                                     | Explanation                                                                                                                                                                      |
| :-------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Probability of *n* customers in the system ($P_n$) | $P_n = (1-\rho)\rho^n$ for $n = 0, 1, 2, ...$                                                               | The probability that there are exactly *n* customers in the system (waiting or being served).                                                                                    |
| Probability of zero customers in the system ($P_0$) | $P_0 = 1 - \rho$                                                                                            | The probability that the system is empty.                                                                                                                                        |
| Average number of customers in the system ($L$) | $L = \sum_{n=0}^{\infty} n P_n = \frac{\rho}{1-\rho} = \frac{\lambda}{\mu - \lambda}$                     | The average number of customers waiting in the queue plus the one being served.                                                                                                  |
| Average number of customers in the queue ($L_q$) | $L_q = \sum_{n=1}^{\infty} (n-1) P_n = \frac{\rho^2}{1-\rho} = \frac{\lambda^2}{\mu(\mu - \lambda)}$         | The average number of customers waiting in the queue (excluding the one being served).                                                                                           |
| Average time a customer spends in the system ($W$) | $W = \frac{L}{\lambda} = \frac{1}{\mu - \lambda}$                                                           | The average total time a customer spends in the system, from arrival to departure (waiting time + service time).                                                                  |
| Average time a customer spends in the queue ($W_q$) | $W_q = \frac{L_q}{\lambda} = \frac{\rho}{\mu - \lambda} = \frac{\lambda}{\mu(\mu - \lambda)}$             | The average time a customer spends waiting in the queue before service begins.                                                                                                   |
| Server utilization ($\rho$)             | $\rho = \frac{\lambda}{\mu}$                                                                                | The proportion of time the server is busy.                                                                                                                                       |
| Probability of waiting ($P(\text{wait})$) | $P(\text{wait}) = P(\text{queue length} > 0) = 1 - P_0 = 1 - (1-\rho) = \rho$                                 | The probability that an arriving customer will have to wait (i.e., the server is busy).                                                                                         |
| Probability that an arriving customer has to wait $k$ or more customers ahead ($P(L_q \geq k)$) | $P(L_q \geq k) = \rho^k$                                                                                    | The probability that there are at least *k* customers ahead of an arriving customer in the queue.                                                                                |

**Textbook/Reference Integration:**

*   **Paneerselvam R.:** Provides direct derivations and examples for M/M/1.
*   **Taha:** Offers extensive worked-out examples demonstrating the application of these formulas.
*   **Hillier & Lieberman:** Explains the probabilistic basis for these formulas, emphasizing the assumptions.
*   **Banks, Carson, Nelson, Nicol:** While focused on simulation, they might touch upon the analytical results of M/M/1 as a benchmark.

#### 3.1 Example of M/M/1 Model

**Problem:**

At a single-counter post office, customers arrive according to a Poisson process at an average rate of 30 per hour. The service time for each customer is exponential with an average service rate of 40 per hour. Assuming the post office is open for 8 hours a day, calculate:

a) The average number of customers in the system.
b) The average number of customers waiting in the queue.
c) The average time a customer spends in the system.
d) The average time a customer spends waiting in the queue.
e) The probability that an arriving customer will have to wait.
f) The server utilization.
g) The probability that there are exactly 2 customers in the system.
h) The probability that a customer has to wait for at least 3 customers.

**Solution:**

Given:
*   Arrival rate ($\lambda$) = 30 customers/hour
*   Service rate ($\mu$) = 40 customers/hour

**Check for stability:** $\lambda = 30 < \mu = 40$. The system is stable.

**Calculate traffic intensity ($\rho$):**
$\rho = \frac{\lambda}{\mu} = \frac{30}{40} = 0.75$

**a) Average number of customers in the system ($L$):**
$L = \frac{\lambda}{\mu - \lambda} = \frac{30}{40 - 30} = \frac{30}{10} = 3$ customers.

**b) Average number of customers waiting in the queue ($L_q$):**
$L_q = \frac{\lambda^2}{\mu(\mu - \lambda)} = \frac{30^2}{40(40 - 30)} = \frac{900}{40(10)} = \frac{900}{400} = 2.25$ customers.

**c) Average time a customer spends in the system ($W$):**
$W = \frac{1}{\mu - \lambda} = \frac{1}{40 - 30} = \frac{1}{10}$ hours.
To convert to minutes: $W = \frac{1}{10} \times 60 = 6$ minutes.

**d) Average time a customer spends waiting in the queue ($W_q$):**
$W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{30}{40(40 - 30)} = \frac{30}{40(10)} = \frac{30}{400} = 0.075$ hours.
To convert to minutes: $W_q = 0.075 \times 60 = 4.5$ minutes.

*(Alternatively, $W_q = W - \frac{1}{\mu} = 6 \text{ minutes} - \frac{1}{40} \times 60 \text{ minutes} = 6 - 1.5 = 4.5$ minutes.)*

**e) Probability that an arriving customer will have to wait ($P(\text{wait})$):**
$P(\text{wait}) = \rho = 0.75$ or 75%.

**f) Server utilization ($\rho$):**
$\rho = 0.75$ or 75%.

**g) Probability that there are exactly 2 customers in the system ($P_2$):**
$P_n = (1-\rho)\rho^n$
$P_2 = (1-0.75)(0.75)^2 = (0.25)(0.5625) = 0.140625$.

**h) Probability that a customer has to wait for at least 3 customers ahead ($P(L_q \geq 3)$):**
$P(L_q \geq k) = \rho^k$
$P(L_q \geq 3) = (0.75)^3 = 0.421875$.

---

#### 3.2 Practice Questions/Exercises

1.  **Bank Teller:** A single bank teller serves customers. Customers arrive at a rate of 15 per hour, and service times are exponentially distributed with an average service rate of 20 customers per hour.
    *   Calculate the average number of customers in the system.
    *   Calculate the average time a customer spends in the queue.
    *   What is the probability that the teller is busy?
    *   What is the probability that there are more than 4 customers in the system?

2.  **Car Wash:** A single car wash facility has an average arrival rate of 5 cars per hour. The service time is exponentially distributed with an average service rate of 6 cars per hour.
    *   Calculate the server utilization.
    *   Calculate the average number of cars waiting in the queue.
    *   Calculate the average time a car spends waiting for service.
    *   Calculate the probability that a car has to wait.

**Answers:**

1.  **Bank Teller:**
    *   $\lambda = 15$, $\mu = 20$
    *   $\rho = \frac{15}{20} = 0.75$
    *   $L = \frac{\lambda}{\mu - \lambda} = \frac{15}{20 - 15} = \frac{15}{5} = 3$ customers.
    *   $W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{15}{20(20 - 15)} = \frac{15}{20(5)} = \frac{15}{100} = 0.15$ hours. (0.15 * 60 = 9 minutes).
    *   Probability teller is busy = $\rho = 0.75$ or 75%.
    *   Probability of more than 4 customers in the system ($P(n>4)$):
        $P(n>4) = 1 - P(n \le 4) = 1 - [P_0 + P_1 + P_2 + P_3 + P_4]$
        $P_n = (1-\rho)\rho^n = (0.25)(0.75)^n$
        $P_0 = 0.25$
        $P_1 = 0.25 \times 0.75 = 0.1875$
        $P_2 = 0.25 \times (0.75)^2 = 0.140625$
        $P_3 = 0.25 \times (0.75)^3 = 0.10546875$
        $P_4 = 0.25 \times (0.75)^4 = 0.0791015625$
        $P(n>4) = 1 - (0.25 + 0.1875 + 0.140625 + 0.10546875 + 0.0791015625) = 1 - 0.7626953125 = 0.2373046875$
        Alternatively, the probability of having *n* or more customers is $\rho^n$.
        So, $P(n \ge 1) = \rho = 0.75$.
        $P(n \ge 5) = \rho^5 = (0.75)^5 = 0.2373046875$.

2.  **Car Wash:**
    *   $\lambda = 5$, $\mu = 6$
    *   $\rho = \frac{5}{6} \approx 0.8333$
    *   Average number of cars waiting in the queue ($L_q$):
        $L_q = \frac{\lambda^2}{\mu(\mu - \lambda)} = \frac{5^2}{6(6 - 5)} = \frac{25}{6(1)} = \frac{25}{6} \approx 4.1667$ cars.
    *   Average time a car spends waiting for service ($W_q$):
        $W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{5}{6(6 - 5)} = \frac{5}{6(1)} = \frac{5}{6}$ hours.
        In minutes: $\frac{5}{6} \times 60 = 50$ minutes.
    *   Probability that a car has to wait = $\rho = \frac{5}{6} \approx 0.8333$ or 83.33%.

---

### 4. Important Points to Remember

*   **M/M/1 Assumptions:** Poisson arrivals, exponential service times, single server, infinite capacity, infinite population, FIFO discipline.
*   **Stability Condition:** $\lambda < \mu$ is crucial for any queuing system to be stable. If $\lambda \ge \mu$, the queue will grow indefinitely.
*   **Traffic Intensity ($\rho$):** A key indicator of system load. $\rho = \lambda / \mu$.
*   **L vs. $L_q$ and W vs. $W_q$:** Be careful to distinguish between customers in the *system* and customers in the *queue*.
*   **Units Consistency:** Ensure that $\lambda$ and $\mu$ are in the same units of time (e.g., both per hour, or both per minute).
*   **Exponential Distribution:** The assumption of exponential distribution for service times and inter-arrival times simplifies the mathematical analysis significantly.

---

### 5. Connection to Course Outcomes

*   **CO5: To solve problems using classical queuing theory models (Knowledge Level: K3):** This entire topic is dedicated to understanding and solving problems related to the M/M/1 model, which is a fundamental classical queuing theory model. Students can apply the learned formulas to analyze real-world scenarios and make informed decisions about system design and performance.

---

This concludes the study notes for the topic "Single-Server Exponential Arrival and Service Times" within the Queuing Theory module. Remember to consult your textbooks for deeper theoretical insights and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
