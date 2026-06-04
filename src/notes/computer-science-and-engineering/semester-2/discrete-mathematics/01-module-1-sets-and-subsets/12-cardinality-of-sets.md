---
title: "Cardinality of Sets"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f8b"
status: "completed"
scrapedAt: "2026-05-20T16:32:47.400Z"
---
## Discrete Mathematics: Module 1 - Sets and Subsets
### Topic: Cardinality of Sets

Welcome everyone to our journey into the fascinating world of Discrete Mathematics! Today, we're diving into the very foundations of sets, specifically focusing on a concept that's surprisingly fundamental and incredibly useful: the **cardinality of a set**. Think of it as counting the "stuff" inside a set.

You might be thinking, "Counting? Isn't that too basic for discrete math?" Well, yes and no! While the basic idea is simple, understanding how to count elements in different types of sets, especially infinite ones, opens up a universe of possibilities and is absolutely crucial for many areas of computer science. This topic directly relates to our **Course Outcome 2 (CO2)**, which is about solving counting problems using various elementary techniques. We'll see how cardinality is the bedrock upon which many of these techniques are built.

Let's start by getting our terminology straight.

### What is a Set? (A Quick Refresher)

Before we count, we need to be clear about what we're counting. Remember, a **set** is a collection of distinct objects, called **elements**. The order of elements doesn't matter, and an element can appear only once. For example, the set of colors in a traffic light is {Red, Yellow, Green}.

### The Essence of Cardinality

So, what is cardinality? Simply put, the **cardinality of a set** is the number of elements in that set. It's like asking, "How many items are in this basket?"

We denote the cardinality of a set $A$ as $|A|$ or sometimes as $n(A)$.

#### Finite Sets: The Straightforward Count

For finite sets, determining cardinality is as easy as counting on your fingers.

**Example 1: The Traffic Light Again**
Let $C$ be the set of colors in a traffic light. So, $C = \{\text{Red, Yellow, Green}\}$.
To find its cardinality, we just count: Red (1), Yellow (2), Green (3).
Therefore, $|C| = 3$.

**Example 2: Days of the Week**
Let $D$ be the set of days in a week. $D = \{\text{Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}\}$.
Counting these, we get 7 distinct elements. So, $|D| = 7$.

This seems very straightforward, right? And it is! For finite sets, cardinality is simply the count of its unique elements.

**Important Point:** Remember that sets contain *distinct* elements. If we had a set like $S = \{1, 2, 2, 3\}$, the actual set is $\{1, 2, 3\}$, and its cardinality is $|S| = 3$, not 4.

**Connection to CO2:** This simple counting is the most basic form of what CO2 asks us to do. When we learn about the Rule of Sum or Rule of Product later, we'll be using the cardinalities of sets to figure out total possibilities.

### Empty Set and Singleton Sets

Let's consider some special cases of finite sets.

*   **The Empty Set:** This is a set with no elements at all. We denote it by $\emptyset$ or $\{\}$. What do you think its cardinality is? Of course, it's zero!
    $|\emptyset| = 0$.
    This is a crucial concept. The empty set is foundational in many areas of mathematics and computer science.

*   **Singleton Set:** A set with exactly one element is called a singleton set.
    For example, if $A = \{5\}$, then $|A| = 1$.

### Operations on Sets and Their Cardinalities

Often, we'll be dealing with multiple sets and performing operations on them. How do the cardinalities of the resulting sets relate to the cardinalities of the original sets? This is where things get really interesting and directly tie into CO2.

#### Union of Sets and the Principle of Inclusion-Exclusion

Consider two sets, $A$ and $B$. We want to find the cardinality of their union, $|A \cup B|$. This is the set of elements that are in $A$, or in $B$, or in both.

If we simply add $|A|$ and $|B|$, we're double-counting the elements that are in *both* sets (i.e., the elements in the intersection, $A \cap B$).

**The Principle of Inclusion-Exclusion for Two Sets:**
To get the correct count for the union, we add the cardinalities of $A$ and $B$, and then subtract the cardinality of their intersection:

$|A \cup B| = |A| + |B| - |A \cap B|$

**Let's make this visual and relatable:**

Imagine you have two groups of friends:
*   Group $A$: Friends who like pizza.
*   Group $B$: Friends who like burgers.

You want to know the total number of friends who like *either* pizza *or* burgers (or both).

If you just count everyone in Group $A$ and everyone in Group $B$ and add them up, you'll count your friends who love *both* pizza and burgers twice – once when you count the pizza-lovers, and again when you count the burger-lovers.

So, what do you do? You count the pizza-lovers, count the burger-lovers, and then subtract the count of those friends who love *both* pizza and burgers. That way, each friend is counted exactly once.

**Example 3: Pizza and Burger Lovers**
Let $A$ be the set of friends who like pizza, and $|A| = 10$.
Let $B$ be the set of friends who like burgers, and $|B| = 8$.
Suppose 3 of your friends love both pizza and burgers. This means $|A \cap B| = 3$.

The total number of friends who like pizza or burgers (or both) is:
$|A \cup B| = |A| + |B| - |A \cap B| = 10 + 8 - 3 = 15$.

So, 15 friends like pizza or burgers.

**Connection to CO2:** This formula is a direct application of the Principle of Inclusion-Exclusion, a key technique mentioned in CO2 for solving counting problems. This principle extends to more than two sets, becoming more complex but following the same logic of adding individual counts, subtracting pairwise intersections, adding triple intersections, and so on, alternating signs.

#### Intersection of Sets

The **intersection** of two sets, $A \cap B$, is the set of elements that are common to both $A$ and $B$. Its cardinality, $|A \cap B|$, is simply the count of these common elements.

#### Disjoint Sets

If two sets have no elements in common, they are called **disjoint sets**. For disjoint sets $A$ and $B$, their intersection is the empty set: $A \cap B = \emptyset$.
Consequently, the cardinality of their intersection is zero: $|A \cap B| = 0$.

In the case of disjoint sets, the formula for the union simplifies beautifully:
If $A$ and $B$ are disjoint, then $|A \cup B| = |A| + |B|$.
This is essentially the **Rule of Sum** from CO2! If you have two separate tasks that cannot be done at the same time, and task A can be done in $|A|$ ways and task B can be done in $|B|$ ways, then the total number of ways to do either task A or task B is $|A| + |B|$.

**Example 4: Disjoint Sets**
Let $V$ be the set of vowels in the English alphabet: $V = \{A, E, I, O, U\}$. So, $|V|=5$.
Let $C$ be the set of consonants in the English alphabet: $C = \{B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z\}$. So, $|C|=21$.

The set of vowels and the set of consonants are disjoint. They have no elements in common.
$V \cap C = \emptyset$, so $|V \cap C| = 0$.

The number of letters in the alphabet that are either vowels or consonants is:
$|V \cup C| = |V| + |C| = 5 + 21 = 26$. This is the total number of letters in the alphabet.

#### Difference of Sets

The **difference** of set $A$ and set $B$, denoted $A - B$, is the set of elements that are in $A$ but not in $B$.
The cardinality $|A - B|$ is the number of elements in $A$ that are not in $B$.

We know that $A = (A - B) \cup (A \cap B)$. Since $(A-B)$ and $(A \cap B)$ are disjoint, we have $|A| = |A - B| + |A \cap B|$.
Therefore, $|A - B| = |A| - |A \cap B|$.

**Example 5: Students in Courses**
Suppose a university has 100 students enrolled in Mathematics (set $M$) and 80 students enrolled in Physics (set $P$).
Let $|M| = 100$ and $|P| = 80$.
If 30 students are enrolled in both Mathematics and Physics, then $|M \cap P| = 30$.

How many students are enrolled *only* in Mathematics?
This is $|M - P| = |M| - |M \cap P| = 100 - 30 = 70$.
So, 70 students are taking Mathematics but not Physics.

