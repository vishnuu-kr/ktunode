---
title: "Two-server exponential arrival and service times."
subject: "OPERATIONS RESEARCH"
module: "Module 4: Scope of queuing theory"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463638"
status: "completed"
scrapedAt: "2026-05-20T18:02:08.278Z"
---
# Operations Research - Module 4: Scope of Queuing Theory

## Topic: Two-Server Exponential Arrival and Service Times (M/M/2 Model)

This module delves into the scope of queuing theory, focusing on a fundamental model with two servers and exponential arrival and service times. This is a foundational topic within Operations Research, crucial for understanding and managing waiting lines in various service systems.

**Course Outcomes Addressed:**

*   **CO5: To solve problems using classical queuing theory models (Knowledge Level: K2, K3)** - This topic directly addresses the application of classical queuing theory models, specifically the M/M/2 model.

**Learning Outcomes Covered:**

*   Understanding the characteristics of the M/M/2 queuing model.
*   Deriving and interpreting key performance measures for the M/M/2 model.
*   Applying the M/M/2 model to practical scenarios.
*   Analyzing the impact of increasing server capacity on system performance.

---

### 1. Introduction to Queuing Theory

Queuing theory is a mathematical study of waiting lines, or queues. It provides a framework for analyzing systems where customers (or jobs) arrive, wait for service, receive service, and then depart. The goal of queuing theory is to optimize the balance between the cost of providing service and the cost of waiting.

**Key Concepts & Definitions:**

*   **Queue:** A line of waiting customers.
*   **Customer:** An entity that arrives at the system seeking service.
*   **Server:** An entity that provides service to customers.
*   **Arrival Process:** The pattern in which customers arrive at the system.
*   **Service Process:** The pattern in which customers are served.
*   **System Capacity:** The maximum number of customers allowed in the system (waiting or being served).
*   **Queue Discipline:** The rule by which customers are selected for service (e.g., First-Come, First-Served - FCFS).
*   **Transient State:** The initial period of system operation when the number of customers is changing and has not reached a steady state.
*   **Steady State:** The long-run behavior of the system where the probability distributions of system variables (e.g., queue length, waiting time) remain constant over time.

**Reference Integration:**

*   **Gupta & Hira (2008):** Chapter on Queuing Theory provides a foundational understanding of basic queuing models and their characteristics.
*   **Vohra & Arora (2021):** Chapter on Queuing Models elaborates on the application of queuing theory in management and decision-making.

---

### 2. The M/M/2 Queuing Model

The M/M/2 model is a specific type of queuing system characterized by:

*   **M (Markovian arrivals):** Customer arrivals follow a Poisson distribution, meaning the inter-arrival times are exponentially distributed.
*   **M (Markovian service times):** Service times for each server follow an exponential distribution.
*   **2 (Number of parallel servers):** There are two identical servers working in parallel.

**Assumptions:**

1.  **Poisson Arrival Process:** Arrivals occur randomly and independently at a constant average rate, denoted by $\lambda$ (lambda) customers per unit time.
2.  **Exponential Service Times:** The time it takes to serve a customer is exponentially distributed with an average service rate per server, denoted by $\mu$ (mu) customers per unit time.
3.  **Two Identical Servers:** Both servers have the same service rate.
4.  **Infinite Queue Capacity:** The system can accommodate an unlimited number of customers in the queue.
5.  **First-Come, First-Served (FCFS) Discipline:** Customers are served in the order of their arrival.
6.  **No Balking or Reneging:** Customers do not leave the queue or system before being served.
7.  **Steady State:** The system operates for a sufficient duration to reach a steady state.

**Notation for M/M/2 Model:**

*   $\lambda$: Average arrival rate.
*   $\mu$: Average service rate per server.
*   $s$: Number of servers (here, $s=2$).
*   $\rho$: Server utilization (traffic intensity) = $\frac{\lambda}{s\mu}$. For a stable system, $\rho < 1$.

**Important Point to Remember:**

*   For the M/M/2 model to reach a steady state, the **total service capacity ($s\mu$) must be greater than the arrival rate ($\lambda$)**. This means $\lambda < 2\mu$, or $\rho < 1$. If $\lambda \ge 2\mu$, the queue will grow infinitely long.

---

### 3. Key Performance Measures of the M/M/2 Model

