---
title: "Multi - server problems"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 4: Queuing theory: Scope, terminology, classification Importance and applications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a81"
status: "completed"
scrapedAt: "2026-05-20T18:07:41.804Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 4: Queuing Theory: Scope, Terminology, Classification, Importance, and Applications

### Topic: Multi-Server Problems

This topic delves into queuing systems where multiple servers are available to attend to arriving customers. This is a crucial aspect of queuing theory as it reflects many real-world scenarios.

**Learning Outcomes Covered:**

*   Understanding the fundamental concepts of queuing systems, including their scope, terminology, classification, importance, and applications.
*   Solving basic queuing problems, with a focus on multi-server scenarios.
*   Applying queuing theory models to engineering problems.

**Course Outcomes Addressed:**

*   **CO5: To solve problems using classical queuing theory models (Knowledge Level: K3)** - This topic directly contributes to this CO by focusing on the application of multi-server queuing models.

---

### 1. Introduction to Multi-Server Queuing Systems

In many practical situations, a single server might not be sufficient to handle the customer arrival rate efficiently. This leads to the concept of multi-server queuing systems, where multiple parallel servers are available to serve customers.

**Key Concepts:**

*   **Multiple Servers:** Two or more identical servers operating in parallel.
*   **Customer Assignment:** Typically, customers are served by the first available server.
*   **Queue Formation:** If all servers are busy, customers join a single common queue.

**Importance:**

*   **Improved Service Level:** Reduces waiting times and queue lengths.
*   **Increased Throughput:** More customers can be served per unit of time.
*   **Resource Optimization:** Balances the cost of providing additional servers with the cost of customer waiting.

**Reference (Paneerselvam R., Third edition, 2023):** Chapter on Queuing Theory, specifically sections discussing multi-server models. Paneerselvam likely introduces the concept as a natural extension of single-server systems and highlights the benefits of parallel service.

**Reference (Taha, Tenth edition, 2019):** Chapter on Queuing Theory. Taha will provide a rigorous mathematical framework for analyzing multi-server systems and their performance measures.

---

### 2. Terminology in Multi-Server Queuing

While much of the terminology is similar to single-server systems, some nuances exist.

**Key Terminology:**

*   **Arrival Rate ($\lambda$)**: The average number of customers arriving per unit of time.
*   **Service Rate per Server ($\mu$)**: The average number of customers a single server can serve per unit of time.
*   **Number of Servers ($s$ or $c$)**: The total number of parallel servers available.
*   **System Capacity ($K$)**: The maximum number of customers allowed in the system (queue + service). If $K$ is infinite, it's an "unlimited capacity" system.
*   **Queue Discipline**: The rule by which customers are selected from the queue for service (e.g., First-Come, First-Served - FCFS).
*   **System State**: The number of customers in the system (waiting or being served).

**Important Point to Remember:** In multi-server systems, the *total* service capacity of the system is $s \times \mu$, but this is not directly used in all formulas as it's the individual server service rate that matters when a server becomes free.

---

### 3. Classification of Multi-Server Queuing Models

Multi-server queuing models can be classified based on various characteristics:

**Common Classifications (using Kendall's Notation):**

The general form of Kendall's notation is **A/B/s/K/N/D**:

*   **A (Arrival Process):**
    *   **M:** Markovian (Poisson arrivals)
    *   **D:** Deterministic (constant inter-arrival times)
    *   **Ek:** Erlang distribution
    *   **GI:** General independent (any distribution)
*   **B (Service Time Distribution):**
    *   **M:** Markovian (exponential service times)
    *   **D:** Deterministic
    *   **Ek:** Erlang distribution
    *   **GI:** General independent
*   **s (Number of Servers):** The number of parallel servers (e.g., 2, 3, 4, ...).
*   **K (System Capacity):** Maximum number of customers in the system (default is infinite if not specified).
*   **N (Population Size):** Total number of potential customers (default is infinite if not specified).
*   **D (Queue Discipline):** e.g., FCFS, LCFS, SIRO (Service In Random Order).

**Most Common Multi-Server Model: M/M/s**

This is the most widely studied and applicable multi-server model. It assumes:

*   **Poisson Arrivals:** Customers arrive according to a Poisson process with rate $\lambda$.
*   **Exponential Service Times:** Each server serves customers with service times that are exponentially distributed with rate $\mu$.
*   **s Parallel Identical Servers:** There are 's' servers, each capable of serving one customer at a time.
*   **Infinite System Capacity:** There is no limit to the number of customers in the system.
*   **Infinite Population:** The pool of potential customers is unlimited.
*   **FCFS Queue Discipline:** Customers are served in the order they arrive.

**Reference (Hillier & Lieberman, Tenth edition, 2017):** Chapter on Queuing Theory. They will extensively cover the M/M/s model and its derivation, providing detailed formulas and performance measures.

**Reference (Banks, Carson, Nelson & Nicol, Fifth edition, 2013):** This book, focused on simulation, will likely use M/M/s as a fundamental model to compare simulation results against analytical solutions.

---

### 4. Importance and Applications of Multi-Server Queuing Models

Multi-server queuing models are vital for designing and managing systems where parallel service is a necessity.

**Importance:**

*   **Service Level Analysis:** Quantifying waiting times, queue lengths, and server utilization to ensure service standards are met.
*   **Capacity Planning:** Determining the optimal number of servers required to achieve desired performance levels.
*   **Resource Allocation:** Efficiently deploying resources (servers) to minimize costs while maximizing customer satisfaction.
*   **Performance Improvement:** Identifying bottlenecks and suggesting improvements in system design.

**Applications in Engineering:**

*   **Manufacturing:**
    *   Multiple machines performing the same operation.
    *   Assembly lines with parallel workstations.
    *   Repair facilities with multiple technicians.
*   **Telecommunications:**
    *   Call centers with multiple agents.
    *   Network routers handling multiple data streams.
    *   Server farms processing multiple requests.
*   **Transportation:**
    *   Toll booths on highways with multiple lanes.
    *   Airport check-in counters or security checkpoints.
    *   Multiple loading/unloading bays at a port.
*   **Computer Systems:**
    *   Multiple processors handling tasks.
    *   Multiple disk drives serving read/write requests.
    *   Web servers handling concurrent user requests.
*   **Healthcare:**
    *   Hospital emergency rooms with multiple doctors or beds.
    *   Outpatient clinics with multiple consultation rooms.

**Example:** A bank with 3 tellers (servers). Customers arrive at a rate of 20 per hour. Each teller can serve an average of 10 customers per hour. This can be modeled as an M/M/3 system.

---

### 5. Performance Measures for M/M/s Queuing Systems

Analyzing the performance of an M/M/s system involves calculating key metrics. These formulas are derived using birth-death processes and steady-state probabilities.

**Key Performance Measures (for M/M/s):**

Let:
*   $\lambda$ = Arrival rate
*   $\mu$ = Service rate per server
*   $s$ = Number of servers
*   $\rho = \frac{\lambda}{s\mu}$ (Traffic intensity or server utilization)
*   $L_s = \lambda W_s$ (Average number of customers in the system)
*   $W_s = W_q + \frac{1}{\mu}$ (Average total time a customer spends in the system)
*   $L_q = \lambda W_q$ (Average number of customers waiting in the queue)
*   $W_q$ (Average time a customer spends waiting in the queue)
*   $P_0$ (Probability that the system is empty)
*   $P_n$ (Probability of having $n$ customers in the system)
*   $P(\text{waiting}) = P_s$ (Probability that an arriving customer has to wait)

**Formulas (for M/M/s, assuming $\rho < 1$ for steady state):**

1.  **Probability of Zero Customers in the System ($P_0$)**:
    $$P_0 = \left[ \sum_{n=0}^{s-1} \frac{(\lambda/\mu)^n}{n!} + \frac{(\lambda/\mu)^s}{s!(1 - \rho)} \right]^{-1}$$
    *   **Important Point:** This is a crucial probability as it forms the basis for calculating other performance measures. The calculation involves summing probabilities for $n < s$ and a term for $n \ge s$.

2.  **Probability of $n$ Customers in the System ($P_n$)**:
    *   For $0 \le n < s$:
        $$P_n = \frac{(\lambda/\mu)^n}{n!} P_0$$
    *   For $n \ge s$:
        $$P_n = \frac{(\lambda/\mu)^n}{s! s^{n-s}} P_0$$
    *   **Note:** In multi-server systems, when $n \ge s$, all servers are busy.

3.  **Probability that an Arriving Customer Has to Wait ($P(\text{waiting})$ or $P_s$)**:
    This is the probability that all servers are busy, which means there are at least $s$ customers in the system.
    $$P(\text{waiting}) = \sum_{n=s}^{\infty} P_n$$
    A simplified and more commonly used formula for $P(\text{waiting})$ in M/M/s is:
    $$P(\text{waiting}) = \frac{(\lambda/\mu)^s}{s!(1 - \rho)} P_0}$$
    *   **Key Insight:** This probability directly indicates the likelihood of a customer entering a queue.

