---
title: "Equivalence Classes"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f92"
status: "completed"
scrapedAt: "2026-05-20T16:32:52.557Z"
---
## Discrete Mathematics: Module 1 - Sets and Subsets
### Topic: Equivalence Classes

Welcome, everyone! Today, we're diving into a really fundamental and powerful concept in discrete mathematics: **Equivalence Classes**. This topic might seem a bit abstract at first, but trust me, it’s the bedrock for so many important ideas in computer science and mathematics. We’ll see how it ties directly into how we classify things, understand relationships, and even build the foundations for abstract algebra.

Before we jump into equivalence classes, let's quickly recap what we’ve been discussing in this module. We've explored sets – these collections of distinct objects – and how we can form subsets, which are sets containing only elements from a larger set. Now, imagine we have a large set, and we want to group its elements based on some shared property or relationship. That’s precisely where equivalence classes come in!

### Understanding Equivalence Relations: The Foundation

To talk about equivalence classes, we first need to understand what makes a relationship "equivalence-generating." This is where **equivalence relations** come into play. Think of a relation as a way of connecting elements within a set. For example, on the set of all people, "is a sibling of" is a relation. But not all relations are created equal.

An **equivalence relation** is a special kind of relation that satisfies three crucial properties. If we have a relation $R$ on a set $A$, $R$ is an equivalence relation if it's:

1.  **Reflexive**: For every element $a$ in set $A$, $a$ must be related to itself. In symbols, $\forall a \in A, (a, a) \in R$.
    *   *Think of it this way:* Every person is related to themselves in some way. If the relation is "is related to," then you are certainly related to yourself. This is a fairly intuitive property.

2.  **Symmetric**: If element $a$ is related to element $b$, then element $b$ must also be related to element $a$. In symbols, $\forall a, b \in A, \text{ if } (a, b) \in R, \text{ then } (b, a) \in R$.
    *   *Analogy time:* Consider the relation "is married to" on the set of people. If Alice is married to Bob, then Bob is also married to Alice. This symmetry is key. Another example from Rosen (8th ed.) is the relation "is a sibling of." If Alice is a sibling of Bob, then Bob is a sibling of Alice.

3.  **Transitive**: If element $a$ is related to element $b$, and element $b$ is related to element $c$, then element $a$ must also be related to element $c$. In symbols, $\forall a, b, c \in A, \text{ if } (a, b) \in R \text{ and } (b, c) \in R, \text{ then } (a, c) \in R$.
    *   *Let's visualize this:* Imagine a chain of connections. If you're friends with person X, and person X is friends with person Y, it doesn't *automatically* mean you're friends with person Y. But if the relation is "is in the same city as," and you are in New York, and Bob is in New York, and Carol is in New York, then you, Bob, and Carol are all in the same city. The relation carries through.

These three properties – reflexivity, symmetry, and transitivity – are the defining characteristics of an equivalence relation. When a relation has these properties, it essentially partitions the set into distinct, non-overlapping groups where all elements within a group are related to each other, and no element in one group is related to an element in another group. This is a crucial point that connects directly to Course Outcome CO3, where we classify binary relations. An equivalence relation is a specific type of binary relation that leads to this fundamental partitioning.

### Defining Equivalence Classes

Now that we have our strong foundation of equivalence relations, we can define what an equivalence class is.

Let $R$ be an equivalence relation on a set $A$. For any element $a \in A$, the **equivalence class of $a$**, denoted as $[a]$ or $C(a)$ or $Cl(a)$ (different texts use slightly different notation, Rosen often uses $[a]$), is the set of all elements in $A$ that are related to $a$ by $R$.

Formally, the equivalence class of $a$ is:
$$[a] = \{ x \in A \mid (x, a) \in R \}$$

*   **Let's break this down:** We pick an element, say 'a', from our set A. The equivalence class of 'a' is simply the collection of *all* elements in A that are "connected" to 'a' through our equivalence relation R. Because R is an equivalence relation, this connection is consistent and symmetric.

**Example: Students and their Birthdays**

Let's consider a relatable example. Suppose our set $A$ is the set of all students in our university.
Let our relation $R$ be "was born in the same month as."

