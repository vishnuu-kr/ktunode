---
title: "The Pigeonhole Principle."
subject: "DISCRETE MATHEMATICS"
module: "Module 2: Mathematical logic and proofs"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fa4"
status: "completed"
scrapedAt: "2026-05-20T16:33:05.078Z"
---
Let's dive into the fascinating world of the Pigeonhole Principle! This is one of those elegant, deceptively simple ideas in Discrete Mathematics that has immense power, especially when it comes to solving counting problems. As we explore this topic, remember our goal is to build a strong understanding that will help us tackle a variety of problems, directly contributing to Course Outcome CO2: "Solve counting problems by applying the elementary counting techniques."

### Module 2: Mathematical Logic and Proofs - The Pigeonhole Principle

Welcome, everyone! Today, we're going to unlock a powerful tool for counting and proving existence: the Pigeonhole Principle. You might hear the name and think of actual pigeons and holes, and that's a great place to start because the core idea is quite intuitive.

#### 1. What is the Pigeonhole Principle? The Intuitive Idea

Imagine you have a set of pigeonholes, and you want to place some pigeons into these holes. Now, what happens if you have *more pigeons than pigeonholes*? Can you possibly put each pigeon into a *different* pigeonhole? Of course not! At least one pigeonhole must end up with more than one pigeon. This very simple observation is the heart of the Pigeonhole Principle.

Let's formalize this a bit. We can think of the "pigeons" as items we are distributing and the "pigeonholes" as categories or containers.

*   **Pigeons:** These are the objects we are considering.
*   **Pigeonholes:** These are the categories or bins into which we place the objects.

The basic statement of the Pigeonhole Principle is:

**If you have $n$ items to be placed into $m$ containers, and $n > m$, then at least one container must contain more than one item.**

Think about it this way: If you have 5 friends (pigeons) and you want to assign each of them a unique favorite color from a set of only 3 colors (pigeonholes - say, Red, Blue, Green), at least two friends must share the same favorite color. It's impossible to give each friend a different color if there aren't enough colors to go around.

This principle, as presented in our textbook, Kenneth H. Rosen's "Discrete Mathematics and its Applications," is foundational. It's not just about pigeons and holes; it's a way to prove that a certain situation *must* occur, even if we don't know exactly *which* item is in which category. This is a key aspect of many proofs in mathematics and computer science.

#### 2. The Generalized Pigeonhole Principle

The basic principle is great, but often we need a more powerful version. What if we know that a container has *at least* a certain number of items? This is where the **Generalized Pigeonhole Principle** comes in.

Let's say we have $n$ pigeons and $m$ pigeonholes. If $n > k \cdot m$ for some integer $k$, then at least one pigeonhole must contain at least $k+1$ pigeons.

How do we understand this? Think about the average number of pigeons per pigeonhole. If you have $n$ pigeons and $m$ holes, the average is $n/m$. If this average is, say, 3.5, it means at least one hole *must* have at least 4 pigeons. The generalized principle makes this precise.

If you divide $n$ by $m$, you get a quotient and a remainder. Let $n = qm + r$, where $0 \le r < m$.
The generalized pigeonhole principle states that at least one pigeonhole must contain at least $\lceil n/m \rceil$ pigeons.

Here, $\lceil x \rceil$ denotes the **ceiling function**, which gives the smallest integer greater than or equal to $x$.

**Why is this the ceiling function?**
Consider $n$ pigeons and $m$ holes. If you were to distribute the pigeons *as evenly as possible*, each hole would get $\lfloor n/m \rfloor$ pigeons. However, if $n/m$ is not an integer, there will be some pigeons "left over" that need to be distributed. The ceiling function $\lceil n/m \rceil$ accounts for these "extra" pigeons and tells us the minimum number of pigeons guaranteed to be in at least one hole.

For example, if you have 10 pigeons and 3 holes:
$n = 10, m = 3$.
$\lceil 10/3 \rceil = \lceil 3.33... \rceil = 4$.
So, at least one hole must contain at least 4 pigeons. Let's check:
If each hole had at most 3 pigeons, the maximum number of pigeons we could have is $3 \times 3 = 9$. Since we have 10 pigeons, at least one hole must have more than 3, meaning at least 4. This matches $\lceil 10/3 \rceil$.

