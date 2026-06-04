---
title: "Sets and Subsets"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f80"
status: "completed"
scrapedAt: "2026-05-20T16:32:39.439Z"
---
All right, class, welcome to Module 1 of Discrete Mathematics! It's fantastic to have you all here. Today, we're diving into the very bedrock of so much of what we'll do in this course: **Sets and Subsets**. Think of this as learning the alphabet before we start writing poetry. If we get this right, everything else will build upon it beautifully.

### Module 1: Sets and Subsets - The Foundation of Discrete Mathematics

You might be wondering, "Why sets? Isn't that a bit basic?" Well, yes, the *concept* of a set is intuitive, but its rigorous definition and application are incredibly powerful in computer science, logic, and virtually every area of mathematics.

**What are we trying to achieve in this module?**

Before we get too deep, let's look at our goals, or as we call them in the course, our **Learning Outcomes**. They tell us where we're headed.

*   **Understanding the Basics:** We need to be comfortable with what a set is, how to describe it, and what belongs to it.
*   **Relationships Between Sets:** We'll explore how sets can be related to each other – are they the same? Is one part of another?
*   **Building New Sets:** We'll learn how to combine sets to create new ones.
*   **Counting Elements:** A crucial aspect of discrete mathematics is counting. We'll see how sets help us with this.
*   **Applications in Computer Science:** Throughout this module, we'll be keeping an eye out for how these fundamental ideas pop up in the world of computing. This ties directly into our **Course Outcomes**, especially CO1 (logic), CO2 (counting), and even hints at CO3 (relations) and CO4 (ordered sets).

**So, let's start with the most fundamental question: What exactly *is* a set?**

---

#### 1.1 What is a Set? Defining the Undefinable (Almost!)

In everyday language, we use the word "set" all the time: a set of dishes, a set of tools, a set of rules. But in mathematics, we need a more precise definition.

A **set** is a collection of distinct objects.

That's it! Simple, right? The key words here are **collection** and **distinct**.

*   **Collection:** It's a group of things. These "things" are called **elements** or **members** of the set.
*   **Distinct:** This is important! A set doesn't care *how many times* an object is listed. An object is either in the set, or it's not. So, the set of vowels in the English alphabet is {a, e, i, o, u}, not {a, e, i, o, u, a}. The second 'a' doesn't change anything.

**Think of it like this:** Imagine you're packing for a trip. You have a list of items you *must* take. Each item on your packing list is an element, and the entire list represents a set of essential items. You wouldn't write "toothbrush, toothbrush, toothbrush" on your list, would you? You just need *one* toothbrush.

**How do we represent sets?**

There are a few ways, and we need to be familiar with all of them, as they'll appear in different contexts.

**1. Roster Method (Listing the Elements):**
This is the most straightforward way. We list all the elements of the set within curly braces `{}`.

*   **Example:** The set of the first five positive integers. We write this as $A = \{1, 2, 3, 4, 5\}$.
*   **Example:** The set of colors in a standard traffic light. We write this as $B = \{\text{Red, Yellow, Green}\}$.
*   **Example:** The set of vowels in the English alphabet. $V = \{a, e, i, o, u\}$.

**Key Point:** The order in which you list the elements doesn't matter. So, $\{1, 2, 3, 4, 5\}$ is the same set as $\{5, 4, 3, 2, 1\}$.

**2. Set-Builder Notation (Describing the Elements):**
Sometimes, listing all the elements can be impractical or impossible. For instance, the set of all integers between 1 and 1,000,000. Listing them all would be tedious! That's where set-builder notation comes in handy. It's like giving a rule or a description for the elements that belong in the set.

The general form is: $\{x \mid P(x)\}$, which reads as "the set of all elements $x$ such that $P(x)$ is true." Here, $P(x)$ is a property or condition that $x$ must satisfy.

*   **Example:** The set of all even integers. We can write this as $E = \{x \mid x \text{ is an even integer}\}$.
*   **Example:** The set of integers greater than 5 and less than 10. $C = \{x \mid x \text{ is an integer and } 5 < x < 10\}$. This would be $\{6, 7, 8, 9\}$.

