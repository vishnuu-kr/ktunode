---
title: "Surjections and Bijections"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f88"
status: "completed"
scrapedAt: "2026-05-20T16:32:45.171Z"
---
Alright everyone, settle in! Today, we're diving into a really fundamental and, dare I say, elegant part of discrete mathematics: **Surjections and Bijections**. These concepts build directly on what we've already learned about functions and sets, and they are absolutely crucial for understanding many areas in computer science and beyond. So, let's get started!

### Module 1: Sets and Subsets - Topic: Surjections and Bijections

We've already established what a function is, right? It's a rule that assigns to each element in one set (the domain) exactly one element in another set (the codomain). Think of it like a vending machine: for every button you press (an element in the domain), you get exactly one item (an element in the codomain).

Now, we're going to look at special types of functions based on *how* they map elements. These special types tell us a lot about the relationship between the domain and the codomain, and critically, about how many elements are in each set. This ties in beautifully with our **Course Outcome CO2**, which is all about counting problems. Understanding surjections and bijections will be a powerful tool for solving those!

#### 1. Surjective Functions (Onto Functions)

Let's start with **surjective functions**, also known as **onto functions**. The core idea here is about whether the function "covers" its entire codomain.

**Definition:** A function $f: A \to B$ is **surjective** (or **onto**) if for every element $y$ in the codomain $B$, there exists at least one element $x$ in the domain $A$ such that $f(x) = y$.

What does this really mean in plain English? It means that *every single element in the codomain gets "hit" by the function*. No element in the codomain is left out.

**Analogy Time:** Imagine you're assigning students to different study groups. Let the domain $A$ be the set of students, and the codomain $B$ be the set of available study group slots. If your function is "assign student to study group slot," and this function is surjective, it means that *every single study group slot is filled by at least one student*. No slot is left empty.

**Let's look at an example:**

Suppose $A = \{1, 2, 3\}$ and $B = \{a, b\}$.
Consider the function $f: A \to B$ defined as:
$f(1) = a$
$f(2) = b$
$f(3) = a$

Is this function surjective? Let's check.
The codomain is $B = \{a, b\}$.
For element 'a' in $B$, we have $f(1) = a$ (and $f(3) = a$). So, 'a' is hit.
For element 'b' in $B$, we have $f(2) = b$. So, 'b' is hit.
Since every element in the codomain $B$ is mapped to by at least one element in the domain $A$, this function $f$ is **surjective**.

**Now, consider a case that's NOT surjective:**

Suppose $A = \{1, 2\}$ and $B = \{x, y, z\}$.
Consider the function $g: A \to B$ defined as:
$g(1) = x$
$g(2) = y$

Is this function surjective?
The codomain is $B = \{x, y, z\}$.
'x' is hit by $g(1)$.
'y' is hit by $g(2)$.
But what about 'z'? There is no element in $A$ that maps to 'z'. So, the element 'z' in the codomain is *not* hit by the function $g$. Therefore, $g$ is **not surjective**.

**Why is this important for counting?**
If a function $f: A \to B$ is surjective, what can we say about the sizes of $A$ and $B$?
Well, for every element in $B$ to be hit, you need *at least* as many elements in $A$ as there are in $B$. If you have fewer elements in $A$ than in $B$, you simply can't hit every element in $B$ (think Pigeonhole Principle, but we'll get to that more formally later!).
So, a necessary condition for a function $f: A \to B$ to be surjective is that $|A| \geq |B|$.

*   **Key Takeaway:** For surjections, every element in the codomain has at least one arrow pointing to it from the domain. Think of it as "covering" the codomain completely.

#### 2. Injective Functions (One-to-One Functions)

Next, we have **injective functions**, also known as **one-to-one functions**. The key idea here is about distinctness: different elements in the domain must map to different elements in the codomain.

**Definition:** A function $f: A \to B$ is **injective** (or **one-to-one**) if for every $y$ in $B$, there is *at most one* element $x$ in $A$ such that $f(x) = y$.
An equivalent way to state this, which is often more useful for proving injectivity, is:
For any distinct elements $x_1, x_2 \in A$, if $x_1 \neq x_2$, then $f(x_1) \neq f(x_2)$.
Or, even more commonly used:
If $f(x_1) = f(x_2)$, then $x_1 = x_2$.

What does this mean intuitively? No two different inputs produce the same output. Each element in the domain maps to a unique element in the codomain.

