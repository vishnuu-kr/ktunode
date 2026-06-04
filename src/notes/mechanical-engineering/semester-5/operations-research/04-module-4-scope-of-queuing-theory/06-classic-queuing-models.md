---
title: "Classic Queuing Models"
subject: "OPERATIONS RESEARCH"
module: "Module 4: Scope of queuing theory"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463636"
status: "completed"
scrapedAt: "2026-05-20T18:02:06.924Z"
---
## Operations Research: Module 4 - Scope of Queuing Theory

### Topic: Classic Queuing Models

---

### 1. Introduction to Queuing Theory

**1.1. What is a Queue?**

A queue is a waiting line of customers (people, items, jobs, etc.) that are awaiting service from one or more servers.

**1.2. Why Study Queuing Theory?**

Queuing theory is a mathematical study of waiting lines. It is used to analyze and optimize systems where customers arrive, wait for service, and then depart. The primary goal is to balance the cost of providing service with the cost of customer waiting.

**1.3. Components of a Queuing System**

*   **Arrival Process:** Describes how customers enter the system.
*   **Queue Discipline:** The rule for selecting the next customer from the queue for service.
*   **Service Mechanism:** Describes the service provided to customers.
*   **System Capacity:** The maximum number of customers that can be in the system.
*   **Customer Population:** The source of customers.

---

### 2. Key Concepts and Definitions

*   **Customer:** An entity that arrives at the system seeking service.
*   **Server:** An entity that provides service to customers.
*   **Arrival Rate ($\lambda$):** The average number of customers arriving per unit of time.
*   **Service Rate ($\mu$):** The average number of customers served by a single server per unit of time.
*   **Traffic Intensity ($\rho$):** The ratio of the arrival rate to the service rate ($\rho = \lambda / \mu$). It represents the average utilization of a server.
*   **Utilization Factor:** The proportion of time a server is busy. For a single-server system, it's equal to $\rho$.
*   **System State:** The number of customers currently in the system (waiting or being served).

---

### 3. Probability Distributions in Queuing Theory

Understanding the probability distributions of arrival and service times is crucial for analyzing queuing systems.

**3.1. Arrival Process:**

*   **Poisson Process:** Assumes that the number of arrivals in any fixed interval of time follows a Poisson distribution. The inter-arrival times are exponentially distributed. This is a common assumption for random arrivals.
    *   **Probability of k arrivals in time t:** $P(X=k) = \frac{(\lambda t)^k e^{-\lambda t}}{k!}$, where $\lambda$ is the average arrival rate.
    *   **Inter-arrival time distribution:** $P(T \le t) = 1 - e^{-\lambda t}$, where $T$ is the time between consecutive arrivals.

**3.2. Service Process:**

*   **Exponential Distribution:** Assumes that the service times are exponentially distributed. This means that the probability of completing service in a small interval is constant, regardless of how long the service has already taken.
    *   **Probability of service time being less than or equal to t:** $P(S \le t) = 1 - e^{-\mu t}$, where $\mu$ is the average service rate.
    *   **Probability of service time being greater than t:** $P(S > t) = e^{-\mu t}$.

**Important Note (from Gupta & Hira, Chapter 16):** The combination of Poisson arrivals and exponential service times leads to simpler and widely applicable analytical results.

---

### 4. Kendall's Notation

Kendall's notation is a shorthand for describing queuing models. It is of the form:

**A / B / c / K / m / Z**

Where:
*   **A:** Distribution of inter-arrival times.
    *   **M:** Exponential (Markovian)
    *   **D:** Deterministic (constant)
    *   **E_k:** Erlang distribution with parameter k
    *   **G:** General distribution
*   **B:** Distribution of service times.
    *   **M:** Exponential (Markovian)
    *   **D:** Deterministic (constant)
    *   **E_k:** Erlang distribution with parameter k
    *   **G:** General distribution
*   **c:** Number of parallel servers.
*   **K:** System capacity (maximum number of customers allowed in the system, including those being served). If omitted, it's assumed to be infinite.
*   **m:** Size of the calling population. If omitted, it's assumed to be infinite.
*   **Z:** Queue discipline.
    *   **FCFS** or **FIFO:** First-Come, First-Served or First-In, First-Out
    *   **LCFS** or **LIFO:** Last-Come, First-Served or Last-In, First-Out
    *   **SIRO:** Service In Random Order
    *   **PR:** Priority

