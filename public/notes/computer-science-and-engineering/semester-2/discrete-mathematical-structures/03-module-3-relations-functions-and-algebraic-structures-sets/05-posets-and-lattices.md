---
title: "Posets and Lattices"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 3: Relations, Functions and Algebraic Structures: Sets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b600c"
status: "completed"
scrapedAt: "2026-05-20T16:32:27.262Z"
---
# Module 3: Relations, Functions and Algebraic Structures: Sets

## Topic: Posets and Lattices

**(Professor's Introduction)**

Hello everyone! Welcome back to Discrete Mathematical Structures. In our previous sessions, we delved into the foundational building blocks of discrete mathematics: sets, relations, and functions. Today, we're going to build upon that knowledge and explore a really fascinating area: **Posets and Lattices**. These concepts are absolutely crucial not only for understanding more advanced topics in mathematics but also have significant applications in computer science, particularly in areas like data structures, program analysis, and even artificial intelligence.

Think about it, in our daily lives, we're constantly comparing things, right? We compare prices, we rank things by preference, we organize information hierarchically. Posets and Lattices give us a formal way to describe and analyze these kinds of orderings.

Our journey today will focus on understanding what makes an order "good" or "structured" in a mathematical sense. We'll start by defining what a **partially ordered set (poset)** is, and then we'll move on to a special kind of poset called a **lattice**. By the end of this topic, you'll be able to:

*   **Define and identify partially ordered sets (posets).** (This directly relates to **CO3** and **CO4** where we describe concepts of sets and relations, and **CO1** if we think about the logical conditions defining these structures.)
*   **Understand and construct Hasse diagrams, a visual representation of posets.** (Again, **CO3**, **CO4**, and helps visualize relations.)
*   **Define and identify lattices, which are posets with specific "joining" and "meeting" properties.** (This is a core part of **CO3** and **CO4** focusing on algebraic structures.)
*   **Recognize key elements within posets and lattices, such as minimal/maximal elements, least/greatest elements, upper bounds, lower bounds, least upper bounds (supremums), and greatest lower bounds (infimums).** (Essential for both **CO3** and **CO4**.)
*   **Understand the connection between posets and lattices, and how the structure of a lattice allows for unique solutions to certain "joining" and "meeting" problems.** (This is where the real analytical power of these concepts comes in, touching on **CO1** and the deeper understanding required by **CO3** and **CO4**.)

So, let's dive in!

---

### 1. Ordered Sets: Beyond Simple Comparisons

We're all familiar with the usual order on numbers, like $1 < 2 < 3$. This is a **total order** because for any two distinct numbers, one is always less than the other. However, not all orderings are like this. Consider the relationship "is a subset of" ($\subseteq$) for sets.

If we have sets $A = \{1, 2\}$ and $B = \{2, 3\}$, is $A \subseteq B$? No. Is $B \subseteq A$? No. So, in this case, neither set is "less than" the other in the subset sense. But what if we had $C = \{1, 2, 3\}$? Then $A \subseteq C$ and $B \subseteq C$. Here, we have a comparison, but it's not a "total" comparison because $A$ and $B$ are incomparable.

This is where the concept of a **partially ordered set**, or **poset**, comes in. A poset is essentially a set equipped with a relation that is reflexive, antisymmetric, and transitive. These properties are familiar from our discussion on relations, but here they define a specific *kind* of ordering.

#### Definition: Partially Ordered Set (Poset)

A **partially ordered set** (or **poset**) is a pair $(S, \preceq)$, where $S$ is a set and $\preceq$ is a binary relation on $S$ satisfying the following properties for all $a, b, c \in S$:

1.  **Reflexivity:** $a \preceq a$ (Every element is related to itself).
2.  **Antisymmetry:** If $a \preceq b$ and $b \preceq a$, then $a = b$ (If two elements are related in both directions, they must be the same element).
3.  **Transitivity:** If $a \preceq b$ and $b \preceq c$, then $a \preceq c$ (If we can chain relations, the first element is related to the last).

**Think about it:** These are the exact properties we discussed for defining a **partial order relation**. So, a poset is simply a set with a partial order relation.

**Example 1: The Subset Relation**
Let $S$ be the power set of $\{1, 2, 3\}$, i.e., $S = \{\emptyset, \{1\}, \{2\}, \{3\}, \{1,2\}, \{1,3\}, \{2,3\}, \{1,2,3\}\}$. The relation $\preceq$ is the subset relation ($\subseteq$).

*   **Reflexivity:** Is any set $A \subseteq A$? Yes, always.
*   **Antisymmetry:** If $A \subseteq B$ and $B \subseteq A$, does it mean $A = B$? Yes, this is a fundamental property of sets.
*   **Transitivity:** If $A \subseteq B$ and $B \subseteq C$, does it mean $A \subseteq C$? Yes, also a fundamental property.

So, $(\mathcal{P}(\{1, 2, 3\}), \subseteq)$ is a poset. Notice here that $\{1\}$ and $\{2\}$ are incomparable because neither $\{1\} \subseteq \{2\}$ nor $\{2\} \subseteq \{1\}$. This is why it's a *partial* order.

**Example 2: Divisibility Relation**
Consider the set of positive integers $S = \{1, 2, 3, 4, 6, 12\}$. Let the relation $\preceq$ be "divides" (denoted by $|$). So, $a \preceq b$ if $a$ divides $b$.

*   **Reflexivity:** Does $a$ divide $a$? Yes, every integer divides itself.
*   **Antisymmetry:** If $a | b$ and $b | a$, then $a=b$. Since we're dealing with positive integers, if $a$ divides $b$, then $b = ka$ for some positive integer $k$. If $b$ divides $a$, then $a = lb$ for some positive integer $l$. Substituting, $a = l(ka) = (lk)a$. Since $a$ is positive, $lk=1$. As $k, l$ are positive integers, this implies $k=1$ and $l=1$, so $a=b$.
*   **Transitivity:** If $a | b$ and $b | c$, then $a | c$. If $b = ka$ and $c = lb$, then $c = l(ka) = (lk)a$, so $a | c$.

Thus, $(S, |)$ is a poset. In this poset, $2 \preceq 4$ and $3 \preceq 6$, but $2$ and $3$ are incomparable, as is $4$ and $6$.

**Connection to CO3 & CO4:** This definition of a poset directly supports **CO3** and **CO4** by describing a specific type of relation that structures a set. The properties (reflexivity, antisymmetry, transitivity) are key characteristics of such relations.

---

### 2. Visualizing Posets: Hasse Diagrams

When dealing with posets, especially for smaller sets, visualizing the relationships can be incredibly helpful. We use a special type of diagram called a **Hasse diagram**. The idea is to simplify the representation of the partial order by removing redundant elements and drawing arrows in a specific way.

#### Constructing a Hasse Diagram:

To draw a Hasse diagram for a poset $(S, \preceq)$:

1.  **Draw a node for each element in $S$.**
2.  **For any relation $a \preceq b$ where $a \neq b$:**
    *   If there's an element $c$ such that $a \preceq c$ and $c \preceq b$, and $a \neq c, c \neq b$, then the relation $a \preceq b$ is *implied* by transitivity. We *omit* the direct arrow from $a$ to $b$. We only draw direct connections for *covering relations*.
    *   A covering relation $a \prec b$ exists if $a \preceq b$, $a \neq b$, and there is *no* element $c$ in $S$ such that $a \preceq c \preceq b$ and $a \neq c, c \neq b$.
3.  **Draw an upward line segment (like an arrow) from $a$ to $b$ if $a \prec b$ (i.e., $b$ covers $a$).**
4.  **Omit the arrows:** By convention, we draw the line segment going *upwards* from $a$ to $b$, so the direction of the relation is implied. We also omit reflexivity arrows (an element related to itself) and antisymmetry is usually clear from the structure.

**Analogy:** Think of a family tree. The parent-child relationship is transitive (if Mom is a parent of Dad, and Dad is a parent of you, Mom is a grandparent of you). A Hasse diagram is like drawing direct parent-child links, but not explicitly showing grandparent links, as those are implied.

**Example 1 Revisited: Subset Relation (Hasse Diagram)**
Let's draw the Hasse diagram for $(\mathcal{P}(\{1, 2\}), \subseteq)$. The set is $S = \{\emptyset, \{1\}, \{2\}, \{1,2\}\}$.

The relations are:
$\emptyset \subseteq \{1\}$, $\emptyset \subseteq \{2\}$, $\emptyset \subseteq \{1,2\}$
$\{1\} \subseteq \{1,2\}$
$\{2\} \subseteq \{1,2\}$

Are these covering relations?
*   $\emptyset \prec \{1\}$? Yes, no set is between them.
*   $\emptyset \prec \{2\}$? Yes.
*   $\emptyset \prec \{1,2\}$? No, because $\emptyset \subseteq \{1\} \subseteq \{1,2\}$. So, the $\emptyset$ to $\{1,2\}$ link is omitted.
*   $\{1\} \prec \{1,2\}$? Yes.
*   $\{2\} \prec \{1,2\}$? Yes.

The Hasse diagram would have $\emptyset$ at the bottom. From $\emptyset$, there would be upward lines to $\{1\}$ and $\{2\}$. From $\{1\}$ and $\{2\}$, there would be upward lines to $\{1,2\}$.

```
      {1,2}
      /   \
     /     \
   {1}     {2}
     \     /
      \   /
       \ /
        ∅
```

This is much cleaner than drawing all the subset relations with arrows!

**Example 2 Revisited: Divisibility Relation (Hasse Diagram)**
For $(S, |)$ where $S = \{1, 2, 3, 4, 6, 12\}$:

Let's identify covering relations:
*   $1 \prec 2$ (2 divides 1 is false, 1 divides 2 true, no element between them.)
*   $1 \prec 3$
*   $2 \prec 4$
*   $2 \prec 6$
*   $3 \prec 6$
*   $3 \prec 12$? No, $3|6$ and $6|12$, so $3 \prec 12$ is implied by $3 \prec 6 \prec 12$.
*   $4 \prec 12$
*   $6 \prec 12$

The Hasse diagram:

```
      12
     /  \
    /    \
   6      4
  / \    /
 /   \  /
3     2
 \   /
  \ /
   1
```
(Note: The lines from 2 to 6 and from 3 to 6 are present. The line from 4 to 12 and 6 to 12 are present. The crucial aspect is to correctly identify covering relations.)

Let's draw it more accurately, focusing on upward direction and covering:

```
        12
       /  \
      /    \
     6      4
    / \    /
   /   \  /
  3     2
   \   /
    \ /
     1
```
In this diagram:
*   1 is at the bottom. Lines go up from 1 to 2 and 1 to 3.
*   From 2, a line goes up to 4 and 2 to 6.
*   From 3, a line goes up to 6 and 3 to 12 (wait, this is incorrect, 3 does not cover 12 directly).
*   Let's recheck covering relations carefully:
    *   $1|2$, no element between 1 and 2 in $S$ dividing the successor. $1 \prec 2$.
    *   $1|3$, $1 \prec 3$.
    *   $1|4$? No.
    *   $2|4$, no element between them in $S$. $2 \prec 4$.
    *   $2|6$, no element between them in $S$. $2 \prec 6$.
    *   $3|6$, $3 \prec 6$.
    *   $3|12$? Yes. $3|6$ and $6|12$. So $3 \prec 12$ is NOT a covering relation.
    *   $4|12$, $4 \prec 12$.
    *   $6|12$, $6 \prec 12$.

Correct Hasse Diagram for divisibility:

```
        12
       /  \
      /    \
     6      4
    / \    /
   /   \  /
  3     2
   \   /
    \ /
     1
```
Wait, still getting it wrong. Let's trace the implications.
If $a \prec b$, then $b/a$ is a prime number in the divisibility of integers, or the smallest "step" up.

*   $1 \prec 2$ (2/1 = 2)
*   $1 \prec 3$ (3/1 = 3)
*   $2 \prec 4$ (4/2 = 2)
*   $2 \prec 6$? (6/2 = 3) Yes.
*   $3 \prec 6$? (6/3 = 2) Yes.
*   $3 \prec 12$? No, because $3 \prec 6 \prec 12$.
*   $4 \prec 12$? (12/4 = 3) Yes.
*   $6 \prec 12$? (12/6 = 2) Yes.

So the correct Hasse diagram is:
```
        12
       /  \
      /    \
     6      4
    / \    /
   /   \  /
  3     2
   \   /
    \ /
     1
```
This is still looking a bit messy. Let's make sure the structure reflects the covering:

```
        12
       /  \
      /    \
     6      4
    / \    /
   3   2--/
    \ /
     1
```
This is still not quite right as it doesn't show the relation 2 divides 6.

Let's redraw, ensuring upward flow:

```
        12
       /  \
      /    \
     6      4
    / \    /
   /   \  /
  3     2
   \   /
    \ /
     1
```
This drawing is difficult to convey in text. The key is:
*   1 is the lowest.
*   Lines go up from 1 to 2 and 1 to 3.
*   Lines go up from 2 to 4 and 2 to 6.
*   Lines go up from 3 to 6.
*   Lines go up from 4 to 12.
*   Lines go up from 6 to 12.

Notice that $3$ and $4$ are incomparable. Also, $2$ and $3$ are incomparable. The path $1 \to 3 \to 12$ means $1 \prec 12$ is implied and $3 \prec 12$ is implied. The path $1 \to 2 \to 6 \to 12$ means $1 \prec 12$, $2 \prec 12$, and $6 \prec 12$ are implied.

**Remember this:** Hasse diagrams are drawn to visually represent only the *covering relations*. Any relation $a \preceq b$ where there's an intermediate element $c$ such that $a \preceq c \preceq b$ is *not* shown by a direct line.

**Connection to CO3 & CO4:** Hasse diagrams are a powerful tool for understanding the structure of posets, aiding in the conceptual grasp of relations and ordering as required by **CO3** and **CO4**.

---

### 3. Special Elements in Posets

In a poset, certain elements have special significance, especially when we think about "minimums" or "maximums."

#### 3.1 Minimal and Maximal Elements

*   **Minimal Element:** An element $m \in S$ is a **minimal element** of $(S, \preceq)$ if there is no element $a \in S$ such that $a \preceq m$ and $a \neq m$. In simpler terms, nothing comes "before" a minimal element in the order.
*   **Maximal Element:** An element $M \in S$ is a **maximal element** of $(S, \preceq)$ if there is no element $b \in S$ such that $M \preceq b$ and $M \neq b$. Nothing comes "after" a maximal element in the order.

**Important Note:** A poset can have multiple minimal or maximal elements, or none at all.

**Example (Divisibility):** In $(S, |)$ with $S = \{1, 2, 3, 4, 6, 12\}$:
*   **Minimal Element:** The only element $m$ such that no other element in $S$ divides $m$ (except $m$ itself) is $1$. So, $1$ is the unique minimal element.
*   **Maximal Element:** The only element $M$ such that no other element in $S$ is a multiple of $M$ (except $M$ itself) is $12$. So, $12$ is the unique maximal element.

**Example (Subset Relation):** In $(\mathcal{P}(\{1, 2\}), \subseteq)$:
*   $S = \{\emptyset, \{1\}, \{2\}, \{1,2\}\}$.
*   **Minimal Element:** $\emptyset$ is a minimal element because no other set in $S$ is a subset of $\emptyset$. It's the only minimal element.
*   **Maximal Element:** $\{1,2\}$ is a maximal element because no other set in $S$ has $\{1,2\}$ as a subset. It's the only maximal element.

**Example (Incomparable Elements):** Let $S = \{a, b, c\}$ with relations $a \preceq c$ and $b \preceq c$.
The Hasse diagram is:
```
    c
   / \
  a   b
```
*   **Minimal Elements:** $a$ and $b$ are minimal elements. Nothing is "below" them.
*   **Maximal Element:** $c$ is the only maximal element. Nothing is "above" it.

**Connection to CO3 & CO4:** Identifying minimal and maximal elements is a key step in understanding the structure of posets, directly contributing to the understanding of relations and algebraic systems as required by **CO3** and **CO4**.

#### 3.2 Least Element and Greatest Element

These are special cases where there's a *unique* element that is "less than or equal to" or "greater than or equal to" all other elements.

*   **Least Element:** An element $l \in S$ is the **least element** of $(S, \preceq)$ if $l \preceq x$ for all $x \in S$. If a least element exists, it is unique. A least element, if it exists, is always the unique minimal element.
*   **Greatest Element:** An element $g \in S$ is the **greatest element** of $(S, \preceq)$ if $x \preceq g$ for all $x \in S$. If a greatest element exists, it is unique. A greatest element, if it exists, is always the unique maximal element.

**Example (Divisibility):** In $(S, |)$ with $S = \{1, 2, 3, 4, 6, 12\}$:
*   $1$ is the least element because $1$ divides every element in $S$.
*   $12$ is the greatest element because every element in $S$ divides $12$.

**Example (Subset Relation):** In $(\mathcal{P}(\{1, 2\}), \subseteq)$:
*   $\emptyset$ is the least element because $\emptyset$ is a subset of every set in $S$.
*   $\{1,2\}$ is the greatest element because $\{1,2\}$ is a superset of every set in $S$.

**Example (Incomparable Elements):**
Consider the poset $S = \{a, b, c\}$ with $a \preceq c$ and $b \preceq c$.
*   There is no least element because neither $a \preceq b$ nor $b \preceq a$.
*   There is no greatest element because nothing is greater than or equal to both $a$ and $b$ in a way that $a$ and $b$ are "less than" it. Wait, $c$ is greater than $a$ and $c$ is greater than $b$. So $c$ IS the greatest element here. Let's correct the definition of incomparable.
Ah, $a$ and $b$ are incomparable. The question is whether there is a *least* element. For a least element $l$, it must satisfy $l \preceq x$ for *all* $x$.
In our example $S = \{a, b, c\}$ with $a \preceq c$ and $b \preceq c$, $a$ is not the least element because $a \not\preceq b$. $b$ is not the least element because $b \not\preceq a$. So there is no least element.
What about the greatest element? $g$ must satisfy $x \preceq g$ for all $x$. Here, $a \preceq c$ and $b \preceq c$. So $c$ is the greatest element.

**Correction for the above example:**
$S = \{a, b, c\}$ with $a \preceq c$ and $b \preceq c$. (No other relations besides implied ones: $a \preceq a, b \preceq b, c \preceq c, a \preceq c, b \preceq c$).
*   **Minimal elements:** $a, b$. (Since nothing else is $\preceq a$ or $\preceq b$).
*   **Maximal element:** $c$. (Since $c \preceq x$ implies $x=c$).
*   **Least element:** Does not exist. Neither $a \preceq b$ nor $b \preceq a$.
*   **Greatest element:** $c$. ($a \preceq c$ and $b \preceq c$).

**Connection to CO3 & CO4:** The existence and uniqueness of least and greatest elements are crucial properties of structured sets and algebraic systems, directly aligning with **CO3** and **CO4**.

---

### 4. Upper and Lower Bounds

When we have a subset of elements within a poset, we can talk about elements that are "above" or "below" all of them.

*   **Upper Bound:** For a subset $A \subseteq S$ of a poset $(S, \preceq)$, an element $u \in S$ is an **upper bound** of $A$ if $a \preceq u$ for all $a \in A$.
*   **Lower Bound:** For a subset $A \subseteq S$, an element $l \in S$ is a **lower bound** of $A$ if $l \preceq a$ for all $a \in A$.

**Example (Divisibility):** Let $S = \{1, 2, 3, 4, 6, 12\}$ with divisibility.
Consider the subset $A = \{2, 3\}$.
*   **Upper bounds of A:** What elements in $S$ are divisible by both $2$ and $3$? The common multiples are $6$ and $12$. So, $\{6, 12\}$ are the upper bounds of $A$.
*   **Lower bounds of A:** What elements in $S$ divide both $2$ and $3$? Only $1$. So, $\{1\}$ is the set of lower bounds of $A$.

Consider the subset $B = \{4, 6\}$.
*   **Upper bounds of B:** Multiples of $4$ and $6$ in $S$: $12$. So, $12$ is the only upper bound.
*   **Lower bounds of B:** Divisors of $4$ and $6$ in $S$: $1$ and $2$. So, $\{1, 2\}$ are the lower bounds of $B$.

**Connection to CO3 & CO4:** Understanding bounds is fundamental to defining lattices and is a core aspect of the structural properties covered in **CO3** and **CO4**.

#### 4.1 Least Upper Bound (Supremum) and Greatest Lower Bound (Infimum)

These are the "best" or "tightest" bounds.

*   **Least Upper Bound (LUB) or Supremum:** If a subset $A$ has a set of upper bounds $U$, and if there is an element $s \in U$ such that $s \preceq u$ for all $u \in U$, then $s$ is the **least upper bound** (LUB) or **supremum** of $A$. It's the "smallest" of all the upper bounds.
*   **Greatest Lower Bound (GLB) or Infimum:** If a subset $A$ has a set of lower bounds $L$, and if there is an element $g \in L$ such that $l \preceq g$ for all $l \in L$, then $g$ is the **greatest lower bound** (GLB) or **infimum** of $A$. It's the "largest" of all the lower bounds.

**Important Note:** A subset might have no upper/lower bounds, or many upper/lower bounds, but if a LUB/GLB exists, it's unique.

**Example (Divisibility):** Let $S = \{1, 2, 3, 4, 6, 12\}$ with divisibility.
Consider $A = \{2, 3\}$.
*   Upper bounds: $\{6, 12\}$. Which is smaller (in the divisibility sense)? $6 \preceq 12$. So, $6$ is the LUB of $\{2, 3\}$.
*   Lower bounds: $\{1\}$. The only lower bound is $1$. So, $1$ is the GLB of $\{2, 3\}$.

Consider $B = \{4, 6\}$.
*   Upper bounds: $\{12\}$. The only upper bound is $12$. So, $12$ is the LUB of $\{4, 6\}$.
*   Lower bounds: $\{1, 2\}$. Which is larger (in the divisibility sense)? $1 \preceq 2$. So, $2$ is the GLB of $\{4, 6\}$.

**Example (Subset Relation):** $S = \{\emptyset, \{1\}, \{2\}, \{1,2\}\}$ with $\subseteq$.
Consider $A = \{\{1\}, \{2\}\}$.
*   Upper bounds: What sets in $S$ contain both $\{1\}$ and $\{2\}$? Only $\{1,2\}$. So, $\{1,2\}$ is the only upper bound. Hence, LUB of $A$ is $\{1,2\}$.
*   Lower bounds: What sets in $S$ are subsets of both $\{1\}$ and $\{2\}$? Only $\emptyset$. So, $\emptyset$ is the only lower bound. Hence, GLB of $A$ is $\emptyset$.

**Connection to CO3 & CO4:** Supremum and infimum are foundational concepts for lattices, directly linking to **CO3** and **CO4**'s focus on algebraic structures and their properties. These concepts are crucial for understanding how operations are defined in lattices.

---

### 5. Lattices: Posets with Structure

Now we bring together the concepts of posets and bounds. A **lattice** is a very special kind of poset.

#### Definition: Lattice

A **lattice** is a poset $(L, \preceq)$ in which every subset of two elements has a unique least upper bound (supremum) and a unique greatest lower bound (infimum).
In other words, for any two elements $a, b \in L$, there exist elements $s \in L$ and $g \in L$ such that:
*   $s = \text{LUB}(a, b)$ (denoted as $a \lor b$ or $a \cup b$)
*   $g = \text{GLB}(a, b)$ (denoted as $a \land b$ or $a \cap b$)

These operations, $\lor$ (join) and $\land$ (meet), when they exist for all pairs of elements, turn the poset into a lattice.

**Crucial Point:** A poset is a lattice *if and only if* every pair of elements has both a unique LUB and a unique GLB.

**Checking if a Poset is a Lattice:**
To determine if a poset is a lattice, we must check if every pair of elements has both a LUB and a GLB. For finite posets, this can be done by:
1.  Examining all pairs of elements.
2.  For each pair, finding all upper bounds and checking for a unique LUB.
3.  For each pair, finding all lower bounds and checking for a unique GLB.

**Example (Divisibility):** $(S, |)$ where $S = \{1, 2, 3, 4, 6, 12\}$.
Let's check a few pairs:
*   Pair $\{2, 3\}$:
    *   Upper bounds: $\{6, 12\}$. LUB is $6$.
    *   Lower bounds: $\{1\}$. GLB is $1$.
    Since both exist and are unique, this pair satisfies the lattice property.
*   Pair $\{4, 6\}$:
    *   Upper bounds: $\{12\}$. LUB is $12$.
    *   Lower bounds: $\{1, 2\}$. GLB is $2$.
    This pair also satisfies the lattice property.

You would need to check all pairs: $\{1,2\}, \{1,3\}, \{1,4\}, \dots, \{6,12\}$. If all pairs satisfy the condition, then $(S, |)$ is a lattice. In this specific case, it *is* a lattice.

**Example (Subset Relation):** $(\mathcal{P}(\{1, 2\}), \subseteq)$.
Let's check pairs:
*   $\{\{1\}, \{2\}\}$: LUB is $\{1,2\}$, GLB is $\emptyset$. Both exist.
*   $\{\emptyset, \{1\}\}$: LUB is $\{1\}$, GLB is $\emptyset$. Both exist.
*   $\{\{1\}, \{1,2\}\}$: LUB is $\{1,2\}$, GLB is $\{1\}$. Both exist.

This poset $(\mathcal{P}(\{1, 2\}), \subseteq)$ *is* a lattice. The operations $\lor$ correspond to set union ($\cup$) and $\land$ correspond to set intersection ($\cap$).

**Example (Not a Lattice):**
Consider the poset $(S, \preceq)$ with $S = \{a, b, c\}$ and $a \preceq c$, $b \preceq c$.
Hasse diagram:
```
    c
   / \
  a   b
```
*   Pair $\{a, b\}$:
    *   Upper bounds: $c$. Is $c$ the LUB? Yes, because it's the only upper bound.
    *   Lower bounds: There are no elements $x$ such that $x \preceq a$ and $x \preceq b$ (other than $a$ and $b$ themselves, if we are looking for elements *outside* the pair, but the definition includes elements in S). Let's be precise: for $l$ to be a lower bound of $\{a,b\}$, $l \preceq a$ and $l \preceq b$. In this diagram, the only such element is $\emptyset$ if we were to include it, but we only have $a,b,c$. If we assume $a, b$ are minimal, then they have no lower bounds other than themselves implicitly. This structure does not satisfy the condition of having a *common* lower bound for $a$ and $b$ if $a$ and $b$ are incomparable and there's no element below both.
    Let's rephrase: $l$ is a lower bound of $A$ if $l \preceq a$ for all $a \in A$. For $A=\{a,b\}$, we need $l \preceq a$ AND $l \preceq b$. In this poset, no element $x \in \{a,b,c\}$ satisfies $x \preceq a$ and $x \preceq b$ simultaneously, besides potentially an implicit element below $a$ and $b$. If we take the set $S = \{a, b, c\}$ as given, and the relations are only $a \preceq c$ and $b \preceq c$ (and reflexivity), then there are NO lower bounds for the set $\{a, b\}$. If there are no lower bounds, there cannot be a greatest lower bound.

Therefore, $(S, \preceq)$ with $S = \{a, b, c\}$ and $a \preceq c, b \preceq c$ is **not** a lattice because the pair $\{a, b\}$ does not have a lower bound (and thus no GLB).

**Connection to CO3 & CO4:** Lattices are a fundamental class of algebraic structures. Understanding when a poset forms a lattice is central to **CO3** and **CO4**. The existence of join ($\lor$) and meet ($\land$) operations is a defining characteristic.

---

### 6. Properties of Lattices

Lattices, by virtue of being posets with the additional join/meet structure, inherit many properties. The operations $\lor$ and $\land$ behave nicely. For any elements $a, b$ in a lattice $L$:

1.  **Commutativity:**
    *   $a \lor b = b \lor a$
    *   $a \land b = b \land a$
2.  **Associativity:**
    *   $(a \lor b) \lor c = a \lor (b \lor c)$
    *   $(a \land b) \land c = a \land (b \land c)$
3.  **Idempotence:**
    *   $a \lor a = a$
    *   $a \land a = a$
4.  **Absorption Laws:**
    *   $a \lor (a \land b) = a$
    *   $a \land (a \lor b) = a$

These properties make lattices behave like generalized "and" and "or" operations. The absorption laws are particularly important as they link the two operations and the underlying partial order.

**Connection to CO3 & CO4:** These algebraic properties are exactly what **CO3** and **CO4** are about – describing the structure and behavior of algebraic systems like lattices.

---

### 7. Types of Lattices

Not all lattices are the same. Some have more structure than others.

#### 7.1 Bounded Lattices

A lattice $(L, \preceq)$ is called **bounded** if it has a least element (denoted by $0$ or $\mathbf{0}$) and a greatest element (denoted by $1$ or $\mathbf{1}$).
*   $0 \preceq x$ for all $x \in L$.
*   $x \preceq 1$ for all $x \in L$.

In a bounded lattice, for any element $a$:
*   $a \lor 0 = a$ (0 is the identity for $\lor$)
*   $a \land 1 = a$ (1 is the identity for $\land$)
*   $a \lor 1 = 1$
*   $a \land 0 = 0$

**Example:** $(\mathcal{P}(X), \subseteq)$ is a bounded lattice with $\emptyset$ as the least element ($0$) and $X$ as the greatest element ($1$). The operations are $\cup$ and $\cap$.

#### 7.2 Distributive Lattices

A lattice $(L, \preceq)$ is **distributive** if the following two distributive laws hold for all $a, b, c \in L$:
*   $a \land (b \lor c) = (a \land b) \lor (a \land c)$
*   $a \lor (b \land c) = (a \lor b) \land (a \lor c)$

If one of these holds, the other also holds.

**Example:**
*   $(\mathcal{P}(X), \subseteq)$ is a distributive lattice. Set intersection distributes over union, and set union distributes over intersection.
*   The divisibility lattice $(S, |)$ with $S = \{1, 2, 3, 4, 6, 12\}$ is distributive. For example, $6 \land (4 \lor 3)$? What is $4 \lor 3$? LUB of 4 and 3 is 12. So $6 \land 12 = 6$.
    Now check the other side: $(6 \land 4) \lor (6 \land 3)$. $6 \land 4$ (GLB of 6 and 4) is 2. $6 \land 3$ (GLB of 6 and 3) is 3. So, $(2) \lor (3)$. LUB of 2 and 3 is 6.
    Since $6 = 6$, it holds for this case.

A lattice that is *not* distributive is the "Birkhoff diamond" or $M_3$, which is a lattice with 5 elements.

#### 7.3 Complemented Lattices

A **bounded** lattice $(L, \preceq)$ is **complemented** if for every element $a \in L$, there exists an element $a' \in L$ (called a complement of $a$) such that:
*   $a \lor a' = 1$ (where $1$ is the greatest element)
*   $a \land a' = 0$ (where $0$ is the least element)

If every element has a unique complement, the lattice is called **uniquely complemented**.

**Example:**
*   $(\mathcal{P}(X), \subseteq)$ is a complemented lattice. The complement of a set $A$ is its set complement $X \setminus A$.
    *   $A \cup (X \setminus A) = X$ (which is $1$)
    *   $A \cap (X \setminus A) = \emptyset$ (which is $0$)
    The complement is unique for each set.

**Connection to CO3 & CO4:** These different types of lattices (bounded, distributive, complemented) highlight the rich structure of algebraic systems. Understanding them is key to the goals of **CO3** and **CO4**. Distributivity, in particular, is a strong structural property that simplifies many calculations and has implications in logic and circuit design.

---

### 8. Applications and Why This Matters

**For Computer Scientists:**

*   **Data Structures:** Concepts of orderings are fundamental in binary search trees, heaps, and other data structures. Lattices can model hierarchical data.
*   **Program Analysis:** Lattices are used to represent the state space of a program for static analysis. For example, in abstract interpretation, we might use a lattice of possible values to determine if a program is safe. The join operation can represent the merging of program paths.
*   **Type Systems:** Lattices can model the relationships between data types in programming languages. For instance, in object-oriented programming, inheritance can form a lattice.
*   **Formal Logic and Circuit Design:** Distributive, complemented lattices are closely related to Boolean algebras, which are the mathematical foundation for digital logic gates and circuits.

**For Mathematicians:**
Lattices are a core subject in order theory and abstract algebra, with connections to topology, set theory, and category theory.

**Connecting to Course Outcomes:**

*   **CO1 (Logical Reasoning & Proofs):** Understanding the properties of posets and lattices requires careful logical reasoning. Proving that a given structure is a lattice or that it satisfies certain lattice properties involves constructing logical arguments.
*   **CO2 (Counting Principles):** While not directly about counting, understanding the structure of posets and lattices can help in analyzing combinatorial objects where ordering is important. For example, counting the number of different posets on a small set is a combinatorial problem.
*   **CO3 & CO4 (Sets, Relations, Functions, Algebraic Systems):** This entire topic is a deep dive into a specific type of algebraic structure derived from sets and relations. It directly addresses the core of these outcomes by describing, defining, and analyzing the properties of posets and lattices.

---

### Sample Questions and Answers

Here are some questions to test your understanding, covering both conceptual aspects and how they might appear in exams.

**Q1. Conceptual Understanding:**
Define a poset and list its three defining properties. Give an example of a set and relation that forms a poset and explain why it satisfies the properties.
*   **Answer:** A poset is a pair $(S, \preceq)$ where $S$ is a set and $\preceq$ is a binary relation on $S$ satisfying:
    1.  **Reflexivity:** $a \preceq a$ for all $a \in S$.
    2.  **Antisymmetry:** If $a \preceq b$ and $b \preceq a$, then $a = b$.
    3.  **Transitivity:** If $a \preceq b$ and $b \preceq c$, then $a \preceq c$.
    *   **Example:** Let $S = \{1, 2, 3, 4, 5, 6\}$ and $\preceq$ be the relation "divides" ($|$).
        *   Reflexivity: $a | a$ is true for any integer $a$.
        *   Antisymmetry: If $a | b$ and $b | a$, for positive integers, this implies $a=b$.
        *   Transitivity: If $a | b$ and $b | c$, then $b = ka$ and $c = lb$ for some integers $k, l$. Then $c = l(ka) = (lk)a$, so $a | c$.
    Thus, $(S, |)$ is a poset.

**Q2. Hasse Diagrams and Bounds:**
Consider the poset $(\mathbb{Z}^+, |)$, where $\mathbb{Z}^+$ is the set of positive integers and $|$ denotes divisibility.
a) Draw the Hasse diagram for the subset $S = \{2, 3, 4, 6, 12\}$.
b) Identify the minimal element(s) and maximal element(s) in this subset.
c) Find the least upper bound (LUB) and greatest lower bound (GLB) for the subset $\{4, 6\}$.