**Analogy Time:** Think about assigning student ID numbers. Let the domain $A$ be the set of students, and the codomain $B$ be the set of possible ID numbers. If your function is "assign student ID number," and this function is injective, it means that *no two students are assigned the same ID number*. Everyone gets a unique ID.

**Let's revisit our first example:**

$A = \{1, 2, 3\}$, $B = \{a, b\}$.
$f(1) = a$
$f(2) = b$
$f(3) = a$

Is this function injective?
We have $f(1) = a$ and $f(3) = a$. Notice that $1 \neq 3$, but $f(1) = f(3)$.
Since two different elements in the domain (1 and 3) map to the *same* element in the codomain ('a'), this function $f$ is **not injective**.

**Now, let's look at an injective example:**

Suppose $A = \{1, 2\}$ and $B = \{x, y, z\}$.
Consider the function $h: A \to B$ defined as:
$h(1) = x$
$h(2) = y$

Is this function injective?
We have $1 \neq 2$.
$h(1) = x$ and $h(2) = y$. Since $x \neq y$, $h(1) \neq h(2)$.
There are no two distinct elements in $A$ that map to the same element in $B$. Therefore, $h$ is **injective**.

**What about the sizes of sets for injectivity?**
If a function $f: A \to B$ is injective, what can we say about $|A|$ and $|B|$?
For every element in $A$ to map to a *unique* element in $B$, you need at least as many elements in $B$ as there are in $A$. If you have more elements in $A$ than in $B$, by the Pigeonhole Principle, at least two elements from $A$ *must* map to the same element in $B$.
So, a necessary condition for a function $f: A \to B$ to be injective is that $|A| \leq |B|$.

*   **Key Takeaway:** For injections, each element in the domain maps to a unique element in the codomain. Think of it as "no two arrows share the same target."

#### 3. Bijective Functions (One-to-One Correspondence)

Finally, we come to **bijective functions**, which are functions that are *both* injective *and* surjective. These are incredibly important because they establish a perfect, one-to-one mapping between the elements of two sets.

**Definition:** A function $f: A \to B$ is **bijective** if it is both **injective** and **surjective**.

When a function is bijective, it means:
1.  Every element in the codomain $B$ is mapped to by at least one element in the domain $A$ (surjective).
2.  No two distinct elements in the domain $A$ map to the same element in the codomain $B$ (injective).

Putting these together, it means that *every element in $A$ maps to a unique element in $B$, and every element in $B$ is mapped to by exactly one element in $A$*.

**Analogy Time:** Think about pairing dance partners. Let $A$ be the set of men and $B$ be the set of women. A function $f: A \to B$ could assign each man to a woman. If this function is bijective:
*   Every woman has a dance partner (surjective).
*   No two men are partnered with the same woman (injective).
This is a perfect pairing!

**What does this imply about the sizes of sets?**
If $f: A \to B$ is bijective, we need $|A| \leq |B|$ for injectivity, and $|A| \geq |B|$ for surjectivity. The only way both can be true is if $|A| = |B|$.
So, a necessary condition for a function $f: A \to B$ to be bijective is that $|A| = |B|$. This makes perfect sense – you can only have a perfect one-to-one correspondence if the sets have the same number of elements.

**Let's check our examples:**

*   $f: \{1, 2, 3\} \to \{a, b\}$ with $f(1)=a, f(2)=b, f(3)=a$.
    *   Surjective? Yes.
    *   Injective? No.
    *   Bijective? No.

*   $g: \{1, 2\} \to \{x, y, z\}$ with $g(1)=x, g(2)=y$.
    *   Surjective? No (z is missed).
    *   Injective? Yes.
    *   Bijective? No.

*   $h: \{1, 2\} \to \{x, y, z\}$ with $h(1)=x, h(2)=y$.
    *   Wait, I used 'h' for two different examples! Let's rename the second one to $h_2$.
    *   $h_2: \{1, 2\} \to \{x, y, z\}$ with $h_2(1)=x, h_2(2)=y$.
        *   Surjective? No.
        *   Injective? Yes.
        *   Bijective? No.

Let's create a bijective example:
Suppose $A = \{1, 2\}$ and $B = \{x, y\}$.
Consider the function $k: A \to B$ defined as:
$k(1) = x$
$k(2) = y$

Is $k$ surjective? Yes, both 'x' and 'y' in $B$ are hit.
Is $k$ injective? Yes, $1 \neq 2$ and $k(1) \neq k(2)$.
Since it's both, $k$ is **bijective**.

Another example:
Suppose $A = \{1, 2, 3\}$ and $B = \{p, q, r\}$.
Consider $m: A \to B$ with:
$m(1) = q$
$m(2) = r$
$m(3) = p$