**Most Common Notation:** **A/B/c** (where K, m, and Z are assumed to be infinite and FCFS respectively).

---

### 5. Classic Queuing Models

We will focus on models that assume Poisson arrivals and exponential service times, as these are fundamental.

#### 5.1. Model 1: M/M/1 Queuing Model (Single Server)

This is the simplest and most widely studied queuing model.

*   **Assumptions:**
    *   Arrivals follow a Poisson process with rate $\lambda$.
    *   Service times are exponentially distributed with rate $\mu$ per server.
    *   There is a single server.
    *   The system capacity is infinite.
    *   The calling population is infinite.
    *   Queue discipline is FCFS.

*   **Key Performance Measures (for a stable system where $\rho < 1$):**

    *   **Traffic Intensity ($\rho$):** $\rho = \frac{\lambda}{\mu}$
        *   *Interpretation:* The average fraction of time the server is busy.
        *   **Important Point:** For the system to be stable and not grow indefinitely, $\lambda < \mu$ (i.e., $\rho < 1$). If $\lambda \ge \mu$, the queue will grow infinitely long.

    *   **Probability of the system being empty ($P_0$):**
        *   $P_0 = 1 - \rho$
        *   *Interpretation:* The probability that there are no customers in the system (server is idle).

    *   **Probability of having exactly n customers in the system ($P_n$):**
        *   $P_n = P_0 \rho^n = (1 - \rho) \rho^n$, for $n = 0, 1, 2, \dots$
        *   *Interpretation:* The probability that there are $n$ customers waiting or being served.

    *   **Average number of customers in the system ($L$):**
        *   $L = \sum_{n=0}^{\infty} n P_n = \frac{\rho}{1 - \rho} = \frac{\lambda}{\mu - \lambda}$
        *   *Interpretation:* The average total number of customers (waiting + being served) present in the system.

    *   **Average number of customers in the queue ($L_q$):**
        *   $L_q = L - \rho = \frac{\rho^2}{1 - \rho} = \frac{\lambda^2}{\mu(\mu - \lambda)}$
        *   *Interpretation:* The average number of customers waiting in the line, not including the one being served.

    *   **Average waiting time in the system ($W$):**
        *   $W = \frac{L}{\lambda} = \frac{1}{\mu - \lambda}$
        *   *Interpretation:* The average time a customer spends in the system, from arrival to completion of service.

    *   **Average waiting time in the queue ($W_q$):**
        *   $W_q = \frac{L_q}{\lambda} = \frac{\rho}{\mu - \lambda} = \frac{\lambda}{\mu(\mu - \lambda)}$
        *   *Interpretation:* The average time a customer spends waiting in the line before service begins.

    *   **Little's Law:** This is a fundamental result in queuing theory that states:
        *   $L = \lambda W$ (Average number in system = Arrival rate * Average time in system)
        *   $L_q = \lambda W_q$ (Average number in queue = Arrival rate * Average time in queue)
        *   These laws hold for any stable queuing system, regardless of the arrival and service distributions or the number of servers. (As per Hillier & Lieberman, Chapter 7).

*   **Example:** A single-teller bank has a Poisson arrival rate of 20 customers per hour. The teller can serve customers at an average rate of 24 customers per hour (exponentially distributed service times). Calculate the performance measures.

    *   $\lambda = 20$ customers/hour
    *   $\mu = 24$ customers/hour
    *   $\rho = \frac{20}{24} = \frac{5}{6} \approx 0.833$ (Server utilization)
    *   $P_0 = 1 - \rho = 1 - \frac{5}{6} = \frac{1}{6} \approx 0.167$ (Probability the teller is idle)
    *   $L = \frac{\rho}{1 - \rho} = \frac{5/6}{1 - 5/6} = \frac{5/6}{1/6} = 5$ customers (Average number in system)
    *   $L_q = \frac{\rho^2}{1 - \rho} = \frac{(5/6)^2}{1 - 5/6} = \frac{25/36}{1/6} = \frac{25}{36} \times 6 = \frac{25}{6} \approx 4.17$ customers (Average number waiting in queue)
    *   $W = \frac{1}{\mu - \lambda} = \frac{1}{24 - 20} = \frac{1}{4}$ hours = 15 minutes (Average time spent in the system)
    *   $W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{20}{24(24 - 20)} = \frac{20}{24 \times 4} = \frac{20}{96} = \frac{5}{24}$ hours = 12.5 minutes (Average waiting time in queue)