*   **Answer:**
    a) Hasse Diagram for $\{2, 3, 4, 6, 12\}$:
        ```
            12
           /  \
          /    \
         6      4
        /
       /
      3    2
        \  /
         \/
        (No 1 as it's not in the subset)
        ```
        Let's be more precise about the relations within this subset, focusing on covering:
        *   $2 \prec 4$ (4/2=2)
        *   $2 \prec 6$ (6/2=3)
        *   $3 \prec 6$ (6/3=2)
        *   $4 \prec 12$ (12/4=3)
        *   $6 \prec 12$ (12/6=2)
        The Hasse diagram would show:
        ```
            12
           /  \
          6    4
         /    /
        3    2
        ```
        (Arrows are implied upwards from child to parent, e.g., 3 is below 6, 2 is below 6 and 4, 6 and 4 are below 12).

    b) Minimal elements: $2$ and $3$ (since no other element in the subset divides them).
       Maximal elements: $12$ (since no other element in the subset is a multiple of it).

    c) For the subset $\{4, 6\}$:
       *   Upper bounds in $\{2, 3, 4, 6, 12\}$: The elements divisible by both 4 and 6 is only 12. So, upper bounds = $\{12\}$. The LUB is $12$.
       *   Lower bounds in $\{2, 3, 4, 6, 12\}$: The elements that divide both 4 and 6 are $2$. So, lower bounds = $\{2\}$. The GLB is $2$.

