---
title: "- Characteristics of the Greedy Algorithm - Greedy Algorithms vs Dynamic Programming Randomized Approach - Example 1: A company selling jeans gives a coupon for each pair of jeans. There are n different coupons. Collecting n different coupons would give you free jeans. How many jeans do you expect to buy before getting a free one? Example 2: n people go to a party and drop off their hats to a hat- check person. When the party is over, a different hat-check person is on duty and returns the n hats randomly back to each person. What is the expected number of people who get back their hats? -Motivations  for the Randomized  Approach"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 4: COMPUTATIONAL APPROACHES TO PROBLEM"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f9358"
status: "completed"
scrapedAt: "2026-05-23T16:00:35.948Z"
---
# Module 4: Computational Approaches to Problems

Welcome back, everyone! In this module, we're going to delve into some powerful computational strategies that help us tackle complex problems efficiently. We'll be exploring the **Greedy Algorithm**, comparing it with **Dynamic Programming**, and then venturing into the exciting world of **Randomized Approaches**. These are fundamental concepts that underpin many real-world applications and will significantly enhance your ability to model and solve problems using Python, directly aligning with our course outcomes CO1, CO2, CO3, and CO4.

Think of problem-solving as having a toolbox. Each tool is suited for a different kind of job. Today, we’re learning to wield some of the most versatile and interesting tools: greedy algorithms, dynamic programming, and randomized methods.

---

## The Essence of the Greedy Algorithm

Let's start with the **Greedy Algorithm**. What does "greedy" mean in this context? It’s not about being selfish in a negative way; rather, it's about making the "best" choice *at the current moment* without thinking too far ahead. It's a local optimization strategy.

### Characteristics of a Greedy Algorithm

So, what makes an algorithm "greedy"? We can identify a few key characteristics:

*   **Locally Optimal Choices:** At each step, the algorithm makes the choice that appears to be the best or most profitable *right now*. It doesn't consider the future consequences of this choice. Imagine you're at a fork in a path, and one way looks like it leads to a treasure chest *immediately*, while the other is a bit more winding but might lead to a bigger treasure later. A greedy algorithm would pick the immediate treasure.

*   **Irrevocable Decisions:** Once a choice is made, it's final. You can't go back and change your mind. This is crucial. If you pick a coupon for a free pair of jeans, you can't later decide you should have picked a different coupon instead for a better overall outcome.

*   **Independence of Subproblems (Often):** While not always strictly true, greedy algorithms often work by breaking a problem down and making independent decisions for each subproblem. This is in contrast to some other approaches where decisions for one subproblem heavily influence others.

*   **Hope for Global Optimality:** The underlying assumption—and often the challenge—is that if you consistently make the locally optimal choices, you'll eventually arrive at the globally optimal solution for the entire problem. This isn't always guaranteed! Sometimes, a locally good choice can lead you down a path that prevents you from reaching the absolute best overall solution. This is a key point for understanding *when* to use a greedy approach.

Think about how George Pólya, in his seminal work "How to Solve It," emphasizes understanding the problem and devising a plan. A greedy algorithm is a *type* of plan, but it’s one that requires careful consideration to ensure its "greediness" actually leads to the desired outcome.

---

## Greedy Algorithms vs. Dynamic Programming

This is a comparison you'll often see in algorithm courses and interviews, so let's get it straight. Both are powerful techniques, but they approach problems differently.

*   **Greedy Algorithms:** As we've seen, they make the best local choice at each step, hoping for global optimality. They are typically simpler to design and implement and are often faster. They are like taking the direct, shortest path without considering potential traffic jams further down the road.

*   **Dynamic Programming (DP):** This approach is more meticulous. It breaks down a problem into smaller, overlapping subproblems. It solves each subproblem only *once* and stores its solution (often in a table or memoization) to avoid recomputing it. Then, it combines these subproblem solutions to build up the solution to the larger problem. DP is like a chess grandmaster who thinks several moves ahead, considering all possible repercussions of each move.

**Key Differences to Remember for Exams:**

