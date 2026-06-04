---
title: "Simulation: Monte Carlo simulation – Queuing simulation model- Generation of random numbers"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 4: Queuing theory: Scope, terminology, classification Importance and applications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a82"
status: "completed"
scrapedAt: "2026-05-20T18:07:42.520Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 4: Queuing Theory: Scope, Terminology, Classification, Importance and Applications

---

### Topic: Simulation: Monte Carlo Simulation – Queuing Simulation Model - Generation of Random Numbers

**Knowledge Level Alignment:** This topic primarily contributes to **CO5: To solve problems using classical queuing theory models (Knowledge Level: K3)**, as simulation is a powerful technique to analyze queuing systems when analytical solutions are not readily available. It also touches upon general problem-solving and analytical skills, indirectly supporting other COs by providing a methodology for complex system analysis.

---

### 1. Introduction to Simulation

Simulation is a technique used to imitate the operation of a real-world process or system over time. It is particularly useful when:

*   The system is too complex to be analyzed using analytical methods.
*   The system is dynamic and changes over time.
*   The system involves randomness or uncertainty.
*   It is expensive or impossible to experiment with the real system.

**Definition:** Simulation is the process of designing a model of a real system and experimenting with that model to understand the behavior of the system or to predict the effects of changes to the system. (Banks, Carson, Nelson, & Nicol, 2013)

**Key Concept:** A simulation model is a simplified representation of a real-world system. The goal is to capture the essential characteristics of the system to gain insights.

---

### 2. Monte Carlo Simulation

Monte Carlo simulation is a broad class of computational algorithms that rely on repeated random sampling to obtain numerical results. It is named after the Monte Carlo Casino in Monaco, famous for its games of chance.

**Core Idea:** To model a system that involves randomness by repeatedly running a simulation using randomly generated numbers that mimic the probability distributions of the real-world random variables.

**Applications:**

*   **Risk analysis:** Evaluating the potential outcomes of a project or investment under uncertain conditions.
*   **Financial modeling:** Forecasting stock prices, valuing options, and managing portfolios.
*   **Project management:** Estimating project completion times and identifying critical tasks.
*   **Engineering design:** Testing the performance of designs under various operating conditions.
*   **Queuing systems:** Analyzing waiting lines and service facilities.

**How it Works (General Steps):**

1.  **Define the System and its Components:** Identify the key elements and their interactions.
2.  **Identify and Characterize Random Variables:** Determine which aspects of the system are subject to randomness and their associated probability distributions (e.g., arrival times, service times).
3.  **Develop a Mathematical Model:** Create a representation of the system's logic and relationships.
4.  **Generate Random Numbers:** Produce random numbers that follow the identified probability distributions.
5.  **Run the Simulation:** Use the generated random numbers to drive the model and record the system's behavior over a period.
6.  **Analyze the Results:** Aggregate the recorded data to estimate performance measures (e.g., average waiting time, throughput).
7.  **Repeat and Refine:** Run the simulation multiple times (replications) to obtain statistically reliable results and refine the model if necessary.

**Example (Simple): Estimating Pi using Monte Carlo Simulation**

Imagine a square with side length 2, centered at the origin. Inscribe a circle of radius 1 within this square. The area of the square is $2^2 = 4$, and the area of the circle is $\pi \times 1^2 = \pi$.

*   **System:** A square and an inscribed circle.
*   **Random Variable:** The coordinates (x, y) of a point randomly chosen within the square.
*   **Model:** Generate random x and y coordinates between -1 and 1. A point (x, y) is inside the circle if $x^2 + y^2 \le 1$.
*   **Simulation:**
    *   Generate a large number of random points (N).
    *   Count how many points fall inside the circle (M).
*   **Analysis:** The ratio of points inside the circle to the total points (M/N) should approximate the ratio of the circle's area to the square's area ($\pi/4$). Therefore, $\pi \approx 4 \times (M/N)$.

*(Paneerselvam, 2023) and (Taha, 2019) discuss various applications of Monte Carlo simulation in different operational research contexts.*

---

### 3. Queuing Simulation Model

Queuing simulation models are a specific application of Monte Carlo simulation used to analyze waiting line systems. They are essential when analytical queuing models (like M/M/1, M/M/c) are insufficient due to complex arrival patterns, service times, or system configurations.

**When to Use Queuing Simulation:**

