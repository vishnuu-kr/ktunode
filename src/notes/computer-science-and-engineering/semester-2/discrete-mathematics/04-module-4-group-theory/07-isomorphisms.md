---
title: "Isomorphisms"
subject: "DISCRETE MATHEMATICS"
module: "Module 4: Group theory"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fb5"
status: "completed"
scrapedAt: "2026-05-20T16:33:16.020Z"
---
Absolutely! Let's dive into the fascinating world of group isomorphisms. Think of this as our guided lecture for Module 4, focusing on how to tell if two groups, even if they look completely different on the surface, are essentially the *same* from a structural perspective.

---

# Module 4: Group Theory - Isomorphisms

Welcome back, everyone! In our journey through abstract algebra, we've met groups – sets with a special operation that behave in predictable ways. We've learned about their properties, like closure, associativity, identity, and inverses. Now, we're going to tackle a really powerful concept: **Isomorphism**.

### What's the Big Idea Behind Isomorphism?

Imagine you have two identical sets of building blocks. One set is red, and the other is blue. The blocks are shaped the same, they connect in the same ways, and you can build the exact same structures with both sets. The *only* difference is the color.

In group theory, an isomorphism is like saying that two groups, even if they use different symbols for their elements and operations, are structurally identical. They are just "different names" for the same underlying mathematical structure. This is incredibly important because if we understand the properties of one group, we automatically understand the same properties of any group that is isomorphic to it. This helps us simplify problems and generalize results.

This ties directly into **Course Outcome 6 (CO6)**, where we aim to "Illustrate the abstract algebraic systems - Semigroups, Monoids, Groups, Homomorphism and Isomorphism of Monoids and Groups." Today, we're focusing on the "Isomorphism of Groups" part at a **Knowledge Level K2 (Understanding)**. We want to understand *what* an isomorphism is and *how* to identify it.

---

## 1. Building Bridges: Homomorphisms First

Before we can talk about isomorphisms, we need to understand a related concept called a **homomorphism**. Think of a homomorphism as a way to map elements from one group to another group while *preserving* the group operation. It's like a translator between two languages, ensuring that when you combine words in one language, the translated result in the other language represents the same idea.

**Definition: Group Homomorphism**
A function $f: G \to H$ between two groups $(G, *)$ and $(H, \cdot)$ is a **homomorphism** if, for all elements $a, b \in G$, the following property holds:
$$f(a * b) = f(a) \cdot f(b)$$

Let's break this down.
*   We have two groups: $G$ with operation $*$ and $H$ with operation $\cdot$.
*   $f$ is a function that takes an element from $G$ and maps it to an element in $H$.
*   The crucial condition is that applying the operation $*$ in group $G$ to two elements ($a$ and $b$), and then mapping the result to $H$ using $f$, is the *same* as mapping $a$ and $b$ to $H$ *individually* using $f$, and then applying the operation $\cdot$ in group $H$.

**Example:**
Consider the group of integers under addition, $(\mathbb{Z}, +)$, and the group of even integers under addition, $(2\mathbb{Z}, +)$.
Let our function be $f: \mathbb{Z} \to 2\mathbb{Z}$ defined by $f(n) = 2n$.

Let's check the homomorphism property:
For any $a, b \in \mathbb{Z}$, we need to see if $f(a + b) = f(a) + f(b)$.
*   Left side: $f(a + b) = 2(a + b) = 2a + 2b$.
*   Right side: $f(a) + f(b) = (2a) + (2b) = 2a + 2b$.

Since $f(a + b) = f(a) + f(b)$, the function $f(n) = 2n$ is indeed a homomorphism from $(\mathbb{Z}, +)$ to $(2\mathbb{Z}, +)$.

**Relatable Analogy:** Think about scaling recipes. If you have a recipe for 4 people and you want to make it for 8 people, you double every ingredient. If $G$ is the set of ingredient quantities for 4 people and $H$ is the set of ingredient quantities for 8 people, and the "operation" is combining ingredients to make a dish, then doubling all quantities is a homomorphism. The structure of "combining ingredients" is preserved.

**From our Textbooks:** Kenneth Rosen's "Discrete Mathematics and Its Applications" (Chapter 8, Groups) covers homomorphisms. He emphasizes that a homomorphism "preserves the structure" of the groups, which is exactly what we're building towards with isomorphisms.

