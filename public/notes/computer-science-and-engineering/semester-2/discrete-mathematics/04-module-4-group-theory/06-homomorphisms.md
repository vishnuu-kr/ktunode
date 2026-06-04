---
title: "Homomorphisms"
subject: "DISCRETE MATHEMATICS"
module: "Module 4: Group theory"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fb4"
status: "completed"
scrapedAt: "2026-05-20T16:33:15.311Z"
---
Absolutely! Let's dive into the fascinating world of Homomorphisms in Group Theory. Think of this as our guided tour through Module 4, building upon the foundational group structures we've already explored.

## Module 4: Group Theory - Homomorphisms

Welcome back, everyone! We've spent time understanding what groups are, what makes them special – the closure, associativity, identity, and inverses. We've also looked at different types of groups, like abelian groups, cyclic groups, and subgroups. Now, we're going to explore a crucial concept that connects different groups: **Homomorphisms**. This is where the abstract algebraic structures really start talking to each other, and it's a cornerstone for understanding how one group might "map" onto another.

This topic directly ties into our **Course Outcome CO6: Illustrate the abstract algebraic systems - Semigroups, Monoids, Groups, Homomorphism and Isomorphism of Monoids and Groups.** Specifically, we're focusing on understanding what a homomorphism is and how it relates to groups.

### What's the Big Idea Behind Homomorphisms?

Imagine you have two different machines, each performing a specific set of operations. A homomorphism is like a translator or a bridge between these machines. It's a function that takes elements from one group, applies some transformation, and lands you in another group, all while respecting the operations of both groups.

Think about it this way: if Group A has an operation * and Group B has an operation $\circ$, a homomorphism $\phi: A \to B$ is a function that says, "If I combine two elements in Group A using * and then map the result to Group B, it's the same as mapping those elements to Group B individually and then combining them using $\circ$." This is the core property, and it's incredibly powerful.

**Let's get a bit more formal, as we often do in mathematics.**

### Definition of a Group Homomorphism

A function $\phi$ from a group $(G, *)$ to a group $(H, \circ)$ is called a **group homomorphism** if, for all elements $a, b$ in $G$, the following property holds:

$\phi(a * b) = \phi(a) \circ \phi(b)$

This property is often called the **homomorphism property** or the **compatibility property**. It's the golden rule of homomorphisms: the operation in the domain group must be preserved under the mapping to the codomain group.

**Remember this:** This simple equation is the heart of it all. Any function that satisfies this is a homomorphism. If it doesn't, it's not.

### Why Are Homomorphisms Important?

Homomorphisms are fundamental because they allow us to:

*   **Study the structure of groups:** By mapping elements from one group to another, we can understand how the internal structure of the first group is reflected in the second. It’s like studying a complex object by projecting its shadow onto a simpler surface.
*   **Relate different algebraic systems:** Many seemingly different mathematical structures can be linked through homomorphisms. This allows us to transfer knowledge and techniques from one area to another.
*   **Build more complex structures:** Kernels and images of homomorphisms are themselves groups, which are vital concepts we'll touch upon.

This directly relates to **CO6**, as understanding homomorphisms is key to classifying and relating different algebraic systems.

### Examples to Make it Click!

Let's move beyond abstract notation and see how this works in practice.

**Example 1: The "Modulo" Trick**

Consider the group of integers under addition, $(\mathbb{Z}, +)$. Now, let's think about the group of integers modulo 5 under addition, $(\mathbb{Z}_5, +_5)$.

Let's define a function $\phi: \mathbb{Z} \to \mathbb{Z}_5$ by $\phi(n) = n \pmod{5}$.

Is this a homomorphism? We need to check if $\phi(a + b) = \phi(a) +_5 \phi(b)$ for all $a, b \in \mathbb{Z}$.