| Feature             | Greedy Algorithm                                     | Dynamic Programming                                        |
| :------------------ | :--------------------------------------------------- | :--------------------------------------------------------- |
| **Decision Making** | Makes locally optimal choice at each step.           | Makes optimal choices for subproblems and combines them.   |
| **Future Outlook**  | Short-sighted; doesn't look ahead.                   | Forward-looking; considers future implications.            |
| **Optimality**      | Not always guaranteed to be globally optimal.        | Guaranteed to find the globally optimal solution.          |
| **Complexity**      | Generally simpler and faster.                        | Can be more complex to design and implement; often slower. |
| **Subproblems**     | Decisions for subproblems are often independent.     | Subproblems are overlapping; solutions are reused.         |

**When is Greedy a Good Fit?**

Greedy algorithms work best when a problem exhibits two properties:

1.  **Greedy Choice Property:** A globally optimal solution can be arrived at by making a sequence of locally optimal (greedy) choices.
2.  **Optimal Substructure Property:** An optimal solution to the problem contains optimal solutions to subproblems. (This property is shared with Dynamic Programming, but the *way* they exploit it differs).

If these properties hold, a greedy approach is often the most elegant and efficient solution. If not, you might need dynamic programming or another technique. Maureen Sprankle and Jim Hubbard’s "Problem Solving & Programming Concepts" often highlights how understanding problem structure is key to choosing the right algorithmic approach.

---

## The Randomized Approach: Injecting Chance

Now, let's switch gears and talk about **Randomized Approaches**. What do we mean by this? Simply put, it’s about incorporating randomness into an algorithm. Instead of following a deterministic path (where the same input always yields the same output sequence), a randomized algorithm uses random numbers as part of its logic.

### Motivations for the Randomized Approach

Why on earth would we introduce randomness? Isn't determinism what we want in computing? Well, sometimes, pure determinism can be rigid and inefficient. Here are some key motivations:

1.  **Simplicity and Elegance:** Sometimes, a randomized approach can be much simpler to design and implement than a deterministic one that guarantees the same performance.
2.  **Efficiency:** For certain problems, a randomized algorithm can achieve a good solution *on average* or with high probability, much faster than any known deterministic algorithm. Think of trying to find a needle in a haystack: instead of a systematic search (which might be slow), you might randomly jab around, and on average, you'll find it relatively quickly.
3.  **Dealing with Adversaries:** In some scenarios, an "adversary" might try to feed an algorithm inputs that make it perform poorly. Randomized algorithms can often thwart such adversaries because the adversary doesn't know which random choices the algorithm will make.
4.  **Approximation:** When finding an exact solution is computationally too expensive, a randomized approach can provide a very good approximate solution quickly.
5.  **Exploration of Solution Space:** Randomness can help algorithms explore different parts of the potential solution space, potentially avoiding getting stuck in local optima that deterministic methods might fall into.

Donald Treffinger and colleagues, in "Creative Problem Solving," discuss exploring diverse solutions. Randomness can be a powerful tool for this exploration. John V. Guttag’s "Introduction to Computation and Programming using Python" also touches upon probabilistic methods and their applications.

Let's illustrate these ideas with some classic examples.

---

## Example 1: The Coupon Collector's Problem

This is a classic problem that perfectly illustrates probabilistic reasoning.

**Scenario:** A company sells jeans, and with each pair, you get a coupon. There are *n* different types of coupons. To win free jeans, you need to collect one of *each* of the *n* distinct coupons. You buy jeans one by one, and each time, you get a random coupon, chosen uniformly from the *n* types. What is the expected number of jeans you'll have to buy until you collect all *n* distinct coupons?

**Thinking like a mathematician (and computer scientist):** This problem deals with "expected values," which is a core concept in probability and statistics. We're looking for an average outcome over many trials.

Let $E$ be the expected number of jeans we need to buy.
Let $E_k$ be the expected number of additional jeans we need to buy to get a *new* coupon, given that we currently have *k* distinct coupons.

When we have $k$ distinct coupons, there are $n-k$ coupons we *don't* have yet.
Each time we buy a pair of jeans, the probability of getting a coupon we *don't* have yet is $\frac{n-k}{n}$.
The probability of getting a coupon we *already* have is $\frac{k}{n}$.

