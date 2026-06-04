---
title: "Relations, Functions and Algebraic Structures: Sets"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 3: Relations, Functions and Algebraic Structures: Sets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b6008"
status: "completed"
scrapedAt: "2026-05-20T16:32:24.291Z"
---
# Module 3: Relations, Functions and Algebraic Structures: Sets

Welcome, everyone! In this module, we're going to embark on a journey into the fascinating world of **Sets**, **Relations**, and **Functions**. These are fundamental building blocks in discrete mathematics, and understanding them deeply will unlock our ability to analyze and construct many complex systems, especially in computer science.

Our main goal here is to get a firm grasp on what sets are, how we can relate them, and how functions map elements from one set to another. This knowledge directly contributes to **CO3: Describe the concepts of sets, relations, and functions, and recognize the properties and structures of algebraic systems...** and **CO4: Explain the concepts of sets, relations, functions, algebraic structures...** We'll be focusing on building our understanding (Knowledge Level K2) so we can later apply these concepts.

Let's dive in!

---

## 1. The Humble Beginning: What is a Set?

Think about a collection of distinct objects. That's essentially what a set is. It's a well-defined collection of distinct elements. The key words here are "well-defined" and "distinct."

*   **Well-defined:** This means that for any given object, we can unequivocally determine whether it belongs to the set or not. There's no ambiguity.
*   **Distinct:** Each element in a set is unique. You don't list the same element multiple times. For example, the set of letters in the word "BOOK" is {B, O, K}, not {B, O, O, K}.

### How Do We Represent Sets?

We typically use curly braces `{}` to denote sets.

*   **Listing Elements (Roster Method):** If we can list all the elements, we do so.
    *   Example: The set of vowels in the English alphabet is $A = \{a, e, i, o, u\}$.
    *   Example: The set of the first five positive integers is $B = \{1, 2, 3, 4, 5\}$.

*   **Set-Builder Notation:** When the set is too large to list, or the definition is more important than the explicit elements, we use this. It's like a rule that defines membership. The format is usually $\{x \mid \text{property of } x\}$.
    *   Example: The set of all even positive integers less than 10 can be written as $E = \{x \mid x \text{ is a positive integer and } x < 10 \text{ and } x \text{ is even}\}$. This is much more concise than listing them all, especially if the range was much larger.
    *   Grimaldi and Ramana (Chapter 2) emphasize this notation for its precision, especially when dealing with abstract mathematical objects.

### Important Sets to Know

There are some sets that are so fundamental, they have special symbols:

*   The set of **natural numbers**: $\mathbb{N} = \{1, 2, 3, \dots\}$ (Sometimes 0 is included, but in discrete math, we often start with 1 unless specified). This is our first encounter with a countably infinite set.
*   The set of **integers**: $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$.
*   The set of **rational numbers**: $\mathbb{Q} = \{p/q \mid p \in \mathbb{Z}, q \in \mathbb{Z}, q \neq 0\}$. Think fractions!
*   The set of **real numbers**: $\mathbb{R}$. This includes all rational and irrational numbers.
*   The **empty set**: $\emptyset$ or `{}`. This is a set with no elements. It's very important! Think of an empty box – it's still a box.

### What if an Element Belongs to a Set?

We use the symbol $\in$ to denote membership.
*   $a \in A$ means "$a$ is an element of set $A$."
*   $a \notin A$ means "$a$ is not an element of set $A$."

---

## 2. Comparing Sets: Size and Inclusion

Once we have sets, we often want to compare them. Two key ways are by looking at their *size* (cardinality) and by checking if one set is *contained* within another.

### Cardinality: How Many Elements?

The **cardinality** of a finite set is simply the number of distinct elements it contains. We denote it by $|A|$ or $n(A)$.

*   Example: If $S = \{\text{apple, banana, cherry}\}$, then $|S| = 3$.
*   Example: If $V = \{a, e, i, o, u\}$, then $|V| = 5$.
*   What about the empty set? $|\emptyset| = 0$. This makes sense, right? No elements, count is zero.

This concept of counting elements is crucial for **CO2: Apply fundamental counting principles...**

### Subset and Proper Subset: Containment Relationships

This is where things get really interesting, and it’s a concept that underpins how we structure data and systems.

*   **Subset:** Set $A$ is a **subset** of set $B$ if *every* element of $A$ is also an element of $B$. We write this as $A \subseteq B$.

    *   *Analogy:* Imagine you have a box of fruits ($B$). If you have a smaller bag of just apples ($A$) that came from that box, then the apples are a subset of the fruits in the box.
    *   Example: If $A = \{1, 3\}$ and $B = \{1, 2, 3, 4\}$, then $A \subseteq B$ because both 1 and 3 are in $B$.
    *   *Important Property:* Every set is a subset of itself. So, $A \subseteq A$.
    *   *Important Property:* The empty set is a subset of every set. $\emptyset \subseteq A$ for any set $A$. This is a bit like saying an empty collection of items is contained within any collection.

