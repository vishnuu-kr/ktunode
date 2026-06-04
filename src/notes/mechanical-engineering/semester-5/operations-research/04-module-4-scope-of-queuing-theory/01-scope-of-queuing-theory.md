---
title: "Scope of queuing theory"
subject: "OPERATIONS RESEARCH"
module: "Module 4: Scope of queuing theory"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463631"
status: "completed"
scrapedAt: "2026-05-20T18:02:03.488Z"
---
# Operations Research - Module 4: Scope of Queuing Theory

This module delves into the fascinating world of Queuing Theory, a powerful branch of Operations Research that helps us understand and manage waiting lines. We'll explore its fundamental concepts, various models, and its vast applications across numerous disciplines.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   Understand the fundamental concepts of queuing systems.
*   Identify the components of a queuing system.
*   Classify different types of queuing models.
*   Recognize the application areas of queuing theory.
*   Appreciate the significance of queuing theory in improving system efficiency and customer satisfaction.
*   (CO5) Solve problems using classical queuing theory models.

## Key Concepts and Definitions

### What is a Queuing System?

A queuing system is a mathematical model used to study the behavior of waiting lines. It represents a situation where "customers" (people, machines, data packets, etc.) arrive at a "service facility" (teller, repairman, server, etc.) and may have to wait for service if the facility is busy.

**Core Components of a Queuing System:**

1.  **Arrival Process:** Describes how customers arrive at the system.
    *   **Arrival Pattern:** The statistical distribution of the time between successive arrivals. Common patterns include:
        *   **Poisson Process:** Arrivals occur randomly over time, with a constant average rate. This is a very common and useful assumption.
        *   **Deterministic Arrivals:** Arrivals occur at fixed, regular intervals.
    *   **Arrival Distribution:** The probability distribution of the number of customers arriving in a given time period.
    *   **Population Size:**
        *   **Finite Population:** The total number of potential customers is limited (e.g., a specific set of machines that can break down).
        *   **Infinite Population:** The total number of potential customers is very large or practically unlimited (e.g., customers arriving at a supermarket).

2.  **Service Mechanism:** Describes how customers are served.
    *   **Service Time:** The time it takes to serve a single customer.
        *   **Service Time Distribution:** The statistical distribution of the service time. Common distributions include:
            *   **Exponential Distribution:** Service times are random and have a constant average rate.
            *   **Deterministic Service:** Service times are constant for all customers.
            *   **Erlang or Gamma Distribution:** More general distributions that can capture variability in service times.
    *   **Number of Servers:**
        *   **Single Server:** Only one service facility is available.
        *   **Multiple Servers:** Several service facilities operate in parallel.
    *   **Service Discipline:** The rule used to select the next customer from the queue for service. Common disciplines include:
        *   **First-Come, First-Served (FCFS) / First-In, First-Out (FIFO):** The customer who arrived first is served first.
        *   **Last-Come, First-Served (LCFS) / Last-In, First-Out (LIFO):** The customer who arrived last is served first (less common in physical queues, but seen in some data structures).
        *   **Shortest-Job-First (SJF):** The customer with the shortest expected service time is served first.
        *   **Priority Service:** Customers are served based on a predefined priority level.

3.  **Queue Configuration:** Describes the arrangement of the waiting line.
    *   **Queue Capacity:**
        *   **Infinite Queue Capacity:** The queue can grow indefinitely.
        *   **Finite Queue Capacity:** The queue has a maximum limit on the number of customers that can wait.
    *   **Number of Queues:**
        *   **Single Queue:** All customers wait in a single line.
        *   **Multiple Queues:** Customers may form separate queues for different servers.

4.  **Customer Behavior:** How customers interact with the queuing system.
    *   **Balking:** A potential customer decides not to join the queue because it is too long.
    *   **Reneging:** A customer who has joined the queue leaves before being served, usually due to waiting too long.
    *   **Collusion:** Customers cooperate to gain an advantage (less common in basic models).

### Notation for Queuing Models (Kendall's Notation)

A widely used notation to describe queuing systems is **Kendall's Notation**, which follows the format: **A/B/c/K/N/D**

