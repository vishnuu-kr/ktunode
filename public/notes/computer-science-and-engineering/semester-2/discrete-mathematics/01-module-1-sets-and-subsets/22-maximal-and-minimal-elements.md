---
title: "Maximal and Minimal Elements"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f95"
status: "completed"
scrapedAt: "2026-05-20T16:32:54.820Z"
---
Alright everyone, settle in! Today, we're diving deeper into the fascinating world of sets, specifically exploring some really important concepts that help us understand the structure within them, especially when they're ordered. We're talking about **Maximal and Minimal Elements**. This might sound a little abstract at first, but trust me, these ideas are foundational, and you'll see them pop up in all sorts of places in computer science, from organizing data to understanding the logic behind algorithms.

Remember, in Discrete Mathematics, we're often building complex systems from simpler building blocks. Sets are our building blocks, and understanding the relationships *within* those sets – like what's "highest" or "lowest" according to some ordering – is crucial. This ties directly into **Course Outcome 4 (CO4)**, where we're looking at Partially Ordered Sets and how they apply in computer science. Think of this as understanding the "hierarchy" in a system, which is vital for things like file systems or task scheduling.

### Understanding the Foundation: Relations and Orderings

Before we get to maximal and minimal elements, we need to make sure we're on the same page about relations, and specifically, **partial orders**.

You'll recall from our earlier discussions and the foundational texts like Rosen and Krithivasan, that a relation $R$ on a set $A$ is simply a subset of $A \times A$. When we talk about "ordering," we're usually dealing with relations that have special properties. A relation $\preceq$ on a set $S$ is a **partial order** if it satisfies three key properties:

1.  **Reflexivity**: For every $a \in S$, we must have $a \preceq a$. This is like saying everything is related to itself. Simple, right?
2.  **Antisymmetry**: If $a \preceq b$ and $b \preceq a$, then it must be that $a = b$. This is super important. It means if two elements are "related" in both directions, they must be the same element. This prevents cycles in our ordering.
3.  **Transitivity**: If $a \preceq b$ and $b \preceq c$, then we must have $a \preceq c$. This is the "chain reaction" property – if A comes before or is equal to B, and B comes before or is equal to C, then A must come before or be equal to C.

A set $S$ together with a partial order relation $\preceq$ is called a **partially ordered set**, or **poset**, denoted as $(S, \preceq)$.

Now, why is this important? Because maximal and minimal elements are defined *with respect to a specific partial order*. Without an order, the concepts don't really make sense.

### What Exactly are Maximal and Minimal Elements?

Let's start with the "lowest" points in our ordered structure.

#### Minimal Elements

Imagine you have a list of tasks that need to be done, and some tasks must be completed before others. For instance, you can't bake a cake until you've bought the ingredients. In this scenario, "buying ingredients" might be a minimal task – there's no other task *required* before it.

Formally, in a partially ordered set $(S, \preceq)$, an element $m \in S$ is a **minimal element** if there is no other element $a \in S$ such that $a \preceq m$ and $a \neq m$.

Let's break that down:
*   "No other element $a$": We're looking at all other elements in the set.
*   "such that $a \preceq m$": This means there's no element that comes *before* $m$ in our ordering.
*   "and $a \neq m$": This is crucial. Reflexivity tells us $m \preceq m$, but we're interested if something *else* precedes it.

So, a minimal element is an element that has no predecessors other than itself. It’s a starting point in our ordered structure.

**Think of it like this:** If you're organizing your school subjects by prerequisites (e.g., you need to take Algebra before Calculus), a minimal subject would be one that doesn't require any other subject as a prerequisite. Maybe an introductory art class or a physical education class.

**Example 1: Divisibility Relation**

Let $S = \{1, 2, 3, 4, 6, 12\}$ and the relation $\preceq$ be the divisibility relation. So, $a \preceq b$ if $a$ divides $b$. This is a classic example of a partial order.

Let's check for minimal elements:
*   Can any element divide 1 (other than 1 itself)? No. So, 1 is a minimal element.
*   Can any element divide 2 (other than 2)? Yes, 1 divides 2. So, 2 is not minimal.
*   Can any element divide 3 (other than 3)? Yes, 1 divides 3. So, 3 is not minimal.
*   Can any element divide 4 (other than 4)? Yes, 1 divides 4, and 2 divides 4. So, 4 is not minimal.
*   And so on for 6 and 12.

