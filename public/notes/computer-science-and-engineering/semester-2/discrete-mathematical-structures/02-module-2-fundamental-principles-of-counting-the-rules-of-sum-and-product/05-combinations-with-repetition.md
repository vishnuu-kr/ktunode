---
title: "Combinations with Repetition"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 2: Fundamental Principles of Counting: The Rules of Sum and Product"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b6003"
status: "completed"
scrapedAt: "2026-05-20T16:31:51.032Z"
---
# DISCRETE MATHEMATICAL STRUCTURES
## Module 2: Fundamental Principles of Counting: The Rules of Sum and Product
### Topic: Combinations with Repetition

Hello everyone, and welcome back to our journey through the fascinating world of Discrete Mathematical Structures! In this session, we’re going to delve into a very important and surprisingly intuitive concept within our counting principles: **Combinations with Repetition**. You might have already encountered basic combinations (where order doesn't matter and you can't pick the same item twice). Today, we’ll unlock a new dimension where those restrictions are lifted – you can pick the same item multiple times!

This topic is absolutely crucial for building your understanding of combinatorial analysis, directly linking to our **Course Outcome 2 (CO2)**: "Apply fundamental counting principles, including permutations, combinations, and the pigeonhole principle, to solve problems related to combinatorial analysis and discrete structures." Combinations with repetition are a powerful tool in your arsenal for solving a wide range of problems, from distributing identical items to forming certain types of sequences.

### 1. Revisiting the Basics: What are Combinations?

Before we jump into repetition, let's quickly refresh our memory about standard combinations, often called "combinations without repetition."

Imagine you have a set of distinct items, say $n$ of them. You want to choose a subset of these items, and the order in which you pick them **does not matter**. For example, if you're choosing 3 fruits from a basket containing apples, bananas, and oranges, picking an apple, then a banana, then an orange is the same as picking a banana, then an orange, then an apple. It's the same group of fruits.

The formula for this, as you’ll find in many standard texts like Grimaldi & Ramana, is given by the binomial coefficient:

$$ \binom{n}{k} = \frac{n!}{k!(n-k)!} $$

where $n$ is the total number of distinct items to choose from, and $k$ is the number of items you are choosing.

**Think of it like this:** You're selecting a committee of $k$ people from a group of $n$ people. The order in which you select them doesn't change the composition of the committee.

### 2. Introducing the Twist: Repetition Allowed!

Now, what happens when we can pick the same item more than once? This is where combinations with repetition come into play.

**The Core Idea:** We are selecting $k$ items from a set of $n$ distinct types of items, and we can select any type of item multiple times. The order of selection still *doesn't matter*.

Let's use a relatable example to really get a feel for this.

**Example: Choosing Donuts!**

Suppose you go to a donut shop that offers $n=5$ different types of donuts: glazed, chocolate, sprinkle, jelly, and plain. You want to buy a box of $k=3$ donuts. You can pick any combination of these 5 types, and you can have multiples of the same type.

So, some possible selections are:
*   3 glazed donuts
*   1 glazed, 1 chocolate, 1 sprinkle
*   2 glazed, 1 jelly
*   1 chocolate, 2 sprinkle

See how the order doesn't matter? Having a glazed and two sprinkles is the same as having two sprinkles and a glazed.

This is precisely what combinations with repetition are about. We are choosing $k$ items from $n$ categories, with replacement, and without regard to order.

### 3. The Stars and Bars Method: Our Powerful Tool

How do we count these possibilities? This is where a brilliant technique called the **"Stars and Bars"** method comes in. It's a visual and intuitive way to map our problem to something we can count.

Imagine our $k$ donuts are represented by $k$ "stars" (*). To separate them into the $n$ different types (categories), we need dividers. How many dividers do we need? If we have $n$ types, we need $n-1$ dividers to create $n$ distinct bins.

**Let’s apply this to our donut example ($n=5$ types, $k=3$ donuts):**

We have 3 stars: ***

We need $n-1 = 5-1 = 4$ dividers (bars): | | | |

Now, we arrange these stars and bars. Each arrangement corresponds to a unique combination of donuts. The stars before the first bar represent the first type of donut (e.g., glazed), the stars between the first and second bar represent the second type (e.g., chocolate), and so on, until the stars after the last bar represent the $n$-th type.