Is this an equivalence relation?
*   **Reflexive?** Yes. Every student was born in *some* month, and they were born in that *same* month as themselves. If you were born in March, you were born in the same month as yourself.
*   **Symmetric?** Yes. If student Alice was born in the same month as student Bob, then Bob was definitely born in the same month as Alice.
*   **Transitive?** Yes. If Alice was born in the same month as Bob, and Bob was born in the same month as Carol, then Alice, Bob, and Carol were all born in the same month. Therefore, Alice was born in the same month as Carol.

Since "was born in the same month as" is an equivalence relation on the set of students, it creates equivalence classes.

What would the equivalence class of a student, say "Alice," look like?
$[Alice] = \{ \text{Student } x \in A \mid x \text{ was born in the same month as Alice} \}$

If Alice was born in March, her equivalence class would be the set of all students born in March. Similarly, the equivalence class of Bob (if he was born in July) would be the set of all students born in July.

Notice that these classes are disjoint. No student can be in the "born in March" class and the "born in July" class simultaneously. They form distinct groups. This concept of partitioning a set into disjoint subsets is fundamental.

### Key Properties and Connections

1.  **Disjointness of Equivalence Classes**: A very important property is that if you have two distinct equivalence classes, $[a]$ and $[b]$, then they are either identical ($[a] = [b]$) or they are completely disjoint ($[a] \cap [b] = \emptyset$). They *never* overlap partially.
    *   *Why is this true?* Suppose $[a] \cap [b] \neq \emptyset$. This means there's some element $c$ that is in both $[a]$ and $[b]$. So, $c \in [a]$ and $c \in [b]$.
    *   Since $c \in [a]$, we know $(c, a) \in R$.
    *   Since $c \in [b]$, we know $(c, b) \in R$.
    *   Now, because $R$ is symmetric, if $(c, a) \in R$, then $(a, c) \in R$.
    *   We have $(a, c) \in R$ and $(c, b) \in R$. Because $R$ is transitive, this implies $(a, b) \in R$.
    *   If $(a, b) \in R$, it means that $b$ is related to $a$. By the definition of an equivalence class, if $b$ is related to $a$, then $b$ must be in the equivalence class of $a$, i.e., $b \in [a]$.
    *   Now, let's look at any element $x$ in $[b]$. By definition, $(x, b) \in R$. Since we know $(a, b) \in R$, and $R$ is symmetric, $(b, a) \in R$. Now we have $(x, b) \in R$ and $(b, a) \in R$. By transitivity, $(x, a) \in R$. This means $x$ is related to $a$, so $x \in [a]$.
    *   Since every element in $[b]$ is also in $[a]$, we have $[b] \subseteq [a]$.
    *   We can use a similar argument starting with an element in $[a]$ to show $[a] \subseteq [b]$.
    *   Therefore, if the classes are not disjoint, they must be identical. This is a key result, often seen in proofs in Rosen or other texts.

2.  **Partitioning the Set**: The collection of all distinct equivalence classes of a set $A$ under an equivalence relation $R$ forms a **partition** of $A$. A partition of a set is a collection of non-empty, pairwise disjoint subsets whose union is the entire set.
    *   *This is the "big picture" idea:* Equivalence relations are the *mechanism* by which we break down a large, complex set into smaller, more manageable, and structurally similar "pieces." This is directly relevant to CO3 (classifying binary relations) and CO4 (applications of partially ordered sets and lattices, where partitioning can be a component).

**Example: Integers Modulo n**

This is a classic and incredibly important example in discrete mathematics.
Let $A$ be the set of all integers, $\mathbb{Z}$.
Let's define a relation $R$ on $\mathbb{Z}$ as follows:
$a R b$ if and only if $a - b$ is an integer multiple of $n$, where $n$ is a fixed positive integer.
We write this as $a \equiv b \pmod{n}$, which means "$a$ is congruent to $b$ modulo $n$."

Let's check if this is an equivalence relation:
*   **Reflexive?** For any integer $a$, $a - a = 0$. Since $0 = 0 \times n$, $0$ is an integer multiple of $n$. So, $a \equiv a \pmod{n}$. Yes, it's reflexive.
*   **Symmetric?** If $a \equiv b \pmod{n}$, then $a - b = kn$ for some integer $k$. Then $b - a = -(a - b) = -(kn) = (-k)n$. Since $-k$ is also an integer, $b \equiv a \pmod{n}$. Yes, it's symmetric.
*   **Transitive?** If $a \equiv b \pmod{n}$ and $b \equiv c \pmod{n}$, then $a - b = k_1n$ and $b - c = k_2n$ for some integers $k_1, k_2$.
    Then $(a - b) + (b - c) = k_1n + k_2n$.
    $a - c = (k_1 + k_2)n$. Since $k_1 + k_2$ is an integer, $a \equiv c \pmod{n}$. Yes, it's transitive.

