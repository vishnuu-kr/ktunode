---
title: "Principle of Inclusion and Exclusion (without proof)"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 2: Fundamental Principles of Counting: The Rules of Sum and Product"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b6005"
status: "completed"
scrapedAt: "2026-05-20T16:32:22.562Z"
---
Absolutely! Here are detailed study notes on the Principle of Inclusion and Exclusion, designed to be comprehensive, engaging, and exam-oriented, while aligning with your course outcomes.

---

# Discrete Mathematical Structures - Module 2: Fundamental Principles of Counting

## Topic: The Principle of Inclusion and Exclusion (Without Proof)

Welcome, everyone! In our exploration of fundamental counting principles, we've already covered the powerful Rules of Sum and Product. Today, we're diving into a technique that extends these ideas to situations where simply adding or multiplying isn't quite enough. We're going to learn about the **Principle of Inclusion and Exclusion**. This principle is a cornerstone of combinatorics and is absolutely essential for solving a wide range of counting problems that involve overlapping sets. You'll see how it directly helps us achieve **CO2: Apply fundamental counting principles... to solve problems related to combinatorial analysis.**

### 1. The Problem: When Simple Addition Fails

Imagine you're organizing a club event, and you want to know how many students are interested in attending either a **Chess Club meeting** or a **Debate Club meeting**. Let's say 20 students are interested in Chess and 15 are interested in Debate. A first thought might be to simply add these numbers: 20 + 15 = 35 students.

But what if some students are interested in *both*? If we just add, we're counting those students twice – once in the Chess group and once in the Debate group. This is where the simple Rule of Sum can lead us astray. We need a way to correct for this "double counting."

This is precisely the kind of scenario the Principle of Inclusion and Exclusion is designed to handle. It gives us a systematic way to count the elements in the union of multiple sets, ensuring we count each element exactly once.

### 2. The Principle of Inclusion and Exclusion for Two Sets

Let's start with the simplest case: two sets. Suppose we have a set A and a set B. We want to find the number of elements in their union, denoted as $|A \cup B|$.

*   **Intuitive Approach:** We know from the Rule of Sum that if A and B were *disjoint* (meaning they have no elements in common), then $|A \cup B| = |A| + |B|$.
*   **The Problem of Overlap:** However, if A and B share some elements, say in their intersection $A \cap B$, then when we add $|A|$ and $|B|$, the elements in $A \cap B$ are included in *both* counts.
*   **The Solution:** To correct this, we need to *subtract* the number of elements in the intersection *once*.

So, for two sets, the Principle of Inclusion and Exclusion states:

$$|A \cup B| = |A| + |B| - |A \cap B|$$

Think of it like this: you count everyone who likes Chess, then you count everyone who likes Debate. You've now counted the "both" people twice. To fix it, you subtract the "both" group exactly once.

**Example:** In our club scenario, suppose 20 students like Chess, 15 like Debate, and 7 students like both.
Using the formula:
$|Chess \cup Debate| = |Chess| + |Debate| - |Chess \cap Debate|$
$|Chess \cup Debate| = 20 + 15 - 7 = 35 - 7 = 28$

So, 28 students are interested in at least one of the clubs. See how we corrected the initial, incorrect sum of 35? This is the power of "inclusion" (adding the sizes) and "exclusion" (subtracting the overlap).

**Connecting to CO2:** This directly illustrates how we apply a fundamental counting principle to solve a problem where sets might overlap. It's a practical application of counting elements in unions.

### 3. Extending to Three Sets

What if we have three sets? Let's say we're interested in students who participate in **Chess Club (C)**, **Debate Club (D)**, or **Photography Club (P)**.
If we simply add $|C| + |D| + |P|$, we'll have overcounted elements that are in the intersections of pairs of sets, and even elements that are in all three sets.

Let's trace the overcounting:
*   Elements in $|C \cap D|$ are counted in $|C|$ and $|D|$.
*   Elements in $|C \cap P|$ are counted in $|C|$ and $|P|$.
*   Elements in $|D \cap P|$ are counted in $|D|$ and $|P|$.
*   Crucially, elements in $|C \cap D \cap P|$ (the intersection of all three) are counted in $|C|$, $|D|$, and $|P|$. That's three times!

The Principle of Inclusion and Exclusion for three sets provides the correction:

$$|C \cup D \cup P| = |C| + |D| + |P| - (|C \cap D| + |C \cap P| + |D \cap P|) + |C \cap D \cap P|$$