**This is a crucial concept for CO2 (solving counting problems).** When you encounter a problem where you need to show that a certain number of items must fall into one category, the Pigeonhole Principle is your go-to tool.

#### 3. Applying the Pigeonhole Principle: Examples

Let's move from abstract definitions to real-world (or at least, relatable!) scenarios. This is where the magic happens and where you'll see how this principle helps us in practice.

**Example 1: Birthdays (A Classic!)**

*   **Problem:** In any group of $n$ people, how large must $n$ be to guarantee that at least two people share the same birth month?

*   **Thinking with the Pigeonhole Principle:**
    *   What are the "pigeons"? The people in the group.
    *   What are the "pigeonholes"? The 12 months of the year (January, February, ..., December).
    *   We want to guarantee that at least one "pigeonhole" (month) has more than one "pigeon" (person).

*   **Solution:**
    *   We have $m = 12$ pigeonholes (months).
    *   We want to find the smallest $n$ such that at least one month has more than 1 person.
    *   Using the basic Pigeonhole Principle: If $n > m$, then at least one hole has more than one pigeon.
    *   So, if $n > 12$, at least two people share a birth month.
    *   The smallest integer $n$ greater than 12 is $13$.
    *   Therefore, in a group of 13 people, at least two must share the same birth month.

*   **Relating to the Generalized Principle:**
    *   If we want to guarantee at least $k+1$ people share a birth month, we need $n > k \cdot m$.
    *   To guarantee at least *two* people share a birth month, we want $k+1 = 2$, so $k=1$.
    *   Thus, we need $n > 1 \cdot 12$, which means $n > 12$. The smallest $n$ is 13.

This example is simple but powerful. It shows that even without knowing anyone's birthday, we can *guarantee* a shared birth month in a group of just 13.

**Example 2: Socks in a Drawer**

*   **Problem:** You have a drawer with socks of two colors: black and white. You're pulling socks out in the dark. What is the minimum number of socks you must pull out to guarantee you have a matching pair?

*   **Thinking with the Pigeonhole Principle:**
    *   Pigeons: The socks you pull out.
    *   Pigeonholes: The colors of the socks (black, white).
    *   We want to guarantee at least two socks of the same color.

*   **Solution:**
    *   There are $m = 2$ pigeonholes (colors).
    *   We want to guarantee at least two socks (pigeons) in the same hole (color).
    *   Using the basic principle: If $n > m$, then at least one hole has more than one pigeon.
    *   So, if $n > 2$, you are guaranteed a matching pair.
    *   The smallest integer $n$ greater than 2 is 3.
    *   Therefore, you must pull out 3 socks.

*   **The Worst-Case Scenario:** You pull out a black sock. Then you pull out a white sock. So far, no pair. But the *next* sock you pull *must* be either black or white, completing a pair.

This is a great example of how the Pigeonhole Principle helps us think about worst-case scenarios and guarantees. This is often what makes this principle useful in algorithm analysis and data structures.

**Example 3: Points in a Square (Slightly more advanced)**

*   **Problem:** Suppose you place 5 points inside a square of side length 2. Show that at least two of these points are within a distance of $\sqrt{2}$ of each other.

*   **Thinking with the Pigeonhole Principle:** This one requires a bit more setup to identify the pigeons and pigeonholes.
    *   Pigeons: The 5 points.
    *   Pigeonholes: We need to divide the square into regions such that if two points fall into the same region, they are guaranteed to be within $\sqrt{2}$ of each other.

*   **Solution:**
    *   Let's divide the square of side length 2 into four smaller squares, each of side length 1. Imagine a 2x2 grid within the larger square.
    *   These four smaller squares are our "pigeonholes." We have $m = 4$ pigeonholes.
    *   We are placing $n = 5$ points (pigeons).
    *   By the Pigeonhole Principle (basic version), since $n > m$ (5 > 4), at least one of the smaller squares must contain at least two points.

    *   Now, consider two points within the same smaller square of side length 1. What is the maximum possible distance between them? The maximum distance occurs between opposite corners of the square. Using the Pythagorean theorem, the distance is $\sqrt{1^2 + 1^2} = \sqrt{2}$.
    *   Therefore, if two points are in the same smaller square, they are at most $\sqrt{2}$ apart.
    *   Since we've shown that at least two points must be in the same smaller square, it guarantees that at least two points are within a distance of $\sqrt{2}$ of each other.