4.  **Average Number of Customers in the Queue ($L_q$)**:
    $$L_q = \frac{P(\text{waiting}) \rho}{1 - \rho}$$
    *   **Also known as:** Erlang C formula.

5.  **Average Time a Customer Spends Waiting in the Queue ($W_q$)**:
    Using Little's Law ($L_q = \lambda W_q$):
    $$W_q = \frac{L_q}{\lambda}$$
    Substituting the formula for $L_q$:
    $$W_q = \frac{P(\text{waiting}) \rho}{\lambda(1 - \rho)} = \frac{P(\text{waiting})}{s\mu(1 - \rho)} = \frac{P(\text{waiting})}{s\mu - \lambda}$$
    *   **Crucial Measure:** Directly quantifies the waiting experience of customers.

6.  **Average Number of Customers in the System ($L_s$)**:
    $$L_s = L_q + \frac{\lambda}{\mu}$$
    *   **Interpretation:** Includes customers waiting and those being served.

7.  **Average Time a Customer Spends in the System ($W_s$)**:
    Using Little's Law ($L_s = \lambda W_s$):
    $$W_s = \frac{L_s}{\lambda} = W_q + \frac{1}{\mu}$$
    *   **Total Customer Experience:** Represents the entire time from arrival to departure.

8.  **Server Utilization ($\rho$)**:
    $$\rho = \frac{\lambda}{s\mu}$$
    *   **System Stability Condition:** For a stable system (steady state exists), we must have $\rho < 1$, which means $\lambda < s\mu$. If $\lambda \ge s\mu$, the queue will grow indefinitely.

**Reference (Paneerselvam R., Third edition, 2023):** Provides step-by-step derivations and examples for these formulas, making them accessible.

**Reference (Taha, Tenth edition, 2019):** Offers a more mathematical treatment, often using generating functions or matrix-geometric methods for a deeper understanding of the derivation.

---

### 6. Example Calculation (M/M/s)

**Problem:** A post office has 4 service counters. Customers arrive at an average rate of 120 per hour. Each counter can serve an average of 40 customers per hour. Assuming Poisson arrivals and exponential service times, calculate:
a) The probability that all counters are idle.
b) The probability that a customer has to wait.
c) The average number of customers waiting in the queue.
d) The average time a customer spends waiting in the queue.
e) The average number of customers in the system.
f) The average time a customer spends in the system.
g) The utilization of each counter.

**Solution:**

Given:
*   $\lambda = 120$ customers/hour
*   $\mu = 40$ customers/hour/server
*   $s = 4$ servers

**Step 1: Check for system stability.**
$s\mu = 4 \times 40 = 160$ customers/hour.
Since $\lambda (120) < s\mu (160)$, the system is stable.

**Step 2: Calculate $\lambda/\mu$ and $\rho$.**
$\lambda/\mu = 120 / 40 = 3$
$\rho = \frac{\lambda}{s\mu} = \frac{120}{4 \times 40} = \frac{120}{160} = 0.75$

