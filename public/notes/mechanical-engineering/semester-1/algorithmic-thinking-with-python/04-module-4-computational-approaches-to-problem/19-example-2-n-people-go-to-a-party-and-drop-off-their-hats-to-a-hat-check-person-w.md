---
title: "- Example 2: n people go to a party and drop off their hats to a hat-check person. When the party is over, a different hat-check person is on duty and returns the n hats randomly back to each person. What is the expected number of people who get back their hats"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 4: COMPUTATIONAL APPROACHES TO PROBLEM"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1e0bca560598cfa34ab9"
status: "completed"
scrapedAt: "2026-05-20T17:36:52.882Z"
---
# Module 4: Computational Approaches to Problem Solving

## Topic: The Hat-Check Problem - Expected Value of Matches

Welcome back, everyone! In this module, we're diving deeper into how we can use computational thinking to tackle fascinating problems. We've learned to model problems and design algorithms, and now we're going to explore a classic scenario that beautifully illustrates probability and expected value in action.

### 1. Understanding the Problem: A Confused Hat-Checker

Imagine this: You go to a party, and there are, say, five of your friends there with you. So, that's a total of *n = 5* people. You all hand over your hats to the hat-check person. The party is great, but when it's time to leave, there's a new, perhaps a bit flustered, hat-check person on duty. This new person, in a rush, randomly hands back a hat to each of the *n* people.

The question that intrigues us is: **What is the *expected* number of people who will get their own hat back?**

This isn't about a single instance of the hat distribution; it's about what we *expect* to happen on average over many, many such parties. This is where computational thinking, especially its probabilistic side, really shines.

**Connection to Course Outcomes:**

*   **CO1 (Utilize computing as a model for solving real-world problems):** This problem is a perfect example. We can model the hat distribution as a permutation, a fundamental concept in computer science and mathematics.
*   **CO2 (Articulate a problem before attempting to solve it and prepare a clear and accurate model):** Before we jump to code, we need to define what "getting your own hat back" means in terms of our model. It means a person *i* receives hat *i*.
*   **CO3 (Use effective algorithms to solve the formulated models and translate algorithms into executable programs):** While we'll explore the mathematical solution here, this problem can also be approached computationally through simulations, which requires algorithmic thinking.
*   **CO4 (Interpret problem-solving strategies and essential Python programming skills):** We'll be using logical reasoning and probability concepts, which are foundational to many computational problem-solving strategies.

### 2. Modeling the Hat Distribution: Permutations

How can we represent the act of randomly returning hats? Each person has a unique hat, and each hat belongs to a unique person. When the new hat-checker returns them, it's essentially an assignment: Person 1 gets Hat X, Person 2 gets Hat Y, and so on. Since it's random, any person could receive any hat, but each hat is given to exactly one person, and each person receives exactly one hat.

This scenario perfectly describes a **permutation**. A permutation of *n* items is an arrangement of those items in a specific order. In our case, if we label the people 1 to *n* and their hats 1 to *n*, then a permutation can represent the hat distribution. For example, if *n=3*, a permutation `[2, 1, 3]` means:
*   Person 1 gets Hat 2
*   Person 2 gets Hat 1
*   Person 3 gets Hat 3

In this example, Person 3 gets their own hat back. This is called a **fixed point** in the permutation – an element that remains in its original position. Our problem boils down to finding the expected number of fixed points in a random permutation of *n* items.

**Think about it:** If you have *n* people and *n* hats, how many different ways can the hats be returned randomly? This is *n!* (n factorial). For *n=3*, there are 3! = 6 possible ways:
*   [1, 2, 3] - 3 matches
*   [1, 3, 2] - 1 match (Person 1)
*   [2, 1, 3] - 1 match (Person 3)
*   [2, 3, 1] - 0 matches
*   [3, 1, 2] - 0 matches
*   [3, 2, 1] - 1 match (Person 2)

This enumeration is feasible for small *n*, but quickly becomes impossible for larger numbers. We need a more systematic approach.

### 3. The Power of Linearity of Expectation

This is where a brilliant mathematical concept called **Linearity of Expectation** comes in. It's a cornerstone in probability and a powerful tool for simplifying complex problems. The core idea is simple: **The expected value of a sum of random variables is the sum of their individual expected values, regardless of whether they are independent.**

Let's break this down for our hat problem. We want to find the expected number of people who get their own hat back. Let's define a few things:

*   Let $X$ be the random variable representing the total number of people who get their own hat back.
*   We can think of this total, $X$, as a sum of contributions from each person.
*   For each person $i$ (from 1 to *n*), let's define an **indicator random variable**, $I_i$.
    *   $I_i = 1$ if person $i$ gets their own hat back.
    *   $I_i = 0$ if person $i$ does *not* get their own hat back.

The total number of people who get their hat back is simply the sum of these indicator variables:
$X = I_1 + I_2 + \dots + I_n$

Now, by the linearity of expectation:
$E[X] = E[I_1 + I_2 + \dots + I_n]$
$E[X] = E[I_1] + E[I_2] + \dots + E[I_n]$