*   **A:** Arrival distribution
*   **B:** Service time distribution
*   **c:** Number of parallel servers
*   **K:** Capacity of the system (queue length + number of customers being served) - often omitted if infinite.
*   **N:** Capacity of the calling population - often omitted if infinite.
*   **D:** Service discipline - often omitted if FCFS.

**Common Notations for Distributions:**

*   **M:** Markovian (or Exponential) distribution for inter-arrival or service times (Poisson process for arrivals).
*   **D:** Deterministic distribution (constant inter-arrival or service times).
*   **Ek:** Erlang distribution with parameter *k*.
*   **GI:** General independent distribution (for any distribution).

**Examples of Kendall's Notation:**

*   **M/M/1:** Single server, Poisson arrivals, Exponential service times, infinite queue capacity, infinite population, FCFS. This is the most fundamental and widely studied model.
*   **M/M/c:** Multiple servers (c), Poisson arrivals, Exponential service times, infinite capacity, infinite population, FCFS.
*   **M/G/1:** Single server, Poisson arrivals, General service times, infinite capacity, infinite population, FCFS.
*   **M/D/1:** Single server, Poisson arrivals, Deterministic service times, infinite capacity, infinite population, FCFS.
*   **M/M/1/K:** Single server, Poisson arrivals, Exponential service times, finite system capacity K, infinite population, FCFS. (This implies finite queue capacity if K > 1).

## Mathematical Measures of a Queuing System

Queuing theory provides tools to calculate performance measures that help in analyzing and optimizing system design.

**Key Performance Measures:**

1.  **λ (Lambda):** Average arrival rate of customers per unit of time.
    *   *Example:* If 10 customers arrive in 2 hours, λ = 10 customers / 2 hours = 5 customers/hour.
2.  **μ (Mu):** Average service rate of customers per unit of time *per server*.
    *   *Example:* If a server can serve 3 customers in 1 hour, μ = 3 customers/hour.
3.  **ρ (Rho):** Traffic intensity or server utilization. It represents the proportion of time the server is busy.
    *   For a single-server system (M/M/1): ρ = λ / μ
    *   For a multi-server system (M/M/c): ρ = λ / (c * μ)
    *   **Important Note:** For a stable system, the arrival rate must be less than the total service capacity. Therefore, for M/M/1, λ < μ (or ρ < 1). For M/M/c, λ < cμ (or ρ < 1).

4.  **Lq:** Average number of customers waiting in the queue.
5.  **Ls:** Average number of customers in the system (waiting + being served).
6.  **Wq:** Average waiting time of a customer in the queue.
7.  **Ws:** Average time a customer spends in the system (waiting + service).
8.  **P0:** Probability that there are no customers in the system (the system is idle).
9.  **Pn:** Probability that there are exactly *n* customers in the system.
10. **P(wait):** Probability that an arriving customer has to wait for service.

**Relationships between Measures (for stable systems):**

*   **Little's Law:** A fundamental law in queuing theory that states:
    *   Lq = λ * Wq (Average number in queue = Arrival rate * Average waiting time in queue)
    *   Ls = λ * Ws (Average number in system = Arrival rate * Average time in system)

## Common Queuing Models and Their Formulas

Let's explore some fundamental models and their key performance measures. These formulas are typically derived using probability theory and steady-state analysis. For derivations, refer to textbooks like Gupta & Hira (2008) or Hillier & Lieberman (Eleventh Edition).

### Model 1: M/M/1 Queue (Single Server, Poisson Arrivals, Exponential Service)

This is the simplest and most fundamental model.

*   **Assumptions:**
    *   Arrivals follow a Poisson process with rate λ.
    *   Service times follow an exponential distribution with rate μ.
    *   Single server.
    *   Infinite queue capacity.
    *   Infinite population.
    *   FCFS discipline.
    *   System is stable: λ < μ (ρ < 1).

*   **Key Formulas:**
    *   Traffic Intensity (Utilization): ρ = λ / μ
    *   Probability of zero customers in the system: P₀ = 1 - ρ
    *   Probability of *n* customers in the system: Pn = ρⁿ * P₀ = ρⁿ (1 - ρ)
    *   Average number of customers in the queue: Lq = ρ² / (1 - ρ) = λ² / (μ(μ - λ))
    *   Average number of customers in the system: Ls = ρ / (1 - ρ) = λ / (μ - λ)
    *   Average waiting time in the queue: Wq = Lq / λ = λ / (μ(μ - λ)) = ρ / (μ(1 - ρ))
    *   Average time in the system: Ws = Ls / λ = 1 / (μ - λ) = Wq + 1/μ
    *   Probability of an arriving customer waiting: P(wait) = P(system has 1 or more customers) = ρ = λ / μ