#### 5.2. Model 2: M/M/c Queuing Model (Multiple Servers)

This model extends the M/M/1 model to systems with multiple identical servers.

*   **Assumptions:**
    *   Arrivals follow a Poisson process with rate $\lambda$.
    *   Service times are exponentially distributed with rate $\mu$ per server.
    *   There are $c$ identical servers.
    *   Customers are served by the first available server.
    *   The system capacity is infinite.
    *   The calling population is infinite.
    *   Queue discipline is FCFS.

*   **Key Performance Measures (for a stable system where $\lambda < c\mu$):**

    *   **Traffic Intensity per server ($\rho$):** $\rho = \frac{\lambda}{c\mu}$
        *   *Interpretation:* The average utilization of each server.
        *   **Important Point:** For system stability, the total arrival rate must be less than the total service capacity of all servers, i.e., $\lambda < c\mu$ (i.e., $\rho < 1$).

    *   **Probability of zero customers in the system ($P_0$):**
        *   $P_0 = \left[ \sum_{n=0}^{c-1} \frac{(\lambda/\mu)^n}{n!} + \frac{(\lambda/\mu)^c}{c!(1-\rho)} \right]^{-1}$
        *   *Interpretation:* The probability that all servers are idle.

    *   **Probability of having exactly n customers in the system ($P_n$):**
        *   For $0 \le n \le c$: $P_n = P_0 \frac{(\lambda/\mu)^n}{n!}$
        *   For $n > c$: $P_n = P_0 \frac{(\lambda/\mu)^n}{c! c^{n-c}}$

    *   **Probability that all servers are busy ($P_c$):**
        *   $P_c = P_0 \frac{(\lambda/\mu)^c}{c!(1-\rho)}$
        *   *Interpretation:* The probability that a newly arriving customer will have to wait.

    *   **Average number of customers in the system ($L$):**
        *   $L = \frac{\lambda}{\mu} + L_q = \frac{\lambda}{\mu} + \frac{P_c \rho}{1-\rho}$
        *   *Interpretation:* The average total number of customers (waiting + being served) in the system.

    *   **Average number of customers in the queue ($L_q$):**
        *   $L_q = P_c \frac{\rho}{1-\rho}$
        *   *Interpretation:* The average number of customers waiting in the line.

    *   **Average waiting time in the system ($W$):**
        *   $W = \frac{L}{\lambda}$
        *   *Interpretation:* The average time a customer spends in the system.

    *   **Average waiting time in the queue ($W_q$):**
        *   $W_q = \frac{L_q}{\lambda} = \frac{P_c \rho}{\lambda(1-\rho)}$
        *   *Interpretation:* The average time a customer spends waiting in the line.

    *   **Erlang C Formula (Probability of waiting):** The probability that an arriving customer finds all $c$ servers busy is given by $P_c$ (sometimes called the Erlang C formula).