Let's try some values:
Take $a = 3$ and $b = 4$.
In $\mathbb{Z}$, $a + b = 3 + 4 = 7$.
So, $\phi(a + b) = \phi(7) = 7 \pmod{5} = 2$.

Now, let's do it the other way:
$\phi(a) = \phi(3) = 3 \pmod{5} = 3$.
$\phi(b) = \phi(4) = 4 \pmod{5} = 4$.
$\phi(a) +_5 \phi(b) = 3 +_5 4 = (3 + 4) \pmod{5} = 7 \pmod{5} = 2$.

See? $\phi(a + b) = 2$ and $\phi(a) +_5 \phi(b) = 2$. They match!

This property, $n \pmod{m} = (a \pmod{m} + b \pmod{m}) \pmod{m}$, is a fundamental property of modular arithmetic. So, $\phi(n) = n \pmod{5}$ is indeed a group homomorphism from $(\mathbb{Z}, +)$ to $(\mathbb{Z}_5, +_5)$.

This is a great example of how operations in one group can be "preserved" by mapping to another group, especially when dealing with familiar structures like integers and their remainders.

**Example 2: Powers of a Number**

Consider the group of positive real numbers under multiplication, $(\mathbb{R}^+, \times)$.
Let's consider another group, also of positive real numbers under multiplication, $(\mathbb{R}^+, \times)$. (Yes, we can map a group to itself!).

Define $\phi: \mathbb{R}^+ \to \mathbb{R}^+$ by $\phi(x) = x^2$.

Is this a homomorphism? We need to check if $\phi(a \times b) = \phi(a) \times \phi(b)$ for all $a, b \in \mathbb{R}^+$.

$\phi(a \times b) = (a \times b)^2 = a^2 \times b^2$.
On the other hand, $\phi(a) \times \phi(b) = a^2 \times b^2$.

They are equal! So, $\phi(x) = x^2$ is a group homomorphism from $(\mathbb{R}^+, \times)$ to itself.

This example illustrates how a simple algebraic manipulation (squaring) can act as a structure-preserving map between groups, even when the groups are identical in terms of their underlying set and operation.

**Example 3: Something that ISN'T a Homomorphism**

Let's take our group of integers under addition, $(\mathbb{Z}, +)$, again.
Define a function $\psi: \mathbb{Z} \to \mathbb{Z}$ by $\psi(n) = n + 1$.

Let's check the homomorphism property: $\psi(a + b) = \psi(a) + \psi(b)$.

$\psi(a + b) = (a + b) + 1 = a + b + 1$.
$\psi(a) + \psi(b) = (a + 1) + (b + 1) = a + b + 2$.

Here, $a + b + 1 \neq a + b + 2$. So, $\psi(n) = n + 1$ is *not* a group homomorphism. This function is shifting elements, not preserving the additive structure.

### Properties of Group Homomorphisms

When a function is a homomorphism, it inherits some important structural properties. These are often tested in exams, so pay close attention!

1.  **The image of the identity element is the identity element:**
    If $\phi: (G, *) \to (H, \circ)$ is a homomorphism, then $\phi(e_G) = e_H$, where $e_G$ is the identity in $G$ and $e_H$ is the identity in $H$.

    *Proof sketch:* We know that for any $a \in G$, $a * e_G = a$. Applying $\phi$ to both sides, we get $\phi(a * e_G) = \phi(a)$. Using the homomorphism property, $\phi(a) \circ \phi(e_G) = \phi(a)$. Since $\phi(a)$ is an element in $H$, and $e_H$ is the identity in $H$, we know that for any $x \in H$, $x \circ e_H = x$. So, $\phi(a) \circ \phi(e_G) = \phi(a) \circ e_H$. By the cancellation property in $H$, we can conclude $\phi(e_G) = e_H$.

    **Remember this:** The identity element must map to the identity element. This is a quick check for many potential homomorphisms.