Let's break down this formula:
1.  **Include the individual sets:** We start by adding up the sizes of all the individual sets ($|C| + |D| + |P|$). This gets us close, but overcounts.
2.  **Exclude the pairwise intersections:** We then subtract the sizes of all the pairwise intersections ($|C \cap D|$, $|C \cap P|$, $|D \cap P|$). Why subtract? Because each element in these pairwise intersections was counted twice in step 1, so we need to remove one of those counts.
3.  **Re-include the three-way intersection:** Now, consider an element that belongs to all three sets ($C \cap D \cap P$).
    *   In step 1, it was counted 3 times (once for C, once for D, once for P).
    *   In step 2, it was subtracted 3 times (once for $C \cap D$, once for $C \cap P$, once for $D \cap P$).
    *   So, after step 2, this element has been counted $3 - 3 = 0$ times! It's completely missing.
    *   Therefore, we need to *add back* the size of the three-way intersection ($|C \cap D \cap P|$) to ensure these elements are counted exactly once.

**Example:** Suppose at a university event:
*   100 students attended the Chess tournament. ($|C| = 100$)
*   80 students attended the Debate finals. ($|D| = 80$)
*   60 students attended the Photography exhibition. ($|P| = 60$)
*   30 students attended both Chess and Debate. ($|C \cap D| = 30$)
*   25 students attended both Chess and Photography. ($|C \cap P| = 25$)
*   20 students attended both Debate and Photography. ($|D \cap P| = 20$)
*   15 students attended all three events. ($|C \cap D \cap P| = 15$)

We want to find the total number of students who attended at least one event.
Using the principle:
$|C \cup D \cup P| = 100 + 80 + 60 - (30 + 25 + 20) + 15$
$|C \cup D \cup P| = 240 - 75 + 15$
$|C \cup D \cup P| = 165 + 15 = 180$

So, 180 unique students attended at least one of the three events.

**Connecting to CO2 and K3:** This example demonstrates a deeper application of counting principles. We're not just adding; we're strategically adding and subtracting based on set overlaps. The "knowledge level K3" (apply) is clearly in action here as we're solving a problem using the principle.

### 4. The General Principle of Inclusion and Exclusion

This principle can be generalized to any number of sets. If we have $n$ sets, say $A_1, A_2, \ldots, A_n$, the size of their union is given by:

$$|A_1 \cup A_2 \cup \dots \cup A_n| = \sum |A_i| - \sum |A_i \cap A_j| + \sum |A_i \cap A_j \cap A_k| - \dots + (-1)^{n-1} |A_1 \cap A_2 \cap \dots \cap A_n|$$

Let's unpack this general form:
*   **First term ($\sum |A_i|$):** Sum of the sizes of all individual sets. (Include everything).
*   **Second term ($-\sum |A_i \cap A_j|$):** Subtract the sum of the sizes of all pairwise intersections. (Correcting for double counting).
*   **Third term ($+\sum |A_i \cap A_j \cap A_k|$):** Add back the sum of the sizes of all three-way intersections. (Correcting for elements that became zero).
*   **Alternating signs:** The pattern continues with alternating signs. For an intersection of $m$ sets, the term is added if $m$ is odd and subtracted if $m$ is even.
*   **Last term ($(-1)^{n-1} |A_1 \cap \dots \cap A_n|$):** The sign depends on $n$. If $n$ is odd, the last term is added; if $n$ is even, it's subtracted.

**Remember this:** The alternating nature of the signs is the "inclusion" and "exclusion" happening at each level of intersection.

**What do textbooks like Grimaldi and Ramana (5th Ed.) and Veerarajan (1st Ed.) emphasize?**
They highlight that this is a way to count elements in a union by accounting for all possible overlaps. It's a direct extension of the Rule of Sum, providing the necessary correction for non-disjoint sets. The key is to systematically consider all possible combinations of intersections.

**Connecting to CO2 and K3:** This general formula is the ultimate tool for applying fundamental counting principles to complex scenarios with many overlapping sets. Mastering its structure is key.

### 5. Practical Applications and Examples

The Principle of Inclusion and Exclusion (PIE) is incredibly versatile. Let's look at some real-world-ish examples.

#### Example 1: Language Proficiency