*   **Example:** A call center has 4 identical agents. Calls arrive at an average rate of 100 calls per hour, and each agent can handle an average of 30 calls per hour. Assume Poisson arrivals and exponential service times.

    *   $\lambda = 100$ calls/hour
    *   $c = 4$ agents
    *   $\mu = 30$ calls/hour/agent
    *   Total service capacity $= c\mu = 4 \times 30 = 120$ calls/hour. Since $\lambda < c\mu$ (100 < 120), the system is stable.
    *   $\rho = \frac{\lambda}{c\mu} = \frac{100}{120} = \frac{5}{6} \approx 0.833$ (Server utilization)
    *   $\lambda/\mu = \frac{100}{30} = \frac{10}{3}$

    To calculate $P_0$, we need to use the formula:
    $P_0 = \left[ \sum_{n=0}^{3} \frac{(10/3)^n}{n!} + \frac{(10/3)^4}{4!(1-5/6)} \right]^{-1}$

    Let's calculate the terms:
    *   $n=0: \frac{(10/3)^0}{0!} = 1$
    *   $n=1: \frac{(10/3)^1}{1!} = \frac{10}{3} \approx 3.333$
    *   $n=2: \frac{(10/3)^2}{2!} = \frac{100/9}{2} = \frac{100}{18} = \frac{50}{9} \approx 5.556$
    *   $n=3: \frac{(10/3)^3}{3!} = \frac{1000/27}{6} = \frac{1000}{162} = \frac{500}{81} \approx 6.173$
    *   Term for $n=4$: $\frac{(10/3)^4}{4!(1-5/6)} = \frac{10000/81}{24 \times (1/6)} = \frac{10000/81}{4} = \frac{10000}{324} = \frac{2500}{81} \approx 30.864$

    Sum of terms in the denominator: $1 + 3.333 + 5.556 + 6.173 + 30.864 = 46.926$
    $P_0 = \frac{1}{46.926} \approx 0.0213$

    Now, calculate $P_c$ (probability all agents are busy):
    $P_c = P_4 = P_0 \frac{(\lambda/\mu)^4}{4!(1-\rho)} = 0.0213 \times 30.864 \approx 0.658$
    This is the probability that an arriving call will have to wait.

    $L_q = P_c \frac{\rho}{1-\rho} = 0.658 \times \frac{5/6}{1 - 5/6} = 0.658 \times 5 = 3.29$ calls (Average number waiting)

    $W_q = \frac{L_q}{\lambda} = \frac{3.29}{100} = 0.0329$ hours $\approx 1.97$ minutes (Average wait time)

    $L = \frac{\lambda}{\mu} + L_q = \frac{100}{30} + 3.29 = 3.333 + 3.29 = 6.623$ calls (Average number in system)

    $W = \frac{L}{\lambda} = \frac{6.623}{100} = 0.06623$ hours $\approx 3.97$ minutes (Average time in system)

    **Reference (from Rao, Chapter 17):** The M/M/c model's formulas are derived using steady-state probabilities, often involving concepts from birth-death processes. The Erlang C formula is a crucial component for calculating waiting probabilities in multi-server systems.

#### 5.3. Model 3: M/M/1/K Queuing Model (Finite Capacity)

This model deals with systems that have a limited capacity for customers.

*   **Assumptions:**
    *   Arrivals follow a Poisson process with rate $\lambda$.
    *   Service times are exponentially distributed with rate $\mu$ per server.
    *   There is a single server.
    *   The system capacity is limited to $K$ customers (including those being served).
    *   The calling population is infinite.
    *   Queue discipline is FCFS.
    *   **Balking:** If an arriving customer finds the system full (K customers), they are turned away (lost).

*   **Key Performance Measures (for a stable system):**

    *   **System State Probabilities ($P_n$):**
        *   If $\rho = \lambda/\mu = 1$: $P_n = \frac{1}{K+1}$ for $n = 0, 1, \dots, K$. (Each state is equally likely).
        *   If $\rho \ne 1$:
            *   $P_0 = \frac{1 - \rho}{1 - \rho^{K+1}}$
            *   $P_n = P_0 \rho^n = \frac{(1 - \rho) \rho^n}{1 - \rho^{K+1}}$, for $n = 0, 1, \dots, K$.
        *   *Interpretation:* $P_n$ is the probability of having $n$ customers in the system.

    *   **Effective Arrival Rate ($\lambda_e$):**
        *   The arrival rate into the system is reduced because customers are lost when the system is full.
        *   $\lambda_e = \lambda (1 - P_K)$
        *   *Interpretation:* The actual average number of customers entering the system per unit of time.

    *   **Average number of customers in the system ($L$):**
        *   $L = \sum_{n=0}^{K} n P_n$
        *   If $\rho \ne 1$: $L = \frac{\rho}{1-\rho} - \frac{(K+1)\rho^{K+1}}{1-\rho^{K+1}}$
        *   If $\rho = 1$: $L = \frac{K}{2}$

    *   **Average number of customers in the queue ($L_q$):**
        *   $L_q = L - (\text{average number being served})$
        *   Average number being served $= \lambda_e / \mu$ (this is $1-\rho$ for M/M/1).
        *   More precisely: Average number being served $= \sum_{n=1}^{K} P_n$
        *   $L_q = L - \sum_{n=1}^{K} P_n$
        *   If $\rho \ne 1$: $L_q = \frac{\rho^2 (1 - K\rho^K + (K+1)\rho^{K+1})}{(1-\rho)(1-\rho^{K+1})}$
        *   If $\rho = 1$: $L_q = \frac{K(K+1)}{2(K+1)} = \frac{K}{2}$ (Incorrect - should be $L_q = L - P(\text{server busy})$)
        *   *Correct derivation for $L_q$*: Average number being served is $1-P_0$. So $L_q = L - (1-P_0)$ for $\rho \neq 1$.

    *   **Average waiting time in the system ($W$):**
        *   $W = \frac{L}{\lambda_e}$
        *   *Interpretation:* Average time a customer spends in the system (including waiting and service).

    *   **Average waiting time in the queue ($W_q$):**
        *   $W_q = \frac{L_q}{\lambda_e}$
        *   *Interpretation:* Average time a customer spends waiting in the queue.