**Q3. Lattice Identification:**
Consider the power set of $\{a, b, c\}$, i.e., $\mathcal{P}(\{a, b, c\})$, with the subset relation $\subseteq$. Is this a lattice? If so, what are the operations for join and meet?
*   **Answer:** Yes, $(\mathcal{P}(\{a, b, c\}), \subseteq)$ is a lattice.
    *   For any two sets $A, B \in \mathcal{P}(\{a, b, c\})$, their least upper bound (LUB) is their union, $A \cup B$. The union is the smallest set in the power set that contains both $A$ and $B$.
    *   Their greatest lower bound (GLB) is their intersection, $A \cap B$. The intersection is the largest set in the power set that is a subset of both $A$ and $B$.
    Since every pair of sets has a unique LUB (union) and a unique GLB (intersection) within the power set, it forms a lattice.

**Q4. Distributivity Check:**
Is the lattice $(\mathcal{P}(\{1, 2\}), \subseteq)$ distributive? Justify your answer.
*   **Answer:** Yes, it is distributive. The operations are set union ($\cup$) and set intersection ($\cap$). We know from set theory that set intersection distributes over set union: $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ for any sets $A, B, C$. This satisfies the distributive law for lattices. The other distributive law, $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$, also holds for sets.

**Exam Tip:** Be comfortable drawing Hasse diagrams for small sets and identifying minimal/maximal elements, and LUB/GLB. For lattice identification, remember that *every pair* must have a LUB and GLB. Also, be ready to state the properties of lattices and identify types like bounded and distributive.

---

**(Professor's Closing Remarks)**

So, we've covered a lot of ground today, from the fundamental definition of a poset to the structured world of lattices. Remember, posets generalize our notion of "less than" or "before," while lattices impose a structure where we can always find a "least common successor" (join) and a "greatest common predecessor" (meet) for any pair of elements. These concepts are powerful tools for modeling order and structure, with direct ties to areas like logic, computer science theory, and data analysis.

Keep practicing drawing Hasse diagrams and identifying these key elements. The more you work with them, the more intuitive they will become. We'll build on this foundation in our next session, exploring more advanced structures.

Any questions before we wrap up?

---