*   **Proper Subset:** Set $A$ is a **proper subset** of set $B$ if $A$ is a subset of $B$, *and* $A$ is not equal to $B$. This means $B$ must have at least one element that $A$ does not. We write this as $A \subset B$.

    *   *Analogy:* Using the fruit box again. If your bag of apples ($A$) is a subset of the fruit box ($B$), but the fruit box also contains bananas, then $A$ is a *proper* subset of $B$. If the box *only* contained apples, then $A$ would be a subset, but not a proper subset.
    *   Example: Using the previous sets $A = \{1, 3\}$ and $B = \{1, 2, 3, 4\}$, $A \subset B$ because $A \subseteq B$ and $B$ contains elements (2 and 4) that are not in $A$.

**Quick Recap (for exams and understanding):**
*   $A \subseteq B$ means: "If $x \in A$, then $x \in B$."
*   $A \subset B$ means: "$A \subseteq B$ AND $A \neq B$." (Or equivalently, "$A \subseteq B$ AND there exists at least one element $y \in B$ such that $y \notin A$").

This distinction between subset and proper subset is vital for understanding hierarchies and classifications in systems.

---

## 3. Combining Sets: Operations on Sets

Just like numbers can be added, subtracted, or multiplied, sets can be combined using various operations to create new sets. These operations are fundamental to building more complex sets from simpler ones.

### Union: Bringing Elements Together

The **union** of two sets $A$ and $B$ is the set containing all elements that are in $A$, or in $B$, or in both. We denote this by $A \cup B$.

*   *Analogy:* Imagine you have a collection of your favorite books ($A$) and your friend has a collection of their favorite books ($B$). The union of your collections ($A \cup B$) would be all the books that either you like, or your friend likes, or both of you like. No duplicates are counted, of course!
*   In set-builder notation: $A \cup B = \{x \mid x \in A \text{ or } x \in B\}$.
*   Example: If $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$, then $A \cup B = \{1, 2, 3, 4, 5\}$. Notice that '3' is in both sets but appears only once in the union.
*   *Key Property (Commutativity):* $A \cup B = B \cup A$. The order doesn't matter.
*   *Key Property (Associativity):* $(A \cup B) \cup C = A \cup (B \cup C)$. You can group them however you like.
*   *Key Property:* $A \cup \emptyset = A$. The union with an empty set doesn't change the set.

### Intersection: Elements in Common

The **intersection** of two sets $A$ and $B$ is the set containing all elements that are common to *both* $A$ and $B$. We denote this by $A \cap B$.

*   *Analogy:* Using the book example again, the intersection ($A \cap B$) would be the set of books that you *both* like.
*   In set-builder notation: $A \cap B = \{x \mid x \in A \text{ and } x \in B\}$.
*   Example: If $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$, then $A \cap B = \{3\}$.
*   *Key Property (Commutativity):* $A \cap B = B \cap A$. Order doesn't matter here either.
*   *Key Property (Associativity):* $(A \cap B) \cap C = A \cap (B \cap C)$. Grouping is flexible.
*   *Key Property:* $A \cap \emptyset = \emptyset$. The intersection with an empty set is always empty.

**Relationship between Union and Intersection:**
These two operations are deeply connected, as seen in **De Morgan's Laws** (which we'll see later when we talk about complement) and the **Principle of Inclusion-Exclusion**.

### Difference: What's Left?

The **difference** of two sets $A$ and $B$ (denoted $A - B$ or $A \setminus B$) is the set of elements that are in $A$ but *not* in $B$.

*   *Analogy:* If you have your book collection ($A$) and you give away all the books that your friend also likes (the intersection $A \cap B$), the books left in your collection are $A - B$.
*   In set-builder notation: $A - B = \{x \mid x \in A \text{ and } x \notin B\}$.
*   Example: If $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5, 6\}$, then $A - B = \{1, 2\}$. Note that $B - A = \{5, 6\}$, so the difference is not commutative.

### Complement: Everything Else (Relative to a Universe)

To talk about the complement, we first need a **universal set**, denoted by $U$. This is the set of all possible elements we are considering in a particular context. Everything else we've been talking about are subsets of this universal set.

The **complement** of a set $A$ (denoted $A^c$ or $\overline{A}$) is the set of all elements in the universal set $U$ that are *not* in $A$.

*   *Analogy:* Imagine you're playing a game where all possible moves are defined by the set of all squares on a chessboard ($U$). If you've made a move to square 'e4' ($A$), then the complement ($A^c$) represents all the other squares on the board that you *didn't* move to.
*   In set-builder notation: $A^c = \{x \mid x \in U \text{ and } x \notin A\}$. This is equivalent to $U - A$.
*   Example: If $U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$ and $A = \{2, 4, 6, 8, 10\}$ (the even numbers), then $A^c = \{1, 3, 5, 7, 9\}$ (the odd numbers).
*   *Key Property:* $A \cup A^c = U$. Everything in $A$ or not in $A$ makes up the whole universe.
*   *Key Property:* $A \cap A^c = \emptyset$. A set and its complement have nothing in common.