---

## 2. The "Same" Groups: Isomorphisms Defined

Now, what if our "translator" function $f$ is not only a homomorphism but also a **bijection**? A bijection means the function is both one-to-one (injective) and onto (surjective).

*   **One-to-one (Injective):** Different inputs in $G$ map to different outputs in $H$. No two elements in $G$ map to the same element in $H$.
*   **Onto (Surjective):** Every element in $H$ is mapped to by at least one element in $G$. The range of $f$ is exactly $H$.

If a homomorphism is also a bijection, it's called an **isomorphism**. This means there's a perfect, one-to-one correspondence between the elements of $G$ and the elements of $H$, and this correspondence *preserves the group operation*.

**Definition: Group Isomorphism**
A function $f: G \to H$ between two groups $(G, *)$ and $(H, \cdot)$ is an **isomorphism** if:
1.  $f$ is a homomorphism (i.e., $f(a * b) = f(a) \cdot f(b)$ for all $a, b \in G$).
2.  $f$ is a bijection (one-to-one and onto).

If such a function $f$ exists, we say that group $G$ is **isomorphic** to group $H$, and we denote this by $G \cong H$.

**Why is this important?**
If $G \cong H$, it means $G$ and $H$ are structurally indistinguishable. Any property that can be described in terms of the group's elements and its operation will hold true for both groups. This is a fundamental concept in abstract algebra for classifying and understanding groups. It's a key part of understanding abstract algebraic systems as per **CO6**.

**Example 1: $(\mathbb{Z}, +)$ and $(2\mathbb{Z}, +)$ revisited**
We saw that $f(n) = 2n$ is a homomorphism from $(\mathbb{Z}, +)$ to $(2\mathbb{Z}, +)$. Is it an isomorphism?
*   Is $f$ one-to-one? Yes, if $f(a) = f(b)$, then $2a = 2b$, which implies $a = b$.
*   Is $f$ onto? Yes, for any even integer $2k \in 2\mathbb{Z}$, there exists an integer $k \in \mathbb{Z}$ such that $f(k) = 2k$.

Since $f$ is a homomorphism and a bijection, $f$ is an isomorphism. Therefore, $(\mathbb{Z}, +) \cong (2\mathbb{Z}, +)$. These two groups, one with all integers and the other with only even integers, are structurally the same in terms of addition.

**Example 2: A Different Kind of Isomorphism**
Let's consider the group of integers modulo 4 under addition, $(\mathbb{Z}_4, +_4)$, and the group of the four fourth roots of unity under multiplication, $U_4 = \{1, -1, i, -i\}$.
The operation in $\mathbb{Z}_4$ is addition modulo 4.
The operation in $U_4$ is complex number multiplication.

Let's try to define a function $f: \mathbb{Z}_4 \to U_4$. A common way to find isomorphisms is to see if we can map a generator of one group to a generator of the other. In $\mathbb{Z}_4$, 1 is a generator since $1, 1+1=2, 1+1+1=3, 1+1+1+1=0 \pmod 4$ gives us all elements. In $U_4$, $i$ is a generator since $i^1=i, i^2=-1, i^3=-i, i^4=1$.

Let's define $f(x) = i^x$ for $x \in \mathbb{Z}_4$.
*   $f(0) = i^0 = 1$
*   $f(1) = i^1 = i$
*   $f(2) = i^2 = -1$
*   $f(3) = i^3 = -i$

Now, let's check the homomorphism property: $f(a +_4 b) = f(a) \cdot f(b)$.
Let's pick $a=2$ and $b=3$.
*   $a +_4 b = 2 +_4 3 = 5 \pmod 4 = 1$.
*   $f(a +_4 b) = f(1) = i^1 = i$.
*   $f(a) = f(2) = i^2 = -1$.
*   $f(b) = f(3) = i^3 = -i$.
*   $f(a) \cdot f(b) = (-1) \cdot (-i) = i$.

So, $f(2 +_4 3) = i$ and $f(2) \cdot f(3) = i$. The property holds for this pair. You'd need to check all pairs (or use the property of generators) to be sure it's a homomorphism. It turns out this function $f(x) = i^x$ is indeed a homomorphism.

Now, is $f$ a bijection?
*   One-to-one: Yes, $f(0)=1, f(1)=i, f(2)=-1, f(3)=-i$. All distinct outputs for distinct inputs.
*   Onto: Yes, the range $\{1, i, -1, -i\}$ is exactly $U_4$.

