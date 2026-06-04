---
title: "The Principle of Inclusion-Exclusion (Basic and Generalized versions), and applications."
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f85"
status: "completed"
scrapedAt: "2026-05-20T16:32:43.008Z"
---
Absolutely! Here are comprehensive study notes on the Principle of Inclusion-Exclusion, designed to be engaging, insightful, and exam-oriented, aligning with your specified learning outcomes and course objectives.

***

## DISCRETE MATHEMATICS: Module 1 - Sets and Subsets

### Topic: The Principle of Inclusion-Exclusion (Basic and Generalized Versions) and Applications

Welcome, everyone! Today, we're diving into a truly powerful counting technique in discrete mathematics: the **Principle of Inclusion-Exclusion**. This principle is your secret weapon when you need to count the number of elements in the union of several sets, especially when those sets have some overlap. It’s fundamental to solving many combinatorial problems, and understanding it deeply will directly help us with **Course Outcome 2 (CO2)**: "Solve counting problems by applying the elementary counting techniques." We'll see how it extends our ability to count beyond the simpler rules of sum and product.

### 1. The Problem: Why Do We Need Inclusion-Exclusion?

Imagine you're organizing a school event, and you've invited students to participate in different clubs: the Chess Club, the Debate Club, and the Coding Club. Let's say:

*   There are 50 students in the Chess Club.
*   There are 40 students in the Debate Club.
*   There are 30 students in the Coding Club.

If you were asked to find the total number of students participating in *at least one* of these clubs, you might initially think, "Just add them up: 50 + 40 + 30 = 120 students." But wait! What if some students are members of *more than one* club? If we simply add the numbers, we'll be counting those students multiple times. This is where the "inclusion" and "exclusion" come into play.

**Key Idea:** We want to count the number of elements in the union of sets, $|A \cup B \cup C \cup \dots|$, without overcounting.

This problem directly relates to our need to count elements in combined groups, a core aspect of **CO2**.

### 2. The Basic Principle of Inclusion-Exclusion (For Two Sets)

Let's start with the simplest case: two sets, say set A and set B. We want to find the total number of elements in either A or B or both, which is $|A \cup B|$.

We know from the **Rule of Sum** that if A and B are disjoint (have no elements in common), then $|A \cup B| = |A| + |B|$. However, if they are *not* disjoint, we need to adjust.

Look at the Venn Diagram for two sets. When we add $|A|$ and $|B|$, we're counting the elements in the intersection, $A \cap B$, twice – once as part of A and once as part of B. To correct this overcounting, we need to *exclude* the elements in the intersection once.

This gives us the **Principle of Inclusion-Exclusion for Two Sets**:

$|A \cup B| = |A| + |B| - |A \cap B|$

**Think of it like this:**
*   **Include** everyone in A.
*   **Include** everyone in B.
*   Now, the students who are in *both* clubs have been counted twice. So, we need to **exclude** them once.

**Example 1: Bookworms Unite!**
Suppose in a library, 100 people borrowed books this week.
*   60 people borrowed fiction books.
*   50 people borrowed non-fiction books.
*   20 people borrowed *both* fiction and non-fiction books.

How many people borrowed *either* fiction *or* non-fiction books (or both)?

Let F be the set of people who borrowed fiction books, and N be the set of people who borrowed non-fiction books.
We have $|F| = 60$, $|N| = 50$, and $|F \cap N| = 20$.

Using the principle:
$|F \cup N| = |F| + |N| - |F \cap N|$
$|F \cup N| = 60 + 50 - 20$
$|F \cup N| = 110 - 20$
$|F \cup N| = 90$

So, 90 people borrowed at least one type of book.

**Connection to Textbooks:** This fundamental formula is a cornerstone in introductory combinatorics chapters in books like Rosen and Lipschutz. It's the simplest application of the PIE and essential for building intuition.

### 3. The Principle of Inclusion-Exclusion (For Three Sets)

Now, let's extend this to three sets: A, B, and C. We want to find $|A \cup B \cup C|$.

If we just add $|A| + |B| + |C|$, we are overcounting elements in pairwise intersections ($A \cap B$, $A \cap C$, $B \cap C$) and elements in the triple intersection ($A \cap B \cap C$).

