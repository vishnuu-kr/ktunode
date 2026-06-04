---
title: "Subgroup"
subject: "DISCRETE MATHEMATICS"
module: "Module 4: Group theory"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fb3"
status: "completed"
scrapedAt: "2026-05-20T16:33:14.606Z"
---
Absolutely! Let's dive into the fascinating world of subgroups. Think of this as our guided tour through a crucial part of abstract algebra.

---

## Module 4: Group Theory – Subgroups

Hello everyone! Welcome back to our journey through Discrete Mathematics. Today, we're going to build upon our understanding of groups and explore a fundamental concept: **subgroups**. If you've grasped what a group is, you're already halfway there! Subgroups are essentially "smaller groups" living inside a larger group, and understanding them is key to unlocking many deeper algebraic structures.

### 1. Revisiting the Foundation: What is a Group?

Before we talk about subgroups, let's quickly remind ourselves what a group is. Remember, a group $(G, *)$ is a set $G$ along with a binary operation $*$ that satisfies four key properties:

1.  **Closure:** For any $a, b \in G$, $a * b \in G$. (The result of the operation stays within the set.)
2.  **Associativity:** For any $a, b, c \in G$, $(a * b) * c = a * (b * c)$. (The grouping doesn't matter.)
3.  **Identity Element:** There exists an element $e \in G$ such that for all $a \in G$, $a * e = e * a = a$. (An element that does nothing.)
4.  **Inverse Element:** For every $a \in G$, there exists an element $a^{-1} \in G$ such that $a * a^{-1} = a^{-1} * a = e$. (An element that "undoes" another.)

These properties are the bedrock of group theory. If a set with an operation doesn't satisfy all four, it's not a group. Think of the integers with addition ($\mathbb{Z}, +$) – it's a classic example. Closure? Yes. Associativity? Absolutely. Identity element? Zero. Inverse element? For any integer $n$, $-n$ is its inverse.

This module connects directly to **Course Outcome CO6: Illustrate the abstract algebraic systems - Semigroups, Monoids, Groups, Homomorphism and Isomorphism of Monoids and Groups (Knowledge Level: K2)**. Understanding subgroups is a vital step in appreciating the structure and relationships *within* groups. It's like understanding how smaller communities exist within a larger nation.

### 2. Introducing Subgroups: The "Little Groups" Within

So, what is a subgroup? Simply put, a **subgroup** of a group $(G, *)$ is a subset $H$ of $G$ that is itself a group under the *same* binary operation $*$.

Let's break this down. If $H$ is a subset of $G$, and we use the same operation $*$ that's defined on $G$ (but now we're only considering elements within $H$), for $H$ to be a subgroup, it must satisfy the four group properties *on its own*.

This is where things get a bit more efficient. We don't need to re-check all four properties from scratch for every subset. If $H$ is a subset of $G$, and we know $(G, *)$ is a group, then $H$ *automatically* inherits associativity and the existence of an identity element (if that identity element is in $H$).

**Why?**
*   **Associativity:** Since the operation is associative for *all* elements in $G$, it's certainly associative for the elements that happen to be in $H$.
*   **Identity Element:** If $e$ is the identity in $G$, and $e$ is *also* an element of $H$, then $e$ will be the identity for $H$ because $a * e = e * a = a$ holds for all $a \in G$, and thus for all $a \in H$.

So, what do we really need to check?

For a subset $H$ of a group $G$ to be a subgroup, we only need to verify two things:

1.  **Closure within $H$:** For every $a, b \in H$, $a * b \in H$. (This is crucial because the operation from $G$ might produce results outside of $H$ even if $a, b$ are in $H$).
2.  **Existence of Inverses within $H$:** For every $a \in H$, its inverse $a^{-1}$ (which exists in $G$) must also be in $H$.

There's an even more streamlined way to check this, often called the **Subgroup Test**.

### 3. The Subgroup Test: A Shortcut to Success

The Subgroup Test is a brilliant simplification. It says:

**A non-empty subset $H$ of a group $(G, *)$ is a subgroup of $G$ if and only if for all $a, b \in H$, the element $a * b^{-1}$ is also in $H$.**

Let's unpack why this single condition works.

*   **Why Closure?** If we pick $a \in H$ and $b = a$, then $a * a^{-1} = e$ must be in $H$. So, the identity element $e$ *must* be in $H$ if $H$ is to be a subgroup. Once we know $e \in H$, we can pick $b=e$. Then for any $a \in H$, $a * e^{-1} = a * e = a$ must be in $H$. This confirms that closure holds for all elements.
*   **Why Inverses?** We've already shown that if $a \in H$ and $b=a$, then $e \in H$. Now, if we want to show that $a^{-1} \in H$ for any $a \in H$, we can use the test with $b=a$. The test requires $a * a^{-1}$ to be in $H$. But wait, this isn't quite right. The test states $a * b^{-1} \in H$.
    Let's rephrase:
    1.  First, we need to ensure $H$ is not empty. (If it's empty, it can't be a group).
    2.  If $H$ is not empty, let $a \in H$. Using the test with $b=a$, we have $a * a^{-1} \in H$, which means the identity element $e$ must be in $H$. So, $e \in H$.
    3.  Now, let $a \in H$. We know $e \in H$. Using the test with $x=e$ and $y=a$ (so $y^{-1}=a^{-1}$), we have $e * a^{-1} \in H$. Since $e$ is the identity, $e * a^{-1} = a^{-1}$. Therefore, $a^{-1} \in H$. This confirms that every element in $H$ has its inverse within $H$.
    4.  Finally, let $a, b \in H$. We know $b^{-1} \in H$ (from step 3). Now, using the test with $x=a$ and $y=b^{-1}$, we have $a * (b^{-1})^{-1} \in H$. Since $(b^{-1})^{-1} = b$, this means $a * b \in H$. This confirms closure!

So, the single condition $a * b^{-1} \in H$ for all $a, b \in H$ elegantly checks for the identity, inverses, and closure.

**Remember this:** The subgroup test is your best friend for proving a subset is a subgroup! Always check for non-emptiness first.

---

### 4. Trivial Subgroups: The Always-Present Ones

Every group has at least two subgroups, which are always present:

1.  **The group itself:** $(G, *)$ is always a subgroup of $G$ with operation $*$. This is often called the **improper subgroup**.
2.  **The trivial subgroup:** The set containing only the identity element, $\{e\}$, along with the operation $*$. Let's check:
    *   **Non-empty?** Yes, it contains $e$.
    *   **Closure?** $e * e = e$. Since $e \in \{e\}$, closure holds.
    *   **Inverse?** The inverse of $e$ is $e$, and $e \in \{e\}$. So inverses exist.
    Thus, $\{e\}$ is always a subgroup.

These are like the "container" and the "empty set" in set theory – always there, but important to acknowledge.

---

### 5. Examples of Subgroups: Making it Real

Let's bring this to life with some examples.

**Example 1: Integers under Addition**

Consider the group $(\mathbb{Z}, +)$.
*   The set of even integers, $2\mathbb{Z} = \{\dots, -4, -2, 0, 2, 4, \dots\}$, is a subset of $\mathbb{Z}$.
*   Is $2\mathbb{Z}$ a subgroup of $(\mathbb{Z}, +)$? Let's use the subgroup test.
    *   Is $2\mathbb{Z}$ non-empty? Yes, it contains $0$.
    *   Take any $a, b \in 2\mathbb{Z}$. This means $a = 2k$ and $b = 2m$ for some integers $k, m$.
    *   We need to check if $a + b^{-1} \in 2\mathbb{Z}$. Here, the operation is addition, so $b^{-1}$ is $-b$.
    *   $a + (-b) = 2k + (-2m) = 2(k-m)$.
    *   Since $k-m$ is an integer, $2(k-m)$ is an even integer. Therefore, $a + (-b) \in 2\mathbb{Z}$.
*   Yes! $2\mathbb{Z}$ is a subgroup of $(\mathbb{Z}, +)$.

Think of this like a train. The integers $\mathbb{Z}$ are like all the possible stops a train can make. The even integers $2\mathbb{Z}$ are like a specific set of stops: station 0, station 2, station -2, station 4, station -4, etc. If you are at any two of these "even" stations, and you travel in either direction (addition or subtraction, which is adding the inverse), you will always end up at another "even" station. You'll never jump to an odd-numbered station.

**Example 2: Integers Modulo $n$**

Consider the group $(\mathbb{Z}_6, +_6)$, the integers modulo 6 under addition modulo 6. The elements are $\{0, 1, 2, 3, 4, 5\}$. The operation is addition modulo 6.
*   Let's consider the subset $H = \{0, 3\}$.
*   Is $H$ a subgroup?
    *   Non-empty? Yes, it contains $0$.
    *   Subgroup test: $a +_6 b^{-1} \in H$ for all $a, b \in H$.
        *   Let $a=0, b=0$. $0 +_6 (-0) = 0 +_6 0 = 0 \in H$.
        *   Let $a=3, b=0$. $3 +_6 (-0) = 3 +_6 0 = 3 \in H$.
        *   Let $a=0, b=3$. $0 +_6 (-3)$. In $\mathbb{Z}_6$, $-3 \equiv 3 \pmod 6$. So, $0 +_6 3 = 3 \in H$.
        *   Let $a=3, b=3$. $3 +_6 (-3)$. In $\mathbb{Z}_6$, $-3 \equiv 3 \pmod 6$. So, $3 +_6 3 = 6 \equiv 0 \pmod 6$. And $0 \in H$.
*   Yes, $H=\{0, 3\}$ is a subgroup of $(\mathbb{Z}_6, +_6)$.

This example connects to **CO6**. We're illustrating an abstract algebraic system (a group, specifically $\mathbb{Z}_6$) and finding a smaller structure within it.

What about $H = \{0, 2, 4\}$ in $(\mathbb{Z}_6, +_6)$?
*   Non-empty? Yes, contains $0$.
*   Test:
    *   $a=2, b=2$. $2 +_6 (-2)$. In $\mathbb{Z}_6$, $-2 \equiv 4 \pmod 6$. $2 +_6 4 = 6 \equiv 0 \pmod 6$. $0 \in H$.
    *   $a=2, b=4$. $2 +_6 (-4)$. In $\mathbb{Z}_6$, $-4 \equiv 2 \pmod 6$. $2 +_6 2 = 4 \pmod 6$. $4 \in H$.
    *   $a=4, b=2$. $4 +_6 (-2)$. In $\mathbb{Z}_6$, $-2 \equiv 4 \pmod 6$. $4 +_6 4 = 8 \equiv 2 \pmod 6$. $2 \in H$.
*   Yes, $H=\{0, 2, 4\}$ is also a subgroup of $(\mathbb{Z}_6, +_6)$.

**Example 3: Symmetric Group $S_3$**

This is a classic example from group theory, often found in textbooks like Rosen. The symmetric group $S_3$ is the group of all permutations of three elements, say $\{1, 2, 3\}$. The operation is composition of permutations. $S_3$ has 6 elements.

Let the elements be represented as:
*   $e = (1)(2)(3)$ (identity)
*   $a = (1 2)(3)$ (swaps 1 and 2)
*   $b = (1 3)(2)$ (swaps 1 and 3)
*   $c = (2 3)(1)$ (swaps 2 and 3)
*   $d = (1 2 3)$ (cycle: 1 to 2, 2 to 3, 3 to 1)
*   $f = (1 3 2)$ (cycle: 1 to 3, 3 to 2, 2 to 1)

Let's consider the subset $H = \{e, a\}$.
*   Non-empty? Yes, contains $e$.
*   Subgroup test: $a * b^{-1} \in H$ for all $a, b \in H$.
    *   $e * e^{-1} = e * e = e \in H$.
    *   $e * a^{-1} = e * a = a \in H$. (Recall $a^{-1}$ is the permutation that undoes $a$. Since $a$ swaps 1 and 2, applying it twice gets you back to the start, so $a^{-1}=a$).
    *   $a * e^{-1} = a * e = a \in H$.
    *   $a * a^{-1} = a * a = e \in H$.
*   Yes, $H=\{e, a\}$ is a subgroup of $S_3$.

This subgroup $H=\{e, a\}$ is isomorphic to $(\mathbb{Z}_2, +_2)$, the group with two elements under addition modulo 2. This is where concepts like isomorphism (mentioned in CO6) start to become really powerful – it shows that different-looking groups can have the same underlying structure.

What about $H = \{e, d, f\}$?
*   Non-empty? Yes, contains $e$.
*   Test:
    *   $d * d^{-1} = e \in H$.
    *   $d * f^{-1}$. We need $f^{-1}$. If $f = (1 3 2)$, then $f^{-1} = (1 2 3) = d$. So $d * f^{-1} = d * d = f \in H$.
    *   $f * d^{-1}$. If $d = (1 2 3)$, then $d^{-1} = (1 3 2) = f$. So $f * d^{-1} = f * f = (1 3 2)(1 3 2) = (1 2)(3) = a$. Ah! $a \notin H$.
*   So, $\{e, d, f\}$ is *not* a subgroup of $S_3$. It passes some tests but fails closure for $f * d^{-1}$.

This highlights how crucial *all* pairs in the subgroup test are.

---

### 6. Order of a Group and Order of an Element

When we talk about groups, two related concepts are the "order" of the group and the "order" of an element.

*   **Order of a Group:** The order of a group $G$, denoted by $|G|$, is simply the number of elements in the set $G$.
    *   $(\mathbb{Z}, +)$ has infinite order.
    *   $(\mathbb{Z}_6, +_6)$ has order 6.
    *   $S_3$ has order 6.

*   **Order of an Element:** The order of an element $a$ in a group $(G, *)$ is the smallest positive integer $n$ such that $a^n = e$, where $e$ is the identity element. If no such positive integer exists, the element is said to have infinite order.
    *   In $(\mathbb{Z}, +)$: The order of $2$ is infinite, because $2+2+\dots+2 = 2n$ never equals $0$ (the identity) for any positive integer $n$. The order of $0$ is 1, since $0^1 = 0$.
    *   In $(\mathbb{Z}_6, +_6)$:
        *   Order of $0$: $0^1 = 0$. Order is 1.
        *   Order of $1$: $1^1=1, 1^2=2, 1^3=3, 1^4=4, 1^5=5, 1^6=0$. Order is 6.
        *   Order of $3$: $3^1=3, 3^2=3+3=6 \equiv 0$. Order is 2.
        *   Order of $4$: $4^1=4, 4^2=4+4=8 \equiv 2, 4^3=4+2=6 \equiv 0$. Order is 3.

**Lagrange's Theorem (A Glimpse)**

While we won't formally prove it here, it's worth mentioning that a major theorem in group theory, Lagrange's Theorem, states that for any finite group $G$, the order of any subgroup $H$ of $G$ must divide the order of $G$. That is, $|H|$ must divide $|G|$.

This is super important for exam questions! If you're asked if a subset is a subgroup and you find its order doesn't divide the group's order, you can immediately say "No!" This connects to **CO6** by illustrating the structural properties of groups and their relationships.

*   For $(\mathbb{Z}_6, +_6)$, $|G|=6$.
    *   $H=\{0, 3\}$ has order 2. $2$ divides $6$. This is consistent with Lagrange's Theorem.
    *   $H=\{0, 2, 4\}$ has order 3. $3$ divides $6$. This is also consistent.

A consequence of Lagrange's Theorem is that the order of an element $a$ in a finite group $G$ must divide the order of the group $G$.

*   In $(\mathbb{Z}_6, +_6)$, group order is 6.
    *   Order of $1$ is $6$. $6$ divides $6$.
    *   Order of $2$ is $3$. $3$ divides $6$.
    *   Order of $3$ is $2$. $2$ divides $6$.
    *   Order of $4$ is $3$. $3$ divides $6$.
    *   Order of $5$ is $6$. $6$ divides $6$.

This provides a powerful tool for checking potential subgroup orders or element orders.

---

### 7. Cyclic Subgroups: Generated by an Element

Every element in a group generates its own little subgroup. This is called a **cyclic subgroup**.

For an element $a$ in a group $(G, *)$, the cyclic subgroup generated by $a$, denoted $\langle a \rangle$, is the set of all powers of $a$:
$\langle a \rangle = \{a^n \mid n \in \mathbb{Z}\}$
$= \{\dots, a^{-2}, a^{-1}, a^0=e, a^1, a^2, \dots \}$

Let's check if $\langle a \rangle$ is indeed a subgroup. Using the subgroup test, for any $x, y \in \langle a \rangle$, we need to show $x * y^{-1} \in \langle a \rangle$.
If $x = a^i$ and $y = a^j$ for some integers $i, j$, then:
$x * y^{-1} = a^i * (a^j)^{-1} = a^i * a^{-j} = a^{i-j}$.
Since $i-j$ is an integer, $a^{i-j}$ is a power of $a$, so it belongs to $\langle a \rangle$.

Thus, $\langle a \rangle$ is always a subgroup of $G$.

**Example: Cyclic Subgroup in $(\mathbb{Z}_6, +_6)$**

*   $\langle 1 \rangle$: $1^1=1, 1^2=2, 1^3=3, 1^4=4, 1^5=5, 1^6=0$. So $\langle 1 \rangle = \{0, 1, 2, 3, 4, 5\} = \mathbb{Z}_6$. The cyclic subgroup generated by 1 is the entire group itself.
*   $\langle 3 \rangle$: $3^1=3, 3^2=3+3=6 \equiv 0$. So $\langle 3 \rangle = \{0, 3\}$. This is the subgroup we found earlier!
*   $\langle 4 \rangle$: $4^1=4, 4^2=4+4=8 \equiv 2, 4^3=4+2=6 \equiv 0$. So $\langle 4 \rangle = \{0, 2, 4\}$. This is the other subgroup we found.
*   $\langle 2 \rangle$: $2^1=2, 2^2=2+2=4, 2^3=2+4=6 \equiv 0$. So $\langle 2 \rangle = \{0, 2, 4\}$. It's the same subgroup as $\langle 4 \rangle$.

Notice that the cyclic subgroups generated by elements of finite order partition the group. Elements of the same order generate the same cyclic subgroup if they are in a cyclic group.

A group $G$ is called **cyclic** if there exists an element $a \in G$ such that $G = \langle a \rangle$. $(\mathbb{Z}_6, +_6)$ is a cyclic group because $\mathbb{Z}_6 = \langle 1 \rangle = \langle 5 \rangle$.

This directly relates to **CO6** as we are illustrating abstract algebraic systems and their fundamental building blocks (generators).

---

### 8. Connecting to Course Outcomes

Let's briefly summarize how our discussion on subgroups aligns with the stated course outcomes:

*   **CO1 (Logic, Predicates, Truth Tables, Deductive Reasoning):** While subgroups themselves aren't directly about propositional logic, the rigorous proofs of subgroup properties (using the subgroup test) heavily rely on deductive reasoning and the careful application of definitions, much like proving statements in logic. Understanding the structure of groups and subgroups can also be seen as building models for discrete structures, a key aspect of computational thinking.

*   **CO2 (Counting Techniques):** Lagrange's Theorem, which is foundational to understanding subgroup orders, directly involves divisibility, a counting concept. Identifying subgroups and their orders requires counting elements, which can become complex in larger groups, potentially invoking combinatorial arguments.

*   **CO3 (Binary Relations, CS Applications):** Group theory itself can be viewed as a highly structured form of relation. Congruence relations, for instance, are closely tied to subgroups (specifically, normal subgroups, which are a special type of subgroup). The classification of relations into reflexive, symmetric, transitive, etc., mirrors the properties required for groups and subgroups. Applications in cryptography, coding theory, and algorithms often leverage the structural properties of groups and their subgroups.

*   **CO4 (Posets, Lattices, CS Applications):** The set of subgroups of a group, ordered by inclusion, forms a lattice. This is a direct connection! For example, the subgroups of $(\mathbb{Z}_6, +_6)$ are $\{0\}$, $\{0, 3\}$, $\{0, 2, 4\}$, and $\{0, 1, 2, 3, 4, 5\}$. If we order these by subset inclusion:
    $\{0\} \subset \{0, 3\} \subset \{0, 1, 2, 3, 4, 5\}$
    $\{0\} \subset \{0, 2, 4\} \subset \{0, 1, 2, 3, 4, 5\}$
    This lattice structure is important in areas like understanding symmetries in molecules or databases.

*   **CO5 (Generating Functions, Recurrence Relations):** While less direct, the algebraic structure explored in group theory can sometimes be modeled or analyzed using generating functions or recurrence relations, particularly when dealing with abstract structures with combinatorial properties.

*   **CO6 (Semigroups, Monoids, Groups, Homomorphism, Isomorphism):** This is the core outcome for this topic! Subgroups are a fundamental concept for understanding the *internal structure* of groups. We've illustrated groups like $(\mathbb{Z}_6, +_6)$ and $S_3$, and identified their subgroups. Concepts like cyclic subgroups and the orders of groups/elements are crucial for classifying groups and understanding their properties. The connections between subgroups and other algebraic structures like lattices also fit here.

---

### 9. Key Takeaways and Exam Tips

*   **Definition of a Subgroup:** A subset $H$ of a group $G$ is a subgroup if it's non-empty and closed under the group operation and inverses.
*   **Subgroup Test:** The most efficient way to prove $H$ is a subgroup of $G$ is to show:
    1.  $H$ is non-empty.
    2.  For all $a, b \in H$, $a * b^{-1} \in H$.
*   **Trivial Subgroups:** $\{e\}$ and $G$ are always subgroups.
*   **Cyclic Subgroups:** $\langle a \rangle = \{a^n \mid n \in \mathbb{Z}\}$ is always a subgroup.
*   **Lagrange's Theorem (consequence):** The order of an element divides the order of the group. The order of a subgroup divides the order of the group. This is a HUGE shortcut for verifying potential subgroups or element orders.

**Exam Focus:**
*   Be prepared to prove a given subset is a subgroup using the subgroup test.
*   Be prepared to identify all subgroups of a small finite group (like $\mathbb{Z}_n$ or $S_3$).
*   Understand and calculate the order of elements and groups.
*   Know the definition of a cyclic subgroup and be able to find cyclic subgroups.
*   Recognize that groups can be classified by their subgroup structure and element orders.

---

### 10. Sample Questions with Answers

**Question 1 (Conceptual):**
State the Subgroup Test and explain why it is sufficient to prove that a subset $H$ of a group $G$ is a subgroup.

**Answer:**
The Subgroup Test states that a non-empty subset $H$ of a group $(G, *)$ is a subgroup of $G$ if and only if for all $a, b \in H$, the element $a * b^{-1}$ is also in $H$.

This test is sufficient because it implicitly verifies the group axioms for $H$:
1.  **Identity Element:** If $H$ is non-empty, let $a \in H$. By the test, choosing $b=a$, we have $a * a^{-1} \in H$. Since $a * a^{-1} = e$ (the identity in $G$), this shows $e \in H$.
2.  **Inverse Element:** For any $x \in H$, we know $e \in H$ (from step 1). Using the test with $a=e$ and $b=x$, we have $e * x^{-1} \in H$. Since $e * x^{-1} = x^{-1}$, this shows that the inverse of every element in $H$ is also in $H$.
3.  **Closure:** For any $a, b \in H$, we know $b^{-1} \in H$ (from step 2). Using the test with $x=a$ and $y=b^{-1}$, we have $a * (b^{-1})^{-1} \in H$. Since $(b^{-1})^{-1} = b$, this means $a * b \in H$, proving closure.
Associativity is inherited from $G$. Therefore, $H$ satisfies all group axioms and is a subgroup.

**Question 2 (Application):**
Let $G = (\mathbb{Z}_{12}, +_{12})$ be the group of integers modulo 12 under addition modulo 12. Let $H = \{0, 4, 8\}$. Prove that $H$ is a subgroup of $G$.

**Answer:**
The group is $(\mathbb{Z}_{12}, +_{12})$, and $H = \{0, 4, 8\}$.
We use the Subgroup Test.

1.  **Non-empty:** $H$ contains the element $0$, so it is non-empty.

2.  **Closure under $a +_{12} (-b)$:** We need to show that for any $a, b \in H$, $a +_{12} (-b) \in H$.
    Let's list all possible pairs of $a, b \in H$ and check $a +_{12} (-b)$:

    *   $a=0, b=0$: $0 +_{12} (-0) = 0 +_{12} 0 = 0$. $0 \in H$.
    *   $a=0, b=4$: $0 +_{12} (-4)$. In $\mathbb{Z}_{12}$, $-4 \equiv 8 \pmod{12}$. So, $0 +_{12} 8 = 8$. $8 \in H$.
    *   $a=0, b=8$: $0 +_{12} (-8)$. In $\mathbb{Z}_{12}$, $-8 \equiv 4 \pmod{12}$. So, $0 +_{12} 4 = 4$. $4 \in H$.
    *   $a=4, b=0$: $4 +_{12} (-0) = 4 +_{12} 0 = 4$. $4 \in H$.
    *   $a=4, b=4$: $4 +_{12} (-4) = 4 +_{12} 8 = 12 \equiv 0 \pmod{12}$. $0 \in H$.
    *   $a=4, b=8$: $4 +_{12} (-8) = 4 +_{12} 4 = 8$. $8 \in H$.
    *   $a=8, b=0$: $8 +_{12} (-0) = 8 +_{12} 0 = 8$. $8 \in H$.
    *   $a=8, b=4$: $8 +_{12} (-4) = 8 +_{12} 8 = 16 \equiv 4 \pmod{12}$. $4 \in H$.
    *   $a=8, b=8$: $8 +_{12} (-8) = 8 +_{12} 4 = 12 \equiv 0 \pmod{12}$. $0 \in H$.

    In every case, the result is an element of $H$. Therefore, $H$ is closed under the operation $a +_{12} (-b)$.

Since both conditions of the Subgroup Test are satisfied, $H=\{0, 4, 8\}$ is a subgroup of $(\mathbb{Z}_{12}, +_{12})$.

**Question 3 (Order & Lagrange's Theorem):**
Consider the group $(\mathbb{Z}_{10}, +_{10})$.
a) What is the order of the group?
b) What is the order of the element $3$?
c) Is the set $K = \{0, 5\}$ a subgroup of $(\mathbb{Z}_{10}, +_{10})$? Justify your answer using an appropriate theorem or property.