2.  **The image of an inverse is the inverse of the image:**
    For any $a \in G$, $\phi(a^{-1}) = (\phi(a))^{-1}$.

    *Proof sketch:* We know $a * a^{-1} = e_G$. Applying $\phi$, we get $\phi(a * a^{-1}) = \phi(e_G)$. Using the homomorphism property and the previous property, we have $\phi(a) \circ \phi(a^{-1}) = e_H$. Also, we know that in $H$, $(\phi(a))^{-1}$ is the unique element such that $\phi(a) \circ (\phi(a))^{-1} = e_H$. Therefore, by uniqueness of inverses, $\phi(a^{-1}) = (\phi(a))^{-1}$.

    **Think about it:** This means the "inverse relationship" is also preserved. If you go from $a$ to $\phi(a)$, then going from $a^{-1}$ to $\phi(a^{-1})$ is the same as going from $\phi(a)$ to its inverse in the second group.

3.  **The image of any power of an element is the power of the image:**
    For any integer $n$ and any $a \in G$, $\phi(a^n) = (\phi(a))^n$.

    This is a direct consequence of the homomorphism property and can be proven by induction. For $n > 0$, $\phi(a^n) = \phi(a * a * \dots * a) = \phi(a) \circ \phi(a) \circ \dots \circ \phi(a) = (\phi(a))^n$. For $n=0$, $\phi(a^0) = \phi(e_G) = e_H = (\phi(a))^0$. For $n < 0$, say $n = -m$ where $m > 0$, $\phi(a^n) = \phi(a^{-m}) = \phi((a^m)^{-1}) = (\phi(a^m))^{-1} = ((\phi(a))^m)^{-1} = (\phi(a))^{-m} = (\phi(a))^n$.

    **This is super useful!** If you know the mapping for a generator of a cyclic group, you automatically know the mapping for all its elements.

### The Kernel of a Homomorphism

The **kernel** of a homomorphism is a very special set that tells us a lot about the mapping. It's the set of all elements in the domain group that get mapped to the identity element of the codomain group.

**Definition: Kernel**
Given a group homomorphism $\phi: (G, *) \to (H, \circ)$, the **kernel** of $\phi$, denoted as $\text{ker}(\phi)$ or $\ker \phi$, is the set of elements in $G$ that map to the identity element in $H$:
$\text{ker}(\phi) = \{a \in G \mid \phi(a) = e_H\}$

**Example Revisited: $\phi(n) = n \pmod{5}$ from $(\mathbb{Z}, +)$ to $(\mathbb{Z}_5, +_5)$**
What is $\text{ker}(\phi)$? We are looking for integers $n$ such that $\phi(n) = 0$ in $\mathbb{Z}_5$.
$\phi(n) = n \pmod{5} = 0$.
This means $n$ must be a multiple of 5.
So, $\text{ker}(\phi) = \{ \dots, -10, -5, 0, 5, 10, \dots \} = \{5k \mid k \in \mathbb{Z}\}$.
This is the set of all multiples of 5, which is itself a group under addition, isomorphic to $(\mathbb{Z}, +)$.

**Key Property of the Kernel:**
The kernel of a group homomorphism is always a **subgroup** of the domain group. In fact, it's a special type of subgroup called a **normal subgroup**, which is a fundamental concept in advanced group theory. For our current purposes, knowing it's a subgroup is crucial.

**How to prove the kernel is a subgroup?**
Let $a, b \in \text{ker}(\phi)$. This means $\phi(a) = e_H$ and $\phi(b) = e_H$.
1.  **Closure:** We need to show $a * b \in \text{ker}(\phi)$.
    $\phi(a * b) = \phi(a) \circ \phi(b) = e_H \circ e_H = e_H$.
    So, $a * b \in \text{ker}(\phi)$.
2.  **Identity:** We know $\phi(e_G) = e_H$, so $e_G \in \text{ker}(\phi)$.
3.  **Inverses:** We need to show $a^{-1} \in \text{ker}(\phi)$.
    $\phi(a^{-1}) = (\phi(a))^{-1} = (e_H)^{-1} = e_H$.
    So, $a^{-1} \in \text{ker}(\phi)$.
