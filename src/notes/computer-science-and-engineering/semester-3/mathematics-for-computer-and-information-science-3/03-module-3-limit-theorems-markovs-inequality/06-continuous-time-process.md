---
title: "Continuous-time process"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 3: Limit theorems : Markov’s Inequality"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab5a"
status: "completed"
scrapedAt: "2026-05-20T16:26:08.534Z"
---
## Mathematics for Computer and Information Science-3
## Module 3: Limit Theorems: Markov's Inequality
## Topic: Continuous-Time Process

**Learning Outcomes:**

*   Understand the definition and properties of continuous-time processes.
*   Distinguish between discrete-time and continuous-time processes.
*   Recognize and analyze different types of continuous-time processes (e.g., Poisson process, Wiener process/Brownian motion).
*   Apply Markov's inequality to analyze continuous-time processes.
*   Calculate probabilities and expectations related to continuous-time processes.

**1. Introduction to Continuous-Time Processes**

*   **Definition:** A continuous-time process is a stochastic process whose index set (representing time) is a continuous interval, typically the non-negative real numbers, i.e.,  T = [0, ∞).  This means the process is defined for every instant in time within the interval.
    *   Formally, a continuous-time process is a family of random variables {X(t), t ∈ T}, where T is a continuous index set. We often denote X(t) as X<sub>t</sub>.
*   **Key Difference from Discrete-Time Processes:** Discrete-time processes are defined only at discrete points in time (e.g., X<sub>1</sub>, X<sub>2</sub>, X<sub>3</sub>...). Continuous-time processes are defined for *all* times within a continuous interval.
*   **Examples:**
    *   Temperature readings recorded continuously over a day.
    *   The position of a particle undergoing Brownian motion.
    *   The number of customers in a queue waiting for service at any time.
    *   The voltage fluctuations in an electronic circuit.
*   **State Space:** The state space of a continuous-time process is the set of all possible values that the random variables X(t) can take. The state space can be discrete (e.g., the number of customers in a queue) or continuous (e.g., the temperature of a room).

**2. Important Continuous-Time Processes**

*   **2.1. Poisson Process**
    *   **Definition:** A Poisson process is a stochastic process that counts the number of events that occur in a given time interval. It is characterized by the following properties:
        *   **Independent Increments:** The number of events in disjoint time intervals are independent.
        *   **Stationary Increments:** The probability distribution of the number of events in an interval of length t depends only on t, not on the starting point of the interval.
        *   **Rare Events:** The probability of more than one event occurring in a very small time interval is negligible.
    *   **Formal Definition:** A Poisson process with rate λ > 0 is a continuous-time process {N(t), t ≥ 0} such that:
        *   N(0) = 0 (Initially, no events have occurred)
        *   N(t) has independent and stationary increments
        *   For any t > 0, N(t) follows a Poisson distribution with mean λt, i.e., P(N(t) = k) = (e<sup>-λt</sup>(λt)<sup>k</sup>) / k! for k = 0, 1, 2, ...
    *   **Applications:** Modeling arrival of customers in a queue, calls arriving at a call center, radioactive decay, and many other random events.
    *   **Interarrival Times:**  The time between successive events in a Poisson process follows an exponential distribution with rate λ.
    *   **Example:** Consider a call center receiving calls at a rate of λ = 5 calls per minute.  N(t) represents the number of calls received up to time t.
        *   P(N(1) = 0) = e<sup>-5</sup>(5)<sup>0</sup> / 0! = e<sup>-5</sup> ≈ 0.0067 (Probability of receiving no calls in the first minute)
        *   P(N(1) = 5) = e<sup>-5</sup>(5)<sup>5</sup> / 5! ≈ 0.1755 (Probability of receiving 5 calls in the first minute)

*   **2.2. Wiener Process (Brownian Motion)**
    *   **Definition:** The Wiener process, also known as Brownian motion, is a continuous-time stochastic process that models the random movement of a particle suspended in a fluid.
    *   **Properties:**
        *   **Independent Increments:** The increments W(t) - W(s) are independent for any s < t.
        *   **Stationary Increments:** The increment W(t) - W(s) has the same distribution as W(t-s).
        *   **Normally Distributed Increments:** For any s < t, W(t) - W(s) follows a normal distribution with mean 0 and variance t-s, i.e., W(t) - W(s) ~ N(0, t-s).
        *   **Continuity:** The paths of the Wiener process are continuous almost surely.
    *   **Formal Definition:** A Wiener process {W(t), t ≥ 0} is a continuous-time process satisfying:
        *   W(0) = 0
        *   W(t) has independent and stationary increments
        *   W(t) ~ N(0, t) for all t > 0
    *   **Applications:** Modeling stock prices, physical phenomena like diffusion, and many other areas.
    *   **Example:** Consider a Wiener process W(t).
        *   E[W(t)] = 0  (Expected value of the Wiener process at time t is zero)
        *   Var[W(t)] = t (Variance of the Wiener process at time t is t)
        *   P(W(1) > 0) = 0.5 (Probability that the Wiener process is positive at time 1)

**3. Markov's Inequality**