This is fantastic! We've broken down a complex problem (finding the expected value of a sum of dependent random variables) into simpler problems (finding the expected value of each individual indicator variable).

### 4. Calculating the Expected Value of an Indicator Variable

What is $E[I_i]$? The expected value of an indicator variable is simply the probability that the event it indicates occurs.
$E[I_i] = P(\text{person } i \text{ gets their own hat back})$

Consider person $i$. What is the probability that they receive their own hat?
There are *n* hats available, and person $i$ is equally likely to receive any of them. Only one of these hats is theirs. Therefore, the probability that person $i$ gets their own hat back is $1/n$.

So, $P(\text{person } i \text{ gets their own hat back}) = \frac{1}{n}$.
This means $E[I_i] = \frac{1}{n}$ for *every* person $i$.

**Why is this probability $1/n$ regardless of what happens to other people?**
This is a key insight. Even though the events "Person 1 gets their hat back" and "Person 2 gets their hat back" are *not independent* (if Person 1 gets Hat 1, then Person 2 cannot get Hat 1), the probability of *any single person* getting their own hat back remains $1/n$. Think of it as each person having an equal chance of being the one to get their hat correctly, irrespective of who else gets lucky. This is precisely why linearity of expectation is so powerful – it bypasses the need to understand the complex dependencies between these events.

### 5. The Grand Result: Summing It All Up

We have $E[I_i] = \frac{1}{n}$ for each of the *n* people.
Using linearity of expectation:
$E[X] = E[I_1] + E[I_2] + \dots + E[I_n]$
$E[X] = \frac{1}{n} + \frac{1}{n} + \dots + \frac{1}{n}$ (with *n* terms)

$E[X] = n \times \frac{1}{n}$
$E[X] = 1$

**This is astonishing! For any number of people, *n*, the expected number of people who get their own hat back is always 1.**

Whether you have 5 people, 50 people, or 500 people, on average, only one person will receive their own hat back. It’s a counter-intuitive but mathematically sound result. This elegantly demonstrates how computational thinking, by abstracting the problem and using fundamental mathematical principles, can yield powerful insights.

**Reference Touchpoint:** This concept is fundamental in introductory probability and often discussed in texts like those focusing on computational thinking and algorithms where probabilistic analysis is key. Guttag's "Introduction to Computation and Programming using Python" or Venkatesh & Mukund's "Computational Thinking: A Primer" would cover the mathematical underpinnings of such probabilistic models.

**Common Pitfall/Exam Tip:** Students often try to calculate the probability of *exactly* k people getting their hats back, which involves derangements and is much more complex. The trick for *expected value* questions in problems like this is almost always to look for linearity of expectation and indicator variables. Don't get bogged down in the complexity of the joint probabilities!

### 6. Verifying with a Small Example (n=3)

Let's revisit our *n=3* case to solidify our understanding.
People: P1, P2, P3. Hats: H1, H2, H3.
Possible permutations and matches:

1.  [1, 2, 3] - P1 gets H1, P2 gets H2, P3 gets H3. Matches: 3. ($I_1=1, I_2=1, I_3=1$)
2.  [1, 3, 2] - P1 gets H1, P2 gets H3, P3 gets H2. Matches: 1 (P1). ($I_1=1, I_2=0, I_3=0$)
3.  [2, 1, 3] - P1 gets H2, P2 gets H1, P3 gets H3. Matches: 1 (P3). ($I_1=0, I_2=0, I_3=1$)
4.  [2, 3, 1] - P1 gets H2, P2 gets H3, P3 gets H1. Matches: 0. ($I_1=0, I_2=0, I_3=0$)
5.  [3, 1, 2] - P1 gets H3, P2 gets H1, P3 gets H2. Matches: 0. ($I_1=0, I_2=0, I_3=0$)
6.  [3, 2, 1] - P1 gets H3, P2 gets H2, P3 gets H1. Matches: 1 (P2). ($I_1=0, I_2=1, I_3=0$)

Let's calculate the expected values for our indicator variables:
*   $E[I_1] = P(\text{P1 gets H1}) = \frac{1}{3}$ (from permutations 1 and 2)
*   $E[I_2] = P(\text{P2 gets H2}) = \frac{1}{3}$ (from permutations 1 and 6)
*   $E[I_3] = P(\text{P3 gets H3}) = \frac{1}{3}$ (from permutations 1 and 3)

Summing them up:
$E[X] = E[I_1] + E[I_2] + E[I_3] = \frac{1}{3} + \frac{1}{3} + \frac{1}{3} = 1$.

The formula holds!

### 7. Computational Approach: Simulation (Brief Mention)

While the mathematical derivation is elegant and direct, how would we approach this computationally if we didn't know the formula? We'd use simulation!

1.  **Model the permutation:** Create a list of numbers from 1 to *n*. Shuffle this list randomly. This represents the hats being returned.
2.  **Count matches:** Iterate through the shuffled list. If the element at index `i` (representing person `i+1`) is `i+1` (representing their own hat), increment a match counter.
3.  **Repeat many times:** Run this simulation a large number of times (e.g., 100,000 times).
4.  **Calculate average:** Sum up the match counts from all simulations and divide by the number of simulations.