Similarly, the number of students taking Physics but not Mathematics is $|P - M| = |P| - |P \cap P| = 80 - 30 = 50$.

Now, we can also calculate the total number of students taking at least one of these subjects:
$|M \cup P| = |M| + |P| - |M \cap P| = 100 + 80 - 30 = 150$.
Alternatively, using the disjoint components:
$|M \cup P| = |M - P| + |P - M| + |M \cap P| = 70 + 50 + 30 = 150$. It checks out!

**Textbook Reference:** Kenneth H. Rosen's "Discrete Mathematics and its Applications" (8th ed.) covers these fundamental set operations and their cardinality properties extensively in its early chapters. He emphasizes how these principles are building blocks for more complex combinatorial arguments.

### Infinite Sets: A Bigger Challenge

Up to now, we've been dealing with finite sets, where counting is simple. But what about infinite sets? This is where things become mind-bending and incredibly important for understanding theoretical computer science, algorithms, and computability.

**What is an infinite set?** An infinite set is a set that is not finite. It has an unending number of elements.

**Example 6: The Set of Natural Numbers**
Let $\mathbb{N} = \{1, 2, 3, 4, \dots\}$ be the set of natural numbers. This set is infinite. How do we count its elements? We can't! We can't assign a finite number to its cardinality.

This is where we introduce the concept of **different sizes of infinity**. This might sound paradoxical, but it's true! Not all infinite sets are the same "size."

#### Countable Infinity

A set is **countably infinite** if its elements can be put into a one-to-one correspondence with the set of natural numbers $\mathbb{N}$. This means we can, in principle, list all its elements in an ordered sequence: $a_1, a_2, a_3, \dots$.

The cardinality of countably infinite sets is denoted by $\aleph_0$ (aleph-null).

**Example 7: The Set of Even Numbers**
Let $E = \{2, 4, 6, 8, \dots\}$ be the set of even natural numbers.
Is this set infinite? Yes. Is it the "same size" as the set of all natural numbers? Surprisingly, yes!

We can establish a one-to-one correspondence:
$\mathbb{N} = \{1, 2, 3, 4, \dots\}$
$E = \{2, 4, 6, 8, \dots\}$

We can pair them up:
1 $\leftrightarrow$ 2
2 $\leftrightarrow$ 4
3 $\leftrightarrow$ 6
$n \leftrightarrow 2n$

For every natural number $n$, there's a unique even number $2n$, and for every even number $m$, there's a unique natural number $m/2$. This one-to-one correspondence shows that $|E| = |\mathbb{N}| = \aleph_0$.

This is a classic example illustrating that an infinite set can have the same cardinality as a proper subset of itself. This is a hallmark of infinite sets, something that *never* happens with finite sets.

**Other Countably Infinite Sets:**
*   The set of integers $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$. We can list them: $0, 1, -1, 2, -2, 3, -3, \dots$.
*   The set of rational numbers $\mathbb{Q}$ (fractions $p/q$). This is less obvious, but Cantor proved that $\mathbb{Q}$ is also countably infinite.

**Connection to CO2:** While CO2 focuses on "elementary counting techniques," understanding countable infinity is crucial for grasping why certain combinatorial arguments work and why certain limits in probability or analysis are what they are. For instance, when dealing with sequences or streams of data, their countability is a fundamental assumption.

#### Uncountable Infinity

Not all infinite sets are countable. Some are "larger" than the set of natural numbers. This is **uncountable infinity**.

The most famous example is the set of real numbers, $\mathbb{R}$.

**Example 8: The Set of Real Numbers**
The set of real numbers between 0 and 1, the interval $[0, 1]$, is uncountably infinite. Georg Cantor famously proved this using a technique called **diagonalization**.

The proof idea (simplified): Assume you could list all real numbers between 0 and 1. You'd have a list like:
$r_1 = 0.d_{11}d_{12}d_{13}d_{14}\dots$
$r_2 = 0.d_{21}d_{22}d_{23}d_{24}\dots$
$r_3 = 0.d_{31}d_{32}d_{33}d_{34}\dots$
$\dots$