*   **Statement:** Let X be a non-negative random variable and a > 0. Then,
    P(X ≥ a) ≤ E[X] / a
*   **Application to Continuous-Time Processes:** Markov's inequality provides an upper bound on the probability that a non-negative continuous-time process exceeds a certain threshold.
*   **Example:**  Let N(t) be a Poisson process with rate λ = 2.  We want to find an upper bound on the probability that N(1) ≥ 5.
    *   E[N(1)] = λ * 1 = 2
    *   Using Markov's inequality: P(N(1) ≥ 5) ≤ E[N(1)] / 5 = 2 / 5 = 0.4
    *   **Note:** Markov's inequality gives an *upper bound*, so the actual probability could be lower. The exact probability P(N(1) >= 5) = 1 - P(N(1) < 5) = 1 - sum (e<sup>-2</sup> * 2<sup>k</sup> / k!) for k = 0 to 4 = 0.036. Thus, 0.036 <= 0.4. The inequality is true, but the bound is quite weak.

**4. Applying Markov's Inequality to Poisson Processes**

*   Markov's Inequality can be directly applied to the Poisson Process.  Remember N(t) ~ Poisson(λt).  Since the Poisson process counts events and can only take non-negative values, the precondition of Markov's inequality is satisfied.
*   **Example:** Suppose a web server experiences requests according to a Poisson process with rate λ = 10 requests per second. What is the upper bound on the probability of receiving 15 or more requests in one second?
    *   N(t) represents the number of requests in t seconds.
    *   We want to find P(N(1) ≥ 15).
    *   E[N(1)] = λ * 1 = 10
    *   Applying Markov's inequality: P(N(1) ≥ 15) ≤ E[N(1)] / 15 = 10 / 15 = 2/3 ≈ 0.667

**5. Applying Markov's Inequality to other Continuous-Time Processes**

*   Markov's inequality can also be applied to functions of continuous-time processes if they yield non-negative random variables.
*   **Example**: Let's say X(t) is the squared value of a Wiener process at time t, i.e., X(t) = W(t)<sup>2</sup>. Since W(t) is normally distributed with mean 0 and variance t,  E[X(t)] = E[W(t)<sup>2</sup>] = Var[W(t)] + (E[W(t)])<sup>2</sup> = t + 0<sup>2</sup> = t.
*   Now, we want to find an upper bound for the probability that X(1) >= 4: P(X(1) >= 4).
*   Applying Markov's Inequality: P(X(1) >= 4) <= E[X(1)] / 4 = 1 / 4 = 0.25.

**6. Practice Questions**

1.  A telephone exchange receives calls according to a Poisson process at a rate of λ = 3 calls per minute.
    *   (a) What is the probability that exactly 5 calls are received in the first minute?
    *   (b) What is the probability that at least 2 calls are received in the first minute?
    *   (c) Use Markov's inequality to find an upper bound on the probability that more than 6 calls are received in the first minute.

2.  Let W(t) be a Wiener process.
    *   (a) What is the distribution of W(2)?
    *   (b) What is the value of E[W(3) - W(1)]?
    *   (c) What is the variance of W(3) - W(1)?
    *   (d) Let X(t) = |W(t)|, the absolute value of the Wiener process. Use Markov's inequality to find an upper bound on the probability that |W(1)| ≥ 2. *Hint: Consider E[|W(t)|] = sqrt(2t/pi) for Wiener processes.*

**7. Solutions to Practice Questions**

1.  (a) P(N(1) = 5) = (e<sup>-3</sup>(3)<sup>5</sup>) / 5! ≈ 0.1008
    (b) P(N(1) ≥ 2) = 1 - P(N(1) < 2) = 1 - [P(N(1) = 0) + P(N(1) = 1)] = 1 - [e<sup>-3</sup> + 3e<sup>-3</sup>] = 1 - 4e<sup>-3</sup> ≈ 0.8009
    (c) E[N(1)] = 3.  P(N(1) > 6) <= P(N(1) >= 7) <= E[N(1)]/7 = 3/7 ≈ 0.4286

2.  (a) W(2) ~ N(0, 2)
    (b) E[W(3) - W(1)] = 0
    (c) Var[W(3) - W(1)] = 3 - 1 = 2
    (d) E[|W(1)|] = sqrt(2 * 1 / pi) ≈ 0.7979. P(|W(1)| >= 2) <= E[|W(1)|]/2 = 0.7979/2 ≈ 0.3989

**8. Important Points to Remember**

*   Continuous-time processes are defined for all times within a continuous interval.
*   Poisson processes model the number of events occurring randomly over time.  Their key property is independent increments.
*   Wiener processes (Brownian motion) model random movement and have normally distributed increments.
*   Markov's inequality provides an upper bound on the probability that a non-negative random variable exceeds a certain threshold. This upper bound can be quite loose in practice.
*   Markov's inequality is a useful tool for analyzing the behavior of continuous-time processes when exact distributions are difficult to compute.
*   Always ensure that the random variable you're applying Markov's inequality to is non-negative.
*   Remember that Markov's Inequality gives you an *upper bound* on the probability, not the exact probability.