Let's trace the overcounting:
*   Elements in $A \cap B$ (but not C) are counted twice (in A and B).
*   Elements in $A \cap C$ (but not B) are counted twice (in A and C).
*   Elements in $B \cap C$ (but not A) are counted twice (in B and C).
*   Elements in $A \cap B \cap C$ are counted *three* times (in A, B, and C).

To fix this, we follow a pattern of including and then excluding:

1.  **Include** the sizes of the individual sets: $|A| + |B| + |C|$.
    *   Now, elements in pairwise intersections are counted twice. Elements in the triple intersection are counted thrice.

2.  **Exclude** the sizes of the pairwise intersections: $- |A \cap B| - |A \cap C| - |B \cap C|$.
    *   Elements in pairwise intersections (but not the triple intersection) are now counted $2 - 2 = 0$ times. This is still wrong!
    *   Elements in the triple intersection ($A \cap B \cap C$) were counted three times, and now we subtract them three times. So they are counted $3 - 3 = 0$ times. This is also wrong!

3.  **Include** the size of the triple intersection: $+ |A \cap B \cap C|$.
    *   Now, consider an element in $A \cap B \cap C$. It was counted:
        *   +1 (for A)
        *   +1 (for B)
        *   +1 (for C)
        *   -1 (for $A \cap B$)
        *   -1 (for $A \cap C$)
        *   -1 (for $B \cap C$)
        *   +1 (for $A \cap B \cap C$)
        *   Total count: $1+1+1 - 1-1-1 + 1 = 1$. Correct!

This leads to the **Principle of Inclusion-Exclusion for Three Sets**:

$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$

**Example 2: The University Event**
A university surveyed 200 students about their extracurricular activities.
*   120 students play sports.
*   90 students participate in cultural clubs.
*   70 students are in the student government.
*   40 students play sports AND participate in cultural clubs.
*   30 students play sports AND are in student government.
*   25 students participate in cultural clubs AND are in student government.
*   15 students are involved in ALL THREE activities.

How many students are involved in *at least one* of these activities?

Let S be the set of students playing sports, C be those in cultural clubs, and G be those in student government.
$|S| = 120$, $|C| = 90$, $|G| = 70$
$|S \cap C| = 40$, $|S \cap G| = 30$, $|C \cap G| = 25$
$|S \cap C \cap G| = 15$

Using the Principle of Inclusion-Exclusion for three sets:
$|S \cup C \cup G| = |S| + |C| + |G| - |S \cap C| - |S \cap G| - |C \cap G| + |S \cap C \cap G|$
$|S \cup C \cup G| = 120 + 90 + 70 - 40 - 30 - 25 + 15$
$|S \cup C \cup G| = 280 - (40 + 30 + 25) + 15$
$|S \cup C \cup G| = 280 - 95 + 15$
$|S \cup C \cup G| = 185 + 15$
$|S \cup C \cup G| = 200$

In this particular case, all 200 surveyed students are involved in at least one activity. This often happens in textbook examples, but in real life, you might get a number less than the total surveyed, meaning some students do none of these.

**Exam Tip:** For three sets, you *must* remember the signs: +, -, +. And don't forget the triple intersection! Missing any of these terms is a common mistake.

### 4. The Generalized Principle of Inclusion-Exclusion

What if we have more than three sets? Say $A_1, A_2, A_3, \dots, A_n$? We want to find $|A_1 \cup A_2 \cup \dots \cup A_n|$.

The principle of inclusion-exclusion generalizes beautifully. It's a systematic way to count:

1.  **Sum** the sizes of all individual sets.
2.  **Subtract** the sum of the sizes of all pairwise intersections.
3.  **Add** the sum of the sizes of all three-way intersections.
4.  **Subtract** the sum of the sizes of all four-way intersections.
5.  ... and so on, alternating signs, until you add (or subtract) the size of the intersection of all $n$ sets.

The general formula is:

$|\cup_{i=1}^{n} A_i| = \sum_{i} |A_i| - \sum_{i < j} |A_i \cap A_j| + \sum_{i < j < k} |A_i \cap A_j \cap A_k| - \dots + (-1)^{n-1} |A_1 \cap A_2 \cap \dots \cap A_n|$