So, congruence modulo $n$ is an equivalence relation!

What are the equivalence classes?
Let's take $n=3$ as an example.
The set is $\mathbb{Z} = \{..., -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, ...\}$.
The relation is $a \equiv b \pmod{3}$ if $a-b$ is a multiple of 3.

Let's find the equivalence class of 0:
$[0] = \{ x \in \mathbb{Z} \mid x \equiv 0 \pmod{3} \} = \{ x \in \mathbb{Z} \mid x - 0 \text{ is a multiple of } 3 \}$
$[0] = \{..., -6, -3, 0, 3, 6, 9, ... \}$ - This is the set of all multiples of 3.

What is the equivalence class of 1?
$[1] = \{ x \in \mathbb{Z} \mid x \equiv 1 \pmod{3} \} = \{ x \in \mathbb{Z} \mid x - 1 \text{ is a multiple of } 3 \}$
$[1] = \{..., -5, -2, 1, 4, 7, 10, ... \}$ - These are all numbers that leave a remainder of 1 when divided by 3.

What is the equivalence class of 2?
$[2] = \{ x \in \mathbb{Z} \mid x \equiv 2 \pmod{3} \} = \{ x \in \mathbb{Z} \mid x - 2 \text{ is a multiple of } 3 \}$
$[2] = \{..., -4, -1, 2, 5, 8, 11, ... \}$ - These are all numbers that leave a remainder of 2 when divided by 3.

What about the equivalence class of 3?
$[3] = \{ x \in \mathbb{Z} \mid x \equiv 3 \pmod{3} \} = \{ x \in \mathbb{Z} \mid x - 3 \text{ is a multiple of } 3 \}$
If $x-3 = 3k$, then $x = 3k+3 = 3(k+1)$. This is just the set of multiples of 3.
So, $[3] = \{..., -6, -3, 0, 3, 6, ... \} = [0]$. This confirms our property that distinct classes must be disjoint, and if they overlap, they are identical.

The distinct equivalence classes for modulo 3 are $[0], [1], [2]$.
These three sets form a partition of the integers:
$\mathbb{Z} = [0] \cup [1] \cup [2]$
And $[0] \cap [1] = \emptyset$, $[0] \cap [2] = \emptyset$, $[1] \cap [2] = \emptyset$.

This set of equivalence classes is often denoted as $\mathbb{Z}_n$ (or $\mathbb{Z}/n\mathbb{Z}$). For $n=3$, we have $\mathbb{Z}_3 = \{[0], [1], [2]\}$. This structure is foundational for modular arithmetic and is a stepping stone to abstract algebra, particularly groups (CO6).

### How Equivalence Classes Connect to Course Outcomes

Let's explicitly link this topic back to our Course Outcomes.

*   **CO1: Check the validity of predicates...** While equivalence classes don't directly involve propositional logic validity testing, the underlying logic of verifying the three properties (reflexive, symmetric, transitive) requires understanding predicates and quantifiers. You're essentially proving a universally quantified statement: "For all $a, b, c$ in the set, if these conditions hold, then this conclusion holds." This requires careful reasoning with logical connectives and quantifiers.

*   **CO2: Solve counting problems...** Equivalence classes are crucial for counting problems that involve grouping. For instance, if you're asked to count the number of distinct ways to arrange items where certain arrangements are considered the same (due to symmetry, for example), you might define an equivalence relation. The number of distinct arrangements would then be the number of equivalence classes. Think of counting distinct necklaces where rotations are considered the same – that’s a direct application where equivalence classes (under rotation) are used.

*   **CO3: Classify binary relations into various types...** This is a primary connection. Equivalence relations are a specific, very important *type* of binary relation. Understanding equivalence classes helps us recognize and classify relations that have this partitioning property. For example, in graph theory, if we have a set of vertices and an adjacency relation, defining an equivalence relation based on connectivity (e.g., "is reachable from") allows us to identify connected components, which are precisely equivalence classes.