So, $(\mathbb{Z}_4, +_4) \cong (U_4, \cdot)$. Isn't that neat? A group based on addition of numbers modulo 4 is structurally the same as a group based on multiplication of complex numbers. This highlights how abstract algebraic structures can appear in very different guises.

**Relatable Analogy:** Think about playing music. You can have a symphony orchestra and a rock band. They use different instruments (elements) and different ways of putting notes together (operations). However, if they are both playing the same "structure" of music (say, the same melody and harmony, just arranged differently), we could say they are isomorphic in their musical expression. One might be more complex in its instrumentation, but the underlying musical ideas are the same.

**From our Reference Books:**
Marc Lipson and Seymour Lipschutz's "Schaum's Outline of Discrete Mathematics" is excellent for providing concrete examples and algorithms for checking isomorphisms. They often use Cayley tables to visualize group operations and check the homomorphism property.
Kenneth Ross and Charles Wright's "Discrete Mathematics" might explore isomorphisms in the context of more general algebraic structures, reinforcing the idea that this is a fundamental concept across mathematics.

---

## 3. How to Prove an Isomorphism

Proving that two groups are isomorphic involves demonstrating that a suitable function $f$ is both a homomorphism and a bijection.

**Steps to Prove $G \cong H$:**
1.  **Define a candidate function $f: G \to H$.** Often, this function is suggested by the structure of the groups, especially if one group has a generator.
2.  **Prove $f$ is a homomorphism.** For all $a, b \in G$, show $f(a * b) = f(a) \cdot f(b)$. This is the most crucial step.
3.  **Prove $f$ is injective (one-to-one).** Either show that if $f(a) = f(b)$, then $a=b$, OR show that the kernel of $f$ (the set of elements in $G$ that map to the identity in $H$) contains only the identity element of $G$. Recall from our earlier discussions, if $\text{ker}(f) = \{e_G\}$, then $f$ is injective.
4.  **Prove $f$ is surjective (onto).** Show that for every element $h \in H$, there exists an element $g \in G$ such that $f(g) = h$.
5.  **Conclusion:** If all these steps are verified, then $f$ is an isomorphism, and $G \cong H$.

**Example: Proving $(\mathbb{Z}_2, +_2) \cong (\{1, -1\}, \cdot)$**
Let $G = (\mathbb{Z}_2, +_2)$ and $H = (\{1, -1\}, \cdot)$.
$G = \{0, 1\}$ with addition modulo 2.
$H = \{1, -1\}$ with multiplication.

Let's propose a function $f: \mathbb{Z}_2 \to \{1, -1\}$.
A natural choice, given that 1 is a generator for $\mathbb{Z}_2$ (since $1 = 1 \pmod 2$, $1+1 = 0 \pmod 2$), is to map 1 to $-1$ (a generator for $H$ if we think of powers of $-1$: $(-1)^1 = -1$, $(-1)^2 = 1$).
Let $f(x) = (-1)^x$.

1.  **Candidate Function:** $f(0) = (-1)^0 = 1$, $f(1) = (-1)^1 = -1$.
2.  **Prove Homomorphism:**
    We need to check $f(a +_2 b) = f(a) \cdot f(b)$ for all $a, b \in \mathbb{Z}_2$.
    There are only $2 \times 2 = 4$ pairs to check:
    *   $a=0, b=0$: $f(0 +_2 0) = f(0) = 1$. $f(0) \cdot f(0) = 1 \cdot 1 = 1$. ($1=1$, OK)
    *   $a=0, b=1$: $f(0 +_2 1) = f(1) = -1$. $f(0) \cdot f(1) = 1 \cdot (-1) = -1$. ($-1=-1$, OK)
    *   $a=1, b=0$: $f(1 +_2 0) = f(1) = -1$. $f(1) \cdot f(0) = (-1) \cdot 1 = -1$. ($-1=-1$, OK)
    *   $a=1, b=1$: $f(1 +_2 1) = f(0) = 1$. $f(1) \cdot f(1) = (-1) \cdot (-1) = 1$. ($1=1$, OK)
    The homomorphism property holds.
