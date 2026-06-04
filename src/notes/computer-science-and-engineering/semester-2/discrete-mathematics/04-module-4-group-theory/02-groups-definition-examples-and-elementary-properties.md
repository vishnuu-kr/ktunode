---
title: "Groups - Definition, Examples, and Elementary Properties"
subject: "DISCRETE MATHEMATICS"
module: "Module 4: Group theory"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fb0"
status: "completed"
scrapedAt: "2026-05-20T16:33:12.250Z"
---
This is a fantastic request! I'll channel my inner enthusiastic Discrete Math professor to create these study notes. My goal is to make Group Theory accessible, understandable, and, dare I say, enjoyable!

---

## DISCRETE MATHEMATICS: MODULE 4 - GROUP THEORY

### Topic: Groups - Definition, Examples, and Elementary Properties

**(Welcome back, everyone! Today, we embark on a journey into the fascinating world of abstract algebra, specifically focusing on one of its most fundamental building blocks: the concept of a Group. This is where we start to see the elegance and power of mathematical structures, and trust me, it has profound implications in computer science. So, grab your thinking caps, and let’s dive in!)**

---

### **1. Introduction: Why Groups? Connecting to Our Course!**

Before we get formal, let’s think about *why* we’re studying groups. You’ve already seen how logic helps us reason about statements (CO1), how counting techniques solve problems (CO2), how relations and orders define structures (CO3, CO4), and how sequences and functions can describe processes (CO5).

Group theory, which we’ll explore through this module and into Course Outcome 6 (C06), is about studying *operations* and *sets* and the properties that arise when we combine them. Think about the fundamental operations we use every day: addition, multiplication, string concatenation, logical AND/OR. Groups generalize these ideas.

In computer science, understanding groups is crucial. It underpins:
*   **Cryptography:** Secure communication relies heavily on the properties of specific groups.
*   **Error-Correcting Codes:** Detecting and correcting errors in data transmission uses group structures.
*   **Algorithms:** Many algorithms, especially in areas like graph theory and computational algebra, leverage group properties.
*   **Symmetries:** Understanding how objects can be transformed while remaining the same is a direct application of group theory (think of rotating a square!).

So, as we build our understanding of groups, keep in mind how these abstract concepts translate into practical computer science applications, fulfilling C06 by illustrating these abstract algebraic systems.

---

### **2. The Foundation: What is a Group? The Definition**

At its heart, a group is a **set** together with a **binary operation** that satisfies a few specific rules. Think of a binary operation as a way to combine any two elements from the set to produce another element *within* that same set. We'll use the common notation $(G, *)$ where $G$ is the set and $*$ is the binary operation.

The formal definition, as you'll find in our textbook by Rosen and Krithivasan (Chapter 8 in the 7th Edition, for instance, or similar sections in the 8th edition), states that a **group** is a set $G$ with a binary operation $*$ such that the following four properties hold:

1.  **Closure:** For all $a, b \in G$, the result of $a * b$ is also in $G$.
    *   *(Think of it this way: if you combine any two elements from your set using the operation, you *must* get an element that is still within that original set. You can’t "escape" the set by performing the operation.)*

2.  **Associativity:** For all $a, b, c \in G$, $(a * b) * c = a * (b * c)$.
    *   *(This is a really important one! It means the order in which you perform the operation when combining three or more elements doesn't matter, as long as the elements themselves stay in their original sequence. Like adding numbers: (2+3)+4 is the same as 2+(3+4). You can group them as you like.)*

3.  **Identity Element:** There exists an element $e \in G$ such that for all $a \in G$, $a * e = e * a = a$.
    *   *(This is our "do-nothing" element. For addition, it’s 0. For multiplication, it’s 1. It’s the element that, when combined with any other element, leaves that other element unchanged.)*

4.  **Inverse Element:** For every element $a \in G$, there exists an element $a^{-1} \in G$ such that $a * a^{-1} = a^{-1} * a = e$, where $e$ is the identity element.
    *   *(Every element has a "partner" that, when combined, gives us the identity element. For addition, the inverse of 5 is -5, because 5 + (-5) = 0. For multiplication, the inverse of 5 is 1/5, because 5 * (1/5) = 1.)*

**Remember this:** All four of these properties are *essential*. If even one of them fails, the set and operation combination is *not* a group.

---

### **3. Everyday Analogies to Grasp the Concepts**

Let’s make this more concrete with some relatable examples.

#### **Analogy: A Team of Workers and a Task**

Imagine a team of people (the **set** $G$). They have a specific task they can perform together (the **binary operation** $*$ ).

*   **Closure:** No matter which two people you pick and ask them to perform the task together, the outcome of their combined effort is still one of the people on the team. Nobody magically turns into an outsider.
*   **Associativity:** If you have three people, A, B, and C, and you want them to perform the task. Whether you have A and B work together first, and then bring in C, or have B and C work together first, and then bring in A, the final result of the task is the same.
*   **Identity Element:** There's one person on the team who, if they "help" any other person with the task, doesn't change what that other person does. This "helper" is the identity.
*   **Inverse Element:** For every person on the team, there’s another person on the team who, when they "help" each other with the task, results in the "do-nothing" person (the identity). For example, maybe one person is really good at starting a task, and another is really good at finishing it off, and their combined effort is like nobody working at all.

This might seem a bit abstract, but it captures the essence of these properties.

#### **Another Analogy: A Clock (Modular Arithmetic)**

Think about a 12-hour clock. The set $G$ is the set of hours: $\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12\}$ (or more formally, $\{0, 1, \dots, 11\}$ if we use 0 as the starting point for modular arithmetic). The binary operation $*$ is **addition modulo 12**.