Let’s decode some arrangements:

*   `***||||` : This means 3 glazed donuts, 0 of the other types.
*   `*|*|*||` : This means 1 glazed, 1 chocolate, 1 sprinkle, 0 jelly, 0 plain.
*   `**|||*|` : This means 2 glazed, 0 chocolate, 0 sprinkle, 0 jelly, 1 plain.
*   `|||***` : This means 0 of the first four types, and 3 of the fifth type (e.g., plain).

**Crucial Insight:** We have a total of $k$ stars and $n-1$ bars. This gives us a total of $k + (n-1)$ positions. To find the number of distinct arrangements, we just need to decide where to place the $k$ stars (or, equivalently, where to place the $n-1$ bars) within these $k + n - 1$ positions.

This is now a standard combination problem! We are choosing $k$ positions for the stars out of $k + n - 1$ total positions.

The number of combinations with repetition of choosing $k$ items from $n$ types is:

$$ \binom{k + n - 1}{k} $$

Alternatively, we can think of choosing $n-1$ positions for the bars out of $k + n - 1$ total positions:

$$ \binom{k + n - 1}{n - 1} $$

These two formulas are, of course, equal because $\binom{m}{r} = \binom{m}{m-r}$.

**Remember this formula! It’s the cornerstone of solving combinations with repetition.**

So, for our donut example ($n=5, k=3$):
Number of combinations = $\binom{3 + 5 - 1}{3} = \binom{7}{3}$

Calculating this:
$\binom{7}{3} = \frac{7!}{3!(7-3)!} = \frac{7!}{3!4!} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 7 \times 5 = 35$.
There are 35 different ways to choose 3 donuts from 5 types with repetition allowed.

This method, often presented in texts like Veerarajan, is a fundamental technique for many combinatorial problems.

### 4. More Examples to Solidify Understanding

Let's try a few more examples to see how this "Stars and Bars" technique is versatile. This directly addresses **CO2**, as we are applying a fundamental counting principle.

**Example 1: Distributing Identical Items to Distinct Recipients**

Suppose you have 10 identical candies and you want to distribute them among 4 distinct children. How many ways can you do this?