**Let's break down the notation:**
*   $\sum_{i} |A_i|$: This is the sum of sizes of all single sets (e.g., $|A_1|, |A_2|, \dots$).
*   $\sum_{i < j} |A_i \cap A_j|$: This is the sum of sizes of all possible intersections of two distinct sets (e.g., $|A_1 \cap A_2|, |A_1 \cap A_3|, |A_2 \cap A_3|, \dots$). The condition $i < j$ ensures we don't double count intersections (like $|A_2 \cap A_1|$ when we already have $|A_1 \cap A_2|$) and don't intersect a set with itself.
*   $\sum_{i < j < k} |A_i \cap A_j \cap A_k|$: This is the sum of sizes of all possible intersections of three distinct sets.
*   The term $(-1)^{k-1}$ determines the sign for the sum of $k$-way intersections. If $k=1$, it's $(-1)^0 = +1$. If $k=2$, it's $(-1)^1 = -1$. If $k=3$, it's $(-1)^2 = +1$, and so on.

**Analogy:** Think of it like carefully counting your friends who play different sports.
*   First, you count everyone who plays Soccer. Then everyone who plays Basketball. Then everyone who plays Tennis. (You've included everyone who plays at least one sport, but people playing multiple sports are counted multiple times).
*   Then, you subtract those who play *both* Soccer and Basketball. Subtract those who play Soccer and Tennis. Subtract those who play Basketball and Tennis. (Now, those playing exactly two sports are counted correctly – once. But those playing all three sports have been counted $3 - 3 = 0$ times).
*   So, you add back those who play Soccer, Basketball, *and* Tennis. (Now, everyone who plays at least one sport is counted exactly once).

**Connection to CO2:** This generalized form is the powerhouse for solving complex counting problems. It shows how to manage overlapping categories, which is a core skill for **CO2**. Rosen's chapter on applications of the Pigeonhole Principle often features PIE as a tool.

**Example 3: The Language Learners**
In a group of students, 100 students study Spanish (S), 80 study French (F), 70 study German (G), and 60 study Italian (I).
We also know:
*   30 study S and F
*   25 study S and G
*   20 study S and I
*   20 study F and G
*   15 study F and I
*   10 study G and I
*   10 study S, F, and G
*   8 study S, F, and I
*   7 study S, G, and I
*   5 study F, G, and I
*   3 study S, F, G, and I

How many students study at least one of these four languages?

Let S, F, G, I be the sets of students studying Spanish, French, German, and Italian, respectively.
$|S| = 100, |F| = 80, |G| = 70, |I| = 60$

Sum of singles: $100 + 80 + 70 + 60 = 310$

Pairwise intersections:
$|S \cap F| = 30, |S \cap G| = 25, |S \cap I| = 20$
$|F \cap G| = 20, |F \cap I| = 15, |G \cap I| = 10$
Sum of pairs: $30 + 25 + 20 + 20 + 15 + 10 = 120$

Triple intersections:
$|S \cap F \cap G| = 10$
$|S \cap F \cap I| = 8$
$|S \cap G \cap I| = 7$
$|F \cap G \cap I| = 5$
Sum of triples: $10 + 8 + 7 + 5 = 30$

Quadruple intersection:
$|S \cap F \cap G \cap I| = 3$

Applying the Generalized PIE:
$|S \cup F \cup G \cup I| = (\text{sum of singles}) - (\text{sum of pairs}) + (\text{sum of triples}) - (\text{sum of quadruples})$
$|S \cup F \cup G \cup I| = 310 - 120 + 30 - 3$
$|S \cup F \cup G \cup I| = 190 + 30 - 3$
$|S \cup F \cup G \cup I| = 220 - 3$
$|S \cup F \cup G \cup I| = 217$

So, 217 students study at least one of these four languages.

**Common Pitfall:** Carefully count how many intersections of each "size" (pairs, triples, etc.) there are. For $n$ sets, the number of $k$-way intersections is given by $\binom{n}{k}$. In Example 3, for pairs (k=2) from 4 sets (n=4), there are $\binom{4}{2} = 6$ pairs. For triples (k=3), there are $\binom{4}{3} = 4$ triples. For quadruples (k=4), there is $\binom{4}{4} = 1$ quadruple.

### 5. Applications of the Principle of Inclusion-Exclusion

The PIE is not just an abstract counting tool; it has significant applications across computer science and mathematics, helping us fulfill **CO2** and even touching on concepts related to **CO1** (logic in problem formulation) and **CO3** (classifying problems).

#### 5.1. Counting Derangements

A **derangement** of a sequence of objects is a permutation of the objects such that *no* object appears in its original position.
For example, if you have letters A, B, C, and you want to put them into envelopes addressed to A, B, C respectively, a derangement would be any arrangement where no letter goes into its correct envelope.
(B, C, A) is a derangement.
(C, A, B) is a derangement.
(A, C, B) is NOT a derangement because A is in its correct place.

Let $D_n$ (or $!n$) be the number of derangements of $n$ objects.
We can use PIE to find $D_n$.
Consider $n$ objects $1, 2, \dots, n$. Let $S$ be the set of all permutations of these $n$ objects, so $|S| = n!$.
Let $A_i$ be the property that object $i$ is in its correct position (i.e., object $i$ is in the $i$-th position). We want to count the number of permutations that have *none* of these properties, which is $|S| - |A_1 \cup A_2 \cup \dots \cup A_n|$.

Using PIE:
$|A_1 \cup A_2 \cup \dots \cup A_n| = \sum |A_i| - \sum |A_i \cap A_j| + \sum |A_i \cap A_j \cap A_k| - \dots$

*   $|A_i|$: If object $i$ is fixed in its position, the remaining $n-1$ objects can be permuted in $(n-1)!$ ways. There are $\binom{n}{1}$ such sets. So, $\sum |A_i| = \binom{n}{1}(n-1)!$.
*   $|A_i \cap A_j|$: If objects $i$ and $j$ are fixed, the remaining $n-2$ objects can be permuted in $(n-2)!$ ways. There are $\binom{n}{2}$ such pairs. So, $\sum |A_i \cap A_j| = \binom{n}{2}(n-2)!$.
*   In general, for $k$ fixed objects, there are $\binom{n}{k}$ ways to choose which $k$ objects are fixed, and $(n-k)!$ ways to permute the rest. So, $\sum |A_{i_1} \cap \dots \cap A_{i_k}| = \binom{n}{k}(n-k)!$.

Recall that $\binom{n}{k} = \frac{n!}{k!(n-k)!}$.
So, $\binom{n}{k}(n-k)! = \frac{n!}{k!(n-k)!} (n-k)! = \frac{n!}{k!}$.

Therefore,
$|A_1 \cup A_2 \cup \dots \cup A_n| = \binom{n}{1}(n-1)! - \binom{n}{2}(n-2)! + \binom{n}{3}(n-3)! - \dots + (-1)^{n-1}\binom{n}{n}(n-n)!$
$= \frac{n!}{1!} - \frac{n!}{2!} + \frac{n!}{3!} - \dots + (-1)^{n-1}\frac{n!}{n!}$

The number of derangements $D_n$ is the total permutations minus those with at least one fixed point:
$D_n = n! - |A_1 \cup A_2 \cup \dots \cup A_n|$
$D_n = n! - \left( \frac{n!}{1!} - \frac{n!}{2!} + \frac{n!}{3!} - \dots + (-1)^{n-1}\frac{n!}{n!} \right)$
$D_n = n! - \frac{n!}{1!} + \frac{n!}{2!} - \frac{n!}{3!} + \dots + (-1)^n\frac{n!}{n!}$
$D_n = n! \left( 1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \dots + \frac{(-1)^n}{n!} \right)$
$D_n = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}$