The M/M/2 model allows us to calculate various metrics that help in evaluating the efficiency and performance of the queuing system.

**1. Probability of Zero Customers in the System ($P_0$)**

This is the probability that there are no customers in the system (neither waiting nor being served). For the M/M/2 model, it is given by:

$P_0 = \left[ \sum_{n=0}^{s-1} \frac{(\lambda/\mu)^n}{n!} + \frac{(\lambda/\mu)^s}{s!(1 - \lambda/(s\mu))} \right]^{-1}$

For $s=2$:

$P_0 = \left[ \frac{(\lambda/\mu)^0}{0!} + \frac{(\lambda/\mu)^1}{1!} + \frac{(\lambda/\mu)^2}{2!(1 - \lambda/(2\mu))} \right]^{-1}$

$P_0 = \left[ 1 + \frac{\lambda}{\mu} + \frac{(\lambda/\mu)^2}{2(1 - \lambda/(2\mu))} \right]^{-1}$

**2. Probability of $n$ Customers in the System ($P_n$)**

*   For $n < s$ (i.e., $n < 2$, so $n=0, 1$):
    $P_n = \frac{(\lambda/\mu)^n}{n!} P_0$
    *   $P_0 = P_0$ (as derived above)
    *   $P_1 = \frac{(\lambda/\mu)^1}{1!} P_0 = \frac{\lambda}{\mu} P_0$

*   For $n \ge s$ (i.e., $n \ge 2$):
    $P_n = \frac{(\lambda/\mu)^n}{s! s^{n-s} (1 - \lambda/(s\mu))} P_0$
    For $s=2$:
    $P_n = \frac{(\lambda/\mu)^n}{2! 2^{n-2} (1 - \lambda/(2\mu))} P_0 = \frac{(\lambda/\mu)^n}{2 \cdot 2^{n-2} (1 - \rho)} P_0 = \frac{(\lambda/\mu)^n}{2^{n-1} (1 - \rho)} P_0$ (for $n \ge 2$)

**3. Probability of All Servers Being Busy ($P_{s>}$) (Erlang C Formula for s=2)**

This is the probability that a newly arriving customer has to wait because both servers are busy.
For $s=2$, $P_{s>} = P_2$ (probability of 2 or more customers in the system, which for 2 servers means both are busy).

$P_{s>} = P_2 = \frac{(\lambda/\mu)^2}{2!(1 - \lambda/(2\mu))} P_0 = \frac{(\lambda/\mu)^2}{2(1 - \rho)} P_0$

**4. Average Number of Customers in the Queue ($L_q$)**

The average number of customers waiting in the queue.

$L_q = \frac{P_{s>}(\rho)}{1 - \rho}$

For $s=2$:

$L_q = \frac{P_2(\lambda/\mu)}{1 - \lambda/(2\mu)} = \frac{\frac{(\lambda/\mu)^2}{2(1 - \lambda/(2\mu))} P_0 (\lambda/\mu)}{1 - \lambda/(2\mu)}$