**Answer:**
The group is $(\mathbb{Z}_{10}, +_{10})$.

a) The order of the group is the number of elements in $\mathbb{Z}_{10}$, which is 10. So, $|G| = 10$.

b) The order of the element $3$ is the smallest positive integer $n$ such that $3^n \equiv 0 \pmod{10}$.
    $3^1 = 3$
    $3^2 = 3 + 3 = 6$
    $3^3 = 3 + 6 = 9$
    $3^4 = 3 + 9 = 12 \equiv 2 \pmod{10}$
    $3^5 = 3 + 2 = 5$
    $3^6 = 3 + 5 = 8$
    $3^7 = 3 + 8 = 11 \equiv 1 \pmod{10}$
    $3^8 = 3 + 1 = 4$
    $3^9 = 3 + 4 = 7$
    $3^{10} = 3 + 7 = 10 \equiv 0 \pmod{10}$
    The smallest positive integer $n$ for which $3^n \equiv 0 \pmod{10}$ is $n=10$. So, the order of element $3$ is $10$.

c) We need to check if $K = \{0, 5\}$ is a subgroup of $(\mathbb{Z}_{10}, +_{10})$.
    The order of the group $\mathbb{Z}_{10}$ is $|G|=10$.
    The order of the proposed subgroup $K$ is $|K|=2$.
    According to **Lagrange's Theorem**, for any subgroup $H$ of a finite group $G$, the order of $H$ must divide the order of $G$.
    Here, $|K|=2$ and $|G|=10$. Since $2$ divides $10$, Lagrange's Theorem *allows* $K$ to be a subgroup. This doesn't prove it IS a subgroup, but it's a necessary condition.

    To formally prove it, we use the Subgroup Test:
    1.  $K$ is non-empty (contains $0$).
    2.  Check $a +_{10} (-b)$ for $a, b \in K$:
        *   $0 +_{10} (-0) = 0 +_{10} 0 = 0$. $0 \in K$.
        *   $0 +_{10} (-5) = 0 +_{10} 5 = 5$. $5 \in K$.
        *   $5 +_{10} (-0) = 5 +_{10} 0 = 5$. $5 \in K$.
        *   $5 +_{10} (-5) = 5 +_{10} 5 = 10 \equiv 0 \pmod{10}$. $0 \in K$.
    Since all results are in $K$, $K$ is indeed a subgroup.

    *(Self-correction/Refinement): The question asks to justify using an appropriate theorem or property. While Lagrange's theorem suggests it *could* be a subgroup, the primary justification for *why* it is a subgroup comes from the Subgroup Test. The question phrasing might be slightly ambiguous, but the most direct way to confirm is the subgroup test.*

---

I hope this comprehensive overview of subgroups has been helpful! Remember, the structure that subgroups reveal is fundamental to understanding the broader landscape of abstract algebra. Keep practicing these examples, and you'll find yourself becoming more and more comfortable with group theory!
