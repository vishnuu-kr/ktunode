---
title: "Interarrival times (Theorems without proof)"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 3: Limit theorems : Markov’s Inequality"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab5d"
status: "completed"
scrapedAt: "2026-05-20T16:26:10.674Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3

## Module 3: Limit Theorems - Markov's Inequality

### Topic: Interarrival Times (Theorems without Proof)

**Description:**  This section focuses on the concept of interarrival times in stochastic processes, particularly in the context of queueing theory and related areas. We will explore key theorems relating to interarrival times without delving into their proofs.

**Learning Outcomes:**

*   Understand the definition of interarrival times.
*   Understand the relationship between interarrival times and the Poisson process.
*   Understand the implications of theorems related to interarrival times for system analysis.
*   Apply the knowledge of theorems (without proof) to solve problems related to interarrival times.

**1. Definition of Interarrival Times**

*   **Definition:** Interarrival time is the time elapsed between two successive arrivals in a stochastic process.  In simpler terms, it's the waiting time between one event happening and the next similar event.
*   **Notation:**  Often denoted by *T<sub>i</sub>*, where *i* represents the *i*th arrival. So, *T<sub>1</sub>* is the time until the first arrival, *T<sub>2</sub>* is the time between the first and second arrivals, and so on.
*   **Relevance:**  Interarrival times are crucial in modeling queueing systems, communication networks, and other systems where events occur randomly over time.  They directly impact system performance metrics like waiting times, queue lengths, and server utilization.
*   **Example:** Consider customers arriving at a bank. The interarrival time is the time duration between two consecutive customers walking through the door.

**2. Interarrival Times and the Poisson Process**

*   **The Poisson Process:** A Poisson process is a stochastic process that counts the number of events occurring over a period of time. It's characterized by the following properties:
    *   Events occur independently.
    *   The average rate of events (λ) is constant.
    *   Events occur one at a time (no simultaneous events).
*   **Key Theorem (without proof):**  If the number of arrivals in a time interval follows a Poisson distribution with rate λ, then the interarrival times are independent and identically distributed (i.i.d.) exponential random variables with parameter λ.
*   **Implication:**  This theorem establishes a fundamental link between the Poisson process and the exponential distribution. If you know the number of arrivals follows a Poisson distribution, you automatically know the distribution of the interarrival times and vice-versa.
*   **Exponential Distribution:**  The probability density function (pdf) of an exponential random variable T with rate parameter λ is given by:

    f(t) = λe<sup>-λt</sup>, for t ≥ 0

    The mean (average interarrival time) is E[T] = 1/λ.
    The variance is Var(T) = 1/λ<sup>2</sup>.

*   **Important Note:** The reverse is also true. If the interarrival times are independent and exponentially distributed with rate λ, the arrival process is a Poisson process with rate λ.
*   **Memoryless Property:**  The exponential distribution has the memoryless property, meaning that the probability of an event occurring in the future is independent of how long we've already waited.  Formally, P(T > s + t | T > t) = P(T > s). This property is crucial for modeling systems where past events do not influence future arrivals.

**3. Further Theorems and Implications (Without Proofs)**

*   **Theorem 1 (Superposition of Poisson Processes):** If you have *n* independent Poisson processes with rates λ<sub>1</sub>, λ<sub>2</sub>, ..., λ<sub>n</sub>, then the superposition (merging) of these processes is also a Poisson process with rate λ = λ<sub>1</sub> + λ<sub>2</sub> + ... + λ<sub>n</sub>.
    *   **Implication:**  This is useful for modeling systems with multiple independent arrival streams.  For example, different types of customers arriving at a store. The overall arrival process is still Poisson.
*   **Theorem 2 (Decomposition of a Poisson Process):**  If a Poisson process with rate λ is decomposed (split) into *n* subprocesses such that each event is routed to subprocess *i* with probability p<sub>i</sub> (where Σp<sub>i</sub> = 1), then each subprocess is also a Poisson process with rate λp<sub>i</sub>.
    *   **Implication:** This allows you to analyze individual streams of events that are derived from a single Poisson process. For example, modeling customer service calls, where a call may be routed to different departments with certain probabilities.  Each department receives a Poisson process of calls.