3.  **Prove Injective:**
    The kernel of $f$ is $\{g \in \mathbb{Z}_2 \mid f(g) = 1\}$.
    $f(0) = 1$. $f(1) = -1$.
    So, the kernel is $\{0\}$, which is the identity element of $\mathbb{Z}_2$. Since the kernel is just the identity, $f$ is injective.
4.  **Prove Surjective:**
    The range of $f$ is $\{f(0), f(1)\} = \{1, -1\}$. This is exactly the set $H$. So, $f$ is surjective.
5.  **Conclusion:** Since $f$ is a homomorphism, injective, and surjective, it is an isomorphism. Therefore, $(\mathbb{Z}_2, +_2) \cong (\{1, -1\}, \cdot)$.

**Common Pitfalls and Exam Tips:**
*   **Don't forget to check *all* conditions.** Many students forget to check surjectivity or injectivity after verifying the homomorphism property.
*   **Be careful with operations.** Make sure you are applying the correct operation from the correct group when checking the homomorphism property. For example, $f(a * b) = f(a) \cdot f(b)$, not $f(a * b) = f(a) * f(b)$ unless the operations are the same.
*   **Understand generators.** If a group is cyclic (generated by a single element), finding an isomorphism often involves mapping a generator of one group to a generator of the other. This can simplify checking the homomorphism property.
*   **The inverse function.** If $f: G \to H$ is an isomorphism, then its inverse function $f^{-1}: H \to G$ is also an isomorphism. This is a very useful theorem! We don't need to prove it separately if we've already established $f$ is an isomorphism.

---

## 4. Properties of Isomorphic Groups

What does it mean for two groups to be "structurally the same"? It means they share all their essential properties related to the group operation. If $G \cong H$ via an isomorphism $f$, then:

*   **Order of elements:** If $g \in G$ has order $n$, then $f(g) \in H$ also has order $n$. This is because $f(g^k) = f(g)^k$. If $g^k = e_G$, then $f(g^k) = f(e_G) = e_H$. So $f(g)^k = e_H$.
*   **Identity element:** $f(e_G) = e_H$.
*   **Inverses:** $f(g^{-1}) = (f(g))^{-1}$.
*   **Commutativity:** If $G$ is abelian (commutative), then $H$ is also abelian. If $g_1 * g_2 = g_2 * g_1$, then $f(g_1 * g_2) = f(g_1) \cdot f(g_2)$ and $f(g_2 * g_1) = f(g_2) \cdot f(g_1)$. Since $f(g_1 * g_2) = f(g_2 * g_1)$, we have $f(g_1) \cdot f(g_2) = f(g_2) \cdot f(g_1)$.
*   **Subgroups:** If $K$ is a subgroup of $G$, then $f(K) = \{f(k) \mid k \in K\}$ is a subgroup of $H$.
*   **Cyclic groups:** A cyclic group is isomorphic to $(\mathbb{Z}, +)$ or $(\mathbb{Z}_n, +_n)$ for some $n$. This is a powerful classification tool.

These shared properties are why isomorphisms are so vital. They allow us to classify groups. For instance, all cyclic groups of order $n$ are isomorphic to $(\mathbb{Z}_n, +_n)$.

This directly supports **CO6** by allowing us to "Illustrate the abstract algebraic systems" – we see how different concrete examples (like $\mathbb{Z}_4$ and $U_4$) can represent the same abstract structure.

---

## 5. When Groups Are *Not* Isomorphic

Just as important as knowing when groups *are* isomorphic is knowing when they *are not*. If you can find *any* property that one group has but the other doesn't, then they cannot be isomorphic. This is often easier than proving isomorphism!

**How to Show $G \not\cong H$:**
Find a group property that $G$ has, but $H$ does not, or vice versa. Examples of such properties include:

*   **Order of the group:** If $|G| \neq |H|$, they cannot be isomorphic.
*   **Number of elements of a certain order:** If $G$ has, say, three elements of order 2, but $H$ has only one element of order 2, then $G \not\cong H$.
*   **Is the group abelian?** If $G$ is abelian but $H$ is not, then $G \not\cong H$.
*   **Is the group cyclic?** If $G$ is cyclic but $H$ is not, then $G \not\cong H$.
*   **Does the group have a subgroup of a certain order?** (Lagrange's Theorem is useful here, though not strictly required for showing non-isomorphism directly).

**Example: $(\mathbb{Z}_2 \times \mathbb{Z}_2, +)$ vs $(\mathbb{Z}_4, +_4)$**
Let's consider two groups of order 4.
*   $G = \mathbb{Z}_2 \times \mathbb{Z}_2 = \{(0,0), (0,1), (1,0), (1,1)\}$ with component-wise addition modulo 2.
*   $H = \mathbb{Z}_4 = \{0, 1, 2, 3\}$ with addition modulo 4.

Are these groups isomorphic? Let's check properties.
1.  **Order of the groups:** Both have order 4. This doesn't help us distinguish them.
2.  **Is the group abelian?**
    *   For $G = \mathbb{Z}_2 \times \mathbb{Z}_2$: Addition is component-wise modulo 2. Since addition modulo 2 is commutative, $(a,b) + (c,d) = (a+_2c, b+_2d) = (c+_2a, d+_2b) = (c,d) + (a,b)$. So $G$ is abelian.
    *   For $H = \mathbb{Z}_4$: Addition modulo 4 is commutative. So $H$ is abelian.
    This doesn't help distinguish them.
3.  **Is the group cyclic?**
    *   For $G = \mathbb{Z}_2 \times \mathbb{Z}_2$: What is the order of its elements?
        *   Order of $(0,0)$: $(0,0) + (0,0) = (0,0)$. Order is 1.
        *   Order of $(0,1)$: $(0,1) + (0,1) = (0,0)$. Order is 2.
        *   Order of $(1,0)$: $(1,0) + (1,0) = (0,0)$. Order is 2.
        *   Order of $(1,1)$: $(1,1) + (1,1) = (0,0)$. Order is 2.
        The maximum order of any element in $G$ is 2. A cyclic group of order 4 must have a generator (an element of order 4). Since $G$ has no element of order 4, $G$ is **not** cyclic.
    *   For $H = \mathbb{Z}_4$: The element 1 is a generator. $1, 1+1=2, 1+1+1=3, 1+1+1+1=0 \pmod 4$. The element 1 has order 4. So $H$ **is** cyclic.

Since $G$ is not cyclic and $H$ is cyclic, they cannot be isomorphic. We found a property (being cyclic) that one group has and the other does not. Therefore, $G \not\cong H$.

**This is a classic example often used to illustrate non-isomorphism.** It's important to be able to spot these distinguishing properties.

---

## Summary and Takeaways

*   **Isomorphism** means two groups are structurally identical, even if their elements and operations are represented differently.
*   An **isomorphism** is a function that is both a **homomorphism** ($f(a * b) = f(a) \cdot f(b)$) and a **bijection** (one-to-one and onto).
*   If $G \cong H$, they share all fundamental group properties: order, commutativity, element orders, subgroups, etc.
*   To prove isomorphism, you must demonstrate all three conditions: homomorphism, injectivity, and surjectivity.
*   To prove **non-isomorphism**, find any property that one group has and the other lacks. This is often easier!

Mastering the concept of isomorphism is crucial for **CO6** as it deepens your understanding of abstract algebraic systems. It allows you to see the forest for the trees in group theory – recognizing that many different-looking groups are, in fact, just variations on a theme.

---

## Sample Questions and Answers

**Conceptual Question 1:**
What are the three conditions that a function must satisfy to be a group isomorphism? Explain why each condition is necessary.

**Answer:**
A function $f: G \to H$ is a group isomorphism if it satisfies:
1.  **Homomorphism:** $f(a * b) = f(a) \cdot f(b)$ for all $a, b \in G$.
    *   *Necessity:* This condition ensures that the group operation is preserved during the mapping. Without this, the structure of $G$ would not be faithfully represented in $H$.
2.  **Injectivity (One-to-one):** If $f(a) = f(b)$, then $a=b$ for all $a, b \in G$.
    *   *Necessity:* This ensures that distinct elements in $G$ map to distinct elements in $H$. If multiple elements in $G$ mapped to the same element in $H$, we would lose information about the distinctness of elements in $G$, and $H$ wouldn't be a true "structural copy."
3.  **Surjectivity (Onto):** For every element $h \in H$, there exists at least one element $g \in G$ such that $f(g) = h$.
    *   *Necessity:* This ensures that every element in $H$ is "accounted for" by the mapping from $G$. If $f$ were not surjective, $H$ would have elements that are not part of the structural correspondence, meaning $G$ and $H$ wouldn't be structurally identical.

**Conceptual Question 2:**
Prove that the group $(\mathbb{Z}_3, +_3)$ is isomorphic to the group $U_3 = \{1, \omega, \omega^2\}$ under multiplication, where $\omega = e^{2\pi i/3}$.

**Answer:**
Let $G = (\mathbb{Z}_3, +_3)$ and $H = (U_3, \cdot)$.
$G = \{0, 1, 2\}$ with addition modulo 3.
$H = \{1, \omega, \omega^2\}$ with complex multiplication.

We propose the function $f: \mathbb{Z}_3 \to U_3$ defined by $f(x) = \omega^x$.

1.  **Homomorphism:** We check $f(a +_3 b) = f(a) \cdot f(b)$.
    *   $f(a +_3 b) = \omega^{a +_3 b}$. Since $\omega^3 = 1$, this is $\omega^{a+b \pmod 3}$.
    *   $f(a) \cdot f(b) = \omega^a \cdot \omega^b = \omega^{a+b}$.
    *   Because the exponents are taken modulo 3 in $\mathbb{Z}_3$, and $\omega^3 = 1$ means the powers of $\omega$ cycle with period 3, we have $\omega^{a +_3 b} = \omega^{a+b \pmod 3} = \omega^{a+b} = f(a) \cdot f(b)$.
    So, $f$ is a homomorphism.

2.  **Injective:** We can check the kernel. The identity in $G$ is 0. $f(0) = \omega^0 = 1$. The identity in $H$ is 1. The kernel of $f$ is $\{x \in \mathbb{Z}_3 \mid f(x) = 1\} = \{x \in \mathbb{Z}_3 \mid \omega^x = 1\}$. Since $\omega^0=1, \omega^1=\omega, \omega^2=\omega^2$, only $x=0$ satisfies $\omega^x=1$. So, $\text{ker}(f) = \{0\}$, which is the identity element of $\mathbb{Z}_3$. Thus, $f$ is injective.
    (Alternatively, $f(0)=1, f(1)=\omega, f(2)=\omega^2$. All outputs are distinct, so it's injective).

3.  **Surjective:** The range of $f$ is $\{f(0), f(1), f(2)\} = \{\omega^0, \omega^1, \omega^2\} = \{1, \omega, \omega^2\} = U_3$. Since the range is equal to the codomain $U_3$, $f$ is surjective.

Since $f$ is a homomorphism, injective, and surjective, $f$ is an isomorphism, and $(\mathbb{Z}_3, +_3) \cong (U_3, \cdot)$.

**Exam-Oriented Question 3:**
Determine whether the group $(\mathbb{Z}_2 \times \mathbb{Z}_2, +)$ is isomorphic to the group $(\mathbb{Z}_4, +_4)$. Justify your answer.

**Answer:**
Let $G = (\mathbb{Z}_2 \times \mathbb{Z}_2, +)$ and $H = (\mathbb{Z}_4, +_4)$.
Both groups have order 4.
Let's examine the orders of elements in each group:

*   **For $G = \mathbb{Z}_2 \times \mathbb{Z}_2$:**
    *   $(0,0)$: $(0,0) + (0,0) = (0,0)$. Order is 1.
    *   $(0,1)$: $(0,1) + (0,1) = (0,0)$. Order is 2.
    *   $(1,0)$: $(1,0) + (1,0) = (0,0)$. Order is 2.
    *   $(1,1)$: $(1,1) + (1,1) = (0,0)$. Order is 2.
    The maximum order of an element in $G$ is 2.

*   **For $H = \mathbb{Z}_4$:**
    *   0: Order 1.
    *   1: $1, 1+1=2, 1+1+1=3, 1+1+1+1=0 \pmod 4$. Order is 4.
    *   2: $2, 2+2=4 \equiv 0 \pmod 4$. Order is 2.
    *   3: $3, 3+3=6 \equiv 2, 3+3+3=9 \equiv 1, 3+3+3+3=12 \equiv 0 \pmod 4$. Order is 4.
    The group $H$ has elements of order 4 (namely 1 and 3).

**Justification:**
For two groups to be isomorphic, they must have the same number of elements of each possible order.
Group $G$ has no element of order 4, while group $H$ has elements of order 4.
Therefore, $G$ and $H$ cannot be isomorphic.

---