**This notation is particularly useful when we start talking about logical predicates, which links us directly to our Course Outcome CO1.** When we say "$x$ is an even integer," we are essentially stating a predicate about $x$. Set-builder notation helps us define sets based on the truth of these predicates.

**3. Special Sets:**
Some sets are so fundamental that they have special names and symbols.

*   **The Empty Set (or Null Set):** This is a set that contains no elements. It's represented by $\emptyset$ or $\{\}$.
    *   **Analogy:** Imagine an empty shopping cart. It's a valid cart, but it currently holds nothing.
    *   **Why is it important?** The empty set is crucial in many mathematical proofs and constructions. It's like the "zero" for sets.
*   **The Universal Set:** This is the set of all elements currently under consideration. It's usually denoted by $U$.
    *   **Analogy:** If you're talking about the set of students in our Discrete Mathematics class, the universal set might be *all* students enrolled at the university. If you're talking about vowels, the universal set might be *all* letters of the alphabet.
    *   **Context is Key:** The universal set depends entirely on the context of the problem. There isn't one universal set for everything in the universe!

**Cardinality: How Many Elements?**

The **cardinality** of a set is simply the number of elements in the set. It's denoted by $|S|$ for a set $S$.

*   **Example:** If $A = \{1, 2, 3, 4, 5\}$, then $|A| = 5$.
*   **Example:** If $B = \{\text{Red, Yellow, Green}\}$, then $|B| = 3$.
*   **Example:** If $E = \{x \mid x \text{ is an even integer and } 0 \le x \le 10\}$, then $E = \{0, 2, 4, 6, 8, 10\}$, and $|E| = 7$.
*   **Important:** The cardinality of the empty set is $| \emptyset | = 0$.

**Quick Recap:**
*   Set: A collection of distinct objects.
*   Elements: The objects in a set.
*   Representations: Roster method `{}` and Set-builder notation $\{x \mid P(x)\}$.
*   Special Sets: Empty Set $\emptyset$ and Universal Set $U$.
*   Cardinality: The number of elements, $|S|$.

---

#### 1.2 Types of Sets and Set Relationships

Now that we know what a set is, let's explore how sets can be related to each other. This is where things start to get really interesting, especially as we think about ordering and structure.

**1. Equality of Sets:**

Two sets, $A$ and $B$, are **equal** if and only if they have exactly the same elements.

