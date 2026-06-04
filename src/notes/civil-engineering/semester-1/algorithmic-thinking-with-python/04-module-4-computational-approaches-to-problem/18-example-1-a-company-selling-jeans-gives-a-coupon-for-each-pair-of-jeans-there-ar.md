---
title: "- Example 1: A company selling jeans gives a coupon for each pair of jeans. There are n different coupons. Collecting n different coupons would give you free jeans. How many jeans do you expect to buy before getting a free one?"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 4: COMPUTATIONAL APPROACHES TO PROBLEM"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912b8f"
status: "completed"
scrapedAt: "2026-05-20T18:28:40.940Z"
---
# Module 4: Computational Approaches to Problems

## Topic: The Coupon Collector's Problem - An Expected Value Challenge

Welcome back, everyone! In this module, we're diving into the fascinating world of **Computational Approaches to Problems**. We've learned how algorithmic thinking is our superpower for tackling challenges, and today, we're going to explore a classic problem that beautifully illustrates this. It's a problem that sounds simple at first, but its solution involves some deep probabilistic thinking, which is a cornerstone of computer science and data analysis.

Think about it: as programmers and problem-solvers, we often need to estimate how long a process will take, or how many attempts we might need to achieve a certain outcome. This problem gives us a tangible way to think about those kinds of questions.

### The Scenario: Collecting Jeans Coupons

Let's set the scene. Imagine a company selling jeans. For every pair of jeans you buy, you get a coupon. Now, there are *n* different types of coupons. If you collect a full set of all *n* distinct coupons, you get a free pair of jeans! The exciting question we want to answer is: **How many pairs of jeans do you expect to buy before you finally complete your collection and get that free pair?**

This is a perfect example of a real-world scenario that can be modeled computationally. It’s often called the **Coupon Collector's Problem**. It’s a fantastic problem to understand because it touches on ideas of probability, expected value, and how to approach problems that involve collecting unique items from a random set.

### Connecting to Course Outcomes

Before we crunch the numbers, let's see how this relates to our learning journey:

*   **CO1: Utilize computing as a model for solving real-world problems.** This problem *is* the real world! We're using mathematical and computational models to predict an outcome in a consumer scenario. (Knowledge Level: K2 - Understanding the application)
*   **CO2: Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem.** We've just articulated the problem. Now, we need to build a mathematical model for it. This involves defining our variables and the process. (Knowledge Level: K3 - Applying the ability to articulate and model)
*   **CO3: Use effective algorithms to solve the formulated models and translate algorithms into executable programs.** While we won't be writing Python code for this specific theoretical derivation, the *logic* we develop here is the foundation for any simulation or algorithm we might write later to *test* this problem or find approximate solutions. (Knowledge Level: K3 - Applying problem-solving strategies)
*   **CO4: Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills.** The systematic approach we'll take here – breaking down the problem into smaller, manageable steps – is exactly what we do when designing algorithms. (Knowledge Level: K2 - Recalling and understanding problem-solving strategies)

### Understanding Expected Value

At the heart of this problem is the concept of **expected value**. What does that mean? In probability, the expected value of a random variable is the weighted average of all possible values that the variable can take on. Think of it as the average outcome if you were to repeat the experiment (in our case, buying jeans) an infinite number of times.

A classic reference for problem-solving, George Pólya's "How to Solve It," emphasizes understanding the problem thoroughly. Here, understanding "expected value" is crucial. It's not necessarily the *most likely* number of jeans you'll buy, but the average number over many, many attempts.

### Breaking Down the Problem: A Step-by-Step Approach

The key to solving complex problems, as Pólya would advise, is to break them down. Instead of thinking about collecting all *n* coupons at once, let's think about the process sequentially:

1.  **Buying the first pair of jeans:** You're guaranteed to get a *new* coupon, your first unique one. So, that takes **1** purchase.
2.  **Collecting the second unique coupon:** Now you have 1 unique coupon. There are *n-1* coupons you *don't* have. When you buy another pair of jeans, the probability of getting a *new* coupon (one you don't already have) is $(n-1)/n$. The probability of getting a duplicate is $1/n$.
3.  **Collecting the k-th unique coupon:** Suppose you currently have $k-1$ unique coupons. There are $n - (k-1)$ coupons you *still* need. When you buy another pair of jeans, the probability of getting one of the *new* coupons you need is $\frac{n - (k-1)}{n}$.

This seems like a good place to pause and reflect. Maureen Sprankle and Jim Hubbard, in "Problem Solving & Programming Concepts," stress the importance of identifying patterns and recurring structures. This sequential approach reveals such a pattern.

### The Mathematics of Expectation