---

## 4. The Powerhouse: The Power Set

This is a concept that often surprises students, but it's incredibly powerful and shows up in many areas of computer science, particularly in understanding how to manage combinations of options.

The **power set** of a set $S$, denoted by $\mathcal{P}(S)$ or $2^S$, is the set of *all possible subsets* of $S$.

*   *Analogy:* Imagine you have a small set of toppings for a pizza: {Pepperoni, Mushrooms, Olives}. The power set of these toppings would be all the possible combinations of toppings you could put on a pizza, including no toppings (the plain pizza) and all toppings.
    *   The empty set (no toppings) $\emptyset$.
    *   Subsets with one topping: {Pepperoni}, {Mushrooms}, {Olives}.
    *   Subsets with two toppings: {Pepperoni, Mushrooms}, {Pepperoni, Olives}, {Mushrooms, Olives}.
    *   Subset with all toppings: {Pepperoni, Mushrooms, Olives}.

*   Example: If $S = \{a, b\}$, what is $\mathcal{P}(S)$?
    The subsets of $S$ are:
    1.  The empty set: $\emptyset$
    2.  Subsets with one element: $\{a\}$, $\{b\}$
    3.  Subsets with two elements: $\{a, b\}$
    So, $\mathcal{P}(S) = \{\emptyset, \{a\}, \{b\}, \{a, b\}\}$.

*   **Cardinality of the Power Set:** If a set $S$ has cardinality $|S| = n$, then its power set $\mathcal{P}(S)$ has cardinality $|\mathcal{P}(S)| = 2^n$. This is why we often use the notation $2^S$.
    *   In our example with $S = \{a, b\}$, $|S| = 2$. The power set $\mathcal{P}(S)$ has $|\mathcal{P}(S)| = 2^2 = 4$ elements. This matches what we found. This is a fundamental result, and you'll see it used in proofs and counting problems.

This connects directly to **CO2** as it's a direct application of counting principles. Understanding the power set is crucial for topics like combinations and subsets, often explored in depth in textbooks like Grimaldi and Ramana.

---

## 5. Families of Sets and Important Laws

Now, let's talk about how these operations interact and some fundamental laws that govern them. These are like the algebraic rules for sets.

### Families of Sets

A **family of sets** is simply a set where each element is itself a set. We often use indexed notation for these.

*   Example: Let $A_1 = \{1, 2\}$, $A_2 = \{2, 3\}$, $A_3 = \{3, 4\}$. This collection $\{A_1, A_2, A_3\}$ is a family of sets. We could write it as $\{A_i \mid i \in \{1, 2, 3\}\}$.
*   We can then talk about the union of all sets in the family: $\bigcup_{i=1}^3 A_i = A_1 \cup A_2 \cup A_3 = \{1, 2, 3, 4\}$.
*   And the intersection: $\bigcap_{i=1}^3 A_i = A_1 \cap A_2 \cap A_3 = \emptyset$.

### Laws of Set Theory

These laws are essential and are often tested. They provide a formal way to manipulate set expressions and prove equivalences. Think of them like algebraic identities for numbers, but for sets.

1.  **Commutative Laws:**
    *   $A \cup B = B \cup A$
    *   $A \cap B = B \cap A$

2.  **Associative Laws:**
    *   $(A \cup B) \cup C = A \cup (B \cup C)$
    *   $(A \cap B) \cap C = A \cap (B \cap C)$

3.  **Distributive Laws:** These show how union and intersection interact.
    *   $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
        *   *Analogy:* Imagine distributing a multiplication over addition in numbers: $a \times (b + c) = (a \times b) + (a \times c)$. This set law is similar, but with union and intersection.
    *   $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$

4.  **Identity Laws:**
    *   $A \cup \emptyset = A$
    *   $A \cap U = A$ (where $U$ is the universal set)

5.  **Idempotent Laws:**
    *   $A \cup A = A$
    *   $A \cap A = A$

6.  **Complement Laws:**
    *   $A \cup A^c = U$
    *   $A \cap A^c = \emptyset$
    *   $(A^c)^c = A$ (Taking the complement twice brings you back to the original set)