Since all three conditions are met, $\text{ker}(\phi)$ is a subgroup of $G$.

**Why is the kernel important for understanding the homomorphism?**
The kernel tells us which elements are "collapsed" to the identity. If the kernel is just the identity element ($ \text{ker}(\phi) = \{e_G\} $), then the homomorphism is called **faithful**. This means no non-identity element is mapped to the identity.

### The Image of a Homomorphism

The **image** of a homomorphism is the set of all elements in the codomain group that are actually "hit" by the mapping.

**Definition: Image**
Given a group homomorphism $\phi: (G, *) \to (H, \circ)$, the **image** of $\phi$, denoted as $\text{Im}(\phi)$ or $\text{Im} \phi$, is the set of all elements in $H$ that are the image of some element in $G$:
$\text{Im}(\phi) = \{\phi(a) \mid a \in G\}$

**Example Revisited: $\phi(n) = n \pmod{5}$ from $(\mathbb{Z}, +)$ to $(\mathbb{Z}_5, +_5)$**
What is $\text{Im}(\phi)$?
The possible values of $n \pmod{5}$ are 0, 1, 2, 3, and 4.
So, $\text{Im}(\phi) = \{0, 1, 2, 3, 4\} = \mathbb{Z}_5$.
In this case, the image is the entire codomain group.

**Example: $\phi(x) = x^2$ from $(\mathbb{R}^+, \times)$ to $(\mathbb{R}^+, \times)$**
What is $\text{Im}(\phi)$?
The output $x^2$ for any $x \in \mathbb{R}^+$ will always be a positive real number.
However, can we get *any* positive real number as an output? Yes, for any $y \in \mathbb{R}^+$, we can choose $x = \sqrt{y}$, and then $\phi(x) = (\sqrt{y})^2 = y$.
So, $\text{Im}(\phi) = \mathbb{R}^+$.

**Example: $\psi(n) = 2n$ from $(\mathbb{Z}, +)$ to $(\mathbb{Z}, +)$**
This is a homomorphism. What is the image?
$\text{Im}(\psi) = \{\psi(n) \mid n \in \mathbb{Z}\} = \{2n \mid n \in \mathbb{Z}\} = \{\dots, -4, -2, 0, 2, 4, \dots\}$.
This is the set of all even integers. The image is a proper subgroup of $\mathbb{Z}$.

**Key Property of the Image:**
The image of a group homomorphism is always a **subgroup** of the codomain group.

**How to prove the image is a subgroup?**
Let $y_1, y_2 \in \text{Im}(\phi)$. This means $y_1 = \phi(a)$ and $y_2 = \phi(b)$ for some $a, b \in G$.
1.  **Closure:** We need to show $y_1 \circ y_2 \in \text{Im}(\phi)$.
    $y_1 \circ y_2 = \phi(a) \circ \phi(b) = \phi(a * b)$.
    Since $a * b \in G$, $\phi(a * b)$ is an element in the image. So, $y_1 \circ y_2 \in \text{Im}(\phi)$.
2.  **Identity:** We know $\phi(e_G) = e_H$, and since $e_G \in G$, $e_H \in \text{Im}(\phi)$.
3.  **Inverses:** We need to show $y_1^{-1} \in \text{Im}(\phi)$.
    $y_1^{-1} = (\phi(a))^{-1} = \phi(a^{-1})$.
    Since $a^{-1} \in G$, $\phi(a^{-1})$ is an element in the image. So, $y_1^{-1} \in \text{Im}(\phi)$.
Thus, $\text{Im}(\phi)$ is a subgroup of $H$.