Let $X$ be the total number of jeans we expect to buy to collect all *n* unique coupons. We can think of $X$ as the sum of the number of jeans bought to get the first unique coupon, then the number of jeans to get the second unique coupon *after* you have the first, and so on, until you get the *n*-th unique coupon after having $n-1$ unique ones.

Let $X_i$ be the number of jeans we buy to get the $i$-th *new* coupon, given that we already have $i-1$ unique coupons.
So, $X = X_1 + X_2 + \dots + X_n$.

By the linearity of expectation, $E[X] = E[X_1] + E[X_2] + \dots + E[X_n]$.

Now, let's figure out $E[X_i]$, the expected number of purchases to get the $i$-th new coupon, given we have $i-1$ unique ones.

*   **To get the 1st unique coupon ($i=1$):**
    You have 0 unique coupons. Any coupon you get is new. The probability of getting a new coupon is $n/n = 1$.
    The expected number of trials to get an event with probability $p$ is $1/p$.
    So, $E[X_1] = 1 / (n/n) = 1$. This makes sense, right? You buy one, you get your first unique coupon.

*   **To get the 2nd unique coupon ($i=2$):**
    You have 1 unique coupon. There are $n-1$ coupons you still need.
    The probability of getting a *new* coupon is $\frac{n-1}{n}$.
    So, $E[X_2] = 1 / \frac{n-1}{n} = \frac{n}{n-1}$.

*   **To get the 3rd unique coupon ($i=3$):**
    You have 2 unique coupons. There are $n-2$ coupons you still need.
    The probability of getting a *new* coupon is $\frac{n-2}{n}$.
    So, $E[X_3] = 1 / \frac{n-2}{n} = \frac{n}{n-2}$.

*   **Generalizing for the i-th unique coupon:**
    You have $i-1$ unique coupons. There are $n-(i-1)$ coupons you still need.
    The probability of getting a *new* coupon is $\frac{n-(i-1)}{n}$.
    So, $E[X_i] = 1 / \frac{n-(i-1)}{n} = \frac{n}{n-(i-1)}$.

Now, to find the total expected number of jeans, $E[X]$, we sum up these expected values:

$E[X] = E[X_1] + E[X_2] + \dots + E[X_n]$
$E[X] = \frac{n}{n} + \frac{n}{n-1} + \frac{n}{n-2} + \dots + \frac{n}{1}$

We can factor out $n$:

$E[X] = n \left( \frac{1}{n} + \frac{1}{n-1} + \frac{1}{n-2} + \dots + \frac{1}{1} \right)$

Rearranging the terms within the parentheses, we get:

$E[X] = n \left( 1 + \frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{n} \right)$

This sum, $1 + \frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{n}$, is a famous mathematical series called the **n-th Harmonic Number**, denoted as $H_n$.

So, the expected number of jeans you need to buy is:

$$ E[X] = n \cdot H_n $$

### The Harmonic Series: A Deeper Look

This Harmonic Series, $H_n$, is where things get really interesting. It grows very slowly. For large values of *n*, $H_n$ is approximately equal to $\ln(n) + \gamma$, where $\ln$ is the natural logarithm and $\gamma$ (gamma) is the Euler-Mascheroni constant, approximately 0.57721.

So, for a large number of coupons, the expected number of jeans to buy is roughly $n(\ln(n) + \gamma)$.

This is a key insight. It means that to double the number of coupons, you don't double the number of jeans; the increase is much slower, due to the logarithmic growth. This is a good point to remember for interviews or exams: the Coupon Collector's Problem demonstrates sub-linear growth in expectation with respect to the number of unique items.

This kind of analysis is super important in computer science. Think about hash tables, where you're trying to insert unique keys. The "cost" of finding an empty slot or dealing with collisions can be analyzed using similar probabilistic models. John V. Guttag's "Introduction to Computation and Programming using Python" often uses such examples to build intuition for algorithm analysis.

### A Relatable Example

Let's say there are $n=3$ types of coupons: A, B, C.

We want to find the expected number of jeans to buy. Using our formula:
$E[X] = 3 \times H_3 = 3 \times (1 + \frac{1}{2} + \frac{1}{3})$
$E[X] = 3 \times (\frac{6}{6} + \frac{3}{6} + \frac{2}{6})$
$E[X] = 3 \times \frac{11}{6} = \frac{33}{6} = 5.5$

So, on average, you'd expect to buy 5.5 pairs of jeans.

Let's trace this step-by-step to build intuition:

*   **Getting the 1st unique coupon:** Probability = 3/3 = 1. Expected buys = 1. (You buy 1, get A, B, or C).
*   **Getting the 2nd unique coupon (after having 1):**
    Suppose you have coupon A. You need B or C.
    Probability of getting B or C = 2/3.
    Expected buys to get the 2nd unique = $1 / (2/3) = 3/2 = 1.5$.