$L_q = \frac{(\lambda/\mu)^2 \lambda}{2\mu (1 - \lambda/(2\mu))^2 (1 - \lambda/(2\mu))} P_0 = \frac{(\lambda/\mu)^3}{2(1 - \rho)^2} P_0$  (Mistake in direct simplification here, let's use the standard formula)

A more direct formula for $L_q$ in M/M/s systems:

$L_q = \frac{P_{s>} \rho}{1 - \rho}$ where $P_{s>}$ is the probability of waiting (Erlang C).
For M/M/2:
$L_q = \frac{P_2 (\lambda/2\mu)}{1 - \lambda/(2\mu)}$

Let's derive it from $P_n$:
$L_q = \sum_{n=s}^{\infty} (n-s) P_n = \sum_{n=2}^{\infty} (n-2) P_n$
$L_q = \frac{(\lambda/\mu)^2 \lambda}{2\mu (1 - \lambda/(2\mu))^2} P_0$

Using $\rho = \lambda/(2\mu)$:
$L_q = \frac{(\lambda/\mu)^2 (\lambda/2\mu)}{2 (1-\lambda/(2\mu))^2} P_0 = \frac{(\lambda/\mu)^2 \rho}{2 (1-\rho)^2} P_0$

**5. Average Number of Customers in the System ($L$)**

The average number of customers in the system (waiting and being served).

$L = L_q + \frac{\lambda}{\mu}$

Alternatively, using $P_n$:
$L = \sum_{n=0}^{\infty} n P_n$
For $s=2$:
$L = \sum_{n=0}^{1} n P_n + \sum_{n=2}^{\infty} n P_n = P_1 + \sum_{n=2}^{\infty} n \frac{(\lambda/\mu)^n}{2^{n-1} (1-\rho)} P_0$

A simpler formula for $L$ in M/M/s systems:
$L = L_q + \frac{\lambda}{\mu}$
$L = \frac{(\lambda/\mu)^2 \lambda}{2\mu (1 - \lambda/(2\mu))^2} P_0 + \frac{\lambda}{\mu}$

**6. Average Waiting Time in the Queue ($W_q$)**

The average time a customer spends waiting in the queue before service begins.
By Little's Law: $L_q = \lambda W_q$
$W_q = \frac{L_q}{\lambda}$

For $s=2$:
$W_q = \frac{1}{\lambda} \left[ \frac{(\lambda/\mu)^2 \lambda}{2\mu (1 - \lambda/(2\mu))^2} P_0 \right] = \frac{(\lambda/\mu)^2}{2\mu (1 - \lambda/(2\mu))^2} P_0$

**7. Average Waiting Time in the System ($W$)**

The average total time a customer spends in the system (waiting time plus service time).
By Little's Law: $L = \lambda W$
$W = \frac{L}{\lambda}$

Alternatively: $W = W_q + \frac{1}{\mu}$ (Average waiting time + Average service time)

**Reference Integration:**

*   **Srinivasan (2017):** Chapter on Queuing Theory provides detailed derivations and formulas for M/M/s models, including M/M/2.
*   **Hillier & Lieberman (Eleventh Edition):** Chapter on Queuing Theory offers comprehensive coverage of various queuing models and their performance measures, with a strong emphasis on M/M/s systems.

---

### 4. Example Scenario: A Two-Teller Bank

Consider a small bank with two tellers. Customers arrive at the bank at an average rate of $\lambda = 10$ customers per hour. Each teller can serve customers at an average rate of $\mu = 6$ customers per hour. The arrival process is Poisson, and service times are exponential. The bank operates on a FCFS basis, and there is no limit to the number of customers who can wait.

**Problem:** Calculate the key performance measures for this bank.

**Solution:**

*   $\lambda = 10$ customers/hour
*   $\mu = 6$ customers/hour
*   $s = 2$ servers

**Step 1: Check for stability.**
Total service rate = $s \mu = 2 \times 6 = 12$ customers/hour.
Since $\lambda = 10 < 12$, the system is stable.

**Step 2: Calculate server utilization ($\rho$).**
$\rho = \frac{\lambda}{s\mu} = \frac{10}{2 \times 6} = \frac{10}{12} = \frac{5}{6} \approx 0.833$

**Step 3: Calculate $P_0$ (Probability of zero customers).**
$\lambda/\mu = 10/6 = 5/3$
$P_0 = \left[ 1 + \frac{\lambda}{\mu} + \frac{(\lambda/\mu)^2}{2!(1 - \lambda/(2\mu))} \right]^{-1}$
$P_0 = \left[ 1 + \frac{5}{3} + \frac{(5/3)^2}{2(1 - 10/12)} \right]^{-1}$
$P_0 = \left[ 1 + \frac{5}{3} + \frac{25/9}{2(1 - 5/6)} \right]^{-1}$
$P_0 = \left[ 1 + \frac{5}{3} + \frac{25/9}{2(1/6)} \right]^{-1}$
$P_0 = \left[ 1 + \frac{5}{3} + \frac{25/9}{1/3} \right]^{-1}$
$P_0 = \left[ 1 + \frac{5}{3} + \frac{25}{9} \times 3 \right]^{-1}$
$P_0 = \left[ 1 + \frac{5}{3} + \frac{25}{3} \right]^{-1}$
$P_0 = \left[ \frac{3+5+25}{3} \right]^{-1} = \left[ \frac{33}{3} \right]^{-1} = \left[ 11 \right]^{-1} = \frac{1}{11}$

$P_0 \approx 0.0909$

**Step 4: Calculate $P_2$ (Probability of both servers being busy).**
$P_2 = \frac{(\lambda/\mu)^2}{2!(1 - \lambda/(2\mu))} P_0$
$P_2 = \frac{(5/3)^2}{2(1 - 5/6)} \times \frac{1}{11}$
$P_2 = \frac{25/9}{2(1/6)} \times \frac{1}{11}$
$P_2 = \frac{25/9}{1/3} \times \frac{1}{11}$
$P_2 = \frac{25}{3} \times \frac{1}{11} = \frac{25}{33}$

$P_2 \approx 0.7576$

**Step 5: Calculate $L_q$ (Average number of customers in the queue).**
$L_q = \frac{(\lambda/\mu)^2 \lambda}{2\mu (1 - \lambda/(2\mu))^2} P_0$
$L_q = \frac{(5/3)^2 (10)}{2(6) (1 - 10/12)^2} \times \frac{1}{11}$
$L_q = \frac{(25/9) \times 10}{12 (1 - 5/6)^2} \times \frac{1}{11}$
$L_q = \frac{250/9}{12 (1/6)^2} \times \frac{1}{11}$
$L_q = \frac{250/9}{12 (1/36)} \times \frac{1}{11}$
$L_q = \frac{250/9}{1/3} \times \frac{1}{11}$
$L_q = \frac{250}{3} \times \frac{1}{11} = \frac{250}{33}$

$L_q \approx 7.576$ customers

**Step 6: Calculate $W_q$ (Average waiting time in the queue).**
$W_q = \frac{L_q}{\lambda} = \frac{250/33}{10} = \frac{250}{330} = \frac{25}{33}$ hours

To convert to minutes: $W_q = \frac{25}{33} \times 60 \approx 45.45$ minutes.

**Step 7: Calculate $L$ (Average number of customers in the system).**
$L = L_q + \frac{\lambda}{\mu} = \frac{250}{33} + \frac{10}{6} = \frac{250}{33} + \frac{5}{3}$
$L = \frac{250 + 5 \times 11}{33} = \frac{250 + 55}{33} = \frac{305}{33}$

$L \approx 9.242$ customers

**Step 8: Calculate $W$ (Average waiting time in the system).**
$W = \frac{L}{\lambda} = \frac{305/33}{10} = \frac{305}{330} = \frac{61}{66}$ hours

To convert to minutes: $W = \frac{61}{66} \times 60 \approx 55.45$ minutes.
Alternatively, $W = W_q + \frac{1}{\mu} = \frac{25}{33} + \frac{1}{6} = \frac{50 + 11}{66} = \frac{61}{66}$ hours.

**Interpretation:**
The bank is experiencing a significant queue. On average, there are about 7.5 customers waiting in line, and a customer can expect to wait about 45 minutes before being served. This suggests that the bank might need to consider increasing its service capacity (e.g., adding more tellers or improving teller efficiency).

---

### 5. Practice Questions

**Question 1:**
A retail store has two checkout counters. Customers arrive according to a Poisson process at a rate of 20 customers per hour. Each counter can serve customers at an average rate of 12 customers per hour, and service times are exponentially distributed. What is the probability that a customer arriving at the store will have to wait?

**Question 2:**
For the retail store in Question 1, calculate:
a) The average number of customers waiting in the queue.
b) The average time a customer spends waiting in the queue.
c) The average number of customers in the system.
d) The average time a customer spends in the system.