The relationship between the kernel and the image is beautifully captured by the **First Isomorphism Theorem for Groups**, which states that $G/\text{ker}(\phi) \cong \text{Im}(\phi)$. This means the group formed by "factoring out" the kernel is isomorphic to the image. This is a very powerful result that connects these concepts, but it's often covered in more depth in later modules or courses.

### Homomorphisms and Isomorphisms

We’ve talked about connecting groups. What if the connection is so perfect that the two groups are essentially identical in structure? That’s where **isomorphisms** come in.

An **isomorphism** is a special type of homomorphism that is also a bijection (both one-to-one and onto).

**Definition: Group Isomorphism**
A group homomorphism $\phi: (G, *) \to (H, \circ)$ is called a **group isomorphism** if:
1.  $\phi$ is injective (one-to-one): If $\phi(a) = \phi(b)$, then $a = b$. (Equivalently, $\text{ker}(\phi) = \{e_G\}$).
2.  $\phi$ is surjective (onto): For every element $h \in H$, there exists an element $g \in G$ such that $\phi(g) = h$. (Equivalently, $\text{Im}(\phi) = H$).

If there exists an isomorphism between two groups $G$ and $H$, we say that $G$ and $H$ are **isomorphic**, denoted $G \cong H$. This means they are structurally the same, just with different labels for their elements and operations.

**Revisiting Examples:**
*   $\phi(n) = n \pmod{5}$ from $(\mathbb{Z}, +)$ to $(\mathbb{Z}_5, +_5)$: This is *not* an isomorphism because it's not injective ($\phi(0) = \phi(5) = 0$). The kernel is $\{5k \mid k \in \mathbb{Z}\}$, which is not just $\{0\}$.
*   $\phi(x) = x^2$ from $(\mathbb{R}^+, \times)$ to $(\mathbb{R}^+, \times)$: This is an isomorphism. It's a homomorphism, it's injective (if $x^2 = y^2$ for positive $x, y$, then $x=y$), and it's surjective (as shown before). So $(\mathbb{R}^+, \times) \cong (\mathbb{R}^+, \times)$.
*   $\psi(n) = 2n$ from $(\mathbb{Z}, +)$ to $(\mathbb{Z}, +)$: This is a homomorphism but not an isomorphism. It's injective but not surjective because its image is only the even numbers.

Isomorphisms are a special case of homomorphisms, fulfilling **CO6** by showing how groups can be equivalent.

### Practical Considerations and Exam Tips

*   **Always check the definition:** When asked if a function is a homomorphism, the first step is to verify $\phi(a * b) = \phi(a) \circ \phi(b)$.
*   **Identify the operations:** Be very clear about the operation in the domain group and the operation in the codomain group. This is where many mistakes happen!
*   **Test with multiple examples:** Don't just check one or two pairs of elements for the homomorphism property. Pick diverse examples, including the identity and inverses, if possible.
*   **Kernel and Image:** If a question asks for the kernel or image, remember their definitions and how to prove they are subgroups. Calculating the kernel is often a good way to check for injectivity.
*   **Types of Homomorphisms:** Understand the difference between a general homomorphism, an injective homomorphism (where $\text{ker}(\phi) = \{e_G\}$), a surjective homomorphism (where $\text{Im}(\phi) = H$), and an isomorphism (both injective and surjective).

This understanding directly addresses **CO6** by illustrating the fundamental abstract algebraic systems and their relationships.

### Summary of Key Takeaways

*   A **homomorphism** is a structure-preserving map between two groups.
*   The core property is $\phi(a * b) = \phi(a) \circ \phi(b)$.
*   Homomorphisms preserve identity elements: $\phi(e_G) = e_H$.
*   Homomorphisms preserve inverses: $\phi(a^{-1}) = (\phi(a))^{-1}$.
*   Homomorphisms preserve powers: $\phi(a^n) = (\phi(a))^n$.
*   The **kernel** ($\text{ker}(\phi)$) is the set of elements mapping to the identity and is always a subgroup of the domain.
*   The **image** ($\text{Im}(\phi)$) is the set of all outputs and is always a subgroup of the codomain.
*   An **isomorphism** is a bijective homomorphism, indicating structural equivalence between groups.