This formula for derangements is a classic application, often found in advanced chapters of discrete math texts like Ross and Wright. It’s a great example of how PIE helps solve non-obvious counting problems.

**Example 4: The Hat Check Problem**
Suppose $n$ gentlemen check their hats at a party. The hats are mixed up, and each gentleman is given a hat at random. What is the probability that *no* gentleman receives his own hat?

This is precisely the problem of derangements! The probability is $\frac{D_n}{n!} = \sum_{k=0}^{n} \frac{(-1)^k}{k!}$.
As $n$ gets large, this sum approaches $e^{-1} \approx 0.3678$. So, for a large party, there's about a 36.8% chance that no one gets their own hat!

#### 5.2. Counting Integers with Specific Properties

PIE is extremely useful for counting integers in a given range that are divisible by certain numbers, or *not* divisible by certain numbers. This ties directly into **CO2**.

**Example 5: Integers Not Divisible by 2, 3, or 5**
How many integers between 1 and 100 (inclusive) are *not* divisible by 2, 3, or 5?

Let U be the set of integers from 1 to 100. $|U| = 100$.
Let $A_2$ be the set of integers in U divisible by 2.
Let $A_3$ be the set of integers in U divisible by 3.
Let $A_5$ be the set of integers in U divisible by 5.

We want to find $|U| - |A_2 \cup A_3 \cup A_5|$. We'll use PIE to find $|A_2 \cup A_3 \cup A_5|$.

