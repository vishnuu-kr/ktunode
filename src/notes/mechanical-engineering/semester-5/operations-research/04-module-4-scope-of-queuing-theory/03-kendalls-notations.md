---
title: "Kendall’s Notations"
subject: "OPERATIONS RESEARCH"
module: "Module 4: Scope of queuing theory"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463633"
status: "completed"
scrapedAt: "2026-05-20T18:02:04.825Z"
---
# Operations Research: Module 4 - Scope of Queuing Theory

## Topic: Kendall's Notations

### 1. Introduction to Queuing Theory

Queuing theory is a mathematical study of waiting lines, or queues. It is used to analyze and predict the behavior of systems where customers arrive, wait for service, receive service, and then depart. The goal of queuing theory is to find optimal ways to manage waiting lines to minimize costs and maximize efficiency.

**Key Concepts:**

*   **Customer:** Any entity that arrives at a service facility seeking service (e.g., people, machines, data packets).
*   **Server:** The entity that provides the service (e.g., cashier, mechanic, computer processor).
*   **Queue (Waiting Line):** The line of customers waiting to be served when all servers are busy.
*   **System:** The combination of the queue and the service facility.
*   **Arrival Rate (λ):** The average number of customers arriving per unit of time.
*   **Service Rate (μ):** The average number of customers a single server can serve per unit of time.
*   **Traffic Intensity (ρ):** The ratio of arrival rate to service rate (ρ = λ/μ). It represents the average utilization of a server.

**Learning Outcome Covered:**

*   This section lays the foundation for understanding the components of a queuing system, which is essential for applying Kendall's notation. It indirectly supports CO5 by introducing the basic elements of queuing models.

### 2. Purpose of Kendall's Notations

Kendall's notation is a standardized symbolic representation used to describe the characteristics of a queuing system. It provides a concise way to communicate the essential features of a queuing model without needing to describe them in lengthy prose. This helps in classifying different queuing systems and applying appropriate analytical techniques.

**Reference:** Gupta & Hira (2008) extensively covers queuing models and their classifications, including the importance of symbolic representation.

**Learning Outcome Covered:**

*   Understanding the purpose of Kendall's notation directly contributes to the ability to classify and work with queuing models, supporting CO5 (To solve problems using classical queuing theory models).

### 3. Kendall's Notation: The Basic Structure

The most common form of Kendall's notation is represented as:

**A / B / c : d / e / f**

Where each position represents a specific characteristic of the queuing system:

*   **A: Arrival Distribution:** Describes the probability distribution of the time between consecutive arrivals.
*   **B: Service Time Distribution:** Describes the probability distribution of the time it takes to serve a customer.
*   **c: Number of Servers:** The number of parallel servers available to serve customers.
*   **d: Queue Discipline:** The rule used to select the next customer from the queue for service.
*   **e: Capacity of the System:** The maximum number of customers that can be in the system (waiting in queue + being served) at any given time.
*   **f: Size of the Calling Population:** The total number of potential customers that can arrive at the system.

**Learning Outcome Covered:**

*   Breaking down the notation into its components allows for a systematic understanding of different queuing systems, supporting CO5.

### 4. Detailed Explanation of Each Position

Let's delve into the common symbols used for each position in Kendall's notation:

#### 4.1. Position 1: Arrival Distribution (A)

This specifies the pattern of customer arrivals.

*   **M (Markovian/Memoryless/Exponential):** Inter-arrival times follow an exponential distribution. This implies arrivals are random and independent. The number of arrivals in a given time interval follows a Poisson distribution. This is the most common and simplest assumption.
    *   *Example:* Customers arriving at a bank on an hourly basis, where the probability of an arrival in any small interval is constant and independent of past arrivals.
*   **D (Deterministic/Constant):** Inter-arrival times are constant. Arrivals occur at fixed, regular intervals.
    *   *Example:* A conveyor belt system where items are released at precise, fixed time intervals.