Now, construct a new real number, $x$, such that its $i$-th decimal digit is different from the $i$-th decimal digit of $r_i$. For example, if $d_{ii}$ is the $i$-th digit of $r_i$, let the $i$-th digit of $x$ be $d'_{ii}$ such that $d'_{ii} \neq d_{ii}$ (and avoid issues with repeating 9s, like 0.5000... vs 0.4999...).

This new number $x$ would be a real number between 0 and 1, but it cannot be in your list because it differs from every number on the list in at least one decimal place (specifically, the $i$-th place for $r_i$). This contradicts the assumption that you could list all of them.

The cardinality of the set of real numbers is denoted by $c$ or $2^{\aleph_0}$. Cantor proved that $c > \aleph_0$.

**Implications for Computer Science:**
The fact that there are uncountably many real numbers has profound implications. For instance, it tells us that there are infinitely more possible values for a continuous measurement (like time or temperature) than there are whole numbers or even rational numbers. This is fundamental to understanding computability, limits of computation, and the nature of continuous data.

**Textbook Reference:** The discussion of different sizes of infinity, countable versus uncountable sets, and Cantor's diagonalization argument can be found in more advanced chapters of Rosen's book or in specialized texts on set theory and computability. Schaum's Outline series also provides clear explanations and examples of these concepts.

### Cardinality and Other Course Outcomes

While the direct link is to CO2, understanding cardinality is essential for other outcomes as well:

*   **CO1 (Logic):** While not immediately obvious, the rigor in defining sets and their properties, including cardinality, underpins the formal systems of logic.
*   **CO3 (Relations):** When we talk about the number of possible relations between two sets, we use cardinalities. For example, if set $A$ has $|A|$ elements and set $B$ has $|B|$ elements, the total number of distinct binary relations from $A$ to $B$ is $2^{|A||B|}$. This is a direct application of counting.
*   **CO4 (Posets, Lattices):** The properties of partially ordered sets and lattices are often defined and analyzed based on the underlying sets and their cardinalities. For instance, the size of a lattice can determine its complexity.
*   **CO5 (Recurrence Relations):** Many recurrence relations arise from counting problems involving sets. The number of ways to solve a problem can often be expressed as a recurrence relation whose initial conditions depend on set cardinalities.
*   **CO6 (Algebraic Structures):** The cardinality of the underlying set of a group or monoid is a fundamental property. For example, the order of a group is the cardinality of its underlying set.

### Quick Review and Exam Tips

*   **Finite Sets:** Cardinality is simply the count of distinct elements. $|A|$.
*   **Infinite Sets:** Different sizes of infinity exist!
    *   **Countably Infinite:** Can be put into 1-to-1 correspondence with $\mathbb{N}$. Cardinality $\aleph_0$. Examples: $\mathbb{N}, \mathbb{Z}, \mathbb{Q}$.
    *   **Uncountably Infinite:** Cannot be put into 1-to-1 correspondence with $\mathbb{N}$. Cardinality $c$ or $2^{\aleph_0}$. Example: $\mathbb{R}$.
*   **Key Operations & Cardinalities:**
    *   $|A \cup B| = |A| + |B| - |A \cap B|$ (Inclusion-Exclusion)
    *   $|A - B| = |A| - |A \cap B|$
    *   If $A \cap B = \emptyset$, then $|A \cup B| = |A| + |B|$ (Rule of Sum)
*   **Common Pitfalls:** Forgetting to subtract the intersection in the union formula for non-disjoint sets. Misunderstanding that infinite sets can have different sizes.

Remember this: Understanding how to count elements in sets, both finite and infinite, is the gateway to many powerful counting techniques and a deep appreciation for the structure of discrete mathematical objects.

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **What is the cardinality of the set $S = \{ \text{prime numbers less than 10} \}$?**
    *   **Answer:** The prime numbers less than 10 are 2, 3, 5, and 7. So, $S = \{2, 3, 5, 7\}$. The cardinality is $|S| = 4$.