**Example 1.1 (M/M/1):**
A bank teller serves customers one at a time. Customers arrive at an average rate of 20 per hour, and the teller serves customers at an average rate of 25 per hour. Assuming Poisson arrivals and exponential service times:

*   λ = 20 customers/hour
*   μ = 25 customers/hour

Calculate:
a) The traffic intensity.
b) The probability that the teller is busy.
c) The average number of customers waiting in the queue.
d) The average number of customers in the bank (waiting + being served).
e) The average time a customer waits in the queue.
f) The average time a customer spends in the bank.
g) The probability that an arriving customer has to wait.

**Solution:**
a) ρ = λ / μ = 20 / 25 = 0.8
b) Probability teller is busy = ρ = 0.8 (80%)
c) Lq = ρ² / (1 - ρ) = (0.8)² / (1 - 0.8) = 0.64 / 0.2 = 3.2 customers
d) Ls = ρ / (1 - ρ) = 0.8 / (1 - 0.8) = 0.8 / 0.2 = 4.0 customers
e) Wq = Lq / λ = 3.2 / 20 = 0.16 hours = 0.16 * 60 minutes = 9.6 minutes
f) Ws = Ls / λ = 4.0 / 20 = 0.2 hours = 0.2 * 60 minutes = 12 minutes (or Ws = Wq + 1/μ = 0.16 + 1/25 = 0.16 + 0.04 = 0.2 hours)
g) P(wait) = ρ = 0.8 (80%)

### Model 2: M/M/c Queue (Multiple Servers, Poisson Arrivals, Exponential Service)

This model is applicable when there are multiple identical servers operating in parallel.

*   **Assumptions:**
    *   Arrivals follow a Poisson process with rate λ.
    *   Service times follow an exponential distribution with rate μ *per server*.
    *   *c* identical servers.
    *   Infinite queue capacity.
    *   Infinite population.
    *   FCFS discipline.
    *   System is stable: λ < cμ (or ρ < 1, where ρ = λ / (cμ) is the average utilization *per server*).

*   **Key Formulas:**
    *   Average arrival rate: λ
    *   Average service rate per server: μ
    *   Number of servers: c
    *   Traffic intensity (average utilization per server): ρ = λ / (cμ)
    *   Traffic intensity (total load): a = λ / μ
    *   Probability of zero customers in the system (P₀):
        *   For 0 ≤ n < c: Pn = (aⁿ / n!) * P₀
        *   For n ≥ c: Pn = (aⁿ / (c! * cⁿ⁻ᶜ)) * P₀
        *   And P₀ = [ Σ(n=0 to c-1) (aⁿ / n!) + (aᶜ / (c! * (1 - ρ))) ]⁻¹
    *   Average number of customers waiting in the queue (Lq):
        Lq = [ P(system has ≥ c customers) * ρ ] / (1 - ρ)
        where P(system has ≥ c customers) is often denoted as P_c (or often calculated using the Erlang C formula for waiting probability).
    *   Average number of customers in the system (Ls): Ls = Lq + a/μ = Lq + λ/μ
    *   Average waiting time in the queue (Wq): Wq = Lq / λ
    *   Average time in the system (Ws): Ws = Wq + 1/μ

**Note on calculating P₀ and Lq for M/M/c:** These calculations can be complex. Textbooks like Gupta & Hira (2008) or Rao (Wiley Eastern) provide detailed derivations and tables for the Erlang C formula (which helps calculate the probability of waiting).

**Example 1.2 (M/M/c):**
A call center has 3 operators (c=3). Calls arrive at an average rate of 60 per hour (λ=60). Each operator can handle an average of 25 calls per hour (μ=25). Assume Poisson arrivals and exponential service times, and FCFS.

*   λ = 60 calls/hour
*   μ = 25 calls/hour
*   c = 3 operators