*   **E_k (Erlang-k):** Inter-arrival times follow a k-stage Erlang distribution. This distribution is more general than exponential and can model arrivals that are more regular than Poisson but not strictly deterministic. As k approaches infinity, the Erlang distribution approaches a deterministic distribution.
    *   *Example:* Arrivals at a manufacturing plant where batches of items arrive at regular intervals, but within the batch, there's some randomness.
*   **GI (General Independent):** Inter-arrival times follow any general probability distribution. This is a broad category encompassing any distribution not specifically listed above.
    *   *Example:* Arrivals at a busy retail store where arrival patterns might be complex and not fit simple exponential or deterministic models.

**Reference:** Srinivasan (2017) and Vohra & Arora (2021) provide detailed explanations of these distributions and their implications in queuing models.

#### 4.2. Position 2: Service Time Distribution (B)

This specifies the pattern of service times. The symbols are the same as for the arrival distribution.

*   **M (Markovian/Memoryless/Exponential):** Service times follow an exponential distribution.
    *   *Example:* A single cashier serving customers, where the time taken to serve each customer varies randomly.
*   **D (Deterministic/Constant):** Service times are constant.
    *   *Example:* A machine performing a specific task that always takes the same amount of time.
*   **E_k (Erlang-k):** Service times follow a k-stage Erlang distribution.
*   **GI (General Independent):** Service times follow any general probability distribution.

#### 4.3. Position 3: Number of Servers (c)

This indicates the number of parallel servers available.

*   **Single Digit (1, 2, 3, ...):** Represents a specific number of servers.
    *   *Example: `M/M/1` means one server.*
    *   *Example: `M/M/3` means three servers.*
*   **∞ (Infinity):** Represents an unlimited number of servers. This means that a customer will never have to wait for a server, as a server is always available. This is a theoretical construct for certain analytical purposes.
    *   *Example: `M/M/∞` implies no waiting line for servers, only waiting if the system itself is full.*

#### 4.4. Position 4: Queue Discipline (d)

This defines the order in which customers are selected from the queue for service.

*   **FCFS (First-Come, First-Served) / FIFO (First-In, First-Out):** Customers are served in the order they arrive. This is the most common and intuitive discipline.
    *   *Example:* Waiting in line at a ticket counter.
*   **LCFS (Last-Come, First-Served) / LIFO (Last-In, First-Out):** The last customer to arrive is the first to be served. This is less common in physical queues but can occur in certain data processing systems.
    *   *Example:* A stack of plates where the top plate is removed first.
*   **SIRO (Service In Random Order):** Customers are selected for service randomly from the queue, irrespective of their arrival order.
    *   *Example:* A lottery system where tickets are drawn randomly.
*   **Priority:** Customers are served based on a priority assigned to them. There can be preemptive or non-preemptive priority systems.
    *   *Preemptive Priority:* A high-priority customer arriving can interrupt the service of a low-priority customer.
    *   *Non-preemptive Priority:* A high-priority customer arriving will wait until the current low-priority customer is finished being served.
    *   *Example:* Emergency patients being treated before routine patients in a hospital.

**Important Note:** If the queue discipline is not specified, it is generally assumed to be FCFS.

#### 4.5. Position 5: Capacity of the System (e)

This defines the maximum number of customers allowed in the entire system (waiting in queue + being served).

*   **Finite Capacity (n):** The system can only hold a maximum of 'n' customers. If a new customer arrives when the system is full, that customer is lost or balks.
    *   *Example: `M/M/1 : 5` means a single-server system with a maximum capacity of 5 customers (including the one being served). If a 6th customer arrives, they are turned away.*
*   **Infinite Capacity (∞):** The system can hold an unlimited number of customers. Customers will always find space in the system, even if they have to wait in a very long queue.
    *   *Example: `M/M/1 : ∞` is the standard single-server queue with unlimited waiting space.*

