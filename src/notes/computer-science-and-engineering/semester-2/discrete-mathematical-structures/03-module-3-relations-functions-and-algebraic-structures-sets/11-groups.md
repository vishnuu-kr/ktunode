---
title: "Groups"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 3: Relations, Functions and Algebraic Structures: Sets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b6012"
status: "completed"
scrapedAt: "2026-05-20T16:32:31.550Z"
---
# Module 3: Relations, Functions, and Algebraic Structures: Groups

Hello everyone! Welcome back to Discrete Mathematical Structures. Today, we're diving into one of the fundamental building blocks of abstract algebra: **Groups**. This is a really exciting topic because it's not just about abstract symbols; it has deep connections to many areas of mathematics and computer science, from cryptography to coding theory. We'll see how understanding groups helps us formalize patterns and structures we encounter every day.

Remember, our goal in this module is to understand different mathematical structures. We've already touched on sets, relations, and functions. Now, we're elevating our understanding by looking at **algebraic structures**, which are sets equipped with operations that follow specific rules. Groups are the simplest, yet most powerful, of these structures.

### What is a Group? A Gentle Introduction

Think about everyday actions that have an "undo" button. If you add 5 to a number, you can subtract 5 to get back to where you started. If you rotate a square by 90 degrees, you can rotate it another 270 degrees (or 90 degrees three times) to bring it back to its original position. These "undo" capabilities are at the heart of what makes a group.

Formally, a **group** is a set, let's call it $G$, together with a binary operation, let's denote it by $*$, that satisfies four key properties. These properties are like the rules of a game that ensure the structure is well-behaved and predictable.

Let's break down these properties. We'll be referencing Grimaldi and Veerarajan quite a bit here, as they provide excellent foundational explanations.

#### The Four Pillars of a Group

For a set $G$ and a binary operation $*$ on $G$, the pair $(G, *)$ is a group if the following four axioms hold:

1.  **Closure Property:** This is the most basic rule. For any two elements $a$ and $b$ in the set $G$, their combination using the operation $*$ must also be an element of $G$. In simpler terms, when you "operate" on any two elements from the set, the result *must* stay within that same set. You can't "leave" the set by performing the operation.

    *   **Analogy:** Imagine you have a bag of apples. If you're only allowed to pick apples and put them into a basket, and the basket only holds apples, then the operation (putting apples in the basket) keeps you within the "apple" domain. If you suddenly found a banana in your basket, the closure property would be violated!

    *   **Example:** Consider the set of integers, $\mathbb{Z}$, and the operation of addition $(+)$. If you add any two integers, say 3 and -5, you get -2. Is -2 an integer? Yes! This property holds for all integers and addition.

2.  **Associative Property:** This property is about the order of operations when you have three or more elements. For any three elements $a, b, c$ in $G$, the way you group them for the operation doesn't matter. That is, $(a * b) * c$ must be equal to $a * (b * c)$.

    *   **Analogy:** Think about stacking building blocks. Whether you first stack two blocks and then add a third on top, or you first stack the last two blocks and then add the first one to that stack, you end up with the same final tower. The order of grouping the stacking operation doesn't change the outcome.

    *   **Example:** Again, let's use integers and addition. Is $(2 + 3) + 4$ equal to $2 + (3 + 4)$? Yes, both sides equal 9. This is why we often drop parentheses when adding multiple numbers.

3.  **Existence of an Identity Element:** Every group must have a special element, called the **identity element** (often denoted by $e$ or $0$ or $1$, depending on the operation), such that when you combine it with any element $a$ in $G$, you get $a$ back. So, for all $a \in G$, we have $e * a = a * e = a$.

    *   **Analogy:** Think of this as a "neutral" action. In addition, zero is the identity element. Adding zero to any number doesn't change the number. In multiplication, one is the identity element. Multiplying any number by one doesn't change the number. It’s like a "do nothing" button that doesn't affect the state.

    *   **Example:** In $(\mathbb{Z}, +)$, the identity element is $0$, because $a + 0 = 0 + a = a$ for any integer $a$. In the set of non-zero rational numbers $\mathbb{Q}^*$ with multiplication, the identity element is $1$, because $a \times 1 = 1 \times a = a$ for any non-zero rational number $a$.

