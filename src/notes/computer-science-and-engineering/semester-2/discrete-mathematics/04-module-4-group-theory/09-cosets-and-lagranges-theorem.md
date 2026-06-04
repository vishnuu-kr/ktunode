---
title: "Cosets and Lagrange's Theorem"
subject: "DISCRETE MATHEMATICS"
module: "Module 4: Group theory"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fb7"
status: "completed"
scrapedAt: "2026-05-20T16:33:17.503Z"
---
Let's dive into the fascinating world of Group Theory, specifically focusing on **Cosets and Lagrange's Theorem**! This is a cornerstone topic in our Discrete Mathematics journey, and understanding it will not only solidify your grasp of abstract algebra but also connect beautifully with several of our Course Outcomes. Think of this as building the foundational tools for understanding the structure and properties of mathematical systems, which has profound implications in computer science, as we'll see.

Our goal today is to demystify cosets and then, with that understanding, prove a fundamental theorem – Lagrange's Theorem – which is incredibly powerful in analyzing the structure of finite groups.

### Module 4: Group Theory - Cosets and Lagrange's Theorem

**Connecting with Course Outcomes:**

Before we jump into the nitty-gritty, let's see how this topic helps us achieve our Course Outcomes:

*   **CO6: Illustrate the abstract algebraic systems - Semigroups, Monoids, Groups, Homomorphism and Isomorphism of Monoids and Groups.** Understanding cosets is crucial for grasping the structure *within* a group and how subgroups partition a group. This directly supports our understanding of what constitutes a group and its internal relationships.
*   **CO1: Check the validity of predicates...** While not immediately obvious, the logical structure and deductive reasoning used to prove Lagrange's Theorem is a prime example of applying formal logic and inference.
*   **CO2: Solve counting problems...** Lagrange's Theorem is a powerful counting tool in disguise! It tells us a lot about the *sizes* of groups and their subgroups, which is directly related to counting principles.

So, keep these connections in mind as we explore. We're not just learning definitions; we're building a deeper understanding of algebraic structures!

---

#### 1. A Quick Recap: What's a Group?

Remember our basic building blocks? A **group** is a set $G$ equipped with a binary operation $*$ that satisfies four properties:

1.  **Closure:** For any $a, b \in G$, $a * b \in G$.
2.  **Associativity:** For any $a, b, c \in G$, $(a * b) * c = a * (b * c)$.
3.  **Identity Element:** There exists an element $e \in G$ such that for all $a \in G$, $a * e = e * a = a$.
4.  **Inverse Element:** For every $a \in G$, there exists an element $a^{-1} \in G$ such that $a * a^{-1} = a^{-1} * a = e$.

We've also talked about **subgroups**. A subset $H$ of a group $G$ is a subgroup if it's non-empty and closed under the group operation, and importantly, it contains the identity element and the inverse of every element in $H$.

Now, imagine you have a group, say, the set of all integers under addition, $\mathbb{Z}$. And you have a subgroup, like the even integers, $2\mathbb{Z}$. How do these even integers relate to all the integers? Do they form neat little "blocks" that, when put together, make up the entire set of integers? That's exactly what cosets help us explore!

---

#### 2. Introducing Cosets: Partitions of a Group

Let's start with an analogy. Imagine you're organizing a large conference in a hotel. The hotel has many rooms. You, as the organizer, are like the group $G$. You want to assign people to rooms. A specific type of room assignment could be a subgroup $H$ – say, all rooms on the third floor.

Now, what if you want to assign people to other floors? You might want to define "suites" of rooms. You could pick a room on the second floor, say room 201, and say "all people assigned to rooms that are 'related' to room 201 should go here." This "relatedness" is what we'll formalize with cosets.

**Definition: Left Cosets and Right Cosets**

Let $(G, *)$ be a group and $H$ be a subgroup of $G$.

*   For any element $a \in G$, the **left coset** of $H$ containing $a$, denoted by $aH$, is the set:
    $aH = \{a * h \mid h \in H\}$

*   Similarly, for any element $a \in G$, the **right coset** of $H$ containing $a$, denoted by $Ha$, is the set:
    $Ha = \{h * a \mid h \in H\}$

**What does this mean in plain English?**

