---
title: "Combinations"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 2: Fundamental Principles of Counting: The Rules of Sum and Product"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b6001"
status: "completed"
scrapedAt: "2026-05-20T16:31:46.720Z"
---
All right, class! Welcome back to Discrete Mathematical Structures. Today, we're diving into a truly fundamental part of our journey: **Combinations**. This topic, which falls under Module 2: Fundamental Principles of Counting, is absolutely crucial for understanding how we quantify and analyze selections. You'll see how these ideas directly link to **Course Outcome 2 (CO2)**, where we're tasked with applying fundamental counting principles, including combinations, to solve problems in combinatorial analysis. Think of this as building the essential toolkit for solving many "how many ways" kinds of questions.

Now, you've already touched upon the rules of sum and product, and those are the bedrock. Combinations build directly upon those ideas. We're going to explore how to count the number of ways to choose items from a set when the **order of selection doesn't matter**. This is the key differentiator between combinations and permutations, which you might have encountered or will encounter soon.

### Understanding Combinations: What's in a Selection?

Imagine you're at a pizza place. They offer 10 different toppings. You want to choose 3 toppings for your pizza. Does it matter if you pick pepperoni, then mushrooms, then onions, versus picking onions, then pepperoni, then mushrooms? For the final pizza, it's the same set of toppings! This is precisely where combinations come into play. We are interested in the *group* of toppings you choose, not the sequence in which you chose them.

So, a **combination** is a selection of items from a set where the order of selection does not matter.

Let's solidify this with a more formal definition, drawing from principles discussed in texts like Grimaldi's "Discrete and Combinatorial Mathematics."

**Definition: Combination**
A combination of *n* distinct objects taken *k* at a time is a subset of size *k* from a set of *n* distinct objects. The number of such combinations is denoted by $C(n, k)$, $\binom{n}{k}$, or sometimes $nCk$.

The fundamental formula for combinations is derived from the permutation formula. Remember permutations? That's when order *does* matter. If we have $n$ objects and want to arrange $k$ of them, that's $P(n, k) = \frac{n!}{(n-k)!}$.

Now, for every group of $k$ objects we choose (a combination), there are $k!$ ways to arrange them (permutations). So, if we take the number of permutations $P(n, k)$ and divide by the number of ways to order those $k$ objects ($k!$), we get the number of combinations.

This leads us to the core formula, which is absolutely vital for exams and understanding:

$$ \binom{n}{k} = C(n, k) = \frac{P(n, k)}{k!} = \frac{\frac{n!}{(n-k)!}}{k!} = \frac{n!}{k!(n-k)!} $$

Here, $n!$ (read as "n factorial") means $n \times (n-1) \times (n-2) \times \dots \times 2 \times 1$.
And by convention, $0! = 1$.

This formula is a cornerstone, and you'll see it used extensively in problem-solving, directly addressing CO2.

### Illuminating Examples to Build Intuition

Let's walk through some scenarios.

**Example 1: The Committee Selection**

Suppose a club has 15 members, and they need to form a subcommittee of 5 members. How many different subcommittees can be formed?

Here, the order in which members are chosen for the subcommittee doesn't matter. A subcommittee with members {Alice, Bob, Carol, David, Eve} is the same as {Bob, Alice, Eve, David, Carol}. So, we use combinations.

We have $n = 15$ (total members) and we want to choose $k = 5$ (subcommittee size).
The number of combinations is:
$$ \binom{15}{5} = \frac{15!}{5!(15-5)!} = \frac{15!}{5!10!} $$

Let's calculate this:
$$ \binom{15}{5} = \frac{15 \times 14 \times 13 \times 12 \times 11 \times 10!}{5 \times 4 \times 3 \times 2 \times 1 \times 10!} $$
We can cancel out the $10!$:
$$ \binom{15}{5} = \frac{15 \times 14 \times 13 \times 12 \times 11}{5 \times 4 \times 3 \times 2 \times 1} $$
Now, simplify:
$$ \binom{15}{5} = \frac{15}{5 \times 3} \times \frac{12}{4 \times 2} \times 14 \times 13 \times 11 = 1 \times \frac{12}{8} \times 14 \times 13 \times 11 $$
Wait, let's simplify more strategically:
$$ \binom{15}{5} = \frac{15}{5 \times 3} \times \frac{14}{2} \times \frac{12}{4} \times 13 \times 11 = 1 \times 7 \times 3 \times 13 \times 11 = 3003 $$
So, there are 3003 different subcommittees of 5 members that can be formed from 15 members.

This example directly addresses CO2 by applying the combination formula to a real-world scenario.