4.  **Existence of Inverse Elements:** For *every* element $a$ in the set $G$, there must be a corresponding element, called its **inverse** (often denoted by $a^{-1}$ or $-a$), such that when you combine $a$ with its inverse using the operation $*$, you get the identity element. That is, $a * a^{-1} = a^{-1} * a = e$. This is the "undo" button we talked about earlier.

    *   **Analogy:** If adding 5 to a number is your operation, then subtracting 5 is its inverse, because adding 5 and then subtracting 5 brings you back to the original number. In multiplication, the inverse of multiplying by 2 is dividing by 2 (or multiplying by 1/2).

    *   **Example:** In $(\mathbb{Z}, +)$, the inverse of an integer $a$ is $-a$. For example, the inverse of $7$ is $-7$, because $7 + (-7) = 0$, and $0$ is the identity element. What about in $(\mathbb{Q}^*, \times)$? The inverse of a rational number $a$ is $1/a$. For example, the inverse of $3/4$ is $4/3$, because $(3/4) \times (4/3) = 1$, and $1$ is the identity.

    *   **Important Note for Exams:** Pay close attention to the specific set and operation. For instance, $(\mathbb{Z}^*, \times)$, where $\mathbb{Z}^*$ is the set of non-zero integers, *is* a group. But $(\mathbb{Z}, \times)$ is *not* a group because not every integer has a multiplicative inverse within the set of integers (e.g., the inverse of 2 is 1/2, which is not an integer). This is a common pitfall!

### Types of Groups: Commutativity Matters!

Now, groups are already powerful, but sometimes they have an extra property that makes them even more special. This property relates to the order of elements in the operation.

**Commutative Property (or Abelian Property):** A group $(G, *)$ is called **commutative** (or an **Abelian group**, named after the mathematician Niels Henrik Abel) if the order of elements in the operation does not matter for *any* pair of elements. That is, for all $a, b \in G$, $a * b = b * a$.