Let's test our group properties:

*   **Closure:** If you add any two hours on the clock, say 7 o'clock and 8 o'clock, you get 15. But on a 12-hour clock, 15 o'clock is the same as 3 o'clock (15 mod 12 = 3). So, the result is still an hour on the clock. Closure holds!
*   **Associativity:** Does $(a + b) \pmod{12} + c \pmod{12} = a + (b + c) \pmod{12}$? Yes, addition modulo any number is associative. For example, $(7+8) \pmod{12} + 10 = 3 + 10 = 13 \pmod{12} = 1$. And $7 + (8+10) \pmod{12} = 7 + 18 \pmod{12} = 7 + 6 = 13 \pmod{12} = 1$. It works!
*   **Identity Element:** What hour can you add to any other hour, and it stays the same? It's 12 (or 0 in a $0 \dots 11$ system). For instance, 5 + 12 = 17, which is 5 mod 12. Or using 0: 5 + 0 = 5. The identity element is 12 (or 0).
*   **Inverse Element:** For every hour, is there another hour that adds up to 12 (or 0)? For 5, its inverse is 7, because 5 + 7 = 12 (or 0 mod 12). For 11, its inverse is 1, because 11 + 1 = 12 (or 0 mod 12). For 12 (or 0), its inverse is itself. So, every element has an inverse.

Therefore, the set of hours on a 12-hour clock with addition modulo 12 *is* a group! This is a classic example and directly relates to CO6.

---

### **4. Essential Examples of Groups**

Let's look at more formal examples, as you'd find them discussed in Rosen or Lipson/Lipschutz. These will help build your intuition for what constitutes a group and what doesn't.

**Example 1: Integers with Addition**

*   **Set G:** The set of all integers, denoted by $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$.
*   **Binary Operation *:** Addition (+).

Let's check the properties:
1.  **Closure:** If you add any two integers, you always get another integer. Yes. ($\mathbb{Z}$ is closed under addition).
2.  **Associativity:** For any integers $a, b, c$, we know that $(a + b) + c = a + (b + c)$. Yes.
3.  **Identity Element:** The integer $0$ is the identity element, as $a + 0 = 0 + a = a$ for all $a \in \mathbb{Z}$. Yes.
4.  **Inverse Element:** For every integer $a$, its additive inverse is $-a$. For example, for $5$, the inverse is $-5$, since $5 + (-5) = 0$. For $-3$, the inverse is $3$, since $-3 + 3 = 0$. Yes.

**Conclusion:** $(\mathbb{Z}, +)$ is a group. This is perhaps the most fundamental example and a great starting point.

**Example 2: Non-zero Rational Numbers with Multiplication**

*   **Set G:** The set of non-zero rational numbers, denoted by $\mathbb{Q}^* = \{p/q \mid p, q \in \mathbb{Z}, q \neq 0, p \neq 0\}$.
*   **Binary Operation *:** Multiplication ($\cdot$).