## Sample Questions and Answers

**Question 1 (Conceptual):**
Let $\phi: (\mathbb{Z}, +) \to (\mathbb{Z}_6, +_6)$ be defined by $\phi(n) = 2n \pmod{6}$. Is $\phi$ a group homomorphism? Justify your answer.

**Answer:**
To check if $\phi$ is a homomorphism, we need to verify if $\phi(a + b) = \phi(a) +_6 \phi(b)$ for all $a, b \in \mathbb{Z}$.

Let's test with $a=2$ and $b=3$.
In the domain $(\mathbb{Z}, +)$: $a + b = 2 + 3 = 5$.
$\phi(a + b) = \phi(5) = 2 \times 5 \pmod{6} = 10 \pmod{6} = 4$.

Now, let's compute the right side:
$\phi(a) = \phi(2) = 2 \times 2 \pmod{6} = 4 \pmod{6} = 4$.
$\phi(b) = \phi(3) = 2 \times 3 \pmod{6} = 6 \pmod{6} = 0$.
$\phi(a) +_6 \phi(b) = 4 +_6 0 = 4$.

In this case, $\phi(a + b) = 4$ and $\phi(a) +_6 \phi(b) = 4$. They match.
However, one example is not enough. Let's try $a=3$ and $b=5$.
$a + b = 3 + 5 = 8$.
$\phi(a + b) = \phi(8) = 2 \times 8 \pmod{6} = 16 \pmod{6} = 4$.

$\phi(a) = \phi(3) = 2 \times 3 \pmod{6} = 6 \pmod{6} = 0$.
$\phi(b) = \phi(5) = 2 \times 5 \pmod{6} = 10 \pmod{6} = 4$.
$\phi(a) +_6 \phi(b) = 0 +_6 4 = 4$.

It still matches. Let's try $a=4$ and $b=5$.
$a+b = 4+5 = 9$.
$\phi(a+b) = \phi(9) = 2 \times 9 \pmod{6} = 18 \pmod{6} = 0$.

$\phi(a) = \phi(4) = 2 \times 4 \pmod{6} = 8 \pmod{6} = 2$.
$\phi(b) = \phi(5) = 2 \times 5 \pmod{6} = 10 \pmod{6} = 4$.
$\phi(a) +_6 \phi(b) = 2 +_6 4 = 6 \pmod{6} = 0$.

It seems to hold. Let's try to prove it generally:
$\phi(a + b) = 2(a + b) \pmod{6} = (2a + 2b) \pmod{6}$.
$\phi(a) +_6 \phi(b) = (2a \pmod{6}) +_6 (2b \pmod{6}) = (2a + 2b) \pmod{6}$.
Since $(2a + 2b) \pmod{6} = (2a + 2b) \pmod{6}$, the property holds for all $a, b \in \mathbb{Z}$.

**Yes, $\phi$ is a group homomorphism.**

**Question 2 (Exam-Oriented):**
Let $\phi: (\mathbb{Z}, +) \to (\mathbb{Z}_6, +_6)$ be defined by $\phi(n) = 2n \pmod{6}$.
a) Find the kernel of $\phi$.
b) Find the image of $\phi$.
c) Is $\phi$ injective? Is $\phi$ surjective?