Therefore, in this poset $(S, |)$, the only minimal element is **1**.

**Example 2: String Length**

Consider the set of strings $S = \{\text{"a"}, \text{"an"}, \text{"the"}, \text{"apple"}, \text{"banana"}\}$ and the relation $\preceq$ be "is a prefix of" (or "is shorter than or equal to the length of").
Is "is a prefix of" a partial order?
*   Reflexive: Yes, "a" is a prefix of "a".
*   Antisymmetric: If "a" is a prefix of "b", and "b" is a prefix of "a", then "a" and "b" must be the same string. Yes.
*   Transitive: If "a" is a prefix of "b", and "b" is a prefix of "c", then "a" is a prefix of "c". Yes.

So, it's a partial order. Now, minimal elements:
*   "a": Is there any other string in $S$ that is a prefix of "a"? No. So, "a" is minimal.
*   "an": Is there any other string in $S$ that is a prefix of "an"? Yes, "a" is a prefix of "an". So, "an" is not minimal.
*   "the": Is there any other string in $S$ that is a prefix of "the"? No. So, "the" is minimal.
*   "apple": Is there any other string in $S$ that is a prefix of "apple"? Yes, "a" is a prefix of "apple". So, "apple" is not minimal.
*   "banana": Is there any other string in $S$ that is a prefix of "banana"? Yes, "a" is a prefix of "banana". So, "banana" is not minimal.

In this poset, the minimal elements are **"a"** and **"the"**. Notice we can have more than one minimal element!

#### Maximal Elements

Maximal elements are the "highest" points in our ordered structure. They are elements that nothing else in the set comes *after*.

Formally, in a partially ordered set $(S, \preceq)$, an element $m \in S$ is a **maximal element** if there is no other element $a \in S$ such that $m \preceq a$ and $m \neq a$.

This means that for a maximal element $m$, any other element $a$ related to $m$ must satisfy $a \preceq m$. In other words, if something is "greater than or equal to" $m$, it must actually be $m$ itself.

**Think of it like this:** In our prerequisite example, a maximal subject would be one that no other subject is a prerequisite for. Perhaps an advanced graduate-level course that no further courses depend on within your current curriculum.

**Example 1 Revisited: Divisibility Relation**

Let $S = \{1, 2, 3, 4, 6, 12\}$ and the relation $\preceq$ be divisibility.

Let's check for maximal elements:
*   Is 1 maximal? No, 2 is greater than 1 (1 divides 2) and $1 \neq 2$.
*   Is 2 maximal? No, 4 is greater than 2 (2 divides 4) and $2 \neq 4$. Also, 6 is greater than 2.
*   Is 3 maximal? No, 6 is greater than 3 (3 divides 6) and $3 \neq 6$. Also, 12 is greater than 3.
*   Is 4 maximal? No, 12 is greater than 4 (4 divides 12) and $4 \neq 12$.
*   Is 6 maximal? No, 12 is greater than 6 (6 divides 12) and $6 \neq 12$.
*   Is 12 maximal? Are there any elements $a \in S$ such that $12 \preceq a$ and $12 \neq a$? No. 12 only divides itself within the set. So, 12 is a maximal element.

In this poset $(S, |)$, the only maximal element is **12**.

**Example 2 Revisited: String Length**

Consider $S = \{\text{"a"}, \text{"an"}, \text{"the"}, \text{"apple"}, \text{"banana"}\}$ with $\preceq$ being "is a prefix of".

Let's check for maximal elements:
*   "a": Is there any other string in $S$ that has "a" as a prefix? Yes, "an", "apple". So, "a" is not maximal.
*   "an": Is there any other string in $S$ that has "an" as a prefix? No. So, "an" is maximal.
*   "the": Is there any other string in $S$ that has "the" as a prefix? No. So, "the" is maximal.
*   "apple": Is there any other string in $S$ that has "apple" as a prefix? No. So, "apple" is maximal.
*   "banana": Is there any other string in $S$ that has "banana" as a prefix? No. So, "banana" is maximal.

In this poset, the maximal elements are **"an"**, **"the"**, **"apple"**, and **"banana"**. Again, we can have multiple maximal elements.

### Relationship Between Minimal/Maximal and Smallest/Largest

This is a really important point and a common source of confusion, so pay close attention.

*   A **smallest element** (or minimum element) is a minimal element that is also smaller than or equal to *all other* elements in the set. If a set has a smallest element, it must be unique.
*   A **largest element** (or maximum element) is a maximal element that is also larger than or equal to *all other* elements in the set. If a set has a largest element, it must be unique.