*   **CO4: Illustrate an application for Partially Ordered Sets and Complete Lattices...** While not directly about POSETS or lattices themselves, the concept of partitioning a set is a fundamental building block in set theory and order theory. Understanding how equivalence relations partition a set prepares you for more complex structures. For instance, defining a preorder on a set (reflexive and transitive) and then creating an equivalence relation from it (where $a \sim b$ if $a \preceq b$ and $b \preceq a$) is a standard way to construct a partially ordered set. The equivalence classes then become the elements of the poset.

*   **CO5: Explain Generating Functions and solve Linear Recurrence Relations...** This connection is a bit more indirect. However, advanced techniques for solving recurrence relations might involve working with structures like $\mathbb{Z}_n$, which are built upon equivalence classes. The periodicity or cyclical nature inherent in some recurrence relations can be modeled using modular arithmetic.

*   **CO6: Illustrate abstract algebraic systems...** This is where equivalence classes truly shine in their foundational role. As we saw with $\mathbb{Z}_n$, the set of equivalence classes forms a new mathematical structure. The set of integers modulo $n$ with addition and multiplication defined on the classes forms the **ring of integers modulo $n$**. If we consider just the non-zero classes under multiplication (under certain conditions), we might form groups. Understanding equivalence classes is essential for grasping concepts like cosets in group theory, which are themselves equivalence classes. This is a direct link to understanding semigroups, monoids, and groups.

### Common Pitfalls and Exam Tips

*   **Confusing Relations:** Always be vigilant about checking *all three* properties (reflexive, symmetric, transitive) for a relation to be an equivalence relation. A relation might satisfy two but not the third. For example, "is less than" ($<$) is transitive but not reflexive or symmetric on the integers.
*   **Identifying Classes:** When asked to find equivalence classes, make sure you're listing *all* elements related to the chosen element. Don't stop at a few examples. If the set is infinite (like $\mathbb{Z}$), you'll describe the class using a pattern or a generator, as we did with $[0] = \{3k \mid k \in \mathbb{Z}\}$.
*   **Disjointness is Key:** Remember that the collection of *distinct* equivalence classes always forms a partition. If you find two classes that have common elements, it means they are not distinct; they are the same class.
*   **Notation:** Pay attention to the notation used in your specific course or textbook. $[a]$, $C(a)$, $Cl(a)$ all mean the same thing – the equivalence class of $a$.
*   **Proof-Based Questions:** Exams might ask you to prove that a given relation is an equivalence relation. This means you must write out clear proofs for reflexivity, symmetry, and transitivity, using formal notation as shown earlier.

### Summary: What to Remember

*   An **equivalence relation** on a set $A$ is a binary relation $R$ that is **reflexive**, **symmetric**, and **transitive**.
*   The **equivalence class** of an element $a \in A$, denoted $[a]$, is the set of all elements in $A$ related to $a$ by $R$.
*   **Key Property:** Distinct equivalence classes are either identical or disjoint.
*   The collection of all equivalence classes forms a **partition** of the set.
*   Equivalence classes are fundamental to understanding modular arithmetic, combinatorial counting, and the structure of abstract algebraic systems.

---

### Sample Questions and Answers

**1. Conceptual Question:**
What are the three properties that a binary relation must satisfy to be considered an equivalence relation? Explain each property with a simple, non-mathematical example.

**Answer:**
A binary relation $R$ on a set $A$ is an equivalence relation if it satisfies:
*   **Reflexivity:** For every element $a$ in $A$, $a$ is related to itself ($a R a$).
    *   *Example:* Imagine a set of people and the relation "is a resident of the same city as." Everyone is a resident of the same city as themselves.
*   **Symmetry:** If $a$ is related to $b$, then $b$ is related to $a$ ($a R b \implies b R a$).
    *   *Example:* Using the same relation, if Alice is a resident of the same city as Bob, then Bob is a resident of the same city as Alice.
*   **Transitivity:** If $a$ is related to $b$, and $b$ is related to $c$, then $a$ is related to $c$ ($a R b \text{ and } b R c \implies a R c$).
    *   *Example:* If Alice is a resident of the same city as Bob, and Bob is a resident of the same city as Carol, then Alice is a resident of the same city as Carol.

**2. Application Question:**
Consider the set of all real numbers, $\mathbb{R}$. Define a relation $R$ such that $x R y$ if and only if $x - y = 0$.
Is $R$ an equivalence relation? If yes, what is the equivalence class of the number 5?