**Question 3:**
A car wash has two washing bays. Cars arrive at an average rate of 15 cars per hour, following a Poisson distribution. Each bay can wash cars at an average rate of 8 cars per hour, with exponential service times.
a) Is the system stable? Justify your answer.
b) Calculate the probability that both washing bays are busy.
c) What is the average number of cars waiting for the wash?

---

### 6. Answers to Practice Questions

**Answer 1:**
This is an M/M/2 model.
$\lambda = 20$ customers/hour
$\mu = 12$ customers/hour
$s = 2$

First, check stability: $s\mu = 2 \times 12 = 24$. Since $\lambda = 20 < 24$, the system is stable.
Server utilization: $\rho = \frac{\lambda}{s\mu} = \frac{20}{2 \times 12} = \frac{20}{24} = \frac{5}{6} \approx 0.833$

The probability that a customer has to wait is the probability that both servers are busy, which is $P_2$ (for $n \ge s$).
Calculate $P_0$:
$\lambda/\mu = 20/12 = 5/3$
$P_0 = \left[ 1 + \frac{\lambda}{\mu} + \frac{(\lambda/\mu)^2}{2!(1 - \lambda/(2\mu))} \right]^{-1}$
$P_0 = \left[ 1 + \frac{5}{3} + \frac{(5/3)^2}{2(1 - 20/24)} \right]^{-1}$
$P_0 = \left[ 1 + \frac{5}{3} + \frac{25/9}{2(1 - 5/6)} \right]^{-1}$
$P_0 = \left[ 1 + \frac{5}{3} + \frac{25/9}{2(1/6)} \right]^{-1}$
$P_0 = \left[ 1 + \frac{5}{3} + \frac{25}{3} \right]^{-1} = \left[ \frac{3+5+25}{3} \right]^{-1} = \left[ \frac{33}{3} \right]^{-1} = \frac{1}{11}$