*   Non-exponential arrival or service distributions.
*   Multiple servers with complex logic (e.g., pooling, dedicated servers).
*   Finite queue capacities or balking (customers not joining a queue if it's too long).
*   Reneging (customers leaving a queue after waiting for a certain time).
*   Priorities among customers.
*   Complex routing of customers through different service stages.

**Components of a Queuing Simulation Model:**

1.  **Customer Arrivals:** Process describing when and how customers enter the system.
2.  **Queue Management:** Rules for how customers are stored and selected from the queue (e.g., FIFO, LIFO, Priority).
3.  **Service Process:** Description of how customers are served by servers, including service times and server availability.
4.  **System Capacity:** Limits on the number of customers allowed in the system or in the queue.
5.  **Customer Behavior:** Actions customers might take (e.g., balking, reneging).
6.  **Output Measures:** Key performance indicators to be collected (e.g., average waiting time, average queue length, server utilization).

**Simulation Clock:** A variable that advances through time, typically in discrete steps. Events that change the state of the system occur at specific points in time.

**Event List:** A data structure that stores upcoming events, sorted by their scheduled time.

**State Variables:** Variables that describe the current status of the system (e.g., number of customers in the queue, status of each server).

**Event Types in a Queuing System:**

*   **Arrival Event:** A customer enters the system.
*   **Service Completion Event:** A server finishes serving a customer.

**Simulation Logic (Event-Driven):**

1.  Initialize the simulation clock and state variables.
2.  Schedule the first arrival event.
3.  While the simulation is running:
    a.  Remove the next event from the event list (the one with the earliest time).
    b.  Advance the simulation clock to the time of this event.
    c.  Update the state variables based on the event.
    d.  If it's an **Arrival Event**:
        *   Record the arrival time.
        *   Check if a server is free. If yes, begin service. If no, place the customer in the queue.
        *   Schedule the next arrival event.
    e.  If it's a **Service Completion Event**:
        *   Record the service completion time.
        *   If the queue is not empty, take the next customer from the queue and begin service.
        *   If the queue is empty, the server becomes idle.
4.  Collect output statistics.

**Example: Simple M/M/1 Queuing Simulation**

*   **System:** A single server, exponential inter-arrival times, exponential service times, infinite queue.
*   **State:** Number of customers in the system (N).
*   **Events:**
    *   Arrival (A): Schedule next arrival at current time + exponential inter-arrival time.
    *   Departure (D): Schedule next departure if server busy and queue empty.
*   **Simulation Steps:**
    1.  Initialize: Clock = 0, N = 0.
    2.  Schedule first Arrival at time $T_A = \text{rand\_exp}( \lambda )$ (where $\lambda$ is the arrival rate).
    3.  **Event A at $T_A$**:
        *   Clock = $T_A$.
        *   N = N + 1.
        *   Record arrival time of customer.
        *   If N = 1 (server was idle), schedule Departure at time Clock + rand\_exp($\mu$) (where $\mu$ is the service rate).
        *   Schedule next Arrival at time Clock + rand\_exp($\lambda$).
    4.  **Event D at $T_D$**:
        *   Clock = $T_D$.
        *   N = N - 1.
        *   Record service time of departing customer.
        *   If N > 0 (queue is not empty), schedule next Departure at time Clock + rand\_exp($\mu$).

*(Banks, Carson, Nelson, & Nicol, 2013) provide extensive details and examples of building discrete-event simulation models for various systems, including queuing networks.* (Paneerselvam, 2023) and (Taha, 2019) also cover queuing systems and the role of simulation when analytical solutions are difficult.

---

### 4. Generation of Random Numbers

The quality of a simulation heavily relies on the quality of the random numbers generated. These numbers are used to represent the random outcomes in the model.

**4.1 Pseudo-Random Numbers (PRNs)**

*   **Definition:** Numbers that appear to be random but are generated by a deterministic algorithm.
*   **Why Pseudo-Random?** True random numbers are difficult and expensive to generate. PRNs are reproducible, which is crucial for debugging and verifying simulation results.

**4.2 Properties of Good PRN Generators:**

1.  **Uniformity:** The generated numbers should be uniformly distributed over a specified interval (usually [0, 1]).
2.  **Independence:** Numbers in the sequence should not be correlated with each other.
3.  **Long Period:** The sequence of numbers should be very long before it repeats.
4.  **Efficiency:** The algorithm should be computationally fast.
5.  **Reproducibility:** The sequence should be reproducible using a specific starting value (seed).

**4.3 Methods for Generating Pseudo-Random Numbers (Uniform Distribution)**

*   **Linear Congruential Generators (LCGs):** The most common method.
    *   **Formula:** $X_{i+1} = (a X_i + c) \pmod{m}$
        *   $X_i$: The current random number (or "state").
        *   $X_{i+1}$: The next random number.
        *   $a$: Multiplier.
        *   $c$: Increment.
        *   $m$: Modulus.
        *   $X_0$: Seed (initial value).
    *   **Properties of $a, c, m$ impact the period and quality.** A large $m$ generally leads to a longer period. Choosing $c=0$ results in a Multiplicative Congruential Generator (MCG).
    *   **Example LCG:** $X_{i+1} = (5X_i + 3) \pmod{16}$. If $X_0 = 1$:
        *   $X_1 = (5 \times 1 + 3) \pmod{16} = 8 \pmod{16} = 8$
        *   $X_2 = (5 \times 8 + 3) \pmod{16} = 43 \pmod{16} = 11$
        *   $X_3 = (5 \times 11 + 3) \pmod{16} = 58 \pmod{16} = 10$
        *   To get numbers in [0, 1], divide by $m$: $8/16=0.5, 11/16=0.6875, 10/16=0.625$.

*   **Mid-Square Method (Historical, generally poor):**
    *   Square the current number.
    *   Take the middle digits as the next number.
    *   **Problem:** Can get stuck at 0 or lead to short periods.

*   **Other methods:** Mersenne Twister (widely used in statistical software due to its long period and good statistical properties).

*(Paneerselvam, 2023) and (Taha, 2019) discuss the generation and testing of random numbers, including LCGs.* (Hillier & Lieberman, 2017) also touch upon random number generation techniques in their sections on simulation.

**4.4 Generating Random Variates from Other Distributions (using Uniform PRNs)**

Once we have uniform random numbers $U \sim Uniform(0, 1)$, we can transform them to generate random numbers from other probability distributions.

*   **Inverse Transform Method:**
    *   If $F(x)$ is the cumulative distribution function (CDF) of the desired random variable $X$, then $F(X)$ is uniformly distributed between 0 and 1.
    *   Therefore, if we have a uniform random number $U$, we can find $X$ by solving $F(X) = U$ for $X$. This gives $X = F^{-1}(U)$.
    *   **Example: Exponential Distribution**
        *   The CDF of an exponential distribution with rate $\lambda$ is $F(x) = 1 - e^{-\lambda x}$ for $x \ge 0$.
        *   Set $U = 1 - e^{-\lambda X}$.
        *   $1 - U = e^{-\lambda X}$.
        *   $\ln(1 - U) = -\lambda X$.
        *   $X = -\frac{1}{\lambda} \ln(1 - U)$.
        *   Since $U$ is uniform on [0, 1], $1-U$ is also uniform on [0, 1]. So, we can use $X = -\frac{1}{\lambda} \ln(U)$ as a simpler form.
    *   **Example: Discrete Uniform Distribution**
        *   To generate an integer between $a$ and $b$ (inclusive), use $X = \lfloor a + U(b - a + 1) \rfloor$.

*   **Acceptance-Rejection Method:** Used when the inverse CDF is difficult to compute.
    *   Find a probability density function (PDF) $g(x)$ that is easy to sample from and for which $f(x) \le c \cdot g(x)$ for some constant $c$ and all $x$.
    *   Generate a candidate $Y$ from $g(x)$ and a uniform random number $U$.
    *   If $U \le \frac{f(Y)}{c \cdot g(Y)}$, accept $Y$ as a sample from $f(x)$. Otherwise, reject $Y$ and repeat.

*(Banks, Carson, Nelson, & Nicol, 2013) cover these methods in detail, along with methods for other distributions like Normal, Poisson, etc.*

---

### 5. Practice Questions and Exercises

**Question 1 (Monte Carlo):**
A company is considering investing in a new project. The profit from the project depends on the market demand, which can be high, medium, or low, with probabilities 0.3, 0.5, and 0.2 respectively. The profits for these demand levels are \$100,000, \$50,000, and \$10,000. Use Monte Carlo simulation with the following sequence of uniform random numbers to estimate the average profit: 0.25, 0.70, 0.95.

*   **Instructions:**
    1.  Map the random numbers to the demand levels based on cumulative probabilities.
    2.  Calculate the profit for each mapped demand level.
    3.  Compute the average profit from these three trials.

**Answer 1:**
*   **Mapping:**
    *   High demand (0.3 probability): Random numbers in [0, 0.3)
    *   Medium demand (0.5 probability): Random numbers in [0.3, 0.8)
    *   Low demand (0.2 probability): Random numbers in [0.8, 1.0)

*   **Trials:**
    1.  Random number 0.25: Falls in [0, 0.3) -> High demand -> Profit = \$100,000
    2.  Random number 0.70: Falls in [0.3, 0.8) -> Medium demand -> Profit = \$50,000
    3.  Random number 0.95: Falls in [0.8, 1.0) -> Low demand -> Profit = \$10,000

*   **Average Profit:** $(\$100,000 + \$50,000 + \$10,000) / 3 = \$160,000 / 3 \approx \$53,333.33$

**Question 2 (Random Number Generation - LCG):**
Using the Linear Congruential Generator $X_{i+1} = (7X_i + 4) \pmod{10}$, with seed $X_0 = 3$, generate the first 5 pseudo-random numbers in the sequence and then transform them into numbers in the range [0, 1].

**Answer 2:**
*   **Sequence Generation:**
    *   $X_0 = 3$
    *   $X_1 = (7 \times 3 + 4) \pmod{10} = (21 + 4) \pmod{10} = 25 \pmod{10} = 5$
    *   $X_2 = (7 \times 5 + 4) \pmod{10} = (35 + 4) \pmod{10} = 39 \pmod{10} = 9$
    *   $X_3 = (7 \times 9 + 4) \pmod{10} = (63 + 4) \pmod{10} = 67 \pmod{10} = 7$
    *   $X_4 = (7 \times 7 + 4) \pmod{10} = (49 + 4) \pmod{10} = 53 \pmod{10} = 3$ (The sequence starts repeating from here).

*   **Numbers in [0, 1]:**
    *   $X_1/10 = 5/10 = 0.5$
    *   $X_2/10 = 9/10 = 0.9$
    *   $X_3/10 = 7/10 = 0.7$
    *   $X_4/10 = 3/10 = 0.3$
    *   The sequence of random numbers in [0, 1] is: 0.5, 0.9, 0.7, 0.3.

**Question 3 (Inverse Transform - Exponential):**
Given a uniform random number $U = 0.65$ and an arrival rate $\lambda = 0.2$ arrivals per minute. Use the inverse transform method to find the inter-arrival time.

**Answer 3:**
*   The formula for inter-arrival time from an exponential distribution is $T = -\frac{1}{\lambda} \ln(U)$.
*   $T = -\frac{1}{0.2} \ln(0.65)$
*   $T = -5 \times \ln(0.65)$
*   $T \approx -5 \times (-0.4308)$
*   $T \approx 2.154$ minutes.

---

### 6. Important Points to Remember

*   **Simulation is a tool for analysis, not a replacement for analytical models when they exist.** Use analytical models first if possible.
*   **Monte Carlo simulation uses random sampling to model uncertainty.** The more trials, the more reliable the results.
*   **The quality of random numbers is paramount.** Use well-tested PRN generators.
*   **Queuing simulation is essential for complex queuing systems** where analytical solutions are intractable.
*   **Event-driven simulation is a common paradigm for queuing systems.** Manage events effectively using an event list.
*   **The inverse transform method is a fundamental technique for generating random variates from various distributions.**
*   **Reproducibility is key for simulation.** Always record the seed used for random number generation.
*   **Validation and verification are critical steps** in ensuring simulation models are correct and represent the real system accurately.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. References and Further Reading

*   **Operations Research** by Paneerselvam R. (PHI, Third edition, 2023) - Useful for general operations research concepts, including simulation applications.
*   **Operations Research** by Taha (Pearson, Tenth edition, 2019) - A comprehensive text covering various optimization and simulation techniques.
*   **Introduction to Operations Research** by F. S. Hillier and G. J. Lieberman (McGraw Hill, Tenth edition, 2017) - Provides a strong foundation in OR techniques, including simulation methods and their applications.
*   **Discrete Event System Simulation** by Banks, Carson, Nelson and Nicol (Pearson, Fifth edition, 2013) - This is the definitive reference for discrete-event simulation, covering all aspects of model building, random number generation, and analysis in great detail.

---