**Example 2: Lottery Numbers**

A lottery draws 6 numbers from a set of 49 distinct numbers. How many different combinations of 6 numbers can be drawn?

Again, the order in which the numbers are drawn doesn't matter for your ticket. If your ticket has {1, 5, 10, 20, 30, 40}, it's a winner regardless of whether those numbers were drawn in ascending order or a jumbled sequence.

Here, $n=49$ and $k=6$.
$$ \binom{49}{6} = \frac{49!}{6!(49-6)!} = \frac{49!}{6!43!} $$
Calculating this is a bit more involved, but it highlights the sheer scale of possibilities:
$$ \binom{49}{6} = \frac{49 \times 48 \times 47 \times 46 \times 45 \times 44}{6 \times 5 \times 4 \times 3 \times 2 \times 1} = 13,983,816 $$
That's over 13 million possible combinations! It’s a good thing we have these formulas to count them systematically.

### Important Properties and Identities of Combinations

Understanding combinations isn't just about the formula. There are some crucial properties that make problem-solving much more efficient. These are often tested and are essential for deeper understanding as per CO2.

**1. Symmetry Property:**
$$ \binom{n}{k} = \binom{n}{n-k} $$

What does this mean? Choosing $k$ items from $n$ is the same as choosing the $n-k$ items *not* to include.
Think back to the committee example. Choosing 5 members out of 15 is the same as deciding which 10 members *won't* be on the subcommittee. It's a clever way to simplify calculations if $k$ is large.

For instance, $\binom{15}{10}$ is the same as $\binom{15}{5}$.
$$ \binom{15}{10} = \frac{15!}{10!(15-10)!} = \frac{15!}{10!5!} $$
And we already calculated $\binom{15}{5} = 3003$. So, $\binom{15}{10} = 3003$ too!

**2. Edge Cases:**
*   $$ \binom{n}{0} = 1 $$
    There's only one way to choose zero items from a set – you choose nothing! This is always true. This relates to the idea of the empty set being a subset of any set.
*   $$ \binom{n}{n} = 1 $$
    There's only one way to choose all $n$ items from a set of $n$ items – you pick everything!
*   $$ \binom{n}{1} = n $$
    There are $n$ ways to choose one item from a set of $n$ items. Each item can be chosen individually.

These properties are fundamental and often appear in conceptual questions. Make sure you can explain *why* they are true, not just state them.

**3. Pascal's Identity (or Pascal's Rule):**
$$ \binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k} $$
This is a profoundly important identity that underpins Pascal's Triangle. It states that the number of ways to choose $k$ items from $n$ is equal to:
    *   The number of ways to choose $k-1$ items from the first $n-1$ objects, *and* then choose the $n$-th object.
    *   PLUS the number of ways to choose $k$ items from the first $n-1$ objects, *without* choosing the $n$-th object.

Let's break this down with a story. Imagine you have a group of $n$ people, and you want to select a committee of $k$. Consider one specific person, let's call her Sarah.

*   **Case 1: Sarah is on the committee.** If Sarah is on the committee, then you still need to select $k-1$ more members from the remaining $n-1$ people. The number of ways to do this is $\binom{n-1}{k-1}$.
*   **Case 2: Sarah is NOT on the committee.** If Sarah is not on the committee, then you need to select all $k$ members from the remaining $n-1$ people. The number of ways to do this is $\binom{n-1}{k}$.

Since these two cases are mutually exclusive and cover all possibilities for forming the committee of $k$ from $n$, the total number of ways is the sum of the ways in these two cases: $\binom{n-1}{k-1} + \binom{n-1}{k}$.

This identity is critical for understanding recursive structures and is often seen in dynamic programming problems. It's a beautiful example of breaking a problem down into smaller, overlapping subproblems, a concept that resonates with **CO2** and even hints at ideas related to recursion and dynamic programming that might appear in later modules or in more advanced analysis.

**Example 3: Applying Pascal's Identity**

Let's verify Pascal's Identity for $\binom{5}{3}$:
$$ \binom{5}{3} = \frac{5!}{3!2!} = \frac{5 \times 4}{2 \times 1} = 10 $$

Using Pascal's Identity:
$$ \binom{5}{3} = \binom{5-1}{3-1} + \binom{5-1}{3} = \binom{4}{2} + \binom{4}{3} $$

Now, calculate the right side:
$$ \binom{4}{2} = \frac{4!}{2!2!} = \frac{4 \times 3}{2 \times 1} = 6 $$
$$ \binom{4}{3} = \frac{4!}{3!1!} = \frac{4}{1} = 4 $$