*   **Example:** A small car repair shop has space for only 3 cars in its waiting area and 1 car at the service bay, making a total system capacity of $K=4$. Cars arrive at a Poisson rate of $\lambda = 2$ cars per hour. The mechanic can service cars at an exponential rate of $\mu = 3$ cars per hour. If the shop is full, arriving cars are turned away.

    *   $\lambda = 2$ cars/hour
    *   $\mu = 3$ cars/hour
    *   $K = 4$ (total capacity)
    *   $\rho = \lambda / \mu = 2 / 3 \approx 0.667$

    Since $\rho \ne 1$:
    $P_0 = \frac{1 - \rho}{1 - \rho^{K+1}} = \frac{1 - 2/3}{1 - (2/3)^{4+1}} = \frac{1/3}{1 - (2/3)^5} = \frac{1/3}{1 - 32/243} = \frac{1/3}{(243-32)/243} = \frac{1/3}{211/243} = \frac{1}{3} \times \frac{243}{211} = \frac{81}{211} \approx 0.3839$

    $P_K = P_4 = P_0 \rho^4 = \frac{81}{211} \left(\frac{2}{3}\right)^4 = \frac{81}{211} \times \frac{16}{81} = \frac{16}{211} \approx 0.0758$
    This is the probability that an arriving car will be turned away.

    $\lambda_e = \lambda (1 - P_4) = 2 \times (1 - 0.0758) = 2 \times 0.9242 = 1.8484$ cars/hour (Effective arrival rate)

    $L = \frac{\rho}{1-\rho} - \frac{(K+1)\rho^{K+1}}{1-\rho^{K+1}} = \frac{2/3}{1 - 2/3} - \frac{(4+1)(2/3)^{4+1}}{1 - (2/3)^{4+1}}$
    $L = \frac{2/3}{1/3} - \frac{5(32/243)}{1 - 32/243} = 2 - \frac{160/243}{211/243} = 2 - \frac{160}{211} = \frac{422 - 160}{211} = \frac{262}{211} \approx 1.2417$ cars (Average number in system)

    $L_q = L - (1 - P_0) = 1.2417 - (1 - 0.3839) = 1.2417 - 0.6161 = 0.6256$ cars (Average number waiting in queue)

    $W = \frac{L}{\lambda_e} = \frac{1.2417}{1.8484} \approx 0.672$ hours $\approx 40.32$ minutes (Average time in system)

    $W_q = \frac{L_q}{\lambda_e} = \frac{0.6256}{1.8484} \approx 0.3384$ hours $\approx 20.30$ minutes (Average waiting time in queue)

    **Reference (from Vohra & Arora, Chapter 19):** Finite capacity models are crucial for systems where space or buffer is limited, leading to lost customers. The probability of being turned away ($P_K$) is a key metric.

#### 5.4. Model 4: M/M/c/K Queuing Model (Multiple Servers with Finite Capacity)

This model combines multiple servers with a finite system capacity.