*   **Formal Definition:** $A = B$ if and only if $A \subseteq B$ and $B \subseteq A$. (We'll define subsets in a moment!)
*   **Example:** Let $A = \{1, 3, 5\}$ and $B = \{5, 1, 3\}$. Are they equal? Yes, because they contain the exact same elements, even though the order is different.
*   **Example:** Let $C = \{1, 2, 3\}$ and $D = \{1, 1, 2, 3\}$. Are they equal? Yes, because the second '1' in $D$ doesn't add a new distinct element.
*   **Example:** Let $X = \{a, b, c\}$ and $Y = \{a, b, d\}$. Are they equal? No, because $c$ is in $X$ but not in $Y$, and $d$ is in $Y$ but not in $X$.

**This concept of equality is foundational to logic (CO1) and also to understanding when two different descriptions define the same collection of items.**

**2. Subsets: The Heart of Relationships**

This is a cornerstone concept. A set $A$ is a **subset** of a set $B$ if every element of $A$ is also an element of $B$.

*   **Notation:** We write $A \subseteq B$ to mean "$A$ is a subset of $B$".
*   **Formal Definition:** $A \subseteq B$ if and only if for every element $x$, if $x \in A$, then $x \in B$.

**Let's use an analogy:** Imagine you have a big box of LEGO bricks (set $B$). If you take out a smaller pile of specific LEGO bricks from that box (set $A$), then that smaller pile is a subset of the big box of bricks. All the bricks in your smaller pile *came from* the big box.

*   **Example:** Let $A = \{1, 3\}$ and $B = \{1, 2, 3, 4\}$. Is $A \subseteq B$? Yes, because $1 \in B$ and $3 \in B$.
*   **Example:** Let $V = \{a, e, i, o, u\}$ (vowels) and $L = \{a, b, c, ..., z\}$ (all letters). Is $V \subseteq L$? Yes, every vowel is also a letter.
*   **Example:** Let $E = \{2, 4, 6\}$ and $O = \{1, 3, 5\}$. Is $E \subseteq O$? No, because $2 \in E$ but $2 \notin O$.

**Important Properties of Subsets:**

*   **Every set is a subset of itself:** $A \subseteq A$. This makes sense. If you have a pile of LEGOs, the pile is a subset of itself!
*   **The empty set is a subset of every set:** $\emptyset \subseteq A$ for any set $A$. Think about it: Is there any element in $\emptyset$ that is *not* in $A$? No, because there are no elements in $\emptyset$ at all! This is a crucial point for proofs.

**Proper Subsets:**

Sometimes, we want to say that $A$ is a subset of $B$, but $A$ is *not equal* to $B$. In other words, $B$ must contain at least one element that is *not* in $A$.

*   **Notation:** We write $A \subset B$ (or sometimes $A \subsetneq B$) to mean "$A$ is a proper subset of $B$".
*   **Formal Definition:** $A \subset B$ if and only if $A \subseteq B$ and $A \neq B$.

*   **Example:** If $A = \{1, 3\}$ and $B = \{1, 2, 3, 4\}$, then $A \subset B$ because $A \subseteq B$ and $A \neq B$ (since $2 \in B$ but $2 \notin A$).
*   **Example:** If $A = \{1, 3\}$ and $B = \{1, 3\}$, then $A \subseteq B$ but $A$ is *not* a proper subset of $B$.

**This idea of proper subsets is fundamental for understanding ordered structures, which will be vital for CO4 (Partially Ordered Sets). If $A \subset B$, it means $B$ has "more" elements than $A$ in a specific way.**

**3. The Power Set: Sets of Sets!**

This might sound a bit mind-bending at first, but it's a very important concept. The **power set** of a set $S$, denoted by $P(S)$ or $2^S$, is the set of all possible subsets of $S$.

*   **Example:** Let $A = \{a, b\}$. What are all the possible subsets of $A$?
    *   The empty set: $\emptyset$
    *   Subsets with one element: $\{a\}$, $\{b\}$
    *   Subsets with two elements: $\{a, b\}$
    So, the power set of $A$ is $P(A) = \{\emptyset, \{a\}, \{b\}, \{a, b\}\}$.

*   **Example:** Let $B = \{1, 2, 3\}$. What is $P(B)$?
    *   $\emptyset$
    *   $\{1\}, \{2\}, \{3\}$
    *   $\{1, 2\}, \{1, 3\}, \{2, 3\}$
    *   $\{1, 2, 3\}$
    So, $P(B) = \{\emptyset, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}, \{1, 2, 3\}\}$.

**Notice a pattern here regarding cardinality:**
*   If $|A| = 0$ (i.e., $A = \emptyset$), then $P(A) = \{\emptyset\}$, so $|P(A)| = 1 = 2^0$.
*   If $|A| = 1$ (e.g., $A = \{a\}$), then $P(A) = \{\emptyset, \{a\}\}$, so $|P(A)| = 2 = 2^1$.
*   If $|A| = 2$ (e.g., $A = \{a, b\}$), then $|P(A)| = 4 = 2^2$.
*   If $|A| = 3$ (e.g., $A = \{1, 2, 3\}$), then $|P(A)| = 8 = 2^3$.

**This leads to a crucial formula:** If a set $S$ has $n$ elements, then its power set $P(S)$ has $2^n$ elements.
**Remember this!** This is a direct connection to counting principles (CO2), specifically related to combinations and the idea of choosing elements. For every element in $S$, you have two choices: either include it in a subset or don't include it. If there are $n$ elements, there are $2 \times 2 \times ... \times 2$ ($n$ times) possible combinations of choices, resulting in $2^n$ subsets.

---

#### 1.3 Operations on Sets: Building and Combining

Just like we have arithmetic operations for numbers (addition, subtraction), we have operations for sets that allow us to combine them to form new sets. These are fundamental for understanding more complex structures and for counting, as per CO2.

**1. Union (The "OR" Operation):**

The **union** of two sets $A$ and $B$, denoted by $A \cup B$, is the set of all elements that are in $A$, or in $B$, or in both.