7.  **De Morgan's Laws:** These are particularly important and often appear in proofs involving quantifiers and logic. They relate the complement of a union/intersection to the union/intersection of complements.
    *   $(A \cup B)^c = A^c \cap B^c$
        *   *Meaning:* The elements *not* in the union of $A$ and $B$ are exactly those elements that are *neither* in $A$ *nor* in $B$.
    *   $(A \cap B)^c = A^c \cup B^c$
        *   *Meaning:* The elements *not* in the intersection of $A$ and $B$ are exactly those elements that are *either not* in $A$ *or not* in $B$ (or both).

    *   *Analogy for De Morgan's:* Suppose $U$ is all students in a school. $A$ are students in the Chess Club, $B$ are students in the Debate Club.
        *   $(A \cup B)^c$: Students not in the Chess Club OR Debate Club. This is the same as students NOT in the Chess Club AND NOT in the Debate Club ($A^c \cap B^c$).
        *   $(A \cap B)^c$: Students not in BOTH the Chess Club AND Debate Club. This is the same as students NOT in the Chess Club OR NOT in the Debate Club ($A^c \cup B^c$).

These laws are foundational for proofs and manipulating logical statements, directly supporting **CO1: Apply logical reasoning and formal methods to construct and verify logical arguments and proofs...** You’ll find extensive coverage and examples of these in Grimaldi and Ramana’s text.

---

## 6. Relations: The Connections Between Sets

Now that we're comfortable with sets, let's look at how we can describe connections or relationships between elements of sets. This is the essence of **Relations**.

### Cartesian Product: The Foundation for Relations

Before defining relations, we need to understand the **Cartesian Product** of two sets. It's a set of ordered pairs.

The Cartesian product of sets $A$ and $B$, denoted by $A \times B$, is the set of all possible ordered pairs $(a, b)$ where $a$ is an element of $A$ and $b$ is an element of $B$.

*   *Analogy:* Imagine you're picking an outfit. You have a set of shirts $S = \{\text{red, blue}\}$ and a set of pants $P = \{\text{jeans, khakis}\}$. The Cartesian product $S \times P$ would be all possible shirt-pant combinations:
    $S \times P = \{ (\text{red, jeans}), (\text{red, khakis}), (\text{blue, jeans}), (\text{blue, khakis}) \}$.
*   *Example:* If $A = \{1, 2\}$ and $B = \{a, b, c\}$, then
    $A \times B = \{ (1, a), (1, b), (1, c), (2, a), (2, b), (2, c) \}$.
*   **Cardinality:** If $|A| = m$ and $|B| = n$, then $|A \times B| = m \times n$. In our example, $|A|=2, |B|=3$, so $|A \times B| = 2 \times 3 = 6$. This is a direct application of the multiplication principle from counting, supporting **CO2**.

The Cartesian product is the stage upon which relations play out.

### Defining a Relation

A **relation** $R$ from a set $A$ to a set $B$ (or a relation on a set $A$, which means from $A$ to $A$) is simply a subset of the Cartesian product $A \times B$.

*   So, $R \subseteq A \times B$.
*   An ordered pair $(a, b)$ is said to be **related** by $R$ if $(a, b) \in R$. We often write this as $aRb$.
*   If $(a, b) \notin R$, then $a$ is not related to $b$ by $R$, written as $a \not R b$.

*   *Example (Relation on a set):* Let $A = \{1, 2, 3, 4\}$ and let $R$ be the relation "is less than" on $A$. This means $R = \{ (a, b) \in A \times A \mid a < b \}$.
    Let's list some elements of $R$:
    *   $(1, 2) \in R$ because $1 < 2$.
    *   $(1, 3) \in R$ because $1 < 3$.
    *   $(2, 4) \in R$ because $2 < 4$.
    *   $(3, 2) \notin R$ because $3 \not< 2$.
    *   $(1, 1) \notin R$ because $1 \not< 1$.
    The full relation $R$ would be: $R = \{ (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4) \}$.
    This relation directly supports **CO3** and **CO4**.

*   *Example (Relation between two sets):* Let $A = \{\text{Alice, Bob}\}$ and $B = \{\text{Math, Science}\}$. Let $R$ be the relation "likes" where $(a, b) \in R$ if person $a$ likes subject $b$.
    Suppose Alice likes Math, Bob likes Science, and Alice also likes Science.
    Then $A \times B = \{ (\text{Alice, Math}), (\text{Alice, Science}), (\text{Bob, Math}), (\text{Bob, Science}) \}$.
    The relation $R$ would be $R = \{ (\text{Alice, Math}), (\text{Alice, Science}), (\text{Bob, Science}) \}$.

### Types of Relations (Properties of Relations on a Set A)

When we talk about a relation $R$ on a single set $A$ (i.e., $R \subseteq A \times A$), we can categorize it based on certain properties. These properties are crucial for understanding structures like graphs, orderings, and equivalences.

1.  **Reflexive:** A relation $R$ on set $A$ is reflexive if $(a, a) \in R$ for *every* element $a \in A$.
    *   *Meaning:* Every element is related to itself.
    *   *Analogy:* If $A$ is a set of people, a "is related to" relation might be reflexive if everyone is considered related to themselves (e.g., "is a sibling of" is not reflexive, but "is the same age as" is reflexive).
    *   *Example:* The relation "$\leq$" (less than or equal to) on the set of integers $\mathbb{Z}$ is reflexive because $a \leq a$ for all integers $a$. The "is less than" relation ($<$) is *not* reflexive because $a \not< a$.