At a company, out of 100 employees:
*   60 speak English.
*   40 speak French.
*   30 speak Spanish.
*   15 speak English and French.
*   10 speak English and Spanish.
*   5 speak French and Spanish.
*   2 speak all three languages.

How many employees speak *none* of these languages?

This is a classic PIE problem, but it asks for those *outside* the union.
First, let's find how many speak *at least one* language using PIE.
Let E = set of employees speaking English, F = French, S = Spanish.
$|E \cup F \cup S| = |E| + |F| + |S| - (|E \cap F| + |E \cap S| + |F \cap S|) + |E \cap F \cap S|$
$|E \cup F \cup S| = 60 + 40 + 30 - (15 + 10 + 5) + 2$
$|E \cup F \cup S| = 130 - 30 + 2$
$|E \cup F \cup S| = 100 + 2 = 102$

Wait! The total number of employees is 100. How can 102 speak at least one language? This indicates there might be an issue with the problem statement as presented, or we should interpret the numbers as given. *Assuming the numbers are accurate as provided for the sake of the principle, let's proceed.* If this were a real problem, we'd double-check the data.

Let's re-frame with a slightly different example to avoid the issue of exceeding total.

**Revised Example 1: Language Proficiency (Corrected Data)**

At a company, out of 100 employees:
*   50 speak English.
*   30 speak French.
*   25 speak Spanish.
*   10 speak English and French.
*   8 speak English and Spanish.
*   7 speak French and Spanish.
*   3 speak all three languages.

How many employees speak *none* of these languages?

1.  **Calculate the union ($|E \cup F \cup S|$):**
    $|E \cup F \cup S| = |E| + |F| + |S| - (|E \cap F| + |E \cap S| + |F \cap S|) + |E \cap F \cap S|$
    $|E \cup F \cup S| = 50 + 30 + 25 - (10 + 8 + 7) + 3$
    $|E \cup F \cup S| = 105 - 25 + 3$
    $|E \cup F \cup S| = 80 + 3 = 83$

    So, 83 employees speak at least one of the languages.

2.  **Calculate those speaking none:**
    Total employees = 100
    Employees speaking at least one language = 83
    Employees speaking none = Total - (Employees speaking at least one)
    Employees speaking none = 100 - 83 = 17

**Connecting to CO2, CO3, CO4, and K3:** This problem requires us to work with sets (CO3) and their operations (union, intersection). We apply a counting principle (CO2) to find the size of the union, and then use subtraction to find the complement. The logical steps involve understanding set relationships, which is foundational to discrete mathematics.

#### Example 2: Divisibility (A common type in exams!)

How many positive integers less than or equal to 1000 are divisible by 3, 5, or 7?

This is a perfect fit for PIE. Let $A_3$ be the set of integers $\le 1000$ divisible by 3, $A_5$ for 5, and $A_7$ for 7. We need to find $|A_3 \cup A_5 \cup A_7|$.

Recall that the number of positive integers $\le N$ divisible by $k$ is $\lfloor N/k \rfloor$.

*   $|A_3| = \lfloor 1000/3 \rfloor = 333$
*   $|A_5| = \lfloor 1000/5 \rfloor = 200$
*   $|A_7| = \lfloor 1000/7 \rfloor = 142$

Now for the intersections:
*   $|A_3 \cap A_5|$: Integers divisible by both 3 and 5 are divisible by their LCM, which is 15.
    $|A_3 \cap A_5| = \lfloor 1000/15 \rfloor = 66$
*   $|A_3 \cap A_7|$: Integers divisible by 3 and 7 are divisible by their LCM, which is 21.
    $|A_3 \cap A_7| = \lfloor 1000/21 \rfloor = 47$
*   $|A_5 \cap A_7|$: Integers divisible by 5 and 7 are divisible by their LCM, which is 35.
    $|A_5 \cap A_7| = \lfloor 1000/35 \rfloor = 28$

And the three-way intersection:
*   $|A_3 \cap A_5 \cap A_7|$: Integers divisible by 3, 5, and 7 are divisible by their LCM, which is 105.
    $|A_3 \cap A_5 \cap A_7| = \lfloor 1000/105 \rfloor = 9$

Now, apply PIE:
$|A_3 \cup A_5 \cup A_7| = |A_3| + |A_5| + |A_7| - (|A_3 \cap A_5| + |A_3 \cap A_7| + |A_5 \cap A_7|) + |A_3 \cap A_5 \cap A_7|$
$|A_3 \cup A_5 \cup A_7| = 333 + 200 + 142 - (66 + 47 + 28) + 9$
$|A_3 \cup A_5 \cup A_7| = 675 - 141 + 9$
$|A_3 \cup A_5 \cup A_7| = 534 + 9 = 543$