Calculate:
a) The average utilization per operator.
b) The probability that an arriving call has to wait (Erlang C formula for P(wait)).
c) The average number of calls waiting.
d) The average time a call waits in the queue.

**Solution:**
a) Average utilization per operator: ρ = λ / (cμ) = 60 / (3 * 25) = 60 / 75 = 0.8 (80%)
b) This requires calculating P₀ first.
    *   a = λ / μ = 60 / 25 = 2.4
    *   P₀ = [ Σ(n=0 to 2) (2.4ⁿ / n!) + (2.4³ / (3! * (1 - 0.8))) ]⁻¹
    *   P₀ = [ (2.4⁰/0!) + (2.4¹/1!) + (2.4²/2!) + (2.4³/6 * 0.2) ]⁻¹
    *   P₀ = [ 1 + 2.4 + (5.76/2) + (13.824 / 1.2) ]⁻¹
    *   P₀ = [ 1 + 2.4 + 2.88 + 11.52 ]⁻¹
    *   P₀ = [ 17.8 ]⁻¹ ≈ 0.0562
    *   Probability of waiting (P(wait)) is often calculated as the probability that all 'c' servers are busy. For M/M/c, this is P_c in some notations, or using the Erlang C formula.
    *   The Erlang C formula directly gives the probability that an arriving customer has to wait:
        $P(wait) = \frac{\frac{(λ/μ)^c}{c!(1 - λ/(cμ))}}{\sum_{n=0}^{c-1} \frac{(λ/μ)^n}{n!} + \frac{(λ/μ)^c}{c!(1 - λ/(cμ))}}$
        $P(wait) = \frac{\frac{(2.4)^3}{3!(1 - 0.8)}}{\sum_{n=0}^{2} \frac{(2.4)^n}{n!} + \frac{(2.4)^3}{3!(1 - 0.8)}}$
        $P(wait) = \frac{13.824 / (6 * 0.2)}{1 + 2.4 + 2.88 + \frac{13.824}{1.2}} = \frac{11.52}{1 + 2.4 + 2.88 + 11.52} = \frac{11.52}{17.8} \approx 0.647$
        So, an arriving call has about a 64.7% chance of having to wait.
c) Average number of calls waiting (Lq):
    *   First, calculate P₀: P₀ ≈ 0.0562 (as calculated above)
    *   P(system has ≥ c customers) = 1 - Σ(n=0 to c-1) Pn
    *   P(system has ≥ 3 customers) = 1 - [P₀ + P₁ + P₂]
    *   P₀ ≈ 0.0562
    *   P₁ = (a¹/1!) * P₀ = 2.4 * 0.0562 ≈ 0.135
    *   P₂ = (a²/2!) * P₀ = (5.76/2) * 0.0562 ≈ 2.88 * 0.0562 ≈ 0.162
    *   P(system has ≥ 3 customers) = 1 - (0.0562 + 0.135 + 0.162) = 1 - 0.3532 ≈ 0.6468 (This is essentially the probability of waiting calculated above).
    *   Lq = P(system has ≥ c customers) * ρ / (1 - ρ) ≈ 0.6468 * 0.8 / (1 - 0.8) ≈ 0.6468 * 0.8 / 0.2 ≈ 0.6468 * 4 ≈ 2.587 calls
d) Average time a call waits in the queue (Wq):
    *   Wq = Lq / λ = 2.587 / 60 ≈ 0.0431 hours
    *   Wq ≈ 0.0431 * 60 minutes ≈ 2.59 minutes

### Model 3: M/G/1 Queue (Single Server, Poisson Arrivals, General Service Times)

This model is more flexible as it allows for any distribution of service times, as long as they are independent and have a known mean and variance.

*   **Assumptions:**
    *   Arrivals follow a Poisson process with rate λ.
    *   Service times have a general distribution with mean E[S] = 1/μ and variance Var(S) = σ².
    *   Single server.
    *   Infinite queue capacity.
    *   Infinite population.
    *   FCFS discipline.
    *   System is stable: λ < μ.