**Important Note:** If not specified, the system capacity is usually assumed to be infinite.

#### 4.6. Position 6: Size of the Calling Population (f)

This defines the total number of potential customers that can arrive at the system.

*   **Finite Population (N):** The total number of customers is limited. As customers are being served, the arrival rate might change as the number of customers not in the system decreases. This often leads to a machine repairman problem model.
    *   *Example: `M/M/1 : N` refers to a system with a finite population of N customers.*
*   **Infinite Population (∞):** The total number of potential customers is very large, so the arrival rate is assumed to be constant, regardless of how many customers are currently in the system. This is the most common assumption.
    *   *Example: `M/M/1 : ∞` is the standard assumption for most public service systems.*

**Important Note:** If not specified, the calling population is usually assumed to be infinite.

**Learning Outcome Covered:**

*   A thorough understanding of each position and its common symbols is crucial for correctly classifying queuing systems and applying the appropriate formulas, directly supporting CO5.

### 5. Common Kendall's Notations and Their Interpretations

Let's look at some common examples to solidify understanding:

*   **M/M/1:** This is the most basic queuing model.
    *   **A = M:** Exponentially distributed inter-arrival times (Poisson arrivals).
    *   **B = M:** Exponentially distributed service times.
    *   **c = 1:** Single server.
    *   *(Implicit)* **d = FCFS:** First-Come, First-Served.
    *   *(Implicit)* **e = ∞:** Infinite system capacity.
    *   *(Implicit)* **f = ∞:** Infinite calling population.
    *   *Description:* A single server system with random arrivals and random service times, serving customers on a first-come, first-served basis, with unlimited waiting space and an infinite source of customers. This is widely used to model simple scenarios like a single cashier at a small shop or a single doctor's appointment slot.

*   **M/M/c:** A multi-server system.
    *   **A = M:** Poisson arrivals.
    *   **B = M:** Exponential service times.
    *   **c = c:** 'c' parallel servers.
    *   *(Implicit)* **d = FCFS:** First-Come, First-Served.
    *   *(Implicit)* **e = ∞:** Infinite system capacity.
    *   *(Implicit)* **f = ∞:** Infinite calling population.
    *   *Description:* A system with 'c' identical servers working in parallel, serving customers on a first-come, first-served basis. Customers join a single queue and go to the first available server. This models scenarios like multiple tellers at a bank or multiple service desks in a call center.

*   **M/G/1:** Single server with general service time distribution.
    *   **A = M:** Poisson arrivals.
    *   **B = G:** General service time distribution.
    *   **c = 1:** Single server.
    *   *(Implicit)* **d = FCFS:** First-Come, First-Served.
    *   *(Implicit)* **e = ∞:** Infinite system capacity.
    *   *(Implicit)* **f = ∞:** Infinite calling population.
    *   *Description:* A single server system where arrivals are random, but service times can follow any probability distribution. This is more realistic than M/M/1 when service times are known to be non-exponential (e.g., fixed time for a specific repair).

*   **M/M/1 : N:** Single server with finite system capacity.
    *   **A = M:** Poisson arrivals.
    *   **B = M:** Exponential service times.
    *   **c = 1:** Single server.
    *   *(Implicit)* **d = FCFS:** First-Come, First-Served.
    *   **e = N:** System capacity is N customers.
    *   *(Implicit)* **f = ∞:** Infinite calling population.
    *   *Description:* A single server system where arrivals are random, service times are random, and the system can only hold up to N customers. If a customer arrives and the system is full, they are rejected. This models situations like a small waiting room with limited seats.

*   **M/M/c : K:** Multi-server system with finite system capacity.
    *   **A = M:** Poisson arrivals.
    *   **B = M:** Exponential service times.
    *   **c = c:** 'c' parallel servers.
    *   *(Implicit)* **d = FCFS:** First-Come, First-Served.
    *   **e = K:** System capacity is K customers.
    *   *(Implicit)* **f = ∞:** Infinite calling population.
    *   *Description:* 'c' servers with Poisson arrivals and exponential service times, but the total system capacity (queue + service) is limited to K.