Here, the "items" are the identical candies (so order doesn't matter, and we can think of them as being indistinguishable). The "recipients" are the distinct children. This is like placing the candies into bins, where each bin is a child.

*   $k = 10$ (the identical items, our stars)
*   $n = 4$ (the distinct recipients, which define our categories/bins)

We need $n-1 = 4-1 = 3$ dividers.

Total positions = $k + n - 1 = 10 + 4 - 1 = 13$.
We need to choose $k=10$ positions for the stars (or $n-1=3$ positions for the bars).

Number of ways = $\binom{13}{10} = \binom{13}{3}$

Calculating $\binom{13}{3}$:
$\binom{13}{3} = \frac{13!}{3!(13-3)!} = \frac{13!}{3!10!} = \frac{13 \times 12 \times 11}{3 \times 2 \times 1} = 13 \times 2 \times 11 = 286$.
There are 286 ways to distribute 10 identical candies to 4 distinct children.

**Important Note for Exams:** When you see problems involving distributing *identical* items to *distinct* recipients, or selecting items from categories with repetition allowed, think "Stars and Bars." The key is identifying what corresponds to the "stars" and what corresponds to the "bins" (which dictates the number of "bars").

**Example 2: Non-negative Integer Solutions to Equations**

Consider the equation $x_1 + x_2 + x_3 + x_4 = 10$, where $x_1, x_2, x_3, x_4$ are non-negative integers. How many solutions are there?

This is exactly the same problem as distributing 10 identical items to 4 distinct recipients! Each $x_i$ represents the number of items (stars) that go into bin $i$ (child $i$). The sum $x_1 + x_2 + x_3 + x_4$ is the total number of items ($k$), and the number of variables ($4$) is the number of distinct bins ($n$).

So, again, $k=10$ and $n=4$.
Number of solutions = $\binom{10 + 4 - 1}{4 - 1} = \binom{13}{3} = 286$.

This connection to linear equations is a very common way this concept appears in exams. You'll see it discussed in depth in texts like Rosen and Chandrasekharaiah.

**Example 3: Choosing Items with Constraints**

What if there’s a constraint? For instance, suppose you are picking 5 fruits from a basket containing apples, bananas, and oranges, but you must pick *at least one* apple and *at least one* banana.

Here, $n=3$ (apple, banana, orange) and we need to pick $k=5$ fruits.
The constraint is "at least one apple" ($x_1 \ge 1$) and "at least one banana" ($x_2 \ge 1$).

To handle this, we can satisfy the constraints first. Imagine we’ve already picked one apple and one banana. Now we need to pick $5 - 1 - 1 = 3$ more fruits.
The remaining fruits can be any of the 3 types, with repetition allowed.
So, for the remaining 3 fruits:
*   $k' = 3$ (the remaining number of fruits to pick)
*   $n = 3$ (the types of fruits available)

Number of ways = $\binom{k' + n - 1}{n - 1} = \binom{3 + 3 - 1}{3 - 1} = \binom{5}{2}$

Calculating $\binom{5}{2}$:
$\binom{5}{2} = \frac{5!}{2!(5-2)!} = \frac{5!}{2!3!} = \frac{5 \times 4}{2 \times 1} = 10$.
There are 10 ways to pick 5 fruits with at least one apple and at least one banana.

This technique of pre-satisfying the minimum requirements is crucial for handling inequality constraints in these types of problems. It’s a pattern you’ll see repeated.

### 5. Connection to Other Concepts and Course Outcomes

Let's explicitly link this back to our course objectives.

*   **CO2: Apply fundamental counting principles... to solve problems related to combinatorial analysis and discrete structures.**
    As we've seen, combinations with repetition are a fundamental counting principle. The "Stars and Bars" method is a prime example of how we apply combinatorial reasoning to solve problems that might initially seem complex. Whether it's distributing items, finding integer solutions to equations, or selecting items with specific rules, this concept is your go-to.

*   **CO1: Apply logical reasoning and formal methods to construct and verify logical arguments and proofs...**
    While we haven't formally *proven* the Stars and Bars formula here, the mapping of the problem to arranging stars and bars is a form of establishing a logical equivalence. Each valid arrangement of stars and bars uniquely corresponds to a valid combination with repetition, and vice-versa. This establishes the mathematical basis for our counting method.

*   **CO3 & CO4: Describe the concepts of sets, relations, and functions, and recognize the properties and structures of algebraic systems...**
    While not a direct application, understanding different ways to count arrangements and selections is foundational to understanding how sets can be structured and how functions between sets can be defined and counted. For example, counting the number of functions from a set of size $k$ to a set of size $n$ (where repetition of output values is allowed, and the order of mapping matters for the input elements) is related, but distinct. Understanding combinations with repetition helps build the intuition for how different combinatorial objects are formed.

### 6. Common Pitfalls and Exam Tips

*   **Distinguishing Repetition vs. No Repetition:** Always read the problem carefully. Does it say "distinct items" or "types of items"? Can you pick the same item more than once? If yes, it's repetition. If no, it's standard combinations.
*   **Order Matters vs. Order Doesn't Matter:** Combinations *always* mean order doesn't matter. If order *does* matter, you're dealing with permutations with repetition (which is simply $n^k$, where $n$ is the number of choices for each position and $k$ is the number of positions).
*   **Identical Items vs. Distinct Items:** Stars and Bars is for distributing *identical* items into *distinct* bins. If both items and bins are identical, the problem is much harder (related to partitions). If items are distinct and bins are distinct, it's $n^k$. If items are distinct and bins are identical, it relates to Stirling numbers of the second kind.
*   **Formula Application:** The formula is $\binom{k + n - 1}{k}$ or $\binom{k + n - 1}{n-1}$. Make sure you correctly identify $k$ (number of items to choose/distribute) and $n$ (number of types/bins). A common mistake is mixing up $n$ and $k$.
*   **Constraints:** For "at least" constraints, remember to pre-satisfy them by reducing $k$ and then applying the formula. For "at most" constraints, it might be easier to calculate the complement (total ways minus ways that violate the constraint).

### Summary of Key Takeaways

*   **Combinations with Repetition:** Choosing $k$ items from $n$ distinct types, where repetition is allowed and order does not matter.
*   **Stars and Bars Method:** A visual technique using $k$ "stars" and $n-1$ "bars" to represent the selection.
*   **The Formula:** $\binom{k + n - 1}{k} = \binom{k + n - 1}{n - 1}$.
*   **Applications:** Distributing identical items to distinct recipients, finding non-negative integer solutions to linear equations, and various selection problems.

Mastering this topic will equip you with powerful tools for solving a significant class of combinatorial problems.

---

## Sample Questions with Answers

**Question 1 (Conceptual):** Explain the difference between combinations without repetition and combinations with repetition, using an everyday example for each.

**Answer:**
*   **Combinations without Repetition:** This is like selecting a team of 3 students from a class of 10 distinct students. Once a student is selected, they cannot be selected again. The order in which you pick the students doesn't matter; the team is the same regardless of selection order. The formula is $\binom{n}{k}$.
*   **Combinations with Repetition:** This is like choosing 3 scoops of ice cream from 5 available flavors (vanilla, chocolate, strawberry, mint, coffee). You can have multiple scoops of the same flavor (e.g., three scoops of vanilla). The order of the scoops doesn't matter for the final combination of flavors you receive. The formula is $\binom{k+n-1}{k}$.

**Question 2 (Exam-Oriented):** How many ways are there to select 4 coins from a collection of 10 identical pennies, 5 identical nickels, and 7 identical dimes?

**Answer:**
This is a combination with repetition problem.
*   The "types of items" are the denominations of coins: pennies, nickels, dimes. So, $n=3$.
*   We are selecting 4 coins, so $k=4$.

Using the formula for combinations with repetition: $\binom{k + n - 1}{k}$
Number of ways = $\binom{4 + 3 - 1}{4} = \binom{6}{4}$

Calculating $\binom{6}{4}$:
$\binom{6}{4} = \frac{6!}{4!(6-4)!} = \frac{6!}{4!2!} = \frac{6 \times 5}{2 \times 1} = 15$.
There are 15 ways to select 4 coins.

**Question 3 (Application/Equation):** Find the number of non-negative integer solutions to the equation $x_1 + x_2 + x_3 = 15$.

**Answer:**
This problem is equivalent to distributing 15 identical items (units) into 3 distinct bins (variables $x_1, x_2, x_3$).
*   The total number of items to distribute (stars) is $k = 15$.
*   The number of distinct bins (categories) is $n = 3$.

Using the Stars and Bars formula: $\binom{k + n - 1}{n - 1}$
Number of solutions = $\binom{15 + 3 - 1}{3 - 1} = \binom{17}{2}$

Calculating $\binom{17}{2}$:
$\binom{17}{2} = \frac{17!}{2!(17-2)!} = \frac{17!}{2!15!} = \frac{17 \times 16}{2 \times 1} = 17 \times 8 = 136$.
There are 136 non-negative integer solutions.

**Question 4 (Constraint Handling):** A bakery sells 6 types of pastries. In how many ways can a customer choose 8 pastries if they must choose at least one of each type?

**Answer:**
This is a combination with repetition problem with a "minimum requirement" constraint.
*   Total types of pastries available: $n=6$.
*   Total pastries to choose: $k=8$.
*   Constraint: At least one of each type.

First, satisfy the constraint: Since we must pick at least one of each of the 6 types, we've already picked 6 pastries (one of each).
Now, we need to choose the remaining $8 - 6 = 2$ pastries.
These remaining 2 pastries can be any of the 6 types, with repetition allowed.

So, for the remaining selection:
*   Number of pastries to choose: $k' = 2$.
*   Number of types available: $n=6$.

Using the combinations with repetition formula: $\binom{k' + n - 1}{n - 1}$
Number of ways = $\binom{2 + 6 - 1}{6 - 1} = \binom{7}{5}$

Calculating $\binom{7}{5}$:
$\binom{7}{5} = \frac{7!}{5!(7-5)!} = \frac{7!}{5!2!} = \frac{7 \times 6}{2 \times 1} = 21$.
There are 21 ways to choose the 8 pastries with at least one of each type.