**Step 3: Calculate $P_0$ (Probability of zero customers).**
$$P_0 = \left[ \sum_{n=0}^{s-1} \frac{(\lambda/\mu)^n}{n!} + \frac{(\lambda/\mu)^s}{s!(1 - \rho)} \right]^{-1}$$
$$P_0 = \left[ \sum_{n=0}^{3} \frac{(3)^n}{n!} + \frac{(3)^4}{4!(1 - 0.75)} \right]^{-1}$$
$$P_0 = \left[ \frac{3^0}{0!} + \frac{3^1}{1!} + \frac{3^2}{2!} + \frac{3^3}{3!} + \frac{3^4}{4!(0.25)} \right]^{-1}$$
$$P_0 = \left[ 1 + 3 + \frac{9}{2} + \frac{27}{6} + \frac{81}{24 \times 0.25} \right]^{-1}$$
$$P_0 = \left[ 1 + 3 + 4.5 + 4.5 + \frac{81}{6} \right]^{-1}$$
$$P_0 = \left[ 13 + 13.5 \right]^{-1}$$
$$P_0 = \left[ 26.5 \right]^{-1} \approx 0.0377$$

a) **The probability that all counters are idle is $P_0 \approx 0.0377$.**

**Step 4: Calculate $P(\text{waiting})$ (Probability that an arriving customer has to wait).**
$$P(\text{waiting}) = \frac{(\lambda/\mu)^s}{s!(1 - \rho)} P_0$$
$$P(\text{waiting}) = \frac{(3)^4}{4!(1 - 0.75)} \times 0.0377$$
$$P(\text{waiting}) = \frac{81}{24 \times 0.25} \times 0.0377$$
$$P(\text{waiting}) = \frac{81}{6} \times 0.0377$$
$$P(\text{waiting}) = 13.5 \times 0.0377 \approx 0.50895$$

b) **The probability that a customer has to wait is approximately 0.5090.**

**Step 5: Calculate $L_q$ (Average number of customers waiting in the queue).**
$$L_q = \frac{P(\text{waiting}) \rho}{1 - \rho}$$
$$L_q = \frac{0.5090 \times 0.75}{1 - 0.75}$$
$$L_q = \frac{0.38175}{0.25} = 1.527$$

c) **The average number of customers waiting in the queue is approximately 1.53.**

**Step 6: Calculate $W_q$ (Average time a customer spends waiting in the queue).**
$$W_q = \frac{L_q}{\lambda}$$
$$W_q = \frac{1.527}{120} \text{ hours}$$
$$W_q = 0.012725 \text{ hours}$$
To convert to minutes: $0.012725 \times 60 \approx 0.7635$ minutes.

d) **The average time a customer spends waiting in the queue is approximately 0.76 minutes.**

**Step 7: Calculate $L_s$ (Average number of customers in the system).**
$$L_s = L_q + \frac{\lambda}{\mu}$$
$$L_s = 1.527 + \frac{120}{40}$$
$$L_s = 1.527 + 3 = 4.527$$

e) **The average number of customers in the system is approximately 4.53.**

**Step 8: Calculate $W_s$ (Average time a customer spends in the system).**
$$W_s = W_q + \frac{1}{\mu}$$
$$W_s = 0.012725 \text{ hours} + \frac{1}{40} \text{ hours}$$
$$W_s = 0.012725 + 0.025 = 0.037725 \text{ hours}$$
To convert to minutes: $0.037725 \times 60 \approx 2.2635$ minutes.

f) **The average time a customer spends in the system is approximately 2.26 minutes.**

**Step 9: Calculate server utilization ($\rho$).**
We already calculated this in Step 2.

g) **The utilization of each counter is $\rho = 0.75$ or 75%.**

---

### 7. Practice Questions and Exercises

**Question 1:**
A call center has 5 operators. Customers arrive according to a Poisson process at a rate of 100 per hour. Each operator can handle an average of 25 calls per hour, with service times being exponentially distributed.
a) What is the probability that all operators are busy?
b) What is the average number of customers waiting for an operator?
c) What is the average time a customer waits before speaking to an operator?
d) What is the average number of customers in the system (waiting or being served)?
e) What is the average time a customer spends in the system?

**Question 2:**
Consider a supermarket with 3 checkout counters. The arrival rate of customers is 45 per hour (Poisson). The service rate at each counter is 20 customers per hour (exponential). Calculate the average waiting time in the queue and the average number of customers in the system.