A left coset $aH$ is formed by taking a specific element $a$ from the group $G$ and "multiplying" it (using the group's operation) with *every* element in the subgroup $H$. You're essentially "shifting" the entire subgroup $H$ by the element $a$. The right coset is similar, but you're shifting from the right.

**Let's use a concrete example:**

Consider the group $G = (\mathbb{Z}_6, +)$, the integers modulo 6 under addition. The elements are $\{0, 1, 2, 3, 4, 5\}$.
Let $H = \{0, 3\}$ be a subgroup of $G$. Is $H$ a subgroup? Yes, it contains the identity (0), it's closed under addition modulo 6 (0+0=0, 0+3=3, 3+0=3, 3+3=6≡0 mod 6), and inverses are present (0 is its own inverse, 3 is its own inverse).

Now, let's find some cosets:

*   **Left cosets:**
    *   $0H = \{0+0, 0+3\} = \{0, 3\}$. Hey, this is just $H$ itself! This happens when $a$ is the identity element.
    *   $1H = \{1+0, 1+3\} = \{1, 4\}$.
    *   $2H = \{2+0, 2+3\} = \{2, 5\}$.
    *   $3H = \{3+0, 3+3\} = \{3, 6 \pmod 6\} = \{3, 0\}$. Notice this is the same set as $0H$!
    *   $4H = \{4+0, 4+3\} = \{4, 7 \pmod 6\} = \{4, 1\}$. This is the same set as $1H$!
    *   $5H = \{5+0, 5+3\} = \{5, 8 \pmod 6\} = \{5, 2\}$. This is the same set as $2H$!

What did we find? The left cosets of $H$ in $\mathbb{Z}_6$ are:
$\{0, 3\}$, $\{1, 4\}$, $\{2, 5\}$.

These sets are disjoint (they have no elements in common) and their union is the entire group $\mathbb{Z}_6$ ($\{0, 3\} \cup \{1, 4\} \cup \{2, 5\} = \{0, 1, 2, 3, 4, 5\}$). This looks like a **partition** of the group!

**Key Observation:** For any two elements $a, b \in G$, their left cosets $aH$ and $bH$ are either identical or completely disjoint. There's no overlap. This is a crucial property, and we can prove it.

**Proof Sketch (Why cosets are disjoint or identical):**
Suppose $aH \cap bH \neq \emptyset$. This means there's an element $x$ such that $x \in aH$ and $x \in bH$.
So, $x = a * h_1$ for some $h_1 \in H$, and $x = b * h_2$ for some $h_2 \in H$.
This implies $a * h_1 = b * h_2$.
Now, let's pick any element $y \in aH$. So $y = a * h_3$ for some $h_3 \in H$.
We can rewrite $a$ from our intersection: $a = b * h_2 * h_1^{-1}$ (since $h_1^{-1} \in H$ because $H$ is a subgroup).
So, $y = (b * h_2 * h_1^{-1}) * h_3 = b * (h_2 * h_1^{-1} * h_3)$.
Since $h_2, h_1^{-1}, h_3$ are all in $H$, and $H$ is closed under $*$, the element $(h_2 * h_1^{-1} * h_3)$ is also in $H$. Let's call it $h_4$.
So, $y = b * h_4$, which means $y \in bH$.
This shows that every element in $aH$ is also in $bH$, so $aH \subseteq bH$.
Similarly, we can show $bH \subseteq aH$.
Therefore, $aH = bH$.
The contrapositive of this statement is: if $aH \neq bH$, then $aH \cap bH = \emptyset$. This confirms that cosets form a partition.

**Right Cosets:** The same logic applies to right cosets. For any $a, b \in G$, $Ha = Hb$ or $Ha \cap Hb = \emptyset$.

**Normal Subgroups (A brief mention, as it's related):**
If, for *every* element $a \in G$, the left coset $aH$ is equal to the right coset $Ha$, then $H$ is called a **normal subgroup**. This is a special property, and our example subgroup $H=\{0,3\}$ in $\mathbb{Z}_6$ happens to be normal because $\mathbb{Z}_6$ is abelian (commutative).

---

#### 2.1. The Index of a Subgroup

Remember how we found that the left cosets of $H=\{0,3\}$ in $\mathbb{Z}_6$ were $\{0,3\}$, $\{1,4\}$, $\{2,5\}$? There were exactly 3 such distinct cosets.

The number of distinct left cosets (or distinct right cosets) of a subgroup $H$ in a group $G$ is called the **index** of $H$ in $G$, denoted by $[G:H]$.

In our example, $[ \mathbb{Z}_6 : \{0,3\} ] = 3$.

---

#### 3. Lagrange's Theorem: The Heart of the Matter!

Now we're ready for a truly fundamental result in group theory, one that elegantly connects the size of a group, the size of its subgroup, and the number of cosets. This is **Lagrange's Theorem**. It's one of those theorems that, once you understand it, opens up a whole new way of thinking about groups.

**Theorem (Lagrange's Theorem):** If $G$ is a finite group and $H$ is a subgroup of $G$, then the order of $H$ (the number of elements in $H$, denoted $|H|$) divides the order of $G$ (the number of elements in $G$, denoted $|G|$).

In symbols: $|H|$ divides $|G|$, or $|G| = |H| \cdot [G:H]$.

This means that the size of any subgroup must be a factor of the size of the group it belongs to. This is incredibly useful!

**How can we prove this?**

The proof relies directly on the properties of cosets we just discussed.

**Proof:**
Let $G$ be a finite group and $H$ be a subgroup of $G$.
We know that the distinct left cosets of $H$ in $G$ form a partition of $G$. That is, they are pairwise disjoint and their union is $G$.

Let $a_1H, a_2H, \dots, a_kH$ be all the distinct left cosets of $H$ in $G$.
So, $G = a_1H \cup a_2H \cup \dots \cup a_kH$.
And for any $i \neq j$, $a_iH \cap a_jH = \emptyset$.

Now, for any element $a \in G$, the size of the left coset $aH$ is exactly the same as the size of the subgroup $H$. Why?
Because the mapping $h \mapsto a*h$ from $H$ to $aH$ is a bijection (one-to-one and onto). It's one-to-one because if $a*h_1 = a*h_2$, then by multiplying by $a^{-1}$ on the left, we get $h_1=h_2$. It's onto because every element in $aH$ is by definition of the form $a*h$.
So, $|aH| = |H|$ for any $a \in G$.

Since the distinct cosets form a partition, and each coset has size $|H|$, the total number of elements in $G$ is the sum of the sizes of these disjoint cosets:
$|G| = |a_1H| + |a_2H| + \dots + |a_kH|$
$|G| = |H| + |H| + \dots + |H|$ (k times)
$|G| = k \cdot |H|$

Here, $k$ is the number of distinct left cosets, which is the index $[G:H]$.
So, $|G| = |H| \cdot [G:H]$.

This equation directly shows that $|H|$ divides $|G|$. And the number of cosets, $k$, is precisely the index $[G:H]$.

**Remember this:** The proof beautifully illustrates how the structure of cosets as partitions leads directly to Lagrange's Theorem. It's a testament to the elegance of abstract algebra!

---

#### 3.1. Implications and Applications of Lagrange's Theorem

Lagrange's Theorem is a powerful tool with many implications:

1.  **Possible Orders of Elements:** A direct consequence is about the order of elements. The order of an element $a \in G$ is the smallest positive integer $n$ such that $a^n = e$. The cyclic subgroup generated by $a$, denoted $\langle a \rangle = \{a^0, a^1, a^2, \dots, a^{n-1}\}$, is a subgroup of $G$. By Lagrange's Theorem, $|\langle a \rangle|$ must divide $|G|$. Since $|\langle a \rangle|$ is the order of the element $a$, this means:
    **The order of any element in a finite group $G$ must divide the order of the group $G$.**
    This is extremely useful for finding possible orders of elements in a group.

    *   **Example:** In $\mathbb{Z}_6$, $|G|=6$. The possible orders of elements are divisors of 6, which are 1, 2, 3, 6.
        *   Order of 0 is 1.
        *   Order of 1 is 6 ($1^1=1, 1^2=2, 1^3=3, 1^4=4, 1^5=5, 1^6=0 \pmod 6$).
        *   Order of 2 is 3 ($2^1=2, 2^2=4, 2^3=6 \equiv 0 \pmod 6$).
        *   Order of 3 is 2 ($3^1=3, 3^2=6 \equiv 0 \pmod 6$).
        *   Order of 4 is 3 ($4^1=4, 4^2=8 \equiv 2, 4^3=12 \equiv 0 \pmod 6$).
        *   Order of 5 is 6 ($5^1=5, 5^2=10 \equiv 4, 5^3=15 \equiv 3, 5^4=20 \equiv 2, 5^5=25 \equiv 1, 5^6=30 \equiv 0 \pmod 6$).
    All these orders (1, 2, 3, 6) divide 6.

2.  **Primality Testing (for specific cases):** If a group $G$ has a prime order $p$, then $G$ must be cyclic. Also, Fermat's Little Theorem ($a^p \equiv a \pmod p$) and Euler's Totient Theorem ($a^{\phi(n)} \equiv 1 \pmod n$) are deeply connected to Lagrange's Theorem. For example, Fermat's Little Theorem can be seen as an application of Lagrange's Theorem to the multiplicative group of integers modulo a prime $p$, $(\mathbb{Z}_p^*, \times)$. The order of this group is $p-1$. For any element $a \in \mathbb{Z}_p^*$ (where $a \not\equiv 0 \pmod p$), its order must divide $p-1$. So, $a^{p-1} \equiv 1 \pmod p$. Multiplying by $a$, we get $a^p \equiv a \pmod p$. This is a beautiful connection!

3.  **Structure of Finite Groups:** Lagrange's Theorem is the first major step in understanding the structure of finite groups. It tells us that if we want to know about subgroups of a group of order $n$, we only need to consider subgroups whose orders are divisors of $n$. This significantly narrows down the possibilities.

**Important Caveat:** The converse of Lagrange's Theorem is **not** true. If an integer $m$ divides the order of a group $G$, it does **not** necessarily mean that there exists a subgroup of order $m$.

*   **Example:** Consider the alternating group $A_4$, which has order 12. The divisors of 12 are 1, 2, 3, 4, 6, 12. Lagrange's Theorem says there must be subgroups of orders 1, 2, 3, 4, 12. Indeed, $A_4$ has subgroups of these orders. However, $A_4$ does **not** have any subgroup of order 6. This is a famous counterexample. This is why it's important to remember that divisibility is a necessary, but not sufficient, condition for the existence of a subgroup of a certain order.

---

#### 3.2. Cosets and the Group Operation

Let's briefly revisit the properties of cosets, especially for abelian groups.

If $G$ is an abelian group and $H$ is a subgroup of $G$:
*   Left cosets and right cosets are identical: $aH = Ha$ for all $a \in G$.
*   The set of cosets can be thought of as an element of a new group, called the **quotient group** or **factor group** $G/H$, where the operation is $(aH) * (bH) = (a*b)H$. This is a very important concept in abstract algebra.

*   **Example:** In $\mathbb{Z}_6$ with $H=\{0,3\}$:
    *   Cosets: $0H=\{0,3\}$, $1H=\{1,4\}$, $2H=\{2,5\}$.
    *   Let's perform an operation: $(1H) + (2H) = \{1+h_1 + 2+h_2 \mid h_1, h_2 \in H\}$. This looks messy!
    *   But, $(1H) + (2H) = (1+2)H = 3H = \{3+0, 3+3\} = \{3,0\}$.
    *   Let's check if $\{0,3\}$ and $\{3,0\}$ are the same. Yes, they are!
    *   The quotient group $\mathbb{Z}_6 / \{0,3\}$ has elements $\{0H, 1H, 2H\}$ and the operation is addition of cosets.
    *   $0H = \{0,3\}$, $1H = \{1,4\}$, $2H = \{2,5\}$.
    *   $(1H) + (2H) = 3H = 0H$.
    *   $(2H) + (2H) = 4H = 1H$.
    This quotient group is isomorphic to $\mathbb{Z}_3$, the group of integers modulo 3. The order of the quotient group is $|G/H| = |G|/|H| = 6/2 = 3$. This aligns with Lagrange's Theorem!

---

#### 4. Sample Questions with Answers

Let's test your understanding with some typical questions you might encounter.

**Question 1 (Conceptual):**
Let $G$ be a group and $H$ be a subgroup of $G$. If $a, b \in G$ and $aH \cap bH \neq \emptyset$, what can you conclude about the relationship between $aH$ and $bH$?

**Answer:**
If $aH \cap bH \neq \emptyset$, then the left cosets $aH$ and $bH$ must be identical, meaning $aH = bH$. This is a fundamental property of cosets: they are either disjoint or the same.

**Question 2 (Application of Lagrange's Theorem):**
Let $G = (\mathbb{Z}_{12}, +)$. What are the possible orders of elements in $G$? Does $G$ necessarily have elements of all these orders?

**Answer:**
The order of the group $G = \mathbb{Z}_{12}$ is $|G| = 12$. By Lagrange's Theorem, the order of any element must divide the order of the group. The divisors of 12 are 1, 2, 3, 4, 6, and 12. So, the possible orders of elements in $\mathbb{Z}_{12}$ are 1, 2, 3, 4, 6, and 12.

Yes, $\mathbb{Z}_{12}$ is a cyclic group generated by 1. In a cyclic group, there is always an element of every possible order that divides the order of the group.
*   Order 1: 0 (0 has order 1).
*   Order 2: 6 (2 * 6 = 12 $\equiv$ 0 mod 12).
*   Order 3: 4 (3 * 4 = 12 $\equiv$ 0 mod 12).
*   Order 4: 3 (4 * 3 = 12 $\equiv$ 0 mod 12).
*   Order 6: 2 (6 * 2 = 12 $\equiv$ 0 mod 12).
*   Order 12: 1 (1 * 12 = 12 $\equiv$ 0 mod 12).

**Question 3 (Working with Cosets):**
Let $G = S_3$, the symmetric group on 3 elements, which has order 6. Let $H = \{e, (12)\}$, where $e$ is the identity and $(12)$ is the transposition swapping 1 and 2. Find all distinct left cosets of $H$ in $G$.

**Answer:**
$G = \{e, (12), (13), (23), (123), (132)\}$. $|G|=6$.
$H = \{e, (12)\}$. $|H|=2$.

By Lagrange's Theorem, $|H|$ must divide $|G|$. Indeed, 2 divides 6. The number of distinct left cosets should be $|G|/|H| = 6/2 = 3$.

Let's find them:
*   $eH = \{e*e, e*(12)\} = \{e, (12)\}$. This is $H$.
*   $(12)H = \{(12)*e, (12)*(12)\} = \{(12), e\}$. This is also $H$.
*   $(13)H = \{(13)*e, (13)*(12)\} = \{(13), (13)(12)\}$. The permutation $(13)(12)$ maps $1 \to 3 \to 3$, $2 \to 1 \to 2$, $3 \to 2 \to 1$. So, $(13)(12) = (132)$. Thus, $(13)H = \{(13), (132)\}$.
*   $(23)H = \{(23)*e, (23)*(12)\} = \{(23), (23)(12)\}$. The permutation $(23)(12)$ maps $1 \to 2 \to 3$, $2 \to 1 \to 1$, $3 \to 3 \to 2$. So, $(23)(12) = (13)$. Thus, $(23)H = \{(23), (13)\}$.
*   $(123)H = \{(123)*e, (123)*(12)\} = \{(123), (123)(12)\}$. The permutation $(123)(12)$ maps $1 \to 2 \to 1$, $2 \to 3 \to 2$, $3 \to 1 \to 3$. So, $(123)(12) = e$. Thus, $(123)H = \{(123), e\}$. This is $H$.
*   $(132)H = \{(132)*e, (132)*(12)\} = \{(132), (132)(12)\}$. The permutation $(132)(12)$ maps $1 \to 2 \to 3$, $2 \to 1 \to 2$, $3 \to 3 \to 1$. So, $(132)(12) = (13)$. Thus, $(132)H = \{(132), (13)\}$.

Now let's collect the distinct cosets:
1.  $eH = \{(12), e\}$ (and also $(12)H$, $(123)H$)
2.  $(13)H = \{(13), (132)\}$ (and also $(23)H$, $(132)H$)

Wait, I made a mistake in calculating some of these by hand. Let's recheck the distinct ones properly and be more systematic.

Let's start with $a \in G$ and compute $aH = \{a, a(12)\}$.
1.  $eH = \{e, e(12)\} = \{e, (12)\}$.
2.  $(12)H = \{(12), (12)(12)\} = \{(12), e\}$. This is the same as $eH$.
3.  $(13)H = \{(13), (13)(12)\}$. We know $(13)(12) = (132)$. So $(13)H = \{(13), (132)\}$.
4.  $(23)H = \{(23), (23)(12)\}$. We know $(23)(12) = (13)$. So $(23)H = \{(23), (13)\}$.
5.  $(123)H = \{(123), (123)(12)\}$. We know $(123)(12) = e$. So $(123)H = \{(123), e\}$. This is the same as $eH$.
6.  $(132)H = \{(132), (132)(12)\}$. We know $(132)(12) = (13)$. So $(132)H = \{(132), (13)\}$. This is the same as $(13)H$.

The distinct left cosets are:
*   $H = \{e, (12)\}$
*   $(13)H = \{(13), (132)\}$
*   $(23)H = \{(23), (13)\}$  --- *Error in calculation here again! Let's be super careful.*

Let's re-calculate $(23)H$:
$(23)H = \{(23) \cdot e, (23) \cdot (12)\}$
$(23) \cdot e = (23)$
$(23) \cdot (12)$: This maps $1 \to 2 \to 3$, $2 \to 1 \to 1$, $3 \to 3 \to 2$. So $(23)(12) = (13)$.
Ah, so $(23)H = \{(23), (13)\}$.

Let's re-collect distinct cosets:
1.  $eH = \{e, (12)\}$
2.  $(13)H = \{(13), (13)(12)\} = \{(13), (132)\}$
3.  $(23)H = \{(23), (23)(12)\} = \{(23), (13)\}$

Are these all distinct?
$H = \{e, (12)\}$
$C_2 = \{(13), (132)\}$
$C_3 = \{(23), (13)\}$

These are not all distinct. The element $(13)$ is in both $C_2$ and $C_3$. This means $C_2$ and $C_3$ must be the same coset. Let's verify this.
If $(13)H = (23)H$, then $(13)^{-1}(23)$ must be in $H$.
$(13)^{-1} = (13)$.
So we need to check if $(13)(23) \in H$.
$(13)(23)$ maps $1 \to 1 \to 3$, $2 \to 3 \to 2$, $3 \to 2 \to 1$. So $(13)(23) = (12)$.
And $(12) \in H$. Therefore, $(13)H = (23)H$.

So, the distinct left cosets are:
1.  $H = \{e, (12)\}$
2.  $(13)H = \{(13), (132)\}$

I am still only getting two distinct cosets. This means I have made a calculation error, or I am missing an element. Let's list the elements of $G$ and assign them to a coset.

$H=\{e, (12)\}$.
$eH = \{e, (12)\}$.
Let's take an element not in $eH$, say $(13)$.
$(13)H = \{(13), (13)(12)\} = \{(13), (132)\}$.
Now, let's take an element not in $eH$ or $(13)H$. The remaining elements are $(23)$ and $(123)$.
Let's try $(23)$.
$(23)H = \{(23), (23)(12)\} = \{(23), (13)\}$. This is not entirely new, as $(13)$ is already in $(13)H$. This means $(23)$ must belong to the same coset as $(13)$. So $(23)H = (13)H$.

What about $(123)$?
$(123)H = \{(123), (123)(12)\}$.
$(123)(12)$ maps $1 \to 2 \to 1$, $2 \to 1 \to 3$, $3 \to 3 \to 2$. So $(123)(12) = (23)$.
So $(123)H = \{(123), (23)\}$.

This set $\{(123), (23)\}$ is different from $\{e, (12)\}$ and $\{(13), (132)\}$.
Are the elements $(123)$ and $(23)$ in the previous cosets? No.
So, the three distinct left cosets are:
1.  $H = \{e, (12)\}$
2.  $(13)H = \{(13), (132)\}$
3.  $(123)H = \{(123), (23)\}$

Let me quickly verify the identity of the third coset.
If $(123)H = (23)H$, then $(123)^{-1}(23)$ must be in $H$.
$(123)^{-1} = (132)$.
So we need to check if $(132)(23) \in H$.
$(132)(23)$ maps $1 \to 1 \to 3$, $2 \to 3 \to 2$, $3 \to 2 \to 1$. So $(132)(23) = (13)$.
Ah, $(13)$ is not in $H$. So $(123)H \neq (23)H$.

This is a common pitfall – careful calculation is key!
Let's re-calculate the cosets one by one.
$H = \{e, (12)\}$
1.  $eH = \{e, (12)\}$
2.  $(12)H = \{ (12)e, (12)(12) \} = \{ (12), e \}$ (Same as $eH$)
3.  $(13)H = \{ (13)e, (13)(12) \} = \{ (13), (132) \}$
4.  $(23)H = \{ (23)e, (23)(12) \} = \{ (23), (13) \}$
5.  $(123)H = \{ (123)e, (123)(12) \} = \{ (123), (23) \}$
6.  $(132)H = \{ (132)e, (132)(12) \} = \{ (132), (13) \}$

Let's group the elements:
Set 1: $\{e, (12)\}$ (from $eH$, $(12)H$, $(123)H$ if $(123)(12)=e$ which it is) No, this is wrong.

Let's list ALL elements and see which coset they belong to.
$H = \{e, (12)\}$
$G \setminus H = \{(13), (23), (123), (132)\}$

Let's take $(13) \in G \setminus H$.
The coset of $(13)$ is $(13)H = \{ (13)e, (13)(12) \} = \{ (13), (132) \}$.
Let's denote this as $C_2 = \{(13), (132)\}$.

Now, let's take an element not in $H$ or $C_2$. The remaining elements are $(23)$ and $(123)$.
Let's take $(23)$.
The coset of $(23)$ is $(23)H = \{ (23)e, (23)(12) \} = \{ (23), (13) \}$.
Since $(13)$ is already in $C_2$, this means $(23)$ belongs to the same coset as $(13)$. So, $(23)H = (13)H = C_2$.

This means my calculation for $(123)H$ and $(132)H$ must yield one of these two cosets.
Let's re-check $(123)H$:
$(123)H = \{ (123)e, (123)(12) \} = \{ (123), (23) \}$.
Is $\{(123), (23)\}$ equal to either $H$ or $C_2$? No.
The element $(23)$ is in $C_2$, but $(123)$ is not. This implies that $(123)H$ must be a new coset.
Let's check $(23)H$ again.
$(23)H = \{ (23)e, (23)(12) \} = \{ (23), (13) \}$.
Ah, okay. So the elements are:
$H = \{e, (12)\}$
$C_2 = \{(13), (132)\}$
$C_3 = \{(23), (123)\}$

Let's check for equality between $C_2$ and $C_3$.
Is $(13)H = (123)H$? This means $(13)^{-1}(123) \in H$.
$(13)^{-1} = (13)$.
So, is $(13)(123) \in H$?
$(13)(123)$ maps $1 \to 3 \to 2$, $2 \to 2 \to 2$, $3 \to 1 \to 1$. Oh, $(13)(123) = (12)$.
And $(12) \in H$. Yes!
So $(13)H = (123)H$.

Therefore, the three distinct left cosets are:
1.  $H = \{e, (12)\}$
2.  $(13)H = \{(13), (132)\}$
3.  $(123)H = \{(123), (23)\}$

Let's quickly sum up the elements in each:
$H$: $e, (12)$
$(13)H$: $(13), (132)$
$(123)H$: $(123), (23)$
Union: $\{e, (12), (13), (132), (123), (23)\}$. This is exactly $G$.
And each coset has size 2. Total $2+2+2=6$. This is correct.

The distinct left cosets are $H$, $(13)H$, and $(123)H$.

---

**Summary of Key Takeaways:**

*   **Cosets ($aH$, $Ha$)** are "shifted" versions of a subgroup $H$.
*   Distinct cosets of $H$ in $G$ form a **partition** of $G$.
*   All cosets of $H$ have the same size as $H$ (i.e., $|aH| = |H|$).
*   **Lagrange's Theorem** states that for a finite group $G$ and subgroup $H$, $|H|$ divides $|G|$, and $|G| = |H| \cdot [G:H]$, where $[G:H]$ is the index (number of distinct cosets).
*   A consequence is that the **order of an element** must divide the order of the group.
*   The converse of Lagrange's Theorem is **false** (existence of a subgroup of order $m$ is not guaranteed just because $m$ divides $|G|$).

Keep these concepts and proofs close as you continue your exploration of group theory! They are fundamental building blocks for understanding much more complex structures in mathematics and computer science.