This simulation would approximate the expected value, and as *n* grows, this approximation would converge towards 1. This is a powerful technique in computational thinking when analytical solutions are difficult.

**Connection to Course Outcomes:**
*   **CO3 (Use effective algorithms to solve the formulated models and translate algorithms into executable programs):** Simulation is an algorithmic approach.
*   **CO1 (Utilize computing as a model for solving real-world problems):** The simulation itself is a computational model for the hat-check problem.

### Summary and Key Takeaways

*   The hat-check problem is about finding the expected number of fixed points in a random permutation.
*   We model the problem using **indicator random variables**, where $I_i = 1$ if person *i* gets their hat, and $0$ otherwise.
*   The total number of matches is $X = \sum_{i=1}^{n} I_i$.
*   The key is **Linearity of Expectation**: $E[X] = \sum_{i=1}^{n} E[I_i]$.
*   The probability of any single person getting their own hat back is $P(I_i = 1) = 1/n$.
*   Therefore, $E[I_i] = 1/n$.
*   Summing these up, $E[X] = n \times (1/n) = 1$.

**Remember this:** The expected number of people who get their own hats back in a random distribution of *n* hats is always 1, regardless of *n*. This is a beautiful illustration of how powerful simple mathematical ideas can be when applied to complex-sounding problems.

---

## Sample Questions and Answers

**Conceptual Questions:**

1.  **What is a "fixed point" in the context of the hat-check problem?**
    *   **Answer:** A fixed point occurs when a person receives their own hat back. In the permutation model, it's an element that remains in its original position.
    *   **Reasoning:** This question tests the understanding of the mapping between the real-world problem and the mathematical model. The term "fixed point" is crucial in permutation theory.

2.  **Why is the probability of Person 1 getting their hat back the same as Person 2 getting their hat back in this problem?**
    *   **Answer:** In a random permutation, every person has an equal chance of receiving any specific hat. Since there are *n* hats and *n* people, and the distribution is random across all possibilities, any single person *i* has a $1/n$ chance of receiving their own hat, irrespective of the outcomes for other individuals. The crucial point is that the probability of *any specific* person getting their hat back is $1/n$, even though the events are not independent.
    *   **Reasoning:** This probes the understanding of probability in random permutations and addresses the potential confusion regarding independence. It highlights that individual probabilities can be straightforward even when joint probabilities are complex.

3.  **Explain the principle of Linearity of Expectation and why it's useful for solving the hat-check problem.**
    *   **Answer:** Linearity of Expectation states that the expected value of a sum of random variables is the sum of their individual expected values, regardless of their dependence. It's useful here because it allows us to break down the complex problem of finding the expected total number of matches into simpler sub-problems: finding the expected value for each person individually. This avoids the need to calculate complicated probabilities of multiple people getting their hats back simultaneously.
    *   **Reasoning:** This question tests the understanding of a core probabilistic principle and its application, directly linking it to the problem-solving strategy used.

**Exam-Oriented Questions:**

4.  **If 100 people attend a party and their hats are randomly returned, what is the expected number of people who will receive their own hat back?**
    *   **Answer:** 1
    *   **Reasoning:** This is a direct application of the derived formula $E[X] = 1$. The number of people, *n*, does not affect the expected value, which is always 1. This tests recall and direct application of the result.

5.  **Consider a party with *n* guests. If the hats are returned randomly, which statement about the expected number of people getting their own hat back is true?**
    a) It increases with *n*.
    b) It decreases with *n*.
    c) It is always equal to 1, regardless of *n*.
    d) It depends on the specific permutation that occurs.
    *   **Answer:** c) It is always equal to 1, regardless of *n*.
    *   **Reasoning:** This is a multiple-choice question designed to test comprehension of the final result and common misconceptions. Option (d) is incorrect because expected value is an average over all possible outcomes, not a specific outcome. Options (a) and (b) are incorrect because the expected value is constant.

6.  **Describe how you would use a computational simulation to estimate the expected number of people who get their hats back for n=10.**
    *   **Answer:**
        1.  Create a list representing 10 hats, e.g., `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.
        2.  Repeat the following process many times (e.g., 100,000 times):
            *   Randomly shuffle the list to simulate the random return of hats.
            *   Initialize a `matches_count` to 0.
            *   Iterate through the shuffled list from index 0 to 9. For each index `i`, if the value at `shuffled_list[i]` is `i + 1` (meaning person `i+1` got hat `i+1`), increment `matches_count`.
        3.  After all simulations, calculate the average number of matches by summing all `matches_count` values and dividing by the total number of simulations. This average will approximate the expected value.
    *   **Reasoning:** This question requires describing an algorithmic process (simulation). It tests the ability to translate the problem into a step-by-step computational procedure and highlights the practical application of computational thinking when analytical solutions are not immediately obvious or are being verified. It's also aligned with CO3.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