Let's look at our examples again:

**Example 1 (Divisibility):**
*   Minimal element: 1. Is 1 smaller than or equal to all other elements in $S$? Yes, because 1 divides everything. So, 1 is the smallest element. It's unique.
*   Maximal element: 12. Is 12 larger than or equal to all other elements in $S$? No. For instance, 12 is not greater than or equal to 1 (in terms of divisibility, 1 divides 12, so 12 $\preceq$ 1 is false). So, 12 is maximal, but not the largest element.

**Example 2 (Prefix):**
*   Minimal elements: "a", "the". Is "a" smaller than or equal to "the"? No. Is "the" smaller than or equal to "a"? No. So neither "a" nor "the" is smaller than *all other* elements. Therefore, there is no smallest element.
*   Maximal elements: "an", "the", "apple", "banana". Is "an" larger than or equal to all other maximal elements? No, "an" is not related to "the", "apple", or "banana". So, there is no largest element.

**Key Takeaway:** Every smallest element is minimal, and every largest element is maximal. However, the converse is not always true. A poset can have minimal elements but no smallest element, and maximal elements but no largest element. This happens when the partial order is not "total" or "linear" – meaning there are pairs of elements that are incomparable.

Think about the prerequisite example again. If you have two independent introductory courses, say "Introduction to Programming" and "Calculus I," neither is a prerequisite for the other, and neither requires a prerequisite within that set. Both would be minimal. But you can't say one is "smaller" than the other in terms of ordering.

### Why are these Concepts Important in Computer Science?

Understanding maximal and minimal elements helps us analyze the structure of ordered data and systems. This directly supports **CO4 (Illustrate an application for Partially Ordered Sets and Complete Lattices, in Computer Science)**.

1.  **Task Scheduling and Dependency Graphs:** In project management or operating systems, tasks often have dependencies. A minimal task is one that can be started immediately, as it has no preceding tasks. Maximal tasks are those that, once completed, don't block any further tasks in the current scope. Identifying these helps in optimizing schedules and detecting deadlocks. For example, if you have a set of processes waiting for resources, a minimal process might be one that isn't waiting for any other process to release a resource.

2.  **Hierarchical File Systems:** Consider a file system. Directories and files can be viewed in a hierarchy. If we define a relation $a \preceq b$ as "$a$ is contained within or is the same as $b$", then minimal elements would be files that are not in any subdirectories (at the root level, or in directories that contain no other directories). Maximal elements would be directories or files that don't contain any other items (empty directories, or files themselves). This helps in understanding the depth and scope of directories.

3.  **Data Mining and Pattern Recognition:** In some algorithms, you might be looking for the "most general" or "most specific" patterns. Minimal elements could represent the most specific patterns, and maximal elements the most general ones. For example, in association rule mining, you might find minimal itemsets that meet a certain support threshold, and maximal itemsets that are not subsets of any larger frequent itemsets.

4.  **Algorithm Design and Optimization:** Many algorithms rely on finding starting points or end points. For instance, in graph algorithms, finding nodes with an in-degree of 0 (which would be minimal in a directed acyclic graph ordered by reachability) allows us to start topological sorting. Identifying maximal elements can help in pruning search spaces or identifying termination conditions.

### Checking for Maximal/Minimal Elements: A Practical Approach

When you're faced with a problem in an exam or in practice, here’s a mental checklist:

1.  **Identify the Set (S) and the Relation ( $\preceq$ ):** This is the absolute first step. What are you working with? Is the relation indeed a partial order? (Usually, it's given as such, but it's good practice to be aware.)

2.  **For Minimal Elements:**
    *   Pick an element $m$ from $S$.
    *   Look at *all other* elements $a \in S$, where $a \neq m$.
    *   Ask: "Is there any $a$ such that $a \preceq m$?"
    *   If the answer is NO for *any* element $a \neq m$, then $m$ is minimal.
    *   If for a specific $m$, you find *even one* $a \neq m$ such that $a \preceq m$, then $m$ is NOT minimal.

3.  **For Maximal Elements:**
    *   Pick an element $m$ from $S$.
    *   Look at *all other* elements $a \in S$, where $a \neq m$.
    *   Ask: "Is there any $a$ such that $m \preceq a$?"
    *   If the answer is NO for *any* element $a \neq m$, then $m$ is maximal.
    *   If for a specific $m$, you find *even one* $a \neq m$ such that $m \preceq a$, then $m$ is NOT maximal.