2.  **Symmetric:** A relation $R$ on set $A$ is symmetric if whenever $(a, b) \in R$, then $(b, a) \in R$.
    *   *Meaning:* If $a$ is related to $b$, then $b$ is also related to $a$.
    *   *Analogy:* The relation "is married to" is symmetric. If John is married to Mary, then Mary is married to John. The relation "is taller than" is *not* symmetric.

3.  **Antisymmetric:** A relation $R$ on set $A$ is antisymmetric if whenever $(a, b) \in R$ and $(b, a) \in R$, then $a = b$.
    *   *Meaning:* If two elements are related to each other in both directions, they must be the same element. This is distinct from "not symmetric".
    *   *Analogy:* The relation "$\leq$" on integers is antisymmetric. If $a \leq b$ and $b \leq a$, then it must be true that $a = b$. The relation "is less than" ($<$) is also antisymmetric because if $a < b$ and $b < a$, this is a contradiction, implying such pairs $(a,b)$ and $(b,a)$ do not exist unless $a=b$. A better way to think about it: if $a \neq b$ and $aRb$, then $b \not R a$.
    *   *Example:* The "parent of" relation is antisymmetric. If Alice is the parent of Bob, Bob cannot be the parent of Alice (unless they are the same person in a very strange biological scenario, which we ignore in standard discrete math).

4.  **Transitive:** A relation $R$ on set $A$ is transitive if whenever $(a, b) \in R$ and $(b, c) \in R$, then $(a, c) \in R$.
    *   *Meaning:* If $a$ is related to $b$, and $b$ is related to $c$, then $a$ must be related to $c$.
    *   *Analogy:* "is taller than" is transitive. If Alice is taller than Bob, and Bob is taller than Charlie, then Alice must be taller than Charlie. "is a friend of" is usually not transitive in real life (Alice is friends with Bob, Bob is friends with Charlie, but Alice might not know Charlie).
    *   *Example:* The relation "$\leq$" on integers is transitive. If $a \leq b$ and $b \leq c$, then $a \leq c$.

### Equivalence Relations and Partitions

A relation $R$ on a set $A$ is an **equivalence relation** if it is **reflexive, symmetric, and transitive**.

*   Equivalence relations are extremely important. They partition a set into disjoint subsets, called **equivalence classes**.
*   *Analogy:* Imagine sorting students in a school by their birth month.
    *   Reflexive: Every student has a birth month (related to themselves).
    *   Symmetric: If student A and student B have the same birth month, then student B and student A have the same birth month.
    *   Transitive: If student A and student B have the same birth month, and student B and student C have the same birth month, then student A and student C have the same birth month.
    *   This is an equivalence relation. The equivalence classes are the sets of students born in January, February, March, etc. These classes are disjoint and their union is the entire set of students.

*   **Partition:** A partition of a set $A$ is a collection of non-empty, disjoint subsets of $A$ whose union is $A$.
    *   The equivalence classes of an equivalence relation form a partition of the set. Conversely, any partition of a set defines an equivalence relation.

### Partial Orders and Total Orders

A relation $R$ on a set $A$ is a **partial order** if it is **reflexive, antisymmetric, and transitive**.

*   *Analogy:* Consider the relation "divides" ($\mid$) on the set of positive integers.
    *   Reflexive: $a \mid a$ for all $a$. (Every integer divides itself).
    *   Antisymmetric: If $a \mid b$ and $b \mid a$, then $a=b$ (for positive integers).
    *   Transitive: If $a \mid b$ and $b \mid c$, then $a \mid c$.
    This is a partial order. However, not all pairs of positive integers are related by "divides". For example, $2 \nmid 3$ and $3 \nmid 2$. This is why it's a *partial* order – elements don't necessarily have to be comparable.

*   **Total Order (or Linear Order):** A partial order $R$ on a set $A$ is a total order if for *every* pair of elements $a, b \in A$, either $(a, b) \in R$ or $(b, a) \in R$.
    *   *Meaning:* Every pair of elements is comparable.
    *   *Example:* The relation "$\leq$" on the set of integers $\mathbb{Z}$ is a total order because for any two integers $a$ and $b$, either $a \leq b$ or $b \leq a$. This is why we call it "less than or equal to."

Understanding these properties of relations is critical for **CO3** and **CO4** and is a core topic in Discrete Mathematics. Textbooks like Veerarajan and Chandrasekharaiah provide many examples and proofs related to these concepts.

---

## 7. Functions: Mappings Between Sets

Functions are a special type of relation that describes a precise mapping between elements of two sets. They are absolutely fundamental to all of mathematics and computer science.

### Defining a Function