*   **Formal Definition:** $A \cup B = \{x \mid x \in A \text{ or } x \in B\}$.
*   **Analogy:** Imagine you have two different groups of friends. The union of these groups is everyone who is in the first group, or the second group, or if some people happen to be in both groups, they are still just counted once in the combined group.

*   **Example:** Let $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$.
    $A \cup B = \{1, 2, 3, 4, 5\}$. Notice that '3' is in both sets, but it only appears once in the union.

*   **Example:** If you're managing a project and have a list of tasks assigned to Team A and a list of tasks assigned to Team B, the union of these lists gives you all tasks that need to be done by *either* team.

**Important Properties of Union:**

*   **Commutative:** $A \cup B = B \cup A$ (Order doesn't matter).
*   **Associative:** $(A \cup B) \cup C = A \cup (B \cup C)$ (Grouping doesn't matter).
*   **Identity:** $A \cup \emptyset = A$ (Union with empty set doesn't change the set).

**2. Intersection (The "AND" Operation):**

The **intersection** of two sets $A$ and $B$, denoted by $A \cap B$, is the set of all elements that are common to both $A$ and $B$.

*   **Formal Definition:** $A \cap B = \{x \mid x \in A \text{ and } x \in B\}$.
*   **Analogy:** Going back to our friends analogy, the intersection of two groups of friends is only the people who are members of *both* groups.

*   **Example:** Let $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$.
    $A \cap B = \{3\}$. Only the element '3' is present in both sets.

*   **Example:** In our project management scenario, the intersection of Team A's tasks and Team B's tasks would be the tasks that *both* teams are responsible for. This is important for identifying overlaps and potential conflicts.

**Important Properties of Intersection:**

*   **Commutative:** $A \cap B = B \cap A$.
*   **Associative:** $(A \cap B) \cap C = A \cap (B \cap C)$.
*   **Identity:** $A \cap \emptyset = \emptyset$ (Intersection with empty set is always empty).
*   **Distributive:** $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$. (This shows a nice interaction between union and intersection!)

**Disjoint Sets:**
If the intersection of two sets is empty ($A \cap B = \emptyset$), then the sets $A$ and $B$ are called **disjoint**. They have no elements in common.

**3. Difference (The "Exclusive" Operation):**

The **difference** of two sets $A$ and $B$, denoted by $A - B$ or $A \setminus B$, is the set of all elements that are in $A$ but *not* in $B$.

*   **Formal Definition:** $A - B = \{x \mid x \in A \text{ and } x \notin B\}$.
*   **Analogy:** If you have a set of all students in a class ($A$) and a subset of those students who got an 'A' grade ($B$), then $A - B$ would be all the students in the class who *did not* get an 'A'.

*   **Example:** Let $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$.
    $A - B = \{1, 2\}$. The element '3' is removed from $A$ because it's also in $B$.

*   **Important Note:** Set difference is *not* commutative! $A - B$ is generally not the same as $B - A$.
    *   In our example: $B - A = \{4, 5\}$. Clearly, $\{1, 2\} \neq \{4, 5\}$.

**4. Complement (The "Everything Else" Operation):**

The **complement** of a set $A$, denoted by $A^c$ or $\overline{A}$, is the set of all elements in the universal set $U$ that are *not* in $A$.

*   **Formal Definition:** $A^c = \{x \in U \mid x \notin A\}$. This is precisely the definition of $U - A$. So, $A^c = U - A$.
*   **Analogy:** If $U$ is the set of all people in a city, and $A$ is the set of people who own dogs, then $A^c$ is the set of people in that city who *do not* own dogs.

*   **Example:** Let $U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$, and $A = \{2, 4, 6, 8, 10\}$ (even numbers).
    Then $A^c = U - A = \{1, 3, 5, 7, 9\}$ (odd numbers).

**Key Relationships involving Complement (De Morgan's Laws and More):**

These are super important and frequently tested!

*   **Double Complement:** $(A^c)^c = A$. If you take the complement of the complement, you get back the original set. (All non-dog owners are the set of people who don't not own dogs, which is just dog owners).
*   **Complement of Union:** $(A \cup B)^c = A^c \cap B^c$. The complement of the union is the intersection of the complements.
    *   **In English:** If it's not true that an element is in A *or* B, then it must be the case that the element is *not* in A *and* it's *not* in B.
*   **Complement of Intersection:** $(A \cap B)^c = A^c \cup B^c$. The complement of the intersection is the union of the complements.
    *   **In English:** If it's not true that an element is in A *and* B, then it must be the case that the element is *not* in A *or* it's *not* in B (or both).

These De Morgan's Laws are directly related to logical equivalences in Propositional Logic (CO1). If we map "in $A$" to a proposition $P$ and "in $B$" to a proposition $Q$, then $A \cup B$ corresponds to $P \lor Q$, and $A \cap B$ corresponds to $P \land Q$. The rules become:
*   $\neg(P \lor Q) \equiv \neg P \land \neg Q$
*   $\neg(P \land Q) \equiv \neg P \lor \neg Q$

This is a powerful connection!

**Other Useful Identities:**

*   $A \cup A = A$ (Idempotence)
*   $A \cap A = A$ (Idempotence)
*   $A \cup U = U$
*   $A \cap U = A$
*   $A \cup A^c = U$
*   $A \cap A^c = \emptyset$

**Venn Diagrams: Visualizing Set Operations**

Venn diagrams are your best friend for understanding set operations and relationships. They use circles to represent sets within a rectangular universal set.

*   **Union ($A \cup B$):** Shade both circle A and circle B.
*   **Intersection ($A \cap B$):** Shade only the overlapping region of circle A and circle B.
*   **Difference ($A - B$):** Shade circle A, but then erase the part that overlaps with circle B.
*   **Complement ($A^c$):** Shade the entire rectangle *outside* of circle A.

Using Venn diagrams to visualize De Morgan's laws can be very illuminating. Try drawing them out!

---

#### 1.4 Applications in Computer Science

This is where we tie everything together with our Course Outcomes. Discrete Mathematics isn't just abstract theory; it's the language of computation.

*   **Database Management:** Sets are fundamental to relational databases. A table in a database can be thought of as a set of records, and operations like **union**, **intersection**, and **difference** correspond directly to SQL queries (e.g., `UNION`, `INTERSECT`, `EXCEPT` or `MINUS`). If you have a set of all customers and a set of customers who made a purchase last month, the intersection tells you who bought something, and the difference tells you who didn't. (CO2, CO3)

*   **Logic and Boolean Algebra:** As we saw with De Morgan's laws, set operations have direct parallels to logical operations ($\lor$ for union, $\land$ for intersection, $\neg$ for complement). This is crucial for designing digital circuits, writing logical conditions in programming, and proving the validity of arguments (CO1).

*   **Data Structures:** Concepts like sets, lists, and maps are basic data structures in computer science. Understanding set operations helps in designing and analyzing algorithms that manipulate these structures. For example, checking if an element exists in a set or finding common elements between two lists are operations rooted in set theory.

*   **Formal Languages:** In areas like compiler design and automata theory, sets are used to define alphabets (sets of symbols) and languages (sets of strings). Operations on these sets define how languages can be combined or manipulated.

*   **Graph Theory:** Graphs are collections of vertices (nodes) and edges (connections). Sets are used extensively to represent the vertices and edges of a graph, and operations like finding common neighbors between nodes or identifying edges present in one graph but not another rely on set theory. (Hints at CO3, CO4)

---

#### 1.5 Sample Questions and Answers

Let's test our understanding with some questions, ranging from basic concepts to those that might appear in an exam.

**Q1: Conceptual Understanding**
Let $S = \{x \mid x \text{ is an integer and } -2 < x \le 3\}$.
(a) List the elements of $S$ using the roster method.
(b) What is the cardinality of $S$?
(c) If $T = \{-1, 0, 1\}$, is $T$ a subset of $S$? Is $T$ a proper subset of $S$?
(d) Find $S \cup T$ and $S \cap T$.

**Answer:**
(a) $S = \{-1, 0, 1, 2, 3\}$. Integers strictly greater than -2 are -1, 0, 1, ... and less than or equal to 3 are ..., 1, 2, 3. Combining these gives us the set.
(b) The elements are -1, 0, 1, 2, 3. There are 5 elements. So, $|S| = 5$.
(c) Yes, $T \subseteq S$ because -1, 0, and 1 are all elements of $S$.
Yes, $T \subset S$ because $T \subseteq S$ and $T \neq S$ (since $S$ contains 2 and 3, which are not in $T$).
(d) $S \cup T = \{-1, 0, 1, 2, 3\}$ (since $T$ is a subset of $S$, their union is just $S$).
$S \cap T = \{-1, 0, 1\}$ (these are the elements common to both $S$ and $T$).

**Q2: Power Set and Counting**
Let $A = \{\text{apple, banana}\}$. What is the power set of $A$, $P(A)$? What is $|P(A)|$?

**Answer:**
The subsets of $A$ are:
*   The empty set: $\emptyset$
*   Subsets with one element: $\{\text{apple}\}$, $\{\text{banana}\}$
*   Subsets with two elements: $\{\text{apple, banana}\}$
So, $P(A) = \{\emptyset, \{\text{apple}\}, \{\text{banana}\}, \{\text{apple, banana}\}\}$.
The cardinality is $|P(A)| = 4$.
Since $|A|=2$, $|P(A)| = 2^{|A|} = 2^2 = 4$. This confirms our formula.

**Q3: Set Operations and De Morgan's Laws**
Let $U = \{1, 2, 3, 4, 5, 6, 7, 8\}$, $A = \{1, 2, 3, 4\}$, and $B = \{3, 4, 5, 6\}$.
Verify De Morgan's Law: $(A \cup B)^c = A^c \cap B^c$.

**Answer:**
First, let's find the left side: $(A \cup B)^c$.
$A \cup B = \{1, 2, 3, 4\} \cup \{3, 4, 5, 6\} = \{1, 2, 3, 4, 5, 6\}$.
$(A \cup B)^c = U - (A \cup B) = \{1, 2, 3, 4, 5, 6, 7, 8\} - \{1, 2, 3, 4, 5, 6\} = \{7, 8\}$.

Now, let's find the right side: $A^c \cap B^c$.
$A^c = U - A = \{1, 2, 3, 4, 5, 6, 7, 8\} - \{1, 2, 3, 4\} = \{5, 6, 7, 8\}$.
$B^c = U - B = \{1, 2, 3, 4, 5, 6, 7, 8\} - \{3, 4, 5, 6\} = \{1, 2, 7, 8\}$.
$A^c \cap B^c = \{5, 6, 7, 8\} \cap \{1, 2, 7, 8\} = \{7, 8\}$.

Since $\{7, 8\} = \{7, 8\}$, we have verified that $(A \cup B)^c = A^c \cap B^c$.

**Q4: Application Focus (Exams often ask about these connections!)**
In the context of managing a library's book inventory, describe how the set operations of union, intersection, and difference could be used.

**Answer:**
Let $U$ be the set of all books in the library.
Let $A$ be the set of fiction books.
Let $B$ be the set of books published in the last 5 years.

*   **Union ($A \cup B$):** This would represent the set of all books that are either fiction OR have been published in the last 5 years (or both). This might be useful for a "New Arrivals & Fiction Favorites" display.
*   **Intersection ($A \cap B$):** This would represent the set of all books that are BOTH fiction AND have been published in the last 5 years. This could be useful for a specific promotion like "New Fiction Releases."
*   **Difference ($A - B$):** This would represent the set of all fiction books that were NOT published in the last 5 years. This might be used for identifying older fiction titles that might need special attention or could be part of a "Classics" section.
*   **Difference ($B - A$):** This would represent the set of all books published in the last 5 years that are NOT fiction (i.e., non-fiction books published recently).

---

**Key Takeaways for This Section:**

*   Sets are fundamental building blocks. Be comfortable with the different ways to describe them.
*   The relationships between sets (subset, equality) are crucial for building more complex structures.
*   Set operations (union, intersection, difference, complement) are like arithmetic for collections.
*   De Morgan's Laws are incredibly important and link sets to logic.
*   Venn diagrams are visual aids that greatly help understanding.
*   Always think about how these concepts map to practical computer science applications.

This covers the core concepts of sets and subsets. We've laid a strong foundation! In our next session, we'll build upon this by looking at ordered pairs, Cartesian products, and perhaps start touching on relations themselves. Keep practicing with these definitions and examples – it will pay dividends as we move forward. Any questions?