Now calculate $P_2$:
$P_2 = \frac{(\lambda/\mu)^2}{2!(1 - \lambda/(2\mu))} P_0$
$P_2 = \frac{(5/3)^2}{2(1 - 5/6)} \times \frac{1}{11} = \frac{25/9}{2(1/6)} \times \frac{1}{11} = \frac{25/9}{1/3} \times \frac{1}{11} = \frac{25}{3} \times \frac{1}{11} = \frac{25}{33}$

The probability that a customer will have to wait is $P_2 = \frac{25}{33} \approx 0.7576$.

**Answer 2:**
Using the values from Question 1: $\lambda=20, \mu=12, s=2, \lambda/\mu=5/3, \rho=5/6, P_0=1/11, P_2=25/33$.

a) **Average number of customers waiting in the queue ($L_q$):**
$L_q = \frac{(\lambda/\mu)^2 \lambda}{2\mu (1 - \lambda/(2\mu))^2} P_0$
$L_q = \frac{(5/3)^2 (20)}{2(12) (1 - 20/24)^2} \times \frac{1}{11}$
$L_q = \frac{(25/9) \times 20}{24 (1 - 5/6)^2} \times \frac{1}{11}$
$L_q = \frac{500/9}{24 (1/36)} \times \frac{1}{11}$
$L_q = \frac{500/9}{2/3} \times \frac{1}{11}$
$L_q = \frac{500}{9} \times \frac{3}{2} \times \frac{1}{11} = \frac{500}{3 \times 2} \times \frac{1}{11} = \frac{250}{3} \times \frac{1}{11} = \frac{250}{33}$
$L_q \approx 7.576$ customers.

b) **Average time a customer spends waiting in the queue ($W_q$):**
$W_q = \frac{L_q}{\lambda} = \frac{250/33}{20} = \frac{250}{33 \times 20} = \frac{25}{66}$ hours.
In minutes: $W_q = \frac{25}{66} \times 60 \approx 22.73$ minutes.

c) **Average number of customers in the system ($L$):**
$L = L_q + \frac{\lambda}{\mu} = \frac{250}{33} + \frac{20}{12} = \frac{250}{33} + \frac{5}{3}$
$L = \frac{250 + 5 \times 11}{33} = \frac{250 + 55}{33} = \frac{305}{33}$
$L \approx 9.242$ customers.

d) **Average time a customer spends in the system ($W$):**
$W = \frac{L}{\lambda} = \frac{305/33}{20} = \frac{305}{33 \times 20} = \frac{61}{66}$ hours.
Alternatively, $W = W_q + \frac{1}{\mu} = \frac{25}{66} + \frac{1}{12} = \frac{50 + 11}{132} = \frac{61}{66}$ hours.
In minutes: $W = \frac{61}{66} \times 60 \approx 55.45$ minutes.

**Answer 3:**
M/M/2 model: $\lambda = 15$ cars/hour, $\mu = 8$ cars/hour, $s=2$.

a) **Is the system stable?**
Total service rate = $s \mu = 2 \times 8 = 16$ cars/hour.
Since $\lambda = 15 < 16$, the system is stable. The arrival rate is less than the total service capacity, so the queue will not grow infinitely.