Let's check the properties:
1.  **Closure:** If you multiply two non-zero rational numbers, say $(a/b) \cdot (c/d) = (ac)/(bd)$. Since $a, b, c, d$ are non-zero, $ac$ and $bd$ are also non-zero, so $(ac)/(bd)$ is a non-zero rational number. Yes.
2.  **Associativity:** Multiplication of rational numbers is associative: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$. Yes.
3.  **Identity Element:** The number $1$ is the multiplicative identity, since $a \cdot 1 = 1 \cdot a = a$ for all $a \in \mathbb{Q}^*$. Yes.
4.  **Inverse Element:** For every non-zero rational number $a/b$, its multiplicative inverse is $b/a$. For example, the inverse of $2/3$ is $3/2$, because $(2/3) \cdot (3/2) = 6/6 = 1$. Yes.

**Conclusion:** $(\mathbb{Q}^*, \cdot)$ is a group.

**What about Zero? Let's be careful!**

What if our set was *all* rational numbers ($\mathbb{Q}$) with multiplication?
*   Closure, Associativity, and Identity (1) would hold.
*   However, the **inverse property fails**. Why? Because the number $0$ has no multiplicative inverse. There's no rational number $x$ such that $0 \cdot x = 1$.

**Conclusion:** $(\mathbb{Q}, \cdot)$ is *not* a group. This highlights the importance of carefully defining your set and checking *all* properties!

**Example 3: Integers Modulo $n$ with Addition**

*   **Set G:** The set of integers modulo $n$, denoted by $\mathbb{Z}_n = \{0, 1, 2, \dots, n-1\}$.
*   **Binary Operation *:** Addition modulo $n$, denoted by $+_n$ or simply $+$.

We saw this with the 12-hour clock. Let's generalize for any $n > 1$.
1.  **Closure:** For any $a, b \in \mathbb{Z}_n$, $a + b$ will result in an integer. When we take this modulo $n$, the result will be in the set $\{0, 1, \dots, n-1\}$. Yes.
2.  **Associativity:** Addition modulo $n$ is always associative. Yes.
3.  **Identity Element:** The element $0$ in $\mathbb{Z}_n$ is the identity element, since $a + 0 \equiv a \pmod{n}$ for all $a \in \mathbb{Z}_n$. Yes.
4.  **Inverse Element:** For each element $a \in \mathbb{Z}_n$, its inverse is $(n-a) \pmod{n}$. For example, in $\mathbb{Z}_5 = \{0, 1, 2, 3, 4\}$:
    *   Inverse of 0 is 0 ($0+0=0$).
    *   Inverse of 1 is 4 ($1+4=5 \equiv 0 \pmod 5$).
    *   Inverse of 2 is 3 ($2+3=5 \equiv 0 \pmod 5$).
    *   Inverse of 3 is 2 ($3+2=5 \equiv 0 \pmod 5$).
    *   Inverse of 4 is 1 ($4+1=5 \equiv 0 \pmod 5$).
    Yes, every element has an inverse.

**Conclusion:** $(\mathbb{Z}_n, +)$ is a group for any integer $n > 1$.

**Example 4: Non-zero Integers Modulo $n$ with Multiplication (A Tricky One!)**

*   **Set G:** The set of non-zero integers modulo $n$, $\{1, 2, \dots, n-1\}$.
*   **Binary Operation *:** Multiplication modulo $n$.

Let's try $\mathbb{Z}_4 = \{0, 1, 2, 3\}$ with multiplication modulo 4. If we consider the non-zero elements $\{1, 2, 3\}$:
*   **Closure:**
    *   $1 \cdot 1 = 1$
    *   $1 \cdot 2 = 2$
    *   $1 \cdot 3 = 3$
    *   $2 \cdot 2 = 4 \equiv 0 \pmod 4$. Uh oh! The result is $0$, which is not in our set $\{1, 2, 3\}$.

**Conclusion:** $(\{1, 2, 3\}, \cdot \pmod 4)$ is *not* a group because closure fails.

This brings us to a crucial point: For multiplication modulo $n$ to form a group, the set needs to be carefully chosen. The set of elements in $\mathbb{Z}_n$ that have a multiplicative inverse modulo $n$ forms a group under multiplication. These are the numbers in $\{1, 2, \dots, n-1\}$ that are **relatively prime** to $n$. This set is denoted by $\mathbb{Z}_n^*$.

**Example 5: $\mathbb{Z}_5^*$ with Multiplication Modulo 5**

*   **Set G:** $\mathbb{Z}_5^* = \{1, 2, 3, 4\}$. (All numbers from 1 to 4 are relatively prime to 5).
*   **Binary Operation *:** Multiplication modulo 5.