**Answer:**
a) **Kernel:** We need to find all $n \in \mathbb{Z}$ such that $\phi(n) = 0$ in $\mathbb{Z}_6$.
$\phi(n) = 2n \pmod{6} = 0$.
This occurs when $2n$ is a multiple of 6.
If $n=0$, $2(0)=0$. $\phi(0)=0$.
If $n=1$, $2(1)=2$. $\phi(1)=2$.
If $n=2$, $2(2)=4$. $\phi(2)=4$.
If $n=3$, $2(3)=6$. $\phi(3)=0$.
If $n=4$, $2(4)=8$. $\phi(4)=2$.
If $n=5$, $2(5)=10$. $\phi(5)=4$.
If $n=6$, $2(6)=12$. $\phi(6)=0$.
So, $n$ must be a multiple of 3.
$\text{ker}(\phi) = \{ n \in \mathbb{Z} \mid n \text{ is a multiple of } 3 \} = \{3k \mid k \in \mathbb{Z}\}$.

b) **Image:** The possible values of $\phi(n) = 2n \pmod{6}$ are the elements in $\mathbb{Z}_6$ that are even.
$\phi(0)=0$, $\phi(1)=2$, $\phi(2)=4$, $\phi(3)=0$, $\phi(4)=2$, $\phi(5)=4$.
The set of outputs is $\{0, 2, 4\}$.
$\text{Im}(\phi) = \{0, 2, 4\}$.

c) **Injectivity:** A homomorphism is injective if and only if its kernel is just the identity element.
Since $\text{ker}(\phi) = \{3k \mid k \in \mathbb{Z}\}$ and this set contains more than just $0$ (e.g., $3$), $\phi$ is **not injective**.

**Surjectivity:** A homomorphism is surjective if and only if its image is the entire codomain.
The codomain is $\mathbb{Z}_6 = \{0, 1, 2, 3, 4, 5\}$.
The image is $\text{Im}(\phi) = \{0, 2, 4\}$.
Since the image is not equal to the codomain (e.g., $1 \notin \text{Im}(\phi)$), $\phi$ is **not surjective**.

**Question 3 (Deeper Understanding):**
Let $\phi: G \to H$ be a group homomorphism. Prove that $\phi(a^{-1}) = (\phi(a))^{-1}$ for all $a \in G$.

**Answer:**
We are given that $\phi$ is a group homomorphism, which means $\phi(xy) = \phi(x)\phi(y)$ for all $x, y \in G$.
We also know that in any group $G$, for any element $a$, $a a^{-1} = e_G$, where $e_G$ is the identity element in $G$. Similarly, in group $H$, for any element $b$, $b b^{-1} = e_H$, where $e_H$ is the identity element in $H$.

Consider the element $a \in G$. We know $a a^{-1} = e_G$.
Apply the homomorphism $\phi$ to both sides of this equation:
$\phi(a a^{-1}) = \phi(e_G)$

Using the homomorphism property on the left side:
$\phi(a) \phi(a^{-1}) = \phi(e_G)$

Now, we need to establish that $\phi(e_G) = e_H$.
For any $x \in G$, $x e_G = x$. Applying $\phi$, we get $\phi(x e_G) = \phi(x)$.
Using the homomorphism property: $\phi(x) \phi(e_G) = \phi(x)$.
Since $\phi(x)$ is an element in $H$, and $e_H$ is the identity in $H$, we have $\phi(x) e_H = \phi(x)$.
So, $\phi(x) \phi(e_G) = \phi(x) e_H$.
By the cancellation property in $H$, we can conclude that $\phi(e_G) = e_H$.

Substituting this back into our equation:
$\phi(a) \phi(a^{-1}) = e_H$

Now, recall that in the group $H$, $(\phi(a))^{-1}$ is the unique element such that $\phi(a) (\phi(a))^{-1} = e_H$.
Comparing our equation $\phi(a) \phi(a^{-1}) = e_H$ with the definition of the inverse in $H$, we see that $\phi(a^{-1})$ must be equal to $(\phi(a))^{-1}$.

Therefore, $\phi(a^{-1}) = (\phi(a))^{-1}$ for all $a \in G$.

This concludes our exploration of homomorphisms. It's a rich topic with far-reaching implications in abstract algebra and beyond! Keep practicing these concepts, and you'll find them incredibly useful as you delve deeper into mathematics.