To find the size of a set of integers divisible by $k$ in a range $[1, N]$, we use $\lfloor N/k \rfloor$.
*   $|A_2| = \lfloor 100/2 \rfloor = 50$
*   $|A_3| = \lfloor 100/3 \rfloor = 33$
*   $|A_5| = \lfloor 100/5 \rfloor = 20$

Intersections of two sets:
*   $A_2 \cap A_3$: Divisible by LCM(2,3) = 6. $|A_2 \cap A_3| = \lfloor 100/6 \rfloor = 16$
*   $A_2 \cap A_5$: Divisible by LCM(2,5) = 10. $|A_2 \cap A_5| = \lfloor 100/10 \rfloor = 10$
*   $A_3 \cap A_5$: Divisible by LCM(3,5) = 15. $|A_3 \cap A_5| = \lfloor 100/15 \rfloor = 6$

Intersection of three sets:
*   $A_2 \cap A_3 \cap A_5$: Divisible by LCM(2,3,5) = 30. $|A_2 \cap A_3 \cap A_5| = \lfloor 100/30 \rfloor = 3$

Now, apply PIE for $|A_2 \cup A_3 \cup A_5|$:
$|A_2 \cup A_3 \cup A_5| = (|A_2| + |A_3| + |A_5|) - (|A_2 \cap A_3| + |A_2 \cap A_5| + |A_3 \cap A_5|) + |A_2 \cap A_3 \cap A_5|$
$|A_2 \cup A_3 \cup A_5| = (50 + 33 + 20) - (16 + 10 + 6) + 3$
$|A_2 \cup A_3 \cup A_5| = 103 - 32 + 3$
$|A_2 \cup A_3 \cup A_5| = 71 + 3 = 74$

So, 74 integers between 1 and 100 are divisible by 2, 3, or 5.
The number of integers *not* divisible by 2, 3, or 5 is:
$|U| - |A_2 \cup A_3 \cup A_5| = 100 - 74 = 26$.

**Exam Strategy:** When counting "none of these" properties, the standard approach is to count "at least one" using PIE and subtract from the total. Remember to use floor functions $\lfloor \cdot \rfloor$ for divisibility counts.

#### 5.3. Surjective Mappings (Onto Functions)

Counting the number of surjective functions from a set of size $m$ to a set of size $n$ is another classic application of PIE. This relates to counting problems where elements from one set must "cover" all elements of another set. This is a more advanced topic but firmly within **CO2**.

Let $A$ be a set with $|A|=m$ and $B$ be a set with $|B|=n$. We want to count the number of functions $f: A \to B$ such that for every $y \in B$, there is at least one $x \in A$ with $f(x) = y$.

The total number of functions from $A$ to $B$ is $n^m$.
Let $B = \{y_1, y_2, \dots, y_n\}$.
For $i = 1, \dots, n$, let $P_i$ be the property that the element $y_i \in B$ is *not* in the image of $f$.
We want to count functions with *none* of these properties, i.e., $n^m - |P_1 \cup P_2 \cup \dots \cup P_n|$.

Using PIE:
*   $|P_i|$: If $y_i$ is not in the image, then $f$ maps $A$ to $B \setminus \{y_i\}$, which has $n-1$ elements. The number of such functions is $(n-1)^m$. There are $\binom{n}{1}$ choices for $y_i$. So $\sum |P_i| = \binom{n}{1}(n-1)^m$.
*   $|P_i \cap P_j|$: If $y_i$ and $y_j$ are not in the image, $f$ maps $A$ to $B \setminus \{y_i, y_j\}$, which has $n-2$ elements. The number of such functions is $(n-2)^m$. There are $\binom{n}{2}$ choices for $\{y_i, y_j\}$. So $\sum |P_i \cap P_j| = \binom{n}{2}(n-2)^m$.
*   In general, for $k$ elements not in the image, there are $\binom{n}{k}(n-k)^m$ functions.