*   **Assumptions:**
    *   Arrivals follow a Poisson process with rate $\lambda$.
    *   Service times are exponentially distributed with rate $\mu$ per server.
    *   There are $c$ identical servers.
    *   The system capacity is limited to $K$ customers (including those being served).
    *   If the system is full ($K$ customers), arriving customers are turned away.
    *   Queue discipline is FCFS.

*   **Key Performance Measures (for a stable system):**

    *   **Effective Arrival Rate ($\lambda_e$):**
        *   $\lambda_e = \lambda (1 - P_K)$
        *   $P_K$ is the probability that the system is full.

    *   **System State Probabilities ($P_n$):**
        *   These are more complex to derive and often require iterative calculations or approximations. The general approach involves solving a system of linear equations based on birth-death processes.
        *   For $\lambda < c\mu$ and $K \ge c$:
            *   $P_0 = \left[ \sum_{n=0}^{c-1} \frac{(\lambda/\mu)^n}{n!} + \frac{(\lambda/\mu)^c}{c!} \sum_{n=c}^{K} \left(\frac{\lambda}{c\mu}\right)^{n-c} \right]^{-1}$
            *   For $0 \le n \le c$: $P_n = P_0 \frac{(\lambda/\mu)^n}{n!}$
            *   For $c < n \le K$: $P_n = P_0 \frac{(\lambda/\mu)^n}{c! c^{n-c}}$

    *   **Average number of customers in the system ($L$):**
        *   $L = \sum_{n=0}^{K} n P_n$

    *   **Average number of customers in the queue ($L_q$):**
        *   $L_q = L - \sum_{n=1}^{c} P_n$ (if $n \le c$, the customer is being served, not queued)
        *   More precisely, $L_q = L - \text{average number of busy servers}$.
        *   Average number of busy servers $= \sum_{n=c}^{K} P_n$.

    *   **Average waiting time in the system ($W$):**
        *   $W = \frac{L}{\lambda_e}$

    *   **Average waiting time in the queue ($W_q$):**
        *   $W_q = \frac{L_q}{\lambda_e}$

*   **Example:** Consider a small airport with 2 security check counters ($c=2$). The arrival rate of passengers is Poisson with $\lambda = 30$ passengers per hour. Each counter can process passengers at an exponential rate of $\mu = 20$ passengers per hour. The total waiting area can hold a maximum of $K=5$ passengers (including those being screened). Passengers arriving when all 5 spots are occupied are denied entry.

    *   $\lambda = 30$
    *   $c = 2$
    *   $\mu = 20$
    *   $K = 5$
    *   $\lambda/\mu = 30/20 = 1.5$
    *   $c\mu = 2 \times 20 = 40$. Since $\lambda < c\mu$ (30 < 40), the system is stable if $K$ were infinite.

    We need to calculate $P_0$, $P_K$, and then other metrics.
    $P_0 = \left[ \sum_{n=0}^{1} \frac{(1.5)^n}{n!} + \frac{(1.5)^2}{2!} \sum_{n=2}^{5} \left(\frac{30}{40}\right)^{n-2} \right]^{-1}$
    $P_0 = \left[ \frac{1.5^0}{0!} + \frac{1.5^1}{1!} + \frac{1.5^2}{2!} \sum_{n=2}^{5} \left(0.75\right)^{n-2} \right]^{-1}$
    $P_0 = \left[ 1 + 1.5 + \frac{2.25}{2} \left( (0.75)^0 + (0.75)^1 + (0.75)^2 + (0.75)^3 \right) \right]^{-1}$
    $P_0 = \left[ 1 + 1.5 + 1.125 \left( 1 + 0.75 + 0.5625 + 0.421875 \right) \right]^{-1}$
    $P_0 = \left[ 2.5 + 1.125 \times 2.734375 \right]^{-1}$
    $P_0 = \left[ 2.5 + 3.076171875 \right]^{-1} = \left[ 5.576171875 \right]^{-1} \approx 0.1793$

    Now calculate $P_K = P_5$:
    $P_5 = P_0 \frac{(\lambda/\mu)^5}{c! c^{5-c}} = P_0 \frac{(1.5)^5}{2! 2^{3}} = 0.1793 \times \frac{7.59375}{2 \times 8} = 0.1793 \times \frac{7.59375}{16} \approx 0.1793 \times 0.4746 \approx 0.0851$
    This is $P_K$, the probability a passenger is denied entry.

    $\lambda_e = \lambda (1 - P_5) = 30 \times (1 - 0.0851) = 30 \times 0.9149 = 27.447$ passengers/hour.

    Calculating $L$ and $L_q$ would involve summing $n P_n$ and $n P_n$ for $n>c$, respectively, which can be tedious without a calculator or software.

    **Reference (from Hillier & Lieberman, Chapter 7):** The formulas for M/M/c/K systems are derived using the principles of continuous-time Markov chains, specifically birth-death processes, and can be quite complex, especially the state probabilities.