The number of trials needed to get the first "success" (a new coupon) follows a geometric distribution. The expected number of trials for a geometric distribution with success probability $p$ is $\frac{1}{p}$.

So, for our problem:
*   When $k=0$ (we have 0 coupons), the probability of getting a new coupon is $\frac{n-0}{n} = \frac{n}{n} = 1$. Expected additional jeans to get the first coupon ($E_0$) is $\frac{1}{1} = 1$. This makes sense – the first coupon is always new!
*   When $k=1$ (we have 1 coupon), the probability of getting a new coupon is $\frac{n-1}{n}$. Expected additional jeans to get the second *new* coupon ($E_1$) is $\frac{1}{(n-1)/n} = \frac{n}{n-1}$.
*   When $k=2$ (we have 2 coupons), the probability of getting a new coupon is $\frac{n-2}{n}$. Expected additional jeans to get the third *new* coupon ($E_2$) is $\frac{1}{(n-2)/n} = \frac{n}{n-2}$.
*   ...
*   When $k=n-1$ (we have $n-1$ coupons), the probability of getting a new coupon is $\frac{n-(n-1)}{n} = \frac{1}{n}$. Expected additional jeans to get the last *new* coupon ($E_{n-1}$) is $\frac{1}{1/n} = n$.

The *total* expected number of jeans to buy is the sum of the expected number of jeans needed for each new coupon:
$E = E_0 + E_1 + E_2 + \dots + E_{n-1}$
$E = \frac{n}{n} + \frac{n}{n-1} + \frac{n}{n-2} + \dots + \frac{n}{1}$
$E = n \left( \frac{1}{n} + \frac{1}{n-1} + \frac{1}{n-2} + \dots + \frac{1}{1} \right)$
$E = n \sum_{i=1}^{n} \frac{1}{i}$

This sum $\sum_{i=1}^{n} \frac{1}{i}$ is known as the *n*-th Harmonic number, often denoted as $H_n$.
So, $E = n \cdot H_n$.

For large *n*, $H_n$ is approximately $\ln(n) + \gamma$, where $\gamma$ is the Euler-Mascheroni constant (about 0.577).
So, the expected number of jeans is roughly $n(\ln(n) + \gamma)$.

**What does this mean intuitively?**
If there are 10 types of coupons ($n=10$):
Expected jeans $\approx 10 \left( \frac{1}{10} + \frac{1}{9} + \dots + \frac{1}{1} \right)$
$H_{10} \approx 2.9289$. So, $E \approx 10 \times 2.9289 = 29.289$.
You'd expect to buy about 30 pairs of jeans to collect all 10 coupons.

If there are 100 types of coupons ($n=100$):
$H_{100} \approx \ln(100) + 0.577 \approx 4.605 + 0.577 \approx 5.182$.
Expected jeans $\approx 100 \times 5.182 = 518.2$.
You'd expect to buy over 500 pairs of jeans to get all 100 unique coupons!

**Exam Tip:** This problem is often used to test understanding of expected value and summation. Be familiar with the formula $n H_n$.

---

## Example 2: The Hat-Check Problem (Derangements)

This is another fascinating problem that uses probability and can be analyzed with different techniques.

**Scenario:** *n* people go to a party and check their hats. When they leave, a new, perhaps slightly distracted, hat-check person returns the hats randomly. Each person gets one hat, and all hats are returned. What is the expected number of people who get back their *own* hat?

**Thinking about the problem:** Let's represent each person by a number $1, 2, \dots, n$, and their corresponding hat by $h_1, h_2, \dots, h_n$. When hats are returned randomly, it's a permutation of the hats. A "match" occurs if person $i$ receives hat $h_i$.

Let $X$ be the random variable representing the number of people who get their own hat back. We want to find $E[X]$.

We can use indicator random variables here. This is a very powerful technique often seen in probability and algorithms courses, highlighted in texts like "Introduction to Computation and Programming using Python."

