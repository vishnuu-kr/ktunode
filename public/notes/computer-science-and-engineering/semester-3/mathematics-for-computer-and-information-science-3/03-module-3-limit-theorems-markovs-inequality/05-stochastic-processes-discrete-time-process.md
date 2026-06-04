---
title: "Stochastic Processes: Discrete-time process"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 3: Limit theorems : Markov’s Inequality"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab59"
status: "completed"
scrapedAt: "2026-05-20T16:26:07.819Z"
---
# Mathematics for Computer and Information Science-3
## Module 3: Limit Theorems: Markov's Inequality
### Topic: Stochastic Processes: Discrete-time process

**Learning Outcomes:**

*   Understand the definition of a stochastic process and its components.
*   Differentiate between discrete-time and continuous-time stochastic processes.
*   Define and identify examples of discrete-time stochastic processes.
*   Understand and apply the concept of a state space in the context of discrete-time stochastic processes.
*   Describe examples of discrete-time stochastic processes relevant to computer science and information science.

---

**1. Introduction to Stochastic Processes**

*   **Definition:** A stochastic process (also sometimes called a random process) is a collection of random variables indexed by a parameter *t*, representing time.

    *   Mathematically, it's a family of random variables {*X<sub>t</sub>* : *t* ∈ *T*} defined on a probability space.
    *   *X<sub>t</sub>* represents the state of the process at time *t*.
    *   *T* is the index set, representing the time domain, and can be discrete or continuous.

*   **Components:**

    *   **State Space (S):** The set of all possible values (states) that the random variable *X<sub>t</sub>* can take.
    *   **Index Set (T):** The set of time points at which the process is observed.  This can be discrete (e.g., integers) or continuous (e.g., real numbers).
    *   **Probability Law:**  Specifies the probabilities of transitioning between states over time.  This law governs how the process evolves.

**2. Discrete-Time vs. Continuous-Time Stochastic Processes**

*   **Discrete-Time Stochastic Process:** A stochastic process where the index set *T* is discrete. The process is observed only at specific, separated points in time. Examples include:

    *   *T* = {0, 1, 2, 3, ...} (non-negative integers, representing time steps)
    *   *T* = {..., -2, -1, 0, 1, 2, ...} (integers)

*   **Continuous-Time Stochastic Process:** A stochastic process where the index set *T* is continuous. The process is observed continuously over time. Examples include:

    *   *T* = [0, ∞) (non-negative real numbers)
    *   *T* = (-∞, ∞) (real numbers)

*   **Key Difference:** Whether time is measured in discrete steps or continuously.

**3. Discrete-Time Stochastic Processes: Definition and Examples**

*   **Definition:** A sequence of random variables {*X<sub>0</sub>*, *X<sub>1</sub>*, *X<sub>2</sub>*, ...}, where each *X<sub>i</sub>* is a random variable representing the state of the process at time *i*.

*   **Formal Notation:** {*X<sub>n</sub>* : *n* ∈ *N*}, where *N* is a set of integers (usually non-negative integers).

*   **Examples:**

    *   **Coin Toss:** A sequence of coin flips.  Let *X<sub>n</sub>* = 1 if the *n*-th toss is heads and *X<sub>n</sub>* = 0 if it's tails. The state space *S* is {0, 1} and the index set *T* is {1, 2, 3, ...}.
    *   **Random Walk:** A particle moves randomly on a grid. Let *X<sub>n</sub>* be the position of the particle at time *n*.  The state space *S* could be the set of integers (1-dimensional) or pairs of integers (2-dimensional).  The index set *T* is {0, 1, 2, 3, ...}.
    *   **Stock Prices (Daily):** The daily closing price of a particular stock. Let *X<sub>n</sub>* be the closing price on day *n*. The state space *S* is the set of positive real numbers (or a subset depending on the stock), and *T* is {1, 2, 3, ...}.
    *   **Queue Length:** The number of jobs waiting in a queue at discrete time intervals (e.g., every second). Let *X<sub>n</sub>* be the number of jobs in the queue at time *n*. The state space *S* is the set of non-negative integers {0, 1, 2, 3, ...}, and the index set *T* is {0, 1, 2, 3, ...}.
    *   **Website Traffic:** The number of visitors to a website per hour.  Let *X<sub>n</sub>* be the number of visitors during the *n*-th hour. The state space *S* is the set of non-negative integers {0, 1, 2, 3, ...}, and *T* is {1, 2, 3, ...}.