*   **Theorem 3 (Sum of Independent Exponential Random Variables):**  The sum of *n* independent and identically distributed exponential random variables, each with rate λ, follows a Gamma distribution with shape parameter *n* and rate parameter λ.
    *   **Implication:** The time until the *n*th arrival in a Poisson process follows a Gamma distribution. This is related to the Erlang distribution, which is a special case of the Gamma distribution with integer shape parameter.
*   **Theorem 4 (Order Statistics of Uniform Random Variables):**  If *n* customers arrive independently and uniformly at random in the interval [0, t], then the arrival times of the customers, when ordered, are distributed as the order statistics of *n* independent uniform random variables on [0, t].  This theorem is more advanced and relates to the uniform distribution rather than exponential but is sometimes useful in the context of arrival times.

**4. Applications and Examples**

*   **Queueing Theory:** Analyzing waiting times and queue lengths in call centers, bank teller lines, or computer networks.  Understanding the distribution of interarrival times helps predict congestion and optimize resource allocation.
*   **Reliability Engineering:**  Modeling the time between failures of a system. The exponential distribution is often used to model the lifetime of components, assuming failures occur randomly.
*   **Communication Networks:** Analyzing packet arrivals in a network. The Poisson process is a common model for traffic arrival patterns.
*   **Example 1:**  Customers arrive at a bank according to a Poisson process with a rate of 10 customers per hour.
    *   What is the average interarrival time between customers?
    *   What is the probability that the time between two consecutive arrivals is greater than 15 minutes (0.25 hours)?
*   **Solution to Example 1:**
    *   The average interarrival time is 1/λ = 1/10 hours = 0.1 hours = 6 minutes.
    *   The probability that the time between two consecutive arrivals is greater than 0.25 hours is P(T > 0.25) = e<sup>-λt</sup> = e<sup>-10*0.25</sup> = e<sup>-2.5</sup> ≈ 0.082.

**5. Practice Questions/Exercises**

1.  The average time between emails arriving in your inbox is 2 minutes. Assuming a Poisson process, what is the rate (λ) of email arrivals per hour?
2.  In a call center, calls arrive according to a Poisson process at a rate of 5 calls per minute. What is the probability that more than 2 minutes will pass between two consecutive calls?
3.  You have two independent Poisson processes: Process A has a rate of 3 events per hour, and Process B has a rate of 5 events per hour. What is the rate of the combined process?
4.  Packets arrive at a router according to a Poisson process with a rate of 100 packets per second.  Packets are routed to two different queues.  Queue 1 receives packets with probability 0.4, and Queue 2 receives packets with probability 0.6.  What are the arrival rates for each queue?
5.  The time between failures of a machine is exponentially distributed with a mean of 50 hours.  What is the probability that the machine will fail within the next 25 hours, given that it has already been working for 10 hours?

**6. Answers to Practice Questions/Exercises**

1.  λ = 60 minutes / 2 minutes per email = 30 emails per hour.
2.  λ = 5 calls/minute.  P(T > 2) = e<sup>-λt</sup> = e<sup>-5*2</sup> = e<sup>-10</sup> ≈ 0.000045.
3.  λ = 3 + 5 = 8 events per hour.
4.  Queue 1: λ<sub>1</sub> = 100 * 0.4 = 40 packets per second.  Queue 2: λ<sub>2</sub> = 100 * 0.6 = 60 packets per second.
5.  Due to the memoryless property of the exponential distribution, the past 10 hours of operation are irrelevant.  P(T ≤ 25) = 1 - e<sup>-λt</sup> = 1 - e<sup>-(1/50)*25</sup> = 1 - e<sup>-0.5</sup> ≈ 0.393.

**7. Important Points to Remember**

*   The Poisson process and the exponential distribution are fundamentally linked when discussing interarrival times.
*   The memoryless property of the exponential distribution is a key characteristic and simplifies many calculations.
*   Understanding the superposition and decomposition theorems allows you to analyze complex systems with multiple arrival streams.
*   Theorems presented are stated without proof; focus on understanding their implications and applications.
*   Interarrival times are crucial in many areas, including queueing theory, reliability engineering, and communication networks.