So, 543 positive integers less than or equal to 1000 are divisible by 3, 5, or 7.

**Common Pitfall Alert:** Students often forget to use the Least Common Multiple (LCM) when calculating intersections of divisibility properties. Always remember that if a number is divisible by two numbers, it's divisible by their LCM. Also, be careful with floor function calculations.

**Connecting to CO2, CO3, and K3:** This problem is a prime example of how PIE is used in number theory contexts within discrete math. It requires understanding divisibility, LCM, and set operations, all of which tie into CO2 (counting principles) and CO3 (sets and structures). The application of the floor function shows a practical aspect often tested.

### 6. Why "Without Proof"?

The prompt mentions "without proof." This means you are expected to *understand and apply* the Principle of Inclusion and Exclusion, not to derive its formula from basic set theory axioms or logical deductions. Textbooks like Grimaldi often provide proofs using induction or set properties. Your task, for the scope of this topic and your learning outcomes, is to grasp *how* it works and *how to use it* to solve problems, especially relating to **CO2**. The core idea is the systematic way it accounts for overlaps.

### 7. Summary and Key Takeaways

*   **The Problem:** Simply adding the sizes of sets can lead to overcounting if the sets have common elements (intersections).
*   **The Solution:** The Principle of Inclusion and Exclusion (PIE) provides a formula to correctly count elements in the union of sets by systematically adding individual set sizes, subtracting pairwise intersections, adding back three-way intersections, and so on, with alternating signs.
*   **For Two Sets:** $|A \cup B| = |A| + |B| - |A \cap B|$.
*   **For Three Sets:** $|A \cup B \cup C| = |A| + |B| + |C| - (|A \cap B| + |A \cap C| + |B \cap C|) + |A \cap B \cap C|$.
*   **Generalization:** The pattern extends to $n$ sets with alternating signs for intersections of increasing size.
*   **Applications:** PIE is vital for problems involving unions of sets, language/skill surveys, divisibility, and derangements (though derangements are a more advanced application).
*   **Exam Tip:** Be meticulous with calculations, especially when dealing with LCM for divisibility problems and correctly identifying all required intersections.

This principle is a powerful tool in your combinatorics toolkit. Practice with varied examples is the best way to get comfortable with its application.

---

### Sample Questions with Answers

**Q1. Conceptual Question:**
Explain why we subtract the pairwise intersections when using the Principle of Inclusion and Exclusion for three sets $A, B, C$.

**Answer:**
When we initially add $|A| + |B| + |C|$, any element belonging to the intersection of two sets (e.g., $A \cap B$) is counted twice (once in $|A|$ and once in $|B|$). Elements belonging to the intersection of all three sets ($A \cap B \cap C$) are counted three times (in $|A|$, $|B|$, and $|C|$). By subtracting the pairwise intersections ($|A \cap B|$, $|A \cap C|$, $|B \cap C|$), we correct the overcounting. An element in $A \cap B$ (but not C) is counted $1+1-1=1$ time. An element in $A \cap B \cap C$ is counted $1+1+1 - (1+1+1) = 3 - 3 = 0$ times. This is why we then need to *add back* the three-way intersection to ensure these elements are counted correctly.

**Q2. Application Question (Exam Style):**
In a class of 50 students, 25 play cricket, 20 play football, and 15 play basketball. 10 play cricket and football, 8 play cricket and basketball, 7 play football and basketball, and 5 play all three games. How many students play *exactly one* of the games?

**Answer:**
Let C = Cricket, F = Football, B = Basketball.
We are given:
$|C|=25, |F|=20, |B|=15$
$|C \cap F|=10, |C \cap B|=8, |F \cap B|=7$
$|C \cap F \cap B|=5$

First, let's find the number of students playing *at least one* game using PIE:
$|C \cup F \cup B| = |C| + |F| + |B| - (|C \cap F| + |C \cap B| + |F \cap B|) + |C \cap F \cap B|$
$|C \cup F \cup B| = 25 + 20 + 15 - (10 + 8 + 7) + 5$
$|C \cup F \cup B| = 60 - 25 + 5 = 35 + 5 = 40$

