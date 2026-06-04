---
title: "Semigroups"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 3: Relations, Functions and Algebraic Structures: Sets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b6010"
status: "completed"
scrapedAt: "2026-05-20T16:32:30.129Z"
---
# Module 3: Relations, Functions and Algebraic Structures: Sets

## Topic: Semigroups

Welcome, everyone! Today, we're diving into the fascinating world of **Semigroups**. This is a fundamental building block in understanding more complex **algebraic structures** like monoids and groups, which we'll touch upon as we progress. So, grab your thinking caps, and let's unravel what a semigroup is all about.

### 1. The Essence of a Semigroup: A Foundation for Structure

Before we jump into the formal definition, let's think about what makes things work together in a structured way. Imagine playing with building blocks. You have individual blocks, but it's how you connect them (say, by stacking or joining them) that creates something more. In mathematics, we often look at a **set** of elements and an **operation** that combines them. This combination isn't always random; it often follows specific rules.

This module, as you know, is all about relations, functions, and algebraic structures. Semigroups fall squarely into the latter category. They are one of the simplest, yet most powerful, algebraic structures. They help us understand the properties of operations on sets.

#### **CO3 & CO4 Alignment:**
Our journey with semigroups directly addresses **CO3** by describing the concepts of sets and algebraic systems, and **CO4** by explaining algebraic structures like groups. Understanding semigroups is crucial before we can fully grasp the properties of groups.

### 2. Defining a Semigroup: The Two Pillars

So, what exactly *is* a semigroup? It's quite simple, really. Think of it as a pair: a **set** and a **binary operation** defined on that set. A binary operation is just a way to take any two elements from the set and combine them to produce another element *within the same set*.

Let's break this down with our two essential components:

*   **A Set (S):** This is just a collection of distinct objects. It could be numbers, letters, matrices, or even more abstract things. For our semigroup to work, this set needs to be non-empty.
*   **A Binary Operation (*):** This is a rule that takes any two elements, say $a$ and $b$, from the set $S$, and combines them to produce a unique element, denoted as $a * b$, which must also be in $S$. This "must be in $S$" part is super important – it's called **closure**.

Now, for this pair $(S, *)$ to be called a **semigroup**, it needs to satisfy one critical property:

**The Associative Property:** This is the heart of a semigroup. It states that for any three elements $a$, $b$, and $c$ in our set $S$, the way we group them when performing the operation doesn't matter. That is:

$(a * b) * c = a * (b * c)$

Think of it like this: Imagine you're mixing paint. You have three colors: red (R), yellow (Y), and blue (B). If you mix red and yellow first to get orange (O), and then mix orange with blue, you get a certain shade of brown. If you instead mix yellow and blue first to get green (G), and then mix red with green, you should ideally get the *same* shade of brown. If this holds true, the mixing process (our operation) is associative.

**Let's summarize the definition:**
A **semigroup** is a non-empty set $S$ together with a binary operation $*$ on $S$ such that $*$ is **associative**.

$$(S, *) \text{ is a semigroup if:}$$
1.  $S$ is non-empty.
2.  $*$ is a binary operation on $S$ (i.e., for all $a, b \in S$, $a * b \in S$ – closure).
3.  $*$ is associative (i.e., for all $a, b, c \in S$, $(a * b) * c = a * (b * c)$).

**Remember this:** Closure and associativity are the two golden rules for a semigroup.

#### **CO3 & CO4 Alignment:**
This definition directly addresses **CO3** by introducing the concept of a set and an algebraic system (the semigroup). It also lays the groundwork for **CO4** by explaining the core properties of algebraic structures.

### 3. Examples to Illuminate: Making Semigroups Real

Definitions are great, but let's see how this plays out in practice.

**Example 1: Positive Integers and Addition**

Let $S = \mathbb{Z}^+ = \{1, 2, 3, \dots\}$ be the set of positive integers.
Let the binary operation be standard addition $(+)$.

*   **Is $S$ non-empty?** Yes, it contains $1, 2, 3,$ and so on.
*   **Is addition a binary operation on $S$?** If we take any two positive integers, say $a=3$ and $b=5$, their sum $a+b = 3+5 = 8$. Is $8$ a positive integer? Yes. In fact, the sum of any two positive integers is always a positive integer. So, addition is closed on $\mathbb{Z}^+$.
*   **Is addition associative for positive integers?** Yes, we all know from basic arithmetic that for any positive integers $a, b, c$, $(a+b)+c = a+(b+c)$. For instance, $(2+3)+4 = 5+4 = 9$, and $2+(3+4) = 2+7 = 9$. They are the same.