Let $X_i$ be an indicator variable for the event that person $i$ gets their own hat back.
$X_i = 1$ if person $i$ gets hat $h_i$.
$X_i = 0$ if person $i$ gets a hat other than $h_i$.

The total number of people who get their own hat back is $X = X_1 + X_2 + \dots + X_n$.

By the linearity of expectation, $E[X] = E[X_1 + X_2 + \dots + X_n] = E[X_1] + E[X_2] + \dots + E[X_n]$.

Now, let's find $E[X_i]$ for any person $i$.
$E[X_i] = P(X_i = 1) \times 1 + P(X_i = 0) \times 0 = P(X_i = 1)$.
What is the probability that person $i$ gets their own hat $h_i$?

There are $n$ hats, and person $i$ receives one of them. The hat $h_i$ is just one specific hat. Since the hats are returned randomly, any hat is equally likely to be given to person $i$. So, the probability that person $i$ receives hat $h_i$ is $\frac{1}{n}$.

Therefore, $P(X_i = 1) = \frac{1}{n}$.

Now we can calculate the total expected value:
$E[X] = \sum_{i=1}^{n} E[X_i] = \sum_{i=1}^{n} \frac{1}{n}$
$E[X] = \frac{1}{n} + \frac{1}{n} + \dots + \frac{1}{n}$ (n times)
$E[X] = n \times \frac{1}{n} = 1$.

**What does this mean?**
The expected number of people who get their own hat back is **1**, regardless of how many people there are! This is a rather counter-intuitive but beautiful result. Whether there are 2 people or 200 people, on average, only one person will get their hat back.

**How does this relate to Derangements?**
The number of ways to return hats such that *no one* gets their own hat is called the number of **derangements** of $n$ items, denoted $!n$ or $D_n$.
The probability that *no one* gets their hat back is $\frac{!n}{n!}$. As $n$ becomes large, this probability approaches $\frac{1}{e}$ (where $e$ is Euler's number, approximately 2.71828).

This means that as $n$ gets large, about $1/e$ of the people will *not* get their own hat. The probability of *at least one* person getting their hat back is $1 - P(\text{no one gets their hat}) = 1 - \frac{!n}{n!}$, which approaches $1 - \frac{1}{e}$.

The result $E[X]=1$ means that even though the probability of *any specific person* getting their hat back is small ($1/n$), there are enough people ($n$) that, on average, one person is expected to get their hat back. It’s a probabilistic balance.

**Exam Tip:** This problem is a classic example of using indicator random variables and linearity of expectation. Remember the result $E[X]=1$ and the technique itself. It's a great way to demonstrate understanding of abstract concepts.

---

## Connecting to Course Outcomes

Let's quickly tie this back to our course objectives:

*   **CO1 (Utilize computing as a model for solving real-world problems):** Both the coupon collector's problem and the hat-check problem are real-world scenarios that we've modeled using mathematical and computational concepts (expected values, probability, permutations). We can implement simulations in Python to verify these expected values.
*   **CO2 (Articulate a problem before attempting to solve it):** We spent time defining the problems precisely, identifying the unknowns and parameters ($n$ for coupon types, $n$ for people). This is the crucial first step in any problem-solving process, just as George Pólya would advise.
*   **CO3 (Utilize effective algorithms to solve the formulated models):** For the coupon collector, we derived a formula based on expected values. For the hat-check problem, we used the "indicator variable" technique and linearity of expectation. These are algorithmic and mathematical strategies for solving. Translating these into Python would involve loops for summation or simulations.
*   **CO4 (Interpret problem-solving strategies... and essential Python programming skills):** We've interpreted strategies like making locally optimal choices (greedy), breaking down problems (DP implicitly, though we didn't show a DP solution here), and using randomness. The ability to reason about expected outcomes and probabilities is a key skill for a programmer.

---

## Sample Questions with Answers

Here are a few questions to help solidify your understanding, covering both conceptual and exam-style queries.

**1. Conceptual Question:**
Explain the fundamental difference in how a Greedy Algorithm and Dynamic Programming approach a problem. When might you prefer one over the other?