So, 40 students play at least one game.

Now, to find those playing *exactly one* game, we need to use the counts of intersections:

*   **Exactly Cricket:** $|C| - |C \cap F| - |C \cap B| + |C \cap F \cap B|$
    Wait! This formula counts those in $C$ and subtracts those in $C \cap F$ and $C \cap B$. But those in $C \cap F \cap B$ are subtracted twice. A better way is:
    Number playing only C = $|C| - |C \cap F \text{ only}| - |C \cap B \text{ only}| - |C \cap F \cap B|$

    Let's find the "only" intersections first:
    *   Only $C \cap F$ (not B): $|C \cap F| - |C \cap F \cap B| = 10 - 5 = 5$
    *   Only $C \cap B$ (not F): $|C \cap B| - |C \cap F \cap B| = 8 - 5 = 3$
    *   Only $F \cap B$ (not C): $|F \cap B| - |C \cap F \cap B| = 7 - 5 = 2$

    Now, number playing exactly one game:
    *   **Only Cricket:** $|C| - (\text{only } C \cap F) - (\text{only } C \cap B) - |C \cap F \cap B|$
        $= 25 - 5 - 3 - 5 = 25 - 13 = 12$
    *   **Only Football:** $|F| - (\text{only } C \cap F) - (\text{only } F \cap B) - |C \cap F \cap B|$
        $= 20 - 5 - 2 - 5 = 20 - 12 = 8$
    *   **Only Basketball:** $|B| - (\text{only } C \cap B) - (\text{only } F \cap B) - |C \cap F \cap B|$
        $= 15 - 3 - 2 - 5 = 15 - 10 = 5$

    Total playing exactly one game = 12 (Only C) + 8 (Only F) + 5 (Only B) = **25**.

    **(Self-check):**
    Total = (Exactly 1) + (Exactly 2) + (Exactly 3)
    Exactly 1 = 12 + 8 + 5 = 25
    Exactly 2 = (Only $C \cap F$) + (Only $C \cap B$) + (Only $F \cap B$) = 5 + 3 + 2 = 10
    Exactly 3 = $|C \cap F \cap B| = 5$
    Total = 25 + 10 + 5 = 40. This matches our PIE calculation for $|C \cup F \cup B|$, so our breakdown is correct.

**Q3. Divisibility Question (Exam Style):**
How many positive integers not exceeding 200 are divisible by 4, 6, or 9?

**Answer:**
Let $A_4$ be the set of integers $\le 200$ divisible by 4.
Let $A_6$ be the set of integers $\le 200$ divisible by 6.
Let $A_9$ be the set of integers $\le 200$ divisible by 9.
We need to find $|A_4 \cup A_6 \cup A_9|$.

*   $|A_4| = \lfloor 200/4 \rfloor = 50$
*   $|A_6| = \lfloor 200/6 \rfloor = 33$
*   $|A_9| = \lfloor 200/9 \rfloor = 22$

Intersections (using LCM):
*   $A_4 \cap A_6$: Divisible by LCM(4, 6) = 12. $|A_4 \cap A_6| = \lfloor 200/12 \rfloor = 16$
*   $A_4 \cap A_9$: Divisible by LCM(4, 9) = 36. $|A_4 \cap A_9| = \lfloor 200/36 \rfloor = 5$
*   $A_6 \cap A_9$: Divisible by LCM(6, 9) = 18. $|A_6 \cap A_9| = \lfloor 200/18 \rfloor = 11$

Three-way Intersection:
*   $A_4 \cap A_6 \cap A_9$: Divisible by LCM(4, 6, 9) = LCM(12, 9) = 36.
    $|A_4 \cap A_6 \cap A_9| = \lfloor 200/36 \rfloor = 5$

Applying PIE:
$|A_4 \cup A_6 \cup A_9| = |A_4| + |A_6| + |A_9| - (|A_4 \cap A_6| + |A_4 \cap A_9| + |A_6 \cap A_9|) + |A_4 \cap A_6 \cap A_9|$
$|A_4 \cup A_6 \cup A_9| = 50 + 33 + 22 - (16 + 5 + 11) + 5$
$|A_4 \cup A_6 \cup A_9| = 105 - 32 + 5$
$|A_4 \cup A_6 \cup A_9| = 73 + 5 = \mathbf{78}$

So, 78 positive integers not exceeding 200 are divisible by 4, 6, or 9.

---