*   **Key Formulas (Pollaczek-Khinchine Formula):**
    *   Traffic Intensity: ρ = λ / μ
    *   Average number of customers in the queue (Lq):
        Lq = [λ² * σ² + ρ²] / (2 * (1 - ρ))
    *   Average number of customers in the system (Ls): Ls = Lq + ρ = Lq + λ/μ
    *   Average waiting time in the queue (Wq): Wq = Lq / λ = [λ * σ² + ρ] / (2 * (1 - ρ))
    *   Average time in the system (Ws): Ws = Wq + 1/μ

**Comparison with M/M/1:**
If service times are exponentially distributed (M/M/1), then σ² = (1/μ)², so Var(S) = 1/μ².
Substituting into the M/G/1 formulas:
*   Lq (M/M/1) = [λ² * (1/μ²) + (λ/μ)²] / (2 * (1 - λ/μ))
    Lq = [λ²/μ² + λ²/μ²] / (2 * (μ-λ)/μ)
    Lq = [2λ²/μ²] / (2 * (μ-λ)/μ)
    Lq = (λ²/μ²) * (μ / (μ-λ)) = λ² / (μ(μ-λ))
    This matches the M/M/1 formula for Lq.

**Example 1.3 (M/G/1):**
Consider a single-machine job shop. Jobs arrive according to a Poisson process with a rate of λ = 10 jobs/hour. The average service time per job is 0.08 hours (which means μ = 1/0.08 = 12.5 jobs/hour). The variance of the service time is 0.001 hours².

*   λ = 10 jobs/hour
*   μ = 12.5 jobs/hour
*   σ² = 0.001 hours²

Calculate:
a) The traffic intensity.
b) The average number of jobs waiting in the queue.
c) The average waiting time of a job in the queue.

**Solution:**
a) ρ = λ / μ = 10 / 12.5 = 0.8
b) Lq = [λ² * σ² + ρ²] / (2 * (1 - ρ))
    Lq = [(10)² * 0.001 + (0.8)²] / (2 * (1 - 0.8))
    Lq = [100 * 0.001 + 0.64] / (2 * 0.2)
    Lq = [0.1 + 0.64] / 0.4
    Lq = 0.74 / 0.4 = 1.85 jobs
c) Wq = Lq / λ = 1.85 / 10 = 0.185 hours
    Wq ≈ 0.185 * 60 minutes ≈ 11.1 minutes

**Important Point:** Notice how the M/G/1 queue with the same λ and μ but a non-exponential service time variance (0.001 vs. 1/(12.5)² ≈ 0.0064 for exponential) results in a lower waiting time and queue length compared to an M/M/1 queue. This is because lower variance in service times generally leads to better queue performance.

## Scope and Applications of Queuing Theory

Queuing theory is incredibly versatile and finds applications in a vast array of fields where waiting lines are a concern. Its primary goal is to analyze the trade-offs between the cost of providing service and the cost of waiting.

**Key Areas of Application:**

1.  **Service Industries:**
    *   **Banking:** Teller queues, ATM usage, customer service desks.
    *   **Hospitals:** Emergency rooms, patient waiting for appointments or procedures, doctor's consultations.
    *   **Retail:** Checkout counters, customer service, fitting rooms.
    *   **Call Centers:** Managing incoming calls, call queues, operator allocation.
    *   **Restaurants:** Table waiting, order queues, kitchen efficiency.
    *   **Transportation:** Airports (check-in, security, boarding), bus stops, train stations, traffic lights.

2.  **Manufacturing and Production:**
    *   **Machine Maintenance:** Machines breaking down and waiting for repair.
    *   **Production Lines:** Work-in-progress waiting between stations.
    *   **Inventory Management:** Stockouts and backorders can be viewed as queues.

3.  **Computer Science and Telecommunications:**
    *   **Network Traffic:** Data packets waiting in routers or buffers.
    *   **Server Load Balancing:** Requests waiting for processing by servers.
    *   **Operating Systems:** Processes waiting for CPU time or I/O operations.
    *   **Telecommunication Networks:** Calls waiting to be connected.

4.  **Business and Management:**
    *   **Resource Allocation:** Deciding on the number of service personnel or facilities.
    *   **Capacity Planning:** Determining the required capacity to meet demand.
    *   **Performance Measurement:** Evaluating the efficiency of service systems.
    *   **Customer Satisfaction:** Minimizing waiting times to improve customer experience.

**Objectives of Applying Queuing Theory:**

