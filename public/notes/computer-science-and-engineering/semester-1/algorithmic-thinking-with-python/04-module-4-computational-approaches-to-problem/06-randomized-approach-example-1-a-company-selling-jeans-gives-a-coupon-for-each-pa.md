---
title: "Randomized Approach - Example 1: A company selling jeans gives a coupon for each pair of jeans. There are n different coupons. Collecting n different coupons would give you free jeans. How many jeans do you expect to buy before getting a free  one?"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 4: COMPUTATIONAL APPROACHES TO PROBLEM"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5cb2"
status: "completed"
scrapedAt: "2026-05-20T16:36:39.382Z"
---
# ALGORITHMIC THINKING WITH PYTHON

## Module 4: COMPUTATIONAL APPROACHES TO PROBLEM SOLVING

### Topic: Randomized Approach - Example 1: The Coupon Collector's Problem

Welcome, everyone, to Module 4! Today, we're diving into a fascinating area of algorithmic thinking: **Randomized Approaches**. Instead of relying on a deterministic, step-by-step method that always yields the same result for the same input, randomized approaches introduce an element of chance. This might sound counterintuitive at first – how can we solve problems reliably if there's randomness involved? But as we'll see, randomness can be incredibly powerful, especially when dealing with problems that are complex or where a precise, deterministic solution is hard to find or computationally expensive.

Our exploration of randomized approaches begins with a classic and surprisingly relatable problem: **The Coupon Collector's Problem**. Think about it: have you ever collected something where you get one item at a time, and you're trying to get a complete set of different items? Maybe it was trading cards, stickers in a cereal box, or, as in our example, coupons from a jeans company.

### The Jeans Coupon Scenario

Imagine a company that sells jeans. With every pair of jeans you buy, they give you a coupon. There are a total of *n* different types of coupons. The goal? To collect all *n* unique coupons. Once you have one of each type, you get a free pair of jeans!

The million-dollar question is: **How many jeans do you expect to buy before you finally get a complete set of all *n* different coupons?**

This is a perfect scenario to illustrate a randomized approach because:

*   **The outcome is uncertain:** We don't know which coupon we'll get next. It's purely random.
*   **We're looking for an expected value:** We're not asking for a guaranteed number of purchases, but rather the average number we'd expect over many, many attempts. This is a hallmark of problems that can be tackled with probabilistic or randomized thinking.

This problem ties directly into our course objectives:

*   **CO1 (Utilize computing as a model for solving real-world problems):** This coupon collection scenario is a real-world situation (collecting items) that we can model and solve using computational thinking.
*   **CO2 (Articulate a problem before attempting to solve it):** We've just articulated the problem: collecting *n* unique coupons, and we want to find the expected number of purchases.
*   **CO3 (Utilize effective algorithms to solve the formulated models):** We'll explore how to *simulate* this process and use probability to *calculate* the expected value. This involves developing an understanding of the underlying mathematical model.
*   **CO4 (Interpret problem-solving strategies):** The randomized approach itself is a powerful strategy. We'll learn how to think about problems where randomness plays a role and how to derive solutions from it.

### Understanding the "Expected Value"

Before we jump into solving it, let's clarify what "expected value" means. In probability, the expected value (often denoted as E[X]) of a random variable is the weighted average of all possible values that the variable can take. It's what you'd expect to get, on average, if you repeated an experiment many, many times.

Think of rolling a fair six-sided die. The possible outcomes are 1, 2, 3, 4, 5, 6. Each has a probability of 1/6. The expected value of a single roll is:
E[Roll] = (1 * 1/6) + (2 * 1/6) + (3 * 1/6) + (4 * 1/6) + (5 * 1/6) + (6 * 1/6) = (1+2+3+4+5+6)/6 = 21/6 = 3.5.
You'll never actually roll a 3.5, but if you roll the die thousands of times, the average of all your rolls will get very close to 3.5.

This concept of expected value is crucial for the Coupon Collector's Problem. We're not trying to predict exactly how many jeans *you* will buy, but rather, if we had 100 people collecting coupons, what would be the average number of jeans they all bought to complete their sets?

### Approaching the Problem: A Tale of Two Methods

There are generally two ways to tackle problems like this in computational thinking:

1.  **Simulation (Monte Carlo Method):** We can write a program to "play" this game many times. Each time, we simulate buying jeans, randomly picking coupons until we get all *n* unique ones. We record how many jeans we bought in each simulation and then calculate the average. This is a powerful technique, especially when analytical solutions are complex.
2.  **Analytical Solution (Probability Theory):** We can use mathematical principles, specifically probability, to derive a formula for the expected number of purchases. This gives us a precise answer without running simulations.