So, $\binom{4}{2} + \binom{4}{3} = 6 + 4 = 10$.
It matches! This identity is powerful because it allows us to build up solutions from smaller cases, a recurring theme in discrete mathematics.

### Combinations with Repetition (Multisets)

So far, we've been talking about choosing from *distinct* objects. What if we can choose the same object multiple times? This is a slightly more advanced concept, often found in sections discussing "multisets" or "combinations with repetition."

Imagine you're at an ice cream shop that has 5 flavors, and you want to get a cone with 3 scoops. You can have three scoops of the same flavor, or two of one and one of another, etc. The order of scoops on the cone doesn't matter (for the purpose of counting the combination of flavors).

The formula for combinations with repetition, choosing $k$ items from $n$ types of items where repetition is allowed, is:

$$ \binom{n+k-1}{k} $$

Notice the similarity to our previous formula! It's actually $\binom{n+k-1}{n-1}$ as well, due to the symmetry property.

**Example 4: Ice Cream Flavors**

If there are 5 flavors of ice cream and you want to choose 3 scoops, where repetition is allowed and order doesn't matter:
Here, $n=5$ (number of flavors) and $k=3$ (number of scoops).
Using the formula:
$$ \binom{5+3-1}{3} = \binom{7}{3} $$
$$ \binom{7}{3} = \frac{7!}{3!(7-3)!} = \frac{7!}{3!4!} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35 $$
So, there are 35 different combinations of 3 scoops of ice cream from 5 flavors.

**A brief note on this formula:** This formula is often derived using a technique called "stars and bars." Imagine you have $k$ "stars" representing the items you're choosing, and you need $n-1$ "bars" to divide them into $n$ categories (types of items). For example, if you have 3 scoops (***) and 5 flavors, you need 4 bars to separate them, like:
`**|*|||` represents two scoops of flavor 1, one scoop of flavor 2, and no scoops of flavors 3, 4, and 5.
The total number of positions is $k + (n-1) = n+k-1$. You then choose $k$ positions for the stars (or $n-1$ for the bars), leading to $\binom{n+k-1}{k}$. This is a clever way to visualize and understand why this formula works and connects back to basic counting principles.

### Connecting Combinations to Course Outcomes

Let's explicitly map how this topic addresses our course objectives:

*   **CO2: Apply fundamental counting principles, including permutations, combinations, and the pigeonhole principle, to solve problems related to combinatorial analysis and discrete structures.**
    This entire topic is dedicated to combinations! We've learned the formula $\binom{n}{k} = \frac{n!}{k!(n-k)!}$, explored its properties like symmetry and Pascal's identity, and applied it to diverse scenarios like committee selection and lottery numbers. Understanding combinations is directly fulfilling this outcome. The ability to choose items without regard to order is a core counting principle. We've also seen combinations with repetition, expanding our toolkit.

*   **CO1: Apply logical reasoning and formal methods to construct and verify logical arguments and proofs involving propositions, truth tables, logical equivalence, and quantifiers.**
    While this topic is more about application (CO2), the derivation of the combination formula and proofs of identities like Pascal's rely heavily on logical reasoning. For instance, the "Sarah is in or not in" argument is a classic example of a proof by cases, a fundamental logical technique.

*   **CO3 & CO4: Describe the concepts of sets, relations, and functions, and recognize the properties and structures of algebraic systems...**
    Combinations are inherently about sets – specifically, forming subsets. When we choose $k$ items from $n$, we are forming a subset of size $k$. The properties of combinations can be linked to set theory concepts. Furthermore, the recursive nature highlighted by Pascal's identity is a gateway to understanding recursive functions and structures, which are relevant to later topics in discrete mathematics and computer science, touching upon areas related to CO4.

### Exam-Oriented Tips and Pitfalls

*   **Order Matters vs. Order Doesn't Matter:** This is the *most common* mistake students make. Always ask yourself: "Does the order of selection change the outcome?" If yes, use permutations. If no, use combinations.
*   **Distinct vs. Non-Distinct Objects:** Our primary formula $\binom{n}{k}$ is for distinct objects. If objects can be repeated, you need the "stars and bars" formula $\binom{n+k-1}{k}$.
*   **Calculations:** Be comfortable simplifying factorials. Practicing calculations for moderate values of $n$ and $k$ will help. Use a calculator if allowed, but understand the steps.
*   **Word Problems:** Break down word problems carefully. Identify $n$ (the total number of items to choose from) and $k$ (the number of items to choose). Look for keywords like "select," "choose," "form a group/committee/team" (suggesting combinations) versus "arrange," "order," "sequence" (suggesting permutations).
*   **Properties:** Memorize and understand the key properties like $\binom{n}{k} = \binom{n}{n-k}$ and Pascal's identity $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$. They are frequent sources of exam questions.