*   **Minimize Waiting Time:** Reduce the average time customers spend waiting.
*   **Minimize Queue Length:** Reduce the number of customers waiting.
*   **Maximize Server Utilization:** Ensure servers are busy and productive, but not over-utilized to the point of excessive waiting.
*   **Balance Costs:** Find the optimal balance between the cost of providing more service capacity (e.g., hiring more tellers) and the cost of customer waiting (e.g., lost sales, customer dissatisfaction).
*   **Improve System Throughput:** Increase the rate at which customers are processed through the system.

**Limitations and Considerations:**

*   **Assumptions:** Real-world systems may not perfectly fit the assumptions of simple models (e.g., arrivals might not be Poisson, service times might not be exponential).
*   **Complexity:** More complex systems with general distributions, balking, reneging, or complex priorities can be analytically difficult or impossible to solve. Simulation techniques are often used for such cases.
*   **Dynamic Behavior:** Queuing models often assume steady-state conditions, meaning the system has been running for a while and its behavior is statistically stable. They may not accurately describe transient periods (e.g., the initial rush hour).
*   **Cost of Waiting:** Accurately quantifying the cost of waiting can be challenging.

**Relationship to Course Outcomes:**

This module directly addresses **CO5: To solve problems using classical queuing theory models (Knowledge Level: K2, K3)** by introducing the fundamental models (M/M/1, M/M/c) and the methods to calculate their performance measures. The examples and practice questions are designed to build this capability. The discussion of applications also relates to the practical relevance of Operations Research.

## Important Points to Remember

*   **Queuing theory is about managing waiting lines.**
*   **Key components:** Arrival process, service mechanism, queue configuration, customer behavior.
*   **Kendall's Notation (A/B/c/K/N/D)** is crucial for describing models. **M/M/1** and **M/M/c** are foundational.
*   **λ (arrival rate)** and **μ (service rate)** are fundamental parameters.
*   **ρ (traffic intensity)** indicates server utilization (ρ < 1 for stability).
*   **Little's Law (Lq = λWq, Ls = λWs)** is a powerful, universally applicable relationship.
*   **M/M/1 formulas** provide basic insights into system performance.
*   **M/M/c** models are used for systems with multiple servers.
*   **M/G/1** allows for more general service time distributions, with **Pollaczek-Khinchine** formula being key.
*   **Applications are vast:** banking, healthcare, manufacturing, IT, etc.
*   **The goal is to balance service costs with waiting costs.**
*   **Assumptions are critical:** Be aware of the limitations of the models used.
*   **Simulation** is often used for complex, non-analytical scenarios.

## Practice Questions

1.  A coffee shop has one barista. Customers arrive at a rate of 15 per hour, and the barista serves coffee at a rate of 20 per hour. Assume Poisson arrivals and exponential service times.
    a) What is the average utilization of the barista?
    b) What is the average number of customers waiting in line?
    c) What is the average time a customer spends waiting in the line before getting their coffee?
    d) What is the probability that a customer will have to wait?

2.  A supermarket has 4 checkout counters operating in parallel. Customers arrive at an average rate of 80 per hour. Each checkout counter can serve an average of 25 customers per hour. Assume Poisson arrivals and exponential service times.
    a) Calculate the average utilization of each checkout counter.
    b) What is the probability that an arriving customer has to wait in line?
    c) What is the average number of customers waiting in the checkout lines?
    d) What is the average time a customer spends waiting to be served?

3.  A single-machine processing system has Poisson arrivals at a rate of λ = 5 jobs/hour. The processing time per job is random, with a mean of 0.15 hours and a variance of 0.01 hours².
    a) Calculate the average utilization of the machine.
    b) Using the Pollaczek-Khinchine formula, find the average number of jobs waiting for processing.
    c) Calculate the average waiting time for a job in the queue.

## Answers to Practice Questions

**Question 1:**
*   λ = 15 customers/hour
*   μ = 20 customers/hour

    a) **Average utilization:** ρ = λ / μ = 15 / 20 = 0.75 (75%)
    b) **Average number of customers waiting (Lq):**
        Lq = ρ² / (1 - ρ) = (0.75)² / (1 - 0.75) = 0.5625 / 0.25 = 2.25 customers
    c) **Average waiting time in line (Wq):**
        Wq = Lq / λ = 2.25 / 15 = 0.15 hours
        0.15 hours * 60 minutes/hour = 9 minutes
    d) **Probability of waiting (P(wait)):**
        P(wait) = ρ = 0.75 (75%)