**Reference:** Hillier & Leiberman (2020) provide excellent case studies and examples of these standard queuing models.

**Learning Outcome Covered:**

*   Understanding these common notations allows learners to identify and categorize real-world queuing problems, directly aiding in the application of classical queuing theory models (CO5).

### 6. Importance and Applications of Kendall's Notations

Kendall's notation is fundamental to queuing theory for several reasons:

*   **Classification:** It allows for a systematic classification of queuing systems, making it easier to identify the appropriate analytical tools and formulas.
*   **Communication:** Provides a universal language for describing queuing models, facilitating clear communication among researchers and practitioners.
*   **Model Selection:** Helps in selecting the most appropriate model for a given real-world situation based on its characteristics.
*   **Performance Analysis:** Different notations correspond to different mathematical models that have established formulas for calculating performance measures such as:
    *   Average waiting time in queue ($W_q$)
    *   Average number of customers in queue ($L_q$)
    *   Average waiting time in system ($W$)
    *   Average number of customers in system ($L$)
    *   Server utilization ($\rho$)
    *   Probability of a customer having to wait
    *   Probability of the system being idle

**Learning Outcome Covered:**

*   This section highlights the practical utility of Kendall's notation in analyzing queuing systems and predicting their performance, which is a core aspect of CO5.

### 7. Practice Questions

Here are some questions to test your understanding of Kendall's Notation:

**Question 1:**
A call center has 5 agents who can answer incoming calls. Calls arrive randomly, and each agent takes a random amount of time to handle a call. Customers are served in the order they arrive. The call center has unlimited capacity to hold waiting calls.
a) What is the Kendall's notation for this system?
b) What performance measure might be of interest to the call center manager?

**Question 2:**
Consider a small library with only one librarian. Patrons arrive at the library at a constant rate of 20 per hour. The librarian takes exactly 2 minutes to issue or return a book. If the librarian is busy, patrons wait in a queue. The library has a small waiting area that can accommodate only 5 patrons (including the one being served). Assume there are many potential patrons.
a) What is the Kendall's notation for this system?
b) What assumption is made about the arrival distribution in your notation? Is this realistic?

**Question 3:**
A car wash has two machines that can wash cars. Cars arrive according to a Poisson process. Each washing machine takes a variable amount of time to wash a car, following an exponential distribution. Cars are served in the order of arrival. If both machines are busy, cars wait in a single line. The waiting line can extend indefinitely.
a) What is the Kendall's notation for this car wash system?
b) If the arrival rate is 30 cars per hour and the service rate per machine is 20 cars per hour, what is the utilization of each machine?

**Question 4:**
Describe a real-world queuing system and represent it using Kendall's notation, explaining your choice of symbols for each position.

---

### Answers to Practice Questions

**Answer 1:**
a) **M/M/5**
    *   **M:** Calls arrive randomly (Poisson process implies exponential inter-arrival times).
    *   **M:** Each agent takes a random amount of time (exponential service times).
    *   **5:** There are 5 agents (servers).
    *   (Implicit) FCFS queue discipline.
    *   (Implicit) Infinite system capacity.
    *   (Implicit) Infinite calling population.

b) The call center manager would likely be interested in:
    *   Average waiting time for a customer ($W$)
    *   Average number of calls waiting in queue ($L_q$)
    *   Server utilization ($\rho$)
    *   Probability that a customer has to wait