**Answer:**
The fundamental difference lies in their decision-making process and outlook. A **Greedy Algorithm** makes the locally optimal choice at each step, hoping this leads to a global optimum, and its decisions are usually irrevocable. It's short-sighted. **Dynamic Programming**, on the other hand, breaks a problem into overlapping subproblems, solves each subproblem once, stores the results, and uses these to build up the overall optimal solution. It's forward-looking and exhaustive in exploring subproblem combinations.

You would prefer **Greedy** when:
*   The problem has the "greedy choice property" and "optimal substructure," meaning local optima guarantee a global optimum.
*   Simplicity and speed are paramount, and a guaranteed optimal solution isn't strictly necessary or is too costly to achieve.
*   Examples include activities selection, Huffman coding, or finding minimum spanning trees with certain algorithms.

You would prefer **Dynamic Programming** when:
*   Greedy choices do not guarantee a global optimum, and there's a possibility that a locally suboptimal choice now could lead to a better overall solution later.
*   The problem exhibits overlapping subproblems and optimal substructure, allowing for memoization or tabulation.
*   A guaranteed optimal solution is required.
*   Examples include the Fibonacci sequence (naive recursion vs. DP), knapsack problems, and shortest path algorithms like Floyd-Warshall.

**2. Application Question (Coupon Collector):**
Suppose there are $n=3$ different types of coupons. What is the expected number of jeans you need to buy to collect all 3 distinct coupons? Show your calculation.

**Answer:**
This is an application of the Coupon Collector's Problem. The formula for the expected number of trials is $E = n \sum_{i=1}^{n} \frac{1}{i}$.

For $n=3$:
$E = 3 \left( \frac{1}{1} + \frac{1}{2} + \frac{1}{3} \right)$
$E = 3 \left( \frac{6}{6} + \frac{3}{6} + \frac{2}{6} \right)$
$E = 3 \left( \frac{11}{6} \right)$
$E = \frac{33}{6} = \frac{11}{2} = 5.5$

So, the expected number of jeans to buy is 5.5.

**3. Conceptual/Exam-Oriented Question (Hat Check):**
In the Hat-Check problem, if there are 100 people ($n=100$), what is the expected number of people who receive their own hat back? Explain why this result might be surprising.

**Answer:**
Using the linearity of expectation and indicator variables, we found that the expected number of people who receive their own hat back is $E[X] = 1$, regardless of the value of $n$.

For $n=100$, the expected number of people who get their own hat back is still **1**.

This result is surprising because intuition might suggest that with more people, the proportion of people getting their own hat back should increase, or at least not remain constant. It seems like a small number for a large party. The surprise comes from overlooking that while the probability of any *single* person getting their hat back is very small ($1/n = 1/100$), there are many such individuals ($n=100$), and these small probabilities "sum up" in expectation to a constant value of 1. It highlights how linearity of expectation can provide elegant, non-intuitive results.

**4. Comparison Question:**
Consider the problem of finding the minimum cost path in a graph where edge weights can be negative. Would a greedy approach or dynamic programming be more suitable? Justify your answer.

**Answer:**
A greedy approach is generally *not* suitable for finding the minimum cost path when edge weights can be negative. Greedy algorithms make locally optimal choices. If there's a negative edge, taking that edge might seem bad initially (or good, if you want minimum cost, but it might lead you down a path that forces you to take very costly positive edges later). A situation could arise where taking a slightly longer path initially, that includes a negative edge, ultimately leads to a much smaller overall cost than the path chosen by a greedy algorithm.

**Dynamic Programming** is highly suitable for this. Algorithms like the Bellman-Ford algorithm are based on dynamic programming principles. They work by iteratively finding the shortest paths of increasing length. By considering all possible intermediate nodes and path lengths, they can correctly account for the impact of negative edge weights (and even detect negative cycles, which a simple greedy approach would likely miss or misinterpret). This directly relates to Course Outcome CO3, using effective algorithms.

---

That concludes our exploration of greedy algorithms, their comparison with dynamic programming, and the introduction to randomized approaches. Remember these concepts as we move forward – they are foundational for building efficient and insightful computational solutions!