**Common Pitfall:** Forgetting the "$a \neq m$" part. Remember, $m \preceq m$ is always true by reflexivity, but we're looking for something *else* that precedes or succeeds $m$.

### How this connects to other Course Outcomes:

*   **CO1 (Logic):** While not directly about logic gates, understanding these definitions requires precise logical phrasing. "There exists no element $a$ such that..." is a logical statement that needs careful handling.
*   **CO3 (Binary Relations):** This topic is a direct application of understanding binary relations, specifically those that form partial orders. We're classifying elements based on their position within the relation's structure.
*   **CO4 (Posets and Lattices):** As we've seen, maximal and minimal elements are key features used to describe the structure of partially ordered sets, which is the core of CO4.

---

### Sample Questions and Answers

Let's test our understanding with some questions.

**Question 1 (Conceptual):**
In a poset $(S, \preceq)$, if an element $m$ is the unique smallest element, is it guaranteed to be the unique maximal element? Explain why or why not.

**Answer 1:**
No, it is not guaranteed. A unique smallest element $m$ satisfies $m \preceq x$ for all $x \in S$. This makes $m$ a minimal element (as no other element precedes it, other than itself). However, for $m$ to be a maximal element, it must be that $m \preceq x$ implies $m=x$ for all $x \in S$. This can only happen if the set $S$ contains only one element, $m$. If $S$ has more than one element, and $m$ is the smallest, then for any other element $x \neq m$, we have $m \preceq x$. If $x \neq m$, then $m$ is not maximal.

**Example:** Consider $S = \{1, 2, 3\}$ with the usual "less than or equal to" relation $\leq$. Here, 1 is the unique smallest element. However, 3 is the unique maximal element. 1 is not maximal because $1 \leq 2$ and $1 \neq 2$.

**Question 2 (Application):**
Let the set $S$ be the set of all positive integers, and let the relation $\preceq$ be defined such that $a \preceq b$ if $a$ divides $b$.
(a) Find all minimal elements in $S$.
(b) Find all maximal elements in $S$.

**Answer 2:**
The relation is $a \preceq b$ if $a|b$. The set $S$ is the set of all positive integers $\{1, 2, 3, 4, \ldots\}$.

(a) **Minimal Elements:** An element $m \in S$ is minimal if there is no $a \in S$, $a \neq m$, such that $a|m$.
Consider the element 1. Does any other positive integer $a$ divide 1 (where $a \neq 1$)? No. Therefore, 1 is a minimal element.
Now consider any other positive integer $k > 1$. The integer 1 is always a divisor of $k$. So, $1 | k$ and $1 \neq k$. This means that any integer $k > 1$ has a predecessor (1) in the divisibility relation.
Thus, the only minimal element in $S$ is **1**.

(b) **Maximal Elements:** An element $m \in S$ is maximal if there is no $a \in S$, $a \neq m$, such that $m|a$.
Consider any positive integer $m$. Can we find another positive integer $a \neq m$ such that $m|a$? Yes, for example, $a = 2m$. Since $m$ is a positive integer, $2m$ is also a positive integer, and $m \neq 2m$. So, $m | 2m$.
This means that *every* positive integer $m$ is succeeded by another element $2m$ (or $3m$, etc.) in the divisibility relation, where $m \neq 2m$.
Therefore, there are **no maximal elements** in the set of all positive integers under the divisibility relation.

**Question 3 (Exam-style - tricky!):**
Let $S = \{2, 3, 4, 5, 6, 10, 12\}$ and the relation $\preceq$ be the divisibility relation ($a \preceq b$ if $a|b$).
(a) Draw a Hasse diagram for this poset.
(b) Identify all minimal elements.
(c) Identify all maximal elements.
(d) Does $S$ have a smallest element? If yes, which one?
(e) Does $S$ have a largest element? If yes, which one?

**Answer 3:**
The relation is $a \preceq b$ if $a|b$. $S = \{2, 3, 4, 5, 6, 10, 12\}$.

(a) **Hasse Diagram:** We only draw lines between elements $a, b$ where $a \preceq b$, $a \neq b$, and there is no intermediate element $c$ such that $a \preceq c$ and $c \preceq b$.
*   2 divides 4, 6, 10, 12.
*   3 divides 6, 12.
*   4 divides 12.
*   5 divides 10.
*   6 divides 12.
*   10 and 12 do not divide any other elements in the set.