For this particular problem, both approaches are insightful, and understanding both is valuable. Let's start with the analytical approach, as it builds a strong foundation.

### The Analytical Solution: Breaking it Down

This is where we might lean on concepts from probability theory, similar to how George Pólya in *How to Solve It* encourages us to break down complex problems into smaller, manageable parts.

Let's think about the *stages* of collecting coupons:

*   **Stage 0:** You have 0 unique coupons. You buy your first pair of jeans. You are guaranteed to get a *new* coupon (since you had none before). So, the first coupon takes **1 purchase**.
*   **Stage 1:** You now have 1 unique coupon. There are *n-1* coupons you *don't* have yet. When you buy another pair of jeans, what's the probability of getting a *new* coupon?
    *   There are *n* total coupons, and you already have 1.
    *   So, there are *n-1* coupons that are "new" to you.
    *   The probability of getting a new coupon is **(n-1) / n**.
    *   What's the probability of getting a coupon you *already have*? It's **1 / n**.

This is where the concept of **Geometric Distribution** comes into play. The geometric distribution describes the number of Bernoulli trials needed to get the first success. In our case, a "success" is getting a new, unique coupon.

If the probability of success (getting a new coupon) is *p*, the expected number of trials to get the first success is **1/p**.

Let's apply this to our stages:

1.  **From 0 unique coupons to 1 unique coupon:**
    *   Number of coupons to collect: *n*.
    *   You have 0 unique coupons.
    *   Probability of getting a new coupon (any coupon): $p_1 = n/n = 1$.
    *   Expected purchases to get the first unique coupon: $E_1 = 1/p_1 = 1/1 = 1$. This makes sense – your first purchase *always* gives you a new coupon.

2.  **From 1 unique coupon to 2 unique coupons:**
    *   You now have 1 unique coupon.
    *   There are *n-1* coupons you *don't* have.
    *   Probability of getting a new coupon: $p_2 = (n-1) / n$.
    *   Expected purchases to get the second unique coupon (given you have the first): $E_2 = 1/p_2 = n / (n-1)$.

3.  **From 2 unique coupons to 3 unique coupons:**
    *   You now have 2 unique coupons.
    *   There are *n-2* coupons you don't have.
    *   Probability of getting a new coupon: $p_3 = (n-2) / n$.
    *   Expected purchases to get the third unique coupon: $E_3 = 1/p_3 = n / (n-2)$.

...and so on.

This continues until we reach the final stage:

*   **From (n-1) unique coupons to n unique coupons:**
    *   You have *n-1* unique coupons.
    *   There is only 1 coupon you don't have.
    *   Probability of getting this last new coupon: $p_n = 1 / n$.
    *   Expected purchases to get the *n*-th unique coupon: $E_n = 1/p_n = n / 1 = n$.

The **total expected number of jeans you need to buy** to get all *n* coupons is the sum of the expected purchases at each stage:

$E_{total} = E_1 + E_2 + E_3 + \dots + E_n$

$E_{total} = 1 + \frac{n}{n-1} + \frac{n}{n-2} + \dots + \frac{n}{2} + \frac{n}{1}$

We can factor out *n* from most terms:

$E_{total} = 1 + n \left( \frac{1}{n-1} + \frac{1}{n-2} + \dots + \frac{1}{2} + \frac{1}{1} \right)$

This expression can be rewritten more compactly. Notice that the sum is $n \times (\frac{1}{1} + \frac{1}{2} + \dots + \frac{1}{n-1})$. If we add $\frac{1}{n}$ to this sum, we get the $n$-th Harmonic number, denoted $H_n$.

So, the expected number of purchases is:

$E_{total} = n \left( \frac{1}{n} + \frac{1}{n-1} + \frac{1}{n-2} + \dots + \frac{1}{1} \right) = n \sum_{i=1}^{n} \frac{1}{i}$

$E_{total} = n \cdot H_n$

Where $H_n$ is the $n$-th Harmonic Number.

**Remember this formula!** It's a classic result. The Harmonic Series ($1 + 1/2 + 1/3 + \dots$) grows very slowly but does grow indefinitely. For large *n*, $H_n$ is approximately $\ln(n) + \gamma$, where $\gamma$ is the Euler-Mascheroni constant (approximately 0.577).

So, for very large *n*, the expected number of jeans is roughly $n(\ln(n) + \gamma)$.

### A Small Example: n=3 Coupons

Let's see this in action. Suppose there are **n=3** different coupons.