The number of functions with at least one element not in the image is:
$\sum_{k=1}^{n} (-1)^{k-1} \binom{n}{k} (n-k)^m$

The number of surjective functions is:
$N(\text{surjective}) = n^m - \sum_{k=1}^{n} (-1)^{k-1} \binom{n}{k} (n-k)^m$
$N(\text{surjective}) = n^m + \sum_{k=1}^{n} (-1)^{k} \binom{n}{k} (n-k)^m$
$N(\text{surjective}) = \sum_{k=0}^{n} (-1)^k \binom{n}{k} (n-k)^m$

This formula counts the number of ways to distribute $m$ distinct items into $n$ distinct boxes such that no box is empty. It's also related to Stirling numbers of the second kind, $S(m, n)$, by the relation $n! S(m, n) = \sum_{k=0}^{n} (-1)^k \binom{n}{k} (n-k)^m$.

### 6. Conclusion and Key Takeaways

The Principle of Inclusion-Exclusion is a sophisticated counting method that allows us to accurately determine the size of the union of sets by systematically accounting for overlaps.
*   **For two sets:** $|A \cup B| = |A| + |B| - |A \cap B|$.
*   **For three sets:** $|A \cup B \cup C| = |A| + |B| + |C| - (|A \cap B| + |A \cap C| + |B \cap C|) + |A \cap B \cap C|$.
*   **Generalized:** Sum of singles, minus sum of pairs, plus sum of triples, alternating signs until the intersection of all sets. The sign for $k$-way intersections is $(-1)^{k-1}$.
*   **Key Applications:** Derangements, counting integers with specific divisibility properties, counting surjective mappings.
*   **Exam Focus:** Be precise with the signs and the terms. Practice identifying which sets are involved and their intersections. The floor function $\lfloor N/k \rfloor$ is crucial for divisibility problems.

Remember this: PIE is your go-to when simple addition leads to overcounting due to shared elements. It’s a fundamental tool for your **CO2** mastery!

***

### Sample Questions with Answers

**Question 1 (Conceptual):**
Explain why the Principle of Inclusion-Exclusion is necessary when calculating the size of the union of sets. What problem does it solve?

**Answer:**
The Principle of Inclusion-Exclusion (PIE) is necessary because simply adding the sizes of individual sets ($|A| + |B| + \dots$) leads to overcounting elements that belong to multiple sets (i.e., elements in the intersections of these sets). PIE solves this by systematically adding the sizes of individual sets, then subtracting the sizes of pairwise intersections, then adding the sizes of three-way intersections, and so on, alternating signs. This process ensures that each element in the union is counted exactly once, regardless of how many sets it belongs to. It elegantly accounts for the "inclusion" of elements in overlapping regions and the "exclusion" of those same elements when they are counted multiple times in the initial sums.

**Question 2 (Application - Basic PIE):**
A survey of 100 students revealed that 50 liked pizza, 60 liked burgers, and 30 liked both. How many students liked at least one of these foods?

**Answer:**
Let P be the set of students who liked pizza, and B be the set of students who liked burgers.
We are given:
$|P| = 50$
$|B| = 60$
$|P \cap B| = 30$

We want to find $|P \cup B|$. Using the Principle of Inclusion-Exclusion for two sets:
$|P \cup B| = |P| + |B| - |P \cap B|$
$|P \cup B| = 50 + 60 - 30$
$|P \cup B| = 110 - 30$
$|P \cup B| = 80$

Therefore, 80 students liked at least one of these foods.

**Question 3 (Application - Generalized PIE / Divisibility):**
How many positive integers not exceeding 1000 are divisible by 3 or 5 but not by 7?

**Answer:**
Let U be the set of integers from 1 to 1000. $|U| = 1000$.
Let $A_3$ be the set of integers in U divisible by 3.
Let $A_5$ be the set of integers in U divisible by 5.
Let $A_7$ be the set of integers in U divisible by 7.