*   **Key Insight:** The clever part here is choosing the right "pigeonholes." This often involves geometric division or clever categorization. This illustrates how to connect the principle to geometry and prove properties about spatial arrangements.

#### 4. Proofs using the Pigeonhole Principle

The Pigeonhole Principle is fundamentally a proof technique. It allows us to prove the *existence* of something without explicitly constructing it. This aligns with our learning outcome CO1 (checking validity of predicates, deductive reasoning, inference theory), as it provides a concrete method for deductive reasoning.

**How it works in a proof:**
1.  **Identify the objects (pigeons) and categories (pigeonholes).** This is often the most creative part.
2.  **Determine the number of objects ($n$) and categories ($m$).**
3.  **Apply the Pigeonhole Principle:**
    *   If $n > m$, then at least one category has more than one object.
    *   If $n > k \cdot m$, then at least one category has more than $k$ objects (i.e., at least $k+1$ objects).
4.  **State the conclusion:** Based on the pigeonhole assignment, conclude the desired property holds.

**Example: Divisibility and Remainders**

*   **Problem:** Prove that in any sequence of $n$ positive integers, there must be a contiguous subsequence whose sum is divisible by $n$.

*   **Thinking:** This is a more abstract number theory problem.
    *   Pigeons: What could be our items? What about partial sums?
    *   Pigeonholes: What property are we looking for? Divisibility by $n$. This relates to remainders when divided by $n$.

*   **Solution:**
    *   Let the sequence of positive integers be $a_1, a_2, \dots, a_n$.
    *   Consider the following $n+1$ partial sums:
        $S_0 = 0$
        $S_1 = a_1$
        $S_2 = a_1 + a_2$
        ...
        $S_n = a_1 + a_2 + \dots + a_n$

    *   Now, consider the remainders of these sums when divided by $n$. There are $n$ possible remainders: $0, 1, 2, \dots, n-1$. These are our $m=n$ pigeonholes.
    *   We have $n+1$ partial sums ($S_0, S_1, \dots, S_n$). These are our $n+1$ pigeons.
    *   By the Pigeonhole Principle, since we have $n+1$ pigeons and $n$ pigeonholes (remainders), at least two of these partial sums must have the same remainder when divided by $n$.

    *   Let these two sums be $S_i$ and $S_j$, where $0 \le i < j \le n$, such that $S_i \equiv S_j \pmod{n}$.
    *   This means $(S_j - S_i)$ is divisible by $n$.
    *   Let's look at what $S_j - S_i$ represents:
        If $i=0$, $S_j - S_0 = S_j = a_1 + a_2 + \dots + a_j$. This is the sum of a contiguous subsequence from $a_1$ to $a_j$.
        If $i > 0$, $S_j - S_i = (a_1 + \dots + a_j) - (a_1 + \dots + a_i) = a_{i+1} + a_{i+2} + \dots + a_j$. This is the sum of a contiguous subsequence from $a_{i+1}$ to $a_j$.

    *   In either case, $S_j - S_i$ is the sum of a contiguous subsequence, and we've shown it's divisible by $n$. This completes the proof.

*   **Why is this important for CO1?** This example demonstrates deductive reasoning. We start with a premise (the sequence of numbers), define a set of objects (partial sums) and categories (remainders), apply a logical principle (PHP), and deduce a conclusion (existence of a subsequence with sum divisible by $n$). This is the essence of mathematical proof.

#### 5. Common Pitfalls and Exam Tips

The Pigeonhole Principle is straightforward, but students sometimes trip up on:

*   **Identifying Pigeons and Pigeonholes:** The most critical step! Always ask yourself: what am I distributing, and what am I distributing them into? Sometimes, you need to rephrase the problem to make this clear.
*   **Using the Correct Version:** Distinguish between the basic principle ($n > m$) and the generalized principle ($\lceil n/m \rceil$). Most complex problems will require the generalized version.
*   **Choosing the Right Pigeonholes:** As seen in the square example, the choice of pigeonholes is often the key to unlocking the solution. Think about how to partition your objects to guarantee the desired property.
*   **The "Off-by-One" Error:** Be careful with $n$ vs. $n+1$ and $k$ vs. $k+1$. The principle guarantees "at least $k+1$" items in a hole if you have $n > k \cdot m$. Or, if you have $n$ items and $m$ holes, at least one hole has $\lceil n/m \rceil$.

**Exam Tip:** When faced with a counting problem on an exam that seems hard to count directly, ask yourself: "Can I use the Pigeonhole Principle to show that a certain outcome *must* occur?" This can often turn a complex counting problem into a simpler existence proof.

#### 6. Connections to Other Concepts and Course Outcomes

*   **CO2 (Solving Counting Problems):** This is the primary outcome addressed. The Pigeonhole Principle is a direct tool for solving certain types of counting problems, particularly those that involve proving existence or bounds. It's a shortcut when direct enumeration is difficult.
*   **CO1 (Mathematical Logic and Proofs):** As we saw, the PHP is a fundamental proof technique. It's a form of constructive proof, or at least a proof of existence, that relies on logical deduction. Understanding how to frame a problem for the PHP is a direct application of logical thinking and constructing arguments.
*   **Comparison with Other Counting Techniques:** It's useful to contrast the Pigeonhole Principle with other counting methods like the Rule of Sum and Rule of Product. While Rule of Sum/Product are for *counting how many ways* something can happen, the Pigeonhole Principle is often for *proving that something must happen* or establishing a minimum/maximum quantity. For instance, in the sock example, we used PHP to prove we *need* 3 socks; we didn't count how many ways to get a pair.

#### Summary: The Takeaway

The Pigeonhole Principle is your best friend when you need to prove that a certain situation *must* occur due to quantity imbalances. Remember:

*   **Basic PHP:** If $n$ items are in $m$ boxes, and $n > m$, then at least one box has more than one item.
*   **Generalized PHP:** If $n$ items are in $m$ boxes, then at least one box has at least $\lceil n/m \rceil$ items.
*   **Strategy:** Carefully identify your "pigeons" (items) and "pigeonholes" (categories). The success often hinges on choosing appropriate pigeonholes.
*   **Application:** Crucial for proving existence, finding minimum guarantees, and solving problems where direct counting is hard.

It's a simple idea, but its applications are vast, from computer science algorithms to pure mathematics. Master this, and you've added a powerful tool to your mathematical arsenal!

---

### Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to more applied:

**Q1. (Conceptual)**
What is the fundamental difference between the basic Pigeonhole Principle and the Generalized Pigeonhole Principle?

**A1.**
The basic Pigeonhole Principle states that if you have more items than categories ($n > m$), at least one category must have more than one item. It guarantees at least **2** items in one category.
The Generalized Pigeonhole Principle provides a more precise guarantee: if you have $n$ items and $m$ categories, at least one category must have at least $\lceil n/m \rceil$ items. This allows us to specify a minimum number of items (greater than 2, if applicable) in a category.

---

**Q2. (Application - CO2)**
A programmer writes code that generates random integers between 1 and 100, inclusive. What is the minimum number of random integers the programmer must generate to guarantee that at least three of them are the same?

**A2.**
*   **Pigeons:** The random integers generated.
*   **Pigeonholes:** The possible values for these integers, which are the numbers from 1 to 100. So, $m=100$.
*   **Goal:** Guarantee at least three integers are the same. This means at least one pigeonhole must contain at least 3 pigeons. In the generalized PHP formula, this means $k+1 = 3$, so $k=2$.
*   **Applying Generalized PHP:** We need to find $n$ such that at least one pigeonhole has $\ge 3$ pigeons. The generalized principle states at least one pigeonhole has $\lceil n/m \rceil$ pigeons. We want $\lceil n/100 \rceil \ge 3$.
*   Alternatively, using the $n > k \cdot m$ form: we want to guarantee at least $k+1=3$ items in a hole. So, we need $n > k \cdot m = 2 \cdot 100$.
*   $n > 200$.
*   The smallest integer $n$ greater than 200 is 201.
*   **Answer:** The programmer must generate at least **201** random integers.