2.  **Explain why the set of even natural numbers has the same cardinality as the set of natural numbers.**
    *   **Answer:** Both sets are countably infinite. We can establish a one-to-one correspondence between the set of natural numbers $\mathbb{N} = \{1, 2, 3, \dots\}$ and the set of even natural numbers $E = \{2, 4, 6, \dots\}$ by mapping each natural number $n$ to the even number $2n$. This bijection demonstrates that they have the same cardinality, $\aleph_0$.

3.  **Given two sets $A$ and $B$ where $|A|=15$, $|B|=20$, and $|A \cap B|=7$. What is $|A \cup B|$?**
    *   **Answer:** Using the Principle of Inclusion-Exclusion: $|A \cup B| = |A| + |B| - |A \cap B| = 15 + 20 - 7 = 28$.

**Exam-Oriented Questions:**

4.  **A survey of 100 students found that 60 liked Coffee, 50 liked Tea, and 30 liked both Coffee and Tea. How many students liked neither Coffee nor Tea?**
    *   **Reasoning:**
        *   Let $C$ be the set of students who liked Coffee, $|C| = 60$.
        *   Let $T$ be the set of students who liked Tea, $|T| = 50$.
        *   The set of students who liked both is $C \cap T$, so $|C \cap T| = 30$.
        *   The number of students who liked at least one of them (Coffee or Tea) is $|C \cup T|$.
        *   Using Inclusion-Exclusion: $|C \cup T| = |C| + |T| - |C \cap T| = 60 + 50 - 30 = 110 - 30 = 80$.
        *   The total number of students surveyed is 100.
        *   The number of students who liked neither is the total number of students minus those who liked at least one: $100 - |C \cup T| = 100 - 80 = 20$.
    *   **Answer:** 20 students liked neither Coffee nor Tea.

5.  **Prove or disprove: The set of all finite binary strings is countably infinite.**
    *   **Reasoning:** A finite binary string is a sequence of 0s and 1s of finite length, like "", "0", "1", "00", "01", "10", "11", "000", etc.
    *   We can order these strings by length first, and then lexicographically (alphabetically) within each length.
        *   Length 0: ""
        *   Length 1: "0", "1"
        *   Length 2: "00", "01", "10", "11"
        *   Length 3: "000", "001", "010", "011", "100", "101", "110", "111"
        *   And so on...
    *   This process allows us to list every possible finite binary string in an infinite sequence. This establishes a one-to-one correspondence with the natural numbers.
    *   **Answer:** True. The set of all finite binary strings is countably infinite.

6.  **Consider the sets $A = \{1, 3, 5, 7, 9\}$ and $B = \{1, 2, 3, 4, 5\}$. Find $|A - B|$ and $|B - A|$.**
    *   **Reasoning:**
        *   $A - B$ is the set of elements in $A$ but not in $B$.
        *   $A = \{1, 3, 5, 7, 9\}$
        *   $B = \{1, 2, 3, 4, 5\}$
        *   Common elements are $\{1, 3, 5\}$.
        *   Elements in $A$ but not in $B$ are $\{7, 9\}$. So, $A - B = \{7, 9\}$.
        *   $|A - B| = 2$.
        *   Using the formula: $|A - B| = |A| - |A \cap B|$. First find $|A \cap B|$. $A \cap B = \{1, 3, 5\}$, so $|A \cap B| = 3$.
        *   $|A| = 5$. So, $|A - B| = 5 - 3 = 2$. This matches.
        *   $B - A$ is the set of elements in $B$ but not in $A$.
        *   Elements in $B$ but not in $A$ are $\{2, 4\}$. So, $B - A = \{2, 4\}$.
        *   $|B - A| = 2$.
        *   Using the formula: $|B - A| = |B| - |A \cap B| = 5 - 3 = 2$. This matches.
    *   **Answer:** $|A - B| = 2$ and $|B - A| = 2$.