**Question 3:**
An automated car wash has 2 washing bays. Cars arrive at a rate of 30 per hour (Poisson). Each bay can wash a car in an average of 5 minutes (exponential service time).
a) What is the probability that a car arriving has to wait?
b) What is the average number of cars waiting to use a bay?
c) What is the average time a car spends in the system?

---

### 8. Answers to Practice Questions

**Answer to Question 1:**
Given: $\lambda = 100$, $\mu = 25$, $s = 5$.
$\lambda/\mu = 100/25 = 4$.
$\rho = \lambda/(s\mu) = 100/(5 \times 25) = 100/125 = 0.8$.

First, calculate $P_0$:
$P_0 = \left[ \sum_{n=0}^{4} \frac{(4)^n}{n!} + \frac{(4)^5}{5!(1 - 0.8)} \right]^{-1}$
$P_0 = \left[ (1 + 4 + 8 + 10.667 + 10.667) + \frac{1024}{120 \times 0.2} \right]^{-1}$
$P_0 = \left[ 34.334 + \frac{1024}{24} \right]^{-1}$
$P_0 = \left[ 34.334 + 42.667 \right]^{-1} = (77.001)^{-1} \approx 0.012987$

a) **Probability that all operators are busy ($P(\text{waiting})$)**:
$P(\text{waiting}) = \frac{(4)^5}{5!(1 - 0.8)} P_0 = \frac{1024}{120 \times 0.2} \times 0.012987 = 42.667 \times 0.012987 \approx 0.5536$
   *   Approx. 0.5536

b) **Average number of customers waiting in the queue ($L_q$)**:
$L_q = \frac{P(\text{waiting}) \rho}{1 - \rho} = \frac{0.5536 \times 0.8}{1 - 0.8} = \frac{0.44288}{0.2} = 2.2144$
   *   Approx. 2.21 customers

c) **Average time a customer waits ($W_q$)**:
$W_q = \frac{L_q}{\lambda} = \frac{2.2144}{100} \text{ hours} = 0.022144 \text{ hours}$
   *   $0.022144 \times 60 \approx 1.33$ minutes

d) **Average number of customers in the system ($L_s$)**:
$L_s = L_q + \frac{\lambda}{\mu} = 2.2144 + \frac{100}{25} = 2.2144 + 4 = 6.2144$
   *   Approx. 6.21 customers

e) **Average time a customer spends in the system ($W_s$)**:
$W_s = W_q + \frac{1}{\mu} = 0.022144 \text{ hours} + \frac{1}{25} \text{ hours} = 0.022144 + 0.04 = 0.062144 \text{ hours}$
   *   $0.062144 \times 60 \approx 3.73$ minutes

**Answer to Question 2:**
Given: $\lambda = 45$, $\mu = 20$, $s = 3$.
$\lambda/\mu = 45/20 = 2.25$.
$\rho = \lambda/(s\mu) = 45/(3 \times 20) = 45/60 = 0.75$.

First, calculate $P_0$:
$P_0 = \left[ \sum_{n=0}^{2} \frac{(2.25)^n}{n!} + \frac{(2.25)^3}{3!(1 - 0.75)} \right]^{-1}$
$P_0 = \left[ (1 + 2.25 + \frac{5.0625}{2}) + \frac{11.390625}{6 \times 0.25} \right]^{-1}$
$P_0 = \left[ (1 + 2.25 + 2.53125) + \frac{11.390625}{1.5} \right]^{-1}$
$P_0 = \left[ 5.78125 + 7.59375 \right]^{-1} = (13.375)^{-1} \approx 0.07476$

**Average waiting time in the queue ($W_q$)**:
$P(\text{waiting}) = \frac{(2.25)^3}{3!(1 - 0.75)} P_0 = 7.59375 \times 0.07476 \approx 0.5675$
$W_q = \frac{P(\text{waiting})}{s\mu - \lambda} = \frac{0.5675}{3 \times 20 - 45} = \frac{0.5675}{60 - 45} = \frac{0.5675}{15} \text{ hours}$
$W_q \approx 0.03783 \text{ hours} \times 60 \approx 2.27$ minutes.
   *   **Average waiting time in the queue is approximately 2.27 minutes.**