*Self-Check:* If you generate 200 integers, it's possible (in the worst case) that you get exactly two of each number from 1 to 100. The 201st integer *must* then match one of the numbers you've already seen twice.

---

**Q3. (Proof - CO1, CO2)**
Prove that any set of 10 distinct integers contains two whose difference is divisible by 9.

**A3.**
*   **Pigeons:** The 10 distinct integers. Let them be $x_1, x_2, \dots, x_{10}$.
*   **Pigeonholes:** The possible remainders when an integer is divided by 9. These are $0, 1, 2, 3, 4, 5, 6, 7, 8$. There are $m=9$ possible remainders.
*   **Goal:** Prove that two integers have a difference divisible by 9. This means two integers must have the same remainder when divided by 9.
*   **Applying Pigeonhole Principle:**
    *   We have $n=10$ integers (pigeons).
    *   We have $m=9$ possible remainders (pigeonholes).
    *   Since $n > m$ (10 > 9), by the Pigeonhole Principle, at least two of the integers must have the same remainder when divided by 9.
*   **Conclusion:** Let these two integers be $x_i$ and $x_j$, where $i \neq j$. Suppose $x_i \equiv r \pmod{9}$ and $x_j \equiv r \pmod{9}$ for some remainder $r$.
    Then, their difference is $x_i - x_j \equiv r - r \equiv 0 \pmod{9}$.
    This means the difference $(x_i - x_j)$ is divisible by 9.
    Therefore, any set of 10 distinct integers contains two whose difference is divisible by 9.

---

**Q4. (Conceptual/Application - CO2)**
You are at a party with 10 people (including yourself). Some people shake hands with each other. Prove that there are at least two people who shook hands with the same number of people.

**A4.**
*   **Pigeons:** The 10 people at the party.
*   **Pigeonholes:** The number of hands each person could have shaken. A person can shake hands with 0 people, 1 person, ..., up to 9 other people. So, there are 10 possible numbers of handshakes (0 to 9). These are our pigeonholes.
*   **The Catch:** We need to be careful about the possible values for the number of handshakes.
    *   Can someone shake hands with 0 people AND someone shake hands with all 9 other people simultaneously?
    *   If person A shakes hands with everyone else (9 people), then person A shook hands with person B. This means person B shook hands with person A, so person B cannot have shaken hands with 0 people.
    *   Therefore, the numbers 0 and 9 cannot *both* be present as handshake counts in the same party of 10 people.

*   **Refining the Pigeonholes:** This means we don't actually have 10 distinct possibilities for the number of handshakes that can occur simultaneously. We can have:
    *   At most one person shaking 0 hands.
    *   At most one person shaking 9 hands.
    *   If someone shakes 9 hands, no one can shake 0 hands.
    *   If someone shakes 0 hands, no one can shake 9 hands.

    This implies that the possible number of handshakes for the people present will be a subset of $\{0, 1, \dots, 9\}$, but we can't have *both* 0 and 9 occurring.
    So, the set of *actual* handshake counts present among the 10 people can have at most 9 distinct values. For instance, it could be $\{0, 1, 2, 3, 4, 5, 6, 7, 8\}$ or $\{1, 2, 3, 4, 5, 6, 7, 8, 9\}$. In either case, there are at most 9 distinct values for the number of handshakes.

*   **Applying Pigeonhole Principle:**
    *   Pigeons: 10 people ($n=10$).
    *   Pigeonholes: The possible number of handshakes. Since 0 and 9 cannot coexist, the maximum number of distinct handshake counts is 9. So, $m=9$.
    *   Since $n > m$ (10 > 9), by the Pigeonhole Principle, at least two people must have the same number of handshakes.

*   **Answer:** Yes, there are at least two people who shook hands with the same number of people.

---

These examples should give you a good feel for how the Pigeonhole Principle is applied in various contexts. Keep practicing, and remember to carefully define your "pigeons" and "pigeonholes"!