*   **Stage 0 to 1:** You have 0 coupons. Any of the 3 is new. Probability of new = 3/3 = 1. Expected purchases = 1.
*   **Stage 1 to 2:** You have 1 unique coupon. 2 are new. Probability of new = 2/3. Expected purchases = 1 / (2/3) = 3/2 = 1.5.
*   **Stage 2 to 3:** You have 2 unique coupons. 1 is new. Probability of new = 1/3. Expected purchases = 1 / (1/3) = 3.

Total expected purchases = $1 + 1.5 + 3 = 5.5$.

Using the formula: $E_{total} = n \cdot H_n = 3 \cdot (1/1 + 1/2 + 1/3) = 3 \cdot (6/6 + 3/6 + 2/6) = 3 \cdot (11/6) = 33/6 = 5.5$.
It matches! This shows the power of breaking down the problem into sequential stages.

This analytical approach is a prime example of how we can use probability and mathematical modeling to solve problems, aligning with **CO1** and **CO3**. It also demonstrates a structured way to think about probabilistic scenarios, fitting **CO2** and **CO4**.

### The Simulation Approach: Let's Play the Game!

Now, let's think about how we could simulate this using Python. This is where **CO1** and **CO3** really shine – using computation to model and solve.

The core idea of a simulation is to mimic the real-world process. We'll need:

1.  A way to represent the coupons.
2.  A way to simulate buying a pair of jeans and getting a random coupon.
3.  A way to keep track of which coupons we've collected.
4.  A loop to repeat the process until we have all unique coupons.
5.  A way to count the purchases.
6.  A way to repeat the entire simulation many times and average the results.

Let's sketch out the logic for **one simulation**:

*   **Initialize:**
    *   `n_coupons_total = 3` (let's use our small example for clarity)
    *   `collected_coupons = set()`  (A set is perfect for storing unique items)
    *   `purchases_made = 0`

*   **The Loop:** We continue as long as we haven't collected all unique coupons.
    *   `while len(collected_coupons) < n_coupons_total:`
        *   **Simulate a purchase:** `purchases_made += 1`
        *   **Get a random coupon:** We can represent coupons as numbers from 1 to `n_coupons_total`.
            *   `import random`
            *   `new_coupon = random.randint(1, n_coupons_total)`
        *   **Add to our collection:** `collected_coupons.add(new_coupon)` (Sets automatically handle duplicates, so adding an already present coupon does nothing).

*   **Result of one simulation:** `purchases_made`

Now, to get an *expected* value, we repeat this many times (e.g., 10,000 times) and average the `purchases_made` from each simulation.

```python
import random

def simulate_coupon_collector(n):
    """Simulates one run of the coupon collector's problem."""
    collected_coupons = set()
    purchases_made = 0
    while len(collected_coupons) < n:
        purchases_made += 1
        # Simulate getting a coupon from 1 to n
        new_coupon = random.randint(1, n)
        collected_coupons.add(new_coupon)
    return purchases_made

def run_multiple_simulations(n, num_simulations):
    """Runs multiple simulations and returns the average number of purchases."""
    total_purchases = 0
    for _ in range(num_simulations):
        total_purchases += simulate_coupon_collector(n)
    return total_purchases / num_simulations

# Example usage:
n_types = 3
number_of_simulations = 10000
average_purchases = run_multiple_simulations(n_types, number_of_simulations)
print(f"For n = {n_types} coupons, expected purchases (simulated): {average_purchases:.2f}")

# Analytical result for comparison:
# Using math.log for ln and math.gamma for Euler-Mascheroni for large n approx.
import math
harmonic_number = sum(1/i for i in range(1, n_types + 1))
analytical_expected = n_types * harmonic_number
print(f"For n = {n_types} coupons, expected purchases (analytical): {analytical_expected:.2f}")

```

When you run this code, you'll see that the simulated average gets quite close to the analytical value (5.5 for n=3). The more simulations you run, the closer the simulated average will likely be to the true expected value, demonstrating the law of large numbers.

This simulation approach is a brilliant way to solve problems where analytical solutions are hard to find or understand, as highlighted in "Computational Thinking: A Primer for Programmers and Data Scientists" by G. Venkatesh Madhavan Mukund. It directly uses computing to model a real-world scenario, fulfilling **CO1**. Developing this simulation code requires translating the logic into Python, hitting **CO3** and **CO4**.

### Why Use Randomized Approaches?

So, why go through all this trouble with randomness?

1.  **Simplicity for Complex Problems:** Sometimes, the analytical solution to a problem is incredibly complex or even impossible to derive. Simulation provides a straightforward way to get an approximate answer. Think about incredibly complex systems where predicting every single interaction deterministically would be overwhelming.
2.  **Dealing with Uncertainty:** Many real-world phenomena are inherently random. Stock prices, customer arrivals, radioactive decay – these cannot be perfectly predicted. Randomized algorithms are designed precisely to handle this uncertainty.
3.  **Efficiency:** In some cases, a randomized algorithm might be *faster* on average than the best known deterministic algorithm. While one run might be unlucky, over many runs or averaged over inputs, it can be superior.
4.  **Understanding Probabilistic Behavior:** As we saw with the coupon collector, simulation helps us build intuition about probabilistic processes. It's a hands-on way to see probability in action, much like Maureen Sprankle and Jim Hubbard's "Problem Solving & Programming Concepts" emphasizes understanding the underlying principles.

When you're asked to design an algorithm for a problem that involves chance, or where an approximate answer is acceptable and a deterministic approach is too slow, a randomized approach is your go-to.

### Key Takeaways for Exams and Concepts

*   **Coupon Collector's Problem:** Be familiar with the problem statement and the goal: finding the *expected* number of trials to collect *n* unique items.
*   **Expected Value:** Understand what expected value means – it's an average over many trials.
*   **Analytical Solution:** Know the formula $E = n \sum_{i=1}^{n} \frac{1}{i} = n H_n$. Be prepared to explain how it's derived by summing expected times for each "new" coupon stage. You might be asked to calculate it for small *n*.
*   **Simulation (Monte Carlo):** Understand the concept of simulating a random process many times and averaging the results to estimate an expected value. Be ready to describe the logic of such a simulation.
*   **When to Use:** Randomized approaches are useful when problems have inherent randomness, deterministic solutions are too complex, or efficiency gains are possible.

This problem elegantly connects to all the course outcomes. We're modeling a real-world scenario (CO1), breaking down the problem into stages (CO2), using probability theory and simulation as algorithmic strategies (CO3), and developing computational thinking skills (CO4).

### Sample Questions and Answers

**Q1: What is the core idea behind the Coupon Collector's Problem?**

**Answer:** The core idea is to determine the expected number of purchases (or trials) required to collect a complete set of *n* distinct items, where each purchase yields one item chosen randomly and independently from the *n* types.

**Q2: If there are 5 different coupons, what is the expected number of jeans you need to buy to collect all 5 unique coupons, based on the analytical solution?**

**Answer:**
The analytical solution is $E = n \sum_{i=1}^{n} \frac{1}{i}$.
For $n=5$, this is:
$E = 5 \times (1/1 + 1/2 + 1/3 + 1/4 + 1/5)$
$E = 5 \times (60/60 + 30/60 + 20/60 + 15/60 + 12/60)$
$E = 5 \times (137/60)$
$E = 685/60 = 11.4167$ (approximately)

So, you expect to buy about 11.42 pairs of jeans.

**Q3: Describe the general steps you would take to simulate the coupon collector's problem in Python.**

**Answer:**
1.  **Initialization:** Set the total number of unique coupons ($n$), initialize an empty collection (e.g., a set) to store unique coupons found, and initialize a counter for purchases made.
2.  **Simulation Loop:** Continue the process as long as the number of unique coupons collected is less than $n$.
3.  **Simulate Purchase:** Increment the purchase counter.
4.  **Random Coupon Selection:** Generate a random integer between 1 and $n$ (inclusive) to represent the coupon received.
5.  **Add to Collection:** Add the newly obtained coupon to the collection. Sets automatically handle duplicates, ensuring only unique coupons are stored.
6.  **Repeat:** Once the loop finishes (meaning all $n$ unique coupons are collected), the value of the purchase counter is the result of that single simulation.
7.  **Averaging:** To estimate the expected value, repeat steps 1-6 many times (e.g., 10,000 times) and calculate the average of the purchase counts obtained from each simulation.

**Q4: Is the Coupon Collector's Problem a deterministic or randomized problem? Explain why.**

**Answer:** The Coupon Collector's Problem is a **randomized problem**. This is because the outcome of each purchase (which coupon is received) is based on chance. While the total number of coupon types (*n*) is fixed, the sequence of coupons obtained and the exact number of purchases needed to complete the set can vary from one attempt to another due to the random nature of coupon distribution. We are interested in the *expected* number of purchases, which is a statistical average over many random trials.

That concludes our introduction to the Coupon Collector's Problem and the power of randomized approaches. Keep these concepts in mind as we explore more computational strategies!
