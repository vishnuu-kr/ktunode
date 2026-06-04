---
title: "Truth tables"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 1: Introduction to Logic: Propositional Logic"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5ff4"
status: "completed"
scrapedAt: "2026-05-20T16:31:30.741Z"
---
## Module 1: Introduction to Logic: Propositional Logic

### Topic: Truth Tables

**(Connecting to Course Outcomes):**

Welcome, everyone! In this module, we're laying the foundation for all the amazing things we'll do in Discrete Mathematical Structures. Logic is our bedrock, and today, we're diving into a fundamental tool: **truth tables**. You might be thinking, "Why do we need tables to talk about truth?" Well, in mathematics and computer science, we need to be incredibly precise about what's true and what's false, especially when we're building complex systems or proving theorems.

Understanding truth tables is crucial for achieving **CO1: Apply logical reasoning and formal methods to construct and verify logical arguments and proofs involving propositions, truth tables, logical equivalence, and quantifiers.** You'll see how truth tables help us analyze the validity of arguments and understand how logical statements combine.

Think of it this way: we're learning the alphabet of logical statements. And truth tables are like our grammar rules, showing us how these letters combine to form meaningful (and sometimes not-so-meaningful!) "sentences" of logic.

#### What Exactly is a Proposition?

Before we jump into tables, let's clarify what we mean by a "proposition." In logic, a proposition is simply a declarative sentence that is either **true** or **false**, but not both. It's a statement of fact.

*   **Examples of Propositions:**
    *   "The sky is blue." (True)
    *   "2 + 2 = 5." (False)
    *   "Paris is the capital of France." (True)