---

### 6. Other Classic Models (Brief Mention)

*   **M/M/1/N:** This is the M/M/1 model with finite capacity $N$ (total in system), which is what we covered as M/M/1/K.
*   **M/M/c/c (Erlang Model):** This is a special case of M/M/c/K where $K=c$. It represents systems with no waiting room; if all servers are busy, arriving customers are lost. This is often used for call centers or telephone trunking.
    *   **Probability of loss (P_loss):** $P_{loss} = P_c = \frac{(\lambda/\mu)^c / c!}{(1 - \lambda/(c\mu)) \sum_{n=0}^{c-1} (\lambda/\mu)^n/n! + (\lambda/\mu)^c / c!}$ (Erlang B formula).

---

### 7. Practice Questions and Exercises

**Q1. (M/M/1)**
A barber shop has one barber. Customers arrive at a Poisson rate of 3 per hour. The barber can serve customers at an average rate of 5 per hour, with service times being exponentially distributed.
a) What is the average number of customers in the shop?
b) What is the average time a customer spends waiting in the queue?
c) What is the probability that the barber is idle?
d) What is the probability that a customer has to wait?

**Answer Q1:**
*   $\lambda = 3$, $\mu = 5$
*   $\rho = 3/5 = 0.6$
*   a) $L = \frac{\rho}{1-\rho} = \frac{0.6}{0.4} = 1.5$ customers
*   b) $W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{3}{5(5-3)} = \frac{3}{5 \times 2} = \frac{3}{10}$ hours = 18 minutes
*   c) $P_0 = 1 - \rho = 1 - 0.6 = 0.4$
*   d) Probability of waiting is $P(\text{server is busy}) = \rho = 0.6$

**Q2. (M/M/c)**
A bank has 3 tellers. Customers arrive at an average rate of 40 per hour, following a Poisson process. Each teller can serve an average of 15 customers per hour with exponential service times.
a) What is the probability that a customer has to wait for service?
b) What is the average number of customers waiting in the queue?
c) What is the average time a customer spends in the system?

**Answer Q2:**
*   $\lambda = 40$, $c = 3$, $\mu = 15$
*   $c\mu = 3 \times 15 = 45$. Stable system.
*   $\rho = \lambda / (c\mu) = 40 / 45 = 8/9 \approx 0.889$
*   $\lambda/\mu = 40/15 = 8/3 \approx 2.667$

    *   Calculate $P_0$:
        $P_0 = \left[ \sum_{n=0}^{2} \frac{(8/3)^n}{n!} + \frac{(8/3)^3}{3!(1-8/9)} \right]^{-1}$
        $P_0 = \left[ \frac{1}{1} + \frac{8/3}{1} + \frac{512/27}{6 \times (1/9)} \right]^{-1} = \left[ 1 + 2.667 + \frac{512/27}{2/3} \right]^{-1}$
        $P_0 = \left[ 1 + 2.667 + \frac{512}{27} \times \frac{3}{2} \right]^{-1} = \left[ 1 + 2.667 + \frac{256}{9} \right]^{-1}$
        $P_0 = \left[ 1 + 2.667 + 28.444 \right]^{-1} = \left[ 32.111 \right]^{-1} \approx 0.0311$

    *   a) Probability of waiting $= P_c = P_3 = P_0 \frac{(\lambda/\mu)^3}{3!(1-\rho)}$
        $P_3 = 0.0311 \times \frac{(8/3)^3}{6 \times (1/9)} = 0.0311 \times \frac{512/27}{2/3} = 0.0311 \times \frac{512}{27} \times \frac{3}{2} = 0.0311 \times 28.444 \approx 0.885$

    *   b) $L_q = P_c \frac{\rho}{1-\rho} = 0.885 \times \frac{8/9}{1 - 8/9} = 0.885 \times \frac{8/9}{1/9} = 0.885 \times 8 = 7.08$ customers

    *   c) $W_q = L_q / \lambda = 7.08 / 40 = 0.177$ hours = 10.62 minutes
        $W = W_q + 1/\mu = 0.177 + 1/15 = 0.177 + 0.0667 = 0.2437$ hours = 14.62 minutes