*   Surjective? Yes, p, q, and r are all mapped to.
*   Injective? Yes, $1 \neq 2 \implies m(1) \neq m(2)$, $1 \neq 3 \implies m(1) \neq m(3)$, $2 \neq 3 \implies m(2) \neq m(3)$.
*   Bijective? Yes.

**The Significance of Bijective Functions**

Bijective functions are incredibly important because they establish a **one-to-one correspondence** between the elements of two sets. This is fundamental in many areas of mathematics and computer science.

*   **Counting and Cardinality:** If there exists a bijection between two sets $A$ and $B$, then $A$ and $B$ have the same "size" or **cardinality**. This is a cornerstone of set theory, especially when dealing with infinite sets. (This connects deeply to **CO2**).
*   **Isomorphism:** In abstract algebra (which we'll touch upon in later modules, especially **CO6**), a bijective function that preserves structure is called an isomorphism. It means two algebraic structures are essentially the same.
*   **Invertibility:** A function $f: A \to B$ has an inverse function $f^{-1}: B \to A$ if and only if $f$ is bijective. The inverse function essentially "undoes" what $f$ does. This is crucial in cryptography, algorithms, and data structures.

#### 4. Connecting to Course Outcomes

Let's explicitly see how these concepts tie into our Course Outcomes:

*   **CO1 (Validity of Predicates):** While not directly about predicate logic, understanding if a mapping "hits" everything (surjective) or if each element is unique (injective) is a form of logical analysis about the properties of a function. We're checking conditions on the mapping.
*   **CO2 (Counting Problems):** This is where surjections and bijections shine!
    *   If $f: A \to B$ is injective, $|A| \leq |B|$.
    *   If $f: A \to B$ is surjective, $|A| \geq |B|$.
    *   If $f: A \to B$ is bijective, $|A| = |B|$.
    These inequalities are vital for combinatorial arguments, the Pigeonhole Principle, and proving properties about arrangements of objects. For example, if you're trying to prove that a certain arrangement is impossible, you might show that any such arrangement would require an injective mapping from a larger set to a smaller set, which is impossible.
*   **CO3 (Binary Relations):** A bijective function is a special type of binary relation where each element in the domain is related to exactly one element in the codomain, and vice-versa, with no duplicates. Understanding bijections helps classify these relations and see their applications in areas like database schemas or network connections where unique mappings are critical.
*   **CO6 (Abstract Algebraic Systems):** As mentioned, the concept of isomorphism in groups and monoids relies heavily on bijections that preserve operations. A bijective homomorphism is an isomorphism. This shows how these set-theoretic ideas are fundamental building blocks for more advanced abstract structures.

#### 5. Quick Recall & Exam Tips

*   **Surjective:** Every element in the *codomain* is mapped to. Think "onto." $|A| \geq |B|$.
*   **Injective:** No two elements in the *domain* map to the same element in the codomain. Think "one-to-one." $|A| \leq |B|$.
*   **Bijective:** Both injective and surjective. Think "one-to-one correspondence." $|A| = |B|$.
*   **How to prove surjectivity:** Pick an arbitrary element 'y' from the codomain and show there exists *some* element 'x' in the domain such that $f(x) = y$.
*   **How to prove injectivity:** Either show that if $f(x_1) = f(x_2)$, then $x_1 = x_2$, OR show that if $x_1 \neq x_2$, then $f(x_1) \neq f(x_2)$. The first is usually easier.
*   **Common Pitfall:** Confusing the domain and codomain when checking conditions. Always ask: "What is the domain? What is the codomain?"
*   **Exam Question Type:** You might be given a function and asked to determine if it's injective, surjective, or bijective, and provide a justification. Or, you might be given conditions on set sizes and asked to infer properties of mappings.

Let's look at some formal definitions from our textbooks to solidify this.

Rosen, in Chapter 2, discusses functions extensively. He defines injective, surjective, and bijective functions in Section 2.3. The key is understanding that a function $f: A \to B$ maps elements from $A$ to $B$. For injectivity, the condition is that for all $x_1, x_2 \in A$, if $f(x_1) = f(x_2)$, then $x_1 = x_2$. For surjectivity, it's that for all $y \in B$, there exists $x \in A$ such that $f(x) = y$. A bijection combines both. The text also emphasizes how these properties relate to the sizes of finite sets, which is directly applicable to **CO2**.

Lipschutz and Lipson in Schaum's Outline, Chapter 3, also cover functions thoroughly. They use the terms "one-to-one" for injective and "onto" for surjective. They highlight that if $A$ and $B$ are finite, a function $f: A \to B$ can only be injective if $|A| \le |B|$, and surjective if $|A| \ge |B|$. If $f$ is a bijection, then $|A| = |B|$, and they mention that this is how we establish that finite sets have the same number of elements. This directly supports **CO2**.

Ross and Wright's "Discrete Mathematics" also covers these concepts, likely in a chapter on functions and relations. They often approach these topics with a strong emphasis on proof, showing how to construct arguments for injectivity and surjectivity.

**Summary of Key Properties:**

| Property    | Condition on Domain/Codomain Sizes (Finite Sets) | Intuition                                    |
| :---------- | :----------------------------------------------- | :------------------------------------------- |
| Injective   | $|A| \leq |B|$                                   | Different inputs map to different outputs.   |
| Surjective  | $|A| \geq |B|$                                   | Every output is mapped to.                   |
| Bijective   | $|A| = |B|$                                      | Perfect one-to-one correspondence.           |

Remember, these size conditions are necessary but not always sufficient. You still need to check the actual mapping rule.

---

#### Sample Questions and Answers

Here are a few practice questions to test your understanding:

**Question 1 (Conceptual):**
Let $A = \{1, 2, 3, 4\}$ and $B = \{a, b, c\}$. Consider a function $f: A \to B$. Can $f$ be injective? Explain why or why not.

**Answer 1:**
No, $f$ cannot be injective. For a function to be injective, the size of the domain must be less than or equal to the size of the codomain ($|A| \leq |B|$). Here, $|A| = 4$ and $|B| = 3$. Since $4 > 3$, by the Pigeonhole Principle, at least two elements in $A$ must map to the same element in $B$. Therefore, $f$ cannot be injective. This relates to **CO2** and the necessity of $|A| \leq |B|$ for injectivity.

**Question 2 (Verification):**
Let $A = \{x, y, z\}$ and $B = \{1, 2\}$. Define $f: A \to B$ by $f(x)=1$, $f(y)=2$, $f(z)=1$. Is $f$ surjective? Explain.

**Answer 2:**
Yes, $f$ is surjective. The codomain is $B = \{1, 2\}$.
*   For the element $1 \in B$, we have $f(x) = 1$ and $f(z) = 1$. So, $1$ is mapped to.
*   For the element $2 \in B$, we have $f(y) = 2$. So, $2$ is mapped to.
Since every element in the codomain $B$ is mapped to by at least one element in the domain $A$, the function $f$ is surjective. This demonstrates the definition of surjectivity and ties into **CO2** by satisfying $|A| \geq |B|$ (3 $\geq$ 2).

**Question 3 (Bijectivity and Inverses):**
Let $S = \{1, 2, 3, 4\}$ and $T = \{a, b, c, d\}$. Define $g: S \to T$ by $g(1)=b$, $g(2)=a$, $g(3)=d$, $g(4)=c$.
a) Is $g$ injective?
b) Is $g$ surjective?
c) Is $g$ bijective?
d) If $g$ is bijective, what is its inverse function $g^{-1}: T \to S$?