Since all conditions are met, $(\mathbb{Z}^+, +)$ is a **semigroup**. This is a very common and intuitive example.

**Example 2: Strings and Concatenation**

Let's move to something a bit different. Consider the set of all finite strings of letters from the English alphabet. Let $S$ be this set. Our binary operation $*$ is **string concatenation** (joining strings together).

*   **Is $S$ non-empty?** Yes, it contains strings like "hello", "world", "a", "", etc. (the empty string is often included, and we'll see its importance later, but for now, let's assume it's there).
*   **Is concatenation a binary operation on $S$?** If we take two strings, say $s_1 = \text{"comp"}$ and $s_2 = \text{"uter"}$, their concatenation $s_1 * s_2$ (or $s_1s_2$) is $\text{"computer"}$. Is "computer" a finite string of letters? Yes. Concatenating any two strings from our set will always result in another string within that same set. So, it's closed.
*   **Is concatenation associative?** Let $s_1 = \text{"dis"}$, $s_2 = \text{"crete"}$, and $s_3 = \text{"math"}$.
    *   $(s_1 * s_2) * s_3 = (\text{"dis"} * \text{"crete"}) * \text{"math"} = \text{"discrete"} * \text{"math"} = \text{"discretemath"}$.
    *   $s_1 * (s_2 * s_3) = \text{"dis"} * (\text{"crete"} * \text{"math"}) = \text{"dis"} * \text{"createmath"} = \text{"discreatemath"}$.
    They are indeed equal! Concatenation is associative.

So, the set of finite strings with concatenation forms a **semigroup**. This is a really important example in computer science.

**Example 3: Integers and Multiplication**

Let $S = \mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ be the set of all integers.
Let the binary operation be standard multiplication $(\cdot)$.

*   **Is $S$ non-empty?** Yes.
*   **Is multiplication a binary operation on $S$?** The product of any two integers is always an integer. So, it's closed. For example, $(-3) \cdot 4 = -12$, and $-12 \in \mathbb{Z}$.
*   **Is multiplication associative for integers?** Yes, standard multiplication is associative. For any integers $a, b, c$, $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.

Therefore, $(\mathbb{Z}, \cdot)$ is also a **semigroup**.

**Example 4: A Case That ISN'T a Semigroup (Illustrating the Rules)**

Let $S = \{1, 2, 3\}$ and the operation $*$ be defined as $a * b = \max(a, b)$.

*   **Is $S$ non-empty?** Yes.
*   **Is $*$ a binary operation on $S$?** Let's check:
    *   $1 * 2 = \max(1, 2) = 2$. Is $2 \in S$? Yes.
    *   $2 * 3 = \max(2, 3) = 3$. Is $3 \in S$? Yes.
    *   $3 * 1 = \max(3, 1) = 3$. Is $3 \in S$? Yes.
    The maximum of any two elements in $S$ is always an element in $S$. So, closure holds.

*   **Is $*$ associative?** Let's test $a=1, b=2, c=3$.
    *   $(a * b) * c = (1 * 2) * 3 = \max(1, 2) * 3 = 2 * 3 = \max(2, 3) = 3$.
    *   $a * (b * c) = 1 * (2 * 3) = 1 * \max(2, 3) = 1 * 3 = \max(1, 3) = 3$.
    It seems associative for this case. Let's try another combination: $a=3, b=1, c=2$.
    *   $(a * b) * c = (3 * 1) * 2 = \max(3, 1) * 2 = 3 * 2 = \max(3, 2) = 3$.
    *   $a * (b * c) = 3 * (1 * 2) = 3 * \max(1, 2) = 3 * 2 = \max(3, 2) = 3$.
    This operation, finding the maximum, *is* associative for any set of numbers. So, $(S, \max)$ is a semigroup.

**Wait, let's construct a clearer non-semigroup example:**
Let $S = \{0, 1\}$ and the operation $*$ be defined as $a * b = a+b \pmod{2}$.

*   **Is $S$ non-empty?** Yes.
*   **Is $*$ a binary operation on $S$?**
    *   $0*0 = 0+0 \pmod{2} = 0$. $0 \in S$.
    *   $0*1 = 0+1 \pmod{2} = 1$. $1 \in S$.
    *   $1*0 = 1+0 \pmod{2} = 1$. $1 \in S$.
    *   $1*1 = 1+1 \pmod{2} = 2 \pmod{2} = 0$. $0 \in S$.
    Yes, closure holds.

*   **Is $*$ associative?** Let's test $a=0, b=1, c=1$.
    *   $(a * b) * c = (0 * 1) * 1 = 1 * 1 = 0$.
    *   $a * (b * c) = 0 * (1 * 1) = 0 * 0 = 0$.
    Associativity holds here too.

Let's try to find a non-associative binary operation. The definition of a semigroup is *very* robust. Many common operations on common sets *are* associative. The key is to violate associativity.

Consider matrices. The set of $n \times n$ matrices with matrix multiplication *is* associative. What about something like integer division? That's not even a binary operation on integers because $3 \div 2$ is not an integer.

Let's stick to simpler sets.
Consider $S = \{1, 2, 3\}$ and the operation $*$ be $a * b = 1$ for all $a, b \in S$.
*   **Is $S$ non-empty?** Yes.
*   **Is $*$ a binary operation on $S$?** For any $a, b \in S$, $a*b = 1$, and $1 \in S$. Yes, closure holds.
*   **Is $*$ associative?** Let $a=1, b=2, c=3$.
    *   $(a * b) * c = (1 * 2) * 3 = 1 * 3 = 1$.
    *   $a * (b * c) = 1 * (2 * 3) = 1 * 1 = 1$.
    Still associative! This constant operation is always associative.

The requirement for a semigroup is surprisingly easy to meet for many natural operations. This is why semigroups are fundamental.

#### **CO3 & CO4 Alignment:**
These examples help illustrate the abstract concepts of sets and algebraic structures, directly aligning with **CO3** and **CO4**. They also highlight the crucial role of closure and associativity, which are key properties for understanding algebraic systems.

### 4. Why Study Semigroups? Connecting to Computer Science and Logic

You might be asking, "Why bother with these simple structures?" Well, semigroups are more than just abstract math. They have deep connections to computer science and logic.

*   **Formal Languages:** Remember the string concatenation example? The set of all strings over an alphabet, with concatenation, forms a semigroup. This is fundamental in the study of formal languages, compilers, and text processing. Grimaldi (Chapter 10 of the 5th Edition) discusses string manipulation and its relation to formal languages, which often builds upon semigroup concepts.
*   **State Machines and Automata:** The transitions in finite state machines can often be modeled using operations on states, and the composition of these operations can form semigroups.
*   **Concurrency and Parallelism:** In some models of concurrent systems, operations can be viewed as composing independent actions, and associativity ensures that the order of grouping these composed actions doesn't change the outcome.
*   **Foundation for Groups:** As mentioned, semigroups are the stepping stones to groups. If a semigroup has an identity element and every element has an inverse, it becomes a group. Groups are incredibly important in cryptography, abstract algebra, and physics. Understanding semigroups makes learning groups much easier.
*   **Logical Reasoning (CO1):** While not directly about proofs with quantifiers, the associative property itself is a form of logical structure. It tells us that if we have a chain of operations, we can group them in specific ways without changing the result, which simplifies reasoning and manipulation. This echoes the spirit of **CO1** where we establish logical equivalences.

#### **CO1, CO3 & CO4 Alignment:**
This section explicitly connects semigroups to applications relevant to **CO1** (logical reasoning through property analysis), **CO3** (algebraic systems), and **CO4** (algebraic structures).

### 5. Important Types of Semigroups (and what happens when they're "better")

While the definition of a semigroup is just closure and associativity, sometimes we find semigroups with *additional* nice properties. These are worth noting because they often lead to more powerful theories.

#### 5.1. Monoids: The Identity Element

A **monoid** is a semigroup that *also* has an **identity element**.

*   **Identity Element (e):** In a monoid $(M, *)$, there exists an element $e \in M$ such that for all $a \in M$, $a * e = e * a = a$.

Think of the number $1$ in multiplication. $1$ is the identity element because $a \cdot 1 = 1 \cdot a = a$ for any integer $a$.
Think of the empty string $\epsilon$ in string concatenation. $\epsilon \cdot s = s \cdot \epsilon = s$ for any string $s$.

Let's re-check our previous examples:
*   $(\mathbb{Z}^+, +)$: Does it have an identity element? We need an element $e$ such that $a+e = a$ for all $a \in \mathbb{Z}^+$. If $a=1$, $1+e=1$, so $e$ must be $0$. But is $0$ in $\mathbb{Z}^+$? No! So, $(\mathbb{Z}^+, +)$ is a semigroup, but *not* a monoid.
*   $(\mathbb{Z}, \cdot)$: Does it have an identity element? Yes, the number $1$ works because $a \cdot 1 = 1 \cdot a = a$ for all $a \in \mathbb{Z}$. So, $(\mathbb{Z}, \cdot)$ is a monoid.
*   (Strings, concatenation): Yes, the empty string $\epsilon$ is the identity element. So, this is also a monoid.

**Key Takeaway:** Every monoid is a semigroup, but not every semigroup is a monoid. The identity element is a significant addition.

#### **CO3 & CO4 Alignment:**
Introducing monoids allows us to build on the concept of algebraic structures, fulfilling **CO3** and **CO4**.

#### 5.2. Groups: The Inverse Element

A **group** is a monoid where every element has an **inverse element**.

*   **Inverse Element ($a^{-1}$):** In a group $(G, *)$, for every element $a \in G$, there exists an element $a^{-1} \in G$ such that $a * a^{-1} = a^{-1} * a = e$, where $e$ is the identity element.

Let's look at our examples:
*   $(\mathbb{Z}, \cdot)$: This is a monoid with identity $1$. Does every integer have a multiplicative inverse *within $\mathbb{Z}$*? For $a=2$, we need $2 \cdot a^{-1} = 1$. This means $a^{-1} = 1/2$. But $1/2$ is not an integer! So, $(\mathbb{Z}, \cdot)$ is a monoid, but *not* a group.
*   $(\mathbb{Q}^+, \cdot)$: Let $\mathbb{Q}^+$ be the set of positive rational numbers. This is a monoid with identity $1$. For any positive rational $p/q$, its inverse is $q/p$, which is also a positive rational. And $(p/q) \cdot (q/p) = 1$. So, $(\mathbb{Q}^+, \cdot)$ is a group.
*   $(\mathbb{Z}, +)$: This is a semigroup. Does it have an identity element? Yes, $0$, because $a+0=a$. So, $(\mathbb{Z}, +)$ is a monoid. Does every integer have an inverse *within $\mathbb{Z}$* under addition? For any integer $a$, its inverse is $-a$. And $a + (-a) = 0$ (the identity). Yes, $-a$ is also an integer. So, $(\mathbb{Z}, +)$ is a group.

**Key Takeaway:** Every group is a monoid, and every monoid is a semigroup. The chain of inclusion is: Groups $\subset$ Monoids $\subset$ Semigroups.

#### **CO3 & CO4 Alignment:**
This hierarchical view of algebraic structures (semigroup $\rightarrow$ monoid $\rightarrow$ group) is fundamental to **CO3** and **CO4**. It shows how progressively stricter properties lead to richer structures.

### 6. Sample Questions and Answers

Let's test your understanding with some questions that might appear in exams or help solidify your grasp of the concepts.

**Question 1 (Conceptual):**
What are the two essential properties a binary operation on a set must satisfy to form a semigroup?

**Answer 1:**
The two essential properties are:
1.  **Closure:** The result of the operation on any two elements of the set must also be an element of the set.
2.  **Associativity:** The grouping of elements does not affect the outcome of the operation when applied to three or more elements, i.e., $(a * b) * c = a * (b * c)$ for all $a, b, c$ in the set.

**Question 2 (Application):**
Consider the set $S = \{ \dots, -2, -1, 0, 1, 2, \dots \}$ (the set of integers) and the binary operation $*$ defined by $a * b = a + b - 1$. Is $(S, *)$ a semigroup? Justify your answer.

**Answer 2:**
To determine if $(S, *)$ is a semigroup, we need to check for closure and associativity.

*   **Closure:** Let $a, b \in S$. Then $a * b = a + b - 1$. Since $a$ and $b$ are integers, $a+b$ is an integer. Subtracting $1$ from an integer still results in an integer. Therefore, $a + b - 1 \in S$. The closure property holds.

*   **Associativity:** We need to check if $(a * b) * c = a * (b * c)$ for all $a, b, c \in S$.
    *   Left side: $(a * b) * c = (a + b - 1) * c = (a + b - 1) + c - 1 = a + b + c - 2$.
    *   Right side: $a * (b * c) = a * (b + c - 1) = a + (b + c - 1) - 1 = a + b + c - 2$.

Since both sides are equal ($a + b + c - 2$), the operation $*$ is associative.

Because both closure and associativity hold, $(S, *)$ is indeed a **semigroup**.

**Question 3 (Identification):**
Which of the following are semigroups?
(a) $(\mathbb{N}, +)$ where $\mathbb{N} = \{1, 2, 3, \dots\}$ and $+$ is addition.
(b) $(\mathbb{R}, -)$ where $\mathbb{R}$ is the set of real numbers and $-$ is subtraction.
(c) The set of $2 \times 2$ matrices with entries from $\mathbb{R}$, under matrix multiplication.
(d) $(\{0, 1, 2\}, *)$, where $a * b = (a+b) \pmod 3$.

**Answer 3:**

(a) $(\mathbb{N}, +)$: Yes, as discussed before, this is a semigroup. The sum of two natural numbers is a natural number (closure), and addition is associative. (This is also a monoid if $\mathbb{N}$ includes $0$).

(b) $(\mathbb{R}, -)$: No. While subtraction is associative for real numbers (e.g., $(5-2)-1 = 3-1=2$, and $5-(2-1) = 5-1=4$), it is *not* associative. Let's check: $(a - b) - c$ vs $a - (b - c)$.
    Let $a=5, b=2, c=1$.
    $(5 - 2) - 1 = 3 - 1 = 2$.
    $5 - (2 - 1) = 5 - 1 = 4$.
    Since $2 \neq 4$, subtraction is not associative. Thus, it is not a semigroup.

(c) The set of $2 \times 2$ matrices with entries from $\mathbb{R}$, under matrix multiplication: Yes. Matrix multiplication is closed on the set of matrices of a given size (the product of two $2 \times 2$ matrices is a $2 \times 2$ matrix), and importantly, matrix multiplication is associative. Therefore, this is a semigroup. (It's also a monoid because it has an identity matrix).

(d) $(\{0, 1, 2\}, *)$, where $a * b = (a+b) \pmod 3$:
    *   **Closure:**
        $0*0=0$, $0*1=1$, $0*2=2$
        $1*0=1$, $1*1=2$, $1*2=0$
        $2*0=2$, $2*1=0$, $2*2=1$
        All results are in $\{0, 1, 2\}$. Closure holds.
    *   **Associativity:**
        Let's test $a=1, b=2, c=2$.
        $(1 * 2) * 2 = 0 * 2 = 2$.
        $1 * (2 * 2) = 1 * 1 = 2$.
        It holds for this case. It turns out that $(a+b)\pmod n$ is always associative for any set of integers modulo $n$. So, yes, this is a semigroup. (This is also a group).

**Question 4 (Monoid vs. Semigroup):**
Is the semigroup $(\mathbb{Z}^+, \cdot)$ (positive integers under multiplication) a monoid? Explain why or why not.

**Answer 4:**
Yes, $(\mathbb{Z}^+, \cdot)$ is a monoid.
*   It's a semigroup because the product of two positive integers is a positive integer (closure), and multiplication is associative.
*   For it to be a monoid, it must also have an identity element. The multiplicative identity is $1$. Since $1$ is a positive integer (i.e., $1 \in \mathbb{Z}^+$), it is present in the set. And for any $a \in \mathbb{Z}^+$, $a \cdot 1 = 1 \cdot a = a$.
Therefore, $(\mathbb{Z}^+, \cdot)$ is a monoid.

**Question 5 (Conceptual Link):**
How does the concept of a semigroup relate to the broader study of algebraic structures as introduced in this course?

**Answer 5:**
Semigroups are a foundational algebraic structure. They introduce the core ideas of a set combined with a binary operation that follows specific rules (closure and associativity). This understanding is crucial because:
*   They are the simplest non-trivial algebraic structures.
*   They serve as the base for more complex and widely studied structures like monoids (semigroups with an identity element) and groups (monoids where every element has an inverse). Many important theorems in abstract algebra build upon the properties of semigroups.
*   They appear in various areas of computer science, such as formal language theory and automata theory, making them practically relevant.
*   The associative property itself reflects a fundamental aspect of logical consistency and structured operations, indirectly supporting **CO1** by demonstrating how properties govern mathematical systems.

This covers our introduction to semigroups! Keep these definitions and examples in mind as we continue our exploration of algebraic structures. They are building blocks, so a firm grasp here will make everything else much clearer.