A **function** $f$ from a set $A$ to a set $B$, denoted $f: A \to B$, is a relation from $A$ to $B$ such that for *every* element $a \in A$, there is *exactly one* element $b \in B$ with $(a, b) \in f$.

*   $A$ is called the **domain** of the function.
*   $B$ is called the **codomain** of the function.
*   If $(a, b) \in f$, we write $f(a) = b$, and $b$ is called the **image** of $a$ under $f$.

*   *Key Conditions for a Function:*
    1.  **Existence:** Every element in the domain must be mapped. There can't be an element in $A$ that isn't assigned to any element in $B$.
    2.  **Uniqueness:** Each element in the domain must be mapped to *exactly one* element in the codomain. An element in $A$ cannot map to two different elements in $B$.

*   *Analogy:* Think of a vending machine. The set of buttons you can press ($A$, the domain) maps to a specific item dispensed ($B$, the codomain).
    *   Every button (element in $A$) must dispense *an* item (satisfies existence).
    *   Pressing one button (an element in $A$) can't dispense two different items (satisfies uniqueness). If it did, it wouldn't be a well-defined function (or vending machine!).

*   *Example:*
    *   Let $A = \{1, 2, 3\}$ and $B = \{a, b, c, d\}$.
    *   Is $f_1 = \{ (1, a), (2, b), (3, c) \}$ a function from $A$ to $B$? Yes. Every element in $A$ is mapped to exactly one element in $B$.
    *   Is $f_2 = \{ (1, a), (2, b) \}$ a function from $A$ to $B$? No. Element '3' in $A$ is not mapped to anything.
    *   Is $f_3 = \{ (1, a), (1, b), (2, c), (3, d) \}$ a function from $A$ to $B$? No. Element '1' in $A$ is mapped to both 'a' and 'b'.

### Types of Functions

Functions can have special properties that make them more powerful or useful. These properties are essential for advanced topics and are covered in **CO3** and **CO4**.

1.  **Injective (One-to-One) Function:** A function $f: A \to B$ is injective if for every $b \in B$, there is at most one $a \in A$ such that $f(a) = b$.
    *   *Meaning:* Different elements in the domain map to different elements in the codomain. No two elements in $A$ map to the same element in $B$.
    *   *Analogy:* If you're assigning student IDs (from $A$, the students) to unique ID numbers (from $B$, the numbers). If each student gets a different ID number, it's injective. No two students share the same ID.
    *   *Formal Condition:* If $f(a_1) = f(a_2)$, then $a_1 = a_2$.

2.  **Surjective (Onto) Function:** A function $f: A \to B$ is surjective if for every $b \in B$, there is at least one $a \in A$ such that $f(a) = b$.
    *   *Meaning:* Every element in the codomain has at least one element in the domain mapping to it. The function "hits" every element of the codomain.
    *   *Analogy:* If you're mapping students ($A$) to classrooms ($B$). If every classroom has at least one student in it, the mapping is surjective. No classroom is empty.
    *   *Condition:* The range of the function (the set of actual output values) is equal to the codomain.

3.  **Bijective Function:** A function $f: A \to B$ is bijective if it is *both* injective and surjective.
    *   *Meaning:* It's a perfect one-to-one correspondence between the elements of $A$ and $B$.
    *   *Analogy:* A perfect pairing. If you are assigning each student ($A$) to a unique seat ($B$), and every seat is occupied by exactly one student, the function is bijective. This implies that the domain and codomain must have the same number of elements (if finite).

### Composition of Functions

Just like with numbers, we can combine functions. The **composition** of two functions $f: A \to B$ and $g: B \to C$ is a function $g \circ f: A \to C$ defined by $(g \circ f)(a) = g(f(a))$.

*   *Analogy:* Imagine a two-step process. First, you transform an input $a$ using function $f$ to get $f(a)$. Then, you take that result $f(a)$ and transform it using function $g$ to get $g(f(a))$. The composition $g \circ f$ does this in one step.
*   *Example:* If $f: \mathbb{Z} \to \mathbb{Z}$ is $f(x) = x+1$, and $g: \mathbb{Z} \to \mathbb{Z}$ is $g(x) = x^2$.
    Then $(g \circ f)(x) = g(f(x)) = g(x+1) = (x+1)^2$.
    And $(f \circ g)(x) = f(g(x)) = f(x^2) = x^2+1$.
    Notice that $g \circ f \neq f \circ g$ in general. Order matters!

### Inverse Functions

If a function $f: A \to B$ is bijective, then there exists a unique **inverse function**, denoted by $f^{-1}: B \to A$, such that $f^{-1}(b) = a$ if and only if $f(a) = b$.

*   *Meaning:* The inverse function "undoes" what the original function did.
*   *Conditions for Inverse:* A function has an inverse if and only if it is bijective.
*   *Properties:*
    *   $f^{-1}(f(a)) = a$ for all $a \in A$.
    *   $f(f^{-1}(b)) = b$ for all $b \in B$.