**Answer 3:**
a) **Injectivity:** Yes, $g$ is injective. All elements in the domain $S$ are distinct, and their images in $T$ are also distinct: $g(1)=b$, $g(2)=a$, $g(3)=d$, $g(4)=c$. No two elements from $S$ map to the same element in $T$.
b) **Surjectivity:** Yes, $g$ is surjective. The codomain is $T=\{a, b, c, d\}$. Each element in $T$ is indeed the image of some element in $S$.
c) **Bijectivity:** Yes, $g$ is bijective because it is both injective and surjective. This also aligns with $|S| = |T| = 4$, as expected for a bijection. This is important for **CO2**.
d) **Inverse Function:** Since $g$ is bijective, it has an inverse function $g^{-1}: T \to S$. The inverse function maps each element in the codomain back to its unique pre-image in the domain.
$g^{-1}(a) = 2$ (because $g(2)=a$)
$g^{-1}(b) = 1$ (because $g(1)=b$)
$g^{-1}(c) = 4$ (because $g(4)=c$)
$g^{-1}(d) = 3$ (because $g(3)=d$)
The existence of an inverse is a key property of bijections, hinting at concepts in **CO3** and **CO6**.

Keep practicing these ideas, and you'll find these concepts become second nature! They are fundamental building blocks for so much of what we do in discrete mathematics.