Let's check:
1.  **Closure:**
    *   $1 \cdot \{1,2,3,4\} = \{1,2,3,4\}$
    *   $2 \cdot \{1,2,3,4\} = \{2,4,6\equiv 1, 8\equiv 3\} = \{1,2,3,4\}$
    *   $3 \cdot \{1,2,3,4\} = \{3,6\equiv 1, 9\equiv 4, 12\equiv 2\} = \{1,2,3,4\}$
    *   $4 \cdot \{1,2,3,4\} = \{4,8\equiv 3, 12\equiv 2, 16\equiv 1\} = \{1,2,3,4\}$
    Yes, closure holds. All results are in $\{1, 2, 3, 4\}$.
2.  **Associativity:** Multiplication modulo 5 is associative. Yes.
3.  **Identity Element:** The element $1$ is the multiplicative identity. Yes.
4.  **Inverse Element:**
    *   Inverse of 1 is 1 ($1 \cdot 1 = 1$).
    *   Inverse of 2 is 3 ($2 \cdot 3 = 6 \equiv 1 \pmod 5$).
    *   Inverse of 3 is 2 ($3 \cdot 2 = 6 \equiv 1 \pmod 5$).
    *   Inverse of 4 is 4 ($4 \cdot 4 = 16 \equiv 1 \pmod 5$).
    Yes, every element has an inverse.

**Conclusion:** $(\mathbb{Z}_5^*, \cdot)$ is a group. This is a very important type of group in number theory and cryptography.

---

### **5. Elementary Properties of Groups: What Else Can We Deduce?**

Once we have a group $(G, *)$, there are some basic properties that always hold true. These are often derived directly from the definition.

**Property 1: Uniqueness of the Identity Element**

*   **Statement:** In any group $(G, *)$, there is only *one* identity element.
*   **Why?** Suppose there were two identity elements, $e_1$ and $e_2$.
    *   Since $e_1$ is an identity, $e_1 * e_2 = e_2$.
    *   Since $e_2$ is an identity, $e_1 * e_2 = e_1$.
    *   Therefore, $e_1 = e_2$. There can only be one!

**Property 2: Uniqueness of the Inverse Element**

*   **Statement:** In any group $(G, *)$, each element $a \in G$ has only *one* inverse.
*   **Why?** Suppose an element $a$ has two inverses, $b_1$ and $b_2$.
    *   Since $b_1$ is an inverse of $a$, $a * b_1 = e$.
    *   Since $b_2$ is an inverse of $a$, $a * b_2 = e$.
    *   We also know that $b_1$ is an inverse of $a$, so $b_1$ must have an inverse, let's call it $a'$. So $b_1 * a' = e$.
    *   Also, by associativity, consider $b_1 * (a * b_2)$.
        *   Since $a * b_2 = e$, we have $b_1 * e = b_1$.
        *   Since $b_1$ is an inverse of $a$, $a * b_1 = e$, so $b_1 * a = e$.
        *   We can rewrite $b_1 * (a * b_2)$ as $(b_1 * a) * b_2$.
        *   Substituting, we get $e * b_2 = b_2$.
        *   So, $b_1 = b_2$. The inverse must be unique.

**Property 3: Cancellation Laws**

*   **Statement:** For any $a, b, c \in G$, if $a * b = a * c$, then $b = c$ (left cancellation). If $b * a = c * a$, then $b = c$ (right cancellation).
*   **Why?** Let's prove left cancellation. Assume $a * b = a * c$.
    *   Since $a \in G$, its inverse $a^{-1}$ exists and is in $G$.
    *   We can multiply both sides of the equation $a * b = a * c$ by $a^{-1}$ on the left:
        $a^{-1} * (a * b) = a^{-1} * (a * c)$
    *   Using associativity: $(a^{-1} * a) * b = (a^{-1} * a) * c$
    *   Since $a^{-1} * a = e$: $e * b = e * c$
    *   Since $e$ is the identity: $b = c$.
    The proof for right cancellation is similar, multiplying by $a^{-1}$ on the right.

**Property 4: $a * a = a$ implies $a = e$**

*   **Statement:** If in a group $(G, *)$, an element $a$ satisfies $a * a = a$, then $a$ must be the identity element $e$.
*   **Why?** Start with $a * a = a$.
    *   We know $a$ has an inverse, $a^{-1}$.
    *   Multiply both sides by $a^{-1}$ on the left: $a^{-1} * (a * a) = a^{-1} * a$.
    *   Using associativity: $(a^{-1} * a) * a = a^{-1} * a$.
    *   Since $a^{-1} * a = e$: $e * a = e$.
    *   Since $e$ is the identity: $a = e$.