We want to find the number of elements that are in $(A_3 \cup A_5)$ BUT NOT in $A_7$. This can be written as $|(A_3 \cup A_5) \setminus A_7|$.
Using set properties, this is $|(A_3 \cup A_5) \cap A_7^c|$.
Alternatively, we can calculate $|A_3 \cup A_5|$ and then subtract the count of those elements that are also divisible by 7.
This is $|A_3 \cup A_5| - |(A_3 \cup A_5) \cap A_7|$.

Let's calculate $|A_3 \cup A_5|$ first using PIE:
$|A_3| = \lfloor 1000/3 \rfloor = 333$
$|A_5| = \lfloor 1000/5 \rfloor = 200$
$|A_3 \cap A_5|$ (divisible by LCM(3,5)=15) $= \lfloor 1000/15 \rfloor = 66$
$|A_3 \cup A_5| = |A_3| + |A_5| - |A_3 \cap A_5| = 333 + 200 - 66 = 533 - 66 = 467$.

Now, we need to find the number of these 467 integers that are also divisible by 7.
These are integers divisible by 3 and 7, OR by 5 and 7.
This is $|(A_3 \cap A_7) \cup (A_5 \cap A_7)|$.
Using PIE for this:
$|(A_3 \cap A_7) \cup (A_5 \cap A_7)| = |A_3 \cap A_7| + |A_5 \cap A_7| - |(A_3 \cap A_7) \cap (A_5 \cap A_7)|$
$|A_3 \cap A_7|$ (divisible by 21) $= \lfloor 1000/21 \rfloor = 47$
$|A_5 \cap A_7|$ (divisible by 35) $= \lfloor 1000/35 \rfloor = 28$
$|(A_3 \cap A_7) \cap (A_5 \cap A_7)| = |A_3 \cap A_5 \cap A_7|$ (divisible by LCM(3,5,7)=105) $= \lfloor 1000/105 \rfloor = 9$

So, $|(A_3 \cap A_7) \cup (A_5 \cap A_7)| = 47 + 28 - 9 = 75 - 9 = 66$.
These 66 numbers are divisible by 3 or 5, AND by 7.

The number of integers divisible by 3 or 5 BUT NOT by 7 is:
$|A_3 \cup A_5| - |(A_3 \cup A_5) \cap A_7|$
$= |A_3 \cup A_5| - |(A_3 \cap A_7) \cup (A_5 \cap A_7)|$
$= 467 - 66 = 401$.

Therefore, 401 positive integers not exceeding 1000 are divisible by 3 or 5 but not by 7.

**Question 4 (Conceptual/Formula):**
Write down the formula for the number of derangements of $n$ elements, $D_n$, and briefly explain its derivation using PIE.

**Answer:**
The formula for the number of derangements of $n$ elements is:
$D_n = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!} = n! \left( \frac{1}{0!} - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \dots + \frac{(-1)^n}{n!} \right)$.

**Derivation using PIE:**
Let $S$ be the set of all $n!$ permutations of $n$ elements. Let $A_i$ be the property that element $i$ is in its correct position. We want to count permutations with none of these properties.
$D_n = |S| - |A_1 \cup A_2 \cup \dots \cup A_n|$.
Using PIE, $|A_1 \cup \dots \cup A_n| = \sum |A_i| - \sum |A_i \cap A_j| + \dots$.
The number of permutations where $k$ specific elements are in their correct positions is $(n-k)!$.
There are $\binom{n}{k}$ ways to choose which $k$ elements are in their correct positions.
So, the sum of the sizes of all $k$-way intersections is $\binom{n}{k}(n-k)! = \frac{n!}{k!(n-k)!}(n-k)! = \frac{n!}{k!}$.
Therefore, $|A_1 \cup \dots \cup A_n| = \frac{n!}{1!} - \frac{n!}{2!} + \frac{n!}{3!} - \dots + (-1)^{n-1}\frac{n!}{n!}$.
$D_n = n! - \left( \frac{n!}{1!} - \frac{n!}{2!} + \dots + (-1)^{n-1}\frac{n!}{n!} \right)$
$D_n = n! - \frac{n!}{1!} + \frac{n!}{2!} - \frac{n!}{3!} + \dots + (-1)^n\frac{n!}{n!}$
$D_n = n! \left( 1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \dots + \frac{(-1)^n}{n!} \right) = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}$.

***