**Question 2:**
*   λ = 80 customers/hour
*   μ = 25 customers/hour/counter
*   c = 4 counters

    a) **Average utilization of each counter:**
        ρ = λ / (c * μ) = 80 / (4 * 25) = 80 / 100 = 0.8 (80%)
    b) **Probability of waiting (P(wait) - Erlang C):**
        a = λ / μ = 80 / 25 = 3.2
        $P(wait) = \frac{\frac{(3.2)^4}{4!(1 - 0.8)}}{\sum_{n=0}^{3} \frac{(3.2)^n}{n!} + \frac{(3.2)^4}{4!(1 - 0.8)}}$
        Denominator calculation:
        Σ(n=0 to 3) (3.2ⁿ / n!) = (3.2⁰/0!) + (3.2¹/1!) + (3.2²/2!) + (3.2³/6!)
        = 1 + 3.2 + (10.24/2) + (32.768/6)
        = 1 + 3.2 + 5.12 + 5.4613 ≈ 14.7813
        Numerator calculation:
        (3.2)⁴ / (24 * 0.2) = 104.8576 / 4.8 ≈ 21.8453
        $P(wait) = 21.8453 / (14.7813 + 21.8453) \approx 21.8453 / 36.6266 \approx 0.5964$
        The probability of waiting is approximately 59.64%.

    c) **Average number of customers waiting (Lq):**
        First, find P₀:
        P₀ = 1 / (Σ(n=0 to 3) (3.2ⁿ / n!) + (3.2⁴ / (4! * (1 - 0.8))))
        P₀ = 1 / (14.7813 + 21.8453) = 1 / 36.6266 ≈ 0.0273
        P(system has ≥ 4 customers) = 1 - [P₀ + P₁ + P₂ + P₃]
        P₀ ≈ 0.0273
        P₁ = (3.2¹/1!) * P₀ = 3.2 * 0.0273 ≈ 0.0874
        P₂ = (3.2²/2!) * P₀ = (10.24/2) * 0.0273 = 5.12 * 0.0273 ≈ 0.1398
        P₃ = (3.2³/6!) * P₀ = (32.768/6) * 0.0273 = 5.4613 * 0.0273 ≈ 0.1491
        P(system has ≥ 4 customers) = 1 - (0.0273 + 0.0874 + 0.1398 + 0.1491) = 1 - 0.4036 ≈ 0.5964 (This matches P(wait) as expected).
        Lq = P(system has ≥ c customers) * ρ / (1 - ρ)
        Lq ≈ 0.5964 * 0.8 / (1 - 0.8) ≈ 0.5964 * 0.8 / 0.2 ≈ 0.5964 * 4 ≈ 2.3856 customers

    d) **Average waiting time in queue (Wq):**
        Wq = Lq / λ = 2.3856 / 80 ≈ 0.0298 hours
        0.0298 hours * 60 minutes/hour ≈ 1.79 minutes

**Question 3:**
*   λ = 5 jobs/hour
*   Mean service time E[S] = 0.15 hours => μ = 1 / 0.15 ≈ 6.667 jobs/hour
*   Variance of service time σ² = 0.01 hours²

    a) **Average utilization:**
        ρ = λ / μ = 5 / 6.667 ≈ 0.75 (75%)

    b) **Average number of jobs waiting (Lq):**
        Using Pollaczek-Khinchine:
        Lq = [λ² * σ² + ρ²] / (2 * (1 - ρ))
        Lq = [(5)² * 0.01 + (0.75)²] / (2 * (1 - 0.75))
        Lq = [25 * 0.01 + 0.5625] / (2 * 0.25)
        Lq = [0.25 + 0.5625] / 0.5
        Lq = 0.8125 / 0.5 = 1.625 jobs

    c) **Average waiting time in queue (Wq):**
        Wq = Lq / λ = 1.625 / 5 = 0.325 hours
        0.325 hours * 60 minutes/hour = 19.5 minutes

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