**Answer 2:**
a) **D/D/1 : 6**
    *   **D:** Patrons arrive at a constant rate (20 per hour means arrivals every 3 minutes).
    *   **D:** Service time is constant (2 minutes).
    *   **1:** One librarian (server).
    *   (Implicit) FCFS queue discipline.
    *   **6:** System capacity is 5 patrons waiting + 1 being served = 6 patrons total. (Note: If the description meant 5 patrons *in addition* to the one being served, the capacity would be 5, making the notation D/D/1 : 5. Given "accommodate only 5 patrons (including the one being served)", it implies a total system capacity of 5, so **D/D/1 : 5** is the correct interpretation. Let's use **D/D/1 : 5**).
    *   (Implicit) Infinite calling population.

b) The assumption made about the arrival distribution is **D (Deterministic)**. This might not be entirely realistic for library patrons, as arrival times are often more random and can vary throughout the day. However, if there's a predictable flow (e.g., a school bus drops off students at a specific time), this assumption might be a simplification.

**Answer 3:**
a) **M/M/2**
    *   **M:** Cars arrive according to a Poisson process (exponential inter-arrival times).
    *   **M:** Washing machines take variable amounts of time (exponential service times).
    *   **2:** Two washing machines (servers).
    *   (Implicit) FCFS queue discipline.
    *   (Implicit) Infinite system capacity.
    *   (Implicit) Infinite calling population.

b)
Arrival rate ($\lambda$) = 30 cars per hour
Service rate per machine ($\mu$) = 20 cars per hour
Number of servers ($c$) = 2

Traffic intensity for the system = $\lambda / \mu = 30 / 20 = 1.5$.
However, the utilization of *each* server is calculated as $\rho = \lambda / (c \times \mu)$.
$\rho = 30 / (2 \times 20) = 30 / 40 = 0.75$.
So, the utilization of each machine is **75%**.

**Answer 4:**
*(Example Response)*

**Real-world system:** A bank with 3 tellers serving customers.
**Kendall's Notation:** **M/M/3**

**Explanation:**

*   **A = M:** Customers arriving at the bank are generally considered to arrive randomly, following a Poisson distribution for the number of arrivals in a given time period. This means the time between arrivals is exponentially distributed.
*   **B = M:** The time it takes for a teller to serve a customer can vary. Assuming an exponential distribution for service times is a common simplification, representing a situation where some customers take longer than others, but the overall average service time is relatively stable.
*   **c = 3:** There are 3 tellers working concurrently, serving customers.
*   **d = FCFS (implicit):** Customers are typically served in the order they join the queue (first-come, first-served).
*   **e = ∞ (implicit):** The bank generally has enough space to accommodate any number of waiting customers, so the system capacity is considered unlimited.
*   **f = ∞ (implicit):** The pool of potential customers in a city or town is typically large enough that the arrival rate is not significantly affected by the number of customers currently in the bank.

**Learning Outcome Covered:**

*   The practice questions and answers directly address the ability to apply Kendall's notation to classify systems and identify relevant performance measures, aligning with CO5. The examples also implicitly touch upon the knowledge level K2 (understanding) and K3 (applying) as requested.

### 8. Important Points to Remember

*   **M/M/1 is the foundational model:** Understand its assumptions and limitations.
*   **Symbols are crucial:** Memorize the common symbols for arrival, service, servers, and disciplines.
*   **Implicit assumptions:** If a position is not specified, it's usually assumed to be M (arrival/service), 1 (server), FCFS (discipline), ∞ (capacity), ∞ (population).
*   **Context matters:** Choose the notation that best reflects the real-world scenario. Sometimes, simplifying assumptions (like exponential distributions) are made for tractability.
*   **Notation dictates analysis:** The chosen Kendall's notation determines the mathematical formulas used to calculate performance measures.

**Learning Outcome Covered:**

*   These summary points reinforce the understanding of Kendall's notation, aiding in the successful application of queuing theory models as per CO5.

---
This comprehensive set of study notes covers Kendall's notation from Module 4 of Operations Research, aligning with the provided learning outcomes and course outcomes, and referencing the specified textbooks where applicable.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