**Answer:**
Let's check the properties for $R$ on $\mathbb{R}$:
*   **Reflexivity:** For any $x \in \mathbb{R}$, $x - x = 0$. So, $x R x$ is true. It is reflexive.
*   **Symmetry:** If $x R y$, then $x - y = 0$. This implies $y - x = -(x - y) = -0 = 0$. So, $y R x$ is true. It is symmetric.
*   **Transitivity:** If $x R y$ and $y R z$, then $x - y = 0$ and $y - z = 0$.
    Adding these equations: $(x - y) + (y - z) = 0 + 0 \implies x - z = 0$. So, $x R z$ is true. It is transitive.

Since $R$ is reflexive, symmetric, and transitive, it is an equivalence relation.

The equivalence class of 5, denoted [5], is:
$[5] = \{ x \in \mathbb{R} \mid x R 5 \}$
$[5] = \{ x \in \mathbb{R} \mid x - 5 = 0 \}$
$[5] = \{ x \in \mathbb{R} \mid x = 5 \}$
Therefore, the equivalence class of 5 is the set containing only the number 5: $[5] = \{5\}$.

**3. Exam-Oriented Question:**
Let $S$ be the set of all integers. Define the relation $R$ on $S$ by $a R b$ if and only if $a \pmod{5} = b \pmod{5}$.
(a) Prove that $R$ is an equivalence relation.
(b) Describe the equivalence classes of $R$. How many distinct equivalence classes are there?

**Answer:**
(a) **Proof that $R$ is an equivalence relation:**
Let $a, b, c$ be arbitrary integers in $S$.
*   **Reflexivity:** We need to show $a R a$.
    $a \pmod{5}$ is the remainder when $a$ is divided by 5. Clearly, the remainder when $a$ is divided by 5 is equal to itself. So, $a \pmod{5} = a \pmod{5}$. Thus, $a R a$. $R$ is reflexive.
*   **Symmetry:** We need to show that if $a R b$, then $b R a$.
    Assume $a R b$. By definition, this means $a \pmod{5} = b \pmod{5}$.
    If two numbers have the same remainder when divided by 5, then that remainder is the same regardless of which number we started with. So, $b \pmod{5} = a \pmod{5}$. This means $b R a$. $R$ is symmetric.
*   **Transitivity:** We need to show that if $a R b$ and $b R c$, then $a R c$.
    Assume $a R b$ and $b R c$.
    By definition of $R$, $a \pmod{5} = b \pmod{5}$ and $b \pmod{5} = c \pmod{5}$.
    By the transitivity of equality, if $a \pmod{5}$ equals $b \pmod{5}$, and $b \pmod{5}$ equals $c \pmod{5}$, then $a \pmod{5}$ must equal $c \pmod{5}$.
    Thus, $a \pmod{5} = c \pmod{5}$. This means $a R c$. $R$ is transitive.

Since $R$ is reflexive, symmetric, and transitive, it is an equivalence relation.

(b) **Description of Equivalence Classes:**
The relation $a \pmod{5} = b \pmod{5}$ means that $a$ and $b$ have the same remainder when divided by 5. The possible remainders when dividing an integer by 5 are 0, 1, 2, 3, and 4.

The equivalence classes are:
*   $[0] = \{ a \in S \mid a \pmod{5} = 0 \} = \{ \ldots, -10, -5, 0, 5, 10, \ldots \}$ (all multiples of 5)
*   $[1] = \{ a \in S \mid a \pmod{5} = 1 \} = \{ \ldots, -9, -4, 1, 6, 11, \ldots \}$ (all integers that leave a remainder of 1 when divided by 5)
*   $[2] = \{ a \in S \mid a \pmod{5} = 2 \} = \{ \ldots, -8, -3, 2, 7, 12, \ldots \}$ (all integers that leave a remainder of 2 when divided by 5)
*   $[3] = \{ a \in S \mid a \pmod{5} = 3 \} = \{ \ldots, -7, -2, 3, 8, 13, \ldots \}$ (all integers that leave a remainder of 3 when divided by 5)
*   $[4] = \{ a \in S \mid a \pmod{5} = 4 \} = \{ \ldots, -6, -1, 4, 9, 14, \ldots \}$ (all integers that leave a remainder of 4 when divided by 5)

There are **5** distinct equivalence classes. These classes partition the set of integers. This set of classes is precisely what we call $\mathbb{Z}_5$.