These concepts of functions, their properties (injectivity, surjectivity, bijectivity), composition, and inverses are core to understanding data transformations, algorithms, and numerous other areas in discrete mathematics, directly addressing **CO3** and **CO4**. They are thoroughly explained in all the mentioned textbooks.

---

## 8. Algebraic Structures: A Glimpse

While this module focuses on sets, relations, and functions, it's important to see how they lead into more complex **algebraic structures**. Algebraic structures are sets equipped with operations that satisfy certain properties. The foundations we've laid in sets and operations are directly applicable here.

*   **Semigroups:** A set $S$ with a single associative binary operation. (e.g., The set of strings with concatenation).
*   **Monoids:** A semigroup with an identity element. (e.g., The set of integers with addition, where 0 is the identity).
*   **Groups:** A monoid where every element has an inverse. (e.g., The set of integers with addition).
*   **Rings:** A set with two binary operations (usually addition and multiplication) that satisfy specific distributive, associative, and identity properties. (e.g., The set of integers with usual addition and multiplication).
*   **Fields:** A commutative ring where every non-zero element has a multiplicative inverse. (e.g., The set of rational numbers or real numbers with usual addition and multiplication).

**CO3** and **CO4** specifically mention these structures. While we won't delve deeply into the specifics of each structure in *this* particular topic section, remember that the operations on sets (union, intersection) and properties of functions are the building blocks for understanding how these algebraic systems are defined and behave. For instance, the distributive laws for sets are analogous to distributive laws in rings and fields.

---

## Conclusion and Key Takeaways

We've covered a lot of ground in this module, from the basic definition of a set to the intricate properties of functions.

**Remember these key points:**

*   **Sets** are well-defined collections of distinct elements.
*   **Cardinality** is the size of a set.
*   **Subsets** ($A \subseteq B$) and **proper subsets** ($A \subset B$) describe containment.
*   Set operations (Union $\cup$, Intersection $\cap$, Difference $-$, Complement $^c$) allow us to combine and manipulate sets.
*   The **Power Set** $\mathcal{P}(S)$ contains all subsets of $S$.
*   **Relations** are subsets of Cartesian products, defining connections between elements.
*   Properties of relations (reflexive, symmetric, antisymmetric, transitive) classify these connections.
*   **Equivalence relations** partition sets into **equivalence classes**.
*   **Partial orders** and **total orders** describe comparability between elements.
*   **Functions** are special relations with one-to-one mapping from domain to codomain.
*   Function properties (injective, surjective, bijective) describe the nature of these mappings.
*   **Function composition** and **inverse functions** allow us to combine and "undo" transformations.

These concepts are the bedrock upon which much of discrete mathematics and computer science is built. Make sure you practice identifying these properties and applying the definitions.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual knowledge and exam-style problems:

**Question 1 (Conceptual):**
What is the fundamental difference between a relation and a function?

**Answer:**
A **relation** from set $A$ to set $B$ is any subset of $A \times B$. This means an element in $A$ can be related to zero, one, or many elements in $B$.
A **function** from set $A$ to set $B$ is a *special type* of relation where *every* element in $A$ is related to *exactly one* element in $B$. The key distinctions are:
1.  **Existence:** Every element in the domain ($A$) must be mapped by a function, whereas a relation doesn't require this.
2.  **Uniqueness:** Each element in the domain ($A$) maps to only one element in the codomain ($B$) for a function, whereas a relation allows an element in $A$ to map to multiple elements in $B$.

**Question 2 (Application of Set Operations & Laws):**
Let $U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$, $A = \{1, 3, 5, 7\}$, and $B = \{2, 4, 6, 8\}$.
Find:
a) $A \cup B$
b) $A \cap B$
c) $A^c$
d) $(A \cup B)^c$
e) Verify De Morgan's Law: $(A \cup B)^c = A^c \cap B^c$.

**Answer:**
a) $A \cup B = \{1, 3, 5, 7\} \cup \{2, 4, 6, 8\} = \{1, 2, 3, 4, 5, 6, 7, 8\}$.
b) $A \cap B = \{1, 3, 5, 7\} \cap \{2, 4, 6, 8\} = \emptyset$. (Sets A and B are disjoint).
c) $A^c = U - A = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\} - \{1, 3, 5, 7\} = \{2, 4, 6, 8, 9, 10\}$.
d) $(A \cup B)^c = U - (A \cup B) = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\} - \{1, 2, 3, 4, 5, 6, 7, 8\} = \{9, 10\}$.
e) To verify De Morgan's Law $(A \cup B)^c = A^c \cap B^c$:
    We found $(A \cup B)^c = \{9, 10\}$ from part (d).
    Now let's find $A^c \cap B^c$:
    $A^c = \{2, 4, 6, 8, 9, 10\}$ (from part c).
    $B^c = U - B = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\} - \{2, 4, 6, 8\} = \{1, 3, 5, 7, 9, 10\}$.
    $A^c \cap B^c = \{2, 4, 6, 8, 9, 10\} \cap \{1, 3, 5, 7, 9, 10\} = \{9, 10\}$.
    Since both sides equal $\{9, 10\}$, De Morgan's Law is verified for this case.