b) **Probability that both washing bays are busy ($P_2$):**
Calculate $P_0$:
$\lambda/\mu = 15/8$
$\lambda/(2\mu) = 15/(2 \times 8) = 15/16$
$P_0 = \left[ 1 + \frac{\lambda}{\mu} + \frac{(\lambda/\mu)^2}{2!(1 - \lambda/(2\mu))} \right]^{-1}$
$P_0 = \left[ 1 + \frac{15}{8} + \frac{(15/8)^2}{2(1 - 15/16)} \right]^{-1}$
$P_0 = \left[ 1 + \frac{15}{8} + \frac{225/64}{2(1/16)} \right]^{-1}$
$P_0 = \left[ 1 + \frac{15}{8} + \frac{225/64}{1/8} \right]^{-1}$
$P_0 = \left[ 1 + \frac{15}{8} + \frac{225}{64} \times 8 \right]^{-1}$
$P_0 = \left[ 1 + \frac{15}{8} + \frac{225}{8} \right]^{-1}$
$P_0 = \left[ \frac{8 + 15 + 225}{8} \right]^{-1} = \left[ \frac{248}{8} \right]^{-1} = \left[ 31 \right]^{-1} = \frac{1}{31}$

Now calculate $P_2$:
$P_2 = \frac{(\lambda/\mu)^2}{2!(1 - \lambda/(2\mu))} P_0$
$P_2 = \frac{(15/8)^2}{2(1 - 15/16)} \times \frac{1}{31}$
$P_2 = \frac{225/64}{2(1/16)} \times \frac{1}{31} = \frac{225/64}{1/8} \times \frac{1}{31} = \frac{225}{8} \times \frac{1}{31} = \frac{225}{248}$

The probability that both washing bays are busy is $P_2 = \frac{225}{248} \approx 0.9073$.

c) **Average number of cars waiting for the wash ($L_q$):**
$L_q = \frac{(\lambda/\mu)^2 \lambda}{2\mu (1 - \lambda/(2\mu))^2} P_0$
$L_q = \frac{(15/8)^2 (15)}{2(8) (1 - 15/16)^2} \times \frac{1}{31}$
$L_q = \frac{(225/64) \times 15}{16 (1/16)^2} \times \frac{1}{31}$
$L_q = \frac{3375/64}{16 (1/256)} \times \frac{1}{31}$
$L_q = \frac{3375/64}{1/16} \times \frac{1}{31}$
$L_q = \frac{3375}{64} \times 16 \times \frac{1}{31} = \frac{3375}{4} \times \frac{1}{31} = \frac{3375}{124}$
$L_q \approx 27.218$ cars.

---

### 7. Important Points to Remember

*   **Stability Condition:** For M/M/s systems to be stable, the arrival rate ($\lambda$) must be less than the total service capacity ($s\mu$). For M/M/2, this means $\lambda < 2\mu$.
*   **System Performance:** Increasing the number of servers (from one to two) can significantly reduce waiting times and queue lengths, especially when utilization is high.
*   **Erlang C Formula:** The probability that an arriving customer has to wait ($P_{s>}$) is often referred to as the Erlang C formula. For M/M/2, it's $P_2$.
*   **Little's Law:** Crucial for relating average number of customers and average waiting times ($L = \lambda W$, $L_q = \lambda W_q$).
*   **Assumptions are Key:** The validity of the results depends on how well the actual system conforms to the assumptions of the M/M/2 model (Poisson arrivals, exponential service, FCFS, infinite capacity).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 8. Further Reading & Related Concepts

*   **M/M/s Models:** The M/M/2 model is a specific case of the more general M/M/s model (s servers). Understanding the M/M/s framework provides a broader perspective. (Refer to Srinivasan, Gupta & Hira, Hillier & Lieberman).
*   **Other Queuing Models:** Explore M/G/1, M/D/1, and G/G/1 models to understand variations in arrival and service processes.
*   **Finite Queue Capacity:** Consider how system performance changes when there's a limit on the number of customers allowed in the system.
*   **Cost Analysis:** Queuing theory is often used for cost-benefit analysis. Calculating the cost of waiting (e.g., customer dissatisfaction) versus the cost of service (e.g., server salaries) can inform optimal resource allocation.

This module provides a solid foundation for analyzing systems with multiple servers. The M/M/2 model is a practical starting point for understanding how to manage waiting lines in real-world scenarios.