*   **Analogy:** Commutative operations are like putting on your socks and shoes. You can put on your left sock then your right sock, or your right sock then your left sock – the result is the same: both feet are socked. However, putting on your left shoe then your right shoe is different from putting on your right shoe then your left shoe (you'd probably trip!). So, the "socking" operation is commutative, but the "shoeing" operation might not be, depending on how you define it.

*   **Examples:**
    *   $(\mathbb{Z}, +)$ is an Abelian group because $a+b = b+a$ for all integers $a, b$.
    *   $(\mathbb{Q}^*, \times)$ is an Abelian group because $a \times b = b \times a$ for all non-zero rational numbers $a, b$.

*   **Non-Abelian Example:** Consider the set of all invertible $2 \times 2$ matrices with real entries, denoted by $GL_2(\mathbb{R})$, and the operation of matrix multiplication. In general, for matrices $A$ and $B$, $A \times B \neq B \times A$. So, $(GL_2(\mathbb{R}), \times)$ is a group, but it's a non-Abelian group. This is very important for understanding transformations and symmetries in geometry and physics.

### Subgroups: Groups within Groups

Just as a set can contain subsets, a group can contain **subgroups**. A subgroup is essentially a smaller group that lives within a larger group, using the same operation and satisfying all the group axioms.

Let $(G, *)$ be a group. A non-empty subset $H$ of $G$ is a **subgroup** of $G$ if $(H, *)$ is itself a group.

To check if a subset $H$ is a subgroup, we don't need to re-check all four group axioms from scratch. Grimaldi and Veerarajan, and also Rosen, simplify this with a useful theorem:

**Subgroup Test:** A non-empty subset $H$ of a group $(G, *)$ is a subgroup of $G$ if and only if for all $a, b \in H$, $a * b^{-1} \in H$.

*   **Why does this work?**
    *   **Closure:** If we take $b \in H$, then its inverse $b^{-1}$ must exist in $G$. If $H$ is a subgroup, $b^{-1}$ must also be in $H$. Then, by taking $a \in H$ and $b^{-1} \in H$, their product $a * b^{-1}$ being in $H$ ensures closure *and* the existence of inverses for all elements within $H$.
    *   **Identity:** To show the identity $e$ is in $H$, we can take any element $a \in H$. Since $a^{-1}$ must exist in $H$ (by the test $a * a^{-1} \in H$, which is $e$), we have $e \in H$.
    *   **Associativity:** Since $H$ is a subset of $G$, and associativity holds for all elements in $G$, it automatically holds for all elements in $H$ as well.

*   **Another handy test (for finite subgroups or when checking for identity):** A non-empty finite subset $H$ of a group $(G, *)$ is a subgroup of $G$ if and only if $H$ is closed under $*$.
    *   **Why?** For a finite set, if it's closed, then the operation maps the set to itself. Since there's an identity in the larger group, and only a finite number of elements to form these mappings, it can be proven that the identity must be in $H$, and inverses must also be present. This is a common shortcut for finite groups.

*   **Examples:**
    *   Consider the group of integers under addition, $(\mathbb{Z}, +)$. The set of even integers, $H = \{..., -4, -2, 0, 2, 4, ...\}$, is a subgroup of $\mathbb{Z}$. Let's check the subgroup test: Take any two even integers $a$ and $b$. Their inverses are $-a$ and $-b$. Is $a + (-b)$ always even? Yes, because if $a=2m$ and $b=2n$, then $a+(-b) = 2m - 2n = 2(m-n)$, which is an even number. So, $H$ is a subgroup.
    *   The set of positive integers under addition is *not* a subgroup of $(\mathbb{Z}, +)$ because it's not closed under inverses (e.g., $3$ is in the set, but its inverse $-3$ is not). It also doesn't contain the identity element $0$.

### Examples of Groups in Action

Understanding groups is not just theoretical; it's about recognizing patterns. Let's look at some more concrete examples, pulling ideas from Veerarajan and Grimaldi.

1.  **The Integers Modulo n:**
    *   Consider the set $\mathbb{Z}_n = \{0, 1, 2, ..., n-1\}$ with the operation of addition modulo $n$, denoted by $(+)_n$.
    *   Let's take $\mathbb{Z}_3 = \{0, 1, 2\}$ with $(+)_3$.
        *   **Closure:** $1 +_3 2 = 0$, $2 +_3 2 = 1$. All results are in $\mathbb{Z}_3$. Yes.
        *   **Associativity:** $(a +_n b) +_n c = a +_n (b +_n c)$. This property holds for modular arithmetic.
        *   **Identity:** $0$ is the identity, as $a +_3 0 = 0 +_3 a = a$.
        *   **Inverse:** For $0$, the inverse is $0$. For $1$, the inverse is $2$ (since $1 +_3 2 = 0$). For $2$, the inverse is $1$ (since $2 +_3 1 = 0$). Yes.
        *   **Commutativity:** $a +_n b = b +_n a$. Yes.
    *   So, $(\mathbb{Z}_n, +_n)$ is an Abelian group for any $n \ge 1$. This is a very fundamental group in number theory and computer science.

2.  **Symmetries of Geometric Shapes:** This is where groups really shine in visualizing abstract concepts.
    *   **Symmetries of a Square:** Imagine a square. What operations can you perform on it so that it looks exactly the same as it did before?
        *   Rotations: 0 degrees (identity), 90 degrees clockwise, 180 degrees, 270 degrees clockwise. Let's call these $R_0, R_{90}, R_{180}, R_{270}$.
        *   Reflections: Across the horizontal midline, across the vertical midline, across the main diagonal, across the anti-diagonal. Let's call these $H, V, D, A$.
    *   The set of these 8 operations forms a group under the operation of "composition of transformations" (performing one operation after another).
    *   Is it closed? If you rotate by 90 degrees and then reflect across the vertical midline, you get a specific result (which is equivalent to another rotation). Yes, the composition of any two symmetries is another symmetry.
    *   Is it associative? Yes, composition of functions is always associative.
    *   Identity? $R_0$ (rotation by 0 degrees) is the identity.
    *   Inverses? For $R_{90}$, the inverse is $R_{270}$. For $H$, the inverse is $H$ itself. Every symmetry has an inverse.
    *   This group is called the **Dihedral group of order 8**, denoted $D_4$.
    *   Is it commutative? No! If you rotate by 90 degrees ($R_{90}$) and then reflect horizontally ($H$), the result is different from reflecting horizontally ($H$) and then rotating by 90 degrees ($R_{90}$). So, $D_4$ is a non-Abelian group. This is a classic example used in Grimaldi and other texts.

3.  **Permutation Groups:**
    *   A **permutation** of a set is a bijective function from the set to itself.
    *   Consider the set $\{1, 2, 3\}$. The permutations can be represented in two-line notation or cycle notation. For example, the permutation that maps $1 \to 2, 2 \to 3, 3 \to 1$ is $(1 2 3)$ in cycle notation.
    *   The set of all permutations of a set of $n$ elements, along with the operation of function composition, forms a group called the **Symmetric Group** on $n$ elements, denoted by $S_n$.
    *   $S_3$, the set of permutations of $\{1, 2, 3\}$, has $3! = 6$ elements. These are:
        *   $e = (1)(2)(3)$ (identity)
        *   $(1 2)$, $(1 3)$, $(2 3)$ (transpositions)
        *   $(1 2 3)$, $(1 3 2)$ (3-cycles)
    *   $S_3$ is a group under composition. Is it Abelian? Let's try composing $(1 2)$ and $(1 3)$:
        *   $(1 2) \circ (1 3)$: $1 \to 3$, $2 \to 2$, $3 \to 1$. So, $1 \to 3, 3 \to 1, 2 \to 2$. This is $(1 3)$.
        *   $(1 3) \circ (1 2)$: $1 \to 1$, $2 \to 3$, $3 \to 2$. So, $1 \to 1, 2 \to 3, 3 \to 2$. This is $(2 3)$.
    *   Since $(1 2) \circ (1 3) \neq (1 3) \circ (1 2)$, $S_3$ is a non-Abelian group. $S_n$ for $n \ge 3$ is always non-Abelian. This is a very important class of groups, as Cayley's theorem states that every group is isomorphic to a subgroup of a symmetric group.

### Connection to Course Outcomes

Let's quickly tie this back to our course objectives.

*   **CO1 (Logical Reasoning & Proofs):** When we verify if something is a group, we are doing formal verification. Each of the four axioms requires a precise logical statement and proof. For example, proving associativity for $(\mathbb{Z}_n, +_n)$ involves modular arithmetic rules and logical deduction. Understanding quantifiers ("for all $a, b \in G$...") is crucial here.

*   **CO2 (Counting Principles):** The *order* of a group (the number of elements in the set $G$) is a key property. For finite groups, we use counting principles to determine the number of elements. For $S_n$, the order is $n!$. For $D_4$, the order is 8. These are direct applications of combinatorial counting.

*   **CO3 & CO4 (Sets, Relations, Functions, Algebraic Structures):** This is our primary focus! Groups are an algebraic structure. They are sets endowed with an operation. We've seen how they build upon our understanding of sets and functions (especially in permutation groups). We're describing the *properties* and *structures* of these systems. We've covered semigroups (associative binary operations) and monoids (semigroups with an identity) as precursors to groups, and now we're mastering groups.

### Key Takeaways and Exam Tips

*   **Master the Four Axioms:** Always be ready to check closure, associativity, identity, and inverses. This is the bread and butter of group theory.
*   **Identity and Inverse Specificity:** The identity element is *unique* (if it exists, there's only one). Inverses are also unique for each element. You should be able to prove this.
*   **Set and Operation:** The group is defined by *both* the set and the operation. $(\mathbb{Z}, +)$ is a group, but $(\mathbb{Z}, \times)$ is not. $(\mathbb{Z}_n, +_n)$ is a group, but $(\mathbb{Z}_n, \times_n)$ is not a group (0 has no multiplicative inverse).
*   **Abelian vs. Non-Abelian:** Don't forget to check commutativity. Many common examples like $(\mathbb{Z}, +)$ are Abelian, but symmetries and permutations often lead to non-Abelian groups.
*   **Subgroup Test:** The $a * b^{-1} \in H$ test is your best friend for checking subgroups efficiently.
*   **Common Examples:** Be familiar with $(\mathbb{Z}, +)$, $(\mathbb{Q}^*, \times)$, $(\mathbb{R}^*, \times)$, $(\mathbb{C}^*, \times)$, $(\mathbb{Z}_n, +_n)$, $S_n$, and geometric symmetry groups like $D_n$.

### Sample Questions and Answers

**Question 1 (Conceptual):**
Is the set of positive integers under addition, $(\mathbb{Z}^+, +)$, a group? Explain why or why not, referencing the group axioms.

**Answer:**
No, $(\mathbb{Z}^+, +)$ is not a group.
*   **Closure:** It is closed because the sum of two positive integers is always a positive integer.
*   **Associativity:** Addition is associative.
*   **Identity:** It fails the existence of an identity element. The identity for addition is 0, but 0 is not in the set of positive integers.
*   **Inverse:** It also fails the existence of inverse elements. For any positive integer $a$, its additive inverse is $-a$, which is not a positive integer.

**Question 2 (Exam-Oriented):**
Let $G = \{1, -1, i, -i\}$ be the set of fourth roots of unity, and let $*$ be the operation of multiplication. Prove that $(G, *)$ is a group.

**Answer:**
We need to check the four group axioms for $(G, *)$.

1.  **Closure:** We can construct a multiplication table:

    | $*$ | 1   | -1  | i   | -i  |
    | :-- | :-- | :-- | :-- | :-- |
    | 1   | 1   | -1  | i   | -i  |
    | -1  | -1  | 1   | -i  | i   |
    | i   | i   | -i  | -1  | 1   |
    | -i  | -i  | i   | 1   | -1  |

    All entries in the table are elements of $G$. Thus, the set $G$ is closed under multiplication.

2.  **Associativity:** Multiplication of complex numbers is associative. Since all elements of $G$ are complex numbers, the operation of multiplication is associative for elements in $G$. For example, $(i \times i) \times (-i) = (-1) \times (-i) = i$, and $i \times (i \times (-i)) = i \times (1) = i$.

3.  **Identity Element:** The element $1$ in $G$ is the multiplicative identity, since for any $a \in G$, $a \times 1 = 1 \times a = a$. From the table, you can see that multiplying by 1 leaves the other element unchanged.

4.  **Inverse Elements:**
    *   The inverse of $1$ is $1$, since $1 \times 1 = 1$.
    *   The inverse of $-1$ is $-1$, since $(-1) \times (-1) = 1$.
    *   The inverse of $i$ is $-i$, since $i \times (-i) = 1$.
    *   The inverse of $-i$ is $i$, since $(-i) \times i = 1$.
    Every element in $G$ has an inverse in $G$.

Since all four axioms are satisfied, $(G, *)$ is a group.

**Question 3 (Application/Comparison):**
Compare and contrast the groups $(\mathbb{Z}, +)$ and $(\mathbb{Z}_3, +_3)$. Are both Abelian? What are their orders?

**Answer:**
*   **$(\mathbb{Z}, +)$:**
    *   **Set:** Integers ($\{..., -2, -1, 0, 1, 2, ...\}$).
    *   **Operation:** Addition.
    *   **Abelian:** Yes, $a+b = b+a$ for all integers.
    *   **Order:** Infinite.
    *   **Identity:** 0.
    *   **Inverses:** For $a$, inverse is $-a$.

*   **$(\mathbb{Z}_3, +_3)$:**
    *   **Set:** $\{0, 1, 2\}$.
    *   **Operation:** Addition modulo 3.
    *   **Abelian:** Yes, $a +_3 b = b +_3 a$ for all $a, b \in \mathbb{Z}_3$.
    *   **Order:** Finite, specifically 3.
    *   **Identity:** 0.
    *   **Inverses:** For $0$ is $0$, for $1$ is $2$, for $2$ is $1$.

**Comparison:** Both are infinite groups and are Abelian. The primary difference is the size of the set and the nature of the operation (standard addition vs. modular addition). $(\mathbb{Z}_3, +_3)$ is a cyclic group, generated by 1 (or 2). $(\mathbb{Z}, +)$ is also a cyclic group, generated by 1 (or -1).

This brings us to the end of our introduction to groups! Remember, this is just the beginning of a rich and fascinating area of mathematics. Keep practicing with examples, and you'll start to see these group structures everywhere!