*   **Getting the 3rd unique coupon (after having 2):**
    Suppose you have coupons A and B. You need C.
    Probability of getting C = 1/3.
    Expected buys to get the 3rd unique = $1 / (1/3) = 3$.

Total expected buys = $1 + 1.5 + 3 = 5.5$. Exactly what our formula gave us! Isn't that neat?

### What if we simulate this?

This is where Python for Everyone by Cay S. Horstmann or Computational Thinking by G Venkatesh and Madhavan Mukund would come in handy. We could write a Python script to simulate this process many times.

Imagine a function `collect_coupons(n)`:
1.  Initialize an empty set `collected_coupons`.
2.  Initialize `jeans_bought = 0`.
3.  While `len(collected_coupons) < n`:
    a.  Generate a random coupon from 1 to `n`.
    b.  Add it to `collected_coupons`.
    c.  Increment `jeans_bought`.
4.  Return `jeans_bought`.

Then, we could call this function, say, 10,000 times and average the results. We'd expect this average to be very close to $n \cdot H_n$. This is a powerful way to understand concepts – not just mathematically, but also by building and testing computational models. This ties directly into CO1 and CO3.

### Common Pitfalls and Exam Tips

*   **Confusing expected value with the most probable outcome:** Remember, expected value is an average. You might get lucky and finish in 10 purchases, or unlucky and take 20, but the average over many trials will converge to $n \cdot H_n$.
*   **Misunderstanding the probability at each step:** The key is that the probability of getting a *new* coupon changes as you collect more. It's not a constant probability.
*   **Forgetting the Harmonic Series:** The formula $n \cdot H_n$ is the standard answer. While you might be asked to *derive* it or *explain* the components, knowing the final form is crucial.
*   **Approximation for large n:** If asked to estimate for a very large *n*, use the $\ln(n) + \gamma$ approximation.

### Summary

The Coupon Collector's Problem is a foundational example in computational thinking. It teaches us to:

*   **Model a real-world problem using mathematical concepts.** (CO1)
*   **Break down a complex problem into sequential, manageable steps.** (CO2, CO4)
*   **Understand and apply the concept of expected value.**
*   **Recognize and utilize mathematical series like the Harmonic Series.**
*   **See the connection between theoretical analysis and practical simulation.** (CO3)

The expected number of jeans to buy to collect *n* unique coupons is $n \times (1 + \frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{n})$.

Remember this: this problem highlights how even seemingly simple scenarios can involve intricate probabilistic behavior, and how systematic, step-by-step reasoning is essential for finding solutions.

---

### Sample Questions and Answers

**Conceptual Question 1:** Explain in your own words why the probability of getting a *new* coupon decreases as you collect more unique coupons.

**Answer:** As you collect more distinct coupons, the pool of coupons you *haven't* collected yet gets smaller. Since you get one coupon for each pair of jeans, the chance of landing on one of the remaining, uncollected coupons becomes proportionally smaller compared to the total number of coupon types available. For example, when you have $n-1$ unique coupons, there's only 1 coupon left you need. The probability of getting that specific coupon is $1/n$. When you only had 0 coupons, any of the $n$ coupons were new, so the probability was $n/n=1$.

**Exam-Oriented Question 2:** A coffee shop offers 5 different collectible mugs with every purchase of a large coffee. If you want to collect all 5 different mugs, how many large coffees do you expect to buy?

**Answer:**
This is an instance of the Coupon Collector's Problem with $n=5$.
The expected number of coffees to buy is given by $E[X] = n \cdot H_n$.
Here, $n=5$.
We need to calculate $H_5 = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5}$.

Let's find a common denominator:
$H_5 = \frac{60}{60} + \frac{30}{60} + \frac{20}{60} + \frac{15}{60} + \frac{12}{60} = \frac{60 + 30 + 20 + 15 + 12}{60} = \frac{137}{60}$.

Now, multiply by $n=5$:
$E[X] = 5 \times \frac{137}{60} = \frac{137}{12}$.

To express this as a decimal:
$E[X] \approx 11.417$.

Therefore, you expect to buy approximately 11.417 coffees to collect all 5 different mugs.

**Conceptual Question 3:** How does the Coupon Collector's Problem relate to the concept of "algorithmic thinking" that we've been discussing?

**Answer:** Algorithmic thinking involves breaking down a problem into a sequence of well-defined steps. In the Coupon Collector's Problem, we don't just jump to the final answer. We think about the process sequentially: getting the first unique coupon, then the second, and so on. This step-by-step approach, focusing on the probability of success at each stage and summing the expected times, is a direct application of algorithmic thinking. It's about understanding the process, not just the outcome, which is fundamental to designing algorithms that solve problems efficiently. This also relates to CO4, understanding systematic approaches.