The diagram would show:
*   2 connected to 4, 6, 10, 12.
*   3 connected to 6, 12.
*   4 connected to 12.
*   5 connected to 10.
*   6 connected to 12.

The minimal elements will be at the bottom, maximal at the top.
The connections will be:
(2) -> (4) -> (12)
(2) -> (6) -> (12)
(2) -> (10) <- (5)
(3) -> (6) -> (12)
(3) -> (12)

Let's simplify for Hasse diagram (removing transitive edges and self-loops):
Minimal elements: 2, 3, 5 (nothing divides them within the set, other than themselves).
Maximal elements: 10, 12 (nothing in the set is divided by them, other than themselves).

The Hasse diagram will look something like this (visualize nodes and upward arrows):
     12
    /  \
   6    4
  / \  /
 3   2
  \ /
   5 --> 10

A more precise Hasse diagram would look like:
Nodes: 2, 3, 4, 5, 6, 10, 12
Direct relations (a divides b):
2 divides 4, 6, 10, 12
3 divides 6, 12
4 divides 12
5 divides 10
6 divides 12

Minimal elements are those with no incoming arrows (other than from themselves): 2, 3, 5.
Maximal elements are those with no outgoing arrows: 10, 12.

(b) **Minimal elements:** Elements that are not divisible by any *other* element in $S$.
*   2: No other element in S divides 2. Minimal.
*   3: No other element in S divides 3. Minimal.
*   4: 2 divides 4. Not minimal.
*   5: No other element in S divides 5. Minimal.
*   6: 2 divides 6, 3 divides 6. Not minimal.
*   10: 2 divides 10, 5 divides 10. Not minimal.
*   12: 2 divides 12, 3 divides 12, 4 divides 12, 6 divides 12. Not minimal.
Minimal elements are **2, 3, 5**.

(c) **Maximal elements:** Elements that do not divide any *other* element in $S$.
*   2: Divides 4, 6, 10, 12. Not maximal.
*   3: Divides 6, 12. Not maximal.
*   4: Divides 12. Not maximal.
*   5: Divides 10. Not maximal.
*   6: Divides 12. Not maximal.
*   10: Does not divide any other element in S. Maximal.
*   12: Does not divide any other element in S. Maximal.
Maximal elements are **10, 12**.

(d) **Smallest element:** An element that is $\preceq$ to all other elements.
Is 2 $\preceq$ to all elements? 2 does not divide 3, 5. So, 2 is not the smallest.
Is 3 $\preceq$ to all elements? 3 does not divide 2, 4, 5, 10. So, 3 is not the smallest.
Is 5 $\preceq$ to all elements? 5 does not divide 2, 3, 4, 6, 12. So, 5 is not the smallest.
Since there are multiple minimal elements (2, 3, 5) and none of them is $\preceq$ to all others, there is **no smallest element**.

(e) **Largest element:** An element that is $\preceq$ from all other elements.
Is 10 $\preceq$ from all elements? No, 2 does not divide 10, 3 does not divide 10, 4 does not divide 10, 6 does not divide 10. (Actually, 10 is not $\preceq$ *from* any other element in the relation definition, it means the other element divides it. So, is 2 $\preceq$ 10? Yes. Is 3 $\preceq$ 10? No. So 10 is not the largest).
Is 12 $\preceq$ from all elements? 2 divides 12. 3 divides 12. 4 divides 12. 6 divides 12. However, 5 does not divide 12, and 2 does not divide 12 (Oh, wait, 2 divides 12). Let's rephrase: is there an element $x$ such that $x \preceq 12$ for all $x \in S$?
The elements $x$ such that $x|12$ are $\{2, 3, 4, 6, 12\}$.
The elements $x$ such that $x|10$ are $\{2, 5, 10\}$.
We need an element $L$ such that for all $s \in S$, $s|L$.
Since we have minimal elements like 2, 3, and 5, and they are not related to each other, there cannot be a single element that is a multiple of all of them. For example, what number is a multiple of 2, 3, and 5? It would have to be at least $2 \times 3 \times 5 = 30$. But 30 is not in our set $S$.
Therefore, there is **no largest element**.

---
This covers the core concepts of minimal and maximal elements, their definitions, how to find them, and their importance. Keep these ideas sharp, as they are fundamental to many more advanced topics in discrete mathematics and computer science!