**Q3. (M/M/1/K)**
A website has a maximum of 5 concurrent users allowed in its support chat queue ($K=5$). If the queue is full, new users are rejected. Users arrive at a Poisson rate of $\lambda=10$ per hour. The support staff can handle users at an average rate of $\mu=4$ per hour.
a) What is the probability that a new user is rejected?
b) What is the effective arrival rate of users to the support system?
c) What is the average number of users in the system?

**Answer Q3:**
*   $\lambda = 10$, $\mu = 4$, $K = 5$.
*   $\rho = \lambda/\mu = 10/4 = 2.5$. Since $\rho > 1$, and the system has finite capacity, it will reach a steady state.

    *   $P_0 = \frac{1 - \rho}{1 - \rho^{K+1}} = \frac{1 - 2.5}{1 - (2.5)^{6}} = \frac{-1.5}{1 - 244.140625} = \frac{-1.5}{-243.140625} \approx 0.00617$
    *   a) $P_K = P_5 = P_0 \rho^5 = 0.00617 \times (2.5)^5 = 0.00617 \times 97.65625 \approx 0.6037$ (Probability of rejection)

    *   b) $\lambda_e = \lambda (1 - P_5) = 10 \times (1 - 0.6037) = 10 \times 0.3963 = 3.963$ users/hour.

    *   c) $L = \frac{\rho}{1-\rho} - \frac{(K+1)\rho^{K+1}}{1-\rho^{K+1}} = \frac{2.5}{1-2.5} - \frac{(5+1)(2.5)^{6}}{1-(2.5)^{6}}$
        $L = \frac{2.5}{-1.5} - \frac{6 \times 244.140625}{-243.140625} = -1.6667 - \frac{1464.84375}{-243.140625} = -1.6667 + 6.025 \approx 4.358$ users.

---

### 8. Important Points to Remember

*   **Stability Condition:** For most infinite capacity models (M/M/1, M/M/c), the system is stable only if the arrival rate is less than the total service capacity ($\lambda < \mu$ for M/M/1, $\lambda < c\mu$ for M/M/c).
*   **Little's Law:** $L = \lambda W$ and $L_q = \lambda W_q$ are universal for stable systems.
*   **Poisson Arrivals & Exponential Service Times (M/M/*):** These assumptions simplify calculations greatly, leading to the most commonly used classic models.
*   **Finite Capacity (K):** Introduces the concept of lost customers and reduces the effective arrival rate.
*   **Cost Analysis:** Queuing theory is often used to perform cost-benefit analyses. For example, calculating the cost of waiting (customer dissatisfaction, lost business) versus the cost of providing more service (more servers, faster service). (This aspect is covered in later modules but is the ultimate goal of applying these models).
*   **Assumptions are Key:** The validity of the results depends heavily on how well the real-world system fits the model's assumptions. Deviations can lead to inaccurate predictions. (As emphasized in quantitative management texts like Vohra & Arora).

---

### 9. Alignment with Course Outcomes

*   **CO5: To solve problems using classical queuing theory models (Knowledge Level: K2, K3):** This entire module is dedicated to this outcome. We have covered the fundamental M/M/1, M/M/c, M/M/1/K, and M/M/c/K models, enabling students to solve problems related to these classic structures. The calculations for various performance measures (L, Lq, W, Wq, Po, Pn) align with K2 (Understanding) and K3 (Applying) knowledge levels.

---
This concludes Module 4, Topic: Classic Queuing Models. Remember to practice applying these formulas to different scenarios to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