**4. State Space in Discrete-Time Stochastic Processes**

*   **Definition:** The set *S* of all possible values that the random variable *X<sub>n</sub>* can take at any time *n*.

*   **Types of State Spaces:**

    *   **Discrete State Space:** A countable set of possible states. Examples:

        *   {0, 1} (Coin toss)
        *   {1, 2, 3, 4, 5, 6} (Dice roll)
        *   {0, 1, 2, ...} (Queue length)
    *   **Continuous State Space:** An uncountable set of possible states. Examples:

        *   [0, 1] (A probability value)
        *   (-∞, ∞) (Temperature)
        *   [0, ∞) (Waiting time)

*   **Importance:** The state space defines the possible outcomes of the stochastic process and is crucial for understanding its behavior.

**5. Discrete-Time Stochastic Processes in Computer and Information Science**

*   **Examples and Applications:**

    *   **Markov Chains:** A type of discrete-time stochastic process with the Markov property (future state depends only on the present state, not the past). Used in:
        *   **PageRank Algorithm:** Modeling web page transitions based on hyperlinks.
        *   **Speech Recognition:**  Modeling sequences of phonemes.
        *   **Recommendation Systems:** Predicting user behavior and suggesting items.
    *   **Queuing Theory:** Modeling waiting lines in computer systems (e.g., network routers, server queues). *X<sub>n</sub>* can represent the queue length at time *n*.
    *   **Time Series Analysis:** Analyzing sequences of data points collected over time, such as network traffic, CPU utilization, or memory usage. *X<sub>n</sub>* represents the value of the metric at time *n*.
    *   **Simulation:** Simulating complex systems (e.g., computer networks, communication protocols) using discrete-time stochastic processes to model random events.
    *   **Machine Learning:** Recurrent Neural Networks (RNNs) and Hidden Markov Models (HMMs) are used extensively to process and model sequential data, representing phenomena like time series and natural language.

**6. Important Points to Remember**

*   A stochastic process is a *collection* of random variables, indexed by time.
*   Discrete-time processes are observed at discrete points in time.
*   The state space defines the possible values the process can take.
*   Markov chains are a crucial type of discrete-time stochastic process with many applications in computer science.

**7. Practice Questions/Exercises**

1.  **Identify which of the following are discrete-time stochastic processes and explain why:**

    *   a) The temperature recorded every minute.
    *   b) The number of cars passing a point on a highway every hour.
    *   c) The position of a mouse moving continuously in a maze.
    *   d) The daily stock prices of a company.

2.  **For the following scenario, define the state space and index set, and explain if it represents a discrete-time stochastic process:**

    *   A counter tracks the number of packets received by a network router every second.

3.  **Provide an example of how a discrete-time Markov chain can be used in a search engine other than the PageRank algorithm.**
4. **True or False**: A discrete-time stochastic process *must* have a discrete state space. Explain.

**8. Answers to Practice Questions/Exercises**

1.  *   a) Discrete-time. Temperature is recorded at discrete time intervals (every minute).
    *   b) Discrete-time.  The number of cars is counted at discrete intervals (every hour).
    *   c) Continuous-time. The mouse's position changes continuously over time.
    *   d) Discrete-time. Stock prices are recorded daily.

2.  *   **State Space (S):** {0, 1, 2, 3, ...} (non-negative integers representing the number of packets).
    *   **Index Set (T):** {0, 1, 2, 3, ...} (integers representing seconds).
    *   **Discrete-time process:** Yes, because the number of packets is recorded at discrete points in time (every second).

3.  **Example:** A Markov chain could be used to model user browsing behavior. States could represent different search query categories (e.g., "sports," "news," "shopping"). Transitions between states would be based on the probability that a user searches for one category after searching for another.  This model could be used to personalize search results or suggest related search queries.

4.  **False.**  A discrete-time stochastic process has a *discrete index set* (meaning time is discrete).  The state space (the values the process can take) can be discrete or continuous.  For example, the amount of rainfall measured daily is a discrete-time process (measured daily) but has a continuous state space (the amount of rain can be any non-negative real number).