**Question 3 (Relation Properties):**
Let $A = \{1, 2, 3\}$ and $R$ be the relation on $A$ defined by $R = \{ (1, 1), (1, 2), (2, 2), (2, 3), (3, 3) \}$.
Is $R$ reflexive? Symmetric? Antisymmetric? Transitive? Justify your answers.

**Answer:**
*   **Reflexive:** Yes. For $R$ to be reflexive on $A = \{1, 2, 3\}$, it must contain $(1, 1), (2, 2), (3, 3)$. All these pairs are present in $R$.
*   **Symmetric:** No. We have $(1, 2) \in R$. For $R$ to be symmetric, $(2, 1)$ must also be in $R$. However, $(2, 1) \notin R$.
*   **Antisymmetric:** Yes. We need to check if for any $(a, b) \in R$ and $(b, a) \in R$ with $a \neq b$, this implies a contradiction or if only cases where $a=b$ exist.
    The only pair where $(a,b) \in R$ and $a \neq b$ is $(1, 2)$. For symmetry, we would need $(2, 1) \in R$, which is not true. So, the condition "if $(a, b) \in R$ and $(b, a) \in R$, then $a=b$" is vacuously true for $a \neq b$ because the premise " $(a, b) \in R$ and $(b, a) \in R$ " is never met for $a \neq b$. The pairs where $a=b$ are $(1,1), (2,2), (3,3)$, and for these, $a=b$ is true.
*   **Transitive:** Yes. We need to check all cases where $(a, b) \in R$ and $(b, c) \in R$:
    *   $(1, 1) \in R$ and $(1, 2) \in R$: We need $(1, 2) \in R$, which is true.
    *   $(1, 1) \in R$ and $(1, 1) \in R$: We need $(1, 1) \in R$, which is true.
    *   $(2, 2) \in R$ and $(2, 3) \in R$: We need $(2, 3) \in R$, which is true.
    *   $(2, 2) \in R$ and $(2, 2) \in R$: We need $(2, 2) \in R$, which is true.
    *   $(3, 3) \in R$ and $(3, 3) \in R$: We need $(3, 3) \in R$, which is true.
    *   What about $(1, 2) \in R$ and $(2, 2) \in R$? We need $(1, 2) \in R$, which is true.
    *   What about $(1, 2) \in R$ and $(2, 3) \in R$? We need $(1, 3) \in R$. Since $(1, 3) \notin R$, the relation is NOT transitive.

    *Correction*: My check for antisymmetry was a bit convoluted. A simpler way for antisymmetric: $(a,b) \in R$ and $(b,a) \in R$ implies $a=b$.
    In $R$, the only pairs with $a \neq b$ are $(1,2)$ and $(2,3)$.
    For $(1,2) \in R$, we check if $(2,1) \in R$. It's not. So the condition is met for $(1,2)$.
    For $(2,3) \in R$, we check if $(3,2) \in R$. It's not. So the condition is met for $(2,3)$.
    The pairs where $a=b$ are $(1,1), (2,2), (3,3)$. For these, $a=b$ is trivially true.
    Thus, the relation R is **Antisymmetric**.

    *Re-checking Transitivity:*
    The specific instances we must check for transitivity are:
    1. $(1, 2) \in R$ and $(2, 3) \in R$. Does this imply $(1, 3) \in R$? No, $(1, 3) \notin R$.
    Therefore, $R$ is **NOT Transitive**.

**Question 4 (Functions - Injectivity/Surjectivity):**
Let $A = \{1, 2, 3, 4\}$ and $B = \{x, y, z\}$. Let $f: A \to B$ be defined by:
$f(1) = x$, $f(2) = y$, $f(3) = x$, $f(4) = z$.
Is $f$ injective? Is $f$ surjective?

**Answer:**
*   **Injective:** No. For $f$ to be injective, different elements in $A$ must map to different elements in $B$. We see that $f(1) = x$ and $f(3) = x$. Since $1 \neq 3$ but $f(1) = f(3)$, the function is not injective.
*   **Surjective:** Yes. For $f$ to be surjective, every element in the codomain $B = \{x, y, z\}$ must be mapped to by at least one element from the domain $A$.
    *   $x$ is the image of $1$ (and $3$).
    *   $y$ is the image of $2$.
    *   $z$ is the image of $4$.
    Since all elements $x, y, z$ in $B$ have at least one pre-image in $A$, the function is surjective.

Keep practicing these types of problems, and you'll build a strong foundation in sets, relations, and functions!