These properties are foundational and will be used repeatedly as we explore more complex group structures. They are part of the basic toolkit for analyzing any group.

---

### **6. Groups that are NOT Commutative (Non-Abelian Groups)**

So far, most of our examples have been **abelian** (or commutative), meaning the order of elements in the operation doesn't matter: $a * b = b * a$ for all $a, b \in G$. $(\mathbb{Z}, +)$, $(\mathbb{Q}^*, \cdot)$, and $(\mathbb{Z}_n, +)$ are all abelian.

However, not all groups are abelian! This is a critical concept for C06 as well, distinguishing simple structures from more complex ones.

**Example: The Symmetric Group $S_3$**

This group represents the permutations of three elements. Let's say we are permuting the set $\{1, 2, 3\}$. The possible arrangements (permutations) are:

*   $e = (1)(2)(3)$: The identity permutation (no change).
*   $a = (1 2)$: Swaps 1 and 2.
*   $b = (1 3)$: Swaps 1 and 3.
*   $c = (2 3)$: Swaps 2 and 3.
*   $d = (1 2 3)$: Cycles 1 to 2, 2 to 3, 3 to 1.
*   $f = (1 3 2)$: Cycles 1 to 3, 3 to 2, 2 to 1.

The set $G = \{e, a, b, c, d, f\}$. The binary operation $*$ is **composition of permutations** (applying one permutation after another). For example, to calculate $a * d$:
*   $a$ swaps 1 and 2. $d$ cycles 1->2, 2->3, 3->1.
*   Apply $a$ first: $1 \to 2$, $2 \to 1$, $3 \to 3$.
*   Then apply $d$ to these results:
    *   $1 \xrightarrow{a} 2 \xrightarrow{d} 3$
    *   $2 \xrightarrow{a} 1 \xrightarrow{d} 2$
    *   $3 \xrightarrow{a} 3 \xrightarrow{d} 1$
*   So, $a * d$ maps $1 \to 3$, $2 \to 2$, $3 \to 1$. This is permutation $b$ (swaps 1 and 3). So, $a * d = b$.

Now, let's check if $d * a$ is the same:
*   Apply $d$ first: $1 \to 2$, $2 \to 3$, $3 \to 1$.
*   Then apply $a$ to these results:
    *   $1 \xrightarrow{d} 2 \xrightarrow{a} 1$
    *   $2 \xrightarrow{d} 3 \xrightarrow{a} 3$
    *   $3 \xrightarrow{d} 1 \xrightarrow{a} 2$
*   So, $d * a$ maps $1 \to 1$, $2 \to 3$, $3 \to 2$. This is permutation $c$ (swaps 2 and 3). So, $d * a = c$.

Since $a * d = b$ and $d * a = c$, and $b \neq c$, we have $a * d \neq d * a$.

**Conclusion:** $S_3$ is a group, but it is **not abelian**. This is a very important class of groups in mathematics and has significant implications in areas like physics and chemistry (symmetry groups).

---

### **7. Key Takeaways and Exam Focus**

As you prepare for exams, focus on these core aspects from this topic:

*   **The Four Axioms:** Be able to state and explain closure, associativity, identity, and inverse. You *will* be asked to verify if a given set and operation form a group by checking these.
*   **Distinguishing Groups:** Practice identifying why something *isn't* a group. Usually, it's a failure of closure or inverses.
*   **Common Group Examples:** Know $(\mathbb{Z}, +)$, $(\mathbb{Q}^*, \cdot)$, $(\mathbb{R}^*, \cdot)$, $(\mathbb{Z}_n, +)$, and $(\mathbb{Z}_n^*, \cdot)$. Understand their definitions and why they are (or aren't) groups.
*   **Abelian vs. Non-Abelian:** Understand the difference and be able to identify commutative groups. Be aware that non-abelian groups exist (like $S_3$) and understand what it means.
*   **Elementary Properties:** Understand and be able to prove (or at least explain the reasoning behind) the uniqueness of identity/inverses and the cancellation laws. These are often tested conceptually.

**(Remember, group theory is like learning the alphabet of algebraic structures. Mastering these basic definitions and properties is the essential first step to unlocking much more complex and powerful mathematical ideas in computer science.)**

---

### **Sample Questions and Answers**

**Question 1 (Conceptual):** State the four axioms required for a set $G$ with a binary operation $*$ to form a group. Explain the importance of each axiom.

**Answer:** A set $G$ with a binary operation $*$ forms a group $(G, *)$ if it satisfies the following four axioms:
1.  **Closure:** For all $a, b \in G$, $a * b \in G$. This ensures that the operation keeps us within the set. Without closure, we can't even perform operations consistently within the structure.
2.  **Associativity:** For all $a, b, c \in G$, $(a * b) * c = a * (b * c)$. This property allows us to combine multiple elements without ambiguity regarding the order of operations, simplifying calculations.
3.  **Identity Element:** There exists an element $e \in G$ such that for all $a \in G$, $a * e = e * a = a$. This is the "neutral" element that doesn't change other elements, providing a stable point of reference.
4.  **Inverse Element:** For every $a \in G$, there exists an element $a^{-1} \in G$ such that $a * a^{-1} = a^{-1} * a = e$. This guarantees that for every operation, there's a way to "undo" it and return to the identity element, crucial for solving equations and structural analysis.

**Question 2 (Application):** Determine if the set of all $2 \times 2$ matrices with real number entries, under matrix addition, forms a group. Justify your answer by checking the group axioms.

**Answer:**
Let $G$ be the set of all $2 \times 2$ matrices with real number entries, and the operation be matrix addition.
1.  **Closure:** If $A$ and $B$ are $2 \times 2$ matrices with real entries, then their sum $A+B$ is also a $2 \times 2$ matrix with real entries. **Closure holds.**
2.  **Associativity:** Matrix addition is associative. For any $2 \times 2$ matrices $A, B, C$, we have $(A+B)+C = A+(B+C)$. **Associativity holds.**
3.  **Identity Element:** The zero matrix, $E = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$, is the identity element. For any matrix $A \in G$, $A+E = E+A = A$. **Identity exists.**
4.  **Inverse Element:** For any matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in G$, its additive inverse is $-A = \begin{pmatrix} -a & -b \\ -c & -d \end{pmatrix}$. We have $A+(-A) = (-A)+A = E$. The inverse exists for every matrix. **Inverse holds.**

Since all four axioms are satisfied, the set of all $2 \times 2$ matrices with real entries under matrix addition **forms a group**. This group is also abelian since matrix addition is commutative.

**Question 3 (Analytical/Pitfall):** Consider the set $G = \{1, 2, 3\}$ and the operation $*$ defined as $a * b = (a + b) \pmod{3}$. Does $(G, *)$ form a group?

**Answer:**
Let's check the axioms for $G = \{1, 2, 3\}$ with $a * b = (a + b) \pmod{3}$.
1.  **Closure:**
    *   $1 * 1 = (1+1) \pmod{3} = 2 \in G$.
    *   $1 * 2 = (1+2) \pmod{3} = 0$. However, $0 \notin G$.
    **Closure fails.**

Since closure fails, $(G, *)$ is not a group. This is a common trap: if the set is defined as $\{1, 2, 3\}$, the operation must *always* result in an element from that specific set. The result $0$ from $(1+2)\pmod 3$ is not in $\{1, 2, 3\}$.

*(Note: If the set were $\{0, 1, 2\}$ and the operation was addition modulo 3, then it *would* be a group, as seen in Example 4.)*

**Question 4 (Conceptual/Property):** Prove that if $a * b = a * c$ in a group $(G, *)$, then $b = c$.

**Answer:**
Assume $a * b = a * c$ for elements $a, b, c$ in a group $(G, *)$.
By the group axioms, $a$ has an inverse element $a^{-1} \in G$ such that $a^{-1} * a = e$ (where $e$ is the identity element).
We can multiply both sides of the equation $a * b = a * c$ by $a^{-1}$ on the left:
$a^{-1} * (a * b) = a^{-1} * (a * c)$
By the associativity axiom, we can regroup the terms on both sides:
$(a^{-1} * a) * b = (a^{-1} * a) * c$
Since $a^{-1} * a = e$, we have:
$e * b = e * c$
By the definition of the identity element ($e * x = x$), we get:
$b = c$
This demonstrates the left cancellation property.

---

**(And that, class, is our introduction to groups! We’ve defined what they are, explored them with analogies and examples, and touched upon some of their fundamental properties. This is the bedrock for everything we'll do in abstract algebra. Keep practicing with examples, and don't hesitate to ask questions! See you next time!)**