### Summary: The Essence of Combinations

To wrap up our discussion on combinations:
*   Combinations count the number of ways to select items from a set where the order of selection **does not** matter.
*   The fundamental formula is $$ \binom{n}{k} = \frac{n!}{k!(n-k)!} $$ for selecting $k$ distinct items from $n$ distinct items.
*   Key properties include symmetry ($\binom{n}{k} = \binom{n}{n-k}$) and Pascal's Identity ($\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$).
*   When repetition is allowed, the formula is $$ \binom{n+k-1}{k} $$.

This is a powerful tool for quantitative reasoning in many fields, from probability and statistics to computer science algorithms and network design. Master these concepts, and you'll be well-equipped to tackle many challenging problems!

***

### Sample Questions and Answers

**Conceptual Question 1:**
Explain why $\binom{n}{k} = \binom{n}{n-k}$. Give a real-world analogy.

**Answer:**
The identity $\binom{n}{k} = \binom{n}{n-k}$ signifies that the number of ways to choose a subset of $k$ elements from a set of $n$ elements is the same as the number of ways to choose the subset of $(n-k)$ elements that are *not* included.

**Analogy:** Imagine you have 10 friends, and you're planning a party. You need to invite 7 of them.
*   Using $\binom{10}{7}$, you're counting the number of ways to choose which 7 friends to invite.
*   Using $\binom{10}{10-7} = \binom{10}{3}$, you're counting the number of ways to choose which 3 friends *not* to invite.
Since every group of 7 invited friends corresponds uniquely to a group of 3 uninvited friends, the number of ways must be the same. It's just two ways of looking at the same decision.

**Exam-Oriented Question 2:**
A standard deck of 52 playing cards is shuffled. How many different hands of 5 cards can be dealt?

**Answer:**
This is a combination problem because the order in which the 5 cards are received does not matter for the final hand. We have $n=52$ (total cards) and we want to choose $k=5$ (cards in the hand).

The number of different hands is given by the combination formula:
$$ \binom{52}{5} = \frac{52!}{5!(52-5)!} = \frac{52!}{5!47!} $$
Calculating this:
$$ \binom{52}{5} = \frac{52 \times 51 \times 50 \times 49 \times 48}{5 \times 4 \times 3 \times 2 \times 1} $$
$$ \binom{52}{5} = \frac{52}{4 \times 2} \times \frac{50}{5} \times \frac{48}{3} \times 51 \times 49 $$
$$ \binom{52}{5} = \frac{52}{8} \times 10 \times 16 \times 51 \times 49 $$
A more systematic simplification:
$$ \binom{52}{5} = 52 \times \frac{51}{3} \times \frac{50}{5 \times 2} \times 49 \times \frac{48}{4 \times 1} $$
$$ \binom{52}{5} = 52 \times 17 \times 5 \times 49 \times 12 $$
$$ \binom{52}{5} = 2,598,960 $$
So, there are 2,598,960 different 5-card hands possible from a standard deck of 52 cards.

**Conceptual Question 3:**
A bakery offers 7 types of cookies. How many ways are there to choose 4 cookies for a treat box if you can choose multiple cookies of the same type?

**Answer:**
This is a case of combinations with repetition allowed. We have $n=7$ (types of cookies) and $k=4$ (cookies to choose). The formula for combinations with repetition is $\binom{n+k-1}{k}$.

Plugging in the values:
$$ \binom{7+4-1}{4} = \binom{10}{4} $$
Now, we calculate $\binom{10}{4}$:
$$ \binom{10}{4} = \frac{10!}{4!(10-4)!} = \frac{10!}{4!6!} $$
$$ \binom{10}{4} = \frac{10 \times 9 \times 8 \times 7}{4 \times 3 \times 2 \times 1} $$
$$ \binom{10}{4} = \frac{10}{2} \times \frac{9}{3} \times \frac{8}{4} \times 7 = 5 \times 3 \times 2 \times 7 $$
$$ \binom{10}{4} = 210 $$
There are 210 ways to choose 4 cookies from 7 types with repetition allowed.

This illustrates the application of the "stars and bars" concept. We have 4 "stars" (cookies) and need $7-1=6$ "bars" to separate the 7 cookie types. The total number of arrangements of stars and bars is $4+6=10$, and we choose 4 positions for the stars (or 6 for the bars).

Keep practicing, and don't hesitate to ask questions as we move forward!