*   **What are NOT Propositions?**
    *   "What time is it?" (This is a question.)
    *   "Close the door!" (This is a command.)
    *   "This sentence is false." (This is a paradox – it can't be definitively true or false.)

We often use letters like $p, q, r$ to represent simple propositions. For instance, let $p$ be the proposition "It is raining," and let $q$ be the proposition "The ground is wet."

#### Building Blocks: Logical Connectives

Now, just like in English where we combine simple ideas with words like "and," "or," and "not," in logic, we use **logical connectives** to combine propositions into more complex ones. The truth value of these complex propositions depends on the truth values of the simple propositions they contain. Let's introduce the most common ones:

1.  **Negation (NOT):** Denoted by $\neg$ or $\sim$. If $p$ is a proposition, then $\neg p$ is the proposition "not $p$." Its truth value is opposite to that of $p$.

    *   **Analogy:** If $p$ is "The cat is black," then $\neg p$ is "The cat is not black." If the cat *is* black, $\neg p$ is false. If the cat *isn't* black, $\neg p$ is true.

2.  **Conjunction (AND):** Denoted by $\land$. The proposition $p \land q$ is true if and only if both $p$ and $q$ are true.

    *   **Analogy:** Imagine a party invitation that says, "You must bring a gift *and* RSVP." For you to be admitted, both conditions must be met. If you bring a gift but don't RSVP, you're out. If you RSVP but don't bring a gift, you're out. Only if you do both are you in!

3.  **Disjunction (OR):** Denoted by $\lor$. The proposition $p \lor q$ is true if either $p$ is true, or $q$ is true, or both are true. This is the *inclusive OR*.

    *   **Analogy:** Think about a restaurant menu that says, "You can have soup *or* salad with your meal." This usually means you can have soup, or you can have salad, or, in some cases, you might even be able to have both (though often it's one or the other). The logical "OR" is inclusive – it covers all possibilities where at least one of the statements is true.

4.  **Implication (IF...THEN...):** Denoted by $\rightarrow$ or $\implies$. The proposition $p \rightarrow q$ is read as "if $p$, then $q$." The statement $p$ is called the hypothesis (or antecedent), and $q$ is called the conclusion (or consequent). This one can be a bit tricky!

    *   **Analogy:** Let $p$ be "It is raining" and $q$ be "The ground is wet." So, $p \rightarrow q$ is "If it is raining, then the ground is wet."
        *   If it *is* raining ($p$ is True) and the ground *is* wet ($q$ is True), then the statement "If it is raining, then the ground is wet" is True. This makes sense.
        *   If it *is* raining ($p$ is True) but the ground *is not* wet ($q$ is False) – maybe there's a giant tarp covering everything – then the statement "If it is raining, then the ground is wet" is False. We expected the ground to get wet, and it didn't.
        *   Now, what if it *is not* raining ($p$ is False)?
            *   If it's not raining ($p$ is False) and the ground *is* wet ($q$ is True) – perhaps someone spilled water – is the statement "If it is raining, then the ground is wet" false? No! The statement doesn't claim anything about what happens when it *doesn't* rain. So, the implication is still considered True. This is sometimes called the "vacuously true" case.
            *   If it's not raining ($p$ is False) and the ground *is not* wet ($q$ is False) – it's a dry, sunny day – is the statement "If it is raining, then the ground is wet" false? Again, no! The condition for the implication (it is raining) wasn't met, so the implication holds true.

    *   **Key takeaway for Implication:** An implication $p \rightarrow q$ is **false only when $p$ is true and $q$ is false**. In all other cases, it's true. This can feel counter-intuitive at first, but it's essential for the consistency of logical systems.

5.  **Biconditional (IF AND ONLY IF):** Denoted by $\leftrightarrow$ or $\Leftrightarrow$. The proposition $p \leftrightarrow q$ is true if and only if $p$ and $q$ have the same truth value (both are true, or both are false). It's essentially saying "$p$ implies $q$" AND "$q$ implies $p$".

    *   **Analogy:** Consider the statement: "You will pass the course if and only if you score at least 70% on the final exam." This means two things:
        *   If you score at least 70% ($p$), then you will pass ($q$). ($p \rightarrow q$)
        *   If you pass ($q$), then you must have scored at least 70% ($p$). ($q \rightarrow p$)
        *   So, if you score 75%, you pass. If you score 60%, you don't pass. The truth values of "scoring 70% or more" and "passing the course" are locked together.

#### The Power of Truth Tables

Alright, we've got our basic propositions and connectives. Now, how do we analyze complex statements formed by these? This is where truth tables shine!

A **truth table** is a systematic way to determine the truth value of a compound proposition for all possible combinations of truth values of its atomic (simple) propositions. It's like a truth forensics tool!

**(Connecting to CO1):** Truth tables are our primary method for verifying logical equivalence and understanding the behavior of logical formulas. They allow us to rigorously check if two statements always have the same truth value, which is fundamental to constructing proofs.

**How to Construct a Truth Table:**

Let's break this down into a step-by-step process. Imagine you're building a complex LEGO structure; you need to place each brick carefully.

**Step 1: Identify the Atomic Propositions.**
Find all the simple propositions in your compound statement. Let's say your statement involves $p$ and $q$.

**Step 2: Determine the Number of Rows.**
If you have $n$ distinct atomic propositions, there will be $2^n$ possible combinations of truth values. This is because each proposition can be either True (T) or False (F).

*   If you have 1 proposition ($p$), there are $2^1 = 2$ rows (T, F).
*   If you have 2 propositions ($p, q$), there are $2^2 = 4$ rows (TT, TF, FT, FF).
*   If you have 3 propositions ($p, q, r$), there are $2^3 = 8$ rows (TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF).

**Step 3: Set Up the Columns.**
Create columns for each atomic proposition, and then columns for each intermediate compound proposition you need to evaluate, all the way up to the final compound proposition.

**Step 4: Fill in the Truth Values for Atomic Propositions.**
Systematically list all $2^n$ combinations of truth values for your atomic propositions. A common way to do this is to alternate T/F for the rightmost column, then T/T/F/F for the next column to the left, then TTTT/FFFF for the next, and so on. This ensures you cover every possibility without repetition.

**Step 5: Evaluate the Compound Propositions.**
Working from left to right (or by dependency), fill in the truth values for the compound propositions based on the truth values of their constituent parts and the definitions of the logical connectives.

*   Start with negations.
*   Then evaluate conjunctions and disjunctions.
*   Then implications and biconditionals.

**Step 6: Identify the Final Column.**
The last column will represent the truth value of the entire compound proposition for each combination of inputs.

#### Example 1: Analyzing a Simple Implication

Let's construct a truth table for the proposition $p \rightarrow q$. We already discussed its meaning, but let's see it formally.

*   **Atomic Propositions:** $p, q$. (n=2)
*   **Number of Rows:** $2^2 = 4$.

| $p$ | $q$ | $p \rightarrow q$ |
| :--: | :--: | :---------------: |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

**Explanation of the table:**
*   Row 1: If $p$ is T and $q$ is T, then $p \rightarrow q$ is T. (e.g., "If it's sunny, I'll wear sunglasses." - Sunny, wearing sunglasses. Valid.)
*   Row 2: If $p$ is T and $q$ is F, then $p \rightarrow q$ is F. (e.g., "If it's sunny, I'll wear sunglasses." - Sunny, but not wearing sunglasses. Statement is broken!)
*   Row 3: If $p$ is F and $q$ is T, then $p \rightarrow q$ is T. (e.g., "If it's sunny, I'll wear sunglasses." - Not sunny, but I'm wearing sunglasses anyway. The statement isn't violated because the condition wasn't met.)
*   Row 4: If $p$ is F and $q$ is F, then $p \rightarrow q$ is T. (e.g., "If it's sunny, I'll wear sunglasses." - Not sunny, not wearing sunglasses. The statement is not violated.)

**Remember this:** The implication $p \rightarrow q$ is only false when $p$ is true and $q$ is false.

#### Example 2: A More Complex Proposition

Let's build a truth table for $(\neg p \lor q) \rightarrow (p \rightarrow q)$. This is a good example to practice the steps.

*   **Atomic Propositions:** $p, q$. (n=2)
*   **Number of Rows:** $2^2 = 4$.

We'll need columns for $\neg p$, $(\neg p \lor q)$, and then $p \rightarrow q$, and finally the main implication.

| $p$ | $q$ | $\neg p$ | $\neg p \lor q$ | $p \rightarrow q$ | $(\neg p \lor q) \rightarrow (p \rightarrow q)$ |
| :--: | :--: | :-----: | :-------------: | :---------------: | :------------------------------------------------: |
| T | T | F | T | T | T |
| T | F | F | F | F | T |
| F | T | T | T | T | T |
| F | F | T | T | T | T |

**How we filled it:**
1.  **Columns $p, q$:** Filled with all combinations (TT, TF, FT, FF).
2.  **Column $\neg p$:** Invert the values of $p$.
3.  **Column $\neg p \lor q$:** Apply the OR rule to columns $\neg p$ and $q$. For example, in row 2: $\neg p$ is F, $q$ is F. F $\lor$ F is F. In row 3: $\neg p$ is T, $q$ is T. T $\lor$ T is T.
4.  **Column $p \rightarrow q$:** Apply the implication rule to columns $p$ and $q$. We did this in Example 1.
5.  **Final Column $(\neg p \lor q) \rightarrow (p \rightarrow q)$:** Now we treat $(\neg p \lor q)$ as our new "hypothesis" and $(p \rightarrow q)$ as our new "conclusion." We apply the implication rule to these two columns.
    *   Row 1: T $\rightarrow$ T is T.
    *   Row 2: F $\rightarrow$ F is T.
    *   Row 3: T $\rightarrow$ T is T.
    *   Row 4: T $\rightarrow$ T is T.

Notice that the final column is all True! What does this mean?

#### Tautologies, Contradictions, and Contingencies

The results of a truth table can tell us important things about the compound proposition:

*   **Tautology:** A proposition that is **always true**, regardless of the truth values of its atomic propositions. The final column of its truth table will contain only 'T'.
    *   **Example:** Our proposition $(\neg p \lor q) \rightarrow (p \rightarrow q)$ from Example 2 is a tautology.
    *   **Why it matters (CO1):** Tautologies are fundamental to logical reasoning. If you can show an argument's conclusion is a tautology based on its premises, you've proven the argument is valid. Think of them as unbreakable logical truths.

*   **Contradiction:** A proposition that is **always false**, regardless of the truth values of its atomic propositions. The final column of its truth table will contain only 'F'.
    *   **Example:** $p \land \neg p$. Let's check:
        | $p$ | $\neg p$ | $p \land \neg p$ |
        | :--: | :-----: | :---------------: |
        | T | F | F |
        | F | T | F |
        This is a contradiction. It makes sense – something cannot be both true and not true at the same time!

*   **Contingency:** A proposition that is **neither a tautology nor a contradiction**. Its truth value depends on the truth values of its atomic propositions. The final column will have a mix of 'T' and 'F'.
    *   **Example:** $p \rightarrow q$ (from Example 1) is a contingency. Its truth value depends on whether $p$ is true and $q$ is false.

#### Logical Equivalence

This is where truth tables really help us with **CO1**. Two compound propositions are said to be **logically equivalent** if they have the same truth value for all possible truth value assignments of their propositional variables. We denote logical equivalence by $\equiv$ or $\Leftrightarrow$.

To show that two propositions, say $A$ and $B$, are logically equivalent, we construct a truth table for both $A$ and $B$ side-by-side, or we construct a truth table for $A \leftrightarrow B$. If $A \leftrightarrow B$ is a tautology, then $A$ and $B$ are logically equivalent.

**Example 3: De Morgan's Laws**

One of the most important sets of logical equivalences are De Morgan's Laws. They tell us how to distribute a negation over a conjunction or disjunction.

*   **First De Morgan's Law:** $\neg (p \land q) \equiv \neg p \lor \neg q$
    (The negation of "p and q" is equivalent to "not p or not q.")

*   **Second De Morgan's Law:** $\neg (p \lor q) \equiv \neg p \land \neg q$
    (The negation of "p or q" is equivalent to "not p and not q.")

Let's prove the first one using a truth table: $\neg (p \land q) \equiv \neg p \lor \neg q$.

| $p$ | $q$ | $p \land q$ | $\neg (p \land q)$ | $\neg p$ | $\neg q$ | $\neg p \lor \neg q$ |
| :--: | :--: | :-------: | :----------------: | :-----: | :-----: | :------------------: |
| T | T | T | F | F | F | F |
| T | F | F | T | F | T | T |
| F | T | F | T | T | F | T |
| F | F | F | T | T | T | T |

**Observation:** Look at the column for $\neg (p \land q)$ and the column for $\neg p \lor \neg q$. They are identical! This confirms that $\neg (p \land q)$ and $\neg p \lor \neg q$ are logically equivalent.

**Analogy for De Morgan's Laws:**
*   **First Law:** Imagine you can't eat your cake *and* have ice cream with it. This is the same as saying you either can't eat your cake, *or* you can't have ice cream (or both!).
*   **Second Law:** Imagine your friend says, "I'm not going to the party *or* the concert." This means they are definitely not going to the party, *and* they are also definitely not going to the concert.

**Why is this important?**
Knowing these equivalences allows us to rewrite complex logical statements into simpler, equivalent forms. This is incredibly useful in simplifying Boolean expressions in computer science, designing logic circuits, and proving theorems. For example, if you're stuck with a statement like $\neg (x > 5 \land y < 2)$, you can rewrite it using De Morgan's law as $\neg (x > 5) \lor \neg (y < 2)$, which simplifies to $x \le 5 \lor y \ge 2$. Much clearer, right?

#### Other Important Equivalences (often found in Grimaldi or Veerarajan)

You'll encounter many other useful logical equivalences. It's a good idea to familiarize yourself with them, as they're like a toolbox for manipulating logical statements.

*   **Commutative Laws:**
    *   $p \lor q \equiv q \lor p$
    *   $p \land q \equiv q \land p$
*   **Associative Laws:**
    *   $(p \lor q) \lor r \equiv p \lor (q \lor r)$
    *   $(p \land q) \land r \equiv p \land (q \land r)$
*   **Distributive Laws:**
    *   $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$
    *   $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$
*   **Identity Laws:**
    *   $p \lor F \equiv p$
    *   $p \land T \equiv p$
*   **Idempotent Laws:**
    *   $p \lor p \equiv p$
    *   $p \land p \equiv p$
*   **Absorption Laws:**
    *   $p \lor (p \land q) \equiv p$
    *   $p \land (p \lor q) \equiv p$
*   **Implication Law:**
    *   $p \rightarrow q \equiv \neg p \lor q$ (We used this implicitly in Example 2! This is a HUGE one.)
*   **Biconditional Law:**
    *   $p \leftrightarrow q \equiv (p \rightarrow q) \land (q \rightarrow p)$

**(Connecting to CO1):** These equivalences are the tools we use to transform statements, simplify them, and ultimately prove their equivalence. Understanding and being able to apply them will directly help you achieve CO1. For instance, proving that a statement is a tautology often involves reducing it to a known tautology using these equivalences.

#### Practice Makes Perfect!

The best way to get comfortable with truth tables is to practice. Try building truth tables for statements involving three or even four propositions. Experiment with different combinations of connectives.

**Exam Tip:** In exams, you'll often be asked to:
1.  Construct a truth table for a given compound proposition.
2.  Determine if a proposition is a tautology, contradiction, or contingency.
3.  Prove or disprove the logical equivalence of two propositions using truth tables.
4.  Simplify logical expressions using logical equivalences.

**Common Pitfall:** Be very careful with the order of operations and the truth table definitions, especially for implication ($\rightarrow$) and the conditional statements. A tiny mistake in one cell can cascade and ruin your whole table. Double-check your work, especially when combining sub-results.

#### Summary of Key Takeaways

*   **Propositions** are declarative sentences that are either true or false.
*   **Logical connectives** ($\neg, \land, \lor, \rightarrow, \leftrightarrow$) combine propositions.
*   **Truth tables** systematically show the truth values of compound propositions for all input combinations.
*   A truth table with $n$ atomic propositions has $2^n$ rows.
*   **Tautologies** are always true, **contradictions** are always false, and **contingencies** depend on the input.
*   **Logical equivalence** means two propositions have the same truth values in all cases. This is shown by their biconditional being a tautology.
*   Familiarizing yourself with common logical equivalences (like De Morgan's laws and the implication law) is crucial for simplifying and proving statements.

Truth tables are your fundamental tool for understanding and manipulating logic. They provide a concrete, step-by-step method for analyzing logical statements, which is essential for everything we'll do in this course, especially as we move towards building and verifying logical arguments (CO1).

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
What is the difference between an inclusive OR and an exclusive OR (XOR)?

**Answer:**
The standard logical disjunction ($\lor$, OR) is *inclusive*. This means that $p \lor q$ is true if $p$ is true, $q$ is true, or *both* $p$ and $q$ are true.
The exclusive OR (XOR), often denoted by $\oplus$, is *exclusive*. $p \oplus q$ is true if $p$ is true *or* $q$ is true, but *not both*.

Let's see this in a truth table:

| $p$ | $q$ | $p \lor q$ (Inclusive OR) | $p \oplus q$ (Exclusive OR) |
| :--: | :--: | :-----------------------: | :------------------------: |
| T | T | T | F |
| T | F | T | T |
| F | T | T | T |
| F | F | F | F |

You can see that the only difference is in the first row: when both $p$ and $q$ are true, $p \lor q$ is true, but $p \oplus q$ is false.

**Question 2 (Exam-Oriented - Truth Table Construction):**
Construct a truth table for the proposition $(p \lor q) \rightarrow (q \land p)$. Determine if this proposition is a tautology, contradiction, or contingency.

**Answer:**
We need to evaluate $(p \lor q) \rightarrow (q \land p)$.
*   Atomic propositions: $p, q$. Number of rows: $2^2 = 4$.

| $p$ | $q$ | $p \lor q$ | $q \land p$ | $(p \lor q) \rightarrow (q \land p)$ |
| :--: | :--: | :-------: | :-------: | :--------------------------------: |
| T | T | T | T | T |
| T | F | T | F | F |
| F | T | T | F | F |
| F | F | F | F | T |

**Analysis:**
The final column contains both 'T' and 'F' values. Therefore, the proposition $(p \lor q) \rightarrow (q \land p)$ is a **contingency**.

**Question 3 (Exam-Oriented - Logical Equivalence):**
Show that $\neg (p \lor q)$ is logically equivalent to $\neg p \land \neg q$ using a truth table.

**Answer:**
We need to show $\neg (p \lor q) \equiv \neg p \land \neg q$.

| $p$ | $q$ | $p \lor q$ | $\neg (p \lor q)$ | $\neg p$ | $\neg q$ | $\neg p \land \neg q$ |
| :--: | :--: | :-------: | :----------------: | :-----: | :-----: | :------------------: |
| T | T | T | F | F | F | F |
| T | F | T | F | F | T | F |
| F | T | T | F | T | F | F |
| F | F | F | T | T | T | T |

**Analysis:**
Comparing the column for $\neg (p \lor q)$ and the column for $\neg p \land \neg q$, we see that they are identical for all combinations of truth values of $p$ and $q$. Therefore, $\neg (p \lor q)$ is logically equivalent to $\neg p \land \neg q$. This is the second of De Morgan's Laws.

**Question 4 (Conceptual/Application):**
The statement "If you study hard, you will pass the exam" can be represented logically. If the statement is false, what must be true about the situation?

**Answer:**
Let $p$ be "You study hard" and $q$ be "You will pass the exam." The statement is $p \rightarrow q$.
An implication $p \rightarrow q$ is false *only* when the hypothesis ($p$) is true and the conclusion ($q$) is false.
Therefore, if the statement "If you study hard, you will pass the exam" is false, it means that **you studied hard (p is True), but you did not pass the exam (q is False)**. In all other scenarios (you didn't study hard and passed, you didn't study hard and failed, or you studied hard and passed), the implication itself is considered true. This aligns with the truth table for implication and is crucial for understanding logical proofs (CO1).