**Average number of customers in the system ($L_s$)**:
$L_q = \lambda W_q = 45 \times 0.03783 \approx 1.70235$
$L_s = L_q + \frac{\lambda}{\mu} = 1.70235 + 2.25 = 3.95235$
   *   **Average number of customers in the system is approximately 3.95.**

**Answer to Question 3:**
Given: $\lambda = 30$ cars/hour, $\mu = 12$ cars/hour (since 1 car/5 mins = 60/5 = 12 cars/hour), $s = 2$.
$\lambda/\mu = 30/12 = 2.5$.
$\rho = \lambda/(s\mu) = 30/(2 \times 12) = 30/24 = 1.25$.

**Important Note:** Since $\rho = 1.25 > 1$, this system is unstable. The arrival rate exceeds the total service capacity. The queue will grow indefinitely, and the steady-state formulas do not apply. In a real-world scenario, this means the car wash needs more bays or needs to reduce the arrival rate.

If, hypothetically, the arrival rate was 20 cars per hour instead:
Given: $\lambda = 20$, $\mu = 12$, $s = 2$.
$\lambda/\mu = 20/12 = 1.667$.
$\rho = \lambda/(s\mu) = 20/(2 \times 12) = 20/24 = 0.833$.

Calculate $P_0$:
$P_0 = \left[ \sum_{n=0}^{1} \frac{(1.667)^n}{n!} + \frac{(1.667)^2}{2!(1 - 0.833)} \right]^{-1}$
$P_0 = \left[ (1 + 1.667) + \frac{2.7789}{2 \times 0.167} \right]^{-1}$
$P_0 = \left[ 2.667 + \frac{2.7789}{0.334} \right]^{-1} = (2.667 + 8.319) \approx (10.986)^{-1} \approx 0.0909$

a) **Probability that a car arriving has to wait ($P(\text{waiting})$)**:
$P(\text{waiting}) = \frac{(1.667)^2}{2!(1 - 0.833)} P_0 = 8.319 \times 0.0909 \approx 0.7562$
   *   Approx. 0.7562

b) **Average number of cars waiting to use a bay ($L_q$)**:
$L_q = \frac{P(\text{waiting}) \rho}{1 - \rho} = \frac{0.7562 \times 0.833}{1 - 0.833} = \frac{0.6300}{0.167} \approx 3.772$
   *   Approx. 3.77 cars

c) **Average time a car spends in the system ($W_s$)**:
$W_q = \frac{L_q}{\lambda} = \frac{3.772}{20} \text{ hours} = 0.1886 \text{ hours}$
$W_s = W_q + \frac{1}{\mu} = 0.1886 + \frac{1}{12} \text{ hours} = 0.1886 + 0.0833 \approx 0.2719 \text{ hours}$
   *   $0.2719 \times 60 \approx 16.31$ minutes.
   *   **Average time a car spends in the system is approximately 16.31 minutes.**

---

### 9. Important Points to Remember

*   **Stability Condition ($\rho < 1$):** This is paramount for multi-server systems. If $\lambda \ge s\mu$, the system cannot handle the arrivals in the long run.
*   **$P_0$ is Key:** The probability of an empty system is fundamental to calculating most other performance measures in M/M/s models.
*   **Erlang C Formula:** The formula for $P(\text{waiting})$ is often referred to as the Erlang C formula, which is crucial for understanding queue probabilities.
*   **Little's Law:** Remember that $L_q = \lambda W_q$ and $L_s = \lambda W_s$ are universally applicable and simplify calculations.
*   **Assumptions Matter:** The M/M/s model relies heavily on Poisson arrivals and exponential service times. If these assumptions are significantly violated, simulation or more complex models might be necessary.
*   **Service Rate vs. System Service Rate:** In multi-server systems, $\mu$ is the rate *per server*. The total system service capacity is $s\mu$, but this is only fully utilized when all servers are busy.
*   **Practical Implications:** Use these models to justify adding servers, evaluate the impact of faster service, or understand customer wait times.

---
This comprehensive study note provides a foundational understanding of multi-server queuing problems, covering their theory, calculations, and applications as per the learning and course outcomes. Remember to consult the recommended textbooks for deeper mathematical derivations and